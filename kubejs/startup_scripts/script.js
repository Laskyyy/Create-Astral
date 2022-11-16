// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')



onEvent('fluid.registry', event => {
	event.create('molten_calorite')
    .thickTexture(0xc41a39)
    .bucketColor(0xc41a39)
    .displayName('Calorite')
	.stillTexture('tconstruct:block/fluid/molten/still')
	.flowingTexture('tconstruct:block/fluid/molten/flowing')
	
	event.create('molten_ostrum')
    .thickTexture(0x8d83a0)
    .bucketColor(0x8d83a0)
    .displayName('Ostrum')
	.stillTexture('tconstruct:block/fluid/molten/still')
	.flowingTexture('tconstruct:block/fluid/molten/flowing')
	
	event.create('molten_desh')
    .thickTexture(0xec8742)
    .bucketColor(0xec8742)
    .displayName('Desh')
	.stillTexture('tconstruct:block/fluid/molten/still')
	.flowingTexture('tconstruct:block/fluid/molten/flowing')

  event.create('shimmer')
    .thickTexture(0xffd6fa)
    .bucketColor(0xffd6fa)
    .displayName('Shimmer')
	.stillTexture('tconstruct:block/fluid/molten/shimmer')
	.flowingTexture('tconstruct:block/fluid/molten/shimmer')
})
onEvent('block.modification', event => {
  event.modify('lchunkloader:chunk_loader', block => {
    block.destroySpeed = 999999
    block.hasCollision = false
	block.explosionResistance = 99999
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
  event.modify('indrev:tungsten_ore', block => {
    block.destroySpeed = 6
    block.hasCollision = true
	block.explosionResistance = 99999
  })
  event.modify('indrev:deepslate_tungsten_ore', block => {
    block.destroySpeed = 7
    block.hasCollision = true
	block.explosionResistance = 99999
  })
  event.modify('indrev:nikolite_ore', block => {
    block.destroySpeed = 6
    block.hasCollision = true
	block.explosionResistance = 99999
  })
  event.modify('indrev:deepslate_nikolite_ore', block => {
    block.destroySpeed = 7
    block.hasCollision = true
	block.explosionResistance = 99999
  })
  event.modify('indrev:silver_ore', block => {
    block.destroySpeed = 6
    block.hasCollision = true
	block.explosionResistance = 99999
  })
  event.modify('indrev:deepslate_silver_ore', block => {
    block.destroySpeed = 7
    block.hasCollision = true
	block.explosionResistance = 99999
  })
  event.modify('indrev:lead_ore', block => {
    block.destroySpeed = 6
    block.hasCollision = true
	block.explosionResistance = 99999
  })
  event.modify('indrev:deepslate_lead_ore', block => {
    block.destroySpeed = 7
    block.hasCollision = true
	block.explosionResistance = 99999
  })
})

onEvent('block.registry', event => {
  event.create('createastral:sturdy_sheet_block')
  	   .material('lantern')
       .hardness(9)
       .displayName('Sturdy Sheet Block')
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
 })

onEvent("item.modification", event => {

	
	event.modify('create:blaze_cake', item => {
    item.burnTime = 100000
  })

})		

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
    tier.slotProtections = [3, 4, 4, 3]
    tier.enchantmentValue = 0
    tier.equipSound = 'minecraft:item.armor.equip_iron'
    tier.repairIngredient = '#c:steel_ingots'
    tier.toughness = 5.0 // diamond has 2.0, netherite 3.0
    tier.knockbackResistance = 0.2
  })
  event.add('radiantarmor', tier => {
    tier.durabilityMultiplier = 100 // Each slot will be multiplied with [13, 15, 16, 11]
    tier.slotProtections = [5, 9, 8, 5]
    tier.enchantmentValue = 99
    tier.equipSound = 'minecraft:item.armor.equip_iron'
    tier.repairIngredient = '#c:steel_ingots'
    tier.toughness = 3.0 // diamond has 2.0, netherite 3.0
    tier.knockbackResistance = 0.2
  })
})

