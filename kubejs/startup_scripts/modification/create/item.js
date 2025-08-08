(function createItemModification() {
  onEvent("item.modification", (event) => {
    event.modify("create:blaze_cake", (item) => {
      item.burnTime = 50000;
    });
  });
})();
