(function chippedTagFix() {
  onEvent("tags.blocks", (event) => {
    event.add("minecraft:mineable/axe", "#chipped:stripped_acacia_log");
    event.add("minecraft:mineable/axe", "#chipped:stripped_birch_log");
    event.add("minecraft:mineable/axe", "#chipped:stripped_crimson_stem");
    event.add("minecraft:mineable/axe", "#chipped:stripped_dark_oak_log");
    event.add("minecraft:mineable/axe", "#chipped:stripped_jungle_log");
    event.add("minecraft:mineable/axe", "#chipped:stripped_oak_log");
    event.add("minecraft:mineable/axe", "#chipped:stripped_spruce_log");

    event.add("minecraft:mineable/hoe", "#chipped:acacia_leaves");
    event.add("minecraft:mineable/hoe", "#chipped:birch_leaves");
    event.add("minecraft:mineable/hoe", "#chipped:dark_oak_leaves");
    event.add("minecraft:mineable/hoe", "#chipped:jungle_leaves");
    event.add("minecraft:mineable/hoe", "#chipped:oak_leaves");
    event.add("minecraft:mineable/hoe", "#chipped:spruce_leaves");

    event.add("minecraft:mineable/pickaxe", "#chipped:ice");
    event.add("minecraft:mineable/pickaxe", "#chipped:packed_ice");
    event.add("minecraft:mineable/pickaxe", "#chipped:blue_ice");

    event.add("minecraft:mineable/hoe", "#chipped:moss_block");

    event.add("chipped:terracotta", "minecraft:terracotta");
    event.add("chipped:terracotta", /^chipped:terracotta_\d+$/);
    event.add("minecraft:mineable/pickaxe", "#chipped:terracotta");
  });

  onEvent("item.tags", (event) => {
    event.add("chipped:terracotta", "minecraft:terracotta");
    event.add("chipped:terracotta", /^chipped:terracotta_\d+$/);
  });

  onEvent("block.loot_tables", event => {
    event.addSimpleBlock(/^chipped:terracotta_\d+$/);

    Ingredient.of(/^chipped:(packed_|blue_)?ice_\d+$/).getStacks().forEach(block => {
      event.addBlock(block.id, table => {
        table.addPool(pool => {
          pool.addItem(block.id);
          pool.addCondition({
            "condition": "minecraft:match_tool",
            "predicate": {
              "enchantments": [{ "enchantment": "minecraft:silk_touch" }]
            }
          });
        });
      });
    });
  });
})();
