/*
 * WebAssembly accessor layer for the train yard validator.
 *
 * This file deliberately contains NO validation logic. Every rule — engines at
 * the front, the 20,000 total weight cap, the wood/oil adjacency ban, the
 * engines * 5000 pull capacity — lives in vendor/train_yard.c, which is the
 * same translation unit the MSTest suite exercises. Everything below is either
 * a lifetime helper (create/destroy) or a read-only field accessor.
 *
 * The accessors exist so JavaScript never has to know the byte layout of
 * struct Train. Hardcoding offsets on the JS side would silently break the
 * demo the moment a field is reordered; calling into C cannot.
 */

#include <stdlib.h>
#include "train_yard.h"

/* --- lifetime --- */

Train* ty_create(void)
{
    /* calloc zeroes the struct, matching `Train train = { 0 };` in main.c */
    return (Train*)calloc(1, sizeof(Train));
}

void ty_destroy(Train* train)
{
    free(train);
}

/* --- mutations: thin pass-through to the real implementation --- */

int ty_add_car(Train* train, int type, int weight)
{
    return addCar(train, type, weight);
}

int ty_remove_car(Train* train, int index)
{
    return removeCar(train, index);
}

/* --- queries --- */

int ty_is_safe(const Train* train)
{
    return isTrainSafe(train);
}

int ty_pull_capacity(const Train* train)
{
    return getPullCapacity(train);
}

/* --- read-only field accessors --- */

int ty_car_count(const Train* train)
{
    return train ? train->carCount : 0;
}

int ty_num_engines(const Train* train)
{
    return train ? train->numEngines : 0;
}

float ty_total_weight(const Train* train)
{
    return train ? train->totalWeight : 0.0f;
}

/* Returns the car type at index, or -1 when the index is out of range. */
int ty_car_type(const Train* train, int index)
{
    if (train == NULL || index < 0 || index >= train->carCount)
        return -1;

    return train->inventory[index].type;
}

/* Returns the car weight at index, or 0 when the index is out of range. */
float ty_car_weight(const Train* train, int index)
{
    if (train == NULL || index < 0 || index >= train->carCount)
        return 0.0f;

    return train->inventory[index].weight;
}

/* Exposed so the UI can label limits without duplicating the constants. */
int ty_max_cars(void)
{
    return MAX_CARS;
}
