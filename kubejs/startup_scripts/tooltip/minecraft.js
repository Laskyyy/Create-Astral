(function minecraftTooltips() {
  onEvent("item.tooltip", (event) => {
    const minecraftTooltips = [
      {
        item: "minecraft:ancient_debris",
        tooltip: "tooltip.minecraft.ancient_debris",
      },
      {
        item: "minecraft:blaze_rod",
        tooltip: "tooltip.minecraft.blaze_rod",
      },
      {
        item: "minecraft:flint_and_steel",
        tooltip: "tooltip.minecraft.flint_and_steel",
      },
      {
        item: "minecraft:nether_wart",
        tooltip: "tooltip.minecraft.nether_wart",
      },
      {
        item: "minecraft:obsidian",
        tooltip: "tooltip.minecraft.obsidian",
      },
      {
        item: "minecraft:rotten_flesh",
        tooltip: "tooltip.minecraft.rotten_flesh",
      },
      {
        item: "minecraft:soul_sand",
        tooltip: "tooltip.minecraft.soul_sand",
      },
      {
        item: "minecraft:leather",
        tooltip: "tooltip.minecraft.leather",
      },
    ];
    minecraftTooltips.forEach((tooltip) => {
      event.addAdvanced(tooltip.item, (item, advanced, text) => {
        if (!event.isShift()) {
          text.add(1, [
            Text.of(Component.translate("tooltip.hover.tip.1")).darkGreen(),
            Text.of(Component.translate("tooltip.hover.tip.2")).green(),
            Text.of(Component.translate("tooltip.hover.tip.3")).darkGreen(),
          ]);
        }
        if (event.isShift()) {
          text.add(1, [Text.of(Component.translate(tooltip.tooltip)).green()]);
        }
      });
    });
    event.add(
      "minecraft:lava_bucket",
      Text.gray(Component.translate("tooltip.minecraft.lava_bucket.1"))
        .append(Text.red(Component.translate("tooltip.minecraft.lava_bucket.2")))
        .append(Text.gray(Component.translate("tooltip.dot"))),
    );
    event.add(
      "minecraft:black_dye",
      Text.gray(Component.translate("tooltip.minecraft.black_dye.1"))
        .append(Text.white(Component.translate("tooltip.minecraft.black_dye.2")))
        .append(Text.gray(Component.translate("tooltip.dot"))),
    );
  });
})();
