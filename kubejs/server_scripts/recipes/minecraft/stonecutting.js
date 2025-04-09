onEvent("recipes", (event) => {
    copperOxidising(event);

    [
        // [Input string, Output string]
        ["createastral:blast-resistant_concrete", "2x createastral:blast-resistant_concrete_slab"],
        ["createastral:blast-resistant_concrete", "createastral:blast-resistant_concrete_stairs"],
        ["minecraft:dripstone_block", "2x minecraft:pointed_dripstone"],
        ["createastral:bronze_ingot", "2x createastral:bronze_sheet"],
        ["createastral:andesite_compound", "minecraft:wooden_hoe"],
        ["createastral:andesite_compound", "minecraft:wooden_axe"],
        ["createastral:andesite_compound", "minecraft:wooden_shovel"],
        ["createastral:andesite_compound", "minecraft:wooden_pickaxe"],
        ["createastral:andesite_compound", "minecraft:wooden_sword"],
        ["createastral:andesite_compound", "minecraft:stone_hoe"],
        ["createastral:andesite_compound", "minecraft:stone_axe"],
        ["createastral:andesite_compound", "minecraft:stone_shovel"],
        ["createastral:andesite_compound", "minecraft:stone_pickaxe"],
        ["createastral:andesite_compound", "minecraft:stone_sword"],
        ["minecraft:dirt", "8x automobility:dirt_off_road"],
        ["minecraft:grass_block", "8x automobility:grass_off_road"],
        ["minecraft:moss_block", "8x automobility:grass_off_road"],
        ["minecraft:moss_carpet", "2x automobility:grass_off_road"],
        ["minecraft:sand", "8x automobility:sand_off_road"],
        ["techreborn:basic_machine_frame", "ae2:inscriber"],
        ["#c:plates/gold", "tconstruct:gear_cast"],
        ["#c:plates/gold", "astraladditions:ring_gold_cast"],
        ["#c:plates/gold", "tconstruct:coin_cast"],
        ["automobility:dash_panel", "automobility:sloped_dash_panel"],
        ["automobility:dash_panel", "automobility:steep_sloped_dash_panel"],
        ["yttr:wasteland_stone", "yttr:ruined_cobblestone"],
        ["yttr:wasteland_stone", "yttr:ruined_device_gt_1"],
        ["yttr:wasteland_stone", "yttr:ruined_device_bc_1"],
        ["yttr:wasteland_stone", "yttr:ruined_device_fo_1"],
        ["yttr:wasteland_dirt", "yttr:ruined_bricks"],
        ["yttr:wasteland_dirt", "yttr:ruined_construct_rc_1"],
        ["yttr:wasteland_dirt", "yttr:ruined_construct_rc_2"],
        ["yttr:wasteland_dirt", "yttr:ruined_tank"],
        ["yttr:wasteland_dirt", "yttr:ruined_pipe"],
        ["yttr:wasteland_dirt", "yttr:ruined_tube"],
        ["yttr:wasteland_dirt", "yttr:wasteland_grass"],
        ["yttr:wasteland_log", "yttr:ruined_container"],
        ["yttr:wasteland_log", "yttr:ruined_device_bc_2"],
        ["yttr:wasteland_log", "yttr:ruined_device_rp_1"],
        ["yttr:wasteland_log", "yttr:ruined_frame"],
        ["yttr:wasteland_log", "yttr:ruined_lever"],
        ["yttr:wasteland_log", "yttr:ruined_torch"],
        ["astraladditions:desizer_8", "astraladditions:desizer_1"],
        ["astraladditions:desizer_8", "astraladditions:desizer_2"],
        ["astraladditions:desizer_8", "astraladditions:desizer_3"],
        ["astraladditions:desizer_8", "astraladditions:desizer_4"],
        ["astraladditions:desizer_8", "astraladditions:desizer_6"],
        ["astraladditions:desizer_8", "astraladditions:desizer_7"],
        ["astraladditions:desizer_8", "astraladditions:desizer_9"],
        ["create:copper_sheet", "2x createdeco:copper_sheet_metal"],
        ["create:andesite_alloy", "2x createdeco:andesite_sheet_metal"],
        ["create:golden_sheet", "2x createdeco:gold_sheet_metal"],
        ["createdeco:netherite_sheet", "2x createdeco:netherite_sheet_metal"],
        ["create:brass_sheet", "2x createdeco:brass_sheet_metal"],
        ["createdeco:cast_iron_sheet", "2x createdeco:cast_iron_sheet_metal"],
        ["create:iron_sheet", "2x createdeco:iron_sheet_metal"],
        ["createdeco:zinc_sheet", "2x createdeco:zinc_sheet_metal"],
        ["create:track", "railways:track_acacia"],
        ["create:track", "railways:track_birch"],
        ["create:track", "railways:track_crimson"],
        ["create:track", "railways:track_dark_oak"],
        ["create:track", "railways:track_jungle"],
        ["create:track", "railways:track_oak"],
        ["create:track", "railways:track_spruce"],
        ["create:track", "railways:track_warped"],
        ["create:track", "railways:track_blackstone"],
        ["create:track", "railways:track_ender"],
        ["create:track", "railways:track_tieless"],
        ["create:track", "railways:track_phantom"],
        ["create:track", "railways:track_monorail"],
        ["minecraft:iron_ingot", "dustrial_decor:sheet_metal"],
        ["dustrial_decor:rusty_iron_ingot", "dustrial_decor:rusty_sheet_metal"],
        ["dustrial_decor:sheet_metal_plating", "dustrial_decor:sheet_metal_paneling"],
        ["dustrial_decor:sheet_metal_plating", "dustrial_decor:sheet_metal_plating_stairs"],
        ["dustrial_decor:sheet_metal_plating", "2x dustrial_decor:sheet_metal_plating_slab"],
        ["dustrial_decor:rusty_sheet_metal_plating", "dustrial_decor:rusty_sheet_metal_paneling"],
        ["dustrial_decor:rusty_sheet_metal_plating", "dustrial_decor:rusty_sheet_metal_plating_stairs"],
        ["dustrial_decor:rusty_sheet_metal_plating", "2x dustrial_decor:rusty_sheet_metal_plating_slab"],
        ["dustrial_decor:sheet_metal_treading", "dustrial_decor:sheet_metal_treading_stairs"],
        ["dustrial_decor:sheet_metal_treading", "2x dustrial_decor:sheet_metal_treading_slab"],
        ["dustrial_decor:rusty_sheet_metal_treading", "dustrial_decor:rusty_sheet_metal_treading_stairs"],
        ["dustrial_decor:rusty_sheet_metal_treading", "2x dustrial_decor:rusty_sheet_metal_treading_slab"],
        ["doodads:asphalt", "doodads:asphalt_stair"],
        ["doodads:asphalt", "2x doodads:asphalt_slab"],
        ["minecraft:copper_block", "4x createdeco:copper_sheet_metal"],
    ].forEach((recipe) => {
        event.stonecutting(recipe[1], recipe[0]);
    });
});

