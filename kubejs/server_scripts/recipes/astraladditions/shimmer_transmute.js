onEvent("recipes", (event) => {
    [
        // ["item", count]
        {
            input: "tconstruct:earth_slime_grass_seeds",
            output: "tconstruct:ender_slime_grass_seeds",
            stack: true,
        },
        {
            input: "minecraft:sea_lantern",
            output: "minecraft:glowstone",
            stack: true,
        },
        {
            input: "techreborn:lead_ingot",
            output: "minecraft:glowstone",
            stackable: true,
        },
        {
            input: "minecraft:green_dye",
            output: "minecraft:red_dye",
            stackable: true,
        },
        {
            input: "minecraft:red_dye",
            output: "minecraft:green_dye",
            stackable: true,
        },
        {
            input: "minecraft:yellow_dye",
            output: "minecraft:blue_dye",
            stackable: true,
        },
        {
            input: "minecraft:blue_dye",
            output: "minecraft:yellow_dye",
            stackable: true,
        },
        {
            input: "minecraft:green_dye",
            output: "minecraft:red_dye",
            stackable: true,
        },
        {
            input: "minecraft:lily_of_the_valley",
            output: "astraladditions:shimmer_lily",
            stackable: true,
        },
    ].forEach((recipe) => {
        event.custom({
            type: "astraladditions:shimmer_transmute",
            input: {
                item: recipe.input,
                count: 1,
            },
            output: [
                {
                    item: recipe.output,
                    count: 1,
                },
            ],
        });
        if (recipe.stackable) {
            event.custom({
                type: "astraladditions:shimmer_transmute",
                input: {
                    item: recipe.input,
                    count: 64,
                },
                output: [
                    {
                        item: recipe.output,
                        count: 64,
                    },
                ],
            });
        }
    });
});
