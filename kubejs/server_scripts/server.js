// priority: 0

settings.logAddedRecipes = false
settings.logRemovedRecipes = false
settings.logSkippedRecipes = false
settings.logErroringRecipes = false

console.info('Welcome to white space.')

///// DIAMONDS REQUIRE DIAMOND TIER TO MINE (IT MAKES SENSE) /////



onEvent('tags.blocks', event => {
  event.remove('minecraft:needs_iron_tool', 'minecraft:diamond_ore')
  event.remove('minecraft:needs_iron_tool', 'minecraft:deepslate_diamond_ore')
  event.add('minecraft:needs_diamond_tool', 'minecraft:diamond_ore')
  event.add('minecraft:needs_diamond_tool', 'minecraft:deepslate_diamond_ore')


})


// Lasky - feel free to move the code in here to more appropriate places, I just wanted
//  to keep all my changes together
function lizardChanges(event) {
  var FULL_BUCKET_AMMOUNT = 81000;
  
  event.remove({output: 'techreborn:plantball'});
  event.remove({
    type: 'minecraft:crafting_shaped',
    output: 'techreborn:plantball',
  });

  event.remove({
    type: 'minecraft:crafting_shapeless',
    output: 'techreborn:plantball',
  });

  event.recipes.createMixing('techreborn:plantball', [
    '9x #minecraft:leaves',
    {fluid: 'createaddition:seed_oil', amount: FULL_BUCKET_AMMOUNT / 2},
  ]).heated().processingTime(1000)

  event.recipes.createMixing('techreborn:plantball', [
    '9x #c:grass_variants',
    {fluid: 'createaddition:seed_oil', amount: FULL_BUCKET_AMMOUNT / 2},
  ]).heated().processingTime(1000)

  event.recipes.createMixing('techreborn:plantball', [
    '9x #minecraft:saplings',
    {fluid: 'createaddition:seed_oil', amount: FULL_BUCKET_AMMOUNT / 2},
  ]).heated().processingTime(1000)

  event.remove({output: 'techreborn:compressed_plantball'});

  var transitional_c_plantball = 'techreborn:plantball';
  event.recipes.createSequencedAssembly([
    Item.of('techreborn:compressed_plantball').withChance(8),
    Item.of('minecraft:grass').withChance(1),
    Item.of('minecraft:green_dye').withChance(.5),
    Item.of('farmersdelight:straw').withChance(.5)
  ], 'techreborn:plantball', [
    event.recipes.createPressing(transitional_c_plantball, transitional_c_plantball)
  ]).transitionalItem(transitional_c_plantball).loops(4);
 
  
  event.remove({
    'output': 'createaddition:biomass'
  });

  event.custom({
    "type": "techreborn:compressor",
    "power": 10,
    "time": 300,
    "ingredients": [
      {
        "item": "techreborn:compressed_plantball",
        "count": 4
      }
    ],
    "results": [
      {
        "item": "createaddition:biomass",
        "count": 1
      }
    ]
  });

  event.recipes.createSplashing([
    'createastral:pure_biomatter',
    Item.of('minecraft:sugar').withChance(.2),
    Item.of('minecraft:bonemeal').withChance(.2),
  ], 'createaddition:biomass')
  

  event.remove({
    'output': 'createaddition:biomass_pellet'
  });

  var transitional_bio_pellet = 'createaddition:biomass';
  event.recipes.createSequencedAssembly([
    Item.of('4x createaddition:biomass_pellet').withChance(1),
  ], 'createaddition:biomass', [
    event.recipes.createCutting(transitional_bio_pellet, transitional_bio_pellet),
    event.recipes.createCutting(transitional_bio_pellet, transitional_bio_pellet),
    event.recipes.createPressing(transitional_bio_pellet, transitional_bio_pellet)
  ]).transitionalItem(transitional_bio_pellet).loops(1);


  // Pre-bulk-washing obisidian (train de-gating)
	event.shapeless('minecraft:obsidian', [
    "minecraft:magma_block",
    "minecraft:water_bucket"
	]).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
    .id('createastral:washing_obsidian_manual_only');


  // Pre-spout sturdy sheet
  var transitional_sturdy_sheet = 'create:unprocessed_obsidian_sheet';
  event.recipes.createSequencedAssembly([
    Item.of('create:sturdy_sheet').withChance(12),
    Item.of('minecraft:gravel').withChance(8)
  ], 'create:powdered_obsidian', [
    event.recipes.createPressing(transitional_sturdy_sheet, transitional_sturdy_sheet),
    event.recipes.createPressing(transitional_sturdy_sheet, transitional_sturdy_sheet)
  ]).transitionalItem(transitional_sturdy_sheet).loops(5);


  // Pre-deployer track
  var track_shape = ['NSN', 'NSN', 'NSN'];  
  event.shaped('create:track', track_shape, {
    N: 'techreborn:tin_nugget',
    S: '#create:sleepers',    
  });
  event.shaped('create:track', track_shape, {
    N: 'create:zinc_nugget',
    S: '#create:sleepers',    
  });
  event.shaped('create:track', track_shape, {
    N: 'minecraft:iron_nugget',
    S: '#create:sleepers',    
  });

  // Pre-brass Smart Pipe
  event.shaped('create:smart_fluid_pipe', [
    'FB',
    'CO',
    'VP'
  ], {
    B: 'createastral:bronze_sheet',
    O: 'minecraft:observer',
    F: 'create:filter',
    C: 'minecraft:comparator',
    P: 'create:fluid_pipe',
    V: 'create:fluid_valve'
  });

  // Manual dripstone
	event.shapeless('minecraft:dripstone_block', [
    "minecraft:calcite",
    "minecraft:water_bucket"
	]).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
    .id('createastral:dripstone_block_manual_only');

  // Manual Pointed Dripstone
  event.stonecutting('2x minecraft:pointed_dripstone', 'minecraft:dripstone_block');

  // More efficient pointed dripstone filling recipe
  event.recipes.createFilling('4x minecraft:pointed_dripstone', [
    'minecraft:calcite',
    {fluid: 'minecraft:water', amount: FULL_BUCKET_AMMOUNT / 2}
  ]);


  // Pre-crushing copper and zinc generation
  event.recipes.createMilling([
    Item.of('create:crushed_copper_ore').withChance(.4)
  ], '#create:stone_types/veridium');

  event.recipes.createMilling([
    Item.of('create:crushed_zinc_ore').withChance(.15)
  ], '#create:stone_types/asurine');

  // event.recipes.createCrushing([
  //   'create:crushed_tin_ore',
  //   Item.of('minecraft:iron_nugget').withChance(1),
  // ], 'techreborn:raw_tin')

  // Pre-brass display links (we can get pre-brass display boards after all)
  event.shaped('create:display_link', [
    ' R ',
    'BOB',
    ' C '
  ], {
    B: 'createastral:bronze_sheet',
    O: 'minecraft:observer',
    R: 'minecraft:redstone_torch',
    C: '#c:plates/copper'
  });
}



