export function distilleryRecipes() {
  onEvent("recipes", (event) => {
    const oldDistillationTowerStructure = [
      // old structure is still supported to avoid breaking factories immediately
      ["       ", "       ", "  eee  ", "  eee  ", "  eee  ", "       ", "       "],
      ["   a   ", "   a   ", "  bbb  ", "aabbbaa", "  bbb  ", "   a   ", "   a   "],
      ["       ", "   a   ", "  ada  ", " ad da ", "  ada  ", "   a   ", "       "],
      ["       ", "       ", "   c   ", "  c c  ", "   m   ", "       ", "       "],
      ["       ", "       ", "   c   ", "  c c  ", "   c   ", "       ", "       "],
      ["       ", "       ", "       ", "   c   ", "       ", "       ", "       "],
    ];

    const newDistillationTowerStructure = [
      // moved the controller block so 5 sides are accessible including the back
      ["       ", "       ", "  eee  ", "  eee  ", "  eee  ", "       ", "       "],
      ["   a   ", "   a   ", "  bbb  ", "aabbbaa", "  bbb  ", "   a   ", "   a   "],
      ["       ", "   a   ", "  ada  ", " ad da ", "  ada  ", "   a   ", "       "],
      ["       ", "       ", "   c   ", "  c c  ", "   c   ", "       ", "       "],
      ["       ", "       ", "   c   ", "  c c  ", "   m   ", "       ", "       "],
      ["       ", "       ", "       ", "   c   ", "       ", "       ", "       "],
    ];

    const distillationTowerStructure = [oldDistillationTowerStructure, newDistillationTowerStructure];

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
     * All fields (burnersAllowed, time, itemInput, fluidInput, energy, and fluidOutput) need to be filled to make the recipes work.
     * Any extra recipes can go outside the forEach loop.
     *
     * burnersAllowed: [array],
     * time: integer,
     * itemInput: ["item", count],
     * fluidInput: ["fluid", amount],
     * energy: integer,
     * fluidOutput: ["fluid", amount]
     */

    [
      {
        // biofuel
        burnersAllowed: [
          "create:blaze_burner{fuelLevel:1}",
          "createaddition:liquid_blaze_burner{fuelLevel:1}",
          "create:blaze_burner{isCreative:1b}",
          "createaddition:liquid_blaze_burner{isCreative:1b}",
        ],
        time: 100,
        itemInput: ["createastral:pure_biomatter", 1],
        fluidInput: ["minecraft:water", BUCKET],
        energy: 10000,
        fluidOutput: ["techreborn:biofuel", BUCKET * 4],
      },
      {
        // fuel -- creative burners would conflict with fuel2
        burnersAllowed: ["create:blaze_burner{fuelLevel:1}", "createaddition:liquid_blaze_burner{fuelLevel:1}"],
        time: 100,
        itemInput: ["createastral:refining_agent", 1],
        fluidInput: ["techreborn:oil", BUCKET],
        energy: 10000,
        fluidOutput: ["kubejs:hellfire", BUCKET],
      },
      {
        // fuel2
        burnersAllowed: [
          "create:blaze_burner{fuelLevel:2}",
          "createaddition:liquid_blaze_burner{fuelLevel:2}",
          "create:blaze_burner{isCreative:1b}",
          "createaddition:liquid_blaze_burner{isCreative:1b}",
        ],
        time: 100,
        itemInput: ["createastral:refining_agent", 1],
        fluidInput: ["techreborn:oil", BUCKET],
        energy: 2500,
        fluidOutput: ["kubejs:hellfire", BUCKET],
      },
      {
        // uranium
        burnersAllowed: [
          "create:blaze_burner{fuelLevel:2}",
          "createaddition:liquid_blaze_burner{fuelLevel:2}",
          "create:blaze_burner{isCreative:1b}",
          "createaddition:liquid_blaze_burner{isCreative:1b}",
        ],
        time: 200,
        itemInput: ["createastral:uranium_residue", 4],
        fluidInput: ["techreborn:mercury", BUCKET],
        energy: 10000,
        fluidOutput: ["tconstruct:molten_uranium", BUCKET],
      },
    ].forEach((recipe) => {
      for (const towerStructure of distillationTowerStructure) {
        event.custom({
          type: "custommachinery:custom_machine",
          machine: "createastral:distillery",
          time: recipe.time,
          requirements: [
            {
              type: "custommachinery:structure",
              keys: {
                a: "dbe:steel_frame",
                b: "techreborn:basic_machine_casing",
                c: "techreborn:basic_machine_frame",
                d: "techreborn:advanced_machine_frame",
                e: "create:distillation_tower/blaze_burners",
              },
              pattern: towerStructure,
            },
            {
              type: "custommachinery:block",
              mode: "input",
              action: "check",
              pos: [-1, -3, -2, 1, -4, 0],
              filter: recipe.burnersAllowed,
              whitelist: true,
              amount: 9,
              comparator: "==",
            },
            {
              type: "custommachinery:fluid",
              fluid: recipe.fluidInput[0],
              amount: recipe.fluidInput[1],
              mode: "input",
            },
            {
              type: "custommachinery:item",
              item: recipe.itemInput[0],
              amount: recipe.itemInput[1],
              mode: "input",
            },
            {
              type: "custommachinery:energy",
              mode: "input",
              amount: recipe.energy,
            },
            {
              type: "custommachinery:fluid",
              fluid: recipe.fluidOutput[0],
              amount: recipe.fluidOutput[1],
              mode: "output",
            },
          ],
        });
      }
    });
  });
}
