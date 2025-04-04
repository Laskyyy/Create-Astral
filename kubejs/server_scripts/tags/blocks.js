onEvent("tags.blocks", (event) => {
    event.remove("minecraft:needs_iron_tool", "minecraft:diamond_ore");
    event.remove("minecraft:needs_iron_tool", "minecraft:deepslate_diamond_ore");
    event.add("minecraft:needs_diamond_tool", "minecraft:diamond_ore");
    event.add("minecraft:needs_diamond_tool", "minecraft:deepslate_diamond_ore");

    const graveReplaceBlacklist = ["customportalapi:customportalblock"];
    graveReplaceBlacklist.forEach((entry) => {
        event.add("yigd:replace_blacklist", entry);
    });
});

// Taken from the old wrench.js file
function wrenchables(event) {
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
        "tconstruct:seared_melter",
        "tconstruct:seared_heater",
    ].forEach((item) => {
        event.add("create:wrench_pickup", item);
    });

    const tinkersBlocks = ["table", "basin", "faucet", "channel", "lantern"];
    tinkersBlocks.forEach((block) => {
        event.add("create:wrench_pickup", `tconstruct:seared_${block}`);
        event.add("create:wrench_pickup", `tconstruct:scorched_${block}`);
    });

    const smelteryBlocks = event.get("tconstruct:smeltery").getObjectIds();
    smelteryBlocks.forEach((block) => {
        event.add("create:wrench_pickup", block);
    });

    const foundryBlocks = event.get("tconstruct:foundry").getObjectIds();
    foundryBlocks.forEach((block) => {
        event.add("create:wrench_pickup", block);
    });
}
