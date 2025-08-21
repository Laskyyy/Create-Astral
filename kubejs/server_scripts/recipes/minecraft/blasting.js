(function minecraftBlastingRecipes() {
  onEvent("recipes", (event) => {
    /**
     * @typedef BlastingRecipe
     * @property {Internal.ItemStackJS_} input
     * @property {Internal.ItemStackJS_} output
     * @property {number} [xp]
     */

    /** @type {BlastingRecipe[]} */
    const blastingRecipes = [
      // [Input string, Output string, XP value]
      { input: "createastral:andesite_compound", output: "create:andesite_alloy" },
      { input: "tconstruct:seared_basin", output: "tconstruct:scorched_basin" },
      { input: "tconstruct:seared_table", output: "tconstruct:scorched_table" },
      { input: "ad_astra:calorite_block", output: "yttr:quicksilver" },
    ];
    blastingRecipes.forEach((recipe) => {
      event.recipes.minecraft.blasting(recipe.output, recipe.input).xp(recipe.xp ?? 0.0);
    });
  });
})();
