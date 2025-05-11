(function minecraftBlockModification() {
  onEvent("block.modification", (event) => {
    event.modify("minecraft:furnace", (block) => {
      block.material = "lantern";
    });
    event.modify("minecraft:smoker", (block) => {
      block.material = "lantern";
    });
    event.modify("minecraft:blast_furnace", (block) => {
      block.material = "lantern";
    });
    event.modify("minecraft:diamond_ore", (block) => {
      block.destroySpeed = 6;
      block.hasCollision = true;
      block.explosionResistance = 99999;
    });
    event.modify("minecraft:deepslate_diamond_ore", (block) => {
      block.destroySpeed = 7;
      block.hasCollision = true;
      block.explosionResistance = 99999;
    });
  });
})();
