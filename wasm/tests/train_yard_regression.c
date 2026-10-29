/*
 * Native regression checks for vendor/train_yard.c.
 *
 * Self-contained on purpose: it links the vendored validator directly and
 * exits nonzero on the first failed expectation, so a shell or CI step can
 * rely on the exit status instead of reading output.
 *
 *   cc -std=c99 -Wall -Wextra -I wasm/vendor \
 *      wasm/vendor/train_yard.c wasm/tests/train_yard_regression.c -o ty_reg
 */

#include <stdio.h>
#include <string.h>
#include "train_yard.h"

static int g_failures = 0;

#define EXPECT(cond, msg)                                              \
    do {                                                               \
        if (!(cond)) {                                                 \
            fprintf(stderr, "FAIL %s:%d  %s\n", __FILE__, __LINE__, msg); \
            g_failures++;                                              \
        }                                                              \
    } while (0)

/* Two engines pull 10,000; freight of 6,000 needs both. Removing either
   engine would leave 6,000 of freight behind 5,000 of pull, so the removal
   must be refused and the train left exactly as it was. */
static void removing_engine_below_pull_capacity_is_rejected(void)
{
    Train train;
    Train before;
    memset(&train, 0, sizeof train);

    EXPECT(addCar(&train, TYPE_ENGINE, 1000) == 0, "first engine added");
    EXPECT(addCar(&train, TYPE_ENGINE, 1000) == 0, "second engine added");
    EXPECT(addCar(&train, TYPE_FOOD, 3000) == 0, "first freight added");
    EXPECT(addCar(&train, TYPE_FOOD, 3000) == 0, "second freight added");
    EXPECT(isTrainSafe(&train) == 1, "starting train is safe");

    before = train;
    EXPECT(removeCar(&train, 0) == 1, "engine removal is rejected");
    EXPECT(getLastRejectReason() == REJECT_PULL_CAPACITY,
           "rejection cites pull capacity");
    EXPECT(memcmp(&before, &train, sizeof train) == 0,
           "rejected removal leaves the train unchanged");
    EXPECT(isTrainSafe(&train) == 1, "train is still safe after the refusal");
}

/* The same removal is fine once the freight fits behind one engine. */
static void removing_spare_engine_is_allowed(void)
{
    Train train;
    memset(&train, 0, sizeof train);

    addCar(&train, TYPE_ENGINE, 1000);
    addCar(&train, TYPE_ENGINE, 1000);
    addCar(&train, TYPE_FOOD, 5000);

    EXPECT(removeCar(&train, 0) == 0, "spare engine removed");
    EXPECT(getLastRejectReason() == REJECT_NONE, "no reject reason on success");
    EXPECT(train.numEngines == 1, "one engine left");
    EXPECT(train.carCount == 2, "two cars left");
    EXPECT(train.totalWeight == 6000.0f, "weight drops by the engine");
    EXPECT(isTrainSafe(&train) == 1, "train is safe after the removal");
}

/* Every successful removal must leave a safe train behind; walk every index
   of a few trains and check the invariant directly. */
static void successful_removal_never_produces_unsafe_train(void)
{
    static const int layouts[][6][2] = {
        {{0, 800}, {0, 800}, {1, 4000}, {2, 4000}, {1, 1500}, {-1, 0}},
        {{0, 900}, {0, 900}, {0, 900}, {2, 6000}, {1, 5000}, {3, 3000}},
        {{0, 700}, {1, 2000}, {2, 2000}, {1, 900}, {-1, 0}, {-1, 0}},
    };
    size_t l;
    int idx;

    for (l = 0; l < sizeof layouts / sizeof layouts[0]; l++) {
        for (idx = 0; idx < 6; idx++) {
            Train train;
            Train before;
            int k;
            memset(&train, 0, sizeof train);
            for (k = 0; k < 6 && layouts[l][k][0] >= 0; k++)
                EXPECT(addCar(&train, layouts[l][k][0], layouts[l][k][1]) == 0,
                       "layout car added");
            EXPECT(isTrainSafe(&train) == 1, "layout starts safe");
            if (idx >= train.carCount)
                continue;

            before = train;
            if (removeCar(&train, idx) == 0)
                EXPECT(isTrainSafe(&train) == 1,
                       "successful removal leaves a safe train");
            else
                EXPECT(memcmp(&before, &train, sizeof train) == 0,
                       "rejected removal leaves the train unchanged");
        }
    }
}

/* Existing rules the fix must not disturb. */
static void existing_removal_rules_still_hold(void)
{
    Train train;
    memset(&train, 0, sizeof train);

    addCar(&train, TYPE_ENGINE, 1000);
    addCar(&train, TYPE_WOOD, 1000);
    addCar(&train, TYPE_FOOD, 1000);
    addCar(&train, TYPE_OIL, 1000);

    EXPECT(removeCar(&train, 0) == 1, "last engine kept");
    EXPECT(getLastRejectReason() == REJECT_LAST_ENGINE, "cites last engine");
    EXPECT(removeCar(&train, 2) == 1, "wood/oil coupling refused");
    EXPECT(getLastRejectReason() == REJECT_WOOD_OIL_ADJACENT, "cites adjacency");
    EXPECT(removeCar(&train, 9) == 1, "bad index refused");
    EXPECT(getLastRejectReason() == REJECT_BAD_INDEX, "cites bad index");
    EXPECT(train.carCount == 4, "nothing was removed");
}

int main(void)
{
    removing_engine_below_pull_capacity_is_rejected();
    removing_spare_engine_is_allowed();
    successful_removal_never_produces_unsafe_train();
    existing_removal_rules_still_hold();

    if (g_failures) {
        fprintf(stderr, "%d expectation(s) failed\n", g_failures);
        return 1;
    }
    puts("train_yard regression: all expectations passed");
    return 0;
}
