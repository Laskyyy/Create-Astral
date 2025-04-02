onEvent("recipes", (event) => {
    let knivesTag = "c:tools/knives";
    event.forEachRecipe({ type: "farmersdelight:cutting", tool: { tag: knivesTag } }, (recipe) => {
        let { originalRecipeIngredients, originalRecipeResult } = recipe;
        event.recipes.create.deploying([originalRecipeResult], [originalRecipeIngredients, `#${knivesTag}`]);
    });
});
