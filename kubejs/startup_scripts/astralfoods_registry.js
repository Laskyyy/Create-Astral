onEvent("item.registry", (event) => {
    //Astral Foods
    event
        .create("astralfoods:quantum_bites")
        .displayName("Quantum Bites")
        .food((food) => {
            food.hunger(7).saturation(1.2).effect("regeneration", 300, 0, 1).alwaysEdible();
        });

    event
        .create("astralfoods:astral_sauce")
        .displayName("Astral Sauce")
        .food((food) => {
            food.hunger(7).saturation(0.6).effect("wither", 440, 0, 1).effect("hunger", 440, 1, 1).alwaysEdible();
        });

    event
        .create("astralfoods:quantum_pasta")
        .displayName("Quantum Pasta")
        .food((food) => {
            food.hunger(75)
                .saturation(1.1)
                .effect("haste", 5000, 1, 1)
                .effect("regeneration", 5000, 1, 1)
                .effect("farmersdelight:nourishment", 6600, 2, 1)
                .alwaysEdible();
        });

    event
        .create("astralfoods:seared_potato")
        .displayName("Seared Potato")
        .food((food) => {
            food.hunger(7).saturation(0.8).effect("resistance", 440, 0, 1).alwaysEdible();
        });

    event
        .create("astralfoods:dipped_potato")
        .displayName("Dipped Potato")
        .food((food) => {
            food.hunger(9)
                .saturation(0.8)
                .effect("resistance", 440, 1, 1)
                .effect("absorption", 440, 0, 1)
                .effect("jump_boost", 160, 128, 1)
                .alwaysEdible();
        });

    event
        .create("astralfoods:shimmered_rabbit_stew")
        .displayName("Shimmered Rabbit Stew")
        .food((food) => {
            food.hunger(18)
                .saturation(0.9)
                .effect("resistance", 500, 1, 1)
                .effect("farmersdelight:nourishment", 5000, 0, 1)
                .alwaysEdible();
        });

    event
        .create("astralfoods:shimmered_apple")
        .displayName("Shimmered Apple")
        .food((food) => {
            food.hunger(7).saturation(1.4).effect("regeneration", 60, 1, 1);
        });

    event
        .create("astralfoods:compressed_onion")
        .displayName("Compressed Onion")
        .food((food) => {
            food.hunger(54).saturation(0.6).effect("slowness", 200, 1, 1).effect("nausea", 200, 2, 1).alwaysEdible();
        });

    event
        .create("astralfoods:food_amalgamation")
        .displayName("Food Amalgamation")
        .food((food) => {
            food.hunger(200)
                .saturation(1)
                .effect("regeneration", 400, 4, 1)
                .effect("resistance", 1000, 3, 1)
                .effect("haste", 1100, 4, 1)
                .effect("health_boost", 1000, 3, 1)
                .effect("saturation", 760, 2, 1)
                .alwaysEdible();
        });

    event
        .create("astralfoods:bulbas_tea")
        .displayName("Bulba's Tea")
        .maxStackSize(16)
        .food((food) => {
            food.hunger(2)
                .saturation(1.2)
                .effect("night_vision", 4800, 0, 1)
                .effect("haste", 4800, 0, 1)
                .alwaysEdible();
        });

    event
        .create("astralfoods:ambrosia")
        .displayName("Ambrosia")
        .food((food) => {
            food.hunger(3).saturation(1.1).effect("haste", 1200, 0, 1).alwaysEdible();
        });

    event
        .create("astralfoods:chocolate_ice_cream")
        .displayName("Chocolate Ice Cream")
        .food((food) => {
            food.hunger(3).saturation(1.2).effect("speed", 800, 0, 1).alwaysEdible();
        });

    event
        .create("astralfoods:ice_cream_sandwich")
        .displayName("Ice Cream Sandwich")
        .food((food) => {
            food.hunger(6).saturation(1.2).effect("speed", 520, 0, 1).effect("haste", 520, 0, 1).alwaysEdible();
        });

    event
        .create("astralfoods:gamers_delight")
        .displayName("Gamers Delight")
        .food((food) => {
            food.hunger(7)
                .saturation(1.3)
                .effect("createaddition:shocking", 10, 1, 1)
                .effect("strength", 440, 0, 1)
                .alwaysEdible();
        });

    event
        .create("astralfoods:fried_cod")
        .displayName("Fried Cod")
        .food((food) => {
            food.hunger(6).saturation(0.9);
        });

    event
        .create("astralfoods:blaze_rods")
        .displayName("Blaze Rods")
        .food((food) => {
            food.hunger(1)
                .saturation(0.6)
                .effect("wither", 160, 1, 1)
                .effect("fire_resistance", 160, 0, 1)
                .alwaysEdible();
        });

    event
        .create("astralfoods:blaze_fries")
        .displayName("Blaze Fries")
        .food((food) => {
            food.hunger(3).saturation(0.8).effect("fire_resistance", 200, 0, 1);
        });

    event
        .create("astralfoods:blaze_fries_and_cod")
        .displayName("Blaze Fries and Cod")
        .food((food) => {
            food.hunger(9)
                .saturation(0.9)
                .effect("fire_resistance", 300, 0, 1)
                .effect("farmersdelight:nourishment", 3500, 0, 1);
        });

    event
        .create("astralfoods:cod_n_blaze")
        .displayName("Cod n' Blaze")
        .food((food) => {
            food.hunger(12)
                .saturation(1)
                .effect("fire_resistance", 360, 0, 1)
                .effect("farmersdelight:nourishment", 5000, 0, 1)
                .effect("absorption", 360, 0, 1);
        });
});

onEvent("fluid.registry", (event) => {
    event
        .create("astralfoods:cream")
        .thickTexture(0xfeedbd)
        .bucketColor(0xfeedbd)
        .displayName("Cream")
        .stillTexture("tconstruct:block/fluid/molten/still")
        .flowingTexture("tconstruct:block/fluid/molten/flowing");
});
