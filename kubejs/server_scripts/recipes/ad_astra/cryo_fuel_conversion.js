(function adAstraCryoFuelConversionRecipes() {
  onEvent("recipes", (event) => {
    [
      {
        input: { item: "createastral:prismatic_crystal" },
        output: { name: "kubejs:aurorite" },
        ratio: 0.2,
      },
      {
        input: { item: "minecraft:ice" },
        output: { name: "techreborn:hydrogen" },
        ratio: 0.001,
      },
      {
        input: { item: "minecraft:packed_ice" },
        output: { name: "techreborn:hydrogen" },
        ratio: 0.002,
      },
      {
        input: { item: "minecraft:blue_ice" },
        output: { name: "techreborn:hydrogen" },
        ratio: 0.005,
      },
      {
        input: { item: "ad_astra:ice_shard" },
        output: { name: "techreborn:hydrogen" },
        ratio: 0.025,
      },
    ].forEach((recipe) => {
      event.custom({
        type: "ad_astra:cryo_fuel_conversion",
        input: recipe.input,
        output: recipe.output,
        conversion_ratio: recipe.ratio,
      });
    });
  });
})();