onEvent('recipes', event => {
	
  // Lizard's changes (mostly plantball and biofuel recipes)
  lizardChanges(event);
  
  
  
  
  ///// REMOVING RECIPES, UNCATERGORISED /////





	 event.remove({output: 'ad_astra:steel_ingot'})
	 event.remove({output: 'ad_astra:iron_plate'})
	 event.remove({output: 'ad_astra:coal_generator'})
	 event.remove({output: 'ad_astra:solar_panel'})
	 event.remove({output: 'ad_astra:fuel_refinery'})
	 event.remove({output: 'ad_astra:oxygen_loader'})
	 event.remove({output: 'ad_astra:energizer'})
   event.remove({output: 'techreborn:synthetic_redstone_crystal'})
	 
	
    
	event.remove({output: 'minecraft:iron_sword'})
	event.remove({output: 'minecraft:iron_pickaxe'})
	event.remove({output: 'minecraft:iron_hoe'})
	event.remove({output: 'minecraft:iron_shovel'})
	event.remove({output: 'minecraft:iron_axe'})
	event.remove({output: 'minecraft:iron_helmet'})
	event.remove({output: 'minecraft:iron_chestplate'})
	event.remove({output: 'minecraft:iron_leggings'})
	event.remove({output: 'minecraft:iron_boots'})
	event.remove({output: 'minecraft:diamond_helmet'})
	event.remove({output: 'minecraft:diamond_chestplate'})
	event.remove({output: 'minecraft:diamond_leggings'})
	event.remove({output: 'minecraft:diamond_boots'})
  event.remove({output: 'minecraft:diamond_sword'})
	event.remove({output: 'minecraft:diamond_pickaxe'})
	event.remove({output: 'minecraft:diamond_hoe'})
	event.remove({output: 'minecraft:diamond_shovel'})
	event.remove({output: 'minecraft:diamond_axe'})
	event.remove({output: 'minecraft:wooden_sword'})
	event.remove({output: 'minecraft:wooden_pickaxe'})
	event.remove({output: 'minecraft:wooden_hoe'})
	event.remove({output: 'minecraft:wooden_shovel'})
	event.remove({output: 'minecraft:wooden_axe'})
	event.remove({output: 'minecraft:stone_sword'})
	event.remove({output: 'minecraft:stone_pickaxe'})
	event.remove({output: 'minecraft:stone_hoe'})
	event.remove({output: 'minecraft:stone_shovel'})
	event.remove({output: 'minecraft:stone_axe'})
	
	event.remove({output: 'minecraft:furnace'})
	event.remove({output: 'minecraft:blast_furnace'})
	event.remove({output: 'automobility:auto_mechanic_table'})
  event.remove({output: 'automobility:automobile_assembler'})
	event.remove({output: 'campanion:grappling_hook'})
  event.remove({output: 'structures_compass:structures_compass'})
  event.remove({output: 'tconstruct:copper_nugget'})
  event.remove({output: 'techreborn:bronze_nugget'})

	
	event.remove({output: 'phonos:redstone_chip'})
	event.remove({mod: 'doodads'})
	event.remove({output: 'minecraft:bow'})
	event.remove({output: 'minecraft:crossbow'})
	event.remove({output: 'minecraft:arrow'})
	event.remove({mod: 'lchunkloader'})
	event.remove({mod: 'scout'})
	
	



	///// REMOVE UNNECCESARY DUPLICATE ITEMS / ISSUE ITEMS /////
	event.replaceInput('#c:iron_rods', 'createaddition:iron_rod')
	event.replaceInput('ad_astra:iron_stick', 'createaddition:iron_rod')
    event.replaceInput('catwalksinc:iron_rod', 'createaddition:iron_rod')
	event.remove({output: 'ad_astra:iron_stick'})
	event.remove({output: 'catwalksinc:iron_rod'})
	event.remove({output: 'polaroidcamera:camera'})
	event.remove({output: 'phonos:radio_player_piano'})
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'farmersdelight:rope', 'campanion:rope')
	event.remove({output: 'farmersdelight:rope'})
	event.remove({output: 'tconstruct:nether_grout'})
	event.replaceInput('tconstruct:scorched_brick', 'tconstruct:scorched_bricks')
  event.replaceInput({mod:'tconstruct'}, 'minecraft:quartz', 'ae2:charged_certus_quartz')
	event.remove({output: 'tconstruct:efln_ball'})
	event.remove({output: 'campanion:mre'})
	event.remove({output: 'campanion:day_pack'})
	event.remove({output: 'campanion:camping_pack'})
	event.remove({output: 'campanion:wooden_spear'})
	event.remove({output: 'campanion:stone_spear'})
	event.remove({output: 'campanion:iron_spear'})
	event.remove({output: 'campanion:diamond_spear'})
	event.remove({output: 'campanion:netherite_spear'})
	event.remove({output: 'campanion:golden_spear'})
	event.remove({output: 'create:electron_tube'})
	event.remove({output: 'minecraft:ender_eye'})
  event.remove({input: 'minecraft:crying_obsidian'})
	event.remove({output: 'bosses_of_mass_destruction:monolith_block'})
	event.remove({output: 'bosses_of_mass_destruction:charged_ender_pearl'})
	event.remove({output: 'bosses_of_mass_destruction:mob_ward'})
	event.remove({output: 'bosses_of_mass_destruction:levitation_block'})
	event.remove({output: 'bosses_of_mass_destruction:earthdive_spear'})
	





	///// MAINLY TINKERS CONSTRUCT REWORKING /////
	
	event.remove({output: 'tconstruct:smeltery_controller'})
	event.remove({output: 'tconstruct:seared_melter'})
	event.remove({output: 'tconstruct:scorched_alloyer'})
	event.remove({output: 'tconstruct:earth_slime_sling'})
	event.remove({output: 'tconstruct:sky_slime_sling'})
	event.remove({output: 'tconstruct:ender_slime_sling'})
  event.remove({output: 'tconstruct:seared_ingot_gauge'})
	event.remove({output: 'tconstruct:seared_ingot_tank'})
	event.remove({output: 'tconstruct:seared_fuel_gauge'})
	event.remove({output: 'tconstruct:seared_fuel_tank'})
  event.remove({output: 'tconstruct:seared_bricks'})
  event.remove({output: 'tconstruct:grout'})
  event.remove({output: 'tconstruct:scorched_bricks'})
	event.remove({type: 'create:mixing', output: 'create:brass_ingot'})
	event.remove({type: 'create:mixing', output: 'tconstruct:rose_gold_ingot'})
	event.remove({type: 'create:mixing', output: 'tconstruct:slimesteel_ingot'})
	event.remove({type: 'create:mixing', output: 'tconstruct:pig_iron_ingot'})
	event.remove({type: 'create:mixing', output: 'tconstruct:manyullyn_ingot'})
	event.remove({type: 'create:mixing', output: 'tconstruct:hepatizon_ingot'})
	event.remove({type: 'create:mixing', output: 'tconstruct:queens_slime_ingot'})
	event.remove({output: 'create:blaze_cake'})
  event.remove({output: 'tconstruct:blazing_blood'})
  event.remove({output: 'create:andesite_alloy', input: 'minecraft:andesite'})
	event.remove({type: 'tconstruct:entity_melting'})
	event.remove({type: 'tconstruct:alloy'})



  ///// SOME AD ASTRA CHANGES AND REMOVALS / REPLACEMENTS  /////



  event.remove({output: 'farmersdelight:cooking_pot'})
  event.remove({output: 'ad_astra:nasa_workbench'})
  event.remove({output: 'ad_astra:rocket_fin'})
	event.replaceInput({type: 'create:mechanical_crafting', mod: 'createaddition'}, 'create:andesite_alloy', 'techreborn:red_cell_battery')
  event.replaceInput({type: 'create:mechanical_crafting', mod: 'createaddition'}, 'createaddition:iron_rod', 'create:integrated_circuit')
	event.replaceInput({mod: 'createaddition'}, 'minecraft:redstone_torch', 'create:electron_tube')
	event.replaceInput({output: 'create:wand_of_symmetry'}, 'minecraft:ender_pearl', 'create:refined_radiance')
  event.replaceInput({output: 'ad_astra:engine_fan'}, 'ad_astra:compressed_steel', 'ad_astra:iron_plate')
  event.replaceInput({output: 'ad_astra:engine_frame'}, 'ad_astra:compressed_steel', 'ad_astra:iron_plate')
	event.replaceInput({output: 'create:mechanical_drill'}, 'minecraft:iron_ingot', 'create:iron_sheet')
	event.replaceInput({output: 'create:mechanical_crafter'}, 'minecraft:crafting_table', 'create:precision_mechanism')
  event.replaceInput({output: 'ad_astra:rocket_fin'}, 'ad_astra:steel_ingot', 'create:sturdy_sheet')
  event.replaceInput({output: 'ad_astra:engine_frame'}, 'ad_astra:steel_plate', 'create:sturdy_sheet')

	event.replaceInput({output: 'toms_storage:ts.adv_wireless_terminal'}, 'minecraft:netherite_ingot', 'tconstruct:hepatizon_ingot')
	event.replaceInput({output: 'createaddition:accumulator'}, 'create:brass_casing', 'techreborn:red_cell_battery')
	event.replaceInput({output: 'ad_astra:netherite_space_suit'}, 'ad_astra:oxygen_gear', 'techreborn:lead_plate')
  event.remove({output: 'ad_astra:launch_pad'})
  

  event.replaceInput({output: 'ad_astra:space_helmet'}, 'ad_astra:steel_ingot', 'create:sturdy_sheet')
  event.replaceInput({output: 'create:crushing_wheel'}, '#c:stone', 'techreborn:silver_ingot')
  event.replaceInput({output: 'ad_astra:space_helmet'}, 'minecraft:orange_stained_glass_pane', 'create:diving_helmet')
  event.replaceInput({output: 'ad_astra:space_pants'}, 'ad_astra:steel_ingot', 'create:sturdy_sheet')
  event.remove({output: 'ad_astra:space_boots'})
  event.replaceInput({output: 'ad_astra:space_suit'}, 'ad_astra:steel_ingot', 'create:sturdy_sheet')
  event.replaceInput({output: 'ad_astra:space_suit'}, 'ad_astra:oxygen_gear', 'create:copper_backtank')
  event.replaceInput({output: 'ad_astra:oxygen_tank'}, 'ad_astra:compressed_steel', 'createastral:bronze_sheet')
  event.replaceInput({output: 'ad_astra:oxygen_gear'}, 'ad_astra:compressed_steel', 'createastral:bronze_sheet')
  event.replaceInput({output: 'ad_astra:steel_tank'}, 'ad_astra:compressed_steel', 'ad_astra:iron_plate')
  event.replaceInput({output: 'ad_astra:rocket_nose_cone'}, 'ad_astra:compressed_steel', 'ad_astra:iron_plate')
	event.remove({type: 'automobility:automobile_assembler'})
	event.remove({output: 'create:cogwheel', type: 'minecraft:shaped'})
	event.remove({output: 'create:large_cogwheel', type: 'minecraft:shaped'})
	event.remove({output: 'create:cogwheel'})
	event.remove({output: 'create:large_cogwheel'})
	event.replaceInput({type: 'minecraft:smithing', mod: 'minecraft'}, 'minecraft:netherite_ingot', 'createastral:blazing_mechanism')
	event.remove({output: 'ad_astra:desh_fluid_pipe'})
	event.remove({output: 'ad_astra:ostrum_fluid_pipe'})
	event.remove({output: 'ad_astra:wrench'})
	event.remove({output: 'doodads:slimey_shoes'})
  event.replaceInput({output: 'ad_astra:calorite_tank'}, 'minecraft:bucket', 'createastral:blazing_mechanism')
  event.replaceInput({output: 'ad_astra:ostrum_tank'}, 'minecraft:bucket', 'tconstruct:blazing_blood_bucket')
  event.replaceInput({output: 'ad_astra:netherite_space_helmet'}, 'minecraft:netherite_helmet', 'createastral:sturdy_helmet')
  event.replaceInput({output: 'ad_astra:netherite_space_suit'}, 'minecraft:netherite_chestplate', 'createastral:sturdy_chestplate')
  event.replaceInput({output: 'ad_astra:netherite_space_pants'}, 'minecraft:netherite_leggings', 'createastral:sturdy_leggings')
  event.replaceInput({output: 'ad_astra:netherite_space_boots'}, 'minecraft:netherite_leggings', 'createastral:sturdy_boots')
  event.remove({output: 'ad_astra:jet_suit_helmet'})
  event.remove({output: 'ad_astra:jet_suit'})
  event.remove({output: 'ad_astra:jet_suit_pants'})
  event.remove({output: 'ad_astra:jet_suit_boots'})
  event.replaceInput({output: 'minecraft:lodestone'}, 'minecraft:netherite_ingot', 'createastral:blazing_mechanism')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:bronze_plate', 'createastral:bronze_sheet')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:bronze_ingot', 'createastral:bronze_ingot')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:copper_plate', 'create:copper_sheet')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:gold_plate', 'create:gold_sheet')
  event.remove({output: 'techreborn:iron_plate'})
  event.remove({output: 'create:copper_casing'})
  event.replaceInput({mod: 'techreborn'}, 'techreborn:steel_plate', 'ad_astra:steel_ingot')
  event.replaceInput({mod: 'techreborn'}, 'minecraft:redstone', 'ae2:certus_quartz_crystal')
  event.remove({output: 'ad_astra:desh_cable'})
  event.remove({output: 'ad_astra:steel_cable'})
  event.remove({output: 'techreborn:steel_ingot'})
  event.remove({output: 'create:brass_casing', type: 'create:item_application'})


//////// TECH REBORN SECTION  //////

///REMOVE ANNOYING ARMOUR AND TOOLS ////

  event.remove({output: 'techreborn:steel_block'})
  event.remove({output: 'techreborn:bronze_block'})
  event.remove({output: 'techreborn:copper_helmet'})
  event.remove({output: 'techreborn:copper_chestplate'})
  event.remove({output: 'techreborn:copper_leggings'})
  event.remove({output: 'techreborn:copper_boots'})
  event.remove({output: 'techreborn:copper_nugget'})
  event.remove({output: 'techreborn:copper_axe'})
  event.remove({output: 'techreborn:copper_sword'})
  event.remove({output: 'techreborn:copper_pickaxe'})
  event.remove({output: 'techreborn:copper_hoe'})
  event.remove({output: 'techreborn:copper_shovel'})
  event.remove({output: 'techreborn:tin_helmet'})
  event.remove({output: 'techreborn:tin_chestplate'})
  event.remove({output: 'techreborn:tin_leggings'})
  event.remove({output: 'techreborn:tin_boots'})
  event.remove({output: 'techreborn:tin_axe'})
  event.remove({output: 'techreborn:tin_sword'})
  event.remove({output: 'techreborn:tin_pickaxe'})
  event.remove({output: 'techreborn:tin_hoe'})
  event.remove({output: 'techreborn:tin_shovel'})

  event.remove({output: 'techreborn:lead_helmet'})
  event.remove({output: 'techreborn:lead_chestplate'})
  event.remove({output: 'techreborn:lead_leggings'})
  event.remove({output: 'techreborn:lead_boots'})
  event.remove({output: 'techreborn:lead_axe'})
  event.remove({output: 'techreborn:lead_sword'})
  event.remove({output: 'techreborn:lead_pickaxe'})
  event.remove({output: 'techreborn:lead_hoe'})
  event.remove({output: 'techreborn:lead_shovel'})

  event.remove({output: 'techreborn:steel_helmet'})
  event.remove({output: 'techreborn:steel_chestplate'})
  event.remove({output: 'techreborn:steel_leggings'})
  event.remove({output: 'techreborn:steel_boots'})
  event.remove({output: 'techreborn:steel_axe'})
  event.remove({output: 'techreborn:steel_sword'})
  event.remove({output: 'techreborn:steel_pickaxe'})
  event.remove({output: 'techreborn:steel_hoe'})
  event.remove({output: 'techreborn:steel_shovel'})

  event.remove({output: 'techreborn:tungsten_helmet'})
  event.remove({output: 'techreborn:tungsten_chestplate'})
  event.remove({output: 'techreborn:tungsten_leggings'})
  event.remove({output: 'techreborn:tungsten_boots'})
  event.remove({output: 'techreborn:tungsten_axe'})
  event.remove({output: 'techreborn:tungsten_sword'})
  event.remove({output: 'techreborn:tungsten_pickaxe'})
  event.remove({output: 'techreborn:tungsten_hoe'})
  event.remove({output: 'techreborn:tungsten_shovel'})

  event.remove({output: 'techreborn:bronze_helmet'})
  event.remove({output: 'techreborn:bronze_chestplate'})
  event.remove({output: 'techreborn:bronze_leggings'})
  event.remove({output: 'techreborn:bronze_boots'})
  event.remove({output: 'techreborn:bronze_axe'})
  event.remove({output: 'techreborn:bronze_sword'})
  event.remove({output: 'techreborn:bronze_pickaxe'})
  event.remove({output: 'techreborn:bronze_hoe'})
  event.remove({output: 'techreborn:bronze_shovel'})

  event.remove({output: 'techreborn:silver_helmet'})
  event.remove({output: 'techreborn:silver_chestplate'})
  event.remove({output: 'techreborn:silver_leggings'})
  event.remove({output: 'techreborn:silver_boots'})
  event.remove({output: 'techreborn:silver_axe'})
  event.remove({output: 'techreborn:silver_sword'})
  event.remove({output: 'techreborn:silver_pickaxe'})
  event.remove({output: 'techreborn:silver_hoe'})
  event.remove({output: 'techreborn:silver_shovel'})



  /// REMOVE REPLACED RECIPES




  event.remove({output: 'techreborn:electronic_circuit'})
  event.remove({output: 'techreborn:industrial_circuit'})
  event.remove({output: 'techreborn:energy_flow_chip'})
  event.remove({output: 'techreborn:lithium_ion_battery'})
  event.remove({mod: 'powah'})
  event.remove({output: 'techreborn:rubber', type: 'minecraft:smelting'})
  event.remove({output: 'techreborn:basic_machine_frame'})
  event.remove({output: 'techreborn:advanced_machine_frame'})
  event.remove({output: 'techreborn:industrial_machine_frame'})
  event.remove({output: 'techreborn:advanced_machine_casing'})
  event.remove({output: 'techreborn:industrial_machine_casing'})
  event.remove({output: 'techreborn:refined_iron_ingot'})
  event.remove({output: 'techreborn:fusion_coil'})


