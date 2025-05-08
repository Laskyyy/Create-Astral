(function astralSignalsRadioTelescopeRecipes() {
  onEvent("recipes", (event) => {
    // Can be up to 2 inputs and outputs
    // Will only function if there are no blocks between it and the sky
    // Time is measured in ticks (20 ticks = 1 second)
    // The block will only accept data drives and signal beacons as inputs, change the machine registry in kubejs/data/astralsignals/machines/radio_telescope.json if you wish to modify this
    event.recipes.custommachinery
      .custom_machine("astralsignals:radio_telescope", 1200)
      .mustSeeSky()
      .requireItem(Item.of("astralsignals:data_drive_blank"))
      .requireItem(Item.of("astralsignals:homing_signal_beacon"))
      .produceItem(Item.of("astralsignals:data_drive_garbled"))
      .produceItem(Item.of("astralsignals:dormant_signal_beacon"));
  });
})();
