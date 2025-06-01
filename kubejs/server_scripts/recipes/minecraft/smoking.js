(function minecraftSmokingRecipes() {
  onEvent("recipes", (event) => {
    /**
     * @typedef SmokingRecipe
     * @property {Internal.ItemStackJS_} input
     * @property {Internal.ItemStackJS_} output
     * @property {number} [xp]
     */

    /** @type {SmokingRecipe[]} */
    const smokingRecipes = [
      { input: "campanion:marshmallow", output: "campanion:cooked_marshmallow" },
      { input: "campanion:cooked_marshmallow", output: "campanion:blackened_marshmallow" },
    ];
    smokingRecipes.forEach((recipe) => {
      event.recipes.minecraft.smoking(recipe.output, recipe.input).xp(recipe.xp ?? 0.0);
    });
  });
})();
