onEvent("recipes", (event) => {
    // Fluid: [string Fluid Name, Fluid Amount]
    // Result: string Item Name
    // Cooling Time: Time in ticks
    // Cast: [string Item Name, bool Cast Consumed] or null if none
    [
        {
            fluid: ["kubejs:compound_mixture", INGOT * 9],
            result: "createastral:andesite_alloy_block",
            cooling_time: 180,
            cast: null,
        },
        {
            fluid: ["kubejs:blast-resistant_cement", BUCKET],
            result: "createastral:blast-resistant_concrete",
            cooling_time: 400,
            cast: null,
        },
        {
            fluid: ["tconstruct:molten_quartz", GEM * 3],
            result: "minecraft:granite",
            cooling_time: 140,
            cast: ["minecraft:diorite", true],
        },
        {
            fluid: ["tconstruct:molten_cobalt", BUCKET],
            result: "extended_drawers:controller",
            cooling_time: 194, // same as cooling cobalt block
            cast: ["extended_drawers:shadow_drawer", true],
        },
        {
            fluid: ["tconstruct:liquid_soul", BUCKET],
            result: "minecraft:diorite",
            cooling_time: 80,
            cast: ["minecraft:basalt", true],
        },
        {
            fluid: ["kubejs:liquid_xp_nuggies", INGOT * 9],
            result: "create:experience_block",
            cooling_time: 180,
            cast: null,
        },
        {
            fluid: ["tconstruct:ender_slime", BUCKET],
            result: "tconstruct:ender_slime_vine",
            cooling_time: 80,
            cast: ["minecraft:vine", true],
        },
        {
            fluid: ["tconstruct:sky_slime", BUCKET],
            result: "tconstruct:sky_slime_vine",
            cooling_time: 80,
            cast: ["minecraft:vine", true],
        },
        {
            fluid: ["kubejs:supercooled_water", BUCKET],
            result: "minecraft:ice",
            cooling_time: 10,
            cast: null,
        },
    ].forEach((recipe) => {
        event.custom({
            type: "tconstruct:casting_basin",
            cast: recipe.cast ? { item: recipe.cast[0] } : null,
            cast_consumed: recipe.cast ? recipe.cast[1] : false,
            fluid: {
                name: recipe.fluid[0],
                amount: recipe.fluid[1],
            },
            result: recipe.result,
            cooling_time: recipe.cooling_time,
        });
    });

    // any drawer
    event.custom({
        type: "tconstruct:casting_basin",
        cast: {tag:"extended_drawers:drawers"},
        cast_consumed: true,
        fluid: {
            name: "tconstruct:molten_tin",
            amount: BUCKET,
        },
        result: "extended_drawers:shadow_drawer",
        cooling_time: 117 // same as cooling tin block
    });

    const BLAZING_BLOOD_MADIC_AMOUNT = 1620;
    // const BLAZING_BLOOD_MADIC_AMOUNT = 4050;
    event.custom({
        type: "tconstruct:entity_melting",
        entity: {
            type: "minecraft:blaze",
        },
        result: {
            fluid: "tconstruct:blazing_blood",
            amount: BLAZING_BLOOD_MADIC_AMOUNT,
        },
        damage: 2,
    });

    [
        {
            fluid: ["kubejs:shimmer", BUCKET / 20],
            result: "ae2:fluix_dust",
            cooling_time: 40,
            cast: ["ae2:certus_quartz_dust", true],
        },
        {
            fluid: ["tconstruct:molten_bronze", 4 * NUGGET],
            result: "create:cogwheel",
            cooling_time: 100,
            cast: ["tconstruct:coin_cast", false],
        },
        {
            fluid: ["tconstruct:molten_bronze", 12 * NUGGET],
            result: "create:large_cogwheel",
            cooling_time: 100,
            cast: ["tconstruct:gear_cast", false],
        },
        {
            fluid: ["tconstruct:molten_gold", 12 * NUGGET],
            result: "tconstruct:gear_cast",
            cooling_time: 100,
            cast: ["create:large_cogwheel", true],
        },
        {
            fluid: ["tconstruct:molten_gold", BUCKET / 2],
            result: "createastral:golden_bowl",
            cooling_time: 100,
            cast: ["tconstruct:round_plate_cast", false],
        },
        {
            fluid: ["kubejs:liquid_xp_nuggies", INGOT],
            result: "createastral:experience_ingot",
            cooling_time: 100,
            cast: ["tconstruct:ingot_cast", false],
        },
        {
            fluid: ["kubejs:liquid_xp_nuggies", NUGGET],
            result: "create:experience_nugget",
            cooling_time: 10,
            cast: ["tconstruct:nugget_cast", false],
        },
        {
            fluid: ["kubejs:liquid_xp_nuggies", 8 * NUGGET],
            result: "minecraft:experience_bottle",
            cooling_time: 30,
            cast: ["minecraft:glass_bottle", true],
        },
    ].forEach((recipe) => {
        event.custom({
            type: "tconstruct:casting_table",
            cast: recipe.cast ? { item: recipe.cast[0] } : null,
            cast_consumed: recipe.cast ? recipe.cast[1] : false,
            fluid: {
                name: recipe.fluid[0],
                amount: recipe.fluid[1],
            },
            result: recipe.result,
            cooling_time: recipe.cooling_time,
        });
    });
});
