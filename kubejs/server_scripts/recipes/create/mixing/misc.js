(function createMiscMixingRecipes() {
  const { BUCKET, BOTTLE, GEM_BLOCK, SLIMEBALL, INGOT, GEM, NUGGET, mB } = global.fluids;

  onEvent("recipes", (event) => {
    /**
     * @typedef MixingRecipe
     * @property {Internal.IngredientJS_} output
     * @property {Internal.IngredientJS_} input
     * @property {"heated" | "superheated"} [heat]
     * @property {number} [time]
     * @property {string} [id]
     */

    /** @type {MixingRecipe[]} */
    const mixingRecipes = [
      // --- Vanilla Minecraft Stuff---
      {
        output: ["minecraft:mycelium"],
        input: ["#minecraft:dirt", "ad_astra:cheese"],
        time: 100,
        id: "minecraft_mycelium",
      },
      {
        output: "minecraft:feather",
        input: ["minecraft:stick", "minecraft:string"],
        time: 100,
        id: "minecraft_feather",
      },
      {
        output: "minecraft:bone_meal",
        input: ["techreborn:calcite_dust", { fluid: "minecraft:water", amount: 100 * mB }],
        time: 100,
        id: "minecraft_bone_meal",
      },
      {
        output: Item.of("minecraft:soul_soil", 2),
        input: ["minecraft:dirt", "minecraft:soul_sand"],
        time: 100,
        id: "minecraft_soul_soil",
      },
      {
        output: "minecraft:small_amethyst_bud",
        input: ["techreborn:amethyst_dust", "ae2:certus_crystal_seed"],
        time: 200,
        id: "minecraft_small_amethyst_bud",
      },
      {
        output: "minecraft:rotten_flesh",
        input: ["#c:raw_meat", { fluid: "tconstruct:blood", amount: 25 * mB }],
        time: 100,
        id: "minecraft_rotten_flesh",
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
          { fluid: "create:honey", amount: 25 * mB },
        ],
        time: 100,
        id: "minecraft_shroomlight_from_glow_goop",
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
          { fluid: "create:honey", amount: 25 * mB },
        ],
        time: 100,
        id: "minecraft_shroomlight_from_glowstone",
      },
      {
        output: "minecraft:ice",
        input: [Item.of("minecraft:snowball", 2), { fluid: "minecraft:water", amount: BUCKET * 0.5 }],
        time: 100,
        id: "minecraft_ice",
      },
      {
        output: Item.of("minecraft:blaze_powder", 2),
        input: ["minecraft:blaze_rod"],
        id: "minecraft_blaze_powder",
      },
      {
        output: "minecraft:tuff",
        input: ["minecraft:basalt", "minecraft:cobblestone"],
        id: "minecraft_tuff_from_basalt",
      },
      {
        output: ["minecraft:tuff"],
        input: ["minecraft:calcite"],
        heat: "superheated",
        time: 20,
        id: "minecraft_tuff_from_calcite",
      },
      {
        output: "minecraft:glow_ink_sac",
        input: ["minecraft:ink_sac", Item.of("minecraft:glowstone_dust", 2)],
        time: 50,
        id: "minecraft_glow_ink_sac",
      },
      {
        output: "minecraft:piglin_banner_pattern",
        input: [Item.of("minecraft:paper", 1), Item.of("tconstruct:large_plate", '{Material:"tconstruct:pig_iron"}')],
        time: 100,
        id: "minecraft_piglin_banner_pattern",
      },
      {
        output: Item.of("minecraft:piglin_banner_pattern", 2),
        input: ["minecraft:piglin_banner_pattern", "minecraft:paper"],
        time: 150,
        id: "minecraft_piglin_banner_pattern_duplication",
      },
      {
        output: "minecraft:dolphin_spawn_egg",
        input: [{ fluid: "kubejs:shimmer", amount: 500 * mB }, "createastral:orcane"],
        time: 500,
        id: "minecraft_dolphin_spawn_egg",
      },
      {
        output: "minecraft:wither_skeleton_skull",
        input: ["minecraft:coal_block", "minecraft:skeleton_skull", Item.of("minecraft:wither_rose", 4)],
        heat: "superheated",
        id: "minecraft_wither_skeleton_skull",
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
        id: "minecraft_cocoa_beans",
      },
      {
        output: ["minecraft:sponge", "minecraft:clay"],
        input: ["minecraft:wet_sponge", "minecraft:sand"],
        time: 50,
        id: "minecraft_clay_from_sand_and_sponge",
      },
      {
        output: ["minecraft:blackstone"],
        input: ["minecraft:cobblestone"],
        heat: "superheated",
        time: 20,
        id: "minecraft_blackstone",
      },
      {
        output: ["minecraft:crying_obsidian"],
        input: ["minecraft:obsidian"],
        heat: "superheated",
        time: 20,
        id: "minecraft_crying_obsidian",
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
        id: "minecraft_wet_sponge_from_heart_of_the_sea",
      },
      {
        output: Item.of("minecraft:paper", 3),
        input: [Item.of("techreborn:saw_dust", 3), { fluid: "minecraft:water", amount: BUCKET }],
        time: 100,
        id: "minecraft_paper",
      },
      {
        output: ["minecraft:wither_rose"],
        input: [Item.of("minecraft:poppy", 6)],
        heat: "superheated",
        time: 20,
        id: "minecraft_wither_rose",
      },
      {
        output: Item.of("minecraft:moss_block", 4), //Yea Moss is automatable now without breaking contraptions, More Blocks out than in? MAGIC
        input: [
          Item.of("minecraft:mossy_cobblestone", 6),
          "minecraft:moss_block",
          Item.of("minecraft:bone_meal", 1),
          { fluid: "minecraft:water", amount: 500 * mB },
        ],
        id: "minecraft_moss_block",
      },
      {
        output: Item.of("minecraft:kelp", 10), // If you got the bonemeal, some kelp can be arranged
        input: ["minecraft:kelp", "minecraft:bone_meal", { fluid: "minecraft:water", amount: 500 * mB }],
        time: 120,
        id: "minecraft_kelp",
      },
      {
        output: Item.of("minecraft:coarse_dirt", 4),
        input: [Item.of("minecraft:dirt", 2), Item.of("minecraft:gravel", 2)], // infinte dirt premoon
        id: "minecraft_coarse_dirt",
      },
      {
        output: "minecraft:slime_ball",
        input: ["minecraft:lime_dye", "#c:slimeballs"],
        time: 50,
        id: "minecraft_slime_ball",
      },
      // Coral Recipes
      {
        output: "minecraft:tube_coral_block",
        input: [
          ["minecraft:tropical_fish", "minecraft:pufferfish"],
          Item.of("minecraft:kelp", 3),
          "minecraft:blue_dye",
          { fluid: "kubejs:shimmer", amount: 100 * mB },
        ],
        time: 100,
        id: "minecraft_tube_coral_block",
      },
      {
        output: "minecraft:brain_coral_block",
        input: [
          ["minecraft:tropical_fish", "minecraft:pufferfish"],
          Item.of("minecraft:kelp", 3),
          "minecraft:pink_dye",
          { fluid: "kubejs:shimmer", amount: 100 * mB },
        ],
        time: 100,
        id: "minecraft_brain_coral_block",
      },
      {
        output: "minecraft:bubble_coral_block",
        input: [
          ["minecraft:tropical_fish", "minecraft:pufferfish"],
          Item.of("minecraft:kelp", 3),
          "minecraft:purple_dye",
          { fluid: "kubejs:shimmer", amount: 100 * mB },
        ],
        time: 100,
        id: "minecraft_bubble_coral_block",
      },
      {
        output: "minecraft:fire_coral_block",
        input: [
          ["minecraft:tropical_fish", "minecraft:pufferfish"],
          Item.of("minecraft:kelp", 3),
          "minecraft:red_dye",
          { fluid: "kubejs:shimmer", amount: 100 * mB },
        ],
        time: 100,
        id: "minecraft_fire_coral_block",
      },
      {
        output: "minecraft:horn_coral_block",
        input: [
          ["minecraft:tropical_fish", "minecraft:pufferfish"],
          Item.of("minecraft:kelp", 3),
          "minecraft:yellow_dye",
          { fluid: "kubejs:shimmer", amount: 100 * mB },
        ],
        time: 100,
        id: "minecraft_horn_coral_block",
      },
      {
        output: [
          Item.of("minecraft:tube_coral").withChance(0.2),
          Item.of("minecraft:brain_coral").withChance(0.2),
          Item.of("minecraft:bubble_coral").withChance(0.2),
          Item.of("minecraft:fire_coral").withChance(0.2),
          Item.of("minecraft:horn_coral").withChance(0.2),
        ],
        input: [Item.of("minecraft:sea_pickle", 4), { fluid: "minecraft:water", amount: 250 * mB }],
        time: 50,
        id: "minecraft_sea_pickle_dissolution",
      },
      {
        output: [
          Item.of("minecraft:tube_coral_fan").withChance(0.2),
          Item.of("minecraft:brain_coral_fan").withChance(0.2),
          Item.of("minecraft:bubble_coral_fan").withChance(0.2),
          Item.of("minecraft:fire_coral_fan").withChance(0.2),
          Item.of("minecraft:horn_coral_fan").withChance(0.2),
        ],
        input: [Item.of("minecraft:dried_kelp", 4), { fluid: "minecraft:water", amount: 250 * mB }],
        time: 50,
        id: "minecraft_dried_kelp_dissolution",
      },
      // Lava Generation
      {
        output: { fluid: "minecraft:lava", amount: 125 * mB },
        input: [
          Item.of("techreborn:andesite_dust", 1),
          Item.of("minecraft:cobblestone", 1),
          { fluid: "minecraft:lava", amount: 50 * mB },
        ],
        id: "minecraft_lava",
      },
      {
        output: { fluid: "minecraft:lava", amount: 250 * mB },
        input: [
          Item.of("techreborn:andesite_dust", 4),
          Item.of("minecraft:cobblestone", 2),
          { fluid: "minecraft:lava", amount: 50 * mB },
        ],
        heat: "heated",
        id: "minecraft_lava_heated",
      },
      {
        output: { fluid: "minecraft:lava", amount: 500 * mB },
        input: [Item.of("techreborn:andesite_dust", 4), Item.of("minecraft:netherrack", 2)],
        heat: "heated",
        id: "minecraft_lava_from_netherrack",
      },

      // --- Astral Additions Mod ---
      {
        output: Item.of("astraladditions:ender_tip", 2),
        input: ["astraladditions:ender_tip", "yttr:neodymium_dust"],
        time: 50,
        id: "astraladditions_ender_tip",
      },
      {
        output: "astraladditions:twisted_nylium",
        input: ["astraladditions:enderrack", { fluid: "astraladditions:sputum", amount: INGOT }],
        time: 50,
        id: "astraladditions_twisted_nylium",
      },
      {
        output: Item.of("astraladditions:cometball", 4),
        input: [Item.of("astraladditions:moonset_crystal", 3)],
        time: 150,
        id: "astraladditions_cometball",
      },
      {
        output: "astraladditions:blazed_steel_ring",
        input: [
          "astraladditions:steel_ring",
          "astraladditions:shimmer_blaze_powder",
          { fluid: "tconstruct:blazing_blood", amount: INGOT },
        ],
        heat: "heated",
        time: 400,
        id: "astraladditions_blazed_steel_ring",
      },
      {
        output: "astraladditions:moonblazed_orb",
        input: [
          "astraladditions:cometball",
          "minecraft:ender_eye",
          "astraladditions:shimmer_blaze_powder",
          { fluid: "tconstruct:blazing_blood", amount: BUCKET },
        ],
        time: 500,
        id: "astraladditions_moonblazed_orb",
      },
      {
        output: "astraladditions:oh-no",
        input: [
          "astraladditions:oh-no_broken",
          "createastral:astral_conduit",
          { fluid: "tconstruct:blazing_blood", amount: BUCKET },
        ],
        heat: "heated",
        time: 500,
        id: "astraladditions_oh_no",
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
        id: "astraladditions_fragile_item_2",
      },
      {
        output: [{ fluid: "astraladditions:sputum", amount: INGOT }],
        input: ["astraladditions:ender_tip"],
        heat: "superheated",
        time: 20,
        id: "astraladditions_sputum",
      },
      {
        output: ["astraladditions:shimmer_heart"],
        input: [
          Item.of("createastral:shimmer_marimo", 2),
          "minecraft:heart_of_the_sea",
          { fluid: "xpcrystals:soul", amount: BUCKET },
        ],
        heat: "heated",
        time: 180,
        id: "shimmer_heart",
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
        id: "shimmer_blaze_rod",
      },

      // --- Astral Foods Mod ---
      {
        output: ["astralfoods:astral_sauce"],
        input: ["createastral:astral_singularity"],
        heat: "superheated",
        time: 80,
        id: "astralfoods:astral_sauce",
      },
      {
        output: ["astralfoods:quantum_pasta"],
        input: ["astralfoods:astral_sauce", Item.of("astralfoods:quantum_bites", 2), "farmersdelight:raw_pasta"],
        heat: "heated",
        time: 250,
        id: "astralfoods_quantum_pasta",
      },
      {
        output: ["astralfoods:bulbas_tea"],
        input: [
          "astraladditions:bulba_root",
          { fluid: "minecraft:water", amount: BOTTLE },
          { fluid: "milk:still_milk", amount: BOTTLE },
        ],
        heat: "heated",
        time: 45,
        id: "astralfoods_bulbas_tea",
      },
      {
        output: [{ fluid: "astralfoods:cream", amount: BUCKET }],
        input: [Item.of("minecraft:sugar", 3), { fluid: "milk:still_milk", amount: BUCKET }],
        heat: "heated",
        time: 100,
        id: "astralfoods_cream",
      },
      {
        output: ["astralfoods:chocolate_ice_cream"],
        input: ["create:bar_of_chocolate", { fluid: "astralfoods:cream", amount: 250 * mB }],
        heat: "heated",
        time: 60,
        id: "astralfoods_chocolate_ice_cream",
      },

      // --- Create Mod ---
      {
        output: ["create:tree_fertilizer"],
        input: ["#minecraft:saplings", "#c:coral_fans", "minecraft:bone_meal"],
        time: 180,
        id: "create_tree_fertilizer",
      },
      {
        output: Item.of("create:blaze_cake", 8),
        input: ["yttr:delicace", { fluid: "kubejs:metabolic_broth", amount: 250 * mB }],
        heat: "superheated",
        time: 100,
        id: "create_blaze_cake",
      },
      {
        output: Item.of("create:chromatic_compound", 1).withNBT({}),
        input: [Item.of("techreborn:uu_matter", 4), { fluid: "kubejs:shimmer", amount: BUCKET }],
        heat: "superheated",
        time: 2500,
        id: "create_chromatic_compound",
      },
      {
        output: Fluid.of("create:honey", 100 * mB),
        input: ["techreborn:sap", "minecraft:sugar"],
        time: 100,
        id: "create_honey_from_sap",
      },
      {
        output: { fluid: "create:honey", amount: 500 * mB },
        input: [
          { fluid: "minecraft:water", amount: 500 * mB },
          { fluid: "kubejs:shimmer", amount: 500 * mB },
        ],
        time: 3000,
        id: "create_honey_from_shimmer",
      },
      {
        output: ["create:refined_radiance"],
        input: ["create:chromatic_compound", { fluid: "kubejs:molten_radiance", amount: 100 * mB }],
        heat: "superheated",
        time: 1000,
        id: "create_refined_radiance",
      },
      {
        output: ["create:dough"],
        input: ["create:wheat_flour", { fluid: "minecraft:water", amount: 500 * mB }],
        time: 10,
        id: "create_dough",
      },

      // --- Create Astral Mod ---
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
          { fluid: "kubejs:molten_calorite", amount: INGOT },
        ],
        heat: "superheated",
        time: 1000,
        id: "createastral_laskinium",
      },
      {
        output: "createastral:ender_mush",
        input: [Item.of("tconstruct:ender_slime_crystal", 2), { fluid: "astraladditions:sputum", amount: 500 * mB }],
        heat: "superheated",
        time: 1000,
        id: "createastral_ender_mush",
      },
      {
        output: "createastral:separation_agent",
        input: [{ fluid: "yttr:void", amount: BUCKET }, "createastral:refining_agent"],
        heat: "superheated",
        time: 2000,
        id: "createastral_separation_agent",
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
        id: "createastral_astral_conduit",
      },
      {
        output: ["createastral:logo"],
        input: ["compressor:octuple_compressed_cobblestone"],
        heat: "superheated",
        time: 20,
        id: "createastral_logo",
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
        id: "createastral_subatomic_ingot",
      },
      {
        output: "createastral:seitan",
        input: [Item.of("minecraft:brown_mushroom", 3), { fluid: "createaddition:seed_oil", amount: 100 * mB }],
        id: "createastral_seitan",
      },
      // Marimos
      {
        output: [Item.of("createastral:marimo", 3), { fluid: "minecraft:water", amount: 500 * mB }],
        input: ["createastral:marimo", { fluid: "minecraft:water", amount: 500 * mB }],
        time: 60,
        id: "createastral_marimo_duplication",
      },
      {
        output: [Item.of("createastral:shimmer_marimo", 1)],
        input: ["createastral:marimo", "ae2:fluix_crystal", { fluid: "kubejs:shimmer", amount: 500 * mB }],
        time: 180,
        id: "createastral_shimmer_marimo",
      },
      {
        output: [Item.of("createastral:shimmer_marimo", 3)],
        input: ["createastral:shimmer_marimo", "ae2:fluix_crystal_seed", { fluid: "kubejs:shimmer", amount: INGOT }],
        time: 180,
        id: "createastral_shimmer_marimo_duplication",
      },
      {
        output: [Item.of("createastral:ender_marimo", 1)],
        input: ["createastral:marimo", "tconstruct:ender_slime_crystal", { fluid: "kubejs:shimmer", amount: 500 * mB }],
        time: 180,
        id: "createastral_ender_marimo",
      },
      {
        output: [Item.of("createastral:ender_marimo", 3)],
        input: [
          "createastral:ender_marimo",
          "tconstruct:ender_slime_grass_seeds",
          { fluid: "astraladditions:sputum", amount: INGOT },
        ],
        time: 180,
        id: "createastral_ender_marimo_duplication",
      },
      {
        output: [Item.of("createastral:snowy_marimo", 1)],
        input: ["createastral:marimo", "createastral:prismatic_crystal", { fluid: "kubejs:shimmer", amount: 500 * mB }],
        time: 180,
        id: "createastral_snowy_marimo",
      },
      {
        output: [Item.of("createastral:snowy_marimo", 3)],
        input: ["createastral:snowy_marimo", "ad_astra:ice_shard", { fluid: "minecraft:water", amount: 500 * mB }],
        time: 180,
        id: "createastral_snowy_marimo_duplication",
      },
      {
        output: [Item.of("createastral:moonset_marimo", 1)],
        input: [
          "createastral:marimo",
          "astraladditions:moonset_crystal",
          { fluid: "kubejs:shimmer", amount: 500 * mB },
        ],
        time: 180,
        id: "createastral_moonset_marimo",
      },
      {
        output: [
          Item.of(Item.of("createastral:marimo", 2)).withChance(0.4),
          Item.of(Item.of("createastral:moonset_marimo", 2)).withChance(0.6),
          { fluid: "minecraft:water", amount: BUCKET },
        ],
        input: ["createastral:marimo", "createastral:moonset_marimo", { fluid: "minecraft:water", amount: BUCKET }],
        time: 60,
        id: "createastral_moonset_marimo_duplication",
      },
      // Synthetic Slime
      {
        output: Item.of("createastral:synthetic_slime", 3),
        input: [Item.of("techreborn:sponge_piece", 2), { fluid: "tconstruct:blood", amount: SLIMEBALL * 2 }],
        time: 50,
        id: "createastral_synthetic_slime_from_blood",
      },
      {
        output: Item.of("createastral:synthetic_slime", 3),
        input: [Item.of("techreborn:sponge_piece", 2), { fluid: "tconstruct:earth_slime", amount: SLIMEBALL * 2 }],
        time: 50,
        id: "createastral_synthetic_slime_from_earth_slime",
      },
      {
        output: Item.of("createastral:synthetic_slime", 3),
        input: [Item.of("techreborn:sponge_piece", 2), { fluid: "tconstruct:sky_slime", amount: SLIMEBALL * 2 }],
        time: 50,
        id: "createastral_synthetic_slime_from_sky_slime",
      },
      {
        output: Item.of("createastral:synthetic_slime", 3),
        input: [Item.of("techreborn:sponge_piece", 2), { fluid: "tconstruct:ender_slime", amount: SLIMEBALL * 2 }],
        time: 50,
        id: "createastral_synthetic_slime_from_ender_slime",
      },

      // --- Doodads Mod ---
      {
        output: "doodads:portable_nether",
        input: [{ fluid: "kubejs:shimmer", amount: BUCKET }, "minecraft:lodestone"],
        heat: "heated",
        time: 500,
        id: "doodads_portable_nether",
      },
      {
        output: Item.of("doodads:stone_brick_road", 2),
        input: [{ fluid: "kubejs:shimmer", amount: 500 * mB }, Item.of("minecraft:stone_bricks", 2)],
        time: 1000,
        id: "doodads_stone_brick_road",
      },
      {
        output: Item.of("doodads:brick_road", 2),
        input: [{ fluid: "kubejs:shimmer", amount: 500 * mB }, Item.of("minecraft:bricks", 2)],
        time: 1000,
        id: "doodads_brick_road",
      },
      {
        output: "doodads:asphalt",
        input: [{ fluid: "kubejs:compound_mixture", amount: 3000 }, "#c:concrete_powder"],
        time: 50,
        id: "doodads:asphalt",
      },

      // --- Dustrial Decor Mod ---
      {
        output: Item.of("dustrial_decor:cast_iron_billet", 3),
        input: ["minecraft:iron_ingot", Item.of("create:andesite_alloy", 2), "minecraft:coal"],
        id: "dustrial_decor_cast_iron_billet",
      },

      // --- Estrogen Mod ---
      {
        output: [{ fluid: "estrogen:molten_amethyst", amount: INGOT / 2 }],
        input: [{ fluid: "tconstruct:molten_amethyst", amount: 500 * mB }, "astraladditions:bulba_root"],
        time: 105,
        id: "estrogen_molten_amethyst",
      },
      {
        output: [{ fluid: "estrogen:horse_urine", amount: 500 * mB }, "createastral:horse"],
        input: ["createastral:horse"],
        time: 60,
        id: "estrogen_distressed_horse",
      },
      {
        output: ["estrogen:crystal_estrogen_pill"],
        input: ["estrogen:estrogen_pill", "tconstruct:ender_slime_crystal"],
        heat: "superheated",
        time: 20,
        id: "estrogen_crystal_estrogen_pill",
      },
      {
        output: "estrogen:balls",
        input: "minecraft:slime_ball",
        heat: "heated",
        id: "estrogen_balls",
      },

      // --- Tech Reborn Mod ---
      {
        output: [{ fluid: "techreborn:sulfuric_acid", amount: BUCKET }],
        input: [
          "techreborn:sulfur_dust",
          { fluid: "minecraft:water", amount: 500 * mB },
          { fluid: "ad_astra:oxygen", amount: BUCKET },
        ],
        time: 300,
        id: "techreborn_sulfuric_acid",
      },
      {
        output: "techreborn:rubber",
        input: ["techreborn:sap"],
        time: 50,
        id: "techreborn_rubber",
      },
      {
        output: Item.of("techreborn:machine_parts", 4),
        input: ["ad_astra:steel_plate", "techreborn:carbon_mesh", Ingredient.of("#c:wires", 8)],
        heat: "superheated",
        time: 400,
        id: "techreborn_machine_parts",
      },
      {
        output: Item.of("techreborn:carbon_mesh", 1),
        input: [Item.of("techreborn:carbon_fiber", 2)],
        heat: "superheated",
        time: 400,
        id: "techreborn_carbon_mesh",
      },
      {
        output: Fluid.of("techreborn:silicon", mB * 25),
        input: ["#c:sand"],
        heat: "heated",
        time: 30,
        id: "techreborn_silicon_from_sand",
      },
      {
        output: Fluid.of("techreborn:silicon", mB * 200),
        input: ["ae2:certus_quartz_dust"],
        heat: "heated",
        time: 100,
        id: "techreborn_silicon_from_certus_quartz_dust",
      },
      {
        output: Fluid.of("techreborn:silicon", BUCKET),
        input: ["ae2:certus_quartz_crystal"],
        heat: "superheated",
        time: 200,
        id: "techreborn_silicon_from_certus_quartz_crystal",
      },
      {
        output: "techreborn:steel_dust",
        input: [Item.of("minecraft:iron_ingot", 6), Item.of("techreborn:coal_dust", 4)],
        heat: "heated",
        time: 400,
        id: "techreborn_steel_dust",
      },
      {
        output: ["techreborn:sulfur_dust"],
        input: [Item.of("minecraft:glowstone_dust", 3), "ae2:sky_dust"],
        time: 50,
        id: "techreborn_sulfur_dust",
      },
      {
        output: [{ fluid: "techreborn:oil", amount: 250 * mB }],
        input: [{ fluid: "techreborn:sulfur", amount: 500 * mB }, Item.of("techreborn:coal_dust", 3)],
        time: 300,
        id: "techreborn_oil",
      },
      {
        output: [{ fluid: "techreborn:mercury", amount: mB * 500 }],
        input: ["yttr:quicksilver"],
        heat: "superheated",
        time: 20,
        id: "techreborn_mercury",
      },
      {
        output: Item.of("techreborn:rubber", 8),
        input: [Item.of("techreborn:sap", 3), Item.of("techreborn:sulfur_dust", 1)],
        id: "techreborn_rubber",
      },
      // Plantballs
      {
        output: "techreborn:plantball",
        input: [Ingredient.of("#minecraft:leaves", 9), { fluid: "createaddition:seed_oil", amount: 500 * mB }],
        heat: "heated",
        time: 1000,
        id: "techreborn_plantball_from_leaves",
      },
      {
        output: "techreborn:plantball",
        input: [Ingredient.of("#c:grass_variants", 9), { fluid: "createaddition:seed_oil", amount: 500 * mB }],
        heat: "heated",
        time: 1000,
        id: "techreborn_plantball_from_grass",
      },
      {
        output: "techreborn:plantball",
        input: [Item.of("minecraft:kelp", 9), { fluid: "createaddition:seed_oil", amount: 500 * mB }],
        heat: "heated",
        time: 1000,
        id: "techreborn_plantball_from_kelp",
      },
      {
        output: "techreborn:plantball",
        input: [Item.of("createastral:marimo", 9), { fluid: "createaddition:seed_oil", amount: 500 * mB }],
        heat: "heated",
        time: 1000,
        id: "techreborn_plantball_from_marimo",
      },
      {
        output: "techreborn:plantball",
        input: [Item.of("minecraft:sugar_cane", 9), { fluid: "createaddition:seed_oil", amount: 500 * mB }],
        heat: "heated",
        time: 1000,
        id: "techreborn_plantball_from_sugar_cane",
      },
      {
        output: "techreborn:plantball",
        input: [Item.of("farmersdelight:straw", 3), { fluid: "createaddition:seed_oil", amount: 500 * mB }],
        heat: "heated",
        time: 1000,
        id: "techreborn_plantball_from_straw",
      },

      // --- Tinker's Construct (Hephaestus) Mod
      {
        output: [{ fluid: "tconstruct:ender_slime", amount: 250 * mB }],
        input: ["createastral:ender_marimo", "ae2:ender_dust", { fluid: "tconstruct:earth_slime", amount: 125 * mB }],
        heat: "heated",
        time: 180,
        id: "tconstruct_ender_slime",
      },
      {
        output: Item.of("tconstruct:grout", 8),
        input: ["create:andesite_alloy", "create:zinc_ingot", Item.of("minecraft:gravel", 8)],
        id: "tconstruct_grout",
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
        id: "tconstruct_nether_grout",
      },
      {
        output: "tconstruct:seared_bricks",
        input: [Item.of("tconstruct:seared_brick", 4), "#c:slimeballs"],
        time: 0,
        id: "tconstruct_seared_bricks_with_slime_mortar",
      },
      {
        output: "tconstruct:seared_bricks",
        input: [Item.of("tconstruct:seared_brick", 4), "techreborn:sap"],
        time: 0,
        id: "tconstruct_seared_bricks_with_sap_mortar",
      },
      {
        output: "tconstruct:scorched_bricks",
        input: [Item.of("tconstruct:scorched_brick", 4), "#c:slimeballs"],
        time: 0,
        id: "tconstruct_scorched_bricks_with_slime_mortar",
      },
      {
        output: "tconstruct:scorched_bricks",
        input: [Item.of("tconstruct:scorched_brick", 4), "techreborn:sap"],
        time: 0,
        id: "tconstruct_scorched_bricks_with_sap_mortar",
      },
      {
        output: "tconstruct:ichor_slime_ball",
        input: [{ fluid: "kubejs:shimmer", amount: INGOT }, Item.of("tconstruct:sky_slime_ball", 4)],
        heat: "heated",
        time: 30,
        id: "tconstruct_ichor_slime_ball",
      },
      {
        output: "tconstruct:ender_slime_ball",
        input: [{ fluid: "kubejs:shimmer", amount: INGOT }, Item.of("tconstruct:ichor_slime_ball", 2)],
        heat: "heated",
        time: 30,
        id: "tconstruct_ender_slime_ball",
      },
      {
        output: ["tconstruct:necrotic_bone"],
        input: [Item.of("minecraft:bone", 6)],
        heat: "superheated",
        time: 20,
        id: "tconstruct_necrotic_bone",
      },
      {
        output: { fluid: "tconstruct:liquid_soul", amount: 250 * mB },
        input: ["xpcrystals:soul_compound", { fluid: "minecraft:water", amount: 125 * mB }],
        heat: "heated",
        time: 25,
        id: "tconstruct_liquid_soul",
      },
      {
        output: { fluid: "tconstruct:liquid_soul", amount: 250 * mB },
        input: ["xpcrystals:soul_compound"],
        heat: "heated",
        time: 30,
        id: "tconstruct_liquid_soul_heated",
      },
      {
        output: ["tconstruct:ender_slime_sling"],
        input: ["tconstruct:ichor_slime_sling", "yttr:delicace", { fluid: "kubejs:metabolic_broth", amount: 500 * mB }],
        heat: "superheated",
        time: 20,
        id: "tconstruct_ender_slime_sling",
      },
      // VEGAN BLOOD
      {
        output: { fluid: "tconstruct:blood", amount: BUCKET },
        input: [
          Item.of("minecraft:beetroot", 2),
          { fluid: "kubejs:tomato_sauce_fluid", amount: 900 * mB },
          { fluid: "kubejs:shimmer", amount: 100 * mB },
        ],
        heat: "heated",
        id: "tconstruct_blood",
      },
      {
        output: { fluid: "tconstruct:blazing_blood", amount: BUCKET },
        input: ["minecraft:blaze_powder", { fluid: "tconstruct:blood", amount: BUCKET }],
        heat: "superheated",
        id: "tconstruct_blazing_blood",
      },

      // --- Yttr Mod ---
      {
        output: "yttr:ruined_cobblestone",
        input: ["minecraft:cobblestone", "yttr:rubble", { fluid: "tconstruct:magma", amount: 250 * mB }],
        heat: "superheated",
        time: 200,
        id: "yttr_ruined_cobblestone",
      },
      {
        output: "yttr:wasteland_stone",
        input: ["minecraft:stone", "yttr:rubble", "yttr:rubble"],
        time: 200,
        id: "yttr_wasteland_stone",
      },
      {
        output: "yttr:wasteland_dirt",
        input: ["minecraft:sand", "yttr:rubble", "yttr:rubble"],
        time: 200,
        id: "yttr_wasteland_dirt",
      },
      {
        output: "yttr:wasteland_log",
        input: ["minecraft:oak_log", "yttr:rubble", "yttr:rubble"],
        time: 200,
        id: "yttr_wasteland_log",
      },
      {
        output: ["yttr:promethium_speck"],
        input: ["tconstruct:ender_slime_crystal", Item.of("yttr:rubble", 4)],
        heat: "superheated",
        time: 20,
        id: "yttr_promethium_speck",
      },

      // --- Truly Miscellaneous Recipes ---
      {
        output: [{ fluid: "milk:still_milk", amount: 500 * mB }, "cookingforblockheads:cow_jar"],
        input: ["cookingforblockheads:cow_jar"],
        time: 60,
        id: "milk_from_cow_in_jar",
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
        id: "custommachinery_channeling_transformer",
      },
      {
        output: { fluid: "kubejs:smite", amount: 5 * mB },
        input: [{ fluid: "minecraft:lava", amount: 100 * mB }, Item.of("minecraft:basalt", 2)],
        heat: "heated",
        time: 400,
        id: "kubejs_smite",
      },
      {
        output: Fluid.of("kubejs:blast-resistant_cement", BUCKET),
        input: [
          "#c:concrete_powder",
          Item.of("createastral:lime", 2),
          Item.of("techreborn:steel_dust", 2),
          { fluid: "minecraft:water", amount: BUCKET },
        ],
        heat: "heated",
        time: 1000,
        id: "kubejs_blast-resistant_cement",
      },
      {
        output: Item.of("ae2:certus_quartz_crystal", 2),
        input: [{ fluid: "minecraft:water", amount: 250 * mB }, Item.of("ae2:certus_quartz_dust", 1)],
        heat: "heated",
        time: 40,
        id: "ae2_certus_quartz_crystal",
      },
      {
        output: "adoptafloppa:kitney_item",
        input: [{ fluid: "kubejs:shimmer", amount: 500 * mB }, Item.of("minecraft:ghast_tear", 3)],
        time: 500,
        id: "adoptafloppa_kitney_item",
      },
      {
        output: "blahaj:gray_shark",
        input: [{ fluid: "kubejs:shimmer", amount: BUCKET }, "blahaj:blue_shark"],
        time: 2000,
        id: "blahaj_gray_shark",
      },
      {
        output: [{ fluid: "ad_astra:cryo_fuel", amount: BUCKET }],
        input: [
          { fluid: "techreborn:nitrogen", amount: BUCKET },
          { fluid: "kubejs:aurorite", amount: BUCKET },
        ],
        time: 300,
        id: "ad_astra_cryo_fuel",
      },
      {
        output: { fluid: "kubejs:red_paste", amount: 300 * mB },
        input: [Item.of("minecraft:sweet_berries", 7), { fluid: "minecraft:water", amount: 500 * mB }], // red dye for crimsite premoon
        id: "kubejs_red_paste",
      },
      {
        output: { fluid: "xpcrystals:soul", amount: 250 * mB },
        input: { fluid: "tconstruct:liquid_soul", amount: 250 * mB },
        time: 25,
        id: "xpcrystals_soul",
      },
      {
        output: { fluid: "createaddition:bioethanol", amount: BUCKET },
        input: ["minecraft:sugar", "create:cinder_flour", Item.of("createaddition:biomass", 2)],
        id: "createaddition_bioethanol",
      },
      {
        output: ["farmersdelight:pie_crust"],
        input: [{ fluid: "milk:still_milk", amount: 250 * mB }, Item.of("create:wheat_flour", 3)],
        id: "farmersdelight_pie_crust",
      },
      // Shimmer
      {
        output: [{ fluid: "kubejs:shimmer", amount: BUCKET / 9 }],
        input: ["ae2:fluix_crystal", "minecraft:glowstone_dust", "tconstruct:amethyst_bronze_nugget"],
        heat: "heated",
        time: 180,
        id: "kubejs_shimmer_from_fluix_crystal",
      },
      {
        output: [{ fluid: "kubejs:shimmer", amount: BUCKET }],
        input: [Item.of("createastral:shimmer_marimo", 4), "naturalist:glow_goop", "astraladditions:lune_shroom"],
        heat: "heated",
        time: 180,
        id: "kubejs_shimmer_from_shimmer_marimo",
      },
      {
        output: { fluid: "kubejs:shimmer", amount: 250 * mB },
        input: [Item.of("minecraft:amethyst_shard", 5), Item.of("minecraft:glow_ink_sac", 2)],
        id: "kubejs_shimmer_from_amethyst_shard",
      },
      {
        output: { fluid: "kubejs:shimmer", amount: 500 * mB },
        input: [Item.of("techreborn:amethyst_dust", 5), Item.of("minecraft:glow_ink_sac", 2)],
        heat: "heated",
        id: "kubejs_shimmer_from_amethyst_dust",
      },
      {
        output: { fluid: "kubejs:shimmer", amount: 1000 * mB },
        input: [
          Item.of("techreborn:amethyst_dust", 2),
          Item.of("minecraft:glow_ink_sac", 1),
          "astraladditions:lune_shroom",
        ],
        id: "kubejs_shimmer_from_lune_shroom",
      },
      // Liquid XP Nuggies
      {
        output: { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
        input: ["create:experience_block"],
        heat: "heated",
        time: 1000,
        id: "kubejs_liquid_xp_nuggies_from_experience_block",
      },
      {
        output: { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        input: ["createastral:experience_ingot"],
        heat: "heated",
        time: 100,
        id: "kubejs_liquid_xp_nuggies_from_experience_ingot",
      },
      {
        output: { fluid: "kubejs:liquid_xp_nuggies", amount: NUGGET },
        input: ["create:experience_nugget"],
        heat: "heated",
        time: 10,
        id: "kubejs_liquid_xp_nuggies_from_experience_nugget",
      },
      {
        output: { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * NUGGET },
        input: ["xpcrystals:xp_crystal"],
        heat: "heated",
        time: 12,
        id: "kubejs_liquid_xp_nuggies_from_xp_crystal",
      },
    ];

    /** @type {number} */
    let unidentified_recipe_count = 0;

    mixingRecipes.forEach((recipe) => {
      let id = recipe.id;

      if (id === undefined || id === "") {
        id = `unidentified_recipe_${unidentified_recipe_count}`;

        unidentified_recipe_count++;
      }

      event.recipes
        .createMixing(recipe.output, recipe.input)
        .heatRequirement(recipe.heat ?? "none")
        .processingTime(recipe.time ?? 100)
        .id(id);
    });

    if (unidentified_recipe_count > 0) {
      console.warn(`IDs for ${unidentified_recipe_count} Create miscellaneous mixing recipes were left undefined.`);
    }

    /**
     * @param {string} tail The string to append to the ID.
     * @returns {string} The complete ID.
     */
    function generateID(tail) {
      return `kubejs:create/mixing/misc/${tail}`;
    };
  });
})();
