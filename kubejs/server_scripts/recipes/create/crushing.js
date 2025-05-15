(function createCrushingRecipes() {
  onEvent("recipes", (event) => {
    //Replace with other netherrack inputs and outputs
    /**
     * @typedef CrushingRecipe
     * @property {Internal.IngredientJS_} input
     * @property {Internal.IngredientJS_[]} outputs
     */
    /** @type {CrushingRecipe[]} */
    const crushingRecipes = [
      {
        input: "tconstruct:ender_slime_crystal_cluster",
        outputs: [
          Item.of("tconstruct:ender_slime_crystal", 3),
          Item.of("tconstruct:ender_slime_crystal", 1).withChance(0.5),
        ],
      },
      {
        input: "minecraft:packed_ice",
        outputs: [Item.of("ad_astra:ice_shard", 2), Item.of("ad_astra:ice_shard", 1).withChance(0.5)],
      },
      {
        input: "minecraft:blue_ice",
        outputs: [
          Item.of("ad_astra:ice_shard", 9),
          Item.of("ad_astra:ice_shard", 2).withChance(0.66),
          Item.of("ad_astra:ice_shard", 1).withChance(0.33),
        ],
      },
      {
        input: "minecraft:calcite",
        outputs: [Item.of("techreborn:calcite_dust", 4)],
      },
      {
        input: "minecraft:dead_tube_coral_block",
        outputs: [Item.of("techreborn:calcite_dust", 1)],
      },
      {
        input: "minecraft:dead_brain_coral_block",
        outputs: [Item.of("techreborn:calcite_dust", 1)],
      },
      {
        input: "minecraft:dead_bubble_coral_block",
        outputs: [Item.of("techreborn:calcite_dust", 1)],
      },
      {
        input: "minecraft:dead_fire_coral_block",
        outputs: [Item.of("techreborn:calcite_dust", 1)],
      },
      {
        input: "minecraft:dead_horn_coral_block",
        outputs: [Item.of("techreborn:calcite_dust", 1)],
      },
      {
        input: "minecraft:tube_coral_block",
        outputs: [
          Item.of("minecraft:blue_dye", 1),
          Item.of("minecraft:blue_dye", 2).withChance(0.5),
          Item.of("minecraft:prismarine_shard", 1).withChance(0.1),
          Item.of("minecraft:lapis_lazuli", 1).withChance(0.02),
          Item.of("techreborn:calcite_dust", 1).withChance(0.1),
          Item.of("minecraft:tube_coral", 1).withChance(0.25),
          Item.of("minecraft:tube_coral_fan", 1).withChance(0.25),
        ],
      },
      {
        input: "minecraft:brain_coral_block",
        outputs: [
          Item.of("minecraft:pink_dye", 1),
          Item.of("minecraft:pink_dye", 2).withChance(0.5),
          Item.of("tconstruct:pig_iron_nugget", 1).withChance(0.1),
          Item.of("farmersdelight:ham", 1).withChance(0.02),
          Item.of("techreborn:calcite_dust", 1).withChance(0.1),
          Item.of("minecraft:brain_coral", 1).withChance(0.25),
          Item.of("minecraft:brain_coral_fan", 1).withChance(0.25),
        ],
      },
      {
        input: "minecraft:bubble_coral_block",
        outputs: [
          Item.of("minecraft:purple_dye", 1),
          Item.of("minecraft:purple_dye", 2).withChance(0.5),
          Item.of("minecraft:popped_chorus_fruit", 1).withChance(0.1),
          Item.of("ae2:ender_dust", 1).withChance(0.2),
          Item.of("techreborn:calcite_dust", 1).withChance(0.1),
          Item.of("minecraft:bubble_coral", 1).withChance(0.25),
          Item.of("minecraft:bubble_coral_fan", 1).withChance(0.25),
        ],
      },
      {
        input: "minecraft:fire_coral_block",
        outputs: [
          Item.of("minecraft:red_dye", 1),
          Item.of("minecraft:red_dye", 2).withChance(0.5),
          Item.of("minecraft:blaze_powder", 1).withChance(0.05),
          Item.of("tconstruct:blood_slime_ball", 1).withChance(0.05),
          Item.of("techreborn:calcite_dust", 1).withChance(0.1),
          Item.of("minecraft:fire_coral", 1).withChance(0.25),
          Item.of("minecraft:fire_coral_fan", 1).withChance(0.25),
        ],
      },
      {
        input: "minecraft:horn_coral_block",
        outputs: [
          Item.of("minecraft:yellow_dye", 1),
          Item.of("minecraft:yellow_dye", 2).withChance(0.5),
          Item.of("techreborn:sponge_piece", 1).withChance(0.15),
          Item.of("minecraft:sea_pickle", 1).withChance(0.1),
          Item.of("techreborn:calcite_dust", 1).withChance(0.1),
          Item.of("minecraft:horn_coral", 1).withChance(0.25),
          Item.of("minecraft:horn_coral_fan", 1).withChance(0.25),
        ],
      },
      {
        input: "minecraft:cobbled_deepslate",
        outputs: [Item.of("create:zinc_nugget").withChance(0.13), Item.of("minecraft:coal").withChance(0.05)],
      },
      {
        input: "tconstruct:ender_slime_crystal_block",
        outputs: [Item.of("tconstruct:ender_slime_crystal", 4)],
      },
      //Diorite,Granite,Andesite Crushing
      {
        input: "minecraft:diorite",
        outputs: [
          Item.of("minecraft:quartz"),
          Item.of("techreborn:diorite_dust"),
          Item.of("techreborn:andesite_dust"),
          Item.of("minecraft:quartz").withChance(0.25),
        ],
      },
      {
        input: "minecraft:flint",
        outputs: [Item.of("techreborn:andesite_dust"), Item.of("techreborn:flint_dust").withChance(0.5)],
      },
      {
        input: "minecraft:granite",
        outputs: [
          Item.of("minecraft:red_sand"),
          Item.of("techreborn:granite_dust"),
          Item.of("techreborn:granite_dust").withChance(0.5),
          Item.of("minecraft:red_sand").withChance(0.25),
        ],
      },
      {
        input: "minecraft:andesite",
        outputs: [
          Item.of("minecraft:cobblestone"),
          Item.of("techreborn:andesite_dust"),
          Item.of("techreborn:andesite_dust").withChance(0.9),
        ],
      },
      {
        input: "minecraft:glow_berries",
        outputs: [Item.of("naturalist:glow_goop"), Item.of("naturalist:glow_goop").withChance(0.5)],
      },
      {
        input: "minecraft:snow_block",
        outputs: [Item.of("minecraft:snowball", 2), Item.of("minecraft:snowball").withChance(0.5)],
      },
      //Netherack Crushing
      {
        input: "minecraft:netherrack",
        outputs: [Item.of("techreborn:netherrack_dust"), Item.of("techreborn:netherrack_dust").withChance(0.5)],
      },
      {
        input: "minecraft:warped_nylium",
        outputs: [
          Item.of("techreborn:netherrack_dust"),
          Item.of("techreborn:netherrack_dust").withChance(0.5),
          Item.of("minecraft:warped_fungus").withChance(0.1),
        ],
      },
      {
        input: "minecraft:crimson_nylium",
        outputs: [
          Item.of("techreborn:netherrack_dust"),
          Item.of("techreborn:netherrack_dust").withChance(0.5),
          Item.of("minecraft:crimson_fungus").withChance(0.1),
        ],
      },
      // warped fungi crushing
      {
        input: "minecraft:warped_wart_block",
        outputs: [
          Item.of("minecraft:warped_roots"),
          Item.of("minecraft:nether_sprouts").withChance(0.25),
          Item.of("minecraft:warped_fungus").withChance(0.25),
        ],
      },
      {
        input: "minecraft:nether_wart_block",
        outputs: [
          Item.of("minecraft:crimson_roots"),
          Item.of("minecraft:nether_wart").withChance(0.25),
          Item.of("minecraft:crimson_fungus").withChance(0.25),
        ],
      },
      {
        input: "minecraft:dripstone_block",
        outputs: [Item.of("minecraft:clay_ball"), Item.of("minecraft:clay_ball").withChance(0.5)],
      },
      /*
              {
                  input: "#c:coral_blocks",
                  outputs: [Item.of("techreborn:calcite_dust")],
              },
              */
      // Ad Astra Crushing
      {
        input: "ad_astra:moon_stone",
        outputs: [Item.of("ad_astra:moon_sand")],
      },
      {
        input: "ad_astra:moon_sand",
        outputs: [Item.of("minecraft:quartz").withChance(0.05)],
      },
      {
        input: "ad_astra:mars_stone",
        outputs: [Item.of("ad_astra:mars_sand")],
      },
      {
        input: "ad_astra:conglomerate",
        outputs: [Item.of("ad_astra:raw_ostrum").withChance(0.07)],
      },
      {
        input: "ad_astra:infernal_spire_block",
        outputs: [Item.of("minecraft:magma_block"), Item.of("tconstruct:debris_nugget").withChance(0.03)],
      },
      // AE2 Fluix/Shimmer Crystal Crushing
      {
        input: "ae2:fluix_crystal",
        outputs: [Item.of("ae2:fluix_dust")],
      },
      // concrete crushing into concrete powder
      {
        input: "minecraft:white_concrete",
        outputs: [Item.of("minecraft:white_concrete_powder")],
      },
      {
        input: "minecraft:orange_concrete",
        outputs: [Item.of("minecraft:orange_concrete_powder")],
      },
      {
        input: "minecraft:magenta_concrete",
        outputs: [Item.of("minecraft:magenta_concrete_powder")],
      },
      {
        input: "minecraft:light_blue_concrete",
        outputs: [Item.of("minecraft:light_blue_concrete_powder")],
      },
      {
        input: "minecraft:yellow_concrete",
        outputs: [Item.of("minecraft:yellow_concrete_powder")],
      },
      {
        input: "minecraft:lime_concrete",
        outputs: [Item.of("minecraft:lime_concrete_powder")],
      },
      {
        input: "minecraft:pink_concrete",
        outputs: [Item.of("minecraft:pink_concrete_powder")],
      },
      {
        input: "minecraft:gray_concrete",
        outputs: [Item.of("minecraft:gray_concrete_powder")],
      },
      {
        input: "minecraft:light_gray_concrete",
        outputs: [Item.of("minecraft:light_gray_concrete_powder")],
      },
      {
        input: "minecraft:cyan_concrete",
        outputs: [Item.of("minecraft:cyan_concrete_powder")],
      },
      {
        input: "minecraft:purple_concrete",
        outputs: [Item.of("minecraft:purple_concrete_powder")],
      },
      {
        input: "minecraft:blue_concrete",
        outputs: [Item.of("minecraft:blue_concrete_powder")],
      },
      {
        input: "minecraft:brown_concrete",
        outputs: [Item.of("minecraft:brown_concrete_powder")],
      },
      {
        input: "minecraft:green_concrete",
        outputs: [Item.of("minecraft:green_concrete_powder")],
      },
      {
        input: "minecraft:red_concrete",
        outputs: [Item.of("minecraft:red_concrete_powder")],
      },
      {
        input: "minecraft:black_concrete",
        outputs: [Item.of("minecraft:black_concrete_powder")],
      },
      {
        input: "yttr:ruined_cobblestone",
        outputs: [
          Item.of("yttr:rubble"),
          Item.of("yttr:rubble").withChance(0.75),
          Item.of("tconstruct:debris_nugget").withChance(0.1),
        ],
      },
      {
        input: "yttr:rubble",
        outputs: [
          Item.of("tconstruct:debris_nugget"),
          Item.of("techreborn:andesite_dust"),
          Item.of("ad_astra:steel_nugget").withChance(0.1),
          Item.of("techreborn:bronze_nugget").withChance(0.1),
        ],
      },
      {
        input: "createastral:monazite_crystal",
        outputs: [
          Item.of("yttr:neodymium_dust"),
          Item.of("createastral:crushed_raw_gadolinite"),
          Item.of("yttr:neodymium_dust").withChance(0.75),
          Item.of("createastral:crushed_raw_gadolinite").withChance(0.5),
          Item.of("create:crushed_raw_iron").withChance(0.5),
        ],
      },
      {
        input: "minecraft:soul_sand",
        outputs: [Item.of("xpcrystals:soul_compound", 3), Item.of("xpcrystals:soul_compound").withChance(0.5)],
      },
      {
        input: "minecraft:dried_kelp",
        outputs: [Item.of("minecraft:gunpowder").withChance(0.5), Item.of("create:experience_nugget").withChance(0.1)],
      },
    ];
    crushingRecipes.forEach((recipe) => {
      event.recipes.create.crushing(recipe.outputs, recipe.input).processingTime(200);
    });
    // I have no idea what to do with this so I'm just putting it here - _Shortman
    // Originally part of 'crushing.js' made by Max Norfolk
    //////////////////////////////////////////////////
    // Ores
    //////////////////////////////////////////////////
    const CRUSHING_ORE_BONUS_ORE_YIELD = 0.33;
    const CRUSHING_ORE_BONUS_XP_CHUNKS = 0.33;
    const EXTRA_CHANCE = 0.2;
    /// Raw
    const oreCrushingRecipes = [
      {
        mod: "techreborn",
        ores: [
          {
            name: "tin",
            extra: "techreborn:silver_nugget",
          },
          {
            name: "silver",
            extra: "create:zinc_nugget",
          },
          {
            name: "lead",
            extra: "minecraft:coal",
          },
        ],
        suffix: "storage_block",
        crushed_prefix: "create",
      },
      {
        mod: "ad_astra",
        ores: [
          {
            name: "desh",
            extra: "techreborn:silver_nugget",
          },
          {
            name: "ostrum",
            extra: "techreborn:lead_nugget",
          },
          { name: "calorite" },
        ],
        suffix: "block",
        crushed_prefix: "createastral",
      },
      {
        mod: "yttr",
        ores: [
          {
            name: "gadolinite",
            extra: "techreborn:silver_nugget",
          },
        ],
        suffix: "block",
        crushed_prefix: "createastral",
      },
      {
        mod: "tconstruct",
        ores: [
          {
            name: "cobalt",
            extra: "techreborn:tin_nugget",
          },
        ],
        suffix: "block",
        crushed_prefix: "createastral",
      },
      {
        mod: "create",
        ores: [{ name: "zinc" }],
        suffix: "block",
        crushed_prefix: "create",
      },
      {
        mod: "minecraft",
        ores: [{ name: "iron" }, { name: "gold" }, { name: "copper" }],
        suffix: "block",
        crushed_prefix: "create",
      },
    ];
    oreCrushingRecipes.forEach((mod) => {
      mod.ores.forEach((ore) => {
        // No way to make this completely type-safe, casts are used.
        let raw_ore = `${mod.mod}:raw_${ore.name}`;
        let raw_ore_block = `${mod.mod}:raw_${ore.name}_${mod.suffix}`;
        let crushed_ore = `${mod.crushed_prefix}:crushed_raw_${ore.name}`;
        // remove the normal create crushing recipes for ores
        event.remove({
          type: "create:crushing",
          input: raw_ore_block,
          output: crushed_ore,
        });
        event.remove({
          type: "create:crushing",
          input: raw_ore,
          output: crushed_ore,
        });
        let single_ore_output = [
          crushed_ore,
          Item.of(crushed_ore).withChance(CRUSHING_ORE_BONUS_ORE_YIELD),
          Item.of("create:experience_nugget").withChance(CRUSHING_ORE_BONUS_XP_CHUNKS),
        ];
        let multi_ore_output = [
          Item.of(crushed_ore, 9),
          Item.of(crushed_ore, 9).withChance(CRUSHING_ORE_BONUS_ORE_YIELD),
          Item.of("create:experience_nugget", 9).withChance(CRUSHING_ORE_BONUS_XP_CHUNKS),
        ];
        if (ore.extra) {
          single_ore_output.push(Item.of(ore.extra).withChance(EXTRA_CHANCE));
          multi_ore_output.push(Item.of(ore.extra, 9).withChance(EXTRA_CHANCE));
        }
        event.recipes.createCrushing(single_ore_output, raw_ore);
        event.recipes.createCrushing(multi_ore_output, raw_ore_block);
      });
    });
    /// Ore block from silktouch
    const BONUS_CRUSH_ORE = 0.75;
    const BLOCK_CHANCE = 0.12;
    const oreMapping = {
      coal: { name: "minecraft:coal", count: 1 },
      iron: { name: "minecraft:raw_iron", count: 1 },
      copper: { name: "minecraft:raw_copper", count: 5 },
      gold: { name: "minecraft:raw_gold", count: 1 },
      redstone: { name: "minecraft:redstone", count: 6 },
      emerald: { name: "minecraft:emerald", count: 1 },
      lapis: { name: "minecraft:lapis_lazuli", count: 1 },
      diamond: { name: "minecraft:diamond", count: 1 },
      zinc: { name: "create:raw_zinc", count: 1 },
      desh: { name: "ad_astra:raw_desh", count: 1 },
      ostrum: { name: "ad_astra:raw_ostrum", count: 1 },
      calorite: { name: "ad_astra:raw_calorite", count: 1 },
      cheese: { name: "ad_astra:cheese", count: 1 },
      ice_shard: { name: "ad_astra:ice_shard", count: 1 },
      lead: { name: "techreborn:raw_lead", count: 1 },
      silver: { name: "techreborn:raw_silver", count: 1 },
      tin: { name: "techreborn:raw_tin", count: 1 },
      yttr: { name: "yttr:raw_gadolinite", count: 1 },
      cobalt: { name: "tconstruct:raw_cobalt", count: 1 },
    };
    const ores = [
      // Earth Ores
      { ore: "zinc", name: "create:zinc_ore", block: "minecraft:cobblestone", bonus: 0 },
      { ore: "zinc", name: "create:deepslate_zinc_ore", block: "minecraft:cobbled_deepslate", bonus: 1 },
      { ore: "tin", name: "techreborn:tin_ore", block: "minecraft:cobblestone", bonus: 0 },
      { ore: "tin", name: "techreborn:deepslate_tin_ore", block: "minecraft:cobbled_deepslate", bonus: 1 },
      // Tech Reborn Planet Ores
      { ore: "silver", name: "techreborn:silver_ore", block: "ad_astra:moon_cobblestone", bonus: 1 },
      { ore: "silver", name: "techreborn:deepslate_silver_ore", block: "ad_astra:moon_cobblestone", bonus: 1 },
      { ore: "lead", name: "techreborn:lead_ore", block: "ad_astra:mars_cobblestone", bonus: 1 },
      { ore: "lead", name: "techreborn:deepslate_lead_ore", block: "ad_astra:mars_cobblestone", bonus: 1 },
      // Misc
      { ore: "iron", name: "ad_astra:mercury_iron_ore", block: "ad_astra:mercury_cobblestone", bonus: 1 },
      { ore: "yttr", name: "yttr:gadolinite", block: "ad_astra:mercury_cobblestone", bonus: 1 },
      { ore: "cobalt", name: "tconstruct:cobalt_ore", block: "ad_astra:moon_cobblestone", bonus: 1 },
    ];
    // vanilla ores
    const VANILLA_ORES = ["coal", "iron", "copper", "gold", "redstone", "emerald", "lapis", "diamond"];
    VANILLA_ORES.forEach((vanillaOre) => {
      ores.push({ ore: vanillaOre, name: `minecraft:${vanillaOre}_ore`, block: "minecraft:cobblestone", bonus: 0 });
      ores.push({
        ore: vanillaOre,
        name: `minecraft:deepslate_${vanillaOre}_ore`,
        block: `minecraft:cobbled_deepslate`,
        bonus: 1,
      });
    });
    // ad astra deepslate (these aren't used I think?)
    const AD_ASTRA_DEEPSLATE_ORES = ["desh", "ostrum", "calorite", "ice_shard"];
    AD_ASTRA_DEEPSLATE_ORES.forEach((adAstraDeepslateOre) => {
      ores.push({
        ore: adAstraDeepslateOre,
        name: `ad_astra:deepslate_${adAstraDeepslateOre}_ore`,
        block: "minecraft:cobbled_deepslate",
        bonus: 1,
      });
    });
    /// Ad Astra Planet's normal ores
    const AD_ASTRA_MOON_ORES = ["cheese", "desh", "iron", "ice_shard"];
    AD_ASTRA_MOON_ORES.forEach((adAstraMoonOre) => {
      ores.push({
        ore: adAstraMoonOre,
        name: `ad_astra:moon_${adAstraMoonOre}_ore`,
        block: "ad_astra:moon_cobblestone",
        bonus: 1,
      });
    });
    const AD_ASTRA_MARS_ORES = ["iron", "diamond", "ostrum", "ice_shard"];
    AD_ASTRA_MARS_ORES.forEach((adAstraMarsOre) => {
      ores.push({
        ore: adAstraMarsOre,
        name: `ad_astra:mars_${adAstraMarsOre}_ore`,
        block: "ad_astra:mars_cobblestone",
        bonus: 1,
      });
    });
    const AD_ASTRA_VENUS_ORES = ["coal", "gold", "diamond", "calorite"];
    AD_ASTRA_VENUS_ORES.forEach((adAstraVenusOre) => {
      ores.push({
        ore: adAstraVenusOre,
        name: `ad_astra:venus_${adAstraVenusOre}_ore`,
        block: "ad_astra:venus_cobblestone",
        bonus: 1,
      });
    });
    const AD_ASTRA_GLACIO_ORES = ["ice_shard", "coal", "copper", "iron", "lapis"];
    AD_ASTRA_GLACIO_ORES.forEach((adAstraGlacioOre) => {
      ores.push({
        ore: adAstraGlacioOre,
        name: `ad_astra:glacio_${adAstraGlacioOre}_ore`,
        block: "ad_astra:glacio_cobblestone",
        bonus: 1,
      });
    });
    ores.forEach((ore) => {
      let count = oreMapping[ore.ore].count + ore.bonus;
      let res = oreMapping[ore.ore].name;
      event.remove({
        type: "create:crushing",
        input: ore.name,
      });
      event.recipes.createCrushing(
        [
          Item.of(res, count),
          Item.of(res).withChance(BONUS_CRUSH_ORE),
          Item.of("create:experience_nugget").withChance(BONUS_CRUSH_ORE),
          Item.of(ore.block).withChance(BLOCK_CHANCE),
        ],
        ore.name
      );
    });
    event.recipes.createCrushing(
      [
        Item.of("techreborn:galena_dust", 2),
        Item.of("techreborn:galena_dust").withChance(0.5),
        Item.of("create:experience_nugget").withChance(0.5),
        Item.of("ad_astra:mercury_cobblestone").withChance(BLOCK_CHANCE),
      ],
      "techreborn:deepslate_galena_ore"
    );
    // LakyCrushingRecipes from resourcegen.js
    const lakyCrushingRecipes = [
      {
        input: "create:ochrum",
        outputs: [
          Item.of("minecraft:raw_gold"),
          Item.of("minecraft:raw_gold").withChance(0.5),
          Item.of("minecraft:glowstone_dust").withChance(0.1),
          Item.of("minecraft:sand").withChance(0.5),
          Item.of("ad_astra:desh_nugget").withChance(0.4),
        ],
      },
      {
        input: "create:crimsite",
        outputs: [
          Item.of("minecraft:raw_iron"),
          Item.of("minecraft:raw_iron").withChance(0.5),
          Item.of("minecraft:redstone").withChance(0.1),
          Item.of("minecraft:granite").withChance(0.5),
          Item.of("minecraft:red_dye").withChance(0.25),
        ],
      },
      {
        input: "create:limestone",
        outputs: [
          Item.of("minecraft:clay_ball"),
          Item.of("techreborn:raw_tin").withChance(0.4),
          Item.of("createastral:lime").withChance(0.7),
        ],
      },
      {
        input: "create:veridium",
        outputs: [
          Item.of("minecraft:raw_copper"),
          Item.of("minecraft:raw_copper").withChance(0.9),
          Item.of("minecraft:sand").withChance(0.5),
          Item.of("minecraft:green_dye").withChance(0.25),
          Item.of("minecraft:emerald").withChance(0.1),
        ],
      },
      {
        input: "create:asurine",
        outputs: [
          Item.of("tconstruct:raw_cobalt"),
          Item.of("tconstruct:raw_cobalt").withChance(0.2),
          Item.of("minecraft:lapis_lazuli").withChance(0.5),
          Item.of("techreborn:lazurite_dust").withChance(0.1),
          Item.of("minecraft:blue_dye").withChance(0.25),
          Item.of("minecraft:prismarine_crystals").withChance(0.2),
        ],
      },
      {
        input: "create:scorchia",
        outputs: [
          Item.of("create:raw_zinc"),
          Item.of("create:powdered_obsidian").withChance(0.9),
          Item.of("minecraft:black_dye").withChance(0.4),
          Item.of("minecraft:tuff").withChance(0.25),
        ],
      },
      {
        input: "ad_astra:mars_cobblestone",
        outputs: [
          Item.of("ad_astra:raw_ostrum").withChance(0.04),
          Item.of("ad_astra:infernal_spire_block").withChance(0.02),
          Item.of("ad_astra:mars_sand"),
        ],
      },
      {
        input: "ad_astra:mercury_cobblestone",
        outputs: [
          Item.of("ad_astra:raw_calorite").withChance(0.04),
          Item.of("minecraft:basalt").withChance(0.2),
          Item.of("minecraft:blackstone").withChance(0.2),
          Item.of("minecraft:magma_block").withChance(0.08),
        ],
      },
      {
        input: "ad_astra:glacio_cobblestone",
        outputs: [
          Item.of("minecraft:blue_ice").withChance(0.3),
          Item.of("minecraft:packed_ice").withChance(0.5),
          Item.of("minecraft:snow_block").withChance(0.3),
          Item.of("createastral:prismatic_crystal").withChance(0.05),
        ],
      },
      {
        input: "ad_astra:moon_cobblestone",
        outputs: [
          Item.of("ad_astra:raw_desh").withChance(0.03),
          Item.of("ad_astra:moon_sand"),
          Item.of("minecraft:tuff").withChance(0.25),
        ],
      },
      {
        input: "minecraft:blackstone",
        outputs: [
          Item.of("create:powdered_obsidian").withChance(0.3),
          Item.of("tconstruct:seared_cobble").withChance(0.3),
        ],
      },
      {
        input: "create:scoria",
        outputs: [
          Item.of("minecraft:magma_cream").withChance(0.4),
          Item.of("minecraft:magma_block").withChance(0.5),
          Item.of("minecraft:tuff").withChance(0.3),
          Item.of("minecraft:basalt").withChance(0.1),
        ],
      },
      {
        input: "minecraft:tuff",
        outputs: [Item.of("minecraft:charcoal").withChance(0.33), Item.of("minecraft:basalt").withChance(0.25)],
      },
      {
        input: "minecraft:prismarine",
        outputs: [
          Item.of("minecraft:lapis_lazuli").withChance(0.5),
          Item.of("minecraft:prismarine_crystals").withChance(0.75),
        ],
      },
      {
        input: "minecraft:basalt",
        outputs: [Item.of("techreborn:basalt_dust"), Item.of("techreborn:andesite_dust").withChance(0.5)],
      },
      {
        input: "dbe:vanta_black",
        outputs: [Item.of("minecraft:black_dye")],
      },
      {
        input: "astraladditions:lune_shroom",
        outputs: [Item.of("minecraft:lapis_lazuli")],
      },
    ];
    lakyCrushingRecipes.forEach((recipe) => {
      event.recipes.createCrushing(recipe.outputs, recipe.input);
    });
  });
})();
