onEvent("recipes", (event) => {
    sheetCompressing(event);
});

function sheetCompressing(event) {
    MATERIALS.forEach((material) => {
        event.custom({
            type: "techreborn:compressor",
            power: 10,
            time: 300,
            ingredients: [
                {
                    item: material.ingot,
                },
            ],
            results: [
                {
                    item: material.plate,
                },
            ],
        });
    });
}
