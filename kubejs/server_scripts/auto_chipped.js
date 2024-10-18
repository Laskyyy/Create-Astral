onEvent("recipes", (event) => {
    [
        "chipped:alchemy_bench",
        "chipped:botanist_workbench",
        "chipped:carpenters_table",
        "chipped:glassblower",
        "chipped:loom_table",
        "chipped:mason_table",
        "chipped:tinkering_table",
    ].forEach((table) => {
        event.forEachRecipe({ type: table }, (recipe) => {
            const tags = JSON.parse(recipe.json.toString()).tags;
            tags.forEach((tag) => {
                Ingredient.of(`#${tag}`)
                    .getStacks()
                    .forEach((item) => {
                        event.custom({
                            type: "create:cutting",
                            ingredients: [
                                {
                                    tag: tag,
                                },
                            ],
                            results: [
                                {
                                    item: item.id,
                                },
                            ],
                            processingTime: 20,
                        });
                    });
            });
        });
    });
});
