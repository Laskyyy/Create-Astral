(function minecraftStonecuttingRecipes() {
  /**
   * @typedef StonecuttingRecipe
   * @property {Internal.IngredientJS_} input
   * @property {Internal.ItemStackJS_[]} outputs
   */

  onEvent("recipes", (event) => {
    copperOxidising(event);

    /** @type {StonecuttingRecipe[]} */
    const stonecuttingRecipes = [
      {
        input: "createastral:blast-resistant_concrete",
        outputs: [
          Item.of("createastral:blast-resistant_concrete_slab", 2),
          "createastral:blast-resistant_concrete_stairs",
        ],
      },
      {
        input: "minecraft:dripstone_block",
        outputs: [Item.of("minecraft:pointed_dripstone", 2)],
      },
      {
        input: "createastral:bronze_ingot",
        outputs: [Item.of("createastral:bronze_sheet", 2)],
      },
      {
        input: "createastral:andesite_compound",
        outputs: [
          "minecraft:wooden_hoe",
          "minecraft:wooden_axe",
          "minecraft:wooden_shovel",
          "minecraft:wooden_pickaxe",
          "minecraft:wooden_sword",
          "minecraft:stone_hoe",
          "minecraft:stone_axe",
          "minecraft:stone_shovel",
          "minecraft:stone_pickaxe",
          "minecraft:stone_sword",
        ],
      },
      {
        input: "minecraft:dirt",
        outputs: [Item.of("automobility:dirt_off_road", 8)],
      },
      {
        input: "minecraft:grass_block",
        outputs: [Item.of("automobility:grass_off_road", 8)],
      },
      {
        input: "minecraft:moss_block",
        outputs: [Item.of("automobility:grass_off_road", 8)],
      },
      {
        input: "minecraft:moss_carpet",
        outputs: [Item.of("automobility:grass_off_road", 2)],
      },
      {
        input: "minecraft:sand",
        outputs: [Item.of("automobility:sand_off_road", 8)],
      },
      {
        input: "techreborn:basic_machine_frame",
        outputs: ["ae2:inscriber"],
      },
      {
        input: "#c:plates/gold",
        outputs: ["tconstruct:gear_cast", "astraladditions:ring_gold_cast", "tconstruct:coin_cast"],
      },
      {
        input: "automobility:dash_panel",
        outputs: ["automobility:sloped_dash_panel", "automobility:steep_sloped_dash_panel"],
      },
      {
        input: "yttr:wasteland_stone",
        outputs: [
          "yttr:ruined_cobblestone",
          "yttr:ruined_device_gt_1",
          "yttr:ruined_device_bc_1",
          "yttr:ruined_device_fo_1",
        ],
      },
      {
        input: "yttr:wasteland_dirt",
        outputs: [
          "yttr:ruined_bricks",
          "yttr:ruined_construct_rc_1",
          "yttr:ruined_construct_rc_2",
          "yttr:ruined_tank",
          "yttr:ruined_pipe",
          "yttr:ruined_tube",
          "yttr:wasteland_grass",
        ],
      },
      {
        input: "yttr:wasteland_dirt",
        outputs: [
          "yttr:ruined_container",
          "yttr:ruined_device_bc_2",
          "yttr:ruined_device_rp_1",
          "yttr:ruined_frame",
          "yttr:ruined_lever",
          "yttr:ruined_torch",
        ],
      },
      {
        input: "astraladditions:desizer_8",
        outputs: [
          "astraladditions:desizer_1",
          "astraladditions:desizer_2",
          "astraladditions:desizer_3",
          "astraladditions:desizer_4",
          "astraladditions:desizer_6",
          "astraladditions:desizer_7",
          "astraladditions:desizer_9",
        ],
      },
      { input: "create:copper_sheet", outputs: [Item.of("createdeco:copper_sheet_metal", 2)] },
      { input: "create:andesite_alloy", outputs: [Item.of("createdeco:andesite_sheet_metal", 2)] },
      { input: "create:golden_sheet", outputs: [Item.of("createdeco:gold_sheet_metal", 2)] },
      { input: "createdeco:netherite_sheet", outputs: [Item.of("createdeco:netherite_sheet_metal", 2)] },
      { input: "create:brass_sheet", outputs: [Item.of("createdeco:brass_sheet_metal", 2)] },
      { input: "createdeco:cast_iron_sheet", outputs: [Item.of("createdeco:cast_iron_sheet_metal", 2)] },
      { input: "create:iron_sheet", outputs: [Item.of("createdeco:iron_sheet_metal", 2)] },
      { input: "createdeco:zinc_sheet", outputs: [Item.of("createdeco:zinc_sheet_metal", 2)] },
      {
        input: "create:track",
        outputs: [
          "railways:track_acacia",
          "railways:track_birch",
          "railways:track_crimson",
          "railways:track_dark_oak",
          "railways:track_jungle",
          "railways:track_oak",
          "railways:track_spruce",
          "railways:track_warped",
          "railways:track_blackstone",
          "railways:track_ender",
          "railways:track_tieless",
          "railways:track_phantom",
          "railways:track_monorail",
        ],
      },
      {
        input: "minecraft:iron_ingot",
        outputs: ["dustrial_decor:sheet_metal"],
      },
      {
        input: "dustrial_decor:rusty_iron_ingot",
        outputs: ["dustrial_decor:rusty_sheet_metal"],
      },
      {
        input: "dustrial_decor:sheet_metal_plating",
        outputs: [
          "dustrial_decor:sheet_metal_paneling",
          "dustrial_decor:sheet_metal_plating_stairs",
          Item.of("dustrial_decor:sheet_metal_plating_slab", 2),
        ],
      },
      {
        input: "dustrial_decor:rusty_sheet_metal_plating",
        outputs: [
          "dustrial_decor:rusty_sheet_metal_paneling",
          "dustrial_decor:rusty_sheet_metal_plating_stairs",
          Item.of("dustrial_decor:rusty_sheet_metal_plating_slab", 2),
        ],
      },
      {
        input: "dustrial_decor:sheet_metal_treading",
        outputs: ["dustrial_decor:sheet_metal_treading_stairs", Item.of("dustrial_decor:sheet_metal_treading_slab", 2)],
      },
      {
        input: "dustrial_decor:rusty_sheet_metal_treading",
        outputs: [
          "dustrial_decor:rusty_sheet_metal_treading_stairs",
          Item.of("dustrial_decor:rusty_sheet_metal_treading_slab", 2),
        ],
      },
      {
        input: "doodads:asphalt",
        outputs: ["doodads:asphalt_stair", Item.of("doodads:asphalt_slab", 2)],
      },
      {
        input: "minecraft:copper_block",
        outputs: [Item.of("createdeco:copper_sheet_metal", 4)],
      },
      {
        input: "minecraft:copper_block",
        outputs: [Item.of("minecraft:cut_copper", 4)],
      },
    ];
    stonecuttingRecipes.forEach((recipe) => {
      recipe.outputs.forEach((output) => {
        event.stonecutting(output, recipe.input);
      });
    });
  });
  /** @param {Internal.RecipeEventJS} event */
  function copperOxidising(event) {
    // Oxidisation of all copper blocks that can weather
    for (const block of global.VANILLA_COPPER_BLOCKS) {
      for (const state of global.OXIDIZATION_TYPES) {
        event.stonecutting(`minecraft:${state}_${block}`, `minecraft:${block}`);
        event.stonecutting(`minecraft:waxed_${state}_${block}`, `minecraft:waxed_${block}`);
      }
    }
    for (const block of global.CREATE_COPPER_BLOCKS) {
      for (const state of global.OXIDIZATION_TYPES) {
        event.stonecutting(`create:${state}_${block}`, `create:${block}`);
        event.stonecutting(`create:waxed_${state}_${block}`, `create:waxed_${block}`);
      }
    }
    global.OXIDIZATION_TYPES.forEach((state) => {
      /**
       * @typedef OtherCopperStonecuttingRecipe
       * @property {Internal.ItemStackJS_} input
       * @property {Internal.ItemStackJS_[]} outputs
       */

      /** @type {OtherCopperStonecuttingRecipe[]} */
      const otherCopperStonecuttingRecipes = [
        { input: "minecraft:copper_block", outputs: [`minecraft:${state}_copper`] },
        { input: "minecraft:waxed_copper_block", outputs: [`minecraft:waxed_${state}_copper`] },
        { input: "phonos:copper_speaker", outputs: [`phonos:${state}_copper_speaker`] },
        { input: "phonos:waxed_copper_speaker", outputs: [`phonos:waxed_${state}_copper_speaker`] },
        { input: "tconstruct:copper_platform", outputs: [`tconstruct:${state}_copper_platform`] },
        { input: "tconstruct:waxed_copper_platform", outputs: [`tconstruct:waxed_${state}_copper_platform`] },
      ];
      otherCopperStonecuttingRecipes.forEach((recipe) => {
        recipe.outputs.forEach((output) => {
          event.stonecutting(output, recipe.input);
        });
      });
    });
  }
})();
