(function distilleryRecipes() {
  const { BUCKET, GEM_BLOCK, SLIMEBALL, INGOT, GEM, NUGGET, mB } = global.fluids;

  onEvent("recipes", (event) => {
    const oldDistillationTowerStructure = /** @type {const} */ ([
      // old structure is still supported to avoid breaking factories immediately
      ["       ", "       ", "  eee  ", "  eee  ", "  eee  ", "       ", "       "],
      ["   a   ", "   a   ", "  bbb  ", "aabbbaa", "  bbb  ", "   a   ", "   a   "],
      ["       ", "   a   ", "  ada  ", " ad da ", "  ada  ", "   a   ", "       "],
      ["       ", "       ", "   c   ", "  c c  ", "   m   ", "       ", "       "],
      ["       ", "       ", "   c   ", "  c c  ", "   c   ", "       ", "       "],
      ["       ", "       ", "       ", "   c   ", "       ", "       ", "       "],
    ]);
    const newDistillationTowerStructure = /** @type {const} */ ([
      // moved the controller block so 5 sides are accessible including the back
      ["       ", "       ", "  eee  ", "  eee  ", "  eee  ", "       ", "       "],
      ["   a   ", "   a   ", "  bbb  ", "aabbbaa", "  bbb  ", "   a   ", "   a   "],
      ["       ", "   a   ", "  ada  ", " ad da ", "  ada  ", "   a   ", "       "],
      ["       ", "       ", "   c   ", "  c c  ", "   c   ", "       ", "       "],
      ["       ", "       ", "   c   ", "  c c  ", "   m   ", "       ", "       "],
      ["       ", "       ", "       ", "   c   ", "       ", "       ", "       "],
    ]);
    const distillationTowerStructure = /** @type {const} */ ([
      oldDistillationTowerStructure,
      newDistillationTowerStructure,
    ]);

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
     */

    /** @typedef {"create:blaze_burner" | "createaddition:liquid_blaze_burner"} Burners */
    /** @typedef {"fuelLevel:1" | "isCreative:1b"} HeatedNBT */
    /** @typedef {"fuelLevel:2" | "isCreative:1b"} SuperheatedNBT */
    /** @typedef {Burners | `${Burners}{${HeatedNBT | SuperheatedNBT}}`} Burner */
    /**
     * @typedef DistilleryRecipe
     * @property {Burner[]} burnersAllowed
     * @property {number} time
     * @property {{ item: Special.Item; count: number }} itemInput
     * @property {{ fluid: Special.Fluid; amount: number }} fluidInput
     * @property {number} energy
     * @property {{ fluid: Special.Fluid; amount: number }} fluidOutput
     */

    /** @type {DistilleryRecipe[]} */
    const distilleryRecipes = [
      {
        // biofuel
        burnersAllowed: [
          "create:blaze_burner{fuelLevel:1}",
          "createaddition:liquid_blaze_burner{fuelLevel:1}",
          "create:blaze_burner{isCreative:1b}",
          "createaddition:liquid_blaze_burner{isCreative:1b}",
        ],
        time: 100,
        itemInput: { item: "createastral:pure_biomatter", count: 1 },
        fluidInput: { fluid: "minecraft:water", amount: BUCKET },
        energy: 10000,
        fluidOutput: { fluid: "techreborn:biofuel", amount: BUCKET * 4 },
      },
      {
        // fuel -- creative burners would conflict with fuel2
        burnersAllowed: ["create:blaze_burner{fuelLevel:1}", "createaddition:liquid_blaze_burner{fuelLevel:1}"],
        time: 100,
        itemInput: { item: "createastral:refining_agent", count: 1 },
        fluidInput: { fluid: "techreborn:oil", amount: BUCKET },
        energy: 10000,
        fluidOutput: { fluid: "kubejs:hellfire", amount: BUCKET },
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
        itemInput: { item: "createastral:refining_agent", count: 1 },
        fluidInput: { fluid: "techreborn:oil", amount: BUCKET },
        energy: 2500,
        fluidOutput: { fluid: "kubejs:hellfire", amount: BUCKET },
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
        itemInput: { item: "createastral:uranium_residue", count: 4 },
        fluidInput: { fluid: "techreborn:mercury", amount: BUCKET },
        energy: 10000,
        fluidOutput: { fluid: "tconstruct:molten_uranium", amount: BUCKET },
      },
    ];
    distilleryRecipes.forEach((recipe) => {
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
              fluid: recipe.fluidInput.fluid,
              amount: recipe.fluidInput.amount,
              mode: "input",
            },
            {
              type: "custommachinery:item",
              item: recipe.itemInput.item,
              amount: recipe.itemInput.count,
              mode: "input",
            },
            {
              type: "custommachinery:energy",
              mode: "input",
              amount: recipe.energy,
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
})();
