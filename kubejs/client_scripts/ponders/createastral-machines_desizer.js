(function desizerPonder() {
  onEvent("ponder.registry", (event) => {
    //! Building the desizer
    event
      .create("astraladditions:desizer_controller")
      .scene("desizer_structure", "Building the Desizer", "createastral:building_desizer", (scene, util) => {
        scene.showBasePlate();
        scene.idle(10); // brief pause after showing baseplate

        //? Place frame of desizer
        for (let y = 1; y < 4; y++) {
          for (let x = 2; x < 5; x++) {
            if (y == 2 && x == 3) {
              scene.idle(1); // skip hole for controller
            } else {
              scene.world.showSection([x, y, 5], Facing.DOWN);
            }
            scene.idle(3); // pause between placments for nice animation
          } // places blocks along x axis
        } // then moves up one y level and repeats */

        scene.idle(10);

        scene.text(60, "Place Desizer Casings like this.", [3.5, 2.5, 5.5]).colored(PonderPalette.INPUT);
        scene.idle(80);

        scene
          .text(80, "The Controller block now goes in the middle.", [3.5, 2.5, 5])
          .colored(PonderPalette.INPUT)
          .attachKeyFrame();
        scene.idle(100);

        //? Placing the desizer controller
        scene.world.showSection([3, 2, 5], Facing.SOUTH);
        scene.idle(10);

        //? Visual update of the casing
        scene.world.modifyBlock([2, 1, 5], (curState) => curState.with("type", "bottomright"), true);
        scene.world.modifyBlock([3, 1, 5], (curState) => curState.with("type", "bottommiddle"), true);
        scene.world.modifyBlock([4, 1, 5], (curState) => curState.with("type", "bottomleft"), true);
        scene.world.modifyBlock([2, 2, 5], (curState) => curState.with("type", "middleright"), true);
        scene.world.modifyBlock([4, 2, 5], (curState) => curState.with("type", "middleleft"), true);
        scene.world.modifyBlock([2, 3, 5], (curState) => curState.with("type", "topright"), true);
        scene.world.modifyBlock([3, 3, 5], (curState) => curState.with("type", "topmiddle"), true);
        scene.world.modifyBlock([4, 3, 5], (curState) => curState.with("type", "topleft"), true);

        scene
          .text(120, "The Casing will visually update once the Controller is placed.", [2, 2.5, 6])
          .colored(PonderPalette.MEDIUM);
        scene.idle(140);

        //? Demonstrate redstone power
        scene.world.hideSection([2, 1, 5, 4, 3, 5], Facing.UP);
        scene.idle(15);
        scene.world.showSection([2, 1, 1, 4, 4, 1], Facing.DOWN);
        scene.idle(10);
        scene.world.showSection([3, 2, 0], Facing.SOUTH);
        scene.idle(20);

        scene
          .text(120, "The Desizer requires a Redstone input in order to craft things.", [3.5, 2.5, 0.8])
          .colored(PonderPalette.INPUT)
          .attachKeyFrame();
        scene.idle(140);

        scene.world.hideSection([2, 1, 0, 4, 4, 1], Facing.UP);
        scene.idle(15);
        scene.world.showSection([2, 1, 5, 4, 3, 5], Facing.DOWN);
      });

    //! Using the desizer
    event
      .create("astraladditions:desizer_controller")
      .scene("desizer_usage", "Using the Desizer", "createastral:using_desizer", (scene, util) => {
        scene.showBasePlate();
        scene.idle(10);

        //? Place desizer
        for (let y = 1; y < 4; y++) {
          for (let x = 2; x < 5; x++) {
            scene.world.showSection([x, y, 5], Facing.DOWN);
            scene.idle(3);
          }
        }
        scene.world.showSection([1, 1, 6, 3, 2, 6], Facing.NORTH);
        scene.idle(20);

        //? Show working volume
        scene.world.setBlocks([2, 1, 2, 4, 4, 4], "chipped:glass_1", false);
        scene.idle(1);
        for (let y = 1; y < 4; y++) {
          scene.world.showSection([2, y, 2, 4, y, 4], Facing.DOWN);
          scene.idle(3);
        }

        scene
          .text(80, "This region is where the Desizer works.", [3.5, 2.5, 3.5])
          .colored(PonderPalette.OUTPUT)
          .attachKeyFrame();
        scene.idle(100);

        //? Hide working volume
        for (let y = 3; y > 0; y--) {
          scene.world.hideSection([2, y, 2, 4, y, 4], Facing.UP);
          scene.idle(3);
        }
        scene.idle(20);
        scene.world.setBlocks([2, 1, 2, 4, 4, 4], "minecraft:air", false);

        //? Demonstration with compressed ultrapure carbon
        scene.world.setBlocks([3, 1, 3, 3, 3, 3], "yttr:ultrapure_carbon_block", false);
        scene.world.setBlocks([2, 2, 3, 4, 2, 3], "yttr:ultrapure_carbon_block", false);
        scene.world.setBlocks([3, 2, 2, 3, 2, 4], "yttr:ultrapure_carbon_block", false);
        scene.idle(20);
        for (let y = 1; y < 4; y++) {
          scene.world.showSection([2, y, 2, 4, y, 4], Facing.DOWN);
          scene.idle(3);
        }

        scene.text(40, "Here is an example.").colored(PonderPalette.MEDIUM).attachKeyFrame();
        scene.idle(60);
        scene
          .text(120, "Provide the Desizer with a redstone signal while the recipe is assembled.", [1.5, 2.2, 6.5])
          .colored(PonderPalette.INPUT)
          .placeNearTarget();
        scene.idle(100);
        scene.showControls(60, [1.5, 2.2, 6.5], "down").rightClick();
        scene.idle(40);

        scene.world.modifyBlock([1, 2, 6], (curState) => curState.with("powered", "true").with("face", "floor"), false); // turn button on
        scene.world.modifyBlock([2, 2, 6], (curState) => curState.with("power", "15"), false); // light up redstone dust
        scene.idle(1);

        scene.world.setBlocks([2, 1, 2, 4, 3, 4], "minecraft:air", true);
        scene.world.createItemEntity(
          [3.5, 2.5, 3.5],
          util.vector.of(0, 0.4, 0),
          "yttr:compressed_ultrapure_carbon_block"
        ); // drop output

        scene.idle(19);
        scene.world.modifyBlock(
          [1, 2, 6],
          (curState) => curState.with("powered", "false").with("face", "floor"),
          false
        ); // unpress button
        scene.world.modifyBlock([2, 2, 6], (curState) => curState.with("power", "0"), false); // turn off redstone dust
        scene.idle(10);
        scene
          .text(140, "If an invalid recipe is present, the Desizer will drop the blocks in the region as items.")
          .colored(PonderPalette.OUTPUT);
        scene.idle(100);
      });
  });
})();
