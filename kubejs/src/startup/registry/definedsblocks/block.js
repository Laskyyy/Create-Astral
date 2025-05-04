onEvent("block.registry", (event) => {
    event
        .create("definedsblocks:undefined_block")
        .material("bone")
        .hardness(26)
        .displayName("uhhh ignore this")
        .tagBlock("minecraft:mineable/pickaxe");
});
