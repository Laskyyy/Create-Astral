onEvent("recipes", (event) => {
    event.shaped("4x minecraft:chest", ["XXX", "X X", "XXX"], {
        X: "#minecraft:logs",
    });

    event.shapeless(
        Item.of("tconstruct:sky_slime_ball"),
        [
            "create:dough",
            "minecraft:cyan_dye"
        ]
    );
});
