export function astralSignalsDriveEraserRecipes() {
  onEvent("recipes", (event) => {
    // Only one input
    // Will always return a blank data drive
    // All recipes take 40 ticks (2 seconds)

    // The block will only accept non-blank data drives as inputs, change the machine registry in kubejs/data/astralsignals/machines/drive_eraser.json if you wish to modify this
    const dataDrives: Special.Item[] = [
      "astralsignals:data_drive_garbled",
      "astralsignals:data_drive_dormant_t1",
      "astralsignals:data_drive_dormant_t2",
      "astralsignals:data_drive_dormant_t3",
      "astralsignals:data_drive_decrypted_13",
      "astralsignals:data_drive_decrypted_cat",
      "astralsignals:data_drive_decrypted_blocks",
      "astralsignals:data_drive_decrypted_chirp",
      "astralsignals:data_drive_decrypted_far",
      "astralsignals:data_drive_decrypted_mall",
      "astralsignals:data_drive_decrypted_mellohi",
      "astralsignals:data_drive_decrypted_stal",
      "astralsignals:data_drive_decrypted_strad",
      "astralsignals:data_drive_decrypted_ward",
      "astralsignals:data_drive_decrypted_11",
      "astralsignals:data_drive_decrypted_wait",
      "astralsignals:data_drive_decrypted_otherside",
      "astralsignals:data_drive_decrypted_purpleprison",
      "astralsignals:data_drive_decrypted_wolfgif",
      "astralsignals:data_drive_decrypted_desertheat",
      "astralsignals:data_drive_decrypted_memorandum",
      "astralsignals:data_drive_decrypted_papillons",
      "astralsignals:data_drive_decrypted_pigstep",
      "astralsignals:data_drive_decrypted_torus",
      "astralsignals:data_drive_decrypted_void",
    ];
    dataDrives.forEach((drive) => {
      event.recipes.custommachinery
        .custom_machine("astralsignals:drive_eraser", 40)
        .requireItem(drive)
        .produceItem(Item.of("astralsignals:data_drive_blank"));
    });
  });
}
