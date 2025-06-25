(function meltingFuelRecipes() {
  const { BUCKET, GEM_BLOCK, SLIMEBALL, INGOT, GEM, NUGGET, mB } = global.fluids;

  onEvent("recipes", (event) => {
    /**
     * @typedef MeltingFuelRecipe
     * @property {{ name: Special.Fluid; amount: number }} fluid
     * @property {number} time
     * @property {number} temp
     */

    /** @type {MeltingFuelRecipe[]} */
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
