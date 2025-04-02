onEvent("recipes", (event) => {
    // Can only be one input and output
    // Will only function if there are no blocks between it and the sky
    // Time is measured in ticks (20 ticks = 1 second)

    // The block will only accept dormant signal beacons as inputs, change the machine registry in kubejs/data/astralsignals/machines/signal_coordinator.json if you wish to modify this
    event.recipes.custommachinery
        .custom_machine("astralsignals:signal_coordinator", 4800)
        .mustSeeSky()
        .requireItem(Item.of("astralsignals:dormant_signal_beacon"))
        .produceItem(Item.of("astralsignals:stirring_signal_beacon"));
});
