onEvent("recipes", (event) => {
    // Removal Object
    // Output, Input, Type, Mod

    //Tech Reborn
    [
        // storage units
        { output: "techreborn:crude_storage_unit"},
        { output: "techreborn:basic_storage_unit"},
        { output: "techreborn:advanced_storage_unit"},
        { output: "techreborn:industrial_storage_unit"},
        { output: "techreborn:quantumr_storage_unit"},
        // tanks units
        { output: "techreborn:basic_tank_unit"},
        { output: "techreborn:advanced_tank_unit"},
        { output: "techreborn:industrial_tank_unit"},
        { output: "techreborn:quantum_tank_unit"},

        { output: "techreborn:chunk_loader" },
        {output: "techreborn:pyrite_dust"},
        { output: "ae2:spatial_anchor" },
        { output: "techreborn:industrial_electrolyzer" },
        { output: "techreborn:industrial_sawmill" },
        { output: "techreborn:vacuum_freezer" },
        { output: "techreborn:solid_canning_machine" },
        { output: "techreborn:greenhouse_controller" },
        { output: "techreborn:industrial_centrifuge" },
        { output: "techreborn:electric_furnace" },
        { output: "techreborn:distillation_tower" },
        { output: "techreborn:chemical_reactor" },
        { output: "techreborn:auto_crafting_table" },
        { output: "techreborn:alloy_smelter" },
        { output: "techreborn:extractor" },
        { output: "createendertransmission:chunk_loader" },
        { input: "techreborn:sponge_piece" },
        { output: "techreborn:sponge_piece" },
        { output: "techreborn:compressed_plantball" },
        { output: "techreborn:plantball" },
        { output: "techreborn:grinder" },
        { output: "techreborn:block_breaker" },
        { output: "techreborn:wire_mill" },
        { output: "techreborn:compressor" },
        { output: "techreborn:synthetic_redstone_crystal" },
        { output: "techreborn:bronze_nugget" },
        { output: "techreborn:iron_plate" },
        { output: "techreborn:steel_ingot" },
        { output: "techreborn:steel_block" },
        { output: "techreborn:steel_plate" },
        { output: "techreborn:bronze_block" },
        { output: "techreborn:ender_pearl_dust" },
        { output: "techreborn:electronic_circuit" },
        { output: "techreborn:industrial_circuit" },
        { output: "techreborn:energy_flow_chip" },
        { output: "techreborn:lithium_ion_battery" },
        { output: "techreborn:rubber", type: "minecraft:smelting" },
        { output: "techreborn:basic_machine_frame" },
        { output: "techreborn:advanced_machine_frame" },
        { output: "techreborn:industrial_machine_frame" },
        { output: "techreborn:advanced_machine_casing" },
        { output: "techreborn:industrial_machine_casing" },
        { output: "techreborn:refined_iron_ingot" },
        { output: "techreborn:fusion_coil" },
        { output: "techreborn:carbon_mesh" },
        { output: "techreborn:data_storage_core" },
        { output: "techreborn:data_storage_chip" },
        { output: "techreborn:player_detector" },
        { output: "techreborn:quantum_helmet" },
        { output: "techreborn:quantum_chestplate" },
        { output: "techreborn:quantum_leggings" },
        { output: "techreborn:quantum_boots" },
        { output: "techreborn:copper_nugget" },
        { output: "techreborn:steel_plate" },
        { type: "techreborn:scrapbox" },
        {
            type: "techreborn:grinder",
            input: "#techreborn:calcite_dust_material",
        },
        { type: "techreborn:grinder", input: "#c:ores" },
        { type: "techreborn:grinder", input: "#c:storage_blocks" },
        {
            type: "techreborn:grinder",
            input: "#techreborn:storage_blocks",
        },
        { type: "techreborn:grinder", output: "#c:concrete_powder" },
        { type: "techreborn:grinder", input: "#c:sandstone" },
        { type: "techreborn:grinder", input: "#minecraft:wool" },
        { type: "techreborn:grinder", input: "minecraft:gravel" },
        { type: "techreborn:grinder", input: "minecraft:obsidian" },
        {
            type: "techreborn:grinder",
            input: "minecraft:shroomlight",
        },
        { type: "techreborn:grinder", input: "minecraft:glowstone" },
        { type: "techreborn:grinder", input: "ad_astra:steel_block" },
        {
            type: "techreborn:grinder",
            input: "createastral:bronze_block",
        },
        { type: "techreborn:grinder", input: "minecraft:andesite" },
        { type: "techreborn:grinder", input: "minecraft:diorite" },
        { type: "techreborn:grinder", input: "minecraft:granite" },
        { type: "techreborn:grinder", input: "minecraft:netherrack" },
        {
            type: "techreborn:grinder",
            input: "minecraft:warped_nylium",
        },
        {
            type: "techreborn:grinder",
            input: "minecraft:crimson_nylium",
        },
        {
            type: "techreborn:grinder",
            output: "techreborn:saw_small_dust",
        },
        { type: "techreborn:grinder", output: "minecraft:sand" },
        { type: "techreborn:grinder", output: "minecraft:red_sand" },
        {
            type: "techreborn:grinder",
            input: "minecraft:pointed_dripstone",
        },
        {
            type: "minecraft:crafting_shaped",
            output: "techreborn:plantball",
        },
        {
            type: "minecraft:crafting_shapeless",
            output: "techreborn:plantball",
        },
        {
            type: "minecraft:shaped",
            output: "techreborn:nak_coolant_cell_60k",
        },
        { id: "techreborn:crafting_table/paper" },
        //Create

        { output: "create:blaze_cake" },
        { output: "create:blaze_burner" },
        { output: "create:ochrum" },
        { output: "create:crimsite" },
        { output: "create:limestone" },
        { output: "create:asurine" },
        { output: "create:veridium" },
        { output: "create:scoria" },
        { output: "create:scorchia" },
        { output: "create:crushed_raw_tin" },
        { output: "create:crushed_raw_silver" },
        { output: "create:crushed_raw_lead" },
        { output: "create:crushed_raw_uranium" },
        { output: "create:electron_tube" },
        { output: "create:cogwheel", type: "minecraft:shaped" },
        { output: "create:large_cogwheel", type: "minecraft:shaped" },
        { output: "create:cogwheel" },
        { output: "create:large_cogwheel" },
        { output: "create:experience_block" },
        { output: "create:stockpile_switch" },
        { output: "create:copper_casing" },
        {
            output: "create:andesite_alloy",
            input: "minecraft:andesite",
        },

        { type: "create:milling", output: "minecraft:gunpowder" },
        { type: "create:milling", output: "minecraft:flint" },
        { type: "create:crushing", input: "minecraft:blaze_rod" },
        { type: "create:crushing", input: "minecraft:bone" },
        { type: "create:crushing", input: "minecraft:tuff" },
        { type: "create:milling", input: "minecraft:tuff" },
        { type: "create:milling", input: "minecraft:basalt" },
        { type: "create:crushing", input: "minecraft:lapis_lazuli" },
        { type: "create:crushing", input: "minecraft:diamond" },
        { type: "create:crushing", input: "minecraft:diorite" },
        { type: "create:crushing", input: "minecraft:granite" },
        { type: "create:crushing", input: "minecraft:andesite" },
        { type: "create:crushing", input: "create:asurine" },
        { type: "create:crushing", input: "#create:stone_types/asurine" },
        { type: "create:crushing", input: "create:veridium" },
        { type: "create:crushing", input: "create:limestone" },
        { type: "create:crushing", input: "create:ochrum" },
        { type: "create:crushing", input: "create:scoria" },
        { type: "create:crushing", input: "create:scorchia" },
        { type: "create:crushing", input: "minecraft:cobblestone" },
        { type: "create:mixing", output: "create:brass_ingot" },
        { type: "create:crushing", input: "minecraft:netherrack" },
        { type: "create:splashing", input: "minecraft:soul_sand" },
        { type: "create:splashing", input: "minecraft:red_sand" },
        { type: "create:haunting", input: "minecraft:red_sand" },
        {
            type: "create:mixing",
            output: "tconstruct:rose_gold_ingot",
        },
        {
            type: "create:mixing",
            output: "tconstruct:slimesteel_ingot",
        },
        {
            type: "create:mixing",
            output: "tconstruct:pig_iron_ingot",
        },
        {
            type: "create:mixing",
            output: "tconstruct:manyullyn_ingot",
        },
        {
            type: "create:mixing",
            output: "tconstruct:hepatizon_ingot",
        },
        {
            type: "create:mixing",
            output: "tconstruct:queens_slime_ingot",
        },
        {
            input: "minecraft:raw_iron",
            output: "create:crushed_raw_iron",
        },
        {
            input: "minecraft:raw_gold",
            output: "create:crushed_raw_gold",
        },
        {
            input: "minecraft:raw_copper",
            output: "create:crushed_raw_copper",
        },
        {
            input: "create:raw_zinc",
            output: "create:crushed_raw_zinc",
        },
        {
            output: "create:brass_casing",
            type: "create:item_application",
        },
        { mod: "create", output: "minecraft:andesite" },
        { input: "create:blaze_burner" },

        // Create Deco

        { output: "createdeco:andesite_door" },
        { output: "createdeco:brass_door" },
        { output: "createdeco:copper_door" },
        { output: "createdeco:zinc_door" },

        //Create Additions

        { output: "createaddition:alternator" },
        { output: "createaddition:electric_motor" },
        { output: "createaddition:tesla_coil" },
        {
            output: "createaddition:biomass_pellet",
        },
        {
            output: "createaddition:biomass_pellet",
        },
        {
            output: "createaddition:biomass",
        },

        // Create Railways
        { output: "railways:track_acacia" },
        { output: "railways:track_birch" },
        { output: "railways:track_crimson" },
        { output: "railways:track_dark_oak" },
        { output: "railways:track_jungle" },
        { output: "railways:track_oak" },
        { output: "railways:track_spruce" },
        { output: "railways:track_warped" },
        { output: "railways:track_blackstone" },
        { output: "railways:track_ender" },
        { output: "railways:track_tieless" },
        { output: "railways:track_phantom" },
        { output: "railways:track_monorail" },

        //Createdeco sheetmetal rebalance

        { output: "createdeco:copper_sheet_metal" },
        { output: "createdeco:andesite_sheet_metal" },
        { output: "createdeco:gold_sheet_metal" },
        { output: "createdeco:netherite_sheet_metal" },
        { output: "createdeco:brass_sheet_metal" },
        { output: "createdeco:cast_iron_sheet_metal" },
        { output: "createdeco:iron_sheet_metal" },
        { output: "createdeco:zinc_sheet_metal" },

        // Big cannon removals

        { output: "createbigcannons:nethersteel_nugget" },
        { output: "createbigcannons:nethersteel_ingot" },
        { output: "createbigcannons:nethersteel_block" },

        // dustrial decor sheetmetal rework

        { output: "dustrial_decor:rusty_iron_door" },
        { output: "dustrial_decor:rusty_sheet_metal_treading" },

        // Ad Astra

        { output: "ad_astra:oxygen_distributor" },
        { output: "ad_astra:steel_ingot" },
        { output: "ad_astra:iron_plate" },
        { output: "ad_astra:coal_generator" },
        { output: "ad_astra:solar_panel" },
        { output: "ad_astra:fuel_refinery" },
        { output: "ad_astra:oxygen_loader" },
        { output: "ad_astra:energizer" },
        { output: "ad_astra:iron_rod" },
        { output: "ad_astra:nasa_workbench" },
        { output: "ad_astra:rocket_fin" },
        { output: "ad_astra:launch_pad" },
        { output: "ad_astra:space_boots" },
        { output: "ad_astra:desh_fluid_pipe" },
        { output: "ad_astra:ostrum_fluid_pipe" },
        { output: "ad_astra:wrench" },
        { output: "ad_astra:jet_suit_helmet" },
        { output: "ad_astra:jet_suit" },
        { output: "ad_astra:jet_suit_pants" },
        { output: "ad_astra:jet_suit_boots" },
        { output: "ad_astra:tier_1_rocket" },
        { output: "ad_astra:desh_cable" },
        { output: "ad_astra:steel_cable" },
        { output: "ad_astra:compressor" },
        { output: "ad_astra:ostrum_ingot", type: "minecraft:smelting" },
        { output: "ad_astra:ostrum_ingot", type: "minecraft:blasting" },
        { output: "ad_astra:calorite_ingot", type: "minecraft:smelting" },
        { output: "ad_astra:calorite_ingot", type: "minecraft:blasting" },
        { output: "ad_astra:calorite_engine" },
        { output: "ad_astra:calorite_tank" },
        { output: "ad_astra:steel_tank"},
        { output: "ad_astra:rocket_nose_cone"},


        // AE2

        { output: "ae2:fluix_dust" },
        { output: "ae2:molecular_assembler" },
        { output: "ae2:inscriber" },
        { type: "ae2:inscriber" },
        { output: "ae2:controller", type: "crafting_shaped" },

        // Tconstruct

        { mod: "tconstruct", output: "minecraft:granite" },
        {
            type: "tconstruct:casting_basin",
            output: "minecraft:diorite",
        },
        { output: "tconstruct:copper_nugget" },
        { output: "tconstruct:smeltery_controller" },
        { output: "tconstruct:seared_melter" },
        { output: "tconstruct:scorched_alloyer" },
        { output: "tconstruct:earth_slime_sling" },
        { output: "tconstruct:sky_slime_sling" },
        { output: "tconstruct:ender_slime_sling" },
        { output: "tconstruct:seared_ingot_gauge" },
        { output: "tconstruct:seared_ingot_tank" },
        { output: "tconstruct:seared_fuel_gauge" },
        { output: "tconstruct:seared_fuel_tank" },
        { output: "tconstruct:seared_bricks" },
        { output: "tconstruct:grout" },
        { type: "tconstruct:entity_melting" },
        { type: "tconstruct:alloy" },
        { output: "tconstruct:nether_grout" },
        { output: "tconstruct:efln_ball" },
        { output: "tconstruct:piggy_backpack" },

        //horse armor

        { output: "minecraft:leather_horse_armor" },
        { type: "tconstruct:melting", input: "minecraft:iron_horse_armor" },
        { type: "tconstruct:melting", input: "minecraft:golden_horse_armor" },
        { type: "tconstruct:melting", input: "minecraft:diamond_horse_armor" },

        // Miscellaneous
        { output: "minecraft:shroomlight" },

        { output: "chipped:mechanist_workbench" },

        { output: "passivepiglins:piglin_fortune" },
        { output: "passivepiglins:piglin_totem" },
        { output: "passivepiglins:piglin_coin" },
        { output: "travellersbackpack:standard" },
        { output: "campanion:sleeping_bag" },
        { output: "travellersbackpack:white_sleeping_bag" },
        { output: "travellersbackpack:orange_sleeping_bag" },
        { output: "travellersbackpack:magenta_sleeping_bag" },
        { output: "travellersbackpack:light_blue_sleeping_bag" },
        { output: "travellersbackpack:yellow_sleeping_bag" },
        { output: "travellersbackpack:lime_sleeping_bag" },
        { output: "travellersbackpack:pink_sleeping_bag" },
        { output: "travellersbackpack:gray_sleeping_bag" },
        { output: "travellersbackpack:light_gray_sleeping_bag" },
        { output: "travellersbackpack:cyan_sleeping_bag" },
        { output: "travellersbackpack:purple_sleeping_bag" },
        { output: "travellersbackpack:blue_sleeping_bag" },
        { output: "travellersbackpack:brown_sleeping_bag" },
        { output: "travellersbackpack:green_sleeping_bag" },
        { output: "travellersbackpack:red_sleeping_bag" },
        { output: "travellersbackpack:black_sleeping_bag" },
        { output: "travellersbackpack:hose" },
        { output: "travellersbackpack:hose_nozzle" },
        { output: "ad_astra:ostrum_engine" },
        { output: "dbe:server_rack" },
        { output: "dustrial_decor:cast_iron_billet" },

        { output: "mcdw:pick_diamond_pickaxe_var" },
        { output: "mcdw:sword_diamond_sword_var" },

        { output: "automobility:auto_mechanic_table" },
        { output: "automobility:automobile_assembler" },
        { type: "automobility:automobile_assembler" },
        { type: "ad_astra:fuel_conversion" },

        { output: "campanion:grappling_hook" },
        { output: "campanion:mre" },
        { output: "campanion:day_pack" },
        { output: "campanion:camping_pack" },
        { output: "campanion:wooden_spear" },
        { output: "campanion:stone_spear" },
        { output: "campanion:iron_spear" },
        { output: "campanion:diamond_spear" },
        { output: "campanion:netherite_spear" },
        { output: "campanion:golden_spear" },

        { output: "explorerscompass:explorerscompass" },

        { output: "phonos:radio_player_piano" },
        { output: "phonos:redstone_chip" },

        { mod: "doodads" },
        { mod: "extended_drawers" },
        { output: "doodads:slimey_shoes" },

        { output: "dbe:steel_ingot" },
        { output: "dbe:copper_coil" },

        { output: "farmersdelight:cooking_pot" },
        { output: "farmersdelight:rope" },

        { mod: "lchunkloader" },

        { output: "immersive_aircraft:boiler" },
        { output: "immersive_aircraft:engine" },
        { output: "immersive_aircraft:nether_engine" },
        { output: "immersive_aircraft:large_propeller" },
        { output: "immersive_aircraft:airship" },
        { output: "immersive_aircraft:gyrodyne" },
        { output: "immersive_aircraft:biplane" },
        { output: "immersive_aircraft:quadrocopter" },

        { output: "catwalksinc:iron_rod" },

        { output: "polaroidcamera:camera" },

        { output: "computercraft:turtle_advanced" },
        { output: "computercraft:computer_advanced" },
        { output: "computercraft:pocket_computer_advanced" },

        { mod: "camsbackpacks", input: "minecraft:chest" },

        { output: "buildinggadgets:gadget_building" },
        { output: "buildinggadgets:gadget_copy_paste" },

        // Yttr
        { output: "yttr:chute" },
        { output: "yttr:rafter" },
        { output: "yttr:centrifuge" },
        { output: "yttr:dopper" },
        { output: "yttr:aware_hopper" },
        { output: "yttr:levitation_chamber" },
        { output: "yttr:skeletal_sorter_right_handed" },
        { output: "yttr:skeletal_sorter_left_handed" },
        { output: "yttr:rifle_reinforced" },
        { output: "yttr:rifle_overclocked" },
        { output: "yttr:shifter" },
        { output: "yttr:projector" },
        { output: "yttr:spatula" },
        { output: "yttr:bedrock_smasher" },
        { output: "yttr:effector" },

        // Minecraft

        { mod: "minecraft", output: "minecraft:granite" },
        { output: "minecraft:elytra" },
        {
            mod: "minecraft",
            input: "minecraft:diorite",
            output: "minecraft:andesite",
        },
        {
            mod: "minecraft",
            input: "minecraft:cobblestone",
            output: "minecraft:diorite",
        },
        { output: "minecraft:iron_sword" },
        { output: "minecraft:iron_pickaxe" },
        { output: "minecraft:iron_hoe" },
        { output: "minecraft:iron_shovel" },
        { output: "minecraft:iron_axe" },
        { output: "minecraft:iron_helmet" },
        { output: "minecraft:iron_chestplate" },
        { output: "minecraft:iron_leggings" },
        { output: "minecraft:iron_boots" },
        { output: "minecraft:diamond_helmet" },
        { output: "minecraft:diamond_chestplate" },
        { output: "minecraft:diamond_leggings" },
        { output: "minecraft:diamond_boots" },
        { output: "minecraft:diamond_sword" },
        { output: "minecraft:diamond_pickaxe" },
        { output: "minecraft:diamond_hoe" },
        { output: "minecraft:diamond_shovel" },
        { output: "minecraft:diamond_axe" },
        { output: "minecraft:wooden_sword" },
        { output: "minecraft:wooden_pickaxe" },
        { output: "minecraft:wooden_hoe" },
        { output: "minecraft:wooden_shovel" },
        { output: "minecraft:wooden_axe" },
        { output: "minecraft:stone_sword" },
        { output: "minecraft:stone_pickaxe" },
        { output: "minecraft:stone_hoe" },
        { output: "minecraft:stone_shovel" },
        { output: "minecraft:stone_axe" },
        { output: "minecraft:furnace" },
        { output: "minecraft:blast_furnace" },
        { output: "minecraft:bow" },
        { output: "minecraft:crossbow" },
        { output: "minecraft:arrow" },
        { output: "minecraft:shulker_shell" },
        { output: "minecraft:ender_eye" },
        { output: "minecraft:diamond_ore" },
        { output: "minecraft:emerald_ore" },
        { output: "minecraft:blackstone" },
        { output: "minecraft:gold_nugget", input: "minecraft:soul_sand" },
        { output: "minecraft:gravel", input: "techreborn:granite_dust" },
        { output: "minecraft:gold_nugget", input: "minecraft:soul_soil" },
        {output: "ae2:silicon"},
        {id: "techreborn:centrifuge/redstone" }, // remove other version of centrifuging certus quartz
        { input: "minecraft:crying_obsidian" },
        {
            input: "minecraft:copper_block",
            type: "minecraft:stonecutting",
        },

        //dispenser recipe
        { output: "minecraft:dispenser" },
    ].forEach((recipe) => {
        event.remove(recipe);
    });

    // YTTR Project Table
    event.remove({ output: "yttr:project_table" });
    const colors = [
        "white",
        "orange",
        "magenta",
        "light_blue",
        "yellow",
        "lime",
        "pink",
        "gray",
        "light_gray",
        "cyan",
        "purple",
        "blue",
        "brown",
        "green",
        "red",
        "black",
    ];
    colors.forEach((color) => event.remove({ output: `yttr:${color}_project_table` }));

    // Define the array of materials
    const materials = [
        "techreborn:lead",
        "techreborn:bronze",
        "techreborn:steel",
        "techreborn:tin",
        "techreborn:copper",
        "techreborn:steel",
        "techreborn:silver",
    ];

    // Define a function to remove all recipes with a given material
    function removeRecipes(material) {
        event.remove({ output: material + "_helmet" });
        event.remove({ output: material + "_chestplate" });
        event.remove({ output: material + "_leggings" });
        event.remove({ output: material + "_boots" });
        event.remove({ output: material + "_axe" });
        event.remove({ output: material + "_sword" });
        event.remove({ output: material + "_pickaxe" });
        event.remove({ output: material + "_hoe" });
        event.remove({ output: material + "_shovel" });
    }

    const metal = [
        "tungstensteel",
        "chrome",
        "titanium",
        "nickel",
        "refined_iron",
        "bronze",
        "aluminum",
        "tungsten",
        "platinum",
        "brass",
        "zinc",
        "nickel",
        "platinum"
    ];

    metal.forEach((metal) => {
        event.remove({ output: `techreborn:${metal}_plate` });
        event.remove({ output: `techreborn:${metal}_ingot` });
        event.remove({ output: `techreborn:${metal}_storage_block` });
        event.remove({ output: `techreborn:${metal}_storage_block_stairs` });
        event.remove({ output: `techreborn:${metal}_storage_block_slab` });
        event.remove({ output: `techreborn:${metal}_storage_block_wall` });
        event.remove({ output: `techreborn:${metal}_dust` });
        event.remove({ output: `techreborn:${metal}_small_dust` });
        event.remove({ output: `techreborn:${metal}_nugget` });
    });

    const dusts = [
        ["almandine", false],
        ["amethyst", true],
        ["andesite", true],
        ["andradite", false],
        ["ashes", true],
        ["basalt", true],
        ["bauxite", false],
        ["bronze", false],
        ["calcite", true],
        ["charcoal", true],
        ["cinnabar", false],
        ["clay", true],
        ["coal", true],
        ["dark_ashes", true],
        ["diamond", true],
        ["diorite", true],
        ["electrum", true],
        ["emerald", false],
        ["ender_eye", false],
        ["ender_pearl", false], // ae2 ender dust replaces it
        ["endstone", false],
        ["flint", true],
        ["galena", true],
        ["granite", true],
        ["grossular", false],
        ["invar", false],
        ["lazurite", true],
        ["magnesium", false],
        ["manganese", false],
        ["marble", false],
        ["netherrack", true],
        ["nickel", false],
        ["obsidian", false],
        ["olivine", true],
        ["phosphorous", false],
        ["pyrite", false],
        ["pyrope", false],
        ["quartz", false],
        ["saltpeter", true],
        ["saw", true],
        ["sodalite", false],
        ["spessartine", false],
        ["sphalerite", false],
        ["steel", true],
        ["sulfur", true],
        ["uvarovite", false],
        ["glowstone", true],
        ["redstone", true]
    ]
    dusts.forEach((dust) => {
        if (!dust[1]) {
            event.remove({output: `techreborn:${dust[0]}_dust`});
        }
        event.remove({output: `techreborn:${dust[0]}_small_dust`});
    });
});
