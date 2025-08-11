(function shapelessRecipes() {
  onEvent("recipes", (event) => {
    /**
     * @typedef ManualOnlyRecipe
     * @property {Internal.IngredientJS_[]} input
     * @property {Internal.IngredientJS_} output
     * @property {string} recipeID
     */

    /**
     * Manual only recipes - can't be automated with Create's Mechanical Mixers.
     * @type {ManualOnlyRecipe[]}
     */
    const manualOnlyRecipes = [
      {
        input: ["minecraft:magma_block", "minecraft:water_bucket"],
        output: "minecraft:obsidian",
        recipeID: "washing_obsidian",
      },
      {
        input: ["minecraft:cobblestone"],
        output: "techreborn:andesite_dust",
        recipeID: "andesite_dust",
      },
    ];
    manualOnlyRecipes.forEach((recipe) => {
      event.shapeless(recipe.output, recipe.input).id(`createastral:${recipe.recipeID}_manual_only`);
    });

    /**
     * @typedef ShapelessRecipe
     * @property {Internal.IngredientJS_[]} input
     * @property {Internal.IngredientJS_} output
     */

    /**
     * General shapeless recipes - those can be automated with Create's Mechanical Mixers.
     * @type {ShapelessRecipe[]}
     */
    const shapelessRecipes = [
      {
        input: ["techreborn:rubber", "#ae2:glass_cable"],
        output: "ae2:fluix_covered_cable",
      },
      {
        input: [Item.of("minecraft:diorite", 1), Item.of("minecraft:sand", 3)],
        output: "minecraft:granite",
      },
      {
        input: ["vinery:red_grape"],
        output: Item.of("vinery:red_grape_seeds", 1),
      },
      {
        input: ["vinery:white_grape"],
        output: Item.of("vinery:white_grape_seeds", 1),
      },
      {
        input: [Item.of("minecraft:diorite", 1), Item.of("minecraft:flint", 4)],
        output: "minecraft:andesite",
      },
      {
        input: ["minecraft:cobblestone", Item.of("minecraft:quartz", 3)],
        output: "minecraft:diorite",
      },
      {
        input: ["computercraft:turtle_normal", "minecraft:iron_pickaxe", Item.of("minecraft:diamond", 3)],
        output: Item.of("computercraft:turtle_normal", {
          RightUpgrade: "minecraft:diamond_pickaxe",
        }),
      },
      {
        input: ["computercraft:turtle_normal", "minecraft:iron_axe", Item.of("minecraft:diamond", 3)],
        output: Item.of("computercraft:turtle_normal", {
          RightUpgrade: "minecraft:diamond_axe",
        }),
      },
      {
        input: ["computercraft:turtle_normal", "minecraft:iron_shovel", "minecraft:diamond"],
        output: Item.of("computercraft:turtle_normal", {
          RightUpgrade: "minecraft:diamond_shovel",
        }),
      },
      {
        input: ["computercraft:turtle_normal", "minecraft:iron_hoe", Item.of("minecraft:diamond", 2)],
        output: Item.of("computercraft:turtle_normal", {
          RightUpgrade: "minecraft:diamond_hoe",
        }),
      },
      {
        input: ["computercraft:turtle_normal", "minecraft:iron_sword", Item.of("minecraft:diamond", 2)],
        output: Item.of("computercraft:turtle_normal", {
          RightUpgrade: "minecraft:diamond_sword",
        }),
      },
      { input: ["create:track"], output: Item.of("dbe:track_end") },
      {
        input: ["ae2:sky_stone_block"],
        output: "ad_astra:sky_stone",
      },
      {
        input: ["minecraft:gravel"],
        output: Item.of("techreborn:andesite_dust", 2),
      },
      {
        input: ["createastral:sturdy_sheet_block"],
        output: Item.of("create:sturdy_sheet", 4),
      },
      {
        input: ["createastral:bronze_block"],
        output: Item.of("createastral:bronze_ingot", 9),
      },
      {
        input: ["ad_astra:steel_block"],
        output: Item.of("ad_astra:steel_ingot", 9),
      },
      {
        input: ["createastral:refined_radiance_block"],
        output: Item.of("create:refined_radiance", 9),
      },
      {
        input: [Ingredient.of("#c:slimeballs", 2), Item.of("techreborn:sponge_piece", 2)],
        output: Item.of("createastral:synthetic_slime", 3),
      },
      {
        input: [Item.of("ad_astra:moon_stone", 1), Item.of("astraladditions:moonset_crystal", 1)],
        output: Item.of("createastral:moonset_stone", 1),
      },
      {
        input: ["ad_astra:fuel_bucket"],
        output: "techreborn:nitro_diesel_bucket",
      },
      {
        input: ["ad_astra:oil_bucket"],
        output: "techreborn:oil_bucket",
      },
      {
        input: ["#c:plates/iron", "create:fluid_pipe"],
        output: "create:fluid_valve",
      },
      {
        input: ["createbigcannons:steel_scrap"],
        output: "ad_astra:steel_nugget",
      },
      {
        input: ["createbigcannons:bronze_scrap"],
        output: "techreborn:bronze_nugget",
      },
      {
        input: ["createbigcannons:nethersteel_nugget"],
        output: "ad_astra:ostrum_nugget",
      },
      {
        input: [Item.of("techreborn:bronze_nugget", 9)],
        output: "createastral:bronze_ingot",
      },
      {
        input: ["createastral:bronze_ingot"],
        output: Item.of("techreborn:bronze_nugget", 9),
      },
      {
        input: ["minecraft:wither_skeleton_skull"],
        output: Item.of("minecraft:wither_rose", 4),
      },
      {
        input: ["astralfoods:fried_cod", "astralfoods:blaze_fries"],
        output: "astralfoods:blaze_fries_and_cod",
      },
      {
        input: ["create:dough", "minecraft:cyan_dye"],
        output: "tconstruct:sky_slime_ball",
      },
      {
        input: [Item.of("minecraft:red_dye", 2), Ingredient.of("#c:glass", 2)],
      },
    ];
    shapelessRecipes.forEach((recipe) => {
      event.shapeless(recipe.output, recipe.input);
    });
    // Put recipes that require special conditions here, e.g. returning empty buckets
    event
      .shapeless(Item.of("minecraft:paper", 3), [
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
      .id("minecraft:crafting_table/dripstone_block_manual_only");
  });
})();
