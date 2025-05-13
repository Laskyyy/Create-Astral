// @ts-check
(function stepUpFix() {
  function getPlayerStepHeight(player) {
    const DEFAULT_STEP_HEIGHT = 0.6;
    // Type assertion for now, maybe there's a more type safe way
    const leggingsNBT = player.legsArmorItem.nbt;
    const leggingsTag = leggingsNBT?.tag;
    if (leggingsTag == undefined) return DEFAULT_STEP_HEIGHT;
    const leggingsModifiers = leggingsTag.tic_modifiers;
    if (leggingsModifiers == undefined) return DEFAULT_STEP_HEIGHT;
    const stepUp = leggingsModifiers.filter((modifier) => modifier.name == "tconstruct:step_up")[0];
    if (stepUp == undefined) return DEFAULT_STEP_HEIGHT;
    return DEFAULT_STEP_HEIGHT + 0.5 * stepUp.level;
  }
  onEvent("client.tick", (event) => {
    const player = event.getPlayer();
    if (player == undefined) return;
    player.stepHeight = getPlayerStepHeight(player);
  });
})();
