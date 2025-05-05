export function yttrTooltips() {
  onEvent("item.tooltip", (event) => {
    interface Tooltip {
      item: Special.Item,
      tooltip: Special.LangKey
    }
    
    const yttrTooltips = [
      {
        item: "yttr:gadolinite",
        tooltip: "tooltip.yttr.gadolinite",
      },
      {
        item: "yttr:yttrium_ingot",
        tooltip: "tooltip.yttr.gadolinite",
      },
    ] as const satisfies Tooltip[];

    yttrTooltips.forEach((tooltip) => {
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
