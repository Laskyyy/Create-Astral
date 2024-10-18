onEvent("ponder.registry", event => {
    event.create("createastral:sturdy_cage").scene("set_replace_modify_tutorial", "Sturdy Cage", (scene, util) => {
        scene.showBasePlate();
        scene.world.setBlocks([1, 1, 4,], "astraladditions:desizer_9", true);
        scene.world.setBlocks([2, 1, 4,], "astraladditions:desizer_8", true);
        scene.world.setBlocks([3, 1, 4,], "astraladditions:desizer_7", true);
        scene.world.setBlocks([1, 2, 4,], "astraladditions:desizer_6", true);
        scene.world.setBlocks([2, 2, 4,], "astraladditions:desizer_controller", true);
        scene.world.setBlocks([3, 2, 4,], "astraladditions:desizer_4", true);
        scene.world.setBlocks([1, 3, 4,], "astraladditions:desizer_3", true);
        scene.world.setBlocks([2, 3, 4,], "astraladditions:desizer_2", true);
        scene.world.setBlocks([3, 3, 4,], "astraladditions:desizer_1", true);
        scene.idle(20);
        scene.world.showSection([0, 1, 0, 4, 3, 4], Facing.DOWN);
        scene.idle(10);
				scene.world.setBlocks([1, 1, 3,], "createastral:sturdy_sheet_block", true);
        scene.world.setBlocks([2, 1, 3,], "createastral:sturdy_sheet_block", true);
        scene.world.setBlocks([3, 1, 3,], "createastral:sturdy_sheet_block", true);
        scene.world.setBlocks([1, 2, 3,], "createastral:sturdy_sheet_block", true);
        scene.world.setBlocks([2, 2, 3,], "yttr:glassy_void", true);
        scene.world.setBlocks([3, 2, 3,], "createastral:sturdy_sheet_block", true);
        scene.world.setBlocks([1, 3, 3,], "createastral:sturdy_sheet_block", true);
        scene.world.setBlocks([2, 3, 3,], "createastral:sturdy_sheet_block", true);
        scene.world.setBlocks([3, 3, 3,], "createastral:sturdy_sheet_block", true);
				
        scene.idle(20);
				scene.world.setBlocks([1, 1, 2,], "createastral:sturdy_sheet_block", true);
        scene.world.setBlocks([2, 1, 2,], "yttr:glassy_void", true);
        scene.world.setBlocks([3, 1, 2,], "createastral:sturdy_sheet_block", true);
        scene.world.setBlocks([1, 2, 2,], "yttr:glassy_void", true);
        //scene.world.setBlocks([2, 2, 2,], "yttr:ultrapure_carbon_block", true);
        scene.world.setBlocks([3, 2, 2,], "yttr:glassy_void", true);
        scene.world.setBlocks([1, 3, 2,], "createastral:sturdy_sheet_block", true);
        scene.world.setBlocks([2, 3, 2,], "yttr:glassy_void", true);
        scene.world.setBlocks([3, 3, 2,], "createastral:sturdy_sheet_block", true);
				
        scene.idle(20);
				scene.world.setBlocks([1, 1, 1,], "createastral:sturdy_sheet_block", true);
        scene.world.setBlocks([2, 1, 1,], "createastral:sturdy_sheet_block", true);
        scene.world.setBlocks([3, 1, 1,], "createastral:sturdy_sheet_block", true);
        scene.world.setBlocks([1, 2, 1,], "createastral:sturdy_sheet_block", true);
        scene.world.setBlocks([2, 2, 1,], "yttr:glassy_void", true);
        scene.world.setBlocks([3, 2, 1,], "createastral:sturdy_sheet_block", true);
        scene.world.setBlocks([1, 3, 1,], "createastral:sturdy_sheet_block", true);
        scene.world.setBlocks([2, 3, 1,], "createastral:sturdy_sheet_block", true);
        scene.world.setBlocks([3, 3, 1,], "createastral:sturdy_sheet_block", true);
        scene.idle(10);
    });
});