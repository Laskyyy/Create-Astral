///// REGISTER CUSTOM BLOCKS /////
onEvent("block.registry", (event) => {
    event
        .create("createastral:sturdy_sheet_block")
        .material("lantern")
        .hardness(9)
        .displayName("Sturdy Sheet Block")
        .tagBlock("minecraft:mineable/pickaxe");

    event
        .create("createastral:shimmering_stone")
        .material("stone")
        .hardness(20)
        .displayName("Shimmering Stone")
        .tagBlock("minecraft:mineable/pickaxe");

    event
        .create("createastral:monazite_crystal")
        .material("amethyst")
        .hardness(20)
        .displayName("Monazite Crystal")
        .tagBlock("minecraft:mineable/pickaxe");

    event
        .create("createastral:ancient_stone")
        .material("stone")
        .hardness(22)
        .displayName("Ancient Stone")
        .tagBlock("minecraft:mineable/pickaxe");

    event
        .create("createastral:mercurian_stone")
        .material("stone")
        .hardness(24)
        .displayName("Mercurian Stone")
        .tagBlock("minecraft:mineable/pickaxe");
				
		event
        .create("createastral:sturdy_cage")
        .material("lantern")
        .defaultTranslucent()
        .hardness(26)
        .displayName("Sturdy Cage")
        .tagBlock("minecraft:mineable/pickaxe");
				
		event
        .create("createastral:contained_end")
        .material("bone")
        .hardness(26)
        .displayName("Contained End")
        .tagBlock("minecraft:mineable/pickaxe")
        .lightLevel(0.5);
				
		event
        .create("createastral:ultramatter")
        .material("bone")
        .hardness(26)
        .displayName("Block of Ultramatter")
        .tagBlock("minecraft:mineable/pickaxe")
        .lightLevel(0.5);

    event
        .create("createastral:copper_plating")
        .material("lantern")
        .hardness(3)
        .displayName("Copper Plating")
        .tagBlock("minecraft:mineable/pickaxe");
    event
        .create("createastral:refined_radiance_block")
        .material("lantern")
        .hardness(4)
        .displayName("Radiant Block")
        .tagBlock("minecraft:mineable/pickaxe")
        .lightLevel(1);

    event
        .create("createastral:bronze_block")
        .material("lantern")
        .hardness(3)
        .displayName("Bronze Block")
        .tagBlock("minecraft:mineable/pickaxe");

    event
        .create("createastral:copper_heating_coil")
        .material("lantern")
        .hardness(3)
        .displayName("Copper Coil Block")
        .tagBlock("minecraft:mineable/pickaxe");

    event
        .create("createastral:blast-resistant_concrete", "basic")
        .material("stone")
        .hardness(4)
        .resistance(1200)
        .textureAll("createastral:block/blast_side")
        .texture("up", "createastral:block/blast_top")
        .texture("down", "createastral:block/blast_top")
        .tagBlock("minecraft:mineable/pickaxe");

    event
        .create("createastral:blast-resistant_concrete_slab", "slab")
        .material("stone")
        .hardness(4)
        .resistance(1200)
        .textureAll("createastral:block/blast_side")
        .texture("up", "createastral:block/blast_top")
        .texture("down", "createastral:block/blast_top")
        .tagBlock("minecraft:mineable/pickaxe");

    event
        .create("createastral:blast-resistant_concrete_stairs", "stairs")
        .material("stone")
        .hardness(4)
        .resistance(1200)
        .textureAll("createastral:block/blast_side")
        .texture("up", "createastral:block/blast_top")
        .texture("down", "createastral:block/blast_top")
        .tagBlock("minecraft:mineable/pickaxe");

    event
        .create("createastral:distillery_dummy", "basic")
        .hardness(4)
        .resistance(1200)
        .textureAll("techreborn:block/machines/tier1_machines/machine_side")
        .texture("down", "techreborn:block/machines/tier1_machines/machine_bottom")
        .texture("up", "techreborn:block/machines/tier1_machines/machine_top")
        .texture("north", "createastral:block/distillation_tower_on")
        .tagBlock("minecraft:mineable/pickaxe");
    
    event
        .create("createastral:electrolyser_dummy", "basic")
        .hardness(4)
        .resistance(1200)
        .textureAll("create:block/copper_casing")
        .texture("down", "createastral:block/electropipe")
        .texture("north", "createastral:block/electropipe")
        .tagBlock("minecraft:mineable/pickaxe");



    event
        .create("createastral:stone_growth_chamber_dummy")
        .tagBlock("minecraft:mineable/pickaxe")
        .material("stone")
        .hardness(3)
        .textureAll("createastral:block/stone_growth_chamber_side")
        .texture("down", "createastral:block/stone_growth_chamber")
        .texture("north", "createastral:block/stone_growth_chamber");

    event
        .create("createastral:andesite_alloy_block", "basic")
        .material("stone")
        .hardness(4)
        .tagBlock("minecraft:mineable/pickaxe");

    event
        .create("createastral:voidtouched_compound", "basic")
        .hardness(4)
        .displayName("Voidtouched Compound")
        .resistance(1200)
        .tagBlock("minecraft:mineable/pickaxe");

    event
        .create("createastral:charcoal_block", "basic")
        .hardness(4)
        .displayName("Charcoal Block")
        .tagBlock("minecraft:mineable/pickaxe")
        .material("stone");

    event
        .create("createastral:compressed_experience_block")
        .displayName("Compressed Experience Block")
        .tagBlock("minecraft:mineable/pickaxe")
        .material("glass")
        .hardness(2)
        .lightLevel(5);

    event.create("createastral:synthetic_slime_block")
    .displayName("Synthetic Slime Block")
        .material("lantern")
        .hardness(0);

    event
        .create("createastral:swift_andesite", "basic")
        .displayName("Swift Andesite")
        .material("stone")
        .hardness(4)
        .tagBlock("minecraft:mineable/pickaxe");

    event.create("kubejs:fragile_sheet_block", "basic")
        .material("stone")
        .displayName("Fragile Sheet Block")
        .defaultTranslucent()
        .hardness(1);

    event.create("kubejs:broken_fragile_sheet_block", "basic")
        .material("stone")
        .displayName("Broken Fragile Sheet Block")
        .defaultTranslucent()
        .hardness(1)
        .box(0, 0, 0, 16, 8, 16, true)
        .box(2, 8, 2, 14, 12, 14, true)

    event.create("kubejs:fire_resistant_fragile_sheet_block", "basic")
        .material("stone")
        .displayName("Fire Resistant Fragile Sheet Block")
        .defaultTranslucent()
        .hardness(1)

    event.create("kubejs:broken_fire_resistant_fragile_sheet_block", "basic")
        .material("stone")
        .displayName("Broken Fire Resistant Fragile Sheet Block")
        .defaultTranslucent()
        .hardness(1)
        .box(0, 0, 0, 16, 8, 16, true)
        .box(2, 8, 2, 14, 12, 14, true)

    event.create("createastral:rocket_casing", "basic")
        .material("stone")
        .displayName("Rocket Casing")
        .hardness(4)
        .defaultTranslucent()
        .tagBlock("minecraft:mineable/pickaxe")

    event.create("createastral:slime_furnace_dummy")
        .textureAll("createastral:block/slime_furnace_side")
        .texture("up", "createastral:block/slime_furnace_top")
        .texture("down", "createastral:block/slime_furnace_bottom")

    event.create("createastral:slime_furnace_on_dummy")
        .textureAll("createastral:block/slime_furnace_on_side")
        .texture("up", "createastral:block/slime_furnace_on_top")
        .texture("down", "createastral:block/slime_furnace_on_bottom")


    event.create("createastral:washer_dummy")
        .textureAll("createastral:block/washer")
        .texture("up", "create:block/railway_casing")
        .texture("down", "create:block/railway_casing")
        .texture("north", "createastral:block/washer_shaft")

    event.create("createastral:gas_mixer_dummy")
        .textureAll("createastral:block/gas_mixer")
        .texture("down", "createastral:block/gas_mixer_shaft")

    event.create("createastral:channeling_transformer_dummy")
        .textureAll("createastral:block/channeling_transformer");

    event
        .create("doodads:asphalt_slab", "slab")
        .material("stone")
        .displayName("Asphalt Slab")
        .hardness(4)
        .tagBlock("minecraft:mineable/pickaxe")
        .textureAll("doodads:block/asphalt");

    event
        .create("doodads:asphalt_stair", "stairs")
        .material("stone")
        .displayName("Asphalt Stair")
        .hardness(4)
        .tagBlock("minecraft:mineable/pickaxe")
        .textureAll("doodads:block/asphalt");
    
    event
        .create("yttr:polished_scorched_obsidian_holster_alive", "basic")
        .textureAll("yttr:block/polished_scorched_obsidian_holster_alive")
        .texture("up", "yttr:block/polished_scorched_obsidian_capstone")
        .texture("down", "yttr:block/polished_scorched_obsidian")
        .luminance(4)
        .hardness(50)
        .material("stone")
        .requiresTool(true)

});
