var FULL_BUCKET_AMMOUNT = 81000;
var INGOT_FLUID_AMMOUNT = 9000;

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
    mechanicalCraftingRecipes(event);
    pressingRecipes(event);
    compactingRecipes(event);
});

function millingRecipes(event) {
    //[Input, Output, Chance]
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

    // Remove grinder calcite dust

    const CRUSHING_ORE_BONUS_ORE_YIELD = 0.33;
    const CRUSHING_ORE_BONUS_XP_CHUNKS = 0.33;

    // input: "Item"
    // outputs: [
    //      ["Item", Chance],
    //      ["Item", Chance],
    //      ...
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
}
function itemApplication(event) {
    // Ingredients: Array of objects, may include:
    // {item: "item name"}
    // {tag: "tag name"} to allow any item of tag type
    // Results: An array of one item object
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
                { item: "ad_astra:steel_plate" },
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
        {
            ingredients: [
                { item: "techreborn:rubber_log_stripped" },
                { item: "create:andesite_alloy" },
            ],
            results: [{ item: "create:andesite_casing" }],
        },
    ].forEach((recipe) => {
        event.custom({
            type: "create:item_application",
            ingredients: recipe.ingredients,
            results: recipe.results,
        });
    });
}
function sequencedAssemblyRecipes(event) {
    biomassSequence(event);
    circuitSequence(event);
    diamondSequence(event);
    casingSequence(event);
    piglinSequence(event);

    //Honestly just good luck in figuring this out its too complex to
    //document in an effective way
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

    event.custom({
        type: "create:sequenced_assembly",
        ingredient: { tag: "c:plates/gold" },
        transitionalItem: { item: "create:incomplete_precision_mechanism" },
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    { item: "create:incomplete_precision_mechanism" },
                    { item: "create:cogwheel" },
                ],
                results: [{ item: "create:incomplete_precision_mechanism" }],
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "create:incomplete_precision_mechanism" },
                    { item: "create:large_cogwheel" },
                ],
                results: [{ item: "create:incomplete_precision_mechanism" }],
            },
            {
                type: "create:deploying",
                ingredients: [
                    { item: "create:incomplete_precision_mechanism" },
                    { tag: "c:nuggets/desh" },
                ],
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
            { item: "create:crushed_gold_ore", chance: 2.0 },
            { item: "minecraft:iron_ingot" },
            { item: "minecraft:clock" },
        ],
        loops: 6,
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
                [
                    event.recipes.createPressing(
                        transitional_c_plantball,
                        transitional_c_plantball
                    ),
                ]
            )
            .transitionalItem(transitional_c_plantball)
            .loops(4);

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
                            "ad_astra:ostrum_plate",
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
    [
        {
            input: "create:polished_rose_quartz",
            output: "create:electron_tube",
            fluid: "tconstruct:molten_rose_gold",
            amount: 9000,
        },
        {
            input: "minecraft:calcite",
            output: "3x minecraft:pointed_dripstone",
            fluid: "minecraft:water",
            amount: FULL_BUCKET_AMMOUNT / 2,
        },
        {
            input: "techreborn:netherrack_dust",
            output: "create:cinder_flour",
            fluid: "minecraft:water",
            amount: FULL_BUCKET_AMMOUNT / 4,
        },
        {
            input: "create:blaze_cake_base",
            output: "create:blaze_cake",
            fluid: "tconstruct:blazing_blood",
            amount: 20250,
        },
        {
            input: "techreborn:red_cell_battery",
            output: "techreborn:lithium_ion_battery",
            fluid: "techreborn:lithium",
            amount: 81000,
        },
        {
            input: "minecraft:compass",
            output: "explorerscompass:explorerscompass",
            fluid: "tconstruct:molten_iron",
            amount: 36000,
        },
        {
            input: "doodads:brick_road",
            output: "doodads:yellow_brick_road",
            fluid: "tconstruct:molten_gold",
            amount: 4500,
        },
        {
            input: "doodads:stone_brick_road",
            output: "doodads:yellow_brick_road",
            fluid: "tconstruct:molten_gold",
            amount: 2250,
        },
        {
            input: "minecraft:warped_fungus",
            output: "minecraft:crimson_fungus",
            fluid: "minecraft:lava",
            amount: 2250,
        },
    ].forEach((recipe) => {
        event.recipes.createFilling(recipe.output, [
            recipe.input,
            { fluid: recipe.fluid, amount: recipe.amount },
        ]);
    });
}
function mixingRecipes(event) {
    // Biofuel rework

    // Output: string
    // Input: Array of items, may include fluid objects or item strings
    // Heat: "" = no heat, "heated", or "superheated"
    // Time: Mixing time in ticks
    [
        {
            output: "2x minecraft:blaze_powder",
            input: ["minecraft:blaze_rod"],
            heat: "",
            time: null,
        },
        {
            output: "techreborn:plantball",
            input: [
                "9x #minecraft:leaves",
                {
                    fluid: "createaddition:seed_oil",
                    amount: FULL_BUCKET_AMMOUNT / 2,
                },
            ],
            heat: "heated",
            time: 1000,
        },
        {
            output: "techreborn:plantball",
            input: [
                "9x #c:grass_variants",
                {
                    fluid: "createaddition:seed_oil",
                    amount: FULL_BUCKET_AMMOUNT / 2,
                },
            ],
            heat: "heated",
            time: 1000,
        },
        {
            output: "3x tconstruct:nether_grout",
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
            output: Item.of('minecraft:enchanted_book', '{StoredEnchantments:[{id:"minecraft:mending",lvl:1s}]}'),
            input: [
                "16x minecraft:book",
                "64x create:experience_nugget",
            ],
            heat: "heated",
            time: 700,
        },
        {
            output: Fluid.of(
                "kubejs:blast-resistant_cement",
                FULL_BUCKET_AMMOUNT
            ),
            input: [
                "#c:concrete_powder",
                "2x createastral:lime",
                "3x techreborn:steel_dust",
                { fluid: "minecraft:water", amount: FULL_BUCKET_AMMOUNT },
            ],
            heat: "heated",
            time: 1000,
        },
        {
            output: "3x dustrial_decor:cast_iron_billet",
            input: [
                "minecraft:iron_ingot",
                "2x create:andesite_alloy",
                "minecraft:coal",
            ],
            heat: "",
            time: null,
        },
        {
            output: "techreborn:rubber",
            input: ["techreborn:sap"],
            heat: "",
            time: 50,
        },
        {
            output: "4x techreborn:machine_parts",
            input: [
                "ad_astra:steel_plate",
                "techreborn:carbon_mesh",
                "8x #c:wires",
            ],
            heat: "superheated",
            time: 400,
        },
        {
            output: "1x techreborn:carbon_mesh",
            input: ["2x techreborn:carbon_fiber"],
            heat: "superheated",
            time: 400,
        },
        {
            output: "techreborn:nuke",
            input: [
                "techreborn:industrial_machine_frame",
                { fluid: "kubejs:plasma_fluid", amount: 81000 },
                "3x createastral:subatomic_ingot",
                "create:linked_controller",
            ],
            heat: "superheated",
            time: 500,
        },
        {
            output: Fluid.of("tconstruct:molten_brass", 18000),
            input: ["minecraft:copper_ingot", "create:zinc_ingot"],
            heat: "heated",
            time: 300,
        },
        {
            output: Fluid.of("tconstruct:molten_brass", 1800),
            input: [
                { fluid: "tconstruct:molten_copper", amount: 900 },
                { fluid: "tconstruct:molten_zinc", amount: 900 },
            ],
            heat: "heated",
            time: 5,
        },
        {
            output: Fluid.of("tconstruct:molten_amethyst_bronze", 9000),
            input: ["createastral:bronze_ingot", "minecraft:amethyst_shard"],
            heat: "heated",
            time: 300,
        },
        {
            output: Fluid.of("tconstruct:molten_amethyst_bronze", 900),
            input: [
                { fluid: "tconstruct:molten_bronze", amount: 900 },
                { fluid: "tconstruct:molten_amethyst", amount: 900 },
            ],
            heat: "heated",
            time: 100,
        },
        {
            output: Fluid.of("tconstruct:molten_bronze", 1800),
            input: [
                { fluid: "tconstruct:molten_tin", amount: 900 },
                { fluid: "tconstruct:molten_copper", amount: 900 },
            ],
            heat: "",
            time: 100,
        },
        {
            output: Fluid.of("tconstruct:molten_rose_gold", 9000),
            input: ["minecraft:copper_ingot", "minecraft:gold_ingot"],
            heat: "",
            time: 1500,
        },
        {
            output: Fluid.of("tconstruct:molten_bronze", 18000),
            input: ["minecraft:copper_ingot", "techreborn:tin_ingot"],
            heat: "",
            time: 300,
        },
        {
            output: Fluid.of("tconstruct:molten_rose_gold", 900),
            input: [
                { fluid: "tconstruct:molten_copper", amount: 900 },
                { fluid: "tconstruct:molten_gold", amount: 900 },
            ],
            heat: "",
            time: 10,
        },
        {
            output: Fluid.of("tconstruct:molten_electrum", 900),
            input: [
                { fluid: "tconstruct:molten_silver", amount: 900 },
                { fluid: "tconstruct:molten_gold", amount: 900 },
            ],
            heat: "heated",
            time: 100,
        },
        {
            output: Fluid.of("tconstruct:molten_steel", 9000),
            input: ["techreborn:steel_dust"],
            heat: "superheated",
            time: 100,
        },
        {
            output: Fluid.of("tconstruct:molten_slimesteel", 9000),
            input: [
                "minecraft:iron_ingot",
                "tconstruct:sky_slime_ball",
                "#tconstruct:seared_blocks",
            ],
            heat: "heated",
            time: 300,
        },
        {
            output: Fluid.of("tconstruct:molten_slimesteel", 9000),
            input: [
                { fluid: "tconstruct:molten_iron", amount: 9000 },
                { fluid: "tconstruct:sky_slime", amount: 20250 },
                "#tconstruct:seared_blocks",
            ],
            heat: "heated",
            time: 40,
        },
        {
            output: "3x create:blaze_cake_base",
            input: [
                "tconstruct:ender_slime_ball",
                "tconstruct:ichor_slime_ball",
                "ad_astra:cheese",
            ],
            heat: "heated",
            time: 300,
        },
        {
            output: Fluid.of("tconstruct:molten_pig_iron", 9000),
            input: [
                "minecraft:porkchop",
                "minecraft:iron_ingot",
                "minecraft:gold_ingot",
            ],
            heat: "heated",
            time: 300,
        },
        {
            output: Fluid.of("tconstruct:molten_pig_iron", 9000),
            input: [
                "minecraft:porkchop",
                { fluid: "tconstruct:molten_iron", amount: 9000 },
                { fluid: "tconstruct:molten_gold", amount: 9000 },
            ],
            heat: "heated",
            time: 250,
        },
        {
            output: Fluid.of("tconstruct:molten_queens_slime", 1800),
            input: [
                { fluid: "tconstruct:molten_cobalt", amount: 900 },
                { fluid: "tconstruct:molten_slimesteel", amount: 1800 },
            ],
            heat: "heated",
            time: 5,
        },
        {
            output: Fluid.of("tconstruct:molten_manyullyn", 9000),
            input: [
                { fluid: "tconstruct:molten_cobalt", amount: 18000 },
                "1x minecraft:netherite_scrap",
                { fluid: "kubejs:molten_desh", amount: 9000 },
            ],
            heat: "heated",
            time: 1000,
        },
        {
            output: Fluid.of("tconstruct:molten_hepatizon", 1800),
            input: [
                { fluid: "tconstruct:molten_cobalt", amount: 900 },
                { fluid: "tconstruct:molten_lead", amount: 1800 },
            ],
            heat: "heated",
            time: 5,
        },
        {
            output: Fluid.of("tconstruct:molten_debris", 20250),
            input: ["minecraft:ancient_debris"],
            heat: "superheated",
            time: 500,
        },
        {
            output: Fluid.of("kubejs:hellfire", 81),
            input: [{ fluid: "minecraft:lava", amount: 9000 }],
            heat: "superheated",
            time: 100,
        },
        {
            output: "create:chromatic_compound",
            input: [
                "5x techreborn:uu_matter",
                { fluid: "kubejs:shimmer", amount: 81000 },
            ],
            heat: "superheated",
            time: 2500,
        },
        {
            output: Fluid.of("kubejs:compound_mixture", 9000),
            input: [
                "minecraft:andesite",
                "techreborn:tin_nugget",
                "minecraft:clay_ball",
            ],
        },
        {
            output: Fluid.of("kubejs:compound_mixture", 9000),
            input: [
                "minecraft:andesite",
                "create:zinc_nugget",
                "minecraft:clay_ball",
            ],
        },
        {
            output: Fluid.of("kubejs:compound_mixture", 9000),
            input: [
                "minecraft:andesite",
                "minecraft:iron_nugget",
                "minecraft:clay_ball",
            ],
        },
        {
            output: "8x tconstruct:grout",
            input: [
                "create:andesite_alloy",
                "create:zinc_ingot",
                "8x minecraft:gravel",
            ],
        },
        {
            output: "8x tconstruct:grout",
            input: [
                "create:andesite_alloy",
                "create:zinc_ingot",
                "8x minecraft:gravel",
            ],
            heat: "",
            time: 0,
        },
        {
            output: "tconstruct:seared_bricks",
            input: ["4x tconstruct:seared_brick", "#c:slimeballs"],
            heat: "",
            time: 0,
        },
        {
            output: "tconstruct:seared_bricks",
            input: ["4x tconstruct:seared_brick", "techreborn:sap"],
            heat: "",
            time: 0,
        },
        {
            output: "techreborn:steel_dust",
            input: ["6x minecraft:iron_ingot", "4x techreborn:coal_dust"],
            heat: "heated",
            time: 400,
        },
        {
            output: Fluid.of("kubejs:shimmer", 40500),
            input: ["5x minecraft:amethyst_shard", "2x minecraft:glow_ink_sac"],
            heat: "",
            time: 400,
        },
        {
            output: "minecraft:glow_ink_sac",
            input: ["minecraft:ink_sac", "2x minecraft:glowstone_dust"],
            heat: "",
            time: 50,
        },
        {
            output: "minecraft:piglin_banner_pattern",
            input: [
                "1x minecraft:paper",
                Item.of(
                    "tconstruct:large_plate",
                    '{Material:"tconstruct:pig_iron"}'
                ),
            ],
            heat: "",
            time: 100,
        },
        {
            output: "minecraft:dolphin_spawn_egg",
            input: [
                { fluid: "kubejs:shimmer", amount: 40500 },
                "createastral:orcane",
            ],
            heat: "",
            time: 500,
        },
        {
            output: "adoptafloppa:kitney_item",
            input: [
                { fluid: "kubejs:shimmer", amount: 40500 },
                "3x minecraft:ghast_tear",
            ],
            heat: "",
            time: 500,
        },
        {
            output: "tconstruct:ichor_slime_ball",
            input: [
                { fluid: "kubejs:shimmer", amount: 9000 },
                "4x tconstruct:sky_slime_ball",
            ],
            heat: "heated",
            time: 30,
        },
        {
            output: "tconstruct:ender_slime_ball",
            input: [
                { fluid: "kubejs:shimmer", amount: 9000 },
                "2x tconstruct:ichor_slime_ball",
            ],
            heat: "heated",
            time: 30,
        },
        {
            output: "doodads:portable_nether",
            input: [
                { fluid: "kubejs:shimmer", amount: 81000 },
                "minecraft:lodestone",
            ],
            heat: "heated",
            time: 500,
        },
        {
            output: "32x doodads:stone_brick_road",
            input: [
                { fluid: "kubejs:shimmer", amount: 40500 },
                "32x minecraft:stone_bricks",
            ],
            heat: "",
            time: 1000,
        },
        {
            output: "32x doodads:brick_road",
            input: [
                { fluid: "kubejs:shimmer", amount: 40500 },
                "32x minecraft:bricks",
            ],
            heat: "",
            time: 1000,
        },
        {
            output: "doodads:asphalt",
            input: [
                { fluid: "kubejs:andesite_compound", amount: 3000 },
                "#c:concrete_powder",
            ],
            heat: "",
            time: 1000,
        },
        {
            output: { fluid: "create:honey", amount: 40500 },
            input: [
                { fluid: "minecraft:water", amount: 40500 },
                { fluid: "kubejs:shimmer", amount: 40500 },
            ],
            heat: "",
            time: 3000,
        },
        {
            output: "createastral:astral_conduit",
            input: [
                { fluid: "kubejs:shimmer", amount: 81000 },
                "minecraft:diamond_block",
                "phonos:redstone_chip",
                "minecraft:flint_and_steel",
            ],
            heat: "",
            time: 30,
        },
        {
            output: "create:ochrum",
            input: [
                "compressor:compressed_sand",
                "minecraft:cobbled_deepslate",
                { fluid: "minecraft:lava", amount: 4500 },
            ],
            heat: "",
            time: 1500,
        },
    ].forEach((recipe) => {
        event.recipes
            .createMixing(recipe.output, recipe.input)
            .heatRequirement(recipe.heat ?? "")
            .processingTime(recipe.time ?? 100);
    });
}
function cuttingRecipes(event) {
    // [Input string, Output string]
    [
        ["techreborn:rubber_log", "techreborn:rubber_log_stripped"],
        ["techreborn:rubber_wood", "techreborn:stripped_rubber_wood"],
        ["techreborn:rubber_log_stripped", "6x techreborn:rubber_planks"],
    ].forEach((recipe) => {
        event.recipes.createCutting(recipe[1], recipe[0]);
    });
}
function hauntingRecipes(event) {
    // [Input string, Output string]
    [
        ["2x techreborn:charcoal_dust", "techreborn:coal_dust"],
        ["2x minecraft:charcoal", "minecraft:coal"],
        ["minecraft:sand", "minecraft:soul_sand"],
        ["minecraft:soul_sand", "minecraft:netherrack"],
    ].forEach((recipe) => {
        event.recipes.createHaunting(recipe[1], recipe[0]);
    });
}
function splashingRecipes(event) {
    //Input: String
    //Outputs: Array of outputs, which is each an array.
    //    [Item string, float from 0.0 - 1.0 deciding chance]
    [
        {
            input: "createaddition:biomass",
            outputs: [
                ["createastral:pure_biomatter", 1],
                ["minecraft:sugar", 0.2],
                ["minecraft:bonemeal", 0.2],
            ],
        },
        {
            input: "createastral:lime",
            outputs: [
                ["techreborn:silver_nugget", 0.12],
                ["techreborn:raw_silver", 0.02],
            ],
        },
        {
            input: "minecraft:soul_sand",
            outputs: [
                ["minecraft:gold_nugget", 0.12],
                ["minecraft:quartz", 0.01],
            ],
        },
        {
            input: "minecraft:soul_soil",
            outputs: [
                ["minecraft:gold_nugget", 0.12],
                ["minecraft:quartz", 0.01],
            ],
        },
        {
            input: "minecraft:red_sand",
            outputs: [
                ["create:zinc_nugget", 0.33],
                ["minecraft:dead_bush", 0.12],
            ],
        },
        {
            input: "ad_astra:moon_sand",
            outputs: [
                ["ad_astra:desh_nugget", 0.12],
                ["ad_astra:cheese", 0.04],
            ],
        },
        {
            input: "ad_astra:mars_sand",
            outputs: [["techreborn:lead_nugget", 0.25]],
        },
        {
            input: "ad_astra:raw_desh",
            outputs: [
                ["9x ad_astra:desh_nugget", 1],
                ["minecraft:raw_iron", 1],
            ],
        },
        {
            input: "ad_astra:raw_ostrum",
            outputs: [
                ["9x ad_astra:ostrum_nugget", 1],
                ["minecraft:raw_gold", 1],
            ],
        },
        {
            input: "ad_astra:raw_calorite",
            outputs: [
                ["9x ad_astra:calorite_nugget", 1],
                ["minecraft:raw_copper", 1],
            ],
        },
    ].forEach((recipe) => {
        let cleanoutputs = [];
        recipe.outputs.forEach((output) => {
            if (output[1] == 1) {
                cleanoutputs.push(output[0]);
            } else {
                cleanoutputs.push(Item.of(output[0]).withChance(output[1]));
            }
        });
        event.recipes.createSplashing(cleanoutputs, recipe.input);
    });
}
function mechanicalCraftingRecipes(event) {
    // Output: String
    // Shape: Array of rows of inputs based on letters assigned
    // Inputs: Object with letters assigned to input items, to be used in the shape
    [
        {
            output: "ad_astra:launch_pad",
            shape: ["BAAAB", "ABABA", "AABAA", "ABABA", "BAAAB"],
            inputs: {
                A: "createastral:blast-resistant_concrete",
                B: "create:sturdy_sheet",
            },
        },
        {
            output: "techreborn:data_storage_chip",
            shape: ["A", "C", "B"],
            inputs: {
                A: "createastral:olivine_sheet",
                B: "techreborn:iridium_alloy_plate",
                C: "techreborn:industrial_circuit",
            },
        },
        {
            output: "immersive_aircraft:boiler",
            shape: ["AB", "CB", "CB"],
            inputs: {
                A: "techreborn:machine_parts",
                B: "create:copper_sheet",
                C: "techreborn:rubber",
            },
        },
        {
            output: "minecraft:elytra",
            shape: ["  A  ", " B B ", " C C ", "C   C", "DE ED", "F G F"],
            inputs: {
                A: "createastral:navigation_mechanism",
                B: "create:brass_sheet",
                C: "minecraft:phantom_membrane",
                D: "create:large_cogwheel",
                E: "ad_astra:ostrum_plate",
                F: "ad_astra:ostrum_engine",
                G: "computercraft:computer_advanced",
            },
        },
        {
            output: "techreborn:fusion_control_computer",
            shape: ["DBCBD", "BDCDB", "CCECC", "BDADB", "DABAD"],
            inputs: {
                A: "techreborn:industrial_circuit",
                B: "techreborn:advanced_machine_casing",
                C: "techreborn:fusion_coil",
                D: "createaddition:tesla_coil",
                E: "techreborn:digital_display",
            },
        },
        {
            output: "minecraft:crossbow",
            shape: [" CCA ", "AABDB"],
            inputs: {
                A: "create:iron_sheet",
                B: "#minecraft:logs",
                C: "minecraft:gunpowder",
                D: "create:precision_mechanism",
            },
        },
        {
            output: "ad_astra:compressor",
            shape: ["ACCA", "B  D", "AEEA"],
            inputs: {
                A: "ad_astra:iron_plate",
                B: "create:electron_tube",
                C: "create:mechanical_press",
                D: "create:precision_mechanism",
                E: "techreborn:silver_block",
            },
        },
        {
            output: "ad_astra:nasa_workbench",
            shape: ["EFE", "CDC", "ABA"],
            inputs: {
                // A: minecraft:redstone_block,
                A: "createaddition:capacitor",
                B: "ad_astra:desh_block",
                C: "ad_astra:desh_plate",
                D: "createastral:navigation_mechanism",
                // F: 'create:integrated_circuit',
                F: "create:display_board",
                E: "create:mechanical_arm",
            },
        },

        {
            output: "ad_astra:solar_panel",
            shape: ["DDD", " B ", "ACA", "AEA"],
            inputs: {
                A: "ad_astra:desh_plate",
                B: "create:integrated_circuit",
                C: "createastral:navigation_mechanism",
                D: "minecraft:blue_stained_glass",
                E: "techreborn:insulated_hv_cable",
            },
        },

        {
            output: "ad_astra:coal_generator",
            shape: ["ABCBA", "AAEAA"],
            inputs: {
                A: "ad_astra:steel_plate",
                B: "techreborn:lead_ingot",
                C: "create:precision_mechanism",
                E: "ad_astra:engine_fan",
            },
        },
        {
            output: "computercraft:computer_advanced",
            shape: ["AAA", "BCB", "ADA"],
            inputs: {
                A: "create:brass_sheet",
                B: "create:electron_tube",
                C: "create:display_board",
                D: "create:precision_mechanism",
            },
        },
        {
            output: "computercraft:pocket_computer_advanced",
            shape: [" E ", "AAA", "CBC", "ADA"],
            inputs: {
                A: "create:brass_sheet",
                B: "create:electron_tube",
                C: "create:display_board",
                D: "create:precision_mechanism",
                E: "create:redstone_link",
            },
        },
        {
            output: "computercraft:turtle_advanced",
            shape: ["ADA", "ABA", " C "],
            inputs: {
                A: "create:brass_sheet",
                B: "computercraft:turtle_normal",
                C: "ad_astra:steel_block",
                D: "create:precision_mechanism",
            },
        },

        {
            output: "polaroidcamera:camera",
            shape: ["AAA", "CBC", "CDC"],
            inputs: {
                A: "create:brass_sheet",
                B: "create:electron_tube",
                C: "techreborn:tin_ingot",
                D: "create:precision_mechanism",
            },
        },

        {
            output: "ad_astra:fuel_refinery",
            shape: ["BDCDB", "BAEAB", "BBEBB"],
            inputs: {
                A: "create:attribute_filter",
                B: "ad_astra:steel_plate",
                C: "create:mechanical_mixer",
                D: "create:precision_mechanism",
                E: "create:fluid_tank",
            },
        },

        {
            output: "ad_astra:energizer",
            shape: [" E ", "ADA", "ACA", "BAB"],
            inputs: {
                A: "ad_astra:ostrum_plate",
                B: "ad_astra:ostrum_block",
                C: "tconstruct:cobalt_block",
                D: "createastral:navigation_mechanism",
                E: "createaddition:accumulator",
            },
        },

        {
            output: "ad_astra:jet_suit",
            shape: ["  F  ", "AAGAA", " BEB ", " CDC "],
            inputs: {
                A: "ad_astra:calorite_plate",
                B: "ad_astra:calorite_tank",
                C: "ad_astra:calorite_block",
                D: "ad_astra:calorite_engine",
                E: Item.of("ad_astra:netherite_space_suit").ignoreNBT(),
                F: "createastral:subatomic_ingot",
                G: "createastral:navigation_mechanism",
            },
        },
        {
            output: "ad_astra:jet_suit_helmet",
            shape: [" F ", "AEA", "AGA"],
            inputs: {
                A: "ad_astra:calorite_plate",
                E: Item.of("ad_astra:netherite_space_helmet").ignoreNBT(),
                F: "create:integrated_circuit",
                G: "createastral:subatomic_ingot",
            },
        },
        {
            output: "ad_astra:jet_suit_pants",
            shape: ["CEC", "AFA", "A A", "A A"],
            inputs: {
                A: "ad_astra:calorite_plate",
                C: "ad_astra:calorite_block",
                E: Item.of("ad_astra:netherite_space_pants").ignoreNBT(),
                F: "createastral:subatomic_ingot",
            },
        },
        {
            output: "ad_astra:jet_suit_boots",
            shape: ["FEF", "A A", "C C"],
            inputs: {
                A: "ad_astra:calorite_plate",
                C: "ad_astra:calorite_block",
                E: Item.of("ad_astra:netherite_space_boots").ignoreNBT(),
                F: "dustrial_decor:padded_block",
            },
        },

        {
            output: "2x techreborn:fusion_coil",
            shape: ["CCCCC", "CBBBC", "CBDBC", "CBBBC", "CCCCC"],
            inputs: {
                B: "techreborn:insulated_hv_cable",
                C: "create:sturdy_sheet",
                D: "techreborn:advanced_machine_casing",
            },
        },
        {
            output: "doodads:slimey_shoes",
            shape: [" D ", "EFE", "ABA", "CGC"],
            inputs: {
                A: "ad_astra:steel_plate",
                B: "create:sticker",
                C: "minecraft:slime_block",
                D: "createastral:navigation_mechanism",
                E: "tconstruct:slimesteel_block",
                F: "dustrial_decor:padded_block",
                G: "tconstruct:queens_slime_block",
            },
        },
        {
            output: "doodads:ender_goggles",
            shape: [" AAA ", "CBABC"],
            inputs: {
                A: "createdeco:cast_iron_sheet",
                B: "minecraft:ender_eye",
                C: "minecraft:string",
            },
        },
        {
            output: "doodads:midnights_eye",
            shape: ["DCCCD", "CBCAC", "DCCCD"],
            inputs: {
                A: "create:refined_radiance",
                B: "create:shadow_steel",
                C: "minecraft:glowstone",
                D: "create:powdered_obsidian",
            },
        },

        {
            output: "doodads:speed_boots",
            shape: [" ADA ", " AEAC", "BBBB "],
            inputs: {
                A: "ad_astra:calorite_plate",
                B: "create:sturdy_sheet",
                C: "ad_astra:steel_engine",
                D: "createastral:navigation_mechanism",
                E: "dustrial_decor:padded_block",

                //AUTOMOBILITY RECIPE CHANGES
            },
        },
        {
            output: "automobility:auto_mechanic_table",
            shape: ["  D  ", "CAEAC", " BBB "],
            inputs: {
                A: "create:brass_ingot",
                B: "create:railway_casing",
                C: "create:brass_ingot",
                D: "create:crafting_blueprint",
                E: "create:brass_block",

                /// /DOODADS MOD RECIPE CHANGES
            },
        },
    ].forEach((recipe) => {
        event.recipes.create.mechanical_crafting(
            recipe.output,
            recipe.shape,
            recipe.inputs
        );
    });
}

