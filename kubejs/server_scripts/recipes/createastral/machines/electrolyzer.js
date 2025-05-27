(function electrolyzerRecipes() {
  const BUCKET = global.BUCKET;
  const GEM_BLOCK = global.GEM_BLOCK;
  const SLIMEBALL = global.SLIMEBALL;
  const INGOT = global.INGOT;
  const GEM = global.GEM;
  const NUGGET = global.NUGGET;
  const mB = global.mB;

  onEvent("recipes", (event) => {
    const standardElectrolyzerStructure = /** @type {const} */ ([
      ["aaa", "aaa", "ama"],
      ["bbb", "b b", "bbb"],
      ["aaa", "aaa", "aaa"],
    ]); // air gap in middle
    const fallbackElectrolyzerStructure = /** @type {const} */ ([
      ["aaa", "aaa", "ama"],
      ["bbb", "bbb", "bbb"],
      ["aaa", "aaa", "aaa"],
    ]); // "fallback recipe for peeps who built it wrong" - lasky
    const electrolyzerStructure = /** @type {const} */ ([standardElectrolyzerStructure, fallbackElectrolyzerStructure]);
    const electrolyzerRecipes = [
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
    ];
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
})();
