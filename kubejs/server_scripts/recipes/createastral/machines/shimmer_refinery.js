(function shimmerRefineryRecipes() {
  const BUCKET = global.BUCKET;
  const GEM_BLOCK = global.GEM_BLOCK;
  const SLIMEBALL = global.SLIMEBALL;
  const INGOT = global.INGOT;
  const GEM = global.GEM;
  const NUGGET = global.NUGGET;
  const mB = global.mB;

  onEvent("recipes", (event) => {
    const shimmerRefineryStructure = [
      ["ee ee", "ee ee", "  m  ", "ee ee", "ee ee"],
      ["dd dd", "dd dd", "  a  ", "dd dd", "dd dd"],
      ["dd dd", "dd dd", "  a  ", "dd dd", "dd dd"],
      ["ddadd", "ddbdd", "abbba", "ddbdd", "ddadd"],
      ["     ", "  a  ", " aca ", "  a  ", "     "],
    ];
    const shimmerRefineryRecipes = [
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
})();
