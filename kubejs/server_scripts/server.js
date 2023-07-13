// priority: 0

settings.logAddedRecipes = false;
settings.logRemovedRecipes = false;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = false;

console.info("Welcome to white space.");

onEvent("tags.blocks", (event) => {
    event.remove("minecraft:needs_iron_tool", "minecraft:diamond_ore");
    event.remove(
        "minecraft:needs_iron_tool",
        "minecraft:deepslate_diamond_ore"
    );
    event.add("minecraft:needs_diamond_tool", "minecraft:diamond_ore");
    event.add(
        "minecraft:needs_diamond_tool",
        "minecraft:deepslate_diamond_ore"
    );
});

onEvent('item.tags', event => {
    event.add('c:stripped_logs', 'vinery:stripped_cherry_log');
    event.add('c:stripped_logs', 'vinery:stripped_old_cherry_log');
    event.add('c:stripped_logs', 'techreborn:rubber_log_stripped');
    event.add('c:stripped_logs', 'ad_astra:stripped_glacian_log');
});


// constants

// Farmer's Delight cutting board changes
function farmersDelightCuttingChanges(event) {
    // Tech Reborn Rubber Log
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            { item: "techreborn:rubber_log" }
        ],
        tool: {
            type: "farmersdelight:tool",
            tag: "c:tools/axes"
        },
        result: [
            { item: "techreborn:rubber_log_stripped" },
            { item: "farmersdelight:tree_bark" }
        ],
        sound: "minecraft:item.axe.strip"
    });

    // Ad Astra Glacian Log
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            { item: "ad_astra:glacian_log" }
        ],
        tool: {
            type: "farmersdelight:tool",
            tag: "c:tools/axes"
        },
        result: [
            { item: "ad_astra:stripped_glacian_log" },
            { item: "farmersdelight:tree_bark" }
        ],
        sound: "minecraft:item.axe.strip"
    });

    // Tinkers' Construct Bloodshroom Log
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            { item: "tconstruct:bloodshroom_log" }
        ],
        tool: {
            type: "farmersdelight:tool",
            tag: "c:tools/axes"
        },
        result: [
            { item: "tconstruct:stripped_bloodshroom_log" },
            { item: "farmersdelight:tree_bark" }
        ],
        sound: "minecraft:item.axe.strip"
    });

    // Tinkers' Construct Greenheart Log
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            { item: "tconstruct:greenheart_log" }
        ],
        tool: {
            type: "farmersdelight:tool",
            tag: "c:tools/axes"
        },
        result: [
            { item: "tconstruct:stripped_greenheart_log" },
            { item: "farmersdelight:tree_bark" }
        ],
        sound: "minecraft:item.axe.strip"
    });

    // Tinkers' Construct Skyroot Log
    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            { item: "tconstruct:skyroot_log" }
        ],
        tool: {
            type: "farmersdelight:tool",
            tag: "c:tools/axes"
        },
        result: [
            { item: "tconstruct:stripped_skyroot_log" },
            { item: "farmersdelight:tree_bark" }
        ],
        sound: "minecraft:item.axe.strip"
    });
}

// Includes some "ore alchemy" and other misc blocks like andeste alloy blocks
function lizardMiscChanges(event) {
    // Implementing Andesite Alloy Block
    event.shaped("createastral:andesite_alloy_block", ["AAA", "AAA", "AAA"], {
        A: "create:andesite_alloy",
    });

    event.shaped("9x create:andesite_alloy", ["A"], {
        A: "createastral:andesite_alloy_block",
    });

    event.shaped("createastral:charcoal_block", ["AAA", "AAA", "AAA"], {
        A: "minecraft:charcoal",
    });

    event.shaped("9x minecraft:charcoal", ["A"], {
        A: "createastral:charcoal_block",
    });

    // Make some machine recipes more interesting

    event.shaped("techreborn:grinder", ["ABA", "CDC", " E "], {
        A: "create:sturdy_sheet",
        B: "create:integrated_circuit",
        C: "minecraft:diamond",
        D: "create:millstone",
        E: "techreborn:basic_machine_frame",
    });

    event.shaped("techreborn:wire_mill", ["ABA", "ADA" /*'CDC',*/, " E "], {
        A: "create:sturdy_sheet",
        B: "createaddition:rolling_mill",
        // C: 'create:integreted' // A little weird since the extractor also has the
        D: "techreborn:extractor",
        E: "create:mechanical_piston",
    });

    event.shaped("techreborn:compressor", ["ABA", "ACA", "ADA"], {
        A: "create:sturdy_sheet",
        B: "create:integrated_circuit",
        C: "create:mechanical_press",
        D: "techreborn:basic_machine_frame",
    });

    // Buffed catwalk output. Seriously! Its so resource heavy!
    const CATWALK_MATERIALS = [
        ["gold", "create:golden_sheet"],
        ["netherite", "createdeco:netherite_sheet"],
        ["andesite", "create:andesite_alloy"],
        ["brass", "create:brass_sheet"],
        ["cast_iron", "createdeco:cast_iron_sheet"],
        ["iron", "create:iron_sheet"],
        ["copper", "create:copper_sheet"],
        ["zinc", "#c:plates/zinc"],
    ];

    for (let catwalkMaterial of CATWALK_MATERIALS) {
        event.remove({
            output: "createdeco:" + catwalkMaterial[0] + "_catwalk",
        });

        // Note I'm deliberately changing iron catwalk recipe to not use sandpapering.
        event.shaped(
            "8x createdeco:" + catwalkMaterial[0] + "_catwalk",
            [" A ", "ABA", " A "],
            {
                A: catwalkMaterial[1],
                B:
                    catwalkMaterial[0] == "iron"
                        ? "minecraft:iron_bars"
                        : "createdeco:" + catwalkMaterial[0] + "_bars",
            }
        );
    }
}

