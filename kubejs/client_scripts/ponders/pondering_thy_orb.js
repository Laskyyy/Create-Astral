(function distilleryPonder() {
  onEvent("ponder.registry", (event) => {
    event
      .create("astraladditions:moonblazed_orb")
      .scene("pondering_thy_orb", "pondering thy orb pondering thy orb pondering thy orb...", "kubejs:pondering_thy_orb", (scene, util) => {
        scene.showStructure();
      });
  });
})();