function copperOxidising(event) {
    // Oxidisation of all copper blocks that can weather

    for (const block of vanillaCopperBlocks) {
        for (const state of oxidisationTypes) {
            event.stonecutting(`minecraft:${state}_${block}`, `minecraft:${block}`);
            event.stonecutting(`minecraft:waxed_${state}_${block}`, `minecraft:waxed_${block}`);
        }
    }
    for (const block of createCopperBlocks) {
        for (const state of oxidisationTypes) {
            event.stonecutting(`create:${state}_${block}`, `create:${block}`);
            event.stonecutting(`create:waxed_${state}_${block}`, `create:waxed_${block}`);
        }
    }
    for (const state of oxidisationTypes) {
        // Other recipes that dont fit much of a pattern
        // [Input string, Output string]
        [
            ["minecraft:copper_block", `minecraft:${state}_copper`],
            ["minecraft:waxed_copper_block", `minecraft:waxed_${state}_copper`],
            ["phonos:copper_speaker", `phonos:${state}_copper_speaker`],
            ["phonos:waxed_copper_speaker", `phonos:waxed_${state}_copper_speaker`],
            ["tconstruct:copper_platform", `tconstruct:${state}_copper_platform`],
            ["tconstruct:waxed_copper_platform", `tconstruct:waxed_${state}_copper_platform`],
        ].forEach((recipe) => {
            event.stonecutting(recipe[1], recipe[0]);
        });
    }
}
