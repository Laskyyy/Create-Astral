// priority: 0

settings.logAddedRecipes = false
settings.logRemovedRecipes = false
settings.logSkippedRecipes = false
settings.logErroringRecipes = false

console.info('Welcome to white space.')

// Some constants for easy configuration
const CRUSHING_ORE_BONUS_ORE_YIELD = .33;
const CRUSHING_ORE_BONUS_XP_CHUNKS = .33;

///// DIAMONDS REQUIRE DIAMOND TIER TO MINE (IT MAKES SENSE) /////

// Change this constant to change the chance of bonus ore crushing provides
const BONUS_CRUSH_ORE = .33; 

onEvent('tags.blocks', event => {
  event.remove('minecraft:needs_iron_tool', 'minecraft:diamond_ore')
  event.remove('minecraft:needs_iron_tool', 'minecraft:deepslate_diamond_ore')
  event.add('minecraft:needs_diamond_tool', 'minecraft:diamond_ore')
  event.add('minecraft:needs_diamond_tool', 'minecraft:deepslate_diamond_ore')


})

// constants
var FULL_BUCKET_AMMOUNT = 81000;
var INGOT_FLUID_AMMOUNT = 9000;

// Includes some "ore alchemy" and other misc blocks like andeste alloy blocks
function lizardMiscChanges(event) {
  event.replaceInput('create:powdered_obsidian', '#c:dusts/obsidian');
  event.replaceInput('techreborn:obsidian_dust', '#c:dusts/obsidian');
  event.replaceInput('createaddition:diamond_grit', 'techreborn:diamond_dust');



  // Remove Tech reborn's coal grinding recipe, make the crushing wheel required.
  // TODO: implement "ore dust" idea.
  event.remove({type: 'techreborn:grinder', output: 'techreborn:coal_dust'});
  event.remove({type: 'techreborn:grinder', output: 'techreborn:charcoal_dust'});
  event.recipes.createCrushing([
    'techreborn:coal_dust'
  ], 'minecraft:coal');
  event.recipes.createCrushing([
    'techreborn:charcoal_dust'
  ], 'minecraft:charcoal');

  // Create charcoal dust haunting recipe, parity with normal coal haunting.
  event.recipes.createHaunting([
    'techreborn:coal_dust'
  ], '2x techreborn:charcoal_dust');

  // Implementing Andesite Alloy Block
  event.shaped('createastral:andesite_alloy_block', [
    'AAA', 'AAA', 'AAA'
  ], {
    A: 'create:andesite_alloy'
  });

  event.shaped('9x create:andesite_alloy', [
    'A'
  ], {
    A: 'createastral:andesite_alloy_block'
  });

  // andesite alloy block basin recipe
  event.custom({
    "type": "tconstruct:casting_basin",
    "fluid": {
      "name": "kubejs:compound_mixture",
      "amount": INGOT_FLUID_AMMOUNT * 9
    },
    "result": "createastral:andesite_alloy_block",
    "cooling_time": 180,
  });


  // Make some machine recipes more interesting
  event.remove({output: 'techreborn:grinder'});
  event.shaped('techreborn:grinder', [
    'ABA',
    'CDC',
    ' E '
  ], {
    A: 'create:sturdy_sheet',
    B: 'create:integrated_circuit',
    C: 'minecraft:diamond',
    D: 'create:millstone',
    E: 'techreborn:basic_machine_frame'
  });

  event.remove({output: 'techreborn:wire_mill'});
  event.shaped('techreborn:wire_mill', [
    'ABA',
    'ADA', /*'CDC',*/
    ' E '
  ], {
    A: 'create:sturdy_sheet',
    B: 'createaddition:rolling_mill',
    // C: 'create:integreted' // A little weird since the extractor also has the 
    D: 'techreborn:extractor',
    E: 'create:mechanical_piston'
  });

  event.remove({ output: 'techreborn:compressor' });
  event.shaped('techreborn:compressor', [
    'ABA',
    'ACA',
    'ADA'
  ], {
    A: 'create:sturdy_sheet',
    B: 'create:integrated_circuit',
    C: 'create:mechanical_press',
    D: 'techreborn:basic_machine_frame',
  });

  // Let's making the rolling mill more relevant by making cables require create addition rods
  event.replaceInput({output:'techreborn:copper_cable'}, 
    'minecraft:copper_ingot', 'createaddition:copper_rod');
  event.replaceInput({output:'techreborn:gold_cable'}, 
    'minecraft:gold_ingot', 'createaddition:gold_rod');
  event.replaceInput({input: 'techreborn:rubber', output: 'techreborn:insulated_copper_cable'},
    'minecraft:copper_ingot', 'createaddition:copper_rod');

  // Originally I was going to have the wire mill be an upgraded rolling mill but the above code
  //  changes the input to rods instead of ingots. I kind of like this a bit more. Downsides is that it may be annoying
  //  to use both machines for an item they may not craft often, outside of circuit automation. 
  // Still, I'll let the wire mill produce wires.
  // event.replaceOutput({type: 'techreborn:wiremill'}, 'techreborn:copper_cable', 'createaddition:copper_rod');
  const WIRE_MATERIALS = ['iron', 'gold', 'copper', 'brass'];
  for (let material of WIRE_MATERIALS) {
    event.custom({
      "type": "techreborn:wire_mill",
      "power": 2,
      "time": 300,
      "ingredients": [
        {
          "item": 'create:' + material + '_sheet',
          "count": 4
        }
      ],
      "results": [
        {
          "item": 'createaddition:' + material + '_wire',
          "count": 6
        }
      ]
    });
  }

  // Buffed catwalk output. Seriously! Its so resource heavy!
  const CATWALK_MATERIALS = [
    ['gold', 'create:golden_sheet'], ['netherite', 'createdeco:netherite_sheet'],
    ['andesite', 'create:andesite_alloy'], ['brass', 'create:brass_sheet'], 
    ['cast_iron', 'createdeco:cast_iron_sheet'], ['iron', 'minecraft:iron_sheet'], 
    ['copper', 'create:copper_sheet'], ['zinc', '#c:plates/zinc']];

  for (let catwalkMaterial of CATWALK_MATERIALS) {
    event.remove({output: 'createdeco:' + catwalkMaterial[0] + '_catwalk'});
    
    // Note I'm deliberately changing iron catwalk recipe to not use sandpapering.
    event.shaped('8x createdeco:' + catwalkMaterial[0] + '_catwalk', [
      ' A ',
      'ABA',
      ' A '
    ], {
      A: catwalkMaterial[1],
      B: catwalkMaterial[0] == 'iron'? 'minecraft:iron_bars': 'createdeco:' + catwalkMaterial[0] + '_bars'
    });
  }
}

// Largely degating trains
function lizardCH1Changes(event) {
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
  // ], 'create:powdered_obsidian', [
  // Todo: should we just do an event.replaceInput so obsidian dust and powdered obsidian is interchangeable?
  ], '#c:dusts/obsidian', [
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
}

// A lot of progression fixes
function lizardCH2Changes(event) {
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

  // Make Oxygen loader possible before the moon
  // (NOTE: I commented out original recipe)
	event.shaped('ad_astra:oxygen_loader', [
    'IOI',
    'PTP',
    'IFI'
  ], {
    I: 'create:iron_sheet',
    O: 'ad_astra:oxygen_tank',
    P: 'create:smart_fluid_pipe',
    T: 'create:fluid_tank',
    F: 'ad_astra:engine_fan'
	});


  // Degate Distributor to be before the compressor, so people can make moon bases as soon as they
  //  reach the moon.
  event.remove({output: 'ad_astra:oxygen_distributor'})
  event.shaped('ad_astra:oxygen_distributor', [
    'FFF',
    'TLT',
    'DGD'
  ], {
    F: 'ad_astra:engine_fan',
    T: 'ad_astra:oxygen_tank',
    L: 'ad_astra:oxygen_loader',
    D: 'ad_astra:desh_ingot',
    G: 'ad_astra:oxygen_gear'
  });
}

