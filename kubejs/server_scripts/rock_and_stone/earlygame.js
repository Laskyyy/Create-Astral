var FULL_BUCKET_AMMOUNT = 81000;
var INGOT_FLUID_AMMOUNT = 9000;
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
          "amount": FULL_BUCKET_AMMOUNT
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
        Fluid.of("minecraft:lava", FULL_BUCKET_AMMOUNT / 5)
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
        Fluid.of("kubejs:shimmer", FULL_BUCKET_AMMOUNT / 10)
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
          "amount": FULL_BUCKET_AMMOUNT
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
    //crimsite - base
    let inter = "createastral:incomplete_crimsite" //feel free to change this
    event.recipes.createSequencedAssembly([
        Item.of("create:crimsite").withChance(16.0),
        Item.of("minecraft:flint").withChance(4.0)//this results in 80% success chance
    ], "minecraft:flint", [ //input
        event.recipes.createFilling(inter, [inter, Fluid.of("minecraft:lava", FULL_BUCKET_AMMOUNT / 10)]),
        event.recipes.createDeploying(inter, [inter, Item.of("minecraft:flint")]),
        event.recipes.createPressing(inter, inter) //smol changes to default crimsite
    ]).transitionalItem(inter).loops(2)
    //crimsite + netherrack - upgraded
    event.recipes.createMixing([
        Item.of("minecraft:netherrack"),
        Item.of("techreborn:small_pile_of_sulfur_dust").withChance(0.4)
    ], [
        Item.of("create:scoria"),
        Item.of("minecraft:red_sand"),
        Fluid.of("minecraft:lava", FULL_BUCKET_AMMOUNT / 10)
    ])
    event.recipes.createMixing([
        Item.of("minecraft:netherrack"),
        Item.of("techreborn:small_pile_of_cinnabar_dust").withChance(0.75)
    ], [
        Item.of("create:scoria"),
        Item.of("minecraft:red_dye"),
        Fluid.of("minecraft:lava", FULL_BUCKET_AMMOUNT / 20)
    ]).heated()
    event.recipes.createCrushing([
        Item.of("techreborn:netherrack_dust"),
        Item.of("techreborn:netherrack_dust").withChance(0.75),
        Item.of("techreborn:granite_dust").withChance(0.4)
    ], [
        Item.of("minecraft:netherrack")
    ])
    event.recipes.createMilling([
        Item.of("techreborn:netherrack_dust"),
        Item.of("techreborn:netherrack_dust").withChance(0.3)
    ])
    event.recipes.createCompacting([
        Item.of("2x create:crimsite"),
        Fluid.of("minecraft:lava", FULL_BUCKET_AMMOUNT / 2)
    ], [
        Item.of("2x minecraft:basalt"),
        Item.of("techreborn:netherrack_dust"),
        Item.of("2x minecraft:flint")
    ])
    //red sandstone - base
    //sand
    event.recipes.createCrushing([
        Item.of("minecraft:gravel"),
        Item.of("techreborn:andesite_dust").withChance(0.2),
        Item.of("techreborn:granite_dust").withChance(0.15),
        Item.of("techreborn:diorite_dust").withChance(0.15)
    ], [
        Item.of("minecraft:cobblestone")
    ])
    event.recipes.createMilling("minecraft:gravel", "minecraft:cobblestone")
    //cant find the grinder json rq, so I'll treat it as midgame and not bother
    //sand
    event.recipes.createMixing([
        Item.of("minecraft:sand"),
        Item.of("minecraft:clay_ball").withChance(0.2)
    ], [
        Item.of("2x minecraft:gravel"),
        Fluid.of("minecraft:water", FULL_BUCKET_AMMOUNT)  
    ])
    event.recipes.createMilling([
        Item.of("minecraft:sand").withChance(0.33),
        Item.of("techreborn:flint_dust").withChance(0.2),
        Item.of("techreborn:small_pile_of_yellow_garnet_dust").withChance(0.4)
    ], [
        Item.of("minecraft:gravel")
    ])
    event.recipes.createCrushing([
        Item.of("minecraft:sand"),
        Item.of("minecraft:sand").withChance(0.25),
        Item.of("minecraft:clay_ball").withChance(0.1)
    ])
    //red sand
    event.recipes.createCompacting([
        Item.of("minecraft:red_sand"),
    ], [
        Item.of("minecraft:sand"),
        Item.of("techreborn:granite_dust")
    ])
    event.recipes.createCompacting([
        Item.of("minecraft:red_sand"),
        Item.of("minecraft:red_sand").withChance(0.5)
    ], [
        Item.of("minecraft:sand"),
        Item.of("minecraft:red_dye"),
        Item.of("techreborn:granite_dust")
    ])
    //red sandstone
    event.recipes.createCompacting([
        Item.of("minecraft:red_sandstone")
    ], [
        Item.of("4x minecraft:red_sand")
    ])
    event.custom({
        "type": "tconstruct:casting_basin",
        "cast": {
          "item": "minecraft:red_sand"
        },
        "cast_consumed": true,
        "fluid": {
          "tag": "tconstruct:molten_clay",
          "amount": FULL_BUCKET_AMMOUNT / 10
        },
        "result": "minecraft:red_sandstone",
        "cooling_time": 100
      })
    //outputs of our sandstone - base
    event.recipes.createCrushing([
        Item.of("create:raw_zinc").withChance(0.33),
        Item.of("techreborn:yellow_garnet").withChance(0.25)
    ], [
        Item.of("minecraft:chiseled_red_sandstone")
    ]),
    event.recipes.createMilling([
        Item.of("create:raw_zinc").withChance(0.2)
    ], [
        Item.of("minecraft:chiseled_red_sandstone")
    ])
    event.recipes.createMixing([
        Item.of("create:raw_zinc").withChance(0.5),
        Item.of("techreborn:grossular_dust").withChance(0.25),
        Item.of("techreborn:yellow_garnet").withChance(0.4)
    ], [
        Item.of("minecraft:chiseled_red_sandstone"),
        Item.of("techreborn:stone_dust"),
        Fluid.of("minecraft:lava", FULL_BUCKET_AMMOUNT / 10)
    ])
    event.recipes.createMixing([
        Item.of("create:raw_zinc"),
        Item.of("techreborn:yellow_garnet").withChance(0.5),
        Item.of("techreborn:red_garnet").withChance(0.3)
    ], [
        Item.of("minecraft:chiseled_red_sandstone"),
        Item.of("techreborn:sodalite_dust"),
        Fluid.of("kubejs:shimmer", FULL_BUCKET_AMMOUNT / 10)
    ]).heated()
    event.recipes.createSplashing(Item.of("create:zinc_nugget").withChance(0.6), "minecraft:red_sand")
    //diorite time - a la Bob
    event.recipes.createCompacting([
        Item.of("minecraft:diorite")
    ], [
        Item.of("minecraft:cobblestone"),
        Item.of("techreborn:diorite_dust"),
        Fluid.of("tconstruct:molten_quartz", FULL_BUCKET_AMMOUNT / 40) //=25 mb
    ])
    event.recipes.createCompacting([
        Item.of("2x minecraft:diorite")
    ], [
        Item.of("techreborn:diorite_dust"),
        Item.of("minecraft:cobblestone"),
        Fluid.of("tconstruct:molten_quartz", FULL_BUCKET_AMMOUNT / 25) //=40 mb
    ]).heated()
    //making the diorite loop whole
    event.recipes.createMilling([
        Item.of("techreborn:diorite_dust")
    ], [
        Item.of("minecraft:diorite")
    ])
    event.recipes.createCrushing([
        Item.of("techreborn:diorite_dust"),
        Item.of("techreborn:diorite_dust").withChance(0.25),
        Item.of("techreborn:marble_dust").withChance(0.2)
    ], [
        Item.of("minecraft:diorite")
    ])
    //insert grinding for a guaranteed 2 diorite dust here
    let downloadbattlecats = "kubejs:incomplete_quartz"
    event.recipes.createSequencedAssembly([
        Item.of("minecraft:nether_quartz").withChance(16.0),
        Item.of("2x minecraft:nether_quartz").withChance(4.0) //20% chance for double quartz, for fun 
    ], "minecraft:diorite", [ //input
        event.recipes.createPressing(downloadbattlecats, downloadbattlecats),
        event.recipes.createSawing(downloadbattlecats, downloadbattlecats),
        event.recipes.createDeploying(downloadbattlecats, [downloadbattlecats, "create:sandpaper"])
    ]).transitionalItem(downloadbattlecats).loops(1)
})