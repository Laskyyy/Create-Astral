

onEvent("server.datapack.first", (event) => {
    const recipes = [
        {
            time: 20,
            input: {
                "type": "custommachinery:fluid",
                "fluid": "minecraft:lava",
                "amount": 8100,
            },
            output: {
                "type": "custommachinery:fluid",
                "fluid": "ad_astra:oxygen",
                "amount": 860,
            }
        }
    ]

    var recipeCounter=0;
    recipes.forEach((recipe) => {
        let recipe_json = `{
            "type": "custommachinery:custom_machine",
            "machine": "createastral:electrolyser",
            "time": ${recipe.time},
            "requirements": [
                ${structureCustomElectrolyser},
                {
                    "type": ${recipe.input.type},
                    "fluid": ${recipe.input.fluid},
                    "amount": ${recipe.input.amount},
                    "mode": "input"
                },
                {
                    "type": ${recipe.output.type},
                    "fluid": ${recipe.output.fluid},
                    "amount": ${recipe.output.amount},
                    "mode": "output"
            }`;

        event.addJson(`cm_elcetrolyser_${recipeCounter}`, recipe_json);
        recipeCounter+=1;
    });
});