// Made changes to give silver and brass more unique identities
function lizardCH3Changes(event) {
  // Remove mechanical crafter requirement from alternator+electric motor,
  //  Making it fully unique to the silver path.
  event.remove({output: 'createaddition:alternator'});
  event.shaped('createaddition:alternator', [
    'ABA',
    'CDC',
    'EFE'
  ], {
    A: 'create:iron_sheet',
    B: 'techreborn:red_cell_battery',
    C: 'createaddition:copper_spool',
    D: 'create:integrated_circuit',
    E: 'createaddition:capacitor',
    F: 'techreborn:basic_machine_casing'
  });

  event.remove({output: 'createaddition:electric_motor'});
  event.shaped('createaddition:electric_motor', [
    'ABA',
    'CDC',
    'EFE'
  ], {
    A: 'createastral:bronze_sheet',
    B: 'techreborn:red_cell_battery',
    C: 'createaddition:copper_spool',
    D: 'create:integrated_circuit',
    E: 'createaddition:capacitor',
    F: 'techreborn:basic_machine_casing'
  });

  // Removed brass+mechanical crafting requirement for Tesla Coil,
  //  Making it fully unique to the silver path.
  event.remove({output: 'createaddition:tesla_coil'});
  event.shaped('createaddition:tesla_coil', [
    'DSD',
    'USU',
    'CMC'
  ], {
    D: 'ad_astra:desh_ingot',
    S: 'createaddition:copper_spool',
    U: 'techreborn:copper_cable',
    C: 'createaddition:capacitor',
    M: 'techreborn:basic_machine_casing'
  });
  
  // New Electrum recipe
  event.custom({
    "type":"createaddition:charging",
    "input": {
          "item": "kubejs:molten_desh_bucket",
      "count": 1
    },
    "result": {
      "item": "tconstruct:molten_electrum_bucket",
      "count": 1
    },
    "energy": 4000
  });

  // I commented out the two lines replacing scroched brick input with scorched bricks
  //  and the one line removing scorched bricks entirely. They made the foundry impossible.
  // Also: I commented out the original nether grout recipe
  event.recipes.createMixing('3x tconstruct:nether_grout', [
    'minecraft:magma_cream',
    'minecraft:soul_sand',
    'create:scoria',
    '#c:dusts/obsidian',
    '#c:dusts/obsidian',
    '#c:dusts/obsidian'
  ]).heated().processingTime(700);

  // De-gating chunk-loader, but then give it more difficult materials to balance it out
  // Todo: make it require plates that require special dust crafting.
  event.replaceInput({type: 'minecraft:crafting_shaped', output: 'techreborn:chunk_loader'}, 
    'techreborn:industrial_machine_frame', 'techreborn:basic_machine_frame');
  event.replaceInput({type: 'minecraft:crafting_shaped', output: 'techreborn:chunk_loader'}, 
    'techreborn:coal_plate', 'techreborn:diamond_plate');
  event.replaceInput({type: 'minecraft:crafting_shaped', output: 'techreborn:chunk_loader'}, 
    'techreborn:coal_plate', 'techreborn:diamond_plate');
  event.replaceInput({type: 'minecraft:crafting_shaped', output: 'techreborn:chunk_loader'}, 
    'createastral:bronze_sheet', 'techreborn:electrum_plate');
  event.replaceInput({type: 'minecraft:crafting_shaped', output: 'techreborn:chunk_loader'}, 
    'create:golden_sheet', 'techreborn:emerald_plate');

  // Scorched tanks NEED a recipe! These both take the same amount of bricks.
  //  Seared version did require brass but I don't think that makes sense.
  event.shaped('tconstruct:scorched_fuel_tank', [
    'AAA',
    'ABA',
  ], {
    A: 'tconstruct:scorched_brick',
    B: 'create:fluid_tank',
  });
  event.shaped('tconstruct:scorched_fuel_gauge', [
    'ACA',
    'CBC',
    'AAA'
  ], {
    A: 'tconstruct:scorched_brick',
    B: 'create:fluid_tank',
    C: '#c:glass'
  });

  // Changed blaze burner recipe.
  event.shaped('create:empty_blaze_burner', [
    'AAA',
    'A A',
    'BCB'
  ], {
    A: 'createaddition:iron_rod',
    B: 'create:iron_sheet',
    C: 'minecraft:netherrack'
  });

  // Gag recipe
  event.shaped('create:blaze_burner', [
    'AAA',
    'ADA',
    'BCB'
  ], {
    A: 'createaddition:iron_rod',
    B: 'create:iron_sheet',
    C: 'minecraft:netherrack',
    D: 'tconstruct:blaze_head'
  });
}

function lizardCH3Biofuel(event) {
  // Biofuel rework
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
}

// This includes the launch pad recipe
function lizardCH3Concrete(event) {

  // Cement recipe
  // Todo: be not lazy and make it so all concrete powders require lime
  event.recipes.createMixing(Fluid.of('kubejs:blast-resistant_cement', FULL_BUCKET_AMMOUNT), [
    '#c:concrete_powder',
    '2x createastral:lime',
    '3x techreborn:steel_dust',
    {fluid: 'minecraft:water', amount: FULL_BUCKET_AMMOUNT },
  ]).heated().processingTime(1000); // I don't know if heating it makes sense cause of water but it was screaming to be heated

  // Cement pouring recipe
  event.custom({
    "type": "tconstruct:casting_basin",
    "fluid": {
      "name": "kubejs:blast-resistant_cement",
      "amount": FULL_BUCKET_AMMOUNT
    },
    "result": "createastral:blast-resistant_concrete",
    "cooling_time": 400
  })

  // Old school slab and stairs
  event.shaped('6x createastral:blast-resistant_concrete_slab', [
    'AAA',
  ], {
    A: 'createastral:blast-resistant_concrete',    
  })

  event.shaped('4x createastral:blast-resistant_concrete_stairs', [
    'A  ',
    'AA ',
    'AAA',
  ], {
    A: 'createastral:blast-resistant_concrete'
  });

  // Cement block-cutting recipe
  event.stonecutting('2x createastral:blast-resistant_concrete_slab', 'createastral:blast-resistant_concrete');
  event.stonecutting('createastral:blast-resistant_concrete_stairs',  'createastral:blast-resistant_concrete');

  // Launch pad recipe
  event.recipes.createMechanicalCrafting('ad_astra:launch_pad', [
    'BAAAB',
    'ABABA',
    'AABAA',
    'ABABA',
    'BAAAB',  
  ], {
    A: 'createastral:blast-resistant_concrete',
    B: 'create:sturdy_sheet',
  });
}

