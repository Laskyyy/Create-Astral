(function techRebornTooltips() {
  const { addLocalizedShiftTooltip } = global.startup;
  onEvent("item.tooltip", (event) => {
    /** @type {Helper.Tooltip[]} */
    const techrebornTooltips = [
      {
        item: "techreborn:uu_matter",
        tooltip: "tooltip.techreborn.uu_matter",
      }, //not done yet, need to find out rates
      {
        item: "techreborn:scrap",
        tooltip: "tooltip.techreborn.scrap",
      }, //not done yet, need to find out rates
      {
        item: "techreborn:basic_machine_casing",
        tooltip: "tooltip.techreborn.basic_machine_casing",
      },
      {
        item: "techreborn:silver_ore",
        tooltip: "tooltip.techreborn.silver_ore",
      },
      {
        item: "techreborn:deepslate_silver_ore",
        tooltip: "tooltip.techreborn.silver_ore",
      },
      {
        item: "techreborn:raw_silver",
        tooltip: "tooltip.techreborn.silver_ore",
      },
      {
        item: "techreborn:silver_ingot",
        tooltip: "tooltip.techreborn.silver_ore",
      },
      {
        item: "techreborn:silver_nugget",
        tooltip: "tooltip.techreborn.silver_ore",
      },
      {
        item: "techreborn:lead_ore",
        tooltip: "tooltip.techreborn.lead_ore",
      },
      {
        item: "techreborn:deepslate_lead_ore",
        tooltip: "tooltip.techreborn.lead_ore",
      },
      {
        item: "techreborn:raw_lead",
        tooltip: "tooltip.techreborn.lead_ore",
      },
      {
        item: "techreborn:lead_ingot",
        tooltip: "tooltip.techreborn.lead_ore",
      },
      {
        item: "techreborn:lead_nugget",
        tooltip: "tooltip.techreborn.lead_ore",
      },
      {
        item: "techreborn:tin_ore",
        tooltip: "tooltip.techreborn.tin_ore",
      },
      {
        item: "techreborn:deepslate_tin_ore",
        tooltip: "tooltip.techreborn.tin_ore",
      },
      {
        item: "techreborn:raw_tin",
        tooltip: "tooltip.techreborn.tin_ore",
      },
      {
        item: "techreborn:tin_ingot",
        tooltip: "tooltip.techreborn.tin_ore",
      },
      {
        item: "techreborn:tin_nugget",
        tooltip: "tooltip.techreborn.tin_ore",
      },
    ];
    techrebornTooltips.forEach((tooltip) => addLocalizedShiftTooltip(event, tooltip.item, tooltip.tooltip));
  });
})();
