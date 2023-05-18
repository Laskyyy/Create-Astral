var FULL_BUCKET_AMMOUNT = 81000;
var INGOT_FLUID_AMMOUNT = 9000;

onEvent("recipes", (event) => {
    event.recipes
            .createSequencedAssembly(
                ["minecraft:book"],
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:1s}]}',),
                [
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:golden_sword",
                        "minecraft:golden_sword",
                    ]),
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:experience_bottle",
                        "minecraft:experience_bottle",
                    ]), // insert crystal here / def something that could be changed
                    event.recipes.createFilling("minecraft:enchanted_book", [
                        "minecraft:enchanted_book",
                        { fluid: "tconstruct:liquid_soul", amount: FULL_BUCKET_AMMOUNT },
                    ]), //gathering the souls / def something that could be changed
                    event.recipes.createPressing(
                        "minecraft:enchanted_book",
                        "minecraft:enchanted_book"
                    ),
                ]
            )
            .transitionalItem("minecraft:enchanted_book")
            .loops(1);

            .createSequencedAssembly(
                ["minecraft:book"],
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:1s}]}',),
                [
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "tconstruct:gold_reinforcement",
                        "tconstruct:gold_reinforcement",
                    ]),
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:experience_bottle",
                        "minecraft:experience_bottle",
                    ]), // insert crystal here / def something that could be changed
                    event.recipes.createFilling("minecraft:enchanted_book", [
                        "minecraft:enchanted_book",
                        { fluid: "tconstruct:liquid_soul", amount: FULL_BUCKET_AMMOUNT },
                    ]), //gathering the souls / def something that could be changed
                    event.recipes.createPressing(
                        "minecraft:enchanted_book",
                        "minecraft:enchanted_book"
                    ),
                ]
            )
            .transitionalItem("minecraft:enchanted_book")
            .loops(1);
            
            .createSequencedAssembly(
                ["minecraft:book"],
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:1s}]}',),
                [
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "tconstruct:iron_reinforcement",
                        "tconstruct:iron_reinforcement",
                    ]),
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:experience_bottle",
                        "minecraft:experience_bottle",
                    ]), // insert crystal here / def something that could be changed
                    event.recipes.createFilling("minecraft:enchanted_book", [
                        "minecraft:enchanted_book",
                        { fluid: "tconstruct:liquid_soul", amount: FULL_BUCKET_AMMOUNT },
                    ]), //gathering the souls / def something that could be changed
                    event.recipes.createPressing(
                        "minecraft:enchanted_book",
                        "minecraft:enchanted_book"
                    ),
                ]
            )
            .transitionalItem("minecraft:enchanted_book")
            .loops(1);

            .createSequencedAssembly(
                ["minecraft:book"],
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:mending",lvl:1s}]}',),
                [
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "tconstruct:slimesteel_reinforcement",
                        "tconstruct:slimesteel_reinforcement",
                    ]),
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:experience_bottle",
                        "minecraft:experience_bottle",
                    ]), // insert crystal here / def something that could be changed
                    event.recipes.createFilling("minecraft:enchanted_book", [
                        "minecraft:enchanted_book",
                        { fluid: "tconstruct:liquid_soul", amount: FULL_BUCKET_AMMOUNT },
                    ]), //gathering the souls / def something that could be changed
                    event.recipes.createPressing(
                        "minecraft:enchanted_book",
                        "minecraft:enchanted_book"
                    ),
                ]
            )
            .transitionalItem("minecraft:enchanted_book")
            .loops(1);
            
            .createSequencedAssembly(
                ["minecraft:book"],
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:1s}]}',),
                [
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "tconstruct:seared_reinforcement",
                        "tconstruct:seared_reinforcement",
                    ]),
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:experience_bottle",
                        "minecraft:experience_bottle",
                    ]), // insert crystal here / def something that could be changed
                    event.recipes.createFilling("minecraft:enchanted_book", [
                        "minecraft:enchanted_book",
                        { fluid: "tconstruct:liquid_soul", amount: FULL_BUCKET_AMMOUNT },
                    ]), //gathering the souls / def something that could be changed
                    event.recipes.createPressing(
                        "minecraft:enchanted_book",
                        "minecraft:enchanted_book"
                    ),
                ]
            )
            .transitionalItem("minecraft:enchanted_book")
            .loops(1);
                        
            .createSequencedAssembly(
                ["minecraft:book"],
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:1s}]}',),
                [
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "tconstruct:emerald_reinforcement",
                        "tconstruct:emerald_reinforcement",
                    ]),
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:experience_bottle",
                        "minecraft:experience_bottle",
                    ]), // insert crystal here / def something that could be changed
                    event.recipes.createFilling("minecraft:enchanted_book", [
                        "minecraft:enchanted_book",
                        { fluid: "tconstruct:liquid_soul", amount: FULL_BUCKET_AMMOUNT },
                    ]), //gathering the souls / def something that could be changed
                    event.recipes.createPressing(
                        "minecraft:enchanted_book",
                        "minecraft:enchanted_book"
                    ),
                ]
            )
            .transitionalItem("minecraft:enchanted_book")
            .loops(1);
                                    
            .createSequencedAssembly(
                ["minecraft:book"],
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:1s}]}',),
                [
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "tconstruct:bronze_reinforcement",
                        "tconstruct:bronze_reinforcement",
                    ]),
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:experience_bottle",
                        "minecraft:experience_bottle",
                    ]), // insert crystal here / def something that could be changed
                    event.recipes.createFilling("minecraft:enchanted_book", [
                        "minecraft:enchanted_book",
                        { fluid: "tconstruct:liquid_soul", amount: FULL_BUCKET_AMMOUNT },
                    ]), //gathering the souls / def something that could be changed
                    event.recipes.createPressing(
                        "minecraft:enchanted_book",
                        "minecraft:enchanted_book"
                    ),
                ]
            )
            .transitionalItem("minecraft:enchanted_book")
            .loops(1);
                                                
            .createSequencedAssembly(
                ["minecraft:book"],
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:1s}]}',),
                [
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "tconstruct:cobalt_reinforcement",
                        "tconstruct:cobalt_reinforcement",
                    ]),
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:experience_bottle",
                        "minecraft:experience_bottle",
                    ]), // insert crystal here / def something that could be changed
                    event.recipes.createFilling("minecraft:enchanted_book", [
                        "minecraft:enchanted_book",
                        { fluid: "tconstruct:liquid_soul", amount: FULL_BUCKET_AMMOUNT },
                    ]), //gathering the souls / def something that could be changed
                    event.recipes.createPressing(
                        "minecraft:enchanted_book",
                        "minecraft:enchanted_book"
                    ),
                ]
            )
            .transitionalItem("minecraft:enchanted_book")
            .loops(1);
                                                            
            .createSequencedAssembly(
                ["minecraft:book"],
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:1s}]}',),
                [
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "dustrial_decor:wrapped_chains",
                        "dustrial_decor:wrapped_chains",
                    ]),
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:experience_bottle",
                        "minecraft:experience_bottle",
                    ]), // insert crystal here / def something that could be changed
                    event.recipes.createFilling("minecraft:enchanted_book", [
                        "minecraft:enchanted_book",
                        { fluid: "tconstruct:liquid_soul", amount: FULL_BUCKET_AMMOUNT },
                    ]), //gathering the souls / def something that could be changed
                    event.recipes.createPressing(
                        "minecraft:enchanted_book",
                        "minecraft:enchanted_book"
                    ),
                ]
            )
            .transitionalItem("minecraft:enchanted_book")
            .loops(1);
                                                                        
            .createSequencedAssembly(
                ["minecraft:book"],
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:1s}]}',),
                [
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:soul_lantern",
                        "minecraft:soul_lantern",
                    ]),
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:experience_bottle",
                        "minecraft:experience_bottle",
                    ]), // insert crystal here / def something that could be changed
                    event.recipes.createFilling("minecraft:enchanted_book", [
                        "minecraft:enchanted_book",
                        { fluid: "tconstruct:liquid_soul", amount: FULL_BUCKET_AMMOUNT },
                    ]), //gathering the souls / def something that could be changed
                    event.recipes.createPressing(
                        "minecraft:enchanted_book",
                        "minecraft:enchanted_book"
                    ),
                ]
            )
            .transitionalItem("minecraft:enchanted_book")
            .loops(1);
                                                                                    
            .createSequencedAssembly(
                ["minecraft:book"],
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:1s}]}',),
                [
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "techreborn:silver_plate",
                        "techreborn:silver_plate",
                    ]),
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:experience_bottle",
                        "minecraft:experience_bottle",
                    ]), // insert crystal here / def something that could be changed
                    event.recipes.createFilling("minecraft:enchanted_book", [
                        "minecraft:enchanted_book",
                        { fluid: "tconstruct:liquid_soul", amount: FULL_BUCKET_AMMOUNT },
                    ]), //gathering the souls / def something that could be changed
                    event.recipes.createPressing(
                        "minecraft:enchanted_book",
                        "minecraft:enchanted_book"
                    ),
                ]
            )
            .transitionalItem("minecraft:enchanted_book")
            .loops(1);
                                                                                                
            .createSequencedAssembly(
                ["minecraft:book"],
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:silk_touch",lvl:1s}]}',),
                [
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "tconstruct:silky_cloth",
                        "tconstruct:silky_cloth",
                    ]),
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:experience_bottle",
                        "minecraft:experience_bottle",
                    ]), // insert crystal here / def something that could be changed
                    event.recipes.createFilling("minecraft:enchanted_book", [
                        "minecraft:enchanted_book",
                        { fluid: "tconstruct:liquid_soul", amount: FULL_BUCKET_AMMOUNT },
                    ]), //gathering the souls / def something that could be changed
                    event.recipes.createPressing(
                        "minecraft:enchanted_book",
                        "minecraft:enchanted_book"
                    ),
                ]
            )
            .transitionalItem("minecraft:enchanted_book")
            .loops(1);
                                                                                        
            .createSequencedAssembly(
                ["minecraft:book"],
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:silk_touch",lvl:1s}]}',),
                [
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "tconstruct:silky_cloth",
                        "tconstruct:silky_cloth",
                    ]),
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:experience_bottle",
                        "minecraft:experience_bottle",
                    ]), // insert crystal here / def something that could be changed
                    event.recipes.createFilling("minecraft:enchanted_book", [
                        "minecraft:enchanted_book",
                        { fluid: "tconstruct:liquid_soul", amount: FULL_BUCKET_AMMOUNT },
                    ]), //gathering the souls / def something that could be changed
                    event.recipes.createPressing(
                        "minecraft:enchanted_book",
                        "minecraft:enchanted_book"
                    ),
                ]
            )
            .transitionalItem("minecraft:enchanted_book")
            .loops(1);
                                                                                                    
            .createSequencedAssembly(
                ["minecraft:book"],
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:1s}]}',),
                [
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "create:diving_helmet",
                        "create:diving_helmet",
                    ]),
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:experience_bottle",
                        "minecraft:experience_bottle",
                    ]), // insert crystal here / def something that could be changed
                    event.recipes.createFilling("minecraft:enchanted_book", [
                        "minecraft:enchanted_book",
                        { fluid: "tconstruct:liquid_soul", amount: FULL_BUCKET_AMMOUNT },
                    ]), //gathering the souls / def something that could be changed
                    event.recipes.createPressing(
                        "minecraft:enchanted_book",
                        "minecraft:enchanted_book"
                    ),
                ]
            )
            .transitionalItem("minecraft:enchanted_book")
            .loops(1);
                                                                                                                
            .createSequencedAssembly(
                ["minecraft:book"],
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:1s}]}',),
                [
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:lever",
                        "minecraft:lever",
                    ]),
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:experience_bottle",
                        "minecraft:experience_bottle",
                    ]), // insert crystal here / def something that could be changed
                    event.recipes.createFilling("minecraft:enchanted_book", [
                        "minecraft:enchanted_book",
                        { fluid: "tconstruct:liquid_soul", amount: FULL_BUCKET_AMMOUNT },
                    ]), //gathering the souls / def something that could be changed
                    event.recipes.createPressing(
                        "minecraft:enchanted_book",
                        "minecraft:enchanted_book"
                    ),
                ]
            )
            .transitionalItem("minecraft:enchanted_book")
            .loops(1);
                                                                                                                            
            .createSequencedAssembly(
                ["minecraft:book"],
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:punch",lvl:1s}]}',),
                [
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "create:brass_hand",
                        "create:brass_hand",
                    ]),
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:experience_bottle",
                        "minecraft:experience_bottle",
                    ]), // insert crystal here / def something that could be changed
                    event.recipes.createFilling("minecraft:enchanted_book", [
                        "minecraft:enchanted_book",
                        { fluid: "tconstruct:liquid_soul", amount: FULL_BUCKET_AMMOUNT },
                    ]), //gathering the souls / def something that could be changed
                    event.recipes.createPressing(
                        "minecraft:enchanted_book",
                        "minecraft:enchanted_book"
                    ),
                ]
            )
            .transitionalItem("minecraft:enchanted_book")
            .loops(1);
                                                                                                                                        
            .createSequencedAssembly(
                ["minecraft:book"],
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:1s}]}',),
                [
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:gunpowder",
                        "minecraft:gunpowder",
                    ]),
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:experience_bottle",
                        "minecraft:experience_bottle",
                    ]), // insert crystal here / def something that could be changed
                    event.recipes.createFilling("minecraft:enchanted_book", [
                        "minecraft:enchanted_book",
                        { fluid: "tconstruct:liquid_soul", amount: FULL_BUCKET_AMMOUNT },
                    ]), //gathering the souls / def something that could be changed
                    event.recipes.createPressing(
                        "minecraft:enchanted_book",
                        "minecraft:enchanted_book"
                    ),
                ]
            )
            .transitionalItem("minecraft:enchanted_book")
            .loops(1);
                                                                                                                                                    
            .createSequencedAssembly(
                ["minecraft:book"],
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:1s}]}',),
                [
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:piston",
                        "minecraft:piston",
                    ]),
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:experience_bottle",
                        "minecraft:experience_bottle",
                    ]), // insert crystal here / def something that could be changed
                    event.recipes.createFilling("minecraft:enchanted_book", [
                        "minecraft:enchanted_book",
                        { fluid: "tconstruct:liquid_soul", amount: FULL_BUCKET_AMMOUNT },
                    ]), //gathering the souls / def something that could be changed
                    event.recipes.createPressing(
                        "minecraft:enchanted_book",
                        "minecraft:enchanted_book"
                    ),
                ]
            )
            .transitionalItem("minecraft:enchanted_book")
            .loops(1);
                                                                                                                                                                
            .createSequencedAssembly(
                ["minecraft:book"],
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:multishot",lvl:1s}]}',),
                [
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:crossbow",
                        "minecraft:crossbow",
                    ]),
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:experience_bottle",
                        "minecraft:experience_bottle",
                    ]), // insert crystal here / def something that could be changed
                    event.recipes.createFilling("minecraft:enchanted_book", [
                        "minecraft:enchanted_book",
                        { fluid: "tconstruct:liquid_soul", amount: FULL_BUCKET_AMMOUNT },
                    ]), //gathering the souls / def something that could be changed
                    event.recipes.createPressing(
                        "minecraft:enchanted_book",
                        "minecraft:enchanted_book"
                    ),
                ]
            )
            .transitionalItem("minecraft:enchanted_book")
            .loops(1);
                                                                                                                                                                            
            .createSequencedAssembly(
                ["minecraft:book"],
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:1s}]}',),
                [
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "ad_astra:calorite_ingot",
                        "ad_astra:calorite_ingot",
                    ]),
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:experience_bottle",
                        "minecraft:experience_bottle",
                    ]), // insert crystal here / def something that could be changed
                    event.recipes.createFilling("minecraft:enchanted_book", [
                        "minecraft:enchanted_book",
                        { fluid: "tconstruct:liquid_soul", amount: FULL_BUCKET_AMMOUNT },
                    ]), //gathering the souls / def something that could be changed
                    event.recipes.createPressing(
                        "minecraft:enchanted_book",
                        "minecraft:enchanted_book"
                    ),
                ]
            )
            .transitionalItem("minecraft:enchanted_book")
            .loops(1);
                                                                                                                                                                                        
            .createSequencedAssembly(
                ["minecraft:book"],
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:knockback",lvl:1s}]}',),
                [
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:tnt",
                        "minecraft:tnt",
                    ]),
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:experience_bottle",
                        "minecraft:experience_bottle",
                    ]), // insert crystal here / def something that could be changed
                    event.recipes.createFilling("minecraft:enchanted_book", [
                        "minecraft:enchanted_book",
                        { fluid: "tconstruct:liquid_soul", amount: FULL_BUCKET_AMMOUNT },
                    ]), //gathering the souls / def something that could be changed
                    event.recipes.createPressing(
                        "minecraft:enchanted_book",
                        "minecraft:enchanted_book"
                    ),
                ]
            )
            .transitionalItem("minecraft:enchanted_book")
            .loops(1);
                                                                                                                                                                                                    
            .createSequencedAssembly(
                ["minecraft:book"],
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:infinity",lvl:1s}]}',),
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
                        "minecraft:experience_bottle",
                        "minecraft:experience_bottle",
                    ]), // insert crystal here / def something that could be changed
                    event.recipes.createFilling("minecraft:enchanted_book", [
                        "minecraft:enchanted_book",
                        { fluid: "tconstruct:liquid_soul", amount: FULL_BUCKET_AMMOUNT },
                    ]), //gathering the souls / def something that could be changed
                    event.recipes.createPressing(
                        "minecraft:enchanted_book",
                        "minecraft:enchanted_book"
                    ),
                ]
            )
            .transitionalItem("minecraft:enchanted_book")
            .loops(1);
                                                                                                                                                                                                    
            .createSequencedAssembly(
                ["minecraft:book"],
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:1s}]}',),
                [
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:blue_ice",
                        "minecraft:blue_ice",
                    ]),
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:experience_bottle",
                        "minecraft:experience_bottle",
                    ]), // insert crystal here / def something that could be changed
                    event.recipes.createFilling("minecraft:enchanted_book", [
                        "minecraft:enchanted_book",
                        { fluid: "tconstruct:liquid_soul", amount: FULL_BUCKET_AMMOUNT },
                    ]), //gathering the souls / def something that could be changed
                    event.recipes.createPressing(
                        "minecraft:enchanted_book",
                        "minecraft:enchanted_book"
                    ),
                ]
            )
                                                                                                                                                                                                                
            .createSequencedAssembly(
                ["minecraft:book"],
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:1s}]}',),
                [
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "tconstruct:jeweled_apple",
                        "tconstruct:jeweled_apple",
                    ]),
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:experience_bottle",
                        "minecraft:experience_bottle",
                    ]), // insert crystal here / def something that could be changed
                    event.recipes.createFilling("minecraft:enchanted_book", [
                        "minecraft:enchanted_book",
                        { fluid: "tconstruct:liquid_soul", amount: FULL_BUCKET_AMMOUNT },
                    ]), //gathering the souls / def something that could be changed
                    event.recipes.createPressing(
                        "minecraft:enchanted_book",
                        "minecraft:enchanted_book"
                    ),
                ]
            )
                                                                                                                                                                                                                            
            .createSequencedAssembly(
                ["minecraft:book"],
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:flame",lvl:1s}]}',),
                [
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:blaze_powder",
                        "minecraft:blaze_powder",
                    ]),
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:experience_bottle",
                        "minecraft:experience_bottle",
                    ]), // insert crystal here / def something that could be changed
                    event.recipes.createFilling("minecraft:enchanted_book", [
                        "minecraft:enchanted_book",
                        { fluid: "tconstruct:liquid_soul", amount: FULL_BUCKET_AMMOUNT },
                    ]), //gathering the souls / def something that could be changed
                    event.recipes.createPressing(
                        "minecraft:enchanted_book",
                        "minecraft:enchanted_book"
                    ),
                ]
            )
                                                                                                                                                                                                                                        
            .createSequencedAssembly(
                ["minecraft:book"],
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:1s}]}',),
                [
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:blaze_rod",
                        "minecraft:blaze_rod",
                    ]),
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:experience_bottle",
                        "minecraft:experience_bottle",
                    ]), // insert crystal here / def something that could be changed
                    event.recipes.createFilling("minecraft:enchanted_book", [
                        "minecraft:enchanted_book",
                        { fluid: "tconstruct:liquid_soul", amount: FULL_BUCKET_AMMOUNT },
                    ]), //gathering the souls / def something that could be changed
                    event.recipes.createPressing(
                        "minecraft:enchanted_book",
                        "minecraft:enchanted_book"
                    ),
                ]
            )
                                                                                                                                                                                                                                                    
            .createSequencedAssembly(
                ["minecraft:book"],
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:1s}]}',),
                [
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:white_bed",
                        "minecraft:white_bed",
                    ]),
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:experience_bottle",
                        "minecraft:experience_bottle",
                    ]), // insert crystal here / def something that could be changed
                    event.recipes.createFilling("minecraft:enchanted_book", [
                        "minecraft:enchanted_book",
                        { fluid: "tconstruct:liquid_soul", amount: FULL_BUCKET_AMMOUNT },
                    ]), //gathering the souls / def something that could be changed
                    event.recipes.createPressing(
                        "minecraft:enchanted_book",
                        "minecraft:enchanted_book"
                    ),
                ]
            )
                                                                                                                                                                                                                                                                
            .createSequencedAssembly(
                ["minecraft:book"],
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:1s}]}',),
                [
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        Item.of("minecraft:potion", '{Potion:"minecraft:swiftness"}' ,),
                        Item.of("minecraft:potion", '{Potion:"minecraft:swiftness"}' ,),
                    ]),
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:experience_bottle",
                        "minecraft:experience_bottle",
                    ]), // insert crystal here / def something that could be changed
                    event.recipes.createFilling("minecraft:enchanted_book", [
                        "minecraft:enchanted_book",
                        { fluid: "tconstruct:liquid_soul", amount: FULL_BUCKET_AMMOUNT },
                    ]), //gathering the souls / def something that could be changed
                    event.recipes.createPressing(
                        "minecraft:enchanted_book",
                        "minecraft:enchanted_book"
                    ),
                ]
            )
                                                                                                                                                                                                                                                    
            .createSequencedAssembly(
                ["minecraft:book"],
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:depth_strider",lvl:1s}]}',),
                [
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "create:diving_boots",
                        "create:diving_boots",
                    ]),
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:experience_bottle",
                        "minecraft:experience_bottle",
                    ]), // insert crystal here / def something that could be changed
                    event.recipes.createFilling("minecraft:enchanted_book", [
                        "minecraft:enchanted_book",
                        { fluid: "tconstruct:liquid_soul", amount: FULL_BUCKET_AMMOUNT },
                    ]), //gathering the souls / def something that could be changed
                    event.recipes.createPressing(
                        "minecraft:enchanted_book",
                        "minecraft:enchanted_book"
                    ),
                ]
            )
                                                                                                                                                                                                                                                                
            .createSequencedAssembly(
                ["minecraft:book"],
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:aqua_affinity",lvl:1s}]}',),
                [
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "create:copper_backtank",
                        "create:copper_backtank",
                    ]),
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:experience_bottle",
                        "minecraft:experience_bottle",
                    ]), // insert crystal here / def something that could be changed
                    event.recipes.createFilling("minecraft:enchanted_book", [
                        "minecraft:enchanted_book",
                        { fluid: "tconstruct:liquid_soul", amount: FULL_BUCKET_AMMOUNT },
                    ]), //gathering the souls / def something that could be changed
                    event.recipes.createPressing(
                        "minecraft:enchanted_book",
                        "minecraft:enchanted_book"
                    ),
                ]
            )
                                                                                                                                                                                                                                                                            
            .createSequencedAssembly(
                ["minecraft:book"],
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:1s}]}',),
                [
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:spider_eye",
                        "minecraft:spider_eye",
                    ]),
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:experience_bottle",
                        "minecraft:experience_bottle",
                    ]), // insert crystal here / def something that could be changed
                    event.recipes.createFilling("minecraft:enchanted_book", [
                        "minecraft:enchanted_book",
                        { fluid: "tconstruct:liquid_soul", amount: FULL_BUCKET_AMMOUNT },
                    ]), //gathering the souls / def something that could be changed
                    event.recipes.createPressing(
                        "minecraft:enchanted_book",
                        "minecraft:enchanted_book"
                    ),
                ]
            )
                                                                                                                                                                                                                                                                                        
            .createSequencedAssembly(
                ["minecraft:book"],
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:1s}]}',),
                [
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "farmersdelight:cod_slice",
                        "farmersdelight:cod_slice",
                    ]),
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:experience_bottle",
                        "minecraft:experience_bottle",
                    ]), // insert crystal here / def something that could be changed
                    event.recipes.createFilling("minecraft:enchanted_book", [
                        "minecraft:enchanted_book",
                        { fluid: "tconstruct:liquid_soul", amount: FULL_BUCKET_AMMOUNT },
                    ]), //gathering the souls / def something that could be changed
                    event.recipes.createPressing(
                        "minecraft:enchanted_book",
                        "minecraft:enchanted_book"
                    ),
                ]
            )
                                                                                                                                                                                                                                                                                                    
            .createSequencedAssembly(
                ["minecraft:book"],
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:1s}]}',),
                [
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:golden_apple",
                        "minecraft:golden_apple",
                    ]),
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:experience_bottle",
                        "minecraft:experience_bottle",
                    ]), // insert crystal here / def something that could be changed
                    event.recipes.createFilling("minecraft:enchanted_book", [
                        "minecraft:enchanted_book",
                        { fluid: "tconstruct:liquid_soul", amount: FULL_BUCKET_AMMOUNT },
                    ]), //gathering the souls / def something that could be changed
                    event.recipes.createPressing(
                        "minecraft:enchanted_book",
                        "minecraft:enchanted_book"
                    ),
                ]
            )
                                                                                                                                                                                                                                                                                                                
            .createSequencedAssembly(
                ["minecraft:book"],
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:1s}]}',),
                [
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:sea_lantern",
                        "minecraft:sea_lantern",
                    ]),
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:experience_bottle",
                        "minecraft:experience_bottle",
                    ]), // insert crystal here / def something that could be changed
                    event.recipes.createFilling("minecraft:enchanted_book", [
                        "minecraft:enchanted_book",
                        { fluid: "tconstruct:liquid_soul", amount: FULL_BUCKET_AMMOUNT },
                    ]), //gathering the souls / def something that could be changed
                    event.recipes.createPressing(
                        "minecraft:enchanted_book",
                        "minecraft:enchanted_book"
                    ),
                ]
            )
                                                                                                                                                                                                                                                                                                                            
            .createSequencedAssembly(
                ["minecraft:book"],
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:1s}]}',),
                [
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:dark_prismarine",
                        "minecraft:dark_prismarine",
                    ]),
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:experience_bottle",
                        "minecraft:experience_bottle",
                    ]), // insert crystal here / def something that could be changed
                    event.recipes.createFilling("minecraft:enchanted_book", [
                        "minecraft:enchanted_book",
                        { fluid: "tconstruct:liquid_soul", amount: FULL_BUCKET_AMMOUNT },
                    ]), //gathering the souls / def something that could be changed
                    event.recipes.createPressing(
                        "minecraft:enchanted_book",
                        "minecraft:enchanted_book"
                    ),
                ]
            )
                                                                                                                                                                                                                                                                                                                                        
            .createSequencedAssembly(
                ["minecraft:book"],
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:1s}]}',),
                [
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:prismarine_shard",
                        "minecraft:prismarine_shard",
                    ]),
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:experience_bottle",
                        "minecraft:experience_bottle",
                    ]), // insert crystal here / def something that could be changed
                    event.recipes.createFilling("minecraft:enchanted_book", [
                        "minecraft:enchanted_book",
                        { fluid: "tconstruct:liquid_soul", amount: FULL_BUCKET_AMMOUNT },
                    ]), //gathering the souls / def something that could be changed
                    event.recipes.createPressing(
                        "minecraft:enchanted_book",
                        "minecraft:enchanted_book"
                    ),
                ]
            )
                                                                                                                                                                                                                                                                                                                                                    
            .createSequencedAssembly(
                ["minecraft:book"],
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:channeling",lvl:1s}]}',),
                [
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:lightning_rod",
                        "minecraft:lightning_rod",
                    ]),
                    event.recipes.createDeploying("minecraft:enchanted_book", [
                        "minecraft:experience_bottle",
                        "minecraft:experience_bottle",
                    ]), // insert crystal here / def something that could be changed
                    event.recipes.createFilling("minecraft:enchanted_book", [
                        "minecraft:enchanted_book",
                        { fluid: "tconstruct:liquid_soul", amount: FULL_BUCKET_AMMOUNT },
                    ]), //gathering the souls / def something that could be changed
                    event.recipes.createPressing(
                        "minecraft:enchanted_book",
                        "minecraft:enchanted_book"
                    ),
                ]
            )
});
