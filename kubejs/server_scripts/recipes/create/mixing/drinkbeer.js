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
   * @typedef DrinkBeerFluidMixingRecipe
   * 
   * A recipe for mixing 'Drink Beer' mod fluids.
   * No need for heat, since all recipes are heated.
   * No need for time, since all recipes use the base time.
   * 
   * @property {string} output A fluid ID.
   * @property {Internal.IngredientJS_} input A list of inputs.
  */

  /**
   * Drink Beer Liquids
   * @type {DrinkBeerFluidMixingRecipe[]}
   */
  const liquidMixingRecipes = [
    {
      output: "kubejs:miner_pale_ale_fluid",
      input: [
        Item.of("minecraft:wheat", 3),
        Fluid.of("minecraft:water", BUCKET),
      ],
    },
    {
      output: "kubejs:blaze_stout_fluid",
      input: [
        "minecraft:blaze_powder",
        Item.of("minecraft:wheat", 2),
        Fluid.of("minecraft:water", BUCKET),
      ],
    },
    {
      output: "kubejs:blaze_milk_stout_fluid",
      input: [
        "minecraft:wheat",
        "minecraft:sugar",
        "minecraft:blaze_powder",
        Fluid.of("minecraft:water", BUCKET),
      ],
    },
    {
      output: "kubejs:apple_lambic_fluid",
      input: [
        "minecraft:apple",
        Item.of("minecraft:wheat", 2),
        Fluid.of("minecraft:water", BUCKET),
      ],
    },
    {
      output: "kubejs:sweet_berry_kriek_fluid",
      input: [
        "minecraft:sweet_berries",
        Item.of("minecraft:wheat", 2),
        Fluid.of("minecraft:water", BUCKET),
      ],
    },
    {
      output: "kubejs:haars_icey_pale_lager_fluid",
      input: [
        "minecraft:ice",
        Item.of("minecraft:wheat", 3),
      ],
    },
    {
      output: "kubejs:pumpkin_kvass_fluid",
      input: [
        "minecraft:pumpkin",
        Item.of("minecraft:bread", 2),
        Fluid.of("minecraft:water", BUCKET),
      ],
    },
    {
      output: "kubejs:night_howl_kvass_fluid",
      input: [
        Item.of("minecraft:bread", 2),
        "minecraft:bone",
        Fluid.of("minecraft:water", BUCKET),
      ],
    },
    {
      output: "kubejs:frothy_pink_eggnog_fluid",
      input: [
        "minecraft:wheat",
        "minecraft:egg",
        "minecraft:beetroot",
        Fluid.of("minecraft:water", BUCKET),
      ],
    },
  ];

  onEvent("recipes", (event) => {
    spiceMixingRecipes.forEach((recipe) => {
      /** @type {string} */
      let spice_name;

      // not perfectly robust
      if (typeof recipe.output === "string") {
        spice_name = recipe.output.split(":")[1];
      } else {
        recipe.output.forEach((item_out) => {
          if (typeof item_out === "string" && item_out.startsWith("drinkbeer:spice_")) {
            spice_name = item_out.split(":")[1];
          }
        });
      }
      
      event.recipes
        .createMixing(recipe.output, recipe.input)
        .heatRequirement(recipe.heat ?? "none")
        .processingTime(recipe.time ?? BASE_PROCESSING_TIME)
        .id(`kubejs:create/mixing/drinkbeer/${spice_name}`);
    });

    liquidMixingRecipes.forEach((recipe) => {
      /** @type {string} */
      let liquid_name = recipe.output.split(":")[1];

      event.recipes
        .createMixing(Fluid.of(recipe.output, BUCKET), recipe.input)
        .heatRequirement("heated")
        .processingTime(BASE_PROCESSING_TIME)
        .id(`kubejs:create/mixing/drinkbeer/${liquid_name}`);
    });
  });
})();