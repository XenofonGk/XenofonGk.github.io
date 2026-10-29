/*
 * Native side of the train yard parity check.
 *
 * Reads one operation per line from stdin, applies it through the same ty_*
 * accessor layer the browser calls, and prints the resulting state as numbers
 * only. parity.mjs drives the shipped WebAssembly with the same operations and
 * prints the same line format, so the two outputs can be compared verbatim.
 *
 * Operations:  add <type> <weight>   rm <index>   reset   # comment
 */

#include <stdio.h>
#include <string.h>
#include "train_yard.h"

Train* ty_create(void);
void ty_destroy(Train* train);
int ty_add_car(Train* train, int type, int weight);
int ty_remove_car(Train* train, int index);
int ty_is_safe(const Train* train);
int ty_pull_capacity(const Train* train);
int ty_car_count(const Train* train);
int ty_num_engines(const Train* train);
float ty_total_weight(const Train* train);
int ty_car_type(const Train* train, int index);
float ty_car_weight(const Train* train, int index);
int ty_last_reject_reason(void);

static void print_state(const Train* t, int rc)
{
    int i;
    int n = ty_car_count(t);
    printf("rc=%d reason=%d cars=%d engines=%d weight=%.2f pull=%d safe=%d |",
           rc, ty_last_reject_reason(), n, ty_num_engines(t),
           ty_total_weight(t), ty_pull_capacity(t), ty_is_safe(t));
    for (i = 0; i < n; i++)
        printf(" %d:%.2f", ty_car_type(t, i), ty_car_weight(t, i));
    printf("\n");
}

int main(void)
{
    char line[128];
    Train* t = ty_create();

    while (fgets(line, sizeof line, stdin)) {
        int a, b, rc;
        if (line[0] == '#' || line[0] == '\n')
            continue;
        if (sscanf(line, "add %d %d", &a, &b) == 2) {
            rc = ty_add_car(t, a, b);
        } else if (sscanf(line, "rm %d", &a) == 1) {
            rc = ty_remove_car(t, a);
        } else if (strncmp(line, "reset", 5) == 0) {
            ty_destroy(t);
            t = ty_create();
            rc = 0;
        } else {
            fprintf(stderr, "unknown op: %s", line);
            return 2;
        }
        print_state(t, rc);
    }
    ty_destroy(t);
    return 0;
}
