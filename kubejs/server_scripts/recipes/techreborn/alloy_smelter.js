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
        time: 1200,
      },
	  {
        input: [
          { item: "minecraft:copper_ingot", count: 1 },
          { item: "create:tin_ingot", count: 1 },
        ],
        output: { item: "create:bronze_ingot", count: 2 },
        power: 48,
        time: 600,
      },
	  {
        input: [
          { item: "minecraft:copper_ingot", count: 1 },
          { item: "minecraft:gold_ingot", count: 1 },
        ],
        output: { item: "create:rose_gold_ingot", count: 2 },
        power: 96,
        time: 1000,
      },
	  {
        input: [
          { item: "create:andesite_alloy", count: 1 },
          { item: "minecraft:iron_ingot", count: 1 },
        ],
        output: { item: "dustrial_decor:cast_iron_billet", count: 2 },
        power: 96,
        time: 1000,
      },
	  {
        input: [
          { item: "dustrial_decor:cast_iron_billet", count: 1 },
          { item: "minecraft:clay", count: 3 },
        ],
        output: { item: "create:andesite_compound", count: 3 },
        power: 96,
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
