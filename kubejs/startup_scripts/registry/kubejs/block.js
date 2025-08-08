(function kubeJSBlockRegistry() {
  onEvent("block.registry", (event) => {
    event
      .create("kubejs:fragile_sheet_block", "basic")
      .material("stone")
      .defaultTranslucent()
      .hardness(1)
      .displayName("Fragile Sheet Block");
    event
      .create("kubejs:broken_fragile_sheet_block", "basic")
      .material("stone")
      .defaultTranslucent()
      .hardness(1)
      .box(0, 0, 0, 16, 8, 16, true)
      .box(2, 8, 2, 14, 12, 14, true)
      .displayName("Broken Fragile Sheet Block");
    event
      .create("kubejs:fire_resistant_fragile_sheet_block", "basic")
      .material("stone")
      .defaultTranslucent()
      .hardness(1)
      .displayName("Fire Resistant Fragile Sheet Block");
    event
      .create("kubejs:broken_fire_resistant_fragile_sheet_block", "basic")
      .material("stone")
      .defaultTranslucent()
      .hardness(1)
      .box(0, 0, 0, 16, 8, 16, true)
      .box(2, 8, 2, 14, 12, 14, true)
      .displayName("Broken Fire Resistant Fragile Sheet Block");
  });
})();
