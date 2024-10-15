onEvent("recipes", event => {
    //add a use for ashes, making tuff much more relevant if you can spare the power
    event.custom({
        "type":"createaddition:charging",
        "input": {
            "item": "minecraft:tuff",
            "count": 1
        },
        "result": {
            "item": "techreborn:ashes",
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
        "techreborn:ashes"
    ])
    //allow for a smaller tree farm if you have sulfur to spare
    event.recipes.createMixing("8x techreborn:rubber", [
        "3x techreborn:sap",
        "1x techreborn:sulfur_dust"
    ])
    //much much easier cable covering
    event.shapeless("appliedenergistics2:me_covered_cable", ["techreborn:rubber", "appliedenergistics2:fluix_cable"])
    //easier red dye if you're still in premoon and want crimsite
    event.recipes.createMixing("3x minecraft:red_dye", ["7x minecraft:sweet_berries", {fluid: "minecraft:water", amount: 500 * mB}])
})