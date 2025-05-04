import { BUCKET } from "fluid-constants";

export function createAdditionLiquidBurningRecipes() {
  onEvent("recipes", (event) => {
    interface LiquidBurningRecipe {
      input: {
        fluid: Special.Fluid;
        amount: number;
      };
      burnTime: number;
      superheated: boolean;
    }

    const liquidBurningRecipes: LiquidBurningRecipe[] = [
      {
        input: { fluid: "createaddition:bioethanol", amount: BUCKET },
        burnTime: 12000,
        superheated: false,
      },
      {
        input: { fluid: "minecraft:lava", amount: BUCKET },
        burnTime: 6000,
        superheated: false,
      },
      {
        input: { fluid: "createaddition:seed_oil", amount: BUCKET },
        burnTime: 6000,
        superheated: false,
      },
      {
        input: { fluid: "tconstruct:blazing_blood", amount: BUCKET },
        burnTime: 18000,
        superheated: false,
      },
      {
        input: { fluid: "kubejs:hellfire", amount: BUCKET / 4 },
        burnTime: 2400,
        superheated: true,
      },
    ];
    liquidBurningRecipes.forEach((recipe) => {
      event.custom({
        type: "createaddition:liquid_burning",
        input: recipe.input,
        burnTime: recipe.burnTime,
        superheated: recipe.superheated,
      });
    });
  });
}
