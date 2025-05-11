(function createPressingRecipes() {
  onEvent("recipes", (event) => {
    const pressingRecipes = [
      {
        input: "createastral:shimmer_marimo",
        output: "ae2:fluix_dust",
      },
      { input: "createastral:moonset_marimo", output: Item.of("ae2:ender_dust").withChance(0.1) },
      {
        input: "createastral:marimo",
        output: "minecraft:vine",
      },
      {
        input: "minecraft:sea_pickle",
        output: Item.of("minecraft:glow_lichen", 4),
      },
      {
        input: "yttr:haemopal",
        output: Item.of("createastral:ultramatter", 5),
      },
      {
        input: "minecraft:lapis_block",
        output: "create:lapis_sheet",
      },
      {
        input: "tconstruct:greenheart_log",
        output: Item.of("minecraft:green_dye", 2),
      },
      {
        input: "tconstruct:skyroot_log",
        output: Item.of("minecraft:blue_dye", 2),
      },
      {
        input: "createastral:pure_star_shard",
        output: "minecraft:nether_star",
      },
      {
        input: "minecraft:cobblestone",
        output: "techreborn:andesite_dust",
      },
      {
        input: "yttr:delicace",
        output: "createastral:ender_plating",
      },
      {
        input: "createastral:gold_casted_rocket_fin",
        output: ["ad_astra:rocket_fin", "create:golden_sheet"],
      },
      {
        input: "#minecraft:planks",
        output: "techreborn:wood_plate",
      },
    ];
    pressingRecipes.forEach((recipe) => {
      event.recipes.createPressing(recipe.output, recipe.input);
    });
    global.MATERIALS.forEach((material) => {
      if (material.useMechPress) {
        event.recipes.createPressing(material.plate, material.ingot);
      }
    });
  });
})();