///REPLACE MAJOR CMOPONENTS TO MATCH ASTRAL PROGRESSION

  event.replaceInput({mod: 'techreborn'}, 'techreborn:refined_iron_plate', 'techreborn:silver_plate')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:refined_iron_ingot', 'techreborn:silver_plate')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:refined_iron_storage_block', 'techreborn:silver_storage_block')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:refined_iron_nugget', 'techreborn:silver_nugget')




  event.replaceInput({mod: 'techreborn'}, 'techreborn:aluminum_plate', 'techreborn:lead_plate')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:aluminum_ingot', 'techreborn:lead_plate')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:aluminum_storage_block', 'techreborn:lead_storage_block')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:aluminum_nugget', 'techreborn:lead_nugget')
  event.remove({output: 'techreborn:aluminum_plate'})
  event.remove({output: 'techreborn:aluminum_ingot'})
  event.remove({output: 'techreborn:aluminum_storage_block'})
  event.remove({output: 'techreborn:aluminum_nugget'})



  event.replaceInput({mod: 'techreborn'}, 'techreborn:tungsten_plate', 'ad_astra:compressed_steel')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:tungsten_ingot', 'ad_astra:compressed_steel')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:tungsten_storage_block', 'ad_astra:steel_block')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:tungsten_nugget', 'ad_astra:steel_nugget')
  event.remove({output: 'techreborn:tungsten_plate'})
  event.remove({output: 'techreborn:tungsten_ingot'})
  event.remove({output: 'techreborn:tungsten_storage_block'})
  event.remove({output: 'techreborn:tungsten_nugget'})

  event.replaceInput({mod: 'techreborn'}, 'techreborn:tungstensteel_plate', 'ad_astra:compressed_steel')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:tungstensteel_ingot', 'ad_astra:compressed_steel')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:tungstensteel_storage_block', 'ad_astra:steel_block')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:tungstensteel_nugget', 'ad_astra:steel_nugget')
  event.remove({output: 'techreborn:tungstensteel_plate'})
  event.remove({output: 'techreborn:tungstensteel_ingot'})
  event.remove({output: 'techreborn:tungstensteel_storage_block'})
  event.remove({output: 'techreborn:tungstensteel_nugget'})

  event.replaceInput({mod: 'techreborn'}, 'techreborn:chrome_plate', 'ad_astra:compressed_ostrum')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:chrome_ingot', 'ad_astra:compressed_ostrum')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:chrome_storage_block', 'ad_astra:ostrum_block')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:chrome_nugget', 'ad_astra:ostrum_nugget')
  event.remove({output: 'techreborn:chrome_plate'})
  event.remove({output: 'techreborn:chrome_ingot'})
  event.remove({output: 'techreborn:chrome_storage_block'})
  event.remove({output: 'techreborn:chrome_nugget'})

  event.replaceInput({mod: 'techreborn'}, 'techreborn:titanium_plate', 'ad_astra:compressed_calorite')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:titanium_ingot', 'ad_astra:compressed_calorite')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:titanium_storage_block', 'ad_astra:calorite_block')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:titanium_nugget', 'ad_astra:calorite_nugget')
  event.remove({output: 'techreborn:titanium_plate'})
  event.remove({output: 'techreborn:titanium_ingot'})
  event.remove({output: 'techreborn:titanium_storage_block'})
  event.remove({output: 'techreborn:titanium_nugget'})


  event.replaceInput({mod: 'techreborn'}, 'techreborn:platinum_plate', 'ad_astra:compressed_calorite')
  event.replaceInput({output: 'techreborn:implosion_compressor'}, 'techreborn:advanced_alloy_ingot', 'techreborn:advanced_alloy_plate')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:nickel_ingot', 'ad_astra:compressed_desh')

  event.replaceInput({mod: 'techreborn'}, 'techreborn:brass_plate', 'create:brass_sheet')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:brass_ingot', 'create:brass_ingot')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:brass_storage_block', 'create:brass_block')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:brass_nugget', 'create:brass_nugget')
  event.remove({output: 'techreborn:brass_plate'})
  event.remove({output: 'techreborn:brass_ingot'})
  event.remove({output: 'techreborn:brass_storage_block'})
  event.remove({output: 'techreborn:brass_nugget'})

  event.replaceInput({mod: 'techreborn'}, 'techreborn:electronic_circuit', 'create:integrated_circuit')
  event.replaceInput({mod: 'techreborn'}, 'minecraft:lapis_lazuli', 'techreborn:lead_plate')
  event.replaceInput({mod: 'techreborn', output: 'techreborn:red_cell_battery'}, 'techreborn:lead_ingot', 'techreborn:silver_plate')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:zinc_plate', 'createaddition:zinc_sheet')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:zinc_ingot', 'create:zinc_ingot')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:zinc_nugget', 'create:zinc_nugget')
  event.remove({output: 'techreborn:zinc_plate'})
  event.remove({output: 'techreborn:zinc_ingot'})
  event.remove({output: 'techreborn:zinc_storage_block'})
  event.remove({output: 'techreborn:zinc_nugget'})
  

 ///// APPLIED ENERGISTICS (AE2) OVERHAUL /////


  event.remove({output: 'ae2:fluix_dust'})
  event.remove({output: 'ae2:pattern_provider'})
  event.remove({output: 'ae2:blank_pattern'})
  event.remove({output: 'ae2:pattern_encoding_terminal'})
  event.remove({output: 'ae2:cable_pattern_provider'})
  event.remove({output: 'ae2:inscriber'})
  event.remove({output: 'ae2:controller', type: 'crafting_shaped'})
  event.replaceInput({mod: 'ae2'}, 'minecraft:iron_ingot', 'techreborn:silver_plate')
  event.replaceInput({mod: 'techreborn'}, 'minecraft:cobblestone', 'create:sturdy_sheet')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:data_storage_chip', 'createastral:subatomic_ingot')
  event.replaceInput({mod: 'techreborn'}, 'minecraft:stone', 'create:sturdy_sheet')
  event.replaceInput({mod: 'techreborn'}, 'minecraft:cobblestone', 'create:sturdy_sheet')
  event.replaceInput({mod: 'techreborn'}, 'minecraft:flint', 'create:sturdy_sheet')
  event.replaceInput({mod: 'ae2'}, 'minecraft:copper_ingot', 'techreborn:silver_plate')
  event.replaceInput({mod: 'ae2'}, 'minecraft:redstone', 'ae2:fluix_dust')
  event.replaceInput({mod: 'ae2'}, 'ae2:fluix_crystal', 'ae2:fluix_dust')
  event.replaceInput('techreborn:advanced_circuit', 'techreborn:electronic_circuit')
  event.replaceInput({output: 'gearreborn:hazmat_chestpiece'}, 'techreborn:electronic_circuit', 'create:integrated_circuit')
  event.replaceInput({output: 'gearreborn:hazmat_chestpiece'}, 'techreborn:reinforced_glass', '#c:glass')
  event.replaceOutput('techreborn:electronic_circuit', 'create:integrated_circuit')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:cupronickel_heating_coil', 'createastral:copper_heating_coil')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:peridot_plate', 'techreborn:emerald_plate')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:nichrome_heating_coil', 'createastral:ender_heating_coil')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:energy_crystal', 'create:precision')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:lapotron_crystal', 'create:precision_mechanism')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:advanced_alloy_plate', 'techreborn:lead_plate')
  event.replaceInput({mod: 'techreborn', output: 'techreborn:advanced_drill'}, 'ad_astra:compressed_calorite', 'techreborn:lead_plate')
  event.replaceInput({mod: 'techreborn', output: 'techreborn:advanced_chainsaw'}, 'ad_astra:compressed_calorite', 'techreborn:lead_plate')
  event.replaceInput({mod: 'techreborn', output: 'techreborn:advanced_jackhammer'}, 'ad_astra:compressed_calorite', 'techreborn:lead_plate')



  event.custom({
    "type":"createaddition:rolling",
    "input": {
          "tag": "c:nuggets/gold"
    },
    "result": {
      "item": "createastral:golden_pin",
      "count": 1
    }
  })

  event.custom({
    "type": "tconstruct:casting_table",
    "cast": {
      "item": "ae2:certus_quartz_dust"
    },
    "cast_consumed": true,
    "fluid": {
      "name": "kubejs:shimmer",
      "amount": 4500
    },
    "result": "ae2:fluix_dust",
    "cooling_time": 40
  })

  event.custom({
    "type": "tconstruct:casting_table",
    "cast": {
      "tag": "tconstruct:casts/multi_use/coin"
    },
    "cast_consumed": true,
    "fluid": {
      "name": "tconstruct:molten_bronze",
      "amount": 4000
    },
    "result": "create:cogwheel",
    "cooling_time": 100
  })

  event.custom({
    "type": "tconstruct:casting_table",
    "cast": {
      "tag": "tconstruct:casts/multi_use/gear"
    },
    "cast_consumed": true,
    "fluid": {
      "name": "tconstruct:molten_bronze",
      "amount": 12000
    },
    "result": "create:large_cogwheel",
    "cooling_time": 100
  })
/////// TECH REBORN ACTUAL RECIPES //////


event.recipes.createMixing('techreborn:rubber', [
  'techreborn:sap'
]).processingTime(50)

event.recipes.createSequencedAssembly([ // begin
'create:copper_casing', // output
], 'create:andesite_casing', [ // input
event.recipes.createDeploying('create:andesite_casing', ['techreborn:rubber', 'techreborn:rubber']), 
event.recipes.createDeploying('create:andesite_casing', ['create:copper_sheet', 'create:copper_sheet']), 
]).transitionalItem('create:andesite_casing').loops(1) 

event.recipes.createSequencedAssembly([ // begin
'createastral:incomplete_electronic_circuit', // output
], 'create:integrated_circuit', [ // input
event.recipes.createDeploying('create:integrated_circuit', ['create:integrated_circuit', 'createastral:electrified_pin']), 
]).transitionalItem('create:integrated_circuit').loops(64) 

