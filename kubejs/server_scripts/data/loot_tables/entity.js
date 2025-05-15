(function wanderingWinemakerLoot() {
  onEvent("entity.loot_tables", (event) => {
    vinery(event);
  });
  // Taken from the old vinery.js file
  /** @param {Internal.EntityLootEventJS} event */
  function vinery(event) {
    event.addEntity("vinery:wandering_winemaker", (table) => {
      table.addPool((pool) => {
        pool.setUniformRolls(1, 1);
        pool.addItem("vinery:straw_hat", 1);
        pool.addItem("vinery:vinemaker_apron", 1);
        pool.addItem("vinery:vinemaker_leggings", 1);
        pool.addItem("vinery:vinemaker_boots", 1);
        pool.addItem("vinery:gloves", 1);
        pool.addItem("vinery:wine_bottle", 2);
        pool.addItem("vinery:apple_pie", 2);
      });
    });
  }
})();
