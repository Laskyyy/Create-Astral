// Java reflection stuff //
// Custom drawer upgrades

const modpackVersion = "EXPERIMENTAL v2.1.4";

console.log(modpackVersion);

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
