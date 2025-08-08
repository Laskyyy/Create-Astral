(function travelersbackpackToolTips() {
  const { addLocalizedShiftTooltip } = global.startup;
  onEvent("item.tooltip", (event) => {
    /** @type {Helper.Tooltip[]} */
    const travelersbackpackToolTips = [
      {
        item: "travelersbackpack:netherite",
        tooltip: "tooltip.travelersbackpack.abilities_disabled",
      },
      {
        item: "travelersbackpack:diamond",
        tooltip: "tooltip.travelersbackpack.abilities_disabled",
      },
      {
        item: "travelersbackpack:gold",
        tooltip: "tooltip.travelersbackpack.abilities_disabled",
      },
      {
        item: "travelersbackpack:emerald",
        tooltip: "tooltip.travelersbackpack.abilities_disabled",
      },
      {
        item: "travelersbackpack:iron",
        tooltip: "tooltip.travelersbackpack.abilities_disabled",
      },
      {
        item: "travelersbackpack:lapis",
        tooltip: "tooltip.travelersbackpack.abilities_disabled",
      },
      {
        item: "travelersbackpack:redstone",
        tooltip: "tooltip.travelersbackpack.abilities_disabled",
      },
      {
        item: "travelersbackpack:bookshelf",
        tooltip: "tooltip.travelersbackpack.abilities_disabled",
      },
      {
        item: "travelersbackpack:sponge",
        tooltip: "tooltip.travelersbackpack.abilities_disabled",
      },
      {
        item: "travelersbackpack:cake",
        tooltip: "tooltip.travelersbackpack.abilities_disabled",
      },
      {
        item: "travelersbackpack:cactus",
        tooltip: "tooltip.travelersbackpack.abilities_disabled",
      },
      {
        item: "travelersbackpack:melon",
        tooltip: "tooltip.travelersbackpack.abilities_disabled",
      },
      {
        item: "travelersbackpack:pumpkin",
        tooltip: "tooltip.travelersbackpack.abilities_disabled",
      },
      {
        item: "travelersbackpack:creeper",
        tooltip: "tooltip.travelersbackpack.abilities_disabled",
      },
      {
        item: "travelersbackpack:dragon",
        tooltip: "tooltip.travelersbackpack.abilities_disabled",
      },
      {
        item: "travelersbackpack:enderman",
        tooltip: "tooltip.travelersbackpack.abilities_disabled",
      },
      {
        item: "travelersbackpack:blaze",
        tooltip: "tooltip.travelersbackpack.abilities_disabled",
      },
      {
        item: "travelersbackpack:ghast",
        tooltip: "tooltip.travelersbackpack.abilities_disabled",
      },
      {
        item: "travelersbackpack:magma_cube",
        tooltip: "tooltip.travelersbackpack.abilities_disabled",
      },
      {
        item: "travelersbackpack:spider",
        tooltip: "tooltip.travelersbackpack.abilities_disabled",
      },
      {
        item: "travelersbackpack:wither",
        tooltip: "tooltip.travelersbackpack.abilities_disabled",
      },
      {
        item: "travelersbackpack:bat",
        tooltip: "tooltip.travelersbackpack.abilities_disabled",
      },
      {
        item: "travelersbackpack:bee",
        tooltip: "tooltip.travelersbackpack.abilities_disabled",
      },
      {
        item: "travelersbackpack:ocelot",
        tooltip: "tooltip.travelersbackpack.abilities_disabled",
      },
      {
        item: "travelersbackpack:cow",
        tooltip: "tooltip.travelersbackpack.abilities_disabled",
      },
      {
        item: "travelersbackpack:chicken",
        tooltip: "tooltip.travelersbackpack.abilities_disabled",
      },
      {
        item: "travelersbackpack:squid",
        tooltip: "tooltip.travelersbackpack.abilities_disabled",
      },
    ];
    travelersbackpackToolTips.forEach((tooltip) => {
      event.addAdvanced(tooltip.item, (item, advanced, text) => {
        text.add([Text.of(Component.translate(tooltip.tooltip)).green()]);
      });
    });
  });
})();
