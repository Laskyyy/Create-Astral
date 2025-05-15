// @ts-check
(function astralGeneratorsMixingRecipes() {
  onEvent("recipes", (event) => {
    event.recipes.create
      .mixing("astralgenerators:fusion_glass", ["techreborn:flint_dust", "techreborn:steel_dust", "minecraft:glass"])
      .heated();
  });
})();
