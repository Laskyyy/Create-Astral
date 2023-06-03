onEvent("recipes", (event) => {
    const recipes = [
        {
            time: 20,
            inputs: {
                type: "custommachinery:fluid",
                mode: "input",
                fluid: "minecraft:lava",
                amount: 8100
            },
            outputs: {
                type: "custommachinery:fluid",
                mode: "output",
                fluid: "ad_astra:oxygen",
                amount: 860
            },
        },
    ];

    var recipeCounter = 0;
    recipes.forEach((recipe) => {
        const jsn = {
            type: "custommachinery:custom_machine",
            machine: "createastral:electrolyser",
            time: recipe.time,
            requirements: [
                structureCustomElectrolyser,
                recipe.inputs,
                recipe.outputs
            ]
        };
        event.custom(jsn).id(`createastral:recipes/electrolyser/recipes_${recipeCounter}`);
        recipeCounter += 1;
    });
});
