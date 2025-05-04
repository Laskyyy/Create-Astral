export function yttrSoakingRecipes() {
  onEvent("recipes", (event) => {
    [
      {
        input: [{ item: "create:chromatic_compound" }],
        soakingFluid: "yttr:void",
        output: { block: "createastral:voidtouched_compound" },
      },
    ].forEach((recipe) => {
      event.custom({
        type: "yttr:soaking",
        ingredients: recipe.input,
        catalyst: { fluid: recipe.soakingFluid },
        result: recipe.output,
        sound: recipe.sound ?? "yttr:dissolve",
      });
    });
  });
}
