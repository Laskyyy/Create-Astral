onEvent("recipes", (event) => {
    // Output: String
    // Shape: Array of rows of inputs based on letters assigned
    // Inputs: Object with letters assigned to input items, to be used in the shape
    [
        {
            output: "ad_astra:calorite_tank",
            shape: [" C ", "COC", " C "],
            inputs: {
                C: "ad_astra:calorite_plate",
                O: "ad_astra:ostrum_tank",
            },
        },
        {
            output: "astraladditions:desizer_base",
            shape: ["YLY", "YBY", "YPY"],
            inputs: {
                Y: "createastral:ender_plating",
                P: "yttr:ultrapure_netherite",
                B: "createastral:promethium_atomic_battery",
                L: "createastral:living_mechanism",
            },
        },
        {
            output: "astraladditions:desizer_controller",
            shape: ["YYYYYY", "YBLLBY", "YLSRLY", "YLSRLY", "YBLLBY", "YYYYYY"],
            inputs: {
                Y: "createastral:ender_plating",
                S: "create:shadow_steel_casing",
                R: "create:refined_radiance_casing",
                B: "createastral:promethium_atomic_battery",
                L: "createastral:living_mechanism",
            },
        },
        {
            output: "yttr:reinforced_cleaver",
            shape: ["    VV", "   VV ", "  VV  ", " VN   ", " P    ", "P     "],
            inputs: {
                N: "yttr:neodymium_block",
                V: "yttr:glassy_void",
                P: "yttr:ultrapure_netherite",
            },
        },
        {
            output: "yttr:effector",
            shape: ["VVV   ", "VVY   ", "VYNY  ", "  YBY ", "   YPY", "    YY"],
            inputs: {
                Y: "yttr:yttrium_plating",
                N: "yttr:neodymium_block",
                V: "yttr:glassy_void",
                P: "yttr:ultrapure_netherite",
                B: "createastral:promethium_atomic_battery",
            },
        },
        {
            output: "yttr:centrifuge",
            shape: ["YYYYYY", "YBSSBY", "YSNNRY", "YSNNRY", "YBRRBY", "YYYYYY"],
            inputs: {
                Y: "yttr:yttrium_plating",
                N: "yttr:neodymium_block",
                S: "create:shadow_steel_casing",
                R: "create:refined_radiance_casing",
                B: "createastral:promethium_atomic_battery",
            },
        },
        {
            output: "astraladditions:e_guitar",
            shape: ["PCC  ", "PWIWT", "PCC A"],
            inputs: {
                A: "createastral:radiant_axe",
                P: "createastral:calorite_pin",
                C: "ad_astra:calorite_plate",
                W: "createaddition:iron_wire",
                I: "techreborn:industrial_circuit",
                T: "createaddition:tesla_coil",
            },
        },
        {
            output: "astraladditions:chromatic_vacuum",
            shape: [" B ", "ACA", "AAA"],
            inputs: {
                A: "techreborn:rubber",
                B: "minecraft:hopper",
                C: "create:integrated_circuit",
            },
        },
        {
            output: "yttr:rafter",
            shape: ["AEBDA", "AFCFA", "AFGFA", "AAAAA"],
            inputs: {
                A: "yttr:armor_plating",
                B: "projecttable:projecttable",
                C: "createastral:promethium_atomic_battery",
                D: "create:shadow_steel_casing",
                E: "create:refined_radiance_casing",
                G: "astraladditions:fragile_item_2",
                F: "yttr:yttrium_block",
            },
        },
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
            output: "yttr:magtank",
            shape: ["CAC", "ABA", "ABA", "CAC"],
            inputs: {
                A: "yttr:armor_plating",
                B: "techreborn:data_storage_chip",
                C: "ad_astra:calorite_plate",
            },
        },
        {
            output: "ad_astra:tier_3_rocket",
            shape: ["   A   ", "  PEP  ", "  EFE  ", "  ECE  ", " IRDRI ", "IBRHRBI", "I PRP I"],
            inputs: {
                A: "createbigcannons:nethersteel_screw_breech",
                B: "ad_astra:ostrum_engine",
                C: "astraladditions:fragile_item",
                D: "techreborn:electronic_circuit",
                E: "ad_astra:ostrum_block",
                F: "createastral:navigation_mechanism",
                H: "createastral:shimmer_amplifier",
                I: "ad_astra:rocket_fin",
                P: "ad_astra:ostrum_plate",
                R: "createastral:rocket_casing",
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
                E: "astraladditions:fragile_item_2",
                F: "createastral:subatomic_ingot",
                G: "astraladditions:fragile_item_3",
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
        ///  {
        ///      output: "techreborn:fusion_control_computer",
        ///      shape: ["DBCBD", "BDCDB", "CCECC", "BDADB", "DABAD"],
        ///      inputs: {
        ///          A: "techreborn:industrial_circuit",
        ///          B: "techreborn:advanced_machine_casing",
        ///          C: "techreborn:fusion_coil",
        ///          D: "createaddition:tesla_coil",
        ///          E: "techreborn:digital_display",
        ///      },
        ///  },
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
                E: "ae2:fluix_glass_cable",
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
                E: "createaddition:modular_accumulator",
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
        ///    {
        ///        output: "2x techreborn:fusion_coil",
        ///        shape: ["CCCCC", "CBBBC", "CBDBC", "CBBBC", "CCCCC"],
        ///        inputs: {
        ///            B: "ae2:fluix_glass_cable",
        ///            C: "create:sturdy_sheet",
        ///            D: "techreborn:advanced_machine_casing",
        ///        },
        ///    },
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
        {
            output: "kubejs:fragile_sheet_block",
            shape: ["FFFF", "FFFF", "FFFF", "FFFF"],
            inputs: {
                F: "createastral:fragile_sheet",
            },
        },
        {
            output: "astraladditions:pylon",
            shape: [" C ", "CEC", "CNC", " C "],
            inputs: {
                C: "astraladditions:moonset_crystal_block",
                E: "minecraft:ender_eye",
                N: "createastral:navigation_mechanism",
            },
        },
        {
            output: "astraladditions:meteor_mitts",
            shape: ["SSSSS", "SSISS", "SCCCS", " CCC "],
            inputs: {
                S: "astraladditions:moonset_crystal_block",
                C: "createastral:ender_plating",
                I: "createastral:astral_singularity",
            },
        },
        {
            output: "doodads:celestial_ring",
            shape: [" I ", "C C", " E "],
            inputs: {
                C: "createastral:ender_plating",
                I: "createastral:astral_singularity",
                E: "astraladditions:moonblazed_orb",
            },
        },
        {
            output: "yttr:projector",
            shape: ["MSM", "MIM", " E ", " C "],
            inputs: {
                S: "astraladditions:moonset_crystal_block",
                C: "createastral:ender_plating",
                I: "createastral:astral_singularity",
                E: "createastral:promethium_atomic_battery",
                M: "createastral:prismatic_crystal",
            },
        },
        {
            output: "yttr:shifter",
            shape: ["MMCMM", " MIM ", "  E  "],
            inputs: {
                C: "createastral:ender_plating",
                I: "createastral:astral_singularity",
                E: "createastral:promethium_atomic_battery",
                M: "createastral:prismatic_crystal",
            },
        },
        // yttric rifle
        {
            output: "yttr:rifle",
            shape: ["CCY  ", "YMEIC", " CIYC", "   C "],
            inputs: {
                Y: "yttr:yttrium_block",
                C: "ad_astra:calorite_ingot",
                I: "techreborn:industrial_circuit",
                E: "techreborn:electronic_circuit",
                M: "minecraft:crossbow",
            },
        },
        {
            output: "yttr:rifle_reinforced",
            shape: ["CCY  ", "YMEIC", " CIYC", "   C "],
            inputs: {
                Y: "create:refined_radiance_casing",
                C: "createastral:subatomic_ingot",
                I: "techreborn:industrial_circuit",
                E: "techreborn:data_storage_chip",
                M: "yttr:rifle",
            },
        },
        {
            output: "yttr:rifle_overclocked",
            shape: ["CCY  ", "YMEIC", " CIYC", "   C "],
            inputs: {
                Y: "create:refined_radiance_casing",
                C: "createastral:ender_plating",
                I: "createastral:astral_singularity",
                E: "createastral:promethium_atomic_battery",
                M: "yttr:rifle_reinforced",
            },
        },
    ].forEach((recipe) => {
        event.recipes.create.mechanical_crafting(recipe.output, recipe.shape, recipe.inputs);
    });
});
