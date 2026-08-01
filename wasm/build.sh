#!/usr/bin/env bash
#
# Compiles the C and C++ demos to WebAssembly for the site.
#
# vendor/train_yard.{c,h} are copied verbatim from:
#   https://github.com/XenofonGk/train-yard-manager
#   commit fc5e98f25d6fa275c1cb32bc204324364efd60b7
#   path   root/SourceCode/Project/
#
# To refresh them, copy the files again from that repo and re-run this script.
# Nothing here modifies the validator; train_yard_api.c only adds accessors.
#
# Requires emscripten:  brew install emscripten
set -euo pipefail

cd "$(dirname "$0")"

# emcc needs Python >= 3.10. macOS ships 3.9 at /usr/bin/python3 and emcc picks
# that up first, so point EMSDK_PYTHON at the Homebrew interpreter emscripten
# was built against.
if [ -x /opt/homebrew/opt/python@3.14/bin/python3.14 ]; then
  export EMSDK_PYTHON=/opt/homebrew/opt/python@3.14/bin/python3.14
fi
OUT="../public/wasm"
mkdir -p "$OUT"

emcc \
  vendor/train_yard.c \
  train_yard_api.c \
  -I vendor \
  -O2 \
  -o "$OUT/train_yard.js" \
  -s MODULARIZE=1 \
  -s EXPORT_ES6=1 \
  -s EXPORT_NAME=createTrainYard \
  -s ENVIRONMENT=web \
  -s ALLOW_MEMORY_GROWTH=1 \
  -s EXPORTED_RUNTIME_METHODS='["cwrap"]' \
  -s EXPORTED_FUNCTIONS='["_ty_create","_ty_destroy","_ty_add_car","_ty_remove_car","_ty_is_safe","_ty_pull_capacity","_ty_car_count","_ty_num_engines","_ty_total_weight","_ty_car_type","_ty_car_weight","_ty_max_cars","_ty_last_reject_reason","_malloc","_free"]'

# --- ArenaCore ------------------------------------------------------------
#
# vendor/arena/* is copied verbatim from:
#   https://github.com/XenofonGk/Cpp   path ArenaCore/{include,src}
#
# Only the I/O-free classes are compiled, Arena included. main.cpp and
# src/input.cpp are left
# out because they read stdin, which does not exist here — that separation is
# what makes the model reusable at all. arena_api.cpp adds accessors only.
emcc \
  vendor/arena/Character.cpp \
  vendor/arena/Warrior.cpp \
  vendor/arena/Mage.cpp \
  vendor/arena/Arena.cpp \
  arena_api.cpp \
  -I vendor/arena \
  -O2 -std=c++17 \
  -o "$OUT/arena.js" \
  -s MODULARIZE=1 \
  -s EXPORT_ES6=1 \
  -s EXPORT_NAME=createArena \
  -s ENVIRONMENT=web \
  -s ALLOW_MEMORY_GROWTH=1 \
  -s EXPORTED_RUNTIME_METHODS='["cwrap","setValue","UTF8ToString"]' \
  -s EXPORTED_FUNCTIONS='["_ac_reset","_ac_destroy","_ac_roster_size","_ac_set_fighters","_ac_fight_round","_ac_last_log","_ac_health","_ac_max_health","_ac_level","_ac_damage","_ac_defence","_ac_is_alive","_ac_name","_ac_kind","_ac_level_up","_ac_add_power","_malloc","_free"]'

echo "built:"
ls -la "$OUT"
