onEvent("recipes", (event) => {
    // CreateAdditions
    [
        {
            input: ["kubejs:molten_desh_bucket", 1],
            output: ["tconstruct:molten_electrum_bucket", 1],
            energy: 4000,
        },
        {
            input: ["techreborn:synthetic_redstone_crystal", 1],
            output: ["minecraft:redstone", 5],
            energy: 10000,
        },
        {
            input: ["createastral:golden_pin", 1],
            output: ["createastral:electrified_pin", 1],
            energy: 2500,
        },
        {
            input: ["kubejs:shimmer_bucket", 1],
            output: ["kubejs:molten_calorite_bucket", 1],
            energy: 10000000,
        },
    ].forEach((recipe) => {
        event.custom({
            type: "createaddition:charging",
            input: {
                item: recipe.input[0],
                count: recipe.input[1],
            },
            result: {
                item: recipe.output[0],
                count: recipe.output[1],
            },
            energy: recipe.energy,
        });
    });

    event.custom({
        type: "createaddition:rolling",
        input: {
            tag: "c:nuggets/gold",
        },
        result: {
            item: "createastral:golden_pin",
            count: 1,
        },
    });
    event.custom({
        type: "createaddition:rolling",
        input: {
            item: "ad_astra:calorite_nugget",
        },
        result: {
            item: "createastral:calorite_pin",
            count: 1,
        },
    });
    // CreateSifting
    [
        {
            inputs: [
                { item: "createsifter:andesite_mesh" },
                { item: "minecraft:gravel" },
            ],
            outputs: [
                { item: "minecraft:iron_nugget", chance: 0.15 },
                { item: "minecraft:flint", chance: 0.35 },
            ],
            processingTime: 200,
        },
        {
            inputs: [
                { item: "createsifter:andesite_mesh" },
                { item: "minecraft:sand" },
            ],
            outputs: [
                { item: "minecraft:bone", chance: 0.01 },
                { item: "minecraft:string", chance: 0.02 },
                { item: "minecraft:rotten_flesh", chance: 0.01 },
                { item: "minecraft:feather", chance: 0.01 },
                { item: "minecraft:ink_sac", chance: 0.005 },
            ],
            processingTime: 200,
        },
        {
            inputs: [
                { item: "createsifter:andesite_mesh" },
                { item: "minecraft:cobblestone" },
            ],
            outputs: [{ item: "techreborn:tin_nugget", chance: 0.05 }],
            processingTime: 200,
        },
        {
            inputs: [
                { item: "createsifter:andesite_mesh" },
                { item: "minecraft:flint" },
            ],
            outputs: [{ item: "minecraft:music_disc_13", chance: 0.0005 }],
            processingTime: 200,
        },
        {
            inputs: [
                { item: "createsifter:andesite_mesh" },
                { tag: "c:deepslate" },
            ],
            outputs: [{ item: "minecraft:redstone", chance: 0.05 }],
            processingTime: 200,
        },
        {
            inputs: [
                { item: "createsifter:andesite_mesh" },
                { item: "ad_astra:moon_sand" },
            ],
            outputs: [
                { item: "minecraft:gunpowder", chance: 0.05 },
                { item: "minecraft:glowstone_dust", chance: 0.1 },
                { item: "ae2:certus_quartz_dust", chance: 0.03 },
            ],
            processingTime: 400,
        },
        {
            inputs: [
                { item: "createsifter:andesite_mesh" },
                { item: "ad_astra:mars_sand" },
            ],
            outputs: [
                { item: "minecraft:gold_nugget", chance: 0.05 },
                { item: "techreborn:lazurite_dust", chance: 0.05 },
            ],
            processingTime: 600,
        },
        {
            inputs: [
                { item: "createsifter:andesite_mesh" },
                { item: "minecraft:coarse_dirt" },
            ],
            outputs: [
                { item: "minecraft:dirt", chance: 1 },
                { item: "minecraft:flint", chance: 0.3 },
            ],
            processingTime: 200,
        },
        {
            inputs: [
                { item: "createsifter:brass_mesh" },
                { item: "minecraft:basalt" },
            ],
            outputs: [
                { item: "minecraft:magma_cream", chance: 0.1 },
                { item: "minecraft:ghast_tear", chance: 0.05 },
                { item: "minecraft:blaze_powder", chance: 0.1 },
            ],
            processingTime: 200,
        },
        {
            inputs: [
                { item: "createsifter:andesite_mesh" },
                { item: "minecraft:basalt" },
            ],
            outputs: [{ item: "minecraft:ender_pearl", chance: 0.04 }],
            processingTime: 200,
        },

        {
            inputs: [
                { item: "createsifter:brass_mesh" },
                { item: "minecraft:cobblestone" },
            ],
            outputs: [{ item: "techreborn:tin_nugget", chance: 0.08 }],
            processingTime: 200,
        },
        {
            inputs: [
                { item: "createsifter:brass_mesh" },
                { item: "minecraft:flint" },
            ],
            outputs: [{ item: "minecraft:music_disc_13", chance: 0.001 }],
            processingTime: 200,
        },
        {
            inputs: [
                { item: "createsifter:brass_mesh" },
                { item: "minecraft:cobbled_deepslate" },
            ],
            outputs: [
                { item: "minecraft:redstone", chance: 0.07 },
                { item: "create:copper_nugget", chance: 0.05 },
            ],
            processingTime: 200,
        },

        {
            inputs: [
                { item: "createsifter:brass_mesh" },
                { item: "extractinator:silt" },
            ],
            outputs: [
                { item: "minecraft:raw_iron", chance: 0.2 },
                { item: "minecraft:raw_copper", chance: 0.4 },
                { item: "minecraft:raw_gold", chance: 0.2 },
                { item: "techreborn:raw_tin", chance: 0.2 },
                { item: "create:raw_zinc", chance: 0.2 },
                { item: "create:crushed_iron_ore", chance: 0.2 },
                { item: "create:crushed_copper_ore", chance: 0.4 },
                { item: "create:crushed_gold_ore", chance: 0.2 },
                { item: "create:crushed_tin_ore", chance: 0.2 },
                { item: "create:crushed_zinc_ore", chance: 0.2 },
            ],
            processingTime: 1000,
        },
        {
            inputs: [
                { item: "createsifter:brass_mesh" },
                { item: "extractinator:slush" },
            ],
            outputs: [
                { item: "minecraft:raw_iron", chance: 0.2 },
                { item: "minecraft:raw_copper", chance: 0.4 },
                { item: "minecraft:raw_gold", chance: 0.2 },
                { item: "techreborn:raw_tin", chance: 0.2 },
                { item: "create:raw_zinc", chance: 0.2 },
                { item: "create:crushed_iron_ore", chance: 0.2 },
                { item: "create:crushed_copper_ore", chance: 0.4 },
                { item: "create:crushed_gold_ore", chance: 0.2 },
                { item: "create:crushed_tin_ore", chance: 0.2 },
                { item: "create:crushed_zinc_ore", chance: 0.2 },
            ],
            processingTime: 1000,
        },

        {
            inputs: [
                {
                    item: "createsifter:andesite_mesh",
                },
                {
                    item: "minecraft:clay",
                },
            ],
            outputs: [
                {
                    item: "minecraft:kelp",
                    chance: 0.2,
                },
                {
                    item: "minecraft:seagrass",
                    chance: 0.3,
                },
                {
                    item: "minecraft:tube_coral",
                    chance: 0.05,
                },
                {
                    item: "minecraft:brain_coral",
                    chance: 0.05,
                },
                {
                    item: "minecraft:bubble_coral",
                    chance: 0.05,
                },
                {
                    item: "minecraft:fire_coral",
                    chance: 0.05,
                },
                {
                    item: "minecraft:horn_coral",
                    chance: 0.05,
                },
            ],
            processingTime: 500,
        },
    ].forEach((recipe) => {
        event.custom({
            type: "createsifter:sifting",
            ingredients: recipe.inputs,
            results: recipe.outputs,
            processingTime: recipe.processingTime,
        });
    });
});