// Todo: various tech reborn "gem" ores should give gems when crushed
function lizardGrinderCrushingRework(event) {

  // Remove all block techreborn grinding recipes
  event.remove({type: 'techreborn:grinder', input: '#c:ores'});
  event.remove({type: 'techreborn:grinder', input: '#c:storage_blocks'});
  
  // I'm not giving these recipes below to crushing wheel (they're kind of redundant)
  event.remove({type: 'techreborn:grinder', input: '#techreborn:storage_blocks'});
  event.remove({type: 'techreborn:grinder', output:'#c:concrete_powder'});
  event.remove({type: 'techreborn:grinder', input: '#c:sandstone'});
  
  // Remove grinder recipes that either have a unique crushing recipe, or doesn't make sense to grind
  event.remove({type: 'techreborn:grinder', input: '#minecraft:wool'});
  event.remove({type: 'techreborn:grinder', input: 'minecraft:gravel'});
  event.remove({type: 'techreborn:grinder', input: 'minecraft:obsidian'});
  event.remove({type: 'techreborn:grinder', input: 'minecraft:shroomlight'});
  event.remove({type: 'techreborn:grinder', input: 'minecraft:glowstone'});
  event.remove({type: 'techreborn:grinder', input: 'ad_astra:steel_block'});
  event.remove({type: 'techreborn:grinder', input: 'createastral:bronze_block'});
  event.remove({type: 'techreborn:grinder', input: 'minecraft:andesite'});
  event.remove({type: 'techreborn:grinder', input: 'minecraft:diorite'});
  event.remove({type: 'techreborn:grinder', input: 'minecraft:granite'});
  event.remove({type: 'techreborn:grinder', input: 'minecraft:netherrack'});
  event.remove({type: 'techreborn:grinder', input: 'minecraft:warped_nylium'});
  event.remove({type: 'techreborn:grinder', input: 'minecraft:crimson_nylium'});

  // Remove recipes that clutter without adding enough value
  event.remove({type: 'techreborn:grinder', output: 'techreborn:saw_small_dust'});
  event.remove({type: 'techreborn:grinder', output: 'minecraft:sand'});
  event.remove({type: 'techreborn:grinder', output: 'minecraft:red_sand'});

  // Remove grinder calcite dust, add crushing recipe to just coral
  event.remove({type: 'techreborn:grinder', input: '#techreborn:calcite_dust_material'});
  event.recipes.createCrushing(['techreborn:calcite_dust'], '#coral_blocks');

  // Replace grinder recipes with crushing recipes
  const GRINDER_RECIPES_TO_BECOME_CRUSHING = [['minecraft:wet_sponge', '5x techreborn:sponge_piece'],
    ['minecraft:prismarine_bricks', '7x minecraft:prismarine_shard'], ['minecraft:prismarine', '3x minecraft:prismarine_shard'],
    ['minecraft:sea_lantern', '4x prismarine_crystals'], ['#c:basalt', 'techreborn:basalt_dust'],
    ['minecraft:end_stone', 'techreborn:endstone_dust']
  ];
  for (let recipe of GRINDER_RECIPES_TO_BECOME_CRUSHING) {
    event.remove({type: 'techreborn:grinder', input: recipe[0]})
    event.recipes.createCrushing([recipe[1]], recipe[0]);
  }
  
  // Replace all techreborn ores to require the crushing wheel for dusts
  const TECHREBORN_RANDOM_ORE_NEED_CRUSHING = ['sapphire', 'bauxite', 'cinnabar', 'ruby', 'galena', 'peridot', 'sodalite', 'pyrite', 'cinnabar', 'sphalerite'];
  const TECHREBORN_RANDOM_ORE_NO_DEEPSLATE = ['pyrite', 'cinnabar', 'sphalerite'];
  // Todo: use tags so there's no need for this second array?

  for (let ore of TECHREBORN_RANDOM_ORE_NEED_CRUSHING) {
    event.remove({type: 'techreborn:grinder', input: 'techreborn:' + ore + '_ore' });
    event.recipes.createCrushing([
      'techreborn:' + ore + '_dust',
      Item.of('techreborn:' + ore + '_dust').withChance(.5)
    ], 'techreborn:' + ore + '_ore');
    
    // If it doesn't find the ore listed in "no deepslate" (Therefore it has a deepslate version),
    //  repeat the above operations for the deepslate variation
    if (!TECHREBORN_RANDOM_ORE_NO_DEEPSLATE.find(e => e == ore)) {
      event.remove({type: 'techreborn:grinder', input: 'techreborn:deepslate_' + ore + '_ore' });
      event.recipes.createCrushing([
        'techreborn:' + ore + '_dust',
        Item.of('techreborn:' + ore + '_dust').withChance(.5)
      ], 'techreborn:deepslate_' + ore + '_ore');
    }
  }
  
  // Replace the ore BLOCKS (ie the blocks found in the ground) with crushing recipes to produce raw ore instead of
  //  grinder recipes
  const TECHREBORN_PRODUCTION_ORE_NEED_CRUSHING = ['silver', 'tin', 'lead'];
  for (let ore of TECHREBORN_PRODUCTION_ORE_NEED_CRUSHING) {
    event.remove({type: 'techreborn:grinder', input: 'techreborn:' + ore + '_ore'});
    event.remove({type: 'techreborn:grinder', input: 'techreborn:deepslate_' + ore + '_ore'});

    event.recipes.createCrushing([
      '2x techreborn:raw_' + ore
    ], 'techreborn:' + ore + '_ore');
    event.recipes.createCrushing([
      '2x techreborn:raw_' + ore
    ], 'techreborn:deepslate_' + ore + '_ore');
  }

  // Add crushing unique crushing recipes to grinder
  // 0: input / 1: output amount / 2: output / 3: custom time / 4: custom power
  // NOTE: some crushing recipes are auto-generated from milling recipes, which means not all these recipes will be removed.
  //  They may remove upgraded crushing recipes though. The quest book will make it clear that
  //  some milling recipes may be upgraded by the grinder instead of the crushing wheel.
  const DEFAULT_GRIND_TIME = 100; // five seconds
  const DEFAULT_GRIND_POWER = 5;  
  const CRUSHING_RECIPES_TO_BECOME_GRINDING = [
    ['minecraft:clay_ball', 1, 'techreborn:clay_dust', undefined, undefined], // showing the 4th and 5th for demonstration
    ['minecraft:amethyst_cluster', 7, 'minecraft:amethyst_shard'],
    ['minecraft:prismarine_crystals', 2, 'minecraft:quartz'],
    ['minecraft:saddle', 3, 'minecraft:leather'],
    ['minecraft:wheat', 3, 'create:wheat_flour'],
    ['minecraft:ender_pearl', 2, 'ae2:ender_dust'],
    ['tconstruct:necrotic_bone', 6, 'minecraft:bone_meal'],
    ['minecraft:dried_kelp', 1, 'minecraft:gunpowder']
  ];

  for (let recipe of CRUSHING_RECIPES_TO_BECOME_GRINDING) {
    // event.remove({ type:'create:crushing', input: recipe[0] });
    event.remove({ type: 'create:crushing', input: recipe[0] });
    event.custom({
      type: 'techreborn:grinder',
      time: recipe[3] || DEFAULT_GRIND_TIME,
      power: recipe[4] || DEFAULT_GRIND_POWER,

      ingredients: [{
        item: recipe[0],
        count: 1
      }],
      results: [{
        item: recipe[2],
        count: recipe[1],
      }]
    });
  }
  event.remove({ type: 'create:milling', output: 'minecraft:gunpowder' });

  // Remove crushing recipes that already have a grinder recipe
  event.remove({ type: 'create:crushing', input: 'minecraft:blaze_rod' });
  event.remove({ type: 'create:crushing', input: 'minecraft:bone' });
  event.remove({ type: 'create:crushing', input: 'minecraft:lapis_lazuli' });
  event.remove({ type: 'create:crushing', input: 'minecraft:diamond' });
  event.remove({ type: 'create:crushing', input: 'minecraft:diorite' });
  event.remove({ type: 'create:crushing', input: 'minecraft:granite' });
  event.remove({ type: 'create:crushing', input: 'minecraft:andesite' });
} 

