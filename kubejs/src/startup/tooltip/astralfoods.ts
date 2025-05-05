export function astralFoodsTooltips() {
  onEvent("item.tooltip", (event) => {
    interface Tooltip {
      item: Special.Item,
      tooltip: Special.LangKey
    }
    
    const astralfoodsTooltips = [
      {
        item: "astralfoods:shimmered_rabbit_stew",
        tooltip: "tooltip.astralfoods.shimmered_rabbit_stew",
      },
      {
        item: "astralfoods:astral_sauce",
        tooltip: "tooltip.astralfoods.astral_sauce",
      },
      {
        item: "astralfoods:dipped_potato",
        tooltip: "tooltip.astralfoods.dipped_potato",
      },
    ] as const satisfies Tooltip[];

    astralfoodsTooltips.forEach((tooltip) => {
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
