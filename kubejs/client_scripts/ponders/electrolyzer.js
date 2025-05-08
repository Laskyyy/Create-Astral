(function electrolyzerPonder() {
  onEvent("ponder.registry", (event) => {
    event
      .create("createastral:electrolyser_dummy")
      .scene("electrolyzer", "The Electrolyzer multiblock", "kubejs:electrolyser", (scene, util) => {
        const electrolyzerPos = [2, 2, 1];
        const electrolyzerPos2 = [2, 3, 1];
        const multiblockRange = [
          [1, 2, 1],
          [3, 4, 3],
        ];
        scene.world.setBlock([3, 4, 0], "ad_astra:oxygen_loader", false);
        scene.world.modifyBlock(
          [2, 2, 0],
          () =>
            Block.id("create:fluid_pipe")
              .with("south", "true")
              .with("north", "false")
              .with("west", "false")
              .with("up", "false")
              .with("down", "false"),
          false,
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
          false,
        );
        scene.showBasePlate();
        for (let y = multiblockRange[0][1]; y <= multiblockRange[1][1]; y++) {
          for (let x = multiblockRange[0][0]; x <= multiblockRange[1][0]; x++) {
            for (let z = multiblockRange[0][2]; z <= multiblockRange[1][2]; z++) {
              scene.world.showSection([x, y, z], Facing.DOWN);
            }
          }
          scene.idle(30);
          if (y == 3) {
            scene.overlay.showOutline(PonderPalette.GREEN, "test", util.select.position(2, 3, 2), 30);
            scene.text(30, "Leave a gap in the center", [2, 4, 2]).placeNearTarget().attachKeyFrame();
            scene.idle(30);
          }
        }
        scene
          .text(40, "Pump Water into the bottom of the Electrolyzer", electrolyzerPos)
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
        scene.text(30, "Pump Oxygen out of the side of the Electrolyzer", electrolyzerPos2).attachKeyFrame();
        for (let y = 2; y <= 3; y++) {
          for (let x = 0; x <= 4; x++) {
            scene.world.showSection([x, y, 0], Facing.SOUTH);
          }
          scene.world.showSection([4, y, 1], Facing.WEST);
        }
        scene.idle(10);
        scene.particles.simple(60, "ad_astra:oxygen_bubble", [2.7, 5, -0.5]).gravity(-0.1);
        scene.idle(120);
        scene.world.showSection([3, 4, 0], Facing.DOWN);
        scene.idle(10);
        scene
          .text(
            100,
            "Oxygen pumped into the Oxygen Loader can be used to fill up your spacesuits and tanks",
            [3, 4.5, 0],
          )
          .placeNearTarget();
      });
  });
})();
/** @typedef {[number, number, number]} Vec3 */
