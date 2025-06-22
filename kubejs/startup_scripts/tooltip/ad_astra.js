(function adAstraTooltips() {
  const { addLocalizedShiftTooltip } = global.startup;

  onEvent("item.tooltip", (event) => {
    /** @type {Helper.Tooltip[]} */
    const adAstraTooltips = [
      {
        item: "ad_astra:space_helmet",
        tooltip: "tooltip.ad_astra.space_helmet",
      },
      {
        item: "ad_astra:space_suit",
        tooltip: "tooltip.ad_astra.space_helmet",
      },
      {
        item: "ad_astra:space_pants",
        tooltip: "tooltip.ad_astra.space_helmet",
      },
      {
        item: "ad_astra:space_boots",
        tooltip: "tooltip.ad_astra.space_helmet",
      },
      {
        item: "ad_astra:netherite_space_helmet",
        tooltip: "tooltip.ad_astra.netherite_space_helmet",
      },
      {
        item: "ad_astra:netherite_space_suit",
        tooltip: "tooltip.ad_astra.netherite_space_suit",
      },
      {
        item: "ad_astra:netherite_space_pants",
        tooltip: "tooltip.ad_astra.netherite_space_suit",
      },
      {
        item: "ad_astra:netherite_space_boots",
        tooltip: "tooltip.ad_astra.netherite_space_suit",
      },
      {
        item: "ad_astra:jet_suit_helmet",
        tooltip: "tooltip.ad_astra.jet_suit_helmet",
      },
      {
        item: "ad_astra:jet_suit",
        tooltip: "tooltip.ad_astra.jet_suit_helmet",
      },
      {
        item: "ad_astra:jet_suit_pants",
        tooltip: "tooltip.ad_astra.jet_suit_helmet",
      },
      {
        item: "ad_astra:jet_suit_boots",
        tooltip: "tooltip.ad_astra.jet_suit_helmet",
      },
      {
        item: "ad_astra:tier_1_rocket",
        tooltip: "tooltip.ad_astra.tier_1_rocket",
      },
    ];
    adAstraTooltips.forEach((tooltip) => addLocalizedShiftTooltip(event, tooltip.item, tooltip.tooltip));
  });
})();
