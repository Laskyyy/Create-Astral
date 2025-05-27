(function farmersDelightCuttingRecipes() {
  onEvent("recipes", (event) => {
    /**
     * @typedef FarmersDelightCuttingRecipe
     * @property {Special.Item} input
     * @property {Special.ItemTag} tool
     * @property {{ item: Special.Item; count?: number }[]} result
     * @property {Special.SoundEvent} [sound]
     */

    /** @type {FarmersDelightCuttingRecipe[]} */
    const farmersDelightCuttingRecipes = [
      {
        input: "techreborn:rubber_log",
        tool: "c:tools/axes",
        result: [{ item: "techreborn:rubber_log_stripped" }, { item: "farmersdelight:tree_bark" }],
      },
      {
        input: "ad_astra:glacian_log",
        tool: "c:tools/axes",
        result: [{ item: "ad_astra:stripped_glacian_log" }, { item: "farmersdelight:tree_bark" }],
      },
      {
        input: "tconstruct:bloodshroom_log",
        tool: "c:tools/axes",
        result: [{ item: "tconstruct:stripped_bloodshroom_log" }, { item: "farmersdelight:tree_bark" }],
      },
      {
        input: "tconstruct:greenheart_log",
        tool: "c:tools/axes",
        result: [{ item: "tconstruct:stripped_greenheart_log" }, { item: "farmersdelight:tree_bark" }],
      },
      {
        input: "tconstruct:skyroot_log",
        tool: "c:tools/axes",
        result: [{ item: "tconstruct:stripped_skyroot_log" }, { item: "farmersdelight:tree_bark" }],
      },
      {
        input: "ae2:singularity",
        tool: "c:tools/knives",
        result: [{ item: "astralfoods:quantum_bites", count: 3 }],
      },
      {
        input: "vinery:cherry_log",
        tool: "c:tools/axes",
        result: [{ item: "vinery:stripped_cherry_log" }, { item: "farmersdelight:tree_bark" }],
      },
      {
        input: "vinery:old_cherry_log",
        tool: "c:tools/axes",
        result: [{ item: "vinery:stripped_old_cherry_log" }, { item: "farmersdelight:tree_bark" }],
      },
      {
        input: "minecraft:gravel",
        tool: "c:shovels",
        result: [{ item: "minecraft:flint" }],
      },
      {
        input: "farmersdelight:wild_rice",
        tool: "c:tools/knives",
        result: [{ item: "farmersdelight:rice" }, { item: "farmersdelight:straw" }],
      },
      {
        input: "minecraft:blaze_rod",
        tool: "c:tools/knives",
        result: [{ item: "astralfoods:blaze_rods", count: 2 }],
      },
    ];
    farmersDelightCuttingRecipes.forEach((recipe) => {
      event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: recipe.input }],
        tool: {
          type: "farmersdelight:tool",
          tag: recipe.tool,
        },
        result: recipe.result,
        sound: recipe.sound ?? "minecraft:item.axe.strip",
      });
    });
  });
})();
