(function kubeJSTooltips() {
  onEvent("item.tooltip", (event) => {
    /** @type {Helper.Tooltip[]} */
    const kubejsTooltips = [
      {
        item: "kubejs:broken_fire_resistant_fragile_sheet_block",
        tooltip: "tooltip.kubejs.broken_fire_resistant_fragile_sheet_block",
      },
      {
        item: "kubejs:fire_resistant_fragile_sheet_block",
        tooltip: "tooltip.kubejs.fire_resistant_fragile_sheet_block",
      },
      {
        item: "kubejs:fragile_sheet_block",
        tooltip: "tooltip.kubejs.fragile_sheet_block",
      },
      {
        item: "kubejs:broken_fragile_sheet_block",
        tooltip: "tooltip.kubejs.fragile_sheet_block",
      },
      // {
      //   item: "kubejs:shimmer",
      //   tooltip: "tooltip.kubejs.shimmer",
      // }, //not done yet, need to find height of shimmer lakes
      {
        item: "kubejs:shimmer_bucket",
        tooltip: "tooltip.kubejs.shimmer_bucket",
      }, //not done yet, need to find height of shimmer lakes
    ];
    kubejsTooltips.forEach((tooltip) => {
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
  });
})();
