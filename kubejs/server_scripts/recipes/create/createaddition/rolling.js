// @ts-check
(function createAdditionRollingRecipes() {
  onEvent("recipes", (event) => {
    /**
     * @typedef RollingMillRecipe
     * @property {Helper.ItemOrTag} input
     * @property {{item: Special.Item, count: number}} output
     */

    /** @type {RollingMillRecipe[]} */
    const rollingMillRecipes = [
      {
        input: { tag: "c:nuggets/gold" },
        output: { item: "createastral:golden_pin", count: 1 },
      },
      {
        input: { item: "ad_astra:calorite_nugget" },
        output: { item: "createastral:calorite_pin", count: 1 },
      },
    ];

    rollingMillRecipes.forEach((recipe) => {
      event.custom({
        type: "createaddition:rolling",
        input: recipe.input,
        result: recipe.output,
      });
    });
  });
})();
