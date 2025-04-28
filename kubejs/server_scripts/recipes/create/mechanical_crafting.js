onEvent("recipes", (event) => {
    // Output: String
    // Pattern: Array of rows of inputs based on letters assigned
    // Key: Object with letters assigned to input items, to be used in the shape
    [
        {
            output: "ad_astra:calorite_tank",
            pattern: [" C ", "COC", " C "],
            key: {
                C: "ad_astra:calorite_plate",
                O: "ad_astra:ostrum_tank",
            },
        },
        {
            output: "astraladditions:desizer_base",
            pattern: ["YLY", "YBY", "YPY"],
            key: {
                Y: "createastral:ender_plating",
                P: "yttr:ultrapure_netherite",
                B: "createastral:promethium_atomic_battery",
                L: "createastral:living_mechanism",
            },
        },
        {
            output: "astraladditions:desizer_controller",
            pattern: ["YYYYYY", "YBLLBY", "YLSRLY", "YLSRLY", "YBLLBY", "YYYYYY"],
            key: {
                Y: "createastral:ender_plating",
                S: "create:shadow_steel_casing",
                R: "create:refined_radiance_casing",
                B: "createastral:promethium_atomic_battery",
                L: "createastral:living_mechanism",
            },
        },
        {
            output: "yttr:reinforced_cleaver",
            pattern: ["    VV", "   VV ", "  VV  ", " VN   ", " P    ", "P     "],
            key: {
                N: "yttr:neodymium_block",
                V: "yttr:glassy_void",
                P: "yttr:ultrapure_netherite",
            },
        },
        {
            output: "yttr:effector",
            pattern: ["VVV   ", "VVY   ", "VYNY  ", "  YBY ", "   YPY", "    YY"],
            key: {
                Y: "yttr:yttrium_plating",
                N: "yttr:neodymium_block",
                V: "yttr:glassy_void",
                P: "yttr:ultrapure_netherite",
                B: "createastral:promethium_atomic_battery",
            },
        },
        {
            output: "yttr:centrifuge",
            pattern: ["YYYYYY", "YBSSBY", "YSNNRY", "YSNNRY", "YBRRBY", "YYYYYY"],
            key: {
                Y: "yttr:yttrium_plating",
                N: "yttr:neodymium_block",
                S: "create:shadow_steel_casing",
                R: "create:refined_radiance_casing",
                B: "createastral:promethium_atomic_battery",
            },
        },
        {
            output: "astraladditions:e_guitar",
            pattern: ["PCC  ", "PWIWT", "PCC A"],
            key: {
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
            pattern: [" B ", "ACA", "AAA"],
            key: {
                A: "techreborn:rubber",
                B: "minecraft:hopper",
                C: "create:integrated_circuit",
            },
        },
        //! Unsure if this is used at all so I'm disabling it entirely
        /* {
            output: "yttr:rafter",
            pattern: ["AEBDA", "AFCFA", "AFGFA", "AAAAA"],
            key: {
                A: "yttr:armor_plating",
                B: "projecttable:projecttable",
                C: "createastral:promethium_atomic_battery",
                D: "create:shadow_steel_casing",
                E: "create:refined_radiance_casing",
                G: "astraladditions:fragile_item_2",
                F: "yttr:yttrium_block",
            },
        }, */
        {
            output: "immersive_aircraft:airship",
            pattern: ["AAAA ", "AAAAA", " GFG ", "BEDBC", " BBB "],
            key: {
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
            pattern: ["CAC", "ABA", "ABA", "CAC"],
            key: {
                A: "yttr:armor_plating",
                B: "techreborn:data_storage_chip",
                C: "ad_astra:calorite_plate",
            },
        },
        {
            output: "ad_astra:tier_3_rocket",
            pattern: ["   A   ", "  PEP  ", "  EFE  ", "  ECE  ", " IRDRI ", "IBRHRBI", "I PRP I"],
            key: {
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
            pattern: [
                "   A   ",
                "  AAA  ",
                "  BEB  ",
                "  BDB  ",
                "  BDB  ",
                " CDFDC ",
                "IGDGDGI",
                "IGHGHGI",
                "IH H HI",
            ],
            key: {
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
            pattern: ["CCDCC ", "CCBCC ", "ABEBAF", "CCBCC ", "CCDCC "],
            key: {
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
            pattern: [" CCC ", "  DF ", "BGEBA", " BBB "],
            key: {
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
            pattern: ["    AA   ", "    AA   ", " A   BBC ", "BBBBBEDCF", " A   BBC ", "    AA   ", "    AA   "],
            key: {
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
            pattern: ["BAAAB", "ABABA", "AABAA", "ABABA", "BAAAB"],
            key: {
                A: "createastral:blast-resistant_concrete",
                B: "create:sturdy_sheet",
            },
        },
        {
            output: "techreborn:data_storage_chip",
            pattern: ["A", "C", "B"],
            key: {
                A: "createastral:olivine_sheet",
                B: "yttr:yttrium_ingot",
                C: "techreborn:industrial_circuit",
            },
        },
        {
            output: "immersive_aircraft:boiler",
            pattern: ["AB", "CB", "CB"],
            key: {
                A: "create:nozzle",
                B: "create:copper_sheet",
                C: "techreborn:rubber",
            },
        },
        {
            output: "minecraft:elytra",
            pattern: ["  A  ", " B B ", " C C ", "C   C", "DE ED", "F G F"],
            key: {
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
            output: "minecraft:crossbow",
            pattern: [" CCA ", "AABDB"],
            key: {
                A: "create:iron_sheet",
                B: "#minecraft:logs",
                C: "minecraft:gunpowder",
                D: "create:precision_mechanism",
            },
        },
        {
            output: "ad_astra:nasa_workbench",
            pattern: ["EFE", "CDC", "ABA"],
            key: {
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
            pattern: ["DDD", " B ", "ACA", "AEA"],
            key: {
                A: "ad_astra:desh_plate",
                B: "create:integrated_circuit",
                C: "createastral:navigation_mechanism",
                D: "minecraft:blue_stained_glass",
                E: "ae2:fluix_glass_cable",
            },
        },

        {
            output: "ad_astra:coal_generator",
            pattern: ["ABCBA", "AAEAA"],
            key: {
                A: "ad_astra:steel_plate",
                B: "techreborn:lead_ingot",
                C: "create:precision_mechanism",
                E: "ad_astra:engine_fan",
            },
        },
        {
            output: "computercraft:computer_advanced",
            pattern: ["AAA", "BCB", "ADA"],
            key: {
                A: "create:brass_sheet",
                B: "create:electron_tube",
                C: "create:display_board",
                D: "create:precision_mechanism",
            },
        },
        {
            output: "computercraft:pocket_computer_advanced",
            pattern: [" E ", "AAA", "CBC", "ADA"],
            key: {
                A: "create:brass_sheet",
                B: "create:electron_tube",
                C: "create:display_board",
                D: "create:precision_mechanism",
                E: "create:redstone_link",
            },
        },
        {
            output: "computercraft:turtle_advanced",
            pattern: ["ADA", "ABA"],
            key: {
                A: "create:brass_sheet",
                B: "computercraft:turtle_normal",
                D: "create:precision_mechanism",
            },
        },

        {
            output: "polaroidcamera:camera",
            pattern: ["AAA", "CBC", "CDC"],
            key: {
                A: "create:brass_sheet",
                B: "create:electron_tube",
                C: "techreborn:tin_ingot",
                D: "create:precision_mechanism",
            },
        },

        {
            output: "ad_astra:energizer",
            pattern: [" E ", "ADA", "ACA", "BAB"],
            key: {
                A: "ad_astra:ostrum_plate",
                B: "ad_astra:ostrum_block",
                C: "tconstruct:cobalt_block",
                D: "createastral:navigation_mechanism",
                E: "createaddition:modular_accumulator",
            },
        },

        {
            output: "ad_astra:jet_suit",
            pattern: ["  F  ", "AAGAA", " BEB ", " CDC "],
            key: {
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
            pattern: [" F ", "AEA", "AGA"],
            key: {
                A: "ad_astra:calorite_plate",
                E: Item.of("ad_astra:netherite_space_helmet").ignoreNBT(),
                F: "create:integrated_circuit",
                G: "createastral:subatomic_ingot",
            },
        },
        {
            output: "ad_astra:jet_suit_pants",
            pattern: ["CEC", "AFA", "A A", "A A"],
            key: {
                A: "ad_astra:calorite_plate",
                C: "ad_astra:calorite_block",
                E: Item.of("ad_astra:netherite_space_pants").ignoreNBT(),
                F: "createastral:subatomic_ingot",
            },
        },
        {
            output: "ad_astra:jet_suit_boots",
            pattern: ["FEF", "A A", "C C"],
            key: {
                A: "ad_astra:calorite_plate",
                C: "ad_astra:calorite_block",
                E: Item.of("ad_astra:netherite_space_boots").ignoreNBT(),
                F: "dustrial_decor:padded_block",
            },
        },
        {
            output: "doodads:slimey_shoes",
            pattern: [" D ", "EFE", "ABA", "CGC"],
            key: {
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
            pattern: [" AAA ", "CBABC"],
            key: {
                A: "createdeco:cast_iron_sheet",
                B: "minecraft:ender_eye",
                C: "minecraft:string",
            },
        },
        {
            output: "doodads:midnights_eye",
            pattern: ["DCCCD", "CBCAC", "DCCCD"],
            key: {
                A: "create:refined_radiance",
                B: "create:shadow_steel",
                C: "minecraft:glowstone",
                D: "create:powdered_obsidian",
            },
        },

        {
            output: "doodads:speed_boots",
            pattern: [" ADA ", " AEAC", "BBBB "],
            key: {
                A: "ad_astra:calorite_plate",
                B: "create:sturdy_sheet",
                C: "ad_astra:steel_engine",
                D: "createastral:navigation_mechanism",
                E: "dustrial_decor:padded_block",
            },
        },

        {
            output: "buildinggadgets:gadget_building",
            pattern: [" I ", "SOS", "S8S", "SNS"],
            key: {
                S: "techreborn:silver_plate",
                8: "ae2:spatial_cell_component_2",
                O: "techreborn:basic_display",
                I: "ae2:wireless_receiver",
                N: "createastral:navigation_mechanism",
            },
        },
        {
            output: "buildinggadgets:gadget_copy_paste",
            pattern: [" I ", "SOS", "SMS", "SNS"],
            key: {
                S: "techreborn:silver_plate",
                M: "ae2:memory_card",
                O: "techreborn:basic_display",
                I: "ae2:wireless_receiver",
                N: "createastral:navigation_mechanism",
            },
        },
        {
            output: "ad_astra:ostrum_engine",
            pattern: [" F ", "FEF", "FDF", "ABA"],
            key: {
                A: "createastral:shimmer_amplifier",
                B: "createaddition:capacitor",
                D: "createaddition:tesla_coil",
                E: "ad_astra:ostrum_block",
                F: "ad_astra:ostrum_plate",
            },
        },
        {
            output: "kubejs:fragile_sheet_block",
            pattern: ["FFFF", "FFFF", "FFFF", "FFFF"],
            key: {
                F: "createastral:fragile_sheet",
            },
        },
        {
            output: "astraladditions:pylon",
            pattern: [" C ", "CEC", "CNC", " C "],
            key: {
                C: "astraladditions:moonset_crystal_block",
                E: "minecraft:ender_eye",
                N: "createastral:navigation_mechanism",
            },
        },
        {
            output: "astraladditions:meteor_mitts",
            pattern: ["SSSSS", "SSISS", "SCCCS", " CCC "],
            key: {
                S: "astraladditions:moonset_crystal_block",
                C: "createastral:ender_plating",
                I: "createastral:astral_singularity",
            },
        },
        {
            output: "doodads:celestial_ring",
            pattern: [" I ", "C C", " E "],
            key: {
                C: "createastral:ender_plating",
                I: "createastral:astral_singularity",
                E: "astraladditions:moonblazed_orb",
            },
        },
        {
            output: "yttr:projector",
            pattern: ["MSM", "MIM", " E ", " C "],
            key: {
                S: "astraladditions:moonset_crystal_block",
                C: "createastral:ender_plating",
                I: "createastral:astral_singularity",
                E: "createastral:promethium_atomic_battery",
                M: "createastral:prismatic_crystal",
            },
        },
        {
            output: "yttr:shifter",
            pattern: ["MMCMM", " MIM ", "  E  "],
            key: {
                C: "createastral:ender_plating",
                I: "createastral:astral_singularity",
                E: "createastral:promethium_atomic_battery",
                M: "createastral:prismatic_crystal",
            },
        },
        // yttric rifle
        {
            output: "yttr:rifle",
            pattern: ["CCY  ", "YMEIC", " CIYC", "   C "],
            key: {
                Y: "yttr:yttrium_block",
                C: "ad_astra:calorite_ingot",
                I: "techreborn:industrial_circuit",
                E: "techreborn:electronic_circuit",
                M: "minecraft:crossbow",
            },
        },
        {
            output: "yttr:rifle_reinforced",
            pattern: ["CCY  ", "YMEIC", " CIYC", "   C "],
            key: {
                Y: "create:refined_radiance_casing",
                C: "createastral:subatomic_ingot",
                I: "techreborn:industrial_circuit",
                E: "techreborn:data_storage_chip",
                M: "yttr:rifle",
            },
        },
        {
            output: "yttr:rifle_overclocked",
            pattern: ["CCY  ", "YMEIC", " CIYC", "   C "],
            key: {
                Y: "create:refined_radiance_casing",
                C: "createastral:ender_plating",
                I: "createastral:astral_singularity",
                E: "createastral:promethium_atomic_battery",
                M: "yttr:rifle_reinforced",
            },
        },
        {
            output: "minecraft:trident",
            pattern: ["  C  ", "C S C", " SDS ", "  S  ", "  S  "],
            key: {
                S: "minecraft:prismarine_shard",
                D: "createaddition:diamond_grit",
                C: "minecraft:prismarine_crystals",
            },
        },
    ].forEach((recipe) => {
        event.recipes.create.mechanical_crafting(recipe.output, recipe.pattern, recipe.key);
    });
});
