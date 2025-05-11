(function yttrCentrifugingRecipes() {
  onEvent("recipes", (event) => {
    const centrifugingRecipes = [
      {
        input: { item: "minecraft:coal", count: 16 },
        output: [
          { item: "yttr:ultrapure_carbon", count: 2 },
          { item: "minecraft:black_dye", count: 4 },
          { item: "techreborn:coal_dust", count: 2 },
          { item: "yttr:ash", count: 1 },
        ],
        time: 300,
      },
      {
        input: { item: "minecraft:end_stone", count: 16, "yttr:no_substitution": true },
        output: [
          { item: "ae2:ender_dust", count: 1 },
          { item: "yttr:yttrium_dust", count: 2 },
        ],
        time: 200,
      },
      {
        input: { item: "astraladditions:enderrack", count: 16, "yttr:no_substitution": true },
        output: [
          { item: "tconstruct:ender_slime_ball", count: 1 },
          { item: "tconstruct:ender_slime_crystal", count: 1 },
          { item: "yttr:neodymium_dust", count: 2 },
        ],
        time: 200,
      },
      {
        input: { item: "minecraft:magma_cream", count: 8, "yttr:no_substitution": true },
        output: [
          { item: "minecraft:slime_ball", count: 8 },
          { item: "minecraft:blaze_powder", count: 6 },
        ],
        time: 400,
      },
      {
        input: { item: "createastral:crushed_raw_gadolinite" },
        output: [
          { item: "yttr:iron_dust", count: 2 },
          { item: "yttr:neodymium_dust", count: 1 },
          { item: "yttr:yttrium_dust" },
        ],
        time: 200,
      },
      {
        input: { item: "minecraft:gold_ingot", count: 8, "yttr:no_substitution": true },
        output: [
          { item: "yttr:ultrapure_gold", count: 2 },
          { item: "tconstruct:pig_iron_nugget", count: 1 },
          { item: "techreborn:andesite_dust", count: 1 },
        ],
        time: 600,
      },
      {
        input: { item: "minecraft:netherite_scrap", count: 8, "yttr:no_substitution": true },
        output: [
          { item: "yttr:ultrapure_wolfram", count: 2 },
          { item: "yttr:rubble", count: 1 },
          { item: "minecraft:netherrack", count: 1 },
          { item: "techreborn:netherrack_dust", count: 2 },
        ],
        time: 800,
      },
    ];
    centrifugingRecipes.forEach((recipe) => {
      event.custom({
        type: "yttr:centrifuging",
        time: recipe.time,
        ingredient: recipe.input,
        results: recipe.output,
      });
    });
  });
})();
