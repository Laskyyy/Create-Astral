onEvent("tags.blocks", (event) => {
    event.remove("minecraft:needs_iron_tool", "minecraft:diamond_ore");
    event.remove("minecraft:needs_iron_tool", "minecraft:deepslate_diamond_ore");
});