onEvent("recipes", (event) => {
    tagRecipes(event);
    itemRecipes(event);
});

// Recipes for item tags

function tagRecipes(event) {
    [
        {
            input: "c:nuggets/gold",
            output: "createastral:golden_pin",
            count: 1,
        },
    ].forEach((recipe) => {
        event.custom({
            type: "createaddition:rolling",
            input: {
                tag: recipe.tag,
            },
            result: {
                item: recipe.output,
                count: recipe.count,
            },
        });
    });
}

// Recipes for single item types

function itemRecipes(event) {
    [
        {
            input: "c:nuggets/gold",
            output: "createastral:golden_pin",
            count: 1,
        },
    ].forEach((recipe) => {
        event.custom({
            type: "createaddition:rolling",
            input: {
                tag: recipe.tag,
            },
            result: {
                item: recipe.output,
                count: recipe.count,
            },
        });
    });
}
