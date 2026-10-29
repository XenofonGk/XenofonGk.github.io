/* Native stand-in so arena_api.cpp compiles outside emscripten for the parity
   driver. Only the one macro the accessor layer uses is needed. */
#pragma once
#define EMSCRIPTEN_KEEPALIVE
