export function astralSignalsBlockRegistry() {
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
      .material("lantern")
      .hardness(2)
      .tagBlock("minecraft:mineable/pickaxe")
      .notSolid()
      .fullBlock(false)
      .displayName("PPD Dummy");

    event
      .create("astralsignals:mp_decryptor_dummy", "basic")

      .material("lantern")
      .hardness(2)
      .tagBlock("minecraft:mineable/pickaxe")
      .notSolid()
      .fullBlock(false)
      .displayName("MPD Dummy");

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
}
