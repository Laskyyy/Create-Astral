onEvent("recipes", (event) => {
    [
        {
            output: "createastral:cheesier_block",
            basin_input: "ad_astra:cheese_block",
            deployer_input: "ad_astra:cheese",
        },
        {
            output: "minecraft:redstone_torch",
            basin_input: "minecraft:torch",
            deployer_input: "minecraft:redstone",
        },
        {
            output: "dbe:vanta_black",
            basin_input: "minecraft:stone",
            deployer_input: "minecraft:black_dye",
        },
        {
            output: "explorerscompass:explorerscompass",
            basin_input: "minecraft:compass",
            deployer_input: "phonos:redstone_chip",
        },
        {
            output: "astraladditions:oh-no",
            basin_input: "astraladditions:moonblazed_orb",
            deployer_input: "astraladditions:orbital_navigation_ring",
        },
        {
            output: "farmersdelight:raw_pasta",
            basin_input: ["farmersdelight:wheat_dough", "create:dough"],
            deployer_input: [
                "farmersdelight:flint_knife",
                "farmersdelight:iron_knife",
                "farmersdelight:golden_knife",
                "farmersdelight:diamond_knife",
                "farmersdelight:netherite_knife",
            ],
        },
        {
            output: "createastral:contained_end",
            basin_input: "createastral:sturdy_cage",
            deployer_input: "yttr:haemopal",
        },
        {
            output: "minecraft:sea_pickle",
            basin_input: "minecraft:torch",
            deployer_input: "createastral:marimo",
        },
        {
            output: "create:blaze_burner",
            basin_input: "create:empty_blaze_burner",
            deployer_input: "tconstruct:blaze_head",
        },
    ].forEach((recipe) => {
        event.recipes.create.deploying([recipe.output], [recipe.basin_input, recipe.deployer_input]);
    });
});