function lizardGeologyAlchemyChanges(event) {
  // Manual dripstone
	event.shapeless('minecraft:dripstone_block', [
    "minecraft:calcite",
    "minecraft:water_bucket"
	]).replaceIngredient('minecraft:water_bucket', 'minecraft:bucket')
    .id('createastral:dripstone_block_manual_only');

  // Manual Pointed Dripstone
  event.stonecutting('2x minecraft:pointed_dripstone', 'minecraft:dripstone_block');

  // More efficient pointed dripstone filling recipe
  event.recipes.createFilling('3x minecraft:pointed_dripstone', [
    'minecraft:calcite',
    {fluid: 'minecraft:water', amount: FULL_BUCKET_AMMOUNT / 2}
  ]);

  // Using the grinder on individual pointed dripstones give you the best yields
  // (1.33 for milling dripstone, ~2 per calcite for crushing dripstone, 3 per calcite if grinding pointed drip)
  event.recipes.createCrushing([
    'minecraft:clay_ball',
    Item.of('minecraft:clay_ball').withChance(.5)
  ], 'minecraft:dripstone_block');
  
  event.remove({type: 'techreborn:grinder', input: 'minecraft:pointed_dripstone'});
  event.custom({
    type: 'techreborn:grinder',
    time: 100, // 5 seconds?
    power: 5,

    ingredients: [{
      item: 'minecraft:pointed_dripstone',
      count: 1
    }],
    results: [{
      item: 'minecraft:clay_ball',
      count: 1,
    }]
  });

  // Todo: add back in coral grinder calcite dust recipe that was removed due to replacing pointed dripstone recipe

  // Pre-crushing copper and tin generation (used to be copper and zinc)
  event.recipes.createMilling([
    Item.of('minecraft:raw_copper').withChance(.3)
  ], 'create:veridium');
  event.recipes.createMilling([
    Item.of('techreborn:raw_tin').withChance(.1)
  ], 'create:asurine');

  // Diorite, Granite, and Andesite crushing
  event.recipes.createCrushing([
    'minecraft:quartz',
    'techreborn:diorite_dust',
    Item.of('techreborn:diorite_dust').withChance(.5),
    Item.of('minecraft:quartz').withChance(.25),
  ], 'minecraft:diorite');

  event.recipes.createCrushing([
    'minecraft:red_sand',
    'techreborn:granite_dust',
    Item.of('techreborn:granite_dust').withChance(.5),
    Item.of('minecraft:red_sand').withChance(.25),
  ], 'minecraft:granite');

  event.recipes.createCrushing([
    'minecraft:cobblestone',
    'techreborn:andesite_dust',
    Item.of('techreborn:andesite_dust').withChance(.5)
  ], 'minecraft:andesite');

  // Netherrack crushing rework
  event.remove({ type: 'create:crushing', input: 'minecraft:netherrack' });

  event.recipes.createCrushing([
    'techreborn:netherrack_dust',
    Item.of('techreborn:netherrack_dust').withChance(.5)
  ], 'minecraft:netherrack');
  event.recipes.createCrushing([
    'techreborn:netherrack_dust',
    Item.of('techreborn:netherrack_dust').withChance(.5),
    Item.of('minecraft:warped_fungus').withChance(.1)
  ], 'minecraft:warped_nylium');
  event.recipes.createCrushing([
    'techreborn:netherrack_dust',
    Item.of('techreborn:netherrack_dust').withChance(.5),
    Item.of('minecraft:crimson_fungus').withChance(.1)
  ], 'minecraft:crimson_nylium');

  // Cheeky :)
  event.recipes.createFilling('create:cinder_flour', [
		'techreborn:netherrack_dust',
		{ fluid: 'minecraft:water', amount: FULL_BUCKET_AMMOUNT / 4 }
	]);

  // Add Calcite recipe
  event.recipes.createCompacting('minecraft:calcite', [
    '3x minecraft:bone_meal',
    'minecraft:gravel',
    { fluid: 'minecraft:lava', amount: FULL_BUCKET_AMMOUNT / 10 }
  ]);

  // Add limestone recipe
  event.recipes.createCompacting('create:limestone', [
    '2x minecraft:pointed_dripstone',
    '2x ad_astra:moon_sand',
    '2x minecraft:flint',
    { fluid: 'minecraft:lava', amount: FULL_BUCKET_AMMOUNT/10 }
  ]);

  // Add lime
  event.recipes.createCrushing([
    'createastral:lime',
    Item.of('createastral:lime').withChance(.5),
    Item.of('minecraft:clay_ball').withChance(.2),
  ], 'create:limestone');
  
  // Wash lime for silver
  event.recipes.createSplashing([
    Item.of('techreborn:silver_nugget').withChance(.12),
    Item.of('techreborn:raw_silver').withChance(.02)
  ], 'createastral:lime');

  // Remove Create's default crushing recipes for asurine and veridium (I thought we added them??)
  event.remove({type: 'create:crushing', input: 'create:asurine'});
  event.remove({type: 'create:crushing', input: 'create:veridium'});

  // Crushing Asurine bonus gains + lazurite (for lapis lazuli) - used to give zinc
  event.recipes.createCrushing([
    'techreborn:lazurite_dust',
    Item.of('techreborn:lazurite_dust').withChance(.5),
    Item.of('techreborn:raw_tin').withChance(.2),
    Item.of('techreborn:tin_nugget').withChance(.3),
    Item.of('minecraft:clay_ball').withChance(.2)
  ], 'create:asurine');

  // Crushing Veridium bonus gains + peridot dust for ch 4+
  event.recipes.createCrushing([
    'techreborn:olivine_dust',
    Item.of('techreborn:olivine_dust').withChance(.5),
    Item.of('minecraft:raw_copper').withChance(.6),
    Item.of('create:copper_nugget').withChance(.8),
    Item.of('minecraft:clay_ball').withChance(.2)
  ], 'create:veridium');

  // Lapis recipe
  event.recipes.createCompacting('minecraft:lapis_lazuli', [
    '3x techreborn:lazurite_dust',
    '2x minecraft:gunpowder',
    '2x minecraft:iron_nugget',
    { fluid: 'minecraft:lava', amount: FULL_BUCKET_AMMOUNT / 30 }
  ]);

  // Soul sand recipe
  event.recipes.createHaunting('minecraft:soul_sand', 'minecraft:sand');

  // Replace Create's default washing recipes, encourage crushing diorite for quartz
  // event.remove({type: 'create:fan_washing', input: 'minecraft:soul_soil'});
  event.remove({type: 'create:splashing', input: 'minecraft:soul_sand'});
  event.recipes.createSplashing([
    Item.of('minecraft:gold_nugget').withChance(.12),
    Item.of('minecraft:quartz').withChance(.01),
  ], 'minecraft:soul_sand');
  event.recipes.createSplashing([
    Item.of('minecraft:gold_nugget').withChance(.12),
    Item.of('minecraft:quartz').withChance(.01),
  ], 'minecraft:soul_soil');

  
  // New granite recipe that's more sustainable than shaping diorite with quartz
  // Todo: lava press 
  event.recipes.createCompacting('minecraft:granite', [
    'minecraft:diorite',
    'minecraft:flint',
    'techreborn:netherrack_dust',
    { fluid: 'minecraft:lava', amount: FULL_BUCKET_AMMOUNT / 10 }
	]);
  
  // Nerf vanilla granite recipe
  event.remove({mod: 'minecraft', output: 'minecraft:granite'});
  event.remove({mod: 'tconstruct', output: 'minecraft:granite'})
  event.shapeless('minecraft:granite', [
    '1x minecraft:diorite',
    '3x minecraft:quartz'
  ]);
  event.custom({
    type: 'tconstruct:casting_basin',
    cast: {
      item: 'minecraft:diorite'
    },
    cast_consumed: true,
    fluid: {
      name: "tconstruct:molten_quartz",
      amount: 3 * FULL_BUCKET_AMMOUNT / 10 ,
    },
    result: "minecraft:granite",
    cooling_time: 140,
  });

  // Nerf vanilla andesite shapeless
  event.remove({mod: 'minecraft', input: 'minecraft:diorite', output: 'minecraft:andesite'});
  event.shapeless('minecraft:andesite', [
    '2x minecraft:diorite',
    '4x minecraft:gravel'
  ]);;

  // Remove vanilla red-sand so it can produce zinc instead, and the red sand haunting infinite loop
  event.remove({type: 'create:splashing', input: 'minecraft:red_sand' });
  event.remove({type: 'create:haunting', input: 'minecraft:red_sand' })

  // New red sand washing for zinc (used to be tin)
  event.recipes.createSplashing([
    Item.of('create:zinc_nugget').withChance(.33),
    Item.of('minecraft:dead_bush').withChance(.12)
  ], 'minecraft:red_sand');

  // Keep this, let people decide which path to produce diorite is
  // event.remove({type: 'create:compacting', output: 'minecraft:diorite' });
  
  // Nerf vanilla diorite
  event.remove({mod: 'minecraft', input: 'minecraft:cobblestone', output: 'minecraft:diorite'});
  event.shapeless('minecraft:diorite', ['minecraft:cobblestone', '6x minecraft:quartz']);
  // I'm too confused to replace the tconstruct recipe
  event.remove({type: 'tconstruct:casting_basin', output: 'minecraft:diorite'});

  // Not happy with this, can't think of a better way to utilize basalt though. Might come back to this.
  event.custom({
    type: 'tconstruct:casting_basin',
    cast: {
      item: 'minecraft:basalt'
    },
    cast_consumed: true,
    fluid: {
      name: "tconstruct:liquid_soul",
      amount: FULL_BUCKET_AMMOUNT,
    },
    result: "minecraft:diorite",
    cooling_time: 80,
  });

  // Deeplate flint garbage
  event.recipes.createCompacting('minecraft:cobbled_deepslate', [
    '8x minecraft:flint',
    'minecraft:gravel'
  ]);

  // Desh from moon sand
  event.recipes.createSplashing([
    Item.of('ad_astra:desh_nugget').withChance(.12),
    Item.of('ad_astra:cheese').withChance(.04)
  ], 'ad_astra:moon_sand');
}

