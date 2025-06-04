(function createDeployingRecipes() {
  onEvent("recipes", (event) => {
    /**
     * @typedef DeployingRecipe
     * @property {Internal.IngredientJS_} output
     * @property {Internal.IngredientJS_} appliedTo
     * @property {Internal.IngredientJS_} deployerInput
     */

    /** @type {DeployingRecipe[]} */
    const deployingRecipes = [
      {
        output: "createastral:cheesier_block",
        appliedTo: "ad_astra:cheese_block",
        deployerInput: "ad_astra:cheese",
      },
      {
        output: "minecraft:redstone_torch",
        appliedTo: "minecraft:torch",
        deployerInput: "minecraft:redstone",
      },
      {
        output: "dbe:vanta_black",
        appliedTo: "minecraft:stone",
        deployerInput: "minecraft:black_dye",
      },
      {
        output: "explorerscompass:explorerscompass",
        appliedTo: "minecraft:compass",
        deployerInput: "phonos:redstone_chip",
      },
      {
        output: "astraladditions:oh-no",
        appliedTo: "astraladditions:moonblazed_orb",
        deployerInput: "astraladditions:orbital_navigation_ring",
      },
      {
        output: "createastral:contained_end",
        appliedTo: "createastral:sturdy_cage",
        deployerInput: "yttr:haemopal",
      },
      {
        output: "minecraft:sea_pickle",
        appliedTo: "minecraft:torch",
        deployerInput: "createastral:marimo",
      },
      {
        output: "create:blaze_burner",
        appliedTo: "create:empty_blaze_burner",
        deployerInput: "tconstruct:blaze_head",
      },
    ];
    deployingRecipes.forEach((recipe) => {
      /** @type {[Internal.IngredientJS_, Internal.IngredientJS_]} */
      const input = [recipe.appliedTo, recipe.deployerInput];
      event.recipes.create.deploying([recipe.output], input);
    });
  });
})();
