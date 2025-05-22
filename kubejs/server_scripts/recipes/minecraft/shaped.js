(function shapedRecipes() {
  onEvent("recipes", (event) => {
    ironAndDiamondRecipes(event);
    astralSignalsRecipes(event);

    /**
     * @typedef ShapedRecipe
     * @property {Internal.ItemStackJS_} output
     * @property {Helper.Pattern} pattern
     * @property {{[key: string]: Internal.IngredientJS_}} key
     */

    /** @type {ShapedRecipe[]} */
    const shapedRecipes = [
      {
        output: "createastral:andesite_alloy_block",
        pattern: ["AAA", "AAA", "AAA"],
        key: { A: "create:andesite_alloy" },
      },
      {
        output: Item.of("create:andesite_alloy", 9),
        pattern: ["A"],
        key: { A: "createastral:andesite_alloy_block" },
      },
      {
        output: "createastral:charcoal_block",
        pattern: ["AAA", "AAA", "AAA"],
        key: { A: "minecraft:charcoal" },
      },
      {
        output: Item.of("minecraft:charcoal", 9),
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
        output: Item.of("minecraft:chest", 4),
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
          P: "#minecraft:planks",
          S: "#minecraft:wooden_slabs",
          T: "#minecraft:wooden_trapdoors",
        },
      },
      // Old school slab and stairs
      {
        output: Item.of("createastral:blast-resistant_concrete_slab", 6),
        pattern: ["AAA"],
        key: {
          A: "createastral:blast-resistant_concrete",
        },
      },
      {
        output: Item.of("createastral:blast-resistant_concrete_stairs", 4),
        pattern: ["A  ", "AA ", "AAA"],
        key: {
          A: "createastral:blast-resistant_concrete",
        },
      },
      {
        output: "tconstruct:seared_fuel_tank",
        pattern: ["CCC", "BDB", "AAA"],
        key: {
          A: "tconstruct:seared_bricks",
          B: "#c:glass",
          C: "create:brass_sheet",
          D: "create:fluid_tank",
        },
      },
      {
        output: "tconstruct:seared_fuel_gauge",
        pattern: ["CAC", "BDB", "ACA"],
        key: {
          A: "tconstruct:seared_bricks",
          B: "#c:glass",
          C: "create:brass_sheet",
          D: "create:fluid_tank",
        },
      },
      {
        output: "tconstruct:seared_ingot_tank",
        pattern: ["ACA", "ADA", "ACA"],
        key: {
          A: "tconstruct:seared_bricks",
          C: "create:brass_sheet",
          D: "create:fluid_tank",
        },
      },
      {
        output: "tconstruct:seared_ingot_gauge",
        pattern: ["AAA", "CDC", "AAA"],
        key: {
          A: "tconstruct:seared_bricks",
          C: "create:brass_sheet",
          D: "create:fluid_tank",
        },
      },
      {
        output: "tconstruct:seared_melter",
        pattern: ["CWC", "SSS", "CSC"],
        key: {
          S: "tconstruct:seared_bricks",
          W: "create:fluid_tank",
          C: "create:zinc_ingot",
        },
      },
      {
        output: "minecraft:bow",
        pattern: ["CCA", " BC"],
        key: {
          A: "minecraft:gunpowder",
          B: "create:analog_lever",
          C: "minecraft:copper_ingot",
        },
      },
      {
        output: Item.of("minecraft:arrow", 8),
        pattern: ["B", "B", "A"],
        key: {
          A: "minecraft:gunpowder",
          B: "minecraft:copper_ingot",
        },
      },
      {
        output: "ad_astra:oxygen_loader",
        pattern: ["BAB", "DED", "BCB"],
        key: {
          A: "ad_astra:oxygen_tank",
          B: "#c:iron_plates",
          C: "ad_astra:engine_fan",
          D: "create:smart_fluid_pipe",
          E: "create:fluid_tank",
        },
      },
      {
        output: "automobility:auto_mechanic_table",
        pattern: ["DBD", "ACA", "AEA"],
        key: {
          A: "create:railway_casing",
          B: "create:crafting_blueprint",
          C: "projecttable:projecttable",
          D: "create:smart_fluid_pipe",
          E: "create:electron_tube",
        },
      },
      {
        output: "minecraft:furnace",
        pattern: ["AAA", "A A", "SSS"],
        key: {
          S: "#c:raw_materials",
          A: "minecraft:cobblestone",
        },
      },
      {
        output: "minecraft:furnace",
        pattern: ["AAA", "A A", "SSS"],
        key: {
          S: "#c:ingots",
          A: "minecraft:cobblestone",
        },
      },
      {
        output: "minecraft:blast_furnace",
        pattern: ["AAA", "ASA", "BBB"],
        key: {
          S: "minecraft:furnace",
          A: "minecraft:iron_ingot",
          B: "minecraft:stone",
        },
      },
      {
        output: Item.of("doodads:platform", 8),
        pattern: [" A ", "BBB", " A "],
        key: {
          A: "create:andesite_alloy",
          B: "#minecraft:planks",
        },
      },
      {
        output: "doodads:rubber_band",
        pattern: ["B", "A", "B"],
        key: {
          A: "minecraft:slime_ball",
          B: "minecraft:string",
        },
      },
      {
        output: "doodads:blossom_belt",
        pattern: [" A ", "ABA", " A "],
        key: {
          A: "create:tree_fertilizer",
          B: "minecraft:string",
        },
      },
      {
        output: "doodads:shulker_aglet",
        pattern: ["ABA"],
        key: {
          A: "minecraft:shulker_shell",
          B: "minecraft:end_stone",
        },
      },
      {
        output: "doodads:cactus_ring",
        pattern: ["AAA", "ABA", "AAA"],
        key: {
          A: "minecraft:cactus",
          B: "create:golden_sheet",
        },
      },
      {
        output: "doodads:loggers_glove",
        pattern: [" A ", "ABA", "ABA"],
        key: {
          A: "minecraft:leather",
          B: "#minecraft:logs",
        },
      },
      {
        output: "doodads:soggy_glove",
        pattern: [" A ", "ABA", "ABA"],
        key: {
          A: "minecraft:leather",
          B: "minecraft:wet_sponge",
        },
      },
      {
        output: "doodads:paintbrush",
        pattern: ["B", "A", "A"],
        key: {
          A: "minecraft:stick",
          B: "catwalksinc:paint_roller",
        },
      },
      {
        output: "automobility:automobile_assembler",
        pattern: ["AAA", " B ", "BBB"],
        key: {
          A: "techreborn:tin_ingot",
          B: "create:brass_ingot",
        },
      },
      {
        output: "extended_drawers:single_drawer",
        pattern: ["AAA", "ABA", "ACA"],
        key: {
          A: "#minecraft:planks",
          B: "minecraft:barrel",
          C: "minecraft:paper",
        },
      },
      {
        output: "extended_drawers:double_drawer",
        pattern: ["AAA", "CBC", "AAA"],
        key: {
          A: "#minecraft:planks",
          B: "minecraft:barrel",
          C: "minecraft:paper",
        },
      },
      {
        output: "extended_drawers:quad_drawer",
        pattern: ["ACA", "CBC", "ACA"],
        key: {
          A: "#minecraft:planks",
          B: "minecraft:barrel",
          C: "minecraft:paper",
        },
      },
      {
        output: "extended_drawers:upgrade_frame",
        pattern: ["AB", "BA"],
        key: {
          A: ["tconstruct:pattern", "techreborn:wood_plate"],
          B: "create:andesite_alloy",
        },
      },
      {
        output: "createastral:t1_upgrade",
        pattern: ["ABA", "BCB", "ABA"],
        key: {
          A: "techreborn:rubber",
          B: "create:sturdy_sheet",
          C: "extended_drawers:upgrade_frame",
        },
      },
      {
        output: "createastral:t2_upgrade",
        pattern: ["ABA", "BCB", "ABA"],
        key: {
          A: "tconstruct:seared_brick",
          B: "create:iron_sheet",
          C: "createastral:t1_upgrade",
        },
      },
      {
        output: "createastral:t3_upgrade",
        pattern: ["ABA", "BCB", "ABA"],
        key: {
          A: "ae2:fluix_block",
          B: "create:brass_sheet",
          C: "createastral:t2_upgrade",
        },
      },
      {
        output: "createastral:t4_upgrade",
        pattern: ["ABA", "DCD", "ABA"],
        key: {
          A: "techreborn:lead_plate",
          B: "create:integrated_circuit",
          C: "minecraft:gold_block",
          D: "createastral:t3_upgrade",
        },
      },
      {
        output: "createastral:t5_upgrade",
        pattern: ["ABA", "DCD", "ABA"],
        key: {
          A: "yttr:yttrium_ingot",
          B: "techreborn:electronic_circuit",
          C: "ad_astra:calorite_block",
          D: "createastral:t4_upgrade",
        },
      },
      {
        output: "createastral:t6_upgrade",
        pattern: ["ABA", "CED", "ABA"],
        key: {
          A: "createastral:t5_upgrade",
          B: "techreborn:industrial_circuit",
          C: "create:shadow_steel",
          D: "create:refined_radiance",
          E: "createastral:subatomic_ingot",
        },
      },
      {
        output: "extended_drawers:downgrade",
        pattern: ["ABA", "BDB", "ABA"],
        key: {
          A: "#minecraft:planks",
          B: "minecraft:flint",
          D: "extended_drawers:upgrade_frame",
        },
      },
      {
        output: "extended_drawers:lock",
        pattern: [" A ", "ABA", "CCC"],
        key: {
          A: "create:andesite_alloy",
          B: "create:iron_sheet",
          C: "create:golden_sheet",
        },
      },
      {
        output: Item.of("extended_drawers:connector", 4),
        pattern: ["BBB", "BAB", "BBB"],
        key: {
          A: "techreborn:tin_plate",
          B: "techreborn:wood_plate",
        },
      },
      {
        output: Item.of("ae2:wireless_booster", 2),
        pattern: ["SCE", "III"],
        key: {
          S: "ae2:fluix_dust",
          C: "ae2:charged_certus_quartz_crystal",
          E: "ae2:ender_dust",
          I: "techreborn:silver_plate",
        },
      },
      {
        output: "minecraft:shulker_shell",
        pattern: ["BBB", "BAB", "BBB"],
        key: {
          A: "minecraft:nautilus_shell",
          B: "minecraft:popped_chorus_fruit",
        },
      },
      {
        output: Item.of("create:cogwheel", 3),
        pattern: ["AB"],
        key: {
          A: "create:andesite_alloy",
          B: "createastral:bronze_sheet",
        },
      },
      {
        output: "create:large_cogwheel",
        pattern: ["ABA"],
        key: {
          A: "create:cogwheel",
          B: "createastral:bronze_sheet",
        },
      },
      {
        output: "yttr:wasteland_dirt",
        pattern: ["ABA"],
        key: {
          A: "yttr:rubble",
          B: "minecraft:sand",
        },
      },
      {
        output: "yttr:wasteland_log",
        pattern: ["ABA"],
        key: {
          A: "yttr:rubble",
          B: "minecraft:oak_log",
        },
      },
      {
        output: "yttr:wasteland_stone",
        pattern: ["ABA"],
        key: {
          A: "yttr:rubble",
          B: "minecraft:stone",
        },
      },
      {
        output: "createastral:promethium_atomic_battery",
        pattern: ["CAC", "BDB", "CEC"],
        key: {
          A: "techreborn:lithium_ion_battery",
          B: "techreborn:data_storage_chip",
          C: "yttr:armor_plating",
          D: "createastral:subatomic_ingot",
          E: "yttr:promethium_glob",
        },
      },
      {
        output: Item.of("dustrial_decor:sheet_metal_door", 3),
        pattern: ["AA", "AA", "AA"],
        key: {
          A: "dustrial_decor:sheet_metal",
        },
      },
      {
        output: Item.of("dustrial_decor:rusty_iron_door", 3),
        pattern: ["AA", "AA", "AA"],
        key: {
          A: "dustrial_decor:rusty_iron_ingot",
        },
      },
      {
        output: Item.of("dustrial_decor:rusty_sheet_metal_treading", 6),
        pattern: ["AB", "BA"],
        key: {
          A: "dustrial_decor:rusty_sheet_metal",
          B: "dustrial_decor:rusty_iron_nugget",
        },
      },
      {
        output: "createastral:andesite_compound",
        pattern: ["BBB", "AAA", "CCC"],
        key: {
          A: "create:zinc_nugget",
          B: "minecraft:andesite",
          C: "minecraft:clay_ball",
        },
      },
      {
        output: "createastral:andesite_compound",
        pattern: ["BBB", "AAA", "CCC"],
        key: {
          A: "#create:alloy_nuggets",
          B: "minecraft:andesite",
          C: "minecraft:clay_ball",
        },
      },
      {
        output: "minecraft:experience_bottle",
        pattern: ["AAA", "ABA", "AAA"],
        key: {
          A: "create:experience_nugget",
          B: "minecraft:glass_bottle",
        },
      },
      {
        output: "minecraft:leather_horse_armor",
        pattern: ["  A", "AAA", "ABA"],
        key: {
          A: "minecraft:leather",
          B: "minecraft:string",
        },
      },
      {
        output: "minecraft:iron_horse_armor",
        pattern: ["  A", "ABA", "ACA"],
        key: {
          A: "create:iron_sheet",
          B: "minecraft:leather_horse_armor",
          C: "minecraft:string",
        },
      },
      {
        output: "minecraft:golden_horse_armor",
        pattern: ["  A", "ABA", "ACA"],
        key: {
          A: "create:golden_sheet",
          B: "minecraft:iron_horse_armor",
          C: "minecraft:string",
        },
      },
      {
        output: "minecraft:diamond_horse_armor",
        pattern: ["  A", "ABA", "ACA"],
        key: {
          A: "minecraft:diamond",
          B: "minecraft:golden_horse_armor",
          C: "minecraft:string",
        },
      },
      {
        output: "minecraft:heart_of_the_sea",
        pattern: ["ABA", "CDC", "ABA"],
        key: {
          A: "minecraft:glowstone",
          B: "minecraft:lapis_block",
          C: "techreborn:silver_ingot",
          D: "minecraft:diamond_block",
        },
      },
      {
        output: "minecraft:sponge",
        pattern: ["ABA", "BBB", "ABA"],
        key: {
          A: "techreborn:sponge_piece",
          B: "#c:slimeballs",
        },
      },
      {
        output: "minecraft:dispenser",
        pattern: ["AB ", "ACB", "AB "],
        key: {
          A: "minecraft:string",
          B: "minecraft:stick",
          C: "minecraft:dropper",
        },
      },
      {
        output: "chipped:mechanist_workbench",
        pattern: ["A  ", "BCC", "DED"],
        key: {
          A: "minecraft:redstone_torch",
          B: "minecraft:piston",
          C: "#minecraft:wooden_slabs",
          D: "#minecraft:logs",
          E: "minecraft:tnt",
        },
      },
      {
        output: Item.of("createdeco:andesite_door", 3),
        pattern: ["AA", "AA", "AA"],
        key: {
          A: "create:andesite_alloy",
        },
      },
      {
        output: Item.of("createdeco:brass_door", 3),
        pattern: ["AA", "AA", "AA"],
        key: {
          A: "create:brass_ingot",
        },
      },
      {
        output: Item.of("createdeco:copper_door", 3),
        pattern: ["AA", "AA", "AA"],
        key: {
          A: "minecraft:copper_ingot",
        },
      },
      {
        output: Item.of("createdeco:zinc_door", 3),
        pattern: ["AA", "AA", "AA"],
        key: {
          A: "create:zinc_ingot",
        },
      },
      {
        output: "minecraft:bundle",
        pattern: [" S ", "A A", " A "],
        key: {
          S: "minecraft:string",
          A: "minecraft:leather",
        },
      },
      {
        output: "createastral:sturdy_sheet_block",
        pattern: ["AA", "AA"],
        key: {
          A: "create:sturdy_sheet",
        },
      },
      {
        output: "createastral:bronze_block",
        pattern: ["AAA", "AAA", "AAA"],
        key: {
          A: "createastral:bronze_ingot",
        },
      },
      {
        output: "ad_astra:steel_block",
        pattern: ["AAA", "AAA", "AAA"],
        key: {
          A: "ad_astra:steel_ingot",
        },
      },
      {
        output: "createastral:copper_plating",
        pattern: ["AA", "AA"],
        key: {
          A: "create:copper_sheet",
        },
      },
      {
        output: "createastral:copper_heating_coil",
        pattern: ["AAA", "AAA", "AAA"],
        key: {
          A: "createaddition:copper_spool",
        },
      },
      {
        output: "createastral:refined_radiance_block",
        pattern: ["AAA", "AAA", "AAA"],
        key: {
          A: "create:refined_radiance",
        },
      },
      {
        output: Item.of("minecraft:torch", 10),
        pattern: ["A", "B"],
        key: {
          A: "naturalist:glow_goop",
          B: "minecraft:stick",
        },
      },
      {
        output: "techreborn:synthetic_redstone_crystal",
        pattern: ["AB", "BA"],
        key: {
          A: "minecraft:red_dye",
          B: "#c:glass",
        },
      },
      {
        output: "createastral:synthetic_slime_block",
        pattern: ["SSS", "SSS", "SSS"],
        key: {
          S: "createastral:synthetic_slime",
        },
      },
      {
        output: "createastral:cheese_bricks",
        pattern: ["SS", "SS"],
        key: {
          S: "ad_astra:cheese",
        },
      },
      {
        output: Item.of("minecraft:mycelium", 2),
        pattern: ["CD", "DC"],
        key: {
          C: "ad_astra:cheese",
          D: "minecraft:dirt",
        },
      },
      {
        output: "techreborn:lightning_rod",
        pattern: ["SRS", "DBD", "CCC"],
        key: {
          S: "techreborn:silver_plate",
          R: "minecraft:lightning_rod",
          D: "techreborn:diamond_plate",
          B: "techreborn:red_cell_battery",
          C: "techreborn:basic_machine_casing",
        },
      },
      {
        output: "techreborn:refined_iron_fence",
        pattern: ["BSB", "BSB"],
        key: {
          B: "minecraft:iron_block",
          S: "createaddition:iron_rod",
        },
      },
      {
        output: Item.of("custommachinery:custom_machine_item", {
          machine: "createastral:electrolyser",
        }),
        pattern: ["CCC", "DED", "CCC"],
        key: {
          D: "createaddition:copper_wire",
          E: "phonos:redstone_chip",
          C: "create:copper_casing",
        },
      },
      {
        output: Item.of("custommachinery:custom_machine_item", {
          machine: "createastral:stone_growth_chamber",
        }),
        pattern: ["CCC", "DED", "CCC"],
        key: {
          D: "create:copper_sheet",
          E: "minecraft:water_bucket",
          C: "create:copper_casing",
        },
      },
      {
        output: Item.of("custommachinery:custom_machine_item", {
          machine: "createastral:distillery",
        }),
        pattern: ["CCC", "DED", "BBB"],
        key: {
          B: "create:fluid_tank",
          C: "techreborn:lead_plate",
          D: "techreborn:industrial_centrifuge",
          E: "techreborn:advanced_machine_frame",
        },
      },
      {
        output: Item.of("custommachinery:custom_machine_item", {
          machine: "createastral:shimmer_refinery",
        }),
        pattern: ["BDB", "CEC", "BDB"],
        key: {
          B: "yttr:armor_plating",
          C: "techreborn:industrial_circuit",
          D: "techreborn:machine_parts",
          E: "createastral:shimmer_amplifier",
        },
      },
      {
        output: Item.of("custommachinery:custom_machine_item", {
          machine: "createastral:gas_mixer",
        }),
        pattern: ["PCP", "WTW", "ESE"],
        key: {
          P: "ad_astra:ostrum_plate",
          C: "techreborn:electronic_circuit",
          W: "create:whisk",
          T: "create:fluid_tank",
          E: "techreborn:extractor",
          S: "create:shaft",
        },
      },
      {
        output: Item.of("custommachinery:custom_machine_item", {
          machine: "createastral:slime_furnace",
        }),
        pattern: ["ASA", "BFB", "CCC"],
        key: {
          A: "create:andesite_alloy",
          S: "create:shaft",
          B: "#c:slimeballs",
          F: "techreborn:iron_furnace",
          C: "#tconstruct:congealed_slime",
        },
      },
      {
        output: "techreborn:industrial_electrolyzer",
        pattern: ["ABA", "CDC", "ABA"],
        key: {
          A: "createastral:copper_heating_coil",
          B: "techreborn:electronic_circuit",
          C: "createaddition:copper_wire",
          D: "techreborn:advanced_machine_frame",
        },
      },
      {
        output: "techreborn:industrial_sawmill",
        pattern: ["ABA", "CDC", "EFG"],
        key: {
          A: "techreborn:lead_plate",
          B: "techreborn:diamond_saw_blade",
          C: "create:belt_connector",
          D: "create:mechanical_saw",
          E: "techreborn:electronic_circuit",
          F: "techreborn:advanced_machine_frame",
          G: "create:rotation_speed_controller",
        },
      },
      {
        output: "techreborn:vacuum_freezer",
        pattern: ["AAA", "BCB", "DED"],
        key: {
          A: "techreborn:lead_plate",
          B: "techreborn:electronic_circuit",
          C: "techreborn:advanced_machine_frame",
          D: "minecraft:blue_ice",
          E: "tconstruct:seared_basin",
        },
      },
      {
        output: "techreborn:solid_canning_machine",
        pattern: ["ABA", "CDC", "EBE"],
        key: {
          A: "create:sturdy_sheet",
          B: "create:deployer",
          C: "create:belt_connector",
          D: "techreborn:basic_machine_frame",
          E: "create:integrated_circuit",
        },
      },
      {
        output: "techreborn:greenhouse_controller",
        pattern: ["ABA", "CDC", "AEA"],
        key: {
          A: "create:sturdy_sheet",
          B: "create:deployer",
          C: "create:mechanical_harvester",
          D: "create:mechanical_bearing",
          E: "techreborn:basic_machine_frame",
        },
      },
      {
        output: "techreborn:electric_furnace",
        pattern: ["ABA", "CDC", "AEA"],
        key: {
          A: "create:sturdy_sheet",
          B: "create:integrated_circuit",
          C: "create:encased_fan",
          D: "minecraft:furnace",
          E: "techreborn:basic_machine_frame",
        },
      },
      {
        output: "techreborn:block_placer",
        pattern: ["SCS", "SDS", "SFS"],
        key: {
          S: "create:sturdy_sheet",
          C: "create:integrated_circuit",
          D: "create:deployer",
          F: "techreborn:basic_machine_frame",
        },
      },
      {
        output: "techreborn:block_breaker",
        pattern: ["SCS", "SDS", "SFS"],
        key: {
          S: "create:sturdy_sheet",
          C: "create:integrated_circuit",
          D: "create:mechanical_drill",
          F: "techreborn:basic_machine_frame",
        },
      },
      {
        output: "techreborn:player_detector",
        pattern: ["SCS", "TRT", "SFS"],
        key: {
          S: "create:sturdy_sheet",
          C: "create:integrated_circuit",
          R: "create:redstone_link",
          F: "techreborn:basic_machine_frame",
          T: "minecraft:redstone_torch",
        },
      },
      {
        output: "techreborn:chemical_reactor",
        pattern: ["ABA", "CDC", "AEA"],
        key: {
          A: "create:sturdy_sheet",
          B: "create:mechanical_mixer",
          C: "create:fluid_tank",
          D: "techreborn:basic_machine_frame",
          E: "create:integrated_circuit",
        },
      },
      {
        output: "techreborn:auto_crafting_table",
        pattern: ["ABA", "ACA", "ADA"],
        key: {
          A: "create:mechanical_crafter",
          B: "minecraft:barrel",
          C: "techreborn:basic_machine_frame",
          D: "techreborn:electronic_circuit",
        },
      },
      {
        output: "techreborn:alloy_smelter",
        pattern: ["ABA", "CDC", "EFE"],
        key: {
          A: "create:sturdy_sheet",
          B: "create:mechanical_mixer",
          C: "create:basin",
          D: "techreborn:basic_machine_frame",
          E: "create:integrated_circuit",
          F: "create:blaze_burner",
        },
      },
      {
        output: "techreborn:extractor",
        pattern: ["AAA", "BCB", "ADA"],
        key: {
          A: "create:sturdy_sheet",
          B: "create:mechanical_pump",
          C: "techreborn:basic_machine_frame",
          D: "create:integrated_circuit",
        },
      },
      {
        output: "travelersbackpack:standard",
        pattern: ["ABC", "DED", "FBF"],
        key: {
          A: "projecttable:projecttable",
          B: "campanion:leather_pouch",
          C: "campanion:sleeping_bag",
          D: "create:fluid_tank",
          E: "minecraft:leather_chestplate",
          F: "farmersdelight:rope",
        },
      },
      {
        output: "campanion:sleeping_bag",
        pattern: ["AAA", "BCB"],
        key: {
          A: "campanion:wool_tarp",
          B: "farmersdelight:canvas_rug",
          C: "minecraft:string",
        },
      },
      {
        output: "travelersbackpack:hose",
        pattern: ["ABB", " CB", "  B"],
        key: {
          A: "travelersbackpack:hose_nozzle",
          B: "techreborn:rubber",
          C: "minecraft:green_dye",
        },
      },
      {
        output: "travelersbackpack:hose_nozzle",
        pattern: [" A ", "BCB", "DDD"],
        key: {
          A: "create:iron_sheet",
          B: "create:golden_sheet",
          C: "create:cogwheel",
          D: "create:andesite_alloy",
        },
      },
      {
        output: "campanion:tent_bag",
        pattern: [" A ", "ABA", " A "],
        key: {
          A: "farmersdelight:rope",
          B: "campanion:leather_pouch",
        },
      },
      {
        output: "ad_astra:moon_globe",
        pattern: ["BBB", "BA ", "BC "],
        key: {
          A: "ad_astra:moon_sand",
          B: "createaddition:gold_rod",
          C: "minecraft:light_weighted_pressure_plate",
        },
      },
      {
        output: "ad_astra:earth_globe",
        pattern: ["BBB", "BA ", "BC "],
        key: {
          A: "minecraft:grass_block",
          B: "createaddition:gold_rod",
          C: "minecraft:light_weighted_pressure_plate",
        },
      },
      {
        output: "ad_astra:mars_globe",
        pattern: ["BBB", "BA ", "BC "],
        key: {
          A: "ad_astra:mars_stone",
          B: "createaddition:gold_rod",
          C: "minecraft:light_weighted_pressure_plate",
        },
      },
      {
        output: "ad_astra:mercury_globe",
        pattern: ["BBB", "BA ", "BC "],
        key: {
          A: "ad_astra:mercury_stone",
          B: "createaddition:gold_rod",
          C: "minecraft:light_weighted_pressure_plate",
        },
      },
      {
        output: "ad_astra:venus_globe",
        pattern: ["BBB", "BA ", "BC "],
        key: {
          A: "ad_astra:venus_stone",
          B: "createaddition:gold_rod",
          C: "minecraft:light_weighted_pressure_plate",
        },
      },
      {
        output: "ad_astra:glacio_globe",
        pattern: ["BBB", "BA ", "BC "],
        key: {
          A: "ad_astra:glacio_stone",
          B: "createaddition:gold_rod",
          C: "minecraft:light_weighted_pressure_plate",
        },
      },
      {
        output: "passivepiglins:piglin_coin",
        pattern: ["BA", "AB"],
        key: {
          A: "create:golden_sheet",
          B: "minecraft:piglin_banner_pattern",
        },
      },
      {
        output: "yttr:flopper",
        pattern: ["AA ", " BA", "AA "],
        key: {
          A: "create:iron_sheet",
          B: "minecraft:chest",
        },
      },
      {
        output: "yttr:chute",
        pattern: ["A A", "A A", "A A"],
        key: {
          A: "create:iron_sheet",
        },
      },
      {
        output: "yttr:bedrock_smasher",
        pattern: ["AAA", " B ", " C "],
        key: {
          A: "ad_astra:calorite_plate",
          B: "ad_astra:calorite_ingot",
          C: "techreborn:diamond_plate",
        },
      },
      {
        output: Item.of("yttr:lamp", 4),
        pattern: ["ABA", "BCB", "ABA"],
        key: {
          A: "minecraft:iron_ingot",
          B: "minecraft:glass_pane",
          C: "minecraft:redstone_lamp",
        },
      },
      {
        output: "ad_astra:strophar_cap",
        pattern: ["AA", "AA"],
        key: {
          A: "ad_astra:strophar_mushroom",
        },
      },
      {
        output: Item.of("doodads:asphalt_stair", 4),
        pattern: ["A  ", "AA ", "AAA"],
        key: {
          A: "doodads:asphalt",
        },
      },
      {
        output: Item.of("doodads:asphalt_slab", 6),
        pattern: ["AAA"],
        key: {
          A: "doodads:asphalt",
        },
      },
      {
        output: "chipped:carpenters_table",
        pattern: ["  y", "axa", "bca"],
        key: {
          x: "minecraft:crafting_table",
          y: "minecraft:iron_ingot",
          a: "#minecraft:logs",
          b: "minecraft:flint",
          c: "#minecraft:planks",
        },
      },
      {
        output: "chipped:alchemy_bench",
        pattern: [" b ", "axa", "aya"],
        key: {
          x: "minecraft:crafting_table",
          y: "vinery:fermentation_barrel",
          a: "#minecraft:wooden_slabs",
          b: "drinkbeer:beer_barrel",
        },
      },
      {
        output: "create:copper_backtank",
        pattern: ["AGA", "PBP", " P "],
        key: {
          G: "create:shaft",
          A: "create:andesite_alloy",
          B: "minecraft:copper_block",
          P: "techreborn:rubber",
        },
      },
      {
        output: "create:belt_connector",
        pattern: ["DDD", "EEE"],
        key: {
          D: "minecraft:dried_kelp",
          E: "techreborn:rubber",
        },
      },
      {
        output: "create:brass_hand",
        pattern: [" A ", "BBB", " B "],
        key: {
          A: "create:andesite_alloy",
          B: "techreborn:rubber",
        },
      },
      {
        output: "create:controls",
        pattern: ["B", "C", "I"],
        key: {
          I: "create:zinc_block",
          B: "minecraft:lever",
          C: "create:railway_casing",
        },
      },
      {
        output: Item.of("create:fluid_pipe", 2),
        pattern: [" S ", "CCC", " S "], // horizontal
        key: {
          S: "#c:plates/copper",
          C: "techreborn:rubber",
        },
      },
      {
        output: Item.of("create:fluid_pipe", 2),
        pattern: [" C ", "SCS", " C "], // vertical
        key: {
          S: "#c:plates/copper",
          C: "techreborn:rubber",
        },
      },
      {
        output: "create:fluid_tank",
        pattern: [" B ", "BCB", " B "],
        key: {
          B: "create:copper_sheet",
          C: "#c:barrels/wooden",
        },
      },
      {
        output: "create:goggles",
        pattern: [" S ", "GPG"],
        key: {
          G: "#c:glass",
          P: "#c:plates/gold",
          S: "techreborn:rubber",
        },
      },
      {
        output: Item.of("create:andesite_funnel", 2),
        pattern: ["A", "K"],
        key: {
          A: "create:andesite_alloy",
          K: "techreborn:rubber",
        },
      },
      {
        output: Item.of("create:andesite_tunnel", 2),
        pattern: ["AA", "KK"],
        key: {
          A: "create:andesite_alloy",
          K: "techreborn:rubber",
        },
      },
      {
        output: Item.of("create:brass_funnel", 2),
        pattern: ["E", "A", "K"],
        key: {
          A: "#c:ingots/brass",
          K: "techreborn:rubber",
          E: "create:electron_tube",
        },
      },
      {
        output: Item.of("create:brass_tunnel", 2),
        pattern: ["E ", "AA", "KK"],
        key: {
          A: "#c:ingots/brass",
          K: "techreborn:rubber",
          E: "create:electron_tube",
        },
      },
      {
        output: "extractinator:extractinator",
        pattern: ["H  ", "PRA", "CBA"],
        key: {
          H: "minecraft:hopper",
          P: "minecraft:piston",
          C: "minecraft:cauldron",
          B: "minecraft:copper_block",
          R: "minecraft:redstone_block",
          A: "minecraft:chain",
        },
      },
      {
        output: "createbigcannons:wrought_iron_drop_mortar_end",
        pattern: ["B", "E"],
        key: {
          B: "minecraft:iron_bars",
          E: "createbigcannons:wrought_iron_cannon_end",
        },
      },
      {
        output: "createbigcannons:yaw_controller",
        pattern: [" S ", "GCG", " S "],
        key: {
          S: "create:shaft",
          C: "create:andesite_casing",
          G: "minecraft:gunpowder",
        },
      },
      {
        output: "immersive_aircraft:hull",
        pattern: ["LIL", "LIL", "LIL"],
        key: {
          L: "create:andesite_casing",
          I: "createaddition:iron_rod",
        },
      },
      {
        output: "immersive_aircraft:propeller",
        pattern: [" I ", "IPI", " I "],
        key: {
          I: "create:iron_sheet",
          P: "create:propeller",
        },
      },
      {
        output: "immersive_aircraft:sail",
        pattern: ["SSS", "SSS"],
        key: {
          S: "create:white_sail",
        },
      },
      {
        output: "reinfchest:diamond_chest",
        pattern: ["MMM", "MCM", "MMM"],
        key: {
          C: "reinfchest:gold_chest",
          M: "techreborn:diamond_plate",
        },
      },
      {
        output: "reinfchest:gold_chest",
        pattern: ["MMM", "MCM", "MMM"],
        key: {
          C: "reinfchest:iron_chest",
          M: "tconstruct:rose_gold_ingot",
        },
      },
      {
        output: "reinfchest:iron_chest",
        pattern: ["LLL", "MCM", "LLL"],
        key: {
          C: "reinfchest:copper_chest",
          M: "create:sturdy_sheet",
          L: "techreborn:rubber",
        },
      },
      {
        output: Item.of("tconstruct:gold_bars", 6),
        pattern: ["AAA", "AAA"],
        key: {
          A: "minecraft:gold_ingot",
        },
      },
      {
        output: "astralfoods:recovery_orb",
        pattern: [" S ", "THT", " O "],
        key: {
          S: "tconstruct:seared_brick",
          T: "ad_astra:oxygen_tank",
          H: "ad_astra:space_helmet",
          O: "ad_astra:oxygen_bucket",
        },
      },
    ];
    shapedRecipes.forEach((recipe) => {
      event.shaped(recipe.output, recipe.pattern, recipe.key);
    });
  });
  /** @param {Internal.RecipeEventJS} event */
  function ironAndDiamondRecipes(event) {
    /** @typedef {{[gearName in (typeof names)[number]]: Helper.Pattern}} FullKit */

    /** @satisfies {string[]} */
    const names = /** @type {const} */ ([
      "helmet",
      "chestplate",
      "leggings",
      "boots",
      "sword",
      "pickaxe",
      "shovel",
      "axe",
      "hoe",
    ]);

    /** @type {FullKit} */
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
    /**
     * @param {Internal.RecipeEventJS} event
     * @param {Internal.IngredientJS_} output
     * @param {Internal.IngredientJS_} material
     * @param {(typeof names)[number]} toolname
     */
    function createToolAndArmorRecipes(event, output, material, toolname) {
      let key = { S: material };
      if (fullkit[toolname].join("").includes("W")) key.W = "minecraft:stick";
      event.shaped(output, fullkit[toolname], key);
    }
    names.forEach((name) => {
      createToolAndArmorRecipes(event, `minecraft:iron_${name}`, "create:iron_sheet", name);
      createToolAndArmorRecipes(event, `createastral:copper_${name}`, "minecraft:copper_ingot", name);
      createToolAndArmorRecipes(event, `createastral:brass_${name}`, "create:brass_sheet", name);
    });
    /** @satisfies {string[]} */
    const armorNames = /** @type {const} */ (["helmet", "chestplate", "leggings", "boots"]);
    armorNames.forEach((name) => {
      event.shaped(`createastral:sturdy_${name}`, fullkit[name], {
        S: "createastral:sturdy_sheet_block",
      });
    });
    event.shaped("ad_astra:space_boots", ["S S", "BAB"], {
      S: "minecraft:white_wool",
      A: "create:copper_diving_boots",
      B: "create:sturdy_sheet",
    });
  }
  /** @param {Internal.RecipeEventJS} event */
  function astralSignalsRecipes(event) {
    /**
     * @typedef AstralSignalsRecipe
     * @property {{[key: string]: Internal.IngredientJS_}} inputs
     * @property {Helper.Pattern} shape
     * @property {Internal.ItemStackJS_} output
     */

    /** @type {AstralSignalsRecipe[]} */
    const astralSignalsRecipes = [
      {
        inputs: {
          A: "minecraft:copper_ingot",
          B: "create:electron_tube",
          C: "phonos:redstone_chip",
        },
        shape: ["AAA", "BCB", "AAA"],
        output: "astralsignals:data_drive_blank",
      },
      {
        inputs: {
          A: "minecraft:copper_ingot",
          B: "create:electron_tube",
          C: "phonos:redstone_chip",
          D: "minecraft:gold_nugget",
        },
        shape: ["BAB", "ACA", " D "],
        output: "astralsignals:dormant_signal_beacon",
      },
      {
        inputs: {
          A: "create:cut_tuff",
          B: "astralsignals:ancient_receiver",
          C: "create:andesite_casing",
          D: "create:andesite_scaffolding",
        },
        shape: [" B ", "ACA", "D D"],
        output: Item.of("custommachinery:custom_machine_item", { machine: "astralsignals:signal_coordinator" }),
      },
      {
        inputs: {
          A: "create:cut_tuff",
          B: "create:display_board",
          C: "create:electron_tube",
          D: "computercraft:disk_drive",
        },
        shape: [" C ", " B ", "ADA"],
        output: Item.of("custommachinery:custom_machine_item", { machine: "astralsignals:radio_telescope" }),
      },
      {
        inputs: {
          A: "create:cut_tuff",
          B: "create:cogwheel",
          C: "create:electron_tube",
          D: "create:andesite_casing",
          E: "computercraft:disk_drive",
        },
        shape: ["ABA", "CDC", "AEA"],
        output: Item.of("custommachinery:custom_machine_item", { machine: "astralsignals:analog_decryptor" }),
      },
      {
        inputs: {
          A: "create:cut_tuff",
          B: "astralsignals:parallel_processor",
          C: "techreborn:electronic_circuit",
          D: "create:copper_casing",
          E: "computercraft:disk_drive",
        },
        shape: ["ABA", "CDC", "AEA"],
        output: Item.of("custommachinery:custom_machine_item", { machine: "astralsignals:pp_decryptor" }),
      },
      {
        inputs: {
          A: "create:cut_tuff",
          B: "astralsignals:microphysical_probe",
          C: "techreborn:industrial_circuit",
          D: "create:railway_casing",
          E: "computercraft:disk_drive",
        },
        shape: ["ABA", "CDC", "AEA"],
        output: Item.of("custommachinery:custom_machine_item", { machine: "astralsignals:mp_decryptor" }),
      },
      {
        inputs: {
          A: "create:cut_tuff",
          B: "create:mechanical_press",
          C: "create:electron_tube",
          D: "computercraft:disk_drive",
          E: "create:andesite_casing",
        },
        shape: ["ABA", "CDC", "AEA"],
        output: Item.of("custommachinery:custom_machine_item", { machine: "astralsignals:vinyl_printer" }),
      },
      {
        inputs: {
          A: "create:electron_tube",
          B: "computercraft:disk_drive",
          C: "create:cut_tuff",
        },
        shape: ["A A", "CBC", "CCC"],
        output: Item.of("custommachinery:custom_machine_item", { machine: "astralsignals:drive_eraser" }),
      },
      {
        inputs: {
          A: "astralsignals:polyvinyl_sheet",
          B: "astraladditions:shimmer_blaze_powder",
        },
        shape: ["BAB"],
        output: "astralsignals:shimmer_polyvinyl_sheet",
      },
      {
        inputs: {
          A: "astralsignals:shimmer_polyvinyl_sheet",
          B: "yttr:armor_plating",
        },
        shape: ["BAB"],
        output: "astralsignals:yttric_polyvinyl_sheet",
      },
    ];
    astralSignalsRecipes.forEach((recipe) => {
      event.shaped(recipe.output, recipe.shape, recipe.inputs);
    });
  }
})();
