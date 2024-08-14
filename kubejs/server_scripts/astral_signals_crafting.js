onEvent("recipes", (event) => {
    [
        {
            inputs: {
                A: "minecraft:copper_ingot",
                B: "create:electron_tube",
                C: "phonos:redstone_chip",
            },
            shape: ["AAA", "BCB", "AAA"],
            output: "astralsignals:data_drive_blank",
        },
        {
            inputs: {
                A: "create:cut_tuff",
                B: "create:electron_tube",
                C: "phonos:redstone_chip",
            },
            shape: ["BAB", "ACA", " A "],
            output: "astralsignals:dormant_signal_beacon",
        },
        {
            inputs: {
                A: "create:cut_tuff",
                B: "astralsignals:ancient_receiver",
                C: "create:andesite_casing",
                D: "create:andesite_scaffolding",
            },
            shape: [" B ", "ACA", "D D"],
            output: Item.of("custommachinery:custom_machine_item", { machine: "astralsignals:signal_coordinator" }),
        },
        {
            inputs: {
                A: "create:cut_tuff",
                B: "create:display_board",
                C: "create:electron_tube",
                D: "computercraft:disk_drive",
            },
            shape: [" C ", " B ", "ADA"],
            output: Item.of("custommachinery:custom_machine_item", { machine: "astralsignals:radio_telescope" }),
        },
        {
            inputs: {
                A: "create:cut_tuff",
                B: "create:cogwheel",
                C: "create:electron_tube",
                D: "create:andesite_casing",
                E: "computercraft:disk_drive",
            },
            shape: ["ABA", "CDC", "AEA"],
            output: Item.of("custommachinery:custom_machine_item", { machine: "astralsignals:analog_decryptor" }),
        },
        {
            inputs: {
                A: "create:cut_tuff",
                B: "astralsignals:parallel_processor",
                C: "techreborn:electronic_circuit",
                D: "create:copper_casing",
                E: "computercraft:disk_drive",
            },
            shape: ["ABA", "CDC", "AEA"],
            output: Item.of("custommachinery:custom_machine_item", { machine: "astralsignals:pp_decryptor" }),
        },
        {
            inputs: {
                A: "create:cut_tuff",
                B: "astralsignals:microphysical_probe",
                C: "techreborn:industrial_circuit",
                D: "create:railway_casing",
                E: "computercraft:disk_drive",
            },
            shape: ["ABA", "CDC", "AEA"],
            output: Item.of("custommachinery:custom_machine_item", { machine: "astralsignals:mp_decryptor" }),
        },
        {
            inputs: {
                A: "create:cut_tuff",
                B: "create:mechanical_press",
                C: "create:electron_tube",
                D: "computercraft:disk_drive",
                E: "create:andesite_casing",
            },
            shape: ["ABA", "CDC", "AEA"],
            output: Item.of("custommachinery:custom_machine_item", { machine: "astralsignals:vinyl_printer" }),
        },
        {
            inputs: {
                A: "create:electron_tube",
                B: "computercraft:disk_drive",
                C: "create:cut_tuff",
            },
            shape: ["A A", "CBC", "CCC"],
            output: Item.of("custommachinery:custom_machine_item", { machine: "astralsignals:drive_eraser" }),
        },
        {
            inputs: {
                A: "astralsignals:polyvinyl_sheet",
                B: "astraladditions:shimmer_blaze_powder",
            },
            shape: ["BAB"],
            output: "astralsignals:shimmer_polyvinyl_sheet",
        },
        {
            inputs: {
                A: "astralsignals:shimmer_polyvinyl_sheet",
                B: "yttr:armor_plating",
            },
            shape: ["BAB"],
            output: "astralsignals:yttric_polyvinyl_sheet",
        },
    ].forEach((recipe) => {
        event.shaped(recipe.output, recipe.shape, recipe.inputs);
    });
});
