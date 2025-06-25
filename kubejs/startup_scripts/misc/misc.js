console.info("Create: Astral Modpack version = 2.1.4");

(function misc() {
  const { upgrades } = global.startup;
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
  upgrades.forEach((upgrade) => registerUpgrade(upgrade.item, upgrade.multiplier));
  ITEMS.register();
  // make create wrench work as tech reborn wrench
  $ToolManager.INSTANCE.customToolHandlerList.add(
    new $GenericWrenchHelper(new $ResourceLocation("create:wrench"), true)
  );
})();
