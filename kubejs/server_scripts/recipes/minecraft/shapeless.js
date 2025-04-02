onEvent("recipes", (event) => {
    // [Input string, Output string]
    [[["techreborn:rubber", "#ae2:glass_cable"], "ae2:fluix_covered_cable"]].forEach((recipe) => {
        event.shapeless(recipe[1], recipe[0]);
    });
});
