onEvent("recipes", (event) => {
    // Can only be one input and output
    // Time is measured in ticks (20 ticks = 1 second)

    // The block will only accept garbled data drives as inputs, change the machine registry in kubejs/data/astralsignals/machines/analog_decryptor.json if you wish to modify this
    event.recipes.custommachinery
        .custom_machine("astralsignals:analog_decryptor", 1200)
        .requireItem(Item.of("astralsignals:data_drive_garbled"))
        .produceItem(Item.of("astralsignals:data_drive_dormant_t1"));
});