// Increase yields in crushing ore
function lizardCrushingOresYields(event) {

  // Tech reborn ores
  event.recipes.createCrushing([
    'create:crushed_tin_ore',
    Item.of('create:crushed_tin_ore').withChance(CRUSHING_ORE_BONUS_ORE_YIELD),
    Item.of('minecraft:iron_nugget').withChance(.2),
    Item.of('create:experience_nugget').withChance(CRUSHING_ORE_BONUS_XP_CHUNKS),
  ], 'techreborn:raw_tin');
  event.recipes.createCrushing([
    'create:crushed_silver_ore',
    Item.of('create:crushed_silver_ore').withChance(CRUSHING_ORE_BONUS_ORE_YIELD),
    Item.of('create:experience_nugget').withChance(CRUSHING_ORE_BONUS_XP_CHUNKS),
  ], 'techreborn:raw_silver');
  event.recipes.createCrushing([
    'create:crushed_lead_ore',
    Item.of('create:crushed_lead_ore').withChance(CRUSHING_ORE_BONUS_ORE_YIELD),
    Item.of('minecraft:coal').withChance(0.2),
    Item.of('create:experience_nugget').withChance(CRUSHING_ORE_BONUS_XP_CHUNKS),
  ], 'techreborn:raw_lead');

  const VANILLA_ORES_AND_ZINC = ['iron', 'gold', 'copper', 'zinc']; 
  for (let ore of VANILLA_ORES_AND_ZINC) {
    let raw_ore = ore != 'zinc'? 'minecraft:raw_' + ore: 'create:raw_zinc';
    let crushed_ore = 'create:crushed_' + ore + '_ore';
    event.remove({type: 'create:crushing', output: crushed_ore});
    event.recipes.createCrushing([
      crushed_ore,
      Item.of(crushed_ore).withChance(CRUSHING_ORE_BONUS_ORE_YIELD),
      Item.of('create:experience_nugget').withChance(CRUSHING_ORE_BONUS_XP_CHUNKS),
    ], raw_ore);
  } 

  // Gate the regular andesite Create recipe behind blaze burners
  event.remove({mod:'create', output: 'minecraft:andesite'});
  event.recipes.createCompacting('minecraft:andesite', [
    '2x minecraft:flint',
    'minecraft:gravel',
    { fluid: 'minecraft:lava', amount: FULL_BUCKET_AMMOUNT / 10 }
  ]).heated();
}

