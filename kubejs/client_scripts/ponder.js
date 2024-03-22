onEvent("ponder.tag", (event) => {
    event.createTag(
        "kubejs:createastral",
        "createastral:astral_singularity",
        "Create: Astral",
        "Some helpful tips",
        ["createastral:electrolyser_dummy", "createastral:shimmering_stone"]
    );
    event.createTag(
        "kubejs:tconstruct",
        "tconstruct:seared_table",
        "Tinkers Construct",
        "Tinkers Construct Basics",
        [
            "tconstruct:seared_melter",
            // "tconstruct:foundry_controller",
            // "tconstruct:seared_faucet",
        ]
    );
});

onEvent("ponder.registry", (event) => {
    // Registers a ponder to the custom machine block, so create offers to ponder
    // This should never actually be played, as the ponder should be overwritten
    // using NBT Ponders
    event
        .create("custommachinery:custom_machine_item")
        .scene(
            "custom_machine_item",
            "You shouldn't see this ponder, it's a debug thing.",
            "kubejs:electrolyser",
            (scene, util) => {}
        );

    // The following are the actually relevant ponders
    event
        .create("createastral:electrolyser_dummy")
        .scene(
            "electrolyser",
            "How to create the electrolyser multiblock",
            "kubejs:electrolyser",
            (scene, util) => {
                const electrolyserPos = [2, 2, 1];
                const electrolyserPos2 = [2, 3, 1];
                const multiblockRange = [
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
    event
        .create("tconstruct:seared_melter")
        .scene(
            "melter",
            "How to use the seared melter",
            "kubejs:melter",
            (scene, util) => {
                scene.showStructure();
                scene.text(
                    60,
                    "This is an example of a basic seared melter setup",
                    [2, 2, 2]
                );
                scene.idle(60);
                scene.overlay.showOutline(
                    PonderPalette.GREEN,
                    "test",
                    [2, 1, 2],
                    60
                );
                scene
                    .text(
                        50,
                        "First, a seared heater is placed, which can be filled with fuel",
                        [2, 1, 2]
                    )
                    .attachKeyFrame();
                scene.idle(60);
                scene.overlay.showOutline(
                    PonderPalette.GREEN,
                    "test",
                    [2, 2, 2],
                    60
                );
                scene
                    .text(
                        80,
                        "Then, a melter is placed on top, and when the heater below is fueled, it can melt ores into liquid",
                        [2, 2, 2]
                    )
                    .attachKeyFrame();
                scene.idle(85);
                let faucet1 = util.select.position(1, 2, 2);
                let faucet2 = util.select.position(3, 2, 2);

                scene.overlay.showOutline(
                    PonderPalette.GREEN,
                    "test",
                    faucet1,
                    60
                );
                scene
                    .text(
                        80,
                        "Finally, faucets are placed on the sides, which can be used to pour the liquid into a casting basin or table",
                        [1.5, 2.5, 2]
                    )
                    .attachKeyFrame();
                scene.idle(85);
                scene.world.setBlock([2, 3, 2], "create:fluid_pipe", true);
                scene.world.modifyBlock(
                    [2, 3, 2],
                    () =>
                        Block.id("create:fluid_pipe")
                            .with("south", "false")
                            .with("north", "false")
                            .with("east", "false")
                            .with("west", "false")
                            .with("up", "true")
                            .with("down", "true"),
                    false
                );
                scene
                    .text(
                        60,
                        "Create fluid pipes can be used to transfer the liquid to something like a Spout",
                        [2, 3.5, 2]
                    )
                    .attachKeyFrame();
            }
        );
});

// Registers overrides to show correct ponders
onEvent("ponder.override", (event) => {
    /** @type {ItemStackJS} */
    const item = event.getItem();

    // Custom machines are based on _dummy blocks, where the actual ponders are registered
    /** @type {`createastral:${string}`} */
    const machineId = item.nbt.machine;
    if (machineId) {
        event.override(`${machineId}_dummy`);
    }
});
