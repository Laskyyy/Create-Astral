(function farmersDelightCookingRecipes() {
  onEvent("recipes", (event) => {
    /**
     * @typedef FarmersDelightCookingRecipe
     * @property {{ item: Special.Item }[]} input
     * @property {{ item: Special.Item }} output
     * @property {number} xp
     * @property {number} time
     */

    /** @type {FarmersDelightCookingRecipe[]} */
    const farmersDelightCookingRecipes = [
      {
        input: [{ item: "createastral:astral_singularity" }],
        output: { item: "astralfoods:astral_sauce" },
        xp: 10.0,
        time: 360,
      },
      {
        input: [
          { item: "astralfoods:astral_sauce" },
          { item: "astralfoods:quantum_bites" },
          { item: "farmersdelight:raw_pasta" },
        ],
        output: { item: "astralfoods:quantum_pasta" },
        xp: 8.0,
        time: 300,
      },
    ];
    farmersDelightCookingRecipes.forEach((recipe) => {
      event.custom({
        type: "farmersdelight:cooking",
        cookingtime: recipe.time,
        experience: recipe.xp,
        ingredients: recipe.input,
        recipe_book_tab: "drinks", // ignore this
        result: recipe.output,
      });
    });
  });
})();
