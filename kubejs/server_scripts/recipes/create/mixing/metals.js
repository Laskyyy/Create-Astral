(function createMetalMixingRecipes() {
  // Fluid unit constants
  const { BUCKET, BOTTLE, GEM_BLOCK, SLIMEBALL, INGOT, GEM, NUGGET, mB } = global.fluids;

  /** Default alloy mixing time */
  const BASE_PROCESSING_TIME = 100;

  /**
   * @typedef MixingRecipe
   * @property {Internal.IngredientJS_} output
   * @property {Internal.IngredientJS_} input
   * @property {"heated" | "superheated"} [heat]
   * @property {number} [time]
   */

  onEvent("recipes", (event) => {
    customMixingRecipes.forEach((recipe) => {
      event.recipes
        .createMixing(recipe.output, recipe.input)
        .heatRequirement(recipe.heat ?? "none")
        .processingTime(recipe.time ?? BASE_PROCESSING_TIME);
    });
  });

  /** @type {MixingRecipe[]} */
  const customMixingRecipes = [
    // Alloying - Brass
    {
      output: Fluid.of("tconstruct:molten_brass", INGOT * 2),
      input: [
        { fluid: "tconstruct:molten_copper", amount: INGOT },
        { fluid: "tconstruct:molten_zinc", amount: INGOT },
      ],
      heat: "heated",
      time: 300,
    },
    {
      output: Fluid.of("tconstruct:molten_brass", INGOT * 2),
      input: [Item.of("create:copper_nugget", 9), Item.of("create:zinc_nugget", 9)],
      heat: "heated",
      time: 300,
    },
    {
      output: Fluid.of("tconstruct:molten_brass", INGOT * 4),
      input: ["minecraft:copper_ingot", "create:zinc_ingot"],
      heat: "superheated",
      time: 300,
    },
    // Alloying - Amethyst Bronze
    {
      output: Fluid.of("tconstruct:molten_amethyst_bronze", INGOT * 4),
      input: ["createastral:bronze_ingot", "minecraft:amethyst_shard"],
      heat: "superheated",
      time: 100,
    },
    {
      output: Fluid.of("tconstruct:molten_amethyst_bronze", INGOT * 2),
      input: [Item.of("techreborn:bronze_nugget", 9), "minecraft:amethyst_shard"],
      heat: "heated",
      time: 100,
    },
    {
      output: Fluid.of("tconstruct:molten_amethyst_bronze", INGOT * 2),
      input: [
        { fluid: "tconstruct:molten_bronze", amount: INGOT },
        { fluid: "tconstruct:molten_amethyst", amount: INGOT },
      ],
      heat: "heated",
      time: 100,
    },
    // Alloying - Bronze
    {
      output: Fluid.of("tconstruct:molten_bronze", INGOT * 2),
      input: [
        { fluid: "tconstruct:molten_tin", amount: INGOT },
        { fluid: "tconstruct:molten_copper", amount: INGOT },
      ],
      time: 100,
    },
    {
      output: Fluid.of("tconstruct:molten_bronze", INGOT * 2),
      input: [Item.of("create:copper_nugget", 9), Item.of("techreborn:tin_nugget", 9)],
      time: 300,
    },
    {
      output: Fluid.of("tconstruct:molten_bronze", INGOT * 4),
      input: ["minecraft:copper_ingot", "techreborn:tin_ingot"],
      heat: "superheated",
      time: 300,
    },
    // Alloying - Rose Gold
    {
      output: Fluid.of("tconstruct:molten_rose_gold", INGOT * 2),
      input: [Item.of("minecraft:gold_nugget", 9), Item.of("create:copper_nugget", 9)],
      heat: "heated",
      time: 300,
    },
    {
      output: Fluid.of("tconstruct:molten_rose_gold", INGOT * 4),
      input: ["minecraft:copper_ingot", "minecraft:gold_ingot"],
      heat: "superheated",
      time: 300,
    },
    {
      output: Fluid.of("tconstruct:molten_rose_gold", INGOT / 10),
      input: [
        { fluid: "tconstruct:molten_copper", amount: INGOT / 10 },
        { fluid: "tconstruct:molten_gold", amount: INGOT / 10 },
      ],
      time: 10,
    },
    // Alloying - Electrum
    {
      output: Fluid.of("tconstruct:molten_electrum", INGOT / 9),
      input: ["techreborn:silver_nugget", "minecraft:gold_nugget"],
      heat: "heated",
      time: 111,
    },
    {
      output: Fluid.of("tconstruct:molten_electrum", INGOT / 10),
      input: [
        { fluid: "tconstruct:molten_silver", amount: INGOT / 10 },
        { fluid: "tconstruct:molten_gold", amount: INGOT / 10 },
      ],
      heat: "heated",
      time: 100,
    },
    {
      output: Fluid.of("tconstruct:molten_electrum", INGOT * 2),
      input: ["techreborn:silver_ingot", "minecraft:gold_ingot"],
      heat: "superheated",
      time: 100,
    },
    // Alloying - Steel
    {
      output: Fluid.of("tconstruct:molten_steel", INGOT),
      input: ["techreborn:steel_dust"],
      heat: "heated",
      time: 100,
    },
    // Alloying - Slimesteel
    {
      output: Fluid.of("tconstruct:molten_slimesteel", INGOT * 2),
      input: ["minecraft:iron_ingot", "tconstruct:sky_slime_ball", "#tconstruct:seared_blocks"],
      heat: "superheated",
      time: 300,
    },
    {
      output: Fluid.of("tconstruct:molten_slimesteel", INGOT),
      input: ["minecraft:iron_ingot", "tconstruct:sky_slime_ball", "#tconstruct:seared_blocks"],
      heat: "heated",
      time: 300,
    },
    {
      output: Fluid.of("tconstruct:molten_slimesteel", INGOT),
      input: [
        { fluid: "tconstruct:molten_iron", amount: INGOT },
        { fluid: "tconstruct:sky_slime", amount: 250 * mB },
        "#tconstruct:seared_blocks",
      ],
      heat: "heated",
      time: 40,
    },
    {
      output: Fluid.of("tconstruct:molten_slimesteel", INGOT),
      input: [
        Item.of("minecraft:iron_nugget", 9),
        { fluid: "tconstruct:sky_slime", amount: 250 * mB },
        "#tconstruct:seared_blocks",
      ],
      heat: "heated",
      time: 40,
    },
    {
      output: Fluid.of("tconstruct:molten_slimesteel", INGOT),
      input: [Item.of("minecraft:iron_nugget", 9), "tconstruct:sky_slime_ball", "#tconstruct:seared_blocks"],
      heat: "heated",
      time: 300,
    },
    // Alloying - Pig Iron
    {
      output: Fluid.of("tconstruct:molten_pig_iron", INGOT),
      input: ["minecraft:porkchop", Item.of("minecraft:iron_nugget", 9), Item.of("minecraft:gold_nugget", 9)],
      heat: "heated",
      time: 300,
    },
    {
      output: Fluid.of("tconstruct:molten_pig_iron", INGOT),
      input: [
        "minecraft:porkchop",
        { fluid: "tconstruct:molten_iron", amount: INGOT },
        { fluid: "tconstruct:molten_gold", amount: INGOT },
      ],
      heat: "heated",
      time: 250,
    },
    {
      output: Fluid.of("tconstruct:molten_pig_iron", INGOT * 2),
      input: ["minecraft:porkchop", "minecraft:iron_ingot", "minecraft:gold_ingot"],
      heat: "superheated",
      time: 300,
    },
    // Alloying - Queen's Slime
    {
      output: Fluid.of("tconstruct:molten_queens_slime", INGOT / 5),
      input: [
        { fluid: "tconstruct:molten_cobalt", amount: INGOT / 10 },
        { fluid: "tconstruct:molten_slimesteel", amount: INGOT / 5 },
      ],
      heat: "heated",
      time: 5,
    },
    {
      output: Fluid.of("tconstruct:molten_queens_slime", INGOT / 4.5),
      input: ["tconstruct:cobalt_nugget", Item.of("tconstruct:slimesteel_nugget", 2)],
      heat: "heated",
      time: 5,
    },
    {
      output: Fluid.of("tconstruct:molten_queens_slime", INGOT * 4),
      input: ["tconstruct:cobalt_ingot", Item.of("tconstruct:slimesteel_ingot", 2)],
      heat: "superheated",
      time: 5,
    },
    // Alloying - Manyullyn
    {
      output: Fluid.of("tconstruct:molten_manyullyn", INGOT),
      input: [
        { fluid: "tconstruct:molten_cobalt", amount: INGOT * 2 },
        Item.of("minecraft:netherite_scrap", 1),
        { fluid: "kubejs:molten_desh", amount: INGOT },
      ],
      heat: "heated",
      time: 1000,
    },
    {
      output: Fluid.of("tconstruct:molten_manyullyn", INGOT),
      input: [
        "minecraft:netherite_scrap",
        Item.of("ad_astra:desh_nugget", 9),
        Item.of("tconstruct:cobalt_nugget", 9),
      ],
      heat: "heated",
      time: 1000,
    },
    {
      output: Fluid.of("tconstruct:molten_manyullyn", INGOT * 2),
      input: ["minecraft:netherite_scrap", "ad_astra:desh_ingot", "tconstruct:cobalt_ingot"],
      heat: "superheated",
      time: 1000,
    },
    // Alloying - Hepatizon
    {
      output: Fluid.of("tconstruct:molten_hepatizon", INGOT / 4.5),
      input: ["tconstruct:cobalt_nugget", Item.of("techreborn:lead_nugget", 2)],
      heat: "heated",
      time: 5,
    },
    {
      output: Fluid.of("tconstruct:molten_hepatizon", INGOT / 5),
      input: [
        { fluid: "tconstruct:molten_cobalt", amount: INGOT / 10 },
        { fluid: "tconstruct:molten_lead", amount: INGOT / 5 },
      ],
      heat: "heated",
      time: 5,
    },
    {
      output: Fluid.of("tconstruct:molten_hepatizon", INGOT * 4),
      input: ["tconstruct:cobalt_ingot", Item.of("techreborn:lead_ingot", 2)],
      heat: "superheated",
      time: 5,
    },
    // Alloying - Netherite
    {
      output: Fluid.of("tconstruct:molten_netherite", (INGOT * 3) / 10),
      input: [
        { fluid: "tconstruct:molten_debris", amount: INGOT },
        { fluid: "tconstruct:molten_gold", amount: INGOT },
      ],
      heat: "heated",
      time: 100,
    },
    {
      output: Fluid.of("tconstruct:molten_netherite", INGOT * 2),
      input: [
        { fluid: "tconstruct:molten_debris", amount: INGOT * 4 },
        { fluid: "tconstruct:molten_gold", amount: INGOT * 4 },
      ],
      heat: "superheated",
      time: 100,
    },
    // Combining - Radiance
    {
      output: Fluid.of("kubejs:molten_radiance", 500 * mB),
      input: [{ fluid: "kubejs:shimmer", amount: BUCKET }, "createastral:pure_star_shard"],
      heat: "superheated",
      time: 2000,
    },
    {
      output: [{ fluid: "kubejs:molten_radiance", amount: BUCKET }],
      input: [
        "minecraft:nether_star",
        "minecraft:glowstone",
        "minecraft:sea_lantern",
        Item.of("createastral:separation_agent", 3),
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
      time: 1000,
    },
    // Combining - Shadowsteel
    {
      output: [{ fluid: "kubejs:molten_shadowsteel", amount: BUCKET }],
      input: [
        "minecraft:ender_pearl",
        Item.of("dbe:vanta_black", 8),
        Item.of("createastral:separation_agent", 3),
        Item.of("createastral:voidtouched_compound", 9),
      ],
      heat: "heated",
      time: 1000,
    },
    // Melting - Amethyst
    {
      output: { fluid: "tconstruct:molten_amethyst", amount: GEM },
      input: "minecraft:amethyst_shard",
      heat: "heated",
    },
    // Melting - Debris
    {
      output: Fluid.of("tconstruct:molten_debris", 250 * mB),
      input: ["minecraft:ancient_debris"],
      heat: "superheated",
      time: 500,
    },
  ]
})();
