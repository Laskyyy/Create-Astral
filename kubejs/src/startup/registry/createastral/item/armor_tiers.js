onEvent("item.registry.armor_tiers", (event) => {
    // Slot indicies are [FEET, LEGS, BODY, HEAD]
    event.add("copperarmor", (tier) => {
        tier.durabilityMultiplier = 13; // Each slot will be multiplied with [13, 15, 16, 11]
        tier.slotProtections = [2, 4, 4, 2];
        tier.enchantmentValue = 9;
        tier.equipSound = "minecraft:item.armor.equip_iron";
        tier.repairIngredient = "minecraft:copper_ingot";
        tier.toughness = 1.0; // diamond has 2.0, netherite 3.0
        tier.knockbackResistance = 0.0;
    });

    event.add("brassarmor", (tier) => {
        tier.durabilityMultiplier = 25; // Each slot will be multiplied with [13, 15, 16, 11]
        tier.slotProtections = [3, 6, 6, 4];
        tier.enchantmentValue = 45;
        tier.equipSound = "minecraft:item.armor.equip_iron";
        tier.repairIngredient = "create:brass_ingot";
        tier.toughness = 1.0; // diamond has 2.0, netherite 3.0
        tier.knockbackResistance = 0.1;
    });

    event.add("steelarmor", (tier) => {
        tier.durabilityMultiplier = 60; // Each slot will be multiplied with [13, 15, 16, 11]
        tier.slotProtections = [3, 6, 8, 4];
        tier.enchantmentValue = 20;
        tier.equipSound = "minecraft:item.armor.equip_iron";
        tier.repairIngredient = "#c:steel_ingots";
        tier.toughness = 2.0; // diamond has 2.0, netherite 3.0
        tier.knockbackResistance = 0.2;
    });

    event.add("sturdyarmor", (tier) => {
        tier.durabilityMultiplier = 300; // Each slot will be multiplied with [13, 15, 16, 11]
        tier.slotProtections = [3, 4, 6, 3];
        tier.enchantmentValue = 0;
        tier.equipSound = "minecraft:item.armor.equip_iron";
        tier.repairIngredient = "create:sturdy_sheet";
        tier.toughness = 5.0; // diamond has 2.0, netherite 3.0
        tier.knockbackResistance = 0.2;
    });

    event.add("radiantarmor", (tier) => {
        tier.durabilityMultiplier = 100; // Each slot will be multiplied with [13, 15, 16, 11]
        tier.slotProtections = [5, 9, 8, 5];
        tier.enchantmentValue = 99;
        tier.equipSound = "minecraft:item.armor.equip_iron";
        tier.repairIngredient = "create:refined_radiance";
        tier.toughness = 4.0; // diamond has 2.0, netherite 3.0
        tier.knockbackResistance = 0.2;
    });
});
