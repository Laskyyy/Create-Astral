onEvent("recipes", (event) => {
    const BLAZING_BLOOD_MADIC_AMOUNT = 1620;
    // const BLAZING_BLOOD_MADIC_AMOUNT = 4050;

    // entity - the entity to melt
    // result - [fluid, amount]
    // damage - the amount of damage done per damage tick
    [
        {
            entity: ["minecraft:blaze"],
            result: ["tconstruct:blazing_blood", BLAZING_BLOOD_MADIC_AMOUNT],
            damage: 2,
        },
    ].forEach((recipe) => {
        event.custom({
            type: "tconstruct:entity_melting",
            entity: {
                type: recipe.entity,
            },
            result: {
                fluid: recipe.result[0],
                amount: recipe.result[1],
            },
            damage: recipe.damage,
        });
    });
});
