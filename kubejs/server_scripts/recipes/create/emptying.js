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
    const emptyingRecipes = [];
    emptyingRecipes.forEach((recipe) => {
      event.recipes.createEmptying([recipe.outputItem, recipe.outputFluid], recipe.input);
    });
  });
})();
