onEvent("block.tags", (event) => {
    [
        "#c:shulker_boxes",
        "createbigcannons:steel_screw_breech",
        "createbigcannons:nethersteel_screw_breech",
        "createbigcannons:incomplete_steel_screw_breech",
        "createbigcannons:incomplete_nethersteel_screw_breech",
        "kubejs:fragile_sheet_block",
        "kubejs:fire_resistant_fragile_sheet_block",
        "#extended_drawers:network_components",
        "catwalksinc:catwalk",
        "catwalksinc:industrial_ladder",
        "catwalksinc:caged_ladder",
        "catwalksinc:cage_lamp",
        "catwalksinc:crank_wheel",
        "catwalksinc:yellow_catwalk",
        "catwalksinc:yellow_ladder",
        "catwalksinc:yellow_caged_ladder",
        "catwalksinc:red_catwalk",
        "catwalksinc:red_ladder",
        "catwalksinc:red_caged_ladder",
    ].forEach((item) => {
        event.add("create:wrench_pickup", item);
    });
});
