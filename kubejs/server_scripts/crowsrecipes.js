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
    event.shapeless("appliedenergistics2:me_covered_cable", ["techreborn:rubber", "appliedenergistics2:fluix_glass_cable"])
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
    //easier glowstone
    //an actual use for glowstone lmao, throwing in a function so I should be able to use int again
    glowstone(event)
    function glowstone(event) {
    let int = "createastral:incomplete_electron_tube"
    event.recipes.createSequencedAssembly("3x create:electron_tube", "create:iron_sheet" [
        event.recipes.createDeploying(int, [int, "minecraft:glowstone"]),
        event.recipes.createFilling(int, [int, {fluid: "tconstruct:rose_gold", amount: 2025}])
    ]).loops(4).transitionalItem(int)
    event.remove({id: "create:filling/glowstone"})
    event.recipes.createFilling("createastral:glowstone_clump", ["createastral:glowstone_catalyst", {fluid: "create:potion", amount: 25 * mB, nbt: {Bottle: REGULAR, Potion: "minecraft:glowing"}}])
    event.recipes.createMixing([
        "createastral:glowstone_catalyst",
        Item.of("minecraft:glowstone_dust").withChance(0.7)
    ], "createastral:glowstone_clump")
    }
    event.shapeless("createastral:glowstone_catalyst", ["SGS", "GGG", "SGS"], {S: "#minecraft:slime_balls", G: "minecraft:glowstone"})
})