let ae2HasFired = false;
onEvent("item.tooltip", (event) => {
    if (ae2HasFired) return;
    ae2HasFired = true;
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
            item: "ae2:certus_quartz",
            tooltip: "tooltip.minecraft.nether_wart",
        },
        {
            item: "ae2:certus_quartz_dust",
            tooltip: "tooltip.ae2.quartz_ore",
        },
    ];

    ae2Tooltips.forEach((tooltip) => {
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
