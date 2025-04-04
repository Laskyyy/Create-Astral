onEvent("item.tags", (event) => {
    logTags(event);
    backpackTags(event);

    event.add("c:stripped_logs", "vinery:stripped_cherry_log");
    event.add("c:stripped_logs", "vinery:stripped_old_cherry_log");
    event.add("c:stripped_logs", "techreborn:rubber_log_stripped");
    event.add("c:stripped_logs", "ad_astra:stripped_glacian_log");

    event.add("c:slimeballs", "createastral:synthetic_slime");
    event.add("tconstruct:slime_block", "createastral:synthetic_slime_block");

    event.add("c:raw_materials/cobalt", "createastral:crushed_raw_cobalt");

    event.add("c:plates/tin", "techreborn:tin_plate");

    [["create:zinc_nugget", "techreborn:tin_nugget", "minecraft:iron_nugget"]].forEach((nugget) => {
        event.add("create:alloy_nuggets", nugget);
    });

    [
        "techreborn:storage_buffer",
        "techreborn:crude_storage_unit",
        "techreborn:basic_storage_unit",
        "techreborn:advanced_storage_unit",
        "techreborn:industrial_storage_unit",
        "techreborn:quantum_storage_unit",
    ].forEach((item, index) => {
        for (let i = 5; i >= index; i--) event.add("createastral:storage_unit_" + i, item);
    });

    [
        "create:fluid_tank",
        "techreborn:basic_tank_unit",
        "techreborn:advanced_tank_unit",
        "techreborn:industrial_tank_unit",
        "techreborn:quantum_tank_unit",
    ].forEach((item, index) => {
        for (let i = 5; i >= index; i--) event.add("createastral:tank_unit_" + i, item);
    });

    [
        "astraladditions:ring_gold_cast",
        "tconstruct:gold_platform", //Never add anything here with a melting value below a nugget, thx
    ].forEach((item, index) => {
        event.add("tconstruct:casts", item);
        event.add("tconstruct:casts/gold", item);
        event.add("tconstruct:casts/multi_use", item);
        event.add("tconstruct:patterns", item);
        event.add("tconstruct:patterns/reusable", item);
    });
});

