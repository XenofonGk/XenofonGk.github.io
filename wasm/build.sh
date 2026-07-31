#!/usr/bin/env bash
#
# Compiles the train yard validator to WebAssembly for the site demo.
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
  -s EXPORTED_FUNCTIONS='["_ty_create","_ty_destroy","_ty_add_car","_ty_remove_car","_ty_is_safe","_ty_pull_capacity","_ty_car_count","_ty_num_engines","_ty_total_weight","_ty_car_type","_ty_car_weight","_ty_max_cars","_malloc","_free"]'

echo "built:"
ls -la "$OUT"
