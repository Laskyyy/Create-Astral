onEvent("ponder.registry", event => {
    event.create("createastral:stone_growth_chamber_dummy").scene("set_replace_modify_tutorial", "Stone Growth Chamber", (scene, util) => {
        scene.showBasePlate();
        scene.world.showSection([0, 1, 0, 4, 3, 4], Facing.DOWN);
        scene.idle(10);
				scene.world.setBlocks([1, 1, 3,], "minecraft:polished_andesite", true);
        scene.world.setBlocks([2, 1, 3,], "minecraft:polished_andesite", true);
        scene.world.setBlocks([3, 1, 3,], "minecraft:polished_andesite", true);
				scene.world.setBlocks([1, 1, 2,], "minecraft:polished_andesite", true);
        scene.world.setBlocks([2, 1, 2,], "minecraft:polished_andesite", true);
        scene.world.setBlocks([3, 1, 2,], "minecraft:polished_andesite", true);
				scene.world.setBlocks([1, 1, 1,], "minecraft:polished_andesite", true);
        scene.world.setBlocks([2, 1, 1,], "createastral:stone_growth_chamber_dummy", true);
        scene.world.setBlocks([3, 1, 1,], "minecraft:polished_andesite", true);
        scene.text(30, "Polished Andesite", [3, 1, 5])
				
        scene.idle(40);
        scene.world.setBlocks([1, 2, 3,], "minecraft:glass", true);
        scene.world.setBlocks([2, 2, 3,], "minecraft:glass", true);
        scene.world.setBlocks([3, 2, 3,], "minecraft:glass", true);
        scene.world.setBlocks([1, 2, 2,], "minecraft:glass", true);
        scene.world.setBlocks([2, 2, 2,], "minecraft:lava", true);
        scene.world.setBlocks([3, 2, 2,], "minecraft:glass", true);
        scene.world.setBlocks([1, 2, 1,], "minecraft:glass", true);
        scene.world.setBlocks([2, 2, 1,], "minecraft:glass", true);
        scene.world.setBlocks([3, 2, 1,], "minecraft:glass", true);
        scene.text(30, "Lava in the middle", [3, 2, 3])
				
        scene.idle(40);
        scene.world.setBlocks([1, 3, 3,], "minecraft:polished_andesite", true);
        scene.world.setBlocks([2, 3, 3,], "minecraft:polished_andesite", true);
        scene.world.setBlocks([3, 3, 3,], "minecraft:polished_andesite", true);
        scene.world.setBlocks([1, 3, 2,], "minecraft:polished_andesite", true);
        scene.world.setBlocks([2, 3, 2,], "minecraft:polished_andesite", true);
        scene.world.setBlocks([3, 3, 2,], "minecraft:polished_andesite", true);
        scene.world.setBlocks([1, 3, 1,], "minecraft:polished_andesite", true);
        scene.world.setBlocks([2, 3, 1,], "minecraft:polished_andesite", true);
        scene.world.setBlocks([3, 3, 1,], "minecraft:polished_andesite", true);
        scene.idle(10);
        scene.text(60, "This is the Stone Growth Chamber", [3, 2.5, 3])
        scene.idle(70);
        scene.text(80, "Use an Andesite Funnel on the front or a Hopper on the bottom to output Andesite", [2, 1, 1])
        scene.idle(90);
				scene.world.setBlocks([1, 1, 3,], "ad_astra:polished_moon_stone", true);
        scene.world.setBlocks([2, 1, 3,], "ad_astra:polished_moon_stone", true);
        scene.world.setBlocks([3, 1, 3,], "ad_astra:polished_moon_stone", true);
				scene.world.setBlocks([1, 1, 2,], "ad_astra:polished_moon_stone", true);
        scene.world.setBlocks([2, 1, 2,], "ad_astra:polished_moon_stone", true);
        scene.world.setBlocks([3, 1, 2,], "ad_astra:polished_moon_stone", true);
				scene.world.setBlocks([1, 1, 1,], "ad_astra:polished_moon_stone", true);
        scene.world.setBlocks([2, 1, 1,], "createastral:stone_growth_chamber_dummy", true);
        scene.world.setBlocks([3, 1, 1,], "ad_astra:polished_moon_stone", true);
				
        scene.idle(10);
        scene.world.setBlocks([1, 3, 3,], "ad_astra:polished_moon_stone", true);
        scene.world.setBlocks([2, 3, 3,], "ad_astra:polished_moon_stone", true);
        scene.world.setBlocks([3, 3, 3,], "ad_astra:polished_moon_stone", true);
        scene.world.setBlocks([1, 3, 2,], "ad_astra:polished_moon_stone", true);
        scene.world.setBlocks([2, 3, 2,], "ad_astra:polished_moon_stone", true);
        scene.world.setBlocks([3, 3, 2,], "ad_astra:polished_moon_stone", true);
        scene.world.setBlocks([1, 3, 1,], "ad_astra:polished_moon_stone", true);
        scene.world.setBlocks([2, 3, 1,], "ad_astra:polished_moon_stone", true);
        scene.world.setBlocks([3, 3, 1,], "ad_astra:polished_moon_stone", true);
				
        scene.idle(10);
        scene.text(80, "When built using different Polished Stone, the Stone Growth Chamber will generate different types of cobblestone", [3, 2.5, 3])
        scene.idle(90);
        scene.text(80, "This currently works with Andesite, and any default stone from each planet, like Moon Stone and Mars Stone.", [3, 2.5, 3])
        scene.idle(90);
				
				scene.world.setBlocks([1, 1, 3,], "ad_astra:polished_mars_stone", true);
        scene.world.setBlocks([2, 1, 3,], "ad_astra:polished_mars_stone", true);
        scene.world.setBlocks([3, 1, 3,], "ad_astra:polished_mars_stone", true);
				scene.world.setBlocks([1, 1, 2,], "ad_astra:polished_mars_stone", true);
        scene.world.setBlocks([2, 1, 2,], "ad_astra:polished_mars_stone", true);
        scene.world.setBlocks([3, 1, 2,], "ad_astra:polished_mars_stone", true);
				scene.world.setBlocks([1, 1, 1,], "ad_astra:polished_mars_stone", true);
        scene.world.setBlocks([3, 1, 1,], "ad_astra:polished_mars_stone", true);
        scene.world.setBlocks([1, 3, 3,], "ad_astra:polished_mars_stone", true);
        scene.world.setBlocks([2, 3, 3,], "ad_astra:polished_mars_stone", true);
        scene.world.setBlocks([3, 3, 3,], "ad_astra:polished_mars_stone", true);
        scene.world.setBlocks([1, 3, 2,], "ad_astra:polished_mars_stone", true);
        scene.world.setBlocks([2, 3, 2,], "ad_astra:polished_mars_stone", true);
        scene.world.setBlocks([3, 3, 2,], "ad_astra:polished_mars_stone", true);
        scene.world.setBlocks([1, 3, 1,], "ad_astra:polished_mars_stone", true);
        scene.world.setBlocks([2, 3, 1,], "ad_astra:polished_mars_stone", true);
        scene.world.setBlocks([3, 3, 1,], "ad_astra:polished_mars_stone", true);
        scene.idle(25);
				
				scene.world.setBlocks([1, 1, 3,], "ad_astra:polished_glacio_stone", true);
        scene.world.setBlocks([2, 1, 3,], "ad_astra:polished_glacio_stone", true);
        scene.world.setBlocks([3, 1, 3,], "ad_astra:polished_glacio_stone", true);
				scene.world.setBlocks([1, 1, 2,], "ad_astra:polished_glacio_stone", true);
        scene.world.setBlocks([2, 1, 2,], "ad_astra:polished_glacio_stone", true);
        scene.world.setBlocks([3, 1, 2,], "ad_astra:polished_glacio_stone", true);
				scene.world.setBlocks([1, 1, 1,], "ad_astra:polished_glacio_stone", true);
        scene.world.setBlocks([3, 1, 1,], "ad_astra:polished_glacio_stone", true);
        scene.world.setBlocks([1, 3, 3,], "ad_astra:polished_glacio_stone", true);
        scene.world.setBlocks([2, 3, 3,], "ad_astra:polished_glacio_stone", true);
        scene.world.setBlocks([3, 3, 3,], "ad_astra:polished_glacio_stone", true);
        scene.world.setBlocks([1, 3, 2,], "ad_astra:polished_glacio_stone", true);
        scene.world.setBlocks([2, 3, 2,], "ad_astra:polished_glacio_stone", true);
        scene.world.setBlocks([3, 3, 2,], "ad_astra:polished_glacio_stone", true);
        scene.world.setBlocks([1, 3, 1,], "ad_astra:polished_glacio_stone", true);
        scene.world.setBlocks([2, 3, 1,], "ad_astra:polished_glacio_stone", true);
        scene.world.setBlocks([3, 3, 1,], "ad_astra:polished_glacio_stone", true);
        scene.idle(25);
				
				scene.world.setBlocks([1, 1, 3,], "ad_astra:polished_mercury_stone", true);
        scene.world.setBlocks([2, 1, 3,], "ad_astra:polished_mercury_stone", true);
        scene.world.setBlocks([3, 1, 3,], "ad_astra:polished_mercury_stone", true);
				scene.world.setBlocks([1, 1, 2,], "ad_astra:polished_mercury_stone", true);
        scene.world.setBlocks([2, 1, 2,], "ad_astra:polished_mercury_stone", true);
        scene.world.setBlocks([3, 1, 2,], "ad_astra:polished_mercury_stone", true);
				scene.world.setBlocks([1, 1, 1,], "ad_astra:polished_mercury_stone", true);
        scene.world.setBlocks([3, 1, 1,], "ad_astra:polished_mercury_stone", true);
        scene.world.setBlocks([1, 3, 3,], "ad_astra:polished_mercury_stone", true);
        scene.world.setBlocks([2, 3, 3,], "ad_astra:polished_mercury_stone", true);
        scene.world.setBlocks([3, 3, 3,], "ad_astra:polished_mercury_stone", true);
        scene.world.setBlocks([1, 3, 2,], "ad_astra:polished_mercury_stone", true);
        scene.world.setBlocks([2, 3, 2,], "ad_astra:polished_mercury_stone", true);
        scene.world.setBlocks([3, 3, 2,], "ad_astra:polished_mercury_stone", true);
        scene.world.setBlocks([1, 3, 1,], "ad_astra:polished_mercury_stone", true);
        scene.world.setBlocks([2, 3, 1,], "ad_astra:polished_mercury_stone", true);
        scene.world.setBlocks([3, 3, 1,], "ad_astra:polished_mercury_stone", true);
        scene.idle(25);
    });
});