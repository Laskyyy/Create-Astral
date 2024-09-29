///// CUSTOM ASTRAL WORLDGEN /////

///OVERWORLD

onEvent("worldgen.add", (event) => {
    event.addOre((ore) => {
        ore.id = "kubejs:new_tin_ore"; // optional
        ore.biomes = [
            {
                not: {
                    category: "river",
                },
            },
        ];
        ore.addTarget("minecraft:stone", "techreborn:tin_ore");

        ore.count([10, 40]).squared().triangleHeight(0, 140);
    });

    ///MOON

    event.addOre((ore) => {
        ore.id = "kubejs:glowstonemoon"; // optional
        ore.biomes = ["ad_astra:lunar_wastelands", "minecraft:basalt_deltas"];
        ore.addTarget("#ad_astra:moon_ore_replaceables", "minecraft:glowstone");

        ore.count([10, 40]).squared().triangleHeight(0, 85);
    });

    event.addOre((ore) => {
        ore.id = "kubejs:rubyoremoon"; // optional
        ore.biomes = ["ad_astra:lunar_wastelands", "minecraft:basalt_deltas"];
        ore.biomes = [
            {
                not: {
                    category: "river",
                },
            },
        ];
        ore.addTarget("#ad_astra:moon_ore_replaceables", "ae2:deepslate_quartz_ore");

        ore.count([10, 20]).squared().triangleHeight(0, 85);
    });

    event.addOre((ore) => {
        ore.id = "kubejs:cobaltoremoon"; // optional
        ore.biomes = ["ad_astra:lunar_wastelands", "minecraft:basalt_deltas"];
        ore.biomes = [
            {
                not: {
                    category: "river",
                },
            },
        ];
        ore.addTarget("#ad_astra:moon_ore_replaceables", "tconstruct:cobalt_ore");
        ore.noSurface = 0.75;
        ore.count([10, 25]).squared().triangleHeight(0, 60);
    });

    event.addOre((ore) => {
        ore.id = "kubejs:silveroremoon"; // optional
        ore.biomes = ["ad_astra:lunar_wastelands", "minecraft:basalt_deltas"];
        ore.addTarget("#ad_astra:moon_ore_replaceables", "techreborn:deepslate_silver_ore");
        ore.noSurface = 0.75;
        ore.count([25, 40]).squared().triangleHeight(0, 115);
    });

    event.addOre((ore) => {
        ore.id = "kubejs:basalt"; // optional
        ore.biomes = ["ad_astra:lunar_wastelands", "minecraft:basalt_deltas"];
        ore.addTarget("#ad_astra:moon_ore_replaceables", "create:scoria");

        ore.count([1, 2]).squared().triangleHeight(60, 110);
        ore.size = 60;
    });

    event.addOre((ore) => {
        ore.id = "kubejs:skystoneae2"; // optional
        ore.biomes = ["ad_astra:lunar_wastelands", "minecraft:basalt_deltas"];
        ore.addTarget("#ad_astra:moon_ore_replaceables", "ad_astra:sky_stone");

        ore.count([1, 2]).squared().triangleHeight(0, 110);
        ore.size = 30;
    });
    event.addOre((ore) => {
        ore.id = "kubejs:wastelandrubble"; // optional
        ore.biomes = [
            "minecraft:nether_wastes",
            "minecraft:warped_forest",
            "minecraft:crimson_forest",
            "minecraft:small_end_islands",
        ];
        ore.addTarget("#createastral:nether_ore_replaceables", "yttr:ruined_cobblestone");

        ore.count([1, 4]).squared().triangleHeight(0, 135);
        ore.size = 40;
    });


    ///MARS

    event.addOre((ore) => {
        ore.id = "kubejs:leadoremars"; // optional
        ore.biomes = [
            {
                not: {
                    category: "river",
                },
            },
        ];
        ore.addTarget("#ad_astra:mars_ore_replaceables", "techreborn:deepslate_lead_ore");

        ore.count([10, 40]).squared().triangleHeight(0, 100);
    });

    event.addOre((ore) => {
        ore.id = "kubejs:goldoremars"; // optional
        ore.biomes = [
            {
                not: {
                    category: "river",
                },
            },
        ];
        ore.addTarget("#ad_astra:mars_ore_replaceables", "ad_astra:deepslate_gold_ore");

        ore.count([10, 40]).squared().triangleHeight(0, 100);
        ore.size = 15;
    });

    ///MERCURY

    event.addOre((ore) => {
        ore.id = "kubejs:yttriumoremerc"; // optional
        ore.biomes = [
            {
                not: {
                    category: "river",
                },
            },
        ];
        ore.addTarget("#ad_astra:mercury_ore_replaceables", "yttr:gadolinite");

        ore.count([25, 55]).squared().triangleHeight(-64, 85);
    });

    event.addOre((ore) => {
        ore.id = "kubejs:silveroremerc"; // optional
        ore.biomes = [
            {
                not: {
                    category: "river",
                },
            },
        ];
        ore.addTarget("#ad_astra:mercury_ore_replaceables", "techreborn:silver_ore");

        ore.count([25, 40]).squared().triangleHeight(-30, 85);
    });

    event.addOre((ore) => {
        ore.id = "kubejs:caloriteore"; // optional
        ore.biomes = [
            {
                not: {
                    category: "river",
                },
            },
        ];
        ore.addTarget("#ad_astra:mercury_ore_replaceables", "ad_astra:deepslate_calorite_ore");

        ore.count([10, 20]).squared().triangleHeight(0, 85);
    });
});
