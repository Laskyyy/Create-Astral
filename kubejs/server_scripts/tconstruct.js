var FULL_BUCKET_AMMOUNT = 81000;
var INGOT_FLUID_AMMOUNT = 9000;

onEvent("recipes", (event) => {
    // Fluid: [string Fluid Name, Fluid Amount]
    // Result: string Item Name
    // Cooling Time: Time in ticks
    // Cast: [string Item Name, bool Cast Consumed] or null if none
    [
        {
            fluid: ["kubejs:compound_mixture", INGOT_FLUID_AMMOUNT * 9],
            result: "createastral:andesite_alloy_block",
            cooling_time: 180,
            cast: null,
        },
        {
            fluid: ["kubejs:blast-resistant_cement", FULL_BUCKET_AMMOUNT],
            result: "createastral:blast-resistant_concrete",
            cooling_time: 400,
            cast: null,
        },
        {
            fluid: ["tconstruct:molten_quartz", (3 * FULL_BUCKET_AMMOUNT) / 10],
            result: "minecraft:granite",
            cooling_time: 140,
            cast: ["minecraft:diorite", true],
        },
        {
            fluid: ["tconstruct:liquid_soul", FULL_BUCKET_AMMOUNT],
            result: "minecraft:diorite",
            cooling_time: 80,
            cast: ["minecraft:basalt", true],
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
            fluid: ["kubejs:shimmer", 4500],
            result: "ae2:fluix_dust",
            cooling_time: 40,
            cast: ["ae2:certus_quartz_dust", true],
        },
        {
            fluid: ["tconstruct:molten_bronze", 4000],
            result: "create:cogwheel",
            cooling_time: 100,
            cast: ["tconstruct:coin_cast", false],
        },
        {
            fluid: ["tconstruct:molten_bronze", 12000],
            result: "create:large_cogwheel",
            cooling_time: 100,
            cast: ["tconstruct:gear_cast", false],
        },
        {
            fluid: ["tconstruct:molten_gold", 45000],
            result: "createastral:golden_bowl",
            cooling_time: 100,
            cast: ["tconstruct:round_plate_cast", false],
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
