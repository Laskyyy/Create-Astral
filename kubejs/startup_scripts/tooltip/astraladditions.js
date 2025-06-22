(function astralAdditionsTooltips() {
  const { addLocalizedShiftTooltip } = global.startup;
  onEvent("item.tooltip", (event) => {
    event.addAdvanced("astraladditions:fragile_item", (item, advanced, text) => {
      if (!event.isShift()) {
        text.add(1, [
          Text.of(Component.translate("tooltip.hover.warning.1")).red(),
          Text.of(Component.translate("tooltip.hover.warning.2")).red(),
          Text.of(Component.translate("tooltip.hover.warning.3")).red(),
        ]);
      }
      if (event.isShift()) {
        text.add(1, [Text.of(Component.translate("tooltip.astraladditions.fragile_item")).red()]);
      }
    });
    event.addAdvanced("astraladditions:fragile_item_2", (item, advanced, text) => {
      if (!event.isShift()) {
        text.add(1, [
          Text.of(Component.translate("tooltip.hover.warning.1")).red(),
          Text.of(Component.translate("tooltip.hover.warning.2")).red(),
          Text.of(Component.translate("tooltip.hover.warning.3")).red(),
        ]);
      }
      if (event.isShift()) {
        text.add(1, [Text.of(Component.translate("tooltip.astraladditions.fragile_item")).red()]);
      }
    });
    event.addAdvanced("astraladditions:fragile_item_3", (item, advanced, text) => {
      if (!event.isShift()) {
        text.add(1, [
          Text.of(Component.translate("tooltip.hover.warning.1")).red(),
          Text.of(Component.translate("tooltip.hover.warning.2")).red(),
          Text.of(Component.translate("tooltip.hover.warning.3")).red(),
        ]);
      }
      if (event.isShift()) {
        text.add(1, [Text.of(Component.translate("tooltip.astraladditions.fragile_item")).red()]);
      }
    });
  });
})();
