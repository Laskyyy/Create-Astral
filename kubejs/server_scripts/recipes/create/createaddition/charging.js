(function createAdditionChargingRecipes() {
  onEvent("recipes", (event) => {
    const chargingRecipes = [
      {
        input: ["kubejs:molten_desh_bucket", 1],
        output: ["tconstruct:molten_electrum_bucket", 1],
        energy: 4000,
      },
      {
        input: ["techreborn:synthetic_redstone_crystal", 1],
        output: ["minecraft:redstone", 5],
        energy: 5000,
      },
      {
        input: ["createastral:golden_pin", 1],
        output: ["createastral:electrified_pin", 1],
        energy: 800,
      },
      {
        input: ["astraladditions:shimmer_heart", 1],
        output: ["astraladditions:awakened_shimmer_heart", 1],
        energy: 800,
      },
      {
        input: ["yttr:neodymium_dust", 1],
        output: ["yttr:neodymium_disc", 1],
        energy: 5000,
      },
      {
        input: ["minecraft:tuff", 1], // add a use for ashes, making tuff much more relevant if you can spare the power
        output: ["techreborn:ashes_dust", 1],
        energy: 10000,
      },
    ];
    chargingRecipes.forEach((recipe) => {
      event.custom({
        type: "createaddition:charging",
        input: {
          item: recipe.input[0],
          count: recipe.input[1],
        },
        result: {
          item: recipe.output[0],
          count: recipe.output[1],
        },
        energy: recipe.energy,
      });
    });
  });
})();
