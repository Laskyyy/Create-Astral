import { BUCKET } from "fluid-constants";

export function createEmptyingRecipes() {
  onEvent("recipes", (event) => {
    interface EmptyingRecipe {
      input: Internal.ItemStackJS_;
      outputItem: Internal.ItemStackJS_;
      outputFluid: Internal.FluidStackJS_;
    }

    const emptyingRecipes: EmptyingRecipe[] = [
      {
        input: "techreborn:water_coolant_cell_60k",
        outputItem: Item.of("techreborn:cell", 6),
        outputFluid: { fluid: "kubejs:released_water_coolant", amount: BUCKET },
      },
    ] as const;
    emptyingRecipes.forEach((recipe) => {
      event.recipes.createEmptying([recipe.outputItem, recipe.outputFluid], recipe.input);
    });
  });
}
