(function createTooltips() {
  const { addLocalizedShiftTooltip } = global.startup;
  onEvent("item.tooltip", (event) => {
    /** @type {Helper.Tooltip[]} */
    const createTooltips = [
      {
        item: "create:blaze_cake",
        tooltip: "tooltip.create.blaze_cake",
      },
      {
        item: "create:blaze_burner",
        tooltip: "tooltip.create.blaze_burner",
      },
      {
        item: "create:empty_blaze_burner",
        tooltip: "tooltip.create.empty_blaze_burner",
      },
      {
        item: "create:mechanical_arm",
        tooltip: "tooltip.create.mechanical_arm",
      },
    ];
    createTooltips.forEach((tooltip) => addLocalizedShiftTooltip(event, tooltip.item, tooltip.tooltip));
  });
})();
