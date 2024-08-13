onEvent("block.registry", (event) => {
    // VotV Reference??!!

    // This file is separate because the block registry wouldn't work for whatever stupid reason i hate kubejs so much
    // What am i saying i cant stay mad at you kubey :3

    event
        .create("astralsignals:signal_coordinator_dummy", "basic")
        .material("wood")
        .hardness(2)
        .tagBlock("minecraft:mineable/axe")
        .notSolid()
        .fullBlock(false);

    event
        .create("astralsignals:radio_telescope_dummy", "basic")
        .material("lantern")
        .hardness(2)
        .tagBlock("minecraft:mineable/pickaxe")
        .notSolid()
        .fullBlock(false);

    event
        .create("astralsignals:analog_decryptor_dummy", "basic")
        .material("wood")
        .hardness(2)
        .tagBlock("minecraft:mineable/axe")
        .notSolid()
        .fullBlock(false);

    event
        .create("astralsignals:pp_decryptor_dummy", "basic")
        .displayName("PPD Dummy")
        .material("lantern")
        .hardness(2)
        .tagBlock("minecraft:mineable/pickaxe")
        .notSolid()
        .fullBlock(false);

    event
        .create("astralsignals:mp_decryptor_dummy", "basic")
        .displayName("MPD Dummy")
        .material("lantern")
        .hardness(2)
        .tagBlock("minecraft:mineable/pickaxe")
        .notSolid()
        .fullBlock(false);

    event
        .create("astralsignals:drive_eraser_dummy", "basic")
        .material("wood")
        .hardness(2)
        .tagBlock("minecraft:mineable/axe")
        .notSolid()
        .fullBlock(false);

    event
        .create("astralsignals:vinyl_printer_dummy", "basic")
        .material("wood")
        .hardness(2)
        .tagBlock("minecraft:mineable/axe")
        .notSolid()
        .fullBlock(false);
});

onEvent("item.registry", (event) => {
    event.create("astralsignals:ancient_receiver").rarity("Uncommon"),
        event.create("astralsignals:parallel_processor").rarity("Rare"),
        event.create("astralsignals:microphysical_probe").rarity("Epic"),
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
    ].forEach((item) => {
        event.create(item.id).displayName(item.name).rarity("Uncommon").glow(true);
    });

    [
        {
            id: "astralsignals:data_drive_decrypted_wolfgif",
            name: "Microphysically Decrypted Data Drive - Astral Lakes WolfGif Remix",
        },
    ].forEach((item) => {
        event.create(item.id).displayName(item.name).rarity("Rare").glow(true);
    });
});
