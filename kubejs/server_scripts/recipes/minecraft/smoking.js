(function minecraftSmokingRecipes() {
  onEvent("recipes", (event) => {
    const smokingRecipes = [
      // [Input string, Output string, XP value]
      { input: "campanion:marshmallow", output: "campanion:cooked_marshmallow" },
      { input: "campanion:cooked_marshmallow", output: "campanion:blackened_marshmallow" },
    ];
    smokingRecipes.forEach((recipe) => {
      event.recipes.minecraft.smoking(recipe.output, recipe.input).xp(recipe.xp ?? 0.0);
    });
  });
})();
