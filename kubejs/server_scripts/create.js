onEvent("recipes", (event) => {
    crushingRecipes(event);
    millingRecipes(event);
    itemApplication(event);
    sequencedAssemblyRecipes(event);

    fillingRecipes(event);
    mixingRecipes(event);
    cuttingRecipes(event);
    hauntingRecipes(event);
    splashingRecipes(event);
    deployerRecipes(event);
    mechanicalCraftingRecipes(event);
    compactingRecipes(event);
    pressingRecipes(event);
});

function millingRecipes(event) {
    //Input, Output, Chance
    [
        ["farmersdelight:straw", "minecraft:string", 1],
        ["minecraft:gravel", "minecraft:sand", 0.25],
        ["create:veridium", "minecraft:raw_copper", 0.3],
        ["create:asurine", "techreborn:raw_tin", 0.2],
        ["create:crimsite", "minecraft:raw_iron", 0.2],
        ["create:ochrum", "minecraft:raw_gold", 0.2],
    ].forEach((recipe) => {
        event.recipes.createMilling(
            [Item.of(recipe[1]).withChance(recipe[2])],
            recipe[0]
        );
    });
}
function crushingRecipes(event) {
    //Replace with other netherrack inputs and outputs
    event.remove({ type: "create:crushing", input: "minecraft:netherrack" });

    // Remove grinder calcite dust
    event.remove({
        type: "techreborn:grinder",
        input: "#techreborn:calcite_dust_material",
    });

    const CRUSHING_ORE_BONUS_ORE_YIELD = 0.33;
    const CRUSHING_ORE_BONUS_XP_CHUNKS = 0.33;

    // input: "Item"
    // outputs: [
    //      ["Item", Chance],
    //      ["Item", Chance],
    //      ...
    //   ]
    [
        {
            input: "minecraft:cobbled_deepslate",
            outputs: [
                ["minecraft:raw_iron", 0.002],
                ["minecraft:raw_gold", 0.001],
                ["create:raw_zinc", 0.001],
                ["minecraft:raw_copper", 0.002],
                ["minecraft:coal", 0.004],
                ["techreborn:raw_tin", 0.002],
                ["minecraft:redstone", 0.005],
                ["minecraft:lapis_lazuli", 0.002],
            ],
        },
        //Diorite,Granite,Andesite Crushing
        {
            input: "minecraft:diorite",
            outputs: [
                ["minecraft:quartz", 1],
                ["techreborn:diorite_dust", 1],
                ["techreborn:diorite_dust", 0.5],
                ["minecraft:quartz", 0.25],
            ],
        },
        {
            input: "minecraft:granite",
            outputs: [
                ["minecraft:red_sand", 1],
                ["techreborn:granite_dust", 1],
                ["techreborn:granite_dust", 0.5],
                ["minecraft:red_sand", 0.25],
            ],
        },
        {
            input: "minecraft:andesite",
            outputs: [
                ["minecraft:cobblestone", 1],
                ["techreborn:andesite_dust", 1],
                ["techreborn:andesite_dust", 0.5],
            ],
        },
        //Netherack Crushing
        {
            input: "minecraft:netherrack",
            outputs: [
                ["techreborn:netherrack_dust", 1],
                ["techreborn:netherrack_dust", 0.5],
            ],
        },
        {
            input: "minecraft:warped_nylium",
            outputs: [
                ["techreborn:netherrack_dust", 1],
                ["techreborn:netherrack_dust", 0.5],
                ["minecraft:warped_fungus", 0.1],
            ],
        },
        {
            input: "minecraft:crimson_nylium",
            outputs: [
                ["techreborn:netherrack_dust", 1],
                ["techreborn:netherrack_dust", 0.5],
                ["minecraft:crimson_fungus", 0.1],
            ],
        },
        // warped fungi crushing
        {
            input: "minecraft:warped_wart_block",
            outputs: [
                ["minecraft:warped_roots", 1],
                ["minecraft:warped_fungus", 0.15],
            ],
        },
        //Add Lime
        {
            input: "create:limestone",
            outputs: [
                ["createastral:lime", 1],
                ["createastral:lime", 0.5],
                ["minecraft:clay_ball", 0.2],
            ],
        },
        {
            input: "minecraft:dripstone_block",
            outputs: [
                ["minecraft:clay_ball", 1],
                ["minecraft:clay_ball", 0.5],
            ],
        },
        {
            input: "#coral_blocks",
            outputs: [["techreborn:calcite_dust", 1]],
        },
        //Asurine, Veridiun Crushing
        {
            input: "create:asurine",
            outputs: [
                ["techreborn:lazurite_dust", 0.5],
                ["techreborn:raw_tin", 0.2],
                ["techreborn:tin_nugget", 0.3],
                ["minecraft:clay_ball", 0.2],
            ],
        },
        {
            input: "create:veridium",
            outputs: [
                ["techreborn:olivine_dust", 0.5],
                ["minecraft:raw_copper", 0.6],
                ["create:copper_nugget", 0.8],
                ["minecraft:clay_ball", 0.2],
            ],
        },
        // Ad Astra Crushing
        {
            input: "ad_astra:moon_stone",
            outputs: [["ad_astra:moon_sand", 1]],
        },
        {
            input: "ad_astra:moon_sand",
            outputs: [["minecraft:quartz", 0.05]],
        },
        {
            input: "ad_astra:mars_stone",
            outputs: [["ad_astra:mars_sand", 1]],
        },
        {
            input: "ad_astra:conglomerate",
            outputs: [["ad_astra:ostrum_nugget", 0.3]],
        },
        {
            input: "ad_astra:infernal_spire_block",
            outputs: [
                ["minecraft:magma_block", 1],
                ["tconstruct:debris_nugget", 0.03],
            ],
        },
    ].forEach((recipe) => {
        let cleanoutputs = [];
        recipe.outputs.forEach((output) => {
            if (output[1] == 1) cleanoutputs.push(output[0]);
            else {
                cleanoutputs.push(Item.of(output[0]).withChance(output[1]));
            }
        });
        event.recipes.createCrushing(cleanoutputs, recipe.input);
    });

    // Replace grinder recipes with crushing recipes
    [
        ["minecraft:wet_sponge", "5x techreborn:sponge_piece"],
        ["minecraft:prismarine_bricks", "7x minecraft:prismarine_shard"],
        ["minecraft:prismarine", "3x minecraft:prismarine_shard"],
        ["minecraft:sea_lantern", "4x prismarine_crystals"],
        ["#c:basalt", "techreborn:basalt_dust"],
        ["minecraft:end_stone", "techreborn:endstone_dust"],
    ].forEach((recipe) => {
        event.remove({ type: "techreborn:grinder", input: recipe[0] });
        event.recipes.createCrushing([recipe[1]], recipe[0]);
    });

    // Replace all techreborn ores to require the crushing wheel for dusts
    [
        "sapphire",
        "bauxite",
        "cinnabar",
        "ruby",
        "galena",
        "peridot",
        "sodalite",
        "pyrite",
        "cinnabar",
        "sphalerite",
    ].forEach((ore) => {
        const nodeepslate = ["pyrite", "cinnabar", "sphalerite"];
        event.remove({
            type: "techreborn:grinder",
            input: "techreborn:" + ore + "_ore",
        });
        if (!nodeepslate.includes(ore)) {
            event.remove({
                type: "techreborn:grinder",
                input: "techreborn:deepslate_" + ore + "_ore",
            });
        }
        event.recipes.createCrushing(
            [
                "techreborn:" + ore + "_dust",
                Item.of("techreborn:" + ore + "_dust").withChance(0.5),
            ],
            "techreborn:" + ore + "_ore"
        );
        if (!nodeepslate.includes(ore)) {
            event.recipes.createCrushing(
                [
                    "techreborn:" + ore + "_dust",
                    Item.of("techreborn:" + ore + "_dust").withChance(0.5),
                ],
                "techreborn:deepslate_" + ore + "_ore"
            );
        }
    });

    // Replaces the ore blocks with crushing recipes to produce raw ore instead of grinder recipes
    [
        "silver",
        "deepslate_silver",
        "tin",
        "deepslate_tin",
        "lead",
        "deepslate_lead",
    ].forEach((ore) => {
        event.remove({
            type: "techreborn:grinder",
            input: "techreborn:" + ore + "_ore",
        });
        event.recipes.createCrushing(
            ["2x techreborn:raw_" + ore.split("_")[1]],
            "techreborn:" + ore + "_ore"
        );
    });

    // Crushed Ore Items
    [
        {
            mod: "techreborn",
            ores: [
                {
                    name: "tin",
                    extra: Item.of("minecraft:iron_nugget").withChance(0.2),
                },
                { name: "silver", extra: "" },
                {
                    name: "lead",
                    extra: Item.of("minecraft:coal").withChance(0.2),
                },
            ],
        },
        {
            mod: "ad_astra",
            ores: [
                {
                    name: "desh",
                    extra: Item.of("techreborn:silver_nugget").withChance(0.2),
                },
                {
                    name: "ostrum",
                    extra: Item.of("techreborn:lead_nugget").withChance(0.2),
                },
                { name: "calorite", extra: "" },
            ],
        },
        {
            mod: "create",
            ores: [{ name: "zinc", extra: "" }],
        },
        {
            mod: "minecraft",
            ores: [
                { name: "iron", extra: "" },
                { name: "gold", extra: "" },
                { name: "copper", extra: "" },
            ],
        },
    ].forEach((mod) => {
        mod.ores.forEach((ore) => {
            let raw_ore = mod.mod + ":raw_" + ore.name;
            let crushed_ore =
                "create" +
                (mod.mod == "ad_astra" ? "astral" : "") +
                ":crushed_" +
                ore.name +
                "_ore";
            let outputs = [
                crushed_ore,
                Item.of(crushed_ore).withChance(CRUSHING_ORE_BONUS_ORE_YIELD),
                Item.of("create:experience_nugget").withChance(
                    CRUSHING_ORE_BONUS_XP_CHUNKS
                ),
            ];
            if (ore.extra != "") outputs.push(ore.extra);
            event.recipes.createCrushing(outputs, raw_ore);
        });
    });

    event.remove({ output: "create:crushed_tin_ore" });
    event.remove({ output: "create:crushed_silver_ore" });
    event.remove({ output: "create:crushed_lead_ore" });
    event.remove({
        input: "minecraft:raw_iron",
        output: "create:crushed_iron_ore",
    });
    event.remove({
        input: "minecraft:raw_gold",
        output: "create:crushed_gold_ore",
    });
    event.remove({
        input: "minecraft:raw_copper",
        output: "create:crushed_copper_ore",
    });
    event.remove({
        input: "create:raw_zinc",
        output: "create:crushed_zinc_ore",
    });
    event.remove({ output: "create:crushed_uranium_ore" });
}
function itemApplication(event) {
    [
        {
            ingredients: [
                { item: "create:andesite_casing" },
                { tag: "c:plates/obsidian" },
            ],
            results: [{ item: "create:railway_casing" }],
        },
        {
            ingredients: [
                { item: "techreborn:basic_machine_casing" },
                { item: "ad_astra:compressed_steel" },
            ],
            results: [{ item: "techreborn:advanced_machine_casing" }],
        },
        {
            ingredients: [
                { item: "techreborn:advanced_machine_frame" },
                { item: "techreborn:machine_parts" },
            ],
            results: [{ item: "techreborn:industrial_machine_frame" }],
        },
        {
            ingredients: [
                { item: "techreborn:basic_machine_frame" },
                { item: "techreborn:lead_plate" },
            ],
            results: [{ item: "techreborn:advanced_machine_frame" }],
        },
        {
            ingredients: [
                { item: "techreborn:basic_machine_casing" },
                { item: "create:sturdy_sheet" },
            ],
            results: [{ item: "techreborn:industrial_machine_casing" }],
        },
    ].forEach((recipe) => {
        event.custom({
            type: "create:item_application",
            ingredients: recipe.ingredients,
            results: recipe.results,
        });
    });

    event.remove({
        output: "create:brass_casing",
        type: "create:item_application",
    });
}
function sequencedAssemblyRecipes(event) {
    biomassSequence(event);
    circuitSequence(event);
    diamondSequence(event);
    casingSequence(event);
    piglinSequence(event);

    let transitional_sturdy_sheet = "create:unprocessed_obsidian_sheet";
    event.recipes
        .createSequencedAssembly(
            [
                Item.of("create:sturdy_sheet").withChance(12),
                Item.of("minecraft:gravel").withChance(8),
            ],
            "#c:dusts/obsidian",
            [
                event.recipes.createPressing(
                    transitional_sturdy_sheet,
                    transitional_sturdy_sheet
                ),
                event.recipes.createPressing(
                    transitional_sturdy_sheet,
                    transitional_sturdy_sheet
                ),
            ]
        )
        .transitionalItem(transitional_sturdy_sheet)
        .loops(5);

    function biomassSequence(event) {
        event.remove({ output: "techreborn:compressed_plantball" });

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
                [
                    event.recipes.createPressing(
                        transitional_c_plantball,
                        transitional_c_plantball
                    ),
                ]
            )
            .transitionalItem(transitional_c_plantball)
            .loops(4);

        event.remove({
            output: "createaddition:biomass_pellet",
        });

        var transitional_bio_pellet = "createaddition:biomass";
        event.recipes
            .createSequencedAssembly(
                [Item.of("4x createaddition:biomass_pellet").withChance(1)],
                "createaddition:biomass",
                [
                    event.recipes.createCutting(
                        transitional_bio_pellet,
                        transitional_bio_pellet
                    ),
                    event.recipes.createCutting(
                        transitional_bio_pellet,
                        transitional_bio_pellet
                    ),
                    event.recipes.createPressing(
                        transitional_bio_pellet,
                        transitional_bio_pellet
                    ),
                ]
            )
            .transitionalItem(transitional_bio_pellet)
            .loops(1);
        event.remove({ output: "techreborn:compressed_plantball" });

        event.recipes
            .createSequencedAssembly(
                [
                    Item.of("techreborn:compressed_plantball").withChance(8),
                    Item.of("minecraft:grass").withChance(1),
                    Item.of("minecraft:green_dye").withChance(0.5),
                    Item.of("farmersdelight:straw").withChance(0.5),
                ],
                "techreborn:plantball",
                [
                    event.recipes.createPressing(
                        transitional_c_plantball,
                        transitional_c_plantball
                    ),
                ]
            )
            .transitionalItem(transitional_c_plantball)
            .loops(4);

        event.remove({
            output: "createaddition:biomass_pellet",
        });

        event.recipes
            .createSequencedAssembly(
                [Item.of("4x createaddition:biomass_pellet").withChance(1)],
                "createaddition:biomass",
                [
                    event.recipes.createCutting(
                        transitional_bio_pellet,
                        transitional_bio_pellet
                    ),
                    event.recipes.createCutting(
                        transitional_bio_pellet,
                        transitional_bio_pellet
                    ),
                    event.recipes.createPressing(
                        transitional_bio_pellet,
                        transitional_bio_pellet
                    ),
                ]
            )
            .transitionalItem(transitional_bio_pellet)
            .loops(1);
    }
    function circuitSequence(event) {
        event.recipes
            .createSequencedAssembly(
                [
                    // begin
                    "createastral:incomplete_electronic_circuit", // output
                ],
                "create:integrated_circuit",
                [
                    // input
                    event.recipes.createDeploying("create:integrated_circuit", [
                        "create:integrated_circuit",
                        "createastral:electrified_pin",
                    ]),
                ]
            )
            .transitionalItem("create:integrated_circuit")
            .loops(64);

        event.recipes
            .createSequencedAssembly(
                [
                    // begin
                    "techreborn:electronic_circuit", // output
                ],
                "createastral:incomplete_electronic_circuit",
                [
                    // input
                    event.recipes.createDeploying(
                        "createastral:incomplete_electronic_circuit",
                        [
                            "createastral:incomplete_electronic_circuit",
                            "ad_astra:compressed_ostrum",
                        ]
                    ),
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
                ["create:integrated_circuit"],
                "create:lapis_sheet",
                [
                    event.recipes.createFilling("create:lapis_sheet", [
                        "create:lapis_sheet",
                        { fluid: "tconstruct:molten_silver", amount: 3375 },
                    ]), //fill bronze
                    event.recipes.createDeploying("create:lapis_sheet", [
                        "create:lapis_sheet",
                        "createaddition:copper_wire",
                    ]), //fill bronze
                    event.recipes.createDeploying("create:lapis_sheet", [
                        "create:lapis_sheet",
                        "createaddition:copper_wire",
                    ]), //fill bronze
                    event.recipes.createPressing(
                        "create:lapis_sheet",
                        "create:lapis_sheet"
                    ),
                ]
            )
            .transitionalItem("create:lapis_sheet")
            .loops(6);

        event.recipes
            .createSequencedAssembly(
                ["techreborn:industrial_circuit"],
                "techreborn:electronic_circuit",
                [
                    event.recipes.createFilling(
                        "techreborn:electronic_circuit",
                        [
                            "techreborn:electronic_circuit",
                            { fluid: "techreborn:lithium", amount: 4500 },
                        ]
                    ), //fill bronze
                    event.recipes.createPressing(
                        "techreborn:electronic_circuit",
                        "techreborn:electronic_circuit"
                    ),
                    event.recipes.createDeploying(
                        "techreborn:electronic_circuit",
                        [
                            "techreborn:electronic_circuit",
                            "techreborn:machine_parts",
                        ]
                    ),
                    event.recipes.createDeploying(
                        "techreborn:electronic_circuit",
                        [
                            "techreborn:electronic_circuit",
                            "createastral:calorite_pin",
                        ]
                    ), //fill bronze
                ]
            )
            .transitionalItem("techreborn:electronic_circuit")
            .loops(9);
    }
    function casingSequence(event) {
        event.recipes
            .createSequencedAssembly(
                [
                    // begin
                    "create:copper_casing", // output
                ],
                "create:andesite_casing",
                [
                    // input
                    event.recipes.createDeploying("create:andesite_casing", [
                        "techreborn:rubber",
                        "techreborn:rubber",
                    ]),
                    event.recipes.createDeploying("create:andesite_casing", [
                        "create:copper_sheet",
                        "create:copper_sheet",
                    ]),
                ]
            )
            .transitionalItem("create:andesite_casing")
            .loops(3);

        event.recipes
            .createSequencedAssembly(
                [
                    // begin
                    "techreborn:basic_machine_frame", // output
                ],
                "create:copper_casing",
                [
                    // input
                    event.recipes.createFilling("create:copper_casing", [
                        "create:copper_casing",
                        { fluid: "tconstruct:molten_silver", amount: 9000 },
                    ]),
                    event.recipes.createDeploying("create:copper_casing", [
                        "create:copper_casing",
                        "techreborn:rubber",
                    ]),
                    event.recipes.createPressing(
                        "create:copper_casing",
                        "create:copper_casing"
                    ), //yeah!
                ]
            )
            .transitionalItem("create:copper_casing")
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
                        event.recipes.createFilling(
                            "createastral:brass_" + item[0],
                            [
                                "createastral:brass_" + item[0],
                                {
                                    fluid: "tconstruct:molten_diamond",
                                    amount: 20250,
                                },
                            ]
                        ),
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
                    event.recipes
                        .createCutting(
                            "create:golden_sheet",
                            "create:golden_sheet"
                        )
                        .processingTime(30),
                    event.recipes.createDeploying("create:golden_sheet", [
                        "minecraft:gold_nugget",
                        "minecraft:gold_nugget",
                    ]),
                    event.recipes.createDeploying("create:golden_sheet", [
                        "minecraft:piglin_banner_pattern",
                        "minecraft:piglin_banner_pattern",
                    ]),
                    event.recipes
                        .createPressing(
                            "create:golden_sheet",
                            "create:golden_sheet"
                        )
                        .processingTime(75),
                ]
            )
            .transitionalItem("createastral:coin")
            .loops(1);

        event.remove({ output: "passivepiglins:piglin_fortune" });
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

        event.remove({ output: "passivepiglins:piglin_totem" });
        event.recipes
            .createSequencedAssembly(
                [
                    // begin
                    "passivepiglins:piglin_totem", // output
                ],
                Item.of("minecraft:gold_ingot"),
                [
                    // input
                    event.recipes.createDeploying("minecraft:gold_ingot", [
                        "minecraft:gold_nugget",
                        "minecraft:gold_nugget",
                    ]),
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
    event.recipes
        .createSequencedAssembly(
            [
                // begin
                "immersive_aircraft:engine", // output
            ],
            "create:precision_mechanism",
            [
                // input
                event.recipes.createDeploying(
                    "create:incomplete_precision_mechanism",
                    [
                        "create:incomplete_precision_mechanism",
                        "immersive_aircraft:boiler",
                    ]
                ),
                event.recipes.createDeploying(
                    "create:incomplete_precision_mechanism",
                    [
                        "create:incomplete_precision_mechanism",
                        "techreborn:nak_coolant_cell_60k",
                    ]
                ),
                event.recipes.createDeploying(
                    "create:incomplete_precision_mechanism",
                    [
                        "create:incomplete_precision_mechanism",
                        "createaddition:capacitor",
                    ]
                ),
            ]
        )
        .transitionalItem("create:incomplete_precision_mechanism")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            ["automobility:launch_gel"],
            "tconstruct:slimesteel_nugget",
            [
                event.recipes.createPressing(
                    "tconstruct:slimesteel_nugget",
                    "tconstruct:slimesteel_nugget"
                ),
            ]
        )
        .transitionalItem("create:tree_fertilizer")
        .loops(125);

    event.recipes
        .createSequencedAssembly(
            ["createastral:navigation_mechanism"],
            "phonos:redstone_chip",
            [
                event.recipes.createFilling(
                    "create:incomplete_precision_mechanism",
                    [
                        "create:incomplete_precision_mechanism",
                        {
                            fluid: "tconstruct:molten_cobalt",
                            amount: 1350,
                        },
                    ]
                ), //fill bronze
                event.recipes.createDeploying(
                    "create:incomplete_precision_mechanism",
                    ["techreborn:electrum_nugget", "techreborn:electrum_nugget"]
                ), //fill bronze
                event.recipes.createPressing(
                    "create:incomplete_precision_mechanism",
                    "create:incomplete_precision_mechanism"
                ),
            ]
        )
        .transitionalItem("create:incomplete_precision_mechanism")
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
                event.recipes.createDeploying("minecraft:ender_pearl", [
                    "minecraft:blaze_powder",
                    "minecraft:blaze_powder",
                ]),
                event.recipes.createDeploying("minecraft:ender_pearl", [
                    "create:powdered_obsidian",
                    "create:powdered_obsidian",
                ]),
                event.recipes.createPressing(
                    "minecraft:ender_pearl",
                    "minecraft:ender_pearl"
                ), //yeah
                event.recipes.createFilling("minecraft:ender_pearl", [
                    "minecraft:ender_pearl",
                    { fluid: "minecraft:lava", amount: 20250 },
                ]), //fill 1/4 bucket lava
                event.recipes.createPressing(
                    "minecraft:ender_pearl",
                    "minecraft:ender_pearl"
                ),
            ]
        )
        .transitionalItem("minecraft:ender_pearl")
        .loops(3);

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
                    "create:electron_tube",
                    { fluid: "tconstruct:molten_copper", amount: 3375 },
                ]), //fill bronze
                event.recipes.createDeploying("create:electron_tube", [
                    "create:electron_tube",
                    "#c:wires",
                ]), //fill obsid
                event.recipes.createPressing(
                    "create:electron_tube",
                    "#c:wires"
                ), //yeah
            ]
        )
        .transitionalItem("create:electron_tube")
        .loops(12);

    //Dash panel
    event.recipes
        .createSequencedAssembly(
            ["automobility:dash_panel"],
            "ad_astra:iron_plate",
            [
                event.recipes
                    .createFilling("ad_astra:iron_plate", [
                        "ad_astra:iron_plate",
                        { fluid: "kubejs:shimmer", amount: 9000 },
                    ])
                    .processingTime(75), //fill
                event.recipes
                    .createPressing(
                        "ad_astra:iron_plate",
                        "ad_astra:iron_plate"
                    )
                    .processingTime(75),
            ]
        )
        .transitionalItem("ad_astra:iron_plate")
        .loops(3);

    event.recipes
        .createSequencedAssembly(
            ["create:crimsite"],
            "minecraft:cobbled_deepslate",
            [
                event.recipes.createFilling("minecraft:cobbled_deepslate", [
                    "minecraft:cobbled_deepslate",
                    {
                        fluid: "minecraft:lava",
                        amount: 3000,
                    },
                ]), //fill bronze
                event.recipes.createDeploying("minecraft:cobbled_deepslate", [
                    "minecraft:cobbled_deepslate",
                    "minecraft:flint",
                ]), //fill bronze //fill bronze
            ]
        )
        .transitionalItem("minecraft:cobbled_deepslate")
        .loops(3);
}

function fillingRecipes(event) {
    event.recipes.createFilling("create:electron_tube", [
        "create:polished_rose_quartz",
        { fluid: "tconstruct:molten_rose_gold", amount: 9000 },
    ]);
}
function mixingRecipes(event) {}
function cuttingRecipes(event) {}
function hauntingRecipes(event) {}
function splashingRecipes(event) {}
function deployerRecipes(event) {}
function mechanicalCraftingRecipes(event) {}
function compactingRecipes(event) {}
function pressingRecipes(event) {}
