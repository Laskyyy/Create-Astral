(function ae2Tooltips() {
  const { addLocalizedShiftTooltip } = global.startup;
  onEvent("item.tooltip", (event) => {
    /** @type {Helper.Tooltip[]} */
    const ae2Tooltips = [
      {
        item: "ae2:quartz_ore",
        tooltip: "tooltip.ae2.quartz_ore",
      },
      {
        item: "ae2:deepslate_quartz_ore",
        tooltip: "tooltip.ae2.quartz_ore",
      },
      {
        item: "ae2:certus_quartz_crystal",
        tooltip: "tooltip.minecraft.nether_wart",
      },
      {
        item: "ae2:certus_quartz_dust",
        tooltip: "tooltip.ae2.quartz_ore",
      },
    ];
    ae2Tooltips.forEach((tooltip) => addLocalizedShiftTooltip(event, tooltip.item, tooltip.tooltip));
  });
})();
