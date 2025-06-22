// priority: 100

global.startup = {
  /**
   * Adds a localized tooltip that is only shown when Shift is pressed.
   * @param {Internal.ItemTooltipEventJS} event
   * @param {Internal.IngredientJS_} item
   * @param {Special.LangKey} tooltip
   */
  addLocalizedShiftTooltip(event, item, tooltip) {
    event.addAdvanced(item, (item, advanced, text) => {
      if (!event.isShift()) {
        text.add([
          Text.of(Component.translate("tooltip.hover.tip.1")).darkGreen(),
          Text.of(Component.translate("tooltip.hover.tip.2")).green(),
          Text.of(Component.translate("tooltip.hover.tip.3")).darkGreen(),
        ]);
      }
      if (event.isShift()) {
        text.add([Text.of(Component.translate(tooltip)).green()]);
      }
    });
  },
};
