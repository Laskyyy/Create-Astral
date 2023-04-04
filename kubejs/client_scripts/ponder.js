onEvent("ponder.tag", (event) => {
    event.createTag(
        "kubejs:createastral",
        "createastral:astral_singularity",
        "Create: Astral",
        "Some helpful tips",
        [
            Item.of("custommachinery:custom_machine_item", {
                machine: "createastral:electrolyser",
            }),
        ]
    );
    event.createTag(
        "kubejs:tconstruct",
        "tconstruct:seared_table",
        "Tinkers Construct",
        "Tinkers Construct Basics",
        [
            "tconstruct:seared_melter",
            "tconstruct:foundry_controller",
            "tconstruct:seared_faucet",
        ]
    );
});

onEvent("ponder.registry", (event) => {
    event
        .create(
            Item.of("custommachinery:custom_machine_item", {
                machine: "createastral:electrolyser",
            })
        )
        .scene(
            "electrolyser",
            "How to create the electrolyser multiblock",
            "kubejs:electrolyser",
            (scene, util) => {
                let electrolyserPos = [2, 2, 1];
                let electrolyserPos2 = [2, 3, 1];
                let multiblockRange = [
                    [1, 2, 1],
                    [3, 4, 3],
                ];
                scene.world.modifyBlock(
                    [2, 2, 0],
                    () =>
                        Block.id("create:fluid_pipe")
                            .with("south", "true")
                            .with("north", "false")
                            .with("west", "false")
                            .with("up", "false")
                            .with("down", "false"),
                    false
                );

                for (
                    let y = multiblockRange[0][1];
                    y <= multiblockRange[1][1];
                    y++
                ) {
                    for (
                        let x = multiblockRange[0][0];
                        x <= multiblockRange[1][0];
                        x++
                    ) {
                        for (
                            let z = multiblockRange[0][2];
                            z <= multiblockRange[1][2];
                            z++
                        ) {
                            scene.world.showSection([x, y, z], Facing.DOWN);
                        }
                    }
                    scene.idle(10);
                    if (y == 3) {
                        scene
                            .text(30, "Leave a gap in the center", [2, 4, 2])
                            .placeNearTarget()
                            .attachKeyFrame();
                        scene.idle(30);
                    }
                }

                scene
                    .text(
                        40,
                        "Pump water into the bottom of the Electrolyser",
                        electrolyserPos
                    )
                    .placeNearTarget()
                    .attachKeyFrame();

                for (let y = 0; y <= 1; y++) {
                    for (let x = 0; x <= 4; x++) {
                        for (let z = 0; z <= 2; z++) {
                            scene.world.showSection([x, y, z], Facing.UP);
                        }
                    }
                }
                scene.idle(40);
                scene
                    .text(
                        60,
                        "Pump oxygen out of the side of the Electrolyser ",
                        electrolyserPos2
                    )
                    .attachKeyFrame();
                for (let y = 2; y <= 4; y++) {
                    for (let x = 0; x <= 4; x++) {
                        scene.world.showSection([x, y, 0], Facing.SOUTH);
                    }
                    scene.world.showSection([4, y, 1], Facing.WEST);
                }
                scene.idle(10);
                scene.particles
                    .simple(1000, "ad_astra:oxygen_bubble", [3, 5, -0.5])
                    .gravity(-0.1);
            }
        );
    event.printParticleNames();
    event
        .create("tconstruct:seared_melter")
        // .scene(
        //     "melter",
        //     "How to use the seared melter",
        //     "kubejs:melter2",
        //     (scene, util) => {
        //         scene.showBasePlate();
        //         scene.idle(10);
        //         scene.markAsFinished();
        //     }
        // )
        .scene(
            "melter3",
            "How to use the seared melter",
            "kubejs:melter3",
            (scene, util) => {
                scene.world.modifyBlock(
                    [3, 1, 2],
                    (block) => block.with("active", "true"),
                    false
                );
                scene.world.modifyBlock(
                    [3, 2, 2],
                    (block) => block.with("active", "true"),
                    false
                );
                scene.showStructure();
                scene.idle(30);
                scene.world.modifyTileNBT([2, 2, 2], (nbt) => {
                    nbt.render_fluid = {};
                });
                for (let i = 9; i > 0; i--) {
                    scene.world.modifyTileNBT([2, 1, 2], (nbt) => {
                        nbt.timer = i * 20;
                    });
                    scene.idle(0.5);
                }
                scene.idle(100);
                scene.particles
                    .simple(3, "minecraft:smoke", [2, 2, 2])
                    .scale(4);
                scene.world.modifyTileNBT([2, 1, 2], (nbt) => {
                    nbt.Items = [
                        {
                            Count: 1,
                            Slot: 1,
                            id: "minecraft:iron_block",
                        },
                    ];
                });
            }
        );
});
