export function minecraftBlastingRecipes() {
  onEvent("recipes", (event) => {
    interface BlastingRecipe {
      input: Internal.ItemStackJS_,
      output: Internal.ItemStackJS_,
      xp?: number
    }

    const blastingRecipes: BlastingRecipe[] = [
      // [Input string, Output string, XP value]
      { input: "createastral:andesite_compound", output: "create:andesite_alloy" },
      { input: "tconstruct:seared_basin", output: "tconstruct:scorched_basin" },
      { input: "tconstruct:seared_table", output: "tconstruct:scorched_table" },
      { input: "ad_astra:calorite_block", output: "yttr:quicksilver" },
    ]
    blastingRecipes.forEach((recipe) => {
      event.recipes.minecraft.blasting(recipe.output, recipe.input).xp(recipe.xp ?? 0.0);
    });
  });
}
