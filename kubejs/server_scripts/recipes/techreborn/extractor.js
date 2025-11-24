(function techRebornExtractorRecipes() {

  onEvent("recipes", (event) => {
    /**
     * @typedef ExtractorRecipe
     * @property {{item: Special.Item, count?: number}[]} input
     * @property {{item: Special.Item, count?: number}[]} output
     * @property {number} time
     * @property {number} power
     */

    /** @type {ExtractorRecipe[]} */
    const extractorRecipes = [
      {
        input: [{ item: "techreborn:plantball", count: 1 }],
        output: [{ item: "minecraft:green_dye", count: 16 }],
        time: 100,
        power: 5,
      },
    ];
    extractorRecipes.forEach((recipe) => {
      event.custom({
        type: "techreborn:extractor",
        time: recipe.time,
        power: recipe.power,
        ingredients: recipe.input,
        results: recipe.output,
      });
    });
  });
})();
