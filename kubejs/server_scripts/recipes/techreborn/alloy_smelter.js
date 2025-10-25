(function techRebornAlloySmelterRecipes() {
  onEvent("recipes", (event) => {
    /**
     * @typedef AlloySmelterRecipe
     * @property {({item: Special.Item, count?: number})[]} input
     * @property {{item: Special.Item, count?: number}} output
     * @property {number} power
     * @property {number} time
     */

    /** @type {AlloySmelterRecipe[]} */
    const alloySmelterRecipes = [
      {
        input: [
          { item: "minecraft:copper_ingot", count: 1 },
          { item: "create:zinc_ingot", count: 1 },
        ],
        output: { item: "create:brass_ingot", count: 2 },
        power: 128,
        time: 1000,
      },
    ];
    alloySmelterRecipes.forEach((recipe) => {
      event.custom({
        type: "techreborn:alloy_smelter",
        power: recipe.power,
        time: recipe.time,
        ingredients: recipe.input,
        results: recipe.output,
      });
    });
  });
})();
