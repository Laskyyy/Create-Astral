(function castingTableRecipes() {
  const BUCKET = global.BUCKET;
  const GEM_BLOCK = global.GEM_BLOCK;
  const SLIMEBALL = global.SLIMEBALL;
  const INGOT = global.INGOT;
  const GEM = global.GEM;
  const NUGGET = global.NUGGET;
  const mB = global.mB;
  onEvent("recipes", (event) => {
    /**
     * @typedef CastingTableRecipe
     * @property {{fluid: Special.Fluid; amount: number;}} fluidInput
     * @property {Special.Item} result
     * @property {number} coolingTime
     * @property {{ item: Special.Item; consumed?: boolean } | { tag: Special.ItemTag; consumed?: boolean }} [cast]
     */

    /** @type {CastingTableRecipe[]} */
    const castingTableRecipes = [
      {
        fluidInput: { fluid: "kubejs:red_paste", amount: 100 * mB },
        result: "minecraft:red_dye",
        coolingTime: 100,
      },
      {
        fluidInput: { fluid: "kubejs:shimmer", amount: BUCKET / 20 },
        result: "ae2:fluix_dust",
        coolingTime: 40,
        cast: { item: "ae2:certus_quartz_dust", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:molten_bronze", amount: 4 * NUGGET },
        result: "create:cogwheel",
        coolingTime: 100,
        cast: { item: "tconstruct:coin_cast", consumed: false },
      },
      {
        fluidInput: { fluid: "tconstruct:molten_bronze", amount: 12 * NUGGET },
        result: "create:large_cogwheel",
        coolingTime: 100,
        cast: { item: "tconstruct:gear_cast", consumed: false },
      },
      {
        fluidInput: { fluid: "tconstruct:molten_gold", amount: 12 * NUGGET },
        result: "tconstruct:gear_cast",
        coolingTime: 100,
        cast: { item: "create:large_cogwheel", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:molten_gold", amount: INGOT * 4 },
        result: "createastral:golden_bowl",
        coolingTime: 100,
        cast: { item: "tconstruct:round_plate_cast", consumed: false },
      },
      {
        fluidInput: { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        result: "createastral:experience_ingot",
        coolingTime: 100,
        cast: { item: "tconstruct:ingot_cast", consumed: false },
      },
      {
        fluidInput: { fluid: "kubejs:liquid_xp_nuggies", amount: NUGGET },
        result: "create:experience_nugget",
        coolingTime: 10,
        cast: { item: "tconstruct:nugget_cast", consumed: false },
      },
      {
        fluidInput: { fluid: "kubejs:compound_mixture", amount: 11 * mB },
        result: "create:shaft",
        coolingTime: 10,
        cast: { item: "tconstruct:rod_cast", consumed: false },
      },
      {
        fluidInput: { fluid: "tconstruct:molten_uranium", amount: 500 * mB },
        result: "techreborn:data_storage_chip",
        coolingTime: 300,
        cast: { item: "tconstruct:rod_cast", consumed: false },
      },
      {
        fluidInput: { fluid: "kubejs:liquid_xp_nuggies", amount: 8 * NUGGET },
        result: "minecraft:experience_bottle",
        coolingTime: 30,
        cast: { item: "minecraft:glass_bottle", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:molten_gold", amount: INGOT },
        result: "createastral:gold_casted_rocket_fin",
        coolingTime: 30,
        cast: { item: "createastral:fragile_rocket_fin", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:molten_steel", amount: INGOT },
        result: "astraladditions:steel_ring",
        coolingTime: 100,
        cast: { item: "astraladditions:ring_gold_cast", consumed: false },
      },
      {
        fluidInput: { fluid: "kubejs:shimmer", amount: NUGGET * 3 },
        result: "astraladditions:shimmer_lily",
        coolingTime: 20,
        cast: { item: "minecraft:lily_of_the_valley", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:seared_stone", amount: NUGGET * 3 },
        result: "astralfoods:seared_potato",
        coolingTime: 20,
        cast: { item: "minecraft:potato", consumed: true },
      },
      {
        fluidInput: { fluid: "kubejs:metabolic_broth", amount: BUCKET / 4 },
        result: "yttr:delicace",
        coolingTime: 50,
        cast: { item: "tconstruct:gem_cast", consumed: false },
      },
      {
        fluidInput: { fluid: "kubejs:molten_ostrum", amount: NUGGET * 8 },
        result: "createbigcannons:nethersteel_screw_lock",
        coolingTime: 60,
        cast: { item: "astraladditions:ring_gold_cast", consumed: false },
      },
      {
        fluidInput: { fluid: "kubejs:shimmer", amount: INGOT / 2 },
        result: "ae2:fluix_dust",
        coolingTime: 40,
        cast: { item: "minecraft:redstone", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:molten_steel", amount: NUGGET * 8 },
        result: "createbigcannons:steel_screw_lock",
        coolingTime: 60,
        cast: { item: "astraladditions:ring_gold_cast", consumed: false },
      },
      {
        fluidInput: { fluid: "kubejs:compound_mixture", amount: INGOT },
        result: "create:andesite_alloy",
        coolingTime: 54,
        cast: { tag: "tconstruct:casts/multi_use/ingot", consumed: false },
      },
      {
        fluidInput: { fluid: "kubejs:compound_mixture", amount: INGOT },
        result: "create:andesite_alloy",
        coolingTime: 54,
        cast: { tag: "tconstruct:casts/single_use/ingot", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:molten_bronze", amount: INGOT / 2 },
        result: "createastral:bronze_sheet",
        coolingTime: 57,
        cast: { tag: "tconstruct:casts/multi_use/plate", consumed: false },
      },
      {
        fluidInput: { fluid: "kubejs:molten_calorite", amount: INGOT },
        result: "ad_astra:calorite_ingot",
        coolingTime: 65,
        cast: { tag: "tconstruct:casts/multi_use/ingot", consumed: false },
      },
      {
        fluidInput: { fluid: "kubejs:molten_calorite", amount: INGOT },
        result: "ad_astra:calorite_ingot",
        coolingTime: 65,
        cast: { tag: "tconstruct:casts/single_use/ingot", consumed: true },
      },
      {
        fluidInput: { fluid: "kubejs:molten_calorite", amount: NUGGET },
        result: "ad_astra:calorite_nugget",
        coolingTime: 22,
        cast: { tag: "tconstruct:casts/multi_use/nugget", consumed: false },
      },
      {
        fluidInput: { fluid: "kubejs:molten_calorite", amount: NUGGET },
        result: "ad_astra:calorite_nugget",
        coolingTime: 22,
        cast: { tag: "tconstruct:casts/single_use/nugget", consumed: true },
      },
      {
        fluidInput: { fluid: "kubejs:molten_calorite", amount: INGOT },
        result: "ad_astra:calorite_plate",
        coolingTime: 65,
        cast: { tag: "tconstruct:casts/multi_use/plate", consumed: false },
      },
      {
        fluidInput: { fluid: "kubejs:molten_calorite", amount: INGOT },
        result: "ad_astra:calorite_plate",
        coolingTime: 65,
        cast: { tag: "tconstruct:casts/single_use/plate", consumed: true },
      },
      {
        fluidInput: { fluid: "kubejs:molten_desh", amount: INGOT },
        result: "ad_astra:desh_ingot",
        coolingTime: 47,
        cast: { tag: "tconstruct:casts/multi_use/ingot", consumed: false },
      },
      {
        fluidInput: { fluid: "kubejs:molten_desh", amount: INGOT },
        result: "ad_astra:desh_ingot",
        coolingTime: 47,
        cast: { tag: "tconstruct:casts/single_use/ingot", consumed: true },
      },
      {
        fluidInput: { fluid: "kubejs:molten_desh", amount: NUGGET },
        result: "ad_astra:desh_nugget",
        coolingTime: 16,
        cast: { tag: "tconstruct:casts/multi_use/nugget", consumed: false },
      },
      {
        fluidInput: { fluid: "kubejs:molten_desh", amount: NUGGET },
        result: "ad_astra:desh_nugget",
        coolingTime: 16,
        cast: { tag: "tconstruct:casts/single_use/nugget", consumed: true },
      },
      {
        fluidInput: { fluid: "kubejs:molten_ostrum", amount: INGOT },
        result: "ad_astra:ostrum_ingot",
        coolingTime: 65,
        cast: { tag: "tconstruct:casts/multi_use/ingot", consumed: false },
      },
      {
        fluidInput: { fluid: "kubejs:molten_ostrum", amount: INGOT },
        result: "ad_astra:ostrum_ingot",
        coolingTime: 65,
        cast: { tag: "tconstruct:casts/single_use/ingot", consumed: true },
      },
      {
        fluidInput: { fluid: "kubejs:molten_ostrum", amount: NUGGET },
        result: "ad_astra:ostrum_nugget",
        coolingTime: 22,
        cast: { tag: "tconstruct:casts/multi_use/nugget", consumed: false },
      },
      {
        fluidInput: { fluid: "kubejs:molten_ostrum", amount: NUGGET },
        result: "ad_astra:ostrum_nugget",
        coolingTime: 22,
        cast: { tag: "tconstruct:casts/single_use/nugget", consumed: true },
      },
      {
        fluidInput: { fluid: "kubejs:molten_ostrum", amount: INGOT },
        result: "ad_astra:ostrum_plate",
        coolingTime: 65,
        cast: { tag: "tconstruct:casts/multi_use/plate", consumed: false },
      },
      {
        fluidInput: { fluid: "kubejs:molten_ostrum", amount: INGOT },
        result: "ad_astra:ostrum_plate",
        coolingTime: 65,
        cast: { tag: "tconstruct:casts/single_use/plate", consumed: true },
      },
      {
        fluidInput: { fluid: "kubejs:molten_radiance", amount: INGOT },
        result: "create:refined_radiance",
        coolingTime: 200,
        cast: { tag: "tconstruct:casts/multi_use/ingot", consumed: false },
      },
      {
        fluidInput: { fluid: "kubejs:molten_radiance", amount: INGOT },
        result: "create:refined_radiance",
        coolingTime: 200,
        cast: { tag: "tconstruct:casts/single_use/ingot", consumed: true },
      },
      {
        fluidInput: { fluid: "kubejs:molten_shadowsteel", amount: INGOT },
        result: "create:shadow_steel",
        coolingTime: 47,
        cast: { item: "ad_astra:steel_ingot", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:molten_steel", amount: INGOT },
        result: "ad_astra:steel_ingot",
        coolingTime: 65,
        cast: { tag: "tconstruct:casts/multi_use/ingot", consumed: false },
      },
      {
        fluidInput: { fluid: "tconstruct:molten_steel", amount: INGOT },
        result: "ad_astra:steel_ingot",
        coolingTime: 65,
        cast: { tag: "tconstruct:casts/single_use/ingot", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:molten_steel", amount: NUGGET },
        result: "ad_astra:steel_nugget",
        coolingTime: 22,
        cast: { tag: "tconstruct:casts/multi_use/nugget", consumed: false },
      },
      {
        fluidInput: { fluid: "tconstruct:molten_steel", amount: NUGGET },
        result: "ad_astra:steel_nugget",
        coolingTime: 22,
        cast: { tag: "tconstruct:casts/single_use/nugget", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:molten_steel", amount: INGOT },
        result: "ad_astra:steel_plate",
        coolingTime: 65,
        cast: { tag: "tconstruct:casts/multi_use/plate", consumed: false },
      },
      {
        fluidInput: { fluid: "tconstruct:molten_steel", amount: INGOT },
        result: "ad_astra:steel_plate",
        coolingTime: 65,
        cast: { tag: "tconstruct:casts/single_use/plate", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:magma", amount: BUCKET / 8 },
        result: "minecraft:brick",
        coolingTime: 45,
        cast: { item: "minecraft:flint", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:molten_clay", amount: BUCKET / 8 },
        result: "minecraft:brick",
        coolingTime: 51,
        cast: { item: "minecraft:stone_button", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:ichor", amount: SLIMEBALL },
        result: "tconstruct:ichor_slime_ball",
        coolingTime: 46,
      },
      {
        fluidInput: { fluid: "tconstruct:molten_gold", amount: INGOT },
        result: "tconstruct:gold_bars",
        coolingTime: 60,
      },
    ];
    castingTableRecipes.forEach((recipe) => {
      /** @type {{ type: Special.RecipeType_; [key: string]: unknown }} */
      let tableRecipe = {
        type: "tconstruct:casting_table",
        fluid: {
          name: recipe.fluidInput.fluid,
          amount: recipe.fluidInput.amount,
        },
        result: recipe.result,
        cooling_time: recipe.coolingTime,
      };
      if (recipe.cast) {
        if ("item" in recipe.cast) tableRecipe.cast = { item: recipe.cast.item };
        else if ("tag" in recipe.cast) tableRecipe.cast = { tag: recipe.cast.tag };
        if (recipe.cast.consumed) tableRecipe.cast_consumed = recipe.cast.consumed;
      }
      event.custom(tableRecipe);
    });
  });
})();
