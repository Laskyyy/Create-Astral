onEvent("recipes", (event) => {
    event.shaped("4x minecraft:chest", ["XXX", "X X", "XXX"], {
        X: "#minecraft:logs",
    });
    
    //! mushroom dye recipes! made by wetmanux
    event.shapeless(
        Item.of("minecraft:brown_dye"),
        [
            "minecraft:brown_mushroom",
        ]
    );
    event.shapeless(
        Item.of("minecraft:red_dye"),
        [
            "minecraft:red_mushroom",
        ]
    );
});