// Largely degating trains
function lizardCH1Changes(event) {
    // Pre-bulk-washing obisidian (train de-gating)
    event
        .shapeless("minecraft:obsidian", [
            "minecraft:magma_block",
            "minecraft:water_bucket",
        ])
        .replaceIngredient("minecraft:water_bucket", "minecraft:bucket")
        .id("createastral:washing_obsidian_manual_only");

    var track_shape = ["NSN", "NSN", "NSN"];
    [
        "create:zinc_nugget",
        "techreborn:tin_nugget",
        "minecraft:iron_nugget",
    ].forEach((nugget) => {
        event.shaped("create:track", track_shape, {
            N: nugget,
            S: "#create:sleepers",
        });
    });
}

// A lot of progression fixes
function lizardCH2Changes(event) {
    // Pre-brass Smart Pipe
    event.shaped("create:smart_fluid_pipe", ["FB", "CO", "VP"], {
        B: "createastral:bronze_sheet",
        O: "minecraft:observer",
        F: "create:filter",
        C: "minecraft:comparator",
        P: "create:fluid_pipe",
        V: "create:fluid_valve",
    });

    event.shaped("create:brass_funnel", ["FB", "CO", "VP"], {
        B: "tconstruct:rose_gold_ingot",
        O: "minecraft:observer",
        F: "create:filter",
        C: "minecraft:comparator",
        P: "create:fluid_pipe",
        V: "create:fluid_valve",
    });

    // Pre-brass display links (we can get pre-brass display boards after all)
    event.shaped("create:display_link", [" R ", "BOB", " C "], {
        B: "createastral:bronze_sheet",
        O: "minecraft:observer",
        R: "minecraft:redstone_torch",
        C: "#c:plates/copper",
    });

    // Make Oxygen loader possible before the moon
    // (NOTE: I commented out original recipe)
    event.shaped("ad_astra:oxygen_loader", ["IOI", "PTP", "IFI"], {
        I: "create:iron_sheet",
        O: "ad_astra:oxygen_tank",
        P: "create:smart_fluid_pipe",
        T: "create:fluid_tank",
        F: "ad_astra:engine_fan",
    });

    // Degate Distributor to be before the compressor, so people can make moon bases as soon as they
    //  reach the moon.

    event.shaped("ad_astra:oxygen_distributor", ["FFF", "TLT", "DGD"], {
        F: "ad_astra:engine_fan",
        T: "ad_astra:oxygen_tank",
        L: "ad_astra:oxygen_loader",
        D: "ad_astra:desh_ingot",
        G: "ad_astra:oxygen_gear",
    });
}

// Made changes to give silver and brass more unique identities
function lizardCH3Changes(event) {
    // Remove mechanical crafter requirement from alternator+electric motor,
    //  Making it fully unique to the silver path.

    event.shaped("createaddition:alternator", ["ABA", "CDC", "EFE"], {
        A: "create:iron_sheet",
        B: "techreborn:red_cell_battery",
        C: "createaddition:copper_spool",
        D: "create:integrated_circuit",
        E: "createaddition:capacitor",
        F: "techreborn:basic_machine_casing",
    });

    event.shaped("createaddition:electric_motor", ["ABA", "CDC", "EFE"], {
        A: "createastral:bronze_sheet",
        B: "techreborn:red_cell_battery",
        C: "createaddition:copper_spool",
        D: "create:integrated_circuit",
        E: "createaddition:capacitor",
        F: "techreborn:basic_machine_casing",
    });

    // Removed brass+mechanical crafting requirement for Tesla Coil,
    //  Making it fully unique to the silver path.

    event.shaped("createaddition:tesla_coil", ["DSD", "USU", "CMC"], {
        D: "ad_astra:desh_ingot",
        S: "createaddition:copper_spool",
        U: "techreborn:copper_cable",
        C: "createaddition:capacitor",
        M: "techreborn:basic_machine_casing",
    });

    // New Electrum recipe

    // De-gating chunk-loader, but then give it more difficult materials to balance it out
    // Todo V2.X: make it require plates that require special dust crafting. (emerald and diamond plates suffice for now)

    // Scorched tanks NEED a recipe! These both take the same amount of bricks.
    //  Seared version did require brass but I don't think that makes sense.
    event.shaped("tconstruct:scorched_fuel_tank", ["AAA", "ABA"], {
        A: "tconstruct:scorched_brick",
        B: "create:fluid_tank",
    });
    event.shaped("tconstruct:scorched_fuel_gauge", ["ACA", "CBC", "AAA"], {
        A: "tconstruct:scorched_brick",
        B: "create:fluid_tank",
        C: "#c:glass",
    });

    // Changed blaze burner recipe.
    event.shaped("create:empty_blaze_burner", ["AAA", "A A", "BCB"], {
        A: "createaddition:iron_rod",
        B: "create:iron_sheet",
        C: "ad_astra:moon_stone",
    });

    // Gag recipe
    event.shaped("create:blaze_burner", ["AAA", "ADA", "BCB"], {
        A: "createaddition:iron_rod",
        B: "create:iron_sheet",
        C: "ad_astra:moon_stone",
        D: "tconstruct:blaze_head",
    });
}

// This includes the launch pad recipe
function lizardCH3Concrete(event) {
    // Cement pouring recipe

    // Old school slab and stairs
    event.shaped("6x createastral:blast-resistant_concrete_slab", ["AAA"], {
        A: "createastral:blast-resistant_concrete",
    });

    event.shaped(
        "4x createastral:blast-resistant_concrete_stairs",
        ["A  ", "AA ", "AAA"],
        {
            A: "createastral:blast-resistant_concrete",
        }
    );

    // Cement block-cutting recipe
    event.stonecutting(
        "2x createastral:blast-resistant_concrete_slab",
        "createastral:blast-resistant_concrete"
    );
    event.stonecutting(
        "createastral:blast-resistant_concrete_stairs",
        "createastral:blast-resistant_concrete"
    );
}

