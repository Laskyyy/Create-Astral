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
  /**
   * @typedef Upgrade
   * @property {`${string}:${string}`} item
   * @property {`${string}:${string}`} sprite
   * @property {number} multiplier
   */

  /** @type {Upgrade[]} */
  upgrades: [
    {
      item: "createastral:t1_upgrade",
      sprite: "createastral:item/t1_upgrade",
      multiplier: 2,
    },
    {
      item: "createastral:t2_upgrade",
      sprite: "createastral:item/t2_upgrade",
      multiplier: 4,
    },
    {
      item: "createastral:t3_upgrade",
      sprite: "createastral:item/t3_upgrade",
      multiplier: 16,
    },
    {
      item: "createastral:t4_upgrade",
      sprite: "createastral:item/t4_upgrade",
      multiplier: 64,
    },
    {
      item: "createastral:t5_upgrade",
      sprite: "createastral:item/t5_upgrade",
      multiplier: 256,
    },
    {
      item: "createastral:t6_upgrade",
      sprite: "createastral:item/t6_upgrade",
      multiplier: 1048576, // 2^20x, this makes the regular drawer store 2^31 items
    },
  ],
};
