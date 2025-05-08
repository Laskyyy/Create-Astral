

(function techRebornCentrifugeRecipes() {
  onEvent("recipes", (event) => {
    const centrifugeRecipes = [
      {
        input: [{ item: "farmersdelight:rich_soil", count: 2 }],
        output: [
          { item: "minecraft:coarse_dirt", count: 2 },
          { item: "techreborn:saltpeter_dust", count: 4 },
        ],
        power: 8,
        time: 500,
      },
      {
        input: [{ item: "yttr:yttrium_dust", count: 4 }],
        output: [
          { item: "createastral:crushed_raw_calorite", count: 3 },
          { item: "createastral:uranium_residue", count: 1 },
        ],
        power: 100,
        time: 500,
      },
      {
        input: [
          { item: "ae2:certus_quartz_crystal", count: 1 },
          { item: "techreborn:cell", count: 13 },
        ],
        output: [
          { item: "techreborn:cell", nbt: { fluid: "ad_astra:oxygen" }, count: 10 },
          { item: "techreborn:cell", nbt: { fluid: "techreborn:silicon" }, count: 3 },
        ],
        power: 8,
        time: 500,
      },
      {
        input: [
          { item: "minecraft:soul_sand", count: 16 },
          { item: "techreborn:cell", nbt: "null" },
        ],
        output: [
          { item: "minecraft:sand", count: 10 },
          { item: "techreborn:saltpeter_dust", count: 4 },
          { item: "techreborn:coal_dust" },
          { item: "techreborn:cell", nbt: { fluid: "techreborn:oil" } },
        ],
        power: 5,
        time: 2500,
      },
      {
        input: [
          { item: "minecraft:soul_soil", count: 16 },
          { item: "techreborn:cell", nbt: "null" },
        ],
        output: [
          { item: "minecraft:dirt", count: 8 },
          { item: "techreborn:saltpeter_dust", count: 4 },
          { item: "techreborn:coal_dust" },
          { item: "techreborn:cell", nbt: { fluid: "techreborn:oil" } },
        ],
        power: 5,
        time: 2500,
      },
    ];
    centrifugeRecipes.forEach((recipe) => {
      event.custom({
        type: "techreborn:centrifuge",
        power: recipe.power,
        time: recipe.time,
        ingredients: recipe.input,
        results: recipe.output,
      });
    });
  });
})();
