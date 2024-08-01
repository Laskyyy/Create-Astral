onEvent("recipes", (event) => {
    // Signal Coordinator
    event.recipes.custommachinery
        .custom_machine("astralsignals:signal_coordinator", 4800)
        .mustSeeSky()
        .requireItem(Item.of("astralsignals:dormant_signal_beacon"))
        .produceItem(Item.of("astralsignals:stirring_signal_beacon"));

    // Beacon/Drive awakening
    [
        {
            input: "astralsignals:stirring_signal_beacon",
            outputs: [
                Item.of("astralsignals:homing_signal_beacon").withChance(1 / 3),
                "astralsignals:dormant_signal_beacon",
            ],
            inter: "astralsignals:inter_stirring_signal_beacon",
        },
        {
            input: "astralsignals:data_drive_dormant_t1",
            outputs: [
                Item.of("astralsignals:data_drive_decrypted_13").withChance(1),
                Item.of("astralsignals:data_drive_decrypted_cat").withChance(1),
                Item.of("astralsignals:data_drive_decrypted_blocks").withChance(1),
                Item.of("astralsignals:data_drive_decrypted_chirp").withChance(1),
                Item.of("astralsignals:data_drive_decrypted_far").withChance(1),
                Item.of("astralsignals:data_drive_decrypted_mall").withChance(1),
                Item.of("astralsignals:data_drive_decrypted_mellohi").withChance(1),
                Item.of("astralsignals:data_drive_decrypted_stal").withChance(1),
                Item.of("astralsignals:data_drive_decrypted_strad").withChance(1),
                Item.of("astralsignals:data_drive_decrypted_ward").withChance(1),
                Item.of("astralsignals:data_drive_decrypted_11").withChance(1),
                Item.of("astralsignals:data_drive_decrypted_wait").withChance(1),
                Item.of("astralsignals:data_drive_decrypted_otherside").withChance(1),
            ],
            inter: "astralsignals:inter_data_drive_dormant_t1",
        },
        {
            input: "astralsignals:data_drive_dormant_t2",
            outputs: [Item.of("astralsignals:data_drive_decrypted_purpleprison").withChance(1)],
            inter: "astralsignals:inter_data_drive_dormant_t2",
        },
        {
            input: "astralsignals:data_drive_dormant_t3",
            outputs: [Item.of("astralsignals:data_drive_decrypted_wolfgif").withChance(1)],
            inter: "astralsignals:inter_data_drive_dormant_t3",
        },
    ].forEach((inst) => {
        event.recipes
            .createSequencedAssembly(inst.outputs, inst.input, [
                event.recipes.createFilling(inst.inter, [inst.inter, { fluid: "kubejs:shimmer", amount: 81000 }]),
                event.recipes.createPressing(inst.inter, inst.inter),
            ])
            .transitionalItem(inst.inter)
            .loops(1);
    });

    // Radio Telescope
    event.recipes.custommachinery
        .custom_machine("astralsignals:radio_telescope", 1200)
        .mustSeeSky()
        .requireItem(Item.of("astralsignals:data_drive_blank"))
        .requireItem(Item.of("astralsignals:homing_signal_beacon"))
        .produceItem(Item.of("astralsignals:data_drive_garbled"))
        .produceItem(Item.of("astralsignals:dormant_signal_beacon"));

    // Analog Decryptor
    event.recipes.custommachinery
        .custom_machine("astralsignals:analog_decryptor", 1200)
        .requireItem(Item.of("astralsignals:data_drive_garbled"))
        .produceItem(Item.of("astralsignals:data_drive_dormant_t1"));

    // PPD
    event.recipes.custommachinery
        .custom_machine("astralsignals:pp_decryptor", 1200)
        .requireEnergyPerTick(50)
        .requireItem(Item.of("astralsignals:data_drive_dormant_t1"))
        .produceItem(Item.of("astralsignals:data_drive_dormant_t2"));

    // MPD
    event.recipes.custommachinery
        .custom_machine("astralsignals:mp_decryptor", 1200)
        .requireEnergyPerTick(250)
        .requireItem(Item.of("createastral:subatomic_ingot"))
        .requireItem(Item.of("astralsignals:data_drive_dormant_t2"))
        .produceItem(Item.of("astralsignals:data_drive_dormant_t3"));

    // Vinyl printer
    [
        {
            drive: "astralsignals:data_drive_decrypted_13",
            disc: "astralsignals:polyvinyl_sheet",
            output: "minecraft:music_disc_13",
        },
        {
            drive: "astralsignals:data_drive_decrypted_cat",
            disc: "astralsignals:polyvinyl_sheet",
            output: "minecraft:music_disc_cat",
        },
        {
            drive: "astralsignals:data_drive_decrypted_blocks",
            disc: "astralsignals:polyvinyl_sheet",
            output: "minecraft:music_disc_blocks",
        },
        {
            drive: "astralsignals:data_drive_decrypted_chirp",
            disc: "astralsignals:polyvinyl_sheet",
            output: "minecraft:music_disc_chirp",
        },
        {
            drive: "astralsignals:data_drive_decrypted_far",
            disc: "astralsignals:polyvinyl_sheet",
            output: "minecraft:music_disc_far",
        },
        {
            drive: "astralsignals:data_drive_decrypted_mall",
            disc: "astralsignals:polyvinyl_sheet",
            output: "minecraft:music_disc_mall",
        },
        {
            drive: "astralsignals:data_drive_decrypted_mellohi",
            disc: "astralsignals:polyvinyl_sheet",
            output: "minecraft:music_disc_mellohi",
        },
        {
            drive: "astralsignals:data_drive_decrypted_stal",
            disc: "astralsignals:polyvinyl_sheet",
            output: "minecraft:music_disc_stal",
        },
        {
            drive: "astralsignals:data_drive_decrypted_strad",
            disc: "astralsignals:polyvinyl_sheet",
            output: "minecraft:music_disc_strad",
        },
        {
            drive: "astralsignals:data_drive_decrypted_ward",
            disc: "astralsignals:polyvinyl_sheet",
            output: "minecraft:music_disc_ward",
        },
        {
            drive: "astralsignals:data_drive_decrypted_11",
            disc: "astralsignals:polyvinyl_sheet",
            output: "minecraft:music_disc_11",
        },
        {
            drive: "astralsignals:data_drive_decrypted_wait",
            disc: "astralsignals:polyvinyl_sheet",
            output: "minecraft:music_disc_wait",
        },
        {
            drive: "astralsignals:data_drive_decrypted_otherside",
            disc: "astralsignals:polyvinyl_sheet",
            output: "minecraft:music_disc_otherside",
        },
        {
            drive: "astralsignals:data_drive_decrypted_purpleprison",
            disc: "astralsignals:shimmer_polyvinyl_sheet",
            output: "astraladditions:disc_purple_prison",
        },
        {
            drive: "astralsignals:data_drive_decrypted_wolfgif",
            disc: "astralsignals:yttric_polyvinyl_sheet",
            output: "astraladditions:disc_astral_lakes_remix",
        },
    ].forEach((print) => {
        event.recipes.custommachinery
            .custom_machine("astralsignals:vinyl_printer", 200)
            .requireItem(print.drive)
            .requireItem(print.disc)
            .produceItem(Item.of("astralsignals:data_drive_blank"))
            .produceItem(print.output);
    });

    // Drive Eraser
    [
        ["astralsignals:data_drive_garbled"],
        ["astralsignals:data_drive_decrypted_13"],
        ["astralsignals:data_drive_decrypted_cat"],
        ["astralsignals:data_drive_decrypted_blocks"],
        ["astralsignals:data_drive_decrypted_chirp"],
        ["astralsignals:data_drive_decrypted_far"],
        ["astralsignals:data_drive_decrypted_mall"],
        ["astralsignals:data_drive_decrypted_mellohi"],
        ["astralsignals:data_drive_decrypted_stal"],
        ["astralsignals:data_drive_decrypted_strad"],
        ["astralsignals:data_drive_decrypted_ward"],
        ["astralsignals:data_drive_decrypted_11"],
        ["astralsignals:data_drive_decrypted_wait"],
        ["astralsignals:data_drive_decrypted_otherside"],
        ["astralsignals:data_drive_decrypted_purpleprison"],
        ["astralsignals:data_drive_decrypted_wolfgif"],
    ].forEach((drive) => {
        event.recipes.custommachinery
            .custom_machine("astralsignals:drive_eraser", 40)
            .requireItem(drive[0])
            .produceItem(Item.of("astralsignals:data_drive_blank"));
    });
});
