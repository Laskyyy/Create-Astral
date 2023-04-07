// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')




function lizardBurnModificationChanges(event) {
  var ONE_ITEM_BURN_TICKS = 200;
  
  event.modify('createaddition:biomass_pellet', item => {
    item.burnTime = ONE_ITEM_BURN_TICKS * 16;
  });
}

function lizardTooltipChanges(event) {
  // TODO: how can we remove biomass pellet's current toolip?
  
  event.addAdvanced('createaddition:biomass_pellet', (item, advanced, text) => {
    if (!event.shift) {
      // text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').gray(), Text.of('] for Summary').darkGray()])
    } else {
      // text.add(1, [Text.of('Hold [').darkGray(), Text.of('Shift').white(), Text.of('] for Summary').darkGray()])
      // text.add(1, [Text.of('').white()]);
      // text.add(3, [Text.of('A ').darkGreen(), Text.of('solid fuel').green(), Text.of(' which can smelt ').darkGray(),
      //  Text.of('16 items').green(), Text.of(' in a ').darkGreen(), Text.of('Furnace').green()]);
      // text.add(1, Text.white('Can smelt '), Text.green('16 '), Text.white('item.'));
      // text.add(2, Text.green('16 '));
      // text.add(3, [Text.white('Iron, '), Text.aqua('Diamonds, '), Text.gold('Gold '), Text.white('or even '), Text.green('Emeralds '), Text.white('are valid base blocks!')])
      text.add(1, [Text.of('').white()]);
      text.add(2, [Text.of('(It actually smelts ').darkGreen(), Text.of('16 items').green(), Text.of(', ignore what it says above)').darkGreen()]);
    }
  });
}


///// REGISTERING CUSTOM FLUIDS ////





onEvent('fluid.registry', event => {
	event.create('molten_calorite')
    .thickTexture(0xc41a39)
    .bucketColor(0xc41a39)
    .displayName('Calorite')
	.stillTexture('tconstruct:block/fluid/molten/still')
	.flowingTexture('tconstruct:block/fluid/molten/flowing')
	
	event.create('molten_ostrum')
    .thickTexture(0x73515E)
    .bucketColor(0x73515E)
    .displayName('Ostrum')
	.stillTexture('tconstruct:block/fluid/molten/still')
	.flowingTexture('tconstruct:block/fluid/molten/flowing')
	
	event.create('molten_desh')
    .thickTexture(0xec8742)
    .bucketColor(0xec8742)
    .displayName('Desh')
	.stillTexture('tconstruct:block/fluid/molten/still')
	.flowingTexture('tconstruct:block/fluid/molten/flowing')

  event.create('plasma_fluid')
    .thickTexture(0x4cfbff)
    .bucketColor(0x4cfbff)
    .displayName('Quark-Gluon Plasma Fluid')
	.stillTexture('tconstruct:block/fluid/molten/still')
	.flowingTexture('tconstruct:block/fluid/molten/flowing')

  event.create('hellfire')
  .thickTexture(0xFFA500)
  .bucketColor(0xFFA500)
  .displayName('Hellfire')
.stillTexture('tconstruct:block/fluid/molten/still')
.flowingTexture('tconstruct:block/fluid/molten/flowing')

  event.create('compound_mixture')
    .thickTexture(0x66786f)
    .bucketColor(0x66786f)
    .displayName('Compound Mixture')
	.stillTexture('tconstruct:block/fluid/molten/still')
	.flowingTexture('tconstruct:block/fluid/molten/flowing')

  event.create('shimmer')
    .thickTexture(0xffd6fa)
    .bucketColor(0xffd6fa)
    .displayName('Shimmer')
	.stillTexture('tconstruct:block/fluid/molten/shimmer')
	.flowingTexture('tconstruct:block/fluid/molten/shimmer')

  event.create('blast-resistant_cement')
    .thickTexture(0x959595)
    .bucketColor(0x959595)
    .displayName('Blast-Resistant Cement')
  .stillTexture('tconstruct:block/fluid/molten/still')
	.flowingTexture('tconstruct:block/fluid/molten/flowing')
})

///// MODIFY CHARACTERISTICS OF ITEMS /////
onEvent('item.modification', event => {
  event.modify('minecraft:piglin_banner_pattern', item => {
    item.maxStackSize = 16
  })
})

