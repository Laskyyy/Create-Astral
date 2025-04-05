onEvent("recipes", (event) => {
    [
        {
            input: [{ item: "techreborn:rubber_log" }],
            tool: {
                type: "farmersdelight:tool",
                tag: "c:tools/axes",
            },
            result: [{ item: "techreborn:rubber_log_stripped" }, { item: "farmersdelight:tree_bark" }],
        },
        {
            input: [{ item: "ad_astra:glacian_log" }],
            tool: {
                type: "farmersdelight:tool",
                tag: "c:tools/axes",
            },
            result: [{ item: "ad_astra:stripped_glacian_log" }, { item: "farmersdelight:tree_bark" }],
        },
        {
            input: [{ item: "tconstruct:bloodshroom_log" }],
            tool: {
                type: "farmersdelight:tool",
                tag: "c:tools/axes",
            },
            result: [{ item: "tconstruct:stripped_bloodshroom_log" }, { item: "farmersdelight:tree_bark" }],
        },
        {
            input: [{ item: "tconstruct:greenheart_log" }],
            tool: {
                type: "farmersdelight:tool",
                tag: "c:tools/axes",
            },
            result: [{ item: "tconstruct:stripped_greenheart_log" }, { item: "farmersdelight:tree_bark" }],
        },
        {
            input: [{ item: "tconstruct:skyroot_log" }],
            tool: {
                type: "farmersdelight:tool",
                tag: "c:tools/axes",
            },
            result: [{ item: "tconstruct:stripped_skyroot_log" }, { item: "farmersdelight:tree_bark" }],
        },
        {
            input: [{ item: "ae2:singularity" }],
            tool: {
                type: "farmersdelight:tool",
                tag: "c:tools/knives",
            },
            result: [{ item: "astralfoods:quantum_bites", count: 3 }],
        },
    ].forEach((recipe) => {
        event.custom({
            type: "farmersdelight:cutting",
            ingredients: recipe.input,
            tool: recipe.tool,
            result: recipe.result,
            sound: recipe.sound ?? "minecraft:item.axe.strip",
        });
    });
});
