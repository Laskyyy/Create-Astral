export function techRebornCompressorRecipes() {
  onEvent("recipes", (event) => {
    sheetCompressing(event);
    [
      {
        input: [
          {
            item: "techreborn:compressed_plantball",
            count: 4,
          },
        ],
        output: [
          {
            item: "createaddition:biomass",
            count: 1,
          },
        ],
        time: 300,
        power: 10,
      },
      {
        input: [
          {
            item: "createastral:fragile_sheet",
            count: 16,
          },
        ],
        output: [
          {
            item: "createastral:fragile_rocket_fin",
            count: 1,
          },
        ],
        time: 300,
        power: 10,
      },
    ].forEach((recipe) => {
      event.custom({
        type: "techreborn:compressor",
        power: recipe.power,
        time: recipe.time,
        ingredients: recipe.input,
        results: recipe.output,
      });
    });
  });

  function sheetCompressing(event) {
    MATERIALS.forEach((material) => {
      event.custom({
        type: "techreborn:compressor",
        power: 10,
        time: 300,
        ingredients: [
          {
            item: material.ingot,
          },
        ],
        results: [
          {
            item: material.plate,
          },
        ],
      });
    });
  }
}
