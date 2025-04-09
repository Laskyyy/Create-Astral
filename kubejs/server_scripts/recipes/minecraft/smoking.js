onEvent("recipes", (event) => {
    [
        // [Input string, Output string, XP value]
        ["campanion:marshmallow", "campanion:cooked_marshmallow"],
        ["campanion:cooked_marshmallow", "campanion:blackened_marshmallow"],
    ].forEach((recipe) => {
        event.smoking(recipe[1], recipe[0]).xp(recipe[2] ?? 0.0);
    });
});
