export function techRebornIndustrialGrinderRecipes() {
  // Balances the Industrial Grinder and adds new recipes to it.

  /**
   * Creates an Industrial Grinder recipe with a tag input.
   * @param {event} event - The recipe event. Make sure that the function is called from within the event!
   * @param {number} energy - Base Energy per tick used for the recipe.
   * @param {number} time - Base time in ticks to process the recipe.
   * @param {string} inputTag - Input tag (ex. `"c:copper_ores"`).
   * @param {object[]} outputs - Output items in the array of objects containing "item" and optionally "count" fields.
   * For example:
   * ```
   * [{item: "minecraft:raw_copper", count: 2}, {item: "minecraft:gold_nugget", count: 3}]
   * ```
   * @param {string} fluid - The fluid necessary to process the recipe.
   * @param {number} fluidAmount - The amount of fluid (in **mB**, not droplets!)
   * @param {number?} energy - Base Energy per tick used for the recipe. 16 E/t if not provided.
   * @param {number?} time - Base time in ticks to process the recipe. 100 ticks if not provided.
   */
  function industrialGrinderTag(event, inputTag, outputs, fluid, fluidAmount, energy, time) {
    event.custom({
      type: "techreborn:industrial_grinder",
      power: energy ? energy : 16, // ?? doesn't work with numbers for some reason
      time: time ? time : 100,
      tank: {
        fluid: fluid,
        amount: fluidAmount,
      },
      ingredients: [
        {
          tag: inputTag,
        },
      ],
      results: outputs,
    });
  }

  /**
   * Creates an Industrial Grinder recipe with an item input.
   * @param {event} event - The recipe event. Make sure that the function is called from within the event!
   * @param {string} input - Input item (ex. `"minecraft:cobblestone"`).
   * @param {object[]} outputs - Output items in the array of objects containing "item" and optionally "count" fields.
   * For example:
   * ```
   * [{item: "minecraft:raw_copper", count: 2}, {item: "minecraft:gold_nugget", count: 3}]
   * ```
   * @param {string} fluid - The fluid necessary to process the recipe.
   * @param {number} fluidAmount - The amount of fluid (in **mB**, not droplets!)
   * @param {number?} inputCount - The amount of input item. 1 if not provided.
   * @param {number?} energy - Base Energy per tick used for the recipe. 16 E/t if not provided.
   * @param {number?} time - Base time in ticks to process the recipe. 100 ticks if not provided.
   */
  function industrialGrinder(event, input, outputs, fluid, fluidAmount, inputCount, energy, time) {
    event.custom({
      type: "techreborn:industrial_grinder",
      power: energy ? energy : 16,
      time: time ? time : 100,
      tank: {
        fluid: fluid,
        amount: fluidAmount,
      },
      ingredients: [
        {
          item: input,
          count: inputCount ? inputCount : 1,
        },
      ],
      results: outputs,
    });
  }

  /**
   * Creates an object with an item and count to aid in creation of Tech Reborn recipes:
   * ```
   * {item: item, count: count}
   * ```
   * @param {string} item - The item ID.
   * @param {number?} count - The item amount. 1 if not provided.
   * @returns {object}
   */
  function itemCount(item, count) {
    return {
      item: item,
      count: count ? count : 1,
    };
  }

  // For convenient balancing of nugget rates
  const oreBlockWaterRate = 29;
  const oreBlockMercuryRate = 44;

  const rawOreWaterRate = 17; // Little less than crushing wheels + foundry combined
  const rawOreMercuryRate = 24; // 2.5 ingots per raw ore, wowie!

  const ORES = [
    // Ore blocks
    {
      tag: "c:coal_ores",
      waterOutput: [itemCount("minecraft:coal", 2), itemCount("create:experience_nugget")],
      mercuryOutput: [itemCount("minecraft:coal", 3), itemCount("create:experience_nugget", 2)],
    },
    {
      tag: "c:iron_ores",
      waterOutput: [
        itemCount("minecraft:iron_nugget", oreBlockWaterRate),
        itemCount("minecraft:redstone", 2),
        itemCount("create:experience_nugget"),
      ],
      mercuryOutput: [
        itemCount("minecraft:iron_nugget", oreBlockMercuryRate),
        itemCount("minecraft:redstone", 3),
        itemCount("create:experience_nugget", 2),
      ],
    },
    {
      tag: "c:copper_ores",
      waterOutput: [
        itemCount("create:copper_nugget", 64),
        itemCount("create:copper_nugget", 4), // 68 total
        itemCount("minecraft:clay_ball", 2),
        itemCount("create:experience_nugget"),
      ],
      mercuryOutput: [
        itemCount("create:copper_nugget", 64),
        itemCount("create:copper_nugget", 38), // 102 total
        itemCount("minecraft:clay_ball", 3),
        itemCount("create:experience_nugget", 2),
      ],
    },
    {
      tag: "c:gold_ores",
      waterOutput: [
        itemCount("minecraft:gold_nugget", oreBlockWaterRate),
        itemCount("minecraft:quartz", 2),
        itemCount("create:experience_nugget"),
      ],
      mercuryOutput: [
        itemCount("minecraft:gold_nugget", oreBlockMercuryRate),
        itemCount("minecraft:quartz", 3),
        itemCount("create:experience_nugget", 2),
      ],
    },
    {
      tag: "c:redstone_ores",
      waterOutput: [itemCount("minecraft:redstone", 6), itemCount("create:experience_nugget")],
      mercuryOutput: [itemCount("minecraft:redstone", 9), itemCount("create:experience_nugget", 2)],
    },
    {
      tag: "c:lapis_ores",
      waterOutput: [itemCount("minecraft:lapis_lazuli", 10), itemCount("create:experience_nugget")],
      mercuryOutput: [itemCount("minecraft:lapis_lazuli", 15), itemCount("create:experience_nugget", 2)],
    },
    {
      tag: "c:emerald_ores",
      waterOutput: [itemCount("minecraft:emerald", 2), itemCount("create:experience_nugget")],
      mercuryOutput: [itemCount("minecraft:emerald", 3), itemCount("create:experience_nugget", 2)],
    },
    {
      tag: "c:diamond_ores",
      waterOutput: [itemCount("minecraft:diamond", 2), itemCount("create:experience_nugget")],
      mercuryOutput: [itemCount("minecraft:diamond", 3), itemCount("create:experience_nugget", 2)],
    },
    {
      item: "minecraft:ancient_debris",
      mercuryOutput: [itemCount("tconstruct:debris_nugget", 18)],
      energy: 64,
      time: 500,
    },
    {
      tag: "c:cheese_ores",
      waterOutput: [itemCount("ad_astra:cheese", 2)],
      mercuryOutput: [itemCount("ad_astra:cheese", 3)], // Yum, cancerous cheese
    },
    {
      tag: "c:desh_ores",
      waterOutput: [
        itemCount("ad_astra:desh_nugget", oreBlockWaterRate),
        itemCount("techreborn:silver_nugget", 2),
        itemCount("create:experience_nugget"),
      ],
      mercuryOutput: [
        itemCount("ad_astra:desh_nugget", oreBlockMercuryRate),
        itemCount("techreborn:silver_nugget", 3),
        itemCount("create:experience_nugget", 2),
      ],
    },
    {
      tag: "c:ice_shard_ores",
      waterOutput: [itemCount("ad_astra:ice_shard", 2)],
      mercuryOutput: [itemCount("ad_astra:ice_shard", 3)],
    },
    {
      tag: "c:ostrum_ores",
      waterOutput: [
        itemCount("ad_astra:ostrum_nugget", oreBlockWaterRate),
        itemCount("techreborn:lead_nugget", 2),
        itemCount("create:experience_nugget"),
      ],
      mercuryOutput: [
        itemCount("ad_astra:ostrum_nugget", oreBlockMercuryRate),
        itemCount("techreborn:lead_nugget", 3),
        itemCount("create:experience_nugget", 2),
      ],
    },
    {
      tag: "c:calorite_ores",
      waterOutput: [
        itemCount("ad_astra:calorite_nugget", oreBlockWaterRate),
        itemCount("yttr:yttrium_nugget", 2),
        itemCount("create:experience_nugget"),
      ],
      mercuryOutput: [
        itemCount("ad_astra:calorite_nugget", oreBlockMercuryRate),
        itemCount("yttr:yttrium_nugget", 3),
        itemCount("create:experience_nugget", 2),
      ],
    },
    {
      tag: "c:ores/zinc",
      waterOutput: [
        itemCount("create:zinc_nugget", oreBlockWaterRate),
        itemCount("minecraft:gunpowder", 2),
        itemCount("create:experience_nugget"),
      ],
      mercuryOutput: [
        itemCount("create:zinc_nugget", oreBlockMercuryRate),
        itemCount("minecraft:gunpowder", 3),
        itemCount("create:experience_nugget", 2),
      ],
    },
    {
      tag: "c:lead_ores",
      waterOutput: [itemCount("techreborn:lead_nugget", oreBlockWaterRate), itemCount("create:experience_nugget")],
      mercuryOutput: [
        itemCount("techreborn:lead_nugget", oreBlockMercuryRate),
        itemCount("create:experience_nugget", 2),
      ],
    },
    {
      tag: "c:silver_ores",
      waterOutput: [itemCount("techreborn:silver_nugget", oreBlockWaterRate), itemCount("create:experience_nugget")],
      mercuryOutput: [
        itemCount("techreborn:silver_nugget", oreBlockMercuryRate),
        itemCount("create:experience_nugget", 2),
      ],
    },
    {
      tag: "c:tin_ores",
      waterOutput: [itemCount("techreborn:tin_nugget", oreBlockWaterRate), itemCount("create:experience_nugget")],
      mercuryOutput: [
        itemCount("techreborn:tin_nugget", oreBlockMercuryRate),
        itemCount("create:experience_nugget", 2),
      ],
    },
    {
      tag: "c:ores/cobalt",
      waterOutput: [itemCount("tconstruct:cobalt_nugget", oreBlockWaterRate), itemCount("create:experience_nugget")],
      mercuryOutput: [
        itemCount("tconstruct:cobalt_nugget", oreBlockMercuryRate),
        itemCount("create:experience_nugget", 2),
      ],
    },
    {
      item: "yttr:gadolinite",
      waterOutput: [itemCount("yttr:yttrium_nugget", oreBlockWaterRate), itemCount("create:experience_nugget")],
      mercuryOutput: [itemCount("yttr:yttrium_nugget", oreBlockMercuryRate), itemCount("create:experience_nugget", 2)],
    },
    {
      tag: "c:certus_quartz_ores",
      waterOutput: [itemCount("ae2:certus_quartz_crystal"), itemCount("ae2:certus_quartz_dust", 5)],
      mercuryOutput: [itemCount("ae2:certus_quartz_crystal", 2), itemCount("ae2:certus_quartz_dust", 7)],
    },
    // Raw ores
    {
      item: "minecraft:raw_iron",
      waterOutput: [itemCount("minecraft:iron_nugget", rawOreWaterRate), itemCount("minecraft:redstone")],
      mercuryOutput: [itemCount("minecraft:iron_nugget", rawOreMercuryRate), itemCount("minecraft:redstone", 2)],
    },
    {
      item: "minecraft:raw_copper",
      waterOutput: [itemCount("create:copper_nugget", rawOreWaterRate), itemCount("minecraft:clay_ball")],
      mercuryOutput: [itemCount("create:copper_nugget", rawOreMercuryRate), itemCount("minecraft:clay_ball", 2)],
    },
    {
      item: "minecraft:raw_gold",
      waterOutput: [itemCount("minecraft:gold_nugget", rawOreWaterRate), itemCount("minecraft:quartz")],
      mercuryOutput: [itemCount("minecraft:gold_nugget", rawOreMercuryRate), itemCount("minecraft:quartz", 2)],
    },
    {
      item: "ad_astra:raw_desh",
      waterOutput: [itemCount("ad_astra:desh_nugget", rawOreWaterRate)],
      mercuryOutput: [itemCount("ad_astra:desh_nugget", rawOreMercuryRate)],
    },
    {
      item: "ad_astra:raw_ostrum",
      waterOutput: [itemCount("ad_astra:ostrum_nugget", rawOreWaterRate)],
      mercuryOutput: [itemCount("ad_astra:ostrum_nugget", rawOreMercuryRate)],
    },
    {
      item: "ad_astra:raw_calorite",
      waterOutput: [itemCount("ad_astra:calorite_nugget", rawOreWaterRate)],
      mercuryOutput: [itemCount("ad_astra:calorite_nugget", rawOreMercuryRate)],
    },
    {
      item: "create:raw_zinc",
      waterOutput: [itemCount("create:zinc_nugget", rawOreWaterRate)],
      mercuryOutput: [itemCount("create:zinc_nugget", rawOreMercuryRate)],
    },
    {
      item: "techreborn:raw_lead",
      waterOutput: [itemCount("techreborn:lead_nugget", rawOreWaterRate)],
      mercuryOutput: [itemCount("techreborn:lead_nugget", rawOreMercuryRate)],
    },
    {
      item: "techreborn:raw_silver",
      waterOutput: [itemCount("techreborn:silver_nugget", rawOreWaterRate)],
      mercuryOutput: [itemCount("techreborn:silver_nugget", rawOreMercuryRate)],
    },
    {
      item: "techreborn:raw_tin",
      waterOutput: [itemCount("techreborn:tin_nugget", rawOreWaterRate)],
      mercuryOutput: [itemCount("techreborn:tin_nugget", rawOreMercuryRate)],
    },
    {
      item: "tconstruct:raw_cobalt",
      waterOutput: [itemCount("tconstruct:cobalt_nugget", rawOreWaterRate)],
      mercuryOutput: [itemCount("tconstruct:cobalt_nugget", rawOreMercuryRate)],
    },
    {
      item: "yttr:raw_gadolinite",
      waterOutput: [itemCount("yttr:yttrium_nugget", rawOreWaterRate)],
      mercuryOutput: [itemCount("yttr:yttrium_nugget", rawOreMercuryRate)],
    },
  ];

  const COBBLE_PROCESSING = [
    {
      item: "minecraft:cobblestone",
      output: [itemCount("minecraft:gravel")],
      time: 40,
      waterAmount: 10,
    },
    {
      item: "minecraft:gravel",
      output: [itemCount("minecraft:sand")],
      time: 40,
      waterAmount: 10,
    },
    {
      item: "minecraft:sand",
      count: 4,
      output: [itemCount("minecraft:clay_ball")],
      time: 40,
      waterAmount: 200,
    },
  ];

  onEvent("recipes", (event) => {
    event.remove({ type: "techreborn:industrial_grinder" });

    ORES.forEach((ore) => {
      if (ore.tag) {
        if (ore.waterOutput) {
          industrialGrinderTag(event, ore.tag, ore.waterOutput, "minecraft:water", 100, ore.energy, ore.time);
        }
        if (ore.mercuryOutput) {
          industrialGrinderTag(event, ore.tag, ore.mercuryOutput, "techreborn:mercury", 100, ore.energy, ore.time);
        }
      }
      if (ore.item) {
        if (ore.waterOutput) {
          industrialGrinder(event, ore.item, ore.waterOutput, "minecraft:water", 100, ore.count, ore.energy, ore.time);
        }
        if (ore.mercuryOutput) {
          industrialGrinder(
            event,
            ore.item,
            ore.mercuryOutput,
            "techreborn:mercury",
            100,
            ore.count,
            ore.energy,
            ore.time
          );
        }
      }
    });

    COBBLE_PROCESSING.forEach((item) => {
      industrialGrinder(
        event,
        item.item,
        item.output,
        "minecraft:water",
        item.waterAmount,
        item.count,
        item.energy,
        item.time
      );
    });
  });
}