function lizardGeologyAlchemyChanges(event) {
    // Manual dripstone
    event
        .shapeless("minecraft:dripstone_block", [
            "minecraft:calcite",
            "minecraft:water_bucket",
        ])
        .replaceIngredient("minecraft:water_bucket", "minecraft:bucket")
        .id("createastral:dripstone_block_manual_only");

    // Manual Pointed Dripstone
    event.stonecutting(
        "2x minecraft:pointed_dripstone",
        "minecraft:dripstone_block"
    );

    // Using the grinder on individual pointed dripstones give you the best yields
    // (1.33 for milling dripstone, ~2 per calcite for crushing dripstone, 3 per calcite if grinding pointed drip)

    // Nerf vanilla granite recipe

    event.shapeless("minecraft:granite", [
        "1x minecraft:diorite",
        "3x minecraft:sand",
    ]);

    // Nerf vanilla andesite shapeless

    event.shapeless("minecraft:andesite", [
        "1x minecraft:diorite",
        "4x minecraft:flint",
    ]);

    // Keep this, let people decide which path to produce diorite is
    // event.remove({type: 'create:compacting', output: 'minecraft:diorite' });

    // Nerf vanilla diorite

    event.shapeless("minecraft:diorite", [
        "minecraft:cobblestone",
        "3x minecraft:quartz",
    ]);
    // I'm too confused to replace the tconstruct recipe

    // Not happy with this, can't think of a better way to utilize basalt though. Might come back to this.
}

// Lasky - feel free to move the code in here to more appropriate places, I just wanted
//  to keep all my changes together
function lizardChanges(event) {
    lizardMiscChanges(event);
    lizardCH1Changes(event);
    lizardCH2Changes(event);
    lizardCH3Changes(event);
    lizardCH3Concrete(event);
    lizardGeologyAlchemyChanges(event);
}

