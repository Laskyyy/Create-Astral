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
var FULL_BUCKET_AMMOUNT = 81000;
var INGOT_FLUID_AMMOUNT = 9000;

// Includes some "ore alchemy" and other misc blocks like andeste alloy blocks
function lizardMiscChanges(event) {
    event.replaceInput("create:powdered_obsidian", "#c:dusts/obsidian");
    event.replaceInput("techreborn:obsidian_dust", "#c:dusts/obsidian");
    event.replaceInput(
        "createaddition:diamond_grit",
        "techreborn:diamond_dust"
    );

    // Implementing Andesite Alloy Block
    event.shaped("createastral:andesite_alloy_block", ["AAA", "AAA", "AAA"], {
        A: "create:andesite_alloy",
    });

    event.shaped("9x create:andesite_alloy", ["A"], {
        A: "createastral:andesite_alloy_block",
    });

    // andesite alloy block basin recipe
    event.custom({
        type: "tconstruct:casting_basin",
        fluid: {
            name: "kubejs:compound_mixture",
            amount: INGOT_FLUID_AMMOUNT * 9,
        },
        result: "createastral:andesite_alloy_block",
        cooling_time: 180,
    });

    // Make some machine recipes more interesting
    event.remove({ output: "techreborn:grinder" });
    event.shaped("techreborn:grinder", ["ABA", "CDC", " E "], {
        A: "create:sturdy_sheet",
        B: "create:integrated_circuit",
        C: "minecraft:diamond",
        D: "create:millstone",
        E: "techreborn:basic_machine_frame",
    });

    event.remove({ output: "techreborn:wire_mill" });
    event.shaped("techreborn:wire_mill", ["ABA", "ADA" /*'CDC',*/, " E "], {
        A: "create:sturdy_sheet",
        B: "createaddition:rolling_mill",
        // C: 'create:integreted' // A little weird since the extractor also has the
        D: "techreborn:extractor",
        E: "create:mechanical_piston",
    });

    event.remove({ output: "techreborn:compressor" });
    event.shaped("techreborn:compressor", ["ABA", "ACA", "ADA"], {
        A: "create:sturdy_sheet",
        B: "create:integrated_circuit",
        C: "create:mechanical_press",
        D: "techreborn:basic_machine_frame",
    });

    // Let's making the rolling mill more relevant by making cables require create addition rods
    event.replaceInput(
        { output: "techreborn:copper_cable" },
        "minecraft:copper_ingot",
        "createaddition:copper_rod"
    );
    event.replaceInput(
        { output: "techreborn:gold_cable" },
        "minecraft:gold_ingot",
        "createaddition:gold_rod"
    );
    event.replaceInput(
        {
            input: "techreborn:rubber",
            output: "techreborn:insulated_copper_cable",
        },
        "minecraft:copper_ingot",
        "createaddition:copper_rod"
    );

    // Originally I was going to have the wire mill be an upgraded rolling mill but the above code
    //  changes the input to rods instead of ingots. I kind of like this a bit more. Downsides is that it may be annoying
    //  to use both machines for an item they may not craft often, outside of circuit automation.
    // Still, I'll let the wire mill produce wires.
    // event.replaceOutput({type: 'techreborn:wiremill'}, 'techreborn:copper_cable', 'createaddition:copper_rod');
    const WIRE_MATERIALS = ["iron", "gold", "copper", "brass"];
    for (let material of WIRE_MATERIALS) {
        event.custom({
            type: "techreborn:wire_mill",
            power: 2,
            time: 300,
            ingredients: [
                {
                    item: "create:" + material + "_sheet",
                    count: 2,
                },
            ],
            results: [
                {
                    item: "createaddition:" + material + "_wire",
                    count: 6,
                },
            ],
        });
    }

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
    event.remove({ output: "ad_astra:oxygen_distributor" });
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
    event.remove({ output: "createaddition:alternator" });
    event.shaped("createaddition:alternator", ["ABA", "CDC", "EFE"], {
        A: "create:iron_sheet",
        B: "techreborn:red_cell_battery",
        C: "createaddition:copper_spool",
        D: "create:integrated_circuit",
        E: "createaddition:capacitor",
        F: "techreborn:basic_machine_casing",
    });

    event.remove({ output: "createaddition:electric_motor" });
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
    event.remove({ output: "createaddition:tesla_coil" });
    event.shaped("createaddition:tesla_coil", ["DSD", "USU", "CMC"], {
        D: "ad_astra:desh_ingot",
        S: "createaddition:copper_spool",
        U: "techreborn:copper_cable",
        C: "createaddition:capacitor",
        M: "techreborn:basic_machine_casing",
    });

    // New Electrum recipe
    event.custom({
        type: "createaddition:charging",
        input: {
            item: "kubejs:molten_desh_bucket",
            count: 1,
        },
        result: {
            item: "tconstruct:molten_electrum_bucket",
            count: 1,
        },
        energy: 4000,
    });

    // De-gating chunk-loader, but then give it more difficult materials to balance it out
    // Todo V2.X: make it require plates that require special dust crafting. (emerald and diamond plates suffice for now)
    event.replaceInput(
        {
            type: "minecraft:crafting_shaped",
            output: "techreborn:chunk_loader",
        },
        "techreborn:industrial_machine_frame",
        "techreborn:basic_machine_frame"
    );
    event.replaceInput(
        {
            type: "minecraft:crafting_shaped",
            output: "techreborn:chunk_loader",
        },
        "techreborn:coal_plate",
        "techreborn:diamond_plate"
    );
    event.replaceInput(
        {
            type: "minecraft:crafting_shaped",
            output: "techreborn:chunk_loader",
        },
        "techreborn:coal_plate",
        "techreborn:diamond_plate"
    );
    event.replaceInput(
        {
            type: "minecraft:crafting_shaped",
            output: "techreborn:chunk_loader",
        },
        "createastral:bronze_sheet",
        "techreborn:electrum_plate"
    );
    event.replaceInput(
        {
            type: "minecraft:crafting_shaped",
            output: "techreborn:chunk_loader",
        },
        "create:golden_sheet",
        "techreborn:emerald_plate"
    );

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

function lizardCH3Biofuel(event) {
    event.remove({
        output: "createaddition:biomass",
    });

    event.custom({
        type: "techreborn:compressor",
        power: 10,
        time: 300,
        ingredients: [
            {
                item: "techreborn:compressed_plantball",
                count: 4,
            },
        ],
        results: [
            {
                item: "createaddition:biomass",
                count: 1,
            },
        ],
    });
}

// This includes the launch pad recipe
function lizardCH3Concrete(event) {
    // Cement pouring recipe
    event.custom({
        type: "tconstruct:casting_basin",
        fluid: {
            name: "kubejs:blast-resistant_cement",
            amount: FULL_BUCKET_AMMOUNT,
        },
        result: "createastral:blast-resistant_concrete",
        cooling_time: 400,
    });

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

    // Launch pad recipe
}

// Todo (sometime but this is the lowest priority): various tech reborn "gem" ores should give gems when crushed
function lizardGrinderCrushingRework(event) {
    // Remove all block techreborn grinding recipes
    event.remove({ type: "techreborn:grinder", input: "#c:ores" });
    event.remove({ type: "techreborn:grinder", input: "#c:storage_blocks" });

    // I'm not giving these recipes below to crushing wheel (they're kind of redundant)
    event.remove({
        type: "techreborn:grinder",
        input: "#techreborn:storage_blocks",
    });
    event.remove({ type: "techreborn:grinder", output: "#c:concrete_powder" });
    event.remove({ type: "techreborn:grinder", input: "#c:sandstone" });

    // Remove grinder recipes that either have a unique crushing recipe, or doesn't make sense to grind
    event.remove({ type: "techreborn:grinder", input: "#minecraft:wool" });
    event.remove({ type: "techreborn:grinder", input: "minecraft:gravel" });
    event.remove({ type: "techreborn:grinder", input: "minecraft:obsidian" });
    event.remove({
        type: "techreborn:grinder",
        input: "minecraft:shroomlight",
    });
    event.remove({ type: "techreborn:grinder", input: "minecraft:glowstone" });
    event.remove({ type: "techreborn:grinder", input: "ad_astra:steel_block" });
    event.remove({
        type: "techreborn:grinder",
        input: "createastral:bronze_block",
    });
    event.remove({ type: "techreborn:grinder", input: "minecraft:andesite" });
    event.remove({ type: "techreborn:grinder", input: "minecraft:diorite" });
    event.remove({ type: "techreborn:grinder", input: "minecraft:granite" });
    event.remove({ type: "techreborn:grinder", input: "minecraft:netherrack" });
    event.remove({
        type: "techreborn:grinder",
        input: "minecraft:warped_nylium",
    });
    event.remove({
        type: "techreborn:grinder",
        input: "minecraft:crimson_nylium",
    });

    // Remove recipes that clutter without adding enough value
    event.remove({
        type: "techreborn:grinder",
        output: "techreborn:saw_small_dust",
    });
    event.remove({ type: "techreborn:grinder", output: "minecraft:sand" });
    event.remove({ type: "techreborn:grinder", output: "minecraft:red_sand" });

    // Add crushing unique crushing recipes to grinder
    // 0: input / 1: output amount / 2: output / 3: custom time / 4: custom power
    // NOTE: some crushing recipes are auto-generated from milling recipes, which means not all these recipes will be removed.
    //  They may remove upgraded crushing recipes though. The quest book will make it clear that
    //  some milling recipes may be upgraded by the grinder instead of the crushing wheel.
    const DEFAULT_GRIND_TIME = 100; // five seconds
    const DEFAULT_GRIND_POWER = 5;
    const CRUSHING_RECIPES_TO_BECOME_GRINDING = [
        [
            "minecraft:clay_ball",
            1,
            "techreborn:clay_dust",
            undefined,
            undefined,
        ], // showing the 4th and 5th for demonstration
        ["minecraft:amethyst_cluster", 7, "minecraft:amethyst_shard"],
        ["minecraft:prismarine_crystals", 2, "minecraft:quartz"],
        ["minecraft:saddle", 3, "minecraft:leather"],
        ["minecraft:wheat", 3, "create:wheat_flour"],
        ["minecraft:ender_pearl", 2, "ae2:ender_dust"],
        ["tconstruct:necrotic_bone", 6, "minecraft:bone_meal"],
        ["minecraft:dried_kelp", 1, "minecraft:gunpowder"],
    ];

    for (let recipe of CRUSHING_RECIPES_TO_BECOME_GRINDING) {
        // event.remove({ type:'create:crushing', input: recipe[0] });
        event.remove({ type: "create:crushing", input: recipe[0] });
        event.custom({
            type: "techreborn:grinder",
            time: recipe[3] || DEFAULT_GRIND_TIME,
            power: recipe[4] || DEFAULT_GRIND_POWER,

            ingredients: [
                {
                    item: recipe[0],
                    count: 1,
                },
            ],
            results: [
                {
                    item: recipe[2],
                    count: recipe[1],
                },
            ],
        });
    }
    event.remove({ type: "create:milling", output: "minecraft:gunpowder" });
    event.remove({ type: "create:milling", output: "minecraft:flint" });

    // Remove crushing recipes that already have a grinder recipe
    event.remove({ type: "create:crushing", input: "minecraft:blaze_rod" });
    event.remove({ type: "create:crushing", input: "minecraft:bone" });
    event.remove({ type: "create:crushing", input: "minecraft:lapis_lazuli" });
    event.remove({ type: "create:crushing", input: "minecraft:diamond" });
    event.remove({ type: "create:crushing", input: "minecraft:diorite" });
    event.remove({ type: "create:crushing", input: "minecraft:granite" });
    event.remove({ type: "create:crushing", input: "minecraft:andesite" });
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

    event.remove({
        type: "techreborn:grinder",
        input: "minecraft:pointed_dripstone",
    });
    event.custom({
        type: "techreborn:grinder",
        time: 100, // 5 seconds?
        power: 5,

        ingredients: [
            {
                item: "minecraft:pointed_dripstone",
                count: 1,
            },
        ],
        results: [
            {
                item: "minecraft:clay_ball",
                count: 1,
            },
        ],
    });

    // Remove Create's default crushing recipes for asurine and veridium (I thought we added them??)
    event.remove({ type: "create:crushing", input: "create:asurine" });
    event.remove({ type: "create:crushing", input: "create:veridium" });

    // Nerf vanilla granite recipe
    event.remove({ mod: "minecraft", output: "minecraft:granite" });
    event.remove({ mod: "tconstruct", output: "minecraft:granite" });
    event.shapeless("minecraft:granite", [
        "1x minecraft:diorite",
        "3x minecraft:quartz",
    ]);
    event.custom({
        type: "tconstruct:casting_basin",
        cast: {
            item: "minecraft:diorite",
        },
        cast_consumed: true,
        fluid: {
            name: "tconstruct:molten_quartz",
            amount: (3 * FULL_BUCKET_AMMOUNT) / 10,
        },
        result: "minecraft:granite",
        cooling_time: 140,
    });

    // Nerf vanilla andesite shapeless
    event.remove({
        mod: "minecraft",
        input: "minecraft:diorite",
        output: "minecraft:andesite",
    });
    event.shapeless("minecraft:andesite", [
        "2x minecraft:diorite",
        "4x minecraft:gravel",
    ]);

    // Keep this, let people decide which path to produce diorite is
    // event.remove({type: 'create:compacting', output: 'minecraft:diorite' });

    // Nerf vanilla diorite
    event.remove({
        mod: "minecraft",
        input: "minecraft:cobblestone",
        output: "minecraft:diorite",
    });
    event.shapeless("minecraft:diorite", [
        "minecraft:cobblestone",
        "6x minecraft:quartz",
    ]);
    // I'm too confused to replace the tconstruct recipe
    event.remove({
        type: "tconstruct:casting_basin",
        output: "minecraft:diorite",
    });

    // Not happy with this, can't think of a better way to utilize basalt though. Might come back to this.
    event.custom({
        type: "tconstruct:casting_basin",
        cast: {
            item: "minecraft:basalt",
        },
        cast_consumed: true,
        fluid: {
            name: "tconstruct:liquid_soul",
            amount: FULL_BUCKET_AMMOUNT,
        },
        result: "minecraft:diorite",
        cooling_time: 80,
    });
}

// Increase yields in crushing ore
function lizardCrushingOresYields(event) {}

// Some changes need to be made after all of Lasky's changes, lest their changes will override mine.
function lizardPostLaskyChange(event) {
    // The first number is a number I found looking through the configs. The second number is
    //  the yield for every other entity smelting - "50mb"
    const BLAZING_BLOOD_MADIC_AMOUNT = 1620;
    // const BLAZING_BLOOD_MADIC_AMOUNT = 4050;
    event.custom({
        type: "tconstruct:entity_melting",
        entity: {
            type: "minecraft:blaze",
        },
        result: {
            fluid: "tconstruct:blazing_blood",
            amount: BLAZING_BLOOD_MADIC_AMOUNT,
        },
        damage: 2,
    });
}

// Lasky - feel free to move the code in here to more appropriate places, I just wanted
//  to keep all my changes together
function lizardChanges(event) {
    lizardMiscChanges(event);
    lizardCH1Changes(event);
    lizardCH2Changes(event);
    lizardCH3Changes(event);
    lizardCH3Biofuel(event);
    lizardCH3Concrete(event);
    lizardGrinderCrushingRework(event);
    lizardGeologyAlchemyChanges(event);
    lizardCrushingOresYields(event);
}

onEvent("recipes", (event) => {
    // Lizard's changes
    lizardChanges(event);

    ///// REMOVING RECIPES, UNCATERGORISED /////

    event.remove({ output: "ad_astra:steel_ingot" });
    event.remove({ output: "ad_astra:iron_plate" });
    event.remove({ output: "ad_astra:coal_generator" });
    event.remove({ output: "ad_astra:solar_panel" });
    event.remove({ output: "ad_astra:fuel_refinery" });
    event.remove({ output: "ad_astra:oxygen_loader" });
    event.remove({ output: "ad_astra:energizer" });
    event.remove({ output: "techreborn:synthetic_redstone_crystal" });

    event.remove({ output: "minecraft:iron_sword" });
    event.remove({ output: "minecraft:iron_pickaxe" });
    event.remove({ output: "minecraft:iron_hoe" });
    event.remove({ output: "minecraft:iron_shovel" });
    event.remove({ output: "minecraft:iron_axe" });
    event.remove({ output: "minecraft:iron_helmet" });
    event.remove({ output: "minecraft:iron_chestplate" });
    event.remove({ output: "minecraft:iron_leggings" });
    event.remove({ output: "minecraft:iron_boots" });
    event.remove({ output: "minecraft:diamond_helmet" });
    event.remove({ output: "minecraft:diamond_chestplate" });
    event.remove({ output: "minecraft:diamond_leggings" });
    event.remove({ output: "minecraft:diamond_boots" });
    event.remove({ output: "minecraft:diamond_sword" });
    event.remove({ output: "minecraft:diamond_pickaxe" });
    event.remove({ output: "minecraft:diamond_hoe" });
    event.remove({ output: "minecraft:diamond_shovel" });
    event.remove({ output: "minecraft:diamond_axe" });
    event.remove({ output: "minecraft:wooden_sword" });
    event.remove({ output: "minecraft:wooden_pickaxe" });
    event.remove({ output: "minecraft:wooden_hoe" });
    event.remove({ output: "minecraft:wooden_shovel" });
    event.remove({ output: "minecraft:wooden_axe" });
    event.remove({ output: "minecraft:stone_sword" });
    event.remove({ output: "minecraft:stone_pickaxe" });
    event.remove({ output: "minecraft:stone_hoe" });
    event.remove({ output: "minecraft:stone_shovel" });
    event.remove({ output: "minecraft:stone_axe" });
    event.remove({ output: "mcdw:pick_diamond_pickaxe_var" });
    event.remove({ output: "mcdw:sword_diamond_sword_var" });

    event.remove({ output: "minecraft:furnace" });
    event.remove({ output: "minecraft:blast_furnace" });
    event.remove({ output: "automobility:auto_mechanic_table" });
    event.remove({ output: "automobility:automobile_assembler" });
    event.remove({ output: "campanion:grappling_hook" });
    event.remove({ output: "explorerscompass:explorerscompass" });
    event.remove({ output: "tconstruct:copper_nugget" });
    event.remove({ output: "techreborn:bronze_nugget" });

    event.remove({ output: "phonos:redstone_chip" });
    event.remove({ mod: "doodads" });
    event.remove({ mod: "createsifter" });
    event.remove({ type: "createsifter:sifting" });
    event.remove({ output: "minecraft:bow" });
    event.remove({ output: "minecraft:crossbow" });
    event.remove({ output: "minecraft:arrow" });
    event.remove({ mod: "lchunkloader" });
    event.remove({ output: "immersive_aircraft:boiler" });
    event.remove({ output: "immersive_aircraft:engine" });

    ///// REMOVE UNNECCESARY DUPLICATE ITEMS / ISSUE ITEMS /////
    event.replaceInput("#c:iron_rods", "createaddition:iron_rod");
    event.replaceInput("ad_astra:iron_stick", "createaddition:iron_rod");
    event.replaceInput("catwalksinc:iron_rod", "createaddition:iron_rod");
    event.remove({ output: "createaddition:straw" });
    event.remove({ output: "ad_astra:iron_stick" });
    event.remove({ output: "catwalksinc:iron_rod" });
    event.remove({ output: "polaroidcamera:camera" });
    event.remove({ output: "phonos:radio_player_piano" });
    event.replaceInput(
        { type: "minecraft:crafting_shaped" },
        "farmersdelight:rope",
        "campanion:rope"
    );
    event.remove({ output: "farmersdelight:rope" });
    event.remove({ output: "tconstruct:nether_grout" });
    // event.replaceInput('tconstruct:scorched_brick', 'tconstruct:scorched_bricks') // ???
    event.replaceInput(
        { mod: "tconstruct" },
        "minecraft:quartz",
        "ae2:charged_certus_quartz"
    );
    event.remove({ output: "tconstruct:efln_ball" });
    event.remove({ output: "campanion:mre" });
    event.remove({ output: "campanion:day_pack" });
    event.remove({ output: "campanion:camping_pack" });
    event.remove({ output: "campanion:wooden_spear" });
    event.remove({ output: "campanion:stone_spear" });
    event.remove({ output: "campanion:iron_spear" });
    event.remove({ output: "campanion:diamond_spear" });
    event.remove({ output: "campanion:netherite_spear" });
    event.remove({ output: "campanion:golden_spear" });
    event.remove({ output: "create:electron_tube" });
    event.remove({ output: "minecraft:ender_eye" });
    event.remove({ input: "minecraft:crying_obsidian" });
    event.remove({ input: "create:blaze_burner" });

    event.remove({ output: "dbe:steel_ingot" });
    event.remove({ output: "dbe:copper_coil" });

    event.replaceInput("dbe:steel_ingot", "dustrial_decor:cast_iron_billet");
    event.replaceInput("dbe:basic_circuit", "phonos:redstone_chip");
    event.replaceInput(
        { output: "extendedflywheels:steelflywheel" },
        "create:andesite_alloy",
        "ad_astra:steel_ingot"
    );

    ///// MAINLY TINKERS CONSTRUCT REWORKING /////

    event.remove({ output: "tconstruct:smeltery_controller" });
    event.remove({ output: "tconstruct:seared_melter" });
    event.remove({ output: "tconstruct:scorched_alloyer" });
    event.remove({ output: "tconstruct:earth_slime_sling" });
    event.remove({ output: "tconstruct:sky_slime_sling" });
    event.remove({ output: "tconstruct:ender_slime_sling" });
    event.remove({ output: "tconstruct:seared_ingot_gauge" });
    event.remove({ output: "tconstruct:seared_ingot_tank" });
    event.remove({ output: "tconstruct:seared_fuel_gauge" });
    event.remove({ output: "tconstruct:seared_fuel_tank" });
    event.remove({ output: "tconstruct:seared_bricks" });
    event.remove({ output: "tconstruct:grout" });
    // event.remove({output: 'tconstruct:scorched_bricks'}) // ???
    event.remove({ type: "create:mixing", output: "create:brass_ingot" });
    event.remove({
        type: "create:mixing",
        output: "tconstruct:rose_gold_ingot",
    });
    event.remove({
        type: "create:mixing",
        output: "tconstruct:slimesteel_ingot",
    });
    event.remove({
        type: "create:mixing",
        output: "tconstruct:pig_iron_ingot",
    });
    event.remove({
        type: "create:mixing",
        output: "tconstruct:manyullyn_ingot",
    });
    event.remove({
        type: "create:mixing",
        output: "tconstruct:hepatizon_ingot",
    });
    event.remove({
        type: "create:mixing",
        output: "tconstruct:queens_slime_ingot",
    });
    event.remove({ output: "create:blaze_cake" });
    // event.remove({output: 'tconstruct:blazing_blood'})
    event.remove({
        output: "create:andesite_alloy",
        input: "minecraft:andesite",
    });
    event.remove({ type: "tconstruct:entity_melting" });
    event.remove({ type: "tconstruct:alloy" });

    ///// SOME AD ASTRA CHANGES AND REMOVALS / REPLACEMENTS  /////

    event.remove({ output: "farmersdelight:cooking_pot" });
    event.remove({ output: "ad_astra:nasa_workbench" });
    event.remove({ output: "ad_astra:rocket_fin" });
    event.replaceInput(
        { type: "create:mechanical_crafting", mod: "createaddition" },
        "create:andesite_alloy",
        "techreborn:red_cell_battery"
    );
    event.replaceInput(
        { type: "create:mechanical_crafting", mod: "createaddition" },
        "createaddition:iron_rod",
        "create:integrated_circuit"
    );
    event.replaceInput(
        { mod: "createaddition" },
        "minecraft:redstone_torch",
        "create:electron_tube"
    );
    event.replaceInput(
        { output: "ad_astra:engine_fan" },
        "ad_astra:compressed_steel",
        "ad_astra:iron_plate"
    );
    event.replaceInput(
        { output: "ad_astra:engine_frame" },
        "ad_astra:compressed_steel",
        "ad_astra:iron_plate"
    );
    event.replaceInput(
        { output: "create:mechanical_drill" },
        "minecraft:iron_ingot",
        "create:iron_sheet"
    );
    event.replaceInput(
        { output: "create:mechanical_crafter" },
        "minecraft:crafting_table",
        "create:precision_mechanism"
    );
    event.replaceInput(
        { output: "ad_astra:rocket_fin" },
        "ad_astra:steel_ingot",
        "create:sturdy_sheet"
    );
    event.replaceInput(
        { output: "ad_astra:engine_frame" },
        "ad_astra:steel_plate",
        "create:sturdy_sheet"
    );

    event.replaceInput(
        { output: "toms_storage:ts.adv_wireless_terminal" },
        "minecraft:netherite_ingot",
        "tconstruct:hepatizon_ingot"
    );
    event.replaceInput(
        { output: "createaddition:accumulator" },
        "create:brass_casing",
        "techreborn:red_cell_battery"
    );
    event.replaceInput(
        { output: "ad_astra:netherite_space_suit" },
        "ad_astra:oxygen_gear",
        "techreborn:lead_plate"
    );
    event.remove({ output: "ad_astra:launch_pad" });

    event.replaceInput(
        { output: "ad_astra:space_helmet" },
        "ad_astra:steel_ingot",
        "create:sturdy_sheet"
    );
    event.replaceInput(
        { output: "create:crushing_wheel" },
        "#c:stone",
        "techreborn:silver_ingot"
    );
    event.replaceInput(
        { output: "ad_astra:space_helmet" },
        "minecraft:orange_stained_glass_pane",
        "create:diving_helmet"
    );
    event.replaceInput(
        { output: "ad_astra:space_pants" },
        "ad_astra:steel_ingot",
        "create:sturdy_sheet"
    );
    event.replaceInput(
        { output: "create:deployer" },
        "create:electron_tube",
        "create:polished_rose_quartz"
    );
    event.remove({ output: "ad_astra:space_boots" });
    event.replaceInput(
        { output: "ad_astra:space_suit" },
        "ad_astra:steel_ingot",
        "create:sturdy_sheet"
    );
    event.replaceInput(
        { output: "ad_astra:space_suit" },
        "ad_astra:oxygen_gear",
        "create:copper_backtank"
    );
    event.replaceInput(
        { output: "ad_astra:oxygen_tank" },
        "ad_astra:compressed_steel",
        "createastral:bronze_sheet"
    );
    event.replaceInput(
        { output: "ad_astra:oxygen_gear" },
        "ad_astra:compressed_steel",
        "createastral:bronze_sheet"
    );
    event.replaceInput(
        { output: "ad_astra:steel_tank" },
        "ad_astra:compressed_steel",
        "ad_astra:iron_plate"
    );
    event.replaceInput(
        { output: "ad_astra:rocket_nose_cone" },
        "ad_astra:compressed_steel",
        "ad_astra:iron_plate"
    );
    event.remove({ type: "automobility:automobile_assembler" });
    event.remove({ output: "create:cogwheel", type: "minecraft:shaped" });
    event.remove({ output: "create:large_cogwheel", type: "minecraft:shaped" });
    event.remove({ output: "create:cogwheel" });
    event.remove({ output: "create:large_cogwheel" });
    event.remove({ output: "ad_astra:desh_fluid_pipe" });
    event.remove({ output: "ad_astra:ostrum_fluid_pipe" });
    event.remove({ output: "ad_astra:wrench" });
    event.remove({ output: "doodads:slimey_shoes" });
    event.replaceInput(
        { output: "ad_astra:ostrum_tank" },
        "minecraft:bucket",
        "tconstruct:blazing_blood_bucket"
    );
    event.replaceInput(
        { output: "ad_astra:netherite_space_helmet" },
        "minecraft:netherite_helmet",
        "createastral:sturdy_helmet"
    );
    event.replaceInput(
        { output: "ad_astra:netherite_space_suit" },
        "minecraft:netherite_chestplate",
        "createastral:sturdy_chestplate"
    );
    event.replaceInput(
        { output: "ad_astra:netherite_space_pants" },
        "minecraft:netherite_leggings",
        "createastral:sturdy_leggings"
    );
    event.replaceInput(
        { output: "ad_astra:netherite_space_boots" },
        "minecraft:netherite_leggings",
        "createastral:sturdy_boots"
    );
    event.remove({ output: "ad_astra:jet_suit_helmet" });
    event.remove({ output: "ad_astra:jet_suit" });
    event.remove({ output: "ad_astra:jet_suit_pants" });
    event.remove({ output: "ad_astra:jet_suit_boots" });
    event.remove({ output: "ad_astra:tier_1_rocket" });
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:bronze_plate",
        "createastral:bronze_sheet"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:bronze_ingot",
        "createastral:bronze_ingot"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:copper_plate",
        "create:copper_sheet"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:gold_plate",
        "create:gold_sheet"
    );
    event.remove({ output: "techreborn:iron_plate" });
    event.remove({ output: "create:copper_casing" });
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:steel_plate",
        "ad_astra:steel_ingot"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "minecraft:redstone",
        "ae2:certus_quartz_crystal"
    );
    event.remove({ output: "ad_astra:desh_cable" });
    event.remove({ output: "ad_astra:steel_cable" });
    event.remove({ output: "techreborn:steel_ingot" });
    event.remove({
        input: "minecraft:copper_block",
        type: "minecraft:stonecutting",
    });
    event.replaceOutput(
        { input: "minecraft:beetroot" },
        "minecraft:red_dye",
        "minecraft:yellow_dye"
    );

    //////// TECH REBORN SECTION  //////

    ///REMOVE ANNOYING ARMOUR AND TOOLS ////

    event.remove({ output: "techreborn:steel_block" });
    event.remove({ output: "techreborn:bronze_block" });
    event.remove({ output: "techreborn:copper_helmet" });
    event.remove({ output: "techreborn:copper_chestplate" });
    event.remove({ output: "techreborn:copper_leggings" });
    event.remove({ output: "techreborn:copper_boots" });
    event.remove({ output: "techreborn:copper_nugget" });
    event.remove({ output: "techreborn:copper_axe" });
    event.remove({ output: "techreborn:copper_sword" });
    event.remove({ output: "techreborn:copper_pickaxe" });
    event.remove({ output: "techreborn:copper_hoe" });
    event.remove({ output: "techreborn:copper_shovel" });
    event.remove({ output: "techreborn:tin_helmet" });
    event.remove({ output: "techreborn:tin_chestplate" });
    event.remove({ output: "techreborn:tin_leggings" });
    event.remove({ output: "techreborn:tin_boots" });
    event.remove({ output: "techreborn:tin_axe" });
    event.remove({ output: "techreborn:tin_sword" });
    event.remove({ output: "techreborn:tin_pickaxe" });
    event.remove({ output: "techreborn:tin_hoe" });
    event.remove({ output: "techreborn:tin_shovel" });

    event.remove({ output: "techreborn:lead_helmet" });
    event.remove({ output: "techreborn:lead_chestplate" });
    event.remove({ output: "techreborn:lead_leggings" });
    event.remove({ output: "techreborn:lead_boots" });
    event.remove({ output: "techreborn:lead_axe" });
    event.remove({ output: "techreborn:lead_sword" });
    event.remove({ output: "techreborn:lead_pickaxe" });
    event.remove({ output: "techreborn:lead_hoe" });
    event.remove({ output: "techreborn:lead_shovel" });

    event.remove({ output: "techreborn:steel_helmet" });
    event.remove({ output: "techreborn:steel_chestplate" });
    event.remove({ output: "techreborn:steel_leggings" });
    event.remove({ output: "techreborn:steel_boots" });
    event.remove({ output: "techreborn:steel_axe" });
    event.remove({ output: "techreborn:steel_sword" });
    event.remove({ output: "techreborn:steel_pickaxe" });
    event.remove({ output: "techreborn:steel_hoe" });
    event.remove({ output: "techreborn:steel_shovel" });

    event.remove({ output: "techreborn:bronze_helmet" });
    event.remove({ output: "techreborn:bronze_chestplate" });
    event.remove({ output: "techreborn:bronze_leggings" });
    event.remove({ output: "techreborn:bronze_boots" });
    event.remove({ output: "techreborn:bronze_axe" });
    event.remove({ output: "techreborn:bronze_sword" });
    event.remove({ output: "techreborn:bronze_pickaxe" });
    event.remove({ output: "techreborn:bronze_hoe" });
    event.remove({ output: "techreborn:bronze_shovel" });

    event.remove({ output: "techreborn:silver_helmet" });
    event.remove({ output: "techreborn:silver_chestplate" });
    event.remove({ output: "techreborn:silver_leggings" });
    event.remove({ output: "techreborn:silver_boots" });
    event.remove({ output: "techreborn:silver_axe" });
    event.remove({ output: "techreborn:silver_sword" });
    event.remove({ output: "techreborn:silver_pickaxe" });
    event.remove({ output: "techreborn:silver_hoe" });
    event.remove({ output: "techreborn:silver_shovel" });

    /// REMOVE REPLACED RECIPES

    event.remove({ output: "techreborn:electronic_circuit" });
    event.remove({ output: "techreborn:industrial_circuit" });
    event.remove({ output: "techreborn:energy_flow_chip" });
    event.remove({ output: "techreborn:lithium_ion_battery" });
    event.remove({ output: "techreborn:rubber", type: "minecraft:smelting" });
    event.remove({ output: "techreborn:basic_machine_frame" });
    event.remove({ output: "techreborn:advanced_machine_frame" });
    event.remove({ output: "techreborn:industrial_machine_frame" });
    event.remove({ output: "techreborn:advanced_machine_casing" });
    event.remove({ output: "techreborn:industrial_machine_casing" });
    event.remove({ output: "techreborn:refined_iron_ingot" });
    event.remove({ output: "techreborn:fusion_coil" });
    event.remove({ output: "techreborn:carbon_mesh" });
    event.remove({ output: "techreborn:scrap_box" });
    event.remove({
        type: "minecraft:shaped",
        output: "techreborn:nak_coolant_cell_60k",
    });

    ///REPLACE MAJOR CMOPONENTS TO MATCH ASTRAL PROGRESSION

    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:refined_iron_plate",
        "techreborn:silver_plate"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:refined_iron_ingot",
        "techreborn:silver_plate"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:refined_iron_storage_block",
        "techreborn:silver_storage_block"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:refined_iron_nugget",
        "techreborn:silver_nugget"
    );
    event.remove({ output: "techreborn:refined_iron_plate" });
    event.remove({ output: "techreborn:refined_iron_ingot" });
    event.remove({ output: "techreborn:refined_iron_storage_block" });
    event.remove({ output: "techreborn:refined_iron_storage_block_stairs" });
    event.remove({ output: "techreborn:refined_iron_storage_block_slab" });
    event.remove({ output: "techreborn:refined_iron_storage_block_wall" });
    event.remove({ output: "techreborn:refined_iron_dust" });
    event.remove({ output: "techreborn:refined_iron_small_dust" });
    event.remove({ output: "techreborn:refined_iron_nugget" });

    event.remove({ output: "techreborn:bronze_plate" });
    event.remove({ output: "techreborn:bronze_ingot" });
    event.remove({ output: "techreborn:bronze_storage_block" });
    event.remove({ output: "techreborn:bronze_storage_block_stairs" });
    event.remove({ output: "techreborn:bronze_storage_block_slab" });
    event.remove({ output: "techreborn:bronze_storage_block_wall" });
    event.remove({ output: "techreborn:bronze_dust" });
    event.remove({ output: "techreborn:bronze_small_dust" });
    event.remove({ output: "techreborn:bronze_nugget" });

    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:aluminum_plate",
        "techreborn:lead_plate"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:aluminum_ingot",
        "techreborn:lead_plate"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:aluminum_storage_block",
        "techreborn:lead_storage_block"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:aluminum_nugget",
        "techreborn:lead_nugget"
    );
    event.remove({ output: "techreborn:aluminum_plate" });
    event.remove({ output: "techreborn:aluminum_ingot" });
    event.remove({ output: "techreborn:aluminum_storage_block" });
    event.remove({ output: "techreborn:aluminum_storage_block_stairs" });
    event.remove({ output: "techreborn:aluminum_storage_block_slab" });
    event.remove({ output: "techreborn:aluminum_storage_block_wall" });
    event.remove({ output: "techreborn:aluminum_dust" });
    event.remove({ output: "techreborn:aluminum_small_dust" });
    event.remove({ output: "techreborn:aluminum_nugget" });

    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:tungsten_plate",
        "ad_astra:compressed_steel"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:tungsten_ingot",
        "ad_astra:compressed_steel"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:tungsten_storage_block",
        "ad_astra:steel_block"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:tungsten_nugget",
        "ad_astra:steel_nugget"
    );
    event.remove({ output: "techreborn:tungsten_plate" });
    event.remove({ output: "techreborn:tungsten_ingot" });
    event.remove({ output: "techreborn:tungsten_storage_block" });
    event.remove({ output: "techreborn:tungsten_storage_block_stairs" });
    event.remove({ output: "techreborn:tungsten_storage_block_slab" });
    event.remove({ output: "techreborn:tungsten_storage_block_wall" });
    event.remove({ output: "techreborn:tungsten_dust" });
    event.remove({ output: "techreborn:tungsten_small_dust" });
    event.remove({ output: "techreborn:tungsten_nugget" });

    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:tungstensteel_plate",
        "ad_astra:compressed_steel"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:tungstensteel_ingot",
        "ad_astra:compressed_steel"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:tungstensteel_storage_block",
        "ad_astra:steel_block"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:tungstensteel_nugget",
        "ad_astra:steel_nugget"
    );
    event.remove({ output: "techreborn:tungstensteel_plate" });
    event.remove({ output: "techreborn:tungstensteel_ingot" });
    event.remove({ output: "techreborn:tungstensteel_storage_block" });
    event.remove({ output: "techreborn:tungstensteel_storage_block_stairs" });
    event.remove({ output: "techreborn:tungstensteel_storage_block_slab" });
    event.remove({ output: "techreborn:tungstensteel_storage_block_wall" });
    event.remove({ output: "techreborn:tungstensteel_dust" });
    event.remove({ output: "techreborn:tungstensteel_small_dust" });
    event.remove({ output: "techreborn:tungstensteel_nugget" });

    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:chrome_plate",
        "ad_astra:compressed_ostrum"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:chrome_ingot",
        "ad_astra:compressed_ostrum"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:chrome_storage_block",
        "ad_astra:ostrum_block"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:chrome_nugget",
        "ad_astra:ostrum_nugget"
    );
    event.remove({ output: "techreborn:chrome_plate" });
    event.remove({ output: "techreborn:chrome_ingot" });
    event.remove({ output: "techreborn:chrome_storage_block" });
    event.remove({ output: "techreborn:chrome_storage_block_stairs" });
    event.remove({ output: "techreborn:chrome_storage_block_slab" });
    event.remove({ output: "techreborn:chrome_storage_block_wall" });
    event.remove({ output: "techreborn:chrome_dust" });
    event.remove({ output: "techreborn:chrome_small_dust" });
    event.remove({ output: "techreborn:chrome_nugget" });

    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:titanium_plate",
        "ad_astra:compressed_calorite"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:titanium_ingot",
        "ad_astra:compressed_calorite"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:titanium_storage_block",
        "ad_astra:calorite_block"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:titanium_nugget",
        "ad_astra:calorite_nugget"
    );
    event.remove({ output: "techreborn:titanium_plate" });
    event.remove({ output: "techreborn:titanium_ingot" });
    event.remove({ output: "techreborn:titanium_storage_block" });
    event.remove({ output: "techreborn:titanium_storage_block_stairs" });
    event.remove({ output: "techreborn:titanium_storage_block_slab" });
    event.remove({ output: "techreborn:titanium_storage_block_wall" });
    event.remove({ output: "techreborn:titanium_dust" });
    event.remove({ output: "techreborn:titanium_small_dust" });
    event.remove({ output: "techreborn:titanium_nugget" });

    event.remove({ output: "techreborn:nickel_plate" });
    event.remove({ output: "techreborn:nickel_ingot" });
    event.remove({ output: "techreborn:nickel_storage_block" });
    event.remove({ output: "techreborn:nickel_storage_block_stairs" });
    event.remove({ output: "techreborn:nickel_storage_block_slab" });
    event.remove({ output: "techreborn:nickel_storage_block_wall" });
    event.remove({ output: "techreborn:nickel_dust" });
    event.remove({ output: "techreborn:nickel_small_dust" });
    event.remove({ output: "techreborn:nickel_nugget" });

    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:platinum_plate",
        "ad_astra:compressed_calorite"
    );
    event.replaceInput(
        { output: "techreborn:implosion_compressor" },
        "techreborn:advanced_alloy_ingot",
        "techreborn:advanced_alloy_plate"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:nickel_ingot",
        "ad_astra:compressed_desh"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:nickel_plate",
        "ad_astra:compressed_desh"
    );

    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:brass_plate",
        "create:brass_sheet"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:brass_ingot",
        "create:brass_ingot"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:brass_storage_block",
        "create:brass_block"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:brass_nugget",
        "create:brass_nugget"
    );
    event.remove({ output: "techreborn:brass_plate" });
    event.remove({ output: "techreborn:brass_ingot" });
    event.remove({ output: "techreborn:brass_storage_block" });
    event.remove({ output: "techreborn:brass_storage_block_stairs" });
    event.remove({ output: "techreborn:brass_storage_block_slab" });
    event.remove({ output: "techreborn:brass_storage_block_wall" });
    event.remove({ output: "techreborn:brass_dust" });
    event.remove({ output: "techreborn:brass_small_dust" });
    event.remove({ output: "techreborn:brass_nugget" });

    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:electronic_circuit",
        "create:integrated_circuit"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "minecraft:lapis_lazuli",
        "techreborn:lead_plate"
    );
    event.replaceInput(
        { mod: "techreborn", output: "techreborn:red_cell_battery" },
        "techreborn:lead_ingot",
        "techreborn:silver_plate"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:zinc_plate",
        "createaddition:zinc_sheet"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:zinc_ingot",
        "create:zinc_ingot"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:zinc_nugget",
        "create:zinc_nugget"
    );
    event.replaceInput("#c:ingots/steel", "ad_astra:steel_ingot");

    event.remove({ output: "techreborn:zinc_plate" });
    event.remove({ output: "techreborn:zinc_ingot" });
    event.remove({ output: "techreborn:zinc_storage_block" });
    event.remove({ output: "techreborn:zinc_storage_block_stairs" });
    event.remove({ output: "techreborn:zinc_storage_block_slab" });
    event.remove({ output: "techreborn:zinc_storage_block_wall" });
    event.remove({ output: "techreborn:zinc_dust" });
    event.remove({ output: "techreborn:zinc_small_dust" });
    event.remove({ output: "techreborn:zinc_nugget" });

    ///// APPLIED ENERGISTICS (AE2) OVERHAUL /////

    event.remove({ output: "ae2:fluix_dust" });
    event.remove({ output: "ae2:pattern_provider" });
    event.remove({ output: "ae2:blank_pattern" });
    event.remove({ output: "ae2:pattern_encoding_terminal" });
    event.remove({ output: "ae2:cable_pattern_provider" });
    event.remove({ output: "ae2:inscriber" });

    event.remove({ output: "ae2:controller", type: "crafting_shaped" });
    event.replaceInput(
        { mod: "ae2" },
        "minecraft:iron_ingot",
        "techreborn:silver_plate"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "minecraft:cobblestone",
        "create:sturdy_sheet"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:data_storage_chip",
        "createastral:subatomic_ingot"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "minecraft:stone",
        "create:sturdy_sheet"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "minecraft:cobblestone",
        "create:sturdy_sheet"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "minecraft:flint",
        "create:sturdy_sheet"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:magnalium_plate",
        "techreborn:silver_plate"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:peridot_plate",
        "createastral:olivine_sheet"
    );
    event.remove({ output: "techreborn:data_storage_core" });
    event.replaceInput(
        { mod: "ae2" },
        "minecraft:copper_ingot",
        "techreborn:silver_plate"
    );
    event.replaceInput({ mod: "ae2" }, "minecraft:redstone", "ae2:fluix_dust");
    event.replaceInput({ mod: "ae2" }, "ae2:fluix_crystal", "ae2:fluix_dust");
    event.replaceInput(
        "techreborn:advanced_circuit",
        "techreborn:electronic_circuit"
    );
    event.replaceInput(
        { output: "gearreborn:hazmat_chestpiece" },
        "techreborn:electronic_circuit",
        "create:integrated_circuit"
    );
    event.replaceInput(
        { output: "gearreborn:hazmat_chestpiece" },
        "techreborn:reinforced_glass",
        "#c:glass"
    );
    event.replaceInput(
        { output: "techreborn:industrial_sawmill" },
        "techreborn:silver_plate",
        "techreborn:lead_plate"
    );
    event.replaceOutput(
        "techreborn:electronic_circuit",
        "create:integrated_circuit"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:cupronickel_heating_coil",
        "createastral:copper_heating_coil"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:nichrome_heating_coil",
        "createastral:ender_heating_coil"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:energy_crystal",
        "techreborn:red_cell_battery"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:lapotron_crystal",
        "techreborn:lithium_ion_battery"
    );
    event.replaceInput(
        { mod: "techreborn" },
        "techreborn:advanced_alloy_plate",
        "techreborn:lead_plate"
    );
    event.replaceInput(
        { mod: "techreborn", output: "techreborn:advanced_drill" },
        "ad_astra:compressed_calorite",
        "techreborn:lead_plate"
    );
    event.replaceInput(
        { mod: "techreborn", output: "techreborn:advanced_chainsaw" },
        "ad_astra:compressed_calorite",
        "techreborn:lead_plate"
    );
    event.replaceInput(
        { mod: "techreborn", output: "techreborn:advanced_jackhammer" },
        "ad_astra:compressed_calorite",
        "techreborn:lead_plate"
    );
    event.remove({ output: "techreborn:data_storage_chip" });
    event.remove({ output: "techreborn:player_detector" });
    event.remove({ output: "techreborn:quantum_helmet" });
    event.remove({ output: "techreborn:quantum_chestplate" });
    event.remove({ output: "techreborn:quantum_leggings" });
    event.remove({ output: "techreborn:quantum_boots" });
    event.replaceInput(
        "techreborn:energy_flow_chip",
        "techreborn:data_storage_chip"
    );
    event.replaceInput(
        { output: "techreborn:nanosaber" },
        "create:precision_mechanism",
        "create:refined_radiance"
    );
    event.replaceInput(
        { output: "techreborn:industrial_grinder" },
        "techreborn:electronic_circuit",
        "immersive_aircraft:engine"
    );
    event.replaceInput(
        { output: "techreborn:digital_display" },
        "minecraft:black_dye",
        "techreborn:machine_parts"
    );
    event.replaceInput(
        { output: "techreborn:digital_display" },
        "minecraft:glass_pane",
        "#computercraft:monitor"
    );
    event.replaceInput(
        "techreborn:lapotronic_orb",
        "immersive_aircraft:engine"
    );
    event.replaceInput(
        { mod: "quarrymod" },
        "techreborn:iridium_ingot",
        "passivepiglins:piglin_coin"
    );
    event.replaceInput(
        { mod: "quarrymod" },
        "techreborn:advanced_alloy_plate",
        "passivepiglins:piglin_coin"
    );
    event.replaceInput(
        { mod: "quarrymod" },
        "techreborn:peridot_plate",
        "ad_astra:compressed_steel"
    );
    event.replaceInput(
        { mod: "quarrymod" },
        "techreborn:silicon_plate",
        "techreborn:carbon_mesh"
    );
    event.replaceInput(
        { mod: "quarrymod" },
        "techreborn:lapis_plate",
        "create:lapis_sheet"
    );
    event.replaceInput(
        { mod: "quarrymod" },
        "techreborn:peridot_storage_block",
        "createastral:olivine_sheet"
    );
    event.replaceInput(
        { mod: "quarrymod" },
        "techreborn:titanium_plate",
        "ad_astra:compressed_steel"
    );
    event.replaceInput(
        { mod: "quarrymod" },
        "techreborn:tungstensteel_plate",
        "create:shadow_steel"
    );
    event.replaceInput(
        { output: "ae2:fluid_cell_housing" },
        "techreborn:silver_plate",
        "create:copper_casing"
    );

    event.custom({
        type: "createaddition:rolling",
        input: {
            tag: "c:nuggets/gold",
        },
        result: {
            item: "createastral:golden_pin",
            count: 1,
        },
    });

    event.custom({
        type: "createaddition:rolling",
        input: {
            item: "ad_astra:calorite_nugget",
        },
        result: {
            item: "createastral:calorite_pin",
            count: 1,
        },
    });

    event.custom({
        type: "tconstruct:casting_table",
        cast: {
            item: "ae2:certus_quartz_dust",
        },
        cast_consumed: true,
        fluid: {
            name: "kubejs:shimmer",
            amount: 4500,
        },
        result: "ae2:fluix_dust",
        cooling_time: 40,
    });

    event.custom({
        type: "tconstruct:casting_table",
        cast: {
            tag: "tconstruct:casts/multi_use/coin",
        },
        cast_consumed: false,
        fluid: {
            name: "tconstruct:molten_bronze",
            amount: 4000,
        },
        result: "create:cogwheel",
        cooling_time: 100,
    });

    event.custom({
        type: "tconstruct:casting_table",
        cast: {
            tag: "tconstruct:casts/multi_use/gear",
        },
        cast_consumed: false,
        fluid: {
            name: "tconstruct:molten_bronze",
            amount: 12000,
        },
        result: "create:large_cogwheel",
        cooling_time: 100,
    });
    /////// TECH REBORN ACTUAL RECIPES //////

    event.replaceInput(
        { mod: "phonos" },
        "minecraft:iron_ingot",
        "techreborn:tin_ingot"
    );
    event.replaceInput(
        { mod: "farmersdelight" },
        "minecraft:iron_ingot",
        "techreborn:tin_ingot"
    );
    event.replaceInput(
        { output: "farmersdelight:iron_knife" },
        "minecraft:tin_ingot",
        "techreborn:iron_ingot"
    );
    event.replaceInput(
        { mod: "drinkbeer" },
        "minecraft:iron_ingot",
        "techreborn:tin_ingot"
    );

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

    event.replaceInput(
        { mod: "computercraft" },
        "minecraft:gold_ingot",
        "create:brass_sheet"
    );
    event.replaceInput(
        { mod: "cccbridge" },
        "create:golden_sheet",
        "create:brass_sheet"
    );
    event.replaceInput(
        { mod: "computercraft" },
        "#c:stones",
        "create:andesite_alloy"
    );
    event.replaceInput(
        { mod: "toms_storage" },
        "#minecraft:planks",
        "create:andesite_alloy"
    );
    event.replaceInput(
        { mod: "toms_storage" },
        "minecraft:stick",
        "createaddition:iron_rod"
    );
    event.replaceInput(
        { mod: "toms_storage" },
        "minecraft:paper",
        "create:filter"
    );
    event.replaceInput(
        { mod: "toms_storage" },
        "minecraft:crafting_table",
        "techreborn:silver_plate"
    );
    event.replaceInput(
        { mod: "toms_storage" },
        "minecraft:ender_pearl",
        "techreborn:silver_plate"
    );
    event.replaceInput(
        { mod: "computercraft" },
        "minecraft:redstone",
        "create:polished_rose_quartz"
    );
    event.replaceInput(
        { mod: "computercraft" },
        "minecraft:iron_ingot",
        "create:iron_sheet"
    );
    event.replaceInput(
        { mod: "computercraft" },
        "minecraft:golden_apple",
        "create:display_board"
    );
    event.remove({ output: "computercraft:turtle_advanced" });
    event.remove({ output: "computercraft:computer_advanced" });
    event.remove({ output: "computercraft:pocket_computer_advanced" });
    event.remove({ output: "ad_astra:compressor" });
    event.replaceInput(
        { output: "computercraft:computer_normal" },
        "create:electron_tube",
        "create:polished_rose_quartz"
    );
    event.replaceInput(
        { output: "computercraft:turtle_normal" },
        "create:electron_tube",
        "create:polished_rose_quartz"
    );

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

    ///// THIS SHIT IS SO INNEFICIENT BUT IT WAS THE FIRST THING I CODED SO IM JUST GOING TO LEAVE IT /////

    event.shaped("minecraft:iron_chestplate", ["S S", "SSS", "SSS"], {
        S: "create:iron_sheet",
    });
    event.shaped("minecraft:iron_helmet", ["SSS", "S S", "   "], {
        S: "create:iron_sheet",
    });
    event.shaped("minecraft:iron_leggings", ["SSS", "S S", "S S"], {
        S: "create:iron_sheet",
    });
    event.shaped("minecraft:iron_boots", ["   ", "S S", "S S"], {
        S: "create:iron_sheet",
    });
    event.shaped("minecraft:iron_sword", [" S ", " S ", " W "], {
        S: "create:iron_sheet",
        W: "minecraft:stick",
    });
    event.shaped("minecraft:iron_shovel", [" S ", " W ", " W "], {
        S: "create:iron_sheet",
        W: "minecraft:stick",
    });
    event.shaped("minecraft:iron_axe", [" SS", " WS", " W "], {
        S: "create:iron_sheet",
        W: "minecraft:stick",
    });
    event.shaped("minecraft:iron_hoe", ["SS ", " W ", " W "], {
        S: "create:iron_sheet",
        W: "minecraft:stick",
    });
    event.shaped("minecraft:iron_pickaxe", ["SSS", " W ", " W "], {
        S: "create:iron_sheet",
        W: "minecraft:stick",
    });

    // COPPER TOOLS RECIPES
    event.shaped("createastral:copper_chestplate", ["S S", "SSS", "SSS"], {
        S: "minecraft:copper_ingot",
    });
    event.shaped("createastral:copper_helmet", ["SSS", "S S", "   "], {
        S: "minecraft:copper_ingot",
    });
    event.shaped("createastral:copper_leggings", ["SSS", "S S", "S S"], {
        S: "minecraft:copper_ingot",
    });
    event.shaped("createastral:copper_boots", ["   ", "S S", "S S"], {
        S: "minecraft:copper_ingot",
    });
    event.shaped("createastral:copper_sword", [" S ", " S ", " W "], {
        S: "minecraft:copper_ingot",
        W: "minecraft:stick",
    });
    event.shaped("createastral:copper_shovel", [" S ", " W ", " W "], {
        S: "minecraft:copper_ingot",
        W: "minecraft:stick",
    });
    event.shaped("createastral:copper_axe", [" SS", " WS", " W "], {
        S: "minecraft:copper_ingot",
        W: "minecraft:stick",
    });
    event.shaped("createastral:copper_hoe", ["SS ", " W ", " W "], {
        S: "minecraft:copper_ingot",
        W: "minecraft:stick",
    });
    event.shaped("createastral:copper_pickaxe", ["SSS", " W ", " W "], {
        S: "minecraft:copper_ingot",
        W: "minecraft:stick",
    });

    // BRASS TOOLS RECIPES
    event.shaped("createastral:brass_chestplate", ["S S", "SSS", "SSS"], {
        S: "create:brass_sheet",
    });
    event.shaped("createastral:brass_helmet", ["SSS", "S S", "   "], {
        S: "create:brass_sheet",
    });
    event.shaped("createastral:brass_leggings", ["SSS", "S S", "S S"], {
        S: "create:brass_sheet",
    });
    event.shaped("createastral:brass_boots", ["   ", "S S", "S S"], {
        S: "create:brass_sheet",
    });
    event.shaped("createastral:brass_sword", [" S ", " S ", " W "], {
        S: "create:brass_sheet",
        W: "minecraft:stick",
    });
    event.shaped("createastral:brass_shovel", [" S ", " W ", " W "], {
        S: "create:brass_sheet",
        W: "minecraft:stick",
    });
    event.shaped("createastral:brass_axe", [" SS", " WS", " W "], {
        S: "create:brass_sheet",
        W: "minecraft:stick",
    });
    event.shaped("createastral:brass_hoe", ["SS ", " W ", " W "], {
        S: "create:brass_sheet",
        W: "minecraft:stick",
    });
    event.shaped("createastral:brass_pickaxe", ["SSS", " W ", " W "], {
        S: "create:brass_sheet",
        W: "minecraft:stick",
    });

    //STEEL ARMOUR and STURDY ARMOUR

    event.shaped("ad_astra:space_boots", ["S S", "BAB"], {
        S: "minecraft:white_wool",
        A: "create:diving_boots",
        B: "create:sturdy_sheet",
    });

    event.shaped("createastral:sturdy_chestplate", ["S S", "SSS", "SSS"], {
        S: "createastral:sturdy_sheet_block",
    });
    event.shaped("createastral:sturdy_helmet", ["SSS", "S S", "   "], {
        S: "createastral:sturdy_sheet_block",
    });
    event.shaped("createastral:sturdy_leggings", ["SSS", "S S", "S S"], {
        S: "createastral:sturdy_sheet_block",
    });
    event.shaped("createastral:sturdy_boots", ["   ", "S S", "S S"], {
        S: "createastral:sturdy_sheet_block",
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

    event.remove({ output: "techreborn:copper_nugget" });
    event.smelting("minecraft:leather", "minecraft:rotten_flesh").xp(2.0);
    event.smelting("techreborn:tin_ingot", "create:crushed_tin_ore");
    event.smelting("techreborn:silver_ingot", "create:crushed_silver_ore");
    event.smelting("techreborn:lead_ingot", "create:crushed_lead_ore");
    event.smithing(
        "farmersdelight:cooking_pot",
        "farmersdelight:skillet",
        "minecraft:water_bucket"
    );
    event.remove({ output: "techreborn:steel_plate" });

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

    event.custom({
        type: "createsifter:sifting",
        ingredients: [
            { item: "createsifter:andesite_mesh" },
            { item: "minecraft:gravel" },
        ],
        results: [
            { item: "minecraft:iron_nugget", chance: 0.15 },
            { item: "minecraft:flint", chance: 0.35 },
        ],
        processingTime: 200,
    });
    event.custom({
        type: "createsifter:sifting",
        ingredients: [
            { item: "createsifter:andesite_mesh" },
            { item: "minecraft:sand" },
        ],
        results: [
            { item: "minecraft:bone", chance: 0.01 },
            { item: "minecraft:string", chance: 0.02 },
            { item: "minecraft:rotten_flesh", chance: 0.01 },
            { item: "minecraft:feather", chance: 0.01 },
            { item: "minecraft:ink_sac", chance: 0.005 },
        ],
        processingTime: 200,
    });
    event.custom({
        type: "createsifter:sifting",
        ingredients: [
            { item: "createsifter:andesite_mesh" },
            { item: "minecraft:cobblestone" },
        ],
        results: [{ item: "techreborn:tin_nugget", chance: 0.05 }],
        processingTime: 200,
    });
    event.custom({
        type: "createsifter:sifting",
        ingredients: [
            { item: "createsifter:andesite_mesh" },
            { item: "minecraft:flint" },
        ],
        results: [{ item: "minecraft:music_disc_13", chance: 0.0005 }],
        processingTime: 200,
    });
    event.custom({
        type: "createsifter:sifting",
        ingredients: [
            { item: "createsifter:andesite_mesh" },
            { tag: "c:deepslate" },
        ],
        results: [{ item: "minecraft:redstone", chance: 0.05 }],
        processingTime: 200,
    });
    event.custom({
        type: "createsifter:sifting",
        ingredients: [
            { item: "createsifter:andesite_mesh" },
            { item: "ad_astra:moon_sand" },
        ],
        results: [
            { item: "minecraft:gunpowder", chance: 0.05 },
            { item: "minecraft:glowstone_dust", chance: 0.1 },
            { item: "ae2:certus_quartz_dust", chance: 0.03 },
        ],
        processingTime: 400,
    });
    event.custom({
        type: "createsifter:sifting",
        ingredients: [
            { item: "createsifter:andesite_mesh" },
            { item: "ad_astra:mars_sand" },
        ],
        results: [
            { item: "minecraft:gold_nugget", chance: 0.05 },
            { item: "techreborn:lazurite_dust", chance: 0.05 },
        ],
        processingTime: 600,
    });
    event.custom({
        type: "createsifter:sifting",
        ingredients: [
            { item: "createsifter:andesite_mesh" },
            { item: "minecraft:coarse_dirt" },
        ],
        results: [
            { item: "minecraft:dirt", chance: 1 },
            { item: "minecraft:flint", chance: 0.3 },
        ],
        processingTime: 200,
    });
    event.custom({
        type: "createsifter:sifting",
        ingredients: [
            { item: "createsifter:brass_mesh" },
            { item: "minecraft:basalt" },
        ],
        results: [
            { item: "minecraft:magma_cream", chance: 0.1 },
            { item: "minecraft:ghast_tear", chance: 0.05 },
            { item: "minecraft:blaze_powder", chance: 0.1 },
        ],
        processingTime: 200,
    });
    event.custom({
        type: "createsifter:sifting",
        ingredients: [
            { item: "createsifter:andesite_mesh" },
            { item: "minecraft:basalt" },
        ],
        results: [{ item: "minecraft:ender_pearl", chance: 0.04 }],
        processingTime: 200,
    });

    event.custom({
        type: "createsifter:sifting",
        ingredients: [
            { item: "createsifter:brass_mesh" },
            { item: "minecraft:cobblestone" },
        ],
        results: [{ item: "techreborn:tin_nugget", chance: 0.08 }],
        processingTime: 200,
    });
    event.custom({
        type: "createsifter:sifting",
        ingredients: [
            { item: "createsifter:brass_mesh" },
            { item: "minecraft:flint" },
        ],
        results: [{ item: "minecraft:music_disc_13", chance: 0.001 }],
        processingTime: 200,
    });
    event.custom({
        type: "createsifter:sifting",
        ingredients: [
            { item: "createsifter:brass_mesh" },
            { item: "minecraft:cobbled_deepslate" },
        ],
        results: [
            { item: "minecraft:redstone", chance: 0.07 },
            { item: "create:copper_nugget", chance: 0.05 },
        ],
        processingTime: 200,
    });

    event.custom({
        type: "createsifter:sifting",
        ingredients: [
            { item: "createsifter:brass_mesh" },
            { item: "extractinator:silt" },
        ],
        results: [
            { item: "minecraft:raw_iron", chance: 0.2 },
            { item: "minecraft:raw_copper", chance: 0.4 },
            { item: "minecraft:raw_gold", chance: 0.2 },
            { item: "techreborn:raw_tin", chance: 0.2 },
            { item: "create:raw_zinc", chance: 0.2 },
            { item: "create:crushed_iron_ore", chance: 0.2 },
            { item: "create:crushed_copper_ore", chance: 0.4 },
            { item: "create:crushed_gold_ore", chance: 0.2 },
            { item: "create:crushed_tin_ore", chance: 0.2 },
            { item: "create:crushed_zinc_ore", chance: 0.2 },
        ],
        processingTime: 1000,
    });
    event.custom({
        type: "createsifter:sifting",
        ingredients: [
            { item: "createsifter:brass_mesh" },
            { item: "extractinator:slush" },
        ],
        results: [
            { item: "minecraft:raw_iron", chance: 0.2 },
            { item: "minecraft:raw_copper", chance: 0.4 },
            { item: "minecraft:raw_gold", chance: 0.2 },
            { item: "techreborn:raw_tin", chance: 0.2 },
            { item: "create:raw_zinc", chance: 0.2 },
            { item: "create:crushed_iron_ore", chance: 0.2 },
            { item: "create:crushed_copper_ore", chance: 0.4 },
            { item: "create:crushed_gold_ore", chance: 0.2 },
            { item: "create:crushed_tin_ore", chance: 0.2 },
            { item: "create:crushed_zinc_ore", chance: 0.2 },
        ],
        processingTime: 1000,
    });

    event.custom({
        type: "createsifter:sifting",
        ingredients: [
            {
                item: "minecraft:clay",
            },
            {
                item: "createsifter:andesite_mesh",
            },
        ],
        results: [
            {
                item: "minecraft:kelp",
                chance: 0.2,
            },
            {
                item: "minecraft:seagrass",
                chance: 0.3,
            },
            {
                item: "minecraft:tube_coral",
                chance: 0.05,
            },
            {
                item: "minecraft:brain_coral",
                chance: 0.05,
            },
            {
                item: "minecraft:bubble_coral",
                chance: 0.05,
            },
            {
                item: "minecraft:fire_coral",
                chance: 0.05,
            },
            {
                item: "minecraft:horn_coral",
                chance: 0.05,
            },
        ],
        processingTime: 500,
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

    ////TECH REBORN CASINGS AND FRAMES ADJUSTMENTS + OTHER JSON FORMAT RECIPES////

    // WHY THIS LINE
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

    event.custom({
        type: "createaddition:charging",
        input: {
            item: "techreborn:synthetic_redstone_crystal",
            count: 1,
        },
        result: {
            item: "minecraft:redstone",
            count: 5,
        },
        energy: 10000,
    });

    event.custom({
        type: "createaddition:charging",
        input: {
            item: "createastral:golden_pin",
            count: 1,
        },
        result: {
            item: "createastral:electrified_pin",
            count: 1,
        },
        energy: 2500,
    });

    event.custom({
        type: "createaddition:charging",
        input: {
            item: "kubejs:shimmer_bucket",
            count: 1,
        },
        result: {
            item: "kubejs:molten_calorite_bucket",
            count: 1,
        },
        energy: 10000000,
    });

    event.custom({
        type: "techreborn:compressor",
        power: 10,
        time: 600,
        ingredients: [
            {
                item: "create:sturdy_sheet",
                count: 16,
            },
        ],
        results: [
            {
                item: "ad_astra:rocket_fin",
                count: 1,
            },
        ],
    });

    event.custom({
        type: "techreborn:implosion_compressor",
        power: 30,
        time: 500,
        ingredients: [
            {
                count: 1,
                item: "techreborn:steel_dust",
            },
            {
                item: "minecraft:tnt",
                count: 1,
            },
        ],
        results: [
            {
                item: "ad_astra:steel_ingot",
                count: 1,
            },
            {
                item: "techreborn:steel_nugget",
                count: 2,
            },
        ],
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

    event.remove({ mod: "camsbackpacks", input: "minecraft:chest" });

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

    event.remove({ output: "passivepiglins:piglin_coin" });
    event.shaped("passivepiglins:piglin_coin", ["BA", "AB"], {
        A: "create:golden_sheet",
        B: "minecraft:piglin_banner_pattern",
    });

    event.custom({
        type: "tconstruct:casting_table",
        cast: {
            tag: "tconstruct:casts/multi_use/round_plate",
        },
        cast_consumed: false,
        fluid: {
            name: "tconstruct:molten_gold",
            amount: 45000,
        },
        result: "createastral:golden_bowl",
        cooling_time: 100,
    });

    event.stonecutting(
        "automobility:sloped_dash_panel",
        "automobility:dash_panel"
    );
    event.stonecutting(
        "automobility:steep_sloped_dash_panel",
        "automobility:dash_panel"
    );

    // crimsite automation

    lizardPostLaskyChange(event);
});

onEvent("player.logged_in", (event) => {
    if (!event.player.stages.has("starting_items")) {
        event.player.stages.add("starting_items");

        event.player.give("ftbquests:book");
    }
});
