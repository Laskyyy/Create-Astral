onEvent("player.tick", (event) => {
    const player = event.getPlayer();
    if (event.level.getBlock(player.x, player.y - 2, player.z) == "createastral:swift_andesite") {
        player.potionEffects.add("minecraft:speed", 20, 0, false, false);
    }
});