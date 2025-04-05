onEvent("recipes", (event) => {
    tagRecipes(event);
    itemRecipes(event);
});

// Recipes for item tags

function tagRecipes(event) {
    [
        {
            tag: "c:nuggets/gold",
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
            input: "ad_astra:calorite_nugget",
            output: "createastral:calorite_pin",
            count: 1,
        },
    ].forEach((recipe) => {
        event.custom({
            type: "createaddition:rolling",
            input: {
                tag: recipe.input,
            },
            result: {
                item: recipe.output,
                count: recipe.count,
            },
        });
    });
}
