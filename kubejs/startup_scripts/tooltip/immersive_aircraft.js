(function immersiveAircraftTooltips() {
  const { addLocalizedShiftTooltip } = global.startup;
  onEvent("item.tooltip", (event) => {
    /** @type {Helper.Tooltip[]} */
    const immersive_aircraftTooltips = [
      {
        item: "immersive_aircraft:nether_engine",
        tooltip: "tooltip.immersiveaircraft.nether_engine",
      },
    ];
    immersive_aircraftTooltips.forEach((tooltip) => addLocalizedShiftTooltip(event, tooltip.item, tooltip.tooltip));
  });
})();
