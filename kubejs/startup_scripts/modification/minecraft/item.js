(function minecraftItemModification() {
  onEvent("item.modification", (event) => {
    event.modify("minecraft:piglin_banner_pattern", (item) => {
      item.maxStackSize = 16;
    });
  });
})();
