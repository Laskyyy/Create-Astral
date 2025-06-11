(function createCompactingRecipes() {
  const BUCKET = global.BUCKET;
  const GEM_BLOCK = global.GEM_BLOCK;
  const SLIMEBALL = global.SLIMEBALL;
  const INGOT = global.INGOT;
  const GEM = global.GEM;
  const NUGGET = global.NUGGET;
  const mB = global.mB;
  /**
   * @typedef CompactingRecipe
   * @property {Internal.IngredientJS_} output
   * @property {Internal.IngredientJS_[]} inputs
   * @property {"heated" | "superheated"} [heat]
   */
  onEvent("recipes", (event) => {
    lakyCompactingRecipes(event);
    /** @type {CompactingRecipe[]} */
    const compactingRecipes = [
      {
        output: ["minecraft:end_stone"],
        inputs: [
          "yttr:yttrium_dust",
          Item.of("techreborn:dark_ashes_dust", 3),
          { fluid: "tconstruct:molten_ender", amount: 125 * mB },
        ],
      },
      {
        output: ["ae2:fluix_pearl"],
        inputs: [Item.of("createastral:shimmer_marimo", 4), "ae2:ender_dust"],
      },
      {
        output: ["techreborn:saltpeter_dust", { fluid: "minecraft:water", amount: 500 * mB }],
        inputs: [Item.of("createastral:snowy_marimo", 4), Item.of("astraladditions:bulba_root", 4)],
      },
      {
        output: ["techreborn:saltpeter_dust", { fluid: "minecraft:water", amount: 500 * mB }],
        inputs: [Item.of("createastral:snowy_marimo", 4), "minecraft:seagrass"],
      },
      {
        output: "farmersdelight:organic_compost",
        inputs: ["minecraft:coarse_dirt", "create:tree_fertilizer", "createastral:pure_biomatter"],
      },
      {
        output: "farmersdelight:organic_compost",
        inputs: ["minecraft:rooted_dirt", "minecraft:bone_meal", { fluid: "techreborn:potassium", amount: 250 * mB }],
      },
      {
        output: "astraladditions:enderrack",
        inputs: ["astraladditions:ender_sprouts", Item.of("createastral:ender_marimo", 2)],
      },
      {
        output: "minecraft:budding_amethyst",
        inputs: [
          Item.of("minecraft:amethyst_cluster", 6),
          "tconstruct:amethyst_bronze_block",
          Item.of(Item.of("createastral:shimmer_marimo", 2), 6),
        ],
      },
      {
        output: "ad_astra:permafrost",
        inputs: ["minecraft:warped_roots", Item.of("createastral:snowy_marimo", 2)],
      },
      {
        output: "minecraft:rooted_dirt",
        inputs: ["minecraft:grass", Item.of("createastral:marimo", 2)],
      },
      {
        output: "minecraft:grass",
        inputs: ["minecraft:seagrass"],
      },
      {
        output: { fluid: "astraladditions:sputum", amount: 500 * mB },
        inputs: [
          Item.of("createastral:ender_marimo", 4),
          "techreborn:uu_matter",
          { fluid: "tconstruct:molten_ender", amount: 250 * mB },
        ],
      },
      {
        output: { fluid: "tconstruct:molten_ender", amount: 250 * mB },
        inputs: [
          Item.of("createastral:moonset_marimo", 4),
          Item.of("ae2:fluix_dust", 4),
          { fluid: "tconstruct:ender_slime", amount: 500 * mB },
        ],
      },
      {
        output: "astraladditions:moonset_crystal",
        inputs: [Item.of("createastral:moonset_marimo", 8), Item.of("ae2:ender_dust", 2)],
      },
      {
        output: "minecraft:chorus_flower",
        inputs: [Item.of("createastral:moonset_marimo", 8), "minecraft:chorus_fruit"],
      },
      {
        output: { fluid: "minecraft:water", amount: 500 * mB },
        inputs: ["createastral:marimo"],
      },
      {
        output: "minecraft:calcite",
        inputs: ["minecraft:gravel", Item.of("minecraft:bone_meal", 2)],
      },
      {
        output: "minecraft:calcite",
        inputs: ["minecraft:gravel", { fluid: "milk:still_milk", amount: 500 * mB }],
      },
      {
        output: "create:scoria",
        inputs: ["minecraft:soul_soil", { fluid: "create:chocolate", amount: 50 * mB }],
      },
      {
        output: "create:scoria",
        inputs: ["minecraft:soul_sand", { fluid: "create:chocolate", amount: 50 * mB }],
      },
      {
        output: "create:limestone",
        inputs: ["minecraft:cobblestone", { fluid: "milk:still_milk", amount: 100 * mB }],
      },
      {
        output: "minecraft:tuff",
        inputs: [Item.of("minecraft:iron_nugget", 1), "minecraft:cobblestone", "techreborn:andesite_dust"],
      },
      {
        output: "create:blaze_cake_base",
        inputs: [Item.of("ad_astra:mars_sand", 2), "minecraft:sugar"],
      },
      {
        output: "create:blaze_cake_base",
        inputs: ["ad_astra:mercury_cobblestone", "minecraft:sugar"],
      },
      {
        output: "create:blaze_cake_base",
        inputs: [Item.of("create:cinder_flour", 3), "minecraft:sugar"],
      },
      {
        output: "minecraft:lapis_lazuli",
        inputs: [
          Item.of("techreborn:lazurite_dust", 3),
          Item.of("minecraft:iron_nugget", 2),
          { fluid: "minecraft:lava", amount: BUCKET / 30 },
        ],
      },
      {
        output: "minecraft:granite",
        inputs: ["minecraft:diorite", "minecraft:flint", { fluid: "minecraft:lava", amount: 100 * mB }],
      },
      {
        output: "create:andesite_casing",
        inputs: ["#c:stripped_logs", { fluid: "kubejs:compound_mixture", amount: INGOT }],
      },
      {
        output: Item.of("create:railway_casing", 2),
        inputs: [
          "create:sturdy_sheet",
          "create:andesite_casing",
          { fluid: "tconstruct:molten_obsidian", amount: 50 * mB },
        ],
      },
      {
        output: "minecraft:prismarine_shard",
        inputs: ["#c:coral_plants"],
      },
      {
        output: "minecraft:prismarine_shard",
        inputs: ["#c:coral_fans"],
      },
      {
        output: "techreborn:diamond_nugget",
        inputs: [Item.of("minecraft:prismarine_crystals", 8)],
      },
      {
        output: "minecraft:andesite",
        inputs: [Item.of("techreborn:andesite_dust", 4)],
      },
      {
        output: "minecraft:granite",
        inputs: [Item.of("techreborn:granite_dust", 4)],
      },
      {
        output: "minecraft:diorite",
        inputs: [Item.of("techreborn:diorite_dust", 4)],
      },
      {
        output: "minecraft:calcite",
        inputs: [Item.of("techreborn:calcite_dust", 4)],
      },
      {
        output: "minecraft:basalt",
        inputs: [Item.of("techreborn:basalt_dust", 4)],
      },
      {
        output: "minecraft:andesite",
        inputs: [Item.of("techreborn:andesite_dust", 2), Item.of("minecraft:basalt", 2)],
      },
      {
        output: "minecraft:dripstone_block",
        inputs: [Item.of("minecraft:granite", 2), Item.of("minecraft:slime_ball", 2)],
      },
      {
        output: "minecraft:cobbled_deepslate",
        inputs: [Item.of("minecraft:flint", 3), "minecraft:gravel"],
      },
      {
        output: "createastral:compressed_experience_block",
        inputs: [Item.of("create:experience_block", 9)],
      },
      {
        output: ["minecraft:clay", "minecraft:sponge"],
        inputs: ["minecraft:wet_sponge", "minecraft:sand"],
      },
      {
        output: { fluid: "kubejs:white_grape_juice", amount: 6750 },
        inputs: ["vinery:white_grape"],
      },
      {
        output: { fluid: "kubejs:red_grape_juice", amount: 6750 },
        inputs: ["vinery:red_grape"],
      },
      {
        output: Item.of("createastral:gyrodyne_blueprint", 2),
        inputs: ["createastral:gyrodyne_blueprint", "create:empty_schematic", Item.of("minecraft:black_dye", 2)],
      },
      {
        output: Item.of("createastral:biplane_blueprint", 2),
        inputs: ["createastral:biplane_blueprint", "create:empty_schematic", Item.of("minecraft:black_dye", 2)],
      },
      {
        output: Item.of("createastral:airship_blueprint", 2),
        inputs: ["createastral:airship_blueprint", "create:empty_schematic", Item.of("minecraft:black_dye", 2)],
      },
      {
        output: Item.of("createastral:quadrocopter_blueprint", 2),
        inputs: ["createastral:quadrocopter_blueprint", "create:empty_schematic", Item.of("minecraft:black_dye", 2)],
      },
      //mushroom block recipes
      {
        output: "minecraft:brown_mushroom_block",
        inputs: [Item.of("minecraft:brown_mushroom", 4)],
      },
      {
        output: "minecraft:red_mushroom_block",
        inputs: [Item.of("minecraft:red_mushroom", 4)],
      },
      {
        //nametag recipe
        output: "minecraft:name_tag",
        inputs: ["farmersdelight:canvas", "minecraft:ink_sac", "createaddition:iron_wire"],
      },
      {
        output: "minecraft:andesite",
        inputs: [Item.of("minecraft:flint", 2), "minecraft:gravel", { fluid: "minecraft:lava", amount: 100 * mB }],
        heat: "heated",
      },
      {
        output: "createastral:steel_helmet",
        inputs: [Item.of("createastral:sturdy_helmet").ignoreNBT(), Item.of("techreborn:steel_dust", 6)],
        heat: "heated",
      },
      {
        output: "createastral:steel_chestplate",
        inputs: [Item.of("createastral:sturdy_chestplate").ignoreNBT(), Item.of("techreborn:steel_dust", 2)],
        heat: "heated",
      },
      {
        output: "createastral:steel_leggings",
        inputs: [Item.of("createastral:sturdy_leggings").ignoreNBT(), Item.of("techreborn:steel_dust", 8)],
        heat: "heated",
      },
      {
        output: "createastral:steel_boots",
        inputs: [Item.of("createastral:sturdy_boots").ignoreNBT(), Item.of("techreborn:steel_dust", 5)],
        heat: "heated",
      },
      {
        output: ["ae2:silicon_press", "ae2:printed_silicon"],
        inputs: ["ae2:silicon_press", { fluid: "techreborn:silicon", amount: INGOT }],
        heat: "heated",
      },
      {
        output: ["ae2:silicon_press", "ae2:silicon_press"],
        inputs: ["ae2:silicon_press", "minecraft:iron_block"],
        heat: "heated",
      },
      {
        output: ["ae2:logic_processor_press", "ae2:printed_logic_processor"],
        inputs: ["ae2:logic_processor_press", { fluid: "tconstruct:molten_gold", amount: INGOT }],
        heat: "heated",
      },
      {
        output: ["ae2:logic_processor_press", "ae2:logic_processor_press"],
        inputs: ["ae2:logic_processor_press", "minecraft:iron_block"],
        heat: "heated",
      },
      {
        output: ["ae2:engineering_processor_press", "ae2:printed_engineering_processor"],
        inputs: ["ae2:engineering_processor_press", { fluid: "tconstruct:molten_diamond", amount: GEM }],
        heat: "heated",
      },
      {
        output: ["ae2:engineering_processor_press", "ae2:engineering_processor_press"],
        inputs: ["ae2:engineering_processor_press", "minecraft:iron_block"],
        heat: "heated",
      },
      {
        output: ["ae2:calculation_processor_press", "ae2:printed_calculation_processor"],
        inputs: ["ae2:calculation_processor_press", { fluid: "kubejs:molten_desh", amount: INGOT }],
        heat: "heated",
      },
      {
        output: "techreborn:carbon_fiber",
        inputs: [{ fluid: "techreborn:carbon", amount: 10125 }],
        heat: "heated",
      },
      {
        output: ["ae2:calculation_processor_press", "ae2:calculation_processor_press"],
        inputs: ["ae2:calculation_processor_press", "minecraft:iron_block"],
        heat: "heated",
      },
      {
        output: ["ae2:ender_dust"],
        inputs: ["minecraft:ender_pearl"],
        heat: "heated",
      },
      {
        output: ["ae2:certus_quartz_dust"],
        inputs: ["#c:certus_quartz"],
      },
      {
        output: "minecraft:shulker_shell",
        inputs: ["ae2:ender_dust", Item.of("minecraft:purple_dye", 8)],
        heat: "heated",
      },
      {
        output: "createastral:olivine_sheet",
        inputs: [Item.of("techreborn:olivine_dust", 6)],
        heat: "superheated",
      },
      {
        output: "yttr:promethium_lump",
        inputs: [
          Item.of("yttr:promethium_speck", 4),
          "yttr:neodymium_dust",
          { fluid: "kubejs:hellfire", amount: 500 * mB },
        ],
        heat: "superheated",
      },
      {
        output: ["yttr:armor_plating", "yttr:bedrock_shard"],
        inputs: [
          Item.of("yttr:yttrium_ingot", 8),
          "yttr:bedrock_shard",
          { fluid: "kubejs:hellfire", amount: 100 * mB },
        ],
        heat: "superheated",
      },
      {
        output: "yttr:promethium_glob",
        inputs: [
          Item.of("yttr:promethium_lump", 2),
          "yttr:neodymium_disc",
          { fluid: "kubejs:hellfire", amount: 1000 * mB },
        ],
        heat: "superheated",
      },
      {
        output: "create:lapis_sheet",
        inputs: [Item.of("techreborn:lazurite_dust", 6)],
        heat: "heated",
      },
      {
        output: "yttr:continuous_platform",
        inputs: [
          { fluid: "kubejs:aurorite", amount: 100 * mB },
          { fluid: "kubejs:shimmer", amount: 100 * mB },
        ],
        heat: "heated",
      },
      {
        output: "ad_astra:sky_stone",
        inputs: [Item.of("ad_astra:moon_stone", 5), "ae2:certus_quartz_dust"],
        heat: "heated",
      },
      {
        output: "createastral:star_shard",
        inputs: [{ fluid: "kubejs:molten_radiance", amount: 100 * mB }],
        heat: "heated",
      },
      {
        output: "ad_astra:permafrost",
        inputs: [Item.of("ad_astra:glacio_stone", 9)],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:purpur_block", 4),
        inputs: [Item.of("ad_astra:strophar_cap", 4), { fluid: "minecraft:water", amount: 100 * mB }],
      },
      {
        output: [
          "minecraft:sponge",
          Item.of("minecraft:cod").withChance(0.25),
          Item.of("minecraft:salmon").withChance(0.25),
          Item.of("minecraft:tropical_fish").withChance(0.2),
          Item.of("minecraft:pufferfish").withChance(0.15),
          Item.of("minecraft:ink_sac").withChance(0.15),
        ],
        inputs: ["minecraft:wet_sponge"],
      },
      {
        output: "ad_astra:ostrum_ingot",
        inputs: [{ fluid: "kubejs:molten_ostrum", amount: INGOT }],
      },
      {
        output: "ad_astra:ostrum_nugget",
        inputs: [{ fluid: "kubejs:molten_ostrum", amount: NUGGET }],
      },
      {
        output: "createdeco:cast_iron_ingot",
        inputs: [{ fluid: "createbigcannons:molten_cast_iron", amount: INGOT }],
      },
      {
        output: "createdeco:cast_iron_nugget",
        inputs: [{ fluid: "createbigcannons:molten_cast_iron", amount: NUGGET }],
      },
      {
        output: { fluid: "tconstruct:earth_slime", amount: SLIMEBALL },
        inputs: ["minecraft:slime_ball"],
      },
      {
        output: "astralfoods:blaze_fries",
        inputs: ["astralfoods:blaze_rods", { fluid: "createaddition:seed_oil", amount: 100 * mB }],
      },
      {
        output: "astralfoods:fried_cod",
        inputs: ["minecraft:cod", { fluid: "createaddition:seed_oil", amount: 100 * mB }],
      },
      {
        output: "createbigcannons:steel_screw_lock",
        inputs: [Item.of("astraladditions:steel_ring", 2)],
      },
    ];
    compactingRecipes.forEach((recipe) => {
      event.recipes.createCompacting(recipe.output, recipe.inputs).heatRequirement(recipe.heat ?? "");
    });
  });
  /** @param {Internal.RecipeEventJS} event */
  function lakyCompactingRecipes(event) {
    /** @type {CompactingRecipe[]} */
    const recipeList = [
      {
        output: "create:ochrum",
        inputs: [
          "minecraft:dripstone_block",
          "minecraft:cobblestone",
          { fluid: "create:honey", amount: 100 * mB },
          "minecraft:yellow_dye",
        ],
      },
      {
        output: "create:crimsite",
        inputs: [
          "minecraft:tuff",
          "minecraft:cobblestone",
          { fluid: "tconstruct:blood", amount: 100 * mB },
          "minecraft:red_dye",
        ],
      },
      {
        output: "create:veridium",
        inputs: [
          "minecraft:cobblestone",
          "minecraft:slime_ball",
          { fluid: "minecraft:lava", amount: 100 * mB },
          "minecraft:green_dye",
        ],
      },
      {
        output: "create:asurine",
        inputs: [
          "minecraft:prismarine",
          "minecraft:kelp",
          { fluid: "minecraft:water", amount: 100 * mB },
          "minecraft:blue_dye",
        ],
      },
      {
        output: "create:scorchia",
        inputs: [
          "minecraft:basalt",
          "ad_astra:moon_sand",
          { fluid: "tconstruct:blazing_blood", amount: 50 * mB },
          "minecraft:black_dye",
        ],
      },
    ];
    recipeList.forEach((entry) => {
      event.recipes.create.compacting(entry.output, entry.inputs).processingTime(400);
    });
  }
})();
