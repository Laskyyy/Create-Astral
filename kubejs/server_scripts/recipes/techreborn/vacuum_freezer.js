(function techRebornVacuumFreezerRecipes() {
  onEvent("recipes", (event) => {
    const vacuumFreezerRecipes = [
      {
        input: [
          {
            fluid: "minecraft:water",
            holder: "techreborn:cell",
          },
        ],
        output: [
          {
            item: "techreborn:cell",
            nbt: {
              fluid: "kubejs:supercooled_water",
            },
          },
        ],
        power: 25,
        time: 100,
      },
    ];
    vacuumFreezerRecipes.forEach((recipe) => {
      event.custom({
        type: "techreborn:vacuum_freezer",
        power: recipe.power,
        time: recipe.time,
        ingredients: recipe.input,
        results: recipe.output,
      });
    });
  });
})();
