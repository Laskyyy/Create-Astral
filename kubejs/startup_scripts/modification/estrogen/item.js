onEvent("item.modification", (event) => {
    event.modify("estrogen:estrogen_pill", (item) => {
        item.maxStackSize = 64;
    });

    event.modify("estrogen:crystal_estrogen_pill", (item) => {
        item.maxStackSize = 64;
    });

    event.modify("estrogen:estrogen_patches", (item) => {
        item.maxStackSize = 1;
    });
});
