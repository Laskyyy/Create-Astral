function lizardBurnModificationChanges(event) {
    var ONE_ITEM_BURN_TICKS = 200;

    event.modify("createaddition:biomass_pellet", (item) => {
        item.burnTime = ONE_ITEM_BURN_TICKS * 16;
    });
}

///// MODIFY CHARACTERISTICS OF ITEMS /////
onEvent("item.modification", (event) => {
    event.modify("minecraft:piglin_banner_pattern", (item) => {
        item.maxStackSize = 16;
    });
});

///// MODIFY CHARACTERISTICS OF BLOCKS /////

onEvent("block.modification", (event) => {
    event.modify("yigd:grave", (block) => {
        block.destroySpeed = -1;
    });
    event.modify("create:large_cogwheel", (block) => {
        block.material = "Lantern";
    });
    event.modify("create:cogwheel", (block) => {
        block.material = "Lantern";
    });

    event.modify("minecraft:furnace", (block) => {
        block.material = "Lantern";
    });

    event.modify("minecraft:smoker", (block) => {
        block.material = "Lantern";
    });

    event.modify("minecraft:blast_furnace", (block) => {
        block.material = "Lantern";
    });

    event.modify("techreborn:crude_storage_unit", (block) => {
        block.material = "wood";
    });

    event.modify("techreborn:storage_buffer", (block) => {
        block.material = "wood";
    });

    event.modify("minecraft:diamond_ore", (block) => {
        block.destroySpeed = 6;
        block.hasCollision = true;
        block.explosionResistance = 99999;
    });

    event.modify("minecraft:deepslate_diamond_ore", (block) => {
        block.destroySpeed = 7;
        block.hasCollision = true;
        block.explosionResistance = 99999;
    });

    event.modify("techreborn:silver_ore", (block) => {
        block.destroySpeed = 6;
        block.hasCollision = true;
        block.explosionResistance = 99999;
    });

    event.modify("techreborn:deepslate_silver_ore", (block) => {
        block.destroySpeed = 7;
        block.hasCollision = true;
        block.explosionResistance = 99999;
    });

    event.modify("techreborn:lead_ore", (block) => {
        block.destroySpeed = 6;
        block.hasCollision = true;
        block.explosionResistance = 99999;
    });

    event.modify("techreborn:deepslate_lead_ore", (block) => {
        block.destroySpeed = 7;
        block.hasCollision = true;
        block.explosionResistance = 99999;
    });
});

///// ADD BURN TIME TO FUEL /////
onEvent("item.modification", (event) => {
    event.modify("create:blaze_cake", (item) => {
        item.burnTime = 50000;
    });
    event.modify("createastral:charcoal_block", (item) => {
        item.burnTime = 2000;
    });

    event.modify("techreborn:fuel_bucket", (item) => {
        item.burnTime = 50000;
    });

    event.modify("techreborna:oil_bucket", (item) => {
        item.burnTime = 40000;
    });
});

///// CUSTOM TOOL TIERS /////
onEvent("item.registry.tool_tiers", (event) => {
    event.add("copper", (tier) => {
        tier.uses = 210;
        tier.speed = 5.0;
        tier.attackDamageBonus = 1.0;
        tier.level = 2;
        tier.enchantmentValue = 14;
    });

    event.add("brass", (tier) => {
        tier.uses = 640;
        tier.speed = 9.0;
        tier.attackDamageBonus = 3.0;
        tier.level = 4;
        tier.enchantmentValue = 50;
    });

    event.add("radiant", (tier) => {
        tier.uses = 3000;
        tier.speed = 15.0;
        tier.attackDamageBonus = 10.0;
        tier.level = 4;
        tier.enchantmentValue = 99;
    });
});

///// CUSTOM ARMOUR TIERS /////
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

// Java reflection stuff //
// Custom drawer upgrades

const $DeferredRegister = java("dev.architectury.registry.registries.DeferredRegister");
const $Tiers = java("net.minecraft.world.item.Tiers");
const $Item = java("net.minecraft.world.item.Item");
const $Registry = java("net.minecraft.core.Registry");
const $UpgradeItem = java("io.github.mattidragon.extendeddrawers.item.UpgradeItem");
const $ResourceLocation = java("net.minecraft.class_2960");
const $FabricItemSettings = java("net.fabricmc.fabric.api.item.v1.FabricItemSettings");

let ITEMS = $DeferredRegister.create("createastral", $Registry.ITEM_REGISTRY);
let drawer_multipliers = {}; // This will be used later for adding tooltips.

function registerUpgrade(mod_id, name, multiplier) {
    drawer_multipliers[`${mod_id}:${name}`] = multiplier;
    ITEMS["register(net.minecraft.class_2960,java.util.function.Supplier)"](`${mod_id}:${name}`, () => {
        return new $UpgradeItem(new $FabricItemSettings(), $ResourceLocation(mod_id, `item/${name}`), multiplier);
    });
}

registerUpgrade("createastral", "t1_upgrade", 2);
registerUpgrade("createastral", "t2_upgrade", 4);
registerUpgrade("createastral", "t3_upgrade", 16);
registerUpgrade("createastral", "t4_upgrade", 64);
registerUpgrade("createastral", "t5_upgrade", 256);
registerUpgrade("createastral", "t6_upgrade", 1048576); // 2^20x, this makes the regular drawer store 2^31 items
ITEMS.register();

// make create wrench work as tech reborn wrench

const $ToolManager = java("reborncore.api.ToolManager");
const $GenericWrenchHelper = java("reborncore.common.util.GenericWrenchHelper");

$ToolManager.INSTANCE.customToolHandlerList.add(new $GenericWrenchHelper(new $ResourceLocation("create:wrench"), true));