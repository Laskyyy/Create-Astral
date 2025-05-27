(function stoneGrowthChamberPonder() {
  onEvent("ponder.registry", (event) => {
    event
      .create("createastral:stone_growth_chamber_dummy")
      .scene("stone_growth_chamber", "Stone Growth Chamber", (scene, util) => {
        scene.showBasePlate();
        scene.world.showSection([0, 1, 0, 4, 3, 4], Facing.DOWN);
        scene.idle(10);
        scene.world.setBlocks([2, 1, 1], "createastral:stone_growth_chamber_dummy", true);
        scene.text(30, "Stone Growth Chamber", [2.5, 2, 1.5]);
        scene.idle(40);
        scene.world.setBlocks([1, 1, 3], "create:cut_andesite_bricks", true);
        scene.idle(1);
        scene.world.setBlocks([2, 1, 3], "chipped:andesite_1", true);
        scene.idle(1);
        scene.world.setBlocks([3, 1, 3], "create:polished_cut_andesite", true);
        scene.idle(1);
        scene.world.setBlocks([3, 1, 2], "chipped:andesite_1", true);
        scene.idle(1);
        scene.world.setBlocks([2, 1, 2], "create:polished_cut_andesite", true);
        scene.idle(1);
        scene.world.setBlocks([1, 1, 2], "create:cut_andesite", true);
        scene.idle(1);
        scene.world.setBlocks([1, 1, 1], "create:cut_andesite_bricks", true);
        scene.idle(1);
        scene.world.setBlocks([3, 1, 1], "create:small_andesite_bricks", true);
        scene.idle(1);
        scene.text(30, "Polished Andesite", [3, 1, 5]);
        scene.idle(40);
        scene.world.setBlocks([1, 2, 3], "minecraft:glass", true);
        scene.idle(1);
        scene.world.setBlocks([2, 2, 3], "minecraft:glass", true);
        scene.idle(1);
        scene.world.setBlocks([3, 2, 3], "minecraft:glass", true);
        scene.idle(1);
        scene.world.setBlocks([3, 2, 2], "minecraft:glass", true);
        scene.idle(1);
        scene.world.setBlocks([3, 2, 1], "minecraft:glass", true);
        scene.idle(1);
        scene.world.setBlocks([2, 2, 1], "minecraft:glass", true);
        scene.idle(1);
        scene.world.setBlocks([1, 2, 1], "minecraft:glass", true);
        scene.idle(1);
        scene.world.setBlocks([1, 2, 2], "minecraft:glass", true);
        scene.idle(1);
        scene.text(30, "Glass", [1.5, 3, 2.5]);
        scene.idle(40);
        scene.world.setBlocks([2, 2, 2], "minecraft:lava", true);
        scene.text(30, "Lava in the middle", [2.5, 3, 2.5]);
        scene.idle(40);
        scene.world.setBlocks([1, 3, 3], "create:cut_andesite", true);
        scene.idle(1);
        scene.world.setBlocks([2, 3, 3], "create:small_andesite_bricks", true);
        scene.idle(1);
        scene.world.setBlocks([3, 3, 3], "create:cut_andesite_bricks", true);
        scene.idle(1);
        scene.world.setBlocks([3, 3, 2], "create:cut_andesite_bricks", true);
        scene.idle(1);
        scene.world.setBlocks([2, 3, 2], "create:cut_andesite", true);
        scene.idle(1);
        scene.world.setBlocks([1, 3, 2], "create:small_andesite_bricks", true);
        scene.idle(1);
        scene.world.setBlocks([1, 3, 1], "chipped:andesite_1", true);
        scene.idle(1);
        scene.world.setBlocks([2, 3, 1], "create:polished_cut_andesite", true);
        scene.idle(1);
        scene.world.setBlocks([3, 3, 1], "create:polished_cut_andesite", true);
        scene.idle(10);
        scene.text(60, "This is a completed Stone Growth Chamber", [3, 2.5, 3]).attachKeyFrame();
        scene.idle(70);
        scene.text(80, "Use an Andesite Funnel on the front or a Hopper on the bottom to output Andesite", [2, 1, 1]);
        scene.idle(90);
        scene
          .text(
            80,
            "When built using different Stones, the Stone Growth Chamber will generate different types of cobblestone",
            [3, 2.5, 3]
          )
          .attachKeyFrame();
        scene.idle(10);
        //scene.world.setBlocks([2, 1, 1,], "createastral:stone_growth_chamber_dummy", true);
        scene.world.setBlocks([1, 1, 2, 3, 1, 3], "ad_astra:polished_moon_stone", true);
        scene.world.setBlock([1, 1, 1], "ad_astra:polished_moon_stone", true);
        scene.world.setBlock([3, 1, 1], "ad_astra:polished_moon_stone", true);
        scene.idle(10);
        scene.world.setBlocks([1, 3, 1, 3, 3, 3], "ad_astra:polished_moon_stone", true);
        scene.idle(10);
        scene.world.setBlocks([1, 3, 2], "ad_astra:cracked_moon_stone_bricks", true);
        scene.idle(1);
        scene.world.setBlocks([3, 3, 1], "ad_astra:moon_stone_bricks", true);
        scene.idle(1);
        scene.world.setBlocks([2, 3, 3], "ad_astra:moon_stone_bricks", true);
        scene.idle(1);
        scene.world.setBlocks([3, 1, 3], "ad_astra:moon_stone_bricks", true);
        scene.idle(1);
        scene.world.setBlocks([3, 1, 1], "ad_astra:cracked_moon_stone_bricks", true);
        scene.idle(1);
        scene.world.setBlocks([3, 3, 3], "ad_astra:moon_stone_bricks", true);
        scene.idle(1);
        scene.world.setBlocks([3, 3, 2], "ad_astra:moon_stone_bricks", true);
        scene.idle(1);
        scene.world.setBlocks([2, 1, 3], "ad_astra:cracked_moon_stone_bricks", true);
        scene.idle(1);
        scene.world.setBlocks([1, 1, 3], "ad_astra:moon_stone_bricks", true);
        scene.idle(1);
        scene.world.setBlocks([1, 1, 1], "ad_astra:moon_stone_bricks", true);
        scene.idle(1);
        scene.idle(70);
        scene.text(
          90,
          "This currently works with Stone, Andesite and any default stone from each planet, like Moon Stone and Mars Stone",
          [3, 2.5, 3]
        );
        scene.idle(100);
        scene.world.setBlocks([1, 1, 3], "chipped:mossy_stone_bricks_1", true);
        scene.world.setBlocks([2, 1, 3], "minecraft:stone_bricks", true);
        scene.world.setBlocks([3, 1, 3], "chipped:mossy_stone_bricks_1", true);
        scene.world.setBlocks([1, 1, 2], "chipped:stone_1", true);
        scene.world.setBlocks([2, 1, 2], "minecraft:cracked_stone_bricks", true);
        scene.world.setBlocks([3, 1, 2], "minecraft:cracked_stone_bricks", true);
        scene.world.setBlocks([1, 1, 1], "minecraft:cracked_stone_bricks", true);
        scene.world.setBlocks([3, 1, 1], "minecraft:mossy_stone_bricks", true);
        scene.world.setBlocks([1, 3, 3], "minecraft:mossy_stone_bricks", true);
        scene.world.setBlocks([2, 3, 3], "chipped:stone_1", true);
        scene.world.setBlocks([3, 3, 3], "minecraft:mossy_stone_bricks", true);
        scene.world.setBlocks([1, 3, 2], "chipped:stone_1", true);
        scene.world.setBlocks([2, 3, 2], "minecraft:stone_bricks", true);
        scene.world.setBlocks([3, 3, 2], "minecraft:cracked_stone_bricks", true);
        scene.world.setBlocks([1, 3, 1], "minecraft:cracked_stone_bricks", true);
        scene.world.setBlocks([2, 3, 1], "minecraft:stone_bricks", true);
        scene.world.setBlocks([3, 3, 1], "minecraft:mossy_stone_bricks", true);
        scene.idle(25);
        scene.world.setBlocks([1, 1, 2, 3, 1, 3], "ad_astra:polished_mars_stone", true);
        scene.world.setBlock([1, 1, 1], "ad_astra:polished_mars_stone", true);
        scene.world.setBlock([3, 1, 1], "ad_astra:polished_mars_stone", true);
        scene.world.setBlocks([1, 3, 1, 3, 3, 3], "ad_astra:polished_mars_stone", true);
        scene.world.setBlocks([1, 3, 2], "ad_astra:cracked_mars_stone_bricks", false);
        scene.world.setBlocks([3, 3, 1], "ad_astra:mars_stone_bricks", false);
        scene.world.setBlocks([2, 3, 3], "ad_astra:mars_stone_bricks", false);
        scene.world.setBlocks([3, 1, 3], "ad_astra:mars_stone_bricks", false);
        scene.world.setBlocks([3, 1, 1], "ad_astra:cracked_mars_stone_bricks", false);
        scene.world.setBlocks([3, 3, 3], "ad_astra:mars_stone_bricks", false);
        scene.world.setBlocks([3, 3, 2], "ad_astra:mars_stone_bricks", false);
        scene.world.setBlocks([2, 1, 3], "ad_astra:cracked_mars_stone_bricks", false);
        scene.world.setBlocks([1, 1, 3], "ad_astra:mars_stone_bricks", false);
        scene.world.setBlocks([1, 1, 1], "ad_astra:mars_stone_bricks", false);
        scene.idle(25);
        scene.world.setBlocks([1, 1, 2, 3, 1, 3], "ad_astra:polished_glacio_stone", true);
        scene.world.setBlock([1, 1, 1], "ad_astra:polished_glacio_stone", true);
        scene.world.setBlock([3, 1, 1], "ad_astra:polished_glacio_stone", true);
        scene.world.setBlocks([1, 3, 1, 3, 3, 3], "ad_astra:polished_glacio_stone", true);
        scene.world.setBlocks([1, 3, 2], "ad_astra:cracked_glacio_stone_bricks", false);
        scene.world.setBlocks([3, 3, 1], "ad_astra:glacio_stone_bricks", false);
        scene.world.setBlocks([2, 3, 3], "ad_astra:glacio_stone_bricks", false);
        scene.world.setBlocks([3, 1, 3], "ad_astra:glacio_stone_bricks", false);
        scene.world.setBlocks([3, 1, 1], "ad_astra:cracked_glacio_stone_bricks", false);
        scene.world.setBlocks([3, 3, 3], "ad_astra:glacio_stone_bricks", false);
        scene.world.setBlocks([3, 3, 2], "ad_astra:glacio_stone_bricks", false);
        scene.world.setBlocks([2, 1, 3], "ad_astra:cracked_glacio_stone_bricks", false);
        scene.world.setBlocks([1, 1, 3], "ad_astra:glacio_stone_bricks", false);
        scene.world.setBlocks([1, 1, 1], "ad_astra:glacio_stone_bricks", false);
        scene.idle(25);
        scene.world.setBlocks([1, 1, 2, 3, 1, 3], "ad_astra:polished_mercury_stone", true);
        scene.world.setBlock([1, 1, 1], "ad_astra:polished_mercury_stone", true);
        scene.world.setBlock([3, 1, 1], "ad_astra:polished_mercury_stone", true);
        scene.world.setBlocks([1, 3, 1, 3, 3, 3], "ad_astra:polished_mercury_stone", true);
        scene.world.setBlocks([1, 3, 2], "ad_astra:cracked_mercury_stone_bricks", false);
        scene.world.setBlocks([3, 3, 1], "ad_astra:mercury_stone_bricks", false);
        scene.world.setBlocks([2, 3, 3], "ad_astra:mercury_stone_bricks", false);
        scene.world.setBlocks([3, 1, 3], "ad_astra:mercury_stone_bricks", false);
        scene.world.setBlocks([3, 1, 1], "ad_astra:cracked_mercury_stone_bricks", false);
        scene.world.setBlocks([3, 3, 3], "ad_astra:mercury_stone_bricks", false);
        scene.world.setBlocks([3, 3, 2], "ad_astra:mercury_stone_bricks", false);
        scene.world.setBlocks([2, 1, 3], "ad_astra:cracked_mercury_stone_bricks", false);
        scene.world.setBlocks([1, 1, 3], "ad_astra:mercury_stone_bricks", false);
        scene.world.setBlocks([1, 1, 1], "ad_astra:mercury_stone_bricks", false);
        scene.idle(75);
        scene
          .text(
            150,
            "A list of valid stone blocks can be found by searching '$createastral:stone_growth_chamber/building_blocks' in REI",
            [3, 2.5, 3]
          )
          .attachKeyFrame();
        scene.idle(20);
        scene.world.setBlocks([1, 1, 2, 3, 1, 3], "minecraft:polished_andesite", true);
        scene.world.setBlock([1, 1, 1], "minecraft:polished_andesite", true);
        scene.world.setBlock([3, 1, 1], "minecraft:polished_andesite", true);
        scene.world.setBlocks([1, 3, 1, 3, 3, 3], "minecraft:polished_andesite", true);
        scene.idle(30);
        scene.world.setBlocks([1, 1, 2, 3, 1, 3], "chipped:andesite_1", true);
        scene.world.setBlock([1, 1, 1], "chipped:andesite_1", true);
        scene.world.setBlock([3, 1, 1], "chipped:andesite_1", true);
        scene.world.setBlocks([1, 3, 1, 3, 3, 3], "chipped:andesite_1", true);
        scene.idle(30);
        scene.world.setBlocks([1, 1, 2, 3, 1, 3], "create:cut_andesite", true);
        scene.world.setBlock([1, 1, 1], "create:cut_andesite", true);
        scene.world.setBlock([3, 1, 1], "create:cut_andesite", true);
        scene.world.setBlocks([1, 3, 1, 3, 3, 3], "create:cut_andesite", true);
        scene.idle(30);
        scene.world.setBlocks([1, 1, 2, 3, 1, 3], "create:cut_andesite_bricks", true);
        scene.world.setBlock([1, 1, 1], "create:cut_andesite_bricks", true);
        scene.world.setBlock([3, 1, 1], "create:cut_andesite_bricks", true);
        scene.world.setBlocks([1, 3, 1, 3, 3, 3], "create:cut_andesite_bricks", true);
        scene.idle(30);
        scene.world.setBlocks([1, 1, 2, 3, 1, 3], "create:small_andesite_bricks", true);
        scene.world.setBlock([1, 1, 1], "create:small_andesite_bricks", true);
        scene.world.setBlock([3, 1, 1], "create:small_andesite_bricks", true);
        scene.world.setBlocks([1, 3, 1, 3, 3, 3], "create:small_andesite_bricks", true);
        scene.idle(40);
        scene
          .text(
            120,
            "Similarly, valid glass blocks can be found by searching '$createastral:stone_growth_chamber/glass_blocks'",
            [1.5, 3, 2.5]
          )
          .attachKeyFrame();
        scene.world.setBlocks([1, 3, 1, 3, 3, 3], "minecraft:air", false);
        scene.idle(30);
        scene.world.setBlocks([1, 2, 1, 3, 2, 3], "minecraft:tinted_glass", true);
        scene.world.setBlock([2, 2, 2], "minecraft:lava", false);
        scene.idle(30);
        scene.world.setBlocks([1, 2, 1, 3, 2, 3], "tconstruct:gray_clear_stained_glass", true);
        scene.world.setBlock([2, 2, 2], "minecraft:lava", false);
        scene.idle(30);
        scene.world.setBlocks([1, 2, 1, 3, 2, 3], "chipped:glass_48", true);
        scene.world.setBlock([2, 2, 2], "minecraft:lava", false);
        scene.idle(30);
        scene.world.setBlocks([1, 3, 1, 3, 3, 3], "create:small_andesite_bricks", true);
      });
  });
})();
