onEvent("ponder.tag", (
    /** @type {TagEvent} */
    event
) => {
    event.createTag(
        "kubejs:createastral",
        "createastral:astral_singularity",
        "Create: Astral",
        "Some helpful tips",
        ["createastral:electrolyser_dummy", "createastral:shimmering_stone"]
    );
    event.createTag(
        "kubejs:tconstruct",
        "tconstruct:seared_table",
        "Tinkers Construct",
        "Tinkers Construct Basics",
        [
            "tconstruct:seared_melter",
            "tconstruct:foundry_controller",
            "tconstruct:seared_faucet",
        ]
    );
});

onEvent("ponder.registry", (
    event
) => {
    // Registers a ponder to the custom machine block, so create offers to ponder
    // This should never actually be played, as the ponder should be overwritten
    // using Ponder Overrides in the event handlers in the `ponders` directory
    event
        .create("custommachinery:custom_machine_item")
        .scene(
            "custom_machine_item",
            "You shouldn't see this ponder, it's a debug thing.",
            "kubejs:electrolyser",
            (scene, util) => {}
        );
});

// Registers overrides to show correct ponders
onEvent("ponder.override", (event) => {
    /** @type {ItemStackJS} */
    const item = event.getItem();

    // Custom machines are based on _dummy blocks, where the actual ponders are registered
    /** @type {`createastral:${string}`} */
    const machineId = item.nbt.machine;
    if (machineId) {
        event.override(`${machineId}_dummy`);
    }
});
