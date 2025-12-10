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
      {
        input: [{ item: "techreborn:compressed_plantball", count: 1 }],
        output: [{ item: "createaddition:biomass", count: 1 }],
        time: 120,
        power: 6,
      },
      {
        input: [{ tag: "minecraft:beds", count: 1 }],
        output: [{ item: "minecraft:string", count: 9 }],
        time: 120,
        power: 6,
      },
      {
        input: [{ tag: "minecraft:banners", count: 3 }],
        output: [{ item: "minecraft:string", count: 15 }],
        time: 120,
        power: 6,
      },
      {
        input: [{ item: "minecraft:sweet_berries", count: 4 }],
        output: [{ item: "minecraft:red_dye", count: 5 }],
        time: 300,
        power: 10,
      }
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
