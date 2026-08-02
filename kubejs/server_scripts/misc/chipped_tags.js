(function chippedTagFix() {
  onEvent("tags.blocks", (event) => {
    const acacias = event.get("chipped:stripped_acacia_log").getObjectIds();
    const birches = event.get("chipped:stripped_birch_log").getObjectIds();
    const crimsons = event.get("chipped:stripped_crimson_stem").getObjectIds();
    const dark_oaks = event.get("chipped:stripped_dark_oak_log").getObjectIds();
    const jungles = event.get("chipped:stripped_jungle_log").getObjectIds();
    const oaks = event.get("chipped:stripped_oak_log").getObjectIds();
    const spruces = event.get("chipped:stripped_spruce_log").getObjectIds();
    acacias.forEach(log => { event.add("minecraft:mineable/axe", log); });
    birches.forEach(log => { event.add("minecraft:mineable/axe", log); });
    crimsons.forEach(log => { event.add("minecraft:mineable/axe", log); });
    dark_oaks.forEach(log => { event.add("minecraft:mineable/axe", log); });
    jungles.forEach(log => { event.add("minecraft:mineable/axe", log); });
    oaks.forEach(log => { event.add("minecraft:mineable/axe", log); });
    spruces.forEach(log => { event.add("minecraft:mineable/axe", log); });

    const acacia_leaves = event.get("chipped:acacia_leaves").getObjectIds();
    const birch_leaves = event.get("chipped:birch_leaves").getObjectIds();
    const dark_oak_leaves = event.get("chipped:dark_oak_leaves").getObjectIds();
    const jungle_leaves = event.get("chipped:jungle_leaves").getObjectIds();
    const oak_leaves = event.get("chipped:oak_leaves").getObjectIds();
    const spruce_leaves = event.get("chipped:spruce_leaves").getObjectIds();
    acacia_leaves.forEach(leaf => { event.add("minecraft:mineable/hoe", leaf); });
    birch_leaves.forEach(leaf => { event.add("minecraft:mineable/hoe", leaf); });
    dark_oak_leaves.forEach(leaf => { event.add("minecraft:mineable/hoe", leaf); });
    jungle_leaves.forEach(leaf => { event.add("minecraft:mineable/hoe", leaf); });
    oak_leaves.forEach(leaf => { event.add("minecraft:mineable/hoe", leaf); });
    spruce_leaves.forEach(leaf => { event.add("minecraft:mineable/hoe", leaf); });

    const ices = event.get("chipped:ice").getObjectIds();
    const packed_ices = event.get("chipped:packed_ice").getObjectIds();
    const blue_ices = event.get("chipped:blue_ice").getObjectIds();
    ices.forEach(ice => { event.add("minecraft:mineable/pickaxe", ice); });
    packed_ices.forEach(ice => { event.add("minecraft:mineable/pickaxe", ice); });
    blue_ices.forEach(ice => { event.add("minecraft:mineable/pickaxe", ice); });

    const mosses = event.get("chipped:moss_block").getObjectIds();
    mosses.forEach(moss => { event.add("minecraft:mineable/hoe", moss); });
  });
})();
