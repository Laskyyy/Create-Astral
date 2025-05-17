(function createTooltips() {
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
    createTooltips.forEach((tooltip) => {
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
