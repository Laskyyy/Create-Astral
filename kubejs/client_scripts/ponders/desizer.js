onEvent("ponder.registry", event => {
    event.create("astraladditions:desizer_8").scene("set_replace_modify_tutorial", "Set, Replace, Modify.", (scene, util) => {
        scene.showBasePlate();
        scene.world.setBlocks([0, 1, 4,], "astraladditions:desizer_9", true);
        scene.world.setBlocks([1, 1, 4,], "astraladditions:desizer_5", true);
        scene.world.setBlocks([2, 1, 4,], "astraladditions:desizer_7", true);
        scene.world.setBlocks([0, 2, 4,], "astraladditions:desizer_6", true);
        scene.world.setBlocks([1, 2, 4,], "astraladditions:desizer_8", true);
        scene.world.setBlocks([2, 2, 4,], "astraladditions:desizer_4", true);
        scene.world.setBlocks([0, 3, 4,], "astraladditions:desizer_3", true);
        scene.world.setBlocks([1, 3, 4,], "astraladditions:desizer_2", true);
        scene.world.setBlocks([2, 3, 4,], "astraladditions:desizer_1", true);
        scene.idle(20);
        scene.world.showSection([0, 1, 4, 2, 3, 4], Facing.DOWN);
        scene.idle(10);
        scene.text(30, "This is the desizer", [1, 2.5, 4])
    });
});