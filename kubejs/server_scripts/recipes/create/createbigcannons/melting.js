(function createBigCannonsMeltingRecipes() {
  const BUCKET = global.BUCKET;
  const GEM_BLOCK = global.GEM_BLOCK;
  const SLIMEBALL = global.SLIMEBALL;
  const INGOT = global.INGOT;
  const GEM = global.GEM;
  const NUGGET = global.NUGGET;
  const mB = global.mB;

  onEvent("recipes", (event) => {
    /**
     * @typedef MeltingRecipe
     * @property {{item: Special.Item, count: number}} input
     * @property {{fluid: Special.Fluid, amount: number}} output
     * @property {number} time
     * @property {"heated" | "superheated"} heat
     */

    /** @type {MeltingRecipe[]} */
    const meltingRecipes = [
      {
        input: { item: "createastral:bronze_block", count: 1 },
        output: { fluid: "tconstruct:molten_bronze", amount: BUCKET },
        time: 1620,
        heat: "heated",
      },
      {
        input: { item: "createastral:bronze_ingot", count: 1 },
        output: { fluid: "tconstruct:molten_bronze", amount: INGOT },
        time: 180,
        heat: "heated",
      },
      {
        input: { item: "techreborn:bronze_nugget", count: 1 },
        output: { fluid: "tconstruct:molten_bronze", amount: NUGGET },
        time: 20,
        heat: "heated",
      },
      {
        input: { item: "createbigcannons:bronze_scrap", count: 1 },
        output: { fluid: "tconstruct:molten_bronze", amount: NUGGET },
        time: 20,
        heat: "heated",
      },
      {
        input: { item: "minecraft:coal", count: 8 },
        output: { fluid: "techreborn:carbon", amount: 125 * mB },
        time: 300,
        heat: "heated",
      },
      {
        input: { item: "yttr:ultrapure_carbon", count: 1 },
        output: { fluid: "techreborn:carbon", amount: 250 * mB },
        time: 300,
        heat: "superheated",
      },
      {
        input: { item: "createastral:ender_mush", count: 1 },
        output: { fluid: "kubejs:metabolic_broth", amount: BUCKET },
        time: 750,
        heat: "superheated",
      },
      {
        input: { item: "createastral:ender_mush", count: 1 },
        output: { fluid: "kubejs:metabolic_broth", amount: BUCKET },
        time: 750,
        heat: "superheated",
      },
      {
        input: { item: "ad_astra:ostrum_block", count: 1 },
        output: { fluid: "kubejs:molten_ostrum", amount: BUCKET },
        time: 1620,
        heat: "heated",
      },
      {
        input: { item: "ad_astra:ostrum_ingot", count: 1 },
        output: { fluid: "kubejs:molten_ostrum", amount: INGOT },
        time: 180,
        heat: "heated",
      },
      {
        input: { item: "ad_astra:ostrum_nugget", count: 1 },
        output: { fluid: "kubejs:molten_ostrum", amount: NUGGET },
        time: 20,
        heat: "heated",
      },
      {
        input: { item: "ad_astra:polished_permafrost", count: 1 },
        output: { fluid: "techreborn:nitrogen", amount: 200 * mB },
        time: 100,
        heat: "superheated",
      },
      {
        input: { item: "ad_astra:permafrost", count: 1 },
        output: { fluid: "techreborn:nitrogen", amount: 100 * mB },
        time: 300,
        heat: "heated",
      },
      {
        input: { item: "ad_astra:steel_block", count: 1 },
        output: { fluid: "tconstruct:molten_steel", amount: BUCKET },
        time: 1620,
        heat: "heated",
      },
      {
        input: { item: "ad_astra:steel_ingot", count: 1 },
        output: { fluid: "tconstruct:molten_steel", amount: INGOT },
        time: 180,
        heat: "heated",
      },
      {
        input: { item: "ad_astra:steel_nugget", count: 1 },
        output: { fluid: "tconstruct:molten_steel", amount: NUGGET },
        time: 20,
        heat: "heated",
      },
    ];
    meltingRecipes.forEach((recipe) => {
      event.custom({
        type: "createbigcannons:melting",
        ingredients: [recipe.input],
        results: [recipe.output],
        processingTime: recipe.time,
        heatRequirement: recipe.heat,
      });
    });
  });
})();
