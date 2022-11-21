// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Welcome to white space.')

// Brass is now needed for diamonds.
onEvent('tags.blocks', event => {
  event.remove('minecraft:needs_iron_tool', 'minecraft:diamond_ore')
  event.remove('minecraft:needs_iron_tool', 'minecraft:deepslate_diamond_ore')
  event.add('minecraft:needs_diamond_tool', 'minecraft:diamond_ore')
  event.add('minecraft:needs_diamond_tool', 'minecraft:deepslate_diamond_ore')

  event.remove('minecraft:needs_iron_tool', 'indrev:tungsten_ore')
  event.remove('minecraft:needs_iron_tool', 'indrev:deepslate_tungsten_ore')
  event.add('minecraft:needs_diamond_tool', 'indrev:tungsten_ore')
  event.add('minecraft:needs_diamond_tool', 'indrev:deepslate_tungsten_ore')

  event.remove('minecraft:needs_iron_tool', 'indrev:silver_ore')
  event.remove('minecraft:needs_iron_tool', 'indrev:deepslate_silver_ore')
  event.add('minecraft:needs_diamond_tool', 'indrev:silver_ore')
  event.add('minecraft:needs_diamond_tool', 'indrev:deepslate_silver_ore')

  event.remove('minecraft:needs_iron_tool', 'indrev:lead_ore')
  event.remove('minecraft:needs_iron_tool', 'indrev:deepslate_lead_ore')
  event.add('minecraft:needs_diamond_tool', 'indrev:lead_ore')
  event.add('minecraft:needs_diamond_tool', 'indrev:deepslate_lead_ore')

  event.remove('minecraft:needs_iron_tool', 'indrev:nikolite_ore')
  event.remove('minecraft:needs_iron_tool', 'indrev:deepslate_nikolite_ore')
  event.add('minecraft:needs_diamond_tool', 'indrev:nikolite_ore')
  event.add('minecraft:needs_diamond_tool', 'indrev:deepslate_nikolite_ore')


})

