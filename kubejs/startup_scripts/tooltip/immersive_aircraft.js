(function immersiveAircraftTooltips() {
  onEvent("item.tooltip", (event) => {
    /** @type {Helper.tooltip[]} */
    const immersive_aircraftTooltips = [
      {
        item: "immersive_aircraft:nether_engine",
        tooltip: "tooltip.immersiveaircraft.nether_engine",
      },
    ];
    immersive_aircraftTooltips.forEach((tooltip) => {
      event.addAdvanced(tooltip.item, (item, advanced, text) => {
        if (!event.isShift()) {
          text.add(1, [
            Text.of(Component.translate("tooltip.hover.tip.1")).darkGreen(),
            Text.of(Component.translate("tooltip.hover.tip.2")).green(),
            Text.of(Component.translate("tooltip.hover.tip.3")).darkGreen(),
          ]);
        } else {
          text.add(1, [Text.of(Component.translate(tooltip.tooltip)).green()]);
        }
      });
    });
  });
})();
