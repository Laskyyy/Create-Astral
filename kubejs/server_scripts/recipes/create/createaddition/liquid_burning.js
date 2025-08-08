(function createAdditionLiquidBurningRecipes() {
  const { BUCKET, GEM_BLOCK, SLIMEBALL, INGOT, GEM, NUGGET, mB } = global.fluids;

  onEvent("recipes", (event) => {
    /**
     * @typedef FluidWithAmount
     * @property {Special.Fluid} fluid
     * @property {number} amount
     */

    /**
     * @typedef LiquidBurningRecipe
     * @property {FluidWithAmount} input
     * @property {number} burnTime
     * @property {boolean} superheated
     */

    /** @type {LiquidBurningRecipe[]} */
    const liquidBurningRecipes = [
      {
        input: { fluid: "createaddition:bioethanol", amount: BUCKET },
        burnTime: 12000,
        superheated: false,
      },
      {
        input: { fluid: "minecraft:lava", amount: BUCKET },
        burnTime: 6000,
        superheated: false,
      },
      {
        input: { fluid: "createaddition:seed_oil", amount: BUCKET },
        burnTime: 6000,
        superheated: false,
      },
      {
        input: { fluid: "tconstruct:blazing_blood", amount: BUCKET },
        burnTime: 18000,
        superheated: false,
      },
      {
        input: { fluid: "kubejs:hellfire", amount: BUCKET / 4 },
        burnTime: 2400,
        superheated: true,
      },
    ];
    liquidBurningRecipes.forEach((recipe) => {
      event.custom({
        type: "createaddition:liquid_burning",
        input: recipe.input,
        burnTime: recipe.burnTime,
        superheated: recipe.superheated,
      });
    });
  });
})();
