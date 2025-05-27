(function yttrBlockRegistry() {
  onEvent("block.registry", (event) => {
    event
      .create("yttr:polished_scorched_obsidian_holster_alive", "basic")
      .textureAll("yttr:block/polished_scorched_obsidian_holster_alive")
      .texture("up", "yttr:block/polished_scorched_obsidian_capstone")
      .texture("down", "yttr:block/polished_scorched_obsidian")
      .hardness(50)
      .material("stone")
      .requiresTool(true)
      .lightLevel(4);
  });
})();
