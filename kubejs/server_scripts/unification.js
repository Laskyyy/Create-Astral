onEvent("recipes", (event) => {
    //TODO: move other unification recipes, which is NOT related to progession, to this file

    // target: Cut Copper block
    // another part of this is tag cleanup, see tags/unification.js
    event.remove({ id: "minecraft:cut_copper" });
    event.stonecutting("4x minecraft:cut_copper", "minecraft:copper_block");
});
