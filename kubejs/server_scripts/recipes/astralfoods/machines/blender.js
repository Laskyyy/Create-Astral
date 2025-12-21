(function astralFoodsBlenderRecipes() {
  onEvent("recipes", (event) => {
    /**
     * Can only be one input and output
     * Time is measured in ticks (20 ticks = 1 second)
     * The block will only accept dormant signal beacons as inputs.
     * Change the machine registry in kubejs/data/astralsignals/machines/signal_coordinator.json if you wish to modify this
     */
    event.recipes.custommachinery
      .custom_machine("astralfoods:blender", 300)
      .requireItem(Item.of("yttr:delicace"))
      .requireItem(Item.of("techreborn:saltpeter_dust"))
      .produceItem(Item.of("createastral:saltmeal"));
    event.recipes.custommachinery
      .custom_machine("astralfoods:blender", 100)
      .requireItem(Item.of("create:dough"))
      .requireItem(Item.of("minecraft:lime_dye"))
      .requireItem(Item.of("tconstruct:earth_slime_grass_seeds"))
      .produceItem(Item.of("minecraft:slime_ball", 2));
    event.recipes.custommachinery
      .custom_machine("astralfoods:blender", 150)
      .requireItem(Item.of("ad_astra:cheese"))
      .requireItem(Item.of("minecraft:dirt"))
      .requireItem(Item.of("minecraft:bone_meal"))
      .produceItem(Item.of("minecraft:mycelium", 2));
    event.recipes.custommachinery
      .custom_machine("astralfoods:blender", 100)
      .requireItem(Item.of("minecraft:rotten_flesh"))
      .requireItem(Item.of("techreborn:calcite_dust"))
      .produceItem(Item.of("minecraft:bone_meal", 3));
    event.recipes.custommachinery
      .custom_machine("astralfoods:blender", 200)
      .requireItem(Item.of("techreborn:plantball"))
      .requireItem(Item.of("techreborn:saltpeter_dust"))
      .requireItem(Item.of("minecraft:bone_meal"))
      .requireItem(Item.of("minecraft:sugar"))
      .produceItem(Item.of("createaddition:biomass", 1));
    event.recipes.custommachinery
      .custom_machine("astralfoods:blender", 100)
      .requireItem(Item.of("minecraft:potato"))
      .produceItem(Item.of("astralfoods:mashed_potato"));
  });
})();
