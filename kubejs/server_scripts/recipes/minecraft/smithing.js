(function minecraftSmithingRecipes() {
  onEvent("recipes", (event) => {
    storageUnitTiers(event);
    radiantUpgrades(event);
    const smithingRecipes = [
      // [Primary Input, Material Input, Output]
      { base: "minecraft:copper_ingot", addition: "techreborn:tin_ingot", output: "createastral:bronze_ingot" },
      { base: "techreborn:tin_ingot", addition: "minecraft:copper_ingot", output: "createastral:bronze_ingot" },
      { base: "farmersdelight:skillet", addition: "minecraft:water_bucket", output: "farmersdelight:cooking_pot" },
      { base: "reinfchest:diamond_chest", addition: "minecraft:netherite_ingot", output: "reinfchest:netherite_chest" },
    ];
    smithingRecipes.forEach((recipe) => {
      event.smithing(recipe.output, recipe.base, recipe.addition);
    });
  });
  function storageUnitTiers(event) {
    // TR units
    event.smithing("techreborn:crude_storage_unit", "techreborn:storage_buffer", "createastral:t1_upgrade");
    const storageUnits = [
      { prefix: "basic", tier: 2, index: 0 },
      { prefix: "advanced", tier: 3, index: 1 },
      { prefix: "industrial", tier: 4, index: 2 },
      { prefix: "quantum", tier: 6, index: 3 },
    ];
    storageUnits.forEach((unit) => {
      event.smithing(
        `techreborn:${unit.prefix}_storage_unit`,
        `#createastral:storage_unit_${unit.index}`,
        `createastral:t${unit.tier}_upgrade`,
      );
      event.smithing(
        `techreborn:${unit.prefix}_tank_unit`,
        `#createastral:tank_unit_${unit.index}`,
        `createastral:t${unit.tier}_upgrade`,
      );
    });
  }
  function radiantUpgrades(event) {
    const armor = ["helmet", "chestplate", "leggings", "boots"];
    const tools = ["sword", "axe", "shovel", "pickaxe"];
    for (const type of armor) {
      event.smithing(`createastral:radiant_${type}`, `createastral:steel_${type}`, "create:refined_radiance");
    }
    for (const type of tools) {
      event.smithing(`createastral:radiant_${type}`, `minecraft:netherite_${type}`, "create:refined_radiance");
    }
  }
})();
