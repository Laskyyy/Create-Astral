(function stoneGrowthChamberRecipes() {
  onEvent("recipes", (event) => {
    const legacyStoneGrowthChamberStructure = /** @type {const} */ ([
      ["aaa", "aaa", "ama"],
      ["ggg", "glg", "ggg"],
      ["aaa", "aaa", "aaa"],
    ]);

    const stoneGrowthChamberStructure = /** @type {const} */ ([
      ["aaa", "aaa", "ama"],
      ["ggg", "gwg", "ggg"],
      ["aaa", "aaa", "aaa"],
    ]);

    /**
     * @typedef StoneGrowthChamberRecipe
     * @property {string} material
     * @property {Special.Item} output
     * @property {Special.Block} blockToReact
     * @property {number} time
     */

    /** @satisfies {StoneGrowthChamberRecipe[]} */
    const stoneGrowthChamberRecipes = /** @type {const} */ ([
      {
        material: "andesite",
        output: "minecraft:andesite",
        blockToReact: "minecraft:water",
        time: 10,
      },
      {
        material: "cobblestone",
        output: "minecraft:cobblestone",
        blockToReact: "minecraft:water",
        time: 10,
      },
      {
        material: "glacio_cobblestone",
        output: "ad_astra:glacio_cobblestone",
        blockToReact: "minecraft:water",
        time: 10,
      },
      {
        material: "mars_cobblestone",
        output: "ad_astra:mars_cobblestone",
        blockToReact: "minecraft:water",
        time: 10,
      },
      {
        material: "mercury_cobblestone",
        output: "ad_astra:mercury_cobblestone",
        blockToReact: "minecraft:water",
        time: 10,
      },
      {
        material: "moon_cobblestone",
        output: "ad_astra:moon_cobblestone",
        blockToReact: "minecraft:water",
        time: 10,
      },
      {
        material: "venus_cobblestone",
        output: "ad_astra:venus_cobblestone",
        blockToReact: "minecraft:water",
        time: 10,
      },
    ]);

    /** @satisfies {StoneGrowthChamberRecipe[]} */
    const newStoneGrowthChamberRecipes = /** @type {const} */ ([
      {
        material: "limestone",
        output: "create:limestone",
        blockToReact: "create:honey",
        time: 10,
      },
      {
        material: "scoria",
        output: "create:scoria",
        blockToReact: "create:chocolate",
        time: 10,
      },
      {
        material: "basalt",
        output: "minecraft:basalt",
        blockToReact: "minecraft:blue_ice",
        time: 10,
      },
    ]);
    stoneGrowthChamberRecipes.forEach((recipe) => {
      event.custom({
        type: "custommachinery:custom_machine",
        machine: "createastral:stone_growth_chamber",
        time: recipe.time,
        requirements: [
          {
            type: "custommachinery:structure",
            keys: {
              a: `createastral:stone_growth_chamber/building_blocks/${recipe.material}`,
              l: "minecraft:lava",
              g: "createastral:stone_growth_chamber/glass_blocks",
            },
            pattern: legacyStoneGrowthChamberStructure,
          },
          {
            type: "custommachinery:item",
            item: recipe.output,
            amount: 1,
            mode: "output",
          },
        ],
      });
      event.custom({
        type: "custommachinery:custom_machine",
        machine: "createastral:stone_growth_chamber",
        time: recipe.time,
        requirements: [
          {
            type: "custommachinery:structure",
            keys: {
              a: `createastral:stone_growth_chamber/building_blocks/${recipe.material}`,
              w: recipe.blockToReact,
              g: "createastral:stone_growth_chamber/glass_blocks",
            },
            pattern: stoneGrowthChamberStructure,
          },
          {
            type: "custommachinery:item",
            item: recipe.output,
            amount: 1,
            mode: "output",
          },
        ],
      });
    });

    newStoneGrowthChamberRecipes.forEach((recipe) => {
      event.custom({
        type: "custommachinery:custom_machine",
        machine: "createastral:stone_growth_chamber",
        time: recipe.time,
        requirements: [
          {
            type: "custommachinery:structure",
            keys: {
              a: `createastral:stone_growth_chamber/building_blocks/${recipe.material}`,
              w: recipe.blockToReact,
              g: "createastral:stone_growth_chamber/glass_blocks",
            },
            pattern: stoneGrowthChamberStructure,
          },
          {
            type: "custommachinery:item",
            item: recipe.output,
            amount: 1,
            mode: "output",
          },
        ],
      });
    });
  });
})();
