(function meltingFuelRecipes() {
  const BUCKET = global.BUCKET;
  const GEM_BLOCK = global.GEM_BLOCK;
  const SLIMEBALL = global.SLIMEBALL;
  const INGOT = global.INGOT;
  const GEM = global.GEM;
  const NUGGET = global.NUGGET;
  const mB = global.mB;

  onEvent("recipes", (event) => {
    const meltingFuelRecipes = [
      {
        fluid: { name: "tconstruct:blazing_blood", amount: NUGGET },
        time: 150,
        temp: 2200,
      },
      {
        fluid: { name: "minecraft:lava", amount: NUGGET },
        time: 150,
        temp: 1500,
      },
      {
        fluid: { name: "kubejs:hellfire", amount: NUGGET },
        time: 150,
        temp: 3000,
      },
    ];
    meltingFuelRecipes.forEach((recipe) => {
      event.custom({
        type: "tconstruct:melting_fuel",
        fluid: { name: recipe.fluid.name, amount: recipe.fluid.amount },
        duration: recipe.time,
        temperature: recipe.temp,
      });
    });
  });
})();
