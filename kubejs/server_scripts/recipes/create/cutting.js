(function createCuttingRecipes() {
  onEvent("recipes", (event) => {
    autoChipped(event);
    farmersCompatCutting(event);

    /**
     * @typedef CuttingRecipe
     * @property {Internal.IngredientJS_} input
     * @property {Internal.IngredientJS_} output
     */

    /** @type {CuttingRecipe[]} */
    const cuttingRecipes = [
      {
        input: "createastral:marimo",
        output: "minecraft:seagrass",
      },
      {
        input: "createastral:moonset_marimo",
        output: "minecraft:warped_roots",
      },
      {
        input: "createastral:snowy_marimo",
        output: "minecraft:snowball",
      },
      {
        input: "createastral:ender_marimo",
        output: "astraladditions:ender_sprouts",
      },
      {
        input: "minecraft:moss_block",
        output: Item.of("minecraft:moss_carpet", 2),
      },
      {
        input: "minecraft:moss_carpet",
        output: Item.of("createastral:marimo", 2),
      },
      {
        input: "techreborn:rubber_log",
        output: "techreborn:rubber_log_stripped",
      },
      {
        input: "techreborn:rubber_log",
        output: ["farmersdelight:tree_bark", "techreborn:rubber_log_stripped"],
      },
      {
        input: "techreborn:rubber_wood",
        output: "techreborn:stripped_rubber_wood",
      },
      {
        input: "techreborn:rubber_wood",
        output: ["farmersdelight:tree_bark", "techreborn:stripped_rubber_wood"],
      },
      {
        input: "techreborn:rubber_log_stripped",
        output: Item.of("techreborn:rubber_planks", 6),
      },
      {
        input: "vinery:cherry_log",
        output: "vinery:stripped_cherry_log",
      },
      {
        input: "vinery:stripped_cherry_log",
        output: Item.of("vinery:cherry_planks", 6),
      },
      {
        input: "vinery:old_cherry_log",
        output: "vinery:stripped_old_cherry_log",
      },
      {
        input: "vinery:stripped_old_cherry_log",
        output: Item.of("vinery:cherry_planks", 6),
      },
      {
        input: "vinery:cherry_wood",
        output: "vinery:stripped_cherry_wood",
      },
      {
        input: "vinery:old_cherry_wood",
        output: "vinery:stripped_old_cherry_wood",
      },
      {
        input: "ad_astra:glacian_log",
        output: "ad_astra:stripped_glacian_log",
      },
      {
        input: "ad_astra:stripped_glacian_log",
        output: Item.of("ad_astra:glacian_planks", 6),
      },
      {
        input: "create:track",
        output: "railways:track_acacia",
      },
      {
        input: "create:track",
        output: "railways:track_birch",
      },
      {
        input: "create:track",
        output: "railways:track_crimson",
      },
      {
        input: "create:track",
        output: "railways:track_dark_oak",
      },
      {
        input: "create:track",
        output: "railways:track_jungle",
      },
      {
        input: "create:track",
        output: "railways:track_oak",
      },
      {
        input: "create:track",
        output: "railways:track_spruce",
      },
      {
        input: "create:track",
        output: "railways:track_warped",
      },
      {
        input: "create:track",
        output: "railways:track_blackstone",
      },
      {
        input: "create:track",
        output: "railways:track_ender",
      },
      {
        input: "create:track",
        output: "railways:track_tieless",
      },
      {
        input: "create:track",
        output: "railways:track_phantom",
      },
      {
        input: "create:track",
        output: "railways:track_monorail",
      },
      {
        input: "minecraft:rabbit",
        output: "minecraft:rabbit_foot",
      },
      {
        input: "minecraft:bone_block",
        output: "minecraft:skeleton_skull",
      },
      {
        input: "#minecraft:planks",
        output: "techreborn:wood_plate",
      },
      {
        input: "minecraft:oak_planks",
        output: Item.of("minecraft:oak_slab", 2),
      },
      {
        input: "minecraft:spruce_planks",
        output: Item.of("minecraft:spruce_slab", 2),
      },
      {
        input: "minecraft:birch_planks",
        output: Item.of("minecraft:birch_slab", 2),
      },
      {
        input: "minecraft:jungle_planks",
        output: Item.of("minecraft:jungle_slab", 2),
      },
      {
        input: "minecraft:acacia_planks",
        output: Item.of("minecraft:acacia_slab", 2),
      },
      {
        input: "minecraft:dark_oak_planks",
        output: Item.of("minecraft:dark_oak_slab", 2),
      },
      {
        input: "minecraft:warped_planks",
        output: Item.of("minecraft:warped_slab", 2),
      },
      {
        input: "minecraft:crimson_planks",
        output: Item.of("minecraft:crimson_slab", 2),
      },
      {
        input: "techreborn:rubber_planks",
        output: Item.of("techreborn:rubber_plank_slab", 2),
      },
      {
        input: "tconstruct:greenheart_planks",
        output: Item.of("tconstruct:greenheart_planks_slab", 2),
      },
      {
        input: "tconstruct:skyroot_planks",
        output: Item.of("tconstruct:skyroot_planks_slab", 2),
      },
      {
        input: "tconstruct:bloodshroom_planks",
        output: Item.of("tconstruct:bloodshroom_planks_slab", 2),
      },
      {
        input: "vinery:cherry_planks",
        output: Item.of("vinery:cherry_slab", 2),
      },
    ];
    cuttingRecipes.forEach((recipe) => {
      event.recipes.createCutting(recipe.output, recipe.input);
    });
  });
  /**
   * Automated Chipped tables via Mechanical Saw.
   * @author KonSola5
   * @param {Internal.RecipeEventJS} event
   */
  function autoChipped(event) {
    /** @satisfies {Special.RecipeSerializer[]} */
    const CHIPPED_TABLES = /** @type {const} */ ([
      "chipped:alchemy_bench",
      "chipped:botanist_workbench",
      "chipped:carpenters_table",
      "chipped:glassblower",
      "chipped:loom_table",
      "chipped:mason_table",
      /** @type {Special.RecipeSerializer}*/ ("chipped:tinkering_table"),
    ]);
    CHIPPED_TABLES.forEach((table) => {
      event.forEachRecipe({ type: table }, (recipe) => {
        /** @type {Special.ItemTag[]} */
        const tags = JSON.parse(recipe.json.toString()).tags;
        tags.forEach((itemTag) => {
          Ingredient.of(`#${itemTag}`)
            .getStacks()
            .forEach((item) => {
              event.custom({
                type: "create:cutting",
                ingredients: [{ tag: itemTag }],
                results: [{ item: item.id }],
              });
            });
        });
      });
    });
  }
  /**
   * @author RandomUser240306
   * @param {Internal.RecipeEventJS} event
   */
  function farmersCompatCutting(event) {
    event.forEachRecipe({ type: "farmersdelight:cutting" }, (recipe) => {
      let newList = Utils.newList();
      recipe.json.get("result").asJsonArray.forEach((e) => newList.push(e));
      newList.reverse(); //prevents conflicts with existing cutting recipes (e.g. log stripping)
      event.custom({
        type: "create:cutting",
        ingredients: recipe.json.get("ingredients"),
        results: newList,
        processingItem: 50,
      });
    });
  }
})();
