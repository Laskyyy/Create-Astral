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

    const terracottas = ["chipped:terracotta_1", "chipped:terracotta_2", "chipped:terracotta_3", "chipped:terracotta_4", "chipped:terracotta_5", "chipped:terracotta_6",
                        "chipped:terracotta_7", "chipped:terracotta_8", "chipped:terracotta_9", "chipped:terracotta_10", "chipped:terracotta_11", "chipped:terracotta_12",
                        "chipped:terracotta_13", "chipped:terracotta_14", "chipped:terracotta_15", "chipped:terracotta_16", "chipped:terracotta_17", "chipped:terracotta_18",
                        "chipped:terracotta_19", "chipped:terracotta_20", "chipped:terracotta_21", "chipped:terracotta_22", "chipped:terracotta_23", "chipped:terracotta_24",
                        "chipped:terracotta_25", "chipped:terracotta_26", "chipped:terracotta_27", "chipped:terracotta_28", "chipped:terracotta_29", "chipped:terracotta_30",
                        "chipped:terracotta_31", "chipped:terracotta_32", "chipped:terracotta_33", "chipped:terracotta_34", "chipped:terracotta_35", "chipped:terracotta_36",
                        "chipped:terracotta_37", "chipped:terracotta_38", "chipped:terracotta_39", "chipped:terracotta_40", "chipped:terracotta_41", "chipped:terracotta_42",
                        "chipped:terracotta_43", "chipped:terracotta_44", "chipped:terracotta_45", "chipped:terracotta_46", "chipped:terracotta_47", "chipped:terracotta_48",
                        "chipped:terracotta_49", "chipped:terracotta_50", "chipped:terracotta_51", "chipped:terracotta_52", "chipped:terracotta_53", "chipped:terracotta_54",
                        "chipped:terracotta_55", "chipped:terracotta_56", "chipped:terracotta_57", "chipped:terracotta_58", "chipped:terracotta_59", "chipped:terracotta_60",
                        "chipped:terracotta_61", "chipped:terracotta_62", "chipped:terracotta_63", "chipped:terracotta_64", "chipped:terracotta_65", "chipped:terracotta_66"];
    event.add("chipped:terracotta", terracottas);
    event.add("minecraft:mineable/pickaxe", terracottas);
  });
})();
