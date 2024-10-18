const WOODS = [
    {
        mod: "minecraft",
        type: "oak",
        tag: "minecraft:oak_logs",
    },
    {
        mod: "minecraft",
        type: "birch",
        tag: "minecraft:birch_logs",
    },
    {
        mod: "minecraft",
        type: "spruce",
        tag: "minecraft:spruce_logs",
    },
    {
        mod: "minecraft",
        type: "jungle",
        tag: "minecraft:jungle_logs",
    },
    {
        mod: "minecraft",
        type: "acacia",
        tag: "minecraft:acacia_logs",
    },
    {
        mod: "minecraft",
        type: "dark_oak",
        tag: "minecraft:dark_oak_logs",
    },
    {
        mod: "minecraft",
        type: "crimson",
        tag: "minecraft:crimson_stems",
    },
    {
        mod: "minecraft",
        type: "warped",
        tag: "minecraft:warped_stems",
    },
    {
        mod: "ad_astra",
        type: "glacian",
        tag: "ad_astra:glacian_logs",
    },
    {
        mod: "techreborn",
        type: "rubber",
        tag: "techreborn:rubber_logs",
    },
    {
        mod: "tconstruct",
        type: "greenheart",
        tag: "tconstruct:greenheart_logs",
    },
    {
        mod: "tconstruct",
        type: "skyroot",
        tag: "tconstruct:skyroot_logs",
    },
    {
        mod: "tconstruct",
        type: "bloodshroom",
        tag: "tconstruct:bloodshroom_logs",
    },
    {
        mod: "vinery",
        type: "cherry",
        tag: "vinery:cherry_logs",
    },
];

onEvent("recipes", (event) => {
    event.remove({ type: "techreborn:industrial_sawmill" });
    WOODS.forEach((wood) => {
        let mod_id = wood.mod;
        let type = wood.type;

        event.custom({
            type: "techreborn:industrial_sawmill",
            power: 10,
            time: 200,
            ingredients: [
                {
                    tag: `createastral:barked_${type}_logs`,
                },
            ],
            results: [
                {
                    item: `${mod_id}:${type}_planks`,
                    count: 8,
                },
                {
                    item: "techreborn:saw_dust",
                    count: 3,
                },
                {
                    item: "farmersdelight:tree_bark",
                    count: 1,
                },
            ],
            tank: {
                fluid: "minecraft:water",
                amount: {
                    droplets: 100 * mB,
                },
            },
        });
        event.custom({
            type: "techreborn:industrial_sawmill",
            power: 10,
            time: 200,
            ingredients: [
                {
                    tag: `createastral:stripped_${type}_logs`,
                },
            ],
            results: [
                {
                    item: `${mod_id}:${type}_planks`,
                    count: 8,
                },
                {
                    item: "techreborn:saw_dust",
                    count: 3,
                },
            ],
            tank: {
                fluid: "minecraft:water",
                amount: {
                    droplets: 100 * mB,
                },
            },
        });
    });
});
