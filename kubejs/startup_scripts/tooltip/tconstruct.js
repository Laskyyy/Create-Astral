(function hephaestusTooltips() {
  onEvent("item.tooltip", (event) => {
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
    tconstructTooltips.forEach((tooltip) => {
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
