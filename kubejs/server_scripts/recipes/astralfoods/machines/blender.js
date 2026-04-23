(function astralFoodsBlenderRecipes() {
  onEvent("recipes", (event) => {
    /**
     * Accepts 4 shapeless inputs and produces 1 output
     * Time is measured in ticks (20 ticks = 1 second)
     */
    event.recipes.custommachinery
      .custom_machine("astralfoods:blender", 100)
      .requireItem(Item.of("minecraft:potato"))
      .produceItem(Item.of("astralfoods:mashed_potato"));
    event.recipes.custommachinery
      .custom_machine("astralfoods:blender", 100)
      .requireItem(Item.of("minecraft:brown_mushroom"))
      .requireItem(Item.of("createastral:seitan"))
      .produceItem(Item.of("createastral:seitan", 2));
    event.recipes.custommachinery
      .custom_machine("astralfoods:blender", 100)
      .requireItem(Item.of("minecraft:pumpkin_seeds"))
      .requireItem(Item.of("minecraft:beetroot_seeds"))
      .requireItem(Item.of("minecraft:cocoa_beans"))
      .requireItem(Item.of("farmersdelight:fried_egg"))
      .produceItem(Item.of("astralfoods:protein_ball"));
    event.recipes.custommachinery
      .custom_machine("astralfoods:blender", 300)
      .requireItem(Item.of("yttr:delicace"))
      .requireItem(Item.of("techreborn:saltpeter_dust", 5))
      .produceItem(Item.of("createastral:saltmeal", 6));
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
      .requireItem(Item.of("techreborn:andesite_dust"))
      .produceItem(Item.of("minecraft:sand"));
  });
})();
