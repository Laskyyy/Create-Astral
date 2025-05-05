export function astralSignalsItemRegistry() {
  onEvent("item.registry", (event) => {
    event.create("astralsignals:ancient_receiver").rarity("uncommon"),
      event.create("astralsignals:parallel_processor").rarity("rare"),
      event.create("astralsignals:microphysical_probe").rarity("epic"),
      event.create("astralsignals:dormant_signal_beacon"),
      event.create("astralsignals:stirring_signal_beacon"),
      event.create("astralsignals:homing_signal_beacon").glow(true),
      event.create("astralsignals:data_drive_blank").displayName("Blank Data Drive"),
      event.create("astralsignals:data_drive_garbled").displayName("Garbled Data Drive"),
      event.create("astralsignals:polyvinyl_sheet"),
      event.create("astralsignals:shimmer_polyvinyl_sheet"),
      event.create("astralsignals:yttric_polyvinyl_sheet");

    event.create("astralsignals:data_drive_dormant_t1").displayName("Dormant Analagous Data Drive"),
      event.create("astralsignals:data_drive_dormant_t2").displayName("Dormant Parallel Data Drive"),
      event.create("astralsignals:data_drive_dormant_t3").displayName("Dormant Microphysical Data Drive");

    event
      .create("astralsignals:inter_stirring_signal_beacon", "create:sequenced_assembly")
      .displayName("Shimmered Stirring Signal Beacon"),
      event
        .create("astralsignals:inter_data_drive_dormant_t1", "create:sequenced_assembly")
        .displayName("Shimmered Dormant Analogous Data Drive"),
      event
        .create("astralsignals:inter_data_drive_dormant_t2", "create:sequenced_assembly")
        .displayName("Shimmered Dormant Parallel Data Drive"),
      event
        .create("astralsignals:inter_data_drive_dormant_t3", "create:sequenced_assembly")
        .displayName("Shimmered Dormant Microphysical Data Drive");

    [
      {
        id: "astralsignals:data_drive_decrypted_13",
        name: "Analogously Decrypted Data Drive - 13",
      },
      {
        id: "astralsignals:data_drive_decrypted_cat",
        name: "Analogously Decrypted Data Drive - cat",
      },
      {
        id: "astralsignals:data_drive_decrypted_blocks",
        name: "Analogously Decrypted Data Drive - blocks",
      },
      {
        id: "astralsignals:data_drive_decrypted_chirp",
        name: "Analogously Decrypted Data Drive - chirp",
      },
      {
        id: "astralsignals:data_drive_decrypted_far",
        name: "Analogously Decrypted Data Drive - far",
      },
      {
        id: "astralsignals:data_drive_decrypted_mall",
        name: "Analogously Decrypted Data Drive - mall",
      },
      {
        id: "astralsignals:data_drive_decrypted_mellohi",
        name: "Analogously Decrypted Data Drive - mellohi",
      },
      {
        id: "astralsignals:data_drive_decrypted_stal",
        name: "Analogously Decrypted Data Drive - stal",
      },
      {
        id: "astralsignals:data_drive_decrypted_strad",
        name: "Analogously Decrypted Data Drive - strad",
      },
      {
        id: "astralsignals:data_drive_decrypted_ward",
        name: "Analogously Decrypted Data Drive - ward",
      },
      {
        id: "astralsignals:data_drive_decrypted_11",
        name: "Analogously Decrypted Data Drive - 11",
      },
      {
        id: "astralsignals:data_drive_decrypted_wait",
        name: "Analogously Decrypted Data Drive - wait",
      },
      {
        id: "astralsignals:data_drive_decrypted_otherside",
        name: "Analogously Decrypted Data Drive - otherside",
      },
    ].forEach((item) => {
      event.create(item.id).displayName(item.name).glow(true);
    });

    [
      {
        id: "astralsignals:data_drive_decrypted_purpleprison",
        name: "Parallel Decrypted Data Drive - Purple Prison",
      },
      {
        id: "astralsignals:data_drive_decrypted_pigstep",
        name: "Parallel Decrypted Data Drive - Pigstep",
      },
      {
        id: "astralsignals:data_drive_decrypted_desertheat",
        name: "Parallel Decrypted Data Drive - Desert Heat",
      },
      {
        id: "astralsignals:data_drive_decrypted_memorandum",
        name: "Parallel Decrypted Data Drive - memorandum",
      },
    ].forEach((item) => {
      event.create(item.id).displayName(item.name).rarity("uncommon").glow(true);
    });

    [
      {
        id: "astralsignals:data_drive_decrypted_wolfgif",
        name: "Microphysically Decrypted Data Drive - Astral Lakes WolfGif Remix",
      },
      {
        id: "astralsignals:data_drive_decrypted_papillons",
        name: "Microphysically Decrypted Data Drive - papillons",
      },
      {
        id: "astralsignals:data_drive_decrypted_void",
        name: "Microphysically Decrypted Data Drive - void",
      },
      {
        id: "astralsignals:data_drive_decrypted_torus",
        name: "Microphysically Decrypted Data Drive - torus",
      },
    ].forEach((item) => {
      event.create(item.id).displayName(item.name).rarity("rare").glow(true);
    });
  });
}
