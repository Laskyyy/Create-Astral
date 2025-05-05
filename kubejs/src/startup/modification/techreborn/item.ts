export function techRebornItemModification() {
  onEvent("item.modification", (event) => {
    event.modify("techreborn:oil_bucket", (item) => {
      item.burnTime = 40000;
    });
  });
}
