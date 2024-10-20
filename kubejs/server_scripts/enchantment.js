
onEvent("recipes", (event) => {
    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "minecraft:golden_sword",
                    "minecraft:golden_sword",
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:protection",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "tconstruct:gold_reinforcement",
                    "tconstruct:gold_reinforcement",
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "tconstruct:iron_reinforcement",
                    "tconstruct:iron_reinforcement",
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:mending",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "tconstruct:slimesteel_reinforcement",
                    "tconstruct:slimesteel_reinforcement",
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "tconstruct:seared_reinforcement",
                    "tconstruct:seared_reinforcement",
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "tconstruct:emerald_reinforcement",
                    "tconstruct:emerald_reinforcement",
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "tconstruct:bronze_reinforcement",
                    "tconstruct:bronze_reinforcement",
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:thorns",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "tconstruct:cobalt_reinforcement",
                    "tconstruct:cobalt_reinforcement",
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "dustrial_decor:wrapped_chains",
                    "dustrial_decor:wrapped_chains",
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "minecraft:soul_lantern",
                    "minecraft:soul_lantern",
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:smite",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "techreborn:silver_plate",
                    "techreborn:silver_plate",
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:silk_touch",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "tconstruct:silky_cloth",
                    "tconstruct:silky_cloth",
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:respiration",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "create:copper_diving_helmet",
                    "create:copper_diving_helmet",
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "minecraft:lever",
                    "minecraft:lever",
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:punch",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "create:brass_hand",
                    "create:brass_hand",
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:power",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "minecraft:gunpowder",
                    "minecraft:gunpowder",
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:piercing",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "minecraft:piston",
                    "minecraft:piston",
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:multishot",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "minecraft:crossbow",
                    "minecraft:crossbow",
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:looting",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "ad_astra:calorite_ingot",
                    "ad_astra:calorite_ingot",
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:knockback",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "minecraft:tnt",
                    "minecraft:tnt",
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:infinity",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "minecraft:spectral_arrow",
                    "minecraft:spectral_arrow",
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "minecraft:spectral_arrow",
                    "minecraft:spectral_arrow",
                ]), // Why? Just to fug wit ppl
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "minecraft:blue_ice",
                    "minecraft:blue_ice",
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:fortune",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "tconstruct:jeweled_apple",
                    "tconstruct:jeweled_apple",
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:flame",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "minecraft:blaze_powder",
                    "minecraft:blaze_powder",
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "minecraft:blaze_rod",
                    "minecraft:blaze_rod",
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "minecraft:white_bed",
                    "minecraft:white_bed",
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    Item.of(
                        "minecraft:potion",
                        '{Potion:"minecraft:swiftness"}'
                    ),
                    Item.of(
                        "minecraft:potion",
                        '{Potion:"minecraft:swiftness"}'
                    ),
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:depth_strider",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "create:copper_diving_boots",
                    "create:copper_diving_boots",
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:aqua_affinity",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "create:copper_backtank",
                    "create:copper_backtank",
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "minecraft:spider_eye",
                    "minecraft:spider_eye",
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:lure",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "farmersdelight:cod_slice",
                    "farmersdelight:cod_slice",
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "minecraft:golden_apple",
                    "minecraft:golden_apple",
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "minecraft:sea_lantern",
                    "minecraft:sea_lantern",
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:riptide",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "minecraft:dark_prismarine",
                    "minecraft:dark_prismarine",
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:impaling",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "minecraft:prismarine_shard",
                    "minecraft:prismarine_shard",
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    event.recipes.createSequencedAssembly(
        Item.of(
            "minecraft:enchanted_book",
            '{StoredEnchantments:[{id:"minecraft:channeling",lvl:1s}]}'
        ),
        ["minecraft:book"],
        [
            event.recipes.createDeploying("minecraft:enchanted_book", [
                "minecraft:lightning_rod",
                "minecraft:lightning_rod",
            ]),
            event.recipes.createDeploying("minecraft:enchanted_book", [
                "xpcrystals:xp_crystal",
                "xpcrystals:xp_crystal",
            ]), // insert crystal here / def something that could be changed
            event.recipes.createFilling("minecraft:enchanted_book", [
                "minecraft:enchanted_book",
                { fluid: "xpcrystals:soul", amount: BUCKET },
            ]), //gathering the souls / def something that could be changed
            event.recipes.createPressing(
                "minecraft:enchanted_book",
                "minecraft:enchanted_book"
            ),
        ]
    );

    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "farmersdelight:iron_knife",
                    "farmersdelight:iron_knife",
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"create:capacity",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "ad_astra:oxygen_bucket",
                    "ad_astra:oxygen_bucket",
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"create:potato_recovery",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "ad_astra:oxygen_bucket",
                    "ad_astra:oxygen_bucket",
                ]),
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:xp_crystal",
                    "xpcrystals:xp_crystal",
                ]), // insert crystal here / def something that could be changed
                event.recipes.createFilling("minecraft:enchanted_book", [
                    "minecraft:enchanted_book",
                    { fluid: "xpcrystals:soul", amount: BUCKET },
                ]), //gathering the souls / def something that could be changed
                event.recipes.createPressing(
                    "minecraft:enchanted_book",
                    "minecraft:enchanted_book"
                ),
            ]
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);

    const mixings = [
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:2s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:1s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:3s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:2s}]}'
                ),
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:4s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:3s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:5s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:4s}]}'
                ),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:6s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:5s}]}'
                ),
                "create:experience_block",
                { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET / 2 },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:7s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:6s}]}'
                ),
                "create:experience_block",
                { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:2s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:1s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:3s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:2s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:4s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:3s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:5s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:4s}]}'
                ),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:protection",lvl:2s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:protection",lvl:1s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:protection",lvl:3s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:protection",lvl:2s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:protection",lvl:4s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:protection",lvl:3s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:protection",lvl:5s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:protection",lvl:4s}]}'
                ),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:protection",lvl:6s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:protection",lvl:5s}]}'
                ),
                "create:experience_block",
                { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET / 2 },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:protection",lvl:7s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:protection",lvl:6s}]}'
                ),
                "create:experience_block",
                { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:2s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:1s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:3s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:2s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:4s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:3s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:5s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:4s}]}'
                ),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:6s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:5s}]}'
                ),
                "create:experience_block",
                { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET / 2 },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:2s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:1s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:3s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:2s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:4s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:3s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:5s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:4s}]}'
                ),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:6s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:5s}]}'
                ),
                "create:experience_block",
                { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET / 2 },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:2s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:1s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:3s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:2s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:4s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:3s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:5s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:4s}]}'
                ),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:6s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:5s}]}'
                ),
                "create:experience_block",
                { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET / 2 },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:thorns",lvl:2s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:thorns",lvl:1s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:thorns",lvl:3s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:thorns",lvl:2s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:thorns",lvl:4s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:thorns",lvl:3s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:thorns",lvl:5s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:thorns",lvl:4s}]}'
                ),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:2s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:1s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:3s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:2s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:4s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:3s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:5s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:4s}]}'
                ),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:2s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:1s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:3s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:2s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:4s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:3s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:5s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:4s}]}'
                ),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:smite",lvl:2s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:smite",lvl:1s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:smite",lvl:3s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:smite",lvl:2s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:smite",lvl:4s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:smite",lvl:3s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:smite",lvl:5s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:smite",lvl:4s}]}'
                ),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:smite",lvl:6s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:smite",lvl:5s}]}'
                ),
                "create:experience_block",
                { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET / 2 },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:smite",lvl:7s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:smite",lvl:6s}]}'
                ),
                "create:experience_block",
                { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:respiration",lvl:2s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:respiration",lvl:1s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:respiration",lvl:3s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:respiration",lvl:2s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:respiration",lvl:4s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:respiration",lvl:3s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:respiration",lvl:5s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:respiration",lvl:4s}]}'
                ),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:2s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:1s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:3s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:2s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:4s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:3s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:5s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:4s}]}'
                ),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:punch",lvl:2s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:punch",lvl:1s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:punch",lvl:3s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:punch",lvl:2s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:punch",lvl:4s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:punch",lvl:3s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:power",lvl:2s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:power",lvl:1s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:power",lvl:3s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:power",lvl:2s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:power",lvl:4s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:power",lvl:3s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:power",lvl:5s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:power",lvl:4s}]}'
                ),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:power",lvl:6s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:power",lvl:5s}]}'
                ),
                "create:experience_block",
                { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET / 2 },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:power",lvl:7s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:power",lvl:6s}]}'
                ),
                "create:experience_block",
                { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:piercing",lvl:2s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:piercing",lvl:1s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:piercing",lvl:3s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:piercing",lvl:2s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:piercing",lvl:4s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:piercing",lvl:3s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:piercing",lvl:5s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:piercing",lvl:4s}]}'
                ),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:piercing",lvl:6s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:piercing",lvl:5s}]}'
                ),
                "create:experience_block",
                { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET / 2 },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:looting",lvl:2s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:looting",lvl:1s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:looting",lvl:3s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:looting",lvl:2s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:looting",lvl:4s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:looting",lvl:3s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:looting",lvl:5s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:looting",lvl:4s}]}'
                ),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:knockback",lvl:2s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:knockback",lvl:1s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:knockback",lvl:3s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:knockback",lvl:2s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:knockback",lvl:4s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:knockback",lvl:3s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:2s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:1s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:3s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:2s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:4s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:3s}]}'
                ),
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:fortune",lvl:2s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:fortune",lvl:1s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:fortune",lvl:3s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:fortune",lvl:2s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:fortune",lvl:4s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:fortune",lvl:3s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:fortune",lvl:5s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:fortune",lvl:4s}]}'
                ),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:2s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:1s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:3s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:2s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:4s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:3s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:2s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:1s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:3s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:2s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:4s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:3s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:5s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:4s}]}'
                ),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:6s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:5s}]}'
                ),
                "create:experience_block",
                { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET / 2 },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:2s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:1s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:3s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:2s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:4s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:3s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:5s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:4s}]}'
                ),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:6s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:5s}]}'
                ),
                "create:experience_block",
                { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET / 2 },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:7s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:6s}]}'
                ),
                "create:experience_block",
                { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:depth_strider",lvl:2s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:depth_strider",lvl:1s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:depth_strider",lvl:3s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:depth_strider",lvl:2s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:2s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:1s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:3s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:2s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:4s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:3s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:5s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:4s}]}'
                ),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:6s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:5s}]}'
                ),
                "create:experience_block",
                { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET / 2 },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:7s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:6s}]}'
                ),
                "create:experience_block",
                { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:lure",lvl:2s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:lure",lvl:1s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:lure",lvl:3s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:lure",lvl:2s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:lure",lvl:4s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:lure",lvl:3s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:lure",lvl:5s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:lure",lvl:4s}]}'
                ),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:2s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:1s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:3s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:2s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:4s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:3s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:5s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:4s}]}'
                ),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:2s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:1s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:3s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:2s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:4s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:3s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:5s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:4s}]}'
                ),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:riptide",lvl:2s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:riptide",lvl:1s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:riptide",lvl:3s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:riptide",lvl:2s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:riptide",lvl:4s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:riptide",lvl:3s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:riptide",lvl:5s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:riptide",lvl:4s}]}'
                ),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:impaling",lvl:2s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:impaling",lvl:1s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:impaling",lvl:3s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:impaling",lvl:2s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:impaling",lvl:4s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:impaling",lvl:3s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:impaling",lvl:5s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:impaling",lvl:4s}]}'
                ),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:impaling",lvl:6s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:impaling",lvl:5s}]}'
                ),
                "create:experience_block",
                { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET / 2 },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:impaling",lvl:7s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"minecraft:impaling",lvl:6s}]}'
                ),
                "create:experience_block",
                { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:2s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:1s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: false,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:3s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:2s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:4s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:3s}]}'
                ),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:5s}]}'
            ),
            input: [
                Item.of(
                    "minecraft:enchanted_book",
                    '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:4s}]}'
                ),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            superheated: true,
            time: null,
        },
        {
            output: { fluid: "kubejs:liquid_xp_nuggies", amount: 1000 },
            input: ["create:experience_nugget"],
            superheated: false,
            time: 10,
        },
        {
            output: { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
            input: ["createastral:experience_ingot"],
            superheated: false,
            time: 100,
        },
        {
            output: { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
            input: ["create:experience_block"],
            superheated: false,
            time: 1000,
        },
        {
            output: { fluid: "kubejs:liquid_xp_nuggies", amount: 2000 },
            input: ["xpcrystals:xp_crystal"],
            superheated: false,
            time: 12,
        },
        {
            output: {
                fluid: "tconstruct:liquid_soul",
                amount: 250 * mB,
            },
            input: ["xpcrystals:soul_compound"],
            superheated: false,
            time: 30,
        },
    ];
    for (const mixing of mixings) {
        event.recipes
            .createMixing(mixing.output, mixing.input)
            .heatRequirement(mixing.superheated ? "superheated" : "heated")
            .processingTime(mixing.time ?? 100);
    }
    event.remove({ output: "xpcrystals:crystal_broth" });
    event.remove({ output: "xpcrystals:sticky_crystal_pudding" });
    event.remove({ output: "xpcrystals:soul_bucket" });
    event.remove({ output: "xpcrystals:soul_compound" });
    event.remove({ output: "xpcrystals:xp_boost_potion" });
    event.recipes
        .createMixing(
            {
                fluid: "tconstruct:liquid_soul",
                amount: 250 * mB,
            },
            [
                "xpcrystals:soul_compound",
                { fluid: "minecraft:water", amount: 125 * mB },
            ]
        )
        .processingTime(25);
    event.recipes
        .createMixing(
            { fluid: "xpcrystals:soul", amount: 250 * mB },
            { fluid: "tconstruct:liquid_soul", amount: 250 * mB }
        )
        .processingTime(25);
    event.recipes.createCrushing(
        [
            "3x xpcrystals:soul_compound",
            Item.of("xpcrystals:soul_compound").withChance(0.5),
        ],
        ["minecraft:soul_sand"]
    );
    event.recipes.createMilling(
        [
            "1x xpcrystals:soul_compound",
            Item.of("xpcrystals:soul_compound").withChance(0.5),
            Item.of("minecraft:soul_sand").withChance(0.25),
        ],
        ["minecraft:soul_sand"]
    );
    event.recipes.createFilling("xpcrystals:sticky_crystal_pudding", [
        { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
        "createaddition:cake_base_baked",
    ]);
    event.recipes.createFilling("xpcrystals:crystal_broth", [
        { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET / 2 },
        "minecraft:bowl",
    ]);
    event.recipes
        .createSequencedAssembly(
            Item.of("xpcrystals:xp_boost_potion"),
            ["minecraft:glass_bottle"],
            [
                event.recipes.createFilling("minecraft:glass_bottle", [
                    "minecraft:glass_bottle",
                    {
                        fluid: "kubejs:liquid_xp_nuggies",
                        amount: BUCKET / 3,
                    },
                ]),
                event.recipes.createFilling("minecraft:glass_bottle", [
                    "minecraft:glass_bottle",
                    {
                        fluid: "xpcrystals:soul",
                        amount: BUCKET / 3,
                    },
                ]),
                event.recipes.createFilling("minecraft:glass_bottle", [
                    "minecraft:glass_bottle",
                    {
                        fluid: "kubejs:shimmer",
                        amount: BUCKET / 3,
                    },
                ]),
            ]
        )
        .transitionalItem("minecraft:glass_bottle")
        .loops(1);
});
