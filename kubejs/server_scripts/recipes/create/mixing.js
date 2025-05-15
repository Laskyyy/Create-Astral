(function createMixingRecipes() {
  const BUCKET = global.BUCKET;
  const GEM_BLOCK = global.GEM_BLOCK;
  const SLIMEBALL = global.SLIMEBALL;
  const INGOT = global.INGOT;
  const GEM = global.GEM;
  const NUGGET = global.NUGGET;
  const mB = global.mB;

  onEvent("recipes", (event) => {
    farmersCompatMixing(event);
    const mixingRecipes = [
      {
        output: [
          {
            fluid: "estrogen:molten_amethyst",
            amount: INGOT / 2,
          },
        ],
        input: [
          {
            fluid: "tconstruct:molten_amethyst",
            amount: 500 * mB,
          },
          "astraladditions:bulba_root",
        ],
        time: 105,
      },
      {
        output: ["create:tree_fertilizer"],
        input: ["#minecraft:saplings", "#c:coral_fans", "minecraft:bone_meal"],
        time: 180,
      },
      {
        output: [
          {
            fluid: "kubejs:shimmer",
            amount: BUCKET / 9,
          },
        ],
        input: ["ae2:fluix_crystal", "minecraft:glowstone_dust", "tconstruct:amethyst_bronze_nugget"],
        heat: "heated",
        time: 180,
      },
      {
        output: [
          {
            fluid: "kubejs:shimmer",
            amount: BUCKET,
          },
        ],
        input: [Item.of("createastral:shimmer_marimo", 4), "naturalist:glow_goop", "astraladditions:lune_shroom"],
        heat: "heated",
        time: 180,
      },
      {
        output: ["astraladditions:shimmer_heart"],
        input: [
          Item.of("createastral:shimmer_marimo", 2),
          "minecraft:heart_of_the_sea",
          {
            fluid: "xpcrystals:soul",
            amount: BUCKET,
          },
        ],
        heat: "heated",
        time: 180,
      },
      {
        output: ["astraladditions:shimmer_blaze_rod"],
        input: [
          Item.of("createastral:shimmer_marimo", 2),
          Item.of("minecraft:blaze_rod", 2),
          "tconstruct:blazing_bone",
        ],
        heat: "heated",
        time: 180,
      },
      {
        output: [{ fluid: "tconstruct:ender_slime", amount: 250 * mB }],
        input: ["createastral:ender_marimo", "ae2:ender_dust", { fluid: "tconstruct:earth_slime", amount: 125 * mB }],
        heat: "heated",
        time: 180,
      },
      {
        output: [Item.of("createastral:shimmer_marimo", 1)],
        input: [
          "createastral:marimo",
          "ae2:fluix_crystal",
          {
            fluid: "kubejs:shimmer",
            amount: 500 * mB,
          },
        ],
        time: 180,
      },
      {
        output: [Item.of("createastral:shimmer_marimo", 2)],
        input: [
          "createastral:shimmer_marimo",
          "ae2:fluix_crystal_seed",
          {
            fluid: "kubejs:shimmer",
            amount: INGOT,
          },
        ],
        time: 180,
      },
      {
        output: [Item.of("createastral:ender_marimo", 1)],
        input: [
          "createastral:marimo",
          "tconstruct:ender_slime_crystal",
          {
            fluid: "kubejs:shimmer",
            amount: 500 * mB,
          },
        ],
        time: 180,
      },
      {
        output: [Item.of("createastral:ender_marimo", 2)],
        input: [
          "createastral:ender_marimo",
          "tconstruct:ender_slime_grass_seeds",
          {
            fluid: "astraladditions:sputum",
            amount: INGOT,
          },
        ],
        time: 180,
      },
      {
        output: [Item.of("createastral:snowy_marimo", 1)],
        input: [
          "createastral:marimo",
          "createastral:prismatic_crystal",
          {
            fluid: "kubejs:shimmer",
            amount: 500 * mB,
          },
        ],
        time: 180,
      },
      {
        output: [Item.of("createastral:snowy_marimo", 2)],
        input: [
          "createastral:snowy_marimo",
          "ad_astra:ice_shard",
          {
            fluid: "minecraft:water",
            amount: 500 * mB,
          },
        ],
        time: 180,
      },
      {
        output: [
          Item.of(Item.of("createastral:marimo", 2)).withChance(0.4),
          Item.of(Item.of("createastral:moonset_marimo", 2)).withChance(0.6),
          {
            fluid: "minecraft:water",
            amount: BUCKET,
          },
        ],
        input: [
          "createastral:marimo",
          "createastral:moonset_marimo",
          {
            fluid: "minecraft:water",
            amount: BUCKET,
          },
        ],
        time: 60,
      },
      {
        output: [Item.of("createastral:moonset_marimo", 1)],
        input: [
          "createastral:marimo",
          "astraladditions:moonset_crystal",
          {
            fluid: "kubejs:shimmer",
            amount: 500 * mB,
          },
        ],
        time: 180,
      },
      {
        output: [
          Item.of("createastral:marimo", 2),
          {
            fluid: "minecraft:water",
            amount: 500 * mB,
          },
        ],
        input: [
          "createastral:marimo",
          {
            fluid: "minecraft:water",
            amount: 500 * mB,
          },
        ],
        time: 60,
      },
      {
        output: [
          {
            fluid: "milk:still_milk",
            amount: 500 * mB,
          },
          "cookingforblockheads:cow_jar",
        ],
        input: ["cookingforblockheads:cow_jar"],
        time: 60,
      },
      {
        output: [
          {
            fluid: "estrogen:horse_urine",
            amount: 500 * mB,
          },
          "createastral:horse",
        ],
        input: ["createastral:horse"],
        time: 60,
      },
      {
        output: Item.of("create:blaze_cake", 8),
        input: ["yttr:delicace", { fluid: "kubejs:metabolic_broth", amount: 250 * mB }],
        heat: "superheated",
        time: 100,
      },
      {
        output: "minecraft:feather",
        input: ["minecraft:stick", "minecraft:string"],
        time: 100,
      },
      {
        output: "minecraft:bone_meal",
        input: ["techreborn:calcite_dust", { fluid: "minecraft:water", amount: 100 * mB }],
        time: 100,
      },
      {
        output: Item.of("minecraft:soul_soil", 2),
        input: ["minecraft:dirt", "minecraft:soul_sand"],
        time: 100,
      },
      {
        output: "minecraft:small_amethyst_bud",
        input: ["techreborn:amethyst_dust", "ae2:certus_crystal_seed"],
        time: 200,
      },
      {
        output: "minecraft:rotten_flesh",
        input: [
          "#c:raw_meat",
          {
            fluid: "tconstruct:blood",
            amount: 25 * mB,
          },
        ],
        time: 100,
      },
      {
        output: "minecraft:shroomlight",
        input: [
          [
            "minecraft:brown_mushroom_block",
            "minecraft:red_mushroom_block",
            "minecraft:mushroom_stem",
            "minecraft:nether_wart_block",
            "minecraft:warped_wart_block",
          ],
          "naturalist:glow_goop",
          {
            fluid: "create:honey",
            amount: 25 * mB,
          },
        ],
        time: 100,
      },
      {
        output: "minecraft:shroomlight",
        input: [
          [
            "minecraft:brown_mushroom_block",
            "minecraft:red_mushroom_block",
            "minecraft:mushroom_stem",
            "minecraft:nether_wart_block",
            "minecraft:warped_wart_block",
          ],
          Item.of("minecraft:glowstone_dust", 2),
          {
            fluid: "create:honey",
            amount: 25 * mB,
          },
        ],
        time: 100,
      },
      {
        output: "minecraft:ice",
        input: [
          Item.of("minecraft:snowball", 2),
          {
            fluid: "minecraft:water",
            amount: BUCKET * 0.5,
          },
        ],
        time: 100,
      },
      {
        output: Item.of("custommachinery:custom_machine_item", {
          machine: "createastral:channeling_transformer",
        }),
        input: [
          "createaddition:tesla_coil",
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:channeling",lvl:1s}]}'),
          { fluid: "tconstruct:molten_netherite", amount: BUCKET },
        ],
      },
      {
        output: {
          fluid: "kubejs:smite",
          amount: 5 * mB,
        },
        input: [
          {
            fluid: "minecraft:lava",
            amount: 100 * mB,
          },
          Item.of("minecraft:basalt", 2),
        ],
        heat: "heated",
        time: 400,
      },
      //mixing recipes for coral
      {
        output: "minecraft:tube_coral_block",
        input: [
          ["minecraft:tropical_fish", "minecraft:pufferfish"],
          Item.of("minecraft:kelp", 3),
          "minecraft:blue_dye",
          {
            fluid: "kubejs:shimmer",
            amount: 100 * mB,
          },
        ],
        time: 100,
      },
      {
        output: "minecraft:brain_coral_block",
        input: [
          ["minecraft:tropical_fish", "minecraft:pufferfish"],
          Item.of("minecraft:kelp", 3),
          "minecraft:pink_dye",
          {
            fluid: "kubejs:shimmer",
            amount: 100 * mB,
          },
        ],
        time: 100,
      },
      {
        output: "minecraft:bubble_coral_block",
        input: [
          ["minecraft:tropical_fish", "minecraft:pufferfish"],
          Item.of("minecraft:kelp", 3),
          "minecraft:purple_dye",
          {
            fluid: "kubejs:shimmer",
            amount: 100 * mB,
          },
        ],
        time: 100,
      },
      {
        output: "minecraft:fire_coral_block",
        input: [
          ["minecraft:tropical_fish", "minecraft:pufferfish"],
          Item.of("minecraft:kelp", 3),
          "minecraft:red_dye",
          {
            fluid: "kubejs:shimmer",
            amount: 100 * mB,
          },
        ],
        time: 100,
      },
      {
        output: "minecraft:horn_coral_block",
        input: [
          ["minecraft:tropical_fish", "minecraft:pufferfish"],
          Item.of("minecraft:kelp", 3),
          "minecraft:yellow_dye",
          {
            fluid: "kubejs:shimmer",
            amount: 100 * mB,
          },
        ],
        time: 100,
      },
      {
        output: Item.of("minecraft:blaze_powder", 2),
        input: ["minecraft:blaze_rod"],
      },
      {
        output: "techreborn:plantball",
        input: [
          Ingredient.of("#minecraft:leaves", 9),
          {
            fluid: "createaddition:seed_oil",
            amount: 500 * mB,
          },
        ],
        heat: "heated",
        time: 1000,
      },
      {
        output: "techreborn:plantball",
        input: [
          Ingredient.of("#c:grass_variants", 9),
          {
            fluid: "createaddition:seed_oil",
            amount: 500 * mB,
          },
        ],
        heat: "heated",
        time: 1000,
      },
      {
        output: "techreborn:plantball",
        input: [
          Item.of("minecraft:kelp", 9),
          {
            fluid: "createaddition:seed_oil",
            amount: 500 * mB,
          },
        ],
        heat: "heated",
        time: 1000,
      },
      {
        output: "techreborn:plantball",
        input: [
          Item.of("createastral:marimo", 9),
          {
            fluid: "createaddition:seed_oil",
            amount: 500 * mB,
          },
        ],
        heat: "heated",
        time: 1000,
      },
      {
        output: "techreborn:plantball",
        input: [
          Item.of("minecraft:sugar_cane", 9),
          {
            fluid: "createaddition:seed_oil",
            amount: 500 * mB,
          },
        ],
        heat: "heated",
        time: 1000,
      },
      {
        output: "createastral:ender_mush",
        input: [
          Item.of("tconstruct:ender_slime_crystal", 2),
          {
            fluid: "astraladditions:sputum",
            amount: 500 * mB,
          },
        ],
        heat: "superheated",
        time: 1000,
      },
      {
        output: "techreborn:plantball",
        input: [
          Item.of("farmersdelight:straw", 3),
          {
            fluid: "createaddition:seed_oil",
            amount: 500 * mB,
          },
        ],
        heat: "heated",
        time: 1000,
      },
      {
        output: [
          Item.of("minecraft:tube_coral").withChance(0.2),
          Item.of("minecraft:brain_coral").withChance(0.2),
          Item.of("minecraft:bubble_coral").withChance(0.2),
          Item.of("minecraft:fire_coral").withChance(0.2),
          Item.of("minecraft:horn_coral").withChance(0.2),
        ],
        input: [
          Item.of("minecraft:sea_pickle", 4),
          {
            fluid: "minecraft:water",
            amount: 250 * mB,
          },
        ],
        time: 50,
      },
      {
        output: [
          Item.of("minecraft:tube_coral_fan").withChance(0.2),
          Item.of("minecraft:brain_coral_fan").withChance(0.2),
          Item.of("minecraft:bubble_coral_fan").withChance(0.2),
          Item.of("minecraft:fire_coral_fan").withChance(0.2),
          Item.of("minecraft:horn_coral_fan").withChance(0.2),
        ],
        input: [
          Item.of("minecraft:dried_kelp", 4),
          {
            fluid: "minecraft:water",
            amount: 250 * mB,
          },
        ],
        time: 50,
      },
      {
        output: Item.of("tconstruct:nether_grout", 3),
        input: [
          "minecraft:magma_cream",
          "minecraft:soul_sand",
          "create:scoria",
          "#c:dusts/obsidian",
          "#c:dusts/obsidian",
          "#c:dusts/obsidian",
        ],
        heat: "heated",
        time: 700,
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:mending",lvl:1s}]}'),
        input: [Item.of("minecraft:book", 6), Item.of("create:experience_nugget", 4)],
        heat: "heated",
        time: 700,
      },
      {
        output: Fluid.of("kubejs:blast-resistant_cement", BUCKET),
        input: [
          "#c:concrete_powder",
          Item.of("createastral:lime", 2),
          Item.of("techreborn:steel_dust", 3),
          { fluid: "minecraft:water", amount: BUCKET },
        ],
        heat: "heated",
        time: 1000,
      },
      {
        output: Fluid.of("create:honey", 100 * mB),
        input: ["techreborn:sap", "minecraft:sugar"],
        time: 100,
      },
      {
        output: Item.of("dustrial_decor:cast_iron_billet", 3),
        input: ["minecraft:iron_ingot", Item.of("create:andesite_alloy", 2), "minecraft:coal"],
      },
      {
        output: "techreborn:rubber",
        input: ["techreborn:sap"],
        time: 50,
      },
      {
        output: Item.of("techreborn:machine_parts", 4),
        input: ["ad_astra:steel_plate", "techreborn:carbon_mesh", Ingredient.of("#c:wires", 8)],
        heat: "superheated",
        time: 400,
      },
      {
        output: Item.of("techreborn:carbon_mesh", 1),
        input: [Item.of("techreborn:carbon_fiber", 2)],
        heat: "superheated",
        time: 400,
      },
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
      {
        output: Fluid.of("techreborn:silicon", mB * 25),
        input: ["#c:sand"],
        heat: "heated",
        time: 30,
      },
      {
        output: Fluid.of("techreborn:silicon", mB * 200),
        input: ["ae2:certus_quartz_dust"],
        heat: "heated",
        time: 100,
      },
      {
        output: Fluid.of("techreborn:silicon", mB * 400),
        input: ["ae2:certus_quartz_crystal"],
        heat: "superheated",
        time: 200,
      },
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
      {
        output: Fluid.of("tconstruct:molten_bronze", INGOT * 2),
        input: [
          { fluid: "tconstruct:molten_tin", amount: INGOT },
          { fluid: "tconstruct:molten_copper", amount: INGOT },
        ],
        time: 100,
      },
      {
        output: Fluid.of("tconstruct:molten_rose_gold", INGOT * 2),
        input: [Item.of("minecraft:gold_nugget", 9), Item.of("create:copper_nugget", 9)],
        heat: "heated",
        time: 300,
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
      {
        output: Fluid.of("tconstruct:molten_steel", INGOT),
        input: ["techreborn:steel_dust"],
        heat: "heated",
        time: 100,
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
      {
        output: Fluid.of("tconstruct:molten_slimesteel", INGOT * 2),
        input: ["minecraft:iron_ingot", "tconstruct:sky_slime_ball", "#tconstruct:seared_blocks"],
        heat: "superheated",
        time: 300,
      },
      {
        output: Item.of("ae2:certus_quartz_crystal", 2),
        input: [{ fluid: "minecraft:water", amount: 250 * mB }, Item.of("ae2:certus_quartz_dust", 1)],
        heat: "heated",
        time: 40,
      },
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
        output: Fluid.of("tconstruct:molten_queens_slime", INGOT * 2),
        input: ["tconstruct:slimesteel_ingot", Item.of("tconstruct:cobalt_ingot", 2)],
        heat: "superheated",
        time: 5,
      },
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
        output: Fluid.of("tconstruct:molten_hepatizon", INGOT / 2),
        input: ["techreborn:lead_ingot", Item.of("tconstruct:cobalt_ingot", 2)],
        heat: "superheated",
        time: 5,
      },
      {
        output: Fluid.of("tconstruct:molten_debris", 250 * mB),
        input: ["minecraft:ancient_debris"],
        heat: "superheated",
        time: 500,
      },
      {
        output: "create:chromatic_compound",
        input: [Item.of("techreborn:uu_matter", 4), { fluid: "kubejs:shimmer", amount: BUCKET }],
        heat: "superheated",
        time: 2500,
      },
      {
        output: Fluid.of("kubejs:compound_mixture", INGOT),
        input: ["minecraft:andesite", "techreborn:tin_nugget", "minecraft:clay_ball"],
      },
      {
        output: Fluid.of("kubejs:compound_mixture", INGOT),
        input: ["minecraft:andesite", "create:zinc_nugget", "minecraft:clay_ball"],
      },
      {
        output: Fluid.of("kubejs:compound_mixture", INGOT),
        input: ["minecraft:andesite", "minecraft:iron_nugget", "minecraft:clay_ball"],
      },
      {
        output: Fluid.of("kubejs:compound_mixture", INGOT * 12),
        input: ["compressor:compressed_andesite", "minecraft:iron_ingot", "minecraft:clay"],
        heat: "heated",
      },
      {
        output: Fluid.of("kubejs:compound_mixture", INGOT * 12),
        input: ["compressor:compressed_andesite", "create:zinc_ingot", "minecraft:clay"],
        heat: "heated",
      },
      {
        output: Fluid.of("kubejs:compound_mixture", INGOT * 12),
        input: ["compressor:compressed_andesite", "techreborn:tin_ingot", "minecraft:clay"],
        heat: "heated",
      },
      {
        output: Item.of("tconstruct:grout", 8),
        input: ["create:andesite_alloy", "create:zinc_ingot", Item.of("minecraft:gravel", 8)],
      },
      {
        output: "minecraft:tuff",
        input: ["minecraft:basalt", "minecraft:cobblestone"],
      },
      {
        output: Item.of("tconstruct:grout", 8),
        input: ["create:andesite_alloy", "create:zinc_ingot", Item.of("minecraft:gravel", 8)],
        time: 0,
      },
      {
        output: "tconstruct:seared_bricks",
        input: [Item.of("tconstruct:seared_brick", 4), "#c:slimeballs"],
        time: 0,
      },
      {
        output: "tconstruct:seared_bricks",
        input: [Item.of("tconstruct:seared_brick", 4), "techreborn:sap"],
        time: 0,
      },
      {
        output: "techreborn:steel_dust",
        input: [Item.of("minecraft:iron_ingot", 6), Item.of("techreborn:coal_dust", 4)],
        heat: "heated",
        time: 400,
      },
      {
        output: "minecraft:glow_ink_sac",
        input: ["minecraft:ink_sac", Item.of("minecraft:glowstone_dust", 2)],
        time: 50,
      },
      {
        output: "minecraft:piglin_banner_pattern",
        input: [Item.of("minecraft:paper", 1), Item.of("tconstruct:large_plate", '{Material:"tconstruct:pig_iron"}')],
        time: 100,
      },
      {
        output: "minecraft:dolphin_spawn_egg",
        input: [{ fluid: "kubejs:shimmer", amount: 500 * mB }, "createastral:orcane"],
        time: 500,
      },
      {
        output: "adoptafloppa:kitney_item",
        input: [{ fluid: "kubejs:shimmer", amount: 500 * mB }, Item.of("minecraft:ghast_tear", 3)],
        time: 500,
      },
      {
        output: "blahaj:gray_shark",
        input: [{ fluid: "kubejs:shimmer", amount: BUCKET }, "blahaj:blue_shark"],
        time: 2000,
      },
      {
        output: "createastral:separation_agent",
        input: [{ fluid: "yttr:void", amount: BUCKET }, "createastral:refining_agent"],
        heat: "superheated",
        time: 2000,
      },
      {
        output: Fluid.of("kubejs:molten_radiance", 500 * mB),
        input: [{ fluid: "kubejs:shimmer", amount: BUCKET }, "createastral:pure_star_shard"],
        heat: "superheated",
        time: 2000,
      },
      {
        output: "tconstruct:ichor_slime_ball",
        input: [{ fluid: "kubejs:shimmer", amount: INGOT }, Item.of("tconstruct:sky_slime_ball", 4)],
        heat: "heated",
        time: 30,
      },
      {
        output: "tconstruct:ender_slime_ball",
        input: [{ fluid: "kubejs:shimmer", amount: INGOT }, Item.of("tconstruct:ichor_slime_ball", 2)],
        heat: "heated",
        time: 30,
      },
      {
        output: "doodads:portable_nether",
        input: [{ fluid: "kubejs:shimmer", amount: BUCKET }, "minecraft:lodestone"],
        heat: "heated",
        time: 500,
      },
      {
        output: Item.of("doodads:stone_brick_road", 2),
        input: [{ fluid: "kubejs:shimmer", amount: 500 * mB }, Item.of("minecraft:stone_bricks", 2)],
        time: 1000,
      },
      {
        output: Item.of("doodads:brick_road", 2),
        input: [{ fluid: "kubejs:shimmer", amount: 500 * mB }, Item.of("minecraft:bricks", 2)],
        time: 1000,
      },
      {
        output: "doodads:asphalt",
        input: [{ fluid: "kubejs:compound_mixture", amount: 3000 }, "#c:concrete_powder"],
        time: 50,
      },
      {
        output: Item.of("astraladditions:ender_tip", 2),
        input: ["astraladditions:ender_tip", "yttr:neodymium_dust"],
        time: 50,
      },
      {
        output: "astraladditions:twisted_nylium",
        input: ["astraladditions:enderrack", { fluid: "astraladditions:sputum", amount: INGOT }],
        time: 50,
      },
      {
        output: { fluid: "create:honey", amount: 500 * mB },
        input: [
          { fluid: "minecraft:water", amount: 500 * mB },
          { fluid: "kubejs:shimmer", amount: 500 * mB },
        ],
        time: 3000,
      },
      {
        output: "createastral:astral_conduit",
        input: [
          { fluid: "kubejs:shimmer", amount: BUCKET },
          "minecraft:diamond_block",
          "phonos:redstone_chip",
          "minecraft:flint_and_steel",
        ],
        time: 30,
      },
      {
        output: ["minecraft:sponge", "minecraft:clay"],
        input: ["minecraft:wet_sponge", "minecraft:sand"],
        time: 50,
      },
      {
        output: [{ fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET }],
        input: ["create:experience_block"],
        heat: "heated",
        time: 1000,
      },
      {
        output: [{ fluid: "kubejs:liquid_xp_nuggies", amount: INGOT }],
        input: ["createastral:experience_ingot"],
        heat: "heated",
        time: 100,
      },
      {
        output: Item.of("minecraft:wet_sponge", 8),
        input: [
          Item.of("minecraft:yellow_dye", 8),
          Item.of("minecraft:black_dye", 2),
          Item.of("minecraft:heart_of_the_sea", 1),
          { fluid: "minecraft:water", amount: BUCKET },
        ],
        time: 500,
      },
      {
        output: Item.of("minecraft:paper", 3),
        input: [Item.of("techreborn:saw_dust", 3), { fluid: "minecraft:water", amount: BUCKET }],
        time: 100,
      },
      {
        output: "createastral:laskinium",
        input: [
          {
            item: "createastral:subatomic_ingot",
            amount: 2,
          },
          {
            item: "createastral:astral_singularity",
            amount: 2,
          },
          {
            fluid: "kubejs:molten_calorite",
            amount: INGOT,
          },
        ],
        heat: "superheated",
        time: 1000,
      },
      {
        output: "yttr:yttrium_ingot",
        input: [
          {
            fluid: "kubejs:molten_desh",
            amount: INGOT * 4,
          },
          {
            fluid: "kubejs:molten_yttrium",
            amount: INGOT,
          },
        ],
        heat: "superheated",
        time: 1000,
      },
      {
        output: "yttr:yttrium_ingot",
        input: [
          {
            fluid: "kubejs:molten_ostrum",
            amount: INGOT * 2,
          },
          {
            fluid: "kubejs:molten_yttrium",
            amount: INGOT,
          },
        ],
        heat: "superheated",
        time: 1000,
      },
      {
        output: "yttr:yttrium_ingot",
        input: [
          {
            fluid: "kubejs:molten_calorite",
            amount: INGOT,
          },
          {
            fluid: "kubejs:molten_yttrium",
            amount: INGOT,
          },
        ],
        heat: "superheated",
        time: 1000,
      },
      {
        output: "yttr:yttrium_ingot",
        input: [
          Item.of("ad_astra:desh_ingot", 4),
          {
            fluid: "kubejs:molten_yttrium",
            amount: INGOT,
          },
        ],
        heat: "superheated",
        time: 1000,
      },
      {
        output: "yttr:yttrium_ingot",
        input: [
          Item.of("ad_astra:ostrum_ingot", 2),
          {
            fluid: "kubejs:molten_yttrium",
            amount: INGOT,
          },
        ],
        heat: "superheated",
        time: 1000,
      },
      {
        output: "yttr:yttrium_ingot",
        input: [
          "ad_astra:calorite_ingot",
          {
            fluid: "kubejs:molten_yttrium",
            amount: INGOT,
          },
        ],
        heat: "superheated",
        time: 1000,
      },
      {
        output: ["astralfoods:astral_sauce"],
        input: ["createastral:astral_singularity"],
        heat: "superheated",
        time: 80,
      },
      {
        output: ["astralfoods:quantum_pasta"],
        input: ["astralfoods:astral_sauce", Item.of("astralfoods:quantum_bites", 2), "farmersdelight:raw_pasta"],
        heat: "heated",
        time: 250,
      },
      {
        output: "yttr:ruined_cobblestone",
        input: [
          "minecraft:cobblestone",
          "yttr:rubble",
          {
            fluid: "tconstruct:magma",
            amount: 250 * mB,
          },
        ],
        heat: "superheated",
        time: 200,
      },
      {
        output: "yttr:wasteland_stone",
        input: ["minecraft:stone", "yttr:rubble", "yttr:rubble"],
        time: 200,
      },
      {
        output: "yttr:wasteland_dirt",
        input: ["minecraft:sand", "yttr:rubble", "yttr:rubble"],
        time: 200,
      },
      {
        output: "yttr:wasteland_log",
        input: ["minecraft:oak_log", "yttr:rubble", "yttr:rubble"],
        time: 200,
      },
      {
        output: Item.of("minecraft:piglin_banner_pattern", 2),
        input: ["minecraft:piglin_banner_pattern", "minecraft:paper"],
        time: 150,
      },
      {
        output: Item.of("astraladditions:cometball", 4),
        input: [Item.of("astraladditions:moonset_crystal", 3)],
        time: 150,
      },
      {
        output: "astraladditions:blazed_steel_ring",
        input: [
          "astraladditions:steel_ring",
          "astraladditions:shimmer_blaze_powder",
          {
            fluid: "tconstruct:blazing_blood",
            amount: INGOT,
          },
        ],
        heat: "heated",
        time: 400,
      },
      {
        output: "astraladditions:moonblazed_orb",
        input: [
          "astraladditions:cometball",
          "minecraft:ender_eye",
          "astraladditions:shimmer_blaze_powder",
          {
            fluid: "tconstruct:blazing_blood",
            amount: BUCKET,
          },
        ],
        time: 500,
      },
      {
        output: "astraladditions:oh-no",
        input: [
          "astraladditions:oh-no_broken",
          "createastral:astral_conduit",
          {
            fluid: "tconstruct:blazing_blood",
            amount: BUCKET,
          },
        ],
        heat: "heated",
        time: 500,
      },
      //Drink Beer Spices
      {
        output: "drinkbeer:spice_blaze_paprika",
        input: [Item.of("minecraft:blaze_powder", 2), "minecraft:fire_charge"],
        heat: "heated",
        time: 500,
      },
      {
        output: "drinkbeer:spice_dried_eglia_bud",
        input: ["minecraft:dried_kelp", Item.of("tconstruct:glow_ball", 2)],
        time: 500,
      },
      {
        output: "drinkbeer:spice_smoked_eglia_bud",
        input: ["minecraft:fire_charge", Item.of("tconstruct:glow_ball", 2)],
        heat: "heated",
        time: 500,
      },
      {
        output: "drinkbeer:spice_amethyst_nigella_seeds",
        input: [Item.of("techreborn:amethyst_dust", 2), "minecraft:popped_chorus_fruit"],
        time: 500,
      },
      {
        output: "drinkbeer:spice_citrine_nigella_seeds",
        input: [Item.of("minecraft:glowstone_dust", 2), "minecraft:popped_chorus_fruit"],
        time: 500,
      },
      {
        output: "drinkbeer:spice_ice_mint",
        input: ["minecraft:ice", Ingredient.of("#minecraft:leaves", 4)],
        time: 500,
      },
      {
        output: "drinkbeer:spice_ice_patchouli",
        input: ["minecraft:packed_ice", Item.of("minecraft:kelp", 2)],
        time: 500,
      },
      {
        output: ["drinkbeer:spice_storm_shards", "ae2:certus_quartz_crystal"],
        input: ["ae2:charged_certus_quartz_crystal", Item.of("minecraft:prismarine_shard", 2)],
        time: 500,
      },
      {
        output: "drinkbeer:spice_roasted_red_pine_nuts",
        input: ["minecraft:blaze_powder", Item.of("minecraft:wheat_seeds", 3)],
        heat: "heated",
        time: 500,
      },
      {
        output: "drinkbeer:spice_glace_goji_berries",
        input: [Item.of("minecraft:sweet_berries", 3), "minecraft:sugar"],
        heat: "heated",
        time: 500,
      },
      {
        output: "drinkbeer:spice_frozen_persimmon",
        input: ["minecraft:blue_ice", "minecraft:glistering_melon_slice"],
        time: 500,
      },
      {
        output: "drinkbeer:spice_roasted_pecans",
        input: ["minecraft:blaze_powder", Item.of("minecraft:cocoa_beans", 3)],
        heat: "heated",
        time: 500,
      },
      {
        output: "drinkbeer:spice_silver_needle_white_tea",
        input: [
          Item.of("techreborn:silver_nugget", 3),
          {
            fluid: "kubejs:white_grape_juice",
            amount: 166 * mB,
          },
        ],
        heat: "heated",
        time: 500,
      },
      {
        output: "drinkbeer:spice_golden_cinnamon_powder",
        input: ["minecraft:gold_nugget", Item.of("farmersdelight:tree_bark", 2)],
        heat: "heated",
        time: 500,
      },
      {
        output: "drinkbeer:spice_dried_selaginella",
        input: ["minecraft:fern", "#minecraft:sand"],
        time: 500,
      },
      //Beer Liquids
      {
        output: [{ fluid: "kubejs:miner_pale_ale_fluid", amount: BUCKET }],
        input: [Item.of("minecraft:wheat", 3), { fluid: "minecraft:water", amount: BUCKET }],
        heat: "heated",
        time: 500,
      },
      {
        output: [{ fluid: "kubejs:blaze_stout_fluid", amount: BUCKET }],
        input: [Item.of("minecraft:wheat", 2), "minecraft:blaze_powder", { fluid: "minecraft:water", amount: BUCKET }],
        heat: "heated",
        time: 500,
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
        time: 500,
      },
      {
        output: [{ fluid: "kubejs:apple_lambic_fluid", amount: BUCKET }],
        input: [Item.of("minecraft:wheat", 2), "minecraft:apple", { fluid: "minecraft:water", amount: BUCKET }],
        heat: "heated",
        time: 500,
      },
      {
        output: [{ fluid: "kubejs:sweet_berry_kriek_fluid", amount: BUCKET }],
        input: ["minecraft:sweet_berries", Item.of("minecraft:wheat", 2), { fluid: "minecraft:water", amount: BUCKET }],
        heat: "heated",
        time: 500,
      },
      {
        output: [{ fluid: "kubejs:haars_icey_pale_lager_fluid", amount: BUCKET }],
        input: [Item.of("minecraft:wheat", 3), "minecraft:ice"],
        heat: "heated",
        time: 500,
      },
      {
        output: [{ fluid: "kubejs:pumpkin_kvass_fluid", amount: BUCKET }],
        input: [Item.of("minecraft:bread", 2), "minecraft:pumpkin", { fluid: "minecraft:water", amount: BUCKET }],
        heat: "heated",
        time: 500,
      },
      {
        output: [{ fluid: "kubejs:night_howl_kvass_fluid", amount: BUCKET }],
        input: [Item.of("minecraft:bread", 2), "minecraft:bone", { fluid: "minecraft:water", amount: BUCKET }],
        heat: "heated",
        time: 500,
      },
      {
        output: [{ fluid: "kubejs:frothy_pink_eggnog_fluid", amount: BUCKET }],
        input: ["minecraft:wheat", "minecraft:egg", "minecraft:beetroot", { fluid: "minecraft:water", amount: BUCKET }],
        heat: "heated",
        time: 500,
      },
      {
        output: [{ fluid: "ad_astra:cryo_fuel", amount: BUCKET }],
        input: [
          { fluid: "techreborn:nitrogen", amount: BUCKET },
          { fluid: "kubejs:aurorite", amount: BUCKET },
        ],
        time: 300,
      },
      {
        output: ["techreborn:sulfur_dust"],
        input: [Item.of("minecraft:glowstone_dust", 3), "ae2:sky_dust"],
        time: 50,
      },
      {
        output: [{ fluid: "rechreborn:oil", amount: 250 * mB }],
        input: [{ fluid: "techreborn:sulfur", amount: 500 * mB }, Item.of("techreborn:coal_dust", 3)],
        time: 300,
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
      {
        output: ["create:refined_radiance"],
        input: ["create:chromatic_compound", { fluid: "kubejs:molten_radiance", amount: 100 * mB }],
        heat: "superheated",
        time: 1000,
      },
      {
        output: ["astralfoods:bulbas_tea"],
        input: [
          "astraladditions:bulba_root",
          { fluid: "minecraft:water", amount: 333 * mB },
          { fluid: "milk:still_milk", amount: 333 * mB },
        ],
        heat: "heated",
        time: 45,
      },
      {
        output: ["minecraft:blackstone"],
        input: ["minecraft:cobblestone"],
        heat: "superheated",
        time: 20,
      },
      {
        output: ["minecraft:tuff"],
        input: ["minecraft:calcite"],
        heat: "superheated",
        time: 20,
      },
      {
        output: ["minecraft:crying_obsidian"],
        input: ["minecraft:obsidian"],
        heat: "superheated",
        time: 20,
      },
      {
        output: ["createastral:logo"],
        input: ["compressor:octuple_compressed_cobblestone"],
        heat: "superheated",
        time: 20,
      },
      {
        output: ["minecraft:wither_rose"],
        input: [Item.of("minecraft:poppy", 6)],
        heat: "superheated",
        time: 20,
      },
      {
        output: ["tconstruct:necrotic_bone"],
        input: [Item.of("minecraft:bone", 6)],
        heat: "superheated",
        time: 20,
      },
      {
        output: ["estrogen:crystal_estrogen_pill"],
        input: ["estrogen:estrogen_pill", "tconstruct:ender_slime_crystal"],
        heat: "superheated",
        time: 20,
      },
      {
        output: ["astraladditions:fragile_item_2"],
        input: [
          Item.of("create:refined_radiance_casing", 8),
          Item.of("create:shadow_steel_casing", 8),
          Item.of("createastral:subatomic_ingot", 4),
          Item.of("createastral:separation_agent", 6),
        ],
        heat: "superheated",
        time: 20,
      },
      {
        output: ["createastral:subatomic_ingot"],
        input: [
          Item.of("create:shadow_steel", 4),
          Item.of("create:refined_radiance", 4),
          "techreborn:data_storage_chip",
        ],
        heat: "superheated",
        time: 20,
      },
      {
        output: ["yttr:promethium_speck"],
        input: ["tconstruct:ender_slime_crystal", Item.of("yttr:rubble", 4)],
        heat: "superheated",
        time: 20,
      },
      {
        output: ["tconstruct:ender_slime_sling"],
        input: ["tconstruct:ichor_slime_sling", "yttr:delicace", { fluid: "kubejs:metabolic_broth", amount: 500 * mB }],
        heat: "superheated",
        time: 20,
      },
      {
        output: [{ fluid: "astraladditions:sputum", amount: INGOT }],
        input: ["astraladditions:ender_tip"],
        heat: "superheated",
        time: 20,
      },
      {
        output: [{ fluid: "techreborn:mercury", amount: mB * 500 }],
        input: ["yttr:quicksilver"],
        heat: "superheated",
        time: 20,
      },
      {
        output: { fluid: "tconstruct:blood", amount: BUCKET },
        input: [
          Item.of("minecraft:beetroot", 2),
          { fluid: "kubejs:tomato_sauce_fluid", amount: 900 * mB },
          { fluid: "kubejs:shimmer", amount: 100 * mB },
        ],
        heat: "heated",
        //Vegan BLOOD
      },
      {
        output: "createastral:seitan",
        input: [Item.of("minecraft:brown_mushroom", 3), { fluid: "createaddition:seed_oil", amount: 100 * mB }],
      },
      {
        output: Item.of("minecraft:moss_block", 4), //Yea Moss is automatable now without breaking contraptions, More Blocks out than in? MAGIC
        input: [
          Item.of("minecraft:mossy_cobblestone", 6),
          "minecraft:moss_block",
          Item.of("minecraft:bone_meal", 1),
          { fluid: "minecraft:water", amount: 500 * mB },
        ],
      },
      {
        output: Item.of("minecraft:kelp", 0), // If you got the bonemeal, some kelp can be arranged
        input: ["minecraft:kelp", "minecraft:bone_meal", { fluid: "minecraft:water", amount: 500 * mB }],
        time: 120,
      },
      {
        output: { fluid: "tconstruct:blazing_blood", amount: BUCKET },
        input: ["minecraft:blaze_powder", { fluid: "tconstruct:blood", amount: BUCKET }],
        heat: "superheated",
        //Vegan BLOOD
      },
      {
        output: Item.of("techreborn:rubber", 8),
        input: [Item.of("techreborn:sap", 3), Item.of("techreborn:sulfur_dust", 1)],
      },
      {
        output: Item.of("minecraft:coarse_dirt", 4),
        input: [Item.of("minecraft:dirt", 2), Item.of("minecraft:gravel", 2)], // infinte dirt premoon
      },
      {
        output: { fluid: "kubejs:red_paste", amount: 300 * mB },
        input: [Item.of("minecraft:sweet_berries", 7), { fluid: "minecraft:water", amount: 500 * mB }], // red dye for crimsite premoon
      },
      {
        output: { fluid: "minecraft:lava", amount: 125 * mB },
        input: [
          Item.of("techreborn:andesite_dust", 1),
          Item.of("minecraft:cobblestone", 1),
          { fluid: "minecraft:lava", amount: 50 * mB },
        ],
      },
      {
        output: { fluid: "minecraft:lava", amount: 250 * mB },
        input: [
          Item.of("techreborn:andesite_dust", 4),
          Item.of("minecraft:cobblestone", 2),
          { fluid: "minecraft:lava", amount: 50 * mB },
        ],
        heat: "heated",
      },
      {
        output: { fluid: "minecraft:lava", amount: 500 * mB },
        input: [Item.of("techreborn:andesite_dust", 4), Item.of("minecraft:netherrack", 2)],
        heat: "heated",
      },
      {
        output: { fluid: "kubejs:shimmer", amount: 250 * mB },
        input: [Item.of("minecraft:amethyst_shard", 5), Item.of("minecraft:glow_ink_sac", 2)],
      },
      {
        output: { fluid: "kubejs:shimmer", amount: 500 * mB },
        input: [Item.of("techreborn:amethyst_dust", 5), Item.of("minecraft:glow_ink_sac", 2)],
        heat: "heated",
      },
      {
        output: { fluid: "kubejs:shimmer", amount: 1000 * mB },
        input: [
          Item.of("techreborn:amethyst_dust", 2),
          Item.of("minecraft:glow_ink_sac", 1),
          "astraladditions:lune_shroom",
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:2s}]}'),
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:6s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:5s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
          { fluid: "kubejs:hellfire", amount: 125 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:7s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:6s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
          { fluid: "kubejs:hellfire", amount: 250 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 250 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:6s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:5s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
          { fluid: "kubejs:hellfire", amount: 125 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:7s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:6s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
          { fluid: "kubejs:hellfire", amount: 250 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:6s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:5s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
          { fluid: "kubejs:hellfire", amount: 250 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:6s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:5s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
          { fluid: "kubejs:hellfire", amount: 250 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of(
          "minecraft:enchanted_book",
          '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:2s}]}',
        ),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of(
          "minecraft:enchanted_book",
          '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:3s}]}',
        ),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of(
          "minecraft:enchanted_book",
          '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:4s}]}',
        ),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "superheated",
      },
      {
        output: Item.of(
          "minecraft:enchanted_book",
          '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:5s}]}',
        ),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of(
          "minecraft:enchanted_book",
          '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:6s}]}',
        ),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:5s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
          { fluid: "kubejs:hellfire", amount: 250 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 250 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 250 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 250 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:6s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:5s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
          { fluid: "kubejs:hellfire", amount: 125 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:7s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:6s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
          { fluid: "kubejs:hellfire", amount: 250 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 250 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 250 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:punch",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:punch",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:punch",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:punch",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:punch",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:punch",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 250 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:6s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:5s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
          { fluid: "kubejs:hellfire", amount: 125 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:7s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:6s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
          { fluid: "kubejs:hellfire", amount: 250 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:6s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:5s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
          { fluid: "kubejs:hellfire", amount: 250 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 250 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:knockback",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:knockback",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:knockback",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:knockback",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:knockback",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:knockback",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 250 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:3s}]}'),
          { fluid: "kubejs:hellfire", amount: 250 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 250 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 250 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:6s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:5s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
          { fluid: "kubejs:hellfire", amount: 250 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:6s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:5s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
          { fluid: "kubejs:hellfire", amount: 125 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:7s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:6s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
          { fluid: "kubejs:hellfire", amount: 250 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:depth_strider",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:depth_strider",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:depth_strider",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:depth_strider",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "superheated",
      },
      {
        output: Item.of(
          "minecraft:enchanted_book",
          '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:2s}]}',
        ),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of(
          "minecraft:enchanted_book",
          '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:3s}]}',
        ),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of(
          "minecraft:enchanted_book",
          '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:4s}]}',
        ),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of(
          "minecraft:enchanted_book",
          '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:5s}]}',
        ),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "superheated",
      },
      {
        output: Item.of(
          "minecraft:enchanted_book",
          '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:6s}]}',
        ),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:5s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
          { fluid: "kubejs:hellfire", amount: 125 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of(
          "minecraft:enchanted_book",
          '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:7s}]}',
        ),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:6s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
          { fluid: "kubejs:hellfire", amount: 250 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 250 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 250 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 250 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 250 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:6s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:5s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
          { fluid: "kubejs:hellfire", amount: 125 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:7s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:6s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
          { fluid: "kubejs:hellfire", amount: 250 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "heated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB },
        ],
        heat: "superheated",
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 250 * mB },
        ],
        heat: "superheated",
      },
      {
        output: { fluid: "kubejs:liquid_xp_nuggies", amount: 1000 },
        input: ["create:experience_nugget"],
        heat: "heated",
        time: 10,
      },
      {
        output: { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        input: ["createastral:experience_ingot"],
        heat: "heated",
        time: 100,
      },
      {
        output: { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
        input: ["create:experience_block"],
        heat: "heated",
        time: 1000,
      },
      {
        output: { fluid: "kubejs:liquid_xp_nuggies", amount: 2000 },
        input: ["xpcrystals:xp_crystal"],
        heat: "heated",
        time: 12,
      },
      {
        output: {
          fluid: "tconstruct:liquid_soul",
          amount: 250 * mB,
        },
        input: ["xpcrystals:soul_compound"],
        heat: "heated",
        time: 30,
      },
      {
        output: {
          fluid: "tconstruct:liquid_soul",
          amount: 250 * mB,
        },
        input: ["xpcrystals:soul_compound", { fluid: "minecraft:water", amount: 125 * mB }],
        heat: "heated",
        time: 25,
      },
      {
        output: { fluid: "xpcrystals:soul", amount: 250 * mB },
        input: { fluid: "tconstruct:liquid_soul", amount: 250 * mB },
        time: 25,
      },
      {
        output: {
          fluid: "createaddition:bioethanol",
          amount: 81000,
        },
        input: ["minecraft:sugar", "create:cinder_flour", Item.of("createaddition:biomass", 2)],
      },
      {
        output: "estrogen:balls",
        input: "minecraft:slime_ball",
        heat: "heated",
      },
      {
        output: {
          fluid: "tconstruct:molten_amethyst",
          amount: GEM,
        },
        input: "minecraft:amethyst_shard",
        heat: "heated",
      },
      {
        output: "minecraft:wither_skeleton_skull",
        input: ["minecraft:coal_block", "minecraft:skeleton_skull", Item.of("minecraft:wither_rose", 4)],
        heat: "superheated",
      },
      {
        output: ["create:dough"],
        input: ["create:wheat_flour", { fluid: "minecraft:water", amount: 500 * mB }],
        time: 10,
      },
      {
        output: ["minecraft:cocoa_beans"],
        input: [
          { fluid: "kubejs:shimmer", amount: INGOT },
          "minecraft:brown_dye",
          "minecraft:wheat_seeds",
          "create:tree_fertilizer",
        ],
        time: 80,
      },
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
      {
        output: [{ fluid: "astralfoods:cream", amount: BUCKET }],
        input: [Item.of("minecraft:sugar", 3), { fluid: "milk:still_milk", amount: BUCKET }],
        heat: "heated",
        time: 100,
      },
      {
        output: ["astralfoods:chocolate_ice_cream"],
        input: ["create:bar_of_chocolate", { fluid: "astralfoods:cream", amount: 250 * mB }],
        heat: "heated",
        time: 60,
      },
      {
        output: ["astralfoods:gamers_delight"],
        input: [
          "techreborn:compressed_plantball",
          "farmersdelight:pie_crust",
          { fluid: "techreborn:lithium", amount: BUCKET },
        ],
        heat: "heated",
        time: 80,
      },
      {
        output: "minecraft:slime_ball",
        input: ["minecraft:lime_dye", "#c:slimeballs"],
        time: 50,
      },
      {
        output: Item.of("createastral:synthetic_slime", 3),
        input: [Item.of("techreborn:sponge_piece", 2), { fluid: "tconstruct:blood", amount: SLIMEBALL * 2 }],
        time: 50,
      },
      {
        output: Item.of("createastral:synthetic_slime", 3),
        input: [Item.of("techreborn:sponge_piece", 2), { fluid: "tconstruct:earth_slime", amount: SLIMEBALL * 2 }],
        time: 50,
      },
      {
        output: Item.of("createastral:synthetic_slime", 3),
        input: [Item.of("techreborn:sponge_piece", 2), { fluid: "tconstruct:sky_slime", amount: SLIMEBALL * 2 }],
        time: 50,
      },
      {
        output: Item.of("createastral:synthetic_slime", 3),
        input: [Item.of("techreborn:sponge_piece", 2), { fluid: "tconstruct:ender_slime", amount: SLIMEBALL * 2 }],
        time: 50,
      },
    ];
    mixingRecipes.forEach((recipe) => {
      event.recipes
        .createMixing(recipe.output, recipe.input)
        .heatRequirement(recipe.heat ?? "")
        .processingTime(recipe.time ?? 100);
    });
    /**
     * flowers.js
     * @author Max Norfolk
     */
    const deadBushFlowerRevivingRecipes = [
      {
        flower: "minecraft:dandelion",
        dye: "minecraft:yellow_dye",
      },
      {
        flower: "minecraft:poppy",
        dye: "minecraft:red_dye",
      },
      {
        flower: "minecraft:blue_orchid",
        dye: "minecraft:light_blue_dye",
      },
      {
        flower: "minecraft:allium",
        dye: "minecraft:magenta_dye",
      },
      {
        flower: "minecraft:azure_bluet",
        dye: "minecraft:light_gray_dye",
      },
      {
        flower: "minecraft:red_tulip",
        dye: "minecraft:red_dye",
      },
      {
        flower: "minecraft:orange_tulip",
        dye: "minecraft:orange_dye",
      },
      {
        flower: "minecraft:white_tulip",
        dye: "minecraft:white_dye",
      },
      {
        flower: "minecraft:pink_tulip",
        dye: "minecraft:pink_dye",
      },
      {
        flower: "minecraft:oxeye_daisy",
        dye: "minecraft:light_gray_dye",
      },
      {
        flower: "minecraft:cornflower",
        dye: "minecraft:blue_dye",
      },
      {
        flower: "minecraft:lily_of_the_valley",
        dye: "minecraft:white_dye",
      },
    ];
    deadBushFlowerRevivingRecipes.forEach((recipe) => {
      event.recipes
        .createMixing(recipe.flower, [
          recipe.dye,
          "minecraft:dead_bush",
          "create:tree_fertilizer",
          { fluid: "kubejs:shimmer", amount: 100 * mB },
        ])
        .processingTime(50);
    });
    /// Array format: [2 tall flower, 1 tall flower]
    const smallToTallFlowerMixingRecipes = [
      {
        tallFlower: "minecraft:sunflower",
        flower: "minecraft:dandelion",
      },
      {
        tallFlower: "minecraft:lilac",
        flower: "minecraft:allium",
      },
      {
        tallFlower: "minecraft:rose_bush",
        flower: "minecraft:poppy",
      },
      {
        tallFlower: "minecraft:peony",
        flower: "minecraft:pink_tulip",
      },
      {
        tallFlower: "farmersdelight:wild_cabbages",
        flower: "farmersdelight:cabbage",
      },
      {
        tallFlower: "farmersdelight:wild_onions",
        flower: "farmersdelight:onion",
      },
      {
        tallFlower: "farmersdelight:wild_tomatoes",
        flower: "farmersdelight:tomato",
      },
      {
        tallFlower: "farmersdelight:wild_carrots",
        flower: "minecraft:carrot",
      },
      {
        tallFlower: "farmersdelight:wild_potatoes",
        flower: "minecraft:potato",
      },
      {
        tallFlower: "farmersdelight:wild_beetroots",
        flower: "minecraft:beetroot",
      },
      {
        tallFlower: "farmersdelight:wild_rice",
        flower: "farmersdelight:rice",
      },
    ];
    smallToTallFlowerMixingRecipes.forEach((recipe) => {
      event.recipes
        .createMixing(recipe.tallFlower, [
          Item.of(recipe.flower, 2),
          Item.of("create:tree_fertilizer", 2),
          { fluid: "kubejs:shimmer", amount: 200 * mB },
        ])
        .processingTime(50);
    });
  });
  /**
   * Farmers' Delight mixing compat recipes.
   * @author RandomUser240306
   */
  function farmersCompatMixing(event) {
    event.forEachRecipe({ type: "farmersdelight:cooking" }, (recipe) => {
      let outputItem = recipe.getOriginalRecipeResult().getId().split(":")[1];
      let inputItems = recipe.json.get("ingredients").deepCopy(); // Setting this to any, since I have no idea what type this really is.
      if (outputItem == "cabbage_rolls") return; //too few ingredients to add recipe for
      const containers = {
        "minecraft:glass_bottle": ["hot_cocoa", "apple_cider", "glow_berry_custard"],
        "minecraft:pumpkin": ["stuffed_pumpkin_block"],
        "#c:dough": ["dumplings"],
      };
      let container = Object.keys(containers).find((key) => containers[key].includes(outputItem)) ?? "minecraft:bowl";
      for (let i = 0; i < inputItems.size(); i++) {
        if (inputItems.get(i).getClass() == "class com.google.gson.JsonObject") {
          if (inputItems.get(i).has("item")) {
            if (inputItems.get(i).get("item").toString().replaceAll('"', "") == "farmersdelight:tomato_sauce") {
              let $JsonObject = java("com.google.gson.JsonObject");
              let tomato_sauce_fluid_ingredient = new $JsonObject();
              tomato_sauce_fluid_ingredient.add("fluid", "kubejs:tomato_sauce_fluid");
              tomato_sauce_fluid_ingredient.add("amount", 250 * mB);
              inputItems.set(i, tomato_sauce_fluid_ingredient);
            }
          } else {
            if (inputItems.get(i).has("tag")) {
              if (inputItems.get(i).get("tag").toString().replaceAll('"', "") == "c:dough") {
                inputItems.remove(inputItems.get(i)); //removes dough from dumpling recipe
              } else if (inputItems.get(i).get("tag").toString().replaceAll('"', "") == "c:milk") {
                let $JsonObject = java("com.google.gson.JsonObject");
                let milk = new $JsonObject();
                milk.add("fluid", "milk:still_milk");
                milk.add("amount", 250 * mB);
                inputItems.set(i, milk);
              }
            }
          }
        }
      }
      event.recipes
        .createMixing(
          {
            fluid: `kubejs:${outputItem}_fluid`,
            amount: 250 * mB,
          },
          inputItems,
        )
        .heatRequirement("heated")
        .processingTime(100);
      event.recipes.createFilling(recipe.getOriginalRecipeResult(), [
        container,
        {
          fluid: `kubejs:${outputItem}_fluid`,
          amount: 250 * mB,
        },
      ]);
    });
  }
})();
