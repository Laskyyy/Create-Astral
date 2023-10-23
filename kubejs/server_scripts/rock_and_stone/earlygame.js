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
    event.recipes.createCrushing("create:veridium",
     [Item.of("minecraft:raw_copper").withChance(0.3), 
     Item.of("minecraft:clay_ball").withChance(0.25), 
     Item.of("techreborn:olivine_dust").withChance(0.5)
    ])
    event.recipes.createMilling("create:veridium", [
        Item.of("minecraft:raw_copper").withChance(0.15),
        Item.of("minecraft:clay_ball").withChance(0.15)
    ])
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

})