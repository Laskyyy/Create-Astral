(function kubeJSTooltips() {
  const { addLocalizedShiftTooltip } = global.startup;
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
    kubejsTooltips.forEach((tooltip) => addLocalizedShiftTooltip(event, tooltip.item, tooltip.tooltip));
  });
})();
