onEvent("recipes", (event) => {
    //? [Input string, output string, amount integer]
    [
        ["tconstruct:molten_pig_iron", "tconstruct:blood", mB],
        ["techreborn:methane", "techreborn:carbon", mB],
        ["techreborn:helium", "techreborn:lithium", mB],
        ["createbigcannons:molten_cast_iron", "tconstruct:magma", mB],
        ["kubejs:metabolic_broth", "astraladditions:sputum", mB],
        ["techreborn:biofuel", "techreborn:methane", mB],
        ["techreborn:compressed_air", "techreborn:nitrogen", mB],
        ["estrogen:molten_amethyst", "kubejs:shimmer", mB * 10],
    ].forEach((recipe) => {
        event.custom({
            type: "estrogen:centrifuging",
            ingredients: [
                {
                    fluid: recipe[0],
                    amount: recipe[2],
                    nbt: {},
                },
            ],
            results: [
                {
                    fluid: recipe[1],
                    amount: recipe[2],
                },
            ],
        });
    });
});
