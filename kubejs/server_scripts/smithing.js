onEvent("recipes", (event) => {
    //SMITHING RADIANT STUFF

    event.smithing("createastral:bronze_ingot", "techreborn:tin_ingot", "minecraft:copper_ingot");
    event.smithing("createastral:bronze_ingot", "minecraft:copper_ingot", "techreborn:tin_ingot");

    event.smithing("createastral:radiant_helmet", "createastral:steel_helmet", "create:refined_radiance");
    event.smithing("createastral:radiant_chestplate", "createastral:steel_chestplate", "create:refined_radiance");
    event.smithing("createastral:radiant_leggings", "createastral:steel_leggings", "create:refined_radiance");
    event.smithing("createastral:radiant_boots", "createastral:steel_boots", "create:refined_radiance");
    event.smithing("createastral:radiant_sword", "minecraft:netherite_sword", "create:refined_radiance");
    event.smithing("createastral:radiant_axe", "minecraft:netherite_axe", "create:refined_radiance");
    event.smithing("createastral:radiant_shovel", "minecraft:netherite_shovel", "create:refined_radiance");
    event.smithing("createastral:radiant_pickaxe", "minecraft:netherite_pickaxe", "create:refined_radiance");

    event.smithing("farmersdelight:cooking_pot", "farmersdelight:skillet", "minecraft:water_bucket");

    // TR units
    event.smithing("techreborn:crude_storage_unit", "techreborn:storage_buffer", "createastral:t1_upgrade");

    // prefix, tier
    [
        ["basic", 2],
        ["advanced", 3],
        ["industrial", 4],
        ["quantum", 6],
    ].forEach((arr, index) => {
        const prefix = arr[0];
        const tier = arr[1];
        event.smithing(`techreborn:${prefix}_storage_unit`, "#createastral:storage_unit_" + index, `createastral:t${tier}_upgrade`);
        event.smithing(`techreborn:${prefix}_tank_unit`, "#createastral:tank_unit_" + index, `createastral:t${tier}_upgrade`);
    });
});