event.recipes.createSequencedAssembly([ // begin
'techreborn:electronic_circuit', // output
], 'createastral:incomplete_electronic_circuit', [ // input
event.recipes.createDeploying('createastral:incomplete_electronic_circuit', ['createastral:incomplete_electronic_circuit', 'ad_astra:compressed_ostrum']), 
event.recipes.createPressing('createastral:incomplete_electronic_circuit', 'createastral:incomplete_electronic_circuit')
]).transitionalItem('createastral:incomplete_electronic_circuit').loops(1) 






  event.replaceInput({mod: 'phonos'}, 'minecraft:iron_ingot', 'techreborn:tin_ingot')
  event.replaceInput({mod: 'farmersdelight'}, 'minecraft:iron_ingot', 'techreborn:tin_ingot')
  event.replaceInput({mod: 'drinkbeer'}, 'minecraft:iron_ingot', 'techreborn:tin_ingot')

  //Tinker's Construct Reworking (New fluids and recipes)
	//Tier 2 and 3 materials
	
	event.smithing('createastral:bronze_ingot', 'techreborn:tin_ingot', 'minecraft:copper_ingot')
  event.smithing('createastral:bronze_ingot', 'minecraft:copper_ingot', 'techreborn:tin_ingot')

  event.shaped('tconstruct:seared_fuel_tank', [
    'CCC',
    'BDB',
    'AAA'
  ], {
    A: 'tconstruct:seared_brick',
    B: '#c:glass',
    C: 'create:brass_sheet',
    D: 'create:fluid_tank'
    
  })
  event.shaped('tconstruct:seared_fuel_gauge', [
    'CAC',
    'BDB',
    'ACA'
  ], {
    A: 'tconstruct:seared_brick',
    B: '#c:glass',
    C: 'create:brass_sheet',
    D: 'create:fluid_tank'
    
  })
  event.shaped('tconstruct:seared_ingot_tank', [
    'ACA',
    'ADA',
    'ACA'
  ], {
    A: 'tconstruct:seared_brick',
    C: 'create:brass_sheet',
    D: 'create:fluid_tank'
    
  })
  event.shaped('tconstruct:seared_ingot_gauge', [
    'AAA',
    'CDC',
    'AAA'
  ], {
    A: 'tconstruct:seared_brick',
    C: 'create:brass_sheet',
    D: 'create:fluid_tank'
    
  })
	
	event.shaped('tconstruct:seared_melter', [
    'CWC',
    'SSS',
    'CSC'
  ], {
    S: 'tconstruct:seared_bricks',
	W: 'create:fluid_tank',
  C: 'create:zinc_ingot'	 
	 })
	 	event.shaped('tconstruct:smeltery_controller', [
    'DDD',
    'SWS',
	'SSS'
  ], {
    S: 'tconstruct:seared_brick',
	W: 'createastral:blazing_mechanism',
	D: 'minecraft:copper_ingot'
	 })


	
	event.recipes.createMixing(Fluid.of('tconstruct:molten_brass', 16200), [
    'minecraft:copper_ingot',
    'create:zinc_ingot'
]).heated().processingTime(300)
	event.recipes.createMixing(Fluid.of('tconstruct:molten_brass', 810), [
    {fluid: 'tconstruct:molten_copper', amount: 405},
    {fluid: 'tconstruct:molten_zinc', amount: 405}
]).heated().processingTime(5)
	event.recipes.createMixing(Fluid.of('tconstruct:molten_amethyst_bronze', 8100), [
    'createastral:bronze_ingot',
    'minecraft:amethyst_shard'
]).heated().processingTime(300)
	event.recipes.createMixing(Fluid.of('tconstruct:molten_amethyst_bronze', 405), [
    {fluid: 'tconstruct:molten_bronze', amount: 405},
    {fluid: 'tconstruct:molten_amethyst', amount: 405}
]).heated()
event.recipes.createMixing(Fluid.of('tconstruct:molten_bronze', 810), [
  {fluid: 'tconstruct:molten_tin', amount: 405},
  {fluid: 'tconstruct:molten_copper', amount: 405}
]).heated()

// 	event.recipes.createMixing(Fluid.of('tconstruct:molten_rose_gold', 8100), [
//     'minecraft:copper_ingot',
//     'minecraft:gold_ingot'
// ]).processingTime(300)

//  Heated ingot version of above recipe
// TODO: does the fluid amount output add up to an ammount that makes sense?
	event.recipes.createMixing(Fluid.of('tconstruct:molten_rose_gold', 8100), [
    'minecraft:copper_ingot',
    'minecraft:gold_ingot'
]).processingTime(300).heated()

event.recipes.createMixing(Fluid.of('tconstruct:molten_bronze', 16200), [
  'minecraft:copper_ingot',
  'techreborn:tin_ingot'
]).processingTime(300)

	event.recipes.createMixing(Fluid.of('tconstruct:molten_rose_gold', 405), [
    {fluid: 'tconstruct:molten_copper', amount: 405},
    {fluid: 'tconstruct:molten_gold', amount: 405}
]).processingTime(10)
event.recipes.createMixing(Fluid.of('tconstruct:molten_electrum', 405), [
  {fluid: 'tconstruct:molten_silver', amount: 405},
  {fluid: 'tconstruct:molten_gold', amount: 405}
]).heated()
 	event.recipes.createMixing(Fluid.of('tconstruct:molten_slimesteel', 8100), [
    'minecraft:iron_ingot',
    'tconstruct:sky_slime_ball',
	'#tconstruct:seared_blocks'
]).heated().processingTime(300)
	event.recipes.createMixing(Fluid.of('tconstruct:molten_slimesteel', 9000), [
    {fluid: 'tconstruct:molten_iron', amount: 9000},
    {fluid: 'tconstruct:sky_slime', amount: 20250},
	'#tconstruct:seared_blocks'
]).heated().processingTime(40)
 
	event.recipes.createMixing('3x create:blaze_cake_base', [
    'tconstruct:ender_slime_ball',
	'tconstruct:ichor_slime_ball',
  'ad_astra:cheese'
]).heated().processingTime(300)
	event.recipes.createFilling('create:blaze_cake', [
  'create:blaze_cake_base',
  {fluid: 'tconstruct:blazing_blood', amount: 20250},
])
event.recipes.createFilling('techreborn:lithium_ion_battery', [
  'techreborn:red_cell_battery',
  {fluid: 'techreborn:lithium', amount: 81000},
])

	event.recipes.createMixing(Fluid.of('tconstruct:molten_pig_iron', 8100), [
    'minecraft:porkchop',
    'minecraft:iron_ingot',
	'minecraft:emerald'
]).heated().processingTime(300)
	event.recipes.createMixing(Fluid.of('tconstruct:molten_pig_iron', 9000), [
    'minecraft:porkchop',
    {fluid: 'tconstruct:molten_iron', amount: 9000},
	{fluid: 'tconstruct:molten_emerald', amount: 9000}
]).heated().processingTime(250)
	//Tinker's Construct Reworking (New fluids and recipes)
	//Tier 4 materials
 
 	event.recipes.createMixing('3x tconstruct:nether_grout', [
   'minecraft:magma_cream',
   'minecraft:soul_sand',
   'minecraft:gravel',
   'create:powdered_obsidian',
   'create:powdered_obsidian',
   'create:powdered_obsidian'

 ]).heated().processingTime(700)
 
	event.recipes.createMixing(Fluid.of('tconstruct:molten_queens_slime', 810), [
    {fluid: 'tconstruct:molten_cobalt', amount: 405},
	{fluid: 'tconstruct:molten_tungsten', amount: 810},
]).heated().processingTime(5)
	event.recipes.createMixing(Fluid.of('tconstruct:molten_manyullyn', 12000), [
    {fluid: 'tconstruct:molten_cobalt', amount: 32400},
    '2x minecraft:netherite_scrap',
	{fluid: 'kubejs:molten_desh', amount: 9000},
]).heated().processingTime(1000)

	event.recipes.createMixing(Fluid.of('tconstruct:molten_hepatizon', 810), [
    {fluid: 'tconstruct:molten_cobalt', amount: 405},
    {fluid: 'tconstruct:molten_lead', amount: 810},
]).heated().processingTime(5)
	
		event.recipes.createMixing(Fluid.of('tconstruct:molten_debris', 20250), [
    'minecraft:ancient_debris'
]).heated().processingTime(500)
	
	
	
	//BOW // CROSSBOW
	event.shaped('minecraft:bow', [
    '   ',
    'CCA',
    ' BC'
  ], {
    A: 'minecraft:gunpowder',
	B: 'create:analog_lever',
	C: 'minecraft:copper_ingot'
	})
		 	event.recipes.createMechanicalCrafting('minecraft:crossbow', [
  ' CCA ',
  'AABDB'
], {
  A: 'create:iron_sheet',
  B: '#minecraft:logs',
  C: 'minecraft:gunpowder',
  D: 'create:precision_mechanism'
  
})
	event.shaped('8x minecraft:arrow', [
    ' B ',
    ' B ',
    ' A '
  ], {
    A: 'minecraft:gunpowder',
	B: 'minecraft:copper_ingot'
	})
	
	// COMPUTERCRAFT
	
	event.replaceInput({mod: 'computercraft'}, 'minecraft:gold_ingot', 'create:brass_sheet')
	event.replaceInput({mod: 'cccbridge'}, 'create:golden_sheet', 'create:brass_sheet')
	event.replaceInput({mod: 'computercraft'}, '#c:stones', 'create:andesite_alloy')
	event.replaceInput({mod: 'toms_storage'}, '#minecraft:planks', 'create:andesite_alloy')
	event.replaceInput({mod: 'toms_storage'}, 'minecraft:stick', 'createaddition:iron_rod')
	event.replaceInput({mod: 'toms_storage'}, 'minecraft:paper', 'create:filter')
  event.replaceInput({mod: 'toms_storage'}, 'minecraft:crafting_table', 'techreborn:silver_plate')
  event.replaceInput({mod: 'toms_storage'}, 'minecraft:ender_pearl', 'techreborn:silver_plate')
	event.replaceInput({mod: 'computercraft'}, 'minecraft:redstone', 'create:polished_rose_quartz')
	event.replaceInput({mod: 'computercraft'}, 'minecraft:iron_ingot', 'create:iron_sheet')
	event.replaceInput({mod: 'computercraft'}, 'minecraft:golden_apple', 'create:display_board')
	event.remove({output: 'computercraft:turtle_advanced'})
	event.remove({output: 'computercraft:computer_advanced'})
	event.remove({output: 'computercraft:pocket_computer_advanced'})
	event.remove({output: 'ad_astra:compressor'})
	event.remove({output: 'scout:upgraded_pouch'})
	event.replaceInput({output: 'computercraft:computer_normal'}, 'create:electron_tube', 'create:polished_rose_quartz')
	event.replaceInput({output: 'computercraft:turtle_normal'}, 'create:electron_tube', 'create:polished_rose_quartz')
  
	
	
	/////  ASSORTED MECHANICAL CRAFTING  //////
	
	event.recipes.createMechanicalCrafting('ad_astra:compressor', [
  'ACCA',
  'B  D',
  'AEEA'
], {
  A: 'ad_astra:iron_plate',
  B: 'create:electron_tube',
  C: 'create:mechanical_press',
  D: 'create:precision_mechanism',
  E: 'techreborn:silver_block'
  
})

event.recipes.createMechanicalCrafting('ad_astra:nasa_workbench', [
  'EFE',
  'CDC',
  'ABA'
], {
  A: 'minecraft:redstone_block',
  B: 'ad_astra:desh_block',
  C: 'ad_astra:compressed_desh',
  D: 'createastral:navigation_mechanism',
  E: 'create:integrated_circuit',
  F: 'create:mechanical_arm'
  
})

	event.recipes.createMechanicalCrafting('ad_astra:solar_panel', [
  'DDD',
  ' B ',
  'ACA',
  'AEA'
], {
  A: 'ad_astra:compressed_desh',
  B: 'create:integrated_circuit',
  C: 'createastral:navigation_mechanism',
  D: 'minecraft:blue_stained_glass',
  E: 'techreborn:insulated_hv_cable'
  })

  event.recipes.createMechanicalCrafting('ad_astra:coal_generator', [
    'ABCBA',
    'AAEAA'
  ], {
    A: 'ad_astra:compressed_steel',
    B: 'techreborn:lead_ingot',
    C: 'create:precision_mechanism',
    E: 'ad_astra:engine_fan'
    })
		 	event.recipes.createMechanicalCrafting('computercraft:computer_advanced', [
  'AAA',
  'BCB',
  'ADA'
], {
  A: 'create:brass_sheet',
  B: 'create:electron_tube',
  C: 'create:display_board',
  D: 'create:precision_mechanism'
  
})
	 	event.recipes.createMechanicalCrafting('computercraft:pocket_computer_advanced', [
  ' E ',
  'AAA',
  'CBC',
  'ADA'
], {
  A: 'create:brass_sheet',
  B: 'create:electron_tube',
  C: 'create:display_board',
  D: 'create:precision_mechanism',
  E: 'create:redstone_link'
  
})
event.recipes.createMechanicalCrafting('computercraft:turtle_advanced', [
  'ADA',
  'ABA',
  ' C '
], {
  A: 'create:brass_sheet',
  B: 'computercraft:turtle_normal',
  C: 'ad_astra:steel_block',
  D: 'create:precision_mechanism'
  
})

event.recipes.createMechanicalCrafting('polaroidcamera:camera', [
  'AAA',
  'CBC',
  'CDC'
], {
  A: 'create:brass_sheet',
  B: 'create:electron_tube',
  C: 'techreborn:tin_ingot',
  D: 'create:precision_mechanism'
  
})

