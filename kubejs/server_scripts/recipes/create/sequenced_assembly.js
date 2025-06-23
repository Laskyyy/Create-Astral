(function createSequencedAssemblyRecipes() {
  const { BUCKET, GEM_BLOCK, SLIMEBALL, INGOT, GEM, NUGGET, mB } = global.fluids;
  const { createSequencedAssembly, enchants } = global.server;

  onEvent("recipes", (event) => {
    biomassSequence(event);
    circuitSequence(event);
    diamondSequence(event);
    casingSequence(event);
    piglinSequence(event);
    wineSequence(event);
    enchantBooks(event);

    createSequencedAssembly(event, {
      input: "minecraft:bucket",
      transitional: "minecraft:bucket",
      outputs: ["minecraft:powder_snow_bucket"],
    })
      .addDeployingStep("createastral:snowy_marimo")
      .addFillingStep({ fluid: "minecraft:water", amount: 250 * mB })
      .loops(2)
      .build();

    createSequencedAssembly(event, {
      input: "tconstruct:small_ender_slime_crystal_bud",
      transitional: "tconstruct:small_ender_slime_crystal_bud",
      outputs: ["tconstruct:medium_ender_slime_crystal_bud"],
    })
      .addFillingStep({ fluid: "tconstruct:ender_slime", amount: (250 * mB) / 3 })
      .loops(3)
      .build();

    createSequencedAssembly(event, {
      input: "tconstruct:medium_ender_slime_crystal_bud",
      transitional: "tconstruct:medium_ender_slime_crystal_bud",
      outputs: ["tconstruct:large_ender_slime_crystal_bud"],
    })
      .addDeployingStep("techreborn:basalt_dust")
      .addFillingStep({ fluid: "tconstruct:ender_slime", amount: (250 * mB) / 3 })
      .loops(3)
      .build();

    createSequencedAssembly(event, {
      input: "tconstruct:large_ender_slime_crystal_bud",
      transitional: "tconstruct:large_ender_slime_crystal_bud",
      outputs: ["tconstruct:ender_slime_crystal_cluster"],
    })
      .addDeployingStep("create:powdered_obsidian")
      .addFillingStep({ fluid: "tconstruct:ender_slime", amount: (250 * mB) / 3 })
      .loops(3)
      .build();

    createSequencedAssembly(event, {
      input: "cookingforblockheads:milk_jar",
      transitional: "cookingforblockheads:milk_jar",
      outputs: ["cookingforblockheads:cow_jar"],
    })
      .addDeployingStep("minecraft:beef")
      .addDeployingStep("minecraft:leather")
      .addFillingStep({ fluid: "tconstruct:blood", amount: 100 * mB })
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:prismarine",
      transitional: "chipped:sea_lantern_2",
      outputs: ["minecraft:sea_lantern"],
    })
      .addDeployingStep("minecraft:prismarine_crystals")
      .loops(5)
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:redstone_torch",
      transitional: "chipped:redstone_lamp_1",
      outputs: ["yttr:lamp"],
    })
      .addDeployingStep("minecraft:iron_bars")
      .addDeployingStep("create:framed_glass")
      .addDeployingStep("minecraft:iron_bars")
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:leather_horse_armor",
      transitional: "minecraft:leather_horse_armor",
      outputs: ["createastral:horse"],
    })
      .addDeployingStep("minecraft:apple")
      .addDeployingStep("minecraft:hay_block")
      .addFillingStep({ fluid: "tconstruct:blood", amount: 100 * mB })
      .build();

    createSequencedAssembly(event, {
      input: "#create:sleepers",
      transitional: "create:incomplete_track",
      outputs: ["create:track"],
    })
      .addDeployingStep(["#c:nuggets/iron", "#c:nuggets/tin", "#c:nuggets/zinc"])
      .addDeployingStep(["#c:nuggets/iron", "#c:nuggets/tin", "#c:nuggets/zinc"])
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "yttr:ultrapure_carbon",
      transitional: "yttr:ultrapure_carbon",
      outputs: ["createastral:living_mechanism"],
    })
      .addFillingStep({ fluid: "tconstruct:ender_slime", amount: BUCKET / 9 })
      .addPressingStep()
      .addFillingStep({ fluid: "tconstruct:ender_slime", amount: BUCKET / 9 })
      .addPressingStep()
      .addDeployingStep("minecraft:ender_eye")
      .addFillingStep({ fluid: "kubejs:shimmer", amount: BUCKET / 3 })
      .build();

    createSequencedAssembly(event, {
      input: "astraladditions:blazed_steel_ring",
      transitional: "astraladditions:blazed_steel_ring",
      outputs: ["astraladditions:orbital_navigation_ring"],
    })
      .addFillingStep({ fluid: "tconstruct:molten_steel", amount: NUGGET })
      .addDeployingStep("createastral:navigation_mechanism")
      .addDeployingStep("createastral:astral_conduit")
      .build();

    createSequencedAssembly(event, {
      input: "estrogen:estrogen_pill",
      transitional: "estrogen:estrogen_pill",
      outputs: ["createastral:laskinium_pill"],
    })
      .addFillingStep({ fluid: "kubejs:shimmer", amount: BUCKET })
      .addPressingStep()
      .addDeployingStep("createastral:laskinium")
      .addDeployingStep("createastral:astral_singularity")
      .build();

    createSequencedAssembly(event, {
      input: "#c:dusts/obsidian",
      transitional: "create:unprocessed_obsidian_sheet",
      outputs: [Item.of("create:sturdy_sheet").withChance(12), Item.of("minecraft:gravel").withChance(8)],
    })
      .addPressingStep()
      .loops(10)
      .build();

    createSequencedAssembly(event, {
      input: "tconstruct:obsidian_pane",
      transitional: "create:unprocessed_obsidian_sheet",
      outputs: [Item.of("create:sturdy_sheet", 2)],
    })
      .addDeployingStep("minecraft:magma_cream")
      .addPressingStep()
      .addFillingStep({ fluid: "minecraft:lava", amount: 100 * mB })
      .loops(2)
      .build();

    createSequencedAssembly(event, {
      input: "create:powdered_obsidian",
      transitional: "create:unprocessed_obsidian_sheet",
      outputs: ["create:sturdy_sheet"],
    })
      .addFillingStep({ fluid: "minecraft:lava", amount: 50 * mB })
      .addPressingStep()
      .addPressingStep()
      .loops(5)
      .build();
    
    // prettier-ignore
    createSequencedAssembly(event, {
      input: "#c:plates/gold",
      transitional: "create:incomplete_precision_mechanism",
      outputs: [
        Item.of("create:precision_mechanism").withChance(120), // Let's go gambling!
        Item.of("create:golden_sheet").withChance(8),          // Oh, dang it!
        Item.of("create:andesite_alloy").withChance(8),        // Oh, dang it!
        Item.of("create:cogwheel").withChance(5),              // Oh, dang it!
        Item.of("minecraft:gold_nugget").withChance(3),        // Oh, dang it!
        Item.of("create:shaft").withChance(2),                 // Oh, dang it!
        Item.of("create:crushed_raw_gold").withChance(2),      // Oh, dang it!
        Item.of("minecraft:iron_ingot").withChance(1),         // Oh, dang it!
        Item.of("minecraft:clock").withChance(1),              // Oh, dang it!
      ],
    })
      .addDeployingStep("create:cogwheel")
      .addDeployingStep("create:large_cogwheel")
      .addDeployingStep("#c:nuggets/desh")
      .loops(6)
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:bowl",
      transitional: "minecraft:bowl",
      outputs: ["astralfoods:shimmered_rabbit_stew"],
    })
      .addDeployingStep("astralfoods:seared_potato")
      .addDeployingStep("minecraft:cooked_rabbit")
      .addFillingStep({ fluid: "kubejs:shimmer", amount: BUCKET })
      .build();
    event.custom({
      type: "create:sequenced_assembly",
      ingredient: {
        item: "createastral:sturdy_cage",
      },
      transitionalItem: {
        item: "createastral:sturdy_cage",
      },
      sequence: [
        {
          type: "create:deploying",
          ingredients: [{ item: "createastral:sturdy_cage" }, { "yttr:entity": "astraladditions:ender_watcher" }],
          results: [{ item: "createastral:sturdy_cage" }],
        },
      ],
      results: [{ item: "createastral:contained_end" }],
      loops: 1,
    });

    /** @param {Internal.RecipeEventJS} event */
    function biomassSequence(event) {
      createSequencedAssembly(event, {
        input: "techreborn:plantball",
        transitional: "techreborn:plantball",
        outputs: [
          Item.of("techreborn:compressed_plantball").withChance(8),
          Item.of("minecraft:grass").withChance(1),
          Item.of("minecraft:green_dye").withChance(0.5),
          Item.of("farmersdelight:straw").withChance(0.5),
        ],
      })
        .addPressingStep()
        .loops(4)
        .build();

      createSequencedAssembly(event, {
        input: "createaddition:biomass",
        transitional: "createaddition:biomass",
        outputs: [Item.of("createaddition:biomass_pellet", 4)],
      })
        .addCuttingStep()
        .addCuttingStep()
        .addPressingStep()
        .build();
    }
    /** @param {Internal.RecipeEventJS} event */
    function circuitSequence(event) {
      createSequencedAssembly(event, {
        input: "create:integrated_circuit",
        transitional: "createastral:incomplete_transitional_electronic_circuit",
        outputs: ["createastral:incomplete_electronic_circuit"],
      })
        .addDeployingStep("createastral:electrified_pin")
        .loops(32)
        .build();

      createSequencedAssembly(event, {
        input: "createastral:incomplete_electronic_circuit",
        transitional: "createastral:incomplete_electronic_circuit",
        outputs: ["techreborn:electronic_circuit"],
      })
        .addDeployingStep("#c:lead_plates")
        .addPressingStep()
        .build();

      createSequencedAssembly(event, {
        input: "ad_astra:calorite_engine",
        transitional: "ad_astra:calorite_engine",
        outputs: ["astraladditions:fragile_item_3"],
      })
        .addDeployingStep("yttr:armor_plating")
        .addDeployingStep("create:refined_radiance_casing")
        .addDeployingStep("yttr:armor_plating")
        .addDeployingStep("techreborn:data_storage_chip")
        .addFillingStep({ fluid: "kubejs:molten_radiance", amount: BUCKET / 2 })
        .addPressingStep()
        .loops(5)
        .build();

      createSequencedAssembly(event, {
        input: "ad_astra:mercury_stone",
        transitional: "ad_astra:mercury_stone",
        outputs: ["createastral:mercurian_stone"],
      })
        .addFillingStep({ fluid: "yttr:void", amount: BUCKET / 2 })
        .addFillingStep({ fluid: "kubejs:molten_radiance", amount: BUCKET / 2 })
        .addFillingStep({ fluid: "kubejs:molten_shadowsteel", amount: BUCKET / 2 })
        .addFillingStep({ fluid: "kubejs:molten_calorite", amount: BUCKET / 2 })
        .addPressingStep()
        .loops(5)
        .build();

      createSequencedAssembly(event, {
        input: "ad_astra:polished_permafrost",
        transitional: "ad_astra:polished_permafrost",
        outputs: ["createastral:aurorite_block"],
      })
        .addDeployingStep("ad_astra:ice_shard")
        .addDeployingStep("ad_astra:ice_shard")
        .addFillingStep({ fluid: "kubejs:aurorite", amount: BUCKET / 2 })
        .addPressingStep()
        .build();

      createSequencedAssembly(event, {
        input: "minecraft:paper",
        transitional: "create:sand_paper",
        outputs: ["estrogen:estrogen_patches"],
      })
        .addFillingStep({ fluid: "tconstruct:molten_queens_slime", amount: BUCKET })
        .addFillingStep({ fluid: "estrogen:liquid_estrogen", amount: BUCKET })
        .addDeployingStep("blahaj:blue_shark")
        .build();

      createSequencedAssembly(event, {
        input: "createastral:navigation_mechanism",
        transitional: "createastral:navigation_mechanism",
        outputs: ["astraladditions:fragile_item"],
      })
        .addDeployingStep("techreborn:machine_parts")
        .addDeployingStep("ad_astra:ostrum_plate")
        .addPressingStep()
        .addFillingStep({ fluid: "ad_astra:cryo_fuel", amount: BUCKET })
        .addPressingStep()
        .loops(4)
        .build();

      createSequencedAssembly(event, {
        input: "minecraft:glass_bottle",
        transitional: "minecraft:glass_bottle",
        outputs: ["minecraft:dragon_breath"],
      })
        .addFillingStep({ fluid: "tconstruct:ender_slime", amount: BUCKET })
        .addDeployingStep("minecraft:chorus_fruit")
        .build();
      createSequencedAssembly(event, {
        input: "create:copper_casing",
        transitional: "createastral:incomplete_brass_casing",
        outputs: ["create:brass_casing"],
      })
        .addDeployingStep("createaddition:brass_rod")
        .addFillingStep({ fluid: "tconstruct:molten_brass", amount: NUGGET })
        .addDeployingStep("create:brass_sheet")
        .addPressingStep()
        .loops(3)
        .build();

      createSequencedAssembly(event, {
        input: "techreborn:basic_machine_frame",
        transitional: "createastral:incomplete_advanced_machine_frame",
        outputs: ["techreborn:advanced_machine_frame"],
      })
        .addDeployingStep("#c:lead_plates")
        .addFillingStep({ fluid: "kubejs:blast-resistant_cement", amount: 200 * mB })
        .addDeployingStep("#c:lead_plates")
        .build();

      createSequencedAssembly(event, {
        input: "techreborn:advanced_machine_frame",
        transitional: "createastral:incomplete_industrial_machine_frame",
        outputs: ["techreborn:industrial_machine_frame"],
      })
        .addDeployingStep("ad_astra:ostrum_plate")
        .addDeployingStep("techreborn:machine_parts")
        .addDeployingStep("ad_astra:ostrum_plate")
        .build();

      createSequencedAssembly(event, {
        input: "create:lapis_sheet",
        transitional: "createastral:transitional_lapis_sheet",
        outputs: ["create:integrated_circuit"],
      })
        .addFillingStep({ fluid: "tconstruct:molten_silver", amount: BUCKET / 24 })
        .addDeployingStep("createaddition:copper_wire")
        .addDeployingStep("createaddition:copper_wire")
        .addPressingStep()
        .loops(4)
        .build();

      createSequencedAssembly(event, {
        input: "minecraft:dried_kelp",
        transitional: "minecraft:dried_kelp",
        outputs: [Item.of("create:belt_connector", 6)],
      })
        .addDeployingStep("techreborn:rubber")
        .addPressingStep()
        .addDeployingStep("minecraft:dried_kelp")
        .addPressingStep()
        .loops(3)
        .build();

      createSequencedAssembly(event, {
        input: "create:electron_tube",
        transitional: "create:electron_tube",
        outputs: [Item.of("create:display_board", 6)],
      })
        .addDeployingStep("create:belt_connector")
        .addDeployingStep("create:cogwheel")
        .addDeployingStep("#c:dyes")
        .loops(2)
        .build();

      createSequencedAssembly(event, {
        input: "ad_astra:ostrum_engine",
        transitional: "ad_astra:ostrum_engine",
        outputs: ["ad_astra:calorite_engine"],
      })
        .addFillingStep({ fluid: "kubejs:molten_yttrium", amount: BUCKET })
        .addFillingStep({ fluid: "yttr:void", amount: BUCKET })
        .addDeployingStep("techreborn:industrial_circuit")
        .addDeployingStep("createastral:subatomic_ingot")
        .addPressingStep()
        .loops(4)
        .build();

      createSequencedAssembly(event, {
        input: "ae2:printed_silicon",
        transitional: "createastral:incomplete_calculation_processor",
        outputs: ["ae2:calculation_processor"],
      })
        .addDeployingStep("ae2:printed_calculation_processor")
        .addDeployingStep("ae2:fluix_dust")
        .addFillingStep({ fluid: "kubejs:shimmer", amount: 100 * mB })
        .addPressingStep()
        .build();

      createSequencedAssembly(event, {
        input: "ae2:printed_silicon",
        transitional: "createastral:incomplete_engineering_processor",
        outputs: ["ae2:engineering_processor"],
      })
        .addDeployingStep("ae2:printed_engineering_processor")
        .addDeployingStep("ae2:fluix_dust")
        .addFillingStep({ fluid: "kubejs:shimmer", amount: 100 * mB })
        .addPressingStep()
        .build();

      createSequencedAssembly(event, {
        input: "ae2:printed_silicon",
        transitional: "createastral:incomplete_logic_processor",
        outputs: ["ae2:logic_processor"],
      })
        .addDeployingStep("ae2:printed_logic_processor")
        .addDeployingStep("ae2:fluix_dust")
        .addFillingStep({ fluid: "kubejs:shimmer", amount: 100 * mB })
        .addPressingStep()
        .build();

      createSequencedAssembly(event, {
        input: "techreborn:electronic_circuit",
        transitional: "techreborn:electronic_circuit",
        outputs: ["techreborn:industrial_circuit"],
      })
        .addFillingStep({ fluid: "techreborn:lithium", amount: 50 * mB })
        .addPressingStep()
        .addDeployingStep("techreborn:machine_parts")
        .addDeployingStep("createastral:calorite_pin")
        .addDeployingStep("createastral:calorite_pin")
        .loops(9)
        .build();

      createSequencedAssembly(event, {
        input: "createastral:star_shard",
        transitional: "createastral:incomplete_pure_star_shard",
        outputs: ["createastral:pure_star_shard"],
      })
        .addFillingStep({ fluid: "kubejs:molten_yttrium", amount: INGOT / 2 })
        .addPressingStep()
        .addDeployingStep("create:chromatic_compound")
        .addPressingStep()
        .loops(3)
        .build();
    }
    /** @param {Internal.RecipeEventJS} event */
    function casingSequence(event) {
      createSequencedAssembly(event, {
        input: "create:andesite_casing",
        transitional: "createastral:incomplete_copper_casing",
        outputs: ["create:copper_casing"],
      })
        .addDeployingStep("techreborn:rubber")
        .addDeployingStep("create:copper_sheet")
        .loops(3)
        .build();

      createSequencedAssembly(event, {
        input: "create:copper_casing",
        transitional: "createastral:incomplete_basic_machine_frame",
        outputs: ["techreborn:basic_machine_frame"],
      })
        .addFillingStep({ fluid: "tconstruct:molten_silver", amount: INGOT })
        .addDeployingStep("techreborn:rubber")
        .addPressingStep() //yeah!
        .loops(4)
        .build();
    }
    /** @param {Internal.RecipeEventJS} event */
    function diamondSequence(event) {
      const items = /** @type {const} */ ([
        { item: "helmet", loops: 4 },
        { item: "chestplate", loops: 8 },
        { item: "leggings", loops: 6 },
        { item: "boots", loops: 5 },
        { item: "pickaxe", loops: 2 },
        { item: "axe", loops: 2 },
        { item: "shovel", loops: 1 },
        { item: "hoe", loops: 1 },
        { item: "sword", loops: 2 },
      ]);
      items.forEach((item) => {
        createSequencedAssembly(event, {
          input: Item.of(`createastral:brass_${item.item}`).ignoreNBT(),
          transitional: `createastral:brass_${item.item}`,
          outputs: [`minecraft:diamond_${item.item}`],
        })
          .addFillingStep({ fluid: "tconstruct:molten_diamond", amount: 250 * mB })
          .loops(item.loops)
          .build();
      });
    }
    /** @param {Internal.RecipeEventJS} event */
    function piglinSequence(event) {
      createSequencedAssembly(event, {
        input: "create:golden_sheet",
        transitional: "createastral:coin",
        outputs: ["passivepiglins:piglin_coin"],
      })
        .addCuttingStep(30)
        .addDeployingStep("minecraft:gold_nugget")
        .addDeployingStep("minecraft:piglin_banner_pattern")
        .addPressingStep()
        .build();

      createSequencedAssembly(event, {
        input: "createastral:golden_bowl",
        transitional: "createastral:filled_golden_bowl",
        outputs: ["passivepiglins:piglin_fortune"],
      })
        .addFillingStep({ fluid: "techreborn:methane", amount: BUCKET / 27 })
        .addDeployingStep("techreborn:netherrack_dust")
        .addDeployingStep("minecraft:crimson_fungus")
        .build();

      createSequencedAssembly(event, {
        input: "minecraft:gold_ingot",
        transitional: "minecraft:gold_ingot",
        outputs: ["passivepiglins:piglin_totem"],
      })
        .addDeployingStep("minecraft:gold_nugget")
        .addDeployingStep("createastral:golden_pin")
        .addDeployingStep("createastral:golden_pin")
        .build();
    }
    /** @param {Internal.RecipeEventJS} event */
    function wineSequence(event) {
      createSequencedAssembly(event, {
        input: "vinery:red_grapejuice_wine_bottle",
        transitional: "kubejs:incomplete_chenet_wine",
        outputs: ["vinery:chenet_wine"],
      })
        .addDeployingStep("minecraft:sweet_berries")
        .addFillingStep({ fluid: "kubejs:red_grape_juice", amount: 250 * mB })
        .addDeployingStep("minecraft:sweet_berries")
        .build();

      createSequencedAssembly(event, {
        input: "vinery:red_grapejuice_wine_bottle",
        transitional: "kubejs:incomplete_king_danis_wine",
        outputs: ["vinery:king_danis_wine"],
      })
        .addFillingStep({ fluid: "kubejs:red_grape_juice", amount: 250 * mB })
        .addFillingStep({ fluid: "create:honey", amount: 250 * mB })
        .addFillingStep({ fluid: "create:honey", amount: 250 * mB })
        .build();

      createSequencedAssembly(event, {
        input: "vinery:red_grapejuice_wine_bottle",
        transitional: "kubejs:incomplete_noir_wine",
        outputs: ["vinery:noir_wine"],
      })
        .addDeployingStep("minecraft:kelp")
        .addFillingStep({ fluid: "kubejs:red_grape_juice", amount: 250 * mB })
        .addDeployingStep("minecraft:kelp")
        .build();

      createSequencedAssembly(event, {
        input: "vinery:red_grapejuice_wine_bottle",
        transitional: "kubejs:incomplete_bolvar_wine",
        outputs: ["vinery:bolvar_wine"],
      })
        .addFillingStep({ fluid: "create:honey", amount: 250 * mB })
        .addFillingStep({ fluid: "kubejs:red_grape_juice", amount: 250 * mB })
        .addDeployingStep("vinery:cherry")
        .build();

      createSequencedAssembly(event, {
        input: "vinery:red_grapejuice_wine_bottle",
        transitional: "kubejs:incomplete_cherry_wine",
        outputs: ["vinery:cherry_wine"],
      })
        .addDeployingStep("vinery:cherry")
        .addFillingStep({ fluid: "kubejs:red_grape_juice", amount: 250 * mB })
        .addDeployingStep("vinery:cherry")
        .build();

      createSequencedAssembly(event, {
        input: "vinery:red_grapejuice_wine_bottle",
        transitional: "kubejs:incomplete_jellie_wine",
        outputs: ["vinery:jellie_wine"],
      })
        .addDeployingStep("minecraft:golden_apple")
        .addFillingStep({ fluid: "kubejs:white_grape_juice", amount: 250 * mB })
        .addFillingStep({ fluid: "create:honey", amount: 250 * mB })
        .build();

      createSequencedAssembly(event, {
        input: "vinery:white_grapejuice_wine_bottle",
        transitional: "kubejs:incomplete_clark_wine",
        outputs: ["vinery:clark_wine"],
      })
        .addDeployingStep("minecraft:sweet_berries")
        .addFillingStep({ fluid: "kubejs:white_grape_juice", amount: 250 * mB })
        .addDeployingStep("minecraft:sweet_berries")
        .build();

      createSequencedAssembly(event, {
        input: "vinery:white_grapejuice_wine_bottle",
        transitional: "kubejs:incomplete_mellohi_wine",
        outputs: ["vinery:mellohi_wine"],
      })
        .addFillingStep({ fluid: "create:honey", amount: 250 * mB })
        .addFillingStep({ fluid: "create:honey", amount: 250 * mB })
        .addFillingStep({ fluid: "kubejs:white_grape_juice", amount: 250 * mB })
        .build();

      createSequencedAssembly(event, {
        input: "vinery:white_grapejuice_wine_bottle",
        transitional: "kubejs:incomplete_solaris_wine",
        outputs: ["vinery:solaris_wine"],
      })
        .addFillingStep({ fluid: "kubejs:white_grape_juice", amount: 250 * mB })
        .addDeployingStep("minecraft:sweet_berries")
        .addFillingStep({ fluid: "create:honey", amount: 250 * mB })
        .build();

      createSequencedAssembly(event, {
        input: "vinery:wine_bottle",
        transitional: "kubejs:incomplete_aegis_wine",
        outputs: ["vinery:aegis_wine"],
      })
        .addDeployingStep("minecraft:sugar")
        .addFillingStep({ fluid: "minecraft:water", amount: 1000 * mB })
        .addDeployingStep("minecraft:kelp")
        .build();

      createSequencedAssembly(event, {
        input: "vinery:wine_bottle",
        transitional: "kubejs:incomplete_apple_wine",
        outputs: ["vinery:apple_wine"],
      })
        .addDeployingStep("minecraft:apple")
        .addFillingStep({ fluid: "create:honey", amount: 250 * mB })
        .addDeployingStep("minecraft:apple")
        .build();

      createSequencedAssembly(event, {
        input: "vinery:wine_bottle",
        transitional: "kubejs:incomplete_kelp_cider",
        outputs: ["vinery:kelp_cider"],
      })
        .addDeployingStep("minecraft:kelp")
        .addDeployingStep("minecraft:kelp")
        .addDeployingStep("minecraft:apple")
        .build();

      createSequencedAssembly(event, {
        input: "vinery:wine_bottle",
        transitional: "kubejs:incomplete_apple_cider",
        outputs: ["vinery:apple_cider"],
      })
        .addDeployingStep("#minecraft:straw")
        .addDeployingStep("minecraft:apple")
        .addDeployingStep("minecraft:apple")
        .build();
    }

    createSequencedAssembly(event, {
      input: "create:precision_mechanism",
      transitional: "create:incomplete_precision_mechanism",
      outputs: ["immersive_aircraft:engine"],
    })
      .addDeployingStep("immersive_aircraft:boiler")
      .addDeployingStep("create:blaze_burner")
      .addDeployingStep("createaddition:capacitor")
      .loops(2)
      .build();

    createSequencedAssembly(event, {
      input: "tconstruct:slimesteel_nugget",
      transitional: "create:tree_fertilizer", // WTF?
      outputs: ["automobility:launch_gel"],
    })
      .addPressingStep()
      .loops(125)
      .build();

    createSequencedAssembly(event, {
      input: "phonos:redstone_chip",
      transitional: "createastral:incomplete_navigation_mechanism",
      outputs: ["createastral:navigation_mechanism"],
    })
      .addFillingStep({ fluid: "tconstruct:molten_cobalt", amount: BUCKET / 60 })
      .addDeployingStep("techreborn:electrum_nugget")
      .addPressingStep()
      .loops(30)
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:ender_pearl",
      transitional: "minecraft:ender_pearl",
      outputs: ["minecraft:ender_eye"],
    })
      .addDeployingStep("minecraft:blaze_powder")
      .addDeployingStep("create:powdered_obsidian")
      .addPressingStep()
      .addFillingStep({ fluid: "minecraft:lava", amount: 250 * mB })
      .addPressingStep()
      .loops(3)
      .build();

    createSequencedAssembly(event, {
      input: "create:electron_tube",
      transitional: "createastral:incomplete_redstone_chip",
      outputs: ["phonos:redstone_chip"],
    })
      .addFillingStep({ fluid: "tconstruct:molten_copper", amount: BUCKET / 24 })
      .addDeployingStep("#c:wires")
      .addPressingStep()
      .loops(12)
      .build();

    createSequencedAssembly(event, {
      input: "createbigcannons:nethersteel_screw_breech",
      transitional: "createastral:incomplete_shimmer_amplifier",
      outputs: ["createastral:shimmer_amplifier"],
    })
      .addFillingStep({ fluid: "kubejs:shimmer", amount: BUCKET / 9 })
      .addDeployingStep("kubejs:fire_resistant_fragile_sheet_block")
      .addFillingStep({ fluid: "techreborn:lithium", amount: BUCKET / 27 })
      .addFillingStep({ fluid: "techreborn:silicon", amount: BUCKET / 27 })
      .loops(6)
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:black_dye",
      transitional: "minecraft:black_dye",
      outputs: ["minecraft:ink_sac"],
    })
      .addDeployingStep("minecraft:paper")
      .loops(2)
      .build();

    createSequencedAssembly(event, {
      input: "create:iron_sheet",
      transitional: "createastral:incomplete_dash_panel",
      outputs: ["automobility:dash_panel"],
    })
      .addFillingStep({ fluid: "kubejs:shimmer", amount: BUCKET / 9 })
      .addPressingStep()
      .loops(3)
      .build();

    createSequencedAssembly(event, {
      input: "ae2:fluix_dust",
      transitional: "createastral:incomplete_refining_agent",
      outputs: ["createastral:refining_agent"],
    })
      .addFillingStep({ fluid: "techreborn:nitrogen", amount: BUCKET / 9 })
      .addFillingStep({ fluid: "techreborn:biofuel", amount: BUCKET / 9 })
      .addPressingStep()
      .loops(3)
      .build();

    createSequencedAssembly(event, {
      input: "create:dough",
      transitional: "create:dough",
      outputs: ["createastral:seitan"],
    })
      .addFillingStep({ fluid: "minecraft:water", amount: 100 * mB })
      .addPressingStep()
      .addCuttingStep()
      .loops(2)
      .build();

    createSequencedAssembly(event, {
      input: "createastral:seitan",
      transitional: "createastral:protopork",
      outputs: ["minecraft:porkchop"],
    })
      .addDeployingStep("minecraft:rotten_flesh")
      .addFillingStep({ fluid: "tconstruct:blood", amount: 100 * mB })
      .addPressingStep()
      .addCuttingStep()
      .build();

    createSequencedAssembly(event, {
      input: "createastral:seitan",
      transitional: "createastral:protomutton",
      outputs: ["minecraft:mutton"],
    })
      .addDeployingStep("minecraft:string")
      .addFillingStep({ fluid: "tconstruct:blood", amount: 100 * mB })
      .addPressingStep()
      .addCuttingStep()
      .build();

    createSequencedAssembly(event, {
      input: "createastral:seitan",
      transitional: "createastral:protobeef",
      outputs: ["minecraft:beef"],
    })
      .addDeployingStep("minecraft:moss_carpet")
      .addFillingStep({ fluid: "tconstruct:blood", amount: 100 * mB })
      .addPressingStep()
      .addCuttingStep()
      .build();

    createSequencedAssembly(event, {
      input: "createastral:seitan",
      transitional: "createastral:protochicken",
      outputs: ["minecraft:chicken"],
    })
      .addDeployingStep("minecraft:wheat_seeds")
      .addFillingStep({ fluid: "tconstruct:blood", amount: 100 * mB })
      .addPressingStep()
      .addCuttingStep()
      .build();

    createSequencedAssembly(event, {
      input: "createastral:seitan",
      transitional: "createastral:protorabbit",
      outputs: ["minecraft:rabbit"],
    })
      .addDeployingStep("minecraft:carrot")
      .addFillingStep({ fluid: "tconstruct:blood", amount: 100 * mB })
      .addPressingStep()
      .addCuttingStep()
      .build();

    createSequencedAssembly(event, {
      input: "createastral:seitan",
      transitional: "createastral:seitan",
      outputs: ["minecraft:egg"],
    })
      .addDeployingStep("techreborn:calcite_dust")
      .addFillingStep({ fluid: "tconstruct:earth_slime", amount: 10 * mB })
      .addPressingStep()
      .addFillingStep({ fluid: "kubejs:shimmer", amount: 10 * mB })
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:porkchop",
      transitional: "createastral:seitan",
      outputs: ["farmersdelight:ham"],
    })
      .addDeployingStep("minecraft:bone")
      .addDeployingStep("createastral:seitan")
      .addFillingStep({ fluid: "tconstruct:blood", amount: 100 * mB })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "createastral:seitan",
      transitional: "createastral:seitan",
      outputs: [Item.of("minecraft:ink_sac", 2)],
    })
      .addDeployingStep("minecraft:black_dye")
      .addFillingStep({ fluid: "minecraft:water", amount: 500 * mB })
      .addDeployingStep("minecraft:black_dye")
      .addFillingStep({ fluid: "minecraft:water", amount: 500 * mB })
      .addPressingStep()
      .build();
    createSequencedAssembly(event, {
      input: "minecraft:skeleton_skull",
      transitional: "createastral:incomplete_blaze_head",
      outputs: ["tconstruct:blaze_head"],
    })
      .addDeployingStep("minecraft:blaze_powder")
      .addFillingStep({ fluid: "tconstruct:blazing_blood", amount: 100 * mB })
      .addFillingStep({ fluid: "kubejs:shimmer", amount: 50 * mB })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:amethyst_shard",
      transitional: "minecraft:amethyst_shard",
      outputs: ["minecraft:small_amethyst_bud"],
    })
      .addFillingStep({ fluid: "minecraft:water", amount: BUCKET / 4 })
      .addFillingStep({ fluid: "kubejs:shimmer", amount: 10 * mB })
      .addFillingStep({ fluid: "minecraft:water", amount: BUCKET / 4 })
      .addFillingStep({ fluid: "kubejs:shimmer", amount: 10 * mB })
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:small_amethyst_bud",
      transitional: "minecraft:small_amethyst_bud",
      outputs: ["minecraft:medium_amethyst_bud"],
    })
      .addFillingStep({ fluid: "minecraft:water", amount: BUCKET / 4 })
      .addFillingStep({ fluid: "kubejs:shimmer", amount: 10 * mB })
      .addFillingStep({ fluid: "minecraft:water", amount: BUCKET / 4 })
      .addFillingStep({ fluid: "kubejs:shimmer", amount: 10 * mB })
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:medium_amethyst_bud",
      transitional: "minecraft:medium_amethyst_bud",
      outputs: ["minecraft:large_amethyst_bud"],
    })
      .addFillingStep({ fluid: "minecraft:water", amount: BUCKET / 4 })
      .addFillingStep({ fluid: "kubejs:shimmer", amount: 10 * mB })
      .addFillingStep({ fluid: "minecraft:water", amount: BUCKET / 4 })
      .addFillingStep({ fluid: "kubejs:shimmer", amount: 10 * mB })
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:large_amethyst_bud",
      transitional: "minecraft:large_amethyst_bud",
      outputs: ["minecraft:amethyst_cluster"],
    })
      .addFillingStep({ fluid: "minecraft:water", amount: BUCKET / 4 })
      .addFillingStep({ fluid: "kubejs:shimmer", amount: 10 * mB })
      .addFillingStep({ fluid: "minecraft:water", amount: BUCKET / 4 })
      .addFillingStep({ fluid: "kubejs:shimmer", amount: 10 * mB })
      .build();

    createSequencedAssembly(event, {
      input: "ad_astra:mars_sand",
      transitional: "createastral:martian_clump",
      outputs: ["createastral:ancient_stone"],
    })
      .addDeployingStep("tconstruct:debris_nugget")
      .addFillingStep({ fluid: "kubejs:shimmer", amount: BUCKET / 2 })
      .build();

    createSequencedAssembly(event, {
      input: "astralfoods:blaze_fries_and_cod",
      transitional: "astralfoods:blaze_fries_and_cod",
      outputs: ["astralfoods:cod_n_blaze"],
    })
      .addDeployingStep("minecraft:paper")
      .loops(3)
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:stone",
      transitional: "minecraft:stone",
      outputs: ["ad_astra:moon_stone"],
    })
      .addPressingStep()
      .addFillingStep({ fluid: "kubejs:shimmer", amount: 250 * mB })
      .loops(4)
      .build();
  });
  /** @param {Internal.RecipeEventJS} event */
  function enchantBooks(event) {
    //! enchantment.js

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "minecraft:sharpness", level: 1 }]))],
    })
      .addDeployingStep("minecraft:golden_sword")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "minecraft:protection", level: 1 }]))],
    })
      .addDeployingStep("tconstruct:gold_reinforcement")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "minecraft:unbreaking", level: 1 }]))],
    })
      .addDeployingStep("tconstruct:iron_reinforcement")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "minecraft:mending", level: 1 }]))],
    })
      .addDeployingStep("tconstruct:slimesteel_reinforcement")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "minecraft:fire_protection", level: 1 }]))],
    })
      .addDeployingStep("tconstruct:seared_reinforcement")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "minecraft:blast_protection", level: 1 }]))],
    })
      .addDeployingStep("tconstruct:emerald_reinforcement")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "minecraft:projectile_protection", level: 1 }]))],
    })
      .addDeployingStep("tconstruct:bronze_reinforcement")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "minecraft:thorns", level: 1 }]))],
    })
      .addDeployingStep("tconstruct:cobalt_reinforcement")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "minecraft:sweeping", level: 1 }]))],
    })
      .addDeployingStep("dustrial_decor:wrapped_chains")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "minecraft:soul_speed", level: 1 }]))],
    })
      .addDeployingStep("minecraft:soul_lantern")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "minecraft:smite", level: 1 }]))],
    })
      .addDeployingStep("techreborn:silver_plate")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "minecraft:silk_touch", level: 1 }]))],
    })
      .addDeployingStep("tconstruct:silky_cloth")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "minecraft:respiration", level: 1 }]))],
    })
      .addDeployingStep("create:copper_diving_helmet")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "minecraft:quick_charge", level: 1 }]))],
    })
      .addDeployingStep("minecraft:lever")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "minecraft:punch", level: 1 }]))],
    })
      .addDeployingStep("create:brass_hand")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "minecraft:power", level: 1 }]))],
    })
      .addDeployingStep("minecraft:gunpowder")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "minecraft:piercing", level: 1 }]))],
    })
      .addDeployingStep("minecraft:piston")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "minecraft:multishot", level: 1 }]))],
    })
      .addDeployingStep("minecraft:crossbow")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "minecraft:looting", level: 1 }]))],
    })
      .addDeployingStep("ad_astra:calorite_ingot")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "minecraft:knockback", level: 1 }]))],
    })
      .addDeployingStep("minecraft:tnt")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "minecraft:infinity", level: 1 }]))],
    })
      .addDeployingStep("minecraft:spectral_arrow")
      .addDeployingStep("minecraft:spectral_arrow") // Why? Just to fug wit ppl
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "minecraft:frost_walker", level: 1 }]))],
    })
      .addDeployingStep("minecraft:blue_ice")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "minecraft:fortune", level: 1 }]))],
    })
      .addDeployingStep("tconstruct:jeweled_apple")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "minecraft:flame", level: 1 }]))],
    })
      .addDeployingStep("minecraft:blaze_powder")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "minecraft:fire_aspect", level: 1 }]))],
    })
      .addDeployingStep("minecraft:blaze_rod")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "minecraft:feather_falling", level: 1 }]))],
    })
      .addDeployingStep("minecraft:white_bed")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "minecraft:efficiency", level: 1 }]))],
    })
      .addDeployingStep(Item.of("minecraft:potion", '{Potion:"minecraft:swiftness"}'))
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "minecraft:depth_strider", level: 1 }]))],
    })
      .addDeployingStep("create:copper_diving_boots")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "minecraft:aqua_affinity", level: 1 }]))],
    })
      .addDeployingStep("create:copper_backtank")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "minecraft:bane_of_arthropods", level: 1 }]))],
    })
      .addDeployingStep("minecraft:spider_eye")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "minecraft:lure", level: 1 }]))],
    })
      .addDeployingStep("farmersdelight:cod_slice")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "minecraft:luck_of_the_sea", level: 1 }]))],
    })
      .addDeployingStep("minecraft:golden_apple")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "minecraft:loyalty", level: 1 }]))],
    })
      .addDeployingStep("minecraft:sea_lantern")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "minecraft:riptide", level: 1 }]))],
    })
      .addDeployingStep("minecraft:dark_prismarine")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "minecraft:impaling", level: 1 }]))],
    })
      .addDeployingStep("minecraft:prismarine_shard")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "minecraft:channeling", level: 1 }]))],
    })
      .addDeployingStep("minecraft:lightning_rod")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "farmersdelight:backstabbing", level: 1 }]))],
    })
      .addDeployingStep("farmersdelight:iron_knife")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    // FIXME: Duplicate first item, only one of two is targettable!
    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "create:capacity", level: 1 }]))],
    })
      .addDeployingStep("ad_astra:oxygen_bucket")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    // FIXME: Duplicate first item, only one of two is targettable!
    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "create:potato_recovery", level: 1 }]))],
    })
      .addDeployingStep("ad_astra:oxygen_bucket")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    //! dungeonsenchants.js
    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:accelerate", level: 1 }]))],
    })
      .addDeployingStep("minecraft:rabbit_foot")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:ambush", level: 1 }]))],
    })
      .addDeployingStep("minecraft:leather")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:anima_conduit", level: 1 }]))],
    })
      .addDeployingStep("astraladditions:shimmer_heart")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:bonus_shot", level: 1 }]))],
    })
      .addDeployingStep("createbigcannons:flak_autocannon_round")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:burst_bowstring", level: 1 }]))],
    })
      .addDeployingStep("doodads:slimey_shoes")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:chain_reaction", level: 1 }]))],
    })
      .addDeployingStep("createbigcannons:shot_balls")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:chains", level: 1 }]))],
    })
      .addDeployingStep("minecraft:chain")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:charge", level: 1 }]))],
    })
      .addDeployingStep("create:sturdy_sheet")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:cobweb_shot", level: 1 }]))],
    })
      .addDeployingStep("minecraft:cobweb")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:committed", level: 1 }]))],
    })
      .addDeployingStep("techreborn:diamond_saw_blade")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:critical_hit", level: 1 }]))],
    })
      .addDeployingStep("minecraft:nether_star")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:dipping_poison", level: 1 }]))],
    })
      .addDeployingStep("minecraft:pufferfish")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:dynamo", level: 1 }]))],
    })
      .addDeployingStep("tconstruct:slime_boots")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:echo", level: 1 }]))],
    })
      .addDeployingStep("minecraft:jukebox")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:enigma_resonator", level: 1 }]))],
    })
      .addDeployingStep("tconstruct:sky_slime_crystal")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:exploding", level: 1 }]))],
    })
      .addDeployingStep("createbigcannons:he_shell")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:freezing", level: 1 }]))],
    })
      .addDeployingStep("ad_astra:ice_shard")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:fuse_shot", level: 1 }]))],
    })
      .addDeployingStep("createbigcannons:impact_fuze")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:gravity", level: 1 }]))],
    })
      .addDeployingStep("create:weighted_ejector")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:guarding_strike", level: 1 }]))],
    })
      .addDeployingStep("minecraft:shield")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:fuse_shot", level: 1 }]))],
    })
      .addDeployingStep("createbigcannons:impact_fuze")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:illagers_bane", level: 1 }]))],
    })
      .addDeployingStep("minecraft:totem_of_undying")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:jungle_poison", level: 1 }]))],
    })
      .addDeployingStep("minecraft:poisonous_potato")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:leeching", level: 1 }]))],
    })
      .addDeployingStep("tconstruct:necrotic_bone")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:levitation_shot", level: 1 }]))],
    })
      .addDeployingStep("minecraft:phantom_membrane")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:overcharge", level: 1 }]))],
    })
      .addDeployingStep("createbigcannons:nitropowder")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:leeching", level: 1 }]))],
    })
      .addDeployingStep("tconstruct:necrotic_bone")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:pain_cycle", level: 1 }]))],
    })
      .addDeployingStep("tconstruct:bloodbone")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:phantoms_mark", level: 1 }]))],
    })
      .addDeployingStep("minecraft:glowstone")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:poison_cloud", level: 1 }]))],
    })
      .addDeployingStep("minecraft:spore_blossom")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:prospector", level: 1 }]))],
    })
      .addDeployingStep("tconstruct:emerald_reinforcement")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:radiance", level: 1 }]))],
    })
      .addDeployingStep("minecraft:glow_berries")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:rampaging", level: 1 }]))],
    })
      .addDeployingStep("techreborn:overclocker_upgrade")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:refreshment", level: 1 }]))],
    })
      .addDeployingStep("farmersdelight:melon_juice")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:ricochet", level: 1 }]))],
    })
      .addDeployingStep("createbigcannons:recoil_spring")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:replenish", level: 1 }]))],
    })
      .addDeployingStep("automobility:launch_gel")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:rushdown", level: 1 }]))],
    })
      .addDeployingStep("automobility:dash_panel")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:shadow_barb", level: 1 }]))],
    })
      .addDeployingStep("createaddition:barbed_wire")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:shared_pain", level: 1 }]))],
    })
      .addDeployingStep("doodads:cactus_ring")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:shadow_shot", level: 1 }]))],
    })
      .addDeployingStep("createbigcannons:solid_shot")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:shockwave", level: 1 }]))],
    })
      .addDeployingStep("createbigcannons:shrapnel_shell")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:smiting", level: 1 }]))],
    })
      .addDeployingStep("yigd:grave")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:soul_devourer", level: 1 }]))],
    })
      .addDeployingStep("tconstruct:soulsteel_nugget")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:soul_siphon", level: 1 }]))],
    })
      .addDeployingStep("xpcrystals:soul_compound")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:stunning", level: 1 }]))],
    })
      .addDeployingStep("drinkbeer:beer_mug")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:swirling", level: 1 }]))],
    })
      .addDeployingStep("ae2:certus_quartz_crystal")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:tempo_theft", level: 1 }]))],
    })
      .addDeployingStep("createastral:swift_andesite")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:thundering", level: 1 }]))],
    })
      .addDeployingStep("minecraft:lightning_rod")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:weakening", level: 1 }]))],
    })
      .addDeployingStep("minecraft:wither_rose")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:wild_rage", level: 1 }]))],
    })
      .addDeployingStep("tconstruct:blood_slime_ball")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    //void stuffs
    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:void_strike", level: 1 }]))],
    })
      .addDeployingStep("create:refined_radiance")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:book",
      transitional: "minecraft:enchanted_book",
      outputs: [Item.of("minecraft:enchanted_book", enchants([{ id: "mcdw:void_shot", level: 1 }]))],
    })
      .addDeployingStep("create:shadow_steel")
      .addDeployingStep("xpcrystals:xp_crystal")
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET })
      .addPressingStep()
      .build();

    createSequencedAssembly(event, {
      input: "minecraft:glass_bottle",
      transitional: "minecraft:glass_bottle",
      outputs: ["xpcrystals:xp_boost_potion"],
    })
      .addFillingStep({ fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET / 3 })
      .addFillingStep({ fluid: "xpcrystals:soul", amount: BUCKET / 3 })
      .addFillingStep({ fluid: "kubejs:shimmer", amount: BUCKET / 3 })
      .build();
  }
})();
