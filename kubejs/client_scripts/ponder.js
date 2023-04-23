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
            "createastral:shimmering_stone",
        ]
    );
    // event.createTag(
    //     "kubejs:tconstruct",
    //     "tconstruct:seared_table",
    //     "Tinkers Construct",
    //     "Tinkers Construct Basics",
    //     [
    //         "tconstruct:seared_melter",
    //         "tconstruct:foundry_controller",
    //         "tconstruct:seared_faucet",
    //     ]
    // );
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
                scene.world.setBlock(
                    [3, 4, 0],
                    "ad_astra:oxygen_loader",
                    false
                );
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
                scene.world.modifyBlock(
                    [2, 1, 1],
                    () =>
                        Block.id("create:fluid_pipe")
                            .with("south", "false")
                            .with("north", "false")
                            .with("east", "false")
                            .with("west", "true")
                            .with("up", "true")
                            .with("down", "false"),
                    false
                );
                scene.showBasePlate();
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
                    scene.idle(30);
                    if (y == 3) {
                        scene.overlay.showOutline(
                            PonderPalette.GREEN,
                            "test",
                            util.select.position(2, 3, 2),
                            30
                        );
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

                for (let x = 0; x <= 4; x++) {
                    for (let z = 0; z <= 2; z++) {
                        scene.world.showSection([x, 1, z], Facing.EAST);
                    }
                }
                for (let z = 0; z <= 4; z++) {
                    scene.world.showSection([0, 2, z], Facing.EAST);
                }
                scene.idle(40);
                scene
                    .text(
                        30,
                        "Pump oxygen out of the side of the Electrolyser ",
                        electrolyserPos2
                    )
                    .attachKeyFrame();
                for (let y = 2; y <= 3; y++) {
                    for (let x = 0; x <= 4; x++) {
                        scene.world.showSection([x, y, 0], Facing.SOUTH);
                    }
                    scene.world.showSection([4, y, 1], Facing.WEST);
                }
                scene.idle(10);
                scene.particles
                    .simple(60, "ad_astra:oxygen_bubble", [2.7, 5, -0.5])
                    .gravity(-0.1);
                scene.idle(120);
                scene.world.showSection([3, 4, 0], Facing.DOWN);

                scene.idle(10);
                scene
                    .text(
                        100,
                        "Oxygen pumped into the Oxygen Loader can be used to fill up your spacesuits and tanks",
                        [3, 4.5, 0]
                    )
                    .placeNearTarget();
            }
        );
    event
        .create("createastral:shimmering_stone")
        .scene(
            "shimmering_stone",
            "How to create the Moon Portal",
            "kubejs:portal",
            (scene, util) => {
                scene.world.replaceBlocks(
                    util.select.fromTo(2, 1, 2, 3, 1, 2),
                    "minecraft:obsidian",
                    false
                );
                scene.showStructure();
                scene.text(
                    60,
                    "In this pack, the nether is disabled. Instead, items are spread throughout the different planets.",
                    [3, 2, 3]
                );
                scene.idle(40);
                scene
                    .showControls(30, [2, 2, 2], "up")
                    .rightClick()
                    .withItem("minecraft:flint_and_steel");
                scene.world.setBlock(
                    [2, 2, 2],
                    Block.getBlock("minecraft:fire").defaultBlockState(),
                    false
                );

                scene.idle(60);
                [
                    util.select.fromTo(1, 1, 2, 4, 1, 2),
                    util.select.fromTo(1, 2, 2, 1, 5, 2),
                    util.select.fromTo(4, 2, 2, 4, 5, 2),
                    util.select.fromTo(2, 5, 2, 3, 5, 2),
                ].forEach((selection) => {
                    scene.world.replaceBlocks(
                        selection,
                        "createastral:shimmering_stone",
                        true
                    );
                });
                scene.world.setBlock([2, 2, 2], "minecraft:air", false);
                scene
                    .text(
                        40,
                        "There is a new portal added, which takes you to the moon!",
                        [3, 2, 3]
                    )
                    .attachKeyFrame();
                scene
                    .showControls(30, [2, 2, 2], "up")
                    .rightClick()
                    .withItem("createastral:astral_conduit");
                scene.world.setBlocks(
                    util.select.fromTo(2, 2, 2, 3, 4, 2),
                    "customportalapi:customportalblock",
                    true
                );
            }
        );
    // event.printParticleNames();
    // event
    //     .create("tconstruct:seared_melter")
    //     .scene(
    //         "melter3",
    //         "How to use the seared melter",
    //         "kubejs:melter3",
    //         (scene, util) => {
    //             scene.showStructure();
    //             let storedNBT = {};
    //             scene.world.modifyTileNBT([2, 2, 2], (nbt) => {
    //                 storedNBT = nbt;
    //             });
    //             scene.world.modifyBlock(
    //                 [3, 1, 2],
    //                 (block) => block.with("active", "true"),
    //                 false
    //             );
    //             scene.world.modifyBlock(
    //                 [3, 2, 2],
    //                 (block) => block.with("active", "true"),
    //                 false
    //             );
    //             scene.idle(30);
    //             scene.world.modifyTileNBT([2, 2, 2], (nbt) => {
    //                 nbt.render_fluid = {};
    //             });
    //             for (let i = 9; i > 0; i--) {
    //                 scene.world.modifyTileNBT([2, 1, 2], (nbt) => {
    //                     nbt.timer = i * 20;
    //                 });
    //                 scene.idle(0.5);
    //             }
    //             scene.idle(100);
    //             scene.particles
    //                 .simple(3, "minecraft:smoke", [2, 2, 2])
    //                 .scale(4);
    //             scene.world.modifyTileNBT([2, 1, 2], (nbt) => {
    //                 nbt.Items = [
    //                     {
    //                         Count: 1,
    //                         Slot: 1,
    //                         id: "minecraft:iron_block",
    //                     },
    //                 ];
    //             });
    //         }
    //     );
});