///// MODIFY CHARACTERISTICS OF BLOCKS /////

onEvent('block.modification', event => {
  event.modify('yigd:grave', block => {
    block.destroySpeed = -1
  })
	event.modify('create:large_cogwheel', block => {
	block.material = "Lantern"

  })
  event.modify('create:cogwheel', block => {
	block.material = "Lantern"

  })
  event.modify('minecraft:furnace', block => {
	block.material = "Lantern"

  })
  event.modify('minecraft:smoker', block => {
	block.material = "Lantern"

  })
  event.modify('minecraft:blast_furnace', block => {
	block.material = "Lantern"

  })
  event.modify('probablychests:normal_pot', block => {
     block.destroySpeed = 1
    block.hasCollision = true
  })
  event.modify('probablychests:nether_pot', block => {
     block.destroySpeed = 1
    block.hasCollision = true
  })
  event.modify('probablychests:lush_pot', block => {
     block.destroySpeed = 1
    block.hasCollision = true
  })
  event.modify('probablychests:rocky_pot', block => {
    block.destroySpeed = 1
    block.hasCollision = true
  })
  event.modify('minecraft:diamond_ore', block => {
    block.destroySpeed = 6
    block.hasCollision = true
	block.explosionResistance = 99999
  })
  event.modify('minecraft:deepslate_diamond_ore', block => {
    block.destroySpeed = 7
    block.hasCollision = true
	block.explosionResistance = 99999
  })
  event.modify('techreborn:tungsten_ore', block => {
    block.destroySpeed = 6
    block.hasCollision = true
	block.explosionResistance = 99999
  })
  event.modify('techreborn:deepslate_tungsten_ore', block => {
    block.destroySpeed = 7
    block.hasCollision = true
	block.explosionResistance = 99999
  })
  event.modify('techreborn:silver_ore', block => {
    block.destroySpeed = 6
    block.hasCollision = true
	block.explosionResistance = 99999
  })
  event.modify('techreborn:deepslate_silver_ore', block => {
    block.destroySpeed = 7
    block.hasCollision = true
	block.explosionResistance = 99999
  })
  event.modify('techreborn:lead_ore', block => {
    block.destroySpeed = 6
    block.hasCollision = true
	block.explosionResistance = 99999
  })
  event.modify('techreborn:deepslate_lead_ore', block => {
    block.destroySpeed = 7
    block.hasCollision = true
	block.explosionResistance = 99999
  })
})


///// REGISTER CUSTOM BLOCKS /////



onEvent('block.registry', event => {
  event.create('createastral:sturdy_sheet_block')
  	   .material('lantern')
       .hardness(9)
       .displayName('Sturdy Sheet Block')
       .tagBlock('minecraft:mineable/pickaxe') 

       event.create('createastral:shimmering_stone')
  	   .material('stone')
       .hardness(20)
       .displayName('Shimmering Stone')
       .tagBlock('minecraft:mineable/pickaxe') 
	   
	   event.create('createastral:copper_plating')
  	   .material('lantern')
       .hardness(3)
       .displayName('Copper Plating') 
       .tagBlock('minecraft:mineable/pickaxe')
	   
	   event.create('createastral:refined_radiance_block')
  	   .material('lantern')
       .hardness(4)
       .displayName('Radiant Block')
       .tagBlock('minecraft:mineable/pickaxe') 
	   .lightLevel(1)
	
		event.create('createastral:bronze_block')
  	   .material('lantern')
       .hardness(3)
       .displayName('Bronze Block')
       .tagBlock('minecraft:mineable/pickaxe') 

    event.create('createastral:copper_heating_coil')
  	   .material('lantern')
       .hardness(3)
       .displayName('Copper Coil Block')
       .tagBlock('minecraft:mineable/pickaxe') 


    event.create('createastral:blast-resistant_concrete_slab', 'slab').hardness(4).resistance(1200).tagBlock('minecraft:mineable/pickaxe').textureAll('createastral:block/blast_side').texture('up','createastral:block/blast_top').texture('down','createastral:block/blast_top').material('stone')
    event.create('createastral:blast-resistant_concrete', 'basic').hardness(4).resistance(1200).tagBlock('minecraft:mineable/pickaxe').textureAll('createastral:block/blast_side').texture('up','createastral:block/blast_top').texture('down','createastral:block/blast_top').material('stone')
    event.create('createastral:blast-resistant_concrete_stairs', 'stairs').resistance(1200).hardness(4).tagBlock('minecraft:mineable/pickaxe').textureAll('createastral:block/blast_side').texture('up','createastral:block/blast_top').texture('down','createastral:block/blast_top').material('stone')
    event.create('createastral:electrolyser_dummy', 'basic').hardness(4).resistance(1200).tagBlock('minecraft:mineable/pickaxe').textureAll('create:block/copper_casing').texture('down','createastral:block/electropipe').texture('north','createastral:block/electropipe')
    event.create('createastral:andesite_alloy_block', 'basic').hardness(4).tagBlock('minecraft:mineable/pickaxe').material('stone')
 })





 ///// ADD BURN TIME TO FUEL /////




