onEvent("block.registry", (event) => {
    event
        .create("kubejs:fragile_sheet_block", "basic")
        .material("stone")
        .displayName("Fragile Sheet Block")
        .defaultTranslucent()
        .hardness(1);

    event
        .create("kubejs:broken_fragile_sheet_block", "basic")
        .material("stone")
        .displayName("Broken Fragile Sheet Block")
        .defaultTranslucent()
        .hardness(1)
        .box(0, 0, 0, 16, 8, 16, true)
        .box(2, 8, 2, 14, 12, 14, true);

    event
        .create("kubejs:fire_resistant_fragile_sheet_block", "basic")
        .material("stone")
        .displayName("Fire Resistant Fragile Sheet Block")
        .defaultTranslucent()
        .hardness(1);

    event
        .create("kubejs:broken_fire_resistant_fragile_sheet_block", "basic")
        .material("stone")
        .displayName("Broken Fire Resistant Fragile Sheet Block")
        .defaultTranslucent()
        .hardness(1)
        .box(0, 0, 0, 16, 8, 16, true)
        .box(2, 8, 2, 14, 12, 14, true);
});
