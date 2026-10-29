// Native side of the ArenaCore parity check.
//
// Applies one operation per stdin line through the ac_* accessor layer the
// browser calls and prints the whole roster as numbers. Names and the fight log
// are deliberately left out: parity is asserted on state, not on text.
//
// Operations:  seed <n>   pair <left> <right>   round   lvl <i>   pow <i> <v>

#include <cstdio>
#include <cstring>

extern "C" {
void ac_reset(unsigned int seed);
void ac_destroy();
int ac_roster_size();
void ac_set_fighters(int left, int right);
int ac_fight_round();
int ac_health(int i);
int ac_max_health(int i);
int ac_level(int i);
int ac_damage(int i);
int ac_defence(int i);
int ac_is_alive(int i);
int ac_kind(int i);
void ac_level_up(int i);
void ac_add_power(int i, int value);
}

static void printState(int result) {
    std::printf("result=%d size=%d |", result, ac_roster_size());
    for (int i = 0; i < ac_roster_size(); i++)
        std::printf(" [%d %d/%d L%d d%d f%d a%d]", ac_kind(i), ac_health(i),
                    ac_max_health(i), ac_level(i), ac_damage(i), ac_defence(i),
                    ac_is_alive(i));
    std::printf("\n");
}

int main() {
    char line[128];
    while (std::fgets(line, sizeof line, stdin)) {
        int a = 0, b = 0, result = 0;
        unsigned int s = 0;
        if (line[0] == '#' || line[0] == '\n') continue;
        if (std::sscanf(line, "seed %u", &s) == 1) {
            ac_reset(s);
        } else if (std::sscanf(line, "pair %d %d", &a, &b) == 2) {
            ac_set_fighters(a, b);
        } else if (std::strncmp(line, "round", 5) == 0) {
            result = ac_fight_round();
        } else if (std::sscanf(line, "lvl %d", &a) == 1) {
            ac_level_up(a);
        } else if (std::sscanf(line, "pow %d %d", &a, &b) == 2) {
            ac_add_power(a, b);
        } else {
            std::fprintf(stderr, "unknown op: %s", line);
            return 2;
        }
        printState(result);
    }
    ac_destroy();
    return 0;
}
