(function astralSignalsPPDecryptorRecipes() {
  onEvent("recipes", (event) => {
    /**
     * Can only be one input and output
     * Requires continuous power to operate
     * Time is measured in ticks (20 ticks = 1 second)
     * The block will only accept dormant tier 1 drives as inputs.
     * Change the machine registry in kubejs/data/astralsignals/machines/pp_decryptor.json if you wish to modify this
     */
    event.recipes.custommachinery
      .custom_machine("astralsignals:pp_decryptor", 1200)
      .requireEnergyPerTick(50)
      .requireItem(Item.of("astralsignals:data_drive_dormant_t1"))
      .produceItem(Item.of("astralsignals:data_drive_dormant_t2"));
  });
})();
