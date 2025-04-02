onEvent("recipes", (event) => {
    //Oxizidation
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
});
