(function createBigCannonsTooltips() {
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
    createbigcannonsTooltips.forEach((tooltip) => {
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
