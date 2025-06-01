(function astralAdditionsChromaticVacuumRecipes() {
  onEvent("recipes", (event) => {
    /**
     * @typedef ChromaticVacuumRecipe
     * @property {Special.Block} block
     * @property {Special.Item} loot
     * @property {Special.Block} result
     */

    /** @type {ChromaticVacuumRecipe[]} */
    const chromaticVacuumRecipes = [
      {
        block: "yttr:continuous_platform",
        loot: "createastral:prismatic_crystal",
        result: "minecraft:ice",
      },
      {
        block: "minecraft:grass_block",
        loot: "minecraft:green_dye",
        result: "minecraft:dirt",
      },
      {
        block: "yttr:nethertuff",
        loot: "minecraft:netherrack",
        result: "minecraft:tuff",
      },
      {
        block: "createastral:charcoal_block",
        loot: "techreborn:charcoal_dust",
        result: "minecraft:coal_block",
      },
    ];
    chromaticVacuumRecipes.forEach((recipe) => {
      event.custom({
        type: "astraladditions:chromatic_vacuum",
        ingredient: {
          item: recipe.block,
        },
        output: {
          item: recipe.loot,
        },
        remainder: {
          item: recipe.result,
        },
      });
    });
  });
  onEvent("recipes", (event) => {
    // white is the fallback colour extracted blocks resort to so i've excluded it from this to prevent infinite loop of white dye
    const colours = /** @type {const} */ ([
      "orange",
      "magenta",
      "light_blue",
      "yellow",
      "lime",
      "pink",
      "gray",
      "light_gray",
      "cyan",
      "purple",
      "blue",
      "brown",
      "green",
      "red",
      "black",
    ]);
    // wool
    colours.forEach((colour) => {
      event.custom({
        type: "astraladditions:chromatic_vacuum",
        ingredient: {
          tag: `chipped:${colour}_wool`,
        },
        output: {
          item: `minecraft:${colour}_dye`,
        },
        remainder: {
          item: "minecraft:white_wool",
        },
      });
    });
    // terracotta
    colours.forEach((colour) => {
      event.custom({
        type: "astraladditions:chromatic_vacuum",
        ingredient: {
          tag: `chipped:${colour}_terracotta`,
        },
        output: {
          item: `minecraft:${colour}_dye`,
        },
        remainder: {
          item: "minecraft:terracotta",
        },
      });
    });
    // concrete
    colours.forEach((colour) => {
      event.custom({
        type: "astraladditions:chromatic_vacuum",
        ingredient: {
          tag: `chipped:${colour}_concrete`,
        },
        output: {
          item: `minecraft:${colour}_dye`,
        },
        remainder: {
          item: "minecraft:white_concrete",
        },
      });
    });
  });
})();