onEvent("recipes", (event) => {
    // Lizard's changes
    lizardChanges(event);
    farmersDelightCuttingChanges(event);

    /////// TECH REBORN ACTUAL RECIPES //////

    //Tinker's Construct Reworking (New fluids and recipes)
    //Tier 2 and 3 materials

    event.smithing(
        "createastral:bronze_ingot",
        "techreborn:tin_ingot",
        "minecraft:copper_ingot"
    );
    event.smithing(
        "createastral:bronze_ingot",
        "minecraft:copper_ingot",
        "techreborn:tin_ingot"
    );

    event.shaped("tconstruct:seared_fuel_tank", ["CCC", "BDB", "AAA"], {
        A: "tconstruct:seared_bricks",
        B: "#c:glass",
        C: "create:brass_sheet",
        D: "create:fluid_tank",
    });
    event.shaped("tconstruct:seared_fuel_gauge", ["CAC", "BDB", "ACA"], {
        A: "tconstruct:seared_bricks",
        B: "#c:glass",
        C: "create:brass_sheet",
        D: "create:fluid_tank",
    });
    event.shaped("tconstruct:seared_ingot_tank", ["ACA", "ADA", "ACA"], {
        A: "tconstruct:seared_bricks",
        C: "create:brass_sheet",
        D: "create:fluid_tank",
    });
    event.shaped("tconstruct:seared_ingot_gauge", ["AAA", "CDC", "AAA"], {
        A: "tconstruct:seared_bricks",
        C: "create:brass_sheet",
        D: "create:fluid_tank",
    });

    event.shaped("tconstruct:seared_melter", ["CWC", "SSS", "CSC"], {
        S: "tconstruct:seared_bricks",
        W: "create:fluid_tank",
        C: "create:zinc_ingot",
    });

    //BOW // CROSSBOW
    event.shaped("minecraft:bow", ["   ", "CCA", " BC"], {
        A: "minecraft:gunpowder",
        B: "create:analog_lever",
        C: "minecraft:copper_ingot",
    });

    event.shaped("8x minecraft:arrow", [" B ", " B ", " A "], {
        A: "minecraft:gunpowder",
        B: "minecraft:copper_ingot",
    });

    // COMPUTERCRAFT

    /////  ASSORTED CRAFTING  //////

    event.shaped("ad_astra:oxygen_loader", ["BAB", "DED", "BCB"], {
        A: "ad_astra:oxygen_tank",
        B: "#c:iron_plates",
        C: "ad_astra:engine_fan",
        D: "create:smart_fluid_pipe",
        E: "create:fluid_tank",
    });


    event.shaped("automobility:auto_mechanic_table", ["DBD", "ACA", "AEA"], {
        A: "create:railway_casing",
        B: "create:crafting_blueprint",
        C: "yttr:project_table",
        D: "create:smart_fluid_pipe",
        E: "create:electron_tube",
    });


    ///COMPUTERCRAFT FIXES

    event.shapeless(
        Item.of("computercraft:turtle_normal", {
            RightUpgrade: "minecraft:diamond_pickaxe",
        }),
        [
            "computercraft:turtle_normal",
            "minecraft:iron_pickaxe",
            "3x minecraft:diamond",
        ]
    );
    event.shapeless(
        Item.of("computercraft:turtle_normal", {
            RightUpgrade: "minecraft:diamond_axe",
        }),
        [
            "computercraft:turtle_normal",
            "minecraft:iron_axe",
            "3x minecraft:diamond",
        ]
    );
    event.shapeless(
        Item.of("computercraft:turtle_normal", {
            RightUpgrade: "minecraft:diamond_shovel",
        }),
        [
            "computercraft:turtle_normal",
            "minecraft:iron_shovel",
            "minecraft:diamond",
        ]
    );
    event.shapeless(
        Item.of("computercraft:turtle_normal", {
            RightUpgrade: "minecraft:diamond_sword",
        }),
        [
            "computercraft:turtle_normal",
            "minecraft:iron_sword",
            "2x minecraft:diamond",
        ]
    );
    event.shapeless(
        Item.of("computercraft:turtle_normal", {
            RightUpgrade: "minecraft:diamond_hoe",
        }),
        [
            "computercraft:turtle_normal",
            "minecraft:iron_hoe",
            "2x minecraft:diamond",
        ]
    );
    event.shapeless(Item.of("dbe:track_end"), ["create:track"]);
    event.shapeless('ad_astra:sky_stone', [
        'ae2:sky_stone_block'])




        
    // IRON TOOLS RECIPES / DIAMOND

    const fullkit = {
        helmet: ["SSS", "S S", "   "],
        chestplate: ["S S", "SSS", "SSS"],
        leggings: ["SSS", "S S", "S S"],
        boots: ["   ", "S S", "S S"],
        sword: [" S ", " S ", " W "],
        pickaxe: ["SSS", " W ", " W "],
        shovel: [" S ", " W ", " W "],
        axe: ["SS ", "SW ", " W "],
        hoe: ["SS ", " W ", " W "],
    };
    const names = [
        "helmet",
        "chestplate",
        "leggings",
        "boots",
        "sword",
        "pickaxe",
        "shovel",
        "axe",
        "hoe",
    ];

    names.forEach((name) => {
        event.shaped("minecraft:iron_" + name, fullkit[name], {
            S: "create:iron_sheet",
            W: fullkit[name].join("").includes("W") ? "minecraft:stick" : null,
        });
        event.shaped("createastral:copper_" + name, fullkit[name], {
            S: "minecraft:copper_ingot",
            W: fullkit[name].join("").includes("W") ? "minecraft:stick" : null,
        });
        event.shaped("createastral:brass_" + name, fullkit[name], {
            S: "create:brass_sheet",
            W: fullkit[name].join("").includes("W") ? "minecraft:stick" : null,
        });
    });

    ["helmet", "chestplate", "leggings", "boots"].forEach((name) => {
        event.shaped("createastral:sturdy_" + name, fullkit[name], {
            S: "createastral:sturdy_sheet_block",
        });
    });

    event.shaped("ad_astra:space_boots", ["S S", "BAB"], {
        S: "minecraft:white_wool",
        A: "create:copper_diving_boots",
        B: "create:sturdy_sheet",
    });
    ///// SMELTING BLOCK RECIPE CHANGES

    event.shaped("minecraft:furnace", ["AAA", "A A", "SSS"], {
        S: "#c:raw_materials",
        A: "minecraft:cobblestone",
    });
    event.shaped("minecraft:blast_furnace", ["AAA", "ASA", "BBB"], {
        S: "minecraft:furnace",
        A: "minecraft:iron_ingot",
        B: "minecraft:stone",
    });

    //DOODADS RECIPES

    event.shaped("8x doodads:platform", [" A ", "BBB", " A "], {
        A: "create:andesite_alloy",
        B: "#minecraft:planks",
    });
    event.shaped("3x doodads:duct_tape", ["   ", "AAA", " B "], {
        A: "create:belt_connector",
        B: "create:super_glue",
    });
    event.shaped("doodads:rubber_band", [" B ", " A ", " B "], {
        A: "minecraft:slime_ball",
        B: "minecraft:string",
    });
    event.shaped("doodads:blossom_belt", [" A ", "ABA", " A "], {
        A: "create:tree_fertilizer",
        B: "minecraft:string",
    });
    event.shaped("doodads:shulker_aglet", ["   ", "ABA", "   "], {
        A: "minecraft:shulker_shell",
        B: "minecraft:end_stone",
    });
    event.shaped("doodads:cactus_ring", ["AAA", "ABA", "AAA"], {
        A: "minecraft:cactus",
        B: "create:golden_sheet",
    });
    event.shaped("doodads:loggers_glove", [" A ", "ABA", "ABA"], {
        A: "minecraft:leather",
        B: "#minecraft:logs",
    });
    event.shaped("doodads:soggy_glove", [" A ", "ABA", "ABA"], {
        A: "minecraft:leather",
        B: "minecraft:wet_sponge",
    });
    event.shaped("doodads:paintbrush", [" B ", " A ", " A "], {
        A: "minecraft:stick",
        B: "toms_storage:ts.paint_kit",
    });

    event.shaped("automobility:automobile_assembler", ["AAA", " B ", "BBB"], {
        A: "techreborn:tin_ingot",
        B: "create:brass_ingot",
    });

   ///// EXTENDED DRAWERS ////

   event.shaped("extended_drawers:single_drawer", ["ABA", "BCB", "ABA"], {
    A: "#c:stripped_logs",
    B: "create:andesite_alloy",
    C: "reinfchest:copper_chest",
});

event.shaped("extended_drawers:double_drawer", ["ACA", "BBB", "ACA"], {
    A: "#c:stripped_logs",
    B: "create:andesite_alloy",
    C: "reinfchest:copper_chest",
});

event.shaped("extended_drawers:quad_drawer", ["ACA", "CBC", "ACA"], {
    A: "#c:stripped_logs",
    B: "create:andesite_alloy",
    C: "reinfchest:copper_chest",
});

event.shaped("extended_drawers:upgrade_frame", ["AB", "BA"], {
    A: "tconstruct:pattern",
    B: "create:andesite_alloy",
});

event.shaped("extended_drawers:t1_upgrade", ["ABA", "DCD", "ABA"], {
    A: "tconstruct:seared_brick",
    B: "techreborn:rubber",
    C: "reinfchest:iron_chest",
    D: "extended_drawers:upgrade_frame",
});

event.shaped("extended_drawers:t2_upgrade", ["ABA", "DCD", "ABA"], {
    A: "create:brass_sheet",
    B: "ae2:fluix_dust",
    C: "reinfchest:gold_chest",
    D: "extended_drawers:t1_upgrade",
});

event.shaped("extended_drawers:t3_upgrade", ["ABA", "DCD", "ABA"], {
    A: "techreborn:lead_plate",
    B: "passivepiglins:piglin_fortune",
    C: "reinfchest:diamond_chest",
    D: "extended_drawers:t2_upgrade",
});

event.shaped("extended_drawers:t4_upgrade", ["ABA", "DCD", "ABA"], {
    A: "yttr:continuous_platform",
    B: "techreborn:uu_matter",
    C: "reinfchest:netherite_chest",
    D: "extended_drawers:t3_upgrade",
});

event.shaped("extended_drawers:downgrade", ["ABA", "DCD", "ABA"], {
    A: "createaddition:copper_rod",
    B: "tconstruct:grout",
    C: "trashcans:item_trash_can",
    D: "extended_drawers:upgrade_frame",
});

event.shaped("extended_drawers:lock", [" A ", "ABA", "CCC"], {
    A: "create:andesite_alloy",
    B: "create:iron_sheet",
    C: "create:golden_sheet",
});

event.shaped("2x extended_drawers:connector", ["CBC", "BAB", "CBC"], {
    A: "extended_drawers:upgrade_frame",
    B: "minecraft:stick",
    C: "createaddition:copper_rod",
});

 
    event.shaped("3x create:cogwheel", ["AB"], {
        A: "create:andesite_alloy",
        B: "createastral:bronze_sheet",
    });
    event.shaped("create:large_cogwheel", ["ABA"], {
        A: "create:cogwheel",
        B: "createastral:bronze_sheet",
    });

    ///// STONE CUTTER ADDITIONS ////

    event.stonecutting(
        "2x createastral:bronze_sheet",
        "createastral:bronze_ingot"
    );
    event.stonecutting("minecraft:wooden_hoe", "createastral:andesite_compound");
    event.stonecutting("minecraft:wooden_axe", "createastral:andesite_compound");
    event.stonecutting("minecraft:wooden_shovel", "createastral:andesite_compound");
    event.stonecutting("minecraft:wooden_pickaxe", "createastral:andesite_compound");
    event.stonecutting("minecraft:wooden_sword", "createastral:andesite_compound");
    event.stonecutting("minecraft:stone_hoe", "createastral:andesite_compound");
    event.stonecutting("minecraft:stone_axe", "createastral:andesite_compound");
    event.stonecutting("minecraft:stone_shovel", "createastral:andesite_compound");
    event.stonecutting("minecraft:stone_pickaxe", "createastral:andesite_compound");
    event.stonecutting("minecraft:stone_sword", "createastral:andesite_compound");
    event.stonecutting("8x automobility:dirt_off_road", "minecraft:dirt");
    event.stonecutting(
        "8x automobility:grass_off_road",
        "minecraft:grass_block"
    );
    event.stonecutting(
        "8x automobility:grass_off_road",
        "minecraft:moss_block"
    );
    event.stonecutting(
        "2x automobility:grass_off_road",
        "minecraft:moss_carpet"
    );
    event.stonecutting("8x automobility:sand_off_road", "minecraft:sand");
    event.stonecutting("ae2:inscriber", "techreborn:basic_machine_frame");
    event.stonecutting("tconstruct:gear_cast", "#c:plates/gold");
    event.stonecutting("tconstruct:coin_cast", "#c:plates/gold");
    event.stonecutting(
        "automobility:sloped_dash_panel",
        "automobility:dash_panel"
    );
    event.stonecutting(
        "automobility:steep_sloped_dash_panel",
        "automobility:dash_panel"
    );

    ////////////////  EARLY GAME ANDESITE / GROUT RELATED STUFF

    event.shaped("createastral:andesite_compound", ["BBB", "AAA", "CCC"], {
        A: "techreborn:tin_nugget",
        B: "minecraft:andesite",
        C: "minecraft:clay_ball",
    });

    event.shaped("createastral:andesite_compound", ["BBB", "AAA", "CCC"], {
        A: "create:zinc_nugget",
        B: "minecraft:andesite",
        C: "minecraft:clay_ball",
    });

    event.shaped("createastral:andesite_compound", ["BBB", "AAA", "CCC"], {
        A: "minecraft:iron_nugget",
        B: "minecraft:andesite",
        C: "minecraft:clay_ball",
    });
    event.smelting("create:andesite_alloy", "createastral:andesite_compound");
    event.blasting("create:andesite_alloy", "createastral:andesite_compound");
    event.blasting("tconstruct:scorched_basin", "tconstruct:seared_basin");
    event.blasting("tconstruct:scorched_table", "tconstruct:seared_table");

    //SMITHING RADIANT STUFF

    event.smithing(
        "createastral:radiant_helmet",
        "createastral:steel_helmet",
        "create:refined_radiance"
    );
    event.smithing(
        "createastral:radiant_chestplate",
        "createastral:steel_chestplate",
        "create:refined_radiance"
    );
    event.smithing(
        "createastral:radiant_leggings",
        "createastral:steel_leggings",
        "create:refined_radiance"
    );
    event.smithing(
        "createastral:radiant_boots",
        "createastral:steel_boots",
        "create:refined_radiance"
    );
    event.smithing(
        "createastral:radiant_sword",
        "minecraft:netherite_sword",
        "create:refined_radiance"
    );
    event.smithing(
        "createastral:radiant_axe",
        "minecraft:netherite_axe",
        "create:refined_radiance"
    );
    event.smithing(
        "createastral:radiant_shovel",
        "minecraft:netherite_shovel",
        "create:refined_radiance"
    );
    event.smithing(
        "createastral:radiant_pickaxe",
        "minecraft:netherite_pickaxe",
        "create:refined_radiance"
    );

    event.smelting("minecraft:leather", "minecraft:rotten_flesh").xp(2.0);
    event.smelting("techreborn:tin_ingot", "create:crushed_raw_tin");
    event.smelting("techreborn:silver_ingot", "create:crushed_raw_silver");
    event.smelting("techreborn:lead_ingot", "create:crushed_raw_lead");
    event.smithing(
        "farmersdelight:cooking_pot",
        "farmersdelight:skillet",
        "minecraft:water_bucket"
    );

    event.shaped("minecraft:experience_bottle", ["AAA", "ABA", "AAA"], {
        A: "create:experience_nugget",
        B: "minecraft:glass_bottle",
    });

    /// SIFTER STUFF

    event.shaped("createsifter:sifter", [" E ", "CDC", "BAB"], {
        A: "create:andesite_casing",
        B: "create:cogwheel",
        C: "create:shaft",
        D: "create:millstone",
        E: Item.of("create:filter").ignoreNBT(),
    });

    event.shaped("createsifter:andesite_mesh", ["BAB", "AAA", "BAB"], {
        A: "createdeco:andesite_mesh_fence",
        B: "create:shaft",
    });

    event.shaped("createsifter:brass_mesh", ["BAB", "AAA", "BAB"], {
        A: "createdeco:brass_mesh_fence",
        B: "createaddition:brass_rod",
    });

    /// end sifter

    //// ASSORTED CRAFTING BENCH RECIPES

    event.shaped("minecraft:bundle", [" S ", "A A", " A "], {
        S: "minecraft:string",
        A: "minecraft:leather",
    });

    event.shaped("createastral:sturdy_sheet_block", ["AA", "AA"], {
        A: "create:sturdy_sheet",
    });

    event.shaped("createastral:bronze_block", ["AAA", "AAA", "AAA"], {
        A: "createastral:bronze_ingot",
    });
    event.shaped("9x createastral:bronze_ingot", ["A"], {
        A: "createastral:bronze_block",
    });

    event.shaped("ad_astra:steel_block", ["AAA", "AAA", "AAA"], {
        A: "ad_astra:steel_ingot",
    });
    event.shaped("9x ad_astra:steel_ingot", ["A"], {
        A: "ad_astra:steel_block",
    });

    event.shaped("createastral:copper_plating", ["AA", "AA"], {
        A: "create:copper_sheet",
    });

    event.shaped("createastral:copper_heating_coil", ["AAA", "AAA", "AAA"], {
        A: "createaddition:copper_spool",
    });

    event.shaped("createastral:refined_radiance_block", ["AAA", "AAA", "AAA"], {
        A: "create:refined_radiance",
    });
    event.shaped("16x create:refined_radiance_casing", ["BBB", "BAB", "BBB"], {
        A: "create:refined_radiance",
        B: "#minecraft:planks",
    });
    event.shaped("10x minecraft:torch", ["A", "B"], {
        A: "naturalist:glow_goop",
        B: "minecraft:stick",
    });

    event.shaped("techreborn:synthetic_redstone_crystal", ["AB", "BA"], {
        A: "minecraft:red_dye",
        B: "#c:glass",
    });

    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "vinery:cherry_log",
            },
        ],
        tool: {
            type: "farmersdelight:tool",
            tag: "c:tools/axes",
        },
        result: [
            {
                item: "vinery:stripped_cherry_log",
            },
            {
                item: "farmersdelight:tree_bark",
            },
        ],
        sound: "minecraft:item.axe.strip",
    });

    event.custom({
        type: "farmersdelight:cutting",
        ingredients: [
            {
                item: "vinery:old_cherry_log",
            },
        ],
        tool: {
            type: "farmersdelight:tool",
            tag: "c:tools/axes",
        },
        result: [
            {
                item: "vinery:stripped_old_cherry_log",
            },
            {
                item: "farmersdelight:tree_bark",
            },
        ],
        sound: "minecraft:item.axe.strip",
    });

    event.shaped(
        Item.of("custommachinery:custom_machine_item", {
            machine: "createastral:electrolyser",
        }),
        ["CCC", "DED", "CCC"],
        {
            D: "techreborn:insulated_copper_cable",
            E: "phonos:redstone_chip",
            C: "create:copper_casing",
        }
    );

    event.shaped(
        Item.of("custommachinery:custom_machine_item", {
            machine: "createastral:distillery",
        }),
        ["CCC", "DED", "CCC"],
        {
            D: "techreborn:electronic_circuit",
            E: "create:blaze_burner",
            C: "techreborn:lead_storage_block",
        }
    );

    event.shaped("travelersbackpack:standard", ["ABA", "CDE", "FAF"], {
        A: "farmersdelight:canvas",
        B: "minecraft:crafting_table",
        C: "campanion:leather_pouch",
        D: "minecraft:barrel",
        E: "campanion:sleeping_bag",
        F: "campanion:rope",
    });
    event.shaped("campanion:tent_bag", [" A ", "ABA", " A "], {
        A: "campanion:rope",
        B: "campanion:leather_pouch",
    });
    event.shaped("ad_astra:moon_globe", ["BBB", "BA ", "BC "], {
        A: "ad_astra:moon_sand",
        B: "createaddition:gold_rod",
        C: "minecraft:light_weighted_pressure_plate",
    });
    event.shaped("ad_astra:earth_globe", ["BBB", "BA ", "BC "], {
        A: "minecraft:grass_block",
        B: "createaddition:gold_rod",
        C: "minecraft:light_weighted_pressure_plate",
    });
    event.shaped("ad_astra:mars_globe", ["BBB", "BA ", "BC "], {
        A: "ad_astra:mars_stone",
        B: "createaddition:gold_rod",
        C: "minecraft:light_weighted_pressure_plate",
    });
    event.shaped("ad_astra:mercury_globe", ["BBB", "BA ", "BC "], {
        A: "ad_astra:mercury_stone",
        B: "createaddition:gold_rod",
        C: "minecraft:light_weighted_pressure_plate",
    });
    event.shaped("ad_astra:venus_globe", ["BBB", "BA ", "BC "], {
        A: "ad_astra:venus_stone",
        B: "createaddition:gold_rod",
        C: "minecraft:light_weighted_pressure_plate",
    });
    event.shaped("ad_astra:glacio_globe", ["BBB", "BA ", "BC "], {
        A: "ad_astra:glacio_stone",
        B: "createaddition:gold_rod",
        C: "minecraft:light_weighted_pressure_plate",
    });

    event.shaped("passivepiglins:piglin_coin", ["BA", "AB"], {
        A: "create:golden_sheet",
        B: "minecraft:piglin_banner_pattern",
    });

    /// Stuff Laky CBA updating to new format from experimental yet

  event.remove({output: 'techreborn:sulfur_dust'})
  event.remove({output: 'techreborn:sulfur_small_dust'})
  event.remove({output: 'techreborn:sulfur'})
  event.remove({output: 'techreborn:saltpeter_dust'})
  event.remove({input: 'minecraft:soul_soil', output: 'techreborn:coal_dust'})
  event.remove({input: 'minecraft:soul_sand', output: 'techreborn:coal_dust'})
  event.remove({input: 'minecraft:glowstone_dust', output: 'minecraft:redstone'})
  event.remove({input: 'techreborn:netherrack_dust', output: 'minecraft:redstone'})
  event.replaceInput('ae2:sky_stone_block', 'ad_astra:sky_stone')
  event.replaceInput('ae2:sky_stone_block', 'ad_astra:sky_stone')

	event.recipes.createMixing(Fluid.of('ad_astra:cryo_fuel', 81000), [
    {fluid: 'techreborn:nitrogen', amount: 81000},
    {fluid: 'kubejs:aurorite', amount: 81000}
  ]).processingTime(300)

  event.recipes.createCompacting('yttr:continuous_platform', [
    {fluid: 'kubejs:aurorite', amount: 8100},
    {fluid: 'kubejs:shimmer', amount: 8100}
  ]).heated().processingTime(200)

  event.recipes.createCompacting('ad_astra:sky_stone', [
    '5x ad_astra:moon_stone',
    'ae2:certus_quartz_dust'
  ]).heated().processingTime(200)

  event.recipes.createMixing('techreborn:sulfur_dust', [
    '3x minecraft:glowstone_dust',
    'ae2:sky_dust',
  ]).processingTime(50)

	event.recipes.createMixing(Fluid.of('techreborn:oil', 22500), [
    {fluid: 'techreborn:sulfur', amount: 45000},
    '3x techreborn:coal_dust'
  ]).processingTime(300)

	event.recipes.createSequencedAssembly([ 
        'createastral:refining_agent', 
		], 'ae2:fluix_dust', [ 

    event.recipes.createFilling('ae2:fluix_dust', ['ae2:fluix_dust', {fluid: 'tconstruct:blazing_blood', amount: 9000}]),
    event.recipes.createFilling('ae2:fluix_dust', ['ae2:fluix_dust', {fluid: 'techreborn:biofuel', amount: 9000}]),
    event.recipes.createPressing('ae2:fluix_dust', 'ae2:fluix_dust')
    ]).transitionalItem('ae2:fluix_dust').loops(3) 


    event.recipes.createSequencedAssembly([ 
    'minecraft:paper', 
    ], 'createastral:separation_agent', [ 
    event.recipes.createDeploying('minecraft:paper', ['techreborn:charcoal_dust', 'techreborn:charcoal_dust']), 
    event.recipes.createDeploying('minecraft:paper', ['techreborn:obsidian_dust', 'techreborn:obsidian_dust']), 
    event.recipes.createDeploying('minecraft:paper', ['techreborn:sulfur_dust', 'techreborn:sulfur_dust']), 
    ]).transitionalItem('minecraft:paper').loops(3) 

    event.recipes.createMixing(Fluid.of('kubejs:molten_radiance', 81000), [
      'minecraft:nether_star',
      'minecraft:glowstone',
      'minecraft:sea_lantern',
      '3x createastral:separation_agent',
      {fluid: 'kubejs:shimmer', amount: 81000}
    ]).heated().processingTime(1000)

    event.recipes.createMixing(Fluid.of('kubejs:molten_shadowsteel', 81000), [
      'minecraft:ender_pearl',
      '8x dbe:vanta_black',
      'techreborn:lead_storage_block',
      '3x createastral:separation_agent',
      '9x create:chromatic_compound'
    ]).heated().processingTime(1000)

    event.recipes.createMixing( 'create:refined_radiance', [
      'create:chromatic_compound',
      {fluid: 'kubejs:molten_radiance', amount: 8100}
    ]).superheated().processingTime(1000)

    event.recipes.createCompacting('createastral:star_shard', [
      {fluid: 'kubejs:molten_radiance', amount: 8100},
    ]).heated().processingTime(500)

    event.recipes.createSequencedAssembly([
    'createastral:pure_star_shard',
    ], 'createastral:star_shard', [ 
    event.recipes.createFilling('createastral:star_shard', ['createastral:star_shard', {fluid: 'kubejs:molten_yttrium', amount: 4500}]), 
    event.recipes.createPressing('createastral:star_shard', 'createastral:star_shard'), 
    event.recipes.createDeploying('createastral:star_shard', ['techreborn:scrap_box', 'techreborn:scrap_box']), 
    event.recipes.createPressing('createastral:star_shard', 'createastral:star_shard'), 
    ]).transitionalItem('createastral:star_shard').loops(3) 

    event.custom({
      "type": "techreborn:centrifuge",
      "power": 8,
      "time": 500,
      "ingredients": [
        {
          "item": "farmersdelight:rich_soil",
          "count": 2
        }
      ],
      "results": [
        {
          "item": "minecraft:coarse_dirt",
          "count": 2
        },
        {
          "item": "techreborn:saltpeter_dust",
          "count": 4
        }
      ]
    })

