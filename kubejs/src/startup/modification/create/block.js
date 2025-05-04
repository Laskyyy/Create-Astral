onEvent("block.modification", (event) => {
    event.modify("create:large_cogwheel", (block) => {
        block.material = "Lantern";
    });

    event.modify("create:cogwheel", (block) => {
        block.material = "Lantern";
    });
});
