onEvent("recipes", event => {
    //add a use for ashes, making tuff much more relevant if you can spare the power
    event.custom({
        "type":"createaddition:charging",
        "input": {
            "item": "minecraft:tuff",
            "count": 1
        },
        "result": {
            "item": "techreborn:ashes_dust",
            "count": 2
        },
        "energy": 10000
    })
    event.recipes.createSplashing([
        Item.of("minecraft:gold_nugget").withChance(0.2),
        Item.of("create:zinc_nugget").withChance(0.225),
        Item.of("create:copper_nugget").withChance(0.3),
        Item.of("techreborn:tin_nugget").withChance(0.25)
    ], [
        "techreborn:ashes_dust"
    ])
    //allow for a smaller tree farm if you have sulfur to spare
    event.recipes.createMixing("8x techreborn:rubber", [
        "3x techreborn:sap",
        "1x techreborn:sulfur_dust"
    ])
    //much much easier cable covering
    event.shapeless("ae2:fluix_covered_cable", ["techreborn:rubber", "#ae2:glass_cable"])
    //easier red dye if you're still in premoon and want crimsite
    event.recipes.createMixing({fluid: "kubejs:red_paste", amount: 300 * mB}, ["7x minecraft:sweet_berries", {fluid: "minecraft:water", amount: 500 * mB}])
    event.custom({
        type:"tconstruct:casting_table",
        fluid: {
            name: "kubejs:red_paste",
            amount: 100 * mB
        },
        result: "minecraft:red_dye",
        cooling_time: 100
    })
    //infinite dirt premoon
    event.recipes.createMixing("4x minecraft:coarse_dirt", [
        "2x minecraft:dirt",
        "2x minecraft:gravel"
    ])
})