event.recipes.createMechanicalCrafting('scout:upgraded_pouch', [
  ' B ',
  'AEA',
  'CCC'
], {
  A: 'create:railway_casing',
  B: 'create:zinc_nugget',
  C: 'minecraft:leather',
  E: 'campanion:leather_pouch'
  
})
	
	event.recipes.createMechanicalCrafting('ad_astra:fuel_refinery', [
  'BDCDB',
  'BAEAB',
  'BBEBB'
], {
  A: 'create:attribute_filter',
  B: 'ad_astra:compressed_steel',
  C: 'create:mechanical_mixer',
  D: 'create:precision_mechanism',
  E: 'create:fluid_tank'
  
})
	event.recipes.createMechanicalCrafting('ad_astra:oxygen_loader', [
  'BBABB',
  'BDEDB',
  'BBCBB'
], {
  A: 'ad_astra:oxygen_tank',
  B: '#c:iron_plates',
  C: 'ad_astra:engine_fan',
  D: 'create:smart_fluid_pipe',
  E: 'create:fluid_tank'
  
})

	event.recipes.createMechanicalCrafting('ad_astra:energizer', [
  ' E ',
  'ADA',
  'ACA',
  'BAB'
], {
  A: 'ad_astra:compressed_ostrum',
  B: 'ad_astra:ostrum_block',
  C: 'tconstruct:cobalt_block',
  D: 'createastral:navigation_mechanism',
  E: 'createaddition:accumulator'
  
})

	event.recipes.createMechanicalCrafting('bosses_of_mass_destruction:mob_ward', [
  'B',
  'C',
  'D',
  'A'
], {
  A: 'tconstruct:hepatizon_block',
  B: 'bosses_of_mass_destruction:ancient_anima',
  C: 'bosses_of_mass_destruction:obsidian_heart',
  D: 'minecraft:crying_obsidian'
  })
  	event.recipes.createMechanicalCrafting('bosses_of_mass_destruction:monolith_block', [
  'DDD',
  'BCB',
  'DBD',
  'DAD'
], {
  A: 'tconstruct:hepatizon_block',
  B: 'create:powdered_obsidian',
  C: 'bosses_of_mass_destruction:obsidian_heart',
  D: 'minecraft:obsidian'
  })
  
  event.recipes.createMechanicalCrafting('bosses_of_mass_destruction:earthdive_spear', [
  '   C',
  '  B ',
  ' A  ',
  'A   '
], {
  A: 'campanion:wooden_rod',
  B: 'bosses_of_mass_destruction:void_thorn',
  C: 'bosses_of_mass_destruction:obsidian_heart',
  })
  
	event.recipes.createMechanicalCrafting('bosses_of_mass_destruction:charged_ender_pearl', [
  'BDD',
  'DAD',
  'DDC'
], {
  A: 'minecraft:ender_eye',
  B: 'bosses_of_mass_destruction:blazing_eye',
  C: 'bosses_of_mass_destruction:obsidian_heart',
  D: 'minecraft:ender_pearl',
  })
  
  event.recipes.createMechanicalCrafting('bosses_of_mass_destruction:levitation_block', [
  ' C ',
  'DBA',
  'EEE'
], {
  A: 'createastral:blazing_mechanism',
  B: 'bosses_of_mass_destruction:blazing_eye',
  C: 'bosses_of_mass_destruction:ancient_anima',
  D: 'createastral:navigation_mechanism',
  E: 'minecraft:obsidian'
  })

  event.recipes.createMechanicalCrafting('ad_astra:jet_suit', [
    '  F  ',
    'AAGAA',
    ' BEB ',
    ' CDC '
  ], {
    A: 'ad_astra:compressed_calorite',
    B: 'ad_astra:calorite_tank',
    C: 'ad_astra:calorite_block',
    D: 'ad_astra:calorite_engine',
    E: Item.of('ad_astra:netherite_space_suit').ignoreNBT(),
    F: 'createastral:subatomic_ingot',
    G: 'createastral:navigation_mechanism'
    
  })
  event.recipes.createMechanicalCrafting('ad_astra:jet_suit_helmet', [
    ' F ',
    'AEA',
    'AGA'
  ], {
    A: 'ad_astra:compressed_calorite',
    E: Item.of('ad_astra:netherite_space_helmet').ignoreNBT(),
    F: 'create:integrated_circuit',
    G: 'createastral:subatomic_ingot'
    
  })
  event.recipes.createMechanicalCrafting('ad_astra:jet_suit_pants', [
    'CEC',
    'AFA',
    'A A',
    'A A'
  ], {
    A: 'ad_astra:compressed_calorite',
    C: 'ad_astra:calorite_block',
    E: Item.of('ad_astra:netherite_space_pants').ignoreNBT(),
    F: 'createastral:subatomic_ingot',
  
  })
  event.recipes.createMechanicalCrafting('ad_astra:jet_suit_boots', [
    'FEF',
    'A A',
    'C C'
  ], {
    A: 'ad_astra:compressed_calorite',
    C: 'ad_astra:calorite_block',
    E: Item.of('ad_astra:netherite_space_boots').ignoreNBT(),
    F: 'dustrial_decor:padded_block',
  
    })
  
  
    event.recipes.createMechanicalCrafting('ad_astra:launch_pad', [
      'CCCCCC',
      'CABABC',
      'CBABAC',
      'CABABC',
      'CBABAC',
      'CCCCCC',
      
    ], {
      A: 'techreborn:silver_plate',
      B: 'ad_astra:iron_plate',
      C: 'create:sturdy_sheet'
  
    })
  
    event.recipes.createMechanicalCrafting('2x techreborn:fusion_coil', [
      'CCCCC',
      'CBBBC',
      'CBDBC',
      'CBBBC',
      'CCCCC',
      
    ], {
      B: 'techreborn:insulated_hv_cable',
      C: 'create:sturdy_sheet',
      D: 'techreborn:advanced_machine_casing'
  
    })

    

///COMPUTERCRAFT FIXES



event.shaped(Item.of('computercraft:turtle_normal', {RightUpgrade:"minecraft:diamond_pickaxe"}),
  'BAC',
 {
  A: 'computercraft:turtle_normal',
  B: 'minecraft:iron_pickaxe',
  C: 'minecraft:diamond'

})
event.shaped(Item.of('computercraft:turtle_normal', {RightUpgrade:"minecraft:diamond_axe"}),
'BAC',
 {
  A: 'computercraft:turtle_normal',
  B: 'minecraft:iron_axe',
  C: 'minecraft:diamond'

})
event.shaped(Item.of('computercraft:turtle_normal', {RightUpgrade:"minecraft:diamond_shovel"}),
'BAC',
 {
  A: 'computercraft:turtle_normal',
  B: 'minecraft:iron_shovel',
  C: 'minecraft:diamond'

})
event.shaped(Item.of('computercraft:turtle_normal', {RightUpgrade:"minecraft:diamond_sword"}),
'BAC',
 {
  A: 'computercraft:turtle_normal',
  B: 'minecraft:iron_sword',
  C: 'minecraft:diamond'
})
event.shaped(Item.of('computercraft:turtle_normal', {RightUpgrade:"minecraft:diamond_hoe"}),
'BAC',
 {
  A: 'computercraft:turtle_normal',
  B: 'minecraft:iron_hoe',
  C: 'minecraft:diamond'

})




///PRESS PLATES WITH CREATE

event.recipes.createPressing('techreborn:tungsten_plate', 'techreborn:tungsten_ingot')
event.recipes.createPressing('techreborn:silver_plate', 'techreborn:silver_ingot')
event.recipes.createPressing('techreborn:tin_plate', 'techreborn:tin_ingot')
event.recipes.createPressing('techreborn:lead_plate', 'techreborn:lead_ingot')
event.recipes.createPressing('techreborn:electrum_plate', 'techreborn:electrum_ingot')
event.recipes.createPressing('create:lapis_sheet', 'minecraft:lapis_block')






	
	
	
	
	
	
	
	
	
	// IRON TOOLS RECIPES / DIAMOND
	
	event.recipes.createSequencedAssembly([ // begin
        'minecraft:diamond_helmet', // output
		], Item.of('createastral:brass_helmet').ignoreNBT(), [ // input
		event.recipes.createFilling('createastral:brass_helmet', ['createastral:brass_helmet', {fluid: 'tconstruct:molten_diamond', amount: 20250}]), //fill 1/4 bucket lava
	]).transitionalItem('createastral:brass_helmet').loops(4) 

	event.recipes.createSequencedAssembly([ // begin
        'minecraft:diamond_chestplate', // output
		], Item.of('createastral:brass_chestplate').ignoreNBT(), [ // input
		event.recipes.createFilling('createastral:brass_chestplate', ['createastral:brass_chestplate', {fluid: 'tconstruct:molten_diamond', amount: 20250}]), //fill 1/4 bucket 
	]).transitionalItem('createastral:brass_chestplate').loops(8) 

	event.recipes.createSequencedAssembly([ // begin
        'minecraft:diamond_leggings', // output
		], Item.of('createastral:brass_leggings').ignoreNBT(), [ // input
		event.recipes.createFilling('createastral:brass_leggings', ['createastral:brass_leggings', {fluid: 'tconstruct:molten_diamond', amount: 20250}]), //fill 1/4 bucket 
	]).transitionalItem('createastral:brass_leggings').loops(6) 

	event.recipes.createSequencedAssembly([ // begin
        'minecraft:diamond_boots', // output
		], Item.of('createastral:brass_boots').ignoreNBT(), [ // input
		event.recipes.createFilling('createastral:brass_boots', ['createastral:brass_boots', {fluid: 'tconstruct:molten_diamond', amount: 20250}]), //fill 1/4 bucket 
	]).transitionalItem('createastral:brass_boots').loops(5) 

  event.recipes.createSequencedAssembly([ // begin
  'minecraft:diamond_pickaxe', // output
], Item.of('createastral:brass_pickaxe').ignoreNBT(), [ // input
event.recipes.createFilling('createastral:brass_pickaxe', ['createastral:brass_pickaxe', {fluid: 'tconstruct:molten_diamond', amount: 20250}]), //fill 1/4 bucket 
]).transitionalItem('createastral:brass_pickaxe').loops(2) 

event.recipes.createSequencedAssembly([ // begin
  'minecraft:diamond_axe', // output
], Item.of('createastral:brass_axe').ignoreNBT(), [ // input
event.recipes.createFilling('createastral:brass_axe', ['createastral:brass_axe', {fluid: 'tconstruct:molten_diamond', amount: 20250}]), //fill 1/4 bucket 
]).transitionalItem('createastral:brass_axe').loops(2) 

event.recipes.createSequencedAssembly([ // begin
  'minecraft:diamond_shovel', // output
], Item.of('createastral:brass_shovel').ignoreNBT(), [ // input
event.recipes.createFilling('createastral:brass_shovel', ['createastral:brass_shovel', {fluid: 'tconstruct:molten_diamond', amount: 20250}]), //fill 1/4 bucket 
]).transitionalItem('createastral:brass_shovel').loops(1) 

event.recipes.createSequencedAssembly([ // begin
  'minecraft:diamond_sword', // output
], Item.of('createastral:brass_sword').ignoreNBT(), [ // input
event.recipes.createFilling('createastral:brass_sword', ['createastral:brass_sword', {fluid: 'tconstruct:molten_diamond', amount: 20250}]), //fill 1/4 bucket 
]).transitionalItem('createastral:brass_sword').loops(2) 

event.recipes.createSequencedAssembly([ // begin
  'minecraft:diamond_hoe', // output
], Item.of('createastral:brass_hoe').ignoreNBT(), [ // input
event.recipes.createFilling('createastral:brass_hoe', ['createastral:brass_hoe', {fluid: 'tconstruct:molten_diamond', amount: 20250}]), //fill 1/4 bucket
]).transitionalItem('createastral:brass_hoe').loops(1) 

event.recipes.createFilling('structures_compass:structures_compass', [
  'minecraft:compass',
  {fluid: 'tconstruct:molten_iron', amount: 40500},
])



