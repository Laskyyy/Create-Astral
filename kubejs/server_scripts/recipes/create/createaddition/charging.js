(function createAdditionChargingRecipes() {
  onEvent("recipes", (event) => {
    /**
     * @typedef ItemWithCount
     * @property {Special.Item} item
     * @property {number} count
     */

    /**
     * @typedef ChargingRecipe
     * @property {ItemWithCount} input
     * @property {ItemWithCount} output
     * @property {number} energy
     */

    /** @type {ChargingRecipe[]} */
    const chargingRecipes = [
      {
        input: { item: "kubejs:molten_desh_bucket", count: 1 },
        output: { item: "tconstruct:molten_electrum_bucket", count: 1 },
        energy: 4000,
      },
      {
        input: { item: "techreborn:synthetic_redstone_crystal", count: 1 },
        output: { item: "minecraft:redstone", count: 5 },
        energy: 5000,
      },
      {
        input: { item: "createastral:golden_pin", count: 1 },
        output: { item: "createastral:electrified_pin", count: 1 },
        energy: 800,
      },
      {
        input: { item: "astraladditions:shimmer_heart", count: 1 },
        output: { item: "astraladditions:awakened_shimmer_heart", count: 1 },
        energy: 800,
      },
      {
        input: { item: "yttr:neodymium_dust", count: 1 },
        output: { item: "yttr:neodymium_disc", count: 1 },
        energy: 5000,
      },
      {
        input: { item: "minecraft:tuff", count: 1 }, // add a use for ashes, making tuff much more relevant if you can spare the power
        output: { item: "techreborn:ashes_dust", count: 1 },
        energy: 10000,
      },
    ];
    chargingRecipes.forEach((recipe) => {
      event.custom({
        type: "createaddition:charging",
        input: {
          item: recipe.input.item,
          count: recipe.input.count,
        },
        result: {
          item: recipe.output.item,
          count: recipe.output.count,
        },
        energy: recipe.energy,
      });
    });
  });
})();
