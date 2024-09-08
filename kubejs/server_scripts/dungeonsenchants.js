onEvent("recipes", (event) => {
    event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"mcdw:accelerate",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "minecraft:rabbit_foot",
                    "minecraft:rabbit_foot",
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
                '{StoredEnchantments:[{id:"mcdw:ambush",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "minecraft:leather",
                    "minecraft:leather",
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
                '{StoredEnchantments:[{id:"mcdw:anima_conduit",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "astraladditions:shimmer_heart",
                    "astraladditions:shimmer_heart",
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
        event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"mcdw:bonus_shot",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "createbigcannons:flak_autocannon_round",
                    "createbigcannons:flak_autocannon_round",
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
                '{StoredEnchantments:[{id:"mcdw:burst_bowstring",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "doodads:slimey_shoes",
                    "doodads:slimey_shoes",
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
                '{StoredEnchantments:[{id:"mcdw:chain_reaction",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "createbigcannons:shot_balls",
                    "createbigcannons:shot_balls",
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
                '{StoredEnchantments:[{id:"mcdw:chains",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "minecraft:chain",
                    "minecraft:chain",
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
                '{StoredEnchantments:[{id:"mcdw:charge",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "create:sturdy_sheet",
                    "create:sturdy_sheet",
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
                '{StoredEnchantments:[{id:"mcdw:cobweb_shot",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "minecraft:cobweb",
                    "minecraft:cobweb",
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
                '{StoredEnchantments:[{id:"mcdw:committed",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "techreborn:diamond_saw_blade",
                    "techreborn:diamond_saw_blade",
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
                '{StoredEnchantments:[{id:"mcdw:critical_hit",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "minecraft:nether_star",
                    "minecraft:nether_star",
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
                '{StoredEnchantments:[{id:"mcdw:dipping_poison",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "minecraft:pufferfish",
                    "minecraft:pufferfish",
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
                '{StoredEnchantments:[{id:"mcdw:dynamo",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "tconstruct:slime_boots",
                    "tconstruct:slime_boots",
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
                '{StoredEnchantments:[{id:"mcdw:echo",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "minecraft:jukebox",
                    "minecraft:jukebox",
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
                '{StoredEnchantments:[{id:"mcdw:enigma_resonator",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "tconstruct:sky_slime_crystal",
                    "tconstruct:sky_slime_crystal",
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
                '{StoredEnchantments:[{id:"mcdw:exploding",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "createbigcannons:he_shell",
                    "createbigcannons:he_shell",
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
                '{StoredEnchantments:[{id:"mcdw:freezing",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "ad_astra:ice_shard",
                    "ad_astra:ice_shard",
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
                '{StoredEnchantments:[{id:"mcdw:fuse_shot",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "createbigcannons:impact_fuze",
                    "createbigcannons:impact_fuze",
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
                '{StoredEnchantments:[{id:"mcdw:gravity",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "create:weighted_ejector",
                    "create:weighted_ejector",
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
                '{StoredEnchantments:[{id:"mcdw:guarding_strike",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "minecraft:shield",
                    "minecraft:shield",
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
                '{StoredEnchantments:[{id:"mcdw:fuse_shot",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "createbigcannons:impact_fuze",
                    "createbigcannons:impact_fuze",
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
                '{StoredEnchantments:[{id:"mcdw:illagers_bane",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "minecraft:totem_of_undying",
                    "minecraft:totem_of_undying",
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
                '{StoredEnchantments:[{id:"mcdw:jungle_poison",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "minecraft:poisonous_potato",
                    "minecraft:poisonous_potato",
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
                '{StoredEnchantments:[{id:"mcdw:leeching",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "tconstruct:necrotic_bone",
                    "tconstruct:necrotic_bone",
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
                '{StoredEnchantments:[{id:"mcdw:levitation_shot",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "minecraft:phantom_membrane",
                    "minecraft:phantom_membrane",
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
                '{StoredEnchantments:[{id:"mcdw:overcharge",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "createbigcannons:nitropowder",
                    "createbigcannons:nitropowder",
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
                '{StoredEnchantments:[{id:"mcdw:leeching",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "tconstruct:necrotic_bone",
                    "tconstruct:necrotic_bone",
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
                '{StoredEnchantments:[{id:"mcdw:pain_cycle",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "tconstruct:bloodbone",
                    "tconstruct:bloodbone",
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
                '{StoredEnchantments:[{id:"mcdw:phantoms_mark",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "minecraft:glowstone",
                    "minecraft:glowstone",
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
                '{StoredEnchantments:[{id:"mcdw:poison_cloud",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "minecraft:spore_blossom",
                    "minecraft:spore_blossom",
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
                '{StoredEnchantments:[{id:"mcdw:prospector",lvl:1s}]}'
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
                '{StoredEnchantments:[{id:"mcdw:radiance",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "minecraft:glow_berries",
                    "minecraft:glow_berries",
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
                '{StoredEnchantments:[{id:"mcdw:rampaging",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "techreborn:overclocker_upgrade",
                    "techreborn:overclocker_upgrade",
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
                '{StoredEnchantments:[{id:"mcdw:refreshment",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "farmersdelight:melon_juice",
                    "farmersdelight:melon_juice",
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
                '{StoredEnchantments:[{id:"mcdw:ricochet",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "createbigcannons:recoil_spring",
                    "createbigcannons:recoil_spring",
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
                '{StoredEnchantments:[{id:"mcdw:replenish",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "automobility:launch_gel",
                    "automobility:launch_gel",
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
                '{StoredEnchantments:[{id:"mcdw:rushdown",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "automobility:dash_panel",
                    "automobility:dash_panel",
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
                '{StoredEnchantments:[{id:"mcdw:shadow_barb",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "createaddition:barbed_wire",
                    "createaddition:barbed_wire",
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
                '{StoredEnchantments:[{id:"mcdw:shared_pain",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "doodads:cactus_ring",
                    "doodads:cactus_ring",
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
                '{StoredEnchantments:[{id:"mcdw:shadow_shot",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "createbigcannons:solid_shot",
                    "createbigcannons:solid_shot",
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
                '{StoredEnchantments:[{id:"mcdw:shockwave",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "createbigcannons:shrapnel_shell",
                    "createbigcannons:shrapnel_shell",
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
                '{StoredEnchantments:[{id:"mcdw:smiting",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "yigd:grave",
                    "yigd:grave",
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
                '{StoredEnchantments:[{id:"mcdw:soul_devourer",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "tconstruct:soulsteel_nugget",
                    "tconstruct:soulsteel_nugget",
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
                '{StoredEnchantments:[{id:"mcdw:soul_siphon",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "xpcrystals:soul_compound",
                    "xpcrystals:soul_compound",
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
                '{StoredEnchantments:[{id:"mcdw:stunning",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "drinkbeer:beer_mug",
                    "drinkbeer:beer_mug",
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
                '{StoredEnchantments:[{id:"mcdw:swirling",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "ae2:certus_quartz_crystal",
                    "ae2:certus_quartz_crystal",
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
                '{StoredEnchantments:[{id:"mcdw:tempo_theft",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "createastral:swift_andesite",
                    "createastral:swift_andesite",
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
                '{StoredEnchantments:[{id:"mcdw:thundering",lvl:1s}]}'
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
        )
        .transitionalItem("minecraft:enchanted_book")
        .loops(1);
        event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"mcdw:replenish",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "createbigcannons:recoil_spring",
                    "createbigcannons:recoil_spring",
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
                '{StoredEnchantments:[{id:"mcdw:weakening",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "minecraft:wither_rose",
                    "minecraft:wither_rose",
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
                '{StoredEnchantments:[{id:"mcdw:wild_rage",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "tconstruct:blood_slime_ball",
                    "tconstruct:blood_slime_ball",
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
        //void stuffs
        event.recipes
        .createSequencedAssembly(
            Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"mcdw:void_strike",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "create:refined_radiance",
                    "create:refined_radiance",
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
                '{StoredEnchantments:[{id:"mcdw:void_shot",lvl:1s}]}'
            ),
            ["minecraft:book"],
            [
                event.recipes.createDeploying("minecraft:enchanted_book", [
                    "create:shadow_steel",
                    "create:shadow_steel",
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
        
        
    })