///// THIS SHIT IS SO INNEFICIENT BUT IT WAS THE FIRST THING I CODED SO IM JUST GOING TO LEAVE IT /////

	event.shaped('minecraft:iron_chestplate', [
    'S S',
    'SSS',
    'SSS'
  ], {
    S: 'create:iron_sheet'
	})
	event.shaped('minecraft:iron_helmet', [
    'SSS',
    'S S',
    '   '
  ], {
    S: 'create:iron_sheet'
	})
	event.shaped('minecraft:iron_leggings', [
    'SSS',
    'S S',
    'S S'
  ], {
    S: 'create:iron_sheet'
	})
	event.shaped('minecraft:iron_boots', [
    '   ',
    'S S',
    'S S'
  ], {
    S: 'create:iron_sheet'
	})
	event.shaped('minecraft:iron_sword', [
    ' S ',
    ' S ',
    ' W '
  ], {
    S: 'create:iron_sheet',
	W: 'minecraft:stick'
	})
	event.shaped('minecraft:iron_shovel', [
    ' S ',
    ' W ',
    ' W '
  ], {
    S: 'create:iron_sheet',
	W: 'minecraft:stick'
	})
	event.shaped('minecraft:iron_axe', [
    ' SS',
    ' WS',
    ' W '
  ], {
    S: 'create:iron_sheet',
	W: 'minecraft:stick'
	})
	event.shaped('minecraft:iron_hoe', [
    'SS ',
    ' W ',
    ' W '
  ], {
    S: 'create:iron_sheet',
	W: 'minecraft:stick'
	})
    event.shaped('minecraft:iron_pickaxe', [
    'SSS',
    ' W ',
    ' W '
  ], {
    S: 'create:iron_sheet',
	W: 'minecraft:stick'	 
	 })
	 
	 
	 // COPPER TOOLS RECIPES
	event.shaped('createastral:copper_chestplate', [
    'S S',
    'SSS',
    'SSS'
  ], {
    S: 'minecraft:copper_ingot'
	})
	event.shaped('createastral:copper_helmet', [
    'SSS',
    'S S',
    '   '
  ], {
    S: 'minecraft:copper_ingot'
	})
	event.shaped('createastral:copper_leggings', [
    'SSS',
    'S S',
    'S S'
  ], {
    S: 'minecraft:copper_ingot'
	})
	event.shaped('createastral:copper_boots', [
    '   ',
    'S S',
    'S S'
  ], {
    S: 'minecraft:copper_ingot'
	})
	event.shaped('createastral:copper_sword', [
    ' S ',
    ' S ',
    ' W '
  ], {
    S: 'minecraft:copper_ingot',
	W: 'minecraft:stick'
	})
	event.shaped('createastral:copper_shovel', [
    ' S ',
    ' W ',
    ' W '
  ], {
    S: 'minecraft:copper_ingot',
	W: 'minecraft:stick'
	})
	event.shaped('createastral:copper_axe', [
    ' SS',
    ' WS',
    ' W '
  ], {
    S: 'minecraft:copper_ingot',
	W: 'minecraft:stick'
	})
	event.shaped('createastral:copper_hoe', [
    'SS ',
    ' W ',
    ' W '
  ], {
    S: 'minecraft:copper_ingot',
	W: 'minecraft:stick'
	})
    event.shaped('createastral:copper_pickaxe', [
    'SSS',
    ' W ',
    ' W '
  ], {
    S: 'minecraft:copper_ingot',
	W: 'minecraft:stick'	 
	 })

	 
	 
	 // BRASS TOOLS RECIPES
	event.shaped('createastral:brass_chestplate', [
    'S S',
    'SSS',
    'SSS'
  ], {
    S: 'create:brass_sheet'
	})
	event.shaped('createastral:brass_helmet', [
    'SSS',
    'S S',
    '   '
  ], {
    S: 'create:brass_sheet'
	})
	event.shaped('createastral:brass_leggings', [
    'SSS',
    'S S',
    'S S'
  ], {
    S: 'create:brass_sheet'
	})
	event.shaped('createastral:brass_boots', [
    '   ',
    'S S',
    'S S'
  ], {
    S: 'create:brass_sheet'
	})
	event.shaped('createastral:brass_sword', [
    ' S ',
    ' S ',
    ' W '
  ], {
    S: 'create:brass_sheet',
	W: 'minecraft:stick'
	})
	event.shaped('createastral:brass_shovel', [
    ' S ',
    ' W ',
    ' W '
  ], {
    S: 'create:brass_sheet',
	W: 'minecraft:stick'
	})
	event.shaped('createastral:brass_axe', [
    ' SS',
    ' WS',
    ' W '
  ], {
    S: 'create:brass_sheet',
	W: 'minecraft:stick'
	})
	event.shaped('createastral:brass_hoe', [
    'SS ',
    ' W ',
    ' W '
  ], {
    S: 'create:brass_sheet',
	W: 'minecraft:stick'
	})
    event.shaped('createastral:brass_pickaxe', [
    'SSS',
    ' W ',
    ' W '
  ], {
    S: 'create:brass_sheet',
	W: 'minecraft:stick'	 
	 })
	 
	 
	 //STEEL ARMOUR and STURDY ARMOUR
	 
	 event.shaped('createastral:steel_chestplate', [
    'S S',
    'SSS',
    'SSS'
  ], {
    S: 'ad_astra:steel_ingot'
	})
	event.shaped('createastral:steel_helmet', [
    'SSS',
    'S S',
    '   '
  ], {
    S: 'ad_astra:steel_ingot'
	})
	event.shaped('createastral:steel_leggings', [
    'SSS',
    'S S',
    'S S'
  ], {
    S: 'ad_astra:steel_ingot'
	})
	event.shaped('createastral:steel_boots', [
    '   ',
    'S S',
    'S S'
  ], {
    S: 'ad_astra:steel_ingot'
	})

  event.shaped('ad_astra:space_boots', [
    'S S',
    'BAB'
  ], {
    S: 'minecraft:white_wool',
    A: 'create:diving_boots',
    B: 'create:sturdy_sheet'
	})
	
	event.shaped('createastral:sturdy_chestplate', [
    'S S',
    'SSS',
    'SSS'
  ], {
    S: 'createastral:sturdy_sheet_block'
	})
	event.shaped('createastral:sturdy_helmet', [
    'SSS',
    'S S',
    '   '
  ], {
    S: 'createastral:sturdy_sheet_block'
	})
	event.shaped('createastral:sturdy_leggings', [
    'SSS',
    'S S',
    'S S'
  ], {
    S: 'createastral:sturdy_sheet_block'
	})
	event.shaped('createastral:sturdy_boots', [
    '   ',
    'S S',
    'S S'
  ], {
    S: 'createastral:sturdy_sheet_block'
	})
	 
	 ///// SMELTING BLOCK RECIPE CHANGES
	 
	 event.shaped('minecraft:furnace', [
    'AAA',
    'A A',
    'SSS'
  ], {
    S: 'techreborn:raw_tin',
	A: 'minecraft:cobblestone'
	})
	event.shaped('minecraft:blast_furnace', [
    'AAA',
    'ASA',
    'BBB'
  ], {
    S: 'minecraft:furnace',
	A: 'techreborn:tin_plate',
	B: 'minecraft:stone'
	})

	 
	//DOODADS RECIPES
	
  event.recipes.createMechanicalCrafting('doodads:slimey_shoes', [
    ' D ',
    'EFE',
    'ABA',
    'CGC'
  ], {
    A: 'ad_astra:compressed_steel',
    B: 'create:sticker',
    C: 'minecraft:slime_block',
    D: 'createastral:navigation_mechanism',
    E: 'tconstruct:slimesteel_block',
    F: 'dustrial_decor:padded_block',
    G: 'tconstruct:queens_slime_block'
  })

	event.recipes.createMechanicalCrafting('doodads:ender_goggles', [
  ' AAA ',
  'CBABC'
], {
  A: 'createdeco:cast_iron_sheet',
  B: 'minecraft:ender_eye',
  C: 'minecraft:string',
  
})

	 
	event.recipes.createMechanicalCrafting('doodads:midnights_eye', [
  'DCCCD',
  'CBCAC',
  'DCCCD'
], {
  A: 'create:refined_radiance',
  B: 'create:shadow_steel',
  C: 'minecraft:glowstone',
  D: 'create:powdered_obsidian'
  
})

	event.recipes.createMechanicalCrafting('doodads:speed_boots', [
  ' ADA ',
  ' AEAC',
  'BBBB '
], {
  A: 'ad_astra:compressed_calorite',
  B: 'create:sturdy_sheet',
  C: 'ad_astra:steel_engine',
  D: 'createastral:navigation_mechanism',
  E: 'dustrial_decor:padded_block'
  
  
		//AUTOMOBILITY RECIPE CHANGES
  
})
	event.recipes.createMechanicalCrafting('automobility:auto_mechanic_table', [
  '  D  ',
  'CAEAC',
  ' BBB '
], {
  A: 'create:brass_ingot',
  B: 'create:railway_casing',
  C: 'create:brass_ingot',
  D: 'create:crafting_blueprint',
  E: 'create:brass_block'
  
  
 
		/// /DOODADS MOD RECIPE CHANGES
})
	 event.shaped('8x doodads:platform', [
    ' A ',
    'BBB',
    ' A '
  ], {
    A: 'create:andesite_alloy',
	B: '#minecraft:planks'
	})
	event.shaped('3x doodads:duct_tape', [
    '   ',
    'AAA',
    ' B '
  ], {
    A: 'create:belt_connector',
	B: 'create:super_glue'
	})
	event.shaped('doodads:rubber_band', [
    ' B ',
    ' A ',
    ' B '
  ], {
    A: 'minecraft:slime_ball',
	B: 'minecraft:string'
	})
	event.shaped('doodads:blossom_belt', [
    ' A ',
    'ABA',
    ' A '
  ], {
    A: 'create:tree_fertilizer',
	B: 'minecraft:string'
	})
	event.shaped('doodads:shulker_aglet', [
    '   ',
    'ABA',
    '   '
  ], {
    A: 'minecraft:shulker_shell',
	B: 'minecraft:end_stone'
	})
	event.shaped('doodads:cactus_ring', [
    'AAA',
    'ABA',
    'AAA'
  ], {
    A: 'minecraft:cactus',
	B: 'create:golden_sheet'
	})
	event.shaped('doodads:loggers_glove', [
    ' A ',
    'ABA',
    'ABA'
  ], {
    A: 'minecraft:leather',
	B: '#minecraft:logs'
	})
	event.shaped('doodads:soggy_glove', [
    ' A ',
    'ABA',
    'ABA'
  ], {
    A: 'minecraft:leather',
	B: 'minecraft:wet_sponge'
	})
	event.shaped('doodads:paintbrush', [
    ' B ',
    ' A ',
    ' A '
  ], {
    A: 'minecraft:stick',
	B: 'toms_storage:ts.paint_kit'
	})

//// UNIQUE CREATE RELATED PROCESSES ////

	event.recipes.createFilling('create:electron_tube', [
    'create:polished_rose_quartz',
  {fluid: 'tconstruct:molten_rose_gold', amount: 9000}
])

	event.shaped('automobility:automobile_assembler', [
    'AAA',
    ' B ',
    'BBB'
  ], {
    A: 'techreborn:tin_ingot',
	B: 'create:brass_ingot'
	})

		///// BASIC COGWHEELS
	
	event.shaped('3x create:cogwheel', [
    'AB'
  ], {
    A: 'create:andesite_alloy',
	B: 'createastral:bronze_sheet'
	})
	event.shaped('create:large_cogwheel', [
    'ABA'
  ], {
    A: 'create:cogwheel',
	B: 'createastral:bronze_sheet'
	})



