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
            energy: 5000,
        },
        {
            input: ["createastral:golden_pin", 1],
            output: ["createastral:electrified_pin", 1],
            energy: 800,
        },
        {
            input: ["astraladditions:shimmer_heart", 1],
            output: ["astraladditions:awakened_shimmer_heart", 1],
            energy: 800,
        },
        {
            input: ["yttr:neodymium_dust", 1],
            output: ["yttr:neodymium_disc", 1],
            energy: 5000,
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
            inputs: [{ item: "minecraft:coarse_dirt" }],
            outputs: [
                { item: "minecraft:dirt", chance: 1 },
                { item: "minecraft:flint", chance: 0.3 },
            ],
            processingTime: 50,
        },
        {
            inputs: [{ item: "minecraft:basalt" }],
            outputs: [
                { item: "minecraft:magma_cream", chance: 0.1 },
                { item: "minecraft:ghast_tear", chance: 0.05 },
                { item: "minecraft:blaze_powder", chance: 0.1 },
            ],
            processingTime: 200,
        },
        {
            inputs: [{ item: "minecraft:cobbled_deepslate" }],
            outputs: [
                { item: "minecraft:redstone", chance: 0.1 },
                { item: "create:copper_nugget", chance: 0.05 },
            ],
            processingTime: 50,
        },

        {
            inputs: [{ item: "extractinator:silt" }],
            outputs: [
                { item: "minecraft:raw_iron", chance: 0.2 },
                { item: "minecraft:raw_copper", chance: 0.4 },
                { item: "minecraft:raw_gold", chance: 0.2 },
                { item: "create:raw_zinc", chance: 0.2 },
            ],
            processingTime: 1000,
        },
        {
            inputs: [{ item: "extractinator:slush" }],
            outputs: [
                { item: "minecraft:raw_iron", chance: 0.2 },
                { item: "minecraft:raw_copper", chance: 0.4 },
                { item: "minecraft:raw_gold", chance: 0.2 },
                { item: "create:raw_zinc", chance: 0.2 },
            ],
            processingTime: 1000,
        },

        {
            inputs: [{ item: "minecraft:prismarine" }],
            outputs: [
                { item: "minecraft:cod", chance: 0.2 },
                { item: "minecraft:salmon", chance: 0.1 },
                { item: "minecraft:tropical_fish", chance: 0.05 },
                { item: "minecraft:pufferfish", chance: 0.03 },
                { item: "minecraft:nautilus_shell", chance: 0.02 },
                { item: "minecraft:lily_pad", chance: 0.2 },
                { item: "minecraft:glow_ink_sac", chance: 0.1 },
            ],
            processingTime: 100,
        },

        {
            inputs: [
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
            processingTime: 50,
        },
    ].forEach((recipe) => {
        const inputs = recipe.inputs.map((input) => input.item);
        const outputs = recipe.outputs.map((output) => Item.of(output.item).withChance(output.chance));
        event.recipes.createMilling(outputs, inputs);
    });
});
