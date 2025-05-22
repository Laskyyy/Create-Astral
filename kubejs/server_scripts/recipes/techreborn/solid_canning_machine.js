(function techRebornSolidCanningMachineRecipes() {
  onEvent("recipes", (event) => {
    const solidCanningMachineRecipes = [
      {
        input: [{ item: "createastral:pure_biomatter" }, { item: "techreborn:cell", nbt: "empty" }],
        output: [{ item: "techreborn:cell", nbt: { fluid: "techreborn:biofuel" } }],
        power: 1,
        time: 100,
      },
      {
        input: [{ item: "minecraft:chorus_fruit" }, { item: "techreborn:cell", nbt: "empty" }],
        output: [{ item: "techreborn:cell", nbt: { fluid: "techreborn:compressed_air" } }],
        power: 1,
        time: 60,
      },
    ];
    solidCanningMachineRecipes.forEach((recipe) => {
      event.custom({
        type: "techreborn:solid_canning_machine",
        power: recipe.power,
        time: recipe.time,
        ingredients: recipe.input,
        results: recipe.output,
      });
    });
  });
})();
