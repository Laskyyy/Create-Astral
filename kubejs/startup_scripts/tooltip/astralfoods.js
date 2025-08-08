(function astralFoodsTooltips() {
  const { addLocalizedShiftTooltip } = global.startup;
  onEvent("item.tooltip", (event) => {
    /** @type {Helper.Tooltip[]} */
    const astralfoodsTooltips = [
      {
        item: "astralfoods:shimmered_rabbit_stew",
        tooltip: "tooltip.astralfoods.shimmered_rabbit_stew",
      },
      {
        item: "astralfoods:astral_sauce",
        tooltip: "tooltip.astralfoods.astral_sauce",
      },
      {
        item: "astralfoods:dipped_potato",
        tooltip: "tooltip.astralfoods.dipped_potato",
      },
    ];
    astralfoodsTooltips.forEach((tooltip) => addLocalizedShiftTooltip(event, tooltip.item, tooltip.tooltip));
  });
})();
