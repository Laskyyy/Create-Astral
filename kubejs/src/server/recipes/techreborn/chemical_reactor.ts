export function techRebornChemicalReactorRecipes() {
  onEvent("recipes", (event) => {
    [
      {
        input: [
          { fluid: "techreborn:potassium", count: 2, holder: "techreborn:cell" },
          { fluid: "techreborn:sodium", count: 2, holder: "techreborn:cell" },
        ],
        output: [{ item: "techreborn:nak_coolant_cell_60k" }],
        power: 30,
        time: 400,
      },
    ].forEach((recipe) => {
      event.custom({
        type: "techreborn:chemical_reactor",
        power: recipe.power,
        time: recipe.time,
        ingredients: recipe.input,
        results: recipe.output,
      });
    });
  });
}
