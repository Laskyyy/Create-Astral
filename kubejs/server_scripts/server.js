// priority: 0

settings.logAddedRecipes = false;
settings.logRemovedRecipes = false;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = false;

console.info("Welcome to white space.");

///// DIAMONDS REQUIRE DIAMOND TIER TO MINE (IT MAKES SENSE) /////

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

// constants

// Includes some "ore alchemy" and other misc blocks like andeste alloy blocks
function lizardMiscChanges(event) {
    // Implementing Andesite Alloy Block
    event.shaped("createastral:andesite_alloy_block", ["AAA", "AAA", "AAA"], {
        A: "create:andesite_alloy",
    });

    event.shaped("9x create:andesite_alloy", ["A"], {
        A: "createastral:andesite_alloy_block",
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
        ["iron", "minecraft:iron_sheet"],
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
        "3x minecraft:quartz",
    ]);

    // Nerf vanilla andesite shapeless

    event.shapeless("minecraft:andesite", [
        "2x minecraft:diorite",
        "4x minecraft:gravel",
    ]);

    // Keep this, let people decide which path to produce diorite is
    // event.remove({type: 'create:compacting', output: 'minecraft:diorite' });

    // Nerf vanilla diorite

    event.shapeless("minecraft:diorite", [
        "minecraft:cobblestone",
        "6x minecraft:quartz",
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

    /////  ASSORTED MECHANICAL CRAFTING  //////

    event.shaped("ad_astra:oxygen_loader", ["BAB", "DED", "BCB"], {
        A: "ad_astra:oxygen_tank",
        B: "#c:iron_plates",
        C: "ad_astra:engine_fan",
        D: "create:smart_fluid_pipe",
        E: "create:fluid_tank",
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
        event.shaped("createastral:strudy_" + name, fullkit[name], {
            S: "createastral:sturdy_sheet_block",
        });
    });

    event.shaped("ad_astra:space_boots", ["S S", "BAB"], {
        S: "minecraft:white_wool",
        A: "create:diving_boots",
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

    ///// BASIC COGWHEELS

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
    event.stonecutting("minecraft:wooden_hoe", "create:andesite_alloy");
    event.stonecutting("minecraft:wooden_axe", "create:andesite_alloy");
    event.stonecutting("minecraft:wooden_shovel", "create:andesite_alloy");
    event.stonecutting("minecraft:wooden_pickaxe", "create:andesite_alloy");
    event.stonecutting("minecraft:wooden_sword", "create:andesite_alloy");
    event.stonecutting("minecraft:stone_hoe", "create:andesite_alloy");
    event.stonecutting("minecraft:stone_axe", "create:andesite_alloy");
    event.stonecutting("minecraft:stone_shovel", "create:andesite_alloy");
    event.stonecutting("minecraft:stone_pickaxe", "create:andesite_alloy");
    event.stonecutting("minecraft:stone_sword", "create:andesite_alloy");
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
    event.smelting("techreborn:tin_ingot", "create:crushed_tin_ore");
    event.smelting("techreborn:silver_ingot", "create:crushed_silver_ore");
    event.smelting("techreborn:lead_ingot", "create:crushed_lead_ore");
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

    event.shaped("camsbackpacks:white_backpack", ["ABA", "CDE", "FAF"], {
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
});

onEvent("player.logged_in", (event) => {
    if (!event.player.stages.has("starting_items")) {
        event.player.stages.add("starting_items");

        event.player.give("ftbquests:book");
    }
});
