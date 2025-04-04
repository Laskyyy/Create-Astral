onEvent("recipes", (event) => {
    /// Manual-only recipes (cannot be automated with create mixers)
    //? [[Input string], Output string, Recipe ID]
    [
        [["minecraft:magma_block", "minecraft:water_bucket"], "minecraft:obsidian", "washing_obsidian"],
        [["minecraft:calcite", "minecraft:water_bucket"], "minecraft:dripstone_block", "dripstone_block"],
    ].forEach((recipe) => {
        event.shapeless(recipe[1], recipe[0]).id(`createastral:${recipe[2]}_manual_only`);
    });

    /// Other recipes
    //? [[Input string], Output string]
    [
        [["techreborn:rubber", "#ae2:glass_cable"], "ae2:fluix_covered_cable"],
        [["1x minecraft:diorite", "3x minecraft:sand"], "minecraft:granite"],
        [["vinery:red_grape"], "1x vinery:red_grape_seeds"],
        [["vinery:white_grape"], "1x vinery:white_grape_seeds"],
    ].forEach((recipe) => {
        event.shapeless(recipe[1], recipe[0]);
    });
});
