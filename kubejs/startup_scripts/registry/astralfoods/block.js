(function astralFoodsBlockRegistry() {
  onEvent("block.registry", (event) => {

    event
      .create("astralfoods:blender_dummy", "basic")
      .material("glass")
      .hardness(2)
      .tagBlock("minecraft:mineable/axe")
      .notSolid()
      .defaultTranslucent()
      .fullBlock(false);
	  
	event
      .create("astralfoods:blender_on_dummy", "basic")
      .material("glass")
      .hardness(2)
      .tagBlock("minecraft:mineable/axe")
      .notSolid()
      .defaultTranslucent()
      .fullBlock(false);
  });
})();