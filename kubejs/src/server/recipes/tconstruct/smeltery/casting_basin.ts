import { BUCKET, GEM, INGOT, SLIMEBALL } from "fluid-constants";

export function castingBasinRecipes() {
  onEvent("recipes", (event) => {
    interface CastingBasinRecipe {
      fluidInput: {
        fluid: Special.Fluid;
        amount: number;
      };
      result: Special.Item;
      coolingTime: number;
      cast?: { item: Special.Item; consumed?: boolean } | { tag: Special.ItemTag; consumed?: boolean };
    }

    const castingBasinRecipes: CastingBasinRecipe[] = [
      {
        fluidInput: { fluid: "kubejs:compound_mixture", amount: INGOT * 9 },
        result: "createastral:andesite_alloy_block",
        coolingTime: 180,
      },
      {
        fluidInput: { fluid: "kubejs:blast-resistant_cement", amount: BUCKET },
        result: "createastral:blast-resistant_concrete",
        coolingTime: 400,
      },
      {
        fluidInput: { fluid: "tconstruct:molten_quartz", amount: GEM * 3 },
        result: "minecraft:granite",
        coolingTime: 140,
        cast: { item: "minecraft:diorite", consumed: true },
      },
      {
        fluidInput: { fluid: "minecraft:lava", amount: INGOT },
        result: "minecraft:deepslate",
        coolingTime: 140,
        cast: { item: "minecraft:cobblestone", consumed: true },
      },
      {
        fluidInput: { fluid: "yttr:void", amount: BUCKET },
        result: "yttr:raw_gadolinite_block",
        coolingTime: 140,
        cast: { item: "ad_astra:raw_calorite_block", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:molten_cobalt", amount: BUCKET },
        result: "extended_drawers:controller",
        coolingTime: 194, // same as cooling cobalt block
        cast: { item: "extended_drawers:shadow_drawer", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:liquid_soul", amount: BUCKET },
        result: "minecraft:diorite",
        coolingTime: 80,
        cast: { item: "minecraft:basalt", consumed: true },
      },
      {
        fluidInput: { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT * 9 },
        result: "create:experience_block",
        coolingTime: 180,
      },
      {
        fluidInput: { fluid: "tconstruct:ender_slime", amount: BUCKET },
        result: "tconstruct:ender_slime_vine",
        coolingTime: 80,
        cast: { item: "minecraft:vine", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:sky_slime", amount: BUCKET },
        result: "tconstruct:sky_slime_vine",
        coolingTime: 80,
        cast: { item: "minecraft:vine", consumed: true },
      },
      {
        fluidInput: { fluid: "kubejs:supercooled_water", amount: BUCKET },
        result: "minecraft:ice",
        coolingTime: 10,
      },
      {
        fluidInput: { fluid: "kubejs:blast-resistant_cement", amount: BUCKET / 2 },
        result: "createastral:rocket_casing",
        coolingTime: 500,
        cast: { item: "kubejs:fire_resistant_fragile_sheet_block", consumed: true },
      },
      {
        fluidInput: { fluid: "kubejs:shimmer", amount: BUCKET * 4 },
        result: "createastral:ultramatter",
        coolingTime: 40,
        cast: { item: "yttr:compressed_ultrapure_carbon_block", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:molten_tin", amount: BUCKET },
        result: "extended_drawers:shadow_drawer",
        coolingTime: 117, // same as cooling tin block
        // @ts-expect-error Missing tag?
        cast: { tag: "extended_drawers:drawer_containers", consumed: true },
      },
      {
        fluidInput: { fluid: "kubejs:shimmer", amount: BUCKET * 2 },
        result: "ae2:controller",
        coolingTime: 400,
        cast: { item: "ae2:energy_cell", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:mushroom_stew", amount: (BUCKET * 2) / 3 },
        result: "minecraft:mushroom_stem",
        coolingTime: 25,
      },
      {
        fluidInput: { fluid: "kubejs:shimmer", amount: BUCKET },
        result: "createastral:shimmering_stone",
        coolingTime: 250,
        cast: { item: "ad_astra:moon_stone", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:mushroom_stew", amount: INGOT * 1.5 },
        result: "minecraft:shroomlight",
        coolingTime: 100,
        cast: { item: "minecraft:glowstone", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:molten_clay", amount: BUCKET },
        result: "minecraft:clay",
        coolingTime: 144,
      },
      {
        fluidInput: { fluid: "kubejs:molten_calorite", amount: BUCKET },
        result: "ad_astra:calorite_block",
        coolingTime: 194,
      },
      {
        fluidInput: { fluid: "kubejs:molten_desh", amount: BUCKET },
        result: "ad_astra:desh_block",
        coolingTime: 141,
      },
      {
        fluidInput: { fluid: "kubejs:molten_ostrum", amount: BUCKET },
        result: "ad_astra:ostrum_block",
        coolingTime: 194,
      },
      {
        fluidInput: { fluid: "tconstruct:molten_steel", amount: BUCKET },
        result: "ad_astra:steel_block",
        coolingTime: 194,
      },
      {
        fluidInput: { fluid: "tconstruct:magma", amount: BUCKET / 2 },
        result: "minecraft:magma_block",
        coolingTime: 90,
        cast: { item: "minecraft:polished_basalt", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:magma", amount: BUCKET / 2 },
        result: "minecraft:stone",
        coolingTime: 90,
        cast: { item: "minecraft:basalt", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:magma", amount: BUCKET / 2 },
        result: "minecraft:stone",
        coolingTime: 90,
        cast: { item: "minecraft:gravel", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:seared_stone", amount: BUCKET / 2 },
        result: "tconstruct:seared_cobble_wall",
        coolingTime: 102,
        cast: { item: "minecraft:cobblestone_wall", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:seared_stone", amount: BUCKET / 4 },
        result: "tconstruct:seared_stone_slab",
        coolingTime: 72,
        cast: { item: "minecraft:stone_slab", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:seared_stone", amount: BUCKET / 4 },
        result: "tconstruct:seared_stone_stairs",
        coolingTime: 102,
        cast: { item: "minecraft:stone_stairs", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:seared_stone", amount: INGOT * 8 },
        result: "tconstruct:seared_fancy_bricks",
        coolingTime: 102,
        cast: { item: "minecraft:chiseled_stone_bricks", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:seared_stone", amount: INGOT * 8 },
        result: "tconstruct:seared_cracked_bricks",
        coolingTime: 102,
        cast: { item: "minecraft:cracked_stone_bricks", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:seared_stone", amount: INGOT * 8 },
        result: "tconstruct:seared_paver",
        coolingTime: 102,
        cast: { item: "minecraft:smooth_stone", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:ichor", amount: SLIMEBALL * 5 },
        result: "tconstruct:ichor_slime",
        coolingTime: 103,
        cast: { item: "tconstruct:ichor_congealed_slime", consumed: true },
      },
      {
        fluidInput: { fluid: "tconstruct:ichor", amount: BUCKET },
        result: "tconstruct:ichor_congealed_slime",
        coolingTime: 92,
      },
    ];
    castingBasinRecipes.forEach((recipe) => {
      let basinRecipe: { type: Special.RecipeType_; [key: string]: unknown } = {
        type: "tconstruct:casting_basin",
        fluid: {
          name: recipe.fluidInput.fluid,
          amount: recipe.fluidInput.amount,
        },
        result: recipe.result,
        cooling_time: recipe.coolingTime,
      };
      if (recipe.cast) {
        if ("item" in recipe.cast) basinRecipe.cast = { item: recipe.cast.item };
        else if ("tag" in recipe.cast) basinRecipe.cast = { tag: recipe.cast.tag };
        if (recipe.cast.consumed) basinRecipe.cast_consumed = recipe.cast.consumed;
      }

      event.custom(basinRecipe);
    });
  });
}