event.shapeless(Item.of('techreborn:nitro_diesel_bucket'), ['ad_astra:fuel_bucket']);
event.shapeless(Item.of('techreborn:oil_bucket'), ['ad_astra:oil_bucket']);

event.recipes.createMechanicalCrafting('ad_astra:ostrum_engine', [
  ' F ',
  'FEF',
  'FDF',
  'ABA',

], {
  A: 'createastral:shimmer_amplifier',
  B: 'createaddition:capacitor',
  D: 'createaddition:tesla_coil',
  E: 'ad_astra:ostrum_block',
  F: 'ad_astra:ostrum_plate',
})


event.shaped('ad_astra:strophar_cap', [
    'AA',
    'AA',
  
  ], {
    A: 'ad_astra:strophar_mushroom'
  })
  
  event.recipes.createCompacting('4x minecraft:purpur_block', [
    '4x ad_astra:strophar_cap',
    { fluid: 'minecraft:water', amount: FULL_BUCKET_AMMOUNT / 10 }
  ]);
  
  
  event.recipes.createMixing('doodads:asphalt', [
    {fluid: 'kubejs:andesite_compound', amount: 3000},
    '#c:concrete_powder',
  ]).processingTime(1000)
  
  //yttric rifle!!
  event.remove({output: 'yttr:rifle'});
  event.recipes.createMechanicalCrafting('yttr:rifle', [
    'CCY  ',
    'YMEIC',
    ' CDYC',
    '   C ',
  
  ], {
    Y: 'yttr:yttrium_block',
    C: 'ad_astra:calorite_ingot',
    I: 'techreborn:industrial_circuit',
    E: 'techreborn:electronic_circuit',
    D: 'techreborn:data_storage_chip',
    M: 'minecraft:crossbow'
  })
});

