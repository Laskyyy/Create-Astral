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
   * @property {string} [id]
   */

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
      id: alloyingID("molten_brass_from_molten_metal"),
    },
    {
      output: Fluid.of("tconstruct:molten_brass", INGOT * 2),
      input: [
        Item.of("create:copper_nugget", 9),
        Item.of("create:zinc_nugget", 9)
      ],
      heat: "heated",
      time: 300,
      id: alloyingID("molten_brass_from_nuggets"),
    },
    {
      output: Fluid.of("tconstruct:molten_brass", INGOT * 4),
      input: [
        "minecraft:copper_ingot",
        "create:zinc_ingot"
      ],
      heat: "superheated",
      time: 300,
      id: alloyingID("molten_brass_from_ingots"),
    },
    // Alloying - Amethyst Bronze
    {
      output: Fluid.of("tconstruct:molten_amethyst_bronze", INGOT * 4),
      input: [
        "createastral:bronze_ingot",
        "minecraft:amethyst_shard"
      ],
      heat: "superheated",
      time: 100,
      id: alloyingID("amethyst_bronze_from_ingots"),
    },
    {
      output: Fluid.of("tconstruct:molten_amethyst_bronze", INGOT * 2),
      input: [
        Item.of("techreborn:bronze_nugget", 9),
        "minecraft:amethyst_shard"
      ],
      heat: "heated",
      time: 100,
      id: alloyingID("amethyst_bronze_from_nuggets"),
    },
    {
      output: Fluid.of("tconstruct:molten_amethyst_bronze", INGOT * 2),
      input: [
        { fluid: "tconstruct:molten_bronze", amount: INGOT },
        { fluid: "tconstruct:molten_amethyst", amount: INGOT },
      ],
      heat: "heated",
      time: 100,
      id: alloyingID("amethyst_bronze_from_molten_metal"),
    },
    // Alloying - Bronze
    {
      output: Fluid.of("tconstruct:molten_bronze", INGOT * 2),
      input: [
        { fluid: "tconstruct:molten_tin", amount: INGOT },
        { fluid: "tconstruct:molten_copper", amount: INGOT },
      ],
      time: 100,
      id: alloyingID("bronze_from_molten_metal"),
    },
    {
      output: Fluid.of("tconstruct:molten_bronze", INGOT * 2),
      input: [
        Item.of("create:copper_nugget", 9),
        Item.of("techreborn:tin_nugget", 9)
      ],
      time: 300,
      id: alloyingID("bronze_from_nuggets"),
    },
    {
      output: Fluid.of("tconstruct:molten_bronze", INGOT * 4),
      input: [
        "minecraft:copper_ingot",
        "techreborn:tin_ingot"
      ],
      heat: "superheated",
      time: 300,
      id: alloyingID("bronze_from_ingots"),
    },
    // Alloying - Rose Gold
    {
      output: Fluid.of("tconstruct:molten_rose_gold", INGOT * 2),
      input: [
        Item.of("minecraft:gold_nugget", 9),
        Item.of("create:copper_nugget", 9)
      ],
      heat: "heated",
      time: 300,
      id: alloyingID("rose_gold_from_nuggets"),
    },
    {
      output: Fluid.of("tconstruct:molten_rose_gold", INGOT * 4),
      input: [
        "minecraft:copper_ingot",
        "minecraft:gold_ingot"
      ],
      heat: "superheated",
      time: 300,
      id: alloyingID("rose_gold_from_ingots"),
    },
    {
      output: Fluid.of("tconstruct:molten_rose_gold", INGOT / 10),
      input: [
        { fluid: "tconstruct:molten_copper", amount: INGOT / 10 },
        { fluid: "tconstruct:molten_gold", amount: INGOT / 10 },
      ],
      time: 10,
      id: alloyingID("rose_gold_from_molten_metal"),
    },
    // Alloying - Electrum
    {
      output: Fluid.of("tconstruct:molten_electrum", INGOT / 9),
      input: [
        "techreborn:silver_nugget",
        "minecraft:gold_nugget"
      ],
      heat: "heated",
      time: 111,
      id: alloyingID("electrum_from_nuggets"),
    },
    {
      output: Fluid.of("tconstruct:molten_electrum", INGOT / 10),
      input: [
        { fluid: "tconstruct:molten_silver", amount: INGOT / 10 },
        { fluid: "tconstruct:molten_gold", amount: INGOT / 10 },
      ],
      heat: "heated",
      time: 100,
      id: alloyingID("electrum_from_molten_metal"),
    },
    {
      output: Fluid.of("tconstruct:molten_electrum", INGOT * 2),
      input: [
        "techreborn:silver_ingot",
        "minecraft:gold_ingot"
      ],
      heat: "superheated",
      time: 100,
      id: alloyingID("electrum_from_ingots"),
    },
    // Alloying - Pig Iron
    {
      output: Fluid.of("tconstruct:molten_pig_iron", INGOT),
      input: [
        "minecraft:porkchop",
        Item.of("minecraft:iron_nugget", 9),
        Item.of("minecraft:gold_nugget", 9)
      ],
      heat: "heated",
      time: 300,
      id: alloyingID("pig_iron_from_nuggets"),
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
      id: alloyingID("pig_iron_from_molten_metal"),
    },
    {
      output: Fluid.of("tconstruct:molten_pig_iron", INGOT * 2),
      input: [
        "minecraft:porkchop", "minecraft:iron_ingot",
        "minecraft:gold_ingot"
      ],
      heat: "superheated",
      time: 300,
      id: alloyingID("pig_iron_from_ingots"),
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
      id: alloyingID("queenslime_from_molten_metal"),
    },
    {
      output: Fluid.of("tconstruct:molten_queens_slime", INGOT / 4.5),
      input: [
        "tconstruct:cobalt_nugget",
        Item.of("tconstruct:slimesteel_nugget", 2)],
      heat: "heated",
      time: 5,
      id: alloyingID("queenslime_from_nuggets"),
    },
    {
      output: Fluid.of("tconstruct:molten_queens_slime", INGOT * 4),
      input: [
        "tconstruct:cobalt_ingot",
        Item.of("tconstruct:slimesteel_ingot", 2)
      ],
      heat: "superheated",
      time: 5,
      id: alloyingID("queenslime_from_ingots"),
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
      id: alloyingID("manyullyn_from_molten_metal"),
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
      id: alloyingID("manyullyn_from_nuggets"),
    },
    {
      output: Fluid.of("tconstruct:molten_manyullyn", INGOT * 2),
      input: [
        "minecraft:netherite_scrap",
        "ad_astra:desh_ingot",
        "tconstruct:cobalt_ingot"
      ],
      heat: "superheated",
      time: 1000,
      id: alloyingID("manyullyn_from_ingots"),
    },
    // Alloying - Hepatizon
    {
      output: Fluid.of("tconstruct:molten_hepatizon", INGOT / 4.5),
      input: [
        "tconstruct:cobalt_nugget",
        Item.of("techreborn:lead_nugget", 2)
      ],
      heat: "heated",
      time: 5,
      id: alloyingID("hepatizon_from_nuggets"),
    },
    {
      output: Fluid.of("tconstruct:molten_hepatizon", INGOT / 5),
      input: [
        { fluid: "tconstruct:molten_cobalt", amount: INGOT / 10 },
        { fluid: "tconstruct:molten_lead", amount: INGOT / 5 },
      ],
      heat: "heated",
      time: 5,
      id: alloyingID("hepatizon_from_molten_metal"),
    },
    {
      output: Fluid.of("tconstruct:molten_hepatizon", INGOT * 4),
      input: [
        "tconstruct:cobalt_ingot",
        Item.of("techreborn:lead_ingot", 2)
      ],
      heat: "superheated",
      time: 5,
      id: alloyingID("hepatizon_from_ingots"),
    },
    // Combining - Netherite
    {
      output: Fluid.of("tconstruct:molten_netherite", (INGOT * 3) / 10),
      input: [
        { fluid: "tconstruct:molten_debris", amount: INGOT },
        { fluid: "tconstruct:molten_gold", amount: INGOT },
      ],
      heat: "heated",
      time: 100,
      id: combiningID("netherite_from_molten_metal"),
    },
    {
      output: Fluid.of("tconstruct:molten_netherite", INGOT * 2),
      input: [
        { fluid: "tconstruct:molten_debris", amount: INGOT * 4 },
        { fluid: "tconstruct:molten_gold", amount: INGOT * 4 },
      ],
      heat: "superheated",
      time: 100,
      id: combiningID("netherite_from_molten_metal_superheated"),
    },
    // Combining - Radiance
    {
      output: Fluid.of("kubejs:molten_radiance", 500 * mB),
      input: [
        { fluid: "kubejs:shimmer", amount: BUCKET },
        "createastral:pure_star_shard"
      ],
      heat: "superheated",
      time: 2000,
      id: combiningID("radiance_from_star_shard"),
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
      id: combiningID("radiance_from_nether_star"),
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
      id: combiningID("shadowsteel"),
    },
    // Combining - Slimesteel
    {
      output: Fluid.of("tconstruct:molten_slimesteel", INGOT * 2),
      input: ["minecraft:iron_ingot", "tconstruct:sky_slime_ball", "#tconstruct:seared_blocks"],
      heat: "superheated",
      time: 300,
      id: combiningID("slimesteel_from_ingot_superheated"),
    },
    {
      output: Fluid.of("tconstruct:molten_slimesteel", INGOT),
      input: ["minecraft:iron_ingot", "tconstruct:sky_slime_ball", "#tconstruct:seared_blocks"],
      heat: "heated",
      time: 300,
      id: combiningID("slimesteel_from_ingot"),
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
      id: combiningID("slimesteel_from_molten_metal"),
    },
    {
      output: Fluid.of("tconstruct:molten_slimesteel", INGOT),
      input: [Item.of("minecraft:iron_nugget", 9), "tconstruct:sky_slime_ball", "#tconstruct:seared_blocks"],
      heat: "heated",
      time: 300,
      id: combiningID("slimesteel_from_nuggets"),
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
      id: combiningID("slimesteel_from_nuggets_and_slime"),
    },
    // Combining - Compound Mixture (Andesite Alloy)
    {
      output: Fluid.of("kubejs:compound_mixture", INGOT),
      input: [
        "minecraft:andesite",
        "techreborn:tin_nugget",
        "minecraft:clay_ball"
      ],
      id: combiningID("compound_mixture_from_tin_nugget"),
    },
    {
      output: Fluid.of("kubejs:compound_mixture", INGOT),
      input: [
        "minecraft:andesite",
        "create:zinc_nugget",
        "minecraft:clay_ball"
      ],
      id: combiningID("compound_mixture_from_zinc_nugget"),
    },
    {
      output: Fluid.of("kubejs:compound_mixture", INGOT),
      input: [
        "minecraft:andesite",
        "minecraft:iron_nugget",
        "minecraft:clay_ball"
      ],
      id: combiningID("compound_mixture_from_iron_nugget"),
    },
    {
      output: Fluid.of("kubejs:compound_mixture", INGOT * 12),
      input: [
        "compressor:compressed_andesite",
        "minecraft:iron_ingot",
        "minecraft:clay"
      ],
      heat: "heated",
      id: combiningID("compound_mixture_from_iron_ingot"),
    },
    {
      output: Fluid.of("kubejs:compound_mixture", INGOT * 12),
      input: [
        "compressor:compressed_andesite",
        "create:zinc_ingot",
        "minecraft:clay"
      ],
      heat: "heated",
      id: combiningID("compound_mixture_from_zinc_ingot"),
    },
    {
      output: Fluid.of("kubejs:compound_mixture", INGOT * 12),
      input: [
        "compressor:compressed_andesite",
        "techreborn:tin_ingot",
        "minecraft:clay"
      ],
      heat: "heated",
      id: combiningID("compound_mixture_from_tin_ingot"),
    },
    // Melting - Amethyst
    {
      output: { fluid: "tconstruct:molten_amethyst", amount: GEM },
      input: "minecraft:amethyst_shard",
      heat: "heated",
      id: meltingID("amethyst_shard_to_molten_amethyst"),
    },
    // Melting - Debris
    {
      output: Fluid.of("tconstruct:molten_debris", 250 * mB),
      input: "minecraft:ancient_debris",
      heat: "superheated",
      time: 500,
      id: meltingID("ancient_debris_to_molten_debris"),
    },
    // Melting - Steel
    {
      output: Fluid.of("tconstruct:molten_steel", INGOT),
      input: "techreborn:steel_dust",
      heat: "heated",
      time: 100,
      id: meltingID("steel_dust_to_molten_steel"),
    },
  ];
  
  onEvent("recipes", (event) => {
    customMixingRecipes.forEach((recipe) => {
      event.recipes
        .createMixing(recipe.output, recipe.input)
        .heatRequirement(recipe.heat ?? "none")
        .processingTime(recipe.time ?? BASE_PROCESSING_TIME)
        .id(recipe.id);
    });
  });

  // --- ID Helper Functions ---

  /** @argument {string} tail The end of the ID. */
  function generateID(tail) {
    return `kubejs:create/mixing/metals/${tail}`;
  };
  
  /** @argument {string} tail The end of the ID. */
  function alloyingID(tail) {
    return generateID(`alloying_${tail}`);
  };

  /** @argument {string} tail The end of the ID. */
  function combiningID(tail) {
    return generateID(`combining_${tail}`);
  };

  /** @argument {string} tail The end of the ID. */
  function meltingID(tail) {
    return generateID(`melting_${tail}`);
  };
})();
