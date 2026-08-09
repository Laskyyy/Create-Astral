(function createEmptyingRecipes() {
  const {BUCKET, GEM_BLOCK, SLIMEBALL, INGOT, GEM, NUGGET, mB} = global.fluids;

  onEvent("recipes", (event) => {
    /**
     * @typedef EmptyingRecipe
     * @property {Internal.IngredientJS_} input
     * @property {Internal.IngredientJS_} outputItem
     * @property {{fluid: Special.Fluid, amount: number}} outputFluid
     */

    /** @type {EmptyingRecipe[]} */
    const emptyingRecipes = [
      {
        input: { "item": "astraladditions:shimmer_bottle" },
        outputItem: { "item": "minecraft:glass_bottle" },
        outputFluid: Fluid.of("kubejs:shimmer", BUCKET/3)
      },
      {
        input: { "item": "createastral:sputum_bottle" },
        outputItem: { "item": "minecraft:glass_bottle" },
        outputFluid: Fluid.of("astraladditions:sputum", BUCKET/3)
      }
    ];
    emptyingRecipes.forEach((recipe) => {
      event.recipes.createEmptying([recipe.outputItem, recipe.outputFluid], recipe.input);
    });
  });
})();
