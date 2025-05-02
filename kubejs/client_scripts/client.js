function hideFromREI() {
  function addTinkerTableVariants(list, item, chippedBlock, maxNum) {
    for (let num = 1; num <= maxNum; num++) {
      list.push(Item.of(item, `{texture:"chipped:${chippedBlock}_${num}"}`));
    }
  }
  onEvent("rei.hide.items", (event) => {
    let HIDDEN_ITEMS = [
      "ae2:silicon",
      "extended_drawers:t1_upgrade",
      "extended_drawers:t2_upgrade",
      "extended_drawers:t3_upgrade",
      "extended_drawers:t4_upgrade",
      "extended_drawers:creative_upgrade",
      "ad_astra:desh_cable",
      "ad_astra:desh_fluid_pipe",
      "ad_astra:ostrum_fluid_pipe",
      "ad_astra:steel_cable",
      "ad_astra:iron_plate",
      "ad_astra:iron_rod",
      "ad_astra:tier_1_rocket",
      "create:andesite_alloy_block",
      "techreborn:scrap_box",
      "techreborn:scrapboxinator",
      "techreborn:recycler",
      "automobility:acacia_planks_slope",
      "automobility:ancient_debris_slope",
      "automobility:andesite_slope",
      "automobility:bedrock_slope",
      "automobility:birch_planks_slope",
      "automobility:black_concrete_slope",
      "automobility:black_terracotta_slope",
      "automobility:black_wool_slope",
      "automobility:blackstone_slope",
      "automobility:blue_concrete_slope",
      "automobility:blue_terracotta_slope",
      "automobility:blue_wool_slope",
      "automobility:bookshelf_slope",
      "automobility:bricks_slope",
      "automobility:brown_concrete_slope",
      "automobility:brown_terracotta_slope",
      "automobility:brown_wool_slope",
      "automobility:calcite_slope",
      "automobility:chiseled_deepslate_slope",
      "automobility:chiseled_nether_bricks_slope",
      "automobility:chiseled_polished_blackstone_slope",
      "automobility:chiseled_quartz_block_slope",
      "automobility:chiseled_red_sandstone_slope",
      "automobility:chiseled_sandstone_slope",
      "automobility:chiseled_stone_bricks_slope",
      "automobility:clay_slope",
      "automobility:coal_block_slope",
      "automobility:coarse_dirt_slope",
      "automobility:cobbled_deepslate_slope",
      "automobility:cobblestone_slope",
      "automobility:cracked_deepslate_bricks_slope",
      "automobility:cracked_deepslate_tiles_slope",
      "automobility:cracked_nether_bricks_slope",
      "automobility:cracked_polished_blackstone_bricks_slope",
      "automobility:cracked_stone_bricks_slope",
      "automobility:crimson_planks_slope",
      "automobility:cut_red_sandstone_slope",
      "automobility:cut_sandstone_slope",
      "automobility:cyan_concrete_slope",
      "automobility:cyan_terracotta_slope",
      "automobility:cyan_wool_slope",
      "automobility:dark_oak_planks_slope",
      "automobility:dark_prismarine_slope",
      "automobility:dead_brain_coral_block_slope",
      "automobility:dead_bubble_coral_block_slope",
      "automobility:dead_fire_coral_block_slope",
      "automobility:dead_horn_coral_block_slope",
      "automobility:dead_tube_coral_block_slope",
      "automobility:deepslate_bricks_slope",
      "automobility:deepslate_tiles_slope",
      "automobility:diamond_block_slope",
      "automobility:diorite_slope",
      "automobility:dirt_slope",
      "automobility:dried_kelp_block_slope",
      "automobility:dripstone_block_slope",
      "automobility:emerald_block_slope",
      "automobility:end_stone_bricks_slope",
      "automobility:end_stone_slope",
      "automobility:gilded_blackstone_slope",
      "automobility:glowstone_slope",
      "automobility:gold_block_slope",
      "automobility:granite_slope",
      "automobility:gray_concrete_slope",
      "automobility:gray_terracotta_slope",
      "automobility:gray_wool_slope",
      "automobility:green_concrete_slope",
      "automobility:green_terracotta_slope",
      "automobility:green_wool_slope",
      "automobility:honeycomb_block_slope",
      "automobility:iron_block_slope",
      "automobility:jungle_planks_slope",
      "automobility:lapis_block_slope",
      "automobility:light_blue_concrete_slope",
      "automobility:light_blue_terracotta_slope",
      "automobility:light_blue_wool_slope",
      "automobility:light_gray_concrete_slope",
      "automobility:light_gray_terracotta_slope",
      "automobility:light_gray_wool_slope",
      "automobility:lime_concrete_slope",
      "automobility:lime_terracotta_slope",
      "automobility:lime_wool_slope",
      "automobility:lodestone_slope",
      "automobility:magenta_concrete_slope",
      "automobility:magenta_terracotta_slope",
      "automobility:magenta_wool_slope",
      "automobility:mossy_cobblestone_slope",
      "automobility:mossy_stone_bricks_slope",
      "automobility:nether_bricks_slope",
      "automobility:nether_wart_block_slope",
      "automobility:netherite_block_slope",
      "automobility:oak_planks_slope",
      "automobility:obsidian_slope",
      "automobility:orange_concrete_slope",
      "automobility:orange_terracotta_slope",
      "automobility:orange_wool_slope",
      "automobility:packed_ice_slope",
      "automobility:pink_concrete_slope",
      "automobility:pink_terracotta_slope",
      "automobility:pink_wool_slope",
      "automobility:polished_andesite_slope",
      "automobility:polished_blackstone_bricks_slope",
      "automobility:polished_blackstone_slope",
      "automobility:polished_deepslate_slope",
      "automobility:polished_diorite_slope",
      "automobility:polished_granite_slope",
      "automobility:prismarine_bricks_slope",
      "automobility:prismarine_slope",
      "automobility:purple_concrete_slope",
      "automobility:purple_terracotta_slope",
      "automobility:purple_wool_slope",
      "automobility:purpur_block_slope",
      "automobility:quartz_block_slope",
      "automobility:quartz_bricks_slope",
      "automobility:raw_copper_block_slope",
      "automobility:raw_gold_block_slope",
      "automobility:raw_iron_block_slope",
      "automobility:red_concrete_slope",
      "automobility:red_nether_bricks_slope",
      "automobility:red_sandstone_slope",
      "automobility:red_terracotta_slope",
      "automobility:red_wool_slope",
      "automobility:sandstone_slope",
      "automobility:sea_lantern_slope",
      "automobility:shroomlight_slope",
      "automobility:smooth_basalt_slope",
      "automobility:smooth_quartz_slope",
      "automobility:smooth_red_sandstone_slope",
      "automobility:smooth_sandstone_slope",
      "automobility:smooth_stone_slope",
      "automobility:snow_block_slope",
      "automobility:soul_soil_slope",
      "automobility:spruce_planks_slope",
      "automobility:steep_acacia_planks_slope",
      "automobility:steep_ancient_debris_slope",
      "automobility:steep_andesite_slope",
      "automobility:steep_bedrock_slope",
      "automobility:steep_birch_planks_slope",
      "automobility:steep_black_concrete_slope",
      "automobility:steep_black_terracotta_slope",
      "automobility:steep_black_wool_slope",
      "automobility:steep_blackstone_slope",
      "automobility:steep_blue_concrete_slope",
      "automobility:steep_blue_terracotta_slope",
      "automobility:steep_blue_wool_slope",
      "automobility:steep_bookshelf_slope",
      "automobility:steep_bricks_slope",
      "automobility:steep_brown_concrete_slope",
      "automobility:steep_brown_terracotta_slope",
      "automobility:steep_brown_wool_slope",
      "automobility:steep_calcite_slope",
      "automobility:steep_chiseled_deepslate_slope",
      "automobility:steep_chiseled_nether_bricks_slope",
      "automobility:steep_chiseled_polished_blackstone_slope",
      "automobility:steep_chiseled_quartz_block_slope",
      "automobility:steep_chiseled_red_sandstone_slope",
      "automobility:steep_chiseled_sandstone_slope",
      "automobility:steep_chiseled_stone_bricks_slope",
      "automobility:steep_clay_slope",
      "automobility:steep_coal_block_slope",
      "automobility:steep_coarse_dirt_slope",
      "automobility:steep_cobbled_deepslate_slope",
      "automobility:steep_cobblestone_slope",
      "automobility:steep_cracked_deepslate_bricks_slope",
      "automobility:steep_cracked_deepslate_tiles_slope",
      "automobility:steep_cracked_nether_bricks_slope",
      "automobility:steep_cracked_polished_blackstone_bricks_slope",
      "automobility:steep_cracked_stone_bricks_slope",
      "automobility:steep_crimson_planks_slope",
      "automobility:steep_cut_red_sandstone_slope",
      "automobility:steep_cut_sandstone_slope",
      "automobility:steep_cyan_concrete_slope",
      "automobility:steep_cyan_terracotta_slope",
      "automobility:steep_cyan_wool_slope",
      "automobility:steep_dark_oak_planks_slope",
      "automobility:steep_dark_prismarine_slope",
      "automobility:steep_dead_brain_coral_block_slope",
      "automobility:steep_dead_bubble_coral_block_slope",
      "automobility:steep_dead_fire_coral_block_slope",
      "automobility:steep_dead_horn_coral_block_slope",
      "automobility:steep_dead_tube_coral_block_slope",
      "automobility:steep_deepslate_bricks_slope",
      "automobility:steep_deepslate_tiles_slope",
      "automobility:steep_diamond_block_slope",
      "automobility:steep_diorite_slope",
      "automobility:steep_dirt_slope",
      "automobility:steep_dried_kelp_block_slope",
      "automobility:steep_dripstone_block_slope",
      "automobility:steep_emerald_block_slope",
      "automobility:steep_end_stone_bricks_slope",
      "automobility:steep_end_stone_slope",
      "automobility:steep_gilded_blackstone_slope",
      "automobility:steep_glowstone_slope",
      "automobility:steep_gold_block_slope",
      "automobility:steep_granite_slope",
      "automobility:steep_gray_concrete_slope",
      "automobility:steep_gray_terracotta_slope",
      "automobility:steep_gray_wool_slope",
      "automobility:steep_green_concrete_slope",
      "automobility:steep_green_terracotta_slope",
      "automobility:steep_green_wool_slope",
      "automobility:steep_honeycomb_block_slope",
      "automobility:steep_iron_block_slope",
      "automobility:steep_jungle_planks_slope",
      "automobility:steep_lapis_block_slope",
      "automobility:steep_light_blue_concrete_slope",
      "automobility:steep_light_blue_terracotta_slope",
      "automobility:steep_light_blue_wool_slope",
      "automobility:steep_light_gray_concrete_slope",
      "automobility:steep_light_gray_terracotta_slope",
      "automobility:steep_light_gray_wool_slope",
      "automobility:steep_lime_concrete_slope",
      "automobility:steep_lime_terracotta_slope",
      "automobility:steep_lime_wool_slope",
      "automobility:steep_lodestone_slope",
      "automobility:steep_magenta_concrete_slope",
      "automobility:steep_magenta_terracotta_slope",
      "automobility:steep_magenta_wool_slope",
      "automobility:steep_mossy_cobblestone_slope",
      "automobility:steep_mossy_stone_bricks_slope",
      "automobility:steep_nether_bricks_slope",
      "automobility:steep_nether_wart_block_slope",
      "automobility:steep_netherite_block_slope",
      "automobility:steep_oak_planks_slope",
      "automobility:steep_obsidian_slope",
      "automobility:steep_orange_concrete_slope",
      "automobility:steep_orange_terracotta_slope",
      "automobility:steep_orange_wool_slope",
      "automobility:steep_packed_ice_slope",
      "automobility:steep_pink_concrete_slope",
      "automobility:steep_pink_terracotta_slope",
      "automobility:steep_pink_wool_slope",
      "automobility:steep_polished_andesite_slope",
      "automobility:steep_polished_blackstone_bricks_slope",
      "automobility:steep_polished_blackstone_slope",
      "automobility:steep_polished_deepslate_slope",
      "automobility:steep_polished_diorite_slope",
      "automobility:steep_polished_granite_slope",
      "automobility:steep_prismarine_bricks_slope",
      "automobility:steep_prismarine_slope",
      "automobility:steep_purple_concrete_slope",
      "automobility:steep_purple_terracotta_slope",
      "automobility:steep_purple_wool_slope",
      "automobility:steep_purpur_block_slope",
      "automobility:steep_quartz_block_slope",
      "automobility:steep_quartz_bricks_slope",
      "automobility:steep_raw_copper_block_slope",
      "automobility:steep_raw_gold_block_slope",
      "automobility:steep_raw_iron_block_slope",
      "automobility:steep_red_concrete_slope",
      "automobility:steep_red_nether_bricks_slope",
      "automobility:steep_red_sandstone_slope",
      "automobility:steep_red_terracotta_slope",
      "automobility:steep_red_wool_slope",
      "automobility:steep_sandstone_slope",
      "automobility:steep_sea_lantern_slope",
      "automobility:steep_shroomlight_slope",
      "automobility:steep_smooth_basalt_slope",
      "automobility:steep_smooth_quartz_slope",
      "automobility:steep_smooth_red_sandstone_slope",
      "automobility:steep_smooth_sandstone_slope",
      "automobility:steep_smooth_stone_slope",
      "automobility:steep_snow_block_slope",
      "automobility:steep_soul_soil_slope",
      "automobility:steep_spruce_planks_slope",
      "automobility:steep_stone_bricks_slope",
      "automobility:steep_stone_slope",
      "automobility:steep_terracotta_slope",
      "automobility:steep_tuff_slope",
      "automobility:steep_warped_planks_slope",
      "automobility:steep_warped_wart_block_slope",
      "automobility:steep_waxed_copper_block_slope",
      "automobility:steep_waxed_cut_copper_slope",
      "automobility:steep_waxed_exposed_copper_slope",
      "automobility:steep_waxed_exposed_cut_copper_slope",
      "automobility:steep_waxed_oxidized_copper_slope",
      "automobility:steep_waxed_oxidized_cut_copper_slope",
      "automobility:steep_waxed_weathered_copper_slope",
      "automobility:steep_waxed_weathered_cut_copper_slope",
      "automobility:steep_white_concrete_slope",
      "automobility:steep_white_terracotta_slope",
      "automobility:steep_white_wool_slope",
      "automobility:steep_yellow_concrete_slope",
      "automobility:steep_yellow_terracotta_slope",
      "automobility:steep_yellow_wool_slope",
      "automobility:stone_bricks_slope",
      "automobility:stone_slope",
      "automobility:terracotta_slope",
      "automobility:tuff_slope",
      "automobility:warped_planks_slope",
      "automobility:warped_wart_block_slope",
      "automobility:waxed_copper_block_slope",
      "automobility:waxed_cut_copper_slope",
      "automobility:waxed_exposed_copper_slope",
      "automobility:waxed_exposed_cut_copper_slope",
      "automobility:waxed_oxidized_copper_slope",
      "automobility:waxed_oxidized_cut_copper_slope",
      "automobility:waxed_weathered_copper_slope",
      "automobility:waxed_weathered_cut_copper_slope",
      "automobility:white_concrete_slope",
      "automobility:white_terracotta_slope",
      "automobility:white_wool_slope",
      "automobility:yellow_concrete_slope",
      "automobility:yellow_terracotta_slope",
      "automobility:yellow_wool_slope",
      "campanion:camping_pack",
      "campanion:day_pack",
      "campanion:tanned_leather",
      "campanion:tanned_leather_pouch",
      "dbe:basic_circuit",
      "dbe:steel_ingot",
      "minecraft:barrier",
      "minecraft:chain_command_block",
      "minecraft:chipped_anvil",
      "minecraft:command_block",
      "minecraft:damaged_anvil",
      "minecraft:light",
      "minecraft:player_head",
      "minecraft:repeating_command_block",
      "minecraft:sculk_sensor",
      Item.of("tconstruct:crafting_station", '{texture:"minecraft:acacia_log"}'),
      Item.of("tconstruct:crafting_station", '{texture:"minecraft:acacia_wood"}'),
      Item.of("tconstruct:crafting_station", '{texture:"minecraft:birch_log"}'),
      Item.of("tconstruct:crafting_station", '{texture:"minecraft:birch_wood"}'),
      Item.of("tconstruct:crafting_station", '{texture:"minecraft:crimson_hyphae"}'),
      Item.of("tconstruct:crafting_station", '{texture:"minecraft:crimson_stem"}'),
      Item.of("tconstruct:crafting_station", '{texture:"minecraft:dark_oak_log"}'),
      Item.of("tconstruct:crafting_station", '{texture:"minecraft:dark_oak_wood"}'),
      Item.of("tconstruct:crafting_station", '{texture:"minecraft:jungle_log"}'),
      Item.of("tconstruct:crafting_station", '{texture:"minecraft:jungle_wood"}'),
      Item.of("tconstruct:crafting_station", '{texture:"minecraft:oak_wood"}'),
      Item.of("tconstruct:crafting_station", '{texture:"minecraft:spruce_log"}'),
      Item.of("tconstruct:crafting_station", '{texture:"minecraft:spruce_wood"}'),
      Item.of("tconstruct:crafting_station", '{texture:"minecraft:stripped_acacia_log"}'),
      Item.of("tconstruct:crafting_station", '{texture:"minecraft:stripped_acacia_wood"}'),
      Item.of("tconstruct:crafting_station", '{texture:"minecraft:stripped_birch_log"}'),
      Item.of("tconstruct:crafting_station", '{texture:"minecraft:stripped_birch_wood"}'),
      Item.of("tconstruct:crafting_station", '{texture:"minecraft:stripped_crimson_hyphae"}'),
      Item.of("tconstruct:crafting_station", '{texture:"minecraft:stripped_crimson_stem"}'),
      Item.of("tconstruct:crafting_station", '{texture:"minecraft:stripped_dark_oak_log"}'),
      Item.of("tconstruct:crafting_station", '{texture:"minecraft:stripped_dark_oak_wood"}'),
      Item.of("tconstruct:crafting_station", '{texture:"minecraft:stripped_jungle_log"}'),
      Item.of("tconstruct:crafting_station", '{texture:"minecraft:stripped_jungle_wood"}'),
      Item.of("tconstruct:crafting_station", '{texture:"minecraft:stripped_oak_log"}'),
      Item.of("tconstruct:crafting_station", '{texture:"minecraft:stripped_oak_wood"}'),
      Item.of("tconstruct:crafting_station", '{texture:"minecraft:stripped_spruce_log"}'),
      Item.of("tconstruct:crafting_station", '{texture:"minecraft:stripped_spruce_wood"}'),
      Item.of("tconstruct:crafting_station", '{texture:"minecraft:stripped_warped_hyphae"}'),
      Item.of("tconstruct:crafting_station", '{texture:"minecraft:stripped_warped_stem"}'),
      Item.of("tconstruct:crafting_station", '{texture:"minecraft:warped_hyphae"}'),
      Item.of("tconstruct:crafting_station", '{texture:"minecraft:warped_stem"}'),
      Item.of("tconstruct:crafting_station", '{texture:"tconstruct:bloodshroom_log"}'),
      Item.of("tconstruct:crafting_station", '{texture:"tconstruct:bloodshroom_wood"}'),
      Item.of("tconstruct:crafting_station", '{texture:"tconstruct:greenheart_log"}'),
      Item.of("tconstruct:crafting_station", '{texture:"tconstruct:greenheart_wood"}'),
      Item.of("tconstruct:crafting_station", '{texture:"tconstruct:skyroot_log"}'),
      Item.of("tconstruct:crafting_station", '{texture:"tconstruct:skyroot_wood"}'),
      Item.of("tconstruct:crafting_station", '{texture:"tconstruct:stripped_bloodshroom_log"}'),
      Item.of("tconstruct:crafting_station", '{texture:"tconstruct:stripped_bloodshroom_wood"}'),
      Item.of("tconstruct:crafting_station", '{texture:"tconstruct:stripped_greenheart_log"}'),
      Item.of("tconstruct:crafting_station", '{texture:"tconstruct:stripped_greenheart_wood"}'),
      Item.of("tconstruct:crafting_station", '{texture:"tconstruct:stripped_skyroot_log"}'),
      Item.of("tconstruct:crafting_station", '{texture:"tconstruct:stripped_skyroot_wood"}'),
      Item.of("tconstruct:crafting_station", '{texture:"techreborn:rubber_log"}'),
      Item.of("tconstruct:crafting_station", '{texture:"techreborn:rubber_log_stripped"}'),
      Item.of("tconstruct:crafting_station", '{texture:"techreborn:rubber_wood"}'),
      Item.of("tconstruct:crafting_station", '{texture:"techreborn:stripped_rubber_wood"}'),
      Item.of("tconstruct:crafting_station", '{texture:"vinery:cherry_log"}'),
      Item.of("tconstruct:crafting_station", '{texture:"vinery:cherry_wood"}'),
      Item.of("tconstruct:crafting_station", '{texture:"vinery:old_cherry_log"}'),
      Item.of("tconstruct:crafting_station", '{texture:"vinery:old_cherry_wood"}'),
      Item.of("tconstruct:crafting_station", '{texture:"vinery:stripped_cherry_log"}'),
      Item.of("tconstruct:crafting_station", '{texture:"vinery:stripped_cherry_wood"}'),
      Item.of("tconstruct:crafting_station", '{texture:"vinery:stripped_old_cherry_log"}'),
      Item.of("tconstruct:crafting_station", '{texture:"vinery:stripped_old_cherry_wood"}'),
      Item.of("tconstruct:part_builder", '{texture:"ad_astra:glacian_planks"}'),
      Item.of("tconstruct:part_builder", '{texture:"minecraft:acacia_planks"}'),
      Item.of("tconstruct:part_builder", '{texture:"minecraft:birch_planks"}'),
      Item.of("tconstruct:part_builder", '{texture:"minecraft:crimson_planks"}'),
      Item.of("tconstruct:part_builder", '{texture:"minecraft:dark_oak_planks"}'),
      Item.of("tconstruct:part_builder", '{texture:"minecraft:jungle_planks"}'),
      Item.of("tconstruct:part_builder", '{texture:"minecraft:spruce_planks"}'),
      Item.of("tconstruct:part_builder", '{texture:"minecraft:warped_planks"}'),
      Item.of("tconstruct:part_builder", '{texture:"tconstruct:bloodshroom_planks"}'),
      Item.of("tconstruct:part_builder", '{texture:"tconstruct:greenheart_planks"}'),
      Item.of("tconstruct:part_builder", '{texture:"tconstruct:skyroot_planks"}'),
      Item.of("tconstruct:part_builder", '{texture:"techreborn:rubber_planks"}'),
      Item.of("tconstruct:part_builder", '{texture:"vinery:cherry_planks"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:awkward"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:fire_resistance"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:harming"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:healing"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:invisibility"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:leaping"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:long_fire_resistance"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:long_invisibility"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:long_leaping"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:long_night_vision"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:long_poison"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:long_regeneration"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:long_slow_falling"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:long_slowness"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:long_strength"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:long_swiftness"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:long_turtle_master"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:long_water_breathing"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:long_weakness"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:luck"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:mundane"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:night_vision"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:poison"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:regeneration"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:slow_falling"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:slowness"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:strength"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:strong_harming"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:strong_healing"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:strong_leaping"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:strong_poison"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:strong_regeneration"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:strong_slowness"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:strong_strength"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:strong_swiftness"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:strong_turtle_master"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:swiftness"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:thick"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:turtle_master"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:water"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:water_breathing"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"minecraft:weakness"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"naturalist:forest_dasher"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"naturalist:glowing"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"naturalist:long_forest_dasher"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"naturalist:long_glowing"}'),
      Item.of("tconstruct:potion_bucket", '{Potion:"naturalist:strong_forest_dasher"}'),
      Item.of("tconstruct:tinker_station", '{texture:"ad_astra:glacian_planks"}'),
      Item.of("tconstruct:tinker_station", '{texture:"minecraft:acacia_planks"}'),
      Item.of("tconstruct:tinker_station", '{texture:"minecraft:birch_planks"}'),
      Item.of("tconstruct:tinker_station", '{texture:"minecraft:crimson_planks"}'),
      Item.of("tconstruct:tinker_station", '{texture:"minecraft:dark_oak_planks"}'),
      Item.of("tconstruct:tinker_station", '{texture:"minecraft:jungle_planks"}'),
      Item.of("tconstruct:tinker_station", '{texture:"minecraft:spruce_planks"}'),
      Item.of("tconstruct:tinker_station", '{texture:"minecraft:warped_planks"}'),
      Item.of("tconstruct:tinker_station", '{texture:"tconstruct:bloodshroom_planks"}'),
      Item.of("tconstruct:tinker_station", '{texture:"tconstruct:greenheart_planks"}'),
      Item.of("tconstruct:tinker_station", '{texture:"tconstruct:skyroot_planks"}'),
      Item.of("tconstruct:tinker_station", '{texture:"techreborn:rubber_planks"}'),
      Item.of("tconstruct:tinker_station", '{texture:"vinery:cherry_planks"}'),
      "techreborn:advanced_alloy_plate",
      "techreborn:advanced_alloy_storage_block",
      "techreborn:advanced_alloy_storage_block_slab",
      "techreborn:advanced_alloy_storage_block_stairs",
      "techreborn:advanced_alloy_storage_block_wall",
      "techreborn:advanced_circuit",
      Item.of("techreborn:bronze_axe", "{Damage:0}"),
      Item.of("techreborn:bronze_boots", "{Damage:0}"),
      Item.of("techreborn:bronze_chestplate", "{Damage:0}"),
      Item.of("techreborn:bronze_helmet", "{Damage:0}"),
      Item.of("techreborn:bronze_hoe", "{Damage:0}"),
      Item.of("techreborn:bronze_ingot"),
      Item.of("techreborn:bronze_leggings", "{Damage:0}"),
      Item.of("techreborn:bronze_pickaxe", "{Damage:0}"),
      Item.of("techreborn:bronze_plate"),
      Item.of("techreborn:bronze_spade", "{Damage:0}"),
      Item.of("techreborn:bronze_storage_block"),
      Item.of("techreborn:bronze_storage_block_slab"),
      Item.of("techreborn:bronze_storage_block_stairs"),
      Item.of("techreborn:bronze_storage_block_wall"),
      Item.of("techreborn:bronze_sword", "{Damage:0}"),
      Item.of("techreborn:cell", '{fluid:"tconstruct:molten_constantan"}'),
      Item.of("techreborn:cell", '{fluid:"tconstruct:molten_enderium"}'),
      Item.of("techreborn:cell", '{fluid:"tconstruct:molten_knightslime"}'),
      Item.of("techreborn:cell", '{fluid:"tconstruct:molten_lumium"}'),
      Item.of("techreborn:cell", '{fluid:"tconstruct:molten_osmium"}'),
      Item.of("techreborn:cell", '{fluid:"tconstruct:molten_pewter"}'),
      Item.of("techreborn:cell", '{fluid:"tconstruct:molten_refined_glowstone"}'),
      Item.of("techreborn:cell", '{fluid:"tconstruct:molten_refined_obsidian"}'),
      Item.of("techreborn:cell", '{fluid:"tconstruct:molten_signalum"}'),
      Item.of("techreborn:cell", '{fluid:"tconstruct:molten_soulsteel"}'),
      "techreborn:copper_nugget",
      "techreborn:data_storage_core",
      "techreborn:energy_crystal",
      Item.of("techreborn:energy_crystal", "{energy:1000000L}"),
      "techreborn:hot_tungstensteel_ingot",
      "techreborn:hot_tungstensteel_nugget",
      "techreborn:hot_tungstensteel_storage_block",
      "techreborn:hot_tungstensteel_storage_block_slab",
      "techreborn:hot_tungstensteel_storage_block_stairs",
      "techreborn:hot_tungstensteel_storage_block_wall",
      "techreborn:iridium_reinforced_stone_storage_block",
      "techreborn:iridium_reinforced_stone_storage_block_slab",
      "techreborn:iridium_reinforced_stone_storage_block_stairs",
      "techreborn:iridium_reinforced_stone_storage_block_wall",
      "techreborn:iridium_reinforced_tungstensteel_storage_block",
      "techreborn:iridium_reinforced_tungstensteel_storage_block_slab",
      "techreborn:iridium_reinforced_tungstensteel_storage_block_stairs",
      "techreborn:iridium_reinforced_tungstensteel_storage_block_wall",
      "techreborn:iridium_storage_block_wall",
      "techreborn:lapotron_crystal",
      Item.of("techreborn:lapotron_crystal", "{energy:10000000L}"),
      "techreborn:nickel_nugget",
      Item.of("techreborn:peridot_axe", "{Damage:0}"),
      Item.of("techreborn:peridot_boots", "{Damage:0}"),
      Item.of("techreborn:peridot_chestplate", "{Damage:0}"),
      Item.of("techreborn:peridot_helmet", "{Damage:0}"),
      Item.of("techreborn:peridot_hoe", "{Damage:0}"),
      Item.of("techreborn:peridot_leggings", "{Damage:0}"),
      Item.of("techreborn:peridot_pickaxe", "{Damage:0}"),
      Item.of("techreborn:peridot_spade", "{Damage:0}"),
      Item.of("techreborn:peridot_sword", "{Damage:0}"),
      "techreborn:raw_tungsten",
      "techreborn:refined_iron_ingot",
      "techreborn:refined_iron_nugget",
      "techreborn:refined_iron_plate",
      "techreborn:refined_iron_storage_block",
      "techreborn:refined_iron_storage_block_slab",
      "techreborn:refined_iron_storage_block_stairs",
      "techreborn:refined_iron_storage_block_wall",
      Item.of("techreborn:ruby_axe", "{Damage:0}"),
      Item.of("techreborn:ruby_boots", "{Damage:0}"),
      Item.of("techreborn:ruby_chestplate", "{Damage:0}"),
      Item.of("techreborn:ruby_helmet", "{Damage:0}"),
      Item.of("techreborn:ruby_hoe", "{Damage:0}"),
      Item.of("techreborn:ruby_leggings", "{Damage:0}"),
      Item.of("techreborn:ruby_pickaxe", "{Damage:0}"),
      Item.of("techreborn:ruby_spade", "{Damage:0}"),
      Item.of("techreborn:ruby_sword", "{Damage:0}"),
      Item.of("techreborn:sapphire_axe", "{Damage:0}"),
      Item.of("techreborn:sapphire_boots", "{Damage:0}"),
      Item.of("techreborn:sapphire_chestplate", "{Damage:0}"),
      Item.of("techreborn:sapphire_helmet", "{Damage:0}"),
      Item.of("techreborn:sapphire_hoe", "{Damage:0}"),
      Item.of("techreborn:sapphire_leggings", "{Damage:0}"),
      Item.of("techreborn:sapphire_pickaxe", "{Damage:0}"),
      Item.of("techreborn:sapphire_spade", "{Damage:0}"),
      Item.of("techreborn:sapphire_sword", "{Damage:0}"),
      Item.of("techreborn:silver_boots", "{Damage:0}"),
      Item.of("techreborn:silver_chestplate", "{Damage:0}"),
      Item.of("techreborn:silver_helmet", "{Damage:0}"),
      Item.of("techreborn:silver_leggings", "{Damage:0}"),
      Item.of("techreborn:steel_boots", "{Damage:0}"),
      Item.of("techreborn:steel_chestplate", "{Damage:0}"),
      Item.of("techreborn:steel_helmet", "{Damage:0}"),
      "techreborn:steel_ingot",
      Item.of("techreborn:steel_leggings", "{Damage:0}"),
      "techreborn:steel_nugget",
      "techreborn:steel_plate",
      "techreborn:steel_storage_block",
      "techreborn:steel_storage_block_slab",
      "techreborn:steel_storage_block_stairs",
      "techreborn:steel_storage_block_wall",
      "techreborn:neutron_reflector",
      "techreborn:thick_neturon_reflector",
      "techreborn:iridium_neutron_reflector",
      "techreborn:mixed_metal_ingot",
      "techreborn:glowstone_small_dust",
      "techreborn:redstone_small_dust",
      "techreborn:bauxite_ore",
      "techreborn:cinnabar_ore",
      "techreborn:galena_ore",
      "techreborn:pyrite_ore",
      "techreborn:sheldonite_ore",
      "techreborn:sodalite_ore",
      "techreborn:sphalerite_ore",
      "techreborn:tungsten_ore",
      "techreborn:deepslate_bauxite_ore",
      "techreborn:deepslate_sheldonite_ore",
      "techreborn:deepslate_sodalite_ore",
      "techreborn:deepslate_tungsten_ore",
      "techreborn:raw_tungsten_storage_block",
      "techreborn:raw_tungsten_storage_block_stairs",
      "techreborn:raw_tungsten_storage_block_slab",
      "techreborn:raw_tungsten_storage_block_wall",
      "createbigcannons:molten_bronze_bucket",
      "createbigcannons:molten_steel_bucket",
      "createbigcannons:molten_nethersteel_bucket",
      "createdeco:zinc_sheet",
      "#yttr:project_tables",
      "createastral:laskinium",
      "createastral:laskinium_pill",
      //Sequenced Assembly Transition Items - not useful to have in rei
      "railways:white_incomplete_conductor_cap",
      "railways:orange_incomplete_conductor_cap",
      "railways:magenta_incomplete_conductor_cap",
      "railways:light_blue_incomplete_conductor_cap",
      "railways:yellow_incomplete_conductor_cap",
      "railways:lime_incomplete_conductor_cap",
      "railways:lime_incomplete_conductor_cap",
      "railways:pink_incomplete_conductor_cap",
      "railways:gray_incomplete_conductor_cap",
      "railways:light_gray_incomplete_conductor_cap",
      "railways:cyan_incomplete_conductor_cap",
      "railways:purple_incomplete_conductor_cap",
      "railways:blue_incomplete_conductor_cap",
      "railways:brown_incomplete_conductor_cap",
      "railways:green_incomplete_conductor_cap",
      "railways:red_incomplete_conductor_cap",
      "railways:black_incomplete_conductor_cap",
      "railways:track_incomplete_acacia",
      "railways:track_incomplete_jungle",
      "railways:track_incomplete_oak",
      "railways:track_incomplete_crimson",
      "railways:track_incomplete_monorail",
      "railways:track_incomplete_blackstone",
      "railways:track_incomplete_phantom",
      "railways:track_incomplete_birch",
      "railways:track_incomplete_warped",
      "railways:track_incomplete_ender",
      "railways:track_incomplete_dark_oak",
      "railways:track_incomplete_spruce",
      "railways:track_incomplete_tieless",
      "estrogen:incomplete_estrogen_patches",
      "estrogen:incomplete_uwu",
      "astralsignals:inter_data_drive_dormant_t1",
      "astralsignals:inter_data_drive_dormant_t2",
      "astralsignals:inter_data_drive_dormant_t3",
      //Dummy Blocks
      "astralgenerators:amalgamation_matrix_controller",
      "astralgenerators:steam_turbine",
      "astralgenerators:solid_boiler",
      "astralgenerators:fluid_boiler",
      "astralgenerators:assembler",
      "astralsignals:signal_coordinator_dummy",
      "astralsignals:radio_telescope_dummy",
      "astralsignals:analog_decryptor_dummy",
      "astralsignals:pp_decryptor_dummy",
      "astralsignals:mp_decryptor_dummy",
      "astralsignals:drive_eraser_dummy",
      "astralsignals:vinyl_printer_dummy",
      "createastral:distillery_dummy",
      "createastral:electrolyser_dummy",
      "createastral:stone_growth_chamber_dummy",
      "createastral:slime_furnace_dummy",
      "createastral:slime_furnace_on_dummy",
      "createastral:washer_dummy",
      "createastral:gas_mixer_dummy",
      "createastral:channeling_transformer_dummy"
    ];
    addTinkerTableVariants(HIDDEN_ITEMS, "tconstruct:part_builder", "oak_planks", 41);
    addTinkerTableVariants(HIDDEN_ITEMS, "tconstruct:part_builder", "birch_planks", 41);
    addTinkerTableVariants(HIDDEN_ITEMS, "tconstruct:part_builder", "spruce_planks", 41);
    addTinkerTableVariants(HIDDEN_ITEMS, "tconstruct:part_builder", "jungle_planks", 41);
    addTinkerTableVariants(HIDDEN_ITEMS, "tconstruct:part_builder", "acacia_planks", 41);
    addTinkerTableVariants(HIDDEN_ITEMS, "tconstruct:part_builder", "dark_oak_planks", 41);
    addTinkerTableVariants(HIDDEN_ITEMS, "tconstruct:part_builder", "crimson_planks", 41);
    addTinkerTableVariants(HIDDEN_ITEMS, "tconstruct:part_builder", "warped_planks", 41);
    addTinkerTableVariants(HIDDEN_ITEMS, "tconstruct:tinker_station", "oak_planks", 41);
    addTinkerTableVariants(HIDDEN_ITEMS, "tconstruct:tinker_station", "birch_planks", 41);
    addTinkerTableVariants(HIDDEN_ITEMS, "tconstruct:tinker_station", "spruce_planks", 41);
    addTinkerTableVariants(HIDDEN_ITEMS, "tconstruct:tinker_station", "jungle_planks", 41);
    addTinkerTableVariants(HIDDEN_ITEMS, "tconstruct:tinker_station", "acacia_planks", 41);
    addTinkerTableVariants(HIDDEN_ITEMS, "tconstruct:tinker_station", "dark_oak_planks", 41);
    addTinkerTableVariants(HIDDEN_ITEMS, "tconstruct:tinker_station", "crimson_planks", 41);
    addTinkerTableVariants(HIDDEN_ITEMS, "tconstruct:tinker_station", "warped_planks", 41);
    const gems = ["peridot", "red_garnet", "ruby", "sapphire", "yellow_garnet"];
    gems.forEach((gem) => {
      HIDDEN_ITEMS.push(`techreborn:${gem}_ore`);
      HIDDEN_ITEMS.push(`techreborn:deepslate_${gem}_ore`);
      HIDDEN_ITEMS.push(`techreborn:${gem}_storage_block`);
      HIDDEN_ITEMS.push(`techreborn:${gem}_storage_block_stairs`);
      HIDDEN_ITEMS.push(`techreborn:${gem}_storage_block_slab`);
      HIDDEN_ITEMS.push(`techreborn:${gem}_storage_block_wall`);
      HIDDEN_ITEMS.push(`techreborn:${gem}_gem`);
      HIDDEN_ITEMS.push(`techreborn:${gem}_dust`);
      HIDDEN_ITEMS.push(`techreborn:${gem}_small_dust`);
    });
    const ingots = [
      "tungstensteel",
      "chrome",
      "titanium",
      "nickel",
      "refined_iron",
      "aluminum",
      "tungsten",
      "platinum",
      "brass",
      "zinc"
    ];
    ingots.forEach((ingot) => {
      HIDDEN_ITEMS.push(`techreborn:${ingot}_tiny_dust`);
      HIDDEN_ITEMS.push(`techreborn:${ingot}_dust`);
      HIDDEN_ITEMS.push(`techreborn:${ingot}_ingot`);
      HIDDEN_ITEMS.push(`techreborn:${ingot}_nugget`);
      HIDDEN_ITEMS.push(`techreborn:${ingot}_plate`);
      HIDDEN_ITEMS.push(`techreborn:${ingot}_small_dust`);
      HIDDEN_ITEMS.push(`techreborn:${ingot}_storage_block`);
      HIDDEN_ITEMS.push(`techreborn:${ingot}_storage_block_slab`);
      HIDDEN_ITEMS.push(`techreborn:${ingot}_storage_block_stairs`);
      HIDDEN_ITEMS.push(`techreborn:${ingot}_storage_block_wall`);
    });
    const dusts = [
      ["almandine", false],
      ["amethyst", true],
      ["andesite", true],
      ["andradite", false],
      ["ashes", true],
      ["basalt", true],
      ["bauxite", false],
      ["bronze", false],
      ["calcite", true],
      ["charcoal", true],
      ["cinnabar", false],
      ["clay", true],
      ["coal", true],
      ["dark_ashes", true],
      ["diamond", true],
      ["diorite", true],
      ["electrum", true],
      ["emerald", false],
      ["ender_eye", false],
      ["ender_pearl", false],
      // ae2 ender dust replaces it
      ["endstone", false],
      ["flint", true],
      ["galena", true],
      ["granite", true],
      ["grossular", false],
      ["invar", false],
      ["lazurite", true],
      ["magnesium", false],
      ["manganese", false],
      ["marble", false],
      ["netherrack", true],
      ["nickel", false],
      ["obsidian", false],
      // replaced by create obsidian dust
      ["olivine", true],
      ["phosphorous", false],
      ["pyrite", false],
      ["pyrope", false],
      ["quartz", false],
      ["saltpeter", true],
      ["saw", true],
      ["sodalite", false],
      ["spessartine", false],
      ["sphalerite", false],
      ["steel", true],
      ["sulfur", true],
      ["uvarovite", false]
    ];
    dusts.forEach((dust) => {
      if (!dust[1]) {
        HIDDEN_ITEMS.push(`techreborn:${dust[0]}_dust`);
      }
      HIDDEN_ITEMS.push(`techreborn:${dust[0]}_small_dust`);
    });
    const plates = [
      "carbon",
      "coal",
      "copper",
      "emerald",
      "gold",
      "iridium",
      "iridium_alloy",
      "iron",
      "lapis",
      "lazurite",
      "magnalium",
      "obsidian",
      "peridot",
      "quartz",
      "red_garnet",
      "redstone",
      "ruby",
      "sapphire",
      "silicon",
      "yellow_garnet"
    ];
    plates.forEach((id) => HIDDEN_ITEMS.push(`techreborn:${id}_plate`));
    HIDDEN_ITEMS.forEach((id) => event.hide(id));
  });
  onEvent("rei.hide.fluids", (event) => {
    event.hide("createbigcannons:molten_steel");
    event.hide("createbigcannons:molten_bronze");
    event.hide("createbigcannons:molten_nethersteel");
    event.hide("estrogen:molten_slime");
    event.hide("tconstruct:potion");
    event.hide("tconstruct:honey");
    event.hide("travelersbackpack:potion_still");
  });
}
function ponder() {
  onEvent("ponder.tag", (event) => {
    event.createTag(
      "kubejs:createastral",
      "createastral:astral_singularity",
      "Create: Astral",
      "Tips and Tricks specific to this modpack",
      ["createastral:electrolyser_dummy", "createastral:shimmering_stone", "astraladditions:desizer_controller"]
    );
    event.createTag("kubejs:tconstruct", "tconstruct:seared_table", "Tinkers Construct", "Tinkers Construct Basics", [
      "tconstruct:seared_melter",
      "tconstruct:foundry_controller",
      "tconstruct:seared_faucet"
    ]);
  });
  onEvent("ponder.registry", (event) => {
    event.create("custommachinery:custom_machine_item").scene(
      "custom_machine_item",
      "You shouldn't see this ponder, it's a debug thing.",
      "kubejs:electrolyser",
      (scene, util) => {
      }
    );
  });
  onEvent("ponder.override", (event) => {
    const item = event.getItem();
    if (!("machine" in item.nbt && typeof item.nbt.machine === "string")) return;
    const machineId = item.nbt.machine;
    switch (machineId) {
      case void 0:
        break;
      case "createastral:shimmer_refinery":
        event.override("yttr:void_filter");
        break;
      default:
        event.override(`${machineId}_dummy`);
        break;
    }
  });
}
function desizerPonder() {
  onEvent("ponder.registry", (event) => {
    event.create("astraladditions:desizer_controller").scene("set_replace_modify_tutorial", "The Desizer", (scene, util) => {
      scene.showBasePlate();
      scene.world.setBlocks([1, 1, 4], "astraladditions:desizer_9", true);
      scene.world.setBlocks([2, 1, 4], "astraladditions:desizer_8", true);
      scene.world.setBlocks([3, 1, 4], "astraladditions:desizer_7", true);
      scene.world.setBlocks([1, 2, 4], "astraladditions:desizer_6", true);
      scene.world.setBlocks([2, 2, 4], "astraladditions:desizer_controller", true);
      scene.world.setBlocks([3, 2, 4], "astraladditions:desizer_4", true);
      scene.world.setBlocks([1, 3, 4], "astraladditions:desizer_3", true);
      scene.world.setBlocks([2, 3, 4], "astraladditions:desizer_2", true);
      scene.world.setBlocks([3, 3, 4], "astraladditions:desizer_1", true);
      scene.idle(20);
      scene.world.showSection([0, 1, 0, 4, 3, 4], Facing.DOWN);
      scene.idle(10);
      scene.text(30, "This is the Desizer", [1, 2.5, 4]);
      scene.idle(80);
      scene.world.setBlocks([1, 1, 4], "astraladditions:desizer_8", true);
      scene.world.setBlocks([2, 1, 4], "astraladditions:desizer_8", true);
      scene.world.setBlocks([3, 1, 4], "astraladditions:desizer_8", true);
      scene.world.setBlocks([1, 2, 4], "astraladditions:desizer_8", true);
      scene.world.setBlocks([2, 2, 4], "astraladditions:desizer_controller", true);
      scene.world.setBlocks([3, 2, 4], "astraladditions:desizer_8", true);
      scene.world.setBlocks([1, 3, 4], "astraladditions:desizer_8", true);
      scene.world.setBlocks([2, 3, 4], "astraladditions:desizer_8", true);
      scene.world.setBlocks([3, 3, 4], "astraladditions:desizer_8", true);
      scene.idle(10);
      scene.text(60, "The casings don't have to be accurate. This also works", [1, 2.5, 4]);
      scene.idle(80);
      scene.world.setBlocks([1, 1, 3], "minecraft:dirt", true);
      scene.world.setBlocks([2, 1, 3], "minecraft:dirt", true);
      scene.world.setBlocks([3, 1, 3], "minecraft:dirt", true);
      scene.world.setBlocks([1, 2, 3], "minecraft:dirt", true);
      scene.world.setBlocks([2, 2, 3], "minecraft:dirt", true);
      scene.world.setBlocks([3, 2, 3], "minecraft:dirt", true);
      scene.world.setBlocks([1, 3, 3], "minecraft:dirt", true);
      scene.world.setBlocks([2, 3, 3], "minecraft:dirt", true);
      scene.world.setBlocks([3, 3, 3], "minecraft:dirt", true);
      scene.world.setBlocks([1, 1, 2], "minecraft:dirt", true);
      scene.world.setBlocks([2, 1, 2], "minecraft:dirt", true);
      scene.world.setBlocks([3, 1, 2], "minecraft:dirt", true);
      scene.world.setBlocks([1, 2, 2], "minecraft:dirt", true);
      scene.world.setBlocks([2, 2, 2], "minecraft:dirt", true);
      scene.world.setBlocks([3, 2, 2], "minecraft:dirt", true);
      scene.world.setBlocks([1, 3, 2], "minecraft:dirt", true);
      scene.world.setBlocks([2, 3, 2], "minecraft:dirt", true);
      scene.world.setBlocks([3, 3, 2], "minecraft:dirt", true);
      scene.world.setBlocks([1, 1, 1], "minecraft:dirt", true);
      scene.world.setBlocks([2, 1, 1], "minecraft:dirt", true);
      scene.world.setBlocks([3, 1, 1], "minecraft:dirt", true);
      scene.world.setBlocks([1, 2, 1], "minecraft:dirt", true);
      scene.world.setBlocks([2, 2, 1], "minecraft:dirt", true);
      scene.world.setBlocks([3, 2, 1], "minecraft:dirt", true);
      scene.world.setBlocks([1, 3, 1], "minecraft:dirt", true);
      scene.world.setBlocks([2, 3, 1], "minecraft:dirt", true);
      scene.world.setBlocks([3, 3, 1], "minecraft:dirt", true);
      scene.idle(10);
      scene.text(70, "The Desizer will shrink a 3x3x3 cube of blocks down into a single item", [1, 2.5, 2]);
      scene.idle(90);
      scene.text(70, "It's powered by Redstone. Place a button on the back of the Desizer Controller", [1, 2.5, 4]);
      scene.world.setBlocks([1, 1, 3], "minecraft:air", true);
      scene.world.setBlocks([2, 1, 3], "minecraft:air", true);
      scene.world.setBlocks([3, 1, 3], "minecraft:air", true);
      scene.world.setBlocks([1, 2, 3], "minecraft:air", true);
      scene.world.setBlocks([2, 2, 3], "minecraft:air", true);
      scene.world.setBlocks([3, 2, 3], "minecraft:air", true);
      scene.world.setBlocks([1, 3, 3], "minecraft:air", true);
      scene.world.setBlocks([2, 3, 3], "minecraft:air", true);
      scene.world.setBlocks([3, 3, 3], "minecraft:air", true);
      scene.world.setBlocks([1, 1, 2], "minecraft:air", true);
      scene.world.setBlocks([2, 1, 2], "minecraft:air", true);
      scene.world.setBlocks([3, 1, 2], "minecraft:air", true);
      scene.world.setBlocks([1, 2, 2], "minecraft:air", true);
      scene.world.setBlocks([2, 2, 2], "minecraft:air", true);
      scene.world.setBlocks([3, 2, 2], "minecraft:air", true);
      scene.world.setBlocks([1, 3, 2], "minecraft:air", true);
      scene.world.setBlocks([2, 3, 2], "minecraft:air", true);
      scene.world.setBlocks([3, 3, 2], "minecraft:air", true);
      scene.world.setBlocks([1, 1, 1], "minecraft:air", true);
      scene.world.setBlocks([2, 1, 1], "minecraft:air", true);
      scene.world.setBlocks([3, 1, 1], "minecraft:air", true);
      scene.world.setBlocks([1, 2, 1], "minecraft:air", true);
      scene.world.setBlocks([2, 2, 1], "minecraft:air", true);
      scene.world.setBlocks([3, 2, 1], "minecraft:air", true);
      scene.world.setBlocks([1, 3, 1], "minecraft:air", true);
      scene.world.setBlocks([2, 3, 1], "minecraft:air", true);
      scene.world.setBlocks([3, 3, 1], "minecraft:air", true);
      scene.idle(90);
      scene.text(60, "If it doesn't detect a valid recipe, it will just break the blocks", [1, 2.5, 4]);
      scene.idle(70);
    });
  });
}
function sturdyCageDesizerPonder() {
  onEvent("ponder.registry", (event) => {
    event.create("createastral:sturdy_cage").scene("set_replace_modify_tutorial", "Sturdy Cage", (scene, util) => {
      scene.showBasePlate();
      scene.world.setBlocks([1, 1, 4], "astraladditions:desizer_9", true);
      scene.world.setBlocks([2, 1, 4], "astraladditions:desizer_8", true);
      scene.world.setBlocks([3, 1, 4], "astraladditions:desizer_7", true);
      scene.world.setBlocks([1, 2, 4], "astraladditions:desizer_6", true);
      scene.world.setBlocks([2, 2, 4], "astraladditions:desizer_controller", true);
      scene.world.setBlocks([3, 2, 4], "astraladditions:desizer_4", true);
      scene.world.setBlocks([1, 3, 4], "astraladditions:desizer_3", true);
      scene.world.setBlocks([2, 3, 4], "astraladditions:desizer_2", true);
      scene.world.setBlocks([3, 3, 4], "astraladditions:desizer_1", true);
      scene.idle(20);
      scene.world.showSection([0, 1, 0, 4, 3, 4], Facing.DOWN);
      scene.idle(10);
      scene.world.setBlocks([1, 1, 3], "createastral:sturdy_sheet_block", true);
      scene.world.setBlocks([2, 1, 3], "createastral:sturdy_sheet_block", true);
      scene.world.setBlocks([3, 1, 3], "createastral:sturdy_sheet_block", true);
      scene.world.setBlocks([1, 2, 3], "createastral:sturdy_sheet_block", true);
      scene.world.setBlocks([2, 2, 3], "yttr:glassy_void", true);
      scene.world.setBlocks([3, 2, 3], "createastral:sturdy_sheet_block", true);
      scene.world.setBlocks([1, 3, 3], "createastral:sturdy_sheet_block", true);
      scene.world.setBlocks([2, 3, 3], "createastral:sturdy_sheet_block", true);
      scene.world.setBlocks([3, 3, 3], "createastral:sturdy_sheet_block", true);
      scene.idle(20);
      scene.world.setBlocks([1, 1, 2], "createastral:sturdy_sheet_block", true);
      scene.world.setBlocks([2, 1, 2], "yttr:glassy_void", true);
      scene.world.setBlocks([3, 1, 2], "createastral:sturdy_sheet_block", true);
      scene.world.setBlocks([1, 2, 2], "yttr:glassy_void", true);
      scene.world.setBlocks([3, 2, 2], "yttr:glassy_void", true);
      scene.world.setBlocks([1, 3, 2], "createastral:sturdy_sheet_block", true);
      scene.world.setBlocks([2, 3, 2], "yttr:glassy_void", true);
      scene.world.setBlocks([3, 3, 2], "createastral:sturdy_sheet_block", true);
      scene.idle(20);
      scene.world.setBlocks([1, 1, 1], "createastral:sturdy_sheet_block", true);
      scene.world.setBlocks([2, 1, 1], "createastral:sturdy_sheet_block", true);
      scene.world.setBlocks([3, 1, 1], "createastral:sturdy_sheet_block", true);
      scene.world.setBlocks([1, 2, 1], "createastral:sturdy_sheet_block", true);
      scene.world.setBlocks([2, 2, 1], "yttr:glassy_void", true);
      scene.world.setBlocks([3, 2, 1], "createastral:sturdy_sheet_block", true);
      scene.world.setBlocks([1, 3, 1], "createastral:sturdy_sheet_block", true);
      scene.world.setBlocks([2, 3, 1], "createastral:sturdy_sheet_block", true);
      scene.world.setBlocks([3, 3, 1], "createastral:sturdy_sheet_block", true);
      scene.idle(10);
    });
  });
}
function ultrapureCarbonDesizerPonder() {
  onEvent("ponder.registry", (event) => {
    event.create("yttr:compressed_ultrapure_carbon_block").scene("set_replace_modify_tutorial", "Ultrapure Carbon", (scene, util) => {
      scene.showBasePlate();
      scene.world.setBlocks([1, 1, 4], "astraladditions:desizer_9", true);
      scene.world.setBlocks([2, 1, 4], "astraladditions:desizer_8", true);
      scene.world.setBlocks([3, 1, 4], "astraladditions:desizer_7", true);
      scene.world.setBlocks([1, 2, 4], "astraladditions:desizer_6", true);
      scene.world.setBlocks([2, 2, 4], "astraladditions:desizer_controller", true);
      scene.world.setBlocks([3, 2, 4], "astraladditions:desizer_4", true);
      scene.world.setBlocks([1, 3, 4], "astraladditions:desizer_3", true);
      scene.world.setBlocks([2, 3, 4], "astraladditions:desizer_2", true);
      scene.world.setBlocks([3, 3, 4], "astraladditions:desizer_1", true);
      scene.idle(20);
      scene.world.showSection([0, 1, 0, 4, 3, 4], Facing.DOWN);
      scene.idle(10);
      scene.world.setBlocks([2, 2, 3], "yttr:ultrapure_carbon_block", true);
      scene.idle(20);
      scene.world.setBlocks([2, 1, 2], "yttr:ultrapure_carbon_block", true);
      scene.world.setBlocks([1, 2, 2], "yttr:ultrapure_carbon_block", true);
      scene.world.setBlocks([2, 2, 2], "yttr:ultrapure_carbon_block", true);
      scene.world.setBlocks([3, 2, 2], "yttr:ultrapure_carbon_block", true);
      scene.world.setBlocks([2, 3, 2], "yttr:ultrapure_carbon_block", true);
      scene.idle(20);
      scene.world.setBlocks([2, 2, 1], "yttr:ultrapure_carbon_block", true);
      scene.idle(10);
    });
  });
}
function distilleryPonder() {
  onEvent("ponder.registry", (event) => {
    event.create("createastral:distillery_dummy").scene("distillery", "How to create a Distillery", "kubejs:distillation", (scene, util) => {
      scene.showStructure();
    });
  });
}
function electrolyzerPonder() {
  onEvent("ponder.registry", (event) => {
    event.create("createastral:electrolyser_dummy").scene("electrolyzer", "How to create the electrolyzer multiblock", "kubejs:electrolyser", (scene, util) => {
      const electrolyzerPos = [2, 2, 1];
      const electrolyzerPos2 = [2, 3, 1];
      const multiblockRange = [
        [1, 2, 1],
        [3, 4, 3]
      ];
      scene.world.setBlock([3, 4, 0], "ad_astra:oxygen_loader", false);
      scene.world.modifyBlock(
        [2, 2, 0],
        () => Block.id("create:fluid_pipe").with("south", "true").with("north", "false").with("west", "false").with("up", "false").with("down", "false"),
        false
      );
      scene.world.modifyBlock(
        [2, 1, 1],
        () => Block.id("create:fluid_pipe").with("south", "false").with("north", "false").with("east", "false").with("west", "true").with("up", "true").with("down", "false"),
        false
      );
      scene.showBasePlate();
      for (let y = multiblockRange[0][1]; y <= multiblockRange[1][1]; y++) {
        for (let x = multiblockRange[0][0]; x <= multiblockRange[1][0]; x++) {
          for (let z = multiblockRange[0][2]; z <= multiblockRange[1][2]; z++) {
            scene.world.showSection([x, y, z], Facing.DOWN);
          }
        }
        scene.idle(30);
        if (y == 3) {
          scene.overlay.showOutline(PonderPalette.GREEN, "test", util.select.position(2, 3, 2), 30);
          scene.text(30, "Leave a gap in the center", [2, 4, 2]).placeNearTarget().attachKeyFrame();
          scene.idle(30);
        }
      }
      scene.text(40, "Pump water into the bottom of the Electrolyzer", electrolyzerPos).placeNearTarget().attachKeyFrame();
      for (let x = 0; x <= 4; x++) {
        for (let z = 0; z <= 2; z++) {
          scene.world.showSection([x, 1, z], Facing.EAST);
        }
      }
      for (let z = 0; z <= 4; z++) {
        scene.world.showSection([0, 2, z], Facing.EAST);
      }
      scene.idle(40);
      scene.text(30, "Pump oxygen out of the side of the Electrolyzer", electrolyzerPos2).attachKeyFrame();
      for (let y = 2; y <= 3; y++) {
        for (let x = 0; x <= 4; x++) {
          scene.world.showSection([x, y, 0], Facing.SOUTH);
        }
        scene.world.showSection([4, y, 1], Facing.WEST);
      }
      scene.idle(10);
      scene.particles.simple(60, "ad_astra:oxygen_bubble", [2.7, 5, -0.5]).gravity(-0.1);
      scene.idle(120);
      scene.world.showSection([3, 4, 0], Facing.DOWN);
      scene.idle(10);
      scene.text(
        100,
        "Oxygen pumped into the Oxygen Loader can be used to fill up your spacesuits and tanks",
        [3, 4.5, 0]
      ).placeNearTarget();
    });
  });
}
function moonPortalPonder() {
  onEvent("ponder.registry", (event) => {
    event.create("createastral:shimmering_stone").scene("shimmering_stone", "How to create the Moon Portal", "kubejs:portal", (scene, util) => {
      scene.world.replaceBlocks(util.select.fromTo(2, 1, 2, 3, 1, 2), "minecraft:obsidian", false);
      scene.showStructure();
      scene.text(
        60,
        "In this pack, the nether is disabled. Instead, items are spread throughout the different planets.",
        [3, 2, 3]
      );
      scene.idle(40);
      scene.showControls(30, [2, 2, 2], "up").rightClick().withItem("minecraft:flint_and_steel");
      scene.world.setBlock([2, 2, 2], Block.getBlock("minecraft:fire").defaultBlockState(), false);
      scene.idle(60);
      [
        util.select.fromTo(1, 1, 2, 4, 1, 2),
        util.select.fromTo(1, 2, 2, 1, 5, 2),
        util.select.fromTo(4, 2, 2, 4, 5, 2),
        util.select.fromTo(2, 5, 2, 3, 5, 2)
      ].forEach((selection) => {
        scene.world.replaceBlocks(selection, "createastral:shimmering_stone", true);
      });
      scene.world.setBlock([2, 2, 2], "minecraft:air", false);
      scene.text(40, "There is a new portal added, which takes you to the moon!", [3, 2, 3]).attachKeyFrame();
      scene.showControls(30, [2, 2, 2], "up").rightClick().withItem("createastral:astral_conduit");
      scene.world.setBlocks(util.select.fromTo(2, 2, 2, 3, 4, 2), "customportalapi:customportalblock", true);
    });
  });
}
function rootOfContinuityPonder() {
  onEvent("ponder.registry", (event) => {
    event.create("yttr:root_of_continuity").scene("set_replace_modify_tutorial", "Root of Continuity", (scene, util) => {
      scene.showBasePlate();
      scene.world.setBlocks([1, 1, 4], "astraladditions:desizer_9", true);
      scene.world.setBlocks([2, 1, 4], "astraladditions:desizer_8", true);
      scene.world.setBlocks([3, 1, 4], "astraladditions:desizer_7", true);
      scene.world.setBlocks([1, 2, 4], "astraladditions:desizer_6", true);
      scene.world.setBlocks([2, 2, 4], "astraladditions:desizer_controller", true);
      scene.world.setBlocks([3, 2, 4], "astraladditions:desizer_4", true);
      scene.world.setBlocks([1, 3, 4], "astraladditions:desizer_3", true);
      scene.world.setBlocks([2, 3, 4], "astraladditions:desizer_2", true);
      scene.world.setBlocks([3, 3, 4], "astraladditions:desizer_1", true);
      scene.idle(20);
      scene.world.showSection([0, 1, 0, 4, 3, 4], Facing.DOWN);
      scene.idle(10);
      scene.world.setBlocks([1, 1, 3], "createastral:ultramatter", true);
      scene.world.setBlocks([2, 1, 3], "createastral:ultramatter", true);
      scene.world.setBlocks([3, 1, 3], "createastral:ultramatter", true);
      scene.world.setBlocks([1, 2, 3], "createastral:ultramatter", true);
      scene.world.setBlocks([3, 2, 3], "createastral:ultramatter", true);
      scene.world.setBlocks([1, 3, 3], "createastral:ultramatter", true);
      scene.world.setBlocks([2, 3, 3], "createastral:ultramatter", true);
      scene.world.setBlocks([3, 3, 3], "createastral:ultramatter", true);
      scene.idle(20);
      scene.world.setBlocks([1, 1, 2], "createastral:ultramatter", true);
      scene.world.setBlocks([3, 1, 2], "createastral:ultramatter", true);
      scene.world.setBlocks([2, 2, 2], "createastral:contained_end", true);
      scene.world.setBlocks([1, 3, 2], "createastral:ultramatter", true);
      scene.world.setBlocks([3, 3, 2], "createastral:ultramatter", true);
      scene.idle(20);
      scene.world.setBlocks([1, 1, 1], "createastral:ultramatter", true);
      scene.world.setBlocks([2, 1, 1], "createastral:ultramatter", true);
      scene.world.setBlocks([3, 1, 1], "createastral:ultramatter", true);
      scene.world.setBlocks([1, 2, 1], "createastral:ultramatter", true);
      scene.world.setBlocks([3, 2, 1], "createastral:ultramatter", true);
      scene.world.setBlocks([1, 3, 1], "createastral:ultramatter", true);
      scene.world.setBlocks([2, 3, 1], "createastral:ultramatter", true);
      scene.world.setBlocks([3, 3, 1], "createastral:ultramatter", true);
      scene.idle(10);
    });
  });
}
function searedMelterPonder() {
  onEvent("ponder.registry", (event) => {
    event.create("tconstruct:seared_melter").scene("melter", "How to use the seared melter", "kubejs:melter", (scene, util) => {
      scene.showStructure();
      scene.text(60, "This is an example of a basic seared melter setup", [2, 2, 2]);
      scene.idle(60);
      scene.overlay.showOutline(PonderPalette.GREEN, "test", [2, 1, 2], 60);
      scene.text(50, "First, a seared heater is placed, which can be filled with fuel", [2, 1, 2]).attachKeyFrame();
      scene.idle(60);
      scene.overlay.showOutline(PonderPalette.GREEN, "test", [2, 2, 2], 60);
      scene.text(
        80,
        "Then, a melter is placed on top, and when the heater below is fueled, it can melt ores into liquid",
        [2, 2, 2]
      ).attachKeyFrame();
      scene.idle(85);
      let faucet1 = util.select.position(1, 2, 2);
      util.select.position(3, 2, 2);
      scene.overlay.showOutline(PonderPalette.GREEN, "test", faucet1, 60);
      scene.text(
        80,
        "Finally, faucets are placed on the sides, which can be used to pour the liquid into a casting basin or table",
        [1.5, 2.5, 2]
      ).attachKeyFrame();
      scene.idle(85);
      scene.world.setBlock([2, 3, 2], "create:fluid_pipe", true);
      scene.world.modifyBlock(
        [2, 3, 2],
        () => Block.id("create:fluid_pipe").with("south", "false").with("north", "false").with("east", "false").with("west", "false").with("up", "true").with("down", "true"),
        false
      );
      scene.text(60, "Create fluid pipes can be used to transfer the liquid to something like a Spout", [2, 3.5, 2]).attachKeyFrame();
    });
  });
}
function shimmerRefineryPonder() {
  onEvent("ponder.registry", (event) => {
    event.create("yttr:void_filter").scene("shimmer_refinery", "How to create a Shimmer Refinery", "kubejs:shimmerrefinery", (scene, util) => {
      scene.showStructure();
    });
  });
}
function stoneGrowthChamberPonder() {
  onEvent("ponder.registry", (event) => {
    event.create("createastral:stone_growth_chamber_dummy").scene("stone_growth_chamber", "Stone Growth Chamber", (scene, util) => {
      scene.showBasePlate();
      scene.world.showSection([0, 1, 0, 4, 3, 4], Facing.DOWN);
      scene.idle(10);
      scene.world.setBlocks([2, 1, 1], "createastral:stone_growth_chamber_dummy", true);
      scene.text(30, "Stone Growth Chamber", [2.5, 2, 1.5]);
      scene.idle(40);
      scene.world.setBlocks([1, 1, 3], "create:cut_andesite_bricks", true);
      scene.idle(1);
      scene.world.setBlocks([2, 1, 3], "chipped:andesite_1", true);
      scene.idle(1);
      scene.world.setBlocks([3, 1, 3], "create:polished_cut_andesite", true);
      scene.idle(1);
      scene.world.setBlocks([3, 1, 2], "chipped:andesite_1", true);
      scene.idle(1);
      scene.world.setBlocks([2, 1, 2], "create:polished_cut_andesite", true);
      scene.idle(1);
      scene.world.setBlocks([1, 1, 2], "create:cut_andesite", true);
      scene.idle(1);
      scene.world.setBlocks([1, 1, 1], "create:cut_andesite_bricks", true);
      scene.idle(1);
      scene.world.setBlocks([3, 1, 1], "create:small_andesite_bricks", true);
      scene.idle(1);
      scene.text(30, "Polished Andesite", [3, 1, 5]);
      scene.idle(40);
      scene.world.setBlocks([1, 2, 3], "minecraft:glass", true);
      scene.idle(1);
      scene.world.setBlocks([2, 2, 3], "minecraft:glass", true);
      scene.idle(1);
      scene.world.setBlocks([3, 2, 3], "minecraft:glass", true);
      scene.idle(1);
      scene.world.setBlocks([3, 2, 2], "minecraft:glass", true);
      scene.idle(1);
      scene.world.setBlocks([3, 2, 1], "minecraft:glass", true);
      scene.idle(1);
      scene.world.setBlocks([2, 2, 1], "minecraft:glass", true);
      scene.idle(1);
      scene.world.setBlocks([1, 2, 1], "minecraft:glass", true);
      scene.idle(1);
      scene.world.setBlocks([1, 2, 2], "minecraft:glass", true);
      scene.idle(1);
      scene.text(30, "Glass", [1.5, 3, 2.5]);
      scene.idle(40);
      scene.world.setBlocks([2, 2, 2], "minecraft:lava", true);
      scene.text(30, "Lava in the middle", [2.5, 3, 2.5]);
      scene.idle(40);
      scene.world.setBlocks([1, 3, 3], "create:cut_andesite", true);
      scene.idle(1);
      scene.world.setBlocks([2, 3, 3], "create:small_andesite_bricks", true);
      scene.idle(1);
      scene.world.setBlocks([3, 3, 3], "create:cut_andesite_bricks", true);
      scene.idle(1);
      scene.world.setBlocks([3, 3, 2], "create:cut_andesite_bricks", true);
      scene.idle(1);
      scene.world.setBlocks([2, 3, 2], "create:cut_andesite", true);
      scene.idle(1);
      scene.world.setBlocks([1, 3, 2], "create:small_andesite_bricks", true);
      scene.idle(1);
      scene.world.setBlocks([1, 3, 1], "chipped:andesite_1", true);
      scene.idle(1);
      scene.world.setBlocks([2, 3, 1], "create:polished_cut_andesite", true);
      scene.idle(1);
      scene.world.setBlocks([3, 3, 1], "create:polished_cut_andesite", true);
      scene.idle(10);
      scene.text(60, "This is a completed Stone Growth Chamber", [3, 2.5, 3]).attachKeyFrame();
      scene.idle(70);
      scene.text(80, "Use an Andesite Funnel on the front or a Hopper on the bottom to output Andesite", [2, 1, 1]);
      scene.idle(90);
      scene.text(
        80,
        "When built using different Stones, the Stone Growth Chamber will generate different types of cobblestone",
        [3, 2.5, 3]
      ).attachKeyFrame();
      scene.idle(10);
      scene.world.setBlocks([1, 1, 2, 3, 1, 3], "ad_astra:polished_moon_stone", true);
      scene.world.setBlock([1, 1, 1], "ad_astra:polished_moon_stone", true);
      scene.world.setBlock([3, 1, 1], "ad_astra:polished_moon_stone", true);
      scene.idle(10);
      scene.world.setBlocks([1, 3, 1, 3, 3, 3], "ad_astra:polished_moon_stone", true);
      scene.idle(10);
      scene.world.setBlocks([1, 3, 2], "ad_astra:cracked_moon_stone_bricks", true);
      scene.idle(1);
      scene.world.setBlocks([3, 3, 1], "ad_astra:moon_stone_bricks", true);
      scene.idle(1);
      scene.world.setBlocks([2, 3, 3], "ad_astra:moon_stone_bricks", true);
      scene.idle(1);
      scene.world.setBlocks([3, 1, 3], "ad_astra:moon_stone_bricks", true);
      scene.idle(1);
      scene.world.setBlocks([3, 1, 1], "ad_astra:cracked_moon_stone_bricks", true);
      scene.idle(1);
      scene.world.setBlocks([3, 3, 3], "ad_astra:moon_stone_bricks", true);
      scene.idle(1);
      scene.world.setBlocks([3, 3, 2], "ad_astra:moon_stone_bricks", true);
      scene.idle(1);
      scene.world.setBlocks([2, 1, 3], "ad_astra:cracked_moon_stone_bricks", true);
      scene.idle(1);
      scene.world.setBlocks([1, 1, 3], "ad_astra:moon_stone_bricks", true);
      scene.idle(1);
      scene.world.setBlocks([1, 1, 1], "ad_astra:moon_stone_bricks", true);
      scene.idle(1);
      scene.idle(70);
      scene.text(
        90,
        "This currently works with Stone, Andesite and any default stone from each planet, like Moon Stone and Mars Stone",
        [3, 2.5, 3]
      );
      scene.idle(100);
      scene.world.setBlocks([1, 1, 3], "chipped:mossy_stone_bricks_1", true);
      scene.world.setBlocks([2, 1, 3], "minecraft:stone_bricks", true);
      scene.world.setBlocks([3, 1, 3], "chipped:mossy_stone_bricks_1", true);
      scene.world.setBlocks([1, 1, 2], "chipped:stone_1", true);
      scene.world.setBlocks([2, 1, 2], "minecraft:cracked_stone_bricks", true);
      scene.world.setBlocks([3, 1, 2], "minecraft:cracked_stone_bricks", true);
      scene.world.setBlocks([1, 1, 1], "minecraft:cracked_stone_bricks", true);
      scene.world.setBlocks([3, 1, 1], "minecraft:mossy_stone_bricks", true);
      scene.world.setBlocks([1, 3, 3], "minecraft:mossy_stone_bricks", true);
      scene.world.setBlocks([2, 3, 3], "chipped:stone_1", true);
      scene.world.setBlocks([3, 3, 3], "minecraft:mossy_stone_bricks", true);
      scene.world.setBlocks([1, 3, 2], "chipped:stone_1", true);
      scene.world.setBlocks([2, 3, 2], "minecraft:stone_bricks", true);
      scene.world.setBlocks([3, 3, 2], "minecraft:cracked_stone_bricks", true);
      scene.world.setBlocks([1, 3, 1], "minecraft:cracked_stone_bricks", true);
      scene.world.setBlocks([2, 3, 1], "minecraft:stone_bricks", true);
      scene.world.setBlocks([3, 3, 1], "minecraft:mossy_stone_bricks", true);
      scene.idle(25);
      scene.world.setBlocks([1, 1, 2, 3, 1, 3], "ad_astra:polished_mars_stone", true);
      scene.world.setBlock([1, 1, 1], "ad_astra:polished_mars_stone", true);
      scene.world.setBlock([3, 1, 1], "ad_astra:polished_mars_stone", true);
      scene.world.setBlocks([1, 3, 1, 3, 3, 3], "ad_astra:polished_mars_stone", true);
      scene.world.setBlocks([1, 3, 2], "ad_astra:cracked_mars_stone_bricks", false);
      scene.world.setBlocks([3, 3, 1], "ad_astra:mars_stone_bricks", false);
      scene.world.setBlocks([2, 3, 3], "ad_astra:mars_stone_bricks", false);
      scene.world.setBlocks([3, 1, 3], "ad_astra:mars_stone_bricks", false);
      scene.world.setBlocks([3, 1, 1], "ad_astra:cracked_mars_stone_bricks", false);
      scene.world.setBlocks([3, 3, 3], "ad_astra:mars_stone_bricks", false);
      scene.world.setBlocks([3, 3, 2], "ad_astra:mars_stone_bricks", false);
      scene.world.setBlocks([2, 1, 3], "ad_astra:cracked_mars_stone_bricks", false);
      scene.world.setBlocks([1, 1, 3], "ad_astra:mars_stone_bricks", false);
      scene.world.setBlocks([1, 1, 1], "ad_astra:mars_stone_bricks", false);
      scene.idle(25);
      scene.world.setBlocks([1, 1, 2, 3, 1, 3], "ad_astra:polished_glacio_stone", true);
      scene.world.setBlock([1, 1, 1], "ad_astra:polished_glacio_stone", true);
      scene.world.setBlock([3, 1, 1], "ad_astra:polished_glacio_stone", true);
      scene.world.setBlocks([1, 3, 1, 3, 3, 3], "ad_astra:polished_glacio_stone", true);
      scene.world.setBlocks([1, 3, 2], "ad_astra:cracked_glacio_stone_bricks", false);
      scene.world.setBlocks([3, 3, 1], "ad_astra:glacio_stone_bricks", false);
      scene.world.setBlocks([2, 3, 3], "ad_astra:glacio_stone_bricks", false);
      scene.world.setBlocks([3, 1, 3], "ad_astra:glacio_stone_bricks", false);
      scene.world.setBlocks([3, 1, 1], "ad_astra:cracked_glacio_stone_bricks", false);
      scene.world.setBlocks([3, 3, 3], "ad_astra:glacio_stone_bricks", false);
      scene.world.setBlocks([3, 3, 2], "ad_astra:glacio_stone_bricks", false);
      scene.world.setBlocks([2, 1, 3], "ad_astra:cracked_glacio_stone_bricks", false);
      scene.world.setBlocks([1, 1, 3], "ad_astra:glacio_stone_bricks", false);
      scene.world.setBlocks([1, 1, 1], "ad_astra:glacio_stone_bricks", false);
      scene.idle(25);
      scene.world.setBlocks([1, 1, 2, 3, 1, 3], "ad_astra:polished_mercury_stone", true);
      scene.world.setBlock([1, 1, 1], "ad_astra:polished_mercury_stone", true);
      scene.world.setBlock([3, 1, 1], "ad_astra:polished_mercury_stone", true);
      scene.world.setBlocks([1, 3, 1, 3, 3, 3], "ad_astra:polished_mercury_stone", true);
      scene.world.setBlocks([1, 3, 2], "ad_astra:cracked_mercury_stone_bricks", false);
      scene.world.setBlocks([3, 3, 1], "ad_astra:mercury_stone_bricks", false);
      scene.world.setBlocks([2, 3, 3], "ad_astra:mercury_stone_bricks", false);
      scene.world.setBlocks([3, 1, 3], "ad_astra:mercury_stone_bricks", false);
      scene.world.setBlocks([3, 1, 1], "ad_astra:cracked_mercury_stone_bricks", false);
      scene.world.setBlocks([3, 3, 3], "ad_astra:mercury_stone_bricks", false);
      scene.world.setBlocks([3, 3, 2], "ad_astra:mercury_stone_bricks", false);
      scene.world.setBlocks([2, 1, 3], "ad_astra:cracked_mercury_stone_bricks", false);
      scene.world.setBlocks([1, 1, 3], "ad_astra:mercury_stone_bricks", false);
      scene.world.setBlocks([1, 1, 1], "ad_astra:mercury_stone_bricks", false);
      scene.idle(75);
      scene.text(
        150,
        "A list of valid stone blocks can be found by searching '$createastral:stone_growth_chamber/building_blocks' in REI",
        [3, 2.5, 3]
      ).attachKeyFrame();
      scene.idle(20);
      scene.world.setBlocks([1, 1, 2, 3, 1, 3], "minecraft:polished_andesite", true);
      scene.world.setBlock([1, 1, 1], "minecraft:polished_andesite", true);
      scene.world.setBlock([3, 1, 1], "minecraft:polished_andesite", true);
      scene.world.setBlocks([1, 3, 1, 3, 3, 3], "minecraft:polished_andesite", true);
      scene.idle(30);
      scene.world.setBlocks([1, 1, 2, 3, 1, 3], "chipped:andesite_1", true);
      scene.world.setBlock([1, 1, 1], "chipped:andesite_1", true);
      scene.world.setBlock([3, 1, 1], "chipped:andesite_1", true);
      scene.world.setBlocks([1, 3, 1, 3, 3, 3], "chipped:andesite_1", true);
      scene.idle(30);
      scene.world.setBlocks([1, 1, 2, 3, 1, 3], "create:cut_andesite", true);
      scene.world.setBlock([1, 1, 1], "create:cut_andesite", true);
      scene.world.setBlock([3, 1, 1], "create:cut_andesite", true);
      scene.world.setBlocks([1, 3, 1, 3, 3, 3], "create:cut_andesite", true);
      scene.idle(30);
      scene.world.setBlocks([1, 1, 2, 3, 1, 3], "create:cut_andesite_bricks", true);
      scene.world.setBlock([1, 1, 1], "create:cut_andesite_bricks", true);
      scene.world.setBlock([3, 1, 1], "create:cut_andesite_bricks", true);
      scene.world.setBlocks([1, 3, 1, 3, 3, 3], "create:cut_andesite_bricks", true);
      scene.idle(30);
      scene.world.setBlocks([1, 1, 2, 3, 1, 3], "create:small_andesite_bricks", true);
      scene.world.setBlock([1, 1, 1], "create:small_andesite_bricks", true);
      scene.world.setBlock([3, 1, 1], "create:small_andesite_bricks", true);
      scene.world.setBlocks([1, 3, 1, 3, 3, 3], "create:small_andesite_bricks", true);
      scene.idle(40);
      scene.text(
        120,
        "Similarly, valid glass blocks can be found by searching '$createastral:stone_growth_chamber/glass_blocks'",
        [1.5, 3, 2.5]
      ).attachKeyFrame();
      scene.world.setBlocks([1, 3, 1, 3, 3, 3], "minecraft:air", false);
      scene.idle(30);
      scene.world.setBlocks([1, 2, 1, 3, 2, 3], "minecraft:tinted_glass", true);
      scene.world.setBlock([2, 2, 2], "minecraft:lava", false);
      scene.idle(30);
      scene.world.setBlocks([1, 2, 1, 3, 2, 3], "tconstruct:gray_clear_stained_glass", true);
      scene.world.setBlock([2, 2, 2], "minecraft:lava", false);
      scene.idle(30);
      scene.world.setBlocks([1, 2, 1, 3, 2, 3], "chipped:glass_48", true);
      scene.world.setBlock([2, 2, 2], "minecraft:lava", false);
      scene.idle(30);
      scene.world.setBlocks([1, 3, 1, 3, 3, 3], "create:small_andesite_bricks", true);
    });
  });
}
function stoneGrowthChamberDummyPonder() {
  onEvent("ponder.registry", (event) => {
  });
}
function rei() {
  console.info("Hello, World! (You will see this line every time client resources reload)");
  onEvent("rei.group", (event) => {
    event.groupItems("kubejs:rei_groups/chipped", Component.of("Chipped Blocks"), [
      Ingredient.of(/chipped:.*/).getItemIds().toArray().filter(
        (item) => item !== "chipped:mason_table" && item !== "chipped:botanist_workbench" && item !== "chipped:loom_table" && item !== "chipped:glassblower" && item !== "chipped:alchemy_bench" && item !== "chipped:tinkering_table" && item !== "chipped:carpenters_table" && item !== "chipped:mechanist_workbench"
      )
    ]);
    event.groupItemsByTag(
      "createastral:rei_groups/astralsignals/drives_decrypted_t1",
      Component.translate("text.rei.createastral.astralsignals.drives_decrypted_t1"),
      "astralsignals:drives_decrypted_t1"
    );
    event.groupItemsByTag(
      "createastral:rei_groups/astralsignals/drives_decrypted_t2",
      Component.translate("text.rei.createastral.astralsignals.drives_decrypted_t2"),
      "astralsignals:drives_decrypted_t2"
    );
    event.groupItemsByTag(
      "createastral:rei_groups/astralsignals/drives_decrypted_t3",
      Component.translate("text.rei.createastral.astralsignals.drives_decrypted_t3"),
      "astralsignals:drives_decrypted_t3"
    );
    function getCreatePotion(fluid, type) {
      const createPotion = Fluid.of("create:potion").getId();
      if (typeof fluid === "string") return false;
      if ("getId" in fluid && "Bottle" in fluid.nbt) {
        return fluid.getId() === createPotion && fluid.nbt.Bottle === type;
      }
      return false;
    }
    event.groupFluidsIf(
      "createastral:rei_groups/create/potion",
      Component.translate("text.rei.createastral.create.potion.regular"),
      (fluid) => getCreatePotion(fluid, "REGULAR")
    );
    event.groupFluidsIf(
      "createastral:rei_groups/create/splash_potion",
      Component.translate("text.rei.createastral.create.potion.splash"),
      (fluid) => getCreatePotion(fluid, "SPLASH")
    );
    event.groupFluidsIf(
      "createastral:rei_groups/create/lingering_potion",
      Component.translate("text.rei.createastral.create.potion.lingering"),
      (fluid) => getCreatePotion(fluid, "LINGERING")
    );
    event.groupSameItem(
      "createastral:rei_groups/packages/package",
      Component.translate("text.rei.createastral.packages.package"),
      "packages:package"
    );
    event.groupSameItem(
      "createastral:rei_groups/techreborn/cell",
      Component.translate("text.rei.createastral.techreborn.cell"),
      "techreborn:cell"
    );
    event.groupSameItem(
      "createastral:rei_groups/tconstruct/tinkers_anvil",
      Component.translate("text.rei.createastral.tconstruct.tinkers_anvil"),
      "tconstruct:tinkers_anvil"
    );
    event.groupSameItem(
      "createastral:rei_groups/tconstruct/scorched_anvil",
      Component.translate("text.rei.createastral.tconstruct.scorched_anvil"),
      "tconstruct:scorched_anvil"
    );
    event.groupSameItem(
      "createastral:rei_groups/tconstruct/slime_helmet",
      Component.translate("text.rei.createastral.tconstruct.slime_helmet"),
      "tconstruct:slime_helmet"
    );
    event.groupSameItem(
      "createastral:rei_groups/yttr/mercurial_potion",
      Component.translate("text.rei.createastral.yttr.mercurial_potion"),
      "yttr:mercurial_potion"
    );
    event.groupSameItem(
      "createastral:rei_groups/yttr/mercurial_splash_potion",
      Component.translate("text.rei.createastral.yttr.mercurial_potion"),
      "yttr:mercurial_splash_potion"
    );
  });
  onEvent("rei.add.items", (event) => {
    event.add(Item.of("ae2:facade", '{item:"minecraft:stone"}'));
    event.add(Item.of("create:crushed_raw_tin"));
    event.add(Item.of("create:crushed_raw_lead"));
    event.add(Item.of("create:refined_radiance"));
    event.add(Item.of("create:shadow_steel"));
    event.add(Item.of("create:chromatic_compound"));
  });
  onEvent("rei.add.fluids", (event) => {
    let bottles = ["REGULAR", "SPLASH", "LINGERING"];
    let potions = [
      //The order that we create these rei entries in is important!
      ["minecraft:mundane", []],
      ["minecraft:thick", []],
      ["minecraft:awkward", []],
      ["minecraft:night_vision", ["long"]],
      ["minecraft:invisibility", ["long"]],
      ["minecraft:leaping", ["long", "strong"]],
      ["minecraft:fire_resistance", ["long"]],
      ["minecraft:swiftness", ["long", "strong"]],
      ["minecraft:slowness", ["long", "strong"]],
      ["minecraft:turtle_master", ["long", "strong"]],
      ["minecraft:water_breathing", ["long"]],
      ["minecraft:healing", ["strong"]],
      ["minecraft:harming", ["strong"]],
      ["minecraft:poison", ["long", "strong"]],
      ["minecraft:regeneration", ["long", "strong"]],
      ["minecraft:strength", ["long", "strong"]],
      ["minecraft:weakness", ["long"]],
      ["minecraft:luck", []],
      ["minecraft:slow_falling", ["long"]],
      ["naturalist:forest_dasher", ["long", "strong"]],
      ["naturalist:glowing", ["long"]]
    ];
    bottles.forEach((bottle) => {
      for (let i = 0; i < potions.length; ++i) {
        let potionName = potions[i][0];
        event.add(Fluid.of("create:potion", `{Bottle: "${bottle}", Potion: "${potionName}"}`));
        for (let j = 0; j < potions[i][1].length; ++j) {
          let subPotionNameArray = potionName.split(":");
          subPotionNameArray.splice(1, 0, ":", potions[i][1][j], "_");
          let subPotionName = subPotionNameArray.join("");
          event.add(Fluid.of("create:potion", `{Bottle: "${bottle}", Potion: "${subPotionName}"}`));
        }
      }
    });
  });
}
function stepUpFix() {
  function getPlayerStepHeight(player) {
    const DEFAULT_STEP_HEIGHT = 0.6;
    const leggingsNBT = player.legsArmorItem.nbt;
    const leggingsTag = leggingsNBT.tag;
    if (leggingsTag === void 0) return DEFAULT_STEP_HEIGHT;
    const leggingsModifiers = leggingsTag.tic_modifiers;
    if (leggingsModifiers === void 0) return DEFAULT_STEP_HEIGHT;
    const stepUp = leggingsModifiers.filter((modifier) => modifier.name == "tconstruct:step_up")[0];
    if (stepUp === void 0) return DEFAULT_STEP_HEIGHT;
    return DEFAULT_STEP_HEIGHT + 0.5 * stepUp.level;
  }
  onEvent("client.tick", (event) => {
    const player = event.getPlayer();
    if (player === void 0) return;
    player.stepHeight = getPlayerStepHeight(player);
  });
}
hideFromREI();
rei();
ponder();
stepUpFix();
desizerPonder();
sturdyCageDesizerPonder();
ultrapureCarbonDesizerPonder();
distilleryPonder();
electrolyzerPonder();
moonPortalPonder();
rootOfContinuityPonder();
searedMelterPonder();
shimmerRefineryPonder();
stoneGrowthChamberDummyPonder();
stoneGrowthChamberPonder();