function pressingRecipes(event) {
    // [Input string, Output string]
    [
        ["techreborn:silver_ingot", "techreborn:silver_plate"],
        ["techreborn:tin_ingot", "techreborn:tin_plate"],
        ["techreborn:lead_ingot", "techreborn:lead_plate"],
        ["techreborn:electrum_ingot", "techreborn:electrum_plate"],
        ["createastral:bronze_ingot", "createastral:bronze_sheet"],
        ["minecraft:lapis_block", "create:lapis_sheet"],
    ].forEach((recipe) => {
        event.recipes.createPressing(recipe[1], recipe[0]);
    });
}

function compactingRecipes(event) {
    [
        {
            output: "minecraft:calcite",
            inputs: [
                "3x minecraft:bone_meal",
                "minecraft:gravel",
                { fluid: "minecraft:lava", amount: FULL_BUCKET_AMMOUNT / 10 },
            ],
        },
        {
            output: "create:limestone",
            inputs: [
                "2x minecraft:pointed_dripstone",
                "2x ad_astra:moon_sand",
                "2x minecraft:flint",
                { fluid: "minecraft:lava", amount: FULL_BUCKET_AMMOUNT / 10 },
            ],
        },
        {
            output: "minecraft:lapis_lazuli",
            inputs: [
                "3x techreborn:lazurite_dust",
                "2x minecraft:gunpowder",
                "2x minecraft:iron_nugget",
                { fluid: "minecraft:lava", amount: FULL_BUCKET_AMMOUNT / 30 },
            ],
        },
        {
            output: "minecraft:granite",
            inputs: [
                "minecraft:diorite",
                "minecraft:flint",
                "techreborn:netherrack_dust",
                { fluid: "minecraft:lava", amount: FULL_BUCKET_AMMOUNT / 10 },
            ],
        },
        {
            output: "minecraft:cobbled_deepslate",
            inputs: ["8x minecraft:flint", "minecraft:gravel"],
        },
    ].forEach((recipe) => {
        event.recipes.createCompacting(recipe.output, recipe.inputs);
    });

    [
        {
            output: "minecraft:andesite",
            inputs: [
                "2x minecraft:flint",
                "minecraft:gravel",
                { fluid: "minecraft:lava", amount: FULL_BUCKET_AMMOUNT / 10 },
            ],
        },
        {
            output: "ad_astra:iron_plate",
            inputs: ["create:iron_sheet"],
        },
        {
            output: "createastral:steel_helmet",
            inputs: [
                Item.of("createastral:sturdy_helmet").ignoreNBT(),
                "6x techreborn:steel_dust",
            ],
        },
        {
            output: "createastral:steel_chestplate",
            inputs: [
                Item.of("createastral:sturdy_chestplate").ignoreNBT(),
                "12x techreborn:steel_dust",
            ],
        },
        {
            output: "createastral:steel_leggings",
            inputs: [
                Item.of("createastral:sturdy_leggings").ignoreNBT(),
                "8x techreborn:steel_dust",
            ],
        },
        {
            output: "createastral:steel_boots",
            inputs: [
                Item.of("createastral:sturdy_boots").ignoreNBT(),
                "5x techreborn:steel_dust",
            ],
        },
    ].forEach((recipe) => {
        event.recipes.createCompacting(recipe.output, recipe.inputs).heated();
    });

    event.recipes
        .createCompacting("createastral:olivine_sheet", [
            "16x techreborn:olivine_dust",
        ])
        .superheated()
        .processingTime(1500);
}
