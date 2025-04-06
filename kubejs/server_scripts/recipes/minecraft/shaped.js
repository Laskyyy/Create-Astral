onEvent("recipes", (event) => {
    [
        {
            output: "createastral:andesite_alloy_block",
            pattern: ["AAA", "AAA", "AAA"],
            key: { A: "create:andesite_alloy" },
        },
        {
            output: "9x create:andesite_alloy",
            pattern: ["A"],
            key: { A: "createastral:andesite_alloy_block" },
        },
        {
            output: "createastral:charcoal_block",
            pattern: ["AAA", "AAA", "AAA"],
            key: { A: "minecraft:charcoal" },
        },
        {
            output: "9x minecraft:charcoal",
            pattern: ["A"],
            key: { A: "createastral:charcoal_block" },
        },
        {
            output: "techreborn:grinder",
            pattern: ["ABA", "CDC", " E "],
            key: {
                A: "create:sturdy_sheet",
                B: "create:integrated_circuit",
                C: "minecraft:diamond",
                D: "create:millstone",
                E: "techreborn:basic_machine_frame",
            },
        },
        {
            output: "techreborn:wire_mill",
            pattern: ["ABA", "ADA" /*'CDC',*/, " E "],
            key: {
                A: "create:sturdy_sheet",
                B: "createaddition:rolling_mill",
                // C: 'create:integreted' // A little weird since the extractor also has the
                D: "techreborn:extractor",
                E: "create:mechanical_piston",
            },
        },
        {
            output: "techreborn:compressor",
            pattern: ["ABA", "ACA", "ADA"],
            key: {
                A: "create:sturdy_sheet",
                B: "create:integrated_circuit",
                C: "create:mechanical_press",
                D: "techreborn:basic_machine_frame",
            },
        },
        {
            output: "techreborn:compressor",
            pattern: ["ABA", "ACA", "ADA"],
            key: {
                A: "create:sturdy_sheet",
                B: "create:integrated_circuit",
                C: "create:mechanical_press",
                D: "techreborn:basic_machine_frame",
            },
        },
        {
            output: "4x minecraft:chest",
            pattern: ["XXX", "X X", "XXX"],
            key: {
                X: "#minecraft:logs",
            },
        },
        {
            output: "create:track",
            pattern: ["NSN", "NSN", "NSN"],
            key: {
                N: "#create:alloy_nuggets",
                S: "#create:sleepers",
            },
        },
        {
            output: "create:smart_fluid_pipe",
            pattern: ["FB", "CO", "VP"],
            key: {
                B: "createastral:bronze_sheet",
                O: "minecraft:observer",
                F: "create:filter",
                C: "minecraft:comparator",
                P: "create:fluid_pipe",
                V: "create:fluid_valve",
            },
        },
        {
            output: "create:brass_funnel",
            pattern: ["FB", "CO", "VP"],
            key: {
                B: "create:golden_sheet",
                O: "minecraft:observer",
                F: "create:filter",
                C: "minecraft:comparator",
                P: "create:andesite_funnel",
                V: "create:andesite_tunnel",
            },
        },
        {
            output: "create:smart_chute",
            pattern: ["FB", "CO", "PP"],
            key: {
                B: "create:golden_sheet",
                O: "minecraft:observer",
                F: "create:filter",
                C: "minecraft:comparator",
                P: "create:chute",
            },
        },
        {
            output: "create:stockpile_switch",
            pattern: ["FB", "BO"],
            key: {
                B: "create:copper_sheet",
                O: "minecraft:observer",
                F: "create:railway_casing",
            },
        },
        {
            output: "create:display_link",
            pattern: [" R ", "BOB", " C "],
            key: {
                B: "createastral:bronze_sheet",
                O: "minecraft:observer",
                R: "minecraft:redstone_torch",
                C: "#c:plates/copper",
            },
        },
        // Make Oxygen loader possible before the moon
        {
            output: "ad_astra:oxygen_loader",
            pattern: ["IOI", "PTP", "IFI"],
            key: {
                I: "create:iron_sheet",
                O: "ad_astra:oxygen_tank",
                P: "create:smart_fluid_pipe",
                T: "create:fluid_tank",
                F: "ad_astra:engine_fan",
            },
        },
        // Degate Distributor to be before the compressor, so people can make moon bases as soon as they reach the moon
        {
            output: "ad_astra:oxygen_distributor",
            pattern: ["FFF", "TLT", "DGD"],
            key: {
                F: "ad_astra:engine_fan",
                T: "ad_astra:oxygen_tank",
                L: "ad_astra:oxygen_loader",
                D: "ad_astra:desh_ingot",
                G: "ad_astra:oxygen_gear",
            },
        },
        // Remove mechanical crafter requirement from alternator+electric motor, making it fully unique to the silver path
        {
            output: "createaddition:alternator",
            pattern: ["AAA", "CDC", "EAE"],
            key: {
                A: "create:iron_sheet",
                C: "createaddition:copper_spool",
                D: "create:integrated_circuit",
                E: "createaddition:capacitor",
            },
        },
        {
            output: "createaddition:electric_motor",
            pattern: ["ABA", "CDC", "EFE"],
            key: {
                A: "createastral:bronze_sheet",
                B: "techreborn:red_cell_battery",
                C: "createaddition:copper_spool",
                D: "create:integrated_circuit",
                E: "createaddition:capacitor",
                F: "techreborn:basic_machine_casing",
            },
        },
        // Removed brass+mechanical crafting requirement for Tesla Coil, making it fully unique to the silver path
        {
            output: "createaddition:tesla_coil",
            pattern: ["DSD", "USU", "CMC"],
            key: {
                D: "ad_astra:desh_ingot",
                S: "createaddition:copper_spool",
                U: "createaddition:copper_wire",
                C: "createaddition:capacitor",
                M: "create:brass_block",
            },
        },
        {
            output: "tconstruct:scorched_fuel_tank",
            pattern: ["AAA", "ABA"],
            key: {
                A: "tconstruct:scorched_brick",
                B: "create:fluid_tank",
            },
        },
        {
            output: "tconstruct:scorched_fuel_gauge",
            pattern: ["ACA", "CBC", "AAA"],
            key: {
                A: "tconstruct:scorched_brick",
                B: "create:fluid_tank",
                C: "#c:glass",
            },
        },
        // Changed blaze burner recipe.
        {
            output: "create:empty_blaze_burner",
            pattern: ["A A", "A A", "BCB"],
            key: {
                A: "createaddition:iron_rod",
                B: "create:iron_sheet",
                C: "ad_astra:moon_stone",
            },
        },
        // Gag recipe
        {
            output: "create:blaze_burner",
            pattern: ["A A", "ADA", "BCB"],
            key: {
                A: "createaddition:iron_rod",
                B: "create:iron_sheet",
                C: "ad_astra:moon_stone",
                D: "tconstruct:blaze_head",
            },
        },
        {
            output: "vinery:wine_rack_1",
            pattern: ["PSP", "STS", "PSP"],
            key: {
                P: "#planks",
                S: "#wooden_slabs",
                T: "#wooden_trapdoors",
            },
        },
        // Old school slab and stairs
        {
            output: "6x createastral:blast-resistant_concrete_slab",
            pattern: ["AAA"],
            key: {
                A: "createastral:blast-resistant_concrete",
            },
        },
        {
            output: "4x createastral:blast-resistant_concrete_stairs",
            pattern: ["A  ", "AA ", "AAA"],
            key: {
                A: "createastral:blast-resistant_concrete",
            },
        },
    ].forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key);
    });
});
