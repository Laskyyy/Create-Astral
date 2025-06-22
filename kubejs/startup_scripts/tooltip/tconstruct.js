(function hephaestusTooltips() {
  const { addLocalizedShiftTooltip } = global.startup;
  onEvent("item.tooltip", (event) => {
    /** @type {Helper.Tooltip[]} */
    const tconstructTooltips = [
      {
        item: "tconstruct:smeltery_controller",
        tooltip: "tooltip.tconstruct.smeltery_controller",
      },
      {
        item: "tconstruct:raw_cobalt",
        tooltip: "tooltip.tconstruct.raw_cobalt",
      },
    ];
    tconstructTooltips.forEach((tooltip) => addLocalizedShiftTooltip(event, tooltip.item, tooltip.tooltip));
  });
})();