onEvent("item.modification", event => {

	
	event.modify('create:blaze_cake', item => {
    item.burnTime = 50000
  })


  event.modify('ad_astra:fuel_bucket', item => {
    item.burnTime = 50000
  })

  event.modify('ad_astra:oil_bucket', item => {
    item.burnTime = 40000
  })

  event.modify('ad_astra:oil', item => {
    item.burnTime = 40000
  })

})		





///// CUSTOM TOOL TIERS /////

onEvent('item.registry.tool_tiers', event => {

  event.add('copper', tier => {
    tier.uses = 210
    tier.speed = 5.0
    tier.attackDamageBonus = 1.0
    tier.level = 2
    tier.enchantmentValue = 14
  })
  event.add('brass', tier => {
    tier.uses = 550
    tier.speed = 8.0
    tier.attackDamageBonus = 3.0
    tier.level = 4
    tier.enchantmentValue = 45
  })
  event.add('radiant', tier => {
    tier.uses = 3000
    tier.speed = 15.0
    tier.attackDamageBonus = 10.0
    tier.level = 4
    tier.enchantmentValue = 99
  })
  
})





///// CUSTOM ARMOUR TIERS /////





onEvent('item.registry.armor_tiers', event => {
  // Slot indicies are [FEET, LEGS, BODY, HEAD]
  event.add('copperarmor', tier => {
    tier.durabilityMultiplier = 13 // Each slot will be multiplied with [13, 15, 16, 11]
    tier.slotProtections = [2, 4, 4, 2]
    tier.enchantmentValue = 9
    tier.equipSound = 'minecraft:item.armor.equip_iron'
    tier.repairIngredient = '#forge:ingots/copper'
    tier.toughness = 0.0 // diamond has 2.0, netherite 3.0
    tier.knockbackResistance = 0.0
  })
  event.add('brassarmor', tier => {
    tier.durabilityMultiplier = 25 // Each slot will be multiplied with [13, 15, 16, 11]
    tier.slotProtections = [3, 6, 6, 3]
    tier.enchantmentValue = 45
    tier.equipSound = 'minecraft:item.armor.equip_iron'
    tier.repairIngredient = '#forge:ingots/brass'
    tier.toughness = 0.0 // diamond has 2.0, netherite 3.0
    tier.knockbackResistance = 0.0
  })
  event.add('steelarmor', tier => {
    tier.durabilityMultiplier = 60 // Each slot will be multiplied with [13, 15, 16, 11]
    tier.slotProtections = [3, 6, 8, 4]
    tier.enchantmentValue = 20
    tier.equipSound = 'minecraft:item.armor.equip_iron'
    tier.repairIngredient = '#c:steel_ingots'
    tier.toughness = 2.0 // diamond has 2.0, netherite 3.0
    tier.knockbackResistance = 0.1
  })
  event.add('sturdyarmor', tier => {
    tier.durabilityMultiplier = 300 // Each slot will be multiplied with [13, 15, 16, 11]
    tier.slotProtections = [3, 4, 6, 3]
    tier.enchantmentValue = 0
    tier.equipSound = 'minecraft:item.armor.equip_iron'
    tier.repairIngredient = 'create:sturdy_sheet'
    tier.toughness = 5.0 // diamond has 2.0, netherite 3.0
    tier.knockbackResistance = 0.2
  })
  event.add('radiantarmor', tier => {
    tier.durabilityMultiplier = 100 // Each slot will be multiplied with [13, 15, 16, 11]
    tier.slotProtections = [5, 9, 8, 5]
    tier.enchantmentValue = 99
    tier.equipSound = 'minecraft:item.armor.equip_iron'
    tier.repairIngredient = 'create:refined_radiance'
    tier.toughness = 3.0 // diamond has 2.0, netherite 3.0
    tier.knockbackResistance = 0.2
  })
})