onEvent('item.registry', event => {
	// Register new items here
	
event.create('createastral:bronze_sheet'),
event.create('createastral:bronze_ingot'),
event.create('createastral:production_mechanism')
event.create('createastral:blazing_mechanism')
event.create('createastral:navigation_mechanism')
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

event.create('createastral:pure_biomatter').type('create:sequenced_assembly').displayName('Pure Biomatter')

})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
	
})
     //ITEM TOOLTIPS
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
onEvent('item.tooltip', e => {
  e.addAdvanced('createastral:steel_chestplate', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Heavy and durable, a solid alternative to diamond. ').gold(),])
      
    }
  })
  e.addAdvanced('createastral:steel_boots', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Heavy and durable, a solid alternative to diamond.').gold(),])
      
    }
  })
  e.addAdvanced('createastral:steel_helmet', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Heavy and durable, a solid alternative to diamond.').gold(),])
      
    }
  })
  e.addAdvanced('createastral:steel_leggings', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Heavy and durable, a solid alternative to diamond.').gold(),])
      
    }
  })
  e.addAdvanced('createastral:sturdy_chestplate', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Extreme durability and provides high protection versus attacks of great damage. Poorly conductive and does not resonate in enchanting tables.').gold(),])
      
    }
  })
  e.addAdvanced('createastral:sturdy_boots', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Extreme durability and provides high protection versus attacks of great damage. Poorly conductive and does not resonate in enchanting tables.').gold(),])
      
    }
  })
  e.addAdvanced('createastral:sturdy_helmet', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Extreme durability and provides high protection versus attacks of great damage. Poorly conductive and does not resonate in enchanting tables.').gold(),])
      
    }
  })
  e.addAdvanced('createastral:sturdy_leggings', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Extreme durability and provides high protection versus attacks of great damage. Poorly conductive and does not resonate in enchanting tables.').gold(),])
      
    }
  })
  
  e.addAdvanced('createastral:brass_chestplate', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Efficient to produce, particularly effective in enchanting tables. ').gold(),])
      
    }
  })
    e.addAdvanced('createastral:brass_helmet', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Efficient to produce, particularly effective in enchanting tables. ').gold(),])
      
    }
  })
    e.addAdvanced('createastral:brass_leggings', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Efficient to produce, particularly effective in enchanting tables. ').gold(),])
      
    }
  })
    e.addAdvanced('createastral:brass_boots', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Efficient to produce, particularly effective in enchanting tables. ').gold(),])
      
    }
  })
  e.addAdvanced('createastral:brass_hoe', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Efficient to produce, particularly effective in enchanting tables. ').gold(),])
      
    }
  })
  e.addAdvanced('createastral:brass_pickaxe', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Efficient to produce, particularly effective in enchanting tables. ').gold(),])
      
    }
  })
  e.addAdvanced('createastral:brass_axe', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Efficient to produce, particularly effective in enchanting tables. ').gold(),]),
      text.add(2, [Text.of('Press (V) to toggle mining with weapons.').white(),])
      
    }
  })
  e.addAdvanced('tconstruct:mattock', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {

      text.add(1, [Text.of('Press (V) to toggle mining with weapons.').white(),])
      
    }
  })
  e.addAdvanced('tconstruct:hammer', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {

      text.add(1, [Text.of('Press (V) to toggle mining with weapons.').white(),])
      
    }
  })
  e.addAdvanced('tconstruct:hand_axe', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {

      text.add(1, [Text.of('Press (V) to toggle mining with weapons.').white(),])
      
    }
  })
  e.addAdvanced('tconstruct:broad_axe', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {

      text.add(1, [Text.of('Press (V) to toggle mining with weapons.').white(),])
      
    }
  })
  e.addAdvanced('createastral:brass_shovel', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Efficient to produce, particularly effective in enchanting tables. ').gold(),])
      
    }
  })
  e.addAdvanced('createastral:brass_sword', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Efficient to produce, particularly effective in enchanting tables. ').gold(),])
      
    }
  })
    e.addAdvanced('createastral:copper_chestplate', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Easy to craft and requires little processing.').gold(),])
      
    }
  })
   e.addAdvanced('createastral:copper_helmet', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Easy to craft and requires little processing.').gold(),])
      
    }
  })
   e.addAdvanced('createastral:copper_boots', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Easy to craft and requires little processing.').gold(),])
      
    }
  })
   e.addAdvanced('createastral:copper_leggings', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Easy to craft and requires little processing.').gold(),])
      
    }
  })
  e.addAdvanced('createastral:copper_hoe', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Easy to craft and requires little processing.').gold(),])
      
    }
  })
  e.addAdvanced('createastral:copper_shovel', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Easy to craft and requires little processing.').gold(),])
      
    }
  })
  e.addAdvanced('createastral:copper_pickaxe', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Easy to craft and requires little processing.').gold(),])
      
    }
  })
  e.addAdvanced('createastral:copper_axe', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Easy to craft and requires little processing.').gold(),]),
      text.add(2, [Text.of('Press (V) to toggle mining with weapons.').white(),])
      
    }
  })
  e.addAdvanced('createastral:copper_sword', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Easy to craft and requires little processing.').gold(),])
      
    }
  })
  e.addAdvanced('minecraft:iron_helmet', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Reliable, will require a mechanical press to produce.').gold(),])
      
    }
  })
  e.addAdvanced('minecraft:iron_chestplate', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Reliable, will require a mechanical press to produce.').gold(),])
      
    }
  })
  e.addAdvanced('minecraft:iron_leggings', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Reliable, will require a mechanical press to produce.').gold(),])
      
    }
  })
  e.addAdvanced('minecraft:iron_boots', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Reliable, will require a mechanical press to produce.').gold(),])
      
    }
  })
  e.addAdvanced('minecraft:iron_sword', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Reliable, will require a mechanical press to produce.').gold(),])
      
    }
  })
  e.addAdvanced('minecraft:iron_axe', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Reliable, will require a mechanical press to produce.').gold(),]),
      text.add(2, [Text.of('Press (V) to toggle mining with weapons.').white(),])
      
    }
  })
  e.addAdvanced('minecraft:wooden_axe', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Reliable, will require a mechanical press to produce.').gold(),]),
      text.add(2, [Text.of('Press (V) to toggle mining with weapons.').white(),])
      
    }
  })
  e.addAdvanced('minecraft:stone_axe', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Reliable, will require a mechanical press to produce.').gold(),]),
      text.add(2, [Text.of('Press (V) to toggle mining with weapons.').white(),])
      
    }
  })
  e.addAdvanced('minecraft:diamond_axe', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Reliable, will require a mechanical press to produce.').gold(),]),
      text.add(2, [Text.of('Press (V) to toggle mining with weapons.').white(),])
      
    }
  })
  e.addAdvanced('minecraft:netherite_axe', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Reliable, will require a mechanical press to produce.').gold(),]),
      text.add(2, [Text.of('Press (V) to toggle mining with weapons.').white(),])
      
    }
  })
  e.addAdvanced('minecraft:golden_axe', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Reliable, will require a mechanical press to produce.').gold(),]),
      text.add(2, [Text.of('Press (V) to toggle mining with weapons.').white(),])
      
    }
  })
  e.addAdvanced('minecraft:iron_pickaxe', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Reliable, will require a mechanical press to produce.').gold(),])
      
    }
  })
  e.addAdvanced('minecraft:iron_shovel', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Reliable, will require a mechanical press to produce.').gold(),])
      
    }
  })
  e.addAdvanced('minecraft:iron_hoe', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Reliable, will require a mechanical press to produce.').gold(),])
      
    }
  })
  e.addAdvanced('ad_astra:solar_panel', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Disabled. Alternator produces electricity.').gold(),])
      
    }
  })
  e.addAdvanced('ad_astra:coal_generator', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Disabled. Alternator produces electricity.').gold(),])
      
    }
  })
  e.addAdvanced('minecraft:rotten_flesh', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Chewy... might make a good source of leather?').gold(),])
      
    }
  })
  e.addAdvanced('campanion:leather_pouch', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Material item, no functional use.').gold(),])
      
    }
  })
  e.addAdvanced('campanion:hiking_pack', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Equip in chest slot. Items will drop upon unequipping!').gold(),])
      
    }
  })
  e.addAdvanced('bosses_of_mass_destruction:monolith_block', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Contains immense amounts of potential energy... (Drop from the Obsidian Monolith)').gold(),])
      
    }
  })
  e.addAdvanced('createastral:orcane', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
	text.add(1, [Text.of('If you are new to create, use pondering or online guides. The pack is almost exclusively centered around it. The quest book has some items which gives a general idea of what has changed / what is included, in an order of when to take note of them, however the pack can be played without following it exactly, so do what you enjoy.').gold(),])
    text.add(2, [Text.of('KNOWN ISSUES PLEASE READ:').red(),])
    text.add(3, [Text.of('- All profiling for performance on this pack is based on reaching between 100-144fps w/ shaders on a 1080 + R5 5600X @ 8 chunks, lower end machines may not perform as well with shaders and may need to disable them, or an easier to run shader of your choosing (Keypress: O). I just included 2 presets if you dont know where to look.').white(),])
	text.add(4, [Text.of('- Exceptionally large mechanical crafting recipes appear odd in the UI, they still function as intended despite this.').gray(),])
  text.add(5, [Text.of('- Recipes are updated in realtime on the official server, whereas singleplayer will have to wait between curseforge releases for latest content changes.').white(),])


    }
  })
  e.addAdvanced('createastral:radiant_chestplate', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Set Bonus: Res (I) Jump Boost (I) Haste (I); Highly Enchantable ').gold(),])
      
    }
  })
  e.addAdvanced('createastral:radiant_boots', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Set Bonus: Res (I) Jump Boost (I) Haste (I); Highly Enchantable ').gold(),])
      
    }
  })
  e.addAdvanced('createastral:radiant_helmet', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Set Bonus: Res (I) Jump Boost (I) Haste (I); Highly Enchantable ').gold(),])
      
    }
  })
  e.addAdvanced('createastral:radiant_leggings', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Set Bonus: Res (I) Jump Boost (I) Haste (I); Highly Enchantable ').gold(),])
      
    }
  })
   e.addAdvanced('compressor:triple_compressed_andesite', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Create a basalt generator with blue ice using this as a catalyst instead of soul soil for an andesite generator! ').gold(),])
      
    }
  })
   e.addAdvanced('compressor:triple_compressed_sand', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Place under a cobblestone generator to turn it into an sand generator!').gold(),])
      
    }
  })
  e.addAdvanced('createastral:radiant_sword', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('As durable as hard light can be. Extremely enchantable.').gold(),])
      
    }
  })
  e.addAdvanced('createastral:radiant_axe', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('As durable as hard light can be. Extremely enchantable..').gold(),]),
      text.add(2, [Text.of('Press (V) to toggle mining with weapons.').white(),])
      
    }
  })
  e.addAdvanced('createastral:radiant_shovel', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('As durable as hard light can be. Extremely enchantable.').gold(),])
      
    }
  })
  e.addAdvanced('createastral:radiant_pickaxe', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('As durable as hard light can be. Extremely enchantable.').gold(),])
      
    }
  })
  e.addAdvanced('snailmail:snail_box', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('Place to allow other players to send you mail from anywhere in the world! Can opt show or hide the snailbox location.').gold(),])
      
    }
  })
  e.addAdvanced('computercraft:disk', (item, advanced, text) => {
    if (!e.isShift()) {
      text.add(1, [Text.of('Hold ').gold(), Text.of('Shift ').yellow(), Text.of('to see more info.').gold()])
    }
    if (e.isShift()) {
      
      text.add(1, [Text.of('This recipe is wierd it actually uses redstone, not rose quartz.').red(),])
      
    }
  })
})
  
onEvent('worldgen.add', event => {
	event.addOre((ore) => {
		ore.id = "kubejs:new_tin_ore" // optional
		ore.biomes = [{
			not: {
				category: "river"
			}
		}]
		ore.addTarget('minecraft:stone', 'indrev:tin_ore')

		ore.count([10, 40])
			.squared()
			.triangleHeight(0, 200)
	})

})
  
  
let music_list = {
  "sogcore": "Sogcore",
}

onEvent("sound_event.registry", event => {
  Object.keys(music_list).forEach(value => {
      event.create(`musictriggers:music.${value}`)
  })
})

onEvent("item.registry", event => {
  Object.keys(music_list).forEach((value, index) => {
      event.create(value, "music_disc")
          .song(`musictriggers:music.${value}`)
          .analogOutput(index + 1)
          .texture("createastral:item/orcane")
  })
})