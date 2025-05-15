// @ts-check

/**
 * @typedef Upgrade
 * @property {`${string}:${string}`} item
 * @property {number} multiplier
 */

/** @type {Upgrade[]} */
global.upgrades = [
  {
    item: "createastral:t1_upgrade",
    multiplier: 2,
  },
  {
    item: "createastral:t2_upgrade",
    multiplier: 4,
  },
  {
    item: "createastral:t3_upgrade",
    multiplier: 16,
  },
  {
    item: "createastral:t4_upgrade",
    multiplier: 64,
  },
  {
    item: "createastral:t5_upgrade",
    multiplier: 256,
  },
  {
    item: "createastral:t6_upgrade",
    multiplier: 1048576, // 2^20x, this makes the regular drawer store 2^31 items
  },
];
(function misc() {
  const $DeferredRegister = java("dev.architectury.registry.registries.DeferredRegister");
  const $Registry = java("net.minecraft.core.Registry");
  const $UpgradeItem = java("io.github.mattidragon.extendeddrawers.item.UpgradeItem");
  const $ResourceLocation = java("net.minecraft.resources.ResourceLocation");
  const $FabricItemSettings = java("net.fabricmc.fabric.api.item.v1.FabricItemSettings");
  const $ToolManager = java("reborncore.api.ToolManager");
  const $GenericWrenchHelper = java("reborncore.common.util.GenericWrenchHelper");
  let ITEMS = $DeferredRegister.create("createastral", $Registry.ITEM_REGISTRY);
  /**
   * @param {string} resourceLocation
   * @param {number} multiplier
   */
  function registerUpgrade(resourceLocation, multiplier) {
    ITEMS["register(net.minecraft.class_2960,java.util.function.Supplier)"](resourceLocation, () => {
      return new $UpgradeItem(new $FabricItemSettings(), $ResourceLocation.tryParse(resourceLocation), multiplier);
    });
  }
  global.upgrades.forEach((upgrade) => registerUpgrade(upgrade.item, upgrade.multiplier));
  ITEMS.register();
  // make create wrench work as tech reborn wrench
  $ToolManager.INSTANCE.customToolHandlerList.add(
    new $GenericWrenchHelper(new $ResourceLocation("create:wrench"), true)
  );
})();