onEvent("player.logged_in", (event) => {
    if (!event.player.stages.has("starting_items")) {
        event.player.stages.add("starting_items");

        event.player.give("ftbquests:book");
    }
});


//TheOverlyCaffeinatedTrashPanda Astral Conduit Damage On Use
//if you wish to increase the damge please goto startup scripts, line 385, then what ever value you set it, take 1 off and change the 19
onEvent("block.right_click", event => {
    if (event.block.id == "createastral:shimmering_stone" && event.item.id == "createastral:astral_conduit" && event.item.nbt['Damage'] <= 19) {
        event.item.nbt['Damage']++
        
        if (event.item.nbt['Damage'] == 20 ) {
            event.player.inventory.set(event.player.getSelectedSlot(), "air")
        }
    }
})


onEvent("morejs.villager.trades", (event) => { 
    
    const vanillaTradesToRemove = [
        ['minecraft:armorer', 4],
        ['minecraft:armorer', 5],
        ['minecraft:toolsmith', 3],
        ['minecraft:toolsmith', 4],
        ['minecraft:toolsmith', 5],
        ['minecraft:weaponsmith', 4],
        ['minecraft:weaponsmith', 5],
        ['minecraft:cleric', 5]
    ];
    
    const customTradesToAdd = [
        ['minecraft:armorer', 4, ['33x minecraft:emerald'], 'createastral:copper_chestplate'],
        ['minecraft:armorer', 4, ['25x minecraft:emerald'], 'minecraft:iron_leggings'],
        ['minecraft:armorer', 5, ['28x minecraft:emerald'], 'minecraft:iron_helmet'],
        ['minecraft:armorer', 5, ['43x minecraft:emerald'], 'createastral:sturdy_chestplate'],
        ['minecraft:armorer', 5, ['34x minecraft:emerald'], 'createastral:sturdy_leggings'],
        ['minecraft:armorer', 5, ['24x minecraft:flint'], 'createastral:andesite_compound'],
        ['minecraft:toolsmith', 3, ['2x minecraft:gravel'], 'minecraft:flint'],
        ['minecraft:toolsmith', 3, ['5x minecraft:gold_ingot'], 'create:wrench'],
        ['minecraft:toolsmith', 4, ['21x minecraft:flint'], 'minecraft:iron_pickaxe'],
        ['minecraft:toolsmith', 4, ['20x minecraft:flint'], 'minecraft:iron_shovel'],
        ['minecraft:toolsmith', 5, ['64x minecraft:emerald'], 'createastral:sturdy_boots'],
        ['minecraft:toolsmith', 5, ['53x minecraft:emerald'], 'createastral:sturdy_helmet'],
        ['minecraft:weaponsmith', 4, ['23x minecraft:flint'], 'tconstruct:dagger'],
        ['minecraft:weaponsmith', 4, ['24x minecraft:flint'], 'tconstruct:sword'],
        ['minecraft:weaponsmith', 5, ['32x minecraft:flint'], 'tconstruct:hand_axe'],
        ['minecraft:weaponsmith', 5, ['48x minecraft:flint'], 'tconstruct:cleaver'],
        ['minecraft:cleric', 5, ['25x ad_astra:moon_sand'], 'kubejs:shimmer_bucket'],
        ['techreborn:metallurgist', 1, ['10x minecraft:flint'], 'createastral:bronze_sheet'],
        ['techreborn:metallurgist', 1, ['5x minecraft:gold_ingot'], 'create:wrench'],
        ['techreborn:metallurgist', 2, ['15x minecraft:flint'], 'create:cogwheel'],
        ['techreborn:metallurgist', 3, ['32x minecraft:flint'], 'createastral:bronze_sheet'],
        ['techreborn:metallurgist', 3, ['8x minecraft:emerald'], 'create:shaft'],
        ['techreborn:metallurgist', 4, ['15x minecraft:flint'], 'create:minecart_coupling'],
        ['techreborn:metallurgist', 4, ['27x minecraft:flint'], 'create:whisk'],
        ['techreborn:metallurgist', 5, ['32x minecraft:emerald'], 'create:propeller'],
        ['techreborn:metallurgist', 5, ['35x minecraft:emerald'], 'create:brass_hand'],
        ['techreborn:electrician', 1, ['2x create:andesite_alloy'], 'createaddition:copper_wire'],
        ['techreborn:electrician', 2, ['4x minecraft:flint'], 'minecraft:redstone'],
        ['techreborn:electrician', 2, ['2x create:andesite_alloy'], 'createaddition:gold_wire'],
        ['techreborn:electrician', 3, ['6x minecraft:flint'], 'minecraft:repeater'],
        ['techreborn:electrician', 4, ['43x create:andesite_alloy'], 'computercraft:computer_normal'],
        ['techreborn:electrician', 4, ['5x create:andesite_alloy'], 'computercraft:cable'],
        ['techreborn:electrician', 5, ['15x create:andesite_alloy'], 'minecraft:comparator'],
        ['techreborn:electrician', 5, ['15x create:andesite_alloy'], 'minecraft:observer']
    ];
    
    vanillaTradesToRemove.forEach((trade) => {
        event.removeVanillaTrades(trade[0], trade[1]);
    });
    
    event.removeModdedTrades();
    
    customTradesToAdd.forEach((trade) => {
        event.addTrade(trade[0], trade[1], trade[2], trade[3]);
    });     
});