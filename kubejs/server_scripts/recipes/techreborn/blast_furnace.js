(function techRebornBlastFurnaceRecipes() {
  onEvent("recipes", (event) => {
    /**
     * @typedef BlastFurnaceRecipe
     * @property {(FluidCell | {item: Special.Item, count?: number})[]} input
     * @property {{item: Special.Item, count?: number}} output
     * @property {number} power
     * @property {number} time
     * @property {number} heat
     */

    /**
     * @typedef FluidCell
     * @property {Special.Fluid} fluid
     * @property {Special.Item} holder
     * @property {number} count
     */

    /** @type {BlastFurnaceRecipe[]} */
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
