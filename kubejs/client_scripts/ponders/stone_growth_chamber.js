onEvent("ponder.registry", event => {
    event.create("createastral:stone_growth_chamber_dummy").scene("set_replace_modify_tutorial", "Stone Growth Chamber", (scene, util) => {
        scene.showBasePlate();
        scene.world.showSection([0, 1, 0, 4, 3, 4], Facing.DOWN);
        scene.idle(10);
				scene.world.setBlocks([1, 1, 3,], "create:copper_casing", true);
        scene.world.setBlocks([2, 1, 3,], "create:copper_casing", true);
        scene.world.setBlocks([3, 1, 3,], "create:copper_casing", true);
				scene.world.setBlocks([1, 1, 2,], "create:copper_casing", true);
        scene.world.setBlocks([2, 1, 2,], "create:copper_casing", true);
        scene.world.setBlocks([3, 1, 2,], "create:copper_casing", true);
				scene.world.setBlocks([1, 1, 1,], "create:copper_casing", true);
        scene.world.setBlocks([2, 1, 1,], "create:copper_casing", true);
        scene.world.setBlocks([3, 1, 1,], "create:copper_casing", true);
				
        scene.idle(40);
        scene.world.setBlocks([1, 2, 3,], "minecraft:glass", true);
        scene.world.setBlocks([2, 2, 3,], "minecraft:glass", true);
        scene.world.setBlocks([3, 2, 3,], "minecraft:glass", true);
        scene.world.setBlocks([1, 2, 2,], "minecraft:glass", true);
        scene.world.setBlocks([2, 2, 2,], "minecraft:lava", true);
        scene.world.setBlocks([3, 2, 2,], "minecraft:glass", true);
        scene.world.setBlocks([1, 2, 1,], "minecraft:glass", true);
        scene.world.setBlocks([2, 2, 1,], "createastral:stone_growth_chamber_dummy", true);
        scene.world.setBlocks([3, 2, 1,], "minecraft:glass", true);
				
        scene.idle(40);
        scene.world.setBlocks([1, 3, 3,], "create:copper_casing", true);
        scene.world.setBlocks([2, 3, 3,], "create:copper_casing", true);
        scene.world.setBlocks([3, 3, 3,], "create:copper_casing", true);
        scene.world.setBlocks([1, 3, 2,], "create:copper_casing", true);
        scene.world.setBlocks([2, 3, 2,], "create:copper_casing", true);
        scene.world.setBlocks([3, 3, 2,], "create:copper_casing", true);
        scene.world.setBlocks([1, 3, 1,], "create:copper_casing", true);
        scene.world.setBlocks([2, 3, 1,], "create:copper_casing", true);
        scene.world.setBlocks([3, 3, 1,], "create:copper_casing", true);
        scene.idle(10);
        scene.text(60, "This is the Stone Growth Chamber", [3, 2.5, 3])
        scene.idle(70);
        scene.text(80, "Use an andesite funnel or other means to output andesite", [2, 2.5, 1])
        scene.idle(70);
        scene.text(80, "When built on other planets, that planet's regional stone will be generated.", [3, 2.5, 3])
        scene.idle(70);
    });
});