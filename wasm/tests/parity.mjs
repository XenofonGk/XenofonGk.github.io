// Drives the shipped WebAssembly in public/wasm with the same scenario files the
// native trace drivers read, and compares the two outputs line by line.
//
//   node wasm/tests/parity.mjs <native-train-trace> <native-arena-trace>
//
// Every compared field is a number (result codes, reject reasons, counts,
// weights, capacity, safety, health, level, damage, defence). Names and the
// fight log are text and are never part of the comparison.
//
// Exits nonzero on the first mismatching line, printing both sides.

import { execFileSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const wasmDir = join(here, '..', '..', 'public', 'wasm')
const [trainNative, arenaNative] = process.argv.slice(2)
if (!trainNative || !arenaNative) {
  console.error('usage: node parity.mjs <train_trace> <arena_trace>')
  process.exit(2)
}

// The modules are built for the web and would fetch their .wasm over HTTP.
// instantiateWasm is emscripten's supported hook for supplying the instance
// ourselves, so the exact committed bytes are what gets executed.
async function load(name, exportName) {
  const mod = await import(pathToFileURL(join(wasmDir, `${name}.js`)).href)
  const factory = mod.default ?? mod[exportName]
  const bytes = readFileSync(join(wasmDir, `${name}.wasm`))
  return factory({
    instantiateWasm(imports, done) {
      WebAssembly.instantiate(bytes, imports).then(({ instance }) => done(instance))
      return {}
    },
  })
}

function ops(file) {
  return readFileSync(join(here, 'scenarios', file), 'utf8')
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#'))
}

async function trainTrace(lines) {
  const M = await load('train_yard', 'createTrainYard')
  const f = (n, r, a) => M.cwrap(n, r, a)
  const create = f('ty_create', 'number', [])
  const destroy = f('ty_destroy', null, ['number'])
  const add = f('ty_add_car', 'number', ['number', 'number', 'number'])
  const rm = f('ty_remove_car', 'number', ['number', 'number'])
  const safe = f('ty_is_safe', 'number', ['number'])
  const pull = f('ty_pull_capacity', 'number', ['number'])
  const count = f('ty_car_count', 'number', ['number'])
  const engines = f('ty_num_engines', 'number', ['number'])
  const weight = f('ty_total_weight', 'number', ['number'])
  const type = f('ty_car_type', 'number', ['number', 'number'])
  const carWeight = f('ty_car_weight', 'number', ['number', 'number'])
  const reason = f('ty_last_reject_reason', 'number', [])

  let t = create()
  const out = []
  for (const line of lines) {
    const [op, a, b] = line.split(/\s+/)
    let rc = 0
    if (op === 'add') rc = add(t, Number(a), Number(b))
    else if (op === 'rm') rc = rm(t, Number(a))
    else if (op === 'reset') { destroy(t); t = create() }
    else throw new Error(`unknown op: ${line}`)

    const n = count(t)
    let s = `rc=${rc} reason=${reason()} cars=${n} engines=${engines(t)} ` +
      `weight=${weight(t).toFixed(2)} pull=${pull(t)} safe=${safe(t)} |`
    for (let i = 0; i < n; i++) s += ` ${type(t, i)}:${carWeight(t, i).toFixed(2)}`
    out.push(s)
  }
  destroy(t)
  return out
}

async function arenaTrace(lines) {
  const M = await load('arena', 'createArena')
  const f = (n, r, a) => M.cwrap(n, r, a)
  const reset = f('ac_reset', null, ['number'])
  const size = f('ac_roster_size', 'number', [])
  const pair = f('ac_set_fighters', null, ['number', 'number'])
  const round = f('ac_fight_round', 'number', [])
  const lvl = f('ac_level_up', null, ['number'])
  const pow = f('ac_add_power', null, ['number', 'number'])
  const num = (n) => f(n, 'number', ['number'])
  const [kind, hp, max, level, dmg, def, alive] = [
    'ac_kind', 'ac_health', 'ac_max_health', 'ac_level', 'ac_damage', 'ac_defence', 'ac_is_alive',
  ].map(num)

  const out = []
  for (const line of lines) {
    const [op, a, b] = line.split(/\s+/)
    let result = 0
    if (op === 'seed') reset(Number(a))
    else if (op === 'pair') pair(Number(a), Number(b))
    else if (op === 'round') result = round()
    else if (op === 'lvl') lvl(Number(a))
    else if (op === 'pow') pow(Number(a), Number(b))
    else throw new Error(`unknown op: ${line}`)

    let s = `result=${result} size=${size()} |`
    for (let i = 0; i < size(); i++)
      s += ` [${kind(i)} ${hp(i)}/${max(i)} L${level(i)} d${dmg(i)} f${def(i)} a${alive(i)}]`
    out.push(s)
  }
  return out
}

function compare(label, file, nativeBin, wasmLines) {
  const input = readFileSync(join(here, 'scenarios', file), 'utf8')
  const native = execFileSync(nativeBin, { input, encoding: 'utf8' }).trimEnd().split('\n')
  const opLines = ops(file)
  if (native.length !== wasmLines.length || native.length !== opLines.length) {
    console.error(`${label}: line count differs native=${native.length} wasm=${wasmLines.length} ops=${opLines.length}`)
    return false
  }
  for (let i = 0; i < native.length; i++) {
    if (native[i] !== wasmLines[i]) {
      console.error(`${label}: mismatch after "${opLines[i]}"\n  native ${native[i]}\n  wasm   ${wasmLines[i]}`)
      return false
    }
  }
  console.log(`${label}: ${native.length} states identical (native vs public/wasm)`)
  return true
}

const ok = [
  compare('train_yard', 'train.txt', trainNative, await trainTrace(ops('train.txt'))),
  compare('arena', 'arena.txt', arenaNative, await arenaTrace(ops('arena.txt'))),
].every(Boolean)

process.exit(ok ? 0 : 1)
