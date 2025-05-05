export function extractinatorTooltips() {
  interface Tooltip {
    item: Special.Item;
    tooltip: Special.LangKey;
  }

  onEvent("item.tooltip", (event) => {
    const extractinatorTooltips = [
      {
        item: "extractinator:extractinator",
        tooltip: "tooltip.extractinator.extractinator",
      },
    ] as const satisfies Tooltip[];

    extractinatorTooltips.forEach((tooltip) => {
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
