export function distilleryPonder() {
  onEvent("ponder.registry", (event) => {
    event
      .create("createastral:distillery_dummy")
      .scene("distillery", "How to create a Distillery", "kubejs:distillation", (scene, util) => {
        scene.showStructure();
      });
  });
}
