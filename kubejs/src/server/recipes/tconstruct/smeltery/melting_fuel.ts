import { NUGGET } from "fluid-constants";

export function meltingFuelRecipes() {
  onEvent("recipes", (event) => {
    interface MeltingFuelRecipe {
      fluid: { name: Special.Fluid; amount: number };
      time: number;
      temp: number;
    }

    const meltingFuelRecipes: MeltingFuelRecipe[] = [
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
}
