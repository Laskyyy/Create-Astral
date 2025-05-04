export function meltingFuelRecipes() {
  onEvent("recipes", (event) => {
    [
      {
        fluid: ["tconstruct:blazing_blood", NUGGET],
        time: 150,
        temp: 2200,
      },
      {
        fluid: ["minecraft:lava", NUGGET],
        time: 150,
        temp: 1500,
      },
      {
        fluid: ["kubejs:hellfire", NUGGET],
        time: 150,
        temp: 3000,
      },
    ].forEach((recipe) => {
      event.custom({
        type: "tconstruct:melting_fuel",
        fluid: { name: recipe.fluid[0], amount: recipe.fluid[1] },
        duration: recipe.time,
        temperature: recipe.temp,
      });
    });
  });
}
