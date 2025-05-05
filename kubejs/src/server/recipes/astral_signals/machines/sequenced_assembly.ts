import { BUCKET } from "fluid-constants";

export function astralSignalsSequencedAssemblyRecipes() {
  onEvent("recipes", (event) => {
    interface AssemblyRecipe {
      input: Internal.IngredientJS_
      outputs: Internal.IngredientJS_[]
      inter: Internal.IngredientJS_
    }

    const assemblyRecipes = [
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
    ] as const satisfies AssemblyRecipe[];
    assemblyRecipes.forEach((inst) => {
      event.recipes
        .create.sequenced_assembly(inst.outputs, inst.input, [
          event.recipes.createFilling(inst.inter, [inst.inter, { fluid: "kubejs:shimmer", amount: BUCKET }]),
          event.recipes.createPressing(inst.inter, inst.inter),
        ])
        .transitionalItem(inst.inter)
        .loops(1);
    });
  });
}
