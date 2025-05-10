onEvent("recipes", (event) => {
    const newCopperSGCStructure = [
        ["aaa", "aaa", "ama"],
        ["ggg", "glg", "ggg"],
        ["aaa", "aaa", "aaa"],
    ];

    //? ["building material string", "output item string", time integer]
    //! A tag for the building material must be present in [kubejs/data/createastral/tags/blocks/stone_growth_chamber/building_blocks]!

    [
        ["andesite", "minecraft:andesite", 10],
        ["cobblestone", "minecraft:cobblestone", 10],
        ["glacio_cobblestone", "ad_astra:glacio_cobblestone", 10],
        ["mars_cobblestone", "ad_astra:mars_cobblestone", 10],
        ["mercury_cobblestone", "ad_astra:mercury_cobblestone", 10],
        ["moon_cobblestone", "ad_astra:moon_cobblestone", 10],
        ["venus_cobblestone", "ad_astra:venus_cobblestone", 10],
    ].forEach((recipe) => {
        event.custom({
            type: "custommachinery:custom_machine",
            machine: "createastral:stone_growth_chamber",
            time: recipe[2],
            requirements: [
                {
                    type: "custommachinery:structure",
                    keys: {
                        a: `createastral:stone_growth_chamber/building_blocks/${recipe[0]}`,
                        l: "minecraft:lava",
                        g: "createastral:stone_growth_chamber/glass_blocks",
                    },
                    pattern: newCopperSGCStructure,
                },
                {
                    type: "custommachinery:item",
                    item: recipe[1],
                    amount: 1,
                    mode: "output",
                },
            ],
        });
    });
});
