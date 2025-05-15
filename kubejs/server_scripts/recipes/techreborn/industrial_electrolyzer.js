(function techRebornIndustrialElectrolyzerRecipes() {
  onEvent("recipes", (event) => {
    const industrialElectrolyzerRecipes = [
      {
        input: [{ item: "ad_astra:calorite_ingot", count: 16 }],
        output: [
          { item: "yttr:quicksilver", count: 3 },
          { item: "ad_astra:ostrum_ingot", count: 7 },
          { item: "minecraft:red_dye", count: 4 },
        ],
        power: 400,
        time: 1100,
      },
      {
        input: [
          { item: "techreborn:clay_dust", count: 16 },
          { item: "techreborn:cell", count: 3, nbt: "empty" },
        ],
        output: [
          { item: "techreborn:cell", nbt: { fluid: "techreborn:lithium" }, count: 2 },
          { item: "techreborn:cell", nbt: { fluid: "techreborn:sodium" }, count: 1 },
          { item: "techreborn:lazurite_dust", count: 2 },
        ],
        power: 100,
        time: 1100,
      },
      {
        input: [
          { item: "techreborn:sodalite_dust", count: 8 },
          { item: "techreborn:cell", count: 3, nbt: "empty" },
        ],
        output: [
          { item: "techreborn:cell", nbt: { fluid: "techreborn:lithium" }, count: 2 },
          { item: "techreborn:cell", nbt: { fluid: "techreborn:sodium" }, count: 1 },
        ],
        power: 100,
        time: 1100,
      },
    ];
    industrialElectrolyzerRecipes.forEach((recipe) => {
      event.custom({
        type: "techreborn:industrial_electrolyzer",
        power: recipe.power,
        time: recipe.time,
        ingredients: recipe.input,
        results: recipe.output,
      });
    });
  });
})();
