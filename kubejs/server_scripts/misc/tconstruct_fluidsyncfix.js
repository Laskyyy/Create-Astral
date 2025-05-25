(function hephaestusFluidSyncFix() {
  onEvent("block.right_click", (event) => {
    if (event.block.id == "tconstruct:foundry_controller") {
      let blockEntity = event.block.entity;
      if (
        "tank" in blockEntity &&
        typeof blockEntity.tank == "object" &&
        "syncFluids" in blockEntity.tank &&
        typeof blockEntity.tank.syncFluids == "function"
      ) {
        blockEntity.tank.syncFluids();
      } else {
        throw new Error("syncFluids is not a function in the Foundry Controller's block entity.");
      }
    }
  });
})();
