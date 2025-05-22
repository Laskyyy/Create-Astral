(function techRebornBlastFurnaceRecipes() {
  onEvent("recipes", (event) => {
    const blastFurnaceRecipes = [
      {
        input: [
          { fluid: "techreborn:carbon", holder: "techreborn:cell", count: 1 },
          { fluid: "tconstruct:molten_iron", holder: "techreborn:cell", count: 1 },
        ],
        output: { item: "techreborn:steel_dust", count: 4 },
        power: 128,
        time: 1000,
        heat: 1500,
      },
    ];
    blastFurnaceRecipes.forEach((recipe) => {
      event.custom({
        type: "techreborn:blast_furnace",
        power: recipe.power,
        time: recipe.time,
        heat: recipe.heat,
        ingredients: recipe.input,
        results: recipe.output,
      });
    });
  });
})();
