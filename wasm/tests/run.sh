#!/usr/bin/env bash
#
# Native regression + native/WebAssembly parity for the compiled demos.
#
#   bash wasm/tests/run.sh
#
# 1. Builds the train yard regression natively with ASan/UBSan and runs it.
# 2. Builds the native trace drivers from the same sources build.sh compiles.
# 3. Runs the shipped public/wasm modules through identical scenarios and
#    compares every numeric field against native output.
#
# Needs a C/C++ compiler and Node. It does not need emscripten: it checks the
# committed binaries, so a source fix without a rebuild fails step 3.
# Exits nonzero on any failure.
set -euo pipefail

cd "$(dirname "$0")/../.."
OUT="$(mktemp -d)"
trap 'rm -rf "$OUT"' EXIT

CC="${CC:-cc}"
CXX="${CXX:-c++}"
SAN="-fsanitize=address,undefined -fno-omit-frame-pointer"
# Sanitizers are not available everywhere (e.g. some musl images); allow
# opting out explicitly rather than silently.
if [ "${NO_SANITIZE:-0}" = "1" ]; then SAN=""; fi

$CC -std=c99 -Wall -Wextra -Werror $SAN -I wasm/vendor \
  wasm/vendor/train_yard.c wasm/tests/train_yard_regression.c -o "$OUT/ty_regression"
"$OUT/ty_regression"

$CC -std=c99 -Wall -Wextra -Werror $SAN -I wasm/vendor \
  wasm/vendor/train_yard.c wasm/train_yard_api.c wasm/tests/train_trace.c -o "$OUT/train_trace"

# The two warnings silenced here are in the vendored ArenaCore headers, which
# are kept verbatim.
$CXX -std=c++17 -Wall -Wextra -Werror -Wno-overloaded-virtual \
  -Wno-inconsistent-missing-override $SAN -I wasm/vendor/arena -I wasm/tests/shim \
  wasm/vendor/arena/Character.cpp wasm/vendor/arena/Warrior.cpp \
  wasm/vendor/arena/Mage.cpp wasm/vendor/arena/Arena.cpp \
  wasm/arena_api.cpp wasm/tests/arena_trace.cpp -o "$OUT/arena_trace"

node wasm/tests/parity.mjs "$OUT/train_trace" "$OUT/arena_trace"