// Some changes need to be made after all of Lasky's changes, lest their changes will override mine.
function lizardPostLaskyChange(event) {
  // The first number is a number I found looking through the configs. The second number is
  //  the yield for every other entity smelting - "50mb"
  const BLAZING_BLOOD_MADIC_AMOUNT = 1620;
  // const BLAZING_BLOOD_MADIC_AMOUNT = 4050;
  event.custom({
    type: 'tconstruct:entity_melting',
    entity: {
      type: 'minecraft:blaze'
    },
    result: {
      fluid: "tconstruct:blazing_blood",
      amount: BLAZING_BLOOD_MADIC_AMOUNT,
    },
    damage: 2
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



onEvent('recipes', event => {
	
  // Lizard's changes
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
	event.remove({mod: 'immersive_aircraft'})
	
	



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
	// event.replaceInput('tconstruct:scorched_brick', 'tconstruct:scorched_bricks') // ???
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
  // event.remove({output: 'tconstruct:scorched_bricks'}) // ???
	event.remove({type: 'create:mixing', output: 'create:brass_ingot'})
	event.remove({type: 'create:mixing', output: 'tconstruct:rose_gold_ingot'})
	event.remove({type: 'create:mixing', output: 'tconstruct:slimesteel_ingot'})
	event.remove({type: 'create:mixing', output: 'tconstruct:pig_iron_ingot'})
	event.remove({type: 'create:mixing', output: 'tconstruct:manyullyn_ingot'})
	event.remove({type: 'create:mixing', output: 'tconstruct:hepatizon_ingot'})
	event.remove({type: 'create:mixing', output: 'tconstruct:queens_slime_ingot'})
	event.remove({output: 'create:blaze_cake'})
  // event.remove({output: 'tconstruct:blazing_blood'})
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
  event.replaceInput({output: 'create:deployer'}, 'create:electron_tube', 'create:polished_rose_quartz')
  event.replaceInput({mod: 'chipped'}, 'minecraft:wooden_axe', 'minecraft:flint')
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
  event.remove({output: 'techreborn:rubber', type: 'minecraft:smelting'})
  event.remove({output: 'techreborn:basic_machine_frame'})
  event.remove({output: 'techreborn:advanced_machine_frame'})
  event.remove({output: 'techreborn:industrial_machine_frame'})
  event.remove({output: 'techreborn:advanced_machine_casing'})
  event.remove({output: 'techreborn:industrial_machine_casing'})
  event.remove({output: 'techreborn:refined_iron_ingot'})
  event.remove({output: 'techreborn:fusion_coil'})
  event.remove({output: 'techreborn:carbon_mesh'})
  event.remove({output: 'techreborn:scrap_box'})
  event.remove({type: 'minecraft:shaped', output: 'techreborn:nak_coolant_cell_60k'})


///REPLACE MAJOR CMOPONENTS TO MATCH ASTRAL PROGRESSION

  event.replaceInput({mod: 'techreborn'}, 'techreborn:refined_iron_plate', 'techreborn:silver_plate')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:refined_iron_ingot', 'techreborn:silver_plate')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:refined_iron_storage_block', 'techreborn:silver_storage_block')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:refined_iron_nugget', 'techreborn:silver_nugget')
  event.remove({output: 'techreborn:refined_iron_plate'})
  event.remove({output: 'techreborn:refined_iron_ingot'})
  event.remove({output: 'techreborn:refined_iron_storage_block'})
  event.remove({output: 'techreborn:refined_iron_storage_block_stairs'})
  event.remove({output: 'techreborn:refined_iron_storage_block_slab'})
  event.remove({output: 'techreborn:refined_iron_storage_block_wall'})
  event.remove({output: 'techreborn:refined_iron_dust'})
  event.remove({output: 'techreborn:refined_iron_small_dust'})
  event.remove({output: 'techreborn:refined_iron_nugget'})




  event.replaceInput({mod: 'techreborn'}, 'techreborn:aluminum_plate', 'techreborn:lead_plate')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:aluminum_ingot', 'techreborn:lead_plate')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:aluminum_storage_block', 'techreborn:lead_storage_block')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:aluminum_nugget', 'techreborn:lead_nugget')
  event.remove({output: 'techreborn:aluminum_plate'})
  event.remove({output: 'techreborn:aluminum_ingot'})
  event.remove({output: 'techreborn:aluminum_storage_block'})
  event.remove({output: 'techreborn:aluminum_storage_block_stairs'})
  event.remove({output: 'techreborn:aluminum_storage_block_slab'})
  event.remove({output: 'techreborn:aluminum_storage_block_wall'})
  event.remove({output: 'techreborn:aluminum_dust'})
  event.remove({output: 'techreborn:aluminum_small_dust'})
  event.remove({output: 'techreborn:aluminum_nugget'})



  event.replaceInput({mod: 'techreborn'}, 'techreborn:tungsten_plate', 'ad_astra:compressed_steel')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:tungsten_ingot', 'ad_astra:compressed_steel')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:tungsten_storage_block', 'ad_astra:steel_block')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:tungsten_nugget', 'ad_astra:steel_nugget')
  event.remove({output: 'techreborn:tungsten_plate'})
  event.remove({output: 'techreborn:tungsten_ingot'})
  event.remove({output: 'techreborn:tungsten_storage_block'})
  event.remove({output: 'techreborn:tungsten_storage_block_stairs'})
  event.remove({output: 'techreborn:tungsten_storage_block_slab'})
  event.remove({output: 'techreborn:tungsten_storage_block_wall'})
  event.remove({output: 'techreborn:tungsten_dust'})
  event.remove({output: 'techreborn:tungsten_small_dust'})
  event.remove({output: 'techreborn:tungsten_nugget'})

  event.replaceInput({mod: 'techreborn'}, 'techreborn:tungstensteel_plate', 'ad_astra:compressed_steel')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:tungstensteel_ingot', 'ad_astra:compressed_steel')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:tungstensteel_storage_block', 'ad_astra:steel_block')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:tungstensteel_nugget', 'ad_astra:steel_nugget')
  event.remove({output: 'techreborn:tungstensteel_plate'})
  event.remove({output: 'techreborn:tungstensteel_ingot'})
  event.remove({output: 'techreborn:tungstensteel_storage_block'})
  event.remove({output: 'techreborn:tungstensteel_storage_block_stairs'})
  event.remove({output: 'techreborn:tungstensteel_storage_block_slab'})
  event.remove({output: 'techreborn:tungstensteel_storage_block_wall'})
  event.remove({output: 'techreborn:tungstensteel_dust'})
  event.remove({output: 'techreborn:tungstensteel_small_dust'})
  event.remove({output: 'techreborn:tungstensteel_nugget'})

  event.replaceInput({mod: 'techreborn'}, 'techreborn:chrome_plate', 'ad_astra:compressed_ostrum')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:chrome_ingot', 'ad_astra:compressed_ostrum')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:chrome_storage_block', 'ad_astra:ostrum_block')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:chrome_nugget', 'ad_astra:ostrum_nugget')
  event.remove({output: 'techreborn:chrome_plate'})
  event.remove({output: 'techreborn:chrome_ingot'})
  event.remove({output: 'techreborn:chrome_storage_block'})
  event.remove({output: 'techreborn:chrome_storage_block_stairs'})
  event.remove({output: 'techreborn:chrome_storage_block_slab'})
  event.remove({output: 'techreborn:chrome_storage_block_wall'})
  event.remove({output: 'techreborn:chrome_dust'})
  event.remove({output: 'techreborn:chrome_small_dust'})
  event.remove({output: 'techreborn:chrome_nugget'})

  event.replaceInput({mod: 'techreborn'}, 'techreborn:titanium_plate', 'ad_astra:compressed_calorite')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:titanium_ingot', 'ad_astra:compressed_calorite')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:titanium_storage_block', 'ad_astra:calorite_block')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:titanium_nugget', 'ad_astra:calorite_nugget')
  event.remove({output: 'techreborn:titanium_plate'})
  event.remove({output: 'techreborn:titanium_ingot'})
  event.remove({output: 'techreborn:titanium_storage_block'})
  event.remove({output: 'techreborn:titanium_storage_block_stairs'})
  event.remove({output: 'techreborn:titanium_storage_block_slab'})
  event.remove({output: 'techreborn:titanium_storage_block_wall'})
  event.remove({output: 'techreborn:titanium_dust'})
  event.remove({output: 'techreborn:titanium_small_dust'})
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
  event.remove({output: 'techreborn:brass_storage_block_stairs'})
  event.remove({output: 'techreborn:brass_storage_block_slab'})
  event.remove({output: 'techreborn:brass_storage_block_wall'})
  event.remove({output: 'techreborn:brass_dust'})
  event.remove({output: 'techreborn:brass_small_dust'})
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
  event.remove({output: 'techreborn:zinc_storage_block_stairs'})
  event.remove({output: 'techreborn:zinc_storage_block_slab'})
  event.remove({output: 'techreborn:zinc_storage_block_wall'})
  event.remove({output: 'techreborn:zinc_dust'})
  event.remove({output: 'techreborn:zinc_small_dust'})
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
  event.replaceInput({mod: 'techreborn'}, 'techreborn:magnalium_plate', 'techreborn:silver_plate')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:peridot_plate', 'createastral:olivine_sheet')
  event.remove({output: 'techreborn:data_storage_core'})
  event.replaceInput({mod: 'ae2'}, 'minecraft:copper_ingot', 'techreborn:silver_plate')
  event.replaceInput({mod: 'ae2'}, 'minecraft:redstone', 'ae2:fluix_dust')
  event.replaceInput({mod: 'ae2'}, 'ae2:fluix_crystal', 'ae2:fluix_dust')
  event.replaceInput('techreborn:advanced_circuit', 'techreborn:electronic_circuit')
  event.replaceInput({output: 'gearreborn:hazmat_chestpiece'}, 'techreborn:electronic_circuit', 'create:integrated_circuit')
  event.replaceInput({output: 'gearreborn:hazmat_chestpiece'}, 'techreborn:reinforced_glass', '#c:glass')
  event.replaceInput({output: 'techreborn:industrial_sawmill'}, 'techreborn:silver_plate', 'techreborn:lead_plate')
  event.replaceOutput('techreborn:electronic_circuit', 'create:integrated_circuit')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:cupronickel_heating_coil', 'createastral:copper_heating_coil')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:nichrome_heating_coil', 'createastral:ender_heating_coil')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:energy_crystal', 'create:precision')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:lapotron_crystal', 'create:precision_mechanism')
  event.replaceInput({mod: 'techreborn'}, 'techreborn:advanced_alloy_plate', 'techreborn:lead_plate')
  event.replaceInput({mod: 'techreborn', output: 'techreborn:advanced_drill'}, 'ad_astra:compressed_calorite', 'techreborn:lead_plate')
  event.replaceInput({mod: 'techreborn', output: 'techreborn:advanced_chainsaw'}, 'ad_astra:compressed_calorite', 'techreborn:lead_plate')
  event.replaceInput({mod: 'techreborn', output: 'techreborn:advanced_jackhammer'}, 'ad_astra:compressed_calorite', 'techreborn:lead_plate')
  event.remove({output: 'techreborn:data_storage_chip'})
  event.remove({output: 'techreborn:player_detector'})
  event.remove({output: 'techreborn:quantum_helmet'})
  event.remove({output: 'techreborn:quantum_chestplate'})
  event.remove({output: 'techreborn:quantum_leggings'})
  event.remove({output: 'techreborn:quantum_boots'})
  event.replaceInput('techreborn:energy_flow_chip', 'techreborn:data_storage_chip')
  event.replaceInput({output: 'techreborn:nanosaber'}, 'create:precision_mechanism', 'create:refined_radiance')
  event.replaceInput({output: 'techreborn:industrial_grinder'}, 'techreborn:electronic_circuit', 'immersive_aircraft:engine')
  event.replaceInput({output: 'techreborn:digital_display'}, 'minecraft:black_dye', 'techreborn:machine_parts')
  event.replaceInput({output: 'techreborn:digital_display'}, 'minecraft:glass_pane', '#computercraft:monitor')
  event.replaceInput({output: 'techreborn:basic_display'}, 'minecraft:glass_pane', '#computercraft:monitor')
  event.replaceInput('techreborn:lapotronic_orb', 'immersive_aircraft:engine')
  event.replaceInput({mod: 'quarrymod'}, 'techreborn:iridium_ingot', 'passivepiglins:piglin_coin')
  event.replaceInput({mod: 'quarrymod'}, 'techreborn:advanced_alloy_plate', 'passivepiglins:piglin_coin')
  event.replaceInput({mod: 'quarrymod'}, 'techreborn:peridot_plate', 'ad_astra:compressed_steel')
  event.replaceInput({mod: 'quarrymod'}, 'techreborn:silicon_plate', 'techreborn:carbon_mesh')
  event.replaceInput({mod: 'quarrymod'}, 'techreborn:lapis_plate', 'create:lapis_sheet')
  event.replaceInput({mod: 'quarrymod'}, 'techreborn:peridot_storage_block', 'createastral:olivine_plate')
  event.replaceInput({mod: 'quarrymod'}, 'techreborn:titanium_plate', 'ad_astra:compressed_steel')
  event.replaceInput({mod: 'quarrymod'}, 'techreborn:tungstensteel_plate', 'create:shadow_steel')

  	event.recipes.createMechanicalCrafting('techreborn:data_storage_chip', [
  'A',
  'C',
  'B'
], {
  A: 'createastral:olivine_sheet',
  B: 'techreborn:iridium_alloy_plate',
  C: 'techreborn:industrial_circuit',

  
})


