// @ts-check
(function searedMelterPonder() {
  onEvent("ponder.registry", (event) => {
    event
      .create("tconstruct:seared_melter")
      .scene("melter", "How to use the seared melter", "kubejs:melter", (scene, util) => {
        scene.showStructure();
        scene.text(60, "This is an example of a basic Seared Melter setup", [2, 2, 2]);
        scene.idle(60);
        scene.overlay.showOutline(PonderPalette.GREEN, "test", [2, 1, 2], 60);
        scene.text(50, "First, a Seared Heater is placed, which can be filled with fuel", [2, 1, 2]).attachKeyFrame();
        scene.idle(60);
        scene.overlay.showOutline(PonderPalette.GREEN, "test", [2, 2, 2], 60);
        scene
          .text(
            80,
            "Then, a Melter is placed on top, and when the Heater below is fueled, it can melt ores into liquid",
            [2, 2, 2],
          )
          .attachKeyFrame();
        scene.idle(85);
        let faucet1 = util.select.position(1, 2, 2);
        let faucet2 = util.select.position(3, 2, 2);
        scene.overlay.showOutline(PonderPalette.GREEN, "test", faucet1, 60);
        scene
          .text(
            80,
            "Finally, Faucets are placed on the sides, which can be used to pour the liquid into a Casting Basin or Casting Table",
            [1.5, 2.5, 2],
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
          false,
        );
        scene
          .text(60, "Create Fluid Pipes can be used to transfer the liquid to something like a Spout", [2, 3.5, 2])
          .attachKeyFrame();
      });
  });
})();
