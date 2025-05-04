export function createSandpaperPolishingRecipes() {
  onEvent("recipes", (event) => {
    interface SandpaperPolishingRecipe {
      input: Internal.ItemStackJS_;
      output: Internal.ItemStackJS_;
    }

    const sandpaperPolishingRecipes: SandpaperPolishingRecipe[] = [
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
    ] as const;
    sandpaperPolishingRecipes.forEach((recipe) => {
      event.recipes.createSandpaperPolishing(recipe.output, recipe.input);
    });
  });
}
