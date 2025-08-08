(function techRebornVacuumFreezerRecipes() {
  onEvent("recipes", (event) => {
    // Blame Tech Reborn for this type
    /**
     * @typedef VacuumFreezerRecipe
     * @property {(FluidCell | {item: Special.Item, count?: number})[]} input
     * @property {ItemOrCell[]} output
     * @property {number} power
     * @property {number} time
     */

    /**
     * @typedef FluidCell
     * @property {Special.Fluid} fluid
     * @property {Special.Item} holder
     * @property {number} [count]
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

    /** @type {VacuumFreezerRecipe[]} */
    const vacuumFreezerRecipes = [
      {
        input: [{ fluid: "minecraft:water", holder: "techreborn:cell" }],
        output: [{ item: "techreborn:cell", nbt: { fluid: "kubejs:supercooled_water" } }],
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
