onEvent("block.registry", (event) => {
    event
        .create("doodads:asphalt_slab", "slab")
        .material("stone")
        .displayName("Asphalt Slab")
        .hardness(4)
        .tagBlock("minecraft:mineable/pickaxe")
        .textureAll("doodads:block/asphalt");

    event
        .create("doodads:asphalt_stair", "stairs")
        .material("stone")
        .displayName("Asphalt Stair")
        .hardness(4)
        .tagBlock("minecraft:mineable/pickaxe")
        .textureAll("doodads:block/asphalt");
});
