onEvent("recipes", (event) => {
    // [?optional object specifying a mod/type, original item, replacement item]
    [
        ["tconstruct:molten_bronze", "createbigcannons:molten_bronze"],
        ["create:powdered_obsidian", "#c:dusts/obsidian"],
        ["techreborn:obsidian_dust", "#c:dusts/obsidian"],
        ["createaddition:diamond_grit", "techreborn:diamond_dust"],
        ["ae2:ender_dust", "techreborn:ender_pearl_dust"],
        [
            { mod: "createbigcannons" },
            "create:iron_sheet",
            "dustrial_decor:cast_iron_billet",
        ],
        [
            { mod: "createbigcannons" },
            "minecraft:iron_ingot",
            "dustrial_decor:cast_iron_billet",
        ],
        [
            { mod: "createbigcannons" },
            "minecraft:iron_nugget",
            "create:zinc_nugget",
        ],
        [
            { mod: "createbigcannons" },
            "minecraft:quartz",
            "create:integrated_circuit",
        ],
        [
            { mod: "createbigcannons" },
            "minecraft:redstone",
            "create:electron_tube",
        ],
        [
            { mod: "createbigcannons" },
            "minecraft:iron_bars",
            "createaddition:iron_wire",
        ],
        [
            { output: "createaddition:connector" },
            "#c:slimeballs",
            "createaddition:copper_wire",
        ],
        [
            { output: "createbigcannons:nethersteel_screw_lock" },
            "createbigcannons:nethersteel_ingot",
            "ad_astra:ostrum_ingot",
        ],
        [{ mod: "createbigcannons" }, "minecraft:string", "create:sand_paper"],
        [
            {output: "minecraft:pointed_dripstone"},
            "techreborn:calcite_small_dust", "techreborn:calcite_dust"
        ],
        [
            {output: "minecraft:calcite"},
            "techreborn:calcite_small_dust", "techreborn:calcite_dust"
        ],
        [
            {output: "techreborn:nanosaber"},
            "techreborn:glowstone_small_dust", "minecraft:glowstone_dust"
        ],
        [
            { output: "techreborn:copper_cable" },
            "minecraft:copper_ingot",
            "createaddition:copper_rod",
        ],
        [
            { output: "techreborn:gold_cable" },
            "minecraft:gold_ingot",
            "createaddition:gold_rod",
        ],
        [
            {
                input: "techreborn:rubber",
                output: "techreborn:insulated_copper_cable",
            },
            "minecraft:copper_ingot",
            "createaddition:copper_rod",
        ],

        [
            {
                type: "minecraft:crafting_shaped",
                output: "techreborn:chunk_loader",
            },
            "techreborn:industrial_machine_frame",
            "techreborn:basic_machine_frame",
        ],
        [
            {
                type: "minecraft:crafting_shaped",
                output: "techreborn:chunk_loader",
            },
            "techreborn:coal_plate",
            "techreborn:diamond_plate",
        ],
        [
            {
                type: "minecraft:crafting_shaped",
                output: "techreborn:chunk_loader",
            },
            "techreborn:coal_plate",
            "techreborn:diamond_plate",
        ],
        [
            {
                type: "minecraft:crafting_shaped",
                output: "techreborn:chunk_loader",
            },
            "createastral:bronze_sheet",
            "techreborn:electrum_plate",
        ],
        [
            {
                type: "minecraft:crafting_shaped",
                output: "techreborn:chunk_loader",
            },
            "create:golden_sheet",
            "techreborn:emerald_plate",
        ],
        ["#c:iron_rods", "createaddition:iron_rod"],
        ["ad_astra:iron_rod", "createaddition:iron_rod"],
        ["catwalksinc:iron_rod", "createaddition:iron_rod"],
        [
            { type: "minecraft:crafting_shaped" },
            "campanion:rope",
            "farmersdelight:rope",
        ],
        // ['tconstruct:scorched_brick', 'tconstruct:scorched_bricks') // ???
        [
            { mod: "tconstruct" },
            "minecraft:quartz",
            "ae2:charged_certus_quartz",
        ],
        ["dbe:steel_ingot", "dustrial_decor:cast_iron_billet"],
        ["dbe:basic_circuit", "phonos:redstone_chip"],
        [
            { output: "extendedflywheels:steelflywheel" },
            "create:andesite_alloy",
            "ad_astra:steel_ingot",
        ],
        [
            { output: "minecraft:shulker_box" },
            "minecraft:chest",
            ["minecraft:barrel", "minecraft:chest"],
        ],
        [
            { mod: "createaddition" },
            "minecraft:redstone_torch",
            "create:electron_tube",
        ],
        [
            { output: "create:mechanical_drill" },
            "minecraft:iron_ingot",
            "create:iron_sheet",
        ],
        [
            { output: "create:mechanical_crafter" },
            "minecraft:crafting_table",
            "create:precision_mechanism",
        ],
        [
            { output: "ad_astra:rocket_fin" },
            "ad_astra:steel_ingot",
            "create:sturdy_sheet",
        ],
        [
            { output: "ad_astra:engine_frame" },
            "ad_astra:steel_plate",
            "create:sturdy_sheet",
        ],
        [
            { output: "ad_astra:engine_fan" },
            "ad_astra:steel_plate",
            "create:sturdy_sheet",
        ],
        [
            { output: "yttr:giant_cobblestone" },
            "minecraft:cobblestone",
            "compressor:triple_compressed_cobblestone",
        ],
        [
            { output: "createaddition:accumulator" },
            "create:brass_casing",
            "techreborn:red_cell_battery",
        ],
        [
            { output: "ad_astra:netherite_space_suit" },
            "ad_astra:oxygen_gear",
            "techreborn:lead_plate",
        ],
        [
            { output: "ad_astra:space_helmet" },
            "ad_astra:steel_ingot",
            "create:sturdy_sheet",
        ],
        [
            { output: "create:crushing_wheel" },
            "#c:stone",
            "techreborn:silver_ingot",
        ],
        [
            { output: "ad_astra:space_helmet" },
            "minecraft:orange_stained_glass_pane",
            "create:copper_diving_helmet",
        ],
        [
            { output: "ad_astra:space_pants" },
            "ad_astra:steel_ingot",
            "create:sturdy_sheet",
        ],
        [
            { output: "create:deployer" },
            "create:electron_tube",
            "create:polished_rose_quartz",
        ],
        [
            { output: "create:content_observer" },
            "create:electron_tube",
            "minecraft:redstone_torch",
        ],
        [
            { output: "create:content_observer" },
            "create:brass_casing",
            "create:railway_casing",
        ],
        [
            { output: "ad_astra:space_suit" },
            "ad_astra:steel_ingot",
            "create:sturdy_sheet",
        ],
        [
            { output: "ad_astra:space_suit" },
            "ad_astra:oxygen_gear",
            "create:copper_backtank",
        ],
        [
            { output: "ad_astra:oxygen_tank" },
            "ad_astra:steel_plate",
            "createastral:bronze_sheet",
        ],
        [
            { output: "ad_astra:oxygen_gear" },
            "ad_astra:steel_plate",
            "createastral:bronze_sheet",
        ],
        [
            { output: "ad_astra:steel_tank" },
            "ad_astra:steel_plate",
            "ad_astra:iron_plate",
        ],
        [
            { output: "ad_astra:rocket_nose_cone" },
            "ad_astra:steel_plate",
            "ad_astra:iron_plate",
        ],
        [
            { output: "ad_astra:netherite_space_helmet" },
            "minecraft:netherite_helmet",
            "createastral:sturdy_helmet",
        ],
        [
            { output: "ad_astra:netherite_space_suit" },
            "minecraft:netherite_chestplate",
            "createastral:sturdy_chestplate",
        ],
        [
            { output: "ad_astra:netherite_space_pants" },
            "minecraft:netherite_leggings",
            "createastral:sturdy_leggings",
        ],
        [
            { output: "ad_astra:netherite_space_boots" },
            "minecraft:netherite_leggings",
            "createastral:sturdy_boots",
        ],

        [
            { output: "ad_astra:netherite_space_helmet" },
            "ad_astra:compressed_steel",
            "ad_astra:ostrum_block",
        ],

        [
            { output: "ad_astra:netherite_space_suit" },
            "ad_astra:compressed_steel",
            "ad_astra:ostrum_block",
        ],

        [
            { output: "ad_astra:netherite_space_pants" },
            "ad_astra:compressed_steel",
            "techreborn:lead_plate",
        ],

        [
            { output: "ad_astra:netherite_space_boots" },
            "ad_astra:compressed_steel",
            "techreborn:lead_plate",
        ],
        [
            { output: "minecraft:shulker_box" },
            "techreborn:endstone_small_dust",
            "ae2:fluix_dust",
        ],

        [
            { mod: "techreborn" },
            "techreborn:bronze_plate",
            "createastral:bronze_sheet",
        ],
        [
            { mod: "techreborn" },
            "techreborn:bronze_ingot",
            "createastral:bronze_ingot",
        ],
        [

            "techreborn:copper_plate",
            "create:copper_sheet",
        ],
        [ "techreborn:gold_plate", "create:gold_sheet"],
        [
            { mod: "techreborn" },
            "techreborn:steel_plate",
            "ad_astra:steel_ingot",
        ],
        [
            { mod: "techreborn" },
            "minecraft:redstone",
            "ae2:certus_quartz_crystal",
        ],
        [
            { mod: "techreborn" },
            "techreborn:refined_iron_plate",
            "techreborn:silver_plate",
        ],
        [
            { mod: "techreborn" },
            "techreborn:refined_iron_ingot",
            "techreborn:silver_plate",
        ],
        [
            { mod: "techreborn" },
            "techreborn:refined_iron_storage_block",
            "techreborn:silver_storage_block",
        ],
        [
            { mod: "techreborn" },
            "techreborn:refined_iron_nugget",
            "techreborn:silver_nugget",
        ],
        [
            { mod: "techreborn" },
            "techreborn:aluminum_plate",
            "techreborn:lead_plate",
        ],
        [
            { mod: "techreborn" },
            "techreborn:aluminum_ingot",
            "techreborn:lead_plate",
        ],
        [
            { mod: "techreborn" },
            "techreborn:aluminum_storage_block",
            "techreborn:lead_storage_block",
        ],
        [
            { mod: "techreborn" },
            "techreborn:aluminum_nugget",
            "techreborn:lead_nugget",
        ],
        [
            { mod: "techreborn" },
            "techreborn:tungsten_plate",
            "ad_astra:steel_plate",
        ],
        [
            { mod: "techreborn" },
            "techreborn:tungsten_ingot",
            "ad_astra:steel_plate",
        ],
        [
            { mod: "techreborn" },
            "techreborn:tungsten_storage_block",
            "ad_astra:steel_block",
        ],
        [
            { mod: "techreborn" },
            "techreborn:tungsten_nugget",
            "ad_astra:steel_nugget",
        ],
        [
            { mod: "techreborn" },
            "techreborn:tungstensteel_plate",
            "ad_astra:steel_plate",
        ],
        [
            { mod: "techreborn" },
            "techreborn:tungstensteel_ingot",
            "ad_astra:steel_plate",
        ],
        [
            { mod: "techreborn" },
            "techreborn:tungstensteel_storage_block",
            "ad_astra:steel_block",
        ],
        [
            { mod: "techreborn" },
            "techreborn:tungstensteel_nugget",
            "ad_astra:steel_nugget",
        ],
        [
            { mod: "techreborn" },
            "techreborn:chrome_plate",
            "ad_astra:compressed_ostrum",
        ],
        [
            { mod: "techreborn" },
            "techreborn:chrome_ingot",
            "ad_astra:compressed_ostrum",
        ],
        [
            { mod: "techreborn" },
            "techreborn:chrome_storage_block",
            "ad_astra:ostrum_block",
        ],
        [
            { mod: "techreborn" },
            "techreborn:chrome_nugget",
            "ad_astra:ostrum_nugget",
        ],
        [
            { mod: "techreborn" },
            "techreborn:titanium_plate",
            "ad_astra:calorite_plate",
        ],
        [
            { mod: "techreborn" },
            "techreborn:titanium_ingot",
            "ad_astra:calorite_plate",
        ],
        [
            { mod: "techreborn" },
            "techreborn:titanium_storage_block",
            "ad_astra:calorite_block",
        ],
        [
            { mod: "techreborn" },
            "techreborn:titanium_nugget",
            "ad_astra:calorite_nugget",
        ],
        [
            { mod: "techreborn" },
            "techreborn:platinum_plate",
            "ad_astra:calorite_plate",
        ],
        [
            { output: "techreborn:implosion_compressor" },
            "techreborn:advanced_alloy_ingot",
            "techreborn:advanced_alloy_plate",
        ],
        [
            { mod: "techreborn" },
            "techreborn:nickel_ingot",
            "ad_astra:desh_plate",
        ],
        [
            { mod: "techreborn" },
            "techreborn:nickel_plate",
            "ad_astra:desh_plate",
        ],
        [{ mod: "techreborn" }, "techreborn:brass_plate", "create:brass_sheet"],
        [{ mod: "techreborn" }, "techreborn:brass_ingot", "create:brass_ingot"],
        [
            { mod: "techreborn" },
            "techreborn:brass_storage_block",
            "create:brass_block",
        ],
        [
            { mod: "techreborn" },
            "techreborn:brass_nugget",
            "create:brass_nugget",
        ],
        [
            { mod: "techreborn" },
            "techreborn:electronic_circuit",
            "create:integrated_circuit",
        ],
        [
            { mod: "techreborn" },
            "minecraft:lapis_lazuli",
            "techreborn:lead_plate",
        ],
        [
            { mod: "techreborn", output: "techreborn:red_cell_battery" },
            "techreborn:lead_ingot",
            "techreborn:silver_plate",
        ],
        [
            { mod: "techreborn" },
            "techreborn:zinc_plate",
            "createaddition:zinc_sheet",
        ],
        [
            "createdeco:zinc_sheet",
            "createaddition:zinc_sheet",
        ],
        [{ mod: "techreborn" }, "techreborn:zinc_ingot", "create:zinc_ingot"],
        [{ mod: "techreborn" }, "techreborn:zinc_nugget", "create:zinc_nugget"],
        ["#c:ingots/steel", "ad_astra:steel_ingot"],
        [{ mod: "ae2" }, "minecraft:iron_ingot", "techreborn:silver_plate"],
        [{ mod: "techreborn" }, "minecraft:cobblestone", "create:sturdy_sheet"],
        [
            { mod: "techreborn" },
            "techreborn:data_storage_chip",
            "createastral:subatomic_ingot",
        ],
        [{ mod: "techreborn" }, "minecraft:stone", "create:sturdy_sheet"],
        [{ mod: "techreborn" }, "minecraft:cobblestone", "create:sturdy_sheet"],
        [{ mod: "techreborn" }, "minecraft:flint", "create:sturdy_sheet"],
        [
            { mod: "techreborn" },
            "techreborn:magnalium_plate",
            "techreborn:silver_plate",
        ],
        [
            { mod: "techreborn" },
            "techreborn:peridot_plate",
            "createastral:olivine_sheet",
        ],
        [{ mod: "ae2" }, "minecraft:copper_ingot", "techreborn:silver_plate"],
        [{ mod: "ae2" }, "minecraft:redstone", "ae2:fluix_dust"],
        [{ mod: "ae2" }, "ae2:fluix_crystal", "ae2:fluix_dust"],
        ["techreborn:advanced_circuit", "techreborn:electronic_circuit"],
        [
            { output: "gearreborn:hazmat_chestpiece" },
            "techreborn:electronic_circuit",
            "create:integrated_circuit",
        ],
        [
            { output: "gearreborn:hazmat_helmet" },
            "techreborn:reinforced_glass",
            "#c:glass",
        ],
        [
            { output: "techreborn:industrial_sawmill" },
            "techreborn:silver_plate",
            "techreborn:lead_plate",
        ],
        [
            { mod: "techreborn" },
            "techreborn:cupronickel_heating_coil",
            "createastral:copper_heating_coil",
        ],
        [
            { mod: "techreborn" },
            "techreborn:nichrome_heating_coil",
            "createastral:ender_heating_coil",
        ],
        [
            { mod: "techreborn" },
            "techreborn:energy_crystal",
            "techreborn:red_cell_battery",
        ],
        [
            { mod: "techreborn" },
            "techreborn:lapotron_crystal",
            "techreborn:lithium_ion_battery",
        ],
        [
            { mod: "techreborn" },
            "techreborn:advanced_alloy_plate",
            "techreborn:lead_plate",
        ],
        [
            { mod: "techreborn", output: "techreborn:advanced_drill" },
            "ad_astra:calorite_plate",
            "techreborn:lead_plate",
        ],
        [
            { mod: "techreborn", output: "techreborn:advanced_chainsaw" },
            "ad_astra:calorite_plate",
            "techreborn:lead_plate",
        ],
        [
            { mod: "techreborn", output: "techreborn:advanced_jackhammer" },
            "ad_astra:calorite_plate",
            "techreborn:lead_plate",
        ],
        ["techreborn:energy_flow_chip", "techreborn:data_storage_chip"],
        [
            { output: "techreborn:nanosaber" },
            "create:precision_mechanism",
            "create:refined_radiance",
        ],
        [
            { mod: "techreborn" },
            "techreborn:iridium_ingot",
            "yttr:yttrium_ingot",
        ],
        [
            { mod: "techreborn" },
            "techreborn:iridium_plate",
            "yttr:yttrium_ingot",
        ],
        [
            { output: "ad_astra:cryo_freezer" },
            "ad_astra:ostrum_tank",
            "techreborn:lithium_ion_battery",
        ],
        [
            "techreborn:iridium_alloy_plate",
            "yttr:yttrium_ingot",
        ],
        [
            { mod: "dustrial_decor" },
            "minecraft:iron_ingot",
            "create:iron_sheet",
        ],
        [{ mod: "computercraft" }, "minecraft:iron_ingot", "create:iron_sheet"],
        [
            { output: "ae2:fluid_cell_housing" },
            "techreborn:silver_plate",
            "create:copper_casing",
        ],
        [
            { output: "ae2:item_cell_housing" },
            "techreborn:silver_plate",
            "create:andesite_casing",
        ],

        [
            { output: "techreborn:industrial_grinder" },
            "techreborn:electronic_circuit",
            "ad_astra:compressed_calorite",
        ],
        [
            { output: "techreborn:digital_display" },
            "minecraft:black_dye",
            "techreborn:machine_parts",
        ],
        [
            { output: "techreborn:digital_display" },
            "minecraft:glass_pane",
            "#computercraft:monitor",
        ],
        ["techreborn:lapotronic_orb", "ad_astra:compressed_calorite"],
        [
            { mod: "quarrymod" },
            "techreborn:iridium_ingot",
            "passivepiglins:piglin_coin",
        ],
        [
            { mod: "quarrymod" },
            "techreborn:advanced_alloy_plate",
            "passivepiglins:piglin_coin",
        ],
        [
            { mod: "quarrymod" },
            "techreborn:peridot_plate",
            "ad_astra:steel_plate",
        ],
        [
            { mod: "quarrymod" },
            "techreborn:silicon_plate",
            "techreborn:carbon_mesh",
        ],
        [{ mod: "quarrymod" }, "techreborn:lapis_plate", "create:lapis_sheet"],
        [
            { mod: "quarrymod" },
            "techreborn:peridot_storage_block",
            "createastral:olivine_sheet",
        ],
        [
            { mod: "quarrymod" },
            "techreborn:titanium_plate",
            "ad_astra:steel_plate",
        ],
        [
            { mod: "quarrymod" },
            "techreborn:tungstensteel_plate",
            "create:shadow_steel",
        ],
        [{ mod: "phonos" }, "minecraft:iron_ingot", "techreborn:tin_ingot"],
        [
            { mod: "farmersdelight" },
            "minecraft:iron_ingot",
            "techreborn:tin_ingot",
        ],
        [
            { output: "farmersdelight:iron_knife" },
            "minecraft:tin_ingot",
            "techreborn:iron_ingot",
        ],
        [{ mod: "drinkbeer" }, "minecraft:iron_ingot", "techreborn:tin_ingot"],
        [
            { mod: "computercraft" },
            "minecraft:gold_ingot",
            "create:brass_sheet",
        ],
        [{ mod: "cccbridge" }, "create:golden_sheet", "create:brass_sheet"],
        [{ mod: "computercraft" }, "#c:stones", "create:andesite_alloy"],

        [{ mod: "toms_storage" }, "#minecraft:planks", "create:andesite_alloy"],
        [{ mod: "toms_storage" }, "minecraft:stick", "createaddition:iron_rod"],
        [{ mod: "toms_storage" }, "minecraft:paper", "create:filter"],
        [
            { mod: "toms_storage" },
            "minecraft:crafting_table",
            "techreborn:silver_plate",
        ],
        [
            { mod: "toms_storage" },
            "minecraft:ender_pearl",
            "techreborn:silver_plate",
        ],
        [
            { mod: "computercraft" },
            "minecraft:redstone",
            "create:polished_rose_quartz",
        ],
        [{ mod: "computercraft" }, "minecraft:iron_ingot", "create:iron_sheet"],
        [
            { mod: "computercraft" },
            "minecraft:golden_apple",
            "create:display_board",
        ],
        [
            { output: "computercraft:computer_normal" },
            "create:electron_tube",
            "create:polished_rose_quartz",
        ],
        [
            { output: "computercraft:turtle_normal" },
            "create:electron_tube",
            "create:polished_rose_quartz",
        ],
        [
            { type: "create:mechanical_crafting", mod: "createaddition" },
            "create:andesite_alloy",
            "techreborn:red_cell_battery",
        ],
        [
            { type: "create:mechanical_crafting", mod: "createaddition" },
            "createaddition:iron_rod",
            "create:integrated_circuit",
        ],
        [
            {
                mod: "immersive_aircraft",
                output: "immersive_aircraft:steel_boiler",
            },
            "minecraft:iron_ingot",
            "ad_astra:steel_plate",
        ],
        [
            { mod: "immersive_aircraft" },
            "minecraft:copper_ingot",
            "create:fluid_pipe",
        ],
        [
            { mod: "immersive_aircraft" },
            "minecraft:iron_ingot",
            "minecraft:iron_block",
        ],
        [
            { mod: "createendertransmission" },
            "minecraft:obsidian",
            "create:shadow_steel",
        ],
        [
            { mod: "createendertransmission" },
            "minecraft:ender_eye",
            "createastral:subatomic_ingot",
        ],
        [
            { mod: "createendertransmission" },
            "minecraft:ender_pearl",
            "minecraft:ender_eye",
        ],
        ["techreborn:carbon_plate", "techreborn:carbon_mesh"],
        ["techreborn:lazurite_plate", "create:lapis_sheet"],
    ].forEach((recipe) => {
        if (recipe.length === 2) {
            event.replaceInput(recipe[0], recipe[1]);
        } else if (recipe.length === 3) {
            event.replaceInput(recipe[0], recipe[1], recipe[2]);
        }
    });

    // Replace all cells crafting recipes to use tin sheets instead of
    // tin ingots
    [
        "water_coolant_cell_60k", // may want to remove this from modpack -- no uses
        "water_coolant_cell_30k", // and this
        "water_coolant_cell_10k",
        "nak_coolant_cell_60k",
        "nak_coolant_cell_360k", // and this
        "nak_coolant_cell_180k", // and this
        "helium_coolant_cell_60k",
        "helium_coolant_cell_360k", // and this
        "helium_coolant_cell_180k",
        "cell"
    ].forEach((cell) =>{
        event.replaceInput(
            {type: "minecraft:crafting_shaped", output: "techreborn:" + cell},
            "techreborn:tin_ingot", "techreborn:tin_plate");
        event.replaceInput(
            {type: "minecraft:crafting_shaped", output: "techreborn:" + cell},
            "minecraft:copper_ingot", "create:copper_sheet");
    });
    event.replaceInput({type: "techreborn:solid_canning_machine"}, "techreborn:tin_ingot", "techreborn:tin_plate");

    event.replaceOutput(
        "techreborn:electronic_circuit",
        "create:integrated_circuit"
    );
});
