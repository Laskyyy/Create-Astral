onEvent("recipes", (event) => {
    // [Input string, Output string]
    [
        ["createastral:marimo", "minecraft:seagrass"],
        ["createastral:moonset_marimo", "minecraft:warped_roots"],
        ["createastral:snowy_marimo", "minecraft:snowball"],
        ["createastral:ender_marimo", "astraladditions:ender_sprouts"],
        ["minecraft:moss_block", "2x minecraft:moss_carpet"],
        ["minecraft:moss_carpet", "2x createastral:marimo"],
        ["techreborn:rubber_log", "techreborn:rubber_log_stripped"],
        ["techreborn:rubber_log", ["farmersdelight:tree_bark", "techreborn:rubber_log_stripped"]],
        ["techreborn:rubber_wood", "techreborn:stripped_rubber_wood"],
        ["techreborn:rubber_wood", ["farmersdelight:tree_bark", "techreborn:stripped_rubber_wood"]],
        ["techreborn:rubber_log_stripped", "6x techreborn:rubber_planks"],
        ["vinery:cherry_log", "vinery:stripped_cherry_log"],
        ["vinery:stripped_cherry_log", "6x vinery:cherry_planks"],
        ["vinery:old_cherry_log", "vinery:stripped_old_cherry_log"],
        ["vinery:stripped_old_cherry_log", "6x vinery:cherry_planks"],
        ["vinery:cherry_wood", "vinery:stripped_cherry_wood"],
        ["vinery:old_cherry_wood", "vinery:stripped_old_cherry_wood"],
        ["ad_astra:glacian_log", "ad_astra:stripped_glacian_log"],
        ["ad_astra:stripped_glacian_log", "6x ad_astra:glacian_planks"],
        ["create:track", "railways:track_acacia"],
        ["create:track", "railways:track_birch"],
        ["create:track", "railways:track_crimson"],
        ["create:track", "railways:track_dark_oak"],
        ["create:track", "railways:track_jungle"],
        ["create:track", "railways:track_oak"],
        ["create:track", "railways:track_spruce"],
        ["create:track", "railways:track_warped"],
        ["create:track", "railways:track_blackstone"],
        ["create:track", "railways:track_ender"],
        ["create:track", "railways:track_tieless"],
        ["create:track", "railways:track_phantom"],
        ["create:track", "railways:track_monorail"],
        ["minecraft:rabbit", "minecraft:rabbit_foot"],
        ["minecraft:bone_block", "minecraft:skeleton_skull"],
    ].forEach((recipe) => {
        event.recipes.createCutting(recipe[1], recipe[0]);
    });

    // Konsola's Auto Chipped script

    /* [
        "chipped:alchemy_bench",
        "chipped:botanist_workbench",
        "chipped:carpenters_table",
        "chipped:glassblower",
        "chipped:loom_table",
        "chipped:mason_table",
        "chipped:tinkering_table",
    ].forEach((table) => {
        event.forEachRecipe({ type: table }, (recipe) => {
            const tags = JSON.parse(recipe.json.toString()).tags;
            tags.forEach((tag) => {
                Ingredient.of(`#${tag}`)
                    .getStacks()
                    .forEach((item) => {
                        event.recipes.createCutting(item.id, tag);
                    });
            });
        });
    }); */

    // RandomUser240306's farmerscompat.js script
    event.forEachRecipe({ type: "farmersdelight:cutting" }, (recipe) => {
        let newList = Utils.newList();
        recipe.json.get("result").forEach((e) => newList.push(e));
        newList.reverse(); //prevents conflicts with existing cutting recipes (e.g. log stripping)
        event.custom({
            type: "create:cutting",
            ingredients: recipe.json.get("ingredients"),
            results: newList,
            processingItem: 50,
        });
    });
});
