(function yttrSoakingRecipes() {
  onEvent("recipes", (event) => {
    /**
     * @typedef SoakingRecipe
     * @property {{item: Special.Item}[]} input
     * @property {Special.Fluid} soakingFluid
     * @property {{block: Special.Block}} output
     * @property {Special.SoundEvent} [sound]
     */
    
    /** @type {SoakingRecipe[]} */
    const soakingRecipes = [
      {
        input: [{ item: "create:chromatic_compound" }],
        soakingFluid: "yttr:void",
        output: { block: "createastral:voidtouched_compound" },
      },
    ];
    soakingRecipes.forEach((recipe) => {
      event.custom({
        type: "yttr:soaking",
        ingredients: recipe.input,
        catalyst: { fluid: recipe.soakingFluid },
        result: recipe.output,
        sound: recipe.sound ?? "yttr:dissolve",
      });
    });
  });
})();
