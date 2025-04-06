onEvent("recipes", (event) => {
    //Oxidisation
    const oxidisationTypes = ["exposed", "weathered", "oxidized"];
    const vanillaCopperBlocks = ["cut_copper", "cut_copper_stairs", "cut_copper_slab"];
    const createCopperBlocks = [
        "copper_shingles",
        "copper_shingle_slab",
        "copper_shingle_stairs",
        "copper_tiles",
        "copper_tile_slab",
        "copper_tile_stairs",
    ];

    for (const block of vanillaCopperBlocks) {
        for (const state of oxidisationTypes) {
            event.stonecutting(`minecraft:${state}_${block}`, `minecraft:${block}`);
            event.stonecutting(`minecraft:waxed_${state}_${block}`, `minecraft:waxed_${block}`);
        }
    }
    for (const block of createCopperBlocks) {
        for (const state of oxidisationTypes) {
            event.stonecutting(`create:${state}_${block}`, `create:${block}`);
            event.stonecutting(`create:waxed_${state}_${block}`, `create:waxed_${block}`);
        }
    }
    for (const state of oxidisationTypes) {
        // Other recipes that dont fit much of a pattern
        // [Input string, Output string]
        [
            ["minecraft:copper_block", `minecraft:${state}_copper`],
            ["minecraft:waxed_copper_block", `minecraft:waxed_${state}_copper`],
            ["phonos:copper_speaker", `phonos:${state}_copper_speaker`],
            ["phonos:waxed_copper_speaker", `phonos:waxed_${state}_copper_speaker`],
            ["tconstruct:copper_platform", `tconstruct:${state}_copper_platform`],
            ["tconstruct:waxed_copper_platform", `tconstruct:waxed_${state}_copper_platform`],
        ].forEach((recipe) => {
            event.stonecutting(recipe[1], recipe[0]);
        });
    }
    /* 
    event.stonecutting("minecraft:exposed_copper", "minecraft:copper_block");
    event.stonecutting("minecraft:weathered_copper", "minecraft:copper_block");
    event.stonecutting("minecraft:oxidized_copper", "minecraft:copper_block");
    event.stonecutting("minecraft:waxed_exposed_copper", "minecraft:copper_block");
    event.stonecutting("minecraft:waxed_weathered_copper", "minecraft:copper_block");
    event.stonecutting("minecraft:waxed_oxidized_copper", "minecraft:copper_block");

    event.stonecutting("create:exposed_copper_shingles", "create:copper_shingles");
    event.stonecutting("create:exposed_copper_tiles", "create:copper_tiles");
    event.stonecutting("create:weathered_copper_shingles", "create:copper_shingles");
    event.stonecutting("create:weathered_copper_tiles", "create:copper_tiles");
    event.stonecutting("create:oxidized_copper_shingles", "create:copper_shingles");
    event.stonecutting("create:oxidized_copper_tiles", "create:copper_tiles");
    */
});
