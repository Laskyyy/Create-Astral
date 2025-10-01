(function shimmerRefineryPonder() {
  onEvent("ponder.registry", (event) => {
    //! Building the shimmer refinery
    event
      .create("yttr:void_filter")
      .scene("refinery_structure", "Building the Shimmer Refinery", "createastral:building_refinery", (scene, util) => {
        scene.showBasePlate();
        scene.idle(10);

        scene.text(60, "This is quite a complex structure, so please bear with.").colored(PonderPalette.SLOW);
        scene.idle(80);

        //? Place blaze burners
        // p and q are arbitrary numbers only used for the animation because of the blaze burner spacing and copypasting the same line of code 16 times looks stupid
        for (let p = 0; p < 4; p = p + 3) {
          for (let q = 0; q < 4; q = q + 3) {
            for (let z = 1; z < 3; z++) {
              for (let x = 1; x < 3; x++) {
                scene.world.showSection([x + p, 1, z + q], Facing.DOWN);
                scene.idle(2);
              }
            }
          }
        }

        scene.idle(10);

        scene.text(60, "Place Blaze Burners in this pattern.").colored(PonderPalette.INPUT);
        scene.idle(80);

        //? Place scaffold
        scene.addKeyframe();
        scene.world.showSection([3, 2, 3, 3, 3, 3], Facing.DOWN);
        scene.idle(10);

        scene
          .text(
            120,
            "Place Andesite Iron Frames like this (use a temporary block underneath if necessary).",
            [3, 2.5, 3]
          )
          .colored(PonderPalette.INPUT);
        scene.idle(140);

        scene.addKeyframe();
        scene.world.showSection([3, 4, 2, 3, 4, 4], Facing.DOWN);
        scene.world.showSection([2, 4, 3, 4, 4, 3], Facing.DOWN);
        scene.idle(10);

        scene.text(60, "Advanced Machine Casing.", [3.5, 5, 3.5]).colored(PonderPalette.INPUT).placeNearTarget();
        scene.idle(80);

        scene.addKeyframe();
        scene.world.showSection([3, 4, 1], Facing.SOUTH);
        scene.world.showSection([1, 4, 3], Facing.EAST);
        scene.world.showSection([3, 4, 5], Facing.NORTH);
        scene.world.showSection([5, 4, 3], Facing.WEST);
        scene.idle(10);

        scene.text(60, "Andesite Iron Frame.").colored(PonderPalette.INPUT);
        scene.idle(80);

        scene.addKeyframe();
        scene.world.showSection([3, 5, 3], Facing.DOWN);
        scene.idle(10);

        scene.text(60, "Industrial Machine Frame.").colored(PonderPalette.INPUT);
        scene.idle(80);

        scene.addKeyframe();
        scene.world.showSection([3, 5, 2], Facing.DOWN);
        scene.world.showSection([2, 5, 3], Facing.DOWN);
        scene.world.showSection([3, 5, 4], Facing.DOWN);
        scene.world.showSection([4, 5, 3], Facing.DOWN);
        scene.idle(10);

        scene.text(60, "Andesite Iron Frame.").colored(PonderPalette.INPUT);
        scene.idle(80);

        //? Place magtanks
        scene.addKeyframe();
        for (let x = 1; x < 5; x = x + 3) {
          for (let z = 1; z < 5; z = z + 3) {
            scene.world.showSection([x, 2, z, x + 1, 4, z + 1], Facing.DOWN);
            scene.idle(2);
          }
        }

        scene.idle(10);

        scene.text(80, "Now place Magtanks on top of the Blaze Burners.").colored(PonderPalette.INPUT);
        scene.idle(100);

        //? Place refinery at last
        scene.addKeyframe();
        scene.world.hideSection([1, 2, 1, 5, 5, 5], Facing.UP);
        scene.idle(10);

        scene
          .text(100, "Finally, place the Shimmer Refinery in the centre.", [3.5, 1.5, 3.5])
          .colored(PonderPalette.INPUT);
        scene.idle(120);

        scene.world.showSection([3, 1, 3], Facing.DOWN);
        scene.idle(20);
        scene.world.showSection([1, 2, 1, 5, 5, 5], Facing.DOWN);
      });

    //! Using the shimmer refinery
    event
      .create("yttr:void_filter")
      .scene("refinery_usage", "Using the Shimmer Refinery", "createastral:using_refinery", (scene, util) => {
        scene.showBasePlate();
        scene.idle(10);
        // fix a weird pipe that misbehaves for some reason
        scene.world.modifyBlock([3, 2, 4], (curState) => curState.with("north", "true").with("up", "false"), false);

        //? Place refinery
        // yes this is a lot of for loops. trust me, its better this way
        // blaze burners:
        for (let y = 1; y < 3; y++) {
          for (let p = 0; p < 4; p = p + 3) {
            for (let q = 0; q < 4; q = q + 3) {
              for (let z = 1; z < 3; z++) {
                for (let x = 1; x < 3; x++) {
                  scene.world.showSection([x + p, y, z + q], Facing.DOWN);
                  scene.idle(3);
                }
              }
            }
          }
        }
        // refinery controller:
        for (let y = 1; y < 3; y++) {
          scene.world.showSection([3, y, 3], Facing.DOWN);
          scene.idle(3);
        }
        // scaffolding:
        for (let y = 3; y < 5; y++) {
          scene.world.showSection([3, y, 3], Facing.DOWN);
          scene.idle(3);
        }
        // magtanks:
        for (let x = 1; x < 5; x = x + 3) {
          for (let z = 1; z < 5; z = z + 3) {
            scene.world.showSection([x, 3, z, x + 1, 5, z + 1], Facing.DOWN);
            scene.idle(3);
          }
        }
        // scaffolding again:
        for (let y = 5; y < 7; y++) {
          scene.world.showSection([3, y, 1, 3, y, 5], Facing.DOWN);
          scene.world.showSection([1, y, 3, 5, y, 3], Facing.DOWN);
          scene.idle(3);
        }

        scene.idle(10);

        scene.text(60, "This is the Shimmer Refinery.").colored(PonderPalette.MEDIUM);
        scene.idle(80);

        //? Hide the top so you can see the controller
        scene.world.hideSection([1, 3, 1, 5, 6, 5], Facing.UP);
        scene.idle(10);

        scene.text(80, "And now you will learn how to use it.").colored(PonderPalette.MEDIUM);
        scene.idle(100);

        //? Show power input
        scene.addKeyframe();
        scene.world.showSection([3, 1, 0, 3, 2, 2], Facing.SOUTH);
        scene.idle(10);

        scene
          .text(120, "The Shimmer Refinery requires at least 160 E/t to keep running indefinitely.", [3, 2, 0])
          .colored(PonderPalette.INPUT)
          .placeNearTarget();
        scene.idle(130);

        scene
          .text(100, "Alternatively, it requires 20 000 E per crafting cycle.", [3, 2, 0])
          .colored(PonderPalette.INPUT)
          .placeNearTarget();
        scene.idle(120);

        //? Show fluid input
        scene.addKeyframe();
        scene.world.showSection([3, 1, 4, 3, 2, 6], Facing.NORTH);
        scene.idle(10);

        scene
          .text(100, "The machine consumes one bucket of Shimmer every 125 ticks.", [3, 2, 6])
          .colored(PonderPalette.INPUT)
          .placeNearTarget();
        scene.idle(120);

        //? Show item input
        scene.addKeyframe();
        scene.world.showSection([4, 1, 3, 6, 2, 3], Facing.WEST);
        scene.world.showSection([6, 1, 4, 6, 1, 6], Facing.WEST);
        scene.idle(10);

        scene
          .text(80, "One Refining Agent is used per craft.", [4.2, 3, 3.5])
          .colored(PonderPalette.INPUT)
          .placeNearTarget();
        scene.idle(100);

        //? Show item output
        scene.addKeyframe();
        scene.world.showSection([0, 1, 3, 2, 2, 3], Facing.EAST);
        scene.world.showSection([0, 1, 4, 0, 1, 6], Facing.EAST);
        scene.idle(10);

        scene
          .text(100, "The Refined Shimmer can be extracted from the machine.", [2.8, 3, 3.5])
          .colored(PonderPalette.OUTPUT)
          .placeNearTarget();
        scene.idle(120);

        //? Superheat blaze burners
        scene.addKeyframe();
        scene.text(80, "The blazes also need to be superheated.").colored(PonderPalette.FAST);
        scene.idle(60);
        scene.showControls(40, [1.5, 3, 1.5], "down").rightClick().withItem("create:blaze_cake");
        scene.idle(20);

        for (let p = 0; p < 4; p = p + 3) {
          for (let q = 0; q < 4; q = q + 3) {
            for (let z = 1; z < 3; z++) {
              for (let x = 1; x < 3; x++) {
                scene.world.modifyBlock([x + p, 2, z + q], (curState) => curState.with("blaze", "seething"), false);
                scene.particles
                  .simple(10, "soul_fire_flame", [x + p, 2, z + q])
                  .density(5)
                  .area([1 + (x + p), 3, 1 + (z + q)])
                  .motion([0, 0.1, 0])
                  .lifetime(5)
                  .withinBlockSpace();
                scene.idle(1);
              }
            }
          }
        }

        scene.idle(40);

        //? Unhide structure
        scene.world.showSection([1, 3, 1, 5, 6, 5], Facing.DOWN);
      });
  });
})();
