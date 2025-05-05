export function definedsBlocksBlockRegistry() {
  onEvent("block.registry", (event) => {
    event
      .create("definedsblocks:undefined_block")
      .material("bone")
      .hardness(26)
      .tagBlock("minecraft:mineable/pickaxe")
      .displayName("uhhh ignore this");
  });
}
