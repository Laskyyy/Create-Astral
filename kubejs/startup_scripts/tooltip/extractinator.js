(function extractinatorTooltips() {
  const { addLocalizedShiftTooltip } = global.startup;
  onEvent("item.tooltip", (event) => {
    /** @type {Helper.Tooltip[]} */
    const extractinatorTooltips = [
      {
        item: "extractinator:extractinator",
        tooltip: "tooltip.extractinator.extractinator",
      },
    ];
    extractinatorTooltips.forEach((tooltip) => addLocalizedShiftTooltip(event, tooltip.item, tooltip.tooltip));
  });
})();
