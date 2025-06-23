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

    // event.recipes.create
    //   .sequenced_assembly(
    //     [Item.of("tconstruct:medium_ender_slime_crystal_bud")],
    //     "tconstruct:small_ender_slime_crystal_bud",
    //     [
    //       event.recipes.createFilling("tconstruct:small_ender_slime_crystal_bud", [
    //         "tconstruct:small_ender_slime_crystal_bud",
    //         { fluid: "tconstruct:ender_slime", amount: (250 * mB) / 3 },
    //       ]),
    //     ]
    //   )
    //   .transitionalItem("tconstruct:small_ender_slime_crystal_bud")
    //   .loops(3);

    createSequencedAssembly(event, {
      input: "tconstruct:medium_ender_slime_crystal_bud",
      transitional: "tconstruct:medium_ender_slime_crystal_bud",
      outputs: ["tconstruct:large_ender_slime_crystal_bud"],
    })
      .addDeployingStep("techreborn:basalt_dust")
      .addFillingStep({ fluid: "tconstruct:ender_slime", amount: (250 * mB) / 3 })
      .loops(3)
      .build();

    // event.recipes.create
    //   .sequenced_assembly(
    //     [Item.of("tconstruct:large_ender_slime_crystal_bud")],
    //     "tconstruct:medium_ender_slime_crystal_bud",
    //     [
    //       event.recipes.createDeploying("tconstruct:medium_ender_slime_crystal_bud", [
    //         "tconstruct:medium_ender_slime_crystal_bud",
    //         ["techreborn:basalt_dust"],
    //       ]),
    //       event.recipes.createFilling("tconstruct:medium_ender_slime_crystal_bud", [
    //         "tconstruct:medium_ender_slime_crystal_bud",
    //         { fluid: "tconstruct:ender_slime", amount: (250 * mB) / 3 },
    //       ]),
    //     ]
    //   )
    //   .transitionalItem("tconstruct:medium_ender_slime_crystal_bud")
    //   .loops(3);

    createSequencedAssembly(event, {
      input: "tconstruct:large_ender_slime_crystal_bud",
      transitional: "tconstruct:large_ender_slime_crystal_bud",
      outputs: ["tconstruct:ender_slime_crystal_cluster"],
    })
      .addDeployingStep("create:powdered_obsidian")
      .addFillingStep({ fluid: "tconstruct:ender_slime", amount: (250 * mB) / 3 })
      .loops(3)
      .build();

    // event.recipes.create
    //   .sequenced_assembly(
    //     [Item.of("tconstruct:ender_slime_crystal_cluster")],
    //     "tconstruct:large_ender_slime_crystal_bud",
    //     [
    //       event.recipes.createDeploying("tconstruct:large_ender_slime_crystal_bud", [
    //         "tconstruct:large_ender_slime_crystal_bud",
    //         ["create:powdered_obsidian"],
    //       ]),
    //       event.recipes.createFilling("tconstruct:large_ender_slime_crystal_bud", [
    //         "tconstruct:large_ender_slime_crystal_bud",
    //         { fluid: "tconstruct:ender_slime", amount: (250 * mB) / 3 },
    //       ]),
    //     ]
    //   )
    //   .transitionalItem("tconstruct:large_ender_slime_crystal_bud")
    //   .loops(3);

    createSequencedAssembly(event, {
      input: "cookingforblockheads:milk_jar",
      transitional: "cookingforblockheads:milk_jar",
      outputs: ["cookingforblockheads:cow_jar"],
    })
      .addDeployingStep("minecraft:beef")
      .addDeployingStep("minecraft:leather")
      .addFillingStep({ fluid: "tconstruct:blood", amount: 100 * mB })
      .build();

    // event.recipes.create
    //   .sequenced_assembly([Item.of("cookingforblockheads:cow_jar")], "cookingforblockheads:milk_jar", [
    //     event.recipes.createDeploying("cookingforblockheads:milk_jar", [
    //       "cookingforblockheads:milk_jar",
    //       ["minecraft:beef"],
    //     ]),
    //     event.recipes.createDeploying("cookingforblockheads:milk_jar", [
    //       "cookingforblockheads:milk_jar",
    //       ["minecraft:leather"],
    //     ]),
    //     event.recipes.createFilling("cookingforblockheads:milk_jar", [
    //       "cookingforblockheads:milk_jar",
    //       { fluid: "tconstruct:blood", amount: 100 * mB },
    //     ]),
    //   ])
    //   .transitionalItem("cookingforblockheads:milk_jar")
    //   .loops(1);

    createSequencedAssembly(event, {
      input: "minecraft:prismarine",
      transitional: "chipped:sea_lantern_2",
      outputs: ["minecraft:sea_lantern"],
    })
      .addDeployingStep("minecraft:prismarine_crystals")
      .loops(5)
      .build();

    // event.recipes.create
    //   .sequenced_assembly([Item.of("minecraft:sea_lantern")], "minecraft:prismarine", [
    //     event.recipes.createDeploying("minecraft:prismarine", [
    //       "minecraft:prismarine",
    //       ["minecraft:prismarine_crystals"],
    //     ]),
    //   ])
    //   .transitionalItem("chipped:sea_lantern_2")
    //   .loops(5);

    createSequencedAssembly(event, {
      input: "minecraft:redstone_torch",
      transitional: "chipped:redstone_lamp_1",
      outputs: ["yttr:lamp"],
    })
      .addDeployingStep("minecraft:iron_bars")
      .addDeployingStep("create:framed_glass")
      .addDeployingStep("minecraft:iron_bars")
      .build();

    // event.recipes.create
    //   .sequenced_assembly([Item.of("yttr:lamp")], "minecraft:redstone_torch", [
    //     event.recipes.createDeploying("minecraft:redstone_torch", [
    //       "minecraft:redstone_torch",
    //       ["minecraft:iron_bars"],
    //     ]),
    //     event.recipes.createDeploying("minecraft:redstone_torch", [
    //       "minecraft:redstone_torch",
    //       ["create:framed_glass"],
    //     ]),
    //     event.recipes.createDeploying("minecraft:redstone_torch", [
    //       "minecraft:redstone_torch",
    //       ["minecraft:iron_bars"],
    //     ]),
    //   ])
    //   .transitionalItem("chipped:redstone_lamp_1")
    //   .loops(1);

    createSequencedAssembly(event, {
      input: "minecraft:leather_horse_armor",
      transitional: "minecraft:leather_horse_armor",
      outputs: ["createastral:horse"],
    })
      .addDeployingStep("minecraft:apple")
      .addDeployingStep("minecraft:hay_block")
      .addFillingStep({ fluid: "tconstruct:blood", amount: 100 * mB })
      .build();

    // event.recipes.create
    //   .sequenced_assembly([Item.of("createastral:horse")], "minecraft:leather_horse_armor", [
    //     event.recipes.createDeploying("minecraft:leather_horse_armor", [
    //       "minecraft:leather_horse_armor",
    //       ["minecraft:apple"],
    //     ]),
    //     event.recipes.createDeploying("minecraft:leather_horse_armor", [
    //       "minecraft:leather_horse_armor",
    //       ["minecraft:hay_block"],
    //     ]),
    //     event.recipes.createFilling("minecraft:leather_horse_armor", [
    //       "minecraft:leather_horse_armor",
    //       { fluid: "tconstruct:blood", amount: 100 * mB },
    //     ]),
    //   ])
    //   .transitionalItem("minecraft:leather_horse_armor")
    //   .loops(1);

    createSequencedAssembly(event, {
      input: "#create:sleepers",
      transitional: "create:incomplete_track",
      outputs: ["create:track"],
    })
      .addDeployingStep(["#c:nuggets/iron", "#c:nuggets/tin", "#c:nuggets/zinc"])
      .addDeployingStep(["#c:nuggets/iron", "#c:nuggets/tin", "#c:nuggets/zinc"])
      .addPressingStep()
      .build();

    // event.recipes.create
    //   .sequenced_assembly([Item.of("create:track")], "#create:sleepers", [
    //     event.recipes.createDeploying("create:incomplete_track", [
    //       "create:incomplete_track",
    //       ["#c:nuggets/iron", "#c:nuggets/tin", "#c:nuggets/zinc"],
    //     ]),
    //     event.recipes.createDeploying("create:incomplete_track", [
    //       "create:incomplete_track",
    //       ["#c:nuggets/iron", "#c:nuggets/tin", "#c:nuggets/zinc"],
    //     ]),
    //     event.recipes.createPressing("create:incomplete_track", "create:incomplete_track"),
    //   ])
    //   .transitionalItem("create:incomplete_track")
    //   .loops(1);

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

    // event.recipes.create
    //   .sequenced_assembly([Item.of("createastral:living_mechanism").withChance(1)], "yttr:ultrapure_carbon", [
    //     event.recipes.createFilling("yttr:ultrapure_carbon", [
    //       "yttr:ultrapure_carbon",
    //       { fluid: "tconstruct:ender_slime", amount: INGOT },
    //     ]),
    //     event.recipes.createPressing("yttr:ultrapure_carbon", "yttr:ultrapure_carbon"),
    //     event.recipes.createFilling("yttr:ultrapure_carbon", [
    //       "yttr:ultrapure_carbon",
    //       { fluid: "tconstruct:ender_slime", amount: INGOT },
    //     ]),
    //     event.recipes.createPressing("yttr:ultrapure_carbon", "yttr:ultrapure_carbon"),
    //     event.recipes.createDeploying("yttr:ultrapure_carbon", ["yttr:ultrapure_carbon", "minecraft:ender_eye"]),
    //     event.recipes.createFilling("yttr:ultrapure_carbon", [
    //       "yttr:ultrapure_carbon",
    //       { fluid: "kubejs:shimmer", amount: BUCKET / 3 },
    //     ]),
    //   ])
    //   .transitionalItem("yttr:ultrapure_carbon")
    //   .loops(1);

    createSequencedAssembly(event, {
      input: "astraladditions:blazed_steel_ring",
      transitional: "astraladditions:blazed_steel_ring",
      outputs: ["astraladditions:orbital_navigation_ring"],
    })
      .addFillingStep({ fluid: "tconstruct:molten_steel", amount: NUGGET })
      .addDeployingStep("createastral:navigation_mechanism")
      .addDeployingStep("createastral:astral_conduit")
      .build();

    // event.recipes.create
    //   .sequenced_assembly(
    //     [Item.of("astraladditions:orbital_navigation_ring").withChance(1)],
    //     "astraladditions:blazed_steel_ring",
    //     [
    //       event.recipes.createFilling("astraladditions:blazed_steel_ring", [
    //         "astraladditions:blazed_steel_ring",
    //         { fluid: "tconstruct:molten_steel", amount: NUGGET },
    //       ]),
    //       event.recipes.createDeploying("astraladditions:blazed_steel_ring", [
    //         "astraladditions:blazed_steel_ring",
    //         "createastral:navigation_mechanism",
    //       ]),
    //       event.recipes.createDeploying("astraladditions:blazed_steel_ring", [
    //         "astraladditions:blazed_steel_ring",
    //         "createastral:astral_conduit",
    //       ]),
    //     ]
    //   )
    //   .transitionalItem("astraladditions:blazed_steel_ring")
    //   .loops(1);

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

    // event.recipes.create
    //   .sequenced_assembly([Item.of("createastral:laskinium_pill").withChance(1)], "estrogen:estrogen_pill", [
    //     event.recipes.createFilling("estrogen:estrogen_pill", [
    //       "estrogen:estrogen_pill",
    //       { fluid: "kubejs:shimmer", amount: BUCKET },
    //     ]),
    //     event.recipes.createPressing("estrogen:estrogen_pill", "estrogen:estrogen_pill"),
    //     event.recipes.createDeploying("estrogen:estrogen_pill", ["estrogen:estrogen_pill", "createastral:laskinium"]),
    //     event.recipes.createDeploying("estrogen:estrogen_pill", [
    //       "estrogen:estrogen_pill",
    //       "createastral:astral_singularity",
    //     ]),
    //   ])
    //   .transitionalItem("estrogen:estrogen_pill")
    //   .loops(1);

    createSequencedAssembly(event, {
      input: "#c:dusts/obsidian",
      transitional: "create:unprocessed_obsidian_sheet",
      outputs: [Item.of("create:sturdy_sheet").withChance(12), Item.of("minecraft:gravel").withChance(8)],
    })
      .addPressingStep()
      .loops(10)
      .build();

    // event.recipes.create
    //   .sequenced_assembly(
    //     [Item.of("create:sturdy_sheet").withChance(12), Item.of("minecraft:gravel").withChance(8)],
    //     "#c:dusts/obsidian",
    //     [
    //       event.recipes.createPressing(inc_sturdy_sheet, inc_sturdy_sheet),
    //       event.recipes.createPressing(inc_sturdy_sheet, inc_sturdy_sheet),
    //     ]
    //   )
    //   .transitionalItem(inc_sturdy_sheet)
    //   .loops(5);

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

    // event.recipes.create
    //   .sequenced_assembly([Item.of("create:sturdy_sheet", 2)], "tconstruct:obsidian_pane", [
    //     event.recipes.createDeploying(inc_sturdy_sheet, [inc_sturdy_sheet, "minecraft:magma_cream"]),
    //     event.recipes.createPressing(inc_sturdy_sheet, inc_sturdy_sheet),
    //     event.recipes.createFilling(inc_sturdy_sheet, [
    //       inc_sturdy_sheet,
    //       { fluid: "minecraft:lava", amount: 100 * mB },
    //     ]),
    //   ])
    //   .loops(2)
    //   .transitionalItem(inc_sturdy_sheet);

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

    // event.recipes.create
    //   .sequenced_assembly(["create:sturdy_sheet"], "create:powdered_obsidian", [
    //     event.recipes.createFilling(inc_sturdy_sheet, [inc_sturdy_sheet, { fluid: "minecraft:lava", amount: 50 * mB }]),
    //     event.recipes.createPressing(inc_sturdy_sheet, inc_sturdy_sheet),
    //     event.recipes.createPressing(inc_sturdy_sheet, inc_sturdy_sheet),
    //   ])
    //   .loops(5)
    //   .transitionalItem(inc_sturdy_sheet);

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

    // event.custom({
    //   type: "create:sequenced_assembly",
    //   ingredient: { tag: "c:plates/gold" },
    //   transitionalItem: { item: "create:incomplete_precision_mechanism" },
    //   sequence: [
    //     {
    //       type: "create:deploying",
    //       ingredients: [{ item: "create:incomplete_precision_mechanism" }, { item: "create:cogwheel" }],
    //       results: [{ item: "create:incomplete_precision_mechanism" }],
    //     },
    //     {
    //       type: "create:deploying",
    //       ingredients: [{ item: "create:incomplete_precision_mechanism" }, { item: "create:large_cogwheel" }],
    //       results: [{ item: "create:incomplete_precision_mechanism" }],
    //     },
    //     {
    //       type: "create:deploying",
    //       ingredients: [{ item: "create:incomplete_precision_mechanism" }, { tag: "c:nuggets/desh" }],
    //       results: [{ item: "create:incomplete_precision_mechanism" }],
    //     },
    //   ],
    //   results: [
    //     { item: "create:precision_mechanism", chance: 120.0 },
    //     { item: "create:golden_sheet", chance: 8.0 },
    //     { item: "create:andesite_alloy", chance: 8.0 },
    //     { item: "create:cogwheel", chance: 5.0 },
    //     { item: "minecraft:gold_nugget", chance: 3.0 },
    //     { item: "create:shaft", chance: 2.0 },
    //     { item: "create:crushed_raw_gold", chance: 2.0 },
    //     { item: "minecraft:iron_ingot" },
    //     { item: "minecraft:clock" },
    //   ],
    //   loops: 6,
    // });

    createSequencedAssembly(event, {
      input: "minecraft:bowl",
      transitional: "minecraft:bowl",
      outputs: ["astralfoods:shimmered_rabbit_stew"],
    })
      .addDeployingStep("astralfoods:seared_potato")
      .addDeployingStep("minecraft:cooked_rabbit")
      .addFillingStep({ fluid: "kubejs:shimmer", amount: BUCKET })
      .build();

    // event.recipes.create
    //   .sequenced_assembly(
    //     [
    //       // output
    //       Item.of("astralfoods:shimmered_rabbit_stew").withChance(1), // begin
    //     ],
    //     "minecraft:bowl",
    //     [
    //       // input
    //       event.recipes.createDeploying("minecraft:bowl", ["minecraft:bowl", "astralfoods:seared_potato"]),
    //       event.recipes.createDeploying("minecraft:bowl", ["minecraft:bowl", "minecraft:cooked_rabbit"]),
    //       event.recipes.createFilling("minecraft:bowl", [
    //         "minecraft:bowl",
    //         { fluid: "kubejs:shimmer", amount: BUCKET },
    //       ]),
    //     ]
    //   )
    //   .transitionalItem("minecraft:bowl")
    //   .loops(1);

    // createSequencedAssembly(event, {
    //   input: "createastral:sturdy_cage",
    //   transitional: "createastral:sturdy_cage",
    //   outputs: ["createastral:contained_end"],
    // })
    //   // @ts-expect-error Yttr uses a non-standard ingredient, will this work?
    //   .addDeployingStep({ "yttr:entity": "astraladditions:ender_watcher" })
    //   .build();

    // Yttr uses a non-standard ingredient, so this must remain an event.custom
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

      // const transitional_c_plantball = "techreborn:plantball";

      // event.recipes.create
      //   .sequenced_assembly(
      //     [
      //       Item.of("techreborn:compressed_plantball").withChance(8),
      //       Item.of("minecraft:grass").withChance(1),
      //       Item.of("minecraft:green_dye").withChance(0.5),
      //       Item.of("farmersdelight:straw").withChance(0.5),
      //     ],
      //     "techreborn:plantball",
      //     [event.recipes.createPressing(transitional_c_plantball, transitional_c_plantball)]
      //   )
      //   .transitionalItem(transitional_c_plantball)
      //   .loops(4);

      createSequencedAssembly(event, {
        input: "createaddition:biomass",
        transitional: "createaddition:biomass",
        outputs: [Item.of("createaddition:biomass_pellet", 4)],
      })
        .addCuttingStep()
        .addCuttingStep()
        .addPressingStep()
        .build();

      // const transitional_bio_pellet = "createaddition:biomass";
      // event.recipes.create
      //   .sequenced_assembly([Item.of("createaddition:biomass_pellet", 4).withChance(1)], "createaddition:biomass", [
      //     event.recipes.createCutting(transitional_bio_pellet, transitional_bio_pellet),
      //     event.recipes.createCutting(transitional_bio_pellet, transitional_bio_pellet),
      //     event.recipes.createPressing(transitional_bio_pellet, transitional_bio_pellet),
      //   ])
      //   .transitionalItem(transitional_bio_pellet)
      //   .loops(1);
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

      // const incomplete_transitional_circuit = "createastral:incomplete_transitional_electronic_circuit";
      // event.recipes.create
      //   .sequenced_assembly(
      //     [
      //       // begin
      //       "createastral:incomplete_electronic_circuit", // output
      //     ],
      //     "create:integrated_circuit",
      //     [
      //       // input
      //       event.recipes.createDeploying(incomplete_transitional_circuit, [
      //         incomplete_transitional_circuit,
      //         "createastral:electrified_pin",
      //       ]),
      //     ]
      //   )
      //   .transitionalItem(incomplete_transitional_circuit)
      //   .loops(32);

      createSequencedAssembly(event, {
        input: "createastral:incomplete_electronic_circuit",
        transitional: "createastral:incomplete_electronic_circuit",
        outputs: ["techreborn:electronic_circuit"],
      })
        .addDeployingStep("#c:lead_plates")
        .addPressingStep()
        .build();

      // event.recipes.create
      //   .sequenced_assembly(
      //     [
      //       // begin
      //       "techreborn:electronic_circuit", // output
      //     ],
      //     "createastral:incomplete_electronic_circuit",
      //     [
      //       // input
      //       event.recipes.createDeploying("createastral:incomplete_electronic_circuit", [
      //         "createastral:incomplete_electronic_circuit",
      //         "techreborn:lead_plate",
      //       ]),
      //       event.recipes.createPressing(
      //         "createastral:incomplete_electronic_circuit",
      //         "createastral:incomplete_electronic_circuit"
      //       ),
      //     ]
      //   )
      //   .transitionalItem("createastral:incomplete_electronic_circuit")
      //   .loops(1);

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

      // event.recipes.create
      //   .sequenced_assembly(
      //     [
      //       // begin
      //       "astraladditions:fragile_item_3", // output
      //     ],
      //     "ad_astra:calorite_engine",
      //     [
      //       // input
      //       event.recipes.createDeploying("ad_astra:calorite_engine", [
      //         "ad_astra:calorite_engine",
      //         "yttr:armor_plating",
      //       ]),
      //       event.recipes.createDeploying("ad_astra:calorite_engine", [
      //         "ad_astra:calorite_engine",
      //         "create:refined_radiance_casing",
      //       ]),
      //       event.recipes.createDeploying("ad_astra:calorite_engine", [
      //         "ad_astra:calorite_engine",
      //         "yttr:armor_plating",
      //       ]),
      //       event.recipes.createDeploying("ad_astra:calorite_engine", [
      //         "ad_astra:calorite_engine",
      //         "techreborn:data_storage_chip",
      //       ]),
      //       event.recipes.createFilling("ad_astra:calorite_engine", [
      //         "ad_astra:calorite_engine",
      //         { fluid: "kubejs:molten_radiance", amount: BUCKET / 2 },
      //       ]),
      //       event.recipes.createPressing("ad_astra:calorite_engine", "ad_astra:calorite_engine"),
      //     ]
      //   )
      //   .transitionalItem("ad_astra:calorite_engine")
      //   .loops(5);

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
      // event.recipes.create
      //   .sequenced_assembly(
      //     [
      //       // begin
      //       "createastral:mercurian_stone", // output
      //     ],
      //     "ad_astra:mercury_stone",
      //     [
      //       // input
      //       event.recipes.createFilling("ad_astra:mercury_stone", [
      //         "ad_astra:mercury_stone",
      //         { fluid: "yttr:void", amount: BUCKET / 2 },
      //       ]),
      //       event.recipes.createFilling("ad_astra:mercury_stone", [
      //         "ad_astra:mercury_stone",
      //         { fluid: "kubejs:molten_radiance", amount: BUCKET / 2 },
      //       ]),
      //       event.recipes.createFilling("ad_astra:mercury_stone", [
      //         "ad_astra:mercury_stone",
      //         { fluid: "kubejs:molten_shadowsteel", amount: BUCKET / 2 },
      //       ]),
      //       event.recipes.createFilling("ad_astra:mercury_stone", [
      //         "ad_astra:mercury_stone",
      //         { fluid: "kubejs:molten_calorite", amount: BUCKET / 2 },
      //       ]),
      //       event.recipes.createPressing("ad_astra:mercury_stone", "ad_astra:mercury_stone"),
      //     ]
      //   )
      //   .transitionalItem("ad_astra:mercury_stone")
      //   .loops(5);

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

      // event.recipes.create
      //   .sequenced_assembly(
      //     [
      //       // begin
      //       "createastral:aurorite_block", // output
      //     ],
      //     "ad_astra:polished_permafrost",
      //     [
      //       // input
      //       event.recipes.createDeploying("ad_astra:polished_permafrost", ["ad_astra:ice_shard", "ad_astra:ice_shard"]),
      //       event.recipes.createDeploying("ad_astra:polished_permafrost", ["ad_astra:ice_shard", "ad_astra:ice_shard"]),
      //       event.recipes.createFilling("ad_astra:polished_permafrost", [
      //         "ad_astra:polished_permafrost",
      //         { fluid: "kubejs:aurorite", amount: BUCKET / 2 },
      //       ]),
      //       event.recipes.createPressing("ad_astra:polished_permafrost", "ad_astra:polished_permafrost"),
      //     ]
      //   )
      //   .transitionalItem("ad_astra:polished_permafrost")
      //   .loops(1);

      createSequencedAssembly(event, {
        input: "minecraft:paper",
        transitional: "create:sand_paper",
        outputs: ["estrogen:estrogen_patches"],
      })
        .addFillingStep({ fluid: "tconstruct:molten_queens_slime", amount: BUCKET })
        .addFillingStep({ fluid: "estrogen:liquid_estrogen", amount: BUCKET })
        .addDeployingStep("blahaj:blue_shark")
        .build();

      // event.recipes.create
      //   .sequenced_assembly(
      //     [
      //       // begin
      //       "estrogen:estrogen_patches", // output
      //     ],
      //     "minecraft:paper",
      //     [
      //       // input
      //       event.recipes.createFilling("create:sand_paper", [
      //         "create:sand_paper",
      //         { fluid: "tconstruct:molten_queens_slime", amount: BUCKET },
      //       ]),
      //       event.recipes.createFilling("create:sand_paper", [
      //         "create:sand_paper",
      //         { fluid: "estrogen:liquid_estrogen", amount: BUCKET },
      //       ]),
      //       event.recipes.createDeploying("create:sand_paper", ["blahaj:blue_shark", "blahaj:blue_shark"]),
      //     ]
      //   )
      //   .transitionalItem("ad_astra:polished_permafrost")
      //   .loops(1);

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

      // event.recipes.create
      //   .sequenced_assembly(
      //     [
      //       // begin
      //       "astraladditions:fragile_item", // output
      //     ],
      //     "createastral:navigation_mechanism",
      //     [
      //       // input
      //       event.recipes.createDeploying("createastral:navigation_mechanism", [
      //         "techreborn:machine_parts",
      //         "techreborn:machine_parts",
      //       ]),
      //       event.recipes.createDeploying("createastral:navigation_mechanism", [
      //         "ad_astra:ostrum_plate",
      //         "ad_astra:ostrum_plate",
      //       ]),
      //       event.recipes.createPressing("createastral:navigation_mechanism", "createastral:navigation_mechanism"),
      //       event.recipes.createFilling("createastral:navigation_mechanism", [
      //         "createastral:navigation_mechanism",
      //         { fluid: "ad_astra:cryo_fuel", amount: BUCKET },
      //       ]),
      //       event.recipes.createPressing("createastral:navigation_mechanism", "createastral:navigation_mechanism"),
      //     ]
      //   )
      //   .transitionalItem("createastral:navigation_mechanism")
      //   .loops(4);

      createSequencedAssembly(event, {
        input: "minecraft:glass_bottle",
        transitional: "minecraft:glass_bottle",
        outputs: ["minecraft:dragon_breath"],
      })
        .addFillingStep({ fluid: "tconstruct:ender_slime", amount: BUCKET })
        .addDeployingStep("minecraft:chorus_fruit")
        .build();

      // event.recipes.create
      //   .sequenced_assembly(["minecraft:dragon_breath"], "minecraft:glass_bottle", [
      //     event.recipes.createFilling("minecraft:glass_bottle", [
      //       "minecraft:glass_bottle",
      //       { fluid: "tconstruct:ender_slime", amount: BUCKET },
      //     ]),
      //     event.recipes.createDeploying("minecraft:glass_bottle", ["minecraft:glass_bottle", "minecraft:chorus_fruit"]),
      //   ])
      //   .loops(1)
      //   .transitionalItem("minecraft:glass_bottle");
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

      // event.recipes.create
      //   .sequenced_assembly(
      //     [
      //       // begin
      //       "create:brass_casing", // output
      //     ],
      //     "create:copper_casing",
      //     [
      //       // input
      //       event.recipes.createDeploying("create:copper_casing", ["create:copper_casing", "createaddition:brass_rod"]),
      //       event.recipes.createFilling("create:copper_casing", [
      //         "create:copper_casing",
      //         { fluid: "tconstruct:molten_brass", amount: NUGGET },
      //       ]),
      //       event.recipes.createDeploying("create:copper_casing", ["create:copper_casing", "create:brass_sheet"]),
      //       event.recipes.createPressing("create:copper_casing", "create:copper_casing"),
      //     ]
      //   )
      //   .transitionalItem("createastral:incomplete_brass_casing")
      //   .loops(3);

      createSequencedAssembly(event, {
        input: "techreborn:basic_machine_frame",
        transitional: "createastral:incomplete_advanced_machine_frame",
        outputs: ["techreborn:advanced_machine_frame"],
      })
        .addDeployingStep("#c:lead_plates")
        .addFillingStep({ fluid: "kubejs:blast-resistant_cement", amount: 200 * mB })
        .addDeployingStep("#c:lead_plates")
        .build();

      // event.recipes.create
      //   .sequenced_assembly(
      //     [
      //       // begin
      //       "techreborn:advanced_machine_frame", // output
      //     ],
      //     "techreborn:basic_machine_frame",
      //     [
      //       // input
      //       event.recipes.createDeploying("techreborn:basic_machine_frame", [
      //         "techreborn:basic_machine_frame",
      //         "techreborn:lead_plate",
      //       ]),
      //       event.recipes.createFilling("techreborn:basic_machine_frame", [
      //         "techreborn:basic_machine_frame",
      //         { fluid: "kubejs:blast-resistant_cement", amount: 200 * mB },
      //       ]),
      //       event.recipes.createDeploying("techreborn:basic_machine_frame", [
      //         "techreborn:basic_machine_frame",
      //         "techreborn:lead_plate",
      //       ]),
      //     ]
      //   )
      //   .transitionalItem("createastral:incomplete_advanced_machine_frame")
      //   .loops(1);

      createSequencedAssembly(event, {
        input: "techreborn:advanced_machine_frame",
        transitional: "createastral:incomplete_industrial_machine_frame",
        outputs: ["techreborn:industrial_machine_frame"],
      })
        .addDeployingStep("ad_astra:ostrum_plate")
        .addDeployingStep("techreborn:machine_parts")
        .addDeployingStep("ad_astra:ostrum_plate")
        .build();

      // event.recipes.create
      //   .sequenced_assembly(
      //     [
      //       // begin
      //       "techreborn:industrial_machine_frame", // output
      //     ],
      //     "techreborn:advanced_machine_frame",
      //     [
      //       // input
      //       event.recipes.createDeploying("techreborn:advanced_machine_frame", [
      //         "techreborn:advanced_machine_frame",
      //         "ad_astra:ostrum_plate",
      //       ]),
      //       event.recipes.createDeploying("techreborn:advanced_machine_frame", [
      //         "techreborn:advanced_machine_frame",
      //         "techreborn:machine_parts",
      //       ]),
      //       event.recipes.createDeploying("techreborn:advanced_machine_frame", [
      //         "techreborn:advanced_machine_frame",
      //         "ad_astra:ostrum_plate",
      //       ]),
      //     ]
      //   )
      //   .transitionalItem("createastral:incomplete_industrial_machine_frame")
      //   .loops(1);

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

      // const transitional_lapis_sheet = "createastral:transitional_lapis_sheet";
      // event.recipes.create
      //   .sequenced_assembly(["create:integrated_circuit"], "create:lapis_sheet", [
      //     event.recipes.createFilling(transitional_lapis_sheet, [
      //       transitional_lapis_sheet,
      //       { fluid: "tconstruct:molten_silver", amount: BUCKET / 24 },
      //     ]),
      //     event.recipes.createDeploying(transitional_lapis_sheet, [
      //       transitional_lapis_sheet,
      //       "createaddition:copper_wire",
      //     ]),
      //     event.recipes.createDeploying(transitional_lapis_sheet, [
      //       transitional_lapis_sheet,
      //       "createaddition:copper_wire",
      //     ]),
      //     event.recipes.createPressing(transitional_lapis_sheet, transitional_lapis_sheet),
      //   ])
      //   .transitionalItem(transitional_lapis_sheet);

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

      // event.recipes.create
      //   .sequenced_assembly([Item.of("create:belt_connector", 6)], "minecraft:dried_kelp", [
      //     event.recipes.createDeploying("minecraft:dried_kelp", ["minecraft:dried_kelp", "techreborn:rubber"]),
      //     event.recipes.createPressing("minecraft:dried_kelp", "minecraft:dried_kelp"),
      //     event.recipes.createDeploying("minecraft:dried_kelp", ["minecraft:dried_kelp", "minecraft:dried_kelp"]),
      //     event.recipes.createPressing("minecraft:dried_kelp", "minecraft:dried_kelp"),
      //   ])
      //   .loops(3)
      //   .transitionalItem("minecraft:dried_kelp");

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

      // event.recipes.create
      //   .sequenced_assembly([Item.of("create:display_board", 6)], "create:electron_tube", [
      //     event.recipes.createDeploying("create:electron_tube", ["create:electron_tube", "create:belt_connector"]),
      //     event.recipes.createDeploying("create:electron_tube", ["create:electron_tube", "create:cogwheel"]),
      //     event.recipes.createDeploying("create:electron_tube", ["create:electron_tube", "#c:dyes"]),
      //   ])
      //   .loops(2)
      //   .transitionalItem("create:electron_tube");

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

      // event.recipes.create
      //   .sequenced_assembly(["ad_astra:calorite_engine"], "ad_astra:ostrum_engine", [
      //     event.recipes.createFilling("ad_astra:ostrum_engine", [
      //       "ad_astra:ostrum_engine",
      //       { fluid: "kubejs:molten_yttrium", amount: BUCKET },
      //     ]),
      //     event.recipes.createFilling("ad_astra:ostrum_engine", [
      //       "ad_astra:ostrum_engine",
      //       { fluid: "yttr:void", amount: BUCKET },
      //     ]),
      //     event.recipes.createDeploying("ad_astra:ostrum_engine", [
      //       "ad_astra:ostrum_engine",
      //       "techreborn:industrial_circuit",
      //     ]),
      //     event.recipes.createDeploying("ad_astra:ostrum_engine", [
      //       "ad_astra:ostrum_engine",
      //       "createastral:subatomic_ingot",
      //     ]),
      //     event.recipes.createPressing("ad_astra:ostrum_engine", "ad_astra:ostrum_engine"),
      //   ])
      //   .transitionalItem("ad_astra:ostrum_engine");

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

      // const inc_calc = "createastral:incomplete_calculation_processor";
      // event.recipes.create
      //   .sequenced_assembly(["ae2:calculation_processor"], "ae2:printed_silicon", [
      //     event.recipes.createDeploying(inc_calc, [inc_calc, "ae2:printed_calculation_processor"]),
      //     event.recipes.createDeploying(inc_calc, [inc_calc, "ae2:fluix_dust"]),
      //     event.recipes.createFilling(inc_calc, [inc_calc, { fluid: "kubejs:shimmer", amount: 8100 }]),
      //     event.recipes.createPressing(inc_calc, inc_calc),
      //   ])
      //   .transitionalItem(inc_calc)
      //   .loops(1);

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

      // const inc_eng = "createastral:incomplete_engineering_processor";
      // event.recipes.create
      //   .sequenced_assembly(["ae2:engineering_processor"], "ae2:printed_silicon", [
      //     event.recipes.createDeploying(inc_eng, [inc_eng, "ae2:printed_engineering_processor"]),
      //     event.recipes.createDeploying(inc_eng, [inc_eng, "ae2:fluix_dust"]),
      //     event.recipes.createFilling(inc_eng, [inc_eng, { fluid: "kubejs:shimmer", amount: 8100 }]),
      //     event.recipes.createPressing(inc_eng, inc_eng),
      //   ])
      //   .transitionalItem(inc_eng)
      //   .loops(1);

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

      // const inc_log = "createastral:incomplete_logic_processor";
      // event.recipes.create
      //   .sequenced_assembly(["ae2:logic_processor"], "ae2:printed_silicon", [
      //     event.recipes.createDeploying(inc_log, [inc_log, "ae2:printed_logic_processor"]),
      //     event.recipes.createDeploying(inc_log, [inc_log, "ae2:fluix_dust"]),
      //     event.recipes.createFilling(inc_log, [inc_log, { fluid: "kubejs:shimmer", amount: 8100 }]),
      //     event.recipes.createPressing(inc_log, inc_log),
      //   ])
      //   .transitionalItem(inc_log)
      //   .loops(1);

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

      // event.recipes.create
      //   .sequenced_assembly(["techreborn:industrial_circuit"], "techreborn:electronic_circuit", [
      //     event.recipes.createFilling("techreborn:electronic_circuit", [
      //       "techreborn:electronic_circuit",
      //       { fluid: "techreborn:lithium", amount: 4500 },
      //     ]),
      //     event.recipes.createPressing("techreborn:electronic_circuit", "techreborn:electronic_circuit"),
      //     event.recipes.createDeploying("techreborn:electronic_circuit", [
      //       "techreborn:electronic_circuit",
      //       "techreborn:machine_parts",
      //     ]),
      //     event.recipes.createDeploying("techreborn:electronic_circuit", [
      //       "techreborn:electronic_circuit",
      //       "createastral:calorite_pin",
      //     ]),
      //     event.recipes.createDeploying("techreborn:electronic_circuit", [
      //       "techreborn:electronic_circuit",
      //       "createastral:calorite_pin",
      //     ]),
      //   ])
      //   .transitionalItem("techreborn:electronic_circuit")
      //   .loops(9);

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

      // const inc_starshard = "createastral:incomplete_pure_star_shard";
      // event.recipes.create
      //   .sequenced_assembly(["createastral:pure_star_shard"], "createastral:star_shard", [
      //     event.recipes.createFilling(inc_starshard, [
      //       inc_starshard,
      //       { fluid: "kubejs:molten_yttrium", amount: INGOT / 2 },
      //     ]),
      //     event.recipes.createPressing(inc_starshard, inc_starshard),
      //     event.recipes.createDeploying(inc_starshard, [inc_starshard, "create:chromatic_compound"]),
      //     event.recipes.createPressing(inc_starshard, inc_starshard),
      //   ])
      //   .transitionalItem(inc_starshard)
      //   .loops(3);
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

      // const inc_casing = "createastral:incomplete_copper_casing";
      // event.recipes.create
      //   .sequenced_assembly(
      //     [
      //       // begin
      //       "create:copper_casing", // output
      //     ],
      //     "create:andesite_casing",
      //     [
      //       // input
      //       event.recipes.createDeploying(inc_casing, [inc_casing, "techreborn:rubber"]),
      //       event.recipes.createDeploying(inc_casing, [inc_casing, "create:copper_sheet"]),
      //     ]
      //   )
      //   .transitionalItem(inc_casing)
      //   .loops(3);

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

      // const inc_mf = "createastral:incomplete_basic_machine_frame";
      // event.recipes.create
      //   .sequenced_assembly(
      //     [
      //       // begin
      //       "techreborn:basic_machine_frame", // output
      //     ],
      //     "create:copper_casing",
      //     [
      //       // input
      //       event.recipes.createFilling(inc_mf, [inc_mf, { fluid: "tconstruct:molten_silver", amount: INGOT }]),
      //       event.recipes.createDeploying(inc_mf, [inc_mf, "techreborn:rubber"]),
      //       event.recipes.createPressing(inc_mf, inc_mf), //yeah!
      //     ]
      //   )
      //   .transitionalItem(inc_mf)
      //   .loops(4);
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

      // event.recipes.create
      //   .sequenced_assembly(
      //     [
      //       // begin
      //       "passivepiglins:piglin_coin", // output
      //     ],
      //     Item.of("create:golden_sheet"),
      //     [
      //       // input
      //       event.recipes.createCutting("create:golden_sheet", "create:golden_sheet").processingTime(30),
      //       event.recipes.createDeploying("create:golden_sheet", ["minecraft:gold_nugget", "minecraft:gold_nugget"]),
      //       event.recipes.createDeploying("create:golden_sheet", [
      //         "minecraft:piglin_banner_pattern",
      //         "minecraft:piglin_banner_pattern",
      //       ]),
      //       event.recipes.createPressing("create:golden_sheet", "create:golden_sheet").processingTime(75),
      //     ]
      //   )
      //   .transitionalItem("createastral:coin")
      //   .loops(1);

      createSequencedAssembly(event, {
        input: "createastral:golden_bowl",
        transitional: "createastral:filled_golden_bowl",
        outputs: ["passivepiglins:piglin_fortune"],
      })
        .addFillingStep({ fluid: "techreborn:methane", amount: BUCKET / 27 })
        .addDeployingStep("techreborn:netherrack_dust")
        .addDeployingStep("minecraft:crimson_fungus")
        .build();

      // event.recipes.create
      //   .sequenced_assembly(
      //     [
      //       // begin
      //       "passivepiglins:piglin_fortune", // output
      //     ],
      //     Item.of("createastral:golden_bowl"),
      //     [
      //       // input
      //       event.recipes
      //         .createFilling("ad_astra:iron_plate", [
      //           "ad_astra:iron_plate",
      //           { fluid: "techreborn:methane", amount: 3000 },
      //         ])
      //         .processingTime(75), //fill
      //       event.recipes.createDeploying("create:golden_sheet", [
      //         "techreborn:netherrack_dust",
      //         "techreborn:netherrack_dust",
      //       ]),
      //       event.recipes.createDeploying("create:golden_sheet", [
      //         "minecraft:crimson_fungus",
      //         "minecraft:crimson_fungus",
      //       ]),
      //     ]
      //   )
      //   .transitionalItem("createastral:filled_golden_bowl")
      //   .loops(1);

      createSequencedAssembly(event, {
        input: "minecraft:gold_ingot",
        transitional: "minecraft:gold_ingot",
        outputs: ["passivepiglins:piglin_totem"],
      })
        .addDeployingStep("minecraft:gold_nugget")
        .addDeployingStep("createastral:golden_pin")
        .addDeployingStep("createastral:golden_pin")
        .build();

      // event.recipes.create
      //   .sequenced_assembly(
      //     [
      //       // begin
      //       "passivepiglins:piglin_totem", // output
      //     ],
      //     Item.of("minecraft:gold_ingot"),
      //     [
      //       // input
      //       event.recipes.createDeploying("minecraft:gold_ingot", ["minecraft:gold_nugget", "minecraft:gold_nugget"]),
      //       event.recipes.createDeploying("minecraft:gold_ingot", [
      //         "createastral:golden_pin",
      //         "createastral:golden_pin",
      //       ]),
      //       event.recipes.createDeploying("minecraft:gold_ingot", [
      //         "createastral:golden_pin",
      //         "createastral:golden_pin",
      //       ]),
      //     ]
      //   )
      //   .transitionalItem("minecraft:gold_ingot")
      //   .loops(1);
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

      // event.recipes.create
      //   .sequenced_assembly(
      //     [
      //       // begin
      //       "vinery:chenet_wine", // output
      //     ],
      //     "vinery:red_grapejuice_wine_bottle",
      //     [
      //       // input
      //       event.recipes.createDeploying("kubejs:incomplete_chenet_wine", [
      //         "kubejs:incomplete_chenet_wine",
      //         "minecraft:sweet_berries",
      //       ]),
      //       event.recipes.createFilling("kubejs:incomplete_chenet_wine", [
      //         "kubejs:incomplete_chenet_wine",
      //         { fluid: "kubejs:red_grape_juice", amount: 250 * mB },
      //       ]),
      //       event.recipes.createDeploying("kubejs:incomplete_chenet_wine", [
      //         "kubejs:incomplete_chenet_wine",
      //         "minecraft:sweet_berries",
      //       ]),
      //     ]
      //   )
      //   .transitionalItem("kubejs:incomplete_chenet_wine")
      //   .loops(1);

      createSequencedAssembly(event, {
        input: "vinery:red_grapejuice_wine_bottle",
        transitional: "kubejs:incomplete_king_danis_wine",
        outputs: ["vinery:king_danis_wine"],
      })
        .addFillingStep({ fluid: "kubejs:red_grape_juice", amount: 250 * mB })
        .addFillingStep({ fluid: "create:honey", amount: 250 * mB })
        .addFillingStep({ fluid: "create:honey", amount: 250 * mB })
        .build();

      // event.recipes.create
      //   .sequenced_assembly(
      //     [
      //       // begin
      //       "vinery:king_danis_wine", // output
      //     ],
      //     "vinery:red_grapejuice_wine_bottle",
      //     [
      //       // input
      //       event.recipes.createFilling("kubejs:incomplete_king_danis_wine", [
      //         "kubejs:incomplete_king_danis_wine",
      //         { fluid: "kubejs:red_grape_juice", amount: 250 * mB },
      //       ]),
      //       event.recipes.createFilling("kubejs:incomplete_king_danis_wine", [
      //         "kubejs:incomplete_king_danis_wine",
      //         { fluid: "create:honey", amount: 250 * mB },
      //       ]),
      //       event.recipes.createFilling("kubejs:incomplete_king_danis_wine", [
      //         "kubejs:incomplete_king_danis_wine",
      //         { fluid: "create:honey", amount: 250 * mB },
      //       ]),
      //     ]
      //   )
      //   .transitionalItem("kubejs:incomplete_king_danis_wine")
      //   .loops(1);

      createSequencedAssembly(event, {
        input: "vinery:red_grapejuice_wine_bottle",
        transitional: "kubejs:incomplete_noir_wine",
        outputs: ["vinery:noir_wine"],
      })
        .addDeployingStep("minecraft:kelp")
        .addFillingStep({ fluid: "kubejs:red_grape_juice", amount: 250 * mB })
        .addDeployingStep("minecraft:kelp")
        .build();

      // event.recipes.create
      //   .sequenced_assembly(
      //     [
      //       // begin
      //       "vinery:noir_wine", // output
      //     ],
      //     "vinery:red_grapejuice_wine_bottle",
      //     [
      //       // input
      //       event.recipes.createDeploying("kubejs:incomplete_noir_wine", [
      //         "kubejs:incomplete_noir_wine",
      //         "minecraft:kelp",
      //       ]),
      //       event.recipes.createFilling("kubejs:incomplete_noir_wine", [
      //         "kubejs:incomplete_noir_wine",
      //         { fluid: "kubejs:red_grape_juice", amount: 250 * mB },
      //       ]),
      //       event.recipes.createDeploying("kubejs:incomplete_noir_wine", [
      //         "kubejs:incomplete_noir_wine",
      //         "minecraft:kelp",
      //       ]),
      //     ]
      //   )
      //   .transitionalItem("kubejs:incomplete_noir_wine")
      //   .loops(1);

      createSequencedAssembly(event, {
        input: "vinery:red_grapejuice_wine_bottle",
        transitional: "kubejs:incomplete_bolvar_wine",
        outputs: ["vinery:bolvar_wine"],
      })
        .addFillingStep({ fluid: "create:honey", amount: 250 * mB })
        .addFillingStep({ fluid: "kubejs:red_grape_juice", amount: 250 * mB })
        .addDeployingStep("vinery:cherry")
        .build();

      // event.recipes.create
      //   .sequenced_assembly(
      //     [
      //       // begin
      //       "vinery:bolvar_wine", // output
      //     ],
      //     "vinery:red_grapejuice_wine_bottle",
      //     [
      //       // input
      //       event.recipes.createFilling("kubejs:incomplete_bolvar_wine", [
      //         "kubejs:incomplete_bolvar_wine",
      //         { fluid: "create:honey", amount: 250 * mB },
      //       ]),
      //       event.recipes.createFilling("kubejs:incomplete_bolvar_wine", [
      //         "kubejs:incomplete_bolvar_wine",
      //         { fluid: "kubejs:red_grape_juice", amount: 250 * mB },
      //       ]),
      //       event.recipes.createDeploying("kubejs:incomplete_bolvar_wine", [
      //         "kubejs:incomplete_bolvar_wine",
      //         "vinery:cherry",
      //       ]),
      //     ]
      //   )
      //   .transitionalItem("kubejs:incomplete_bolvar_wine")
      //   .loops(1);

      createSequencedAssembly(event, {
        input: "vinery:red_grapejuice_wine_bottle",
        transitional: "kubejs:incomplete_cherry_wine",
        outputs: ["vinery:cherry_wine"],
      })
        .addDeployingStep("vinery:cherry")
        .addFillingStep({ fluid: "kubejs:red_grape_juice", amount: 250 * mB })
        .addDeployingStep("vinery:cherry")
        .build();

      // event.recipes.create
      //   .sequenced_assembly(
      //     [
      //       // begin
      //       "vinery:cherry_wine", // output
      //     ],
      //     "vinery:red_grapejuice_wine_bottle",
      //     [
      //       // input
      //       event.recipes.createDeploying("kubejs:incomplete_cherry_wine", [
      //         "kubejs:incomplete_cherry_wine",
      //         "vinery:cherry",
      //       ]),
      //       event.recipes.createFilling("kubejs:incomplete_cherry_wine", [
      //         "kubejs:incomplete_cherry_wine",
      //         { fluid: "kubejs:red_grape_juice", amount: 250 * mB },
      //       ]),
      //       event.recipes.createDeploying("kubejs:incomplete_cherry_wine", [
      //         "kubejs:incomplete_cherry_wine",
      //         "vinery:cherry",
      //       ]),
      //     ]
      //   )
      //   .transitionalItem("kubejs:incomplete_cherry_wine")
      //   .loops(1);

      createSequencedAssembly(event, {
        input: "vinery:red_grapejuice_wine_bottle",
        transitional: "kubejs:incomplete_jellie_wine",
        outputs: ["vinery:jellie_wine"],
      })
        .addDeployingStep("minecraft:golden_apple")
        .addFillingStep({ fluid: "kubejs:white_grape_juice", amount: 250 * mB })
        .addFillingStep({ fluid: "create:honey", amount: 250 * mB })
        .build();

      // event.recipes.create
      //   .sequenced_assembly(
      //     [
      //       // begin
      //       "vinery:jellie_wine", // output
      //     ],
      //     "vinery:red_grapejuice_wine_bottle",
      //     [
      //       // input
      //       event.recipes.createDeploying("kubejs:incomplete_jellie_wine", [
      //         "kubejs:incomplete_jellie_wine",
      //         "minecraft:golden_apple",
      //       ]),
      //       event.recipes.createFilling("kubejs:incomplete_jellie_wine", [
      //         "kubejs:incomplete_jellie_wine",
      //         { fluid: "kubejs:white_grape_juice", amount: 250 * mB },
      //       ]),
      //       event.recipes.createFilling("kubejs:incomplete_jellie_wine", [
      //         "kubejs:incomplete_jellie_wine",
      //         { fluid: "create:honey", amount: 250 * mB },
      //       ]),
      //     ]
      //   )
      //   .transitionalItem("kubejs:incomplete_jellie_wine")
      //   .loops(1);

      createSequencedAssembly(event, {
        input: "vinery:white_grapejuice_wine_bottle",
        transitional: "kubejs:incomplete_clark_wine",
        outputs: ["vinery:clark_wine"],
      })
        .addDeployingStep("minecraft:sweet_berries")
        .addFillingStep({ fluid: "kubejs:white_grape_juice", amount: 250 * mB })
        .addDeployingStep("minecraft:sweet_berries")
        .build();

      // event.recipes.create
      //   .sequenced_assembly(
      //     [
      //       // begin
      //       "vinery:clark_wine", // output
      //     ],
      //     "vinery:white_grapejuice_wine_bottle",
      //     [
      //       // input
      //       event.recipes.createDeploying("kubejs:incomplete_clark_wine", [
      //         "kubejs:incomplete_clark_wine",
      //         "minecraft:sweet_berries",
      //       ]),
      //       event.recipes.createFilling("kubejs:incomplete_clark_wine", [
      //         "kubejs:incomplete_clark_wine",
      //         { fluid: "kubejs:white_grape_juice", amount: 250 * mB },
      //       ]),
      //       event.recipes.createDeploying("kubejs:incomplete_clark_wine", [
      //         "kubejs:incomplete_clark_wine",
      //         "minecraft:sweet_berries",
      //       ]),
      //     ]
      //   )
      //   .transitionalItem("kubejs:incomplete_clark_wine")
      //   .loops(1);

      createSequencedAssembly(event, {
        input: "vinery:white_grapejuice_wine_bottle",
        transitional: "kubejs:incomplete_mellohi_wine",
        outputs: ["vinery:mellohi_wine"],
      })
        .addFillingStep({ fluid: "create:honey", amount: 250 * mB })
        .addFillingStep({ fluid: "create:honey", amount: 250 * mB })
        .addFillingStep({ fluid: "kubejs:white_grape_juice", amount: 250 * mB })
        .build();

      // event.recipes.create
      //   .sequenced_assembly(
      //     [
      //       // begin
      //       "vinery:mellohi_wine", // output
      //     ],
      //     "vinery:white_grapejuice_wine_bottle",
      //     [
      //       // input
      //       event.recipes.createFilling("kubejs:incomplete_mellohi_wine", [
      //         "kubejs:incomplete_mellohi_wine",
      //         { fluid: "create:honey", amount: 250 * mB },
      //       ]),
      //       event.recipes.createFilling("kubejs:incomplete_mellohi_wine", [
      //         "kubejs:incomplete_mellohi_wine",
      //         { fluid: "create:honey", amount: 250 * mB },
      //       ]),
      //       event.recipes.createFilling("kubejs:incomplete_mellohi_wine", [
      //         "kubejs:incomplete_mellohi_wine",
      //         { fluid: "kubejs:white_grape_juice", amount: 250 * mB },
      //       ]),
      //     ]
      //   )
      //   .transitionalItem("kubejs:incomplete_mellohi_wine")
      //   .loops(1);

      createSequencedAssembly(event, {
        input: "vinery:white_grapejuice_wine_bottle",
        transitional: "kubejs:incomplete_solaris_wine",
        outputs: ["vinery:solaris_wine"],
      })
        .addFillingStep({ fluid: "kubejs:white_grape_juice", amount: 250 * mB })
        .addDeployingStep("minecraft:sweet_berries")
        .addFillingStep({ fluid: "create:honey", amount: 250 * mB })
        .build();

      // event.recipes.create
      //   .sequenced_assembly(
      //     [
      //       // begin
      //       "vinery:solaris_wine", // output
      //     ],
      //     "vinery:white_grapejuice_wine_bottle",
      //     [
      //       // input
      //       event.recipes.createFilling("kubejs:incomplete_solaris_wine", [
      //         "kubejs:incomplete_solaris_wine",
      //         { fluid: "kubejs:white_grape_juice", amount: 250 * mB },
      //       ]),
      //       event.recipes.createDeploying("kubejs:incomplete_solaris_wine", [
      //         "kubejs:incomplete_solaris_wine",
      //         "minecraft:sweet_berries",
      //       ]),
      //       event.recipes.createFilling("kubejs:incomplete_solaris_wine", [
      //         "kubejs:incomplete_solaris_wine",
      //         { fluid: "create:honey", amount: 250 * mB },
      //       ]),
      //     ]
      //   )
      //   .transitionalItem("kubejs:incomplete_solaris_wine")
      //   .loops(1);

      createSequencedAssembly(event, {
        input: "vinery:wine_bottle",
        transitional: "kubejs:incomplete_aegis_wine",
        outputs: ["vinery:aegis_wine"],
      })
        .addDeployingStep("minecraft:sugar")
        .addFillingStep({ fluid: "minecraft:water", amount: 1000 * mB })
        .addDeployingStep("minecraft:kelp")
        .build();

      // event.recipes.create
      //   .sequenced_assembly(
      //     [
      //       // begin
      //       "vinery:aegis_wine", // output
      //     ],
      //     "vinery:wine_bottle",
      //     [
      //       // input
      //       event.recipes.createDeploying("kubejs:incomplete_aegis_wine", [
      //         "kubejs:incomplete_aegis_wine",
      //         "minecraft:sugar",
      //       ]),
      //       event.recipes.createFilling("kubejs:incomplete_aegis_wine", [
      //         "kubejs:incomplete_aegis_wine",
      //         { fluid: "minecraft:water", amount: 1000 * mB },
      //       ]),
      //       event.recipes.createDeploying("kubejs:incomplete_aegis_wine", [
      //         "kubejs:incomplete_aegis_wine",
      //         "minecraft:kelp",
      //       ]),
      //     ]
      //   )
      //   .transitionalItem("kubejs:incomplete_aegis_wine")
      //   .loops(1);

      createSequencedAssembly(event, {
        input: "vinery:wine_bottle",
        transitional: "kubejs:incomplete_apple_wine",
        outputs: ["vinery:apple_wine"],
      })
        .addDeployingStep("minecraft:apple")
        .addFillingStep({ fluid: "create:honey", amount: 250 * mB })
        .addDeployingStep("minecraft:apple")
        .build();

      // event.recipes.create
      //   .sequenced_assembly(
      //     [
      //       // begin
      //       "vinery:apple_wine", // output
      //     ],
      //     "vinery:wine_bottle",
      //     [
      //       // input
      //       event.recipes.createDeploying("kubejs:incomplete_apple_wine", [
      //         "kubejs:incomplete_apple_wine",
      //         "minecraft:apple",
      //       ]),
      //       event.recipes.createFilling("kubejs:incomplete_apple_wine", [
      //         "kubejs:incomplete_apple_wine",
      //         { fluid: "create:honey", amount: 250 * mB },
      //       ]),
      //       event.recipes.createDeploying("kubejs:incomplete_apple_wine", [
      //         "kubejs:incomplete_apple_wine",
      //         "minecraft:apple",
      //       ]),
      //     ]
      //   )
      //   .transitionalItem("kubejs:incomplete_apple_wine")
      //   .loops(1);

      createSequencedAssembly(event, {
        input: "vinery:wine_bottle",
        transitional: "kubejs:incomplete_kelp_cider",
        outputs: ["vinery:kelp_cider"],
      })
        .addDeployingStep("minecraft:kelp")
        .addDeployingStep("minecraft:kelp")
        .addDeployingStep("minecraft:apple")
        .build();

      // event.recipes.create
      //   .sequenced_assembly(
      //     [
      //       // begin
      //       "vinery:kelp_cider", // output
      //     ],
      //     "vinery:wine_bottle",
      //     [
      //       // input
      //       event.recipes.createDeploying("kubejs:incomplete_kelp_cider", [
      //         "kubejs:incomplete_kelp_cider",
      //         "minecraft:kelp",
      //       ]),
      //       event.recipes.createDeploying("kubejs:incomplete_kelp_cider", [
      //         "kubejs:incomplete_kelp_cider",
      //         "minecraft:kelp",
      //       ]),
      //       event.recipes.createDeploying("kubejs:incomplete_kelp_cider", [
      //         "kubejs:incomplete_kelp_cider",
      //         "minecraft:apple",
      //       ]),
      //     ]
      //   )
      //   .transitionalItem("kubejs:incomplete_kelp_cider")
      //   .loops(1);

      createSequencedAssembly(event, {
        input: "vinery:wine_bottle",
        transitional: "kubejs:incomplete_apple_cider",
        outputs: ["vinery:apple_cider"],
      })
        .addDeployingStep("#minecraft:straw")
        .addDeployingStep("minecraft:apple")
        .addDeployingStep("minecraft:apple")
        .build();

      // event.recipes.create
      //   .sequenced_assembly(
      //     [
      //       // begin
      //       "vinery:apple_cider", // output
      //     ],
      //     "vinery:wine_bottle",
      //     [
      //       // input
      //       event.recipes.createDeploying("kubejs:incomplete_apple_cider", [
      //         "kubejs:incomplete_apple_cider",
      //         "#minecraft:straw",
      //       ]),
      //       event.recipes.createDeploying("kubejs:incomplete_apple_cider", [
      //         "kubejs:incomplete_apple_cider",
      //         "minecraft:apple",
      //       ]),
      //       event.recipes.createDeploying("kubejs:incomplete_apple_cider", [
      //         "kubejs:incomplete_apple_cider",
      //         "minecraft:apple",
      //       ]),
      //     ]
      //   )
      //   .transitionalItem("kubejs:incomplete_apple_cider")
      //   .loops(1);
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

    // event.recipes.create
    //   .sequenced_assembly(
    //     [
    //       // begin
    //       "immersive_aircraft:engine", // output
    //     ],
    //     "create:precision_mechanism",
    //     [
    //       // input
    //       event.recipes.createDeploying("create:incomplete_precision_mechanism", [
    //         "create:incomplete_precision_mechanism",
    //         "immersive_aircraft:boiler",
    //       ]),
    //       event.recipes.createDeploying("create:incomplete_precision_mechanism", [
    //         "create:incomplete_precision_mechanism",
    //         "create:blaze_burner",
    //       ]),
    //       event.recipes.createDeploying("create:incomplete_precision_mechanism", [
    //         "create:incomplete_precision_mechanism",
    //         "createaddition:capacitor",
    //       ]),
    //     ]
    //   )
    //   .transitionalItem("create:incomplete_precision_mechanism")
    //   .loops(2);

    createSequencedAssembly(event, {
      input: "tconstruct:slimesteel_nugget",
      transitional: "create:tree_fertilizer", // WTF?
      outputs: ["automobility:launch_gel"],
    })
      .addPressingStep()
      .loops(125)
      .build();

    // event.recipes.create
    //   .sequenced_assembly(["automobility:launch_gel"], "tconstruct:slimesteel_nugget", [
    //     event.recipes.createPressing("tconstruct:slimesteel_nugget", "tconstruct:slimesteel_nugget"),
    //   ])
    //   .transitionalItem("create:tree_fertilizer")
    //   .loops(125);

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

    // event.recipes.create
    //   .sequenced_assembly(["createastral:navigation_mechanism"], "phonos:redstone_chip", [
    //     event.recipes.createFilling("phonos:redstone_chip", [
    //       "phonos:redstone_chip",
    //       {
    //         fluid: "tconstruct:molten_cobalt",
    //         amount: 1350,
    //       },
    //     ]),
    //     event.recipes.createDeploying("phonos:redstone_chip", ["phonos:redstone_chip", "techreborn:electrum_nugget"]),
    //     event.recipes.createPressing("phonos:redstone_chip", "phonos:redstone_chip"),
    //   ])
    //   .transitionalItem("createastral:incomplete_navigation_mechanism")
    //   .loops(30);

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

    // event.recipes.create
    //   .sequenced_assembly(
    //     [
    //       // begin
    //       "minecraft:ender_eye", // output
    //     ],
    //     "minecraft:ender_pearl",
    //     [
    //       // input
    //       event.recipes.createDeploying("minecraft:ender_pearl", ["minecraft:blaze_powder", "minecraft:blaze_powder"]),
    //       event.recipes.createDeploying("minecraft:ender_pearl", [
    //         "create:powdered_obsidian",
    //         "create:powdered_obsidian",
    //       ]),
    //       event.recipes.createPressing("minecraft:ender_pearl", "minecraft:ender_pearl"), //yeah
    //       event.recipes.createFilling("minecraft:ender_pearl", [
    //         "minecraft:ender_pearl",
    //         { fluid: "minecraft:lava", amount: 250 * mB },
    //       ]), //fill 1/4 bucket lava
    //       event.recipes.createPressing("minecraft:ender_pearl", "minecraft:ender_pearl"),
    //     ]
    //   )
    //   .transitionalItem("minecraft:ender_pearl")
    //   .loops(3);

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

    // const inc_redstone_chip = "createastral:incomplete_redstone_chip";
    // event.recipes.create
    //   .sequenced_assembly(
    //     [
    //       // begin
    //       "phonos:redstone_chip", // output
    //     ],
    //     "create:electron_tube",
    //     [
    //       // input
    //       event.recipes.createFilling("create:electron_tube", [
    //         inc_redstone_chip,
    //         { fluid: "tconstruct:molten_copper", amount: 3375 },
    //       ]),
    //       event.recipes.createDeploying(inc_redstone_chip, [inc_redstone_chip, "#c:wires"]), //fill obsid
    //       event.recipes.createPressing(inc_redstone_chip, "#c:wires"), //yeah
    //     ]
    //   )
    //   .transitionalItem(inc_redstone_chip)
    //   .loops(12);

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

    // event.recipes.create
    //   .sequenced_assembly(
    //     [
    //       // begin
    //       "createastral:shimmer_amplifier", // output
    //     ],
    //     "createbigcannons:nethersteel_screw_breech",
    //     [
    //       // input
    //       event.recipes.createFilling("createbigcannons:nethersteel_screw_breech", [
    //         "createbigcannons:nethersteel_screw_breech",
    //         { fluid: "kubejs:shimmer", amount: 9000 },
    //       ]),
    //       event.recipes.createDeploying("createbigcannons:nethersteel_screw_breech", [
    //         "createbigcannons:nethersteel_screw_breech",
    //         "kubejs:fire_resistant_fragile_sheet_block",
    //       ]),
    //       event.recipes.createFilling("createbigcannons:nethersteel_screw_breech", [
    //         "createbigcannons:nethersteel_screw_breech",
    //         { fluid: "techreborn:lithium", amount: 3000 },
    //       ]),
    //       event.recipes.createFilling("createbigcannons:nethersteel_screw_breech", [
    //         "createbigcannons:nethersteel_screw_breech",
    //         { fluid: "techreborn:silicon", amount: 3000 },
    //       ]),
    //     ]
    //   )
    //   .transitionalItem("createastral:incomplete_shimmer_amplifier")
    //   .loops(6);

    createSequencedAssembly(event, {
      input: "minecraft:black_dye",
      transitional: "minecraft:black_dye",
      outputs: ["minecraft:ink_sac"],
    })
      .addDeployingStep("minecraft:paper")
      .loops(2)
      .build();

    // event.recipes.create
    //   .sequenced_assembly(
    //     [
    //       // begin
    //       "minecraft:ink_sac", // output
    //     ],
    //     "minecraft:black_dye",
    //     [event.recipes.createDeploying("minecraft:black_dye", ["minecraft:black_dye", "minecraft:paper"])]
    //   )
    //   .transitionalItem("minecraft:black_dye")
    //   .loops(2);

    createSequencedAssembly(event, {
      input: "create:iron_sheet",
      transitional: "createastral:incomplete_dash_panel",
      outputs: ["automobility:dash_panel"],
    })
      .addFillingStep({ fluid: "kubejs:shimmer", amount: BUCKET / 9 })
      .addPressingStep()
      .loops(3)
      .build();

    // const inc_dash_panel = "createastral:incomplete_dash_panel";
    // //Dash panel
    // event.recipes.create
    //   .sequenced_assembly(["automobility:dash_panel"], "create:iron_sheet", [
    //     event.recipes
    //       .createFilling(inc_dash_panel, [inc_dash_panel, { fluid: "kubejs:shimmer", amount: INGOT }])
    //       .processingTime(75), //fill
    //     event.recipes.createPressing(inc_dash_panel, inc_dash_panel).processingTime(75),
    //   ])
    //   .transitionalItem(inc_dash_panel)
    //   .loops(3);

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

    // const inc_refining_agent = "createastral:incomplete_refining_agent";
    // event.recipes.create
    //   .sequenced_assembly(["createastral:refining_agent"], "ae2:fluix_dust", [
    //     event.recipes.createFilling(inc_refining_agent, [
    //       inc_refining_agent,
    //       { fluid: "techreborn:nitrogen", amount: 9000 },
    //     ]),
    //     event.recipes.createFilling(inc_refining_agent, [
    //       inc_refining_agent,
    //       { fluid: "techreborn:biofuel", amount: 9000 },
    //     ]),
    //     event.recipes.createPressing(inc_refining_agent, "ae2:fluix_dust"),
    //   ])
    //   .transitionalItem(inc_refining_agent)
    //   .loops(3);
    // Green's bloodyfile.js for meat stuff

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

    // event.recipes.create // Dough to MEAT
    //   .sequenced_assembly(
    //     ["createastral:seitan"],
    //     ["create:dough"],
    //     [
    //       event.recipes.createFilling("create:dough", ["create:dough", { fluid: "minecraft:water", amount: 100 * mB }]),
    //       event.recipes.createPressing("create:dough", "create:dough"),
    //       event.recipes.createCutting("create:dough", "create:dough"),
    //     ]
    //   )
    //   .transitionalItem("create:dough")
    //   .loops(2);

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

    // event.recipes.create
    //   .sequenced_assembly(
    //     ["minecraft:porkchop"],
    //     ["createastral:seitan"],
    //     [
    //       event.recipes.createDeploying("createastral:protopork", ["createastral:protopork", "minecraft:rotten_flesh"]),
    //       event.recipes.createFilling("createastral:protopork", [
    //         "createastral:protopork",
    //         { fluid: "tconstruct:blood", amount: 100 * mB },
    //       ]),
    //       event.recipes.createPressing("createastral:protopork", "createastral:protopork"),
    //       event.recipes.createCutting("createastral:protopork", "createastral:protopork"),
    //     ]
    //   )
    //   .transitionalItem("createastral:protopork")
    //   .loops(1);

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

    // event.recipes.create
    //   .sequenced_assembly(
    //     ["minecraft:mutton"],
    //     ["createastral:seitan"],
    //     [
    //       event.recipes.createDeploying("createastral:protomutton", ["createastral:protomutton", "minecraft:string"]),
    //       event.recipes.createFilling("createastral:protomutton", [
    //         "createastral:protomutton",
    //         { fluid: "tconstruct:blood", amount: 100 * mB },
    //       ]),
    //       event.recipes.createPressing("createastral:protomutton", "createastral:protomutton"),
    //       event.recipes.createCutting("createastral:protomutton", "createastral:protomutton"),
    //     ]
    //   )
    //   .transitionalItem("createastral:protomutton")
    //   .loops(1);

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

    // event.recipes.create
    //   .sequenced_assembly(
    //     ["minecraft:beef"],
    //     ["createastral:seitan"],
    //     [
    //       event.recipes.createDeploying("createastral:protobeef", ["createastral:protobeef", "minecraft:moss_carpet"]),
    //       event.recipes.createFilling("createastral:protobeef", [
    //         "createastral:protobeef",
    //         { fluid: "tconstruct:blood", amount: 100 * mB },
    //       ]),
    //       event.recipes.createPressing("createastral:protobeef", "createastral:protobeef"),
    //       event.recipes.createCutting("createastral:protobeef", "createastral:protobeef"),
    //     ]
    //   )
    //   .transitionalItem("createastral:protobeef")
    //   .loops(1);

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

    // event.recipes.create
    //   .sequenced_assembly(
    //     ["minecraft:chicken"],
    //     ["createastral:seitan"],
    //     [
    //       event.recipes.createDeploying("createastral:protochicken", [
    //         "createastral:protochicken",
    //         "minecraft:wheat_seeds",
    //       ]),
    //       event.recipes.createFilling("createastral:protochicken", [
    //         "createastral:protochicken",
    //         { fluid: "tconstruct:blood", amount: 100 * mB },
    //       ]),
    //       event.recipes.createPressing("createastral:protochicken", "createastral:protochicken"),
    //       event.recipes.createCutting("createastral:protochicken", "createastral:protochicken"),
    //     ]
    //   )
    //   .transitionalItem("createastral:protochicken")
    //   .loops(1);

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

    // event.recipes.create
    //   .sequenced_assembly(
    //     ["minecraft:rabbit"],
    //     ["createastral:seitan"],
    //     [
    //       event.recipes.createDeploying("createastral:protorabbit", ["createastral:protorabbit", "minecraft:carrot"]),
    //       event.recipes.createFilling("createastral:protorabbit", [
    //         "createastral:protorabbit",
    //         { fluid: "tconstruct:blood", amount: 100 * mB },
    //       ]),
    //       event.recipes.createPressing("createastral:protorabbit", "createastral:protorabbit"),
    //       event.recipes.createCutting("createastral:protorabbit", "createastral:protorabbit"),
    //     ]
    //   )
    //   .transitionalItem("createastral:protorabbit")
    //   .loops(1);

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

    // event.recipes.create
    //   .sequenced_assembly(
    //     ["minecraft:egg"],
    //     ["createastral:seitan"],
    //     [
    //       event.recipes.createDeploying("createastral:seitan", ["createastral:seitan", "techreborn:calcite_dust"]),
    //       event.recipes.createFilling("createastral:seitan", [
    //         "createastral:seitan",
    //         { fluid: "tconstruct:earth_slime", amount: 10 * mB },
    //       ]),
    //       event.recipes.createPressing("createastral:seitan", "createastral:seitan"),
    //       event.recipes.createFilling("createastral:seitan", [
    //         "createastral:seitan",
    //         { fluid: "kubejs:shimmer", amount: 10 * mB }, //For the bit of magic required to create life
    //       ]),
    //     ]
    //   )
    //   .transitionalItem("createastral:seitan")
    //   .loops(1);

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

    // event.recipes.create
    //   .sequenced_assembly(
    //     //true DIY Ham
    //     ["farmersdelight:ham"],
    //     ["minecraft:porkchop"],
    //     [
    //       event.recipes.createDeploying("minecraft:porkchop", ["minecraft:porkchop", "minecraft:bone"]),
    //       event.recipes.createDeploying("minecraft:porkchop", ["minecraft:porkchop", "createastral:seitan"]),
    //       event.recipes.createFilling("minecraft:porkchop", [
    //         "minecraft:porkchop",
    //         { fluid: "tconstruct:blood", amount: 100 * mB },
    //       ]),
    //       event.recipes.createPressing("minecraft:porkchop", "minecraft:porkchop"),
    //     ]
    //   )
    //   .transitionalItem("createastral:seitan")
    //   .loops(1);

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

    // event.recipes.create
    //   .sequenced_assembly(
    //     // Inksack for inky fun
    //     [Item.of("minecraft:ink_sac", 2)],
    //     ["createastral:seitan"],
    //     [
    //       event.recipes.createDeploying("createastral:seitan", ["createastral:seitan", "minecraft:black_dye"]),
    //       event.recipes.createFilling("createastral:seitan", [
    //         "createastral:seitan",
    //         { fluid: "minecraft:water", amount: 500 * mB },
    //       ]),
    //       event.recipes.createDeploying("createastral:seitan", ["createastral:seitan", "minecraft:black_dye"]),
    //       event.recipes.createFilling("createastral:seitan", [
    //         "createastral:seitan",
    //         { fluid: "minecraft:water", amount: 500 * mB },
    //       ]),
    //       event.recipes.createPressing("createastral:seitan", "createastral:seitan"),
    //     ]
    //   )
    //   .transitionalItem("createastral:seitan")
    //   .loops(1);

    // If you need some head, drill some bone
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

    // event.recipes.create
    //   .sequenced_assembly(
    //     ["tconstruct:blaze_head"],
    //     ["minecraft:skeleton_skull"],
    //     [
    //       event.recipes.createDeploying("createastral:incomplete_blaze_head", [
    //         "createastral:incomplete_blaze_head",
    //         "minecraft:blaze_powder",
    //       ]),
    //       event.recipes.createFilling("createastral:incomplete_blaze_head", [
    //         "createastral:incomplete_blaze_head",
    //         { fluid: "tconstruct:blazing_blood", amount: 100 * mB },
    //       ]),
    //       event.recipes.createFilling("createastral:incomplete_blaze_head", [
    //         "createastral:incomplete_blaze_head",
    //         { fluid: "kubejs:shimmer", amount: 50 * mB },
    //       ]),
    //       event.recipes.createPressing("createastral:incomplete_blaze_head", "createastral:incomplete_blaze_head"),
    //     ]
    //   )
    //   .transitionalItem("createastral:incomplete_blaze_head")
    //   .loops(1);

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

    // event.recipes.create
    //   .sequenced_assembly(
    //     ["minecraft:small_amethyst_bud"],
    //     ["minecraft:amethyst_shard"],
    //     [
    //       event.recipes.createFilling("minecraft:amethyst_shard", [
    //         "minecraft:amethyst_shard",
    //         { fluid: "minecraft:water", amount: BUCKET / 4 },
    //       ]),
    //       event.recipes.createFilling("minecraft:amethyst_shard", [
    //         "minecraft:amethyst_shard",
    //         { fluid: "kubejs:shimmer", amount: 10 * mB },
    //       ]),
    //       event.recipes.createFilling("minecraft:amethyst_shard", [
    //         "minecraft:amethyst_shard",
    //         { fluid: "minecraft:water", amount: BUCKET / 4 },
    //       ]),
    //       event.recipes.createFilling("minecraft:amethyst_shard", [
    //         "minecraft:amethyst_shard",
    //         { fluid: "kubejs:shimmer", amount: 10 * mB },
    //       ]),
    //     ]
    //   )
    //   .transitionalItem("minecraft:amethyst_shard")
    //   .loops(1);

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

    // event.recipes.create
    //   .sequenced_assembly(
    //     ["minecraft:medium_amethyst_bud"],
    //     ["minecraft:small_amethyst_bud"],
    //     [
    //       event.recipes.createFilling("minecraft:small_amethyst_bud", [
    //         "minecraft:small_amethyst_bud",
    //         { fluid: "minecraft:water", amount: BUCKET / 4 },
    //       ]),
    //       event.recipes.createFilling("minecraft:small_amethyst_bud", [
    //         "minecraft:small_amethyst_bud",
    //         { fluid: "kubejs:shimmer", amount: 10 * mB },
    //       ]),
    //       event.recipes.createFilling("minecraft:small_amethyst_bud", [
    //         "minecraft:small_amethyst_bud",
    //         { fluid: "minecraft:water", amount: BUCKET / 4 },
    //       ]),
    //       event.recipes.createFilling("minecraft:small_amethyst_bud", [
    //         "minecraft:small_amethyst_bud",
    //         { fluid: "kubejs:shimmer", amount: 10 * mB },
    //       ]),
    //     ]
    //   )
    //   .transitionalItem("minecraft:small_amethyst_bud")
    //   .loops(1);

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

    // event.recipes.create
    //   .sequenced_assembly(
    //     ["minecraft:large_amethyst_bud"],
    //     ["minecraft:medium_amethyst_bud"],
    //     [
    //       event.recipes.createFilling("minecraft:medium_amethyst_bud", [
    //         "minecraft:medium_amethyst_bud",
    //         { fluid: "minecraft:water", amount: BUCKET / 4 },
    //       ]),
    //       event.recipes.createFilling("minecraft:medium_amethyst_bud", [
    //         "minecraft:medium_amethyst_bud",
    //         { fluid: "kubejs:shimmer", amount: 10 * mB },
    //       ]),
    //       event.recipes.createFilling("minecraft:medium_amethyst_bud", [
    //         "minecraft:medium_amethyst_bud",
    //         { fluid: "minecraft:water", amount: BUCKET / 4 },
    //       ]),
    //       event.recipes.createFilling("minecraft:medium_amethyst_bud", [
    //         "minecraft:medium_amethyst_bud",
    //         { fluid: "kubejs:shimmer", amount: 10 * mB },
    //       ]),
    //     ]
    //   )
    //   .transitionalItem("minecraft:medium_amethyst_bud")
    //   .loops(1);

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

    // event.recipes.create
    //   .sequenced_assembly(
    //     ["minecraft:amethyst_cluster"],
    //     ["minecraft:large_amethyst_bud"],
    //     [
    //       event.recipes.createFilling("minecraft:large_amethyst_bud", [
    //         "minecraft:large_amethyst_bud",
    //         { fluid: "minecraft:water", amount: BUCKET / 4 },
    //       ]),
    //       event.recipes.createFilling("minecraft:large_amethyst_bud", [
    //         "minecraft:large_amethyst_bud",
    //         { fluid: "kubejs:shimmer", amount: 10 * mB },
    //       ]),
    //       event.recipes.createFilling("minecraft:large_amethyst_bud", [
    //         "minecraft:large_amethyst_bud",
    //         { fluid: "minecraft:water", amount: BUCKET / 4 },
    //       ]),
    //       event.recipes.createFilling("minecraft:large_amethyst_bud", [
    //         "minecraft:large_amethyst_bud",
    //         { fluid: "kubejs:shimmer", amount: 10 * mB },
    //       ]),
    //     ]
    //   )
    //   .transitionalItem("minecraft:large_amethyst_bud")
    //   .loops(1);

    createSequencedAssembly(event, {
      input: "ad_astra:mars_sand",
      transitional: "createastral:martian_clump",
      outputs: ["createastral:ancient_stone"],
    })
      .addDeployingStep("tconstruct:debris_nugget")
      .addFillingStep({ fluid: "kubejs:shimmer", amount: BUCKET / 2 })
      .build();

    // event.recipes.create
    //   .sequenced_assembly(
    //     [
    //       // begin
    //       "createastral:ancient_stone", // output
    //     ],
    //     "ad_astra:mars_sand",
    //     [
    //       event.recipes.createDeploying("createastral:martian_clump", [
    //         "createastral:martian_clump",
    //         "tconstruct:debris_nugget",
    //       ]),
    //       event.recipes.createFilling("createastral:martian_clump", [
    //         "createastral:martian_clump",
    //         { fluid: "kubejs:shimmer", amount: BUCKET / 2 },
    //       ]),
    //     ]
    //   )
    //   .transitionalItem("createastral:martian_clump")
    //   .loops(1);

    createSequencedAssembly(event, {
      input: "astralfoods:blaze_fries_and_cod",
      transitional: "astralfoods:blaze_fries_and_cod",
      outputs: ["astralfoods:cod_n_blaze"],
    })
      .addDeployingStep("minecraft:paper")
      .loops(3)
      .build();

    // event.recipes.create
    //   .sequenced_assembly(
    //     [
    //       // output
    //       Item.of("astralfoods:cod_n_blaze").withChance(1), // begin
    //     ],
    //     "astralfoods:blaze_fries_and_cod",
    //     [
    //       // input
    //       event.recipes.createDeploying("astralfoods:blaze_fries_and_cod", [
    //         "astralfoods:blaze_fries_and_cod",
    //         "minecraft:paper",
    //       ]),
    //     ]
    //   )
    //   .transitionalItem("astralfoods:blaze_fries_and_cod")
    //   .loops(3);

    createSequencedAssembly(event, {
      input: "minecraft:stone",
      transitional: "minecraft:stone",
      outputs: ["ad_astra:moon_stone"],
    })
      .addPressingStep()
      .addFillingStep({ fluid: "kubejs:shimmer", amount: 250 * mB })
      .loops(4)
      .build();

    // event.recipes.create
    //   .sequenced_assembly([Item.of("ad_astra:moon_stone")], "minecraft:stone", [
    //     event.recipes.createPressing("minecraft:stone", "minecraft:stone"),
    //     event.recipes.createFilling("minecraft:stone", [
    //       "minecraft:stone",
    //       { fluid: "kubejs:shimmer", amount: 250 * mB },
    //     ]),
    //   ])
    //   .transitionalItem("minecraft:stone")
    //   .loops(4);
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
