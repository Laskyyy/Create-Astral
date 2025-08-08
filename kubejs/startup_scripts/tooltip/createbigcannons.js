(function createBigCannonsTooltips() {
  const { addLocalizedShiftTooltip } = global.startup;
  onEvent("item.tooltip", (event) => {
    /** @type {Helper.Tooltip[]} */
    const createbigcannonsTooltips = [
      {
        item: "createbigcannons:steel_screw_breech",
        tooltip: "tooltip.createbigcannons.steel_screw_breech",
      },
      {
        item: "createbigcannons:incomplete_steel_screw_breech",
        tooltip: "tooltip.createbigcannons.steel_screw_breech",
      },
      {
        item: "createbigcannons:nethersteel_screw_breech",
        tooltip: "tooltip.createbigcannons.steel_screw_breech",
      },
      {
        item: "createbigcannons:incomplete_nethersteel_screw_breech",
        tooltip: "tooltip.createbigcannons.steel_screw_breech",
      },
    ];
    createbigcannonsTooltips.forEach((tooltip) => addLocalizedShiftTooltip(event, tooltip.item, tooltip.tooltip));
  });
})();