event.recipes.createMechanicalCrafting('immersive_aircraft:boiler', [
  'AB',
  'CB',
  'CB'
], {
  A: 'techreborn:machine_parts',
  B: 'create:copper_sheet',
  C: 'techreborn:rubber',

  
})

event.remove({output: 'minecraft:elytra'})
event.recipes.createMechanicalCrafting('minecraft:elytra', [
  '  A  ',
  ' B B ',
  ' C C ',
  'C   C',
  'DE ED',
  'F G F'
], {
  A: 'createastral:navigation_mechanism',
  B: 'create:brass_sheet',
  C: 'minecraft:phantom_membrane',
  D: 'create:large_cogwheel',
  E: 'ad_astra:compressed_ostrum',
  F: 'ad_astra:ostrum_engine',
  G: 'computercraft:computer_advanced',

  
})



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
    "type":"createaddition:rolling",
    "input": {
          "item": "ad_astra:calorite_nugget"
    },
    "result": {
      "item": "createastral:calorite_pin",
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
    "cast_consumed": false,
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
    "cast_consumed": false,
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

event.recipes.createMixing('4x techreborn:machine_parts', [
  'ad_astra:compressed_steel',
  'techreborn:carbon_mesh',
  '8x #c:wires'
]).superheated().processingTime(400)

event.recipes.createMixing('1x techreborn:carbon_mesh', [
  '2x techreborn:carbon_fiber',
]).superheated().processingTime(400)

event.recipes.createMixing('techreborn:nuke', [
  'techreborn:industrial_machine_frame',
  {fluid: 'kubejs:plasma_fluid', amount: 81000},
  '3x createastral:subatomic_ingot',
  'create:linked_controller'
]).superheated().processingTime(500)

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

event.recipes.createSequencedAssembly([ // begin
'immersive_aircraft:engine', // output
], 'create:precision_mechanism', [ // input
event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'immersive_aircraft:boiler']), 
event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'techreborn:nak_coolant_cell_60k']),
event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'createaddition:capacitor']),  
]).transitionalItem('create:incomplete_precision_mechanism').loops(1) 

	event.recipes.createMechanicalCrafting('techreborn:fusion_control_computer', [
  'DBCBD',
  'BDCDB',
  'CCECC',
  'BDADB',
  'DABAD'
], {
  A: 'techreborn:industrial_circuit',
  B: 'techreborn:advanced_machine_casing',
  C: 'techreborn:fusion_coil',
  D: 'createaddition:tesla_coil',
  E: 'techreborn:digital_display'
  
  
 
		/// /DOODADS MOD RECIPE CHANGES
})




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

event.recipes.createMixing(Fluid.of('tconstruct:molten_steel', 8100), [
'techreborn:steel_dust'
]).superheated()

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
		'minecraft:gold_ingot'
]).heated().processingTime(300)
	event.recipes.createMixing(Fluid.of('tconstruct:molten_pig_iron', 9000), [
    'minecraft:porkchop',
    {fluid: 'tconstruct:molten_iron', amount: 9000},
	{fluid: 'tconstruct:molten_gold', amount: 9000}
]).heated().processingTime(250)
	//Tinker's Construct Reworking (New fluids and recipes)
	//Tier 4 materials

//  	event.recipes.createMixing('3x tconstruct:nether_grout', [
//    'minecraft:magma_cream',
//    'minecraft:soul_sand',
//    'minecraft:gravel',
//    'create:powdered_obsidian',
//    'create:powdered_obsidian',
//    'create:powdered_obsidian'

