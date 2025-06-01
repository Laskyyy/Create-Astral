(function astralSignalsMPDecryptorRecipes() {
  onEvent("recipes", (event) => {
    /**
     * Can have up to 2 inputs and only 1 output
     * Requires continuous power to operate
     * Can have a second input (typically Subatomic Ingots)
     * Time is measured in ticks (20 ticks = 1 second)
     * The block will only accept dormant tier 2 drives and subatomic ingots as inputs.
     * Change the machine registry in kubejs/data/astralsignals/machines/mp_decryptor.json if you wish to modify this
     */
    event.recipes.custommachinery
      .custom_machine("astralsignals:mp_decryptor", 1200)
      .requireEnergyPerTick(250)
      .requireItem(Item.of("createastral:subatomic_ingot"))
      .requireItem(Item.of("astralsignals:data_drive_dormant_t2"))
      .produceItem(Item.of("astralsignals:data_drive_dormant_t3"));
  });
})();