///// STONE CUTTER ADDITIONS ////


	event.stonecutting('2x createastral:bronze_sheet', 'createastral:bronze_ingot')
  event.stonecutting('minecraft:wooden_hoe', 'create:andesite_alloy')
  event.stonecutting('minecraft:wooden_axe', 'create:andesite_alloy')
  event.stonecutting('minecraft:wooden_shovel', 'create:andesite_alloy')
  event.stonecutting('minecraft:wooden_pickaxe', 'create:andesite_alloy')
  event.stonecutting('minecraft:wooden_sword', 'create:andesite_alloy')
  event.stonecutting('minecraft:stone_hoe', 'create:andesite_alloy')
  event.stonecutting('minecraft:stone_axe', 'create:andesite_alloy')
  event.stonecutting('minecraft:stone_shovel', 'create:andesite_alloy')
  event.stonecutting('minecraft:stone_pickaxe', 'create:andesite_alloy')
  event.stonecutting('minecraft:stone_sword', 'create:andesite_alloy')
  event.stonecutting('8x automobility:dirt_off_road', 'minecraft:dirt')
  event.stonecutting('8x automobility:grass_off_road', 'minecraft:grass_block')
  event.stonecutting('8x automobility:grass_off_road', 'minecraft:moss_block')
  event.stonecutting('2x automobility:grass_off_road', 'minecraft:moss_carpet')
  event.stonecutting('8x automobility:sand_off_road', 'minecraft:sand')
  event.stonecutting('ae2:inscriber', 'techreborn:basic_machine_frame')
  event.stonecutting('tconstruct:gear_cast', '#c:plates/gold')
  event.stonecutting('tconstruct:coin_cast', '#c:plates/gold')
	 

///// SEQUENCED ASSEMBLY LINES /////

	 event.recipes.createSequencedAssembly([ 
        'createastral:pure_biomatter', 
		], 'techreborn:compressed_plantball', [
        event.recipes.createPressing('create:tree_fertilizer', 'create:tree_fertilizer').processingTime(50)
    ]).transitionalItem('create:tree_fertilizer').loops(500)

    event.recipes.createSequencedAssembly([ 
        'automobility:launch_gel', 
		], 'tconstruct:slimesteel_nugget', [ 
        event.recipes.createPressing('tconstruct:slimesteel_nugget', 'tconstruct:slimesteel_nugget')
    ]).transitionalItem('create:tree_fertilizer').loops(125)


event.recipes.createMixing(Fluid.of('kubejs:hellfire', 81), [
  {fluid: 'minecraft:lava', amount: 81000},
]).superheated()
	
	
	event.recipes.createSequencedAssembly([ 
        'createastral:navigation_mechanism', 
		], 'phonos:redstone_chip', [ 
		event.recipes.createPressing('create:incomplete_precision_mechanism', 'create:incomplete_precision_mechanism'),
		event.recipes.createFilling('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', {fluid: 'tconstruct:molten_cobalt', amount: 1000}]), //fill bronze
        event.recipes.createDeploying('create:incomplete_precision_mechanism', ['techreborn:electrum_nugget', 'techreborn:electrum_nugget']), //fill bronze
    ]).transitionalItem('create:incomplete_precision_mechanism').loops(30)

    	
	event.recipes.createSequencedAssembly([ 
  'create:integrated_circuit', 
], 'create:lapis_sheet', [ 
event.recipes.createFilling('create:lapis_sheet', ['create:lapis_sheet', {fluid: 'tconstruct:molten_silver', amount: 1300}]), //fill bronze
  event.recipes.createDeploying('create:lapis_sheet', ['create:lapis_sheet', 'techreborn:insulated_copper_cable']), //fill bronze
  event.recipes.createPressing('create:lapis_sheet', 'create:lapis_sheet'),
]).transitionalItem('create:lapis_sheet').loops(6)


event.recipes.createSequencedAssembly([ 
  'techreborn:industrial_circuit',
  ], 'techreborn:electronic_circuit', [ 
  event.recipes.createFilling('techreborn:electronic_circuit', ['techreborn:electronic_circuit', {fluid: 'techreborn:lithium', amount: 1500}]), //fill bronze
  event.recipes.createPressing('techreborn:electronic_circuit', 'techreborn:electronic_circuit'),
  event.recipes.createDeploying('techreborn:electronic_circuit', ['techreborn:electronic_circuit', 'ad_astra:calorite_nugget']), //fill bronze
  ]).transitionalItem('techreborn:electronic_circuit').loops(18)
	 
	event.recipes.createSequencedAssembly([ // begin
        'minecraft:ender_eye', // output
		], 'minecraft:ender_pearl', [ // input
		event.recipes.createDeploying('minecraft:ender_pearl', ['minecraft:blaze_powder', 'minecraft:blaze_powder']),
    event.recipes.createDeploying('minecraft:ender_pearl', ['create:powdered_obsidian', 'create:powdered_obsidian']),
    event.recipes.createPressing('minecraft:ender_pearl', 'minecraft:ender_pearl'), //yeah
		event.recipes.createFilling('minecraft:ender_pearl', ['minecraft:ender_pearl', {fluid: 'minecraft:lava', amount: 20250}]), //fill 1/4 bucket lava
    event.recipes.createPressing('minecraft:ender_pearl', 'minecraft:ender_pearl')
    ]).transitionalItem('minecraft:ender_pearl').loops(3) 

    event.recipes.createSequencedAssembly([ // begin
        'techreborn:basic_machine_frame', // output
		], 'create:copper_casing', [ // input
		event.recipes.createFilling('create:copper_casing', ['create:copper_casing', {fluid: 'tconstruct:molten_silver', amount: 9000}]), //fill bronze
		event.recipes.createDeploying('create:copper_casing', ['create:copper_casing', 'techreborn:rubber']), //fill obsid
        event.recipes.createPressing('create:copper_casing', 'create:copper_casing') //yeah
    ]).transitionalItem('create:copper_casing').loops(4)  
	 
	 event.recipes.createCompacting('ad_astra:iron_plate', [
  'create:iron_sheet',
]).heated()

event.recipes.createPressing('createastral:bronze_sheet', 'createastral:bronze_ingot')
 
////////////////  EARLY GAME ANDESITE / GROUT RELATED STUFF 

 event.recipes.createMixing('create:chromatic_compound', [
  '5x techreborn:uu_matter',
  {fluid: 'kubejs:shimmer', amount: 81000},
]).superheated().processingTime(2500)

event.recipes.createMixing(Fluid.of('kubejs:compound_mixture', 9000), [
  'minecraft:andesite',
  'techreborn:tin_nugget',
  'minecraft:clay_ball'
])

event.recipes.createMixing(Fluid.of('kubejs:compound_mixture', 9000), [
  'minecraft:andesite',
  'create:zinc_nugget',
  'minecraft:clay_ball'
])

event.recipes.createMixing(Fluid.of('kubejs:compound_mixture', 9000), [
  'minecraft:andesite',
  'minecraft:iron_nugget',
  'minecraft:clay_ball'
])

event.shaped('createastral:andesite_compound', [
  'BBB',
  'AAA',
  'CCC'
], {
  A: 'techreborn:tin_nugget',
  B: 'minecraft:andesite',
  C: 'minecraft:clay_ball'
})

event.shaped('createastral:andesite_compound', [
  'BBB',
  'AAA',
  'CCC'
], {
  A: 'create:zinc_nugget',
  B: 'minecraft:andesite',
  C: 'minecraft:clay_ball'
})

event.shaped('createastral:andesite_compound', [
  'BBB',
  'AAA',
  'CCC'
], {
  A: 'minecraft:iron_nugget',
  B: 'minecraft:andesite',
  C: 'minecraft:clay_ball'
})
event.smelting('create:andesite_alloy', 'createastral:andesite_compound')

event.recipes.createMixing('8x tconstruct:grout', [
  'create:andesite_alloy',
  'create:zinc_ingot',
  '8x minecraft:gravel'
])
 
 
 
		//SMITHING RADIANT STUFF
	
	event.smithing('createastral:radiant_helmet', 'createastral:steel_helmet', 'create:refined_radiance')
    event.smithing('createastral:radiant_chestplate', 'createastral:steel_chestplate', 'create:refined_radiance')
    event.smithing('createastral:radiant_leggings', 'createastral:steel_leggings', 'create:refined_radiance')
    event.smithing('createastral:radiant_boots', 'createastral:steel_boots', 'create:refined_radiance')
    event.smithing('createastral:radiant_sword', 'minecraft:netherite_sword', 'create:refined_radiance')
    event.smithing('createastral:radiant_axe', 'minecraft:netherite_axe', 'create:refined_radiance')
    event.smithing('createastral:radiant_shovel', 'minecraft:netherite_shovel', 'create:refined_radiance')
    event.smithing('createastral:radiant_pickaxe', 'minecraft:netherite_pickaxe', 'create:refined_radiance')
    event.remove({output: 'create:crushed_tin_ore'})
    event.remove({output: 'create:crushed_silver_ore'})
    event.remove({output: 'create:crushed_lead_ore'})
    event.remove({output: 'create:crushed_uranium_ore'})
    event.remove({output: 'techreborn:copper_nugget'})
	event.smelting('minecraft:leather', 'minecraft:rotten_flesh').xp(2.0)
  event.smelting('techreborn:tin_ingot', 'create:crushed_tin_ore')
  event.smelting('techreborn:silver_ingot', 'create:crushed_silver_ore')
  event.smelting('techreborn:lead_ingot', 'create:crushed_lead_ore')
  event.smelting('techreborn:tungsten_ingot', 'create:crushed_uranium_ore')
  event.smithing('farmersdelight:cooking_pot', 'farmersdelight:skillet', 'minecraft:water_bucket')


  ///// ORE PROCESSING PATCHES /////


  event.recipes.createCrushing([
    'create:crushed_tin_ore',
    Item.of('minecraft:iron_nugget').withChance(1),
  ], 'techreborn:raw_tin')
  event.recipes.createCrushing([
    'techreborn:clay_dust'
  ], 'minecraft:clay_ball')
  event.recipes.createCrushing([
    'create:crushed_silver_ore',
    Item.of('create:experience_nugget').withChance(0.75),
  ], 'techreborn:raw_silver')
  event.recipes.createCrushing([
    'create:crushed_lead_ore',
    Item.of('minecraft:coal').withChance(0.2),
  ], 'techreborn:raw_lead')
  event.recipes.createCrushing([
    'create:crushed_uranium_ore',
    Item.of('create:zinc_nugget').withChance(1),
  ], 'techreborn:raw_tungsten')

  event.recipes.createCrushing([
    Item.of('minecraft:quartz').withChance(0.05),
  ], 'ad_astra:moon_sand')

  event.recipes.createCrushing([
    'ad_astra:moon_sand'
  ], 'ad_astra:moon_stone')

  event.recipes.createSplashing([
    Item.of('techreborn:silver_nugget').withChance(0.25),
  ], 'ad_astra:moon_sand')

  event.recipes.createCrushing([
    'ad_astra:mars_sand'
  ], 'ad_astra:mars_stone')

  event.recipes.createSplashing([
    Item.of('techreborn:lead_nugget').withChance(0.25),
  ], 'ad_astra:mars_sand')

  event.recipes.createHaunting([
    Item.of('minecraft:netherrack').withChance(1),
  ], 'minecraft:soul_sand')

  event.recipes.createCrushing([
    'minecraft:magma_block',
    Item.of('tconstruct:debris_nugget').withChance(0.03),
  ], 'ad_astra:infernal_spire_block')
  event.recipes.createCrushing([
    Item.of('ad_astra:ostrum_nugget').withChance(0.3),
  ], 'ad_astra:conglomerate')



event.shaped('minecraft:experience_bottle', [
  'AAA',
  'ABA',
  'AAA'
], {
  A: 'create:experience_nugget',
  B: 'minecraft:glass_bottle'
})

  event.recipes.createCrushing([
    Item.of('minecraft:raw_iron').withChance(0.002),
    Item.of('minecraft:raw_gold').withChance(0.001),
    Item.of('create:raw_zinc').withChance(0.001),
    Item.of('minecraft:raw_copper').withChance(0.002),
    Item.of('minecraft:coal').withChance(0.004),
    Item.of('techreborn:raw_tin').withChance(0.002),
    Item.of('minecraft:redstone').withChance(0.005),
    Item.of('minecraft:lapis_lazuli').withChance(0.002),
  ], 'minecraft:cobbled_deepslate')


////SPLASHING AND HAUNTING RECIPES



event.recipes.createSplashing([
  '9x ad_astra:desh_nugget',
  'minecraft:raw_iron',
], 'ad_astra:raw_desh')
event.recipes.createSplashing([
  '9x ad_astra:ostrum_nugget',
  'minecraft:raw_gold',
], 'ad_astra:raw_ostrum')
event.recipes.createSplashing([
  '9x ad_astra:calorite_nugget',
  'minecraft:raw_copper',
], 'ad_astra:raw_calorite')
event.recipes.createHaunting([
  'minecraft:coal',
], '2x minecraft:charcoal')



