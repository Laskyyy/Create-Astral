//for the structure of Elactrolyser, see 'constants.js'

onEvent("recipes", (event) => {

    /**
     * time: the time required for a recipe to finish, in ticks. 
     *  
     * inputs: the input of a recipe. 
     *     Currently, the 'inputs' only accepts a single entry, 
     *     'type' should be fluid, and 'amount' should not be larger than 810000. 
     *  
     * outputs: the product of a recipe. 
     *     Currently, the 'outputs' only accepts a single entry, 
     *     'type' should be fluid, and 'amount' should not be larger than 810000. 
     */
    const recipes = [
        {
            time: 20,
            inputs: {
                type: "custommachinery:fluid",
                mode: "input",
                fluid: "minecraft:lava",
                amount: AMOUNT_PER_MB*100
            },
            outputs: {
                type: "custommachinery:fluid",
                mode: "output",
                fluid: "ad_astra:oxygen",
                amount: AMOUNT_PER_MB*10
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
        event.custom(jsn).id(`createastral:electrolyser_recipe_${recipeCounter}`);
        recipeCounter += 1;
    });
});
