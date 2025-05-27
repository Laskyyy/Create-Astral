(function techRebornBlockModification() {
  onEvent("block.modification", (event) => {
    event.modify("techreborn:crude_storage_unit", (block) => {
      block.material = "wood";
    });
    event.modify("techreborn:storage_buffer", (block) => {
      block.material = "wood";
    });
    event.modify("techreborn:silver_ore", (block) => {
      block.destroySpeed = 6;
      block.hasCollision = true;
      block.explosionResistance = 99999;
    });
    event.modify("techreborn:deepslate_silver_ore", (block) => {
      block.destroySpeed = 7;
      block.hasCollision = true;
      block.explosionResistance = 99999;
    });
    event.modify("techreborn:lead_ore", (block) => {
      block.destroySpeed = 6;
      block.hasCollision = true;
      block.explosionResistance = 99999;
    });
    event.modify("techreborn:deepslate_lead_ore", (block) => {
      block.destroySpeed = 7;
      block.hasCollision = true;
      block.explosionResistance = 99999;
    });
  });
})();
