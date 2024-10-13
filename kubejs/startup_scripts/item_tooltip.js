///// ITEM TOOLTIPS REGISTRY /////
let hasFired = false;
onEvent("item.tooltip", (e) => {
    if (hasFired) return;
    hasFired = true;
    const tooltips = [
        {
            item: "createastral:swift_andesite",
            tooltip: "Place below a block to grant it a speed boost similar to andesite pavement.",
        },
        {
            item: "createastral:voidtouched_compound",
            tooltip: "Throw chromatic compound into void fluid to obtain.",
        },
        {
            item: "kubejs:broken_fire_resistant_fragile_sheet_block",
            tooltip: "Throw lingering fire resistance onto fragile sheet blocks to create.",
        },
        {
            item: "kubejs:fire_resistant_fragile_sheet_block",
            tooltip: "Throw lingering fire resistance onto fragile sheet blocks to create.",
        },
        {
            item: "createastral:uranium_residue",
            tooltip: "Use in a distillation tower mixed with mercury for molten uranium.",
        },
        {
            item: "tconstruct:smeltery_controller",
            tooltip: "Disabled, use a foundry in chapter 3.",
        },
        {
            item: "create:blaze_cake",
            tooltip: "Obtained in Chapter 4!",
        },
        {
            item: "yttr:gadolinite",
            tooltip: "Gated by reaching Mercury! (Chapter 5)",
        },
        {
            item: "yttr:yttrium_ingot",
            tooltip: "Gated by reaching Mercury! (Chapter 5)",
        },
        {
            item: "tconstruct:raw_cobalt",
            tooltip: "Gated by reaching the Moon!.",
        },

        //Ad Astra tooltips
        {
            item: "ad_astra:space_helmet",
            tooltip: "Can be repaired using Sturdy Sheets or Steel Ingots.",
        },
        {
            item: "ad_astra:space_suit",
            tooltip: "Can be repaired using Sturdy Sheets or Steel Ingots.",
        },
        {
            item: "ad_astra:space_pants",
            tooltip: "Can be repaired using Sturdy Sheets or Steel Ingots.",
        },
        {
            item: "ad_astra:space_boots",
            tooltip: "Can be repaired using Sturdy Sheets or Steel Ingots.",
        },
        {
            item: "ad_astra:netherite_space_helmet",
            tooltip: "Can be repaired with Netherite ingots.",
        },
        {
            item: "ad_astra:netherite_space_suit",
            tooltip: "Can be repaired with Netherite Ingots.",
        },
        {
            item: "ad_astra:netherite_space_pants",
            tooltip: "Can be repaired with Netherite Ingots.",
        },
        {
            item: "ad_astra:netherite_space_boots",
            tooltip: "Can be repaired with Netherite Ingots.",
        },
        {
            item: "ad_astra:jet_suit_helmet",
            tooltip: "Can be repaired with Calorite Ingots.",
        },
        {
            item: "ad_astra:jet_suit",
            tooltip: "Can be repaired with Calorite Ingots.",
        },
        {
            item: "ad_astra:jet_suit_pants",
            tooltip: "Can be repaired with Calorite Ingots.",
        },
        {
            item: "ad_astra:jet_suit_boots",
            tooltip: "Can be repaired with Calorite Ingots.",
        },
        {
            item: "ad_astra:tier_1_rocket",
            tooltip: "Disabled, use the custom portal instead.",
        },

        //KubeJS tooltips
        {
            item: "kubejs:shimmer",
            tooltip: 'Use the Explorers Compass to look for underground "Shimmer Lakes"',
        }, //not done yet, need to find height of shimmer lakes
        {
            item: "kubejs:shimmer_bucket",
            tooltip: 'Use the Explorers Compass to look for underground "Shimmer Lakes"',
        }, //not done yet, need to find height of shimmer lakes

        //Create tooltips
        {
            item: "create:blaze_burner",
            tooltip: 'Blazes are found on the moon inside of the "Lunar Powerplant" structure.',
        },
        {
            item: "create:empty_blaze_burner",
            tooltip: 'Blazes are found on the moon inside of the "Lunar Powerplant" structure.',
        },
        {
            item: "create:mechanical_arm",
            tooltip: "Use a hopper to place this in a mechanical crafter.",
        },

        //Create Astral tooltips
        {
            item: "createastral:bronze_block",
            tooltip: "Texture courtesy of Create: Alloyed.",
        },
        {
            item: "createastral:seitan",
            tooltip: "MEAT - Multipurpose, Ethical And True",
        },

        //vanilla minecraft tooltips (information on ores goes down below)
        {
            item: "minecraft:ancient_debris",
            tooltip:
                "Found underground on the moon and mars. Can be obtained from bastions and infernal spires on mars.",
        },
        {
            item: "minecraft:blaze_rod",
            tooltip: 'Blazes are found on the moon inside of the "Lunar Powerplant" structure.',
        },
        {
            item: "minecraft:flint_and_steel",
            tooltip:
                "The Nether is Disabled. Nether content is distributed across planets. Follow the questbook for more information.",
        },
        {
            item: "minecraft:nether_wart",
            tooltip: "Found underground on the moon.",
        },
        {
            item: "minecraft:obsidian",
            tooltip:
                "Nether is Disabled. Nether content is distributed across planets. Follow the questbook for more information.",
        },
        {
            item: "minecraft:rotten_flesh",
            tooltip: "Can be smelted into leather.",
        },
        {
            item: "minecraft:soul_sand",
            tooltip:
                "Found underground on the moon or by bulk haunting sand (lighting moon sand on fire makes soul flame).",
        },
        {
            item: "minecraft:leather",
            tooltip: "Can be made by smelting rotten flesh.",
        },

        //Tech Reborn tooltips
        {
            item: "techreborn:uu_matter",
            tooltip: "Material made in Chapter 5 using the Shimmer Refinery multiblock.",
        }, //not done yet, need to find out rates
        {
            item: "techreborn:scrap",
            tooltip: "Made by putting any item into a recycler.",
        }, //not done yet, need to find out rates
        {
            item: "techreborn:basic_machine_casing",
            tooltip: "Crafted with either Lead plates, Silver Plates, or Iron Sheets.",
        },

        //Ores Tooltips
        { item: "ae2:quartz_ore", tooltip: "Found underground on the moon" },
        {
            item: "ae2:deepslate_quartz_ore",
            tooltip: "Found underground on the moon",
        },
        {
            item: "ae2:certus_quartz",
            tooltip: "Found underground on the moon.",
        },
        {
            item: "ae2:certus_quartz_dust",
            tooltip: "Found underground on the moon",
        },

        {
            item: "techreborn:silver_ore",
            tooltip: "This metal is found on the moon, most commonly at Y=65",
        },
        {
            item: "techreborn:deepslate_silver_ore",
            tooltip: "This metal is found on the moon, most commonly at Y=65",
        },
        {
            item: "techreborn:raw_silver",
            tooltip: "This metal is found on the moon, most commonly at Y=65",
        },
        {
            item: "techreborn:silver_ingot",
            tooltip: "This metal is found on the moon, most commonly at Y=65",
        },
        {
            item: "techreborn:silver_nugget",
            tooltip: "This metal is found on the moon, most commonly at Y=65",
        },

        {
            item: "techreborn:lead_ore",
            tooltip: "This metal is found on mars, most commonly at Y=50",
        },
        {
            item: "techreborn:deepslate_lead_ore",
            tooltip: "This metal is found on mars, most commonly at Y=50",
        },
        {
            item: "techreborn:raw_lead",
            tooltip: "This metal is found on mars, most commonly at Y=50",
        },
        {
            item: "techreborn:lead_ingot",
            tooltip: "This metal is found on mars, most commonly at Y=50",
        },
        {
            item: "techreborn:lead_nugget",
            tooltip: "This metal is found on mars, most commonly at Y=50",
        },

        {
            item: "techreborn:tin_ore",
            tooltip: "This metal is found in the overworld, most commonly at Y=70 ",
        },
        {
            item: "techreborn:deepslate_tin_ore",
            tooltip: "This metal is found in the overworld, most commonly at Y=70 ",
        },
        {
            item: "techreborn:raw_tin",
            tooltip: "This metal is found in the overworld, most commonly at Y=70 ",
        },
        {
            item: "techreborn:tin_ingot",
            tooltip: "This metal is found in the overworld, most commonly at Y=70 ",
        },
        {
            item: "techreborn:tin_nugget",
            tooltip: "This metal is found in the overworld, most commonly at Y=70 ",
        },

        //all ores coming soon

        //Other tooltips
        {
            item: "computercraft:disk",
            tooltip: "This recipe is not correct, use redstone instead of rose quartz.",
        },
        {
            item: "extractinator:extractinator",
            tooltip: "Purely decorative. No functional use. Not a Terraria reference.",
        },
        {
            item: "adoptafloppa:amazon_delivery",
            tooltip: 'A note is attached: "Feed this thing fish once a day or else it will explode. Good luck.".',
        },
        {
            item: "createastral:gyrodyne_blueprint",
            tooltip: "An ancient schematic from a lost civilisation. Perhaps it can be found in old facilities?",
        },
        {
            item: "createastral:quadrocopter_blueprint",
            tooltip: "An ancient schematic from a lost civilisation. Perhaps it can be found in old facilities?",
        },
        {
            item: "createastral:airship_blueprint",
            tooltip: "An ancient schematic from a lost civilisation. Perhaps it can be found in old facilities?",
        },
        {
            item: "createastral:biplane_blueprint",
            tooltip: "An ancient schematic from a lost civilisation. Perhaps it can be found in old facilities?",
        },
        {
            item: "astralfoods:shimmered_rabbit_stew",
            tooltip: "Suggested by NikWas!",
        },
        {
            item: "astralfoods:astral_sauce",
            tooltip: "Where did the bowl come? The singularity can fabricate them of course!",
        },
    ];

    tooltips.forEach((tooltip) => {
        e.addAdvanced(tooltip.item, (item, advanced, text) => {
            if (!e.isShift()) {
                text.add(1, [
                    Text.of("Hold ").darkGreen(),
                    Text.of("Shift ").green(),
                    Text.of("to see more info.").darkGreen(),
                ]);
            }
            if (e.isShift()) {
                text.add(1, [Text.of(tooltip.tooltip).green()]);
            }
        });
    });
    e.addAdvanced("createastral:orcane", (item, advanced, text) => {
        if (!e.isShift()) {
            text.add(1, [Text.of("Hold ").gold(), Text.of("Shift ").yellow(), Text.of("to see more info.").gold()]);
        }
        if (e.isShift()) {
            text.add(1, [
                Text.of(
                    "If you are new to create, use pondering or online guides. The pack is almost exclusively centered around it and Tech Reborn. The quest book has some items that give a general idea of what has changed / what is included, in the order of when to take note of them, however the pack can be played without following it exactly, so do what you enjoy."
                ).gold(),
            ]);
            text.add(2, [
                Text.of(
                    "A major change you *might* want to be aware of. The nether does not exist. Do not even try to make the portal as it will not function. All nether related items are distributed throughout the pack (mostly planets)"
                ).white(),
            ]);
        }
    });
    e.addAdvanced("astraladditions:fragile_item", (item, advanced, text) => {
        if (!e.isShift()) {
            text.add(1, [Text.of("WARNING: Hold ").red(), Text.of("Shift ").red(), Text.of("to see more info.").red()]);
        }
        if (e.isShift()) {
            text.add(1, [
                Text.of("Breaks when held in player inventories, it must be moved with logistical methods!").red(),
            ]);
        }
    });
    e.addAdvanced("astraladditions:fragile_item_2", (item, advanced, text) => {
        if (!e.isShift()) {
            text.add(1, [Text.of("WARNING: Hold ").red(), Text.of("Shift ").red(), Text.of("to see more info.").red()]);
        }
        if (e.isShift()) {
            text.add(1, [
                Text.of("Breaks when held in player inventories, it must be moved with logistical methods!").red(),
            ]);
        }
    });
    e.addAdvanced("astraladditions:fragile_item_3", (item, advanced, text) => {
        if (!e.isShift()) {
            text.add(1, [Text.of("WARNING: Hold ").red(), Text.of("Shift ").red(), Text.of("to see more info.").red()]);
        }
        if (e.isShift()) {
            text.add(1, [
                Text.of("Breaks when held in player inventories, it must be moved with logistical methods!").red(),
            ]);
        }
    });
    // Custom drawer upgrades
    for (const [item, mutliplier] of Object.entries(drawer_multipliers)) {
        e.add([item], Text.gray("Drawer Slot capacity: ").append(Text.green(`${mutliplier}x`)));
    }
    // Standard drawer up/downgrades
    e.add(
        "extended_drawers:downgrade",
        Text.gray("Reduces the Drawer Slot capacity to ").append(Text.red("64")).append(Text.gray("."))
    );
    e.add(
        "minecraft:lava_bucket",
        Text.gray("Shift-Right-click the Drawer Slot to make that slot ")
            .append(Text.red("void excess items"))
            .append(Text.gray("."))
    );
    e.add(
        "minecraft:black_dye",
        Text.gray("Shift-Right-click the Drawer Slot to ").append(Text.white("hide the label")).append(Text.gray("."))
    );
    e.add(
        "extended_drawers:lock",
        Text.gray("Shift-Right-click the Drawer Slot to ")
            .append(Text.yellow("lock it"))
            .append(Text.gray(" to the item inside."))
    );
});