////CREATE MIXING RECIPES


	event.recipes.createMixing('phonos:redstone_chip', [
  'create:electron_tube',
  'techreborn:insulated_copper_cable'
])
	event.recipes.createMixing('4x bosses_of_mass_destruction:soul_star', [
  '16x ad_astra:glacio_ice_shard_ore',
  'minecraft:nether_star'
])
event.recipes.createMixing('tconstruct:seared_bricks', [
  '4x tconstruct:seared_brick',
  '#c:slimeballs'
])



//// ASSORTED CRAFTING BENCH RECIPES


	 event.shaped('minecraft:bundle', [
    ' S ',
    'A A',
    ' A '
  ], {
    S: 'minecraft:string',
	A: 'minecraft:leather',
	})
	
		 event.shaped('createastral:sturdy_sheet_block', [
    'AA',
    'AA'
  ], {
    A: 'create:sturdy_sheet',
	})
	
  event.shaped('createastral:bronze_block', [
    'AAA',
    'AAA',
    'AAA'
  ], {
    A: 'createastral:bronze_ingot',
	})
  event.shaped('9x createastral:bronze_ingot', [
    'A'
  ], {
    A: 'createastral:bronze_block',
	})

	 event.shaped('createastral:copper_plating', [
    'AA',
    'AA'
  ], {
    A: 'create:copper_sheet',
	})

  event.shaped('createastral:copper_heating_coil', [
    'AAA',
    'AAA',
    'AAA'
  ], {
    A: 'createaddition:copper_spool',
	})
	
	 event.shaped('createastral:refined_radiance_block', [
    'AAA',
    'AAA',
	'AAA'
  ], {
    A: 'create:refined_radiance',
	})
	 event.shaped('16x create:refined_radiance_casing', [
    'BBB',
    'BAB',
	'BBB'
  ], {
    A: 'create:refined_radiance',
	B: '#minecraft:planks'
	})
	event.shaped('10x minecraft:torch', [
    'A',
    'B',
  ], {
    A: 'naturalist:glow_goop',
	B: 'minecraft:stick'
	})

  event.shaped('techreborn:synthetic_redstone_crystal', [
    'AB',
    'BA'
  ], {
    A: 'minecraft:red_dye',
	B: '#c:glass'
	})




////TECH REBORN CASINGS AND FRAMES ADJUSTMENTS + OTHER JSON FORMAT RECIPES////


event.custom(
  {"type":"create:sequenced_assembly","ingredient":{"tag":"c:plates/gold"},"transitionalItem":{"item":"create:incomplete_precision_mechanism"},"sequence":[{"type":"create:deploying","ingredients":[{"item":"create:incomplete_precision_mechanism"},{"item":"create:cogwheel"}],"results":[{"item":"create:incomplete_precision_mechanism"}]},{"type":"create:deploying","ingredients":[{"item":"create:incomplete_precision_mechanism"},{"item":"create:large_cogwheel"}],"results":[{"item":"create:incomplete_precision_mechanism"}]},{"type":"create:deploying","ingredients":[{"item":"create:incomplete_precision_mechanism"},{"tag":"c:nuggets/iron"}],"results":[{"item":"create:incomplete_precision_mechanism"}]}],"results":[{"item":"create:precision_mechanism","chance":120.0},{"item":"create:golden_sheet","chance":8.0},{"item":"create:andesite_alloy","chance":8.0},{"item":"create:cogwheel","chance":5.0},{"item":"minecraft:gold_nugget","chance":3.0},{"item":"create:shaft","chance":2.0},{"item":"create:crushed_gold_ore","chance":2.0},{"item":"minecraft:iron_ingot"},{"item":"minecraft:clock"}],"loops":5})

event.custom({"type":"create:item_application","ingredients":[{"item":"techreborn:basic_machine_casing"},{"item":"ad_astra:compressed_steel"}],"results":[{"item":"techreborn:advanced_machine_casing"}]})
event.custom({"type":"create:item_application","ingredients":[{"item":"techreborn:advanced_machine_frame"},{"item":"techreborn:industrial_circuit"}],"results":[{"item":"techreborn:industrial_machine_frame"}]})
event.custom({"type":"create:item_application","ingredients":[{"item":"techreborn:basic_machine_frame"},{"item":"techreborn:lead_plate"}],"results":[{"item":"techreborn:advanced_machine_frame"}]})
event.custom({"type":"create:item_application","ingredients":[{"item":"techreborn:basic_machine_casing"},{"item":"create:sturdy_sheet"}],"results":[{"item":"techreborn:industrial_machine_casing"}]})
event.custom({"type":"create:item_application","ingredients":[{"item":"create:andesite_casing"},{"tag":"c:plates/obsidian"}],"results":[{"item":"create:railway_casing"}]})

event.custom({
	"type":"createaddition:charging",
	"input": {
      	"item": "techreborn:synthetic_redstone_crystal",
		"count": 1
	},
	"result": {
		"item": "minecraft:redstone",
		"count": 5
	},
	"energy": 10000
})

event.custom({
	"type":"createaddition:charging",
	"input": {
      	"item": "createastral:golden_pin",
		"count": 1
	},
	"result": {
		"item": "createastral:electrified_pin",
		"count": 1
	},
	"energy": 2500
})

event.custom({
	"type":"createaddition:charging",
	"input": {
      	"item": "kubejs:shimmer_bucket",
		"count": 1
	},
	"result": {
		"item": "kubejs:molten_calorite_bucket",
		"count": 1
	},
	"energy": 10000000
})

event.custom({
  "type": "techreborn:compressor",
  "power": 10,
  "time": 600,
  "ingredients": [
    {
      "item": "create:sturdy_sheet",
      "count": 16
    }
  ],
  "results": [
    {
      "item": "ad_astra:rocket_fin",
      "count": 1
    }
  ]
})

event.custom({
  "type": "techreborn:implosion_compressor",
  "power": 30,
  "time": 2000,
  "ingredients": [
	{
	  "count": 1,
	  "item": "techreborn:steel_dust"
	},
    {
      "item": "minecraft:tnt",
      "count": 4
    }
  ],
  "results": [
    {
      "item": "ad_astra:steel_ingot",
      "count": 1
    },
    {
      "item": "techreborn:dark_ashes_dust",
      "count": 1
    }
  ]
})

event.recipes.createMixing('techreborn:steel_dust', [
  '5x minecraft:iron_ingot',
'2x techreborn:coal_dust'
]).heated().processingTime(400)

    event.shaped(Item.of('custommachinery:custom_machine_item', {machine:"createastral:electrolyser"}), [
        'CCC',
        'DED',
        'CCC'
    ], {
        'D': 'techreborn:insulated_copper_cable',
        'E': 'phonos:redstone_chip',
        'C': 'create:copper_casing'
    })
	event.shaped('camsbackpacks:white_backpack', [
    'ABA',
    'CDE',
	'FAF'
  ], {
    A: 'farmersdelight:canvas',
	B: 'minecraft:crafting_table',
	C: 'campanion:leather_pouch',
	D: 'minecraft:barrel',
	E: 'campanion:sleeping_bag',
	F: 'campanion:rope'

})
event.shaped('ad_astra:moon_globe', [
  'BBB',
  'BA ',
  'BC '
], {
A: 'ad_astra:moon_sand',
B: 'createaddition:gold_rod',
C: 'minecraft:light_weighted_pressure_plate'
})
event.shaped('ad_astra:earth_globe', [
  'BBB',
  'BA ',
  'BC '
], {
A: 'minecraft:grass_block',
B: 'createaddition:gold_rod',
C: 'minecraft:light_weighted_pressure_plate'
})
event.shaped('ad_astra:mars_globe', [
  'BBB',
  'BA ',
  'BC '
], {
A: 'ad_astra:mars_stone',
B: 'createaddition:gold_rod',
C: 'minecraft:light_weighted_pressure_plate'
})
event.shaped('ad_astra:mercury_globe', [
  'BBB',
  'BA ',
  'BC '
], {
A: 'ad_astra:mercury_stone',
B: 'createaddition:gold_rod',
C: 'minecraft:light_weighted_pressure_plate'
})
event.shaped('ad_astra:venus_globe', [
  'BBB',
  'BA ',
  'BC '
], {
A: 'ad_astra:venus_stone',
B: 'createaddition:gold_rod',
C: 'minecraft:light_weighted_pressure_plate'
})
event.shaped('ad_astra:glacio_globe', [
  'BBB',
  'BA ',
  'BC '
], {
A: 'ad_astra:glacio_stone',
B: 'createaddition:gold_rod',
C: 'minecraft:light_weighted_pressure_plate'
})




///// MOST SHIMMER RELATED RECIPES (MANY OF THESE ARE ALSO DONE THRU THE DATAPACK INSTEAD) /////

event.recipes.createMixing(Fluid.of('kubejs:shimmer', 40500), [
  '5x minecraft:amethyst_shard',
'2x minecraft:glow_ink_sac'
]).heated().processingTime(400)

event.recipes.createMixing('minecraft:glow_ink_sac', [
  'minecraft:ink_sac',
  '2x minecraft:glowstone_dust'
]).processingTime(50)


//Dash panel
event.recipes.createSequencedAssembly([ 
        'automobility:dash_panel', 
		], 'ad_astra:iron_plate', [ 
		event.recipes.createFilling('ad_astra:iron_plate', ['ad_astra:iron_plate', {fluid: 'kubejs:shimmer', amount: 8100}]).processingTime(75), //fill
    event.recipes.createPressing('ad_astra:iron_plate', 'ad_astra:iron_plate').processingTime(75),
    ]).transitionalItem('ad_astra:iron_plate').loops(3)

    event.stonecutting('automobility:sloped_dash_panel', 'automobility:dash_panel')
    event.stonecutting('automobility:steep_sloped_dash_panel', 'automobility:dash_panel')


//Orca Item
    event.recipes.createMixing('minecraft:dolphin_spawn_egg', [
      {fluid: 'kubejs:shimmer', amount: 40500},
      'createastral:orcane',
  ]).processingTime(500)
  event.recipes.createMixing('yippee:tbh', [
    {fluid: 'kubejs:shimmer', amount: 40500},
    '3x minecraft:ghast_tier',
]).processingTime(500)

  //Slime alternative
  event.recipes.createMixing('tconstruct:ichor_slime_ball', [
    {fluid: 'kubejs:shimmer', amount: 8100},
    '4x tconstruct:sky_slime_ball',
]).heated().processingTime(30)

event.recipes.createMixing('tconstruct:ender_slime_ball', [
  {fluid: 'kubejs:shimmer', amount: 8100},
  '2x tconstruct:ichor_slime_ball',
]).heated().processingTime(30)

event.recipes.createMixing('doodads:portable_nether', [
  {fluid: 'kubejs:shimmer', amount: 81000},
  'minecraft:lodestone',
]).heated().processingTime(500)

event.recipes.createMixing('32x doodads:stone_brick_road', [
  {fluid: 'kubejs:shimmer', amount: 40500},
  '32x minecraft:stone_bricks',
]).processingTime(1000)

event.recipes.createMixing('32x doodads:brick_road', [
  {fluid: 'kubejs:shimmer', amount: 40500},
  '32x minecraft:bricks',
]).processingTime(1000)

event.recipes.createMixing('32x doodads:asphalt', [
  {fluid: 'kubejs:shimmer', amount: 40500},
  '32x #c:concrete_powder',
]).processingTime(1000)

event.recipes.createFilling('doodads:yellow_brick_road', [
  'doodads:brick_road',
  {fluid: 'tconstruct:molten_gold', amount: 4500},
])
event.recipes.createFilling('doodads:yellow_brick_road', [
  'doodads:stone_brick_road',
  {fluid: 'tconstruct:molten_gold', amount: 2250},
])
event.recipes.createMixing({fluid: 'create:honey', amount: 40500}, [
  {fluid: 'minecraft:water', amount: 40500},
  {fluid: 'kubejs:shimmer', amount: 40500},
]).processingTime(3000)

event.recipes.createMixing('createastral:astral_conduit', [
  {fluid: 'kubejs:shimmer', amount: 81000},
  'minecraft:diamond_block',
  'phonos:redstone_chip'
]).heated().processingTime(30)


})


