# Local changes to vendored sources

## train_yard.c — `removeCar` did not re-check pull capacity

Upstream: `XenofonGk/train-yard-manager` at `fc5e98f25d6fa275c1cb32bc204324364efd60b7`,
`root/SourceCode/Project/train_yard.c`.

`addCar` refuses freight the engines cannot pull (`engines * 5000`), and
`isTrainSafe` checks the same rule, but `removeCar` never did. Removing an
engine from a train whose freight needed every engine was accepted and left a
train that `isTrainSafe` reports as unsafe.

Reproduction (before the fix): two 1,000 engines, two 3,000 food cars, then
`removeCar(train, 0)` returned 0 and left 6,000 of freight behind 5,000 of pull.
`wasm/tests/train_yard_regression.c` encodes this and exited 1 against the
unmodified file.

Fix: after the existing checks on the candidate copy, sum the remaining freight
and refuse with `REJECT_PULL_CAPACITY` if it exceeds the remaining engines'
capacity. The refusal happens before the copy is written back, so the train is
unchanged. No header or API change; the reject code already existed.

Follow-up (not done from here): apply the same change and test upstream in
`train-yard-manager`, then re-vendor from the new commit.

`vendor/arena/*` is unmodified.
