(function createEmptyingRecipes() {
  const BUCKET = global.BUCKET;
  const GEM_BLOCK = global.GEM_BLOCK;
  const SLIMEBALL = global.SLIMEBALL;
  const INGOT = global.INGOT;
  const GEM = global.GEM;
  const NUGGET = global.NUGGET;
  const mB = global.mB;

  onEvent("recipes", (event) => {
    const emptyingRecipes = [
      {
        input: "techreborn:water_coolant_cell_60k",
        outputItem: Item.of("techreborn:cell", 6),
        outputFluid: { fluid: "kubejs:released_water_coolant", amount: BUCKET },
      },
    ];
    emptyingRecipes.forEach((recipe) => {
      event.recipes.createEmptying([recipe.outputItem, recipe.outputFluid], recipe.input);
    });
  });
})();
