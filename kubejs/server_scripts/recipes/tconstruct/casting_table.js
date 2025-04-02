onEvent("recipes", (event) => {
    [
        {
            fluid: ["kubejs:red_paste", 100 * mB],
            result: "minecraft;red_dye",
            cooling_time: 100,
        },
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
            fluid: ["tconstruct:molten_gold", INGOT * 4],
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
            fluid: ["kubejs:compound_mixture", mB * 11],
            result: "create:shaft",
            cooling_time: 10,
            cast: ["tconstruct:rod_cast", false],
        },
        {
            fluid: ["tconstruct:molten_uranium", mB * 500],
            result: "techreborn:data_storage_chip",
            cooling_time: 300,
            cast: ["tconstruct:rod_cast", false],
        },
        {
            fluid: ["kubejs:liquid_xp_nuggies", 8 * NUGGET],
            result: "minecraft:experience_bottle",
            cooling_time: 30,
            cast: ["minecraft:glass_bottle", true],
        },
        {
            fluid: ["tconstruct:molten_gold", INGOT],
            result: "createastral:gold_casted_rocket_fin",
            cooling_time: 30,
            cast: ["createastral:fragile_rocket_fin", true],
        },
        {
            fluid: ["tconstruct:molten_steel", INGOT],
            result: "astraladditions:steel_ring",
            cooling_time: 100,
            cast: ["astraladditions:ring_gold_cast", false],
        },
        {
            fluid: ["kubejs:shimmer", NUGGET * 3],
            result: "astraladditions:shimmer_lily",
            cooling_time: 20,
            cast: ["minecraft:lily_of_the_valley", true],
        },
        {
            fluid: ["tconstruct:seared_stone", NUGGET * 3],
            result: "astralfoods:seared_potato",
            cooling_time: 20,
            cast: ["minecraft:potato", true],
        },
        {
            fluid: ["tconstruct:molten_tin", BUCKET],
            result: "extended_drawers:shadow_drawer",
            cooling_time: 117, // same as cooling tin block
            cast: [{ tag: "extended_drawers:drawers" }, true],
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
