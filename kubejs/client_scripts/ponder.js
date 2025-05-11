(function ponder() {
  onEvent("ponder.tag", (event) => {
    event.createTag(
      "kubejs:createastral",
      "createastral:astral_singularity",
      "Create: Astral",
      "Tips and Tricks specific to this modpack",
      ["createastral:electrolyser_dummy", "createastral:shimmering_stone", "astraladditions:desizer_controller"],
    );
    event.createTag("kubejs:tconstruct", "tconstruct:seared_table", "Tinkers Construct", "Tinkers Construct Basics", [
      "tconstruct:seared_melter",
      "tconstruct:foundry_controller",
      "tconstruct:seared_faucet",
    ]);
  });
  onEvent("ponder.registry", (event) => {
    // Registers a ponder to the custom machine block, so create offers to ponder
    // This should never actually be played, as the ponder should be overwritten
    // using Ponder Overrides in the event handlers in the `ponders` directory
    event
      .create("custommachinery:custom_machine_item")
      .scene(
        "custom_machine_item",
        "You shouldn't see this ponder, it's a debug thing.",
        "kubejs:electrolyser",
        (scene, util) => {},
      );
  });
  // Registers overrides to show correct ponders
  onEvent("ponder.override", (event) => {
    const item = event.getItem();
    if (!("machine" in item.nbt && typeof item.nbt.machine === "string")) return;
    // Custom machines are based on _dummy blocks, where the actual ponders are registered
    const machineId = item.nbt.machine;
    switch (machineId) {
      case undefined:
        break;
      case "createastral:shimmer_refinery":
        event.override("yttr:void_filter");
        break;
      default:
        event.override(`${machineId}_dummy`);
        break;
    }
  });
})();
