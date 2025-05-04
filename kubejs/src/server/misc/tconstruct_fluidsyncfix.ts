function hephaestusFluidSyncFix() {
  onEvent("block.right_click", (event) => {
    if (event.block.id == "tconstruct:foundry_controller") {
      let blockEntity = event.block.entity as Internal.BlockEntity & { tank: { syncFluids(): void } };
      if ("tank" in blockEntity) blockEntity.tank.syncFluids();
    }
  });
}
