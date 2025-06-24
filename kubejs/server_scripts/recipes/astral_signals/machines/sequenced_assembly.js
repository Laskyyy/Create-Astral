(function astralSignalsSequencedAssemblyRecipes() {
  const { BUCKET, GEM_BLOCK, SLIMEBALL, INGOT, GEM, NUGGET, mB } = global.fluids;
  const { createSequencedAssembly } = global.server;

  onEvent("recipes", (event) => {
    /**
     * @typedef AssemblyRecipe
     * @property {Internal.IngredientJS_} input
     * @property {Internal.IngredientJS_[]} outputs
     * @property {Internal.IngredientJS_} inter
     */

    /** @satisfies {AssemblyRecipe[]} */
    const assemblyRecipes = /** @type {const} */ ([
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
        outputs: [
          Item.of("astralsignals:data_drive_decrypted_purpleprison").withChance(1),
          Item.of("astralsignals:data_drive_decrypted_pigstep").withChance(1),
          Item.of("astralsignals:data_drive_decrypted_desertheat").withChance(1),
          Item.of("astralsignals:data_drive_decrypted_memorandum").withChance(1),
        ],
        inter: "astralsignals:inter_data_drive_dormant_t2",
      },
      {
        input: "astralsignals:data_drive_dormant_t3",
        outputs: [
          Item.of("astralsignals:data_drive_decrypted_wolfgif").withChance(1),
          Item.of("astralsignals:data_drive_decrypted_papillons").withChance(1),
          Item.of("astralsignals:data_drive_decrypted_torus").withChance(1),
          Item.of("astralsignals:data_drive_decrypted_void").withChance(1),
        ],
        inter: "astralsignals:inter_data_drive_dormant_t3",
      },
    ]);
    assemblyRecipes.forEach((inst) => {
      createSequencedAssembly(event, {
        input: inst.input,
        transitional: inst.inter,
        outputs: inst.outputs,
      })
        .addFillingStep({ fluid: "kubejs:shimmer", amount: BUCKET })
        .addPressingStep()
        .build();
    });
  });
})();
