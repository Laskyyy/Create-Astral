onEvent("recipes", (event) => {
    /// Manual-only recipes (cannot be automated with create mixers)
    //? [[Input string], Output string, Recipe ID]
    [
        [["minecraft:magma_block", "minecraft:water_bucket"], "minecraft:obsidian", "washing_obsidian"],
        [["minecraft:cobblestone"], "1x techreborn:andesite_dust", "andesite_dust"],
    ].forEach((recipe) => {
        event.shapeless(recipe[1], recipe[0]).id(`createastral:${recipe[2]}_manual_only`);
    });

    ////==================================////

    /// Non-manual-only recipes (can be automated with create mixers)
    //? [[Input string], Output string]

    [
        [["techreborn:rubber", "#ae2:glass_cable"], "ae2:fluix_covered_cable"],
        [["1x minecraft:diorite", "3x minecraft:sand"], "minecraft:granite"],
        [["vinery:red_grape"], "1x vinery:red_grape_seeds"],
        [["vinery:white_grape"], "1x vinery:white_grape_seeds"],
        [["1x minecraft:diorite", "4x minecraft:flint"], "minecraft:andesite"],
        [["minecraft:cobblestone", "3x minecraft:quartz"], "minecraft:diorite"],
        [
            ["computercraft:turtle_normal", "minecraft:iron_pickaxe", "3x minecraft:diamond"],
            Item.of("computercraft:turtle_normal", {
                RightUpgrade: "minecraft:diamond_pickaxe",
            }),
        ],
        [
            ["computercraft:turtle_normal", "minecraft:iron_axe", "3x minecraft:diamond"],
            Item.of("computercraft:turtle_normal", {
                RightUpgrade: "minecraft:diamond_axe",
            }),
        ],
        [
            ["computercraft:turtle_normal", "minecraft:iron_shovel", "minecraft:diamond"],
            Item.of("computercraft:turtle_normal", {
                RightUpgrade: "minecraft:diamond_shovel",
            }),
        ],
        [
            ["computercraft:turtle_normal", "minecraft:iron_hoe", "2x minecraft:diamond"],
            Item.of("computercraft:turtle_normal", {
                RightUpgrade: "minecraft:diamond_hoe",
            }),
        ],
        [
            ["computercraft:turtle_normal", "minecraft:iron_sword", "2x minecraft:diamond"],
            Item.of("computercraft:turtle_normal", {
                RightUpgrade: "minecraft:diamond_sword",
            }),
        ],
        [["create:track"], Item.of("dbe:track_end")],
        [["ae2:sky_stone_block"], "ad_astra:sky_stone"],
        [["minecraft:gravel"], "2x techreborn:andesite_dust"],
        [["createastral:sturdy_sheet_block"], "4x create:sturdy_sheet"],
        [["createastral:bronze_block"], "9x createastral:bronze_ingot"],
        [["ad_astra:steel_block"], "9x ad_astra:steel_ingot"],
        [["createastral:refined_radiance_block"], "9x create:refined_radiance"],
        [["2x #c:slimeballs", "2x techreborn:sponge_piece"], "3x createastral:synthetic_slime"],
        [["1x ad_astra:moon_stone", "1x astraladditions:moonset_crystal"], "1x createastral:moonset_stone"],
        [["ad_astra:fuel_bucket"], "techreborn:nitro_diesel_bucket"],
        [["ad_astra:oil_bucket"], "techreborn:oil_bucket"],
        [["#c:plates/iron", "create:fluid_pipe"], "create:fluid_valve"],
        [["createbigcannons:steel_scrap"], "ad_astra:steel_nugget"],
        [["createbigcannons:bronze_scrap"], "techreborn:bronze_nugget"],
        [["createbigcannons:nethersteel_nugget"], "ad_astra:ostrum_nugget"],
        [["9x techreborn:bronze_nugget"], "createastral:bronze_ingot"],
        [["createastral:bronze_ingot"], "9x techreborn:bronze_nugget"],
        [["minecraft:wither_skeleton_skull"], "4x minecraft:wither_rose"],
        [["astralfoods:fried_cod", "astralfoods:blaze_fries"], "astralfoods:blaze_fries_and_cod"],
        [["create:dough", "minecraft:cyan_dye"], "tconstruct:sky_slime_ball"],
    ].forEach((recipe) => {
        event.shapeless(recipe[1], recipe[0]);
    });

    // Put recipes that require special conditions here, e.g. returning empty buckets
    event
        .shapeless("3x minecraft:paper", [
            "techreborn:saw_dust",
            "techreborn:saw_dust",
            "techreborn:saw_dust",
            "minecraft:water_bucket",
        ])
        .replaceIngredient("minecraft:water_bucket", "minecraft:bucket")
        .id("techreborn:crafting_table/paper_manual_only");

    event
        .shapeless("minecraft:dripstone_block", ["minecraft:calcite", "minecraft:water_bucket"])
        .replaceIngredient("minecraft:water_bucket", "minecraft:bucket")
        .id("techreborn:crafting_table/paper_manual_only");
});