//  ]).heated().processingTime(700)
 
	event.recipes.createMixing(Fluid.of('tconstruct:molten_queens_slime', 810), [
    {fluid: 'tconstruct:molten_cobalt', amount: 405},
	{fluid: 'tconstruct:molten_slimesteel', amount: 810},
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
  // A: minecraft:redstone_block,
  A: 'createaddition:capacitor',
  B: 'ad_astra:desh_block',
  C: 'ad_astra:compressed_desh',
  D: 'createastral:navigation_mechanism',
  // F: 'create:integrated_circuit',
  F: 'create:display_board',
  E: 'create:mechanical_arm'
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


	event.shaped('ad_astra:oxygen_loader', [
  'BAB',
  'DED',
  'BCB'
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
  
  
    // event.recipes.createMechanicalCrafting('ad_astra:launch_pad', [
    //   'CCCCCC',
    //   'CABABC',
    //   'CBABAC',
    //   'CABABC',
    //   'CBABAC',
    //   'CCCCCC',
      
    // ], {
    //   A: 'techreborn:silver_plate',
    //   B: 'ad_astra:iron_plate',
    //   C: 'create:sturdy_sheet'
  
    // })
  
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


event.recipes.createPressing('techreborn:silver_plate', 'techreborn:silver_ingot')
event.recipes.createPressing('techreborn:tin_plate', 'techreborn:tin_ingot')
event.recipes.createPressing('techreborn:lead_plate', 'techreborn:lead_ingot')
event.recipes.createPressing('techreborn:electrum_plate', 'techreborn:electrum_ingot')
event.recipes.createPressing('create:lapis_sheet', 'minecraft:lapis_block')
event.recipes.createCompacting('createastral:olivine_sheet', [
  '16x techreborn:olivine_dust',
]).superheated().processingTime(1500)






	
	
	
	
	
	
	
	
	
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
  {fluid: 'minecraft:lava', amount: 8100},
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
  event.recipes.createDeploying('create:lapis_sheet', ['create:lapis_sheet', 'createaddition:copper_wire']), //fill bronze
  event.recipes.createDeploying('create:lapis_sheet', ['create:lapis_sheet', 'createaddition:copper_wire']), //fill bronze
  event.recipes.createPressing('create:lapis_sheet', 'create:lapis_sheet'),
]).transitionalItem('create:lapis_sheet').loops(6)


event.recipes.createSequencedAssembly([ 
  'techreborn:industrial_circuit',
  ], 'techreborn:electronic_circuit', [ 
  event.recipes.createFilling('techreborn:electronic_circuit', ['techreborn:electronic_circuit', {fluid: 'techreborn:lithium', amount: 2500}]), //fill bronze
  event.recipes.createPressing('techreborn:electronic_circuit', 'techreborn:electronic_circuit'),
  event.recipes.createDeploying('techreborn:electronic_circuit', ['techreborn:electronic_circuit', 'techreborn:machine_parts']),
  event.recipes.createDeploying('techreborn:electronic_circuit', ['techreborn:electronic_circuit', 'createastral:calorite_pin']), //fill bronze
  ]).transitionalItem('techreborn:electronic_circuit').loops(9)
	 
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
  event.smithing('farmersdelight:cooking_pot', 'farmersdelight:skillet', 'minecraft:water_bucket')


  ///// ORE PROCESSING PATCHES /////





  event.recipes.createCrushing([
    Item.of('minecraft:quartz').withChance(0.05),
  ], 'ad_astra:moon_sand')

  event.recipes.createCrushing([
    'ad_astra:moon_sand'
  ], 'ad_astra:moon_stone')

  // event.recipes.createSplashing([
  //   Item.of('techreborn:silver_nugget').withChance(0.25),
  // ], 'ad_astra:moon_sand')

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
  'techreborn:copper_cable'
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

// WHY THIS LINE
event.custom(
  {"type":"create:sequenced_assembly","ingredient":{"tag":"c:plates/gold"},"transitionalItem":{"item":"create:incomplete_precision_mechanism"},"sequence":[{"type":"create:deploying","ingredients":[{"item":"create:incomplete_precision_mechanism"},{"item":"create:cogwheel"}],"results":[{"item":"create:incomplete_precision_mechanism"}]},{"type":"create:deploying","ingredients":[{"item":"create:incomplete_precision_mechanism"},{"item":"create:large_cogwheel"}],"results":[{"item":"create:incomplete_precision_mechanism"}]},{"type":"create:deploying","ingredients":[{"item":"create:incomplete_precision_mechanism"},{"tag":"c:nuggets/iron"}],"results":[{"item":"create:incomplete_precision_mechanism"}]}],"results":[{"item":"create:precision_mechanism","chance":120.0},{"item":"create:golden_sheet","chance":8.0},{"item":"create:andesite_alloy","chance":8.0},{"item":"create:cogwheel","chance":5.0},{"item":"minecraft:gold_nugget","chance":3.0},{"item":"create:shaft","chance":2.0},{"item":"create:crushed_gold_ore","chance":2.0},{"item":"minecraft:iron_ingot"},{"item":"minecraft:clock"}],"loops":5})

event.custom({"type":"create:item_application","ingredients":[{"item":"techreborn:basic_machine_casing"},{"item":"ad_astra:compressed_steel"}],"results":[{"item":"techreborn:advanced_machine_casing"}]})
event.custom({"type":"create:item_application","ingredients":[{"item":"techreborn:advanced_machine_frame"},{"item":"techreborn:machine_parts"}],"results":[{"item":"techreborn:industrial_machine_frame"}]})
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
  "time": 500,
  "ingredients": [
	{
	  "count": 1,
	  "item": "techreborn:steel_dust"
	},
    {
      "item": "minecraft:tnt",
      "count": 1
    }
  ],
  "results": [
    {
      "item": "ad_astra:steel_ingot",
      "count": 1
    },
    {
      "item": "techreborn:steel_nugget",
      "count": 2
    }
  ]
})

event.recipes.createMixing('techreborn:steel_dust', [
  '6x minecraft:iron_ingot',
'4x techreborn:coal_dust'
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

// event.recipes.createMixing(Fluid.of('kubejs:shimmer', 40500), [
//   '5x minecraft:amethyst_shard',
// '2x minecraft:glow_ink_sac'
// ]).heated().processingTime(400)

// Make shimmer possible pre-moon
event.recipes.createMixing(Fluid.of('kubejs:shimmer', 40500), [
  '5x minecraft:amethyst_shard',
  '2x minecraft:glow_ink_sac'
]).processingTime(400);

event.recipes.createMixing('minecraft:glow_ink_sac', [
  'minecraft:ink_sac',
  '2x minecraft:glowstone_dust'
]).processingTime(50);



///// Passive Piglins snout banner recipe!!!! wowie!!!! /////

event.recipes.createMixing('minecraft:piglin_banner_pattern', [
	'1x minecraft:paper',
	Item.of('tconstruct:large_plate', '{Material:"tconstruct:pig_iron"}')
]).processingTime(100)


event.remove({output: 'passivepiglins:piglin_coin'});
event.shaped('passivepiglins:piglin_coin', [
  'BA',
  'AB'
], {
A: 'create:golden_sheet',
B: 'minecraft:piglin_banner_pattern'
})

event.recipes.createSequencedAssembly([ // begin
	'passivepiglins:piglin_coin', // output
	], Item.of('create:golden_sheet'), [ // input
		event.recipes.createCutting('create:golden_sheet', 'create:golden_sheet').processingTime(30), 
		event.recipes.createDeploying('create:golden_sheet', ['minecraft:gold_nugget', 'minecraft:gold_nugget']), 
		event.recipes.createDeploying('create:golden_sheet', ['minecraft:piglin_banner_pattern', 'minecraft:piglin_banner_pattern']), 
    event.recipes.createPressing('create:golden_sheet', 'create:golden_sheet').processingTime(75),
]).transitionalItem('createastral:coin').loops(1)

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

// Broke impossible progression by removing heating requirement from astral
//  conduit
event.recipes.createMixing('createastral:astral_conduit', [
  {fluid: 'kubejs:shimmer', amount: 81000},
  'minecraft:diamond_block',
  'phonos:redstone_chip',
  'minecraft:flint_and_steel'
]).processingTime(30)

  lizardPostLaskyChange(event);
})


onEvent('player.logged_in', event => {

  if (!event.player.stages.has('starting_items')) {

    event.player.stages.add('starting_items')

    event.player.give('ftbquests:book')
  }
})
