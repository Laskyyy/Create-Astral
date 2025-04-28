onEvent("recipes", (event) => {
    //Replace with other netherrack inputs and outputs

    // Remove grinder calcite dust

    // input: "Item"
    // outputs: [
    //      ["Item", Chance],
    //      ["Item", Chance],
    //      ...
    [
        {
            input: "tconstruct:ender_slime_crystal_cluster",
            outputs: [
                ["3x tconstruct:ender_slime_crystal", 1],
                ["1x tconstruct:ender_slime_crystal", 0.5],
            ],
        },
        {
            input: "minecraft:packed_ice",
            outputs: [
                ["2x ad_astra:ice_shard", 1],
                ["1x ad_astra:ice_shard", 0.5],
            ],
        },
        {
            input: "minecraft:blue_ice",
            outputs: [
                ["9x ad_astra:ice_shard", 1],
                ["2x ad_astra:ice_shard", 0.66],
                ["1x ad_astra:ice_shard", 0.33],
            ],
        },
        {
            input: "minecraft:calcite",
            outputs: [["4x techreborn:calcite_dust", 1]],
        },
        {
            input: "minecraft:dead_tube_coral_block",
            outputs: [["1x techreborn:calcite_dust", 1]],
        },
        {
            input: "minecraft:dead_brain_coral_block",
            outputs: [["1x techreborn:calcite_dust", 1]],
        },
        {
            input: "minecraft:dead_bubble_coral_block",
            outputs: [["1x techreborn:calcite_dust", 1]],
        },
        {
            input: "minecraft:dead_fire_coral_block",
            outputs: [["1x techreborn:calcite_dust", 1]],
        },
        {
            input: "minecraft:dead_horn_coral_block",
            outputs: [["1x techreborn:calcite_dust", 1]],
        },
        {
            input: "minecraft:tube_coral_block",
            outputs: [
                ["1x minecraft:blue_dye", 1],
                ["2x minecraft:blue_dye", 0.5],
                ["1x minecraft:prismarine_shard", 0.1],
                ["1x minecraft:lapis_lazuli", 0.02],
                ["1x techreborn:calcite_dust", 0.1],
                ["1x minecraft:tube_coral", 0.25],
                ["1x minecraft:tube_coral_fan", 0.25],
            ],
        },
        {
            input: "minecraft:brain_coral_block",
            outputs: [
                ["1x minecraft:pink_dye", 1],
                ["2x minecraft:pink_dye", 0.5],
                ["1x tconstruct:pig_iron_nugget", 0.1],
                ["1x farmersdelight:ham", 0.02],
                ["1x techreborn:calcite_dust", 0.1],
                ["1x minecraft:brain_coral", 0.25],
                ["1x minecraft:brain_coral_fan", 0.25],
            ],
        },
        {
            input: "minecraft:bubble_coral_block",
            outputs: [
                ["1x minecraft:purple_dye", 1],
                ["2x minecraft:purple_dye", 0.5],
                ["1x minecraft:popped_chorus_fruit", 0.1],
                ["1x ae2:ender_dust", 0.2],
                ["1x techreborn:calcite_dust", 0.1],
                ["1x minecraft:bubble_coral", 0.25],
                ["1x minecraft:bubble_coral_fan", 0.25],
            ],
        },
        {
            input: "minecraft:fire_coral_block",
            outputs: [
                ["1x minecraft:red_dye", 1],
                ["2x minecraft:red_dye", 0.5],
                ["1x minecraft:blaze_powder", 0.05],
                ["1x tconstruct:blood_slime_ball", 0.05],
                ["1x techreborn:calcite_dust", 0.1],
                ["1x minecraft:fire_coral", 0.25],
                ["1x minecraft:fire_coral_fan", 0.25],
            ],
        },
        {
            input: "minecraft:horn_coral_block",
            outputs: [
                ["1x minecraft:yellow_dye", 1],
                ["2x minecraft:yellow_dye", 0.5],
                ["1x techreborn:sponge_piece", 0.15],
                ["1x minecraft:sea_pickle", 0.1],
                ["1x techreborn:calcite_dust", 0.1],
                ["1x minecraft:horn_coral", 0.25],
                ["1x minecraft:horn_coral_fan", 0.25],
            ],
        },
        {
            input: "minecraft:cobbled_deepslate",
            outputs: [
                ["create:zinc_nugget", 0.13],
                ["minecraft:coal", 0.05],
            ],
        },
        {
            input: "tconstruct:ender_slime_crystal_block",
            outputs: [["4x tconstruct:ender_slime_crystal", 1]],
        },
        //Diorite,Granite,Andesite Crushing
        {
            input: "minecraft:diorite",
            outputs: [
                ["minecraft:quartz", 1],
                ["techreborn:diorite_dust", 1],
                ["techreborn:andesite_dust", 1],
                ["minecraft:quartz", 0.25],
            ],
        },
        {
            input: "minecraft:flint",
            outputs: [
                ["techreborn:andesite_dust", 1],
                ["techreborn:flint_dust", 0.5],
            ],
        },
        {
            input: "minecraft:granite",
            outputs: [
                ["minecraft:red_sand", 1],
                ["techreborn:granite_dust", 1],
                ["techreborn:granite_dust", 0.5],
                ["minecraft:red_sand", 0.25],
            ],
        },
        {
            input: "minecraft:andesite",
            outputs: [
                ["minecraft:cobblestone", 1],
                ["techreborn:andesite_dust", 1],
                ["techreborn:andesite_dust", 0.9],
            ],
        },
        {
            input: "minecraft:glow_berries",
            outputs: [
                ["naturalist:glow_goop", 1],
                ["naturalist:glow_goop", 0.5],
            ],
        },
        {
            input: "minecraft:snow_block",
            outputs: [
                ["2x minecraft:snowball", 1],
                ["minecraft:snowball", 0.5],
            ],
        },
        //Netherack Crushing
        {
            input: "minecraft:netherrack",
            outputs: [
                ["techreborn:netherrack_dust", 1],
                ["techreborn:netherrack_dust", 0.5],
            ],
        },
        {
            input: "minecraft:warped_nylium",
            outputs: [
                ["techreborn:netherrack_dust", 1],
                ["techreborn:netherrack_dust", 0.5],
                ["minecraft:warped_fungus", 0.1],
            ],
        },
        {
            input: "minecraft:crimson_nylium",
            outputs: [
                ["techreborn:netherrack_dust", 1],
                ["techreborn:netherrack_dust", 0.5],
                ["minecraft:crimson_fungus", 0.1],
            ],
        },
        // warped fungi crushing
        {
            input: "minecraft:warped_wart_block",
            outputs: [
                ["minecraft:warped_roots", 1],
                ["minecraft:nether_sprouts", 0.25],
                ["minecraft:warped_fungus", 0.25],
            ],
        },
        {
            input: "minecraft:nether_wart_block",
            outputs: [
                ["minecraft:crimson_roots", 1],
                ["minecraft:nether_wart", 0.25],
                ["minecraft:crimson_fungus", 0.25],
            ],
        },
        {
            input: "minecraft:dripstone_block",
            outputs: [
                ["minecraft:clay_ball", 1],
                ["minecraft:clay_ball", 0.5],
            ],
        },
        /*
        {
            input: "#c:coral_blocks",
            outputs: [["techreborn:calcite_dust", 1]],
        },
        */

        // Ad Astra Crushing
        {
            input: "ad_astra:moon_stone",
            outputs: [["ad_astra:moon_sand", 1]],
        },
        {
            input: "ad_astra:moon_sand",
            outputs: [["minecraft:quartz", 0.05]],
        },
        {
            input: "ad_astra:mars_stone",
            outputs: [["ad_astra:mars_sand", 1]],
        },
        {
            input: "ad_astra:conglomerate",
            outputs: [["ad_astra:raw_ostrum", 0.07]],
        },
        {
            input: "ad_astra:infernal_spire_block",
            outputs: [
                ["minecraft:magma_block", 1],
                ["tconstruct:debris_nugget", 0.03],
            ],
        },
        // AE2 Fluix/Shimmer Crystal Crushing
        {
            input: "ae2:fluix_crystal",
            outputs: [["ae2:fluix_dust", 1]],
        },

        // concrete crushing into concrete powder

        {
            input: "minecraft:white_concrete",
            outputs: [["minecraft:white_concrete_powder", 1]],
        },
        {
            input: "minecraft:orange_concrete",
            outputs: [["minecraft:orange_concrete_powder", 1]],
        },
        {
            input: "minecraft:magenta_concrete",
            outputs: [["minecraft:magenta_concrete_powder", 1]],
        },
        {
            input: "minecraft:light_blue_concrete",
            outputs: [["minecraft:light_blue_concrete_powder", 1]],
        },
        {
            input: "minecraft:yellow_concrete",
            outputs: [["minecraft:yellow_concrete_powder", 1]],
        },
        {
            input: "minecraft:lime_concrete",
            outputs: [["minecraft:lime_concrete_powder", 1]],
        },
        {
            input: "minecraft:pink_concrete",
            outputs: [["minecraft:pink_concrete_powder", 1]],
        },
        {
            input: "minecraft:gray_concrete",
            outputs: [["minecraft:gray_concrete_powder", 1]],
        },
        {
            input: "minecraft:light_gray_concrete",
            outputs: [["minecraft:light_gray_concrete_powder", 1]],
        },
        {
            input: "minecraft:cyan_concrete",
            outputs: [["minecraft:cyan_concrete_powder", 1]],
        },
        {
            input: "minecraft:purple_concrete",
            outputs: [["minecraft:purple_concrete_powder", 1]],
        },
        {
            input: "minecraft:blue_concrete",
            outputs: [["minecraft:blue_concrete_powder", 1]],
        },
        {
            input: "minecraft:brown_concrete",
            outputs: [["minecraft:brown_concrete_powder", 1]],
        },
        {
            input: "minecraft:green_concrete",
            outputs: [["minecraft:green_concrete_powder", 1]],
        },
        {
            input: "minecraft:red_concrete",
            outputs: [["minecraft:red_concrete_powder", 1]],
        },
        {
            input: "minecraft:black_concrete",
            outputs: [["minecraft:black_concrete_powder", 1]],
        },
        {
            input: "yttr:ruined_cobblestone",
            outputs: [
                ["yttr:rubble", 1],
                ["yttr:rubble", 0.75],
                ["tconstruct:debris_nugget", 0.1],
            ],
        },
        {
            input: "yttr:rubble",
            outputs: [
                ["tconstruct:debris_nugget", 1],
                ["techreborn:andesite_dust", 1],
                ["ad_astra:steel_nugget", 0.1],
                ["techreborn:bronze_nugget", 0.1],
            ],
        },
        {
            input: "createastral:monazite_crystal",
            outputs: [
                ["yttr:neodymium_dust", 1],
                ["createastral:crushed_raw_gadolinite", 1],
                ["yttr:neodymium_dust", 0.75],
                ["createastral:crushed_raw_gadolinite", 0.5],
                ["create:crushed_raw_iron", 0.5],
            ],
        },
        {
            input: "minecraft:soul_sand",
            outputs: [
                ["3x xpcrystals:soul_compound", 1],
                ["xpcrystals:soul_compound", 0.5],
            ],
        },
        {
            input: "minecraft:dried_kelp",
            outputs: [
                ["minecraft:gunpowder", 0.5],
                ["create:experience", 0.1],
            ],
        },
    ].forEach((recipe) => {
        let cleanoutputs = [];
        recipe.outputs.forEach((output) => {
            if (output[1] == 1) cleanoutputs.push(output[0]);
            else {
                cleanoutputs.push(Item.of(output[0]).withChance(output[1]));
            }
        });
        event.recipes.createCrushing(cleanoutputs, recipe.input).processingTime(recipe.time ?? 200);
    });

    // I have no idea what to do with this so I'm just putting it here - _Shortman
    // Originally part of 'crushing.js' made by Max Norfolk
    //////////////////////////////////////////////////
    // Ores
    //////////////////////////////////////////////////

    const CRUSHING_ORE_BONUS_ORE_YIELD = 0.33;
    const CRUSHING_ORE_BONUS_XP_CHUNKS = 0.33;
    const EXTRA_CHANCE = 0.2;
    /// Raw
    [
        {
            mod: "techreborn",
            ores: [
                {
                    name: "tin",
                    extra: "techreborn:silver_nugget",
                },
                {
                    name: "silver",
                    extra: "create:zinc_nugget",
                },
                {
                    name: "lead",
                    extra: "minecraft:coal",
                },
            ],
            suffix: "storage_block",
            crushed_prefix: "create",
        },
        {
            mod: "ad_astra",
            ores: [
                {
                    name: "desh",
                    extra: "techreborn:silver_nugget",
                },
                {
                    name: "ostrum",
                    extra: "techreborn:lead_nugget",
                },
                { name: "calorite", extra: "" },
            ],
            suffix: "block",
            crushed_prefix: "createastral",
        },
        {
            mod: "yttr",
            ores: [
                {
                    name: "gadolinite",
                    extra: "techreborn:silver_nugget",
                },
            ],
            suffix: "block",
            crushed_prefix: "createastral",
        },
        {
            mod: "tconstruct",
            ores: [
                {
                    name: "cobalt",
                    extra: "techreborn:tin_nugget",
                },
            ],
            suffix: "block",
            crushed_prefix: "createastral",
        },
        {
            mod: "create",
            ores: [{ name: "zinc", extra: "" }],
            suffix: "block",
            crushed_prefix: "create",
        },
        {
            mod: "minecraft",
            ores: [
                { name: "iron", extra: "" },
                { name: "gold", extra: "" },
                { name: "copper", extra: "" },
            ],
            suffix: "block",
            crushed_prefix: "create",
        },
    ].forEach((mod) => {
        mod.ores.forEach((ore) => {
            let raw_ore = `${mod.mod}:raw_${ore.name}`;
            let raw_ore_block = `${mod.mod}:raw_${ore.name}_${mod.suffix}`;
            let crushed_ore = `${mod.crushed_prefix}:crushed_raw_${ore.name}`;

            // remove the normal create crushing recipes for ores
            event.remove({
                type: "create:crushing",
                input: raw_ore_block,
                output: crushed_ore,
            });
            event.remove({
                type: "create:crushing",
                input: raw_ore,
                output: crushed_ore,
            });

            let single_ore_output = [
                crushed_ore,
                Item.of(crushed_ore).withChance(CRUSHING_ORE_BONUS_ORE_YIELD),
                Item.of("create:experience_nugget").withChance(CRUSHING_ORE_BONUS_XP_CHUNKS),
            ];

            let multi_ore_output = [
                "9x " + crushed_ore,
                Item.of("9x " + crushed_ore).withChance(CRUSHING_ORE_BONUS_ORE_YIELD),
                Item.of("9x create:experience_nugget", 9).withChance(CRUSHING_ORE_BONUS_XP_CHUNKS),
            ];

            if (ore.extra !== "") {
                single_ore_output.push(Item.of(ore.extra).withChance(EXTRA_CHANCE));
                multi_ore_output.push(Item.of("9x " + ore.extra).withChance(EXTRA_CHANCE));
            }
            event.recipes.createCrushing(single_ore_output, raw_ore);
            event.recipes.createCrushing(multi_ore_output, raw_ore_block);
        });
    });

    /// Ore block from silktouch

    const BONUS_CRUSH_ORE = 0.75;
    const BLOCK_CHANCE = 0.12;

    // This map is how much you should get regularly from the ore (no bonuses)
    // format is
    const oreMap = {
        coal: { name: "minecraft:coal", count: 1 },
        iron: { name: "minecraft:raw_iron", count: 1 },
        copper: { name: "minecraft:raw_copper", count: 5 },
        gold: { name: "minecraft:raw_gold", count: 1 },
        redstone: { name: "minecraft:redstone", count: 6 },
        emerald: { name: "minecraft:emerald", count: 1 },
        lapis: { name: "minecraft:lapis_lazuli", count: 1 },
        diamond: { name: "minecraft:diamond", count: 1 },
        zinc: { name: "create:raw_zinc", count: 1 },
        desh: { name: "ad_astra:raw_desh", count: 1 },
        ostrum: { name: "ad_astra:raw_ostrum", count: 1 },
        calorite: { name: "ad_astra:raw_calorite", count: 1 },
        cheese: { name: "ad_astra:cheese", count: 1 },
        ice_shard: { name: "ad_astra:ice_shard", count: 1 },
        lead: { name: "techreborn:raw_lead", count: 1 },
        silver: { name: "techreborn:raw_silver", count: 1 },
        tin: { name: "techreborn:raw_tin", count: 1 },
        yttr: { name: "yttr:raw_gadolinite", count: 1 },
        cobalt: { name: "tconstruct:raw_cobalt", count: 1 },
    };
    let ORES = [
        // Earth Ores
        { ore: "zinc", name: "create:zinc_ore", block: "minecraft:cobblestone", bonus: 0 },
        { ore: "zinc", name: "create:deepslate_zinc_ore", block: "minecraft:cobbled_deepslate", bonus: 1 },
        { ore: "tin", name: "techreborn:tin_ore", block: "minecraft:cobblestone", bonus: 0 },
        { ore: "tin", name: "techreborn:deepslate_tin_ore", block: "minecraft:cobbled_deepslate", bonus: 1 },

        // Tech Reborn Planet Ores
        { ore: "silver", name: "techreborn:silver_ore", block: "ad_astra:moon_cobblestone", bonus: 1 },
        { ore: "silver", name: "techreborn:deepslate_silver_ore", block: "ad_astra:moon_cobblestone", bonus: 1 },

        { ore: "lead", name: "techreborn:lead_ore", block: "ad_astra:mars_cobblestone", bonus: 1 },
        { ore: "lead", name: "techreborn:deepslate_lead_ore", block: "ad_astra:mars_cobblestone", bonus: 1 },

        // Misc
        { ore: "iron", name: "ad_astra:mercury_iron_ore", block: "ad_astra:mercury_cobblestone", bonus: 1 },
        { ore: "yttr", name: "yttr:gadolinite", block: "ad_astra:mercury_cobblestone", bonus: 1 },

        { ore: "cobalt", name: "tconstruct:cobalt_ore", block: "ad_astra:moon_cobblestone", bonus: 1 },
    ];

    // vanilla ores
    ["coal", "iron", "copper", "gold", "redstone", "emerald", "lapis", "diamond"].forEach((ore) => {
        ORES.push({ ore: ore, name: `minecraft:${ore}_ore`, block: "minecraft:cobblestone", bonus: 0 });
        ORES.push({
            ore: ore,
            name: `minecraft:deepslate_${ore}_ore`,
            block: `minecraft:cobbled_deepslate`,
            bonus: 1,
        });
    });

    // ad astra deepslate (these aren't used I think?)
    ["desh", "ostrum", "calorite", "ice_shard"].forEach((ore) => {
        ORES.push({
            ore: ore,
            name: `ad_astra:deepslate_${ore}_ore`,
            block: "minecraft:cobbled_deepslate",
            bonus: 1,
        });
    });

    /// Ad Astra Planet's normal ores
    ["cheese", "desh", "iron", "ice_shard"].forEach((ore) => {
        ORES.push({ ore: ore, name: `ad_astra:moon_${ore}_ore`, block: "ad_astra:moon_cobblestone", bonus: 1 });
    });
    ["iron", "diamond", "ostrum", "ice_shard"].forEach((ore) => {
        ORES.push({ ore: ore, name: `ad_astra:mars_${ore}_ore`, block: "ad_astra:mars_cobblestone", bonus: 1 });
    });
    ["coal", "gold", "diamond", "calorite"].forEach((ore) => {
        ORES.push({ ore: ore, name: `ad_astra:venus_${ore}_ore`, block: "ad_astra:venus_cobblestone", bonus: 1 });
    });
    ["ice_shard", "coal", "copper", "iron", "lapis"].forEach((ore) => {
        ORES.push({ ore: ore, name: `ad_astra:glacio_${ore}_ore`, block: "ad_astra:glacio_cobblestone", bonus: 1 });
    });

    ORES.forEach((ore) => {
        let count = oreMap[ore.ore].count + ore.bonus;
        let res = oreMap[ore.ore].name;
        event.remove({
            type: "create:crushing",
            input: ore.name,
        });
        event.recipes.createCrushing(
            [
                `${count}x ${res}`,
                Item.of(res).withChance(BONUS_CRUSH_ORE),
                Item.of("create:experience_nugget").withChance(BONUS_CRUSH_ORE),
                Item.of(ore.block).withChance(BLOCK_CHANCE),
            ],
            ore.name
        );
    });

    event.recipes.createCrushing(
        [
            "2x techreborn:galena_dust",
            Item.of("techreborn:galena_dust").withChance(0.5),
            Item.of("create:experience_nugget").withChance(0.5),
            Item.of("ad_astra:mercury_cobblestone").withChance(BLOCK_CHANCE),
        ],
        "techreborn:deepslate_galena_ore"
    );

    // LakyCrushingRecipes from resourcegen.js
    [
        {
            input: "create:ochrum",
            outputs: [
                ["minecraft:raw_gold", 1],
                ["minecraft:raw_gold", 0.5],
                ["minecraft:glowstone_dust", 0.1],
                ["minecraft:sand", 0.5],
                ["ad_astra:desh_nugget", 0.4],
            ],
        },
        {
            input: "create:crimsite",
            outputs: [
                ["minecraft:raw_iron", 1],
                ["minecraft:raw_iron", 0.5],
                ["minecraft:redstone", 0.1],
                ["minecraft:granite", 0.5],
                ["minecraft:red_dye", 0.25],
            ],
        },
        {
            input: "create:limestone",
            outputs: [
                ["minecraft:clay_ball", 1],
                ["techreborn:raw_tin", 0.4],
                ["createastral:lime", 0.7],
            ],
        },
        {
            input: "create:veridium",
            outputs: [
                ["minecraft:raw_copper", 1],
                ["minecraft:raw_copper", 0.9],
                ["minecraft:sand", 0.5],
                ["minecraft:green_dye", 0.25],
                ["minecraft:emerald", 0.1],
            ],
        },
        {
            input: "create:asurine",
            outputs: [
                ["tconstruct:raw_cobalt", 1],
                ["tconstruct:raw_cobalt", 0.2],
                ["minecraft:lapis_lazuli", 0.5],
                ["techreborn:lazurite_dust", 0.1],
                ["minecraft:blue_dye", 0.25],
                ["minecraft:prismarine_crystals", 0.2],
            ],
        },
        {
            input: "create:scorchia",
            outputs: [
                ["create:raw_zinc", 1],
                ["create:powdered_obsidian", 0.9],
                ["minecraft:black_dye", 0.4],
                ["minecraft:tuff", 0.25],
            ],
        },
        {
            input: "ad_astra:mars_cobblestone",
            outputs: [
                ["ad_astra:raw_ostrum", 0.04],
                ["ad_astra:infernal_spire_block", 0.02],
                ["ad_astra:mars_sand", 1],
            ],
        },
        {
            input: "ad_astra:mercury_cobblestone",
            outputs: [
                ["ad_astra:raw_calorite", 0.04],
                ["minecraft:basalt", 0.2],
                ["minecraft:blackstone", 0.2],
                ["minecraft:magma_block", 0.08],
            ],
        },
        {
            input: "ad_astra:glacio_cobblestone",
            outputs: [
                ["minecraft:blue_ice", 0.3],
                ["minecraft:packed_ice", 0.5],
                ["minecraft:snow_block", 0.3],
                ["createastral:prismatic_crystal", 0.05],
            ],
        },
        {
            input: "ad_astra:moon_cobblestone",
            outputs: [
                ["ad_astra:raw_desh", 0.03],
                ["ad_astra:moon_sand", 1],
                ["minecraft:tuff", 0.25],
            ],
        },
        {
            input: "minecraft:blackstone",
            outputs: [
                ["create:powdered_obsidian", 0.3],
                ["tconstruct:seared_cobble", 0.3],
            ],
        },
        {
            input: "create:scoria",
            outputs: [
                ["minecraft:magma_cream", 0.4],
                ["minecraft:magma_block", 0.5],
                ["minecraft:tuff", 0.3],
                ["minecraft:basalt", 0.1],
            ],
        },
        {
            input: "minecraft:tuff",
            outputs: [
                ["minecraft:charcoal", 0.33],
                ["minecraft:basalt", 0.25],
            ],
        },
        {
            input: "minecraft:prismarine",
            outputs: [
                ["minecraft:lapis_lazuli", 0.5],
                ["minecraft:prismarine_crystals", 0.75],
            ],
        },
        {
            input: "minecraft:basalt",
            outputs: [
                ["techreborn:basalt_dust", 1],
                ["techreborn:andesite_dust", 0.5],
            ],
        },
        {
            input: "dbe:vanta_black",
            outputs: [["minecraft:black_dye", 1]],
        },
        {
            input: "astraladditions:lune_shroom",
            outputs: [["minecraft:lapis_lazuli", 1]],
        },
    ].forEach((recipe) => {
        let cleanoutputs = [];
        recipe.outputs.forEach((output) => {
            if (output[1] == 1) cleanoutputs.push(output[0]);
            else {
                cleanoutputs.push(Item.of(output[0]).withChance(output[1]));
            }
        });
        event.recipes.createCrushing(cleanoutputs, recipe.input);
    });
});
