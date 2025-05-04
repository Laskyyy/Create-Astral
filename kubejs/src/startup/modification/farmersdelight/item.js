onEvent("item.modification", (event) => {
    event.modify("farmersdelight:netherite_knife", (item) => {
        item.fireResistant = true; // this annoys me that it isn't fireproof already
    });
});
