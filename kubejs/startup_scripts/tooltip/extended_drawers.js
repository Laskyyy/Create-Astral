let extendedDrawersHasFired = false;
onEvent("item.tooltip", (event) => {
    if (extendedDrawersHasFired) return;
    extendedDrawersHasFired = true;

    for (const [item, mutliplier] of Object.entries(drawer_multipliers)) {
        e.add([item], Text.gray(Component.translate("tooltip.drawer.upgrade")).append(Text.green(`${mutliplier}x`)));
    }

    e.add(
        "extended_drawers:downgrade",
        Text.gray(Component.translate("tooltip.extended_drawers.downgrade.1"))
            .append(Text.red(Component.translate("tooltip.extended_drawers.downgrade.2")))
            .append(Text.gray(Component.translate("tooltip.dot")))
    );

    e.add(
        "extended_drawers:lock",
        Text.gray(Component.translate("tooltip.extended_drawers.lock.1"))
            .append(Text.yellow(Component.translate("tooltip.extended_drawers.lock.2")))
            .append(Text.gray(Component.translate("tooltip.extended_drawers.lock.3")))
    );
});
