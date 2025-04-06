onEvent("item.modification", (event) => {
    event.modify("farmersdelight:netherite_knife", (item) => {
        item.fireResistant = true;
    });
});
