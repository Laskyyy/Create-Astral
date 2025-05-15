(function adoptAFloppaTooltips() {
  onEvent("item.tooltip", (event) => {
    const adoptafloppaTooltips = [
      {
        item: "adoptafloppa:amazon_delivery",
        tooltip: "tooltip.adoptafloppa.amazon_delivery",
      },
    ];
    adoptafloppaTooltips.forEach((tooltip) => {
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
