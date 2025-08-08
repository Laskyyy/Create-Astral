(function techRebornSolidCanningMachineRecipes() {
  onEvent("recipes", (event) => {
    /**
     * @typedef SolidCanningMachineRecipe
     * @property {ItemOrCell[]} input
     * @property {ItemOrCell[]} output
     * @property {number} power Base energy per tick.
     * @property {number} time Time in ticks.
     */

    /** @typedef {Cell | Item} ItemOrCell */

    /**
     * @typedef Item
     * @property {Exclude<Special.Item, "techreborn:cell">} item
     * @property {object} [nbt]
     * @property {number} [count]
     */

    /**
     * @typedef Cell
     * @property {"techreborn:cell"} item
     * @property {{fluid: Special.Fluid}} [nbt]
     * @property {number} [count]
     */

    /** @type {SolidCanningMachineRecipe[]} */
    const solidCanningMachineRecipes = [
      {
        input: [{ item: "createastral:pure_biomatter" }, { item: "techreborn:cell" }],
        output: [{ item: "techreborn:cell", nbt: { fluid: "techreborn:biofuel" } }],
        power: 1,
        time: 100,
      },
      {
        input: [{ item: "minecraft:chorus_fruit" }, { item: "techreborn:cell" }],
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
