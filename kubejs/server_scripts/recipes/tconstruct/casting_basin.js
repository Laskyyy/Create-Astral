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
            fluid: ["minecraft:lava", INGOT],
            result: "minecraft:deepslate",
            cooling_time: 140,
            cast: ["minecraft:cobblestone", true],
        },
        {
            fluid: ["yttr:void", BUCKET],
            result: "yttr:raw_gadolinite_block",
            cooling_time: 140,
            cast: ["ad_astra:raw_calorite_block", true],
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
        {
            fluid: ["kubejs:blast-resistant_cement", BUCKET / 2],
            result: "createastral:rocket_casing",
            cooling_time: 500,
            cast: ["kubejs:fire_resistant_fragile_sheet_block", true],
        },
        {
            fluid: ["kubejs:shimmer", BUCKET * 4],
            result: "createastral:ultramatter",
            cooling_time: 40,
            cast: ["yttr:compressed_ultrapure_carbon_block", true],
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
});
