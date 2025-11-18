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
        power: 8,
        time: 1200,
      },
	  {
        input: [
          { item: "createdeco:cast_iron_ingot", count: 4 },
          { item: "techreborn:carbon_fiber", count: 3 },
        ],
        output: { item: "techreborn:steel_dust", count: 1 },
        power: 9,
        time: 1400,
      },
	  {
        input: [
          { item: "minecraft:copper_ingot", count: 1 },
          { item: "techreborn:tin_ingot", count: 1 },
        ],
        output: { item: "createastral:bronze_ingot", count: 2 },
        power: 3,
        time: 600,
      },
	  {
        input: [
          { item: "minecraft:copper_ingot", count: 1 },
          { item: "minecraft:gold_ingot", count: 1 },
        ],
        output: { item: "tconstruct:rose_gold_ingot", count: 2 },
        power: 6,
        time: 1000,
      },
	  {
        input: [
          { item: "create:andesite_alloy", count: 2 },
          { item: "minecraft:iron_ingot", count: 1 },
        ],
        output: { item: "dustrial_decor:cast_iron_billet", count: 3 },
        power: 5,
        time: 1000,
      },
	  {
        input: [
          { item: "minecraft:iron_ingot", count: 2 },
          { item: "techreborn:charcoal_dust", count: 2 },
        ],
        output: { item: "dustrial_decor:industrial_iron_billet", count: 4 },
        power: 5,
        time: 1000,
      },
	  {
        input: [
          { item: "dustrial_decor:cast_iron_billet", count: 1 },
          { item: "minecraft:clay_ball", count: 3 },
        ],
        output: { item: "create:andesite_alloy", count: 3 },
        power: 4,
        time: 600,
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
