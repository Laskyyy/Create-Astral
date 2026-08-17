(function CreateFlowerMixingRecipes() {
  const { BUCKET, BOTTLE, GEM_BLOCK, SLIMEBALL, INGOT, GEM, NUGGET, mB } = global.fluids;

  /**
   * flowers.js
   * @author Max Norfolk
   */

  onEvent("recipes", (event) => {
    /**
     * @typedef DeadBushFlowerRevivingRecipe
     * @property {Special.Item} flower
     * @property {Special.Item} dye
     */

    /** @type {DeadBushFlowerRevivingRecipe[]} */
    const deadBushFlowerRevivingRecipes = [
      {
        flower: "minecraft:dandelion",
        dye: "minecraft:yellow_dye",
      },
      {
        flower: "minecraft:poppy",
        dye: "minecraft:red_dye",
      },
      {
        flower: "minecraft:blue_orchid",
        dye: "minecraft:light_blue_dye",
      },
      {
        flower: "minecraft:allium",
        dye: "minecraft:magenta_dye",
      },
      {
        flower: "minecraft:azure_bluet",
        dye: "minecraft:light_gray_dye",
      },
      {
        flower: "minecraft:red_tulip",
        dye: "minecraft:red_dye",
      },
      {
        flower: "minecraft:orange_tulip",
        dye: "minecraft:orange_dye",
      },
      {
        flower: "minecraft:white_tulip",
        dye: "minecraft:white_dye",
      },
      {
        flower: "minecraft:pink_tulip",
        dye: "minecraft:pink_dye",
      },
      {
        flower: "minecraft:oxeye_daisy",
        dye: "minecraft:light_gray_dye",
      },
      {
        flower: "minecraft:cornflower",
        dye: "minecraft:blue_dye",
      },
      {
        flower: "minecraft:lily_of_the_valley",
        dye: "minecraft:white_dye",
      },
    ];
    deadBushFlowerRevivingRecipes.forEach((recipe) => {
      event.recipes
        .createMixing(recipe.flower, [
          recipe.dye,
          "minecraft:dead_bush",
          "create:tree_fertilizer",
          { fluid: "kubejs:shimmer", amount: 100 * mB },
        ])
        .processingTime(50);
    });

    /**
     * @typedef SmallToTallFlowerMixingRecipe
     * @property {Special.Item} tallFlower
     * @property {Special.Item} flower
     */

    /** @type {SmallToTallFlowerMixingRecipe[]} */

    const smallToTallFlowerMixingRecipes = [
      {
        tallFlower: "minecraft:sunflower",
        flower: "minecraft:dandelion",
      },
      {
        tallFlower: "minecraft:lilac",
        flower: "minecraft:allium",
      },
      {
        tallFlower: "minecraft:rose_bush",
        flower: "minecraft:poppy",
      },
      {
        tallFlower: "minecraft:peony",
        flower: "minecraft:pink_tulip",
      },
      {
        tallFlower: "farmersdelight:wild_cabbages",
        flower: "farmersdelight:cabbage",
      },
      {
        tallFlower: "farmersdelight:wild_onions",
        flower: "farmersdelight:onion",
      },
      {
        tallFlower: "farmersdelight:wild_tomatoes",
        flower: "farmersdelight:tomato",
      },
      {
        tallFlower: "farmersdelight:wild_carrots",
        flower: "minecraft:carrot",
      },
      {
        tallFlower: "farmersdelight:wild_potatoes",
        flower: "minecraft:potato",
      },
      {
        tallFlower: "farmersdelight:wild_beetroots",
        flower: "minecraft:beetroot",
      },
      {
        tallFlower: "farmersdelight:wild_rice",
        flower: "farmersdelight:rice",
      },
    ];
    smallToTallFlowerMixingRecipes.forEach((recipe) => {
      event.recipes
        .createMixing(recipe.tallFlower, [
          Item.of(recipe.flower, 2),
          Item.of("create:tree_fertilizer", 2),
          { fluid: "kubejs:shimmer", amount: 200 * mB },
        ])
        .processingTime(50);
    });
  });
})();