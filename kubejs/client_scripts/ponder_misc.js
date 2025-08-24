(function ponder() {
  onEvent("ponder.tag", (event) => {
    // Registers tags as seen in the ponder index homepage

    const ponderTags = [
      {
        namespace: "kubejs:createastral_tips", // Anything unique to astral that isn't a machine or part of a kubejs addon e.g. astralsignals
        icon: "createastral:astral_singularity",
        displayName: "Create: Astral Tips",
        tooltip: "Tips and tricks specific to this modpack",
        assignedPonders: ["createastral:shimmering_stone"],
      },
      {
        namespace: "kubejs:createastral_machines", // Anything machinery that isnt astral signals or astral gens
        icon: "createastral:electrolyser_dummy",
        displayName: "Create: Astral Machines",
        tooltip: "Guides on the custom machines added by Astral",
        assignedPonders: ["createastral:electrolyser_dummy", "astraladditions:desizer_controller"],
      },
      {
        namespace: "kubejs:astralsignals", // Everything under the category of Astral Signals including machines and items
        icon: "astralsignals:data_drive_blank",
        displayName: "Astral Signals",
        tooltip: "Guide to Astral Signals",
        assignedPonders: [
          "astralsignals:signal_coordinator_dummy",
          "astralsignals:radio_telescope_dummy",
          "astralsignals:analog_decryptor_dummy",
          "astralsignals:pp_decryptor_dummy",
          "astralsignals:mp_decryptor_dummy",
          "astralsignals:drive_eraser_dummy",
        ],
      },
      {
        namespace: "kubejs:tconstruct", // Tips for how tconstruct works
        icon: "tconstruct:seared_table",
        displayName: "Tinker's Construct",
        tooltip: "Tinker's Construct basics",
        assignedPonders: ["tconstruct:seared_melter", "tconstruct:foundry_controller", "tconstruct:seared_faucet"],
      },
      {
        namespace: "kubejs:yttr",
        icon: "yttr:logo",
        displayName: "Yttr",
        tooltip: "Mechanics that push the boundaries of your gameplay",
        assignedPonders: ["yttr:root_of_continuity"],
      },
    ];

    ponderTags.forEach((tag) => {
      event.createTag(tag.namespace, tag.icon, tag.displayName, tag.tooltip, tag.assignedPonders);
    });
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
        (scene, util) => {}
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
