import { BUCKET } from "fluid-constants";

export function shimmerRefineryRecipes() {
  onEvent("recipes", (event) => {
    const shimmerRefineryStructure = [
      ["ee ee", "ee ee", "  m  ", "ee ee", "ee ee"],
      ["dd dd", "dd dd", "  a  ", "dd dd", "dd dd"],
      ["dd dd", "dd dd", "  a  ", "dd dd", "dd dd"],
      ["ddadd", "ddbdd", "abbba", "ddbdd", "ddadd"],
      ["     ", "  a  ", " aca ", "  a  ", "     "],
    ] as const;

    /*
     * Aim of this script is to fix the blaze burner jank caused by fluid burners and superheated burners
     * In each recipe block, specify the burners allowed for the recipe in a list
     *
     * Burners that can be used:
     * - "create:blaze_burner"                               --- Unheated blaze burner
     * - "createaddition:liquid_blaze_burner"                --- Unheated liquid burner
     * - "create:blaze_burner{fuelLevel:1}"                  --- Heated blaze burner
     * - "createaddition:liquid_blaze_burner{fuelLevel:1}"   --- Heated liquid blaze burner
     * - "create:blaze_burner{fuelLevel:2}"                  --- Superheated blaze burner
     * - "createaddition:liquid_blaze_burner{fuelLevel:2}"   --- Superheated liquid blaze burner
     * - "create:blaze_burner{isCreative:1b}"                --- Creative blaze cake on blaze burner
     * - "createaddition:liquid_blaze_burner{isCreative:1b}" --- Creative blaze cake on liquid blaze burner
     *
     * Heat state of creative burners is not stored in NBT so any burner interacted with a creative cake will work, including those in smouldering state.
     *
     * All fields (burnersAllowed, time, itemInput, fluidInput, energy, and itemOutput) need to be filled to make the recipes work.
     * Any extra recipes can go outside the forEach loop.
     */

    type Burners = "create:blaze_burner" | "createaddition:liquid_blaze_burner";
    type HeatedNBT = "fuelLevel:1" | "isCreative:1b";
    type SuperheatedNBT = "fuelLevel:2" | "isCreative:1b";
    type Burner = Burners | `${Burners}{${HeatedNBT | SuperheatedNBT}}`;
    interface ShimmerRefineryRecipe {
      burnersAllowed: Burner[];
      time: number;
      itemInput: { item: Special.Item; count: number };
      fluidInput: { fluid: Special.Fluid; amount: number };
      energy: number;
      itemOutput: { item: Special.Item; count: number };
    }

    const shimmerRefineryRecipes: ShimmerRefineryRecipe[] = [
      {
        burnersAllowed: [
          "create:blaze_burner{fuelLevel:2}",
          "createaddition:liquid_blaze_burner{fuelLevel:2}",
          "create:blaze_burner{isCreative:1b}",
          "createaddition:liquid_blaze_burner{isCreative:1b}",
        ],
        time: 125,
        fluidInput: { fluid: "kubejs:shimmer", amount: BUCKET },
        itemInput: { item: "createastral:refining_agent", count: 1 },
        energy: 20000,
        itemOutput: { item: "techreborn:uu_matter", count: 1 },
      },
    ];
    shimmerRefineryRecipes.forEach((recipe) => {
      event.custom({
        type: "custommachinery:custom_machine",
        machine: "createastral:shimmer_refinery",
        time: recipe.time,
        requirements: [
          {
            type: "custommachinery:structure",
            keys: {
              a: "dbe:steel_frame",
              b: "techreborn:advanced_machine_casing",
              c: "techreborn:industrial_machine_frame",
              d: "yttr:magtank",
              e: "create:distillation_tower/blaze_burners",
            },
            pattern: shimmerRefineryStructure,
          },
          {
            type: "custommachinery:block",
            mode: "input",
            action: "check",
            pos: [-2, 0, -2, 2, 0, 2],
            filter: recipe.burnersAllowed,
            whitelist: true,
            amount: 16,
            comparator: "==",
          },
          {
            type: "custommachinery:fluid",
            fluid: recipe.fluidInput.fluid,
            amount: recipe.fluidInput.amount,
            mode: "input",
          },
          {
            type: "custommachinery:item",
            mode: "input",
            item: recipe.itemInput.item,
            amount: recipe.itemInput.count,
          },

          {
            type: "custommachinery:energy",
            mode: "input",
            amount: recipe.energy,
          },
          {
            type: "custommachinery:item",
            item: recipe.itemOutput.item,
            amount: recipe.itemOutput.count,
            mode: "output",
          },
        ],
      });
    });
  });
}
