(function vineryWoodFiredOvenRecipes() {
  onEvent("recipes", (event) => {
    /**
     * @typedef WoodFiredOvenRecipe
     * @property {Helper.ItemOrTag[]} input
     * @property {Internal.ItemStackJS_} output
     * @property {number} outputCount
     * @property {number} xp
     */

    /** @type {WoodFiredOvenRecipe[]} */
    const woodFiredOvenRecipes = [
      {
        input: [{ tag: "minecraft:dough" }, { tag: "minecraft:dough" }, { item: "minecraft:sugar" }],
        output: "vinery:toast",
        outputCount: 3,
        xp: 0.35,
      },
    ];
    woodFiredOvenRecipes.forEach((recipe) => {
      event.custom({
        type: "vinery:wood_fired_oven_cooking",
        ingredients: recipe.input,
        item: recipe.output,
        count: recipe.outputCount,
        experience: recipe.xp,
      });
    });
  });
})();
