onEvent("item.tags", (event) => {
    [
        "tconstruct:pickaxe",
        "tconstruct:sledge_hammer",
        "tconstruct:vein_hammer",
        "tconstruct:mattock",
        "tconstruct:pickadze",
        "tconstruct:excavator",
        "tconstruct:hand_axe",
        "tconstruct:broad_axe",
        "tconstruct:kama",
        "tconstruct:scythe",
        "tconstruct:dagger",
        "tconstruct:sword",
        "tconstruct:cleaver",
        "#tconstruct:slimeslings",
        "#c:wrenches",
        "ad_astra:wrench",
        "catwalksinc:wrench",
        "techreborn:wrench",
        "techreborn:electric_treetap",
        "techreborn:painting_tool",
        "gearreborn:stun_gun",
        "automobility:crowbar",
        "doodads:slingshot",
        "doodads:paintbrush",
        "doodads:glare_staff"
    ].forEach((item) => {
        event.add("travelersbackpack:acceptable_tools", item);
    });
});