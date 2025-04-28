onEvent("recipes", (event) => {
    storageUnitTiers(event);
    radiantUpgrades(event);

    [
        // [Primary Input, Material Input, Output]
        ["minecraft:copper_ingot", "techreborn:tin_ingot", "createastral:bronze_ingot"],
        ["techreborn:tin_ingot", "minecraft:copper_ingot", "createastral:bronze_ingot"],
        ["farmersdelight:skillet", "minecraft:water_bucket", "farmersdelight:cooking_pot"],
        ["reinfchest:diamond_chest", "minecraft:netherite_ingot", "reinfchest:netherite_chest"],
    ].forEach((recipe) => {
        event.smithing(recipe[2], recipe[0], recipe[1]);
    });
});

function storageUnitTiers(event) {
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
        event.smithing(
            `techreborn:${prefix}_storage_unit`,
            "#createastral:storage_unit_" + index,
            `createastral:t${tier}_upgrade`
        );
        event.smithing(
            `techreborn:${prefix}_tank_unit`,
            "#createastral:tank_unit_" + index,
            `createastral:t${tier}_upgrade`
        );
    });
}

function radiantUpgrades(event) {
    const armour = ["helmet", "chestplate", "leggings", "boots"];
    const tools = ["sword", "axe", "shovel", "pickaxe"];

    for (const type of armour) {
        event.smithing(`createastral:radiant_${type}`, `createastral:steel_${type}`, "create:refined_radiance");
    }
    for (const type of tools) {
        event.smithing(`createastral:radiant_${type}`, `minecraft:netherite_${type}`, "create:refined_radiance");
    }
}