// Taken from the old logs.js file
function logTags(event) {
    // Oak
    event.add("createastral:barked_oak_logs", "minecraft:oak_log");
    event.add("createastral:barked_oak_logs", "minecraft:oak_wood");

    event.add("createastral:stripped_oak_logs", "minecraft:stripped_oak_log");
    event.add("createastral:stripped_oak_logs", "minecraft:stripped_oak_wood");
    // Birch
    event.add("createastral:barked_birch_logs", "minecraft:birch_log");
    event.add("createastral:barked_birch_logs", "minecraft:birch_wood");

    event.add("createastral:stripped_birch_logs", "minecraft:stripped_birch_log");
    event.add("createastral:stripped_birch_logs", "minecraft:stripped_birch_wood");
    // Spruce
    event.add("createastral:barked_spruce_logs", "minecraft:spruce_log");
    event.add("createastral:barked_spruce_logs", "minecraft:spruce_wood");

    event.add("createastral:stripped_spruce_logs", "minecraft:stripped_spruce_log");
    event.add("createastral:stripped_spruce_logs", "minecraft:stripped_spruce_wood");
    // Jungle
    event.add("createastral:barked_jungle_logs", "minecraft:jungle_log");
    event.add("createastral:barked_jungle_logs", "minecraft:jungle_wood");

    event.add("createastral:stripped_jungle_logs", "minecraft:stripped_jungle_log");
    event.add("createastral:stripped_jungle_logs", "minecraft:stripped_jungle_wood");
    // Acacia
    event.add("createastral:barked_acacia_logs", "minecraft:acacia_log");
    event.add("createastral:barked_acacia_logs", "minecraft:acacia_wood");

    event.add("createastral:stripped_acacia_logs", "minecraft:stripped_acacia_log");
    event.add("createastral:stripped_acacia_logs", "minecraft:stripped_acacia_wood");
    // Dark Oak
    event.add("createastral:barked_dark_oak_logs", "minecraft:dark_oak_log");
    event.add("createastral:barked_dark_oak_logs", "minecraft:dark_oak_wood");

    event.add("createastral:stripped_dark_oak_logs", "minecraft:stripped_dark_oak_log");
    event.add("createastral:stripped_dark_oak_logs", "minecraft:stripped_dark_oak_wood");
    // Crimson
    event.add("createastral:barked_crimson_logs", "minecraft:crimson_stem");
    event.add("createastral:barked_crimson_logs", "minecraft:crimson_hyphae");

    event.add("createastral:stripped_crimson_logs", "minecraft:stripped_crimson_stem");
    event.add("createastral:stripped_crimson_logs", "minecraft:stripped_crimson_hyphae");
    // Warped
    event.add("createastral:barked_warped_logs", "minecraft:warped_stem");
    event.add("createastral:barked_warped_logs", "minecraft:warped_hyphae");

    event.add("createastral:stripped_warped_logs", "minecraft:stripped_warped_stem");
    event.add("createastral:stripped_warped_logs", "minecraft:stripped_warped_hyphae");
    // Glacian
    event.add("createastral:barked_glacian_logs", "ad_astra:glacian_log");

    event.add("createastral:stripped_glacian_logs", "ad_astra:stripped_glacian_log");
    // Rubber
    event.add("createastral:barked_rubber_logs", "techreborn:rubber_log");
    event.add("createastral:barked_rubber_logs", "techreborn:rubber_wood");

    event.add("createastral:stripped_rubber_logs", "techreborn:rubber_log_stripped");
    event.add("createastral:stripped_rubber_logs", "techreborn:stripped_rubber_wood");
    // Greenheart
    event.add("createastral:barked_greenheart_logs", "tconstruct:greenheart_log");
    event.add("createastral:barked_greenheart_logs", "tconstruct:greenheart_wood");

    event.add("createastral:stripped_greenheart_logs", "tconstruct:stripped_greenheart_log");
    event.add("createastral:stripped_greenheart_logs", "tconstruct:stripped_greenheart_wood");
    // Skyroot
    event.add("createastral:barked_skyroot_logs", "tconstruct:skyroot_log");
    event.add("createastral:barked_skyroot_logs", "tconstruct:skyroot_wood");

    event.add("createastral:stripped_skyroot_logs", "tconstruct:stripped_skyroot_log");
    event.add("createastral:stripped_skyroot_logs", "tconstruct:stripped_skyroot_wood");
    // Bloodshroom
    event.add("createastral:barked_bloodshroom_logs", "tconstruct:bloodshroom_log");
    event.add("createastral:barked_bloodshroom_logs", "tconstruct:bloodshroom_wood");

    event.add("createastral:stripped_bloodshroom_logs", "tconstruct:stripped_bloodshroom_log");
    event.add("createastral:stripped_bloodshroom_logs", "tconstruct:stripped_bloodshroom_wood");
    // Cherry
    event.add("createastral:barked_cherry_logs", "vinery:cherry_log");
    event.add("createastral:barked_cherry_logs", "vinery:cherry_wood");
    event.add("createastral:barked_cherry_logs", "vinery:old_cherry_log");
    event.add("createastral:barked_cherry_logs", "vinery:old_cherry_wood");

    event.add("createastral:stripped_cherry_logs", "vinery:stripped_cherry_log");
    event.add("createastral:stripped_cherry_logs", "vinery:stripped_cherry_wood");
    event.add("createastral:stripped_cherry_logs", "vinery:stripped_old_cherry_log");
    event.add("createastral:stripped_cherry_logs", "vinery:stripped_old_cherry_wood");
}

// Taken from the old backpack.js file
function backpackTags(event) {
    [
        "tconstruct:pickaxe",
        "tconstruct:sledge_hammer",
        "tconstruct:vein_hammer",
        "tconstruct:mattock",
        "tconstruct:pickadze",
        "tconstruct:excavator",
        "tconstruct:hand_axe",
        "tconstruct:broad_axe",
        "tconstruct:kama",
        "tconstruct:scythe",
        "tconstruct:dagger",
        "tconstruct:sword",
        "tconstruct:cleaver",
        "#tconstruct:slimeslings",
        "#c:wrenches",
        "ad_astra:wrench",
        "catwalksinc:wrench",
        "techreborn:wrench",
        "techreborn:electric_treetap",
        "techreborn:painting_tool",
        "gearreborn:stun_gun",
        "automobility:crowbar",
        "doodads:slingshot",
        "doodads:paintbrush",
        "doodads:glare_staff",
        "create:super_glue",
    ].forEach((item) => {
        event.add("travelersbackpack:acceptable_tools", item);
    });
}
