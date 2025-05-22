(function createAstralItemRegistry() {
  onEvent("item.registry", (event) => {
    event.create("createastral:crushed_raw_desh");
    event.create("createastral:crushed_raw_ostrum");
    event.create("createastral:crushed_raw_calorite");
    event.create("createastral:subatomic_ingot").rarity("epic");
    event.create("createastral:ender_plating").rarity("epic");
    event.create("createastral:prismatic_crystal").displayName("Prismatic Crystal");
    event.create("createastral:astral_conduit").maxStackSize(1).maxDamage(20);
    event.create("createastral:andesite_compound");
    event.create("createastral:bronze_sheet");
    event.create("createastral:olivine_sheet");
    event.create("create:lapis_sheet");
    event.create("create:integrated_circuit");
    event.create("createastral:incomplete_electronic_circuit");
    event.create("createastral:golden_pin");
    event.create("createastral:calorite_pin");
    event.create("createastral:martian_clump");
    event.create("createastral:electrified_pin");
    event.create("createastral:ender_mush");
    event.create("createastral:promethium_atomic_battery").glow(true).rarity("epic");
    event.create("createastral:logo");
    event.create("createastral:bronze_ingot");
    event.create("createastral:uranium_residue").rarity("uncommon");
    event.create("createastral:navigation_mechanism");
    event.create("createastral:living_mechanism");
    event.create("createastral:coin", "create:sequenced_assembly").displayName("Golden Coin");
    event.create("createastral:golden_bowl").displayName("Golden Bowl");
    event
      .create("createastral:filled_golden_bowl", "create:sequenced_assembly")
      .displayName("Filled Golden Bowl")
      .food((food) => {
        food.hunger(0).saturation(0).effect("drinkbeer:drunk", 3000, 0, 1).alwaysEdible();
      });
    event
      .create("createastral:seitan")
      .displayName("Seitan")
      .food((food) => {
        food.hunger(2).saturation(0.5).alwaysEdible();
      });
    event.create("createastral:protobeef");
    event.create("createastral:protochicken");
    event.create("createastral:protomutton");
    event.create("createastral:protopork");
    event.create("createastral:protorabbit");
    event.create("createastral:quadrocopter_blueprint").texture("create:item/schematic");
    event.create("createastral:gyrodyne_blueprint").texture("create:item/schematic");
    event.create("createastral:biplane_blueprint").texture("create:item/schematic");
    event.create("createastral:airship_blueprint").texture("create:item/schematic");
    event.create("createastral:refining_agent").rarity("epic");
    event.create("createastral:separation_agent").rarity("rare");
    event.create("createastral:shimmer_amplifier").rarity("epic");
    event.create("createastral:star_shard").glow(true);
    event.create("createastral:pure_star_shard").glow(true).rarity("epic");
    event.create("createastral:crushed_raw_gadolinite");
    event.create("createastral:crushed_raw_cobalt");
    event.create("createastral:experience_ingot").glow(true);
    event.create("createastral:stone_dust").displayName("Stone Dust");
    event.create("createastral:stone_small_dust").displayName("Small Pile of Stone Dust");
    event.create("createastral:fragile_sheet");
    event.create("createastral:broken_fragile_sheet");
    event.create("createastral:fragile_rocket_fin");
    event.create("createastral:broken_fragile_rocket_fin");
    event.create("createastral:gold_casted_rocket_fin");
    event.create("createastral:horse").food((food) => {
      food.hunger(0).saturation(0).alwaysEdible();
    });
    event.create("createastral:marimo").food((food) => {
      food.hunger(1).saturation(0).alwaysEdible();
    });
    event.create("createastral:moonset_marimo").food((food) => {
      food.hunger(1).saturation(0).effect("levitation", 30, 2, 1).alwaysEdible();
    });
    event.create("createastral:snowy_marimo").food((food) => {
      food.hunger(1).saturation(0).effect("absorption", 180, 0, 1).alwaysEdible();
    });
    event.create("createastral:ender_marimo").food((food) => {
      food.hunger(1).saturation(0).effect("instant_damage", 30, 0, 1).effect("regeneration", 180, 1, 1).alwaysEdible();
    });
    event
      .create("createastral:shimmer_marimo")
      .displayName("Shimarimo")
      .food((food) => {
        food.hunger(1).saturation(0).effect("night_vision", 180, 0, 1).effect("glowing", 180, 1, 1).alwaysEdible();
      });
    //Radiant Armor And Tools//
    event.create("createastral:radiant_helmet", "helmet").tier("radiantarmor").glow(true).rarity("epic");
    event.create("createastral:radiant_chestplate", "chestplate").tier("radiantarmor").glow(true).rarity("epic");
    event.create("createastral:radiant_leggings", "leggings").tier("radiantarmor").glow(true).rarity("epic");
    event.create("createastral:radiant_boots", "boots").tier("radiantarmor").glow(true).rarity("epic");
    event.create("createastral:radiant_sword", "sword").tier("radiant").glow(true).rarity("epic");
    event.create("createastral:radiant_pickaxe", "pickaxe").tier("radiant").glow(true).rarity("epic");
    event.create("createastral:radiant_axe", "axe").tier("radiant").glow(true).rarity("epic");
    event.create("createastral:radiant_shovel", "shovel").tier("radiant").glow(true).rarity("epic");
    //Copper Armor And Tools//
    event.create("createastral:copper_helmet", "helmet").tier("copperarmor");
    event.create("createastral:copper_chestplate", "chestplate").tier("copperarmor");
    event.create("createastral:copper_leggings", "leggings").tier("copperarmor");
    event.create("createastral:copper_boots", "boots").tier("copperarmor");
    event.create("createastral:copper_sword", "sword").tier("copper");
    event.create("createastral:copper_pickaxe", "pickaxe").tier("copper");
    event.create("createastral:copper_axe", "axe").tier("copper");
    event.create("createastral:copper_shovel", "shovel").tier("copper");
    event.create("createastral:copper_hoe", "hoe").tier("copper");
    //Brass Armor And Tools//
    event.create("createastral:brass_helmet", "helmet").tier("brassarmor");
    event.create("createastral:brass_chestplate", "chestplate").tier("brassarmor");
    event.create("createastral:brass_leggings", "leggings").tier("brassarmor");
    event.create("createastral:brass_boots", "boots").tier("brassarmor");
    event.create("createastral:brass_sword", "sword").tier("brass");
    event.create("createastral:brass_pickaxe", "pickaxe").tier("brass");
    event.create("createastral:brass_axe", "axe").tier("brass");
    event.create("createastral:brass_shovel", "shovel").tier("brass");
    event.create("createastral:brass_hoe", "hoe").tier("brass");
    //Steel Armor//
    event.create("createastral:steel_helmet", "helmet").tier("steelarmor");
    event.create("createastral:steel_chestplate", "chestplate").tier("steelarmor");
    event.create("createastral:steel_leggings", "leggings").tier("steelarmor");
    event.create("createastral:steel_boots", "boots").tier("steelarmor");
    //Sturdy Armor//
    event.create("createastral:sturdy_helmet", "helmet").tier("sturdyarmor");
    event.create("createastral:sturdy_chestplate", "chestplate").tier("sturdyarmor");
    event.create("createastral:sturdy_leggings", "leggings").tier("sturdyarmor");
    event.create("createastral:sturdy_boots", "boots").tier("sturdyarmor");
    //Other Items//
    event.create("createastral:orcane").displayName("Information / General Progression").glow(true);
    event.create("createastral:astral_singularity").food((food) => {
      food
        .hunger(50)
        .saturation(50) //This value does not directly translate to saturation points gained
        //The real value can be assumed to be:
        //min(hunger * saturation * 2 + saturation, foodAmountAfterEating)
        .effect("regeneration", 3000, 0, 1)
        .effect("speed", 3000, 0, 1)
        .effect("saturation", 3000, 0, 1)
        .effect("glowing", 6000, 0, 1)
        .removeEffect("poison")
        .alwaysEdible(); //Like golden apples
    });
    event.create("createastral:laskinium").glow(true).rarity("epic");
    event
      .create("createastral:laskinium_pill")
      .glow(true)
      .rarity("epic")
      .food((food) => {
        food
          .hunger(30)
          .saturation(0.5)
          .effect("jump_boost", 1000, 3, 5)
          .effect("speed", 1000, 10, 5)
          .effect("saturation", 1000, 6, 6)
          .removeEffect("poison")
          .alwaysEdible(); //Like golden apples
      });
    event.create("createastral:pure_biomatter");
    event.create("createastral:lime").displayName("Lime Dust");
    event.create("createastral:synthetic_slime");
    // Transitional items
    //event
    //    .create("createastral:incomplete_blaze_head", "create:sequenced_assembly")
    //    .displayName("Incomplete Blaze Head");
    event.create("createastral:incomplete_blaze_head", "create:sequenced_assembly").displayName("Golden Coin");
    event
      .create("createastral:incomplete_transitional_electronic_circuit", "create:sequenced_assembly")
      .displayName("Incomplete Electronic Circuit");
    event
      .create("createastral:transitional_lapis_sheet", "create:sequenced_assembly")
      .displayName("Incomplete Integrated Circuit");
    event
      .create("createastral:incomplete_navigation_mechanism", "create:sequenced_assembly")
      .displayName("Incomplete Navigation Mechanism");
    event
      .create("createastral:incomplete_redstone_chip", "create:sequenced_assembly")
      .displayName("Incomplete Redstone Chip");
    event
      .create("createastral:incomplete_refining_agent", "create:sequenced_assembly")
      .displayName("Incomplete Refining Agent");
    event
      .create("createastral:incomplete_separation_agent", "create:sequenced_assembly")
      .displayName("Incomplete Separation Agent");
    event
      .create("createastral:incomplete_pure_star_shard", "create:sequenced_assembly")
      .displayName("Incomplete Pure Star Shard");
    event.create("createastral:incomplete_calculation_processor", "create:sequenced_assembly");
    event.create("createastral:incomplete_logic_processor", "create:sequenced_assembly");
    event.create("createastral:incomplete_engineering_processor", "create:sequenced_assembly");
    event.create("createastral:incomplete_dash_panel", "create:sequenced_assembly");
    event.create("createastral:incomplete_copper_casing", "create:sequenced_assembly").modelJson({
      parent: "minecraft:block/cube",
      textures: {
        up: "createastral:item/incomplete_copper_casing0",
        down: "createastral:item/incomplete_copper_casing0",
        north: "createastral:item/incomplete_copper_casing1",
        south: "createastral:item/incomplete_copper_casing1",
        west: "createastral:item/incomplete_copper_casing2",
        east: "createastral:item/incomplete_copper_casing2",
      },
    });
    event.create("createastral:incomplete_basic_machine_frame", "create:sequenced_assembly").modelJson({
      parent: "minecraft:block/cube",
      textures: {
        up: "techreborn:block/machines/structure/tier1_machine_block",
        down: "create:block/copper_casing",
        north: "createastral:item/incomplete_basic_machine_frame0",
        south: "createastral:item/incomplete_basic_machine_frame0",
        west: "createastral:item/incomplete_basic_machine_frame1",
        east: "createastral:item/incomplete_basic_machine_frame1",
      },
    });
    event.create("createastral:incomplete_brass_casing", "create:sequenced_assembly").modelJson({
      parent: "minecraft:block/cube",
      textures: {
        up: "createastral:item/incomplete_brass_casing",
        down: "createastral:item/incomplete_brass_casing",
        north: "createastral:item/incomplete_brass_casing",
        south: "createastral:item/incomplete_brass_casing",
        west: "createastral:item/incomplete_brass_casing",
        east: "createastral:item/incomplete_brass_casing",
      },
    });
    event.create("createastral:incomplete_advanced_machine_frame", "create:sequenced_assembly").modelJson({
      parent: "minecraft:block/cube",
      textures: {
        up: "createastral:item/incomplete_advanced_machine_frame",
        down: "createastral:item/incomplete_advanced_machine_frame",
        north: "createastral:item/incomplete_advanced_machine_frame",
        south: "createastral:item/incomplete_advanced_machine_frame",
        west: "createastral:item/incomplete_advanced_machine_frame",
        east: "createastral:item/incomplete_advanced_machine_frame",
      },
    });
    event.create("createastral:incomplete_industrial_machine_frame", "create:sequenced_assembly").modelJson({
      parent: "minecraft:block/cube",
      textures: {
        up: "createastral:item/incomplete_industrial_machine_frame",
        down: "createastral:item/incomplete_industrial_machine_frame",
        north: "createastral:item/incomplete_industrial_machine_frame",
        south: "createastral:item/incomplete_industrial_machine_frame",
        west: "createastral:item/incomplete_industrial_machine_frame",
        east: "createastral:item/incomplete_industrial_machine_frame",
      },
    });
    event.create("createastral:incomplete_refined_radiance_casing", "create:sequenced_assembly").modelJson({
      parent: "minecraft:block/cube",
      textures: {
        up: "createastral:item/incomplete_refined_radiance_casing",
        down: "createastral:item/incomplete_refined_radiance_casing",
        north: "createastral:item/incomplete_refined_radiance_casing",
        south: "createastral:item/incomplete_refined_radiance_casing",
        west: "createastral:item/incomplete_refined_radiance_casing",
        east: "createastral:item/incomplete_refined_radiance_casing",
      },
    });
    event.create("createastral:incomplete_shadow_steel_casing", "create:sequenced_assembly").modelJson({
      parent: "minecraft:block/cube",
      textures: {
        up: "createastral:item/incomplete_shadow_steel_casing",
        down: "createastral:item/incomplete_shadow_steel_casing",
        north: "createastral:item/incomplete_shadow_steel_casing",
        south: "createastral:item/incomplete_shadow_steel_casing",
        west: "createastral:item/incomplete_shadow_steel_casing",
        east: "createastral:item/incomplete_shadow_steel_casing",
      },
    });
  });
})();
