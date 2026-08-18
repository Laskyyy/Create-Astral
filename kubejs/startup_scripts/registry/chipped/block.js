(function chippedBlockRegistry() {
  onEvent("block.registry", (event) => {
    event
      .create("chipped:crimson_stem_12")
      .material("nether_wood")
      .hardness(2)
      .tagBoth("chipped:crimson_stem")
      .displayName("Rotten Crimson Stem")
      .property(BlockProperties.AXIS)
      .placementState(event =>
        event.set(
          BlockProperties.AXIS,
          `${event.clickedFace.axis}`
        )
      )
      .blockstateJson = {
        "variants": {
          "axis=x": { "model": "chipped:block/crimson_stem_12_horizontal", "x": 90, "y": 90 },
          "axis=y": { "model": "chipped:block/crimson_stem_12" },
          "axis=z": { "model": "chipped:block/crimson_stem_12_horizontal", "x": 90 }
        }
      };
    event
      .create("chipped:crimson_stem_13")
      .material("nether_wood")
      .hardness(2)
      .tagBoth("chipped:crimson_stem")
      .displayName("Shrooming Crimson Stem")
      .property(BlockProperties.AXIS)
      .placementState(event =>
        event.set(
          BlockProperties.AXIS,
          `${event.clickedFace.axis}`
        )
      )
      .blockstateJson = {
        "variants": {
          "axis=x": { "model": "chipped:block/crimson_stem_13_horizontal", "x": 90, "y": 90 },
          "axis=y": { "model": "chipped:block/crimson_stem_13" },
          "axis=z": { "model": "chipped:block/crimson_stem_13_horizontal", "x": 90 }
        }
      };
    event
      .create("chipped:crimson_stem_14")
      .material("nether_wood")
      .hardness(2)
      .tagBoth("chipped:crimson_stem")
      .displayName("Smooth Crimson Stem")
      .property(BlockProperties.AXIS)
      .placementState(event =>
        event.set(
          BlockProperties.AXIS,
          `${event.clickedFace.axis}`
        )
      )
      .blockstateJson = {
        "variants": {
          "axis=x": { "model": "chipped:block/crimson_stem_14_horizontal", "x": 90, "y": 90 },
          "axis=y": { "model": "chipped:block/crimson_stem_14" },
          "axis=z": { "model": "chipped:block/crimson_stem_14_horizontal", "x": 90 }
        }
      };
    event
      .create("chipped:stripped_dark_oak_log_12")
      .material("wood")
      .hardness(2)
      .tagBoth("chipped:stripped_dark_oak_log")
      .displayName("Patient Stripped Dark Oak Log")
      .property(BlockProperties.AXIS)
      .placementState(event =>
        event.set(
          BlockProperties.AXIS,
          `${event.clickedFace.axis}`
        )
      )
      .blockstateJson = {
        "variants": {
          "axis=x": { "model": "chipped:block/stripped_dark_oak_log_12_horizontal", "x": 90, "y": 90 },
          "axis=y": { "model": "chipped:block/stripped_dark_oak_log_12" },
          "axis=z": { "model": "chipped:block/stripped_dark_oak_log_12_horizontal", "x": 90 }
        }
      };
    event
      .create("chipped:stripped_dark_oak_log_13")
      .material("wood")
      .hardness(2)
      .tagBoth("chipped:stripped_dark_oak_log")
      .displayName("Reinforced Stripped Dark Oak Log")
      .property(BlockProperties.AXIS)
      .placementState(event =>
        event.set(
          BlockProperties.AXIS,
          `${event.clickedFace.axis}`
        )
      )
      .blockstateJson = {
        "variants": {
          "axis=x": { "model": "chipped:block/stripped_dark_oak_log_13_horizontal", "x": 90, "y": 90 },
          "axis=y": { "model": "chipped:block/stripped_dark_oak_log_13" },
          "axis=z": { "model": "chipped:block/stripped_dark_oak_log_13_horizontal", "x": 90 }
        }
      };
    event
      .create("chipped:stripped_dark_oak_log_14")
      .material("wood")
      .hardness(2)
      .tagBoth("chipped:stripped_dark_oak_log")
      .displayName("M Sign Stripped Dark Oak Log")
      .property(BlockProperties.AXIS)
      .placementState(event =>
        event.set(
          BlockProperties.AXIS,
          `${event.clickedFace.axis}`
        )
      )
      .blockstateJson = {
        "variants": {
          "axis=x": { "model": "chipped:block/stripped_dark_oak_log_14_horizontal", "x": 90, "y": 90 },
          "axis=y": { "model": "chipped:block/stripped_dark_oak_log_14" },
          "axis=z": { "model": "chipped:block/stripped_dark_oak_log_14_horizontal", "x": 90 }
        }
      };
    event
      .create("chipped:stripped_dark_oak_log_15")
      .material("wood")
      .hardness(2)
      .tagBoth("chipped:stripped_dark_oak_log")
      .displayName("Stern Stripped Dark Oak Log")
      .property(BlockProperties.AXIS)
      .placementState(event =>
        event.set(
          BlockProperties.AXIS,
          `${event.clickedFace.axis}`
        )
      )
      .blockstateJson = {
        "variants": {
          "axis=x": { "model": "chipped:block/stripped_dark_oak_log_15_horizontal", "x": 90, "y": 90 },
          "axis=y": { "model": "chipped:block/stripped_dark_oak_log_15" },
          "axis=z": { "model": "chipped:block/stripped_dark_oak_log_15_horizontal", "x": 90 }
        }
      };
    event
      .create("chipped:stripped_dark_oak_log_16")
      .material("wood")
      .hardness(2)
      .tagBoth("chipped:stripped_dark_oak_log")
      .displayName("Wise Stripped Dark Oak Log")
      .property(BlockProperties.AXIS)
      .placementState(event =>
        event.set(
          BlockProperties.AXIS,
          `${event.clickedFace.axis}`
        )
      )
      .blockstateJson = {
        "variants": {
          "axis=x": { "model": "chipped:block/stripped_dark_oak_log_16_horizontal", "x": 90, "y": 90 },
          "axis=y": { "model": "chipped:block/stripped_dark_oak_log_16" },
          "axis=z": { "model": "chipped:block/stripped_dark_oak_log_16_horizontal", "x": 90 }
        }
      };
  });
})();
