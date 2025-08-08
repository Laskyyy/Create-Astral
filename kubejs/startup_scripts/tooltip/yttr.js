(function yttrTooltips() {
  const { addLocalizedShiftTooltip } = global.startup;
  onEvent("item.tooltip", (event) => {
    /** @type {Helper.Tooltip[]} */
    const yttrTooltips = [
      {
        item: "yttr:gadolinite",
        tooltip: "tooltip.yttr.gadolinite",
      },
      {
        item: "yttr:yttrium_ingot",
        tooltip: "tooltip.yttr.gadolinite",
      },
    ];
    yttrTooltips.forEach((tooltip) => addLocalizedShiftTooltip(event, tooltip.item, tooltip.tooltip));
  });
})();
