onEvent("recipes", (event) => {


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
                    extra: "minecraft:iron_nugget",
                },
                {
                    name: "silver",
                    extra: "create:zinc_nugget"
                },
                {
                    name: "lead",
                    extra: "minecraft:coal",
                },
            ],
            suffix: "storage_block",
            crushed_prefix: "create"
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
                    extra: "techreborn:lead_nugget"
                },
                {name: "calorite", extra: ""},
            ],
            suffix: "block",
            crushed_prefix: "createastral"
        },
        {
            mod: "yttr",
            ores: [
                {
                    name: "gadolinite",
                    extra: "techreborn:silver_nugget"
                },
            ],
            suffix: "block",
            crushed_prefix: "createastral"
        },
        {
            mod: "create",
            ores: [{name: "zinc", extra: ""}],
            suffix: "block",
            crushed_prefix: "create"
        },
        {
            mod: "minecraft",
            ores: [
                {name: "iron", extra: ""},
                {name: "gold", extra: ""},
                {name: "copper", extra: ""},
            ],
            suffix: "block",
            crushed_prefix: "create"
        }
    ].forEach((mod) => {
        mod.ores.forEach((ore) => {
            let raw_ore = `${mod.mod}:raw_${ore.name}`;
            let raw_ore_block = `${mod.mod}:raw_${ore.name}_${mod.suffix}`
            let crushed_ore = `${mod.crushed_prefix}:crushed_raw_${ore.name}`;

            // remove the normal create crushing recipes for ores
            event.remove({
                type: "create:crushing",
                input: raw_ore_block,
                output: crushed_ore
            });
            event.remove({
                type: "create:crushing",
                input: raw_ore,
                output: crushed_ore
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
        coal: {name: "minecraft:coal", count: 1},
        iron: {name: "minecraft:raw_iron", count: 1},
        copper: {name: "minecraft:raw_copper", count: 5},
        gold: {name: "minecraft:raw_gold", count: 1},
        redstone: {name: "minecraft:redstone", count: 6},
        emerald: {name: "minecraft:emerald", count: 1},
        lapis: {name: "minecraft:lapis_lazuli", count: 1},
        diamond: {name: "minecraft:diamond", count: 1},
        zinc: {name: "create:raw_zinc", count: 1},
        desh: {name: "ad_astra:raw_desh", count: 1},
        ostrum: {name: "ad_astra:raw_ostrum", count: 1},
        calorite: {name: "ad_astra:raw_calorite", count: 1},
        cheese: {name: "ad_astra:cheese", count: 1},
        ice_shard: {name: "ad_astra:ice_shard", count: 1},
        lead: {name: "techreborn:raw_lead", count: 1},
        silver: {name: "techreborn:raw_silver", count: 1},
        tin: {name: "techreborn:raw_tin", count: 1},
        yttr: {name: "yttr:raw_gadolinite", count: 1}
    };
    let ORES = [
        // Earth Ores
        {ore: "zinc", name: "create:zinc_ore", block: "minecraft:cobblestone", bonus: 0},
        {ore: "zinc", name: "create:deepslate_zinc_ore", block: "minecraft:cobbled_deepslate", bonus: 1},
        {ore: "tin", name: "techreborn:tin_ore", block: "minecraft:cobblestone", bonus: 0},
        {ore: "tin", name: "techreborn:deepslate_tin_ore", block: "minecraft:cobbled_deepslate", bonus: 1},

        // Tech Reborn Planet Ores
        {ore: "silver", name: "techreborn:silver_ore", block: "ad_astra:moon_cobblestone", bonus: 1},
        {ore: "silver", name: "techreborn:deepslate_silver_ore", block: "ad_astra:moon_cobblestone", bonus: 1},

        {ore: "lead", name: "techreborn:lead_ore", block: "ad_astra:mars_cobblestone", bonus: 1},
        {ore: "lead", name: "techreborn:deepslate_lead_ore", block: "ad_astra:mars_cobblestone", bonus: 1},

        // Misc
        {ore: "iron", name: "ad_astra:mercury_iron_ore", block: "ad_astra:mercury_cobblestone", bonus: 1},
        {ore: "yttr", name: "yttr:gadolinite", block: "ad_astra:mercury_cobblestone", bonus: 1},
    ];

    // vanilla ores
    ["coal", "iron", "copper", "gold", "redstone", "emerald", "lapis", "diamond"].forEach(ore => {
        ORES.push({ore: ore, name: `minecraft:${ore}_ore`, block: "minecraft:cobblestone", bonus: 0});
        ORES.push({
            ore: ore,
            name: `minecraft:deepslate_${ore}_ore`,
            block: `minecraft:cobbled_deepslate`,
            bonus: 1
        });
    });

    // ad astra deepslate (these aren't used I think?)
    ["desh", "ostrum", "calorite", "ice_shard"].forEach(ore => {
        ORES.push({
            ore: ore,
            name: `ad_astra:deepslate_${ore}_ore`,
            block: "minecraft:cobbled_deepslate",
            bonus: 1
        });
    });

    /// Ad Astra Planet's normal ores
    ["cheese", "desh", "iron", "ice_shard"].forEach(ore => {
        ORES.push({ore: ore, name: `ad_astra:moon_${ore}_ore`, block: "ad_astra:moon_cobblestone", bonus: 1});
    });
    ["iron", "diamond", "ostrum", "ice_shard"].forEach(ore => {
        ORES.push({ore: ore, name: `ad_astra:mars_${ore}_ore`, block: "ad_astra:mars_cobblestone", bonus: 1})
    });
    ["coal", "gold", "diamond", "calorite"].forEach(ore => {
        ORES.push({ore: ore, name: `ad_astra:venus_${ore}_ore`, block: "ad_astra:venus_cobblestone", bonus: 1})
    });
    ["ice_shard", "coal", "copper", "iron", "lapis"].forEach(ore => {
        ORES.push({ore: ore, name: `ad_astra:glacio_${ore}_ore`, block: "ad_astra:glacio_cobblestone", bonus: 1})
    })

    ORES.forEach(ore => {
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
                Item.of(ore.block).withChance(BLOCK_CHANCE)
            ],
            ore.name
        )
    });

    event.recipes.createCrushing(
        [
            "2x techreborn:galena_dust",
            Item.of("techreborn:galena_dust").withChance(0.5),
            Item.of("create:experience_nugget").withChance(0.5),
            Item.of("ad_astra:mercury_cobblestone").withChance(BLOCK_CHANCE)
        ],
        "techreborn:deepslate_galena_ore"
    );
});