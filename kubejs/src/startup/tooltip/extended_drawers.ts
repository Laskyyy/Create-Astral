import { upgrades } from "../misc/misc";

export function extendedDrawersTooltips() {
  onEvent("item.tooltip", (event) => {
    for (const upgrade of upgrades) {
      event.add(
        [upgrade.item as Special.Item],
        Text.gray(Component.translate("tooltip.drawer.upgrade")).append(Text.green(`${upgrade.multiplier}x`))
      );
    }

    event.add(
      "extended_drawers:downgrade",
      Text.gray(Component.translate("tooltip.extended_drawers.downgrade.1"))
        .append(Text.red(Component.translate("tooltip.extended_drawers.downgrade.2")))
        .append(Text.gray(Component.translate("tooltip.dot")))
    );

    event.add(
      "extended_drawers:lock",
      Text.gray(Component.translate("tooltip.extended_drawers.lock.1"))
        .append(Text.yellow(Component.translate("tooltip.extended_drawers.lock.2")))
        .append(Text.gray(Component.translate("tooltip.extended_drawers.lock.3")))
    );
  });
}
