(function createSandpaperPolishingRecipes() {
  onEvent("recipes", (event) => {
    /**
     * @typedef SandpaperPolishingRecipe
     * @property {Internal.IngredientJS_} input
     * @property {Internal.IngredientJS_} output
     */

    /** @type {SandpaperPolishingRecipe[]} */
    const sandpaperPolishingRecipes = [
      {
        input: "minecraft:blackstone",
        output: "minecraft:netherrack",
      },
      {
        input: "minecraft:nether_bricks",
        output: "minecraft:red_nether_bricks",
      },
      {
        input: "tconstruct:earth_slime_grass_seeds",
        output: "tconstruct:blood_slime_grass_seeds",
      },
    ];
    sandpaperPolishingRecipes.forEach((recipe) => {
      event.recipes.createSandpaperPolishing(recipe.output, recipe.input);
    });
  });
})();
