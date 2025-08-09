(function meltingRecipes() {
  const { BUCKET, GEM_BLOCK, SLIMEBALL, INGOT, GEM, NUGGET, mB } = global.fluids;
  onEvent("recipes", (event) => {
    /**
     * @typedef MeltingRecipe
     * @property {{ fluid: Special.Fluid; amount: number }} fluidOutput
     * @property {Helper.ItemOrTag} input
     * @property {number} temp
     * @property {number} time
     * @property {{ fluid: Special.Fluid; amount: number }[]} [byproducts]
     */

    /** @type {MeltingRecipe[]} */
    const meltingRecipes = [
      // Misc melting
      {
        fluidOutput: { fluid: "tconstruct:blazing_blood", amount: BUCKET },
        input: { item: "create:blaze_burner" },
        temp: 32,
        time: 100,
        byproducts: [{ fluid: "tconstruct:molten_iron", amount: INGOT * 4 }],
      },
      {
        fluidOutput: { fluid: "tconstruct:blood", amount: INGOT },
        input: { item: "tconstruct:blaze_head" },
        temp: 1000,
        time: 400,
      },
      {
        fluidOutput: { fluid: "tconstruct:blood", amount: GEM },
        input: { item: "minecraft:cod" },
        temp: 32,
        time: 14,
      },
      {
        fluidOutput: { fluid: "tconstruct:blood", amount: 40 * mB },
        input: { item: "farmersdelight:cod_slice" },
        temp: 32,
        time: 7,
      },
      {
        fluidOutput: { fluid: "tconstruct:blood", amount: GEM },
        input: { item: "minecraft:salmon" },
        temp: 32,
        time: 14,
      },
      {
        fluidOutput: { fluid: "tconstruct:blood", amount: 40 * mB },
        input: { item: "farmersdelight:salmon_slice" },
        temp: 32,
        time: 7,
      },
      {
        fluidOutput: { fluid: "tconstruct:blood", amount: GEM },
        input: { item: "minecraft:tropical_fish" },
        temp: 32,
        time: 14,
      },
      {
        fluidOutput: { fluid: "tconstruct:molten_glass", amount: BUCKET },
        input: { tag: "c:glass" },
        temp: 750,
        time: 59,
      },
      {
        fluidOutput: { fluid: "tconstruct:molten_glass", amount: BUCKET },
        input: { item: "minecraft:glass_bottle" },
        temp: 750,
        time: 73,
      },
      {
        fluidOutput: { fluid: "tconstruct:molten_glass", amount: BUCKET / 4 },
        input: { tag: "c:glass_panes" },
        temp: 750,
        time: 29,
      },
      {
        fluidOutput: { fluid: "tconstruct:molten_glass", amount: BUCKET / 4 },
        input: { item: "tconstruct:blank_sand_cast" },
        temp: 750,
        time: 44,
      },
      {
        fluidOutput: { fluid: "tconstruct:molten_glass", amount: BUCKET / 4 },
        input: { item: "tconstruct:blank_red_sand_cast" },
        temp: 750,
        time: 44,
      },
      {
        fluidOutput: { fluid: "tconstruct:molten_glass", amount: BUCKET },
        input: { tag: "c:sand" },
        temp: 750,
        time: 88,
      },
      {
        fluidOutput: { fluid: "tconstruct:molten_obsidian", amount: BUCKET * 3 },
        input: { item: "minecraft:beacon" },
        temp: 800,
        time: 345,
        byproducts: [{ fluid: "tconstruct:molten_glass", amount: BUCKET * 5 }],
      },
      {
        fluidOutput: { fluid: "tconstruct:molten_obsidian", amount: BUCKET },
        input: { tag: "c:obsidian" },
        temp: 800,
        time: 133,
      },
      {
        fluidOutput: { fluid: "tconstruct:molten_obsidian", amount: BUCKET * 8 },
        input: { item: "minecraft:ender_chest" },
        temp: 800,
        time: 332,
        byproducts: [{ fluid: "tconstruct:molten_ender", amount: BUCKET / 4 }],
      },
      {
        fluidOutput: { fluid: "tconstruct:molten_obsidian", amount: BUCKET / 4 },
        input: { tag: "c:dusts/obsidian" },
        temp: 800,
        time: 66,
      },
      {
        fluidOutput: { fluid: "tconstruct:molten_obsidian", amount: BUCKET },
        input: { item: "tconstruct:foundry_controller" },
        temp: 800,
        time: 232,
        byproducts: [{ fluid: "tconstruct:scorched_stone", amount: BUCKET }],
      },
      {
        fluidOutput: { fluid: "tconstruct:molten_obsidian", amount: BUCKET / 2 },
        input: { item: "tconstruct:scorched_drain" },
        temp: 800,
        time: 166,
        byproducts: [{ fluid: "tconstruct:scorched_stone", amount: BUCKET }],
      },
      {
        fluidOutput: { fluid: "tconstruct:molten_obsidian", amount: BUCKET / 2 },
        input: { item: "tconstruct:scorched_chute" },
        temp: 800,
        time: 166,
        byproducts: [{ fluid: "tconstruct:scorched_stone", amount: BUCKET }],
      },
      {
        fluidOutput: { fluid: "tconstruct:molten_obsidian", amount: BUCKET / 4 },
        input: { item: "tconstruct:obsidian_pane" },
        temp: 800,
        time: 99,
      },
      {
        fluidOutput: { fluid: "tconstruct:seared_stone", amount: (BUCKET / 4) * 7 }, // prevents skips to get scorched stone due to seared casting basins being obtainable premoon
        input: { item: "tconstruct:scorched_basin" },
        temp: 500,
        time: 125,
      },
      {
        fluidOutput: { fluid: "tconstruct:seared_stone", amount: (BUCKET / 4) * 7 }, // prevents skips to get scorched stone due to seared casting tables being obtainable premoon
        input: { item: "tconstruct:scorched_basin" },
        temp: 500,
        time: 125,
      },
      {
        fluidOutput: { fluid: "tconstruct:molten_bronze", amount: INGOT / 2 },
        input: { item: "createastral:bronze_sheet" },
        temp: 700,
        time: 57,
      },
      {
        fluidOutput: { fluid: "kubejs:molten_calorite", amount: BUCKET },
        input: { item: "ad_astra:calorite_block" },
        temp: 3000,
        time: 141,
      },
      {
        fluidOutput: { fluid: "kubejs:molten_calorite", amount: INGOT },
        input: { item: "ad_astra:calorite_ingot" },
        temp: 3000,
        time: 47,
      },
      {
        fluidOutput: { fluid: "kubejs:molten_calorite", amount: NUGGET },
        input: { item: "ad_astra:calorite_nugget" },
        temp: 3000,
        time: 16,
      },
      {
        fluidOutput: { fluid: "tconstruct:molten_copper", amount: NUGGET },
        input: { tag: "c:wires/copper" },
        temp: 500,
        time: 10,
      },
      {
        fluidOutput: { fluid: "kubejs:molten_desh", amount: BUCKET },
        input: { item: "ad_astra:desh_block" },
        temp: 425,
        time: 141,
      },
      {
        fluidOutput: { fluid: "kubejs:molten_desh", amount: INGOT },
        input: { item: "ad_astra:desh_ingot" },
        temp: 425,
        time: 47,
      },
      {
        fluidOutput: { fluid: "kubejs:molten_desh", amount: NUGGET },
        input: { item: "ad_astra:desh_nugget" },
        temp: 425,
        time: 16,
      },
      {
        fluidOutput: { fluid: "tconstruct:molten_iron", amount: NUGGET },
        input: { item: "minecraft:chain" },
        temp: 800,
        time: 66,
      },
      {
        fluidOutput: { fluid: "tconstruct:molten_rose_gold", amount: INGOT / 2 },
        input: { item: "tconstruct:silky_cloth" },
        temp: 800,
        time: 66,
      },
      {
        fluidOutput: { fluid: "kubejs:molten_ostrum", amount: BUCKET },
        input: { item: "ad_astra:ostrum_block" },
        temp: 3000,
        time: 141,
      },
      {
        fluidOutput: { fluid: "kubejs:molten_ostrum", amount: INGOT },
        input: { item: "ad_astra:ostrum_ingot" },
        temp: 3000,
        time: 47,
      },
      {
        fluidOutput: { fluid: "kubejs:molten_ostrum", amount: NUGGET },
        input: { item: "ad_astra:ostrum_nugget" },
        temp: 3000,
        time: 16,
      },
      {
        fluidOutput: { fluid: "kubejs:molten_radiance", amount: INGOT },
        input: { item: "create:refined_radiance" },
        temp: 425,
        time: 47,
      },
      {
        fluidOutput: { fluid: "kubejs:molten_shadowsteel", amount: INGOT },
        input: { item: "create:shadow_steel" },
        temp: 425,
        time: 200,
      },
      {
        fluidOutput: { fluid: "kubejs:molten_yttrium", amount: BUCKET },
        input: { item: "yttr:yttrium_block" },
        temp: 3000,
        time: 500,
      },
      {
        fluidOutput: { fluid: "kubejs:molten_yttrium", amount: INGOT },
        input: { item: "yttr:yttrium_ingot" },
        temp: 3000,
        time: 125,
      },
      {
        fluidOutput: { fluid: "kubejs:molten_yttrium", amount: NUGGET },
        input: { item: "yttr:yttrium_nugget" },
        temp: 3000,
        time: 32,
      },
      {
        fluidOutput: { fluid: "tconstruct:seared_stone", amount: BUCKET / 4 },
        input: { item: "tconstruct:grout" },
        temp: 600,
        time: 80,
      },
      {
        fluidOutput: { fluid: "createaddition:seed_oil", amount: BUCKET / 15 },
        input: { item: "minecraft:beetroot" },
        temp: 100,
        time: 333,
      },
      {
        fluidOutput: { fluid: "create:honey", amount: BUCKET },
        input: { item: "minecraft:honey_block" },
        temp: 1,
        time: 98,
      },

      // Raw material melting
      /// Output: NUGGET * 13
      /// Metal byproduct: (NUGGET * 13) / 4
      /// Gem byproduct: GEM / 9

      {
        fluidOutput: { fluid: "tconstruct:molten_iron", amount: NUGGET * 13 },
        input: { tag: "c:raw_materials/iron" },
        temp: 790,
        time: 90,
        byproducts: [{ fluid: "tconstruct:molten_copper", amount: (NUGGET * 13) / 4 }],
      },
      {
        fluidOutput: { fluid: "tconstruct:molten_tin", amount: NUGGET * 13 },
        input: { tag: "c:raw_materials/tin" },
        temp: 790,
        time: 59,
        byproducts: [{ fluid: "tconstruct:molten_copper", amount: (NUGGET * 13) / 4 }],
      },
      {
        fluidOutput: { fluid: "kubejs:molten_desh", amount: NUGGET * 13 },
        input: { tag: "c:raw_materials/desh" },
        temp: 425,
        time: 71,
        byproducts: [{ fluid: "tconstruct:molten_iron", amount: (NUGGET * 13) / 3 }],
      },
      {
        fluidOutput: { fluid: "tconstruct:molten_silver", amount: NUGGET * 13 },
        input: { tag: "c:raw_materials/silver" },
        temp: 790,
        time: 90,
        byproducts: [{ fluid: "kubejs:molten_desh", amount: (NUGGET * 13) / 4 }],
      },
      {
        fluidOutput: { fluid: "kubejs:molten_ostrum", amount: NUGGET * 13 },
        input: { tag: "c:raw_materials/ostrum" },
        temp: 3000,
        time: 71,
        byproducts: [{ fluid: "tconstruct:molten_lead", amount: (NUGGET * 13) / 4 }],
      },
      {
        fluidOutput: { fluid: "kubejs:molten_calorite", amount: NUGGET * 13 },
        input: { tag: "c:raw_materials/calorite" },
        temp: 3000,
        time: 71,
        byproducts: [{ fluid: "tconstruct:molten_diamond", amount: GEM / 9 }],
      },
      {
        fluidOutput: { fluid: "kubejs:molten_yttrium", amount: NUGGET * 13 },
        input: { item: "yttr:yttrium_dust" },
        temp: 3000,
        time: 125,
        byproducts: [{ fluid: "kubejs:molten_calorite", amount: (NUGGET * 13) / 4 }],
      },

      // Raw material block melting
      /// Output: INGOT * 13
      /// Metal byproduct: (INGOT * 13) / 4
      /// Gem byproduct: GEM / 9

      {
        fluidOutput: { fluid: "tconstruct:molten_iron", amount: INGOT * 13 },
        input: { tag: "c:storage_blocks/raw_iron" },
        temp: 790,
        time: 359,
        byproducts: [{ fluid: "tconstruct:molten_copper", amount: (INGOT * 13) / 4 }],
      },
      {
        fluidOutput: { fluid: "tconstruct:molten_tin", amount: INGOT * 13 },
        input: { tag: "c:storage_blocks/raw_tin" },
        temp: 225,
        time: 234,
        byproducts: [{ fluid: "tconstruct:molten_copper", amount: (INGOT * 13) / 4 }],
      },
      {
        fluidOutput: { fluid: "kubejs:molten_desh", amount: INGOT * 13 },
        input: { item: "ad_astra:raw_desh_block" },
        temp: 425,
        time: 283,
        byproducts: [{ fluid: "tconstruct:molten_iron", amount: (INGOT * 13) / 3 }],
      },
      {
        fluidOutput: { fluid: "tconstruct:molten_silver", amount: INGOT * 13 },
        input: { tag: "c:storage_blocks/raw_silver" },
        temp: 790,
        time: 359,
        byproducts: [{ fluid: "kubejs:molten_desh", amount: (INGOT * 13) / 4 }],
      },
      {
        fluidOutput: { fluid: "kubejs:molten_ostrum", amount: INGOT * 13 },
        input: { item: "ad_astra:raw_ostrum_block" },
        temp: 3000,
        time: 283,
        byproducts: [{ fluid: "tconstruct:molten_lead", amount: (INGOT * 13) / 4 }],
      },
      {
        fluidOutput: { fluid: "kubejs:molten_calorite", amount: INGOT * 13 },
        input: { item: "ad_astra:raw_calorite_block" },
        temp: 3000,
        time: 283,
        byproducts: [{ fluid: "tconstruct:molten_diamond", amount: GEM_BLOCK / 9 }],
      },

      // Ore block melting
      /// Output: INGOT * 2
      /// Metal byproduct: NUGGET * 6
      /// Gem byproduct: GEM / 6

      {
        fluidOutput: { fluid: "tconstruct:molten_tin", amount: INGOT * 2 },
        input: { tag: "c:ores/tin" },
        temp: 225,
        time: 98,
        byproducts: [{ fluid: "tconstruct:molten_copper", amount: NUGGET * 6 }],
      },
      {
        fluidOutput: { fluid: "tconstruct:molten_silver", amount: INGOT * 2 },
        input: { tag: "c:ores/silver" },
        temp: 225,
        time: 98,
        byproducts: [{ fluid: "kubejs:molten_desh", amount: NUGGET * 6 }],
      },
    ];
    meltingRecipes.forEach((recipe) => {
      /** @type {{ type: Special.RecipeType_; [key: string]: unknown }} */
      let meltingRecipe = {
        type: "tconstruct:melting",
        ingredient: recipe.input,
        result: {
          fluid: recipe.fluidOutput.fluid,
          amount: recipe.fluidOutput.amount,
        },
        temperature: recipe.temp,
        time: recipe.time,
      };
      if (recipe.byproducts) meltingRecipe.byproducts = recipe.byproducts;
      event.custom(meltingRecipe);
    });
  });
})();
