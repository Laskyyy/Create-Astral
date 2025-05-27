(function createBlockModification() {
  onEvent("block.modification", (event) => {
    event.modify("create:large_cogwheel", (block) => {
      block.material = "lantern";
    });
    event.modify("create:cogwheel", (block) => {
      block.material = "lantern";
    });
  });
})();
