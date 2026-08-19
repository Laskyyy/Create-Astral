const $JavaClass = java("java.lang.Class");
const $MaterialJSConstructor = $JavaClass.forName("dev.latvian.mods.kubejs.block.MaterialJS").getDeclaredConstructors()[0];

function materialFromBlock(name, blockId) {
  const block = Item.getItem(blockId).getBlock();
  const state = block.defaultBlockState();
  return $MaterialJSConstructor.newInstance(name, state.getMaterial(), block.getSoundType(state));
}

const NETHER_WOOD = materialFromBlock("nether_wood","minecraft:crimson_stem");

(function chippedBlockRegistry() {
  onEvent("block.registry", (event) => {
    const logs = ["crimson_stem_12", "crimson_stem_13", "crimson_stem_14", "stripped_dark_oak_log_12",
                  "stripped_dark_oak_log_13", "stripped_dark_oak_log_14", "stripped_dark_oak_log_15", "stripped_dark_oak_log_16"];
    const names = ["Rotten", "Shrooming", "Smooth", "Patient", "Reinforced", "M Sign", "Stern", "Wise"];
    var mat = NETHER_WOOD;
    var tag = "crimson_stem";
    var name = "Crimson Stem";

    logs.forEach((log, index) => {
      if (log.search(/log/) > 0) {
        mat = "wood";
        tag = "stripped_dark_oak_log";
        name = "Stripped Dark Oak Log";
      }
      event
        .create(`chipped:${log}`)
        .material(mat)
        .hardness(2)
        .tagBoth(`chipped:${tag}`)
        .displayName(`${names[index]} ${name}`)
        .item(item => item.group("chipped.main"))
        .property(BlockProperties.AXIS)
        .placementState(event =>
          event.set(
            BlockProperties.AXIS,
            `${event.clickedFace.axis}`
          )
        )
        .blockstateJson = {
          "variants": {
            "axis=x": { "model": `chipped:block/${log}_horizontal`, "x": 90, "y": 90 },
            "axis=y": { "model": `chipped:block/${log}` },
            "axis=z": { "model": `chipped:block/${log}_horizontal`, "x": 90 }
          }
        };
    });
  });
})();