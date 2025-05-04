export function createWashingRecipes() {
  onEvent("recipes", (event) => {
    //Input: String
    //Outputs: Array of outputs, which is each an array.
    //    [Item string, float from 0.0 - 1.0 deciding chance]
    interface WashingRecipe {
      input: Internal.IngredientJS_;
      outputs: Internal.ItemStackJS_[];
    }

    const washingRecipes: WashingRecipe[] = [
      //sponge to wet sponge
      {
        input: "minecraft:calcite",
        outputs: [Item.of("minecraft:dripstone_block")],
      },
      {
        input: "minecraft:sponge",
        outputs: [Item.of("minecraft:wet_sponge")],
      },
      {
        input: "createaddition:biomass",
        outputs: [
          Item.of("createastral:pure_biomatter"),
          Item.of("minecraft:sugar").withChance(0.2),
          Item.of("minecraft:bone_meal").withChance(0.2),
        ],
      },
      {
        input: "minecraft:soul_soil",
        outputs: [
          Item.of("minecraft:gold_nugget").withChance(0.08),
          Item.of("minecraft:quartz").withChance(0.06),
          Item.of("minecraft:bone_meal").withChance(0.1),
        ],
      },
      {
        input: "ae2:certus_crystal_seed",
        outputs: [Item.of("ae2:certus_quartz_crystal"), Item.of("minecraft:sugar").withChance(0.1)],
      },
      {
        input: "ae2:fluix_crystal_seed",
        outputs: [Item.of("ae2:fluix_crystal"), Item.of("minecraft:sugar").withChance(0.1)],
      },

      {
        input: "createastral:lime",
        outputs: [
          Item.of("techreborn:silver_nugget").withChance(0.12),
          Item.of("techreborn:raw_silver").withChance(0.02),
        ],
      },
      {
        input: "minecraft:red_sand",
        outputs: [Item.of("create:zinc_nugget").withChance(0.33), Item.of("minecraft:dead_bush").withChance(0.12)],
      },
      {
        input: "ad_astra:moon_sand",
        outputs: [Item.of("ad_astra:desh_nugget").withChance(0.12), Item.of("ad_astra:cheese").withChance(0.04)],
      },
      {
        input: "ad_astra:mars_sand",
        outputs: [Item.of("techreborn:lead_nugget").withChance(0.25)],
      },
      {
        // wash shulker box to remove the color
        input: "#c:shulker_boxes",
        outputs: [Item.of("minecraft:shulker_box")],
      },
      {
        // soul soil without random ticks
        input: "farmersdelight:organic_compost",
        outputs: [Item.of("farmersdelight:rich_soil")],
      },
      // ae2 cable washing made easy !!!
      {
        input: "#ae2:glass_cable",
        outputs: [Item.of("ae2:fluix_glass_cable")],
      },
      {
        input: "#ae2:covered_cable",
        outputs: [Item.of("ae2:fluix_covered_cable")],
      },
      {
        input: "#ae2:covered_dense_cable",
        outputs: [Item.of("ae2:fluix_covered_dense_cable")],
      },
      {
        input: "#ae2:smart_cable",
        outputs: [Item.of("ae2:fluix_smart_cable")],
      },
      {
        input: "#ae2:smart_dense_cable",
        outputs: [Item.of("ae2:fluix_smart_dense_cable")],
      },
      {
        input: "minecraft:cobblestone",
        outputs: [Item.of("minecraft:mossy_cobblestone")], //easy mossy cobble for moss
      },
      {
        input: "minecraft:stone_bricks",
        outputs: [Item.of("minecraft:mossy_stone_bricks")],
      },
      {
        input: "techreborn:ashes_dust",
        outputs: [
          Item.of("minecraft:gold_nugget").withChance(0.2),
          Item.of("create:zinc_nugget").withChance(0.225),
          Item.of("create:copper_nugget").withChance(0.3),
          Item.of("techreborn:tin_nugget").withChance(0.25),
        ],
      },
      {
        input: "createastral:orcane",
        outputs: ["createastral:orcane"],
      },
    ] as const;
    washingRecipes.forEach((recipe) => {
      event.recipes.createSplashing(recipe.outputs, recipe.input);
    });
  });
}
