(function adoptAFloppaTooltips() {
  const { addLocalizedShiftTooltip } = global.startup;
  onEvent("item.tooltip", (event) => {
    /** @type {Helper.Tooltip[]} */
    const adoptafloppaTooltips = [
      {
        item: "adoptafloppa:amazon_delivery",
        tooltip: "tooltip.adoptafloppa.amazon_delivery",
      },
    ];
    adoptafloppaTooltips.forEach((tooltip) => addLocalizedShiftTooltip(event, tooltip.item, tooltip.tooltip));
  });
})();
