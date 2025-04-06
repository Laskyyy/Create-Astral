onEvent("recipes", (event) => {
    sheetImplosionCompressing(event);
});

function sheetImplosionCompressing(event) {
    MATERIALS.forEach((material) => {
        event.custom({
            type: "techreborn:implosion_compressor",
            power: 30,
            time: 1200,
            ingredients: [
                {
                    item: material.block,
                },
                {
                    item: "minecraft:tnt",
                },
            ],
            results: [
                {
                    item: material.plate,
                    count: 9,
                },
            ],
        });
        event.custom({
            type: "techreborn:implosion_compressor",
            power: 50,
            time: 300,
            ingredients: [
                {
                    item: material.block,
                    count: 4,
                },
                {
                    item: "minecraft:end_crystal",
                },
            ],
            results: [
                {
                    item: material.plate,
                    count: 36,
                },
                {
                    item: "techreborn:dark_ashes_dust",
                    count: 4,
                },
            ],
        });
    });
}
