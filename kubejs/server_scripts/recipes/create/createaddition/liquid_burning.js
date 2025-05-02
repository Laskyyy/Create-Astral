onEvent("recipes", (event) => {
    //? [Input string, burntime (ticks) integer, superheated boolean]
    [
        [{ fluid: "createaddition:bioethanol", amount: BUCKET }, 12000, false],
        [{ fluid: "minecraft:lava", amount: BUCKET }, 6000, false],
        [{ fluid: "createaddition:seed_oil", amount: BUCKET }, 6000, false],
        [{ fluid: "tconstruct:blazing_blood", amount: BUCKET }, 18000, false],
        [{ fluid: "kubejs:hellfire", amount: BUCKET / 4 }, 2400, true],
    ].forEach((recipe) => {
        event.custom({
            type: "createaddition:liquid_burning",
            input: recipe[0],
            burnTime: recipe[1],
            superheated: recipe[2],
        });
    });
});
