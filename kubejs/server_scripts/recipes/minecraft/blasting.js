onEvent("recipes", (event) => {
    [
        // [Input string, Output string, XP value]
        ["createastral:andesite_compound", "create:andesite_alloy"],
        ["tconstruct:seared_basin", "tconstruct:scorched_basin"],
        ["tconstruct:seared_table", "tconstruct:scorched_table"],
    ].forEach((recipe) => {
        event.blasting(recipe[1], recipe[0]).xp(recipe[2] ?? 0.0);
    });
});
