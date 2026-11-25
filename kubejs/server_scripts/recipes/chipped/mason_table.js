(function chippedMasonTable() {
  onEvent("recipes", (event) => {
    event.custom({
      type: "chipped:mason_table",
      tags: ["chipped:terracotta"]
    }).id("kubejs:chipped_mason_terracotta_fix");
  });
})();