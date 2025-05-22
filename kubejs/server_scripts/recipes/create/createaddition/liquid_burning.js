(function createAdditionLiquidBurningRecipes() {
  const BUCKET = global.BUCKET;
  const GEM_BLOCK = global.GEM_BLOCK;
  const SLIMEBALL = global.SLIMEBALL;
  const INGOT = global.INGOT;
  const GEM = global.GEM;
  const NUGGET = global.NUGGET;
  const mB = global.mB;

  onEvent("recipes", (event) => {
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
