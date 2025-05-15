// @ts-check
(function adAstraOxygenConversionRecipes() {
  onEvent("recipes", (event) => {
    /**
     * @typedef OxygenConversionRecipe
     * @property {Helper.FluidOrTag} input
     * @property {object} output
     * @property {Special.Fluid} output.name
     * @property {number} ratio
     */

    /** @type {OxygenConversionRecipe[]} */
    const oxygenConversionRecipes = [
      {
        input: { tag: "ad_astra:oxygen" },
        output: { name: "ad_astra:oxygen" },
        ratio: 1,
      },
    ];
    oxygenConversionRecipes.forEach((recipe) => {
      event.custom({
        type: "ad_astra:oxygen_conversion",
        input: recipe.input,
        output: recipe.output,
        conversion_ratio: recipe.ratio,
      });
    });
  });
})();
