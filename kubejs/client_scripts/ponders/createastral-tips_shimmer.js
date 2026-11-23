(function shimmerPonder() {
  onEvent("ponder.registry", (event) => {
    //! Finding shimmer
    event
      .create("kubejs:shimmer_bucket")
      .scene("finding_shimmer", "Finding Shimmer", "createastral:finding_shimmer", (scene, util) => {
        //? Show everything but the machinery
        scene.world.showSection([1, 0, 0, 6, 2, 6], Facing.DOWN);
        scene.world.showSection([0, 0, 0, 0, 1, 6], Facing.DOWN);
        scene.world.showSection([0, 2, 4], Facing.DOWN); // one specific amethyst bud
        scene.idle(10);

        scene
          .text(120, "Shimmer can be found in abundance in underground Shimmer Lakes in the Overworld.")
          .colored(PonderPalette.OUTPUT);
        scene.idle(140);

        scene.text(100, "You will, however need to dig down. They're found near Y = 0.").colored(PonderPalette.OUTPUT);
        scene.idle(120);

        //? Usage of the structure compass
        scene.addKeyframe();
        scene
          .text(120, "Shimmer Lakes can be located from anywhere in the Overworld using the Explorer's Compass.")
          .colored(PonderPalette.INPUT);
        scene
          .showControls(100, util.grid.at(3, 2, 3), "down")
          .rightClick()
          .withItem("explorerscompass:explorerscompass");
        scene.idle(140);

        //? Collecting shimmer with a bucket
        scene.addKeyframe();
        scene.text(80, "You can bucket the Shimmer directly...").colored(PonderPalette.OUTPUT);
        scene
          .showControls(40, util.grid.at(1, 1, 3), "down")
          .rightClick()
          .withItem("minecraft:bucket");
        scene.idle(40);
        scene.world.setBlock([1, 1, 3], "minecraft:air", true);
        scene.idle(60);
        scene.world.setBlock([1, 1, 3], "kubejs:shimmer", false); // put that bucket of shimmer down, greedy sod

        //? Collecting shimmer with a hose pulley
        scene.addKeyframe();
        const pumpOrder = [
          // order of shimmers to 'pump'
          // unnecessary detail but it looks satisfying
          [1, 1, 3],
          [1, 1, 2],
          [2, 1, 3],
          [2, 1, 4],
          [2, 1, 2],
          [4, 1, 5],
          [3, 1, 4],
          [3, 1, 2],
          [5, 1, 3],
          [4, 1, 4],
          [4, 1, 2],
          [4, 1, 3],
        ];
        scene.text(120, "... or pump it out with the help of a Hose Pulley.").colored(PonderPalette.OUTPUT);
        scene.world.showSection([0, 2, 3, 0, 3, 3], Facing.DOWN);
        scene.world.showSection([1, 3, 3, 5, 3, 3], Facing.DOWN);
        scene.idle(20);
        pumpOrder.forEach((block) => {
          scene.idle(10);
          scene.world.setBlock(block, "minecraft:air", true);
        });
        scene.idle(20);
      });
  });
})();
