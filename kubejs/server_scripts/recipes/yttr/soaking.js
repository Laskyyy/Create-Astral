(function yttrSoakingRecipes() {
  onEvent("recipes", (event) => {
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
