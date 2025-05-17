(function createEmptyingRecipes() {
  const BUCKET = global.BUCKET;
  const GEM_BLOCK = global.GEM_BLOCK;
  const SLIMEBALL = global.SLIMEBALL;
  const INGOT = global.INGOT;
  const GEM = global.GEM;
  const NUGGET = global.NUGGET;
  const mB = global.mB;

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
