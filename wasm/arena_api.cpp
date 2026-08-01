// Accessor layer over the ArenaCore classes for the browser demo.
//
// Nothing here reimplements the model. Warrior and Mage are constructed and
// asked for damage exactly as main.cpp does it; this file only exposes a C ABI
// that JavaScript can call, because WebAssembly exports cannot be C++ methods
// with mangled names.
//
// The one piece of logic that lives here is the turn loop. ArenaCore computes
// damage but never applies it — attack() returns a number and nothing subtracts
// it from anyone — so a fight has to be driven from outside the model. That is
// the same thing main.cpp's menu does, and it is done through the class's own
// operator+= rather than by reaching into its fields.

#include "Warrior.h"
#include "Mage.h"
#include <emscripten/emscripten.h>
#include <cstring>

using GameArena::Character;
using GameArena::Mage;
using GameArena::Warrior;

namespace {

    // The two combatants and whose turn it is. A single fight at a time is all
    // the demo needs, so this avoids handing raw pointers to JavaScript.
    Character* g_a = nullptr;
    Character* g_b = nullptr;
    int g_turn = 0;      // 0 = A attacks, 1 = B attacks
    int g_lastDamage = 0;
    char g_nameBuf[64];

    void clearFight() {
        delete g_a;
        delete g_b;
        g_a = nullptr;
        g_b = nullptr;
        g_turn = 0;
        g_lastDamage = 0;
    }

    Character* side(int which) {
        return which == 0 ? g_a : g_b;
    }
}

extern "C" {

/* Builds a Warrior and a Mage with the given stats and starts a fight.
   Skill values arrive as a flat array because passing a C++ container across
   the ABI is not possible. */
EMSCRIPTEN_KEEPALIVE
void ac_start(const char* warriorName, int warriorHealth, int warriorLevel,
              int* warriorSkills, int warriorSkillCount,
              const char* mageName, int mageHealth, int mageLevel,
              int* magePower, int mageSpellCount) {
    clearFight();
    g_a = new Warrior(warriorName, warriorHealth, warriorLevel, warriorSkills, warriorSkillCount);
    g_b = new Mage(mageName, mageHealth, mageLevel, magePower, mageSpellCount);
}

EMSCRIPTEN_KEEPALIVE
void ac_destroy() {
    clearFight();
}

/* Advances one turn: the active combatant attacks, the other loses that much
   health. Returns the damage dealt, or -1 if the fight is already over.

   attack() is called through the Character base, so which subclass is acting
   decides whether skills or spell power are summed — the caller never asks. */
EMSCRIPTEN_KEEPALIVE
int ac_step() {
    if (g_a == nullptr || g_b == nullptr) return -1;
    if (!g_a->isAlive() || !g_b->isAlive()) return -1;

    Character* attacker = g_turn == 0 ? g_a : g_b;
    Character* defender = g_turn == 0 ? g_b : g_a;

    const int damage = attacker->attack();
    *defender += -damage;   // Character::operator+=(int) adjusts health

    g_lastDamage = damage;
    g_turn = 1 - g_turn;
    return damage;
}

EMSCRIPTEN_KEEPALIVE int ac_turn()        { return g_turn; }
EMSCRIPTEN_KEEPALIVE int ac_last_damage() { return g_lastDamage; }

EMSCRIPTEN_KEEPALIVE
int ac_health(int which) {
    Character* c = side(which);
    return c ? c->getHealth() : 0;
}

EMSCRIPTEN_KEEPALIVE
int ac_level(int which) {
    Character* c = side(which);
    return c ? c->getLevel() : 0;
}

EMSCRIPTEN_KEEPALIVE
int ac_is_alive(int which) {
    Character* c = side(which);
    return (c && c->isAlive()) ? 1 : 0;
}

/* Damage the combatant would deal right now, so the interface can show it
   before a turn is taken. */
EMSCRIPTEN_KEEPALIVE
int ac_damage(int which) {
    Character* c = side(which);
    return c ? c->calculateDamage() : 0;
}

EMSCRIPTEN_KEEPALIVE
const char* ac_name(int which) {
    Character* c = side(which);
    if (!c) return "";
    std::strncpy(g_nameBuf, c->getName(), sizeof(g_nameBuf) - 1);
    g_nameBuf[sizeof(g_nameBuf) - 1] = '\0';
    return g_nameBuf;
}

/* Levels a combatant up through the class's own prefix operator. */
EMSCRIPTEN_KEEPALIVE
void ac_level_up(int which) {
    Character* c = side(which);
    if (c) ++(*c);
}

/* Appends a skill or spell. += is declared on the concrete types, not on
   Character, so the pointer has to be narrowed first — the same reason
   main.cpp uses dynamic_cast here. */
EMSCRIPTEN_KEEPALIVE
void ac_add_power(int which, int value) {
    Character* c = side(which);
    if (!c) return;
    if (Warrior* w = dynamic_cast<Warrior*>(c)) {
        *w += value;
    } else if (Mage* m = dynamic_cast<Mage*>(c)) {
        *m += value;
    }
}

} // extern "C"
