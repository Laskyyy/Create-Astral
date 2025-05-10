onEvent("recipes", (event) => {
    // [input, [output item, {output fluid}]]

    [
        [
            "techreborn:water_coolant_cell_60k",
            ["6x techreborn:cell", { fluid: "kubejs:released_water_coolant", amount: BUCKET }],
        ],
    ].forEach((recipe) => {
        event.recipes.createEmptying(recipe[1], recipe[0]);
    });
});
