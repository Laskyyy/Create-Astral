///// REGISTERING CUSTOM FLUIDS ////
onEvent("fluid.registry", (event) => {
    event
        .create("molten_calorite")
        .thickTexture(0xc41a39)
        .bucketColor(0xc41a39)
        .displayName("Calorite")
        .stillTexture("tconstruct:block/fluid/molten/still")
        .flowingTexture("tconstruct:block/fluid/molten/flowing")
        .tag("tconstruct:tooltips/metal")

    event
        .create("molten_ostrum")
        .thickTexture(0x73515e)
        .bucketColor(0x73515e)
        .displayName("Ostrum")
        .stillTexture("tconstruct:block/fluid/molten/still")
        .flowingTexture("tconstruct:block/fluid/molten/flowing")
        .tag("tconstruct:tooltips/metal")

    event
        .create("molten_desh")
        .thickTexture(0xec8742)
        .bucketColor(0xec8742)
        .displayName("Desh")
        .stillTexture("tconstruct:block/fluid/molten/still")
        .flowingTexture("tconstruct:block/fluid/molten/flowing")
        .tag("tconstruct:tooltips/metal")

    event
        .create("molten_yttrium")
        .thickTexture(0x487d77)
        .bucketColor(0x487d77)
        .displayName("Yttrium")
        .stillTexture("tconstruct:block/fluid/molten/still")
        .flowingTexture("tconstruct:block/fluid/molten/flowing")
        .tag("tconstruct:tooltips/metal")

    event
        .create("molten_shadowsteel")
        .thickTexture(0x2e2742)
        .bucketColor(0x2e2742)
        .displayName("Shadow Fluid")
        .stillTexture("tconstruct:block/fluid/molten/still")
        .flowingTexture("tconstruct:block/fluid/molten/flowing")
        .tag("tconstruct:tooltips/metal")

    event
        .create("molten_radiance")
        .thickTexture(0xf7f2ff)
        .bucketColor(0xf7f2ff)
        .displayName("Radiant Residue")
        .stillTexture("tconstruct:block/fluid/molten/still")
        .flowingTexture("tconstruct:block/fluid/molten/flowing")
        .tag("tconstruct:tooltips/metal")

    event
        .create("aurorite")
        .thickTexture(0xc8e9e9)
        .bucketColor(0xc8e9e9)
        .displayName("Aurorite")
        .stillTexture("tconstruct:block/fluid/molten/still")
        .flowingTexture("tconstruct:block/fluid/molten/flowing")

    event
        .create("metabolic_broth")
        .thickTexture(0xC3B1E1)
        .bucketColor(0xC3B1E1)
        .displayName("Metabolic Broth")
        .stillTexture("tconstruct:block/fluid/molten/still")
        .flowingTexture("tconstruct:block/fluid/molten/flowing")

        event
        .create("plasma_fluid")
        .thickTexture(0x4cfbff)
        .bucketColor(0x4cfbff)
        .displayName("Metabolic Broth")
        .stillTexture("tconstruct:block/fluid/molten/still")
        .flowingTexture("tconstruct:block/fluid/molten/flowing");

    event
        .create("hellfire")
        .thickTexture(0x9fddfc)
        .bucketColor(0x9fddfc)
        .displayName("Hellfire")
        .stillTexture("tconstruct:block/fluid/molten/still")
        .flowingTexture("tconstruct:block/fluid/molten/flowing");

    event.create("smite")
        .thickTexture(0xffff00)
        .bucketColor(0xffff00)
        .displayName("Smite")
        .stillTexture("tconstruct:block/fluid/molten/still")
        .flowingTexture("tconstruct:block/fluid/molten/flowing")
        .gaseous();

    event.create("released_water_coolant")
        .thickTexture(0x63b1ed)
        .bucketColor(0x63b1ed)
        .displayName("Released Coolant")

    event
        .create("compound_mixture")
        .thickTexture(0x66786f)
        .bucketColor(0x66786f)
        .displayName("Compound Mixture")
        .stillTexture("tconstruct:block/fluid/molten/still")
        .flowingTexture("tconstruct:block/fluid/molten/flowing")
        .tag("tconstruct:tooltips/metal")

    event
        .create("blast-resistant_cement")
        .thickTexture(0x959595)
        .bucketColor(0x959595)
        .displayName("Blast-Resistant Cement")
        .stillTexture("tconstruct:block/fluid/molten/still")
        .flowingTexture("tconstruct:block/fluid/molten/flowing");

    event
        .create("red_grape_juice")
        .thinTexture(0x864e97)
        .bucketColor(0x864e97)
        .displayName("Red Grape Juice")
        .stillTexture("tconstruct:block/fluid/stew/still")
        .flowingTexture("tconstruct:block/fluid/stew/flowing");

    event
        .create("white_grape_juice")
        .thinTexture(0xeeedc4)
        .bucketColor(0xeeedc4)
        .displayName("White Grape Juice")
        .stillTexture("tconstruct:block/fluid/stew/still")
        .flowingTexture("tconstruct:block/fluid/stew/flowing");

    event
        .create("liquid_xp_nuggies")
        .thickTexture(0x17ff45)
        .bucketColor(0x17ff45)
        .displayName("Liquified Experience Nuggets")
        .stillTexture("tconstruct:block/fluid/molten/shimmer")
        .flowingTexture("tconstruct:block/fluid/molten/shimmer");

    event
        .create('red_paste')
        .thickTexture(0xff0000)
        .bucketColor(0xff0000)
        .displayName('Red Paste')
        .stillTexture('tconstruct:block/fluid/molten/still')
        .flowingTexture('tconstruct:block/fluid/molten/still')

    event
        .create("supercooled_water")
        .thinTexture(0x4afff0)
        .bucketColor(0x4afff0)
        .displayName("Supercooled Water");

    liquidFoodGen(event);
});

//LIQUID FOODS
function liquidFoodGen(event) {
    [
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
    ].forEach((f) => {
        let fluid = event
            .create(f.name)
            .thinTexture(f.color)
            .bucketColor(f.color)
            .displayName(f.displayName)
            .stillTexture("tconstruct:block/fluid/stew/still")
            .flowingTexture("tconstruct:block/fluid/stew/flowing");
    });
}