onEvent('recipes', event => {
	// Change recipes here
	 event.remove({output: 'ad_astra:steel_ingot'})
	 event.remove({output: 'ad_astra:iron_plate'})
	 event.remove({output: 'ad_astra:coal_generator'})
	 event.remove({output: 'ad_astra:solar_panel'})
	 event.remove({output: 'ad_astra:fuel_refinery'})
	 event.remove({output: 'ad_astra:oxygen_loader'})
	 event.remove({output: 'ad_astra:energizer'})
   event.remove({output: 'ad_astra:tier_1_rocket'})
	 
	
    
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
  event.remove({output: 'indrev:steel_dust'})
  event.remove({output: 'indrev:gamer_axe'})
  event.remove({output: 'indrev:bronze_nugget'})
  event.remove({output: 'indrev:charge_pad_mk4'})
	
	event.remove({output: 'phonos:redstone_chip'})
	event.remove({mod: 'doodads'})
	event.remove({output: 'minecraft:bow'})
	event.remove({output: 'minecraft:crossbow'})
	event.remove({output: 'minecraft:arrow'})
	event.remove({mod: 'lchunkloader'})
	event.remove({mod: 'mcdw'})
	event.remove({mod: 'scout'})
	
	
	// REMOVE UNNECCESARY DUPLICATE ITEMS / ISSUE ITEMS
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
	event.remove({output: 'tconstruct:scorched_brick'})
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
	
	//Tinker's Construct Reworking (recipe removal)
	
	event.remove({output: 'tconstruct:smeltery_controller'})
	event.remove({output: 'tconstruct:foundry_controller'})
	event.remove({output: 'tconstruct:seared_melter'})
	event.remove({output: 'tconstruct:scorched_ingot_gauge'})
	event.remove({output: 'tconstruct:scorched_ingot_tank'})
	event.remove({output: 'tconstruct:scorched_fuel_gauge'})
	event.remove({output: 'tconstruct:scorched_fuel_tank'})
	event.remove({output: 'tconstruct:scorched_alloyer'})
	event.remove({output: 'tconstruct:earth_slime_sling'})
	event.remove({output: 'tconstruct:sky_slime_sling'})
	event.remove({output: 'tconstruct:ender_slime_sling'})
  event.remove({output: 'tconstruct:seared_ingot_gauge'})
	event.remove({output: 'tconstruct:seared_ingot_tank'})
	event.remove({output: 'tconstruct:seared_fuel_gauge'})
	event.remove({output: 'tconstruct:seared_fuel_tank'})
  event.remove({output: 'tconstruct:grout'})
	event.remove({type: 'create:mixing', output: 'create:brass_ingot'})
	event.remove({type: 'create:mixing', output: 'tconstruct:rose_gold_ingot'})
	event.remove({type: 'create:mixing', output: 'tconstruct:slimesteel_ingot'})
	event.remove({type: 'create:mixing', output: 'tconstruct:pig_iron_ingot'})
	event.remove({type: 'create:mixing', output: 'tconstruct:manyullyn_ingot'})
	event.remove({type: 'create:mixing', output: 'tconstruct:hepatizon_ingot'})
	event.remove({type: 'create:mixing', output: 'tconstruct:queens_slime_ingot'})
	event.remove({output: 'create:blaze_cake'})
	event.remove({output: 'create:blaze_cake_base'})
  event.remove({output: 'create:andesite_alloy', input: 'minecraft:andesite'})
	event.remove({type: 'tconstruct:foundry'})
	event.remove({type: 'tconstruct:entity_melting'})
	event.remove({type: 'tconstruct:alloy'})
  event.remove({output: 'farmersdelight:cooking_pot'})
	event.replaceInput({type: 'create:mechanical_crafting', mod: 'createaddition'}, 'create:andesite_alloy', 'tconstruct:rose_gold_ingot')
	event.replaceInput({mod: 'createaddition'}, 'minecraft:redstone_torch', 'create:electron_tube')
	event.replaceInput({output: 'create:wand_of_symmetry'}, 'minecraft:ender_pearl', 'create:refined_radiance')
	event.replaceInput({output: 'create:mechanical_drill'}, 'minecraft:iron_ingot', 'create:iron_sheet')
	event.replaceInput({output: 'create:mechanical_arm'}, 'create:precision_mechanism', 'createastral:production_mechanism')
	event.replaceInput({output: 'ad_astra:nasa_workbench'}, 'minecraft:crafting_table', 'createastral:navigation_mechanism')
	event.replaceInput({output: 'create:mechanical_crafter'}, 'minecraft:crafting_table', 'create:precision_mechanism')
	event.replaceInput({output: 'ad_astra:nasa_workbench'}, 'minecraft:redstone_torch', 'create:electron_tube')
  event.replaceInput({output: 'ad_astra:nasa_workbench'}, 'minecraft:lever', 'indrev:intake')
	event.replaceInput({output: 'toms_storage:ts.adv_wireless_terminal'}, 'minecraft:netherite_ingot', 'tconstruct:hepatizon_ingot')
	event.replaceInput({output: 'createaddition:accumulator'}, 'create:brass_casing', 'createastral:production_mechanism')
	event.replaceInput({output: 'ad_astra:netherite_space_suit'}, 'ad_astra:oxygen_gear', 'createastral:blazing_mechanism')
  event.remove({output: 'ad_astra:launch_pad'})
  

  event.replaceInput({output: 'ad_astra:space_helmet'}, 'ad_astra:steel_ingot', 'create:sturdy_sheet')
  event.replaceInput({output: 'ad_astra:space_helmet'}, 'minecraft:orange_stained_glass_pane', 'create:diving_helmet')
  event.replaceInput({output: 'ad_astra:space_pants'}, 'ad_astra:steel_ingot', 'create:sturdy_sheet')
  event.remove({output: 'ad_astra:space_boots'})
  event.replaceInput({output: 'ad_astra:space_suit'}, 'ad_astra:steel_ingot', 'create:sturdy_sheet')
  event.replaceInput({output: 'ad_astra:space_suit'}, 'ad_astra:oxygen_gear', 'create:copper_backtank')
  event.replaceInput({output: 'ad_astra:oxygen_tank'}, 'ad_astra:compressed_steel', 'createastral:bronze_sheet')
  event.replaceInput({output: 'ad_astra:oxygen_gear'}, 'ad_astra:compressed_steel', 'createastral:bronze_sheet')
  event.replaceInput({output: 'ad_astra:steel_tank'}, 'ad_astra:compressed_steel', 'ad_astra:iron_plate')
  event.replaceInput({output: 'ad_astra:steel_tank'}, 'minecraft:bucket', 'indrev:sulfur_dust')
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
  event.remove({output: 'ad_astra:jet_suit_helmet'})
  event.remove({output: 'ad_astra:jet_suit'})
  event.remove({output: 'ad_astra:jet_suit_pants'})
  event.remove({output: 'ad_astra:jet_suit_boots'})
  event.replaceInput({output: 'minecraft:lodestone'}, 'minecraft:netherite_ingot', 'createastral:blazing_mechanism')
  event.replaceInput({output: 'indrev:netherite_drill_head'}, 'minecraft:netherite_ingot', 'minecraft:netherite_scrap')
  event.replaceInput({mod: 'indrev'}, '#c:iron_plates', 'create:brass_sheet')
  event.replaceInput({mod: 'indrev'}, 'indrev:bronze_plate', 'createastral:bronze_sheet')
  event.replaceInput({mod: 'indrev'}, 'indrev:bronze_ingot', 'createastral:bronze_ingot')
  event.replaceInput({mod: 'indrev'}, 'indrev:copper_plate', 'create:copper_sheet')
  event.replaceInput({mod: 'indrev'}, 'indrev:gold_plate', 'create:gold_sheet')
  event.remove({output: 'indrev:iron_plate'})
  event.remove({output: 'createaddition:spool'})
  event.replaceInput({mod: 'indrev'}, 'indrev:steel_plate', 'ad_astra:steel_ingot')
  event.replaceInput({mod: 'indrev'}, 'indrev:molten_copper_still', 'tconstruct:molten_copper')
  event.replaceInput({mod: 'indrev'}, 'indrev:molten_copper_bucket', 'tconstruct:molten_copper_bucket')
  event.replaceInput({mod: 'indrev'}, 'minecraft:redstone', 'create:electron_tube')
  event.replaceInput({mod: 'indrev'}, 'indrev:tank', 'create:fluid_tank')
  event.remove({type: 'indrev:compress'})
  event.remove({output: 'indrev:coal_generator_mk1'})
  event.remove({output: 'indrev:solar_generator_mk3'})
  event.remove({output: 'indrev:lazuli_flux_container_mk1'})
  event.remove({output: 'indrev:industrial_smelter_mk4'})
  event.remove({output: 'indrev:heat_generator_mk4'})
  event.remove({output: 'indrev:item_pipe_mk1'})
  event.remove({output: 'indrev:fluid_pipe_mk1'})
  event.remove({output: 'indrev:pump_mk1'})
  event.remove({output: 'indrev:tank'})
  event.remove({output: 'ad_astra:desh_cable'})
  event.remove({output: 'ad_astra:steel_cable'})
  event.remove({output: 'indrev:machine_block'})
  event.remove({output: 'indrev:circuit_mk1'})
  event.remove({output: 'indrev:circuit_mk2'})
  event.remove({output: 'indrev:circuit_mk3'})
  event.remove({output: 'indrev:circuit_mk4'})
  event.remove({output: 'indrev:electrum_dust'})
  event.remove({output: 'indrev:steel_dust'})
  event.remove({output: 'indrev:enriched_nikolite_ingot'})
  event.remove({output: 'indrev:nikolite_ingot'})
  event.remove({output: 'indrev:steel_block'})
  event.remove({output: 'indrev:bronze_block'})
  event.remove({output: 'indrev:copper_helmet'})
  event.remove({output: 'indrev:copper_chestplate'})
  event.remove({output: 'indrev:copper_leggings'})
  event.remove({output: 'indrev:copper_boots'})
  event.remove({output: 'indrev:copper_nugget'})
  event.remove({output: 'indrev:copper_axe'})
  event.remove({output: 'indrev:copper_sword'})
  event.remove({output: 'indrev:copper_pickaxe'})
  event.remove({output: 'indrev:copper_hoe'})
  event.remove({output: 'indrev:copper_shovel'})
  event.remove({output: 'indrev:tin_helmet'})
  event.remove({output: 'indrev:tin_chestplate'})
  event.remove({output: 'indrev:tin_leggings'})
  event.remove({output: 'indrev:tin_boots'})
  event.remove({output: 'indrev:tin_axe'})
  event.remove({output: 'indrev:tin_sword'})
  event.remove({output: 'indrev:tin_pickaxe'})
  event.remove({output: 'indrev:tin_hoe'})
  event.remove({output: 'indrev:tin_shovel'})

  event.remove({output: 'indrev:lead_helmet'})
  event.remove({output: 'indrev:lead_chestplate'})
  event.remove({output: 'indrev:lead_leggings'})
  event.remove({output: 'indrev:lead_boots'})
  event.remove({output: 'indrev:lead_axe'})
  event.remove({output: 'indrev:lead_sword'})
  event.remove({output: 'indrev:lead_pickaxe'})
  event.remove({output: 'indrev:lead_hoe'})
  event.remove({output: 'indrev:lead_shovel'})

  event.remove({output: 'indrev:steel_helmet'})
  event.remove({output: 'indrev:steel_chestplate'})
  event.remove({output: 'indrev:steel_leggings'})
  event.remove({output: 'indrev:steel_boots'})
  event.remove({output: 'indrev:steel_axe'})
  event.remove({output: 'indrev:steel_sword'})
  event.remove({output: 'indrev:steel_pickaxe'})
  event.remove({output: 'indrev:steel_hoe'})
  event.remove({output: 'indrev:steel_shovel'})

  event.remove({output: 'indrev:tungsten_helmet'})
  event.remove({output: 'indrev:tungsten_chestplate'})
  event.remove({output: 'indrev:tungsten_leggings'})
  event.remove({output: 'indrev:tungsten_boots'})
  event.remove({output: 'indrev:tungsten_axe'})
  event.remove({output: 'indrev:tungsten_sword'})
  event.remove({output: 'indrev:tungsten_pickaxe'})
  event.remove({output: 'indrev:tungsten_hoe'})
  event.remove({output: 'indrev:tungsten_shovel'})

  event.remove({output: 'indrev:bronze_helmet'})
  event.remove({output: 'indrev:bronze_chestplate'})
  event.remove({output: 'indrev:bronze_leggings'})
  event.remove({output: 'indrev:bronze_boots'})
  event.remove({output: 'indrev:bronze_axe'})
  event.remove({output: 'indrev:bronze_sword'})
  event.remove({output: 'indrev:bronze_pickaxe'})
  event.remove({output: 'indrev:bronze_hoe'})
  event.remove({output: 'indrev:bronze_shovel'})

  event.remove({output: 'indrev:silver_helmet'})
  event.remove({output: 'indrev:silver_chestplate'})
  event.remove({output: 'indrev:silver_leggings'})
  event.remove({output: 'indrev:silver_boots'})
  event.remove({output: 'indrev:silver_axe'})
  event.remove({output: 'indrev:silver_sword'})
  event.remove({output: 'indrev:silver_pickaxe'})
  event.remove({output: 'indrev:silver_hoe'})
  event.remove({output: 'indrev:silver_shovel'})


  event.replaceInput({mod: 'phonos'}, 'minecraft:iron_ingot', 'indrev:tin_ingot')
  event.replaceInput({}, 'minecraft:diamond', 'diamondingots:diamond_ingot')
  event.replaceInput({mod: 'farmersdelight'}, 'minecraft:iron_ingot', 'indrev:tin_ingot')
  event.replaceInput({mod: 'drinkbeer'}, 'minecraft:iron_ingot', 'indrev:tin_ingot')

  event.replaceInput({type: 'indrev:modules'}, 'indrev:steel_plate', 'create:polished_rose_quartz')
  //Tinker's Construct Reworking (New fluids and recipes)
	//Tier 2 and 3 materials
	
	event.smithing('createastral:bronze_ingot', 'indrev:tin_ingot', 'minecraft:copper_ingot')
  event.smithing('createastral:bronze_ingot', 'minecraft:copper_ingot', 'indrev:tin_ingot')
  
	
  event.recipes.createMechanicalCrafting('indrev:machine_block', [
    'ABA',
    'ACA',
    'ABA'
  ], {
    A: 'create:brass_sheet',
    B: 'indrev:nikolite_dust',
    C: 'createastral:production_mechanism'
    
  })
  event.recipes.createMechanicalCrafting('createaddition:spool', [
    'BBB',
    'BAB',
    'BBB'
  ], {
    A: 'create:brass_sheet',
    B: 'indrev:nikolite_dust'
    
  })
  event.recipes.createMechanicalCrafting('indrev:charge_pad_mk4', [
    'ABA',
    'ACA',
    'ABA'
  ], {
    A: 'create:brass_sheet',
    B: 'indrev:nikolite_dust',
    C: 'createaddition:connector'
    
  })
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
event.recipes.createMixing(Fluid.of('tconstruct:molten_bronze', 405), [
  {fluid: 'tconstruct:molten_tin', amount: 405},
  {fluid: 'tconstruct:molten_copper', amount: 405}
]).heated()

	event.recipes.createMixing(Fluid.of('tconstruct:molten_rose_gold', 8100), [
    'minecraft:copper_ingot',
    'minecraft:gold_ingot'
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
event.recipes.createFilling('2x create:cogwheel', [
  'create:andesite_alloy',
  {fluid: 'tconstruct:molten_bronze', amount: 3500},
])
event.recipes.createFilling('create:large_cogwheel', [
  'create:cogwheel',
  {fluid: 'tconstruct:molten_bronze', amount: 3500},
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
	
	event.recipes.createMixing(Fluid.of('tconstruct:molten_steel', 9000), [
   '3x indrev:steel_dust',
 ]).superheated().processingTime(1000)

 event.custom({
  "type": "indrev:infuse",
  "ingredients": [
    {
      "item": "indrev:iron_dust",
      "count": 5
    },
    {
      "item": "indrev:coal_dust",
      "count": 8
    }
  ],
  "output": {
    "item": "indrev:steel_dust",
    "count": 3
  },
  "processTime": 1000
})
 
 event.recipes.createMixing(Fluid.of('tconstruct:blazing_blood', 81000), [
    '5x minecraft:blaze_powder',
	'5x indrev:sulfur_dust',
	{fluid: 'minecraft:lava', amount: 81000},
]).heated().processingTime(400)


 
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
]).superheated().processingTime(5)
	event.recipes.createMixing(Fluid.of('tconstruct:molten_manyullyn', 12000), [
    {fluid: 'tconstruct:molten_cobalt', amount: 32400},
    '2x minecraft:netherite_scrap',
	{fluid: 'kubejs:molten_desh', amount: 9000},
]).superheated().processingTime(1000)

	event.recipes.createMixing(Fluid.of('tconstruct:molten_hepatizon', 810), [
    {fluid: 'tconstruct:molten_cobalt', amount: 405},
    {fluid: 'tconstruct:molten_lead', amount: 810},
]).superheated().processingTime(5)

		event.recipes.createMixing(Fluid.of('tconstruct:molten_lumium', 81000), [
    'minecraft:glowstone'
]).superheated().processingTime(500)
	
		event.recipes.createMixing(Fluid.of('tconstruct:molten_debris', 20250), [
    'minecraft:ancient_debris'
]).superheated().processingTime(500)
	
	
	
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
  event.replaceInput({mod: 'toms_storage'}, 'minecraft:crafting_table', 'indrev:silver_plate')
  event.replaceInput({mod: 'toms_storage'}, 'minecraft:ender_pearl', 'indrev:silver_plate')
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
  
	
	
	//ASSORTED MECHANICAL CRAFTING
	
	event.recipes.createMechanicalCrafting('ad_astra:compressor', [
  'ACCA',
  'B  D',
  'AEEA'
], {
  A: 'ad_astra:iron_plate',
  B: 'create:electron_tube',
  C: 'create:mechanical_press',
  D: 'createastral:production_mechanism',
  E: 'indrev:silo'
  
})
	event.recipes.createMechanicalCrafting('ad_astra:solar_panel', [
  'DDD',
  ' B ',
  'ACA',
  'AEA'
], {
  A: 'ad_astra:compressed_desh',
  B: 'indrev:enriched_nikolite_ingot',
  C: 'createastral:navigation_mechanism',
  D: 'minecraft:blue_stained_glass',
  E: 'ad_astra:desh_cable'
  })

  event.recipes.createMechanicalCrafting('ad_astra:coal_generator', [
    'ABCBA',
    'AAEAA'
  ], {
    A: 'ad_astra:compressed_steel',
    B: 'indrev:lead_ingot',
    C: 'createastral:production_mechanism',
    E: 'indrev:intake'
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

event.recipes.createPressing('indrev:tungsten_plate', 'indrev:tungsten_ingot')
event.recipes.createPressing('indrev:silver_plate', 'indrev:silver_ingot')
event.recipes.createPressing('indrev:tin_plate', 'indrev:tin_ingot')
event.recipes.createPressing('indrev:lead_plate', 'indrev:lead_ingot')
event.recipes.createPressing('indrev:electrum_plate', 'indrev:electrum_ingot')
event.recipes.createPressing('indrev:empty_enhancer', 'create:andesite_alloy')






	
	event.recipes.createMechanicalCrafting('polaroidcamera:camera', [
  'AAA',
  'CBC',
  'CDC'
], {
  A: 'create:brass_sheet',
  B: 'create:electron_tube',
  C: 'indrev:tin_ingot',
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
  D: 'createastral:production_mechanism',
  E: 'create:fluid_tank'
  
})
	event.recipes.createMechanicalCrafting('ad_astra:oxygen_loader', [
  'BBABB',
  'BDEDB',
  'BBCBB'
], {
  A: 'ad_astra:oxygen_tank',
  B: 'ad_astra:iron_plate',
  C: 'indrev:fan',
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
	 
	 //BLOCK RECIPE CHANGES
	 
	 event.shaped('minecraft:furnace', [
    'AAA',
    'A A',
    'SSS'
  ], {
    S: 'indrev:raw_tin',
	A: 'minecraft:cobblestone'
	})
	event.shaped('minecraft:blast_furnace', [
    'AAA',
    'ASA',
    'BBB'
  ], {
    S: 'minecraft:furnace',
	A: 'indrev:tin_plate',
	B: 'minecraft:stone'
	})
  event.shaped('8x indrev:cable_mk1', [
    'S',
    'A',
    'S'
  ], {
    S: 'create:copper_sheet',
	A: 'create:electron_tube'
	})

  event.shaped('createastral:copper_heating_coil', [
    'SSS',
    'SAS',
    'SSS'
  ], {
    S: 'indrev:heat_coil',
	A: 'create:electron_tube'
	})

  event.shaped('indrev:heat_coil', [
    'S S',
    'SAS',
    'S S'
  ], {
    S: 'createaddition:copper_wire',
	A: 'createaddition:iron_rod'
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
  
  
 
		//DOODADS MOD RECIPE CHANGES
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



	event.recipes.createFilling('create:electron_tube', [
    'create:polished_rose_quartz',
  {fluid: 'tconstruct:molten_rose_gold', amount: 20250}
])

	event.shaped('automobility:automobile_assembler', [
    'AAA',
    ' B ',
    'BBB'
  ], {
    A: 'indrev:tin_ingot',
	B: 'create:brass_ingot'
	})

		//Create Shit
	
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
  event.shaped('create:precision_mechanism', [
    ' C ',
    'BAB',
    ' C '
  ], {
    A: 'create:brass_casing',
	B: 'create:large_cogwheel',
  C: 'create:cogwheel'
	})
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
	 
	 event.recipes.createSequencedAssembly([ // start the recipe
        'createastral:pure_biomatter', // have this item be a guaranteed output
		], 'create:tree_fertilizer', [ // 'create:brass_ingot' is the input.
        event.recipes.createPressing('create:tree_fertilizer', 'create:tree_fertilizer').processingTime(50)
    ]).transitionalItem('create:tree_fertilizer').loops(500)

    event.recipes.createSequencedAssembly([ // start the recipe
        'automobility:launch_gel', // have this item be a guaranteed output
		], 'tconstruct:slimesteel_nugget', [ // 'create:brass_ingot' is the input.
        event.recipes.createPressing('tconstruct:slimesteel_nugget', 'tconstruct:slimesteel_nugget')
    ]).transitionalItem('create:tree_fertilizer').loops(125)
    
    event.recipes.createSequencedAssembly([ // start the recipe
    'createastral:pure_biomatter', // have this item be a guaranteed output
], 'indrev:biomass', [ // 'create:brass_ingot' is the input.
    event.recipes.createPressing('create:tree_fertilizer', 'create:tree_fertilizer').processingTime(50)
]).transitionalItem('create:tree_fertilizer').loops(500)

	 
	 event.recipes.createMixing(Fluid.of('ad_astra:fuel', 81000), [
    '4x createastral:pure_biomatter',
    {fluidTag: 'c:plantoil', amount: 81000},
    {fluid: 'ad_astra:oil', amount: 81000},
]).heated().processingTime(2500)



    event.recipes.createSequencedAssembly([ // start the recipe
        'indrev:circuit_mk1', // have this item be a guaranteed output
		], 'create:golden_sheet', [ // 'create:brass_ingot' is the input.
		event.recipes.createDeploying('create:golden_sheet', ['indrev:nikolite_dust', 'indrev:nikolite_dust']),
		event.recipes.createDeploying('create:golden_sheet', ['create:copper_sheet', 'create:copper_sheet']),
    event.recipes.createPressing('create:golden_sheet', 'create:golden_sheet'),
    ]).transitionalItem('create:golden_sheet').loops(3)

    event.recipes.createSequencedAssembly([ // start the recipe
        'indrev:circuit_mk2', // have this item be a guaranteed output
		], 'indrev:circuit_mk1', [ // 'create:brass_ingot' is the input.
		event.recipes.createFilling('indrev:circuit_mk2', ['indrev:circuit_mk2', {fluid: 'tconstruct:molten_silver', amount: 9000}]), //fill
		event.recipes.createDeploying('indrev:circuit_mk1', ['indrev:nikolite_ingot', 'indrev:nikolite_ingot']),
    event.recipes.createPressing('indrev:circuit_mk1', 'indrev:circuit_mk1'),
    ]).transitionalItem('indrev:circuit_mk1').loops(3)

    event.recipes.createSequencedAssembly([ // start the recipe
        'indrev:circuit_mk3', // have this item be a guaranteed output
		], 'indrev:circuit_mk2', [ // 'create:brass_ingot' is the input.
		event.recipes.createFilling('indrev:circuit_mk2', ['indrev:circuit_mk2', {fluid: 'tconstruct:molten_electrum', amount: 9000}]), //fill
		event.recipes.createDeploying('indrev:circuit_mk2', ['indrev:enriched_nikolite_dust', 'indrev:enriched_nikolite_dust']),
    event.recipes.createPressing('indrev:circuit_mk2', 'indrev:circuit_mk2'),
    ]).transitionalItem('indrev:circuit_mk2').loops(3)

    event.recipes.createSequencedAssembly([ // start the recipe
        'indrev:circuit_mk4', // have this item be a guaranteed output
		], 'indrev:circuit_mk3', [ // 'create:brass_ingot' is the input.
		event.recipes.createFilling('indrev:circuit_mk3', ['indrev:circuit_mk3', {fluid: 'tconstruct:molten_lead', amount: 9000}]), //fill
		event.recipes.createDeploying('indrev:circuit_mk3', ['indrev:enriched_nikolite_ingot', 'indrev:enriched_nikolite_ingot']),
    event.recipes.createPressing('indrev:circuit_mk3', 'indrev:circuit_mk3'),
    ]).transitionalItem('indrev:circuit_mk3').loops(3)
	
	
	event.recipes.createSequencedAssembly([ // start the recipe
        'createastral:navigation_mechanism', // have this item be a guaranteed output
		], 'phonos:redstone_chip', [ // 'create:brass_ingot' is the input.
		event.recipes.createPressing('create:incomplete_precision_mechanism', 'create:incomplete_precision_mechanism'),
		event.recipes.createFilling('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', {fluid: 'tconstruct:molten_cobalt', amount: 1000}]), //fill bronze
        event.recipes.createDeploying('create:incomplete_precision_mechanism', ['indrev:electrum_nugget', 'indrev:electrum_nugget']), //fill bronze
    ]).transitionalItem('create:incomplete_precision_mechanism').loops(30)
	 
	event.recipes.createSequencedAssembly([ // begin
        'createastral:blazing_mechanism', // output
		], 'minecraft:netherite_ingot', [ // input
		event.recipes.createFilling('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', {fluid: 'minecraft:lava', amount: 20250}]), //fill 1/4 bucket lava
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['minecraft:magma_block', 'minecraft:magma_block']), //yeah
        event.recipes.createDeploying('create:incomplete_precision_mechanism', ['tconstruct:seared_brick', 'tconstruct:seared_brick']), //yeah
    ]).transitionalItem('create:incomplete_precision_mechanism').loops(10) 
	
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
        'createastral:production_mechanism', // output
		], 'create:precision_mechanism', [ // input
		event.recipes.createFilling('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', {fluid: 'tconstruct:molten_bronze', amount: 4050}]), //fill bronze
		event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:powdered_obsidian', 'create:powdered_obsidian']), //fill obsid
        event.recipes.createPressing('create:incomplete_precision_mechanism', 'create:incomplete_precision_mechanism') //yeah
    ]).transitionalItem('create:incomplete_precision_mechanism').loops(20) 
	 
	 event.recipes.createCompacting('ad_astra:iron_plate', [
  'create:iron_sheet',
]).heated()

event.recipes.createPressing('createastral:bronze_sheet', 'createastral:bronze_ingot')
 
////////////////  EARLY GAME ANDESITE / GROUT RELATED STUFF 

 event.recipes.createMixing('create:chromatic_compound', [
  'ad_astra:desh_block',
  'ad_astra:ostrum_block',
  'ad_astra:calorite_block',
  'indrev:enriched_nikolite_ingot',
  {fluid: 'kubejs:shimmer', amount: 81000},
]).superheated().processingTime(2500)

event.recipes.createMixing(Fluid.of('kubejs:compound_mixture', 9000), [
  'minecraft:andesite',
  'indrev:tin_nugget',
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
  A: 'indrev:tin_nugget',
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
    event.remove({output: 'indrev:copper_nugget'})
	event.smelting('minecraft:leather', 'minecraft:rotten_flesh').xp(2.0)
  event.smelting('indrev:tin_ingot', 'create:crushed_tin_ore')
  event.smelting('indrev:silver_ingot', 'create:crushed_silver_ore')
  event.smelting('indrev:lead_ingot', 'create:crushed_lead_ore')
  event.smelting('indrev:tungsten_ingot', 'create:crushed_uranium_ore')
  event.smithing('farmersdelight:cooking_pot', 'farmersdelight:skillet', 'minecraft:water_bucket')
  event.recipes.createCrushing([
    'create:crushed_tin_ore',
    Item.of('minecraft:iron_nugget').withChance(1),
  ], 'indrev:raw_tin')
  event.recipes.createCrushing([
    'create:crushed_silver_ore',
    Item.of('create:experience_nugget').withChance(0.75),
  ], 'indrev:raw_silver')
  event.recipes.createCrushing([
    'create:crushed_lead_ore',
    Item.of('minecraft:coal').withChance(0.2),
  ], 'indrev:raw_lead')
  event.recipes.createCrushing([
    'create:crushed_uranium_ore',
    Item.of('create:zinc_nugget').withChance(1),
  ], 'indrev:raw_tungsten')

  event.recipes.createCrushing([
    'minecraft:quartz',
    Item.of('minecraft:iron_nugget').withChance(0.5),
  ], 'ad_astra:moon_sand')

event.shaped('minecraft:experience_bottle', [
  'AAA',
  'ABA',
  'AAA'
], {
  A: 'create:experience_nugget',
  B: 'minecraft:glass_bottle'
})

  event.recipes.createCrushing([
    Item.of('minecraft:raw_iron').withChance(0.001),
    Item.of('minecraft:raw_gold').withChance(0.001),
    Item.of('create:raw_zinc').withChance(0.001),
    Item.of('minecraft:raw_copper').withChance(0.0015),
    Item.of('minecraft:coal').withChance(0.004),
    Item.of('indrev:raw_tin').withChance(0.002),
    Item.of('indrev:raw_lead').withChance(0.0005),
    Item.of('indrev:raw_tungsten').withChance(0.0005),
    Item.of('indrev:raw_silver').withChance(0.001),
    Item.of('minecraft:redstone').withChance(0.005),
    Item.of('minecraft:lapis_lazuli').withChance(0.002),
  ], 'minecraft:cobbled_deepslate')
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

	event.recipes.createMixing('phonos:redstone_chip', [
  'create:electron_tube',
  'create:golden_sheet'
])
event.recipes.createMixing('indrev:nikolite_ingot', [
  'create:zinc_ingot',
  'indrev:nikolite_dust'
]).heated()
event.recipes.createMixing('indrev:enriched_nikolite_ingot', [
  'indrev:nikolite_ingot',
  'indrev:enriched_nikolite_dust'
]).superheated()
	event.recipes.createMixing('4x bosses_of_mass_destruction:soul_star', [
  '16x ad_astra:glacio_ice_shard_ore',
  'minecraft:nether_star'
])

	 event.shaped('minecraft:bundle', [
    ' S ',
    'A A',
    ' A '
  ], {
    S: 'minecraft:string',
	A: 'minecraft:leather',
	})
	
		 event.shaped('4x createastral:sturdy_sheet_block', [
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

	 event.shaped('4x createastral:copper_plating', [
    'AA',
    'AA'
  ], {
    A: 'create:copper_sheet',
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
	
	event.shaped('camsbackpacks:white_backpack', [
    'ABA',
    'CDE',
	'FAF'
  ], {
    A: 'farmersdelight:canvas',
	B: 'campanion:tent_bag',
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
  F: 'create:electron_tube',
  G: 'createastral:navigation_mechanism'
  
})
event.recipes.createMechanicalCrafting('ad_astra:jet_suit_helmet', [
  ' F ',
  'AEA',
  'AGA'
], {
  A: 'ad_astra:compressed_calorite',
  E: Item.of('ad_astra:netherite_space_helmet').ignoreNBT(),
  F: 'create:electron_tube',
  G: 'minecraft:orange_stained_glass'
  
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
  F: 'dustrial_decor:padded_block',

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

  //  rocket time

  event.recipes.createMechanicalCrafting('ad_astra:tier_1_rocket', [
    '  A  ',
    '  B  ',
    ' BIB ',
    ' CDC ',
    ' CEC ',
    ' CFC ',
    'BFDFB',
    'BGCGB',
    'G H G'
    
  ], {
    A: 'ad_astra:rocket_nose_cone',
    B: 'create:sturdy_sheet',
    C: 'indrev:machine_block',
    D: 'create:brass_block',
    E: 'create_crystal_clear:brass_glass_casing',
    F: 'indrev:circuit_mk1',
    G: 'ad_astra:steel_tank',
    H: 'create:blaze_burner',
    I: 'createaddition:alternator'
  })

  event.recipes.createMechanicalCrafting('ad_astra:launch_pad', [
    'CCCCCC',
    'CABABC',
    'CBABAC',
    'CABABC',
    'CBABAC',
    'CCCCCC',
    
  ], {
    A: 'indrev:lead_plate',
    B: 'ad_astra:iron_plate',
    C: 'create:sturdy_sheet'

  })


//SHIMMER RECIPES

event.recipes.createMixing(Fluid.of('kubejs:shimmer', 40500), [
  '5x minecraft:amethyst_shard',
'16x minecraft:glowstone_dust',
'2x minecraft:glow_ink_sac'
]).heated().processingTime(400)


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
]).superheated().processingTime(30)

event.recipes.createMixing('doodads:portable_nether', [
  {fluid: 'kubejs:shimmer', amount: 81000},
  'minecraft:lodestone',
]).superheated().processingTime(500)

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

event.recipes.createMixing('create:blaze_burner', [
  {fluid: 'kubejs:shimmer', amount: 40500},
  'create:empty_blaze_burner',
  '3x compressor:double_compressed_netherrack'
]).heated().processingTime(30)


})
















		//RADIANT SET BONUS
chestplate = 'createastral:radiant_chestplate'
helmet = "createastral:radiant_helmet"
leggings = 'createastral:radiant_leggings'
boots = 'createastral:radiant_boots'

onEvent('player.tick', event => {
    if (event.player.getTicksExisted()%100==0){
		if (event.player.headArmorItem == 'createastral:radiant_helmet' && event.player.chestArmorItem == 'createastral:radiant_chestplate' && event.player.legsArmorItem == 'createastral:radiant_leggings' && event.player.feetArmorItem == 'createastral:radiant_boots') {
               event.server.runCommandSilent(`effect give ${event.player} minecraft:jump_boost 6 0 true`)
			   event.server.runCommandSilent(`effect give ${event.player} minecraft:resistance 6 0 true`)
			   event.server.runCommandSilent(`effect give ${event.player} minecraft:haste 6 0 true`)
			   
        }
       if (event.player.headArmorItem == 'minecraft:golden_helmet' && event.player.chestArmorItem == 'minecraft:golden_chestplate' && event.player.legsArmorItem == 'minecraft:golden_leggings' && event.player.feetArmorItem == 'minecraft:golden_boots') {
               event.server.runCommandSilent(`effect give ${event.player} minecraft:luck 6 0 true`)
			  
			   
        }
		if (event.player.headArmorItem == 'minecraft:diamond_helmet' && event.player.chestArmorItem == 'minecraft:diamond_chestplate' && event.player.legsArmorItem == 'minecraft:diamond_leggings' && event.player.feetArmorItem == 'minecraft:diamond_boots') {
               event.server.runCommandSilent(`effect give ${event.player} minecraft:haste 6 0 true`)
			  
			   
        }
		if (event.player.headArmorItem == 'minecraft:netherite_helmet' && event.player.chestArmorItem == 'minecraft:netherite_chestplate' && event.player.legsArmorItem == 'minecraft:netherite_leggings' && event.player.feetArmorItem == 'minecraft:netherite_boots') {
               event.server.runCommandSilent(`effect give ${event.player} minecraft:fire_resistance 6 0 true`)
			  
			   
        }
		if (event.player.headArmorItem == 'createastral:brass_helmet' && event.player.chestArmorItem == 'createastral:brass_chestplate' && event.player.legsArmorItem == 'createastral:brass_leggings' && event.player.feetArmorItem == 'createastral:brass_boots') {
               event.server.runCommandSilent(`effect give ${event.player} minecraft:jump_boost 5 0 true`)
			  
			   
        }
        if (event.player.trinket == 'createastral:brass_helmet' && event.player.chestArmorItem == 'createastral:brass_chestplate' && event.player.legsArmorItem == 'createastral:brass_leggings' && event.player.feetArmorItem == 'createastral:brass_boots') {
          event.server.runCommandSilent(`effect give ${event.player} minecraft:jump_boost 5 0 true`)
   
    
   }
}
})

onEvent('block.right_click', event => {
    if (event.item.hasTag('c:lanterns')) {
        let bracket = event.block.entityData.Bracket.Properties
        if (bracket) {
            if (bracket.facing == 'up' && event.block.down.id !== 'minecraft:lantern') {
                event.block.down.set(event.item.id, {hanging: true})
                event.player.playSound('block.lantern.place')
            } else if (bracket.facing == 'down' && event.block.up.id !== 'minecraft:lantern') {
                event.block.up.set(event.item.id, {hanging: false})
                event.player.playSound('block.lantern.place')
            }
            if (!event.player.creativeMode) { event.player.getHeldItem(event.hand).count -= 1 }
        }
    }
});
// Listen to player login event
onEvent('player.logged_in', event => {
  // Check if player doesn't have "starting_items" stage yet
  if (!event.player.stages.has('starting_items')) {
    // Add the stage
    event.player.stages.add('starting_items')
    // Give some items to player
    event.server.runCommandSilent(`scoreboard players set reward bac_settings 0`)
    event.server.runCommandSilent(`scoreboard players set task bac_settings 0`)
    event.server.runCommandSilent(`scoreboard players set goal bac_settings 0`)
    event.server.runCommandSilent(`scoreboard players set challenge bac_settings 0`)
    event.server.runCommandSilent(`scoreboard players set super_challenge bac_settings 0`)
    event.server.runCommandSilent(`scoreboard players set milestone bac_settings 0`)
    event.server.runCommandSilent(`gamerule announceAdvancements true`)


  }
})
onEvent('player.chat', (event) => {
  // Check if message equals creeper, ignoring case
  if (event.message.trim().equalsIgnoreCase('!discord')) {
    // Schedule task in 1 tick, because if you reply immidiently, it will print before player's message
    event.server.scheduleInTicks(1, event.server, (callback) => {
      // Tell everyone Aw man, colored green. Callback data is the server
      callback.data.tell(Text.blue('Click below 4 discord.'))
      event.server.runCommandSilent(`/tellraw @a [{"text":"https://discord.gg/mNeHyuZdqm","clickEvent":{"action":"open_url","value":"https://discord.gg/mNeHyuZdqm"}}]`)
    })
  }
  
})