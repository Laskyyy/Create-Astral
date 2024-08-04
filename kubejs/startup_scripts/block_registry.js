///// REGISTER CUSTOM BLOCKS /////
onEvent("block.registry", (event) => {
    event
        .create("createastral:sturdy_sheet_block")
        .material("lantern")
        .hardness(9)
        .displayName("Sturdy Sheet Block")
        .tagBlock("minecraft:mineable/pickaxe");

    event
        .create("createastral:shimmering_stone")
        .material("stone")
        .hardness(20)
        .displayName("Shimmering Stone")
        .tagBlock("minecraft:mineable/pickaxe");

    event
        .create("createastral:copper_plating")
        .material("lantern")
        .hardness(3)
        .displayName("Copper Plating")
        .tagBlock("minecraft:mineable/pickaxe");
    event
        .create("createastral:refined_radiance_block")
        .material("lantern")
        .hardness(4)
        .displayName("Radiant Block")
        .tagBlock("minecraft:mineable/pickaxe")
        .lightLevel(1);

    event
        .create("createastral:bronze_block")
        .material("lantern")
        .hardness(3)
        .displayName("Bronze Block")
        .tagBlock("minecraft:mineable/pickaxe");

    event
        .create("createastral:copper_heating_coil")
        .material("lantern")
        .hardness(3)
        .displayName("Copper Coil Block")
        .tagBlock("minecraft:mineable/pickaxe");

    event
        .create("createastral:wired_panelling")
        .material("lantern")
        .hardness(3)
        .displayName("Wired Panelling")
        .tagBlock("minecraft:mineable/pickaxe");

    event
        .create("createastral:blast-resistant_concrete", "basic")
        .material("stone")
        .hardness(4)
        .resistance(1200)
        .textureAll("createastral:block/blast_side")
        .texture("up", "createastral:block/blast_top")
        .texture("down", "createastral:block/blast_top")
        .tagBlock("minecraft:mineable/pickaxe");

    event
        .create("createastral:blast-resistant_concrete_slab", "slab")
        .material("stone")
        .hardness(4)
        .resistance(1200)
        .textureAll("createastral:block/blast_side")
        .texture("up", "createastral:block/blast_top")
        .texture("down", "createastral:block/blast_top")
        .tagBlock("minecraft:mineable/pickaxe");

    event
        .create("createastral:blast-resistant_concrete_stairs", "stairs")
        .material("stone")
        .hardness(4)
        .resistance(1200)
        .textureAll("createastral:block/blast_side")
        .texture("up", "createastral:block/blast_top")
        .texture("down", "createastral:block/blast_top")
        .tagBlock("minecraft:mineable/pickaxe");

    event
        .create("createastral:electrolyser_dummy", "basic")
        .hardness(4)
        .resistance(1200)
        .textureAll("create:block/copper_casing")
        .texture("down", "createastral:block/electropipe")
        .texture("north", "createastral:block/electropipe")
        .tagBlock("minecraft:mineable/pickaxe");
    event
        .create("doodads:asphalt_stair", "stairs")
        .material("stone")
        .hardness(4)
        .tagBlock("minecraft:mineable/pickaxe")
        .textureAll("doodads:block/asphalt");

    event
        .create("createastral:stone_growth_chamber_dummy")
        .tagBlock("minecraft:mineable/pickaxe")
        .material("stone")
        .hardness(3)
        .textureAll("createastral:block/stone_growth_chamber_side")
        .texture("down", "createastral:block/stone_growth_chamber")
        .texture("north", "createastral:block/stone_growth_chamber");

    event
        .create("createastral:andesite_alloy_block", "basic")
        .material("stone")
        .hardness(4)
        .tagBlock("minecraft:mineable/pickaxe");

    event
        .create("createastral:voidtouched_compound", "basic")
        .hardness(4)
        .resistance(1200)
        .tagBlock("minecraft:mineable/pickaxe");

    event
        .create("createastral:charcoal_block", "basic")
        .hardness(4)
        .tagBlock("minecraft:mineable/pickaxe")
        .material("stone");

    event
        .create("createastral:experience_block", "basic")
        .hardness(4)
        .displayName("Ignore this block whilst it's a placeholder")
        .tagBlock("minecraft:mineable/pickaxe")
        .material("stone");

    event
        .create("createastral:compressed_experience_block")
        .tagBlock("minecraft:mineable/pickaxe")
        .material("glass")
        .hardness(2)
        .lightLevel(5);

    event.create("createastral:swift_andesite", "basic")
        .material("stone")
        .hardness(4)
        .tagBlock("minecraft:mineable/pickaxe");

    event.create("createastral:fragile_sheet_block", "basic")
        .material("stone")
        .defaultTranslucent()
        .hardness(1)

    event.create("createastral:broken_fragile_sheet_block", "basic")
        .material("stone")
        .defaultTranslucent()
        .hardness(1)
        .modelJson({
            "textures": {
                "0": "createastral:block/fragile_sheet_block",
                "1": "createastral:block/broken_sturdy_sheet_block",
                "particle": "createastral:block/fragile_sheet_block"
            },
            "elements": [
                {
                    "from": [0, 0, 0],
                    "to": [16, 7, 16],
                    "faces": {
                        "north": {"uv": [0, 9, 16, 16], "texture": "#0"},
                        "east": {"uv": [0, 9, 16, 16], "texture": "#0"},
                        "south": {"uv": [0, 9, 16, 16], "texture": "#0"},
                        "west": {"uv": [0, 9, 16, 16], "texture": "#0"},
                        "up": {"uv": [0, 0, 16, 16], "texture": "#0"},
                        "down": {"uv": [0, 0, 16, 16], "texture": "#0"}
                    }
                },
                {
                    "from": [1, 6, 5],
                    "to": [12, 9, 15],
                    "rotation": {"angle": 22.5, "axis": "y", "origin": [1, 10, 5]},
                    "faces": {
                        "north": {"uv": [0, 0, 11, 3], "texture": "#1"},
                        "east": {"uv": [0, 0, 10, 3], "texture": "#1"},
                        "south": {"uv": [0, 0, 11, 3], "texture": "#1"},
                        "west": {"uv": [0, 0, 10, 3], "texture": "#1"},
                        "up": {"uv": [0, 0, 11, 10], "texture": "#1"},
                        "down": {"uv": [0, 0, 11, 10], "texture": "#1"}
                    }
                },
                {
                    "from": [3, 7, 5],
                    "to": [11, 12, 11],
                    "rotation": {"angle": 22.5, "axis": "x", "origin": [1, 9, 6]},
                    "faces": {
                        "north": {"uv": [0, 0, 8, 5], "texture": "#1"},
                        "east": {"uv": [0, 0, 8, 5], "texture": "#1"},
                        "south": {"uv": [0, 0, 8, 5], "texture": "#1"},
                        "west": {"uv": [0, 0, 8, 5], "texture": "#1"},
                        "up": {"uv": [0, 0, 8, 5], "texture": "#1"},
                        "down": {"uv": [0, 0, 8, 5], "texture": "#1"}
                    }
                },
                {
                    "from": [3, 2, 2],
                    "to": [6, 8, 11],
                    "rotation": {"angle": 22.5, "axis": "z", "origin": [0, 7, 0]},
                    "faces": {
                        "north": {"uv": [0, 0, 3, 6], "texture": "#1"},
                        "east": {"uv": [0, 0, 3, 6], "texture": "#1"},
                        "south": {"uv": [0, 0, 3, 6], "texture": "#1"},
                        "west": {"uv": [0, 0, 3, 6], "texture": "#1"},
                        "up": {"uv": [0, 0, 3, 6], "texture": "#1"},
                        "down": {"uv": [0, 0, 3, 6], "texture": "#1"}
                    }
                },
                {
                    "from": [6, 7, 7],
                    "to": [14, 8, 11],
                    "rotation": {"angle": 22.5, "axis": "x", "origin": [3, 0, 10]},
                    "faces": {
                        "north": {"uv": [0, 0, 8, 1], "texture": "#1"},
                        "east": {"uv": [0, 0, 8, 1], "texture": "#1"},
                        "south": {"uv": [0, 0, 8, 1], "texture": "#1"},
                        "west": {"uv": [0, 0, 8, 1], "texture": "#1"},
                        "up": {"uv": [5, 4, 13, 12], "texture": "#1"},
                        "down": {"uv": [0, 0, 8, 8], "texture": "#1"}
                    }
                }
            ],
            "display": {
                "thirdperson_righthand": {
                    "rotation": [75, 45, 0],
                    "translation": [0, 2.5, 0],
                    "scale": [0.375, 0.375, 0.375]
                }
            }
        });

    event
        .create("doodads:asphalt_slab", "slab")
        .material("stone")
        .hardness(4)
        .tagBlock("minecraft:mineable/pickaxe")
        .textureAll("doodads:block/asphalt");

    event
        .create("doodads:asphalt_stair", "stairs")
        .material("stone")
        .hardness(4)
        .tagBlock("minecraft:mineable/pickaxe")
        .textureAll("doodads:block/asphalt");
});