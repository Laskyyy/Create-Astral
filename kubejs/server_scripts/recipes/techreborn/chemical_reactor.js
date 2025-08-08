(function techRebornChemicalReactorRecipes() {
  onEvent("recipes", (event) => {
    /**
     * @typedef ChemicalReactorRecipe
     * @property {(FluidCell | {item: Special.Item, count?: number})[]} input
     * @property {{item: Special.Item, count?: number}[]} output
     * @property {number} power
     * @property {number} time
     */

    /**
     * @typedef FluidCell
     * @property {Special.Fluid} fluid
     * @property {Special.Item} holder
     * @property {number} count
     */

    /** @type {ChemicalReactorRecipe[]} */
    const chemicalReactorRecipes = [
      {
        input: [
          { fluid: "techreborn:potassium", count: 2, holder: "techreborn:cell" },
          { fluid: "techreborn:sodium", count: 2, holder: "techreborn:cell" },
        ],
        output: [{ item: "techreborn:nak_coolant_cell_60k" }],
        power: 30,
        time: 400,
      },
    ];
    chemicalReactorRecipes.forEach((recipe) => {
      event.custom({
        type: "techreborn:chemical_reactor",
        power: recipe.power,
        time: recipe.time,
        ingredients: recipe.input,
        results: recipe.output,
      });
    });
  });
})();
