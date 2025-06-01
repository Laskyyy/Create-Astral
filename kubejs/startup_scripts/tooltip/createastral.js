(function createAstralTooltips() {
  onEvent("item.tooltip", (event) => {
    /** @type {Helper.Tooltip[]} */
    const createastralTooltips = [
      {
        item: "createastral:swift_andesite",
        tooltip: "tooltip.createastral.swift_andesite",
      },
      {
        item: "createastral:voidtouched_compound",
        tooltip: "tooltip.createastral.voidtouched_compound",
      },
      {
        item: "createastral:bronze_block",
        tooltip: "tooltip.createastral.bronze_block",
      },
      {
        item: "createastral:seitan",
        tooltip: "tooltip.createastral.seitan",
      },
      {
        item: "createastral:gyrodyne_blueprint",
        tooltip: "tooltip.createastral.gyrodyne_blueprint",
      },
      {
        item: "createastral:quadrocopter_blueprint",
        tooltip: "tooltip.createastral.quadrocopter_blueprint",
      },
      {
        item: "createastral:airship_blueprint",
        tooltip: "tooltip.createastral.airship_blueprint",
      },
      {
        item: "createastral:biplane_blueprint",
        tooltip: "tooltip.createastral.biplane_blueprint",
      },
      {
        item: "createastral:uranium_residue",
        tooltip: "tooltip.createastral.uranium_residue",
      },
    ];
    createastralTooltips.forEach((tooltip) => {
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
    event.addAdvanced("createastral:orcane", (item, advanced, text) => {
      if (!event.isShift()) {
        text.add(1, [
          Text.of(Component.translate("tooltip.hover.tip.1")).gold(),
          Text.of(Component.translate("tooltip.hover.tip.2")).yellow(),
          Text.of(Component.translate("tooltip.hover.tip.3")).gold(),
        ]);
      }
      if (event.isShift()) {
        text.add(1, [Text.of(Component.translate("tooltip.createastral.orcane.1")).gold()]);
        text.add(2, [Text.of(Component.translate("tooltip.createastral.orcane.2")).white()]);
      }
    });
  });
})();
