// @ts-check
(function distilleryPonder() {
  onEvent("ponder.registry", (event) => {
    event
      .create("createastral:distillery_dummy")
      .scene("distillery", "The Distillery", "kubejs:distillation", (scene, util) => {
        scene.showStructure();
      });
  });
})();
