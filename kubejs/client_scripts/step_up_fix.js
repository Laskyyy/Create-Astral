function getPlayerStepHeight(player) {
    const DEFAULT_STEP_HEIGHT = 0.6;

    const leggingsTag = player.getLegsArmorItem().toNBT().tag;
    if (leggingsTag === undefined) return DEFAULT_STEP_HEIGHT;

    const leggingsModifiers = leggingsTag.tic_modifiers;
    if (leggingsModifiers === undefined) return DEFAULT_STEP_HEIGHT;

    const stepUp = leggingsModifiers.filter((mod) => mod.name == "tconstruct:step_up")[0];
    if (stepUp === undefined) return DEFAULT_STEP_HEIGHT;

    if (stepUp.level == 2) {
        return 1.6;
    } else if (stepUp.level == 1) {
        return 1.1;
    } else {
        return DEFAULT_STEP_HEIGHT;
    }
}

onEvent("client.tick", (event) => {
    const player = event.getPlayer();
    if (player === undefined) return;

    player.stepHeight = getPlayerStepHeight(player);
});