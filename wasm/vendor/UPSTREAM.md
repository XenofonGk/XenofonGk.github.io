# Vendored sources

Both are copied verbatim; nothing in `vendor/` differs from upstream.

| Files | Upstream | Commit |
|---|---|---|
| `train_yard.c`, `train_yard.h` | `XenofonGk/train-yard-manager`, `root/SourceCode/Project/` | `216674ecd9e9a5e86045cd64ddd09c94a6caf9bc` |
| `arena/*` | `XenofonGk/Cpp`, `ArenaCore/{include,src}` (without `src/input.cpp`) | `6e86eee6c07d3afd640d889bf5e261e1b7af506f` |

## History: removeCar pull capacity

`removeCar` once accepted removing an engine even when the remaining engines
could not pull the freight, leaving a train `isTrainSafe` reports as unsafe.
The fix was first applied here and then upstreamed in `216674e`, together with
upstream's own regression test (AT-15) and a test runner that exits nonzero on
failure. `wasm/tests/train_yard_regression.c` covers the same case for this
build.

To check a refresh: copy the files, `bash wasm/build.sh`, then
`bash wasm/tests/run.sh`.
