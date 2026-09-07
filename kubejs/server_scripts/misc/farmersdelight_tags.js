(function farmersdelightTagFix() {
  onEvent("tags.blocks", (event) => {
    event.remove("farmersdelight:mineable/knife", "#minecraft:wool_carpets");
    event.add("farmersdelight:mineable/knife", "#chipped:cobweb");
  });
})();
