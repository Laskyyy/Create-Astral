onEvent("recipes", (event) => {
    // [Input string, Output string]
    [
        ["createastral:shimmer_marimo", "ae2:fluix_dust"],
        ["createastral:moonset_marimo", Item.of("ae2:ender_dust").withChance(0.1)],
        ["createastral:marimo", "minecraft:vine"],
        ["minecraft:sea_pickle", "4x minecraft:glow_lichen"],
        ["yttr:haemopal", "5x createastral:ultramatter"],
        ["minecraft:lapis_block", "create:lapis_sheet"],
        ["tconstruct:greenheart_log", "2x minecraft:green_dye"],
        ["tconstruct:skyroot_log", "2x minecraft:blue_dye"],
        ["createastral:pure_star_shard", "minecraft:nether_star"],
        ["minecraft:cobblestone", "techreborn:andesite_dust"],
        ["yttr:delicace", "createastral:ender_plating"],
        ["createastral:gold_casted_rocket_fin", ["ad_astra:rocket_fin", "create:golden_sheet"]],
    ].forEach((recipe) => {
        event.recipes.createPressing(recipe[1], recipe[0]);
    });
});
