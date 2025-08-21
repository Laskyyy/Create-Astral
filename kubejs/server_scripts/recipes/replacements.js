(function recipeReplacements() {
  const { CATWALK_MATERIALS } = global.server;

  onEvent("recipes", (event) => {
    /**
     * @typedef Replacement
     * @property {Internal.IngredientJS_} original The original item or tag in the recipe.
     * @property {Internal.IngredientJS_} replaceWith The item or tag to replace the original with.
     * @property {Internal.RecipeFilter_} [predicate] Specifies, which recipes are affected by the replacement.
     */

    /** @type {Replacement[]} */
    const replacements = [
      { original: "create:powdered_obsidian", replaceWith: "#c:dusts/obsidian" },
      { original: "techreborn:obsidian_dust", replaceWith: "#c:dusts/obsidian" },
      { original: "createaddition:diamond_grit", replaceWith: "techreborn:diamond_dust" },
      { original: "ae2:ender_dust", replaceWith: "techreborn:ender_pearl_dust" },
      {
        predicate: { mod: "createbigcannons" },
        original: "create:iron_sheet",
        replaceWith: "dustrial_decor:cast_iron_billet",
      },
      {
        predicate: { mod: "createbigcannons" },
        original: "minecraft:iron_ingot",
        replaceWith: "dustrial_decor:cast_iron_billet",
      },
      { predicate: { mod: "createbigcannons" }, original: "minecraft:iron_nugget", replaceWith: "create:zinc_nugget" },
      {
        predicate: { mod: "createbigcannons" },
        original: "minecraft:quartz",
        replaceWith: "create:integrated_circuit",
      },
      { predicate: { mod: "createbigcannons" }, original: "minecraft:redstone", replaceWith: "create:electron_tube" },
      {
        predicate: { mod: "createbigcannons" },
        original: "minecraft:iron_bars",
        replaceWith: "createaddition:iron_wire",
      },
      {
        predicate: { output: "tconstruct:raw_cobalt_block" },
        original: "#c:raw_materials/cobalt",
        replaceWith: "tconstruct:raw_cobalt",
      },
      {
        predicate: { output: "createaddition:connector" },
        original: "#c:slimeballs",
        replaceWith: "createaddition:copper_wire",
      },
      {
        predicate: { output: "createbigcannons:nethersteel_screw_lock" },
        original: "createbigcannons:nethersteel_ingot",
        replaceWith: "ad_astra:ostrum_ingot",
      },
      { predicate: { mod: "createbigcannons" }, original: "minecraft:string", replaceWith: "create:sand_paper" },
      {
        predicate: { output: "minecraft:pointed_dripstone" },
        original: "techreborn:calcite_small_dust",
        replaceWith: "techreborn:calcite_dust",
      },
      { predicate: { output: "minecraft:hopper" }, original: "minecraft:iron_ingot", replaceWith: "create:iron_sheet" },
      {
        predicate: { output: "minecraft:calcite" },
        original: "techreborn:calcite_small_dust",
        replaceWith: "techreborn:calcite_dust",
      },
      {
        predicate: { output: "techreborn:copper_cable" },
        original: "minecraft:copper_ingot",
        replaceWith: "createaddition:copper_rod",
      },
      {
        predicate: { output: "techreborn:gold_cable" },
        original: "minecraft:gold_ingot",
        replaceWith: "createaddition:gold_rod",
      },
      {
        predicate: { input: "techreborn:rubber", output: "techreborn:insulated_copper_cable" },
        original: "minecraft:copper_ingot",
        replaceWith: "createaddition:copper_rod",
      },
      {
        predicate: { type: "minecraft:crafting_shaped", output: "techreborn:chunk_loader" },
        original: "techreborn:industrial_machine_frame",
        replaceWith: "create:shadow_steel_casing",
      },
      { original: "techreborn:industrial_machine_frame", replaceWith: "techreborn:basic_machine_frame" },
      {
        predicate: { type: "minecraft:crafting_shaped", output: "techreborn:chunk_loader" },
        original: "techreborn:coal_plate",
        replaceWith: "techreborn:diamond_plate",
      },
      {
        predicate: { type: "minecraft:crafting_shaped", output: "techreborn:chunk_loader" },
        original: "techreborn:coal_plate",
        replaceWith: "techreborn:diamond_plate",
      },
      {
        predicate: { type: "minecraft:crafting_shaped", output: "techreborn:chunk_loader" },
        original: "createastral:bronze_sheet",
        replaceWith: "techreborn:electrum_plate",
      },
      {
        predicate: { type: "minecraft:crafting_shaped", output: "techreborn:chunk_loader" },
        original: "create:golden_sheet",
        replaceWith: "techreborn:emerald_plate",
      },
      { original: "#c:iron_rods", replaceWith: "createaddition:iron_rod" },
      { original: "ad_astra:iron_rod", replaceWith: "createaddition:iron_rod" },
      { original: "catwalksinc:iron_rod", replaceWith: "createaddition:iron_rod" },
      {
        predicate: { type: "minecraft:crafting_shaped" },
        original: "campanion:rope",
        replaceWith: "farmersdelight:rope",
      },
      {
        predicate: { input: "techreborn:insulated_gold_cable" },
        original: "techreborn:insulated_gold_cable",
        replaceWith: "createaddition:gold_spool",
      },
      {
        predicate: { input: "techreborn:insulated_copper_cable" },
        original: "techreborn:insulated_copper_cable",
        replaceWith: "createaddition:copper_spool",
      },
      {
        predicate: { input: "techreborn:copper_cable" },
        original: "techreborn:copper_cable",
        replaceWith: "createaddition:copper_spool",
      },
      {
        predicate: { input: "techreborn:tin_cable" },
        original: "techreborn:tin_cable",
        replaceWith: "createaddition:iron_rod",
      },
      { original: "dbe:steel_ingot", replaceWith: "dustrial_decor:cast_iron_billet" },
      { original: "dbe:basic_circuit", replaceWith: "phonos:redstone_chip" },
      {
        predicate: { output: "minecraft:shulker_box" },
        original: "minecraft:chest",
        replaceWith: ["minecraft:barrel", "minecraft:chest"],
      },
      {
        predicate: { mod: "createaddition" },
        original: "minecraft:redstone_torch",
        replaceWith: "create:electron_tube",
      },
      {
        predicate: { output: "create:mechanical_drill" },
        original: "minecraft:iron_ingot",
        replaceWith: "create:iron_sheet",
      },
      {
        predicate: { output: "create:mechanical_crafter" },
        original: "minecraft:crafting_table",
        replaceWith: "create:precision_mechanism",
      },
      {
        predicate: { output: "ad_astra:rocket_fin" },
        original: "ad_astra:steel_ingot",
        replaceWith: "create:sturdy_sheet",
      },
      {
        predicate: { output: "ad_astra:engine_frame" },
        original: "ad_astra:steel_plate",
        replaceWith: "create:sturdy_sheet",
      },
      {
        predicate: { output: "ad_astra:engine_fan" },
        original: "ad_astra:steel_plate",
        replaceWith: "create:sturdy_sheet",
      },
      {
        predicate: { output: "yttr:giant_cobblestone" },
        original: "minecraft:cobblestone",
        replaceWith: "compressor:triple_compressed_cobblestone",
      },
      {
        predicate: { output: "createaddition:accumulator" },
        original: "create:brass_casing",
        replaceWith: "techreborn:red_cell_battery",
      },
      {
        predicate: { output: "ad_astra:netherite_space_suit" },
        original: "ad_astra:oxygen_gear",
        replaceWith: "techreborn:lead_plate",
      },
      {
        predicate: { output: "ad_astra:space_helmet" },
        original: "ad_astra:steel_ingot",
        replaceWith: "create:sturdy_sheet",
      },
      { predicate: { output: "create:crushing_wheel" }, original: "#c:stone", replaceWith: "techreborn:silver_ingot" },
      {
        predicate: { output: "ad_astra:space_helmet" },
        original: "minecraft:orange_stained_glass_pane",
        replaceWith: "create:copper_diving_helmet",
      },
      {
        predicate: { output: "ad_astra:space_pants" },
        original: "ad_astra:steel_ingot",
        replaceWith: "create:sturdy_sheet",
      },
      {
        predicate: { output: "create:deployer" },
        original: "create:electron_tube",
        replaceWith: "create:polished_rose_quartz",
      },
      {
        predicate: { output: "create:content_observer" },
        original: "create:electron_tube",
        replaceWith: "minecraft:redstone_torch",
      },
      {
        predicate: { output: "create:content_observer" },
        original: "create:brass_casing",
        replaceWith: "create:railway_casing",
      },
      {
        predicate: { output: "ad_astra:space_suit" },
        original: "ad_astra:steel_ingot",
        replaceWith: "create:sturdy_sheet",
      },
      {
        predicate: { output: "ad_astra:space_suit" },
        original: "ad_astra:oxygen_gear",
        replaceWith: "create:copper_backtank",
      },
      {
        predicate: { output: "ad_astra:oxygen_tank" },
        original: "ad_astra:steel_plate",
        replaceWith: "createastral:bronze_sheet",
      },
      {
        predicate: { output: "ad_astra:oxygen_gear" },
        original: "ad_astra:steel_plate",
        replaceWith: "createastral:bronze_sheet",
      },
      {
        predicate: { output: "ad_astra:steel_tank" },
        original: "ad_astra:steel_plate",
        replaceWith: "ad_astra:iron_plate",
      },
      {
        predicate: { output: "ad_astra:rocket_nose_cone" },
        original: "ad_astra:steel_plate",
        replaceWith: "ad_astra:iron_plate",
      },
      {
        predicate: { output: "minecraft:shulker_box" },
        original: "techreborn:endstone_small_dust",
        replaceWith: "ae2:fluix_dust",
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:bronze_plate",
        replaceWith: "createastral:bronze_sheet",
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:bronze_ingot",
        replaceWith: "createastral:bronze_ingot",
      },
      { original: "techreborn:copper_plate", replaceWith: "create:copper_sheet" },
      { original: "techreborn:gold_plate", replaceWith: "create:golden_sheet" },
      { predicate: { mod: "techreborn" }, original: "techreborn:steel_plate", replaceWith: "ad_astra:steel_ingot" },
      { predicate: { mod: "techreborn" }, original: "minecraft:redstone", replaceWith: "ae2:certus_quartz_crystal" },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:refined_iron_plate",
        replaceWith: "techreborn:silver_plate",
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:refined_iron_ingot",
        replaceWith: "techreborn:silver_plate",
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:refined_iron_storage_block",
        replaceWith: "techreborn:silver_storage_block",
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:refined_iron_nugget",
        replaceWith: "techreborn:silver_nugget",
      },
      { predicate: { mod: "techreborn" }, original: "techreborn:aluminum_plate", replaceWith: "techreborn:lead_plate" },
      { predicate: { mod: "techreborn" }, original: "techreborn:aluminum_ingot", replaceWith: "techreborn:lead_plate" },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:aluminum_storage_block",
        replaceWith: "techreborn:lead_storage_block",
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:aluminum_nugget",
        replaceWith: "techreborn:lead_nugget",
      },
      { predicate: { mod: "techreborn" }, original: "techreborn:tungsten_plate", replaceWith: "ad_astra:steel_plate" },
      { predicate: { mod: "techreborn" }, original: "techreborn:tungsten_ingot", replaceWith: "ad_astra:steel_plate" },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:tungsten_storage_block",
        replaceWith: "ad_astra:steel_block",
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:tungsten_nugget",
        replaceWith: "ad_astra:steel_nugget",
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:tungstensteel_plate",
        replaceWith: "ad_astra:steel_plate",
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:tungstensteel_ingot",
        replaceWith: "ad_astra:steel_plate",
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:tungstensteel_storage_block",
        replaceWith: "ad_astra:steel_block",
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:tungstensteel_nugget",
        replaceWith: "ad_astra:steel_nugget",
      },
      { predicate: { mod: "techreborn" }, original: "techreborn:chrome_plate", replaceWith: "ad_astra:ostrum_plate" },
      { predicate: { mod: "techreborn" }, original: "techreborn:chrome_ingot", replaceWith: "ad_astra:ostrum_plate" },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:chrome_storage_block",
        replaceWith: "ad_astra:ostrum_block",
      },
      { predicate: { mod: "techreborn" }, original: "techreborn:chrome_nugget", replaceWith: "ad_astra:ostrum_nugget" },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:titanium_plate",
        replaceWith: "ad_astra:calorite_plate",
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:titanium_ingot",
        replaceWith: "ad_astra:calorite_plate",
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:titanium_storage_block",
        replaceWith: "ad_astra:calorite_block",
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:titanium_nugget",
        replaceWith: "ad_astra:calorite_nugget",
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:platinum_plate",
        replaceWith: "ad_astra:calorite_plate",
      },
      {
        predicate: { output: "techreborn:implosion_compressor" },
        original: "techreborn:advanced_alloy_ingot",
        replaceWith: "techreborn:advanced_alloy_plate",
      },
      { predicate: { mod: "techreborn" }, original: "techreborn:nickel_ingot", replaceWith: "ad_astra:desh_plate" },
      { predicate: { mod: "techreborn" }, original: "techreborn:nickel_plate", replaceWith: "ad_astra:desh_plate" },
      { predicate: { mod: "techreborn" }, original: "techreborn:brass_plate", replaceWith: "create:brass_sheet" },
      { predicate: { mod: "techreborn" }, original: "techreborn:brass_ingot", replaceWith: "create:brass_ingot" },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:brass_storage_block",
        replaceWith: "create:brass_block",
      },
      { predicate: { mod: "techreborn" }, original: "techreborn:brass_nugget", replaceWith: "create:brass_nugget" },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:electronic_circuit",
        replaceWith: "create:integrated_circuit",
      },
      { predicate: { mod: "techreborn" }, original: "minecraft:lapis_lazuli", replaceWith: "techreborn:lead_plate" },
      {
        predicate: { mod: "techreborn", output: "techreborn:red_cell_battery" },
        original: "techreborn:lead_ingot",
        replaceWith: "techreborn:silver_plate",
      },
      { predicate: { mod: "techreborn" }, original: "techreborn:zinc_plate", replaceWith: "createaddition:zinc_sheet" },
      { original: "createdeco:zinc_sheet", replaceWith: "createaddition:zinc_sheet" },
      { predicate: { mod: "techreborn" }, original: "techreborn:zinc_ingot", replaceWith: "create:zinc_ingot" },
      { predicate: { mod: "techreborn" }, original: "techreborn:zinc_nugget", replaceWith: "create:zinc_nugget" },
      { original: "#c:ingots/steel", replaceWith: "ad_astra:steel_ingot" },
      { predicate: { mod: "ae2" }, original: "minecraft:iron_ingot", replaceWith: "techreborn:silver_plate" },
      { predicate: { mod: "techreborn" }, original: "minecraft:cobblestone", replaceWith: "create:sturdy_sheet" },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:data_storage_chip",
        replaceWith: "createastral:subatomic_ingot",
      },
      { predicate: { mod: "techreborn" }, original: "minecraft:stone", replaceWith: "create:sturdy_sheet" },
      { predicate: { mod: "techreborn" }, original: "minecraft:cobblestone", replaceWith: "create:sturdy_sheet" },
      { predicate: { mod: "techreborn" }, original: "minecraft:flint", replaceWith: "create:sturdy_sheet" },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:magnalium_plate",
        replaceWith: "techreborn:silver_plate",
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:peridot_plate",
        replaceWith: "createastral:olivine_sheet",
      },
      { predicate: { mod: "ae2" }, original: "minecraft:copper_ingot", replaceWith: "techreborn:silver_plate" },
      { predicate: { mod: "ae2" }, original: "minecraft:redstone", replaceWith: "ae2:fluix_dust" },
      { predicate: { mod: "ae2" }, original: "ae2:fluix_crystal", replaceWith: "ae2:fluix_dust" },
      { original: "techreborn:advanced_circuit", replaceWith: "techreborn:electronic_circuit" },
      {
        predicate: { output: "gearreborn:hazmat_chestpiece" },
        original: "techreborn:electronic_circuit",
        replaceWith: "create:integrated_circuit",
      },
      {
        predicate: { output: "gearreborn:hazmat_helmet" },
        original: "techreborn:reinforced_glass",
        replaceWith: "#c:glass",
      },
      {
        predicate: { output: "techreborn:industrial_sawmill" },
        original: "techreborn:silver_plate",
        replaceWith: "techreborn:lead_plate",
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:cupronickel_heating_coil",
        replaceWith: "createastral:copper_heating_coil",
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:nichrome_heating_coil",
        // @ts-expect-error Missing item?
        replaceWith: "createastral:ender_heating_coil",
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:energy_crystal",
        replaceWith: "techreborn:red_cell_battery",
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:lapotron_crystal",
        replaceWith: "techreborn:lithium_ion_battery",
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:advanced_alloy_plate",
        replaceWith: "techreborn:lead_plate",
      },
      {
        predicate: { mod: "techreborn", output: "techreborn:advanced_drill" },
        original: "ad_astra:calorite_plate",
        replaceWith: "techreborn:lead_plate",
      },
      {
        predicate: { mod: "techreborn", output: "techreborn:advanced_chainsaw" },
        original: "ad_astra:calorite_plate",
        replaceWith: "techreborn:lead_plate",
      },
      {
        predicate: { mod: "techreborn", output: "techreborn:advanced_jackhammer" },
        original: "ad_astra:calorite_plate",
        replaceWith: "techreborn:lead_plate",
      },
      { original: "techreborn:energy_flow_chip", replaceWith: "techreborn:data_storage_chip" },
      { predicate: { mod: "techreborn" }, original: "techreborn:iridium_ingot", replaceWith: "yttr:yttrium_ingot" },
      { predicate: { mod: "techreborn" }, original: "techreborn:iridium_plate", replaceWith: "yttr:yttrium_ingot" },
      {
        predicate: { output: "ad_astra:cryo_freezer" },
        original: "ad_astra:ostrum_tank",
        replaceWith: "techreborn:lithium_ion_battery",
      },
      { original: "techreborn:iridium_alloy_plate", replaceWith: "yttr:yttrium_ingot" },
      { predicate: { mod: "dustrial_decor" }, original: "minecraft:iron_ingot", replaceWith: "create:iron_sheet" },
      { predicate: { mod: "computercraft" }, original: "minecraft:iron_ingot", replaceWith: "create:iron_sheet" },
      {
        predicate: [
          { id: "ae2:network/cells/item_cell_housing" },
          { id: "ae2:network/cells/view_cell" },
          { id: "ae2:network/cells/item_storage_cell_1k" },
          { id: "ae2:network/cells/item_storage_cell_4k" },
          { id: "ae2:network/cells/item_storage_cell_16k" },
          { id: "ae2:network/cells/item_storage_cell_64k" },
          { id: "ae2:network/cells/item_storage_cell_256k" },
          { id: "ae2:network/cells/spatial_storage_cell_2_cubed" },
          { id: "ae2:network/cells/spatial_storage_cell_16_cubed" },
          { id: "ae2:network/cells/spatial_storage_cell_128_cubed" },
        ],
        original: "techreborn:silver_plate",
        replaceWith: "create:andesite_casing",
      },
      {
        predicate: [
          { id: "ae2:network/cells/fluid_cell_housing" },
          { id: "ae2:network/cells/fluid_storage_cell_1k" },
          { id: "ae2:network/cells/fluid_storage_cell_4k" },
          { id: "ae2:network/cells/fluid_storage_cell_16k" },
          { id: "ae2:network/cells/fluid_storage_cell_64k" },
          { id: "ae2:network/cells/fluid_storage_cell_256k" },
        ],
        original: "techreborn:silver_plate",
        replaceWith: "create:copper_casing",
      },
      {
        predicate: { output: "techreborn:industrial_grinder" },
        original: "techreborn:electronic_circuit",
        replaceWith: "ad_astra:calorite_plate",
      },
      {
        predicate: { output: "techreborn:digital_display" },
        original: "minecraft:black_dye",
        replaceWith: "techreborn:machine_parts",
      },
      {
        predicate: { output: "techreborn:digital_display" },
        original: "minecraft:glass_pane",
        replaceWith: "#computercraft:monitor",
      },
      { original: "techreborn:lapotronic_orb", replaceWith: "ad_astra:calorite_plate" },
      { predicate: { mod: "phonos" }, original: "minecraft:iron_ingot", replaceWith: "techreborn:tin_ingot" },
      { predicate: { mod: "farmersdelight" }, original: "minecraft:iron_ingot", replaceWith: "techreborn:tin_ingot" },
      {
        predicate: { output: "farmersdelight:iron_knife" },
        original: "minecraft:iron_ingot",
        replaceWith: "techreborn:tin_ingot",
      },
      { predicate: { mod: "drinkbeer" }, original: "minecraft:iron_ingot", replaceWith: "techreborn:tin_ingot" },
      { predicate: { mod: "computercraft" }, original: "minecraft:gold_ingot", replaceWith: "create:brass_sheet" },
      { predicate: { mod: "cccbridge" }, original: "create:golden_sheet", replaceWith: "create:brass_sheet" },
      { predicate: { mod: "computercraft" }, original: "#c:stones", replaceWith: "create:andesite_alloy" },
      {
        predicate: { mod: "computercraft" },
        original: "minecraft:redstone",
        replaceWith: "create:polished_rose_quartz",
      },
      { predicate: { mod: "computercraft" }, original: "minecraft:iron_ingot", replaceWith: "create:iron_sheet" },
      { predicate: { mod: "computercraft" }, original: "minecraft:golden_apple", replaceWith: "create:display_board" },
      {
        predicate: { output: "computercraft:computer_normal" },
        original: "create:electron_tube",
        replaceWith: "create:polished_rose_quartz",
      },
      {
        predicate: { output: "computercraft:turtle_normal" },
        original: "create:electron_tube",
        replaceWith: "create:polished_rose_quartz",
      },
      {
        predicate: { type: "create:mechanical_crafting", mod: "createaddition" },
        original: "create:andesite_alloy",
        replaceWith: "techreborn:red_cell_battery",
      },
      {
        predicate: { type: "create:mechanical_crafting", mod: "createaddition" },
        original: "createaddition:iron_rod",
        replaceWith: "create:integrated_circuit",
      },
      {
        predicate: { mod: "immersive_aircraft", output: "immersive_aircraft:steel_boiler" },
        original: "minecraft:iron_ingot",
        replaceWith: "ad_astra:steel_plate",
      },
      {
        predicate: { mod: "immersive_aircraft" },
        original: "minecraft:copper_ingot",
        replaceWith: "create:fluid_pipe",
      },
      {
        predicate: { mod: "immersive_aircraft" },
        original: "minecraft:iron_ingot",
        replaceWith: "minecraft:iron_block",
      },
      {
        predicate: { mod: "createendertransmission" },
        original: "minecraft:obsidian",
        replaceWith: "create:shadow_steel",
      },
      {
        predicate: { mod: "createendertransmission" },
        original: "minecraft:ender_eye",
        replaceWith: "createastral:subatomic_ingot",
      },
      {
        predicate: { mod: "createendertransmission" },
        original: "minecraft:ender_pearl",
        replaceWith: "minecraft:ender_eye",
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:iridium_nugget",
        replaceWith: "yttr:yttrium_nugget",
      },
      { original: "techreborn:carbon_plate", replaceWith: "techreborn:carbon_mesh" },
      { original: "techreborn:lazurite_plate", replaceWith: "create:lapis_sheet" },
      { original: "ae2:sky_stone_block", replaceWith: "ad_astra:sky_stone" },
      {
        predicate: { input: "#c:dough" },
        original: "#c:dough",
        replaceWith: "create:dough",
      },
      {
        predicate: { input: "#minecraft:dough" },
        original: "#minecraft:dough",
        replaceWith: "create:dough",
      },
      {
        predicate: { input: "#c:dough/wheat" },
        original: "#c:dough/wheat",
        replaceWith: "create:dough",
      },
      {
        predicate: { input: "farmersdelight:wheat_dough" },
        original: "farmersdelight:wheat_dough",
        replaceWith: "create:dough",
      },
      {
        predicate: { input: "vinery:dough" },
        original: "vinery:dough",
        replaceWith: "create:dough",
      },
    ];
    replacements.forEach((replacement) => {
      if (replacement.predicate) {
        event.replaceInput(replacement.predicate, replacement.original, replacement.replaceWith);
      } else {
        event.replaceInput(replacement.original, replacement.replaceWith);
      }
    });
    // Replace all cells crafting recipes to use tin sheets instead of
    // tin ingots
    const cells = /** @type {const} */ ([
      "water_coolant_cell_60k", // may want to remove this from modpack -- no uses
      "water_coolant_cell_30k", // and this
      "water_coolant_cell_10k",
      "nak_coolant_cell_60k",
      "nak_coolant_cell_360k", // and this
      "nak_coolant_cell_180k", // and this
      "helium_coolant_cell_60k",
      "helium_coolant_cell_360k", // and this
      "helium_coolant_cell_180k",
      "cell",
    ]);
    cells.forEach((cell) => {
      event.replaceInput(
        { type: "minecraft:crafting_shaped", output: `techreborn:${cell}` },
        "techreborn:tin_ingot",
        "techreborn:tin_plate"
      );
      event.replaceInput(
        { type: "minecraft:crafting_shaped", output: `techreborn:${cell}` },
        "minecraft:copper_ingot",
        "create:copper_sheet"
      );
    });
    event.replaceInput({ type: "techreborn:solid_canning_machine" }, "techreborn:tin_ingot", "techreborn:tin_plate");
    event.replaceOutput("techreborn:electronic_circuit", "create:integrated_circuit");
    // Change the resin basin recipe to use an Item Drain so that it can be crafted during chapter 2
    event.replaceInput(
      { id: "techreborn:crafting_table/machine/resin_basin" },
      "techreborn:drain",
      "create:item_drain"
    );
    // Buffed catwalk output. Seriously! Its so resource heavy!
    for (let catwalkMaterial of CATWALK_MATERIALS) {
      event.remove({
        output: `createdeco:${catwalkMaterial.material}_catwalk`,
      });
      // Note I'm deliberately changing iron catwalk recipe to not use sandpapering.
      event.shaped(Item.of(`createdeco:${catwalkMaterial.material}_catwalk`, 8), [" A ", "ABA", " A "], {
        A: catwalkMaterial.sheet,
        B: catwalkMaterial.material == "iron" ? "minecraft:iron_bars" : `createdeco:${catwalkMaterial.material}_bars`,
      });
    }
  });
})();
