import { mB } from "fluid-constants";

export function electrolyzerRecipes() {
  onEvent("recipes", (event) => {
    const standardElectrolyzerStructure = [
      ["aaa", "aaa", "ama"],
      ["bbb", "b b", "bbb"],
      ["aaa", "aaa", "aaa"],
    ] as const; // air gap in middle

    const fallbackElectrolyzerStructure = [
      ["aaa", "aaa", "ama"],
      ["bbb", "bbb", "bbb"],
      ["aaa", "aaa", "aaa"],
    ] as const; // "fallback recipe for peeps who built it wrong" - lasky

    const electrolyzerStructure = [standardElectrolyzerStructure, fallbackElectrolyzerStructure] as const;

    interface ElectrolyzerRecipe {
      time: number;
      fluidInput: { fluid: Special.Fluid; amount: number };
      fluidOutput: { fluid: Special.Fluid; amount: number };
    }

    const electrolyzerRecipes: ElectrolyzerRecipe[] = [
      {
        time: 20,
        fluidInput: { fluid: "minecraft:water", amount: 100 * mB },
        fluidOutput: { fluid: "ad_astra:oxygen", amount: 40 * mB },
        // this has been buffed from 860 droplets (10.61728395061728... mB) to 3240 droplets (40 mB)
        // because 860 is a weird number and a lot of water is oxygen anyway
      },
      {
        time: 20,
        fluidInput: { fluid: "kubejs:hellfire", amount: 10 * mB },
        fluidOutput: { fluid: "kubejs:smite", amount: 100 * mB },
      },
    ] as const;
    electrolyzerRecipes.forEach((recipe) => {
      for (const electrolyzer of electrolyzerStructure) {
        event.custom({
          type: "custommachinery:custom_machine",
          machine: "createastral:electrolyser",
          time: recipe.time,
          requirements: [
            {
              type: "custommachinery:structure",
              keys: {
                a: "create:copper_casing",
                b: "createastral:copper_heating_coil",
              },
              pattern: electrolyzer,
            },
            {
              type: "custommachinery:fluid",
              fluid: recipe.fluidInput.fluid,
              amount: recipe.fluidInput.amount,
              mode: "input",
            },
            {
              type: "custommachinery:fluid",
              fluid: recipe.fluidOutput.fluid,
              amount: recipe.fluidOutput.amount,
              mode: "output",
            },
          ],
        });
      }
    });
  });
}
