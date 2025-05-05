export function astralAdditionsShimmerTransmutationRecipes() {
  onEvent("recipes", (event) => {
    interface ShimmerTransmutationRecipe {
      input: Special.Item,
      output: Special.Item,
      /** Allows 64 of an item to be transmuted. */
      stack64: boolean
    }

    const shimmerTransmutationRecipes: ShimmerTransmutationRecipe[] = [
      {
        input: "tconstruct:earth_slime_grass_seeds",
        output: "tconstruct:ender_slime_grass_seeds",
        stack64: true,
      },
      {
        input: "minecraft:sea_lantern",
        output: "minecraft:glowstone",
        stack64: true,
      },
      {
        input: "techreborn:lead_ingot",
        output: "minecraft:glowstone",
        stack64: true,
      },
      {
        input: "minecraft:green_dye",
        output: "minecraft:red_dye",
        stack64: true,
      },
      {
        input: "minecraft:red_dye",
        output: "minecraft:green_dye",
        stack64: true,
      },
      {
        input: "minecraft:yellow_dye",
        output: "minecraft:blue_dye",
        stack64: true,
      },
      {
        input: "minecraft:blue_dye",
        output: "minecraft:yellow_dye",
        stack64: true,
      },
      {
        input: "minecraft:green_dye",
        output: "minecraft:red_dye",
        stack64: true,
      },
      {
        input: "minecraft:lily_of_the_valley",
        output: "astraladditions:shimmer_lily",
        stack64: true,
      },
      {
        input: "astralfoods:chocolate_ice_cream",
        output: "astralfoods:ambrosia",
        stack64: false,
      },
    ]
    shimmerTransmutationRecipes.forEach((recipe) => {
      event.custom({
        type: "astraladditions:shimmer_transmute",
        input: {
          item: recipe.input,
          count: 1,
        },
        output: [
          {
            item: recipe.output,
            count: 1,
          },
        ],
      });
      if (recipe.stack64) {
        event.custom({
          type: "astraladditions:shimmer_transmute",
          input: {
            item: recipe.input,
            count: 64,
          },
          output: [
            {
              item: recipe.output,
              count: 64,
            },
          ],
        });
      }
    });
  });
}
