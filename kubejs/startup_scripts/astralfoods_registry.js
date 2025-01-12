onEvent("item.registry", (event) => {
    //Astral Foods
    event
        .create("astralfoods:quantum_bites")
        .displayName("Quantum Bites")
        .food((food) => {
            food.hunger(8).saturation(1.2).effect("regeneration", 300, 2, 1).alwaysEdible();
        });

    event
        .create("astralfoods:astral_sauce")
        .displayName("Astral Sauce")
        .food((food) => {
            food.hunger(7).saturation(0.6).effect("wither", 440, 1, 1).effect("hunger", 440, 2, 1).alwaysEdible();
        });

    event
        .create("astralfoods:quantum_pasta")
        .displayName("Quantum Pasta")
        .food((food) => {
            food.hunger(75)
                .saturation(1.1)
                .effect("haste", 5000, 2, 1)
                .effect("regeneration", 5000, 2, 1)
                .effect("farmersdelight:nourishment", 6600, 2, 1)
                .alwaysEdible();
        });

    event
        .create("astralfoods:seared_potato")
        .displayName("Seared Potato")
        .food((food) => {
            food.hunger(9).saturation(1).effect("resistance", 440, 1, 1).alwaysEdible();
        });

    event
        .create("astralfoods:dipped_potato")
        .displayName("Dipped Potato")
        .food((food) => {
            food.hunger(12)
                .saturation(1.1)
                .effect("resistance", 440, 2, 1)
                .effect("absorption", 440, 3, 1)
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
                .effect("night_vision", 4800, 1, 1)
                .effect("haste", 4800, 1, 1)
                .alwaysEdible();
        });

    event
        .create("astralfoods:ambrosia")
        .displayName("Ambrosia")
        .food((food) => {
            food.hunger(3).saturation(1.2).effect("haste", 1200, 1, 1).alwaysEdible();
        });

    event
        .create("astralfoods:chocolate_ice_cream")
        .displayName("Chocolate Ice Cream")
        .food((food) => {
            food.hunger(2).saturation(1.4).effect("speed", 800, 1, 1).alwaysEdible();
        });

    event
        .create("astralfoods:chocolate_ice_cream")
        .displayName("Chocolate Ice Cream")
        .food((food) => {
            food.hunger(6).saturation(1.4).effect("speed", 600, 1, 1).effect("haste", 600, 1, 1).alwaysEdible();
        });
});

onEvent("fluid.registry", (event) => {
    event
        .create("cream")
        .thickTexture(0xbcaa79)
        .bucketColor(0xbcaa79)
        .displayName("Cream")
        .stillTexture("kubejsassetsastralfoods\textures\fluidcream_still.png")
        .flowingTexture("kubejsassetsastralfoods\textures\fluidcream_flow.png");
});
