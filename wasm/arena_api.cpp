// Accessor layer over the ArenaCore classes for the browser demo.
//
// Nothing here reimplements the game. Damage, defence, the roll and the turn
// order all come from the compiled C++ — this file only exposes a C ABI, since
// WebAssembly exports cannot be C++ methods with mangled names.
//
// The roster is built from the same values as the repository's data/roster.txt.
// It is duplicated rather than read from a file because the browser has no
// filesystem, and a WASM-side copy is easier to keep honest than shipping the
// file and mounting it.

#include "Arena.h"
#include "Warrior.h"
#include "Mage.h"
#include <emscripten/emscripten.h>
#include <cstring>
#include <sstream>
#include <string>

using GameArena::Arena;
using GameArena::Character;
using GameArena::Mage;
using GameArena::Warrior;

namespace {

    Arena* g_arena = nullptr;
    int g_left = 0;             // roster index of the player's fighter
    int g_right = 2;            // roster index of the opponent
    std::string g_log;          // last exchange, as the engine printed it
    char g_buf[256];

    /* Mirrors data/roster.txt. Kept in the same order so an index here means
       the same combatant as an index there. */
    void buildRoster() {
        delete g_arena;
        g_arena = new Arena();

        int aragorn[] = {8, 8, 8};
        int gimli[]   = {9, 10};
        int gandalf[] = {10, 10, 10};
        int saruman[] = {14, 15};

        *g_arena += new Warrior("Aragorn", 145, 5, aragorn, 3);
        *g_arena += new Warrior("Gimli",   160, 4, gimli,   2);
        *g_arena += new Mage("Gandalf",     80, 8, gandalf, 3);
        *g_arena += new Mage("Saruman",     75, 7, saruman, 2);
    }

    Character* at(int i) {
        return g_arena ? g_arena->getCharacter(i) : nullptr;
    }

    const char* copyOut(const std::string& s) {
        std::strncpy(g_buf, s.c_str(), sizeof(g_buf) - 1);
        g_buf[sizeof(g_buf) - 1] = '\0';
        return g_buf;
    }
}

extern "C" {

/* Rebuilds the roster and seeds the generator. A fixed seed makes a run
   reproducible, which is what lets the browser replay the same fight as the
   native binary; pass 0 to let it vary. */
EMSCRIPTEN_KEEPALIVE
void ac_reset(unsigned int seed) {
    buildRoster();
    if (seed != 0) Character::seedCombat(seed);
    g_log.clear();
}

EMSCRIPTEN_KEEPALIVE
void ac_destroy() {
    delete g_arena;
    g_arena = nullptr;
}

EMSCRIPTEN_KEEPALIVE
int ac_roster_size() {
    return g_arena ? g_arena->size() : 0;
}

EMSCRIPTEN_KEEPALIVE
void ac_set_fighters(int left, int right) {
    g_left = left;
    g_right = right;
}

/* Runs one exchange through Arena::fight, capturing what the engine printed so
   the interface can show the engine's own account rather than a retelling.
   Returns the winner's roster index, or -1 while both are standing. */
EMSCRIPTEN_KEEPALIVE
int ac_fight_round() {
    if (!g_arena) return -1;
    std::ostringstream out;
    const int winner = g_arena->fight(g_left, g_right, out);
    g_log = out.str();
    return winner;
}

EMSCRIPTEN_KEEPALIVE
const char* ac_last_log() {
    return copyOut(g_log);
}

EMSCRIPTEN_KEEPALIVE int ac_health(int i)     { Character* c = at(i); return c ? c->getHealth() : 0; }
EMSCRIPTEN_KEEPALIVE int ac_max_health(int i) { Character* c = at(i); return c ? c->getMaxHealth() : 0; }
EMSCRIPTEN_KEEPALIVE int ac_level(int i)      { Character* c = at(i); return c ? c->getLevel() : 0; }
EMSCRIPTEN_KEEPALIVE int ac_damage(int i)     { Character* c = at(i); return c ? c->calculateDamage() : 0; }
EMSCRIPTEN_KEEPALIVE int ac_defence(int i)    { Character* c = at(i); return c ? c->defence() : 0; }
EMSCRIPTEN_KEEPALIVE int ac_is_alive(int i)   { Character* c = at(i); return (c && c->isAlive()) ? 1 : 0; }

EMSCRIPTEN_KEEPALIVE
const char* ac_name(int i) {
    Character* c = at(i);
    return copyOut(c ? c->getName() : "");
}

/* 0 for a Warrior, 1 for a Mage — resolved by asking the object rather than by
   the interface tracking what it created. */
EMSCRIPTEN_KEEPALIVE
int ac_kind(int i) {
    Character* c = at(i);
    if (dynamic_cast<Warrior*>(c)) return 0;
    if (dynamic_cast<Mage*>(c)) return 1;
    return -1;
}

/* Levelling changes damage, defence AND turn order, so it is a real decision
   rather than a cosmetic counter. */
EMSCRIPTEN_KEEPALIVE
void ac_level_up(int i) {
    Character* c = at(i);
    if (c) ++(*c);
}

/* += is declared on the concrete types, not on Character, so the pointer has to
   be narrowed first — the same reason main.cpp uses dynamic_cast here. */
EMSCRIPTEN_KEEPALIVE
void ac_add_power(int i, int value) {
    Character* c = at(i);
    if (!c) return;
    if (Warrior* w = dynamic_cast<Warrior*>(c)) {
        *w += value;
    } else if (Mage* m = dynamic_cast<Mage*>(c)) {
        *m += value;
    }
}

} // extern "C"
