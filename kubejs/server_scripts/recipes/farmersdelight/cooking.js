onEvent("recipes", (event) => {
    [
        {
            input: [{ item: "createastral:astral_singularity" }],
            output: { item: "astralfoods:astral_sauce" },
            xp: 10.0,
            time: 360,
        },
        {
            input: [
                { item: "astralfoods:astral_sauce" },
                { item: "astralfoods:quantum_bites" },
                { item: "farmersdelight:raw_pasta" },
            ],
            output: { item: "astralfoods:quantum_pasta" },
            xp: 8.0,
            time: 300,
        },
    ].forEach((recipe) => {
        event.custom({
            type: "farmersdelight:cooking",
            cookingtime: recipe.time,
            experience: recipe.xp,
            ingredients: recipe.input,
            recipe_book_tab: "drinks", // ignore this
            result: recipe.output,
        });
    });
});
