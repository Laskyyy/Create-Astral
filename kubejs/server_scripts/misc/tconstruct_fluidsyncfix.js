(function hephaestusFluidSyncFix() {
  onEvent("block.right_click", (event) => {
    if (event.block.id == "tconstruct:foundry_controller") {
      // @ts-expect-error This should always work.
      event.block.entity?.tank?.syncFluids();
    }
  });
})();
