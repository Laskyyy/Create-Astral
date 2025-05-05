export function ae2Tooltips() {
  onEvent("item.tooltip", (event) => {
    interface Tooltip {
      item: Special.Item,
      tooltip: Special.LangKey
    }

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
    ] as const satisfies Tooltip[];

    ae2Tooltips.forEach((tooltip) => {
      event.addAdvanced(tooltip.item, (item, advanced, text: Internal.List<Component | Component[]>) => {
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
}
