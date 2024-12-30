///// ITEM TOOLTIPS REGISTRY /////
let hasFired = false;
onEvent("item.tooltip", (e) => {
    if (hasFired) return;
    hasFired = true;
    const tooltips = [
        {
            item: "createastral:swift_andesite",
            tooltip: "tooltip.createastral.swift_andesite",
        },
        {
            item: "createastral:voidtouched_compound",
            tooltip: "tooltip.createastral.voidtouched_compound",
        },
        {
            item: "kubejs:broken_fire_resistant_fragile_sheet_block",
            tooltip: "tooltip.kubejs.broken_fire_resistant_fragile_sheet_block",
        },
        {
            item: "kubejs:fire_resistant_fragile_sheet_block",
            tooltip: "tooltip.kubejs.fire_resistant_fragile_sheet_block",
        },
        {
            item: "kubejs:fragile_sheet_block",
            tooltip: "tooltip.kubejs.fragile_sheet_block",
        },
        {
            item: "kubejs:broken_fragile_sheet_block",
            tooltip: "tooltip.kubejs.fragile_sheet_block",
        },
        {
            item: "createastral:uranium_residue",
            tooltip: "tooltip.createastral.uranium_residue",
        },
        {
            item: "tconstruct:smeltery_controller",
            tooltip: "tooltip.tconstruct.smeltery_controller",
        },
        {
            item: "create:blaze_cake",
            tooltip: "tooltip.create.blaze_cake",
        },
        {
            item: "yttr:gadolinite",
            tooltip: "tooltip.yttr.gadolinite",
        },
        {
            item: "yttr:yttrium_ingot",
            tooltip: "tooltip.yttr.gadolinite",
        },
        {
            item: "tconstruct:raw_cobalt",
            tooltip: "tooltip.tconstruct.raw_cobalt",
        },

        //Ad Astra tooltips
        {
            item: "ad_astra:space_helmet",
            tooltip: "tooltip.ad_astra.space_helmet",
        },
        {
            item: "ad_astra:space_suit",
            tooltip: "tooltip.ad_astra.space_helmet",
        },
        {
            item: "ad_astra:space_pants",
            tooltip: "tooltip.ad_astra.space_helmet",
        },
        {
            item: "ad_astra:space_boots",
            tooltip: "tooltip.ad_astra.space_helmet",
        },
        {
            item: "ad_astra:netherite_space_helmet",
            tooltip: "tooltip.ad_astra.netherite_space_helmet",
        },
        {
            item: "ad_astra:netherite_space_suit",
            tooltip: "tooltip.ad_astra.netherite_space_suit",
        },
        {
            item: "ad_astra:netherite_space_pants",
            tooltip: "tooltip.ad_astra.netherite_space_suit",
        },
        {
            item: "ad_astra:netherite_space_boots",
            tooltip: "tooltip.ad_astra.netherite_space_suit",
        },
        {
            item: "ad_astra:jet_suit_helmet",
            tooltip: "tooltip.ad_astra.jet_suit_helmet",
        },
        {
            item: "ad_astra:jet_suit",
            tooltip: "tooltip.ad_astra.jet_suit_helmet",
        },
        {
            item: "ad_astra:jet_suit_pants",
            tooltip: "tooltip.ad_astra.jet_suit_helmet",
        },
        {
            item: "ad_astra:jet_suit_boots",
            tooltip: "tooltip.ad_astra.jet_suit_helmet",
        },
        {
            item: "ad_astra:tier_1_rocket",
            tooltip: "tooltip.ad_astra.tier_1_rocket",
        },

        //KubeJS tooltips
        {
            item: "kubejs:shimmer",
            tooltip: "tooltip.kubejs.shimmer",
        }, //not done yet, need to find height of shimmer lakes
        {
            item: "kubejs:shimmer_bucket",
            tooltip: "tooltip.kubejs.shimmer_bucket",
        }, //not done yet, need to find height of shimmer lakes

        //Create tooltips
        {
            item: "create:blaze_burner",
            tooltip: "tooltip.create.blaze_burner",
        },
        {
            item: "create:empty_blaze_burner",
            tooltip: "tooltip.create.empty_blaze_burner",
        },
        {
            item: "create:mechanical_arm",
            tooltip: "tooltip.create.mechanical_arm",
        },

        //Create Astral tooltips
        {
            item: "createastral:bronze_block",
            tooltip: "tooltip.createastral.bronze_block",
        },
        {
            item: "createastral:seitan",
            tooltip: "tooltip.createastral.seitan",
        },

        //vanilla minecraft tooltips (information on ores goes down below)
        {
            item: "minecraft:ancient_debris",
            tooltip: "tooltip.minecraft.ancient_debris",
        },
        {
            item: "minecraft:blaze_rod",
            tooltip: "tooltip.minecraft.blaze_rod",
        },
        {
            item: "minecraft:flint_and_steel",
            tooltip: "tooltip.minecraft.flint_and_steel",
        },
        {
            item: "minecraft:nether_wart",
            tooltip: "tooltip.minecraft.nether_wart",
        },
        {
            item: "minecraft:obsidian",
            tooltip: "tooltip.minecraft.obsidian",
        },
        {
            item: "minecraft:rotten_flesh",
            tooltip: "tooltip.minecraft.rotten_flesh",
        },
        {
            item: "minecraft:soul_sand",
            tooltip: "tooltip.minecraft.soul_sand",
        },
        {
            item: "minecraft:leather",
            tooltip: "tooltip.minecraft.leather",
        },

        //Tech Reborn tooltips
        {
            item: "techreborn:uu_matter",
            tooltip: "tooltip.techreborn.uu_matter",
        }, //not done yet, need to find out rates
        {
            item: "techreborn:scrap",
            tooltip: "tooltip.techreborn.scrap",
        }, //not done yet, need to find out rates
        {
            item: "techreborn:basic_machine_casing",
            tooltip: "tooltip.techreborn.basic_machine_casing",
        },

        //Ores Tooltips
        {
            item: "ae2:quartz_ore",
            tooltip: "tooltip.ae2.quartz_ore",
        },
        {
            item: "ae2:deepslate_quartz_ore",
            tooltip: "tooltip.ae2.quartz_ore",
        },
        {
            item: "ae2:certus_quartz",
            tooltip: "tooltip.minecraft.nether_wart",
        },
        {
            item: "ae2:certus_quartz_dust",
            tooltip: "tooltip.ae2.quartz_ore",
        },

        {
            item: "techreborn:silver_ore",
            tooltip: "tooltip.techreborn.silver_ore",
        },
        {
            item: "techreborn:deepslate_silver_ore",
            tooltip: "tooltip.techreborn.silver_ore",
        },
        {
            item: "techreborn:raw_silver",
            tooltip: "tooltip.techreborn.silver_ore",
        },
        {
            item: "techreborn:silver_ingot",
            tooltip: "tooltip.techreborn.silver_ore",
        },
        {
            item: "techreborn:silver_nugget",
            tooltip: "tooltip.techreborn.silver_ore",
        },

        {
            item: "techreborn:lead_ore",
            tooltip: "tooltip.techreborn.lead_ore",
        },
        {
            item: "techreborn:deepslate_lead_ore",
            tooltip: "tooltip.techreborn.lead_ore",
        },
        {
            item: "techreborn:raw_lead",
            tooltip: "tooltip.techreborn.lead_ore",
        },
        {
            item: "techreborn:lead_ingot",
            tooltip: "tooltip.techreborn.lead_ore",
        },
        {
            item: "techreborn:lead_nugget",
            tooltip: "tooltip.techreborn.lead_ore",
        },

        {
            item: "techreborn:tin_ore",
            tooltip: "tooltip.techreborn.tin_ore",
        },
        {
            item: "techreborn:deepslate_tin_ore",
            tooltip: "tooltip.techreborn.tin_ore",
        },
        {
            item: "techreborn:raw_tin",
            tooltip: "tooltip.techreborn.tin_ore",
        },
        {
            item: "techreborn:tin_ingot",
            tooltip: "tooltip.techreborn.tin_ore",
        },
        {
            item: "techreborn:tin_nugget",
            tooltip: "tooltip.techreborn.tin_ore",
        },

        //all ores coming soon

        //Other tooltips
        {
            item: "computercraft:disk",
            tooltip: "tooltip.computercraft.disk",
        },
        {
            item: "extractinator:extractinator",
            tooltip: "tooltip.extractinator.extractinator",
        },
        {
            item: "adoptafloppa:amazon_delivery",
            tooltip: "tooltip.adoptafloppa.amazon_delivery",
        },
        {
            item: "createastral:gyrodyne_blueprint",
            tooltip: "tooltip.createastral.gyrodyne_blueprint",
        },
        {
            item: "createastral:quadrocopter_blueprint",
            tooltip: "tooltip.createastral.quadrocopter_blueprint",
        },
        {
            item: "createastral:airship_blueprint",
            tooltip: "tooltip.createastral.airship_blueprint",
        },
        {
            item: "createastral:biplane_blueprint",
            tooltip: "tooltip.createastral.biplane_blueprint",
        },
        {
            item: "astralfoods:shimmered_rabbit_stew",
            tooltip: "tooltip.astralfoods.shimmered_rabbit_stew",
        },
        {
            item: "astralfoods:astral_sauce",
            tooltip: "tooltip.astralfoods.astral_sauce",
        },
        {
            item: "astralfoods:dipped_potato",
            tooltip: "tooltip.astralfoods.dipped_potato",
        },
        {
            item: "createbigcannons:steel_screw_breech",
            tooltip: "tooltip.createbigcannons.steel_screw_breech",
        },
        {
            item: "createbigcannons:incomplete_steel_screw_breech",
            tooltip: "tooltip.createbigcannons.steel_screw_breech",
        },
        {
            item: "createbigcannons:nethersteel_screw_breech",
            tooltip: "tooltip.createbigcannons.steel_screw_breech",
        },
        {
            item: "createbigcannons:incomplete_nethersteel_screw_breech",
            tooltip: "tooltip.createbigcannons.steel_screw_breech",
        },
    ];

    tooltips.forEach((tooltip) => {
        e.addAdvanced(tooltip.item, (item, advanced, text) => {
            if (!e.isShift()) {
                text.add(1, [
                    Text.of(Component.translate("tooltip.hover.tip.1")).darkGreen(),
                    Text.of(Component.translate("tooltip.hover.tip.2")).green(),
                    Text.of(Component.translate("tooltip.hover.tip.3")).darkGreen(),
                ]);
            }
            if (e.isShift()) {
                text.add(1, [Text.of(Component.translate(tooltip.tooltip)).green()]);
            }
        });
    });
    e.addAdvanced("createastral:orcane", (item, advanced, text) => {
        if (!e.isShift()) {
            text.add(1, [
                Text.of(Component.translate("tooltip.hover.tip.1")).gold(),
                Text.of(Component.translate("tooltip.hover.tip.2")).yellow(),
                Text.of(Component.translate("tooltip.hover.tip.3")).gold(),
            ]);
        }
        if (e.isShift()) {
            text.add(1, [Text.of(Component.translate("tooltip.createastral.orcane.1")).gold()]);
            text.add(2, [Text.of(Component.translate("tooltip.createastral.orcane.2")).white()]);
        }
    });
    e.addAdvanced("astraladditions:fragile_item", (item, advanced, text) => {
        if (!e.isShift()) {
            text.add(1, [
                Text.of(Component.translate("tooltip.hover.warning.1")).red(),
                Text.of(Component.translate("tooltip.hover.warning.2")).red(),
                Text.of(Component.translate("tooltip.hover.warning.3")).red(),
            ]);
        }
        if (e.isShift()) {
            text.add(1, [Text.of(Component.translate("tooltip.astraladditions.fragile_item")).red()]);
        }
    });
    e.addAdvanced("astraladditions:fragile_item_2", (item, advanced, text) => {
        if (!e.isShift()) {
            text.add(1, [
                Text.of(Component.translate("tooltip.hover.warning.1")).red(),
                Text.of(Component.translate("tooltip.hover.warning.2")).red(),
                Text.of(Component.translate("tooltip.hover.warning.3")).red(),
            ]);
        }
        if (e.isShift()) {
            text.add(1, [Text.of(Component.translate("tooltip.astraladditions.fragile_item")).red()]);
        }
    });
    e.addAdvanced("astraladditions:fragile_item_3", (item, advanced, text) => {
        if (!e.isShift()) {
            text.add(1, [
                Text.of(Component.translate("tooltip.hover.warning.1")).red(),
                Text.of(Component.translate("tooltip.hover.warning.2")).red(),
                Text.of(Component.translate("tooltip.hover.warning.3")).red(),
            ]);
        }
        if (e.isShift()) {
            text.add(1, [Text.of(Component.translate("tooltip.astraladditions.fragile_item")).red()]);
        }
    });
    // Custom drawer upgrades
    for (const [item, mutliplier] of Object.entries(drawer_multipliers)) {
        e.add([item], Text.gray(Component.translate("tooltip.drawer.upgrade")).append(Text.green(`${mutliplier}x`)));
    }
    // Standard drawer up/downgrades
    e.add(
        "extended_drawers:downgrade",
        Text.gray(Component.translate("tooltip.extended_drawers.downgrade.1"))
            .append(Text.red(Component.translate("tooltip.extended_drawers.downgrade.2")))
            .append(Text.gray(Component.translate("tooltip.dot")))
    );
    e.add(
        "minecraft:lava_bucket",
        Text.gray(Component.translate("tooltip.minecraft.lava_bucket.1"))
            .append(Text.red(Component.translate("tooltip.minecraft.lava_bucket.2")))
            .append(Text.gray(Component.translate("tooltip.dot")))
    );
    e.add(
        "minecraft:black_dye",
        Text.gray(Component.translate("tooltip.minecraft.black_dye.1"))
            .append(Text.white(Component.translate("tooltip.minecraft.black_dye.2")))
            .append(Text.gray(Component.translate("tooltip.dot")))
    );
    e.add(
        "extended_drawers:lock",
        Text.gray(Component.translate("tooltip.extended_drawers.lock.1"))
            .append(Text.yellow(Component.translate("tooltip.extended_drawers.lock.2")))
            .append(Text.gray(Component.translate("tooltip.extended_drawers.lock.3")))
    );
});
