(function CreateDrinkBeerMixingRecipes() {
  // Fluid unit constants
  const { BUCKET, BOTTLE, GEM_BLOCK, SLIMEBALL, INGOT, GEM, NUGGET, mB } = global.fluids;

  /** Default spice/fluid mixing time */
  const BASE_PROCESSING_TIME = 500;

  /**
   * @typedef MixingRecipe
   * @property {Internal.IngredientJS_} output
   * @property {Internal.IngredientJS_} input
   * @property {"heated" | "superheated"} [heat]
   * @property {number} [time]
   */

  /**
   * Drink Beer Spices
   * @type {MixingRecipe[]}
   */
  const spiceMixingRecipes = [
    {
      output: "drinkbeer:spice_blaze_paprika",
      input: [Item.of("minecraft:blaze_powder", 2), "minecraft:fire_charge"],
      heat: "heated",
    },
    {
      output: "drinkbeer:spice_dried_eglia_bud",
      input: ["minecraft:dried_kelp", Item.of("tconstruct:glow_ball", 2)],
    },
    {
      output: "drinkbeer:spice_smoked_eglia_bud",
      input: ["minecraft:fire_charge", Item.of("tconstruct:glow_ball", 2)],
      heat: "heated",
    },
    {
      output: "drinkbeer:spice_amethyst_nigella_seeds",
      input: [Item.of("techreborn:amethyst_dust", 2), "minecraft:popped_chorus_fruit"],
    },
    {
      output: "drinkbeer:spice_citrine_nigella_seeds",
      input: [Item.of("minecraft:glowstone_dust", 2), "minecraft:popped_chorus_fruit"],
    },
    {
      output: "drinkbeer:spice_ice_mint",
      input: ["minecraft:ice", Ingredient.of("#minecraft:leaves", 4)],
    },
    {
      output: "drinkbeer:spice_ice_patchouli",
      input: ["minecraft:packed_ice", Item.of("minecraft:kelp", 2)],
    },
    {
      output: ["drinkbeer:spice_storm_shards", "ae2:certus_quartz_crystal"],
      input: ["ae2:charged_certus_quartz_crystal", Item.of("minecraft:prismarine_shard", 2)],
    },
    {
      output: "drinkbeer:spice_roasted_red_pine_nuts",
      input: ["minecraft:blaze_powder", Item.of("minecraft:wheat_seeds", 3)],
      heat: "heated",
    },
    {
      output: "drinkbeer:spice_glace_goji_berries",
      input: [Item.of("minecraft:sweet_berries", 3), "minecraft:sugar"],
      heat: "heated",
    },
    {
      output: "drinkbeer:spice_frozen_persimmon",
      input: ["minecraft:blue_ice", "minecraft:glistering_melon_slice"],
    },
    {
      output: "drinkbeer:spice_roasted_pecans",
      input: ["minecraft:blaze_powder", Item.of("minecraft:cocoa_beans", 3)],
      heat: "heated",
    },
    {
      output: "drinkbeer:spice_silver_needle_white_tea",
      input: [Item.of("techreborn:silver_nugget", 3), { fluid: "kubejs:white_grape_juice", amount: 166 * mB }],
      heat: "heated",
    },
    {
      output: "drinkbeer:spice_golden_cinnamon_powder",
      input: ["minecraft:gold_nugget", Item.of("farmersdelight:tree_bark", 2)],
      heat: "heated",
    },
    {
      output: "drinkbeer:spice_dried_selaginella",
      input: ["minecraft:fern", "#minecraft:sand"],
    },
  ];

  /**
   * Drink Beer Liquids
   * @type {MixingRecipe[]}
   */
  const liquidMixingRecipes = [
    {
      output: [{ fluid: "kubejs:miner_pale_ale_fluid", amount: BUCKET }],
      input: [Item.of("minecraft:wheat", 3), { fluid: "minecraft:water", amount: BUCKET }],
      heat: "heated",
    },
    {
      output: [{ fluid: "kubejs:blaze_stout_fluid", amount: BUCKET }],
      input: [Item.of("minecraft:wheat", 2), "minecraft:blaze_powder", { fluid: "minecraft:water", amount: BUCKET }],
      heat: "heated",
    },
    {
      output: [{ fluid: "kubejs:blaze_milk_stout_fluid", amount: BUCKET }],
      input: [
        "minecraft:wheat",
        "minecraft:sugar",
        "minecraft:blaze_powder",
        { fluid: "minecraft:water", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: [{ fluid: "kubejs:apple_lambic_fluid", amount: BUCKET }],
      input: [Item.of("minecraft:wheat", 2), "minecraft:apple", { fluid: "minecraft:water", amount: BUCKET }],
      heat: "heated",
    },
    {
      output: [{ fluid: "kubejs:sweet_berry_kriek_fluid", amount: BUCKET }],
      input: ["minecraft:sweet_berries", Item.of("minecraft:wheat", 2), { fluid: "minecraft:water", amount: BUCKET }],
      heat: "heated",
    },
    {
      output: [{ fluid: "kubejs:haars_icey_pale_lager_fluid", amount: BUCKET }],
      input: [Item.of("minecraft:wheat", 3), "minecraft:ice"],
      heat: "heated",
    },
    {
      output: [{ fluid: "kubejs:pumpkin_kvass_fluid", amount: BUCKET }],
      input: [Item.of("minecraft:bread", 2), "minecraft:pumpkin", { fluid: "minecraft:water", amount: BUCKET }],
      heat: "heated",
    },
    {
      output: [{ fluid: "kubejs:night_howl_kvass_fluid", amount: BUCKET }],
      input: [Item.of("minecraft:bread", 2), "minecraft:bone", { fluid: "minecraft:water", amount: BUCKET }],
      heat: "heated",
    },
    {
      output: [{ fluid: "kubejs:frothy_pink_eggnog_fluid", amount: BUCKET }],
      input: ["minecraft:wheat", "minecraft:egg", "minecraft:beetroot", { fluid: "minecraft:water", amount: BUCKET }],
      heat: "heated",
    },
  ];

  onEvent("recipes", (event) => {
    spiceMixingRecipes.forEach((recipe) => {
      event.recipes
        .createMixing(recipe.output, recipe.input)
        .heatRequirement(recipe.heat ?? "none")
        .processingTime(recipe.time ?? BASE_PROCESSING_TIME);
    });

    liquidMixingRecipes.forEach((recipe) => {
      event.recipes
        .createMixing(recipe.output, recipe.input)
        .heatRequirement(recipe.heat ?? "none")
        .processingTime(recipe.time ?? BASE_PROCESSING_TIME);
    });
  });
})();