var FULL_BUCKET_AMMOUNT = 81000;
var INGOT_FLUID_AMMOUNT = 9000;
onEvent("recipes", event => {
    //ochrum - outputs - advanced
    event.recipes.createMixing([
        Fluid.of("techreborn:mercury", FULL_BUCKET_AMMOUNT / 10),
        Item.of("techreborn:sulfur_dust").withChance(0.4)
    ], [
        Item.of("techreborn:cinnabar_dust")
    ]).heated()
    event.recipes.createCrushing([
        Item.of("techreborn:cinnabar_dust")
    ], [
        Item.of("createastral:cinnabar") //add a custom crystal thingy here
    ])
    event.recipes.createMilling([
        Item.of("techreborn:cinnabar_dust").withChance(0.7)
    ], [
        Item.of("createastral:cinnabar")
    ])
    event.recipes.createMixing([
        Fluid.of("createastral:gold-mercury_solution", FULL_BUCKET_AMMOUNT / 10), //add a custom fluid here
        Item.of("techreborn:andradite_dust").withChance(0.6)
    ], [
        Fluid.of("techreborn:mercury", FULL_BUCKET_AMMOUNT / 10),
        Item.of("create:ochrum")
    ])
    event.recipes.createMixing([
        Fluid.of("techreborn:mercury", FULL_BUCKET_AMMOUNT / 20),
        Fluid.of("tconstruct:molten_gold", INGOT_FLUID_AMMOUNT * 3)
    ], [
        Fluid.of("createastral:gold-mercury_solution", FULL_BUCKET_AMMOUNT / 10)
    ]).heated()
})