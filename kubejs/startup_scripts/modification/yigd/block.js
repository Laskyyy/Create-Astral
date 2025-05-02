onEvent("block.modification", (event) => {
    event.modify("yigd:grave", (block) => {
        block.destroySpeed = -1;
    });
});
