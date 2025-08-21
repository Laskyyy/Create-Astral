onEvent("block.right_click", (event) => {
  if (event.block.id == "tconstruct:foundry_controller" && event.block.entity.tank != null)
    event.block.entity.tank.syncFluids();
});
