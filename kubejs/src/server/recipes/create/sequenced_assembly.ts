export function createSequencedAssemblyRecipes() {
  onEvent("recipes", (event) => {
    biomassSequence(event);
    circuitSequence(event);
    diamondSequence(event);
    casingSequence(event);
    piglinSequence(event);
    wineSequence(event);

    //Honestly just good luck in figuring this out its too complex to
    //document in an effective way

    // Hi I'm absolutely not simplifying this script even with the massive overhaul I've done of the server_scripts folder, screw that - _Shortman

    const inc_sturdy_sheet = "create:unprocessed_obsidian_sheet";

    event.recipes
      .createSequencedAssembly(Item.of("minecraft:powder_snow_bucket"), "minecraft:bucket", [
        event.recipes.createDeploying("minecraft:bucket", ["minecraft:bucket", ["createastral:snowy_marimo"]]),
        event.recipes.createFilling("minecraft:bucket", [
          "minecraft:bucket",
          { fluid: "minecraft:water", amount: 250 * mB },
        ]),
      ])
      .transitionalItem("minecraft:bucket")
      .loops(2);

    event.recipes
      .createSequencedAssembly(
        Item.of("tconstruct:medium_ender_slime_crystal_bud"),
        "tconstruct:small_ender_slime_crystal_bud",
        [
          event.recipes.createFilling("tconstruct:small_ender_slime_crystal_bud", [
            "tconstruct:small_ender_slime_crystal_bud",
            { fluid: "tconstruct:ender_slime", amount: (250 * mB) / 3 },
          ]),
        ]
      )
      .transitionalItem("tconstruct:small_ender_slime_crystal_bud")
      .loops(3);

    event.recipes
      .createSequencedAssembly(
        Item.of("tconstruct:large_ender_slime_crystal_bud"),
        "tconstruct:medium_ender_slime_crystal_bud",
        [
          event.recipes.createDeploying("tconstruct:medium_ender_slime_crystal_bud", [
            "tconstruct:medium_ender_slime_crystal_bud",
            ["techreborn:basalt_dust"],
          ]),
          event.recipes.createFilling("tconstruct:medium_ender_slime_crystal_bud", [
            "tconstruct:medium_ender_slime_crystal_bud",
            { fluid: "tconstruct:ender_slime", amount: (250 * mB) / 3 },
          ]),
        ]
      )
      .transitionalItem("tconstruct:medium_ender_slime_crystal_bud")
      .loops(3);

    event.recipes
      .createSequencedAssembly(
        Item.of("tconstruct:ender_slime_crystal_cluster"),
        "tconstruct:large_ender_slime_crystal_bud",
        [
          event.recipes.createDeploying("tconstruct:large_ender_slime_crystal_bud", [
            "tconstruct:large_ender_slime_crystal_bud",
            ["create:powdered_obsidian"],
          ]),
          event.recipes.createFilling("tconstruct:large_ender_slime_crystal_bud", [
            "tconstruct:large_ender_slime_crystal_bud",
            { fluid: "tconstruct:ender_slime", amount: (250 * mB) / 3 },
          ]),
        ]
      )
      .transitionalItem("tconstruct:large_ender_slime_crystal_bud")
      .loops(3);

    event.recipes
      .createSequencedAssembly(Item.of("cookingforblockheads:cow_jar"), "cookingforblockheads:milk_jar", [
        event.recipes.createDeploying("cookingforblockheads:milk_jar", [
          "cookingforblockheads:milk_jar",
          ["minecraft:beef"],
        ]),
        event.recipes.createDeploying("cookingforblockheads:milk_jar", [
          "cookingforblockheads:milk_jar",
          ["minecraft:leather"],
        ]),
        event.recipes.createFilling("cookingforblockheads:milk_jar", [
          "cookingforblockheads:milk_jar",
          { fluid: "tconstruct:blood", amount: 100 * mB },
        ]),
      ])
      .transitionalItem("cookingforblockheads:milk_jar")
      .loops(1);

    event.recipes
      .createSequencedAssembly(Item.of("minecraft:sea_lantern"), "minecraft:prismarine", [
        event.recipes.createDeploying("minecraft:prismarine", [
          "minecraft:prismarine",
          ["minecraft:prismarine_crystals"],
        ]),
      ])
      .transitionalItem("chipped:sea_lantern_2")
      .loops(5);

    event.recipes
      .createSequencedAssembly(Item.of("yttr:lamp"), "minecraft:redstone_torch", [
        event.recipes.createDeploying("minecraft:redstone_torch", [
          "minecraft:redstone_torch",
          ["minecraft:iron_bars"],
        ]),
        event.recipes.createDeploying("minecraft:redstone_torch", [
          "minecraft:redstone_torch",
          ["create:framed_glass"],
        ]),
        event.recipes.createDeploying("minecraft:redstone_torch", [
          "minecraft:redstone_torch",
          ["minecraft:iron_bars"],
        ]),
      ])
      .transitionalItem("chipped:redstone_lamp_1")
      .loops(1);

    event.recipes
      .createSequencedAssembly(Item.of("createastral:horse"), "minecraft:leather_horse_armor", [
        event.recipes.createDeploying("minecraft:leather_horse_armor", [
          "minecraft:leather_horse_armor",
          ["minecraft:apple"],
        ]),
        event.recipes.createDeploying("minecraft:leather_horse_armor", [
          "minecraft:leather_horse_armor",
          ["minecraft:hay_block"],
        ]),
        event.recipes.createFilling("minecraft:leather_horse_armor", [
          "minecraft:leather_horse_armor",
          { fluid: "tconstruct:blood", amount: 100 * mB },
        ]),
      ])
      .transitionalItem("minecraft:leather_horse_armor")
      .loops(1);

    event.recipes
      .createSequencedAssembly(Item.of("create:track"), "#create:sleepers", [
        event.recipes.createDeploying("create:incomplete_track", [
          "create:incomplete_track",
          ["#c:nuggets/iron", "#c:nuggets/tin", "#c:nuggets/zinc"],
        ]),
        event.recipes.createDeploying("create:incomplete_track", [
          "create:incomplete_track",
          ["#c:nuggets/iron", "#c:nuggets/tin", "#c:nuggets/zinc"],
        ]),
        event.recipes.createPressing("create:incomplete_track", "create:incomplete_track"),
      ])
      .transitionalItem("create:incomplete_track")
      .loops(1);

    event.recipes
      .createSequencedAssembly([Item.of("createastral:living_mechanism").withChance(1)], "yttr:ultrapure_carbon", [
        event.recipes.createFilling("yttr:ultrapure_carbon", [
          "yttr:ultrapure_carbon",
          { fluid: "tconstruct:ender_slime", amount: INGOT },
        ]),
        event.recipes.createPressing("yttr:ultrapure_carbon", "yttr:ultrapure_carbon"),
        event.recipes.createFilling("yttr:ultrapure_carbon", [
          "yttr:ultrapure_carbon",
          { fluid: "tconstruct:ender_slime", amount: INGOT },
        ]),
        event.recipes.createPressing("yttr:ultrapure_carbon", "yttr:ultrapure_carbon"),
        event.recipes.createDeploying("yttr:ultrapure_carbon", ["yttr:ultrapure_carbon", "minecraft:ender_eye"]),
        event.recipes.createFilling("yttr:ultrapure_carbon", [
          "yttr:ultrapure_carbon",
          { fluid: "kubejs:shimmer", amount: BUCKET / 3 },
        ]),
      ])
      .transitionalItem("yttr:ultrapure_carbon")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        [Item.of("astraladditions:orbital_navigation_ring").withChance(1)],
        "astraladditions:blazed_steel_ring",
        [
          event.recipes.createFilling("createastral:blazed_steel_ring", [
            "astraladditions:blazed_steel_ring",
            { fluid: "tconstruct:molten_steel", amount: NUGGET },
          ]),
          event.recipes.createDeploying("astraladditions:blazed_steel_ring", [
            "astraladditions:blazed_steel_ring",
            "createastral:navigation_mechanism",
          ]),
          event.recipes.createDeploying("astraladditions:blazed_steel_ring", [
            "astraladditions:blazed_steel_ring",
            "createastral:astral_conduit",
          ]),
        ]
      )
      .transitionalItem("astraladditions:blazed_steel_ring")
      .loops(1);
    event.recipes
      .createSequencedAssembly([Item.of("createastral:laskinium_pill").withChance(1)], "estrogen:estrogen_pill", [
        event.recipes.createFilling("estrogen:estrogen_pill", [
          "estrogen:estrogen_pill",
          { fluid: "kubejs:shimmer", amount: BUCKET },
        ]),
        event.recipes.createPressing("estrogen:estrogen_pill", "estrogen:estrogen_pill"),
        event.recipes.createDeploying("estrogen:estrogen_pill", ["estrogen:estrogen_pill", "createastral:laskinium"]),
        event.recipes.createDeploying("estrogen:estrogen_pill", [
          "estrogen:estrogen_pill",
          "createastral:astral_singularity",
        ]),
      ])
      .transitionalItem("estrogen:estrogen_pill")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        [Item.of("create:sturdy_sheet").withChance(12), Item.of("minecraft:gravel").withChance(8)],
        "#c:dusts/obsidian",
        [
          event.recipes.createPressing(inc_sturdy_sheet, inc_sturdy_sheet),
          event.recipes.createPressing(inc_sturdy_sheet, inc_sturdy_sheet),
        ]
      )
      .transitionalItem(inc_sturdy_sheet)
      .loops(5);

    event.recipes
      .createSequencedAssembly(["2x create:sturdy_sheet"], "tconstruct:obsidian_pane", [
        event.recipes.createDeploying(inc_sturdy_sheet, [inc_sturdy_sheet, "minecraft:magma_cream"]),
        event.recipes.createPressing(inc_sturdy_sheet, inc_sturdy_sheet),
        event.recipes.createFilling(inc_sturdy_sheet, [
          inc_sturdy_sheet,
          { fluid: "minecraft:lava", amount: mB * 100 },
        ]),
      ])
      .loops(2)
      .transitionalItem(inc_sturdy_sheet);

    event.recipes
      .createSequencedAssembly(["create:sturdy_sheet"], "create:powdered_obsidian", [
        event.recipes.createFilling(inc_sturdy_sheet, [inc_sturdy_sheet, { fluid: "minecraft:lava", amount: mB * 50 }]),
        event.recipes.createPressing(inc_sturdy_sheet, inc_sturdy_sheet),
        event.recipes.createPressing(inc_sturdy_sheet, inc_sturdy_sheet),
      ])
      .loops(5)
      .transitionalItem(inc_sturdy_sheet);

    event.custom({
      type: "create:sequenced_assembly",
      ingredient: { tag: "c:plates/gold" },
      transitionalItem: { item: "create:incomplete_precision_mechanism" },
      sequence: [
        {
          type: "create:deploying",
          ingredients: [{ item: "create:incomplete_precision_mechanism" }, { item: "create:cogwheel" }],
          results: [{ item: "create:incomplete_precision_mechanism" }],
        },
        {
          type: "create:deploying",
          ingredients: [{ item: "create:incomplete_precision_mechanism" }, { item: "create:large_cogwheel" }],
          results: [{ item: "create:incomplete_precision_mechanism" }],
        },
        {
          type: "create:deploying",
          ingredients: [{ item: "create:incomplete_precision_mechanism" }, { tag: "c:nuggets/desh" }],
          results: [{ item: "create:incomplete_precision_mechanism" }],
        },
      ],
      results: [
        { item: "create:precision_mechanism", chance: 120.0 },
        { item: "create:golden_sheet", chance: 8.0 },
        { item: "create:andesite_alloy", chance: 8.0 },
        { item: "create:cogwheel", chance: 5.0 },
        { item: "minecraft:gold_nugget", chance: 3.0 },
        { item: "create:shaft", chance: 2.0 },
        { item: "create:crushed_raw_gold", chance: 2.0 },
        { item: "minecraft:iron_ingot" },
        { item: "minecraft:clock" },
      ],
      loops: 6,
    });

    event.recipes
      .createSequencedAssembly(
        [
          // output
          Item.of("astralfoods:shimmered_rabbit_stew").withChance(1), // begin
        ],
        "minecraft:bowl",
        [
          // input
          event.recipes.createDeploying("minecraft:bowl", ["minecraft:bowl", "astralfoods:seared_potato"]),
          event.recipes.createDeploying("minecraft:bowl", ["minecraft:bowl", "minecraft:cooked_rabbit"]),

          event.recipes.createFilling("minecraft:bowl", [
            "minecraft:bowl",
            { fluid: "kubejs:shimmer", amount: BUCKET },
          ]),
        ]
      )
      .transitionalItem("minecraft:bowl")
      .loops(1);

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
          ingredients: [
            {
              item: "createastral:sturdy_cage",
            },
            {
              "yttr:entity": "astraladditions:ender_watcher",
            },
          ],
          results: [
            {
              item: "createastral:sturdy_cage",
            },
          ],
        },
      ],
      results: [
        {
          item: "createastral:contained_end",
        },
      ],
      loops: 1,
    });

    function biomassSequence(event) {
      var transitional_c_plantball = "techreborn:plantball";
      event.recipes
        .createSequencedAssembly(
          [
            Item.of("techreborn:compressed_plantball").withChance(8),
            Item.of("minecraft:grass").withChance(1),
            Item.of("minecraft:green_dye").withChance(0.5),
            Item.of("farmersdelight:straw").withChance(0.5),
          ],
          "techreborn:plantball",
          [event.recipes.createPressing(transitional_c_plantball, transitional_c_plantball)]
        )
        .transitionalItem(transitional_c_plantball)
        .loops(4);

      var transitional_bio_pellet = "createaddition:biomass";
      event.recipes
        .createSequencedAssembly(
          [Item.of("4x createaddition:biomass_pellet").withChance(1)],
          "createaddition:biomass",
          [
            event.recipes.createCutting(transitional_bio_pellet, transitional_bio_pellet),
            event.recipes.createCutting(transitional_bio_pellet, transitional_bio_pellet),
            event.recipes.createPressing(transitional_bio_pellet, transitional_bio_pellet),
          ]
        )
        .transitionalItem(transitional_bio_pellet)
        .loops(1);

      event.recipes
        .createSequencedAssembly(
          [
            Item.of("techreborn:compressed_plantball").withChance(8),
            Item.of("minecraft:grass").withChance(1),
            Item.of("minecraft:green_dye").withChance(0.5),
            Item.of("farmersdelight:straw").withChance(0.5),
          ],
          "techreborn:plantball",
          [event.recipes.createPressing(transitional_c_plantball, transitional_c_plantball)]
        )
        .transitionalItem(transitional_c_plantball)
        .loops(4);

      event.recipes
        .createSequencedAssembly(
          [Item.of("4x createaddition:biomass_pellet").withChance(1)],
          "createaddition:biomass",
          [
            event.recipes.createCutting(transitional_bio_pellet, transitional_bio_pellet),
            event.recipes.createCutting(transitional_bio_pellet, transitional_bio_pellet),
            event.recipes.createPressing(transitional_bio_pellet, transitional_bio_pellet),
          ]
        )
        .transitionalItem(transitional_bio_pellet)
        .loops(1);
    }

    function circuitSequence(event) {
      let incomplete_transitional_circuit = "createastral:incomplete_transitional_electronic_circuit";
      event.recipes
        .createSequencedAssembly(
          [
            // begin
            "createastral:incomplete_electronic_circuit", // output
          ],
          "create:integrated_circuit",
          [
            // input
            event.recipes.createDeploying(incomplete_transitional_circuit, [
              incomplete_transitional_circuit,
              "createastral:electrified_pin",
            ]),
          ]
        )
        .transitionalItem(incomplete_transitional_circuit)
        .loops(32);

      event.recipes
        .createSequencedAssembly(
          [
            // begin
            "techreborn:electronic_circuit", // output
          ],
          "createastral:incomplete_electronic_circuit",
          [
            // input
            event.recipes.createDeploying("createastral:incomplete_electronic_circuit", [
              "createastral:incomplete_electronic_circuit",
              "techreborn:lead_plate",
            ]),
            event.recipes.createPressing(
              "createastral:incomplete_electronic_circuit",
              "createastral:incomplete_electronic_circuit"
            ),
          ]
        )
        .transitionalItem("createastral:incomplete_electronic_circuit")
        .loops(1);

      event.recipes
        .createSequencedAssembly(
          [
            // begin
            "astraladditions:fragile_item_3", // output
          ],
          "ad_astra:calorite_engine",
          [
            // input
            event.recipes.createDeploying("ad_astra:calorite_engine", [
              "ad_astra:calorite_engine",
              "yttr:armor_plating",
            ]),
            event.recipes.createDeploying("ad_astra:calorite_engine", [
              "ad_astra:calorite_engine",
              "create:refined_radiance_casing",
            ]),
            event.recipes.createDeploying("ad_astra:calorite_engine", [
              "ad_astra:calorite_engine",
              "yttr:armor_plating",
            ]),
            event.recipes.createDeploying("ad_astra:calorite_engine", [
              "ad_astra:calorite_engine",
              "techreborn:data_storage_chip",
            ]),
            event.recipes.createFilling("ad_astra:calorite_engine", [
              "ad_astra:calorite_engine",
              { fluid: "kubejs:molten_radiance", amount: BUCKET / 2 },
            ]),
            event.recipes.createPressing("ad_astra:calorite_engine", "ad_astra:calorite_engine"),
          ]
        )
        .transitionalItem("ad_astra:calorite_engine")
        .loops(5);

      event.recipes
        .createSequencedAssembly(
          [
            // begin
            "createastral:mercurian_stone", // output
          ],
          "ad_astra:mercury_stone",
          [
            // input
            event.recipes.createFilling("ad_astra:mercury_stone", [
              "ad_astra:mercury_stone",
              { fluid: "yttr:void", amount: BUCKET / 2 },
            ]),
            event.recipes.createFilling("ad_astra:mercury_stone", [
              "ad_astra:mercury_stone",
              { fluid: "kubejs:molten_radiance", amount: BUCKET / 2 },
            ]),
            event.recipes.createFilling("ad_astra:mercury_stone", [
              "ad_astra:mercury_stone",
              { fluid: "kubejs:molten_shadowsteel", amount: BUCKET / 2 },
            ]),
            event.recipes.createFilling("ad_astra:mercury_stone", [
              "ad_astra:mercury_stone",
              { fluid: "kubejs:molten_calorite", amount: BUCKET / 2 },
            ]),
            event.recipes.createPressing("ad_astra:mercury_stone", "ad_astra:mercury_stone"),
          ]
        )
        .transitionalItem("ad_astra:mercury_stone")
        .loops(5);

      event.recipes
        .createSequencedAssembly(
          [
            // begin
            "createastral:aurorite_block", // output
          ],
          "ad_astra:polished_permafrost",
          [
            // input
            event.recipes.createDeploying("ad_astra:polished_permafrost", ["ad_astra:ice_shard", "ad_astra:ice_shard"]),
            event.recipes.createDeploying("ad_astra:polished_permafrost", ["ad_astra:ice_shard", "ad_astra:ice_shard"]),
            event.recipes.createFilling("ad_astra:polished_permafrost", [
              "ad_astra:polished_permafrost",
              { fluid: "kubejs:aurorite", amount: BUCKET / 2 },
            ]),
            event.recipes.createPressing("ad_astra:polished_permafrost", "ad_astra:polished_permafrost"),
          ]
        )
        .transitionalItem("ad_astra:polished_permafrost")
        .loops(1);

      event.recipes
        .createSequencedAssembly(
          [
            // begin
            "estrogen:estrogen_patches", // output
          ],
          "minecraft:paper",
          [
            // input
            event.recipes.createFilling("create:sand_paper", [
              "create:sand_paper",
              { fluid: "tconstruct:molten_queens_slime", amount: BUCKET },
            ]),
            event.recipes.createFilling("create:sand_paper", [
              "create:sand_paper",
              { fluid: "estrogen:liquid_estrogen", amount: BUCKET },
            ]),
            event.recipes.createDeploying("create:sand_paper", ["blahaj:blue_shark", "blahaj:blue_shark"]),
          ]
        )
        .transitionalItem("ad_astra:polished_permafrost")
        .loops(1);

      event.recipes
        .createSequencedAssembly(
          [
            // begin
            "astraladditions:fragile_item", // output
          ],
          "createastral:navigation_mechanism",
          [
            // input
            event.recipes.createDeploying("createastral:navigation_mechanism", [
              "techreborn:machine_parts",
              "techreborn:machine_parts",
            ]),
            event.recipes.createDeploying("createastral:navigation_mechanism", [
              "ad_astra:ostrum_plate",
              "ad_astra:ostrum_plate",
            ]),
            event.recipes.createPressing("createastral:navigation_mechanism", "createastral:navigation_mechanism"),
            event.recipes.createFilling("createastral:navigation_mechanism", [
              "createastral:navigation_mechanism",
              { fluid: "ad_astra:cryo_fuel", amount: BUCKET },
            ]),
            event.recipes.createPressing("createastral:navigation_mechanism", "createastral:navigation_mechanism"),
          ]
        )
        .transitionalItem("createastral:navigation_mechanism")
        .loops(4);

      event.recipes
        .createSequencedAssembly(["minecraft:dragon_breath"], "minecraft:glass_bottle", [
          event.recipes.createFilling("minecraft:glass_bottle", [
            "minecraft:glass_bottle",
            { fluid: "tconstruct:ender_slime", amount: BUCKET },
          ]),
          event.recipes.createDeploying("minecraft:glass_bottle", ["minecraft:glass_bottle", "minecraft:chorus_fruit"]),
        ])
        .loops(1)
        .transitionalItem("minecraft:glass_bottle");

      event.recipes
        .createSequencedAssembly(
          [
            // begin
            "create:brass_casing", // output
          ],
          "create:copper_casing",
          [
            // input
            event.recipes.createDeploying("create:copper_casing", ["create:copper_casing", "createaddition:brass_rod"]),
            event.recipes.createFilling("create:copper_casing", [
              "create:copper_casing",
              { fluid: "tconstruct:molten_brass", amount: NUGGET },
            ]),
            event.recipes.createDeploying("create:copper_casing", ["create:copper_casing", "create:brass_sheet"]),
            event.recipes.createPressing("create:copper_casing", "create:copper_casing"),
          ]
        )
        .transitionalItem("createastral:incomplete_brass_casing")
        .loops(3);

      event.recipes
        .createSequencedAssembly(
          [
            // begin
            "techreborn:advanced_machine_frame", // output
          ],
          "techreborn:basic_machine_frame",
          [
            // input
            event.recipes.createDeploying("techreborn:basic_machine_frame", [
              "techreborn:basic_machine_frame",
              "techreborn:lead_plate",
            ]),
            event.recipes.createFilling("techreborn:basic_machine_frame", [
              "techreborn:basic_machine_frame",
              { fluid: "kubejs:blast-resistant_cement", amount: 200 * mB },
            ]),
            event.recipes.createDeploying("techreborn:basic_machine_frame", [
              "techreborn:basic_machine_frame",
              "techreborn:lead_plate",
            ]),
          ]
        )
        .transitionalItem("createastral:incomplete_advanced_machine_frame")
        .loops(1);

      event.recipes
        .createSequencedAssembly(
          [
            // begin
            "techreborn:industrial_machine_frame", // output
          ],
          "techreborn:advanced_machine_frame",
          [
            // input
            event.recipes.createDeploying("techreborn:advanced_machine_frame", [
              "techreborn:advanced_machine_frame",
              "ad_astra:ostrum_plate",
            ]),
            event.recipes.createDeploying("techreborn:advanced_machine_frame", [
              "techreborn:advanced_machine_frame",
              "techreborn:machine_parts",
            ]),
            event.recipes.createDeploying("techreborn:advanced_machine_frame", [
              "techreborn:advanced_machine_frame",
              "ad_astra:ostrum_plate",
            ]),
          ]
        )
        .transitionalItem("createastral:incomplete_industrial_machine_frame")
        .loops(1);

      let transitional_lapis_sheet = "createastral:transitional_lapis_sheet";
      event.recipes
        .createSequencedAssembly(["create:integrated_circuit"], "create:lapis_sheet", [
          event.recipes.createFilling(transitional_lapis_sheet, [
            transitional_lapis_sheet,
            { fluid: "tconstruct:molten_silver", amount: 3375 },
          ]),
          event.recipes.createDeploying(transitional_lapis_sheet, [
            transitional_lapis_sheet,
            "createaddition:copper_wire",
          ]),
          event.recipes.createDeploying(transitional_lapis_sheet, [
            transitional_lapis_sheet,
            "createaddition:copper_wire",
          ]),
          event.recipes.createPressing(transitional_lapis_sheet, transitional_lapis_sheet),
        ])
        .transitionalItem(transitional_lapis_sheet);

      event.recipes
        .createSequencedAssembly(["6x create:belt_connector"], "minecraft:dried_kelp", [
          event.recipes.createDeploying("minecraft:dried_kelp", ["minecraft:dried_kelp", "techreborn:rubber"]),
          event.recipes.createPressing("minecraft:dried_kelp", "minecraft:dried_kelp"),
          event.recipes.createDeploying("minecraft:dried_kelp", ["minecraft:dried_kelp", "minecraft:dried_kelp"]),
          event.recipes.createPressing("minecraft:dried_kelp", "minecraft:dried_kelp"),
        ])
        .loops(3)
        .transitionalItem("minecraft:dried_kelp");

      event.recipes
        .createSequencedAssembly(["6x create:display_board"], "create:electron_tube", [
          event.recipes.createDeploying("create:electron_tube", ["create:electron_tube", "create:belt_connector"]),
          event.recipes.createDeploying("create:electron_tube", ["create:electron_tube", "create:cogwheel"]),
          event.recipes.createDeploying("create:electron_tube", ["create:electron_tube", "#c:dyes"]),
        ])
        .loops(2)
        .transitionalItem("create:electron_tube");

      event.recipes
        .createSequencedAssembly(["ad_astra:calorite_engine"], "ad_astra:ostrum_engine", [
          event.recipes.createFilling("ad_astra:ostrum_engine", [
            "ad_astra:ostrum_engine",
            { fluid: "kubejs:molten_yttrium", amount: BUCKET },
          ]),
          event.recipes.createFilling("ad_astra:ostrum_engine", [
            "ad_astra:ostrum_engine",
            { fluid: "yttr:void", amount: BUCKET },
          ]),
          event.recipes.createDeploying("ad_astra:ostrum_engine", [
            "ad_astra:ostrum_engine",
            "techreborn:industrial_circuit",
          ]),
          event.recipes.createDeploying("ad_astra:ostrum_engine", [
            "ad_astra:ostrum_engine",
            "createastral:subatomic_ingot",
          ]),
          event.recipes.createPressing("ad_astra:ostrum_engine", "ad_astra:ostrum_engine"),
        ])
        .transitionalItem("ad_astra:ostrum_engine");

      const inc_calc = "createastral:incomplete_calculation_processor";
      event.recipes
        .createSequencedAssembly(["ae2:calculation_processor"], "ae2:printed_silicon", [
          event.recipes.createDeploying(inc_calc, [inc_calc, "ae2:printed_calculation_processor"]),
          event.recipes.createDeploying(inc_calc, [inc_calc, "ae2:fluix_dust"]),

          event.recipes.createFilling(inc_calc, [inc_calc, { fluid: "kubejs:shimmer", amount: 8100 }]),
          event.recipes.createPressing(inc_calc, inc_calc),
        ])
        .transitionalItem(inc_calc)
        .loops(1);

      const inc_eng = "createastral:incomplete_engineering_processor";
      event.recipes
        .createSequencedAssembly(["ae2:engineering_processor"], "ae2:printed_silicon", [
          event.recipes.createDeploying(inc_eng, [inc_eng, "ae2:printed_engineering_processor"]),
          event.recipes.createDeploying(inc_eng, [inc_eng, "ae2:fluix_dust"]),

          event.recipes.createFilling(inc_eng, [inc_eng, { fluid: "kubejs:shimmer", amount: 8100 }]),
          event.recipes.createPressing(inc_eng, inc_eng),
        ])
        .transitionalItem(inc_eng)
        .loops(1);

      const inc_log = "createastral:incomplete_logic_processor";
      event.recipes
        .createSequencedAssembly(["ae2:logic_processor"], "ae2:printed_silicon", [
          event.recipes.createDeploying(inc_log, [inc_log, "ae2:printed_logic_processor"]),
          event.recipes.createDeploying(inc_log, [inc_log, "ae2:fluix_dust"]),

          event.recipes.createFilling(inc_log, [inc_log, { fluid: "kubejs:shimmer", amount: 8100 }]),
          event.recipes.createPressing(inc_log, inc_log),
        ])
        .transitionalItem(inc_log)
        .loops(1);

      event.recipes
        .createSequencedAssembly(["techreborn:industrial_circuit"], "techreborn:electronic_circuit", [
          event.recipes.createFilling("techreborn:electronic_circuit", [
            "techreborn:electronic_circuit",
            { fluid: "techreborn:lithium", amount: 4500 },
          ]),
          event.recipes.createPressing("techreborn:electronic_circuit", "techreborn:electronic_circuit"),
          event.recipes.createDeploying("techreborn:electronic_circuit", [
            "techreborn:electronic_circuit",
            "techreborn:machine_parts",
          ]),
          event.recipes.createDeploying("techreborn:electronic_circuit", [
            "techreborn:electronic_circuit",
            "createastral:calorite_pin",
          ]),
          event.recipes.createDeploying("techreborn:electronic_circuit", [
            "techreborn:electronic_circuit",
            "createastral:calorite_pin",
          ]),
        ])
        .transitionalItem("techreborn:electronic_circuit")
        .loops(9);

      const inc_starshard = "createastral:incomplete_pure_star_shard";
      event.recipes
        .createSequencedAssembly(["createastral:pure_star_shard"], "createastral:star_shard", [
          event.recipes.createFilling(inc_starshard, [
            inc_starshard,
            { fluid: "kubejs:molten_yttrium", amount: INGOT / 2 },
          ]),
          event.recipes.createPressing(inc_starshard, inc_starshard),
          event.recipes.createDeploying(inc_starshard, [inc_starshard, "create:chromatic_compound"]),
          event.recipes.createPressing(inc_starshard, inc_starshard),
        ])
        .transitionalItem(inc_starshard)
        .loops(3);
    }

    function casingSequence(event) {
      const inc_casing = "createastral:incomplete_copper_casing";
      event.recipes
        .createSequencedAssembly(
          [
            // begin
            "create:copper_casing", // output
          ],
          "create:andesite_casing",
          [
            // input
            event.recipes.createDeploying(inc_casing, [inc_casing, "techreborn:rubber"]),
            event.recipes.createDeploying(inc_casing, [inc_casing, "create:copper_sheet"]),
          ]
        )
        .transitionalItem(inc_casing)
        .loops(3);

      const inc_mf = "createastral:incomplete_basic_machine_frame";
      event.recipes
        .createSequencedAssembly(
          [
            // begin
            "techreborn:basic_machine_frame", // output
          ],
          "create:copper_casing",
          [
            // input
            event.recipes.createFilling(inc_mf, [inc_mf, { fluid: "tconstruct:molten_silver", amount: INGOT }]),
            event.recipes.createDeploying(inc_mf, [inc_mf, "techreborn:rubber"]),
            event.recipes.createPressing(inc_mf, inc_mf), //yeah!
          ]
        )
        .transitionalItem(inc_mf)
        .loops(4);
    }

    function diamondSequence(event) {
      // Item type , loop amount
      [
        ["helmet", 4],
        ["chestplate", 8],
        ["leggings", 6],
        ["boots", 5],
        ["pickaxe", 2],
        ["axe", 2],
        ["shovel", 1],
        ["hoe", 1],
        ["sword", 2],
      ].forEach((item) => {
        event.recipes
          .createSequencedAssembly(
            [
              // begin
              "minecraft:diamond_" + item[0], // output
            ],
            Item.of("createastral:brass_" + item[0]).ignoreNBT(),
            [
              // input
              event.recipes.createFilling("createastral:brass_" + item[0], [
                "createastral:brass_" + item[0],
                {
                  fluid: "tconstruct:molten_diamond",
                  amount: 250 * mB,
                },
              ]),
            ]
          )
          .transitionalItem("createastral:brass_" + item[0])
          .loops(item[1]);
      });
    }

    function piglinSequence(event) {
      event.recipes
        .createSequencedAssembly(
          [
            // begin
            "passivepiglins:piglin_coin", // output
          ],
          Item.of("create:golden_sheet"),
          [
            // input
            event.recipes.createCutting("create:golden_sheet", "create:golden_sheet").processingTime(30),
            event.recipes.createDeploying("create:golden_sheet", ["minecraft:gold_nugget", "minecraft:gold_nugget"]),
            event.recipes.createDeploying("create:golden_sheet", [
              "minecraft:piglin_banner_pattern",
              "minecraft:piglin_banner_pattern",
            ]),
            event.recipes.createPressing("create:golden_sheet", "create:golden_sheet").processingTime(75),
          ]
        )
        .transitionalItem("createastral:coin")
        .loops(1);

      event.recipes
        .createSequencedAssembly(
          [
            // begin
            "passivepiglins:piglin_fortune", // output
          ],
          Item.of("createastral:golden_bowl"),
          [
            // input
            event.recipes
              .createFilling("ad_astra:iron_plate", [
                "ad_astra:iron_plate",
                { fluid: "techreborn:methane", amount: 3000 },
              ])
              .processingTime(75), //fill
            event.recipes.createDeploying("create:golden_sheet", [
              "techreborn:netherrack_dust",
              "techreborn:netherrack_dust",
            ]),
            event.recipes.createDeploying("create:golden_sheet", [
              "minecraft:crimson_fungus",
              "minecraft:crimson_fungus",
            ]),
          ]
        )
        .transitionalItem("createastral:filled_golden_bowl")
        .loops(1);

      event.recipes
        .createSequencedAssembly(
          [
            // begin
            "passivepiglins:piglin_totem", // output
          ],
          Item.of("minecraft:gold_ingot"),
          [
            // input
            event.recipes.createDeploying("minecraft:gold_ingot", ["minecraft:gold_nugget", "minecraft:gold_nugget"]),
            event.recipes.createDeploying("minecraft:gold_ingot", [
              "createastral:golden_pin",
              "createastral:golden_pin",
            ]),
            event.recipes.createDeploying("minecraft:gold_ingot", [
              "createastral:golden_pin",
              "createastral:golden_pin",
            ]),
          ]
        )
        .transitionalItem("minecraft:gold_ingot")
        .loops(1);
    }
    function wineSequence(event) {
      event.recipes
        .createSequencedAssembly(
          [
            // begin
            "vinery:chenet_wine", // output
          ],
          "vinery:red_grapejuice_wine_bottle",
          [
            // input
            event.recipes.createDeploying("kubejs:incomplete_chenet_wine", [
              "kubejs:incomplete_chenet_wine",
              "minecraft:sweet_berries",
            ]),
            event.recipes.createFilling("kubejs:incomplete_chenet_wine", [
              "kubejs:incomplete_chenet_wine",
              { fluid: "kubejs:red_grape_juice", amount: 250 * mB },
            ]),
            event.recipes.createDeploying("kubejs:incomplete_chenet_wine", [
              "kubejs:incomplete_chenet_wine",
              "minecraft:sweet_berries",
            ]),
          ]
        )
        .transitionalItem("kubejs:incomplete_chenet_wine")
        .loops(1);

      event.recipes
        .createSequencedAssembly(
          [
            // begin
            "vinery:king_danis_wine", // output
          ],
          "vinery:red_grapejuice_wine_bottle",
          [
            // input
            event.recipes.createFilling("kubejs:incomplete_king_danis_wine", [
              "kubejs:incomplete_king_danis_wine",
              { fluid: "kubejs:red_grape_juice", amount: 250 * mB },
            ]),
            event.recipes.createFilling("kubejs:incomplete_king_danis_wine", [
              "kubejs:incomplete_king_danis_wine",
              { fluid: "create:honey", amount: 250 * mB },
            ]),
            event.recipes.createFilling("kubejs:incomplete_king_danis_wine", [
              "kubejs:incomplete_king_danis_wine",
              { fluid: "create:honey", amount: 250 * mB },
            ]),
          ]
        )
        .transitionalItem("kubejs:incomplete_king_danis_wine")
        .loops(1);

      event.recipes
        .createSequencedAssembly(
          [
            // begin
            "vinery:noir_wine", // output
          ],
          "vinery:red_grapejuice_wine_bottle",
          [
            // input
            event.recipes.createDeploying("kubejs:incomplete_noir_wine", [
              "kubejs:incomplete_noir_wine",
              "minecraft:kelp",
            ]),
            event.recipes.createFilling("kubejs:incomplete_noir_wine", [
              "kubejs:incomplete_noir_wine",
              { fluid: "kubejs:red_grape_juice", amount: 250 * mB },
            ]),
            event.recipes.createDeploying("kubejs:incomplete_noir_wine", [
              "kubejs:incomplete_noir_wine",
              "minecraft:kelp",
            ]),
          ]
        )
        .transitionalItem("kubejs:incomplete_noir_wine")
        .loops(1);

      event.recipes
        .createSequencedAssembly(
          [
            // begin
            "vinery:bolvar_wine", // output
          ],
          "vinery:red_grapejuice_wine_bottle",
          [
            // input
            event.recipes.createFilling("kubejs:incomplete_bolvar_wine", [
              "kubejs:incomplete_bolvar_wine",
              { fluid: "create:honey", amount: 250 * mB },
            ]),
            event.recipes.createFilling("kubejs:incomplete_bolvar_wine", [
              "kubejs:incomplete_bolvar_wine",
              { fluid: "kubejs:red_grape_juice", amount: 250 * mB },
            ]),
            event.recipes.createDeploying("kubejs:incomplete_bolvar_wine", [
              "kubejs:incomplete_bolvar_wine",
              "vinery:cherry",
            ]),
          ]
        )
        .transitionalItem("kubejs:incomplete_bolvar_wine")
        .loops(1);

      event.recipes
        .createSequencedAssembly(
          [
            // begin
            "vinery:cherry_wine", // output
          ],
          "vinery:red_grapejuice_wine_bottle",
          [
            // input
            event.recipes.createDeploying("kubejs:incomplete_cherry_wine", [
              "kubejs:incomplete_cherry_wine",
              "vinery:cherry",
            ]),
            event.recipes.createFilling("kubejs:incomplete_cherry_wine", [
              "kubejs:incomplete_cherry_wine",
              { fluid: "kubejs:red_grape_juice", amount: 250 * mB },
            ]),
            event.recipes.createDeploying("kubejs:incomplete_cherry_wine", [
              "kubejs:incomplete_cherry_wine",
              "vinery:cherry",
            ]),
          ]
        )
        .transitionalItem("kubejs:incomplete_cherry_wine")
        .loops(1);

      event.recipes
        .createSequencedAssembly(
          [
            // begin
            "vinery:jellie_wine", // output
          ],
          "vinery:red_grapejuice_wine_bottle",
          [
            // input
            event.recipes.createDeploying("kubejs:incomplete_jellie_wine", [
              "kubejs:incomplete_jellie_wine",
              "minecraft:golden_apple",
            ]),
            event.recipes.createFilling("kubejs:incomplete_jellie_wine", [
              "kubejs:incomplete_jellie_wine",
              { fluid: "kubejs:white_grape_juice", amount: 250 * mB },
            ]),
            event.recipes.createFilling("kubejs:incomplete_jellie_wine", [
              "kubejs:incomplete_jellie_wine",
              { fluid: "create:honey", amount: 250 * mB },
            ]),
          ]
        )
        .transitionalItem("kubejs:incomplete_jellie_wine")
        .loops(1);

      event.recipes
        .createSequencedAssembly(
          [
            // begin
            "vinery:clark_wine", // output
          ],
          "vinery:white_grapejuice_wine_bottle",
          [
            // input
            event.recipes.createDeploying("kubejs:incomplete_clark_wine", [
              "kubejs:incomplete_clark_wine",
              "minecraft:sweet_berries",
            ]),
            event.recipes.createFilling("kubejs:incomplete_clark_wine", [
              "kubejs:incomplete_clark_wine",
              { fluid: "kubejs:white_grape_juice", amount: 250 * mB },
            ]),
            event.recipes.createDeploying("kubejs:incomplete_clark_wine", [
              "kubejs:incomplete_clark_wine",
              "minecraft:sweet_berries",
            ]),
          ]
        )
        .transitionalItem("kubejs:incomplete_clark_wine")
        .loops(1);

      event.recipes
        .createSequencedAssembly(
          [
            // begin
            "vinery:mellohi_wine", // output
          ],
          "vinery:white_grapejuice_wine_bottle",
          [
            // input
            event.recipes.createFilling("kubejs:incomplete_mellohi_wine", [
              "kubejs:incomplete_mellohi_wine",
              { fluid: "create:honey", amount: 250 * mB },
            ]),
            event.recipes.createFilling("kubejs:incomplete_mellohi_wine", [
              "kubejs:incomplete_mellohi_wine",
              { fluid: "create:honey", amount: 250 * mB },
            ]),
            event.recipes.createFilling("kubejs:incomplete_mellohi_wine", [
              "kubejs:incomplete_mellohi_wine",
              { fluid: "kubejs:white_grape_juice", amount: 250 * mB },
            ]),
          ]
        )
        .transitionalItem("kubejs:incomplete_mellohi_wine")
        .loops(1);

      event.recipes
        .createSequencedAssembly(
          [
            // begin
            "vinery:solaris_wine", // output
          ],
          "vinery:white_grapejuice_wine_bottle",
          [
            // input
            event.recipes.createFilling("kubejs:incomplete_solaris_wine", [
              "kubejs:incomplete_solaris_wine",
              { fluid: "kubejs:white_grape_juice", amount: 250 * mB },
            ]),
            event.recipes.createDeploying("kubejs:incomplete_solaris_wine", [
              "kubejs:incomplete_solaris_wine",
              "minecraft:sweet_berries",
            ]),
            event.recipes.createFilling("kubejs:incomplete_solaris_wine", [
              "kubejs:incomplete_solaris_wine",
              { fluid: "create:honey", amount: 250 * mB },
            ]),
          ]
        )
        .transitionalItem("kubejs:incomplete_solaris_wine")
        .loops(1);

      event.recipes
        .createSequencedAssembly(
          [
            // begin
            "vinery:aegis_wine", // output
          ],
          "vinery:wine_bottle",
          [
            // input
            event.recipes.createDeploying("kubejs:incomplete_aegis_wine", [
              "kubejs:incomplete_aegis_wine",
              "minecraft:sugar",
            ]),
            event.recipes.createFilling("kubejs:incomplete_aegis_wine", [
              "kubejs:incomplete_aegis_wine",
              { fluid: "minecraft:water", amount: 1000 * mB },
            ]),
            event.recipes.createDeploying("kubejs:incomplete_aegis_wine", [
              "kubejs:incomplete_aegis_wine",
              "minecraft:kelp",
            ]),
          ]
        )
        .transitionalItem("kubejs:incomplete_aegis_wine")
        .loops(1);

      event.recipes
        .createSequencedAssembly(
          [
            // begin
            "vinery:apple_wine", // output
          ],
          "vinery:wine_bottle",
          [
            // input
            event.recipes.createDeploying("kubejs:incomplete_apple_wine", [
              "kubejs:incomplete_apple_wine",
              "minecraft:apple",
            ]),
            event.recipes.createFilling("kubejs:incomplete_apple_wine", [
              "kubejs:incomplete_apple_wine",
              { fluid: "create:honey", amount: 250 * mB },
            ]),
            event.recipes.createDeploying("kubejs:incomplete_apple_wine", [
              "kubejs:incomplete_apple_wine",
              "minecraft:apple",
            ]),
          ]
        )
        .transitionalItem("kubejs:incomplete_apple_wine")
        .loops(1);

      event.recipes
        .createSequencedAssembly(
          [
            // begin
            "vinery:kelp_cider", // output
          ],
          "vinery:wine_bottle",
          [
            // input
            event.recipes.createDeploying("kubejs:incomplete_kelp_cider", [
              "kubejs:incomplete_kelp_cider",
              "minecraft:kelp",
            ]),
            event.recipes.createDeploying("kubejs:incomplete_kelp_cider", [
              "kubejs:incomplete_kelp_cider",
              "minecraft:kelp",
            ]),
            event.recipes.createDeploying("kubejs:incomplete_kelp_cider", [
              "kubejs:incomplete_kelp_cider",
              "minecraft:apple",
            ]),
          ]
        )
        .transitionalItem("kubejs:incomplete_kelp_cider")
        .loops(1);

      event.recipes
        .createSequencedAssembly(
          [
            // begin
            "vinery:apple_cider", // output
          ],
          "vinery:wine_bottle",
          [
            // input
            event.recipes.createDeploying("kubejs:incomplete_apple_cider", [
              "kubejs:incomplete_apple_cider",
              "#minecraft:straw",
            ]),
            event.recipes.createDeploying("kubejs:incomplete_apple_cider", [
              "kubejs:incomplete_apple_cider",
              "minecraft:apple",
            ]),
            event.recipes.createDeploying("kubejs:incomplete_apple_cider", [
              "kubejs:incomplete_apple_cider",
              "minecraft:apple",
            ]),
          ]
        )
        .transitionalItem("kubejs:incomplete_apple_cider")
        .loops(1);
    }
    event.recipes
      .createSequencedAssembly(
        [
          // begin
          "immersive_aircraft:engine", // output
        ],
        "create:precision_mechanism",
        [
          // input
          event.recipes.createDeploying("create:incomplete_precision_mechanism", [
            "create:incomplete_precision_mechanism",
            "immersive_aircraft:boiler",
          ]),
          event.recipes.createDeploying("create:incomplete_precision_mechanism", [
            "create:incomplete_precision_mechanism",
            "create:blaze_burner",
          ]),
          event.recipes.createDeploying("create:incomplete_precision_mechanism", [
            "create:incomplete_precision_mechanism",
            "createaddition:capacitor",
          ]),
        ]
      )
      .transitionalItem("create:incomplete_precision_mechanism")
      .loops(2);

    event.recipes
      .createSequencedAssembly(["automobility:launch_gel"], "tconstruct:slimesteel_nugget", [
        event.recipes.createPressing("tconstruct:slimesteel_nugget", "tconstruct:slimesteel_nugget"),
      ])
      .transitionalItem("create:tree_fertilizer")
      .loops(125);

    event.recipes
      .createSequencedAssembly(["createastral:navigation_mechanism"], "phonos:redstone_chip", [
        event.recipes.createFilling("phonos:redstone_chip", [
          "phonos:redstone_chip",
          {
            fluid: "tconstruct:molten_cobalt",
            amount: 1350,
          },
        ]),
        event.recipes.createDeploying("phonos:redstone_chip", ["phonos:redstone_chip", "techreborn:electrum_nugget"]),
        event.recipes.createPressing("phonos:redstone_chip", "phonos:redstone_chip"),
      ])
      .transitionalItem("createastral:incomplete_navigation_mechanism")
      .loops(30);

    event.recipes
      .createSequencedAssembly(
        [
          // begin
          "minecraft:ender_eye", // output
        ],
        "minecraft:ender_pearl",
        [
          // input
          event.recipes.createDeploying("minecraft:ender_pearl", ["minecraft:blaze_powder", "minecraft:blaze_powder"]),
          event.recipes.createDeploying("minecraft:ender_pearl", [
            "create:powdered_obsidian",
            "create:powdered_obsidian",
          ]),
          event.recipes.createPressing("minecraft:ender_pearl", "minecraft:ender_pearl"), //yeah
          event.recipes.createFilling("minecraft:ender_pearl", [
            "minecraft:ender_pearl",
            { fluid: "minecraft:lava", amount: 250 * mB },
          ]), //fill 1/4 bucket lava
          event.recipes.createPressing("minecraft:ender_pearl", "minecraft:ender_pearl"),
        ]
      )
      .transitionalItem("minecraft:ender_pearl")
      .loops(3);

    const inc_redstone_chip = "createastral:incomplete_redstone_chip";
    event.recipes
      .createSequencedAssembly(
        [
          // begin
          "phonos:redstone_chip", // output
        ],
        "create:electron_tube",
        [
          // input
          event.recipes.createFilling("create:electron_tube", [
            inc_redstone_chip,
            { fluid: "tconstruct:molten_copper", amount: 3375 },
          ]),
          event.recipes.createDeploying(inc_redstone_chip, [inc_redstone_chip, "#c:wires"]), //fill obsid
          event.recipes.createPressing(inc_redstone_chip, "#c:wires"), //yeah
        ]
      )
      .transitionalItem(inc_redstone_chip)
      .loops(12);

    event.recipes
      .createSequencedAssembly(
        [
          // begin
          "createastral:shimmer_amplifier", // output
        ],
        "createbigcannons:nethersteel_screw_breech",
        [
          // input
          event.recipes.createFilling("createbigcannons:nethersteel_screw_breech", [
            "createbigcannons:nethersteel_screw_breech",
            { fluid: "kubejs:shimmer", amount: 9000 },
          ]),
          event.recipes.createDeploying("createbigcannons:nethersteel_screw_breech", [
            "createbigcannons:nethersteel_screw_breech",
            "kubejs:fire_resistant_fragile_sheet_block",
          ]),
          event.recipes.createFilling("createbigcannons:nethersteel_screw_breech", [
            "createbigcannons:nethersteel_screw_breech",
            { fluid: "techreborn:lithium", amount: 3000 },
          ]),
          event.recipes.createFilling("createbigcannons:nethersteel_screw_breech", [
            "createbigcannons:nethersteel_screw_breech",
            { fluid: "techreborn:silicon", amount: 3000 },
          ]),
        ]
      )
      .transitionalItem("createastral:incomplete_electronic_circuit")
      .loops(6);

    event.recipes
      .createSequencedAssembly(
        [
          // begin
          "minecraft:ink_sac", // output
        ],
        "minecraft:black_dye",
        [event.recipes.createDeploying("minecraft:black_dye", ["minecraft:black_dye", "minecraft:paper"])]
      )
      .transitionalItem("minecraft:black_dye")
      .loops(2);

    const inc_dash_panel = "createastral:incomplete_dash_panel";
    //Dash panel
    event.recipes
      .createSequencedAssembly(["automobility:dash_panel"], "create:iron_sheet", [
        event.recipes
          .createFilling(inc_dash_panel, [inc_dash_panel, { fluid: "kubejs:shimmer", amount: INGOT }])
          .processingTime(75), //fill
        event.recipes.createPressing(inc_dash_panel, inc_dash_panel).processingTime(75),
      ])
      .transitionalItem(inc_dash_panel)
      .loops(3);

    const inc_refining_agent = "createastral:incomplete_refining_agent";
    event.recipes
      .createSequencedAssembly(["createastral:refining_agent"], "ae2:fluix_dust", [
        event.recipes.createFilling(inc_refining_agent, [
          inc_refining_agent,
          { fluid: "techreborn:nitrogen", amount: 9000 },
        ]),
        event.recipes.createFilling(inc_refining_agent, [
          inc_refining_agent,
          { fluid: "techreborn:biofuel", amount: 9000 },
        ]),
        event.recipes.createPressing(inc_refining_agent, "ae2:fluix_dust"),
      ])
      .transitionalItem(inc_refining_agent)
      .loops(3);

    // Green's bloodyfile.js for meat stuff

    event.recipes // Dough to MEAT
      .createSequencedAssembly(
        ["createastral:seitan"],
        ["create:dough"],
        [
          event.recipes.createFilling("create:dough", ["create:dough", { fluid: "minecraft:water", amount: 100 * mB }]),
          event.recipes.createPressing("create:dough", "create:dough"),
          event.recipes.createCutting("create:dough", "create:dough"),
        ]
      )
      .transitionalItem("create:dough")
      .loops(2);

    event.recipes
      .createSequencedAssembly(
        ["minecraft:porkchop"],
        ["createastral:seitan"],
        [
          event.recipes.createDeploying("createastral:protopork", ["createastral:protopork", "minecraft:rotten_flesh"]),

          event.recipes.createFilling("createastral:protopork", [
            "createastral:protopork",
            { fluid: "tconstruct:blood", amount: 100 * mB },
          ]),

          event.recipes.createPressing("createastral:protopork", "createastral:protopork"),
          event.recipes.createCutting("createastral:protopork", "createastral:protopork"),
        ]
      )
      .transitionalItem("createastral:protopork")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        ["minecraft:mutton"],
        ["createastral:seitan"],
        [
          event.recipes.createDeploying("createastral:protomutton", ["createastral:protomutton", "minecraft:string"]),
          event.recipes.createFilling("createastral:protomutton", [
            "createastral:protomutton",
            { fluid: "tconstruct:blood", amount: 100 * mB },
          ]),
          event.recipes.createPressing("createastral:protomutton", "createastral:protomutton"),
          event.recipes.createCutting("createastral:protomutton", "createastral:protomutton"),
        ]
      )
      .transitionalItem("createastral:protomutton")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        ["minecraft:beef"],
        ["createastral:seitan"],
        [
          event.recipes.createDeploying("createastral:protobeef", ["createastral:protobeef", "minecraft:moss_carpet"]),
          event.recipes.createFilling("createastral:protobeef", [
            "createastral:protobeef",
            { fluid: "tconstruct:blood", amount: 100 * mB },
          ]),
          event.recipes.createPressing("createastral:protobeef", "createastral:protobeef"),
          event.recipes.createCutting("createastral:protobeef", "createastral:protobeef"),
        ]
      )
      .transitionalItem("createastral:protobeef")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        ["minecraft:chicken"],
        ["createastral:seitan"],
        [
          event.recipes.createDeploying("createastral:protochicken", [
            "createastral:protochicken",
            "minecraft:wheat_seeds",
          ]),
          event.recipes.createFilling("createastral:protochicken", [
            "createastral:protochicken",
            { fluid: "tconstruct:blood", amount: 100 * mB },
          ]),
          event.recipes.createPressing("createastral:protochicken", "createastral:protochicken"),
          event.recipes.createCutting("createastral:protochicken", "createastral:protochicken"),
        ]
      )
      .transitionalItem("createastral:protochicken")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        ["minecraft:rabbit"],
        ["createastral:seitan"],
        [
          event.recipes.createDeploying("createastral:protorabbit", ["createastral:protorabbit", "minecraft:carrot"]),
          event.recipes.createFilling("createastral:protorabbit", [
            "createastral:protorabbit",
            { fluid: "tconstruct:blood", amount: 100 * mB },
          ]),
          event.recipes.createPressing("createastral:protorabbit", "createastral:protorabbit"),
          event.recipes.createCutting("createastral:protorabbit", "createastral:protorabbit"),
        ]
      )
      .transitionalItem("createastral:protorabbit")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        ["minecraft:egg"],
        ["createastral:seitan"],
        [
          event.recipes.createDeploying("createastral:seitan", ["createastral:seitan", "techreborn:calcite_dust"]),
          event.recipes.createFilling("createastral:seitan", [
            "createastral:seitan",
            { fluid: "tconstruct:earth_slime", amount: 10 * mB },
          ]),
          event.recipes.createPressing("createastral:seitan", "createastral:seitan"),

          event.recipes.createFilling("createastral:seitan", [
            "createastral:seitan",
            { fluid: "kubejs:shimmer", amount: 10 * mB }, //For the bit of magic required to create life
          ]),
        ]
      )
      .transitionalItem("createastral:seitan")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        //true DIY Ham
        ["farmersdelight:ham"],
        ["minecraft:porkchop"],
        [
          event.recipes.createDeploying("minecraft:porkchop", ["minecraft:porkchop", "minecraft:bone"]),
          event.recipes.createDeploying("minecraft:porkchop", ["minecraft:porkchop", "createastral:seitan"]),

          event.recipes.createFilling("minecraft:porkchop", [
            "minecraft:porkchop",
            { fluid: "tconstruct:blood", amount: 100 * mB },
          ]),

          event.recipes.createPressing("minecraft:porkchop", "minecraft:porkchop"),
        ]
      )
      .transitionalItem("createastral:seitan")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        // Inksack for inky fun
        ["2x minecraft:ink_sac"],
        ["createastral:seitan"],
        [
          event.recipes.createDeploying("createastral:seitan", ["createastral:seitan", "minecraft:black_dye"]),

          event.recipes.createFilling("createastral:seitan", [
            "createastral:seitan",
            { fluid: "minecraft:water", amount: 500 * mB },
          ]),

          event.recipes.createDeploying("createastral:seitan", ["createastral:seitan", "minecraft:black_dye"]),

          event.recipes.createFilling("createastral:seitan", [
            "createastral:seitan",
            { fluid: "minecraft:water", amount: 500 * mB },
          ]),

          event.recipes.createPressing("createastral:seitan", "createastral:seitan"),
        ]
      )
      .transitionalItem("createastral:seitan")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        // If you need some head, drill some bone
        ["tconstruct:blaze_head"],
        ["minecraft:skeleton_skull"],
        [
          event.recipes.createDeploying("createastral:incomplete_blaze_head", [
            "createastral:incomplete_blaze_head",
            "minecraft:blaze_powder",
          ]),

          event.recipes.createFilling("createastral:incomplete_blaze_head", [
            "createastral:incomplete_blaze_head",
            { fluid: "tconstruct:blazing_blood", amount: 100 * mB },
          ]),

          event.recipes.createFilling("createastral:incomplete_blaze_head", [
            "createastral:incomplete_blaze_head",
            { fluid: "kubejs:shimmer", amount: 50 * mB },
          ]),

          event.recipes.createPressing("createastral:incomplete_blaze_head", "createastral:incomplete_blaze_head"),
        ]
      )
      .transitionalItem("createastral:incomplete_blaze_head")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        ["minecraft:small_amethyst_bud"],
        ["minecraft:amethyst_shard"],
        [
          event.recipes.createFilling("minecraft:amethyst_shard", [
            "minecraft:amethyst_shard",
            { fluid: "minecraft:water", amount: BUCKET / 4 },
          ]),
          event.recipes.createFilling("minecraft:amethyst_shard", [
            "minecraft:amethyst_shard",
            { fluid: "kubejs:shimmer", amount: 10 * mB },
          ]),
          event.recipes.createFilling("minecraft:amethyst_shard", [
            "minecraft:amethyst_shard",
            { fluid: "minecraft:water", amount: BUCKET / 4 },
          ]),
          event.recipes.createFilling("minecraft:amethyst_shard", [
            "minecraft:amethyst_shard",
            { fluid: "kubejs:shimmer", amount: 10 * mB },
          ]),
        ]
      )
      .transitionalItem("minecraft:amethyst_shard")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        ["minecraft:medium_amethyst_bud"],
        ["minecraft:small_amethyst_bud"],
        [
          event.recipes.createFilling("minecraft:small_amethyst_bud", [
            "minecraft:small_amethyst_bud",
            { fluid: "minecraft:water", amount: BUCKET / 4 },
          ]),
          event.recipes.createFilling("minecraft:small_amethyst_bud", [
            "minecraft:small_amethyst_bud",
            { fluid: "kubejs:shimmer", amount: 10 * mB },
          ]),
          event.recipes.createFilling("minecraft:small_amethyst_bud", [
            "minecraft:small_amethyst_bud",
            { fluid: "minecraft:water", amount: BUCKET / 4 },
          ]),
          event.recipes.createFilling("minecraft:small_amethyst_bud", [
            "minecraft:small_amethyst_bud",
            { fluid: "kubejs:shimmer", amount: 10 * mB },
          ]),
        ]
      )
      .transitionalItem("minecraft:small_amethyst_bud")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        ["minecraft:large_amethyst_bud"],
        ["minecraft:medium_amethyst_bud"],
        [
          event.recipes.createFilling("minecraft:medium_amethyst_bud", [
            "minecraft:medium_amethyst_bud",
            { fluid: "minecraft:water", amount: BUCKET / 4 },
          ]),
          event.recipes.createFilling("minecraft:medium_amethyst_bud", [
            "minecraft:medium_amethyst_bud",
            { fluid: "kubejs:shimmer", amount: 10 * mB },
          ]),
          event.recipes.createFilling("minecraft:medium_amethyst_bud", [
            "minecraft:medium_amethyst_bud",
            { fluid: "minecraft:water", amount: BUCKET / 4 },
          ]),
          event.recipes.createFilling("minecraft:medium_amethyst_bud", [
            "minecraft:medium_amethyst_bud",
            { fluid: "kubejs:shimmer", amount: 10 * mB },
          ]),
        ]
      )
      .transitionalItem("minecraft:medium_amethyst_bud")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        ["minecraft:amethyst_cluster"],
        ["minecraft:large_amethyst_bud"],
        [
          event.recipes.createFilling("minecraft:large_amethyst_bud", [
            "minecraft:large_amethyst_bud",
            { fluid: "minecraft:water", amount: BUCKET / 4 },
          ]),
          event.recipes.createFilling("minecraft:large_amethyst_bud", [
            "minecraft:large_amethyst_bud",
            { fluid: "kubejs:shimmer", amount: 10 * mB },
          ]),
          event.recipes.createFilling("minecraft:large_amethyst_bud", [
            "minecraft:large_amethyst_bud",
            { fluid: "minecraft:water", amount: BUCKET / 4 },
          ]),
          event.recipes.createFilling("minecraft:large_amethyst_bud", [
            "minecraft:large_amethyst_bud",
            { fluid: "kubejs:shimmer", amount: 10 * mB },
          ]),
        ]
      )
      .transitionalItem("minecraft:large_amethyst_bud")
      .loops(1);

    enchantBooks(event);
    event.recipes
      .createSequencedAssembly(
        [
          // begin
          "createastral:ancient_stone", // output
        ],
        "ad_astra:mars_sand",
        [
          event.recipes.createDeploying("createastral:martian_clump", [
            "createastral:martian_clump",
            "tconstruct:debris_nugget",
          ]),
          event.recipes.createFilling("createastral:martian_clump", [
            "createastral:martian_clump",
            { fluid: "kubejs:shimmer", amount: BUCKET / 2 },
          ]),
        ]
      )
      .transitionalItem("createastral:martian_clump")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        [
          // output
          Item.of("astralfoods:cod_n_blaze").withChance(1), // begin
        ],
        "astralfoods:blaze_fries_and_cod",
        [
          // input
          event.recipes.createDeploying("astralfoods:blaze_fries_and_cod", [
            "astralfoods:blaze_fries_and_cod",
            "minecraft:paper",
          ]),
        ]
      )
      .transitionalItem("astralfoods:blaze_fries_and_cod")
      .loops(3);

    event.recipes
      .createSequencedAssembly(Item.of("ad_astra:moon_stone"), "minecraft:stone", [
        event.recipes.createPressing("minecraft:stone", "minecraft:stone"),
        event.recipes.createFilling("minecraft:stone", [
          "minecraft:stone",
          { fluid: "kubejs:shimmer", amount: 250 * mB },
        ]),
      ])
      .transitionalItem("minecraft:stone")
      .loops(4);
  });

  function enchantBooks(event) {
    //! enchantment.js

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "minecraft:golden_sword",
            "minecraft:golden_sword",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "tconstruct:gold_reinforcement",
            "tconstruct:gold_reinforcement",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "tconstruct:iron_reinforcement",
            "tconstruct:iron_reinforcement",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:mending",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "tconstruct:slimesteel_reinforcement",
            "tconstruct:slimesteel_reinforcement",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "tconstruct:seared_reinforcement",
            "tconstruct:seared_reinforcement",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "tconstruct:emerald_reinforcement",
            "tconstruct:emerald_reinforcement",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "tconstruct:bronze_reinforcement",
            "tconstruct:bronze_reinforcement",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "tconstruct:cobalt_reinforcement",
            "tconstruct:cobalt_reinforcement",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "dustrial_decor:wrapped_chains",
            "dustrial_decor:wrapped_chains",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "minecraft:soul_lantern",
            "minecraft:soul_lantern",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "techreborn:silver_plate",
            "techreborn:silver_plate",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:silk_touch",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "tconstruct:silky_cloth",
            "tconstruct:silky_cloth",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "create:copper_diving_helmet",
            "create:copper_diving_helmet",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:lever", "minecraft:lever"]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:punch",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", ["create:brass_hand", "create:brass_hand"]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:gunpowder", "minecraft:gunpowder"]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:piston", "minecraft:piston"]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:multishot",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:crossbow", "minecraft:crossbow"]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "ad_astra:calorite_ingot",
            "ad_astra:calorite_ingot",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:knockback",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:tnt", "minecraft:tnt"]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:infinity",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "minecraft:spectral_arrow",
            "minecraft:spectral_arrow",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "minecraft:spectral_arrow",
            "minecraft:spectral_arrow",
          ]), // Why? Just to fug wit ppl
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:blue_ice", "minecraft:blue_ice"]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "tconstruct:jeweled_apple",
            "tconstruct:jeweled_apple",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:flame",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "minecraft:blaze_powder",
            "minecraft:blaze_powder",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:blaze_rod", "minecraft:blaze_rod"]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:white_bed", "minecraft:white_bed"]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            Item.of("minecraft:potion", '{Potion:"minecraft:swiftness"}'),
            Item.of("minecraft:potion", '{Potion:"minecraft:swiftness"}'),
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:depth_strider",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "create:copper_diving_boots",
            "create:copper_diving_boots",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:aqua_affinity",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "create:copper_backtank",
            "create:copper_backtank",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:spider_eye", "minecraft:spider_eye"]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "farmersdelight:cod_slice",
            "farmersdelight:cod_slice",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "minecraft:golden_apple",
            "minecraft:golden_apple",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:sea_lantern", "minecraft:sea_lantern"]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "minecraft:dark_prismarine",
            "minecraft:dark_prismarine",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "minecraft:prismarine_shard",
            "minecraft:prismarine_shard",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes.createSequencedAssembly(
      Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:channeling",lvl:1s}]}'),
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "minecraft:lightning_rod",
          "minecraft:lightning_rod",
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET },
        ]), //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
      ]
    );

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "farmersdelight:iron_knife",
            "farmersdelight:iron_knife",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"create:capacity",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "ad_astra:oxygen_bucket",
            "ad_astra:oxygen_bucket",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"create:potato_recovery",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "ad_astra:oxygen_bucket",
            "ad_astra:oxygen_bucket",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);

    event.recipes
      .createSequencedAssembly(
        Item.of("xpcrystals:xp_boost_potion"),
        ["minecraft:glass_bottle"],
        [
          event.recipes.createFilling("minecraft:glass_bottle", [
            "minecraft:glass_bottle",
            {
              fluid: "kubejs:liquid_xp_nuggies",
              amount: BUCKET / 3,
            },
          ]),
          event.recipes.createFilling("minecraft:glass_bottle", [
            "minecraft:glass_bottle",
            {
              fluid: "xpcrystals:soul",
              amount: BUCKET / 3,
            },
          ]),
          event.recipes.createFilling("minecraft:glass_bottle", [
            "minecraft:glass_bottle",
            {
              fluid: "kubejs:shimmer",
              amount: BUCKET / 3,
            },
          ]),
        ]
      )
      .transitionalItem("minecraft:glass_bottle")
      .loops(1);

    //! dungeonsenchants.js

    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:accelerate",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:rabbit_foot", "minecraft:rabbit_foot"]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:ambush",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:leather", "minecraft:leather"]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes.createSequencedAssembly(
      Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:anima_conduit",lvl:1s}]}'),
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "astraladditions:shimmer_heart",
          "astraladditions:shimmer_heart",
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET },
        ]), //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
      ]
    );
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:bonus_shot",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "createbigcannons:flak_autocannon_round",
            "createbigcannons:flak_autocannon_round",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:burst_bowstring",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", ["doodads:slimey_shoes", "doodads:slimey_shoes"]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:chain_reaction",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "createbigcannons:shot_balls",
            "createbigcannons:shot_balls",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:chains",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:chain", "minecraft:chain"]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:charge",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", ["create:sturdy_sheet", "create:sturdy_sheet"]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:cobweb_shot",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:cobweb", "minecraft:cobweb"]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:committed",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "techreborn:diamond_saw_blade",
            "techreborn:diamond_saw_blade",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:critical_hit",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:nether_star", "minecraft:nether_star"]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:dipping_poison",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:pufferfish", "minecraft:pufferfish"]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:dynamo",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "tconstruct:slime_boots",
            "tconstruct:slime_boots",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:echo",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:jukebox", "minecraft:jukebox"]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:enigma_resonator",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "tconstruct:sky_slime_crystal",
            "tconstruct:sky_slime_crystal",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:exploding",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "createbigcannons:he_shell",
            "createbigcannons:he_shell",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:freezing",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", ["ad_astra:ice_shard", "ad_astra:ice_shard"]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:fuse_shot",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "createbigcannons:impact_fuze",
            "createbigcannons:impact_fuze",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:gravity",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "create:weighted_ejector",
            "create:weighted_ejector",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:guarding_strike",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:shield", "minecraft:shield"]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:fuse_shot",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "createbigcannons:impact_fuze",
            "createbigcannons:impact_fuze",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:illagers_bane",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "minecraft:totem_of_undying",
            "minecraft:totem_of_undying",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:jungle_poison",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "minecraft:poisonous_potato",
            "minecraft:poisonous_potato",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:leeching",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "tconstruct:necrotic_bone",
            "tconstruct:necrotic_bone",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:levitation_shot",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "minecraft:phantom_membrane",
            "minecraft:phantom_membrane",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:overcharge",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "createbigcannons:nitropowder",
            "createbigcannons:nitropowder",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:leeching",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "tconstruct:necrotic_bone",
            "tconstruct:necrotic_bone",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:pain_cycle",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", ["tconstruct:bloodbone", "tconstruct:bloodbone"]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:phantoms_mark",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:glowstone", "minecraft:glowstone"]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:poison_cloud",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "minecraft:spore_blossom",
            "minecraft:spore_blossom",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:prospector",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "tconstruct:emerald_reinforcement",
            "tconstruct:emerald_reinforcement",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:radiance",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "minecraft:glow_berries",
            "minecraft:glow_berries",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:rampaging",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "techreborn:overclocker_upgrade",
            "techreborn:overclocker_upgrade",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:refreshment",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "farmersdelight:melon_juice",
            "farmersdelight:melon_juice",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:ricochet",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "createbigcannons:recoil_spring",
            "createbigcannons:recoil_spring",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:replenish",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "automobility:launch_gel",
            "automobility:launch_gel",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:rushdown",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "automobility:dash_panel",
            "automobility:dash_panel",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:shadow_barb",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "createaddition:barbed_wire",
            "createaddition:barbed_wire",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:shared_pain",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", ["doodads:cactus_ring", "doodads:cactus_ring"]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:shadow_shot",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "createbigcannons:solid_shot",
            "createbigcannons:solid_shot",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:shockwave",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "createbigcannons:shrapnel_shell",
            "createbigcannons:shrapnel_shell",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:smiting",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", ["yigd:grave", "yigd:grave"]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:soul_devourer",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "tconstruct:soulsteel_nugget",
            "tconstruct:soulsteel_nugget",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:soul_siphon",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "xpcrystals:soul_compound",
            "xpcrystals:soul_compound",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:stunning",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", ["drinkbeer:beer_mug", "drinkbeer:beer_mug"]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:swirling",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "ae2:certus_quartz_crystal",
            "ae2:certus_quartz_crystal",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:tempo_theft",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "createastral:swift_andesite",
            "createastral:swift_andesite",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:thundering",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "minecraft:lightning_rod",
            "minecraft:lightning_rod",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:replenish",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "createbigcannons:recoil_spring",
            "createbigcannons:recoil_spring",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:weakening",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:wither_rose", "minecraft:wither_rose"]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:wild_rage",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "tconstruct:blood_slime_ball",
            "tconstruct:blood_slime_ball",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    //void stuffs
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:void_strike",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", [
            "create:refined_radiance",
            "create:refined_radiance",
          ]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:void_shot",lvl:1s}]}'),
        ["minecraft:book"],
        [
          event.recipes.createDeploying("minecraft:enchanted_book", ["create:shadow_steel", "create:shadow_steel"]),
          event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]), // insert crystal here / def something that could be changed
          event.recipes.createFilling("minecraft:enchanted_book", [
            "minecraft:enchanted_book",
            { fluid: "xpcrystals:soul", amount: BUCKET },
          ]), //gathering the souls / def something that could be changed
          event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book"),
        ]
      )
      .transitionalItem("minecraft:enchanted_book")
      .loops(1);
    event.recipes
      .createSequencedAssembly(
        Item.of("xpcrystals:xp_boost_potion"),
        ["minecraft:glass_bottle"],
        [
          event.recipes.createFilling("minecraft:glass_bottle", [
            "minecraft:glass_bottle",
            {
              fluid: "kubejs:liquid_xp_nuggies",
              amount: BUCKET / 3,
            },
          ]),
          event.recipes.createFilling("minecraft:glass_bottle", [
            "minecraft:glass_bottle",
            {
              fluid: "xpcrystals:soul",
              amount: BUCKET / 3,
            },
          ]),
          event.recipes.createFilling("minecraft:glass_bottle", [
            "minecraft:glass_bottle",
            {
              fluid: "kubejs:shimmer",
              amount: BUCKET / 3,
            },
          ]),
        ]
      )
      .transitionalItem("minecraft:glass_bottle")
      .loops(1);
  }
}
