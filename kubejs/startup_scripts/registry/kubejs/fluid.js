(function kubeJSFluidRegistry() {
  //? REGISTERING CUSTOM FLUIDS
  onEvent("fluid.registry", (event) => {
    liquidFoodGen(event);
    event
      .create("molten_calorite")
      .thickTexture(0xc41a39)
      .bucketColor(0xc41a39)
      .stillTexture("tconstruct:block/fluid/molten/still")
      .flowingTexture("tconstruct:block/fluid/molten/flowing")
      .tag("tconstruct:tooltips/metal")
      .displayName("Molten Calorite");
    event
      .create("molten_ostrum")
      .thickTexture(0x73515e)
      .bucketColor(0x73515e)
      .stillTexture("tconstruct:block/fluid/molten/still")
      .flowingTexture("tconstruct:block/fluid/molten/flowing")
      .tag("tconstruct:tooltips/metal")
      .displayName("Molten Ostrum");
    event
      .create("molten_desh")
      .thickTexture(0xec8742)
      .bucketColor(0xec8742)
      .stillTexture("tconstruct:block/fluid/molten/still")
      .flowingTexture("tconstruct:block/fluid/molten/flowing")
      .tag("tconstruct:tooltips/metal")
      .displayName("Molten Desh");
    event
      .create("molten_yttrium")
      .thickTexture(0x487d77)
      .bucketColor(0x487d77)
      .stillTexture("tconstruct:block/fluid/molten/still")
      .flowingTexture("tconstruct:block/fluid/molten/flowing")
      .tag("tconstruct:tooltips/metal")
      .displayName("Molten Yttrium");
    event
      .create("molten_shadowsteel")
      .thickTexture(0x2e2742)
      .bucketColor(0x2e2742)
      .stillTexture("tconstruct:block/fluid/molten/still")
      .flowingTexture("tconstruct:block/fluid/molten/flowing")
      .tag("tconstruct:tooltips/metal")
      .displayName("Shadow Fluid");
    event
      .create("molten_radiance")
      .thickTexture(0xf7f2ff)
      .bucketColor(0xf7f2ff)
      .stillTexture("tconstruct:block/fluid/molten/still")
      .flowingTexture("tconstruct:block/fluid/molten/flowing")
      .tag("tconstruct:tooltips/metal")
      .displayName("Radiant Residue");
    event
      .create("aurorite")
      .thickTexture(0xc8e9e9)
      .bucketColor(0xc8e9e9)
      .stillTexture("tconstruct:block/fluid/molten/still")
      .flowingTexture("tconstruct:block/fluid/molten/flowing")
      .displayName("Aurorite");
    event
      .create("metabolic_broth")
      .thickTexture(0xc3b1e1)
      .bucketColor(0xc3b1e1)
      .stillTexture("tconstruct:block/fluid/molten/still")
      .flowingTexture("tconstruct:block/fluid/molten/flowing")
      .displayName("Metabolic Broth");
    event
      .create("plasma_fluid")
      .thickTexture(0x4cfbff)
      .bucketColor(0x4cfbff)
      .stillTexture("tconstruct:block/fluid/molten/still")
      .flowingTexture("tconstruct:block/fluid/molten/flowing")
      .displayName("Metabolic Broth");
    event
      .create("hellfire")
      .thickTexture(0x9fddfc)
      .bucketColor(0x9fddfc)
      .stillTexture("tconstruct:block/fluid/molten/still")
      .flowingTexture("tconstruct:block/fluid/molten/flowing")
      .displayName("Hellfire");
    event
      .create("smite")
      .thickTexture(0xffff00)
      .bucketColor(0xffff00)
      .stillTexture("tconstruct:block/fluid/molten/still")
      .flowingTexture("tconstruct:block/fluid/molten/flowing")
      .gaseous()
      .displayName("Smite");
    event
      .create("compound_mixture")
      .thickTexture(0x66786f)
      .bucketColor(0x66786f)
      .stillTexture("tconstruct:block/fluid/molten/still")
      .flowingTexture("tconstruct:block/fluid/molten/flowing")
      .tag("tconstruct:tooltips/metal")
      .displayName("Compound Mixture");
    event
      .create("blast-resistant_cement")
      .thickTexture(0x959595)
      .bucketColor(0x959595)
      .stillTexture("tconstruct:block/fluid/molten/still")
      .flowingTexture("tconstruct:block/fluid/molten/flowing")
      .displayName("Blast-Resistant Cement");
    event
      .create("red_grape_juice")
      .thinTexture(0x864e97)
      .bucketColor(0x864e97)
      .stillTexture("tconstruct:block/fluid/stew/still")
      .flowingTexture("tconstruct:block/fluid/stew/flowing")
      .displayName("Red Grape Juice");
    event
      .create("white_grape_juice")
      .thinTexture(0xeeedc4)
      .bucketColor(0xeeedc4)
      .stillTexture("tconstruct:block/fluid/stew/still")
      .flowingTexture("tconstruct:block/fluid/stew/flowing")
      .displayName("White Grape Juice");
    event
      .create("liquid_xp_nuggies")
      .thickTexture(0x17ff45)
      .bucketColor(0x17ff45)
      .stillTexture("tconstruct:block/fluid/molten/shimmer")
      .flowingTexture("tconstruct:block/fluid/molten/shimmer")
      .displayName("Liquified Experience Nuggets");
    event
      .create("red_paste")
      .thickTexture(0xff0000)
      .bucketColor(0xff0000)
      .stillTexture("tconstruct:block/fluid/molten/still")
      .flowingTexture("tconstruct:block/fluid/molten/still")
      .displayName("Red Paste");
    event
      .create("frothy_pink_eggnog_fluid")
      .thickTexture(0xd1b694)
      .bucketColor(0xd1b694)
      .stillTexture("tconstruct:block/fluid/molten/still")
      .flowingTexture("tconstruct:block/fluid/molten/flowing")
      .displayName("Frothy Pink Eggnog");
    event
      .create("night_howl_kvass_fluid")
      .thickTexture(0xe8d1b5)
      .bucketColor(0xe8d1b5)
      .stillTexture("tconstruct:block/fluid/molten/still")
      .flowingTexture("tconstruct:block/fluid/molten/flowing")
      .displayName("Night Howl OwOss");
    event
      .create("pumpkin_kvass_fluid")
      .thickTexture(0xfc8d05)
      .bucketColor(0xfc8d05)
      .stillTexture("tconstruct:block/fluid/molten/still")
      .flowingTexture("tconstruct:block/fluid/molten/flowing")
      .displayName("Pumpkin Kvass");
    event
      .create("haars_icey_pale_lager_fluid")
      .thickTexture(0xf0d797)
      .bucketColor(0xf0d797)
      .stillTexture("tconstruct:block/fluid/molten/still")
      .flowingTexture("tconstruct:block/fluid/molten/flowing")
      .displayName("Haar's Icey Pale Lager");
    event
      .create("sweet_berry_kriek_fluid")
      .thickTexture(0xd13674)
      .bucketColor(0xd13674)
      .stillTexture("tconstruct:block/fluid/molten/still")
      .flowingTexture("tconstruct:block/fluid/molten/flowing")
      .displayName("Sweet Berry Kriek");
    event
      .create("apple_lambic_fluid")
      .thickTexture(0xeb8315)
      .bucketColor(0xeb8315)
      .stillTexture("tconstruct:block/fluid/molten/still")
      .flowingTexture("tconstruct:block/fluid/molten/flowing")
      .displayName("Apple Lambic");
    event
      .create("blaze_milk_stout_fluid")
      .thickTexture(0xe8b279)
      .bucketColor(0xe8b279)
      .stillTexture("tconstruct:block/fluid/molten/still")
      .flowingTexture("tconstruct:block/fluid/molten/flowing")
      .displayName("Blaze Milk Stout");
    event
      .create("blaze_stout_fluid")
      .thickTexture(0x2e2410)
      .bucketColor(0x2e2410)
      .stillTexture("tconstruct:block/fluid/molten/still")
      .flowingTexture("tconstruct:block/fluid/molten/flowing")
      .displayName("Blaze Stout");
    event
      .create("miner_pale_ale_fluid")
      .thickTexture(0xa67a21)
      .bucketColor(0xa67a21)
      .stillTexture("tconstruct:block/fluid/molten/still")
      .flowingTexture("tconstruct:block/fluid/molten/flowing")
      .displayName("Miner Pale Ale");
    event.create("supercooled_water").thinTexture(0x4afff0).bucketColor(0x4afff0).displayName("Supercooled Water");
  });
  /** @param {Registry.Fluid} event  */
  function liquidFoodGen(event) {
    /**
     * @typedef LiquidFood
     * @property {string} name
     * @property {string} displayName
     * @property {number} color
     */
    /** @type {LiquidFood[]} */
    const liquidFoods = [
      {
        name: "dumplings_fluid",
        displayName: "Dumpling Mix",
        color: 0xffff80,
      },
      {
        name: "pumpkin_soup_fluid",
        displayName: "Pumpkin Soup",
        color: 0xdddd00,
      },
      {
        name: "vegetable_noodles_fluid",
        displayName: "Guljalabala",
        color: 0x6a4736,
      },
      {
        name: "mushroom_rice_fluid",
        displayName: "Mushroom Rice",
        color: 0xddddee,
      },
      {
        name: "beetroot_soup_fluid",
        displayName: "Beetroot Soup",
        color: 0x741b47,
      },
      {
        name: "hot_cocoa_fluid",
        displayName: "Hot Cocoa",
        color: 0x993d00,
      },
      {
        name: "noodle_soup_fluid",
        displayName: "Noodle Soup",
        color: 0xffdd80,
      },
      {
        name: "stuffed_pumpkin_block_fluid",
        displayName: "Pumpkin Stuffing",
        color: 0xdddddd,
      },
      {
        name: "mushroom_stew_fluid",
        displayName: "Mushroom Stew",
        color: 0xb35900,
      },
      {
        name: "glow_berry_custard_fluid",
        displayName: "Glow Berry Custard",
        color: 0xffff99,
      },
      {
        name: "beef_stew_fluid",
        displayName: "Beef Stew",
        color: 0x990000,
      },
      {
        name: "cooked_rice_fluid",
        displayName: "Rice",
        color: 0xffffe6,
      },
      {
        name: "bone_broth_fluid",
        displayName: "Bone Broth",
        color: 0xffffe6,
      },
      {
        name: "rabbit_stew_fluid",
        displayName: "Rabbit Stew",
        color: 0xb33c00,
      },
      {
        name: "pasta_with_mutton_chop_fluid",
        displayName: "Mutton Pasta",
        color: 0xe67300,
      },
      {
        name: "baked_cod_stew_fluid",
        displayName: "Cod Stew",
        color: 0xffff80,
      },
      {
        name: "squid_ink_pasta_fluid",
        displayName: "Squid Ink Pasta",
        color: 0xffff80,
      },
      {
        name: "tomato_sauce_fluid",
        displayName: "Tomato Sauce",
        color: 0xb32400,
      },
      {
        name: "fish_stew_fluid",
        displayName: "Fish Stew",
        color: 0xff5c33,
      },
      {
        name: "pasta_with_meatballs_fluid",
        displayName: "Spaghetti with Meatballs",
        color: 0xff0000,
      },
      {
        name: "dog_food_fluid",
        displayName: "Dog Food",
        color: 0x800000,
      },
      {
        name: "ratatouille_fluid",
        displayName: "Ratatouille",
        color: 0xe60000,
      },
      {
        name: "fried_rice_fluid",
        displayName: "Fried Rice",
        color: 0xffcc99,
      },
      {
        name: "vegetable_soup_fluid",
        displayName: "Vegetable Soup",
        color: 0x009900,
      },
      {
        name: "apple_cider_fluid",
        displayName: "Apple Cider",
        color: 0xffad66,
      },
      {
        name: "chicken_soup_fluid",
        displayName: "Chicken Soup",
        color: 0xffdd99,
      },
    ];
    for (const fluid of liquidFoods) {
      event
        .create(fluid.name)
        .thinTexture(fluid.color)
        .bucketColor(fluid.color)
        .stillTexture("tconstruct:block/fluid/stew/still")
        .flowingTexture("tconstruct:block/fluid/stew/flowing")
        .displayName(fluid.displayName);
    }
  }
})();
