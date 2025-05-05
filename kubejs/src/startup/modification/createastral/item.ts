export function createAstralItemModification() {
  onEvent("item.modification", (event) => {
    event.modify("createastral:charcoal_block", (item) => {
      item.burnTime = 14400; // 72 items, equal to 9 (char)coal - incentivises haunting into coal for extra 8 items worth of burn time
    }); // item.burnTime breaks if registered during block.registry so it has to be registered during block.modification
  });
}
