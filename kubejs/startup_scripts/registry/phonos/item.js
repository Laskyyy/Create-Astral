(function phonosItemRegistry() {
  onEvent("item.registry", (event) => {
    // Phonos removal compat so recipes dont break
    event.create("phonos:redstone_chip");
  });
})();
