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
    farmersDelightIntegration(event);
    superheatedMixingRecipes(event);
    sandpaperRecipes(event);
});

function millingRecipes(event) {
    //[Input, Output, Chance]
    [
        ["farmersdelight:straw", "minecraft:string", 1],
        ["ae2:certus_quartz_dust", "ae2:certus_crystal_seed", 2],
        ["minecraft:gravel", "minecraft:sand", 0.25],
        ["create:veridium", "minecraft:raw_copper", 0.6],
        ["create:asurine", "minecraft:lapis_lazuli", 1],
        ["create:crimsite", "minecraft:raw_iron", 0.4],
        ["create:ochrum", "minecraft:raw_gold", 0.4],
        ["create:limestone", "techreborn:raw_tin", 0.5],
        ["create:scorchia", "create:raw_zinc", 0.4],
        ["create:scoria", "minecraft:magma_block", 1],
        ["minecraft:blackstone", "create:powdered_obsidian", 0.2],
        ["minecraft:basalt", "techreborn:andesite_dust", 0.4],
        ["minecraft:tuff", "minecraft:iron_nugget", 1],
        ["minecraft:dripstone_block", "2x minecraft:golden_nugget", 1],
        ["minecraft:basalt", "create:copper_nugget", 0.4],
        ["minecraft:blackstone", "create:zinc_nugget", 0.5],
        ["minecraft:andesite", "techreborn:tin_nugget", 0.5],
        ["minecraft:granite", "create:copper_nugget", 0.5],
        ["minecraft:flint", "techreborn:andesite_dust", 1],
        ["minecraft:iron_nugget", "techreborn:andesite_dust", 0.75],
        ["minecraft:tube_coral_block", "2x minecraft:blue_dye", 1],
        ["minecraft:brain_coral_block", "2x minecraft:pink_dye", 1],
        ["minecraft:bubble_coral_block", "2x minecraft:purple_dye", 1],
        ["minecraft:fire_coral_block", "2x minecraft:red_dye", 1],
        ["minecraft:horn_coral_block", "2x minecraft:yellow_dye", 1],
        ["minecraft:glow_berries", "naturalist:glow_goop", 1],
        ["minecraft:snow_block", "2x minecraft:snowball", 1],
        ["createastral:crushed_raw_gadolinite", "yttr:yttrium_dust", 1],
    ].forEach((recipe) => {
        event.recipes.createMilling([Item.of(recipe[1]).withChance(recipe[2])], recipe[0]);
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
            input: "minecraft:dead_tube_coral_block",
            outputs: [["1x techreborn:calcite_dust", 1]],
        },
        {
            input: "minecraft:dead_brain_coral_block",
            outputs: [["1x techreborn:calcite_dust", 1]],
        },
        {
            input: "minecraft:dead_bubble_coral_block",
            outputs: [["1x techreborn:calcite_dust", 1]],
        },
        {
            input: "minecraft:dead_fire_coral_block",
            outputs: [["1x techreborn:calcite_dust", 1]],
        },
        {
            input: "minecraft:dead_horn_coral_block",
            outputs: [["1x techreborn:calcite_dust", 1]],
        },
        {
            input: "minecraft:tube_coral_block",
            outputs: [
                ["1x minecraft:blue_dye", 1],
                ["2x minecraft:blue_dye", 0.5],
                ["1x minecraft:prismarine_shard", 0.1],
                ["1x minecraft:lapis_lazuli", 0.02],
                ["1x techreborn:calcite_dust", 0.1],
                ["1x minecraft:tube_coral", 0.25],
                ["1x minecraft:tube_coral_fan", 0.25],
            ],
        },
        {
            input: "minecraft:brain_coral_block",
            outputs: [
                ["1x minecraft:pink_dye", 1],
                ["2x minecraft:pink_dye", 0.5],
                ["1x tconstruct:pig_iron_nugget", 0.1],
                ["1x farmersdelight:ham", 0.02],
                ["1x techreborn:calcite_dust", 0.1],
                ["1x minecraft:brain_coral", 0.25],
                ["1x minecraft:brain_coral_fan", 0.25],
            ],
        },
        {
            input: "minecraft:bubble_coral_block",
            outputs: [
                ["1x minecraft:purple_dye", 1],
                ["2x minecraft:purple_dye", 0.5],
                ["1x minecraft:popped_chorus_fruit", 0.1],
                ["1x ae2:ender_dust", 0.2],
                ["1x techreborn:calcite_dust", 0.1],
                ["1x minecraft:bubble_coral", 0.25],
                ["1x minecraft:bubble_coral_fan", 0.25],
            ],
        },
        {
            input: "minecraft:fire_coral_block",
            outputs: [
                ["1x minecraft:red_dye", 1],
                ["2x minecraft:red_dye", 0.5],
                ["1x minecraft:blaze_powder", 0.05],
                ["1x tconstruct:blood_slime_ball", 0.05],
                ["1x techreborn:calcite_dust", 0.1],
                ["1x minecraft:fire_coral", 0.25],
                ["1x minecraft:fire_coral_fan", 0.25],
            ],
        },
        {
            input: "minecraft:horn_coral_block",
            outputs: [
                ["1x minecraft:yellow_dye", 1],
                ["2x minecraft:yellow_dye", 0.5],
                ["1x techreborn:sponge_piece", 0.15],
                ["1x minecraft:sea_pickle", 0.1],
                ["1x techreborn:calcite_dust", 0.1],
                ["1x minecraft:horn_coral", 0.25],
                ["1x minecraft:horn_coral_fan", 0.25],
            ],
        },

        {
            input: "minecraft:cobbled_deepslate",
            outputs: [
                ["create:zinc_nugget", 0.13],
                ["minecraft:coal", 0.05],
            ],
        },
        //Diorite,Granite,Andesite Crushing
        {
            input: "minecraft:diorite",
            outputs: [
                ["minecraft:quartz", 1],
                ["techreborn:diorite_dust", 1],
                ["techreborn:andesite_dust", 1],
                ["minecraft:quartz", 0.25],
            ],
        },
        {
            input: "minecraft:flint",
            outputs: [
                ["techreborn:andesite_dust", 1],
                ["techreborn:flint_dust", 0.5],
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
        {
            input: "minecraft:glow_berries",
            outputs: [["naturalist:glow_goop", 1], ["naturalist:glow_goop", 0.5]],
        },
        {
            input: "minecraft:snow_block",
            outputs: [["2x minecraft:snowball", 1], ["minecraft:snowball", 0.5]],
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
        {
            input: "minecraft:dripstone_block",
            outputs: [
                ["minecraft:clay_ball", 1],
                ["minecraft:clay_ball", 0.5],
            ],
        },
        /*
        {
            input: "#c:coral_blocks",
            outputs: [["techreborn:calcite_dust", 1]],
        },
        */

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
        // AE2 Fluix/Shimmer Crystal Crushing
        {
            input: "ae2:fluix_crystal",
            outputs: [["ae2:fluix_dust", 1]],
        },

        // concrete crushing into concrete powder

        {
            input: "minecraft:white_concrete",
            outputs: [["minecraft:white_concrete_powder", 1]],
        },
        {
            input: "minecraft:orange_concrete",
            outputs: [["minecraft:orange_concrete_powder", 1]],
        },
        {
            input: "minecraft:magenta_concrete",
            outputs: [["minecraft:magenta_concrete_powder", 1]],
        },
        {
            input: "minecraft:light_blue_concrete",
            outputs: [["minecraft:light_blue_concrete_powder", 1]],
        },
        {
            input: "minecraft:yellow_concrete",
            outputs: [["minecraft:yellow_concrete_powder", 1]],
        },
        {
            input: "minecraft:lime_concrete",
            outputs: [["minecraft:lime_concrete_powder", 1]],
        },
        {
            input: "minecraft:pink_concrete",
            outputs: [["minecraft:pink_concrete_powder", 1]],
        },
        {
            input: "minecraft:gray_concrete",
            outputs: [["minecraft:gray_concrete_powder", 1]],
        },
        {
            input: "minecraft:light_gray_concrete",
            outputs: [["minecraft:light_gray_concrete_powder", 1]],
        },
        {
            input: "minecraft:cyan_concrete",
            outputs: [["minecraft:cyan_concrete_powder", 1]],
        },
        {
            input: "minecraft:purple_concrete",
            outputs: [["minecraft:purple_concrete_powder", 1]],
        },
        {
            input: "minecraft:blue_concrete",
            outputs: [["minecraft:blue_concrete_powder", 1]],
        },
        {
            input: "minecraft:brown_concrete",
            outputs: [["minecraft:brown_concrete_powder", 1]],
        },
        {
            input: "minecraft:green_concrete",
            outputs: [["minecraft:green_concrete_powder", 1]],
        },
        {
            input: "minecraft:red_concrete",
            outputs: [["minecraft:red_concrete_powder", 1]],
        },
        {
            input: "minecraft:black_concrete",
            outputs: [["minecraft:black_concrete_powder", 1]],
        },
    ].forEach((recipe) => {
        let cleanoutputs = [];
        recipe.outputs.forEach((output) => {
            if (output[1] == 1) cleanoutputs.push(output[0]);
            else {
                cleanoutputs.push(Item.of(output[0]).withChance(output[1]));
            }
        });
        event.recipes.createCrushing(cleanoutputs, recipe.input).processingTime(recipe.time ?? 200);
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
            ["techreborn:" + ore + "_dust", Item.of("techreborn:" + ore + "_dust").withChance(0.5)],
            "techreborn:" + ore + "_ore"
        );
        if (!nodeepslate.includes(ore)) {
            event.recipes.createCrushing(
                ["techreborn:" + ore + "_dust", Item.of("techreborn:" + ore + "_dust").withChance(0.5)],
                "techreborn:deepslate_" + ore + "_ore"
            );
        }
    });

    // Replaces the ore blocks with crushing recipes to produce raw ore instead of grinder recipes
    ["silver", "deepslate_silver", "tin", "deepslate_tin", "lead", "deepslate_lead"].forEach((ore) => {
        event.remove({
            type: "techreborn:grinder",
            input: "techreborn:" + ore + "_ore",
        });
        event.recipes.createCrushing(
            ["2x techreborn:raw_" + ore.replace("deepslate_", "")],
            "techreborn:" + ore + "_ore"
        );
    });

    // Crushable raw techreborn storage blocks
    ["silver", "tin", "lead"].forEach((ore) => {
        event.recipes.createCrushing(
            ["9x create:crushed_" + ore.replace("deepslate_", "") + "_ore", "3x create:experience_nugget"],
            "techreborn:raw_" + ore + "_storage_block"
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
            mod: "yttr",
            ores: [
                {
                    name: "gadolinite",
                    extra: Item.of("techreborn:silver_nugget").withChance(0.2),
                },
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
                "create" + (mod.mod === "ad_astra" || mod.mod === "yttr" ? "astral" : "") + ":crushed_raw_" + ore.name;
            let outputs = [
                crushed_ore,
                Item.of(crushed_ore).withChance(CRUSHING_ORE_BONUS_ORE_YIELD),
                Item.of("create:experience_nugget").withChance(CRUSHING_ORE_BONUS_XP_CHUNKS),
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
            ingredients: [{ item: "create:andesite_casing" }, { tag: "c:plates/obsidian" }],
            results: [{ item: "create:railway_casing" }],
        },
        {
            ingredients: [{ item: "techreborn:basic_machine_casing" }, { item: "ad_astra:steel_plate" }],
            results: [{ item: "techreborn:advanced_machine_casing" }],
        },
        {
            ingredients: [{ item: "techreborn:advanced_machine_frame" }, { item: "techreborn:machine_parts" }],
            results: [{ item: "techreborn:industrial_machine_frame" }],
        },
        {
            ingredients: [{ item: "techreborn:basic_machine_frame" }, { item: "techreborn:lead_plate" }],
            results: [{ item: "techreborn:advanced_machine_frame" }],
        },
        {
            ingredients: [{ item: "techreborn:basic_machine_casing" }, { item: "create:sturdy_sheet" }],
            results: [{ item: "techreborn:industrial_machine_casing" }],
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
    const inc_sturdy_sheet = "create:unprocessed_obsidian_sheet";
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

        event.recipes.createSequencedAssembly(["createastral:wired_panelling"], "ad_astra:steel_block", [
            event.recipes.createDeploying("ad_astra:steel_block", [
                "ad_astra:steel_block",
                "create:integrated_circuit",
            ]),
            event.recipes.createDeploying("ad_astra:steel_block", [
                "ad_astra:steel_block",
                "techreborn:electronic_circuit",
            ]),
            event.recipes.createDeploying("ad_astra:steel_block", [
                "ad_astra:steel_block",
                "techreborn:industrial_circuit",
            ]),
            event.recipes.createPressing("ad_astra:steel_block", "ad_astra:steel_block"),
            event.recipes.createDeploying("ad_astra:steel_block", [
                "ad_astra:steel_block",
                "create:refined_radiance_casing",
            ]),
            event.recipes.createDeploying("ad_astra:steel_block", [
                "ad_astra:steel_block",
                "create:shadow_steel_casing",
            ]),
            event.recipes.createDeploying("ad_astra:steel_block", [
                "ad_astra:steel_block",
                "createastral:subatomic_ingot",
            ]),
            event.recipes.createPressing("ad_astra:steel_block", "ad_astra:steel_block"),
        ]);

        event.recipes.createSequencedAssembly(["ad_astra:calorite_engine"], "ad_astra:ostrum_engine", [
            event.recipes.createFilling("ad_astra:ostrum_engine", [
                "ad_astra:ostrum_engine",
                { fluid: "kubejs:molten_calorite", amount: BUCKET },
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
        ]);

        event.recipes.createSequencedAssembly(["ad_astra:calorite_engine"], "createastral:navigation_mechanism", [
            event.recipes.createFilling("createastral:navigation_mechanism", [
                "createastral:navigation_mechanism",
                { fluid: "kubejs:molten_calorite", amount: BUCKET },
            ]),
            event.recipes.createFilling("createastral:navigation_mechanism", [
                "createastral:navigation_mechanism",
                { fluid: "yttr:void", amount: BUCKET },
            ]),
            event.recipes.createDeploying("createastral:navigation_mechanism", [
                "createastral:navigation_mechanism",
                "techreborn:industrial_circuit",
            ]),
            event.recipes.createDeploying("createastral:navigation_mechanism", [
                "createastral:navigation_mechanism",
                "createastral:subatomic_ingot",
            ]),
            event.recipes.createPressing("ad_astra:ostrum_engine", "ad_astra:ostrum_engine"),
        ]);

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
                event.recipes.createDeploying(inc_starshard, [inc_starshard, "techreborn:scrap_box"]),
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
                    event.recipes.createDeploying(inc_casing, [
                        inc_casing,
                        "create:copper_sheet",
                    ]),
                ]
            )
            .transitionalItem(inc_casing)
            .loops(3);

        const inc_mf = "createastral:incomplete_basic_machine_frame"
        event.recipes
            .createSequencedAssembly(
                [
                    // begin
                    "techreborn:basic_machine_frame", // output
                ],
                "create:copper_casing",
                [
                    // input
                    event.recipes.createFilling(inc_mf, [
                        inc_mf,
                        { fluid: "tconstruct:molten_silver", amount: INGOT },
                    ]),
                    event.recipes.createDeploying(inc_mf, [
                        inc_mf,
                        "techreborn:rubber",
                    ]),
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
                    event.recipes.createDeploying("create:golden_sheet", [
                        "minecraft:gold_nugget",
                        "minecraft:gold_nugget",
                    ]),
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

    const inc_navmechanism = "createastral:incomplete_navigation_mechanism";
    event.recipes
        .createSequencedAssembly(["createastral:navigation_mechanism"], "phonos:redstone_chip", [
            event.recipes.createFilling(inc_navmechanism, [
                "create:incomplete_precision_mechanism",
                {
                    fluid: "tconstruct:molten_cobalt",
                    amount: 1350,
                },
            ]),
            event.recipes.createDeploying(inc_navmechanism, [inc_navmechanism, "techreborn:electrum_nugget"]),
            event.recipes.createPressing(inc_navmechanism, inc_navmechanism),
        ])
        .transitionalItem(inc_navmechanism)
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
                "dbe:server_rack", // output
            ],
            "#computercraft:monitor",
            [
                // input
                event.recipes.createFilling("createastral:incomplete_electronic_circuit", [
                    "createastral:incomplete_electronic_circuit",
                    { fluid: "ad_astra:cryo_fuel", amount: 500 * mB },
                ]),
                event.recipes.createDeploying("createastral:incomplete_electronic_circuit", [
                    "createastral:incomplete_electronic_circuit",
                    "techreborn:machine_parts",
                ]),
                event.recipes.createDeploying("createastral:incomplete_electronic_circuit", [
                    "createastral:incomplete_electronic_circuit",
                    "createastral:navigation_mechanism",
                ]),
            ]
        )
        .transitionalItem("createastral:incomplete_electronic_circuit")
        .loops(10);

    const inc_dash_panel = "createastral:incomplete_dash_panel"
    //Dash panel
    event.recipes
        .createSequencedAssembly(["automobility:dash_panel"], "create:iron_sheet", [
            event.recipes
                .createFilling(inc_dash_panel, [
                    inc_dash_panel,
                    { fluid: "kubejs:shimmer", amount: INGOT },
                ])
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
                { fluid: "tconstruct:blazing_blood", amount: 9000 },
            ]),
            event.recipes.createFilling(inc_refining_agent, [
                inc_refining_agent,
                { fluid: "techreborn:biofuel", amount: 9000 },
            ]),
            event.recipes.createPressing(inc_refining_agent, "ae2:fluix_dust"),
        ])
        .transitionalItem(inc_refining_agent)
        .loops(3);

    const inc_separation_agent = "createastral:incomplete_separation_agent";
    event.recipes
        .createSequencedAssembly(["minecraft:paper"], "createastral:separation_agent", [
            event.recipes.createDeploying(inc_separation_agent, [inc_separation_agent, "techreborn:charcoal_dust"]),
            event.recipes.createDeploying(inc_separation_agent, [inc_separation_agent, "techreborn:obsidian_dust"]),
            event.recipes.createDeploying(inc_separation_agent, [inc_separation_agent, "techreborn:sulfur_dust"]),
        ])
        .transitionalItem(inc_separation_agent)
        .loops(3);
}

function fillingRecipes(event) {
    [
        {
            input: "create:polished_rose_quartz",
            output: "create:electron_tube",
            fluid: "tconstruct:molten_rose_gold",
            amount: INGOT,
        },
        {
            input: "minecraft:calcite",
            output: "3x minecraft:pointed_dripstone",
            fluid: "minecraft:water",
            amount: 500 * mB,
        },
        {
            input: "techreborn:netherrack_dust",
            output: "create:cinder_flour",
            fluid: "minecraft:water",
            amount: 250 * mB,
        },
        {
            input: "create:blaze_cake_base",
            output: "create:blaze_cake",
            fluid: "techreborn:nitro_diesel",
            amount: 250 * mB,
        },
        {
            input: "techreborn:red_cell_battery",
            output: "techreborn:lithium_ion_battery",
            fluid: "techreborn:lithium",
            amount: BUCKET,
        },
        {
            input: "minecraft:compass",
            output: "explorerscompass:explorerscompass",
            fluid: "tconstruct:molten_iron",
            amount: 4 * INGOT,
        },
        {
            input: "doodads:brick_road",
            output: "doodads:yellow_brick_road",
            fluid: "tconstruct:molten_gold",
            amount: 50 * mB,
        },
        {
            input: "doodads:stone_brick_road",
            output: "doodads:yellow_brick_road",
            fluid: "tconstruct:molten_gold",
            amount: 25 * mB,
        },
        {
            input: "minecraft:warped_fungus",
            output: "minecraft:crimson_fungus",
            fluid: "minecraft:lava",
            amount: 25 * mB,
        },
        {
            input: "techreborn:sponge_piece",
            output: "minecraft:honeycomb",
            fluid: "create:honey",
            amount: 250 * mB,
        },
        {
            input: "minecraft:beehive",
            output: "minecraft:bee_nest",
            fluid: "create:honey",
            amount: BUCKET,
        },
        {
            input: "minecraft:blackstone",
            output: "minecraft:gilded_blackstone",
            fluid: "tconstruct:molten_gold",
            amount: INGOT,
        },
        {
            input: "vinery:wine_bottle",
            output: "vinery:red_grapejuice_wine_bottle",
            fluid: "kubejs:red_grape_juice",
            amount: 250 * mB,
        },
        {
            input: "vinery:wine_bottle",
            output: "vinery:white_grapejuice_wine_bottle",
            fluid: "kubejs:white_grape_juice",
            amount: 250 * mB,
        },
    ].forEach((recipe) => {
        event.recipes.createFilling(recipe.output, [recipe.input, { fluid: recipe.fluid, amount: recipe.amount }]);
    });

    event.recipes.createFilling("minecraft:glowstone_dust",
        ["create:cinder_flour",
            {fluid:"create:potion", amount:25 * mB, nbt:{Bottle: "REGULAR", Potion:"naturalist:glowing"}}
        ]);

    event.recipes.createFilling("createastral:swift_andesite",
        ["doodads:asphalt",
            {fluid:"create:potion", amount:37 * mB, nbt:{Bottle: "REGULAR", Potion:"minecraft:swiftness"}}
        ]);
}
function mixingRecipes(event) {
    // Biofuel rework

    // Output: string
    // Input: Array of items, may include fluid objects or item strings
    // Heat: "" = no heat, "heated", or "superheated"
    // Time: Mixing time in ticks
    [
        {
            output: "minecraft:shroomlight",
            input: [
                ["minecraft:brown_mushroom_block", "minecraft:red_mushroom_block", "minecraft:mushroom_stem",
                "minecraft:nether_wart_block", "minecraft:warped_wart_block"],
                "naturalist:glow_goop",
                {
                    fluid: "create:honey",
                    amount: 25 * mB,
                },
            ],
            heat: "",
            time: 100,
        },
        {
            output: "minecraft:shroomlight",
            input: [
                ["minecraft:brown_mushroom_block", "minecraft:red_mushroom_block", "minecraft:mushroom_stem",
                    "minecraft:nether_wart_block", "minecraft:warped_wart_block"],
                "2x minecraft:glowstone_dust",
                {
                    fluid: "create:honey",
                    amount: 25 * mB,
                },
            ],
            heat: "",
            time: 100,
        },
        {
            output: "minecraft:ice",
            input: [
                "2x minecraft:snowball",
                {
                    fluid: "minecraft:water",
                    amount: BUCKET * 0.5,
                },
            ],
            heat: "",
            time: 100,
        },
        //mixing recipes for coral
        {
            output: "minecraft:tube_coral_block",
            input: [
                ["minecraft:tropical_fish", "minecraft:pufferfish"],
                "3x minecraft:kelp",
                "minecraft:blue_dye",
                {
                    fluid: "kubejs:shimmer",
                    amount: 100 * mB,
                },
            ],
            heat: "",
            time: 100,
        },
        {
            output: "minecraft:brain_coral_block",
            input: [
                ["minecraft:tropical_fish", "minecraft:pufferfish"],
                "3x minecraft:kelp",
                "minecraft:pink_dye",
                {
                    fluid: "kubejs:shimmer",
                    amount: 100 * mB,
                },
            ],
            heat: "",
            time: 100,
        },
        {
            output: "minecraft:bubble_coral_block",
            input: [
                ["minecraft:tropical_fish", "minecraft:pufferfish"],
                "3x minecraft:kelp",
                "minecraft:purple_dye",
                {
                    fluid: "kubejs:shimmer",
                    amount: 100 * mB,
                },
            ],
            heat: "",
            time: 100,
        },
        {
            output: "minecraft:fire_coral_block",
            input: [
                ["minecraft:tropical_fish", "minecraft:pufferfish"],
                "3x minecraft:kelp",
                "minecraft:red_dye",
                {
                    fluid: "kubejs:shimmer",
                    amount: 100 * mB,
                },
            ],
            heat: "",
            time: 100,
        },
        {
            output: "minecraft:horn_coral_block",
            input: [
                ["minecraft:tropical_fish", "minecraft:pufferfish"],
                "3x minecraft:kelp",
                "minecraft:yellow_dye",
                {
                    fluid: "kubejs:shimmer",
                    amount: 100 * mB,
                },
            ],
            heat: "",
            time: 100,
        },
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
                    amount: 500 * mB,
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
                    amount: 500 * mB,
                },
            ],
            heat: "heated",
            time: 1000,
        },
        {
            output: "techreborn:plantball",
            input: [
                "9x minecraft:kelp",
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
                "9x minecraft:sugar_cane",
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
                "3x farmersdelight:straw",
                {
                    fluid: "createaddition:seed_oil",
                    amount: 500 * mB,
                },
            ],
            heat: "heated",
            time: 1000,
        },
        {
            output: "#c:living_coral_plants",
            input: [
                "4x minecraft:kelp",
                {
                    fluid: "minecraft:water",
                    amount: 250 * mB,
                },
            ],
            heat: "",
            time: 50,
        },
        {
            output: "#c:living_coral_fans",
            input: [
                "4x minecraft:dried_kelp",
                {
                    fluid: "minecraft:water",
                    amount: 250 * mB,
                },
            ],
            heat: "",
            time: 50,
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
            output: "3x tconstruct:nether_grout",
            input: [
                "minecraft:magma_cream",
                "minecraft:soul_sand",
                "techreborn:scrap",
                "#c:dusts/obsidian",
                "#c:dusts/obsidian",
                "#c:dusts/obsidian",
            ],
            heat: "heated",
            time: 700,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:mending",lvl:1s}]}'),
            input: ["16x minecraft:book", "64x create:experience_nugget"],
            heat: "heated",
            time: 700,
        },
        {
            output: Fluid.of("kubejs:blast-resistant_cement", BUCKET),
            input: [
                "#c:concrete_powder",
                "2x createastral:lime",
                "3x techreborn:steel_dust",
                { fluid: "minecraft:water", amount: BUCKET },
            ],
            heat: "heated",
            time: 1000,
        },
        {
            output: Fluid.of("create:honey", BUCKET / 9),
            input: ["techreborn:sap", "minecraft:sugar"],
            heat: "",
            time: 100,
        },
        {
            output: "3x dustrial_decor:cast_iron_billet",
            input: ["minecraft:iron_ingot", "2x create:andesite_alloy", "minecraft:coal"],
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
            input: ["ad_astra:steel_plate", "techreborn:carbon_mesh", "8x #c:wires"],
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
            output: Fluid.of("tconstruct:molten_brass", INGOT * 2),
            input: ["minecraft:copper_ingot", "create:zinc_ingot"],
            heat: "heated",
            time: 300,
        },
        {
            output: Fluid.of("tconstruct:molten_brass", INGOT / 5),
            input: [
                { fluid: "tconstruct:molten_copper", amount: INGOT / 10 },
                { fluid: "tconstruct:molten_zinc", amount: INGOT / 10 },
            ],
            heat: "heated",
            time: 5,
        },
        {
            output: Fluid.of("tconstruct:molten_amethyst_bronze", INGOT),
            input: ["createastral:bronze_ingot", "minecraft:amethyst_shard"],
            heat: "heated",
            time: 300,
        },
        {
            output: Fluid.of("tconstruct:molten_amethyst_bronze", INGOT / 10),
            input: [
                { fluid: "tconstruct:molten_bronze", amount: INGOT / 10 },
                { fluid: "tconstruct:molten_amethyst", amount: INGOT / 10 },
            ],
            heat: "heated",
            time: 100,
        },
        {
            output: Fluid.of("tconstruct:molten_bronze", INGOT / 5),
            input: [
                { fluid: "tconstruct:molten_tin", amount: INGOT / 10 },
                { fluid: "tconstruct:molten_copper", amount: INGOT / 10 },
            ],
            heat: "",
            time: 100,
        },
        {
            output: Fluid.of("tconstruct:molten_rose_gold", INGOT),
            input: ["minecraft:copper_ingot", "minecraft:gold_ingot"],
            heat: "heated",
            time: 300,
        },
        {
            output: Fluid.of("tconstruct:molten_bronze", INGOT * 2),
            input: ["minecraft:copper_ingot", "techreborn:tin_ingot"],
            heat: "",
            time: 300,
        },
        {
            output: Fluid.of("tconstruct:molten_rose_gold", INGOT / 10),
            input: [
                { fluid: "tconstruct:molten_copper", amount: INGOT / 10 },
                { fluid: "tconstruct:molten_gold", amount: INGOT / 10 },
            ],
            heat: "",
            time: 10,
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
            output: "1x ae2:certus_quartz",
            input: [{ fluid: "minecraft:water", amount: 250 * mB }, "1x ae2:certus_quartz_dust"],
            heat: "heated",
            time: 40,
        },
        {
            output: Fluid.of("tconstruct:molten_pig_iron", INGOT),
            input: ["minecraft:porkchop", "minecraft:iron_ingot", "minecraft:gold_ingot"],
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
            output: Fluid.of("tconstruct:molten_queens_slime", INGOT / 5),
            input: [
                { fluid: "tconstruct:molten_cobalt", amount: INGOT / 10 },
                { fluid: "tconstruct:molten_slimesteel", amount: INGOT / 5 },
            ],
            heat: "heated",
            time: 5,
        },
        {
            output: Fluid.of("tconstruct:molten_manyullyn", INGOT),
            input: [
                { fluid: "tconstruct:molten_cobalt", amount: INGOT * 2 },
                "1x minecraft:netherite_scrap",
                { fluid: "kubejs:molten_desh", amount: INGOT },
            ],
            heat: "heated",
            time: 1000,
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
            output: Fluid.of("tconstruct:molten_debris", 250 * mB),
            input: ["minecraft:ancient_debris"],
            heat: "superheated",
            time: 500,
        },
        {
            output: Fluid.of("kubejs:hellfire", 1 * mB),
            input: [{ fluid: "minecraft:lava", amount: 100 * mB }],
            heat: "superheated",
            time: 100,
        },
        {
            output: "create:chromatic_compound",
            input: ["5x techreborn:uu_matter", { fluid: "kubejs:shimmer", amount: BUCKET }],
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
            output: "8x tconstruct:grout",
            input: ["create:andesite_alloy", "create:zinc_ingot", "8x minecraft:gravel"],
        },
        {
            output: "minecraft:tuff",
            input: ["minecraft:basalt", "minecraft:cobblestone"],
        },
        {
            output: "8x tconstruct:grout",
            input: ["create:andesite_alloy", "create:zinc_ingot", "8x minecraft:gravel"],
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
            output: "minecraft:glow_ink_sac",
            input: ["minecraft:ink_sac", "2x minecraft:glowstone_dust"],
            heat: "",
            time: 50,
        },
        {
            output: "minecraft:piglin_banner_pattern",
            input: ["1x minecraft:paper", Item.of("tconstruct:large_plate", '{Material:"tconstruct:pig_iron"}')],
            heat: "",
            time: 100,
        },
        {
            output: "minecraft:dolphin_spawn_egg",
            input: [{ fluid: "kubejs:shimmer", amount: 500 * mB }, "createastral:orcane"],
            heat: "",
            time: 500,
        },
        {
            output: "adoptafloppa:kitney_item",
            input: [{ fluid: "kubejs:shimmer", amount: 500 * mB }, "3x minecraft:ghast_tear"],
            heat: "",
            time: 500,
        },
        {
            output: "blahaj:gray_shark",
            input: [{ fluid: "kubejs:shimmer", amount: BUCKET }, "blahaj:blue_shark"],
            heat: "",
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
            input: [{ fluid: "kubejs:shimmer", amount: INGOT }, "4x tconstruct:sky_slime_ball"],
            heat: "heated",
            time: 30,
        },
        {
            output: "tconstruct:ender_slime_ball",
            input: [{ fluid: "kubejs:shimmer", amount: INGOT }, "2x tconstruct:ichor_slime_ball"],
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
            output: "32x doodads:stone_brick_road",
            input: [{ fluid: "kubejs:shimmer", amount: 500 * mB }, "32x minecraft:stone_bricks"],
            heat: "",
            time: 1000,
        },
        {
            output: "32x doodads:brick_road",
            input: [{ fluid: "kubejs:shimmer", amount: 500 * mB }, "32x minecraft:bricks"],
            heat: "",
            time: 1000,
        },
        {
            output: "doodads:asphalt",
            input: [{ fluid: "kubejs:compound_mixture", amount: 3000 }, "#c:concrete_powder"],
            heat: "",
            time: 1000,
        },
        {
            output: { fluid: "create:honey", amount: 500 * mB },
            input: [
                { fluid: "minecraft:water", amount: 500 * mB },
                { fluid: "kubejs:shimmer", amount: 500 * mB },
            ],
            heat: "",
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
            heat: "",
            time: 30,
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
            output: "8x minecraft:wet_sponge",
            input: [
                "8x minecraft:yellow_dye",
                "2x minecraft:black_dye",
                "1x minecraft:heart_of_the_sea",
                { fluid: "minecraft:water", amount: BUCKET },
            ],
            heat: "",
            time: 500,
        },
        {
            output: "3x minecraft:paper",
            input: ["3x techreborn:saw_dust", { fluid: "minecraft:water", amount: BUCKET }],
            heat: "",
            time: 100,
        },
        {
            output: "yttr:yttrium_ingot",
            input: [
                {
                    fluid: "kubejs:molten_desh",
                    amount: INGOT / 2,
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
                    amount: INGOT / 2,
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
                    amount: INGOT / 2,
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
                "4x ad_astra:desh_ingot",
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
                "2x ad_astra:ostrum_ingot",
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
                    amount: 2 * INGOT,
                },
            ],
            heat: "superheated",
            time: 1000,
        },
    ].forEach((recipe) => {
        event.recipes
            .createMixing(recipe.output, recipe.input)
            .heatRequirement(recipe.heat ?? "")
            .processingTime(recipe.time ?? 100);
    });

    event.recipes
        .createMixing(Fluid.of("ad_astra:cryo_fuel", BUCKET), [
            { fluid: "techreborn:nitrogen", amount: BUCKET },
            { fluid: "kubejs:aurorite", amount: BUCKET },
        ])
        .processingTime(300);

    event.recipes
        .createMixing("techreborn:sulfur_dust", ["3x minecraft:glowstone_dust", "ae2:sky_dust"])
        .processingTime(50);

    event.recipes
        .createMixing(Fluid.of("techreborn:oil", 250 * mB), [
            { fluid: "techreborn:sulfur", amount: 500 * mB },
            "3x techreborn:coal_dust",
        ])
        .processingTime(300);

    event.recipes
        .createMixing(Fluid.of("kubejs:molten_radiance", BUCKET), [
            "minecraft:nether_star",
            "minecraft:glowstone",
            "minecraft:sea_lantern",
            "3x createastral:separation_agent",
            { fluid: "kubejs:shimmer", amount: BUCKET },
        ])
        .heated()
        .processingTime(1000);

    event.recipes
        .createMixing(Fluid.of("kubejs:molten_shadowsteel", BUCKET), [
            "minecraft:ender_pearl",
            "8x dbe:vanta_black",
            "techreborn:lead_storage_block",
            "3x createastral:separation_agent",
            "9x create:chromatic_compound",
        ])
        .heated()
        .processingTime(1000);

    event.recipes
        .createMixing("create:refined_radiance", [
            "create:chromatic_compound",
            { fluid: "kubejs:molten_radiance", amount: 100 * mB },
        ])
        .superheated()
        .processingTime(1000);

    event.recipes
        .createMixing("doodads:asphalt", [
            { fluid: "kubejs:andesite_compound", amount: INGOT / 3 },
            "#c:concrete_powder",
        ])
        .processingTime(1000);
}
function cuttingRecipes(event) {
    // [Input string, Output string]
    [
        ["techreborn:rubber_log", "techreborn:rubber_log_stripped"],
        ["techreborn:rubber_wood", "techreborn:stripped_rubber_wood"],
        ["techreborn:rubber_log_stripped", "6x techreborn:rubber_planks"],
        ["vinery:cherry_log", "vinery:stripped_cherry_log"],
        ["vinery:stripped_cherry_log", "6x vinery:cherry_planks"],
        ["vinery:old_cherry_log", "vinery:stripped_old_cherry_log"],
        ["vinery:stripped_old_cherry_log", "6x vinery:cherry_planks"],
        ["vinery:cherry_wood", "vinery:stripped_cherry_wood"],
        ["vinery:old_cherry_wood", "vinery:stripped_old_cherry_wood"],
        ["ad_astra:glacian_log", "ad_astra:stripped_glacian_log"],
        ["ad_astra:stripped_glacian_log", "6x ad_astra:glacian_planks"],
        ["create:track", "railways:track_acacia"],
        ["create:track", "railways:track_birch"],
        ["create:track", "railways:track_crimson"],
        ["create:track", "railways:track_dark_oak"],
        ["create:track", "railways:track_jungle"],
        ["create:track", "railways:track_oak"],
        ["create:track", "railways:track_spruce"],
        ["create:track", "railways:track_warped"],
        ["create:track", "railways:track_blackstone"],
        ["create:track", "railways:track_ender"],
        ["create:track", "railways:track_tieless"],
        ["create:track", "railways:track_phantom"],
        ["create:track", "railways:track_monorail"],
        ["minecraft:rabbit", "minecraft:rabbit_foot"]
    ].forEach((recipe) => {
        event.recipes.createCutting(recipe[1], recipe[0]);
    });
}
function hauntingRecipes(event) {
    // [Input string, Output string]
    [
        ["naturalist:snail_shell", "minecraft:nautilus_shell"],
        ["2x techreborn:charcoal_dust", "techreborn:coal_dust"],
        ["2x minecraft:charcoal", "minecraft:coal"],
        ["minecraft:sand", "minecraft:soul_sand"],
        ["minecraft:soul_sand", "minecraft:netherrack"],

        //dead coral blocks
        ["minecraft:tube_coral_block", "minecraft:dead_tube_coral_block"],
        ["minecraft:brain_coral_block", "minecraft:dead_brain_coral_block"],
        ["minecraft:bubble_coral_block", "minecraft:dead_bubble_coral_block"],
        ["minecraft:fire_coral_block", "minecraft:dead_fire_coral_block"],
        ["minecraft:horn_coral_block", "minecraft:dead_horn_coral_block"],

        //dead coral
        ["minecraft:tube_coral", "minecraft:dead_tube_coral"],
        ["minecraft:brain_coral", "minecraft:dead_brain_coral"],
        ["minecraft:bubble_coral", "minecraft:dead_bubble_coral"],
        ["minecraft:fire_coral", "minecraft:dead_fire_coral"],
        ["minecraft:horn_coral", "minecraft:dead_horn_coral"],

        //dead coral fans
        ["minecraft:tube_coral_fan", "minecraft:dead_tube_coral_fan"],
        ["minecraft:brain_coral_fan", "minecraft:dead_brain_coral_fan"],
        ["minecraft:bubble_coral_fan", "minecraft:dead_bubble_coral_fan"],
        ["minecraft:fire_coral_fan", "minecraft:dead_fire_coral_fan"],
        ["minecraft:horn_coral_fan", "minecraft:dead_horn_coral_fan"],
    ].forEach((recipe) => {
        event.recipes.createHaunting(recipe[1], recipe[0]);
    });
}
function splashingRecipes(event) {
    //Input: String
    //Outputs: Array of outputs, which is each an array.
    //    [Item string, float from 0.0 - 1.0 deciding chance]
    [
        //sponge to wet sponge
        {
            input: "minecraft:sponge",
            outputs: [["minecraft:wet_sponge", 1]],
        },
        {
            input: "createaddition:biomass",
            outputs: [
                ["createastral:pure_biomatter", 1],
                ["minecraft:sugar", 0.2],
                ["minecraft:bonemeal", 0.2],
            ],
        },
        {
            input: "ae2:certus_crystal_seed",
            outputs: [
                ["ae2:certus_quartz_crystal", 1],
                ["minecraft:sugar", 0.1],
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
            // wash shulker box to remove the color
            input: "#c:shulker_boxes",
            outputs: [["minecraft:shulker_box", 1]]
        },

        // ae2 cable washing made easy !!!

        {
            input: "#ae2:glass_cable",
            outputs: [["ae2:fluix_glass_cable", 1]],
        },

        {
            input: "#ae2:covered_cable",
            outputs: [["ae2:fluix_covered_cable", 1]],
        },

        {
            input: "#ae2:covered_dense_cable",
            outputs: [["ae2:fluix_covered_dense_cable", 1]],
        },

        {
            input: "#ae2:smart_cable",
            outputs: [["ae2:fluix_smart_cable", 1]],
        },

        {
            input: "#ae2:smart_dense_cable",
            outputs: [["ae2:fluix_smart_dense_cable", 1]],
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
            output: "immersive_aircraft:airship",
            shape: ["AAAA ", "AAAAA", " GFG ", "BEDBC", " BBB "],
            inputs: {
                A: "immersive_aircraft:sail",
                B: "immersive_aircraft:hull",
                C: "create:propeller",
                D: "immersive_aircraft:engine",
                E: "#create:seats",
                F: "createastral:airship_blueprint",
                G: "farmersdelight:rope",
            },
        },
        {
            output: "ad_astra:tier_4_rocket",
            shape: ["   A   ", "  AAA  ", "  BEB  ", "  BDB  ", "  BDB  ", " CDFDC ", "IGDGDGI", "IGHGHGI", "IH H HI"],
            inputs: {
                A: "ad_astra:calorite_block",
                B: "create:shadow_steel_casing",
                C: "create:refined_radiance_casing",
                D: "createastral:subatomic_ingot",
                E: "createastral:navigation_mechanism",
                F: "techreborn:fusion_control_computer",
                G: "ad_astra:calorite_tank",
                H: "ad_astra:calorite_engine",
                I: "ad_astra:rocket_fin",
            },
        },
        {
            output: "immersive_aircraft:quadrocopter",
            shape: ["CCDCC ", "CCBCC ", "ABEBAF", "CCBCC ", "CCDCC "],
            inputs: {
                A: "create:precision_mechanism",
                B: "immersive_aircraft:hull",
                C: "create:propeller",
                D: "createaddition:brass_rod",
                E: "#create:seats",
                F: "createastral:quadrocopter_blueprint",
            },
        },
        {
            output: "immersive_aircraft:gyrodyne",
            shape: [" CCC ", "  DF ", "BGEBA", " BBB "],
            inputs: {
                A: "immersive_aircraft:sail",
                B: "immersive_aircraft:hull",
                C: "create:propeller",
                D: "createaddition:brass_rod",
                E: "#create:seats",
                F: "createastral:gyrodyne_blueprint",
                G: "create:hand_crank",
            },
        },
        {
            output: "immersive_aircraft:biplane",
            shape: ["    AA   ", "    AA   ", " A   BBC ", "BBBBBEDCF", " A   BBC ", "    AA   ", "    AA   "],
            inputs: {
                A: "immersive_aircraft:sail",
                B: "immersive_aircraft:hull",
                C: "create:propeller",
                D: "immersive_aircraft:engine",
                E: "#create:seats",
                F: "createastral:biplane_blueprint",
            },
        },
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
                B: "yttr:yttrium_ingot",
                C: "techreborn:industrial_circuit",
            },
        },
        {
            output: "immersive_aircraft:boiler",
            shape: ["AB", "CB", "CB"],
            inputs: {
                A: "create:nozzle",
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
            shape: ["ADA", "ABA"],
            inputs: {
                A: "create:brass_sheet",
                B: "computercraft:turtle_normal",
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
            },
        },

        {
            output: "buildinggadgets:gadget_building",
            shape: [" I ", "SOS", "S8S", "SNS"],
            inputs: {
                S: "techreborn:silver_plate",
                8: "ae2:spatial_cell_component_2",
                O: "techreborn:basic_display",
                I: "ae2:wireless_receiver",
                N: "createastral:navigation_mechanism",
            },
        },
        {
            output: "buildinggadgets:gadget_copy_paste",
            shape: [" I ", "SOS", "SMS", "SNS"],
            inputs: {
                S: "techreborn:silver_plate",
                M: "ae2:memory_card",
                O: "techreborn:basic_display",
                I: "ae2:wireless_receiver",
                N: "createastral:navigation_mechanism",
            },
        },
        {
            output: "ad_astra:ostrum_engine",
            shape: [" F ", "FEF", "FDF", "ABA"],
            inputs: {
                A: "createastral:shimmer_amplifier",
                B: "createaddition:capacitor",
                D: "createaddition:tesla_coil",
                E: "ad_astra:ostrum_block",
                F: "ad_astra:ostrum_plate",
            },
        },
    ].forEach((recipe) => {
        event.recipes.create.mechanical_crafting(recipe.output, recipe.shape, recipe.inputs);
    });

    //yttric rifle!!
    event.remove({ output: "yttr:rifle" });
    event.recipes.createMechanicalCrafting("yttr:rifle", ["CCY  ", "YMEIC", " CDYC", "   C "], {
        Y: "yttr:yttrium_block",
        C: "ad_astra:calorite_ingot",
        I: "techreborn:industrial_circuit",
        E: "techreborn:electronic_circuit",
        D: "techreborn:data_storage_chip",
        M: "minecraft:crossbow",
    });
}

function pressingRecipes(event) {
    // [Input string, Output string]
    [
        ["minecraft:lapis_block", "create:lapis_sheet"],
        ["createastral:pure_star_shard", "minecraft:nether_star"],
        ["minecraft:cobblestone", "techreborn:andesite_dust"],
    ].forEach((recipe) => {
        event.recipes.createPressing(recipe[1], recipe[0]);
    });
}
function farmersDelightIntegration(event) {
    let knivesTag = "c:tools/knives";
    event.forEachRecipe({ type: "farmersdelight:cutting", tool: { tag: knivesTag } }, (recipe) => {
        let { originalRecipeIngredients, originalRecipeResult } = recipe;
        event.recipes.create.deploying([originalRecipeResult], [originalRecipeIngredients, `#${knivesTag}`]);
    });
}

function compactingRecipes(event) {
    [
        {
            output: "minecraft:calcite",
            inputs: ["3x minecraft:bone_meal", "minecraft:gravel", { fluid: "minecraft:lava", amount: 100 * mB }],
        },
        {
            output: "minecraft:lapis_lazuli",
            inputs: [
                "3x techreborn:lazurite_dust",
                "2x minecraft:iron_nugget",
                { fluid: "minecraft:lava", amount: BUCKET / 30 },
            ],
        },
        {
            output: "minecraft:granite",
            inputs: ["minecraft:diorite", "minecraft:flint", { fluid: "minecraft:lava", amount: 100 * mB }],
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
            inputs: ["8x minecraft:prismarine_crystals"],
        },
        {
            output: "minecraft:andesite",
            inputs: ["4x techreborn:andesite_dust"],
        },
        {
            output: "minecraft:andesite",
            inputs: ["2x techreborn:andesite_dust", "2x minecraft:basalt"],
        },
        {
            output: "minecraft:dripstone_block",
            inputs: ["2x minecraft:granite", "2x minecraft:slime_ball"],
        },
        {
            output: "minecraft:cobbled_deepslate",
            inputs: ["3x minecraft:flint", "minecraft:gravel"],
        },
        {
            output: "createastral:compressed_experience_block",
            inputs: ["9x create:experience_block"],
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
            output: "minecraft:porkchop",
            inputs: [
                "3x #c:mushrooms",
                "minecraft:rotten_flesh",
                {
                    fluid: "createaddition:seed_oil",
                    amount: BUCKET / 9,
                },
            ],
        },
        {
            output: "minecraft:beef",
            inputs: [
                "3x #c:mushrooms",
                "3x #c:grass_variants",
                {
                    fluid: "createaddition:seed_oil",
                    amount: BUCKET / 9,
                },
            ],
        },
        {
            output: "minecraft:chicken",
            inputs: [
                "3x #c:mushrooms",
                "farmersdelight:rice",
                {
                    fluid: "createaddition:seed_oil",
                    amount: BUCKET / 9,
                },
            ],
        },
        {
            output: "minecraft:mutton",
            inputs: [
                "3x #c:mushrooms",
                "#minecraft:wool",
                {
                    fluid: "createaddition:seed_oil",
                    amount: BUCKET / 9,
                },
            ],
        },
        {
            output: "minecraft:rabbit",
            inputs: [
                "3x #c:mushrooms",
                "minecraft:carrot",
                {
                    fluid: "createaddition:seed_oil",
                    amount: BUCKET / 9,
                },
            ],
        },
        {
            output: "2x createastral:gyrodyne_blueprint",
            inputs: ["createastral:gyrodyne_blueprint", "create:empty_schematic", "32x minecraft:black_dye"],
        },
        {
            output: "2x createastral:biplane_blueprint",
            inputs: ["createastral:biplane_blueprint", "create:empty_schematic", "32x minecraft:black_dye"],
        },
        {
            output: "2x createastral:airship_blueprint",
            inputs: ["createastral:airship_blueprint", "create:empty_schematic", "32x minecraft:black_dye"],
        },
        {
            output: "2x createastral:quadrocopter_blueprint",
            inputs: ["createastral:quadrocopter_blueprint", "create:empty_schematic", "32x minecraft:black_dye"],
        },

        //mushroom block recipes
        {
            output: "minecraft:brown_mushroom_block",
            inputs: ["4x minecraft:brown_mushroom"],
        },
        {
            output: "minecraft:red_mushroom_block",
            inputs: ["4x minecraft:red_mushroom"],
        },
        {
            //nametag recipe
            output: "minecraft:name_tag",
            inputs: ["farmersdelight:canvas", "minecraft:ink_sac", "createaddition:iron_wire"],
        },
    ].forEach((recipe) => {
        event.recipes.createCompacting(recipe.output, recipe.inputs);
    });

    [
        {
            output: "minecraft:andesite",
            inputs: ["2x minecraft:flint", "minecraft:gravel", { fluid: "minecraft:lava", amount: 100 * mB }],
        },
        {
            output: "createastral:steel_helmet",
            inputs: [Item.of("createastral:sturdy_helmet").ignoreNBT(), "6x techreborn:steel_dust"],
        },
        {
            output: "createastral:steel_chestplate",
            inputs: [Item.of("createastral:sturdy_chestplate").ignoreNBT(), "12x techreborn:steel_dust"],
        },
        {
            output: "createastral:steel_leggings",
            inputs: [Item.of("createastral:sturdy_leggings").ignoreNBT(), "8x techreborn:steel_dust"],
        },
        {
            output: "createastral:steel_boots",
            inputs: [Item.of("createastral:sturdy_boots").ignoreNBT(), "5x techreborn:steel_dust"],
        },
        {
            output: ["ae2:silicon_press", "ae2:printed_silicon"],
            inputs: ["ae2:silicon_press",
                {
                    fluid: "techreborn:silicon",
                    amount: INGOT,
                },
            ],
        },
        {
            output: ["ae2:silicon_press", "ae2:silicon_press"],
            inputs: ["ae2:silicon_press", "minecraft:iron_block"],
        },
        {
            output: ["ae2:logic_processor_press", "ae2:printed_logic_processor"],
            inputs: [
                "ae2:logic_processor_press",
                {
                    fluid: "tconstruct:molten_gold",
                    amount: INGOT,
                },
            ],
        },
        {
            output: ["ae2:logic_processor_press", "ae2:logic_processor_press"],
            inputs: ["ae2:logic_processor_press", "minecraft:iron_block"],
        },
        {
            output: ["ae2:engineering_processor_press", "ae2:printed_engineering_processor"],
            inputs: [
                "ae2:engineering_processor_press",
                {
                    fluid: "tconstruct:molten_diamond",
                    amount: GEM,
                },
            ],
        },
        {
            output: ["ae2:engineering_processor_press", "ae2:engineering_processor_press"],
            inputs: ["ae2:engineering_processor_press", "minecraft:iron_block"],
        },
        {
            output: ["ae2:calculation_processor_press", "ae2:printed_calculation_processor"],
            inputs: [
                "ae2:calculation_processor_press",
                {
                    fluid: "kubejs:molten_desh",
                    amount: INGOT,
                },
            ],
        },
        {
            output: ["ae2:calculation_processor_press", "ae2:calculation_processor_press"],
            inputs: ["ae2:calculation_processor_press", "minecraft:iron_block"],
        },
        {
            output: ["ae2:ender_dust"],
            inputs: ["minecraft:ender_pearl"],
        },
        {
            output: ["ae2:certus_quartz_dust"],
            inputs: ["#c:certus_quartz"],
            heat: "",
        },
        {
            output: "minecraft:shulker_shell",
            inputs: ["ae2:ender_dust", "8x minecraft:purple_dye"],
        },
    ].forEach((recipe) => {
        event.recipes
            .createCompacting(recipe.output, recipe.inputs)
            .heatRequirement(recipe.heat ?? "heated")
            .processingTime(recipe.time ?? 200);
    });

    event.recipes
        .createCompacting("createastral:olivine_sheet", ["16x techreborn:olivine_dust"])
        .superheated()
        .processingTime(1500);

    event.recipes
        .createCompacting("create:lapis_sheet", ["16x techreborn:lazurite_dust"])
        .heated()
        .processingTime(1500);

    event.recipes
        .createCompacting("yttr:continuous_platform", [
            { fluid: "kubejs:aurorite", amount: 100 * mB },
            { fluid: "kubejs:shimmer", amount: 100 * mB },
        ])
        .heated()
        .processingTime(200);

    event.recipes
        .createCompacting("ad_astra:sky_stone", ["5x ad_astra:moon_stone", "ae2:certus_quartz_dust"])
        .heated()
        .processingTime(200);

    event.recipes
        .createCompacting("createastral:star_shard", [{ fluid: "kubejs:molten_radiance", amount: 100 * mB }])
        .heated()
        .processingTime(500);

    event.recipes.createCompacting("4x minecraft:purpur_block", [
        "4x ad_astra:strophar_cap",
        { fluid: "minecraft:water", amount: 100 * mB },
    ]);
}
function superheatedMixingRecipes(event) {
    //[input, output]
    [
        ["minecraft:cobblestone", "minecraft:blackstone"],
        ["minecraft:calcite", "minecraft:tuff"],
        ["minecraft:obsidian", "minecraft:crying_obsidian"],
        ["compressor:octuple_compressed_cobblestone", "createastral:logo"],
    ].forEach((recipe) => {
        event.recipes.createMixing(recipe[1], recipe[0]).superheated().processingTime(20);
    });
}
function sandpaperRecipes(event) {
    [
        ["minecraft:blackstone", "minecraft:netherrack"],
        ["minecraft:nether_bricks", "minecraft:red_nether_bricks"],
        ["tconstruct:earth_slime_grass_seeds", "tconstruct:blood_slime_grass_seeds"],
    ].forEach((recipe) => {
        event.recipes.createSandpaperPolishing(recipe[1], recipe[0]);
    });
}
