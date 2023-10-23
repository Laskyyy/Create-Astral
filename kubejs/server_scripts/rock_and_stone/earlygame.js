onEvent("recipes", event => {
    //base method
    event.custom({
        "type": "tconstruct:casting_basin",
        "cast": {
          "item": "tconstruct:seared_stone"
        },
        "cast_consumed": true,
        "fluid": {
          "tag": "minecraft:lava",
          "amount": 1000
        },
        "result": "create:veridium",
        "cooling_time": 60
      })
    //veridium - outputs - base
    event.recipes.createCrushing([
    Item.of("minecraft:raw_copper").withChance(0.3), 
    Item.of("minecraft:clay_ball").withChance(0.25), 
    Item.of("techreborn:olivine_dust").withChance(0.5)
   ], "create:veridium")
    event.recipes.createMilling([
    Item.of("minecraft:raw_copper").withChance(0.15),
    Item.of("minecraft:clay_ball").withChance(0.15)], "create:veridium")
    //upgraded method
    event.recipes.createMixing(Item.of("2x create:veridium"), [
        "techreborn:peridot",
        "techreborn:peridot",
        "create:scoria",
        "create:scoria"
    ])
    event.recipes.createCompacting(Item.of("4x techreborn:peridot"), [
        "techreborn:olivine_dust",
        "techreborn:olivine_dust",
        "techreborn:olivine_dust",
        Fluid.of("minecraft:lava", 200)
    ])
    //ochrum - base method
    event.recipes.createCompacting(Item.of("create:ochrum"), [
        Item.of("4x minecraft:sand"),
        "create:limestone",
        "techreborn:pyrite_dust"
    ])
    event.recipes.createSplashing(Item.of("techreborn:pyrite_dust").withChance(0.3), "minecraft:sand")
    event.recipes.createCrushing([
        Item.of("minecraft:raw_gold").withChance(0.15),
        Item.of("techreborn:pyrite_dust").withChance(0.4),
        Item.of("techreborn:limestone_dust").withChance(0.6)
    ], "create:ochrum")
    event.recipes.createMilling([
        Item.of("minecraft:raw_gold").withChance(0.1),
        Item.of("techreborn:granite_dust").withChance(0.3)
    ], "create:ochrum")
    //ochrum - upgraded method
    event.recipes.createCompacting(Item.of("2x create:ochrum"), [
        Item.of("2x create:limestone"),
        Item.of("6x minecraft:pyrite_dust"),
        Fluid.of("kubejs:shimmer", 100)
    ])
    //asurine - base method
    //time is intentional - gotta deal with logistics in this one (100 secs btw)
    event.custom({
        "type": "tconstruct:casting_basin",
        "cast": {
          "item": "minecraft:seared_stone"
        },
        "cast_consumed": true,
        "fluid": {
          "tag": "minecraft:water",
          "amount": 1000
        },
        "result": "tconstruct:seared_brick",
        "cooling_time": 2000
      })
    //asurine - outputs - base
    event.recipes.createCrushing([
        Item.of("techreborn:raw_tin").withChance(0.2),
        Item.of("techreborn:lazurite_dust").withChance(0.3),
        Item.of("minecraft:clay_ball").withChance(0.4)
    ], "create:asurine")
    event.recipes.createMilling([
        Item.of("techreborn:raw_tin").withChance(0.1),
        Item.of("minecraft:clay_ball").withChance(0.2)
    ], "create:asurine")
})