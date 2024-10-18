onEvent("recipes", (event) => {
    /// Array format: [flower, dye color]
    [
        ["minecraft:dandelion", "minecraft:yellow_dye"],
        ["minecraft:poppy", "minecraft:red_dye"],
        ["minecraft:blue_orchid", "minecraft:light_blue_dye"],
        ["minecraft:allium", "minecraft:magenta_dye"],
        ["minecraft:azure_bluet", "minecraft:light_gray_dye"],
        ["minecraft:red_tulip", "minecraft:red_dye"],
        ["minecraft:orange_tulip", "minecraft:orange_dye"],
        ["minecraft:white_tulip", "minecraft:white_dye"],
        ["minecraft:pink_tulip", "minecraft:pink_dye"],
        ["minecraft:oxeye_daisy", "minecraft:light_gray_dye"],
        ["minecraft:cornflower", "minecraft:blue_dye"],
        ["minecraft:lily_of_the_valley", "minecraft:white_dye"],
    ].forEach((recipe) => {
        event.recipes.createMixing(recipe[0], [
            recipe[1],
            "minecraft:dead_bush",
            "create:tree_fertilizer",
            {fluid: "kubejs:shimmer", amount: INGOT},
        ]).processingTime(50);
    });

    /// Array format: [2 tall flower, 1 tall flower]
    [
        ["minecraft:sunflower", "minecraft:dandelion"],
        ["minecraft:lilac", "minecraft:allium"],
        ["minecraft:rose_bush", "minecraft:poppy"],
        ["minecraft:peony", "minecraft:pink_tulip"],
        ["farmersdelight:wild_cabbages", "farmersdelight:cabbage"],
        ["farmersdelight:wild_onions", "farmersdelight:onion"],
        ["farmersdelight:wild_tomatoes", "farmersdelight:tomato"],
        ["farmersdelight:wild_carrots", "minecraft:carrot"],
        ["farmersdelight:wild_potatoes", "minecraft:potato"],
        ["farmersdelight:wild_beetroots", "minecraft:beetroot"],
        ["farmersdelight:wild_rice", "farmersdelight:rice"],
    ].forEach((recipe) => {
        event.recipes.createMixing(recipe[0], [
            "2x " + recipe[1],
            "2x create:tree_fertilizer",
            {fluid: "kubejs:shimmer", amount: 2 * INGOT},
        ]).processingTime(50);
    });
});