export function createAdditionItemModification() {
  onEvent("item.modification", (event) => {
    event.modify("createaddition:biomass_pellet", (item) => {
      item.burnTime = 3200; // 16 items
    });
  });
}
