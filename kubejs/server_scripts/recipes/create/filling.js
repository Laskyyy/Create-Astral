onEvent("recipes", (event) => {
    // The functions are pretty self-explanatory

    [
        {
            input: "minecraft:glass_bottle",
            output: "astraladditions:shimmer_bottle",
            fluid: "kubejs:shimmer",
            amount: 333 * mB,
        },
        {
            input: "minecraft:dirt",
            output: "tconstruct:sky_slime_dirt",
            fluid: "tconstruct:sky_slime",
            amount: 250,
        },
        {
            input: "minecraft:dirt",
            output: "tconstruct:earth_slime_dirt",
            fluid: "tconstruct:earth_slime",
            amount: 250,
        },
        {
            input: "tconstruct:ender_slime_crystal",
            output: "tconstruct:small_ender_slime_crystal_bud",
            fluid: "astraladditions:sputum",
            amount: (250 * mB) / 4,
        },
        {
            input: "minecraft:wheat_seeds",
            output: "tconstruct:earth_slime_grass_seeds",
            fluid: "tconstruct:earth_slime",
            amount: (250 * mB) / 4,
        },
        {
            input: "minecraft:stick",
            output: "minecraft:torch",
            fluid: "minecraft:lava",
            amount: 20 * mB,
        },
        {
            input: "create:polished_rose_quartz",
            output: "create:electron_tube",
            fluid: "tconstruct:molten_rose_gold",
            amount: INGOT,
        },
        {
            input: "minecraft:dripstone_block",
            output: "3x minecraft:pointed_dripstone",
            fluid: "minecraft:water",
            amount: 500 * mB,
        },
        {
            input: "techreborn:netherrack_dust",
            output: "create:cinder_flour",
            fluid: "minecraft:water",
            amount: 250 * mB,
        },
        {
            input: "create:blaze_cake_base",
            output: "create:blaze_cake",
            fluid: "kubejs:hellfire",
            amount: 250 * mB,
        },
        {
            input: "techreborn:red_cell_battery",
            output: "techreborn:lithium_ion_battery",
            fluid: "techreborn:lithium",
            amount: BUCKET,
        },
        {
            input: "doodads:brick_road",
            output: "doodads:yellow_brick_road",
            fluid: "tconstruct:molten_gold",
            amount: 50 * mB,
        },
        {
            input: "doodads:stone_brick_road",
            output: "doodads:yellow_brick_road",
            fluid: "tconstruct:molten_gold",
            amount: 25 * mB,
        },
        {
            input: "minecraft:warped_fungus",
            output: "minecraft:crimson_fungus",
            fluid: "minecraft:lava",
            amount: 25 * mB,
        },
        {
            input: "techreborn:sponge_piece",
            output: "minecraft:honeycomb",
            fluid: "create:honey",
            amount: 250 * mB,
        },
        {
            input: "minecraft:beehive",
            output: "minecraft:bee_nest",
            fluid: "create:honey",
            amount: BUCKET,
        },
        {
            input: "minecraft:blackstone",
            output: "minecraft:gilded_blackstone",
            fluid: "tconstruct:molten_gold",
            amount: INGOT,
        },
        {
            input: "vinery:wine_bottle",
            output: "vinery:red_grapejuice_wine_bottle",
            fluid: "kubejs:red_grape_juice",
            amount: 250 * mB,
        },
        {
            input: "vinery:wine_bottle",
            output: "vinery:white_grapejuice_wine_bottle",
            fluid: "kubejs:white_grape_juice",
            amount: 250 * mB,
        },
        {
            input: "minecraft:calcite",
            output: "minecraft:dripstone_block",
            fluid: "minecraft:water",
            amount: 250 * mB,
        },
        {
            input: "minecraft:apple",
            output: "astralfoods:shimmered_apple",
            fluid: "kubejs:shimmer",
            amount: BUCKET / 3,
        },
        {
            input: "astralfoods:seared_potato",
            output: "astralfoods:dipped_potato",
            fluid: "tconstruct:molten_gold",
            amount: INGOT,
        },
        {
            input: "minecraft:bowl",
            output: "farmersdelight:squid_ink_pasta",
            fluid: "kubejs:squid_ink_pasta_fluid",
            amount: 250 * mB,
        },
        {
            input: "minecraft:bowl",
            output: "farmersdelight:pumpkin_soup",
            fluid: "kubejs:pumpkin_soup_fluid",
            amount: 250 * mB,
        },
        {
            input: "drinkbeer:empty_beer_mug",
            output: "drinkbeer:beer_mug",
            fluid: "kubejs:miner_pale_ale_fluid",
            amount: 250 * mB,
        },
        {
            input: "drinkbeer:empty_beer_mug",
            output: "drinkbeer:beer_mug_blaze_stout",
            fluid: "kubejs:blaze_stout_fluid",
            amount: 250 * mB,
        },
        {
            input: "drinkbeer:empty_beer_mug",
            output: "drinkbeer:beer_mug_blaze_milk_stout",
            fluid: "kubejs:blaze_milk_stout_fluid",
            amount: 250 * mB,
        },
        {
            input: "drinkbeer:empty_beer_mug",
            output: "drinkbeer:beer_mug_apple_lambic",
            fluid: "kubejs:apple_lambic_fluid",
            amount: 250 * mB,
        },
        {
            input: "drinkbeer:empty_beer_mug",
            output: "drinkbeer:beer_mug_sweet_berry_kriek",
            fluid: "kubejs:sweet_berry_kriek_fluid",
            amount: 250 * mB,
        },
        {
            input: "drinkbeer:empty_beer_mug",
            output: "drinkbeer:beer_mug_haars_icey_pale_lager",
            fluid: "kubejs:haars_icey_pale_lager_fluid",
            amount: 250 * mB,
        },
        {
            input: "drinkbeer:empty_beer_mug",
            output: "drinkbeer:beer_mug_pumpkin_kvass",
            fluid: "kubejs:pumpkin_kvass_fluid",
            amount: 250 * mB,
        },
        {
            input: "drinkbeer:empty_beer_mug",
            output: "drinkbeer:beer_mug_night_howl_kvass",
            fluid: "kubejs:night_howl_kvass_fluid",
            amount: 250 * mB,
        },
        {
            input: "drinkbeer:empty_beer_mug",
            output: "drinkbeer:beer_mug_frothy_pink_eggnog",
            fluid: "kubejs:frothy_pink_eggnog_fluid",
            amount: 250 * mB,
        },
    ].forEach((recipe) => {
        event.recipes.createFilling(recipe.output, [recipe.input, { fluid: recipe.fluid, amount: recipe.amount }]);
    });

    // These ones dont currently fit in the forEach loop because they have NBT tags

    event.recipes.createFilling("minecraft:glowstone_dust", [
        "create:cinder_flour",
        { fluid: "create:potion", amount: 25 * mB, nbt: { Bottle: "REGULAR", Potion: "naturalist:glowing" } },
    ]);

    event.recipes.createFilling("createastral:swift_andesite", [
        "doodads:asphalt",
        { fluid: "create:potion", amount: 37 * mB, nbt: { Bottle: "REGULAR", Potion: "minecraft:swiftness" } },
    ]);
});
