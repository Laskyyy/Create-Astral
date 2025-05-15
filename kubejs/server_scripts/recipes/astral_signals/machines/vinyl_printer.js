(function astralSignalsVinylPrinterRecipes() {
  onEvent("recipes", (event) => {
    /**
     * @typedef PrinterRecipe
     * @property {Special.Item} drive
     * @property {Special.Item} disc
     * @property {Special.Item} output
     */

    /**
     * Can be up to 2 inputs and only 1 output.
     *
     * Can have a second input (typically respectively tiered polyvinyl sheet).
     *
     * All recipes take 200 ticks (10 seconds).
     * @type {PrinterRecipe[]}
     */
    const printerRecipes = [
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
        drive: "astralsignals:data_drive_decrypted_pigstep",
        disc: "astralsignals:shimmer_polyvinyl_sheet",
        output: "minecraft:music_disc_pigstep",
      },
      {
        drive: "astralsignals:data_drive_decrypted_desertheat",
        disc: "astralsignals:shimmer_polyvinyl_sheet",
        output: "yttr:music_disc_desert_heat",
      },
      {
        drive: "astralsignals:data_drive_decrypted_memorandum",
        disc: "astralsignals:shimmer_polyvinyl_sheet",
        output: "yttr:music_disc_memorandum",
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
      {
        drive: "astralsignals:data_drive_decrypted_papillons",
        disc: "astralsignals:yttric_polyvinyl_sheet",
        output: "yttr:music_disc_papillons",
      },
      {
        drive: "astralsignals:data_drive_decrypted_void",
        disc: "astralsignals:yttric_polyvinyl_sheet",
        output: "yttr:music_disc_void",
      },
      {
        drive: "astralsignals:data_drive_decrypted_torus",
        disc: "astralsignals:yttric_polyvinyl_sheet",
        output: "yttr:music_disc_torus",
      },
    ];
    printerRecipes.forEach((print) => {
      event.recipes.custommachinery
        .custom_machine("astralsignals:vinyl_printer", 200)
        .requireItem(print.drive)
        .requireItem(print.disc)
        .produceItem(Item.of("astralsignals:data_drive_blank"))
        .produceItem(print.output);
    });
  });
})();
