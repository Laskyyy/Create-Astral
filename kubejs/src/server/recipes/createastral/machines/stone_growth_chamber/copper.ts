export function stoneGrowthChamberRecipes() {
  onEvent("recipes", (event) => {
    const newCopperSGCStructure = [
      ["aaa", "aaa", "ama"],
      ["ggg", "glg", "ggg"],
      ["aaa", "aaa", "aaa"],
    ] as const;

    //? ["building material string", "output item string", time integer]
    //! A tag for the building material must be present in [kubejs/data/createastral/tags/blocks/stone_growth_chamber/building_blocks]!

    interface StoneGrowthChamberRecipe {
      material: string,
      output: Special.Item,
      time: number
    }

    const stoneGrowthChamberRecipes = [
      {
        material: "andesite",
        output: "minecraft:andesite",
        time: 10,
      },
      {
        material: "cobblestone",
        output: "minecraft:cobblestone",
        time: 10,
      },
      {
        material: "glacio_cobblestone",
        output: "ad_astra:glacio_cobblestone",
        time: 10,
      },
      {
        material: "mars_cobblestone",
        output: "ad_astra:mars_cobblestone",
        time: 10,
      },
      {
        material: "mercury_cobblestone",
        output: "ad_astra:mercury_cobblestone",
        time: 10,
      },
      {
        material: "moon_cobblestone",
        output: "ad_astra:moon_cobblestone",
        time: 10,
      },
      {
        material: "venus_cobblestone",
        output: "ad_astra:venus_cobblestone",
        time: 10,
      },
    ] as const satisfies StoneGrowthChamberRecipe[];
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
            pattern: newCopperSGCStructure,
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
}