onEvent('item.registry', event => {
	// Register new items here

///// REGISTER NEW ITEMS HERE /////


event.create('createastral:crushed_desh_ore'),
event.create('createastral:crushed_ostrum_ore'),
event.create('createastral:crushed_calorite_ore'),
event.create('createastral:subatomic_ingot'),
event.create('createastral:astral_conduit'),
event.create('createastral:andesite_compound'),
event.create('createastral:bronze_sheet'),
event.create('createastral:olivine_sheet'),
event.create('create:lapis_sheet'),
event.create('create:integrated_circuit'),
event.create('createastral:incomplete_electronic_circuit'),
event.create('createastral:golden_pin'),
event.create('createastral:calorite_pin'),
event.create('createastral:electrified_pin'),
event.create('createastral:uwaah'),
event.create('createastral:bronze_ingot'),
event.create('createastral:navigation_mechanism');
event.create('createastral:coin','create:sequenced_assembly').displayName('Golden Coin');
event.create('createastral:golden_bowl').displayName('Golden Bowl');
event.create('createastral:filled_golden_bowl','create:sequenced_assembly').displayName('Filled Golden Bowl').food(food => {
  food
      .hunger(0)
      .saturation(00)
        .effect('drinkbeer:drunk', 3000, 0, 1)
        .alwaysEdible()
});
event.create('createastral:radiant_helmet', 'helmet').tier('radiantarmor').glow(true).rarity('Epic'),
event.create('createastral:radiant_chestplate', 'chestplate').tier('radiantarmor').glow(true).rarity('Epic'),
event.create('createastral:radiant_leggings', 'leggings').tier('radiantarmor').glow(true).rarity('Epic'),
event.create('createastral:radiant_boots', 'boots').tier('radiantarmor').glow(true).rarity('Epic'),
event.create('createastral:radiant_sword', 'sword').tier('radiant').glow(true).rarity('Epic'),
event.create('createastral:radiant_pickaxe', 'pickaxe').tier('radiant').glow(true).rarity('Epic'),
event.create('createastral:radiant_axe', 'axe').tier('radiant').glow(true).rarity('Epic'),
event.create('createastral:radiant_shovel', 'shovel').tier('radiant').glow(true).rarity('Epic'),

event.create('createastral:copper_sword', 'sword').tier('copper'),
event.create('createastral:copper_pickaxe', 'pickaxe').tier('copper'),
event.create('createastral:copper_axe', 'axe').tier('copper'),
event.create('createastral:copper_shovel', 'shovel').tier('copper'),

event.create('createastral:copper_hoe', 'hoe').tier('copper'),
event.create('createastral:copper_helmet', 'helmet').tier('copperarmor'),
event.create('createastral:copper_chestplate', 'chestplate').tier('copperarmor'),
event.create('createastral:copper_leggings', 'leggings').tier('copperarmor'),
event.create('createastral:copper_boots', 'boots').tier('copperarmor'),

event.create('createastral:brass_sword', 'sword').tier('brass'),
event.create('createastral:brass_pickaxe', 'pickaxe').tier('brass'),
event.create('createastral:brass_axe', 'axe').tier('brass'),
event.create('createastral:brass_shovel', 'shovel').tier('brass'),
event.create('createastral:brass_hoe', 'hoe').tier('brass'),
event.create('createastral:brass_helmet', 'helmet').tier('brassarmor'),
event.create('createastral:brass_chestplate', 'chestplate').tier('brassarmor'),
event.create('createastral:brass_leggings', 'leggings').tier('brassarmor'),
event.create('createastral:brass_boots', 'boots').tier('brassarmor'),

event.create('createastral:steel_helmet', 'helmet').tier('steelarmor'),
event.create('createastral:steel_chestplate', 'chestplate').tier('steelarmor'),
event.create('createastral:steel_leggings', 'leggings').tier('steelarmor'),
event.create('createastral:steel_boots', 'boots').tier('steelarmor'),
event.create('createastral:sturdy_helmet', 'helmet').tier('sturdyarmor'),
event.create('createastral:sturdy_chestplate', 'chestplate').tier('sturdyarmor'),
event.create('createastral:sturdy_leggings', 'leggings').tier('sturdyarmor'),
event.create('createastral:sturdy_boots', 'boots').tier('sturdyarmor'),
event.create('createastral:orcane').displayName('Information / General Progression').glow(true),
event.create('createastral:astral_singularity').food(food => {
  food
      .hunger(50)
      .saturation(50)//This value does not directly translate to saturation points gained
        //The real value can be assumed to be:
        //min(hunger * saturation * 2 + saturation, foodAmountAfterEating)
        .effect('regeneration', 3000, 0, 1)
        .effect('speed', 3000, 0, 1)
        .effect('saturation', 3000, 0, 1)
        .effect('glowing', 6000, 0, 1)
        .removeEffect('poison')
        .alwaysEdible()//Like golden apples
})
event.create('createastral:pure_biomatter')
event.create('createastral:lime').displayName('Lime Dust');
event.create('createastral:coin','create:sequenced_assembly').displayName('coin');



})



onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
	
})
    
	 
	 
	 
	 
	 ///// ITEM TOOLTIPS REGISTRY /////
	 
	 


   onEvent('item.tooltip', e => {
    const tooltips = [
      { item: 'tconstruct:smeltery_controller', tooltip: 'Disabled, use a foundry in chapter 3.' },

      { item: 'create:blaze_cake', tooltip: 'No longer superheats! Use processes in Chapter 4 to superheat blaze burners. (Fuel Bucket, regular blaze burner)' },
      { item: 'tconstruct:raw_cobalt', tooltip: 'Gated by reaching the Moon!.' },
      { item: 'ae2:certus_quartz_dust', tooltip: 'Gated by reaching the Moon!' },
      { item: 'minecraft:blaze_rod', tooltip: 'Blazes can be found in a certain structure on the Moon...' },
      { item: 'minecraft:rotten_flesh', tooltip: 'Chewy... might make a good source of leather?' },
      { item: 'computercraft:disk', tooltip: 'This recipe is wierd it actually uses redstone, not rose quartz.' },
      { item: 'createastral:bronze_block', tooltip: 'Texture courtesy of Create: Alloyed!' },
      { item: 'createastral:bronze_ingot', tooltip: 'Texture courtesy of Create: Alloyed!' },
      { item: 'extractinator:extractinator', tooltip: 'Purely decorative. No functional use.' },
      { item: 'ad_astra:space_helmet', tooltip: 'Can be repaired using Sturdy Sheets.' },
      { item: 'ad_astra:space_suit', tooltip: 'Can be repaired using Sturdy Sheets.' },
      { item: 'ad_astra:space_pants', tooltip: 'Can be repaired using Sturdy Sheets.' },
      { item: 'ad_astra:space_boots', tooltip: 'Can be repaired using Sturdy Sheets.' },
      { item: 'minecraft:obsidian', tooltip: 'Nether is Disabled. Nether content is distributed across planets. Follow the questbook for more info.' },
      { item: 'minecraft:flint_and_steel', tooltip: 'Nether is Disabled. Nether content is distributed across planets. Follow the questbook for more info.' },
      { item: 'create:empty_blaze_burner', tooltip: 'Blazes are found on the moon.' },
      { item: 'create:blaze_burner', tooltip: 'Blazes are found on the moon.' },
      { item: 'techreborn:basic_machine_casing', tooltip: 'Crafted with either silver OR lead!' },
      { item: 'minecraft:nether_wart', tooltip: 'Found underground on the moon.' },
      { item: 'minecraft:soul_sand', tooltip: 'Found underground on the moon.' },
      { item: 'ae2:certus_quartz', tooltip: 'Found underground on the moon.' },
      { item: 'minecraft:ancient_debris', tooltip: 'Found underground on the moon and mars. Can be obtained from bastions and infernal spires on mars.' },
      { item: 'techreborn:uu_matter', tooltip: 'Material forged in chapter 5.' }, 
      { item: 'create:mechanical_arm', tooltip: 'Use a hopper to place this in a mechanical crafter.' } ,


      { item: 'techreborn:silver_ingot', tooltip: 'This metal is found on the moon. Y=65' },
      { item: 'techreborn:silver_nugget', tooltip: 'This metal is found on the moon. Y=65' },
      { item: 'techreborn:silver_storage_block', tooltip: 'This metal is found on the moon. Y=65' },
      { item: 'techreborn:raw_silver', tooltip: 'This metal is found on the moon. Y=65' },
      { item: 'techreborn:silver_ingot', tooltip: 'This metal is found on the moon. Y=65' },
      { item: 'techreborn:silver_ore', tooltip: 'This metal is found on the moon. Y=65' },
      { item: 'techreborn:deepslate_silver_ore', tooltip: 'This metal is found on the moon. Y=65' },

      { item: 'techreborn:lead_ingot', tooltip: 'This metal is found on mars. Y=50' },
      { item: 'techreborn:lead_nugget', tooltip: 'This metal is found on mars. Y=50' },
      { item: 'techreborn:lead_storage_block', tooltip: 'This metal is found on mars. Y=50' },
      { item: 'techreborn:raw_lead', tooltip: 'This metal is found on mars. Y=50' },
      { item: 'techreborn:lead_ingot', tooltip: 'This metal is found on mars. Y=50' },
      { item: 'techreborn:lead_ore', tooltip: 'This metal is found on mars. Y=50' },
      { item: 'techreborn:deepslate_lead_ore', tooltip: 'This metal is found on mars. Y=50' },

      


    ];
  
    tooltips.forEach(tooltip => {
      e.addAdvanced(tooltip.item, (item, advanced, text) => {
        if (!e.isShift()) {
          text.add(1, [Text.of('Hold ').darkGreen(), Text.of('Shift ').green(), Text.of('to see more info.').darkGreen()]);
        }
        if (e.isShift()) {
          text.add(1, [Text.of(tooltip.tooltip).green()]);
        }
      });
    });
    e.addAdvanced('createastral:orcane', (item, advanced, text) => {
      if (!e.isShift()) {
        text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
      }
      if (e.isShift()) {
        
    text.add(1, [Text.of('If you are new to create, use pondering or online guides. The pack is almost exclusively centered around it and Tech Reborn. The quest book has some items that give a general idea of what has changed / what is included, in the order of when to take note of them, however the pack can be played without following it exactly, so do what you enjoy.').gold(),])
    text.add(2, [Text.of('A major change you *might* want to be aware of. The nether does not exist. Do not even try to make the portal as it will not function. All nether related items are distributed throughout the pack (mostly planets)').white(),])
  
      }
    })
  });
  


