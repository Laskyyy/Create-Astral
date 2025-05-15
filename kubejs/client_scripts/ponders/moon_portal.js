(function moonPortalPonder() {
  onEvent("ponder.registry", (event) => {
    event
      .create("createastral:shimmering_stone")
      .scene("shimmering_stone", "The Moon Portal", "kubejs:portal", (scene, util) => {
        scene.world.replaceBlocks(util.select.fromTo(2, 1, 2, 3, 1, 2), "minecraft:obsidian", false);
        scene.showStructure();
        scene.text(
          60,
          "In this pack, the Nether is disabled. Instead, items are spread throughout the different planets.",
          [3, 2, 3],
        );
        scene.idle(40);
        scene.showControls(30, [2, 2, 2], "up").rightClick().withItem("minecraft:flint_and_steel");
        scene.world.setBlock([2, 2, 2], Block.getBlock("minecraft:fire").defaultBlockState(), false);
        scene.idle(60);
        [
          util.select.fromTo(1, 1, 2, 4, 1, 2),
          util.select.fromTo(1, 2, 2, 1, 5, 2),
          util.select.fromTo(4, 2, 2, 4, 5, 2),
          util.select.fromTo(2, 5, 2, 3, 5, 2),
        ].forEach((selection) => {
          scene.world.replaceBlocks(selection, "createastral:shimmering_stone", true);
        });
        scene.world.setBlock([2, 2, 2], "minecraft:air", false);
        scene.text(40, "There is a new portal added, which takes you to the Moon!", [3, 2, 3]).attachKeyFrame();
        scene.showControls(30, [2, 2, 2], "up").rightClick().withItem("createastral:astral_conduit");
        scene.world.setBlocks(util.select.fromTo(2, 2, 2, 3, 4, 2), "customportalapi:customportalblock", true);
      });
  });
})();
