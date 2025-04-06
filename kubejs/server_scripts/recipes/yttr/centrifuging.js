onEvent("recipes", (event) => {
    [
        {
            input: {
                item: "minecraft:coal",
                count: 16,
            },
            output: [
                {
                    item: "yttr:ultrapure_carbon",
                    count: 2,
                },
                {
                    item: "minecraft:black_dye",
                    count: 4,
                },
                {
                    item: "techreborn:coal_dust",
                    count: 2,
                },
                {
                    item: "yttr:ash",
                    count: 1,
                },
            ],
            time: 300,
        },
    ].forEach((recipe) => {
        event.custom({
            type: "yttr:centrifuging",
            time: recipe.time,
            ingredient: recipe.input,
            results: recipe.output,
        });
    });
});