///// CUSTOM ASTRAL WORLDGEN /////


///OVERWORLD

onEvent('worldgen.add', event => {
	event.addOre((ore) => {
		ore.id = "kubejs:new_tin_ore" // optional
		ore.biomes = [{
			not: {
				category: "river"
			}
		}]
		ore.addTarget('minecraft:stone', 'techreborn:tin_ore')

		ore.count([10, 40])
			.squared()
			.triangleHeight(0, 140)
	})
  

  ///MOON


  event.addOre((ore) => {
		ore.id = "kubejs:glowstonemoon" // optional
		ore.biomes = ['ad_astra:lunar_wastelands', 'minecraft:basalt_deltas', 'incendium:toxic_heap']
		ore.addTarget('#ad_astra:moon_ore_replaceables', 'minecraft:glowstone')

		ore.count([10, 40])
			.squared()
			.triangleHeight(0, 85)
	})

  event.addOre((ore) => {
		ore.id = "kubejs:rubyoremoon" // optional
    ore.biomes = ['ad_astra:lunar_wastelands', 'minecraft:basalt_deltas', 'incendium:toxic_heap']
		ore.biomes = [{
			not: {
				category: "river"
			}
		}]
		ore.addTarget('#ad_astra:moon_ore_replaceables', 'ae2:deepslate_quartz_ore')

		ore.count([10, 20])
			.squared()
			.triangleHeight(0, 85)
	})

    event.addOre((ore) => {
		ore.id = "kubejs:cobaltoremoon" // optional
    ore.biomes = ['ad_astra:lunar_wastelands', 'minecraft:basalt_deltas', 'incendium:toxic_heap']
		ore.biomes = [{
			not: {
				category: "river"
			}
		}]
		ore.addTarget('#ad_astra:moon_ore_replaceables', 'tconstruct:cobalt_ore')
    ore.noSurface = 0.75   
		ore.count([10, 25])
			.squared()
			.triangleHeight(0, 60)

      
	})

  event.addOre((ore) => {
		ore.id = "kubejs:silveroremoon" // optional
		ore.biomes = ['ad_astra:lunar_wastelands', 'minecraft:basalt_deltas', 'incendium:toxic_heap']
		ore.addTarget('#ad_astra:moon_ore_replaceables', 'techreborn:deepslate_silver_ore')
    ore.noSurface = 0.75    
		ore.count([25, 40])
			.squared()
			.triangleHeight(0, 115)
	})


  event.addOre((ore) => {
		ore.id = "kubejs:basalt" // optional
		ore.biomes = ['ad_astra:lunar_wastelands', 'minecraft:basalt_deltas', 'incendium:toxic_heap']
		ore.addTarget('#ad_astra:moon_ore_replaceables', 'create:scoria')


		ore.count([1, 2])
			.squared()
			.triangleHeight(60, 110)
    ore.size = 60
	})

  event.addOre((ore) => {
		ore.id = "kubejs:skystoneae2" // optional
		ore.biomes = ['ad_astra:lunar_wastelands', 'minecraft:basalt_deltas', 'incendium:toxic_heap']
		ore.addTarget('#ad_astra:moon_ore_replaceables', 'ae2:sky_stone_block')


		ore.count([1, 2])
			.squared()
			.triangleHeight(0, 110)
    ore.size = 30
	})


  ///MARS


  event.addOre((ore) => {
		ore.id = "kubejs:leadoremars" // optional
		ore.biomes = [{
			not: {
				category: "river"
			}
		}]
		ore.addTarget('#ad_astra:mars_ore_replaceables', 'techreborn:deepslate_lead_ore')

		ore.count([10, 40])
			.squared()
			.triangleHeight(0, 100)
	})

  event.addOre((ore) => {
		ore.id = "kubejs:goldoremars" // optional
		ore.biomes = [{
			not: {
				category: "river"
			}
		}]
		ore.addTarget('#ad_astra:mars_ore_replaceables', 'ad_astra:deepslate_gold_ore')

		ore.count([10, 40])
			.squared()
			.triangleHeight(0, 100)
    ore.size = 15
	})

  event.addOre((ore) => {
		ore.id = "kubejs:galenaoremars" // optional
		ore.biomes = [{
			not: {
				category: "river"
			}
		}]
		ore.addTarget('#ad_astra:mars_ore_replaceables', 'techreborn:deepslate_galena_ore')

		ore.count([3, 5])
			.squared()
			.triangleHeight(-64, 64)
    ore.size = 15
	})





  ///MERCURY



  event.addOre((ore) => {
		ore.id = "kubejs:iridiumoremerc" // optional
		ore.biomes = [{
			not: {
				category: "river"
			}
		}]
		ore.addTarget('#ad_astra:mercury_ore_replaceables', 'techreborn:deepslate_iridium_ore')

		ore.count([25, 40])
			.squared()
			.triangleHeight(-64, 85)
	})

  event.addOre((ore) => {
		ore.id = "kubejs:silveroremerc" // optional
		ore.biomes = [{
			not: {
				category: "river"
			}
		}]
		ore.addTarget('#ad_astra:mercury_ore_replaceables', 'techreborn:silver_ore')

		ore.count([25, 40])
			.squared()
			.triangleHeight(-30, 85)
	})

  event.addOre((ore) => {
		ore.id = "kubejs:caloriteore" // optional
		ore.biomes = [{
			not: {
				category: "river"
			}
		}]
		ore.addTarget('#ad_astra:mercury_ore_replaceables', 'ad_astra:deepslate_calorite_ore')

		ore.count([10, 20])
			.squared()
			.triangleHeight(0, 85)
	})
})
