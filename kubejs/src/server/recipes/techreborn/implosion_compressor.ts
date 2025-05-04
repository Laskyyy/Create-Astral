export function techRebornImplosionCompressorRecipes() {
  onEvent("recipes", (event) => {
    sheetImplosionCompressing(event);
    [
      {
        input: [
          { count: 64, item: "techreborn:coal_dust" },
          { item: "minecraft:tnt", count: 4 },
        ],
        output: [
          { item: "minecraft:diamond", count: 1 },
          { item: "techreborn:dark_ashes_dust", count: 8 },
        ],
        power: 60,
        time: 1000,
      },
    ].forEach((recipe) => {
      event.custom({
        type: "techreborn:implosion_compressor",
        power: recipe.power,
        time: recipe.time,
        ingredients: recipe.input,
        results: recipe.output,
      });
    });
  });

  function sheetImplosionCompressing(event) {
    MATERIALS.forEach((material) => {
      event.custom({
        type: "techreborn:implosion_compressor",
        power: 30,
        time: 1200,
        ingredients: [
          {
            item: material.block,
          },
          {
            item: "minecraft:tnt",
          },
        ],
        results: [
          {
            item: material.plate,
            count: 9,
          },
        ],
      });
      event.custom({
        type: "techreborn:implosion_compressor",
        power: 50,
        time: 300,
        ingredients: [
          {
            item: material.block,
            count: 4,
          },
          {
            item: "minecraft:end_crystal",
          },
        ],
        results: [
          {
            item: material.plate,
            count: 36,
          },
          {
            item: "techreborn:dark_ashes_dust",
            count: 4,
          },
        ],
      });
    });
  }
}
