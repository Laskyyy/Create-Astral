(function extendedDrawersTooltips() {
  onEvent("item.tooltip", (event) => {
    /** @type {Helper.Tooltip[]} */
    for (const upgrade of global.upgrades) {
      let upgradeItem = /** @type {Special.Item} */ (upgrade.item)
      event.add(
        upgradeItem,
        Text.gray(Component.translate("tooltip.drawer.upgrade")).append(Text.green(`${upgrade.multiplier}x`)),
      );
    }
    event.add(
      "extended_drawers:downgrade",
      Text.gray(Component.translate("tooltip.extended_drawers.downgrade.1"))
        .append(Text.red(Component.translate("tooltip.extended_drawers.downgrade.2")))
        .append(Text.gray(Component.translate("tooltip.dot"))),
    );
    event.add(
      "extended_drawers:lock",
      Text.gray(Component.translate("tooltip.extended_drawers.lock.1"))
        .append(Text.yellow(Component.translate("tooltip.extended_drawers.lock.2")))
        .append(Text.gray(Component.translate("tooltip.extended_drawers.lock.3"))),
    );
  });
})();
