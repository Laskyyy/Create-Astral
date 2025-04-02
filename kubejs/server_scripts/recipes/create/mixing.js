onEvent("recipes", (event) => {
    // Biofuel rework

    // Output: string
    // Input: Array of items, may include fluid objects or item strings
    // Heat: "" = no heat, "heated", or "superheated"
    // Time: Mixing time in ticks
    [
        {
            output: [
                {
                    fluid: "estrogen:molten_amethyst",
                    amount: INGOT,
                },
            ],
            input: [
                {
                    fluid: "tconstruct:molten_amethyst",
                    amount: BUCKET,
                },
                "astraladditions:bulba_root",
            ],
            heat: "",
            time: 210,
        },
        {
            output: ["create:tree_fertilizer"],
            input: ["#minecraft:saplings", "#c:coral_fans", "minecraft:bone_meal"],
            heat: "",
            time: 180,
        },
        {
            output: [
                {
                    fluid: "kubejs:shimmer",
                    amount: BUCKET / 9,
                },
            ],
            input: ["ae2:fluix_crystal", "minecraft:glowstone_dust", "tconstruct:amethyst_bronze_nugget"],
            heat: "heated",
            time: 180,
        },
        {
            output: [
                {
                    fluid: "kubejs:shimmer",
                    amount: BUCKET,
                },
            ],
            input: ["4x createastral:shimmer_marimo", "naturalist:glow_goop", "astraladditions:lune_shroom"],
            heat: "heated",
            time: 180,
        },
        {
            output: ["astraladditions:shimmer_heart"],
            input: [
                "32x createastral:shimmer_marimo",
                "minecraft:heart_of_the_sea",
                {
                    fluid: "xpcrystals:soul",
                    amount: BUCKET,
                },
            ],
            heat: "heated",
            time: 180,
        },
        {
            output: ["astraladditions:shimmer_blaze_rod"],
            input: ["32x createastral:shimmer_marimo", "2x minecraft:blaze_rod", "tconstruct:blazing_bone"],
            heat: "heated",
            time: 180,
        },
        {
            output: [{ fluid: "tconstruct:ender_slime", amount: 250 * mB }],
            input: [
                "createastral:ender_marimo",
                "ae2:ender_dust",
                { fluid: "tconstruct:earth_slime", amount: 125 * mB },
            ],
            heat: "heated",
            time: 180,
        },
        {
            output: ["1x createastral:shimmer_marimo"],
            input: [
                "createastral:marimo",
                "ae2:fluix_crystal",
                {
                    fluid: "kubejs:shimmer",
                    amount: BUCKET / 2,
                },
            ],
            heat: "",
            time: 180,
        },
        {
            output: ["2x createastral:shimmer_marimo"],
            input: [
                "createastral:shimmer_marimo",
                "ae2:fluix_crystal_seed",
                {
                    fluid: "kubejs:shimmer",
                    amount: INGOT,
                },
            ],
            heat: "",
            time: 180,
        },
        {
            output: ["1x createastral:ender_marimo"],
            input: [
                "createastral:marimo",
                "tconstruct:ender_slime_crystal",
                {
                    fluid: "kubejs:shimmer",
                    amount: BUCKET / 2,
                },
            ],
            heat: "",
            time: 180,
        },
        {
            output: ["2x createastral:ender_marimo"],
            input: [
                "createastral:ender_marimo",
                "tconstruct:ender_slime_grass_seeds",
                {
                    fluid: "astraladditions:sputum",
                    amount: INGOT,
                },
            ],
            heat: "",
            time: 180,
        },
        {
            output: ["1x createastral:snowy_marimo"],
            input: [
                "createastral:marimo",
                "createastral:prismatic_crystal",
                {
                    fluid: "kubejs:shimmer",
                    amount: BUCKET / 2,
                },
            ],
            heat: "",
            time: 180,
        },
        {
            output: ["2x createastral:snowy_marimo"],
            input: [
                "createastral:snowy_marimo",
                "ad_astra:ice_shard",
                {
                    fluid: "minecraft:water",
                    amount: BUCKET / 2,
                },
            ],
            heat: "",
            time: 180,
        },
        {
            output: [
                Item.of("2x createastral:marimo").withChance(0.4),
                Item.of("2x createastral:moonset_marimo").withChance(0.6),
                {
                    fluid: "minecraft:water",
                    amount: BUCKET,
                },
            ],
            input: [
                "createastral:marimo",
                "createastral:moonset_marimo",
                {
                    fluid: "minecraft:water",
                    amount: BUCKET,
                },
            ],
            heat: "",
            time: 60,
        },
        {
            output: ["1x createastral:moonset_marimo"],
            input: [
                "createastral:marimo",
                "astraladditions:moonset_crystal",
                {
                    fluid: "kubejs:shimmer",
                    amount: BUCKET / 2,
                },
            ],
            heat: "",
            time: 180,
        },
        {
            output: [
                "2x createastral:marimo",
                {
                    fluid: "minecraft:water",
                    amount: BUCKET / 2,
                },
            ],
            input: [
                "createastral:marimo",
                {
                    fluid: "minecraft:water",
                    amount: BUCKET / 2,
                },
            ],
            heat: "",
            time: 60,
        },
        {
            output: [
                {
                    fluid: "milk:still_milk",
                    amount: BUCKET / 2,
                },
                "cookingforblockheads:cow_jar",
            ],
            input: ["cookingforblockheads:cow_jar"],
            heat: "",
            time: 60,
        },
        {
            output: [
                {
                    fluid: "estrogen:horse_urine",
                    amount: BUCKET / 2,
                },
                "createastral:horse",
            ],
            input: ["createastral:horse"],
            heat: "",
            time: 60,
        },
        {
            output: "8x create:blaze_cake",
            input: ["yttr:delicace", { fluid: "kubejs:metabolic_broth", amount: BUCKET / 4 }],
            heat: "superheated",
            time: 100,
        },
        {
            output: "minecraft:feather",
            input: ["minecraft:stick", "minecraft:string"],
            heat: "",
            time: 100,
        },
        {
            output: "minecraft:bone_meal",
            input: ["techreborn:calcite_dust", { fluid: "minecraft:water", amount: 100 * mB }],
            heat: "",
            time: 100,
        },
        {
            output: "2x minecraft:soul_soil",
            input: ["minecraft:dirt", "minecraft:soul_sand"],
            heat: "",
            time: 100,
        },
        {
            output: "minecraft:small_amethyst_bud",
            input: ["techreborn:amethyst_dust", "ae2:certus_crystal_seed"],
            heat: "",
            time: 200,
        },
        {
            output: "minecraft:rotten_flesh",
            input: [
                "#c:raw_meat",
                {
                    fluid: "tconstruct:blood",
                    amount: 25 * mB,
                },
            ],
            heat: "",
            time: 100,
        },
        {
            output: "minecraft:shroomlight",
            input: [
                [
                    "minecraft:brown_mushroom_block",
                    "minecraft:red_mushroom_block",
                    "minecraft:mushroom_stem",
                    "minecraft:nether_wart_block",
                    "minecraft:warped_wart_block",
                ],
                "naturalist:glow_goop",
                {
                    fluid: "create:honey",
                    amount: 25 * mB,
                },
            ],
            heat: "",
            time: 100,
        },
        {
            output: "minecraft:shroomlight",
            input: [
                [
                    "minecraft:brown_mushroom_block",
                    "minecraft:red_mushroom_block",
                    "minecraft:mushroom_stem",
                    "minecraft:nether_wart_block",
                    "minecraft:warped_wart_block",
                ],
                "2x minecraft:glowstone_dust",
                {
                    fluid: "create:honey",
                    amount: 25 * mB,
                },
            ],
            heat: "",
            time: 100,
        },
        {
            output: "minecraft:ice",
            input: [
                "2x minecraft:snowball",
                {
                    fluid: "minecraft:water",
                    amount: BUCKET * 0.5,
                },
            ],
            heat: "",
            time: 100,
        },
        {
            output: Item.of("custommachinery:custom_machine_item", {
                machine: "createastral:channeling_transformer",
            }),
            input: [
                "createaddition:tesla_coil",
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:channeling",lvl:1s}]}'),
                { fluid: "tconstruct:molten_netherite", amount: BUCKET },
            ],
        },
        {
            output: {
                fluid: "kubejs:smite",
                amount: 5 * mB,
            },
            input: [
                {
                    fluid: "minecraft:lava",
                    amount: 100 * mB,
                },
                "2x minecraft:basalt",
            ],
            heat: "heated",
            time: 400,
        },
        //mixing recipes for coral
        {
            output: "minecraft:tube_coral_block",
            input: [
                ["minecraft:tropical_fish", "minecraft:pufferfish"],
                "3x minecraft:kelp",
                "minecraft:blue_dye",
                {
                    fluid: "kubejs:shimmer",
                    amount: 100 * mB,
                },
            ],
            heat: "",
            time: 100,
        },
        {
            output: "minecraft:brain_coral_block",
            input: [
                ["minecraft:tropical_fish", "minecraft:pufferfish"],
                "3x minecraft:kelp",
                "minecraft:pink_dye",
                {
                    fluid: "kubejs:shimmer",
                    amount: 100 * mB,
                },
            ],
            heat: "",
            time: 100,
        },
        {
            output: "minecraft:bubble_coral_block",
            input: [
                ["minecraft:tropical_fish", "minecraft:pufferfish"],
                "3x minecraft:kelp",
                "minecraft:purple_dye",
                {
                    fluid: "kubejs:shimmer",
                    amount: 100 * mB,
                },
            ],
            heat: "",
            time: 100,
        },
        {
            output: "minecraft:fire_coral_block",
            input: [
                ["minecraft:tropical_fish", "minecraft:pufferfish"],
                "3x minecraft:kelp",
                "minecraft:red_dye",
                {
                    fluid: "kubejs:shimmer",
                    amount: 100 * mB,
                },
            ],
            heat: "",
            time: 100,
        },
        {
            output: "minecraft:horn_coral_block",
            input: [
                ["minecraft:tropical_fish", "minecraft:pufferfish"],
                "3x minecraft:kelp",
                "minecraft:yellow_dye",
                {
                    fluid: "kubejs:shimmer",
                    amount: 100 * mB,
                },
            ],
            heat: "",
            time: 100,
        },
        {
            output: "2x minecraft:blaze_powder",
            input: ["minecraft:blaze_rod"],
            heat: "",
            time: null,
        },
        {
            output: "techreborn:plantball",
            input: [
                "9x #minecraft:leaves",
                {
                    fluid: "createaddition:seed_oil",
                    amount: 500 * mB,
                },
            ],
            heat: "heated",
            time: 1000,
        },
        {
            output: "techreborn:plantball",
            input: [
                "9x #c:grass_variants",
                {
                    fluid: "createaddition:seed_oil",
                    amount: 500 * mB,
                },
            ],
            heat: "heated",
            time: 1000,
        },
        {
            output: "techreborn:plantball",
            input: [
                "9x minecraft:kelp",
                {
                    fluid: "createaddition:seed_oil",
                    amount: 500 * mB,
                },
            ],
            heat: "heated",
            time: 1000,
        },
        {
            output: "techreborn:plantball",
            input: [
                "9x createastral:marimo",
                {
                    fluid: "createaddition:seed_oil",
                    amount: 500 * mB,
                },
            ],
            heat: "heated",
            time: 1000,
        },
        {
            output: "techreborn:plantball",
            input: [
                "9x minecraft:sugar_cane",
                {
                    fluid: "createaddition:seed_oil",
                    amount: 500 * mB,
                },
            ],
            heat: "heated",
            time: 1000,
        },
        {
            output: "createastral:ender_mush",
            input: [
                "2x tconstruct:ender_slime_crystal",
                {
                    fluid: "astraladditions:sputum",
                    amount: 500 * mB,
                },
            ],
            heat: "superheated",
            time: 1000,
        },
        {
            output: "techreborn:plantball",
            input: [
                "3x farmersdelight:straw",
                {
                    fluid: "createaddition:seed_oil",
                    amount: 500 * mB,
                },
            ],
            heat: "heated",
            time: 1000,
        },
        {
            output: [
                Item.of("minecraft:tube_coral").withChance(0.2),
                Item.of("minecraft:brain_coral").withChance(0.2),
                Item.of("minecraft:bubble_coral").withChance(0.2),
                Item.of("minecraft:fire_coral").withChance(0.2),
                Item.of("minecraft:horn_coral").withChance(0.2),
            ],
            input: [
                "4x minecraft:sea_pickle",
                {
                    fluid: "minecraft:water",
                    amount: 250 * mB,
                },
            ],
            heat: "",
            time: 50,
        },
        {
            output: [
                Item.of("minecraft:tube_coral_fan").withChance(0.2),
                Item.of("minecraft:brain_coral_fan").withChance(0.2),
                Item.of("minecraft:bubble_coral_fan").withChance(0.2),
                Item.of("minecraft:fire_coral_fan").withChance(0.2),
                Item.of("minecraft:horn_coral_fan").withChance(0.2),
            ],
            input: [
                "4x minecraft:dried_kelp",
                {
                    fluid: "minecraft:water",
                    amount: 250 * mB,
                },
            ],
            heat: "",
            time: 50,
        },
        {
            output: "3x tconstruct:nether_grout",
            input: [
                "minecraft:magma_cream",
                "minecraft:soul_sand",
                "create:scoria",
                "#c:dusts/obsidian",
                "#c:dusts/obsidian",
                "#c:dusts/obsidian",
            ],
            heat: "heated",
            time: 700,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:mending",lvl:1s}]}'),
            input: ["16x minecraft:book", "64x create:experience_nugget"],
            heat: "heated",
            time: 700,
        },
        {
            output: Fluid.of("kubejs:blast-resistant_cement", BUCKET),
            input: [
                "#c:concrete_powder",
                "2x createastral:lime",
                "3x techreborn:steel_dust",
                { fluid: "minecraft:water", amount: BUCKET },
            ],
            heat: "heated",
            time: 1000,
        },
        {
            output: Fluid.of("create:honey", 100 * mB),
            input: ["techreborn:sap", "minecraft:sugar"],
            heat: "",
            time: 100,
        },
        {
            output: "3x dustrial_decor:cast_iron_billet",
            input: ["minecraft:iron_ingot", "2x create:andesite_alloy", "minecraft:coal"],
            heat: "",
            time: null,
        },
        {
            output: "techreborn:rubber",
            input: ["techreborn:sap"],
            heat: "",
            time: 50,
        },
        {
            output: "4x techreborn:machine_parts",
            input: ["ad_astra:steel_plate", "techreborn:carbon_mesh", "8x #c:wires"],
            heat: "superheated",
            time: 400,
        },
        {
            output: "1x techreborn:carbon_mesh",
            input: ["2x techreborn:carbon_fiber"],
            heat: "superheated",
            time: 400,
        },
        {
            output: Fluid.of("tconstruct:molten_brass", INGOT * 2),
            input: [
                { fluid: "tconstruct:molten_copper", amount: INGOT },
                { fluid: "tconstruct:molten_zinc", amount: INGOT },
            ],
            heat: "heated",
            time: 300,
        },
        {
            output: Fluid.of("tconstruct:molten_brass", INGOT * 2),
            input: ["9x create:copper_nugget", "9x create:zinc_nugget"],
            heat: "heated",
            time: 300,
        },
        {
            output: Fluid.of("tconstruct:molten_brass", INGOT * 4),
            input: ["minecraft:copper_ingot", "create:zinc_ingot"],
            heat: "superheated",
            time: 300,
        },
        {
            output: Fluid.of("techreborn:silicon", mB * 25),
            input: ["#c:sand"],
            heat: "heated",
            time: 30,
        },
        {
            output: Fluid.of("techreborn:silicon", mB * 200),
            input: ["ae2:certus_quartz_dust"],
            heat: "heated",
            time: 100,
        },
        {
            output: Fluid.of("techreborn:silicon", mB * 400),
            input: ["ae2:certus_quartz_crystal"],
            heat: "superheated",
            time: 200,
        },
        {
            output: Fluid.of("tconstruct:molten_amethyst_bronze", INGOT * 4),
            input: ["createastral:bronze_ingot", "minecraft:amethyst_shard"],
            heat: "superheated",
            time: 100,
        },
        {
            output: Fluid.of("tconstruct:molten_amethyst_bronze", INGOT * 2),
            input: ["9x techreborn:bronze_nugget", "minecraft:amethyst_shard"],
            heat: "heated",
            time: 100,
        },
        {
            output: Fluid.of("tconstruct:molten_amethyst_bronze", INGOT * 2),
            input: [
                { fluid: "tconstruct:molten_bronze", amount: INGOT },
                { fluid: "tconstruct:molten_amethyst", amount: INGOT },
            ],
            heat: "heated",
            time: 100,
        },
        {
            output: Fluid.of("tconstruct:molten_bronze", INGOT * 2),
            input: [
                { fluid: "tconstruct:molten_tin", amount: INGOT },
                { fluid: "tconstruct:molten_copper", amount: INGOT },
            ],
            heat: "",
            time: 100,
        },
        {
            output: Fluid.of("tconstruct:molten_rose_gold", INGOT * 2),
            input: ["9x minecraft:gold_nugget", "9x create:copper_nugget"],
            heat: "heated",
            time: 300,
        },
        {
            output: Fluid.of("tconstruct:molten_bronze", INGOT * 2),
            input: ["9x create:copper_nugget", "9x techreborn:tin_nugget"],
            heat: "",
            time: 300,
        },
        {
            output: Fluid.of("tconstruct:molten_bronze", INGOT * 4),
            input: ["minecraft:copper_ingot", "techreborn:tin_ingot"],
            heat: "superheated",
            time: 300,
        },
        {
            output: Fluid.of("tconstruct:molten_rose_gold", INGOT * 4),
            input: ["minecraft:copper_ingot", "minecraft:gold_ingot"],
            heat: "superheated",
            time: 300,
        },
        {
            output: Fluid.of("tconstruct:molten_rose_gold", INGOT / 10),
            input: [
                { fluid: "tconstruct:molten_copper", amount: INGOT / 10 },
                { fluid: "tconstruct:molten_gold", amount: INGOT / 10 },
            ],
            heat: "",
            time: 10,
        },
        {
            output: Fluid.of("tconstruct:molten_electrum", INGOT / 9),
            input: ["techreborn:silver_nugget", "minecraft:gold_nugget"],
            heat: "heated",
            time: 111,
        },
        {
            output: Fluid.of("tconstruct:molten_electrum", INGOT / 10),
            input: [
                { fluid: "tconstruct:molten_silver", amount: INGOT / 10 },
                { fluid: "tconstruct:molten_gold", amount: INGOT / 10 },
            ],
            heat: "heated",
            time: 100,
        },
        {
            output: Fluid.of("tconstruct:molten_electrum", INGOT * 2),
            input: ["techreborn:silver_ingot", "minecraft:gold_ingot"],
            heat: "superheated",
            time: 100,
        },
        {
            output: Fluid.of("tconstruct:molten_steel", INGOT),
            input: ["techreborn:steel_dust"],
            heat: "heated",
            time: 100,
        },
        {
            output: Fluid.of("tconstruct:molten_slimesteel", INGOT),
            input: ["minecraft:iron_ingot", "tconstruct:sky_slime_ball", "#tconstruct:seared_blocks"],
            heat: "heated",
            time: 300,
        },
        {
            output: Fluid.of("tconstruct:molten_slimesteel", INGOT),
            input: [
                { fluid: "tconstruct:molten_iron", amount: INGOT },
                { fluid: "tconstruct:sky_slime", amount: 250 * mB },
                "#tconstruct:seared_blocks",
            ],
            heat: "heated",
            time: 40,
        },
        {
            output: Fluid.of("tconstruct:molten_slimesteel", INGOT),
            input: [
                "9x minecraft:iron_nugget",
                { fluid: "tconstruct:sky_slime", amount: 250 * mB },
                "#tconstruct:seared_blocks",
            ],
            heat: "heated",
            time: 40,
        },
        {
            output: Fluid.of("tconstruct:molten_slimesteel", INGOT),
            input: ["9x minecraft:iron_nugget", "tconstruct:sky_slime_ball", "#tconstruct:seared_blocks"],
            heat: "heated",
            time: 300,
        },
        {
            output: Fluid.of("tconstruct:molten_slimesteel", INGOT * 2),
            input: ["minecraft:iron_ingot", "tconstruct:sky_slime_ball", "#tconstruct:seared_blocks"],
            heat: "superheated",
            time: 300,
        },
        {
            output: "2x ae2:certus_quartz_crystal",
            input: [{ fluid: "minecraft:water", amount: 250 * mB }, "1x ae2:certus_quartz_dust"],
            heat: "heated",
            time: 40,
        },
        {
            output: Fluid.of("tconstruct:molten_pig_iron", INGOT),
            input: ["minecraft:porkchop", "9x minecraft:iron_nugget", "9x minecraft:gold_nugget"],
            heat: "heated",
            time: 300,
        },
        {
            output: Fluid.of("tconstruct:molten_pig_iron", INGOT),
            input: [
                "minecraft:porkchop",
                { fluid: "tconstruct:molten_iron", amount: INGOT },
                { fluid: "tconstruct:molten_gold", amount: INGOT },
            ],
            heat: "heated",
            time: 250,
        },
        {
            output: Fluid.of("tconstruct:molten_pig_iron", INGOT * 2),
            input: ["minecraft:porkchop", "minecraft:iron_ingot", "minecraft:gold_ingot"],
            heat: "superheated",
            time: 300,
        },
        {
            output: Fluid.of("tconstruct:molten_queens_slime", INGOT / 5),
            input: [
                { fluid: "tconstruct:molten_cobalt", amount: INGOT / 10 },
                { fluid: "tconstruct:molten_slimesteel", amount: INGOT / 5 },
            ],
            heat: "heated",
            time: 5,
        },
        {
            output: Fluid.of("tconstruct:molten_queens_slime", INGOT / 4.5),
            input: ["tconstruct:cobalt_nugget", "2x tconstruct:slimesteel_nugget"],
            heat: "heated",
            time: 5,
        },
        {
            output: Fluid.of("tconstruct:molten_queens_slime", INGOT * 2),
            input: ["tconstruct:slimesteel_ingot", "2x tconstruct:cobalt_ingot"],
            heat: "superheated",
            time: 5,
        },
        {
            output: Fluid.of("tconstruct:molten_manyullyn", INGOT),
            input: [
                { fluid: "tconstruct:molten_cobalt", amount: INGOT * 2 },
                "1x minecraft:netherite_scrap",
                { fluid: "kubejs:molten_desh", amount: INGOT },
            ],
            heat: "heated",
            time: 1000,
        },
        {
            output: Fluid.of("tconstruct:molten_manyullyn", INGOT),
            input: ["minecraft:netherite_scrap", "9x ad_astra:desh_nugget", "9x tconstruct:cobalt_nugget"],
            heat: "heated",
            time: 1000,
        },
        {
            output: Fluid.of("tconstruct:molten_manyullyn", INGOT * 2),
            input: ["minecraft:netherite_scrap", "ad_astra:desh_ingot", "tconstruct:cobalt_ingot"],
            heat: "superheated",
            time: 1000,
        },
        {
            output: Fluid.of("tconstruct:molten_hepatizon", INGOT / 4.5),
            input: ["tconstruct:cobalt_nugget", "2x techreborn:lead_nugget"],
            heat: "heated",
            time: 5,
        },
        {
            output: Fluid.of("tconstruct:molten_hepatizon", INGOT / 5),
            input: [
                { fluid: "tconstruct:molten_cobalt", amount: INGOT / 10 },
                { fluid: "tconstruct:molten_lead", amount: INGOT / 5 },
            ],
            heat: "heated",
            time: 5,
        },
        {
            output: Fluid.of("tconstruct:molten_hepatizon", INGOT / 2),
            input: ["techreborn:lead_ingot", "2x tconstruct:cobalt_ingot"],
            heat: "superheated",
            time: 5,
        },
        {
            output: Fluid.of("tconstruct:molten_debris", 250 * mB),
            input: ["minecraft:ancient_debris"],
            heat: "superheated",
            time: 500,
        },
        {
            output: "create:chromatic_compound",
            input: ["4x techreborn:uu_matter", { fluid: "kubejs:shimmer", amount: BUCKET }],
            heat: "superheated",
            time: 2500,
        },
        {
            output: Fluid.of("kubejs:compound_mixture", INGOT),
            input: ["minecraft:andesite", "techreborn:tin_nugget", "minecraft:clay_ball"],
        },
        {
            output: Fluid.of("kubejs:compound_mixture", INGOT),
            input: ["minecraft:andesite", "create:zinc_nugget", "minecraft:clay_ball"],
        },
        {
            output: Fluid.of("kubejs:compound_mixture", INGOT),
            input: ["minecraft:andesite", "minecraft:iron_nugget", "minecraft:clay_ball"],
        },
        {
            output: Fluid.of("kubejs:compound_mixture", INGOT * 12),
            input: ["compressor:compressed_andesite", "minecraft:iron_ingot", "minecraft:clay"],
            heat: "heated",
        },
        {
            output: Fluid.of("kubejs:compound_mixture", INGOT * 12),
            input: ["compressor:compressed_andesite", "create:zinc_ingot", "minecraft:clay"],
            heat: "heated",
        },
        {
            output: Fluid.of("kubejs:compound_mixture", INGOT * 12),
            input: ["compressor:compressed_andesite", "techreborn:tin_ingot", "minecraft:clay"],
            heat: "heated",
        },
        {
            output: "8x tconstruct:grout",
            input: ["create:andesite_alloy", "create:zinc_ingot", "8x minecraft:gravel"],
        },
        {
            output: "minecraft:tuff",
            input: ["minecraft:basalt", "minecraft:cobblestone"],
        },
        {
            output: "8x tconstruct:grout",
            input: ["create:andesite_alloy", "create:zinc_ingot", "8x minecraft:gravel"],
            heat: "",
            time: 0,
        },
        {
            output: "tconstruct:seared_bricks",
            input: ["4x tconstruct:seared_brick", "#c:slimeballs"],
            heat: "",
            time: 0,
        },
        {
            output: "tconstruct:seared_bricks",
            input: ["4x tconstruct:seared_brick", "techreborn:sap"],
            heat: "",
            time: 0,
        },
        {
            output: "techreborn:steel_dust",
            input: ["6x minecraft:iron_ingot", "4x techreborn:coal_dust"],
            heat: "heated",
            time: 400,
        },
        {
            output: "minecraft:glow_ink_sac",
            input: ["minecraft:ink_sac", "2x minecraft:glowstone_dust"],
            heat: "",
            time: 50,
        },
        {
            output: "minecraft:piglin_banner_pattern",
            input: ["1x minecraft:paper", Item.of("tconstruct:large_plate", '{Material:"tconstruct:pig_iron"}')],
            heat: "",
            time: 100,
        },
        {
            output: "minecraft:dolphin_spawn_egg",
            input: [{ fluid: "kubejs:shimmer", amount: 500 * mB }, "createastral:orcane"],
            heat: "",
            time: 500,
        },
        {
            output: "adoptafloppa:kitney_item",
            input: [{ fluid: "kubejs:shimmer", amount: 500 * mB }, "3x minecraft:ghast_tear"],
            heat: "",
            time: 500,
        },
        {
            output: "blahaj:gray_shark",
            input: [{ fluid: "kubejs:shimmer", amount: BUCKET }, "blahaj:blue_shark"],
            heat: "",
            time: 2000,
        },
        {
            output: "createastral:separation_agent",
            input: [{ fluid: "yttr:void", amount: BUCKET }, "createastral:refining_agent"],
            heat: "superheated",
            time: 2000,
        },
        {
            output: Fluid.of("kubejs:molten_radiance", 500 * mB),
            input: [{ fluid: "kubejs:shimmer", amount: BUCKET }, "createastral:pure_star_shard"],
            heat: "superheated",
            time: 2000,
        },
        {
            output: "tconstruct:ichor_slime_ball",
            input: [{ fluid: "kubejs:shimmer", amount: INGOT }, "4x tconstruct:sky_slime_ball"],
            heat: "heated",
            time: 30,
        },
        {
            output: "tconstruct:ender_slime_ball",
            input: [{ fluid: "kubejs:shimmer", amount: INGOT }, "2x tconstruct:ichor_slime_ball"],
            heat: "heated",
            time: 30,
        },
        {
            output: "doodads:portable_nether",
            input: [{ fluid: "kubejs:shimmer", amount: BUCKET }, "minecraft:lodestone"],
            heat: "heated",
            time: 500,
        },
        {
            output: "32x doodads:stone_brick_road",
            input: [{ fluid: "kubejs:shimmer", amount: 500 * mB }, "32x minecraft:stone_bricks"],
            heat: "",
            time: 1000,
        },
        {
            output: "32x doodads:brick_road",
            input: [{ fluid: "kubejs:shimmer", amount: 500 * mB }, "32x minecraft:bricks"],
            heat: "",
            time: 1000,
        },
        {
            output: "doodads:asphalt",
            input: [{ fluid: "kubejs:compound_mixture", amount: 3000 }, "#c:concrete_powder"],
            heat: "",
            time: 50,
        },
        {
            output: "2x astraladditions:ender_tip",
            input: ["astraladditions:ender_tip", "yttr:neodymium_dust"],
            heat: "",
            time: 50,
        },
        {
            output: "astraladditions:twisted_nylium",
            input: ["astraladditions:enderrack", { fluid: "astraladditions:sputum", amount: INGOT }],
            heat: "",
            time: 50,
        },
        {
            output: { fluid: "create:honey", amount: 500 * mB },
            input: [
                { fluid: "minecraft:water", amount: 500 * mB },
                { fluid: "kubejs:shimmer", amount: 500 * mB },
            ],
            heat: "",
            time: 3000,
        },
        {
            output: "createastral:astral_conduit",
            input: [
                { fluid: "kubejs:shimmer", amount: BUCKET },
                "minecraft:diamond_block",
                "phonos:redstone_chip",
                "minecraft:flint_and_steel",
            ],
            heat: "",
            time: 30,
        },
        {
            output: ["minecraft:sponge", "minecraft:clay"],
            input: ["minecraft:wet_sponge", "minecraft:sand"],
            heat: "",
            time: 50,
        },
        {
            output: [{ fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET }],
            input: ["create:experience_block"],
            heat: "heated",
            time: 1000,
        },
        {
            output: [{ fluid: "kubejs:liquid_xp_nuggies", amount: INGOT }],
            input: ["createastral:experience_ingot"],
            heat: "heated",
            time: 100,
        },
        {
            output: "8x minecraft:wet_sponge",
            input: [
                "8x minecraft:yellow_dye",
                "2x minecraft:black_dye",
                "1x minecraft:heart_of_the_sea",
                { fluid: "minecraft:water", amount: BUCKET },
            ],
            heat: "",
            time: 500,
        },
        {
            output: "3x minecraft:paper",
            input: ["3x techreborn:saw_dust", { fluid: "minecraft:water", amount: BUCKET }],
            heat: "",
            time: 100,
        },
        {
            output: "createastral:laskinium",
            input: [
                {
                    item: "createastral:subatomic_ingot",
                    amount: 2,
                },
                {
                    item: "createastral:astral_singularity",
                    amount: 2,
                },
                {
                    fluid: "kubejs:molten_calorite",
                    amount: INGOT,
                },
            ],
            heat: "superheated",
            time: 1000,
        },
        {
            output: "yttr:yttrium_ingot",
            input: [
                {
                    fluid: "kubejs:molten_desh",
                    amount: INGOT * 4,
                },
                {
                    fluid: "kubejs:molten_yttrium",
                    amount: INGOT,
                },
            ],
            heat: "superheated",
            time: 1000,
        },
        {
            output: "yttr:yttrium_ingot",
            input: [
                {
                    fluid: "kubejs:molten_ostrum",
                    amount: INGOT * 2,
                },
                {
                    fluid: "kubejs:molten_yttrium",
                    amount: INGOT,
                },
            ],
            heat: "superheated",
            time: 1000,
        },
        {
            output: "yttr:yttrium_ingot",
            input: [
                {
                    fluid: "kubejs:molten_calorite",
                    amount: INGOT,
                },
                {
                    fluid: "kubejs:molten_yttrium",
                    amount: INGOT,
                },
            ],
            heat: "superheated",
            time: 1000,
        },
        {
            output: "yttr:yttrium_ingot",
            input: [
                "4x ad_astra:desh_ingot",
                {
                    fluid: "kubejs:molten_yttrium",
                    amount: INGOT,
                },
            ],
            heat: "superheated",
            time: 1000,
        },
        {
            output: "yttr:yttrium_ingot",
            input: [
                "2x ad_astra:ostrum_ingot",
                {
                    fluid: "kubejs:molten_yttrium",
                    amount: INGOT,
                },
            ],
            heat: "superheated",
            time: 1000,
        },
        {
            output: "yttr:yttrium_ingot",
            input: [
                "ad_astra:calorite_ingot",
                {
                    fluid: "kubejs:molten_yttrium",
                    amount: INGOT,
                },
            ],
            heat: "superheated",
            time: 1000,
        },
        {
            output: ["astralfoods:astral_sauce"],
            input: ["createastral:astral_singularity"],
            heat: "superheated",
            time: 80,
        },
        {
            output: ["astralfoods:quantum_pasta"],
            input: ["astralfoods:astral_sauce", "2x astralfoods:quantum_bites", "farmersdelight:raw_pasta"],
            heat: "heated",
            time: 250,
        },
        {
            output: "yttr:ruined_cobblestone",
            input: [
                "minecraft:cobblestone",
                "yttr:rubble",
                {
                    fluid: "tconstruct:magma",
                    amount: BUCKET / 4,
                },
            ],
            heat: "superheated",
            time: 200,
        },
        {
            output: "yttr:wasteland_stone",
            input: ["minecraft:stone", "yttr:rubble", "yttr:rubble"],
            heat: "",
            time: 200,
        },
        {
            output: "yttr:wasteland_dirt",
            input: ["minecraft:sand", "yttr:rubble", "yttr:rubble"],
            heat: "",
            time: 200,
        },
        {
            output: "yttr:wasteland_log",
            input: ["minecraft:oak_log", "yttr:rubble", "yttr:rubble"],
            heat: "",
            time: 200,
        },
        {
            output: "2x minecraft:piglin_banner_pattern",
            input: ["minecraft:piglin_banner_pattern", "minecraft:paper"],
            heat: "",
            time: 150,
        },
        {
            output: "4x astraladditions:cometball",
            input: ["3x astraladditions:moonset_crystal"],
            heat: "",
            time: 150,
        },
        {
            output: "astraladditions:blazed_steel_ring",
            input: [
                "astraladditions:steel_ring",
                "astraladditions:shimmer_blaze_powder",
                {
                    fluid: "tconstruct:blazing_blood",
                    amount: INGOT,
                },
            ],
            heat: "heated",
            time: 400,
        },
        {
            output: "astraladditions:moonblazed_orb",
            input: [
                "astraladditions:cometball",
                "minecraft:ender_eye",
                "astraladditions:shimmer_blaze_powder",
                {
                    fluid: "tconstruct:blazing_blood",
                    amount: BUCKET,
                },
            ],
            heat: "",
            time: 500,
        },
        {
            output: "astraladditions:oh-no",
            input: [
                "astraladditions:oh-no_broken",
                "createastral:astral_conduit",
                {
                    fluid: "tconstruct:blazing_blood",
                    amount: BUCKET,
                },
            ],
            heat: "heated",
            time: 500,
        },
        //Drink Beer Spices
        {
            output: "drinkbeer:spice_blaze_paprika",
            input: ["2x minecraft:blaze_powder", "minecraft:fire_charge"],
            heat: "heated",
            time: 500,
        },
        {
            output: "drinkbeer:spice_dried_eglia_bud",
            input: ["minecraft:dried_kelp", "2x tconstruct:glow_ball"],
            heat: "",
            time: 500,
        },
        {
            output: "drinkbeer:spice_smoked_eglia_bud",
            input: ["minecraft:fire_charge", "2x tconstruct:glow_ball"],
            heat: "heated",
            time: 500,
        },
        {
            output: "drinkbeer:spice_amethyst_nigella_seeds",
            input: ["2x techreborn:amethyst_dust", "minecraft:popped_chorus_fruit"],
            heat: "",
            time: 500,
        },
        {
            output: "drinkbeer:spice_citrine_nigella_seeds",
            input: ["2x minecraft:glowstone_dust", "minecraft:popped_chorus_fruit"],
            heat: "",
            time: 500,
        },
        {
            output: "drinkbeer:spice_ice_mint",
            input: ["minecraft:ice", "4x #minecraft:leaves"],
            heat: "",
            time: 500,
        },
        {
            output: "drinkbeer:spice_ice_patchouli",
            input: ["minecraft:packed_ice", "2x minecraft:kelp"],
            heat: "",
            time: 500,
        },
        {
            output: ["drinkbeer:spice_storm_shards", "ae2:certus_quartz_crystal"],
            input: ["ae2:charged_certus_quartz_crystal", "2x minecraft:prismarine_shard"],
            heat: "",
            time: 500,
        },
        {
            output: "drinkbeer:spice_roasted_red_pine_nuts",
            input: ["minecraft:blaze_powder", "3x minecraft:wheat_seeds"],
            heat: "heated",
            time: 500,
        },
        {
            output: "drinkbeer:spice_glace_goji_berries",
            input: ["3x minecraft:sweet_berries", "minecraft:sugar"],
            heat: "heated",
            time: 500,
        },
        {
            output: "drinkbeer:spice_frozen_persimmon",
            input: ["minecraft:blue_ice", "minecraft:glistering_melon_slice"],
            heat: "",
            time: 500,
        },
        {
            output: "drinkbeer:spice_roasted_pecans",
            input: ["minecraft:blaze_powder", "3x minecraft:cocoa_beans"],
            heat: "heated",
            time: 500,
        },
        {
            output: "drinkbeer:spice_silver_needle_white_tea",
            input: [
                "3x techreborn:silver_nugget",
                {
                    fluid: "kubejs:white_grape_juice",
                    amount: 166 * mB,
                },
            ],
            heat: "heated",
            time: 500,
        },
        {
            output: "drinkbeer:spice_golden_cinnamon_powder",
            input: ["minecraft:gold_nugget", "2x farmersdelight:tree_bark"],
            heat: "heated",
            time: 500,
        },
        {
            output: "drinkbeer:spice_dried_selaginella",
            input: ["minecraft:fern", "#minecraft:sand"],
            heat: "",
            time: 500,
        },
        //Beer Liquids
        {
            output: [{ fluid: "kubejs:miner_pale_ale_fluid", amount: BUCKET }],
            input: ["3x minecraft:wheat", { fluid: "minecraft:water", amount: BUCKET }],
            heat: "heated",
            time: 500,
        },
        {
            output: [{ fluid: "kubejs:blaze_stout_fluid", amount: BUCKET }],
            input: ["2x minecraft:wheat", "minecraft:blaze_powder", { fluid: "minecraft:water", amount: BUCKET }],
            heat: "heated",
            time: 500,
        },
        {
            output: [{ fluid: "kubejs:blaze_milk_stout_fluid", amount: BUCKET }],
            input: [
                "minecraft:wheat",
                "minecraft:sugar",
                "minecraft:blaze_powder",
                { fluid: "minecraft:water", amount: BUCKET },
            ],
            heat: "heated",
            time: 500,
        },
        {
            output: [{ fluid: "kubejs:apple_lambic_fluid", amount: BUCKET }],
            input: ["2x minecraft:wheat", "minecraft:apple", { fluid: "minecraft:water", amount: BUCKET }],
            heat: "heated",
            time: 500,
        },
        {
            output: [{ fluid: "kubejs:sweet_berry_kriek_fluid", amount: BUCKET }],
            input: ["minecraft:sweet_berries", "2x minecraft:wheat", { fluid: "minecraft:water", amount: BUCKET }],
            heat: "heated",
            time: 500,
        },
        {
            output: [{ fluid: "kubejs:haars_icey_pale_lager_fluid", amount: BUCKET }],
            input: ["3x minecraft:wheat", "minecraft:ice"],
            heat: "heated",
            time: 500,
        },
        {
            output: [{ fluid: "kubejs:pumpkin_kvass_fluid", amount: BUCKET }],
            input: ["2x minecraft:bread", "minecraft:pumpkin", { fluid: "minecraft:water", amount: BUCKET }],
            heat: "heated",
            time: 500,
        },
        {
            output: [{ fluid: "kubejs:night_howl_kvass_fluid", amount: BUCKET }],
            input: ["2x minecraft:bread", "minecraft:bone", { fluid: "minecraft:water", amount: BUCKET }],
            heat: "heated",
            time: 500,
        },
        {
            output: [{ fluid: "kubejs:frothy_pink_eggnog_fluid", amount: BUCKET }],
            input: [
                "minecraft:wheat",
                "minecraft:egg",
                "minecarft:beetroot",
                { fluid: "minecraft:water", amount: BUCKET },
            ],
            heat: "heated",
            time: 500,
        },
        {
            output: [{ fluid: "ad_astra:cryo_fuel", amount: BUCKET }],
            input: [
                { fluid: "techreborn:nitrogen", amount: BUCKET },
                { fluid: "kubejs:aurorite", amount: BUCKET },
            ],
            heat: "",
            time: 300,
        },
        {
            output: ["techreborn:sulfur_dust"],
            input: ["3x minecraft:glowstone_dust", "ae2:sky_dust"],
            heat: "",
            time: 50,
        },
        {
            output: [{ fluid: "rechreborn:oil", amount: 250 * mB }],
            input: [{ fluid: "techreborn:sulfur", amount: 500 * mB }, "3x techreborn:coal_dust"],
            heat: "",
            time: 300,
        },
        {
            output: [{ fluid: "kubejs:molten_radiance", amount: BUCKET }],
            input: [
                "minecraft:nether_star",
                "minecraft:glowstone",
                "minecraft:sea_lantern",
                "3x createastral:separation_agent",
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: 1000,
        },
        {
            output: [{ fluid: "kubejs:molten_shadowsteel", amount: BUCKET }],
            input: [
                "minecraft:ender_pearl",
                "8x dbe:vanta_black",
                "3x createastral:separation_agent",
                "9x createastral:voidtouched_compound",
            ],
            heat: "heated",
            time: 1000,
        },
        {
            output: ["create:refined_radiance"],
            input: ["create:chromatic_compound", { fluid: "kubejs:molten_radiance", amount: 100 * mB }],
            heat: "superheated",
            time: 1000,
        },
        {
            output: ["astralfoods:bulbas_tea"],
            input: [
                "astraladditions:bulba_root",
                { fluid: "minecraft:water", amount: 333 * mB },
                { fluid: "milk:still_milk", amount: 333 * mB },
            ],
            heat: "heated",
            time: 45,
        },
        {
            output: ["minecraft:blackstone"],
            input: ["minecraft:cobblestone"],
            heat: "superheated",
            time: 20,
        },
        {
            output: ["minecraft:tuff"],
            input: ["minecraft:calcite"],
            heat: "superheated",
            time: 20,
        },
        {
            output: ["minecraft:crying_obsidian"],
            input: ["minecraft:obsidian"],
            heat: "superheated",
            time: 20,
        },
        {
            output: ["createastral:logo"],
            input: ["compressor:octuple_compressed_cobblestone"],
            heat: "superheated",
            time: 20,
        },
        {
            output: ["minecraft:wither_rose"],
            input: ["16x minecraft:poppy"],
            heat: "superheated",
            time: 20,
        },
        {
            output: ["tconstruct:necrotic_bone"],
            input: ["16x minecraft:bone"],
            heat: "superheated",
            time: 20,
        },
        {
            output: ["estrogen:crystal_estrogen_pill"],
            input: ["estrogen:estrogen_pill", "tconstruct:ender_slime_crystal"],
            heat: "superheated",
            time: 20,
        },
        {
            output: ["astraladditions:fragile_item_2"],
            input: [
                "8x create:refined_radiance_casing",
                "8x create:shadow_steel_casing",
                "4x createastral:subatomic_ingot",
                "16x createastral:separation_agent",
            ],
            heat: "superheated",
            time: 20,
        },
        {
            output: ["createastral:subatomic_ingot"],
            input: ["4x create:shadow_steel", "4x create:refined_radiance", "techreborn:data_storage_chip"],
            heat: "superheated",
            time: 20,
        },
        {
            output: ["yttr:promethium_speck"],
            input: ["tconstruct:ender_slime_crystal", "4x yttr:rubble"],
            heat: "superheated",
            time: 20,
        },
        {
            output: ["tconstruct:ender_slime_sling"],
            input: [
                "tconstruct:ichor_slime_sling",
                "yttr:delicace",
                { fluid: "kubejs:metabolic_broth", amount: BUCKET / 2 },
            ],
            heat: "superheated",
            time: 20,
        },
        {
            output: [{ fluid: "astraladditions:sputum", amount: INGOT }],
            input: ["astraladditions:ender_tip"],
            heat: "superheated",
            time: 20,
        },
        {
            output: [{ fluid: "techreborn:mercury", amount: mB * 500 }],
            input: ["yttr:quicksilver"],
            heat: "superheated",
            time: 20,
        },
        {
            output: { fluid: "tconstruct:blood", amount: BUCKET },
            input: [
                "2x minecraft:beetroot",
                { fluid: "kubejs:tomato_sauce_fluid", amount: 900 * mB },
                { fluid: "kubejs:shimmer", amount: 100 * mB },
            ],
            heat: "heated",
            time: null, //Vegan BLOOD
        },
        {
            output: "createastral:seitan",
            input: ["3x minecraft:brown_mushroom", { fluid: "createaddition:seed_oil", amount: 100 * mB }],
            heat: "",
            time: null,
        },
        {
            output: "24x minecraft:moss_block", //Yea Moss is automatable now without breaking contraptions, More Blocks out than in? MAGIC
            input: [
                "16x minecraft:mossy_cobblestone",
                "minecraft:moss_block",
                "1x minecraft:bone_meal",
                { fluid: "minecraft:water", amount: BUCKET / 2 },
            ],
            heat: "",
            time: null,
        },
        {
            output: "10x minecraft:kelp", // If you got the bonemeal, some kelp can be arranged
            input: ["minecraft:kelp", "minecraft:bone_meal", { fluid: "minecraft:water", amount: BUCKET / 2 }],
            heat: "",
            time: 120,
        },
        {
            output: { fluid: "tconstruct:blazing_blood", amount: BUCKET },
            input: ["minecraft:blaze_powder", { fluid: "tconstruct:blood", amount: BUCKET }],
            heat: "superheated",
            time: null, //Vegan BLOOD
        },
        {
            output: "8x techreborn:rubber",
            input: ["3x techreborn:sap", "1x techreborn:sulfur_dust"],
        },
        {
            output: "4x minecraft:coarse_dirt",
            input: ["2x minecraft:dirt", "2x minecraft:gravel"], // infinte dirt premoon
        },
        {
            output: { fluid: "kubejs:red_paste", amount: 300 * mB },
            input: ["7x minecraft:sweet_berries", { fluid: "minecraft:water", amount: 500 * mB }], // red dye for crimsite premoon
        },
        {
            output: { fluid: "minecraft:lava", amount: 125 * mB },
            input: [
                "1x techreborn:andesite_dust",
                "1x minecraft:cobblestone",
                { fluid: "minecraft:lava", amount: 50 * mB },
            ],
            heat: "",
            time: null,
        },
        {
            output: { fluid: "minecraft:lava", amount: 250 * mB },
            input: [
                "4x techreborn:andesite_dust",
                "2x minecraft:cobblestone",
                { fluid: "minecraft:lava", amount: 50 * mB },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: { fluid: "minecraft:lava", amount: 500 * mB },
            input: ["4x techreborn:andesite_dust", "2x minecraft:netherrack"],
            heat: "heated",
            time: null,
        },
        {
            output: { fluid: "kubejs:shimmer", amount: 250 * mB },
            input: ["5x minecraft:amethyst_shard", "2x minecraft:glow_ink_sac"],
            heat: "",
            time: null,
        },
        {
            output: { fluid: "kubejs:shimmer", amount: 500 * mB },
            input: ["5x techreborn:amethyst_dust", "2x minecraft:glow_ink_sac"],
            heat: "heated",
            time: null,
        },
        {
            output: { fluid: "kubejs:shimmer", amount: 1000 * mB },
            input: ["2x techreborn:amethyst_dust", "1x minecraft:glow_ink_sac", "astraladditions:lune_shroom"],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:2s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:1s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:3s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:2s}]}'),
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:4s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:3s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:5s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:4s}]}'),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:6s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:5s}]}'),
                "create:experience_block",
                { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET / 2 },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:7s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:6s}]}'),
                "create:experience_block",
                { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:2s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:1s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:3s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:2s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:4s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:3s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:5s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:4s}]}'),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:2s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:1s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:3s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:2s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:4s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:3s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:5s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:4s}]}'),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:6s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:5s}]}'),
                "create:experience_block",
                { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET / 2 },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:7s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:6s}]}'),
                "create:experience_block",
                { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:2s}]}'
            ),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:1s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:3s}]}'
            ),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:2s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:4s}]}'
            ),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:3s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:5s}]}'
            ),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:4s}]}'),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:6s}]}'
            ),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:5s}]}'),
                "create:experience_block",
                { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET / 2 },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:2s}]}'
            ),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:1s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:3s}]}'
            ),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:2s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:4s}]}'
            ),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:3s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:5s}]}'
            ),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:4s}]}'),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:6s}]}'
            ),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:5s}]}'),
                "create:experience_block",
                { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET / 2 },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            heat: "superheated",
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
            heat: "heated",
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
            heat: "heated",
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
            heat: "superheated",
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
            heat: "superheated",
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
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:2s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:1s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:3s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:2s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:4s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:3s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:5s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:4s}]}'),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:2s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:1s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:3s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:2s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:4s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:3s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:5s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:4s}]}'),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:2s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:1s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:3s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:2s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:4s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:3s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:5s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:4s}]}'),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:2s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:1s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:3s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:2s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:4s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:3s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:5s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:4s}]}'),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:6s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:5s}]}'),
                "create:experience_block",
                { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET / 2 },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:7s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:6s}]}'),
                "create:experience_block",
                { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:2s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:1s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:3s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:2s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:4s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:3s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:5s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:4s}]}'),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:2s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:1s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:3s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:2s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:4s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:3s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:5s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:4s}]}'),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:punch",lvl:2s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:punch",lvl:1s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:punch",lvl:3s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:punch",lvl:2s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:punch",lvl:4s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:punch",lvl:3s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:2s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:1s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:3s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:2s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:4s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:3s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:5s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:4s}]}'),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:6s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:5s}]}'),
                "create:experience_block",
                { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET / 2 },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:7s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:6s}]}'),
                "create:experience_block",
                { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:2s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:1s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:3s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:2s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:4s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:3s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:5s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:4s}]}'),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:6s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:5s}]}'),
                "create:experience_block",
                { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET / 2 },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:2s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:1s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:3s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:2s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:4s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:3s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:5s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:4s}]}'),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:knockback",lvl:2s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:knockback",lvl:1s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:knockback",lvl:3s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:knockback",lvl:2s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:knockback",lvl:4s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:knockback",lvl:3s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:2s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:1s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:3s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:2s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:4s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:3s}]}'),
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:2s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:1s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:3s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:2s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:4s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:3s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:5s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:4s}]}'),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:2s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:1s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:3s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:2s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:4s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:3s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:2s}]}'
            ),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:1s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:3s}]}'
            ),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:2s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:4s}]}'
            ),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:3s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:5s}]}'
            ),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:4s}]}'),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:6s}]}'
            ),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:5s}]}'),
                "create:experience_block",
                { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET / 2 },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:2s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:1s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:3s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:2s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:4s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:3s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:5s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:4s}]}'),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:6s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:5s}]}'),
                "create:experience_block",
                { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET / 2 },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:7s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:6s}]}'),
                "create:experience_block",
                { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:depth_strider",lvl:2s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:depth_strider",lvl:1s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:depth_strider",lvl:3s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:depth_strider",lvl:2s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "superheated",
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
            heat: "heated",
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
            heat: "heated",
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
            heat: "heated",
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
            heat: "superheated",
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
            heat: "superheated",
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
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:2s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:1s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:3s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:2s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:4s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:3s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:5s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:4s}]}'),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:2s}]}'
            ),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:1s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:3s}]}'
            ),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:2s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:4s}]}'
            ),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:3s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:5s}]}'
            ),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:4s}]}'),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:2s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:1s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:3s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:2s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:4s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:3s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:5s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:4s}]}'),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:2s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:1s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:3s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:2s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:4s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:3s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:5s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:4s}]}'),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:2s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:1s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:3s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:2s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:4s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:3s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:5s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:4s}]}'),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:6s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:5s}]}'),
                "create:experience_block",
                { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET / 2 },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:7s}]}'),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:6s}]}'),
                "create:experience_block",
                { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:2s}]}'
            ),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:1s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "heated",
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:3s}]}'
            ),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:2s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
                { fluid: "kubejs:shimmer", amount: BUCKET },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:4s}]}'
            ),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:3s}]}'),
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 125 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: Item.of(
                "minecraft:enchanted_book",
                '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:5s}]}'
            ),
            input: [
                Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:4s}]}'),
                "createastral:experience_ingot",
                { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
                { fluid: "kubejs:hellfire", amount: 250 * mB },
            ],
            heat: "superheated",
            time: null,
        },
        {
            output: { fluid: "kubejs:liquid_xp_nuggies", amount: 1000 },
            input: ["create:experience_nugget"],
            heat: "heated",
            time: 10,
        },
        {
            output: { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
            input: ["createastral:experience_ingot"],
            heat: "heated",
            time: 100,
        },
        {
            output: { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
            input: ["create:experience_block"],
            heat: "heated",
            time: 1000,
        },
        {
            output: { fluid: "kubejs:liquid_xp_nuggies", amount: 2000 },
            input: ["xpcrystals:xp_crystal"],
            heat: "heated",
            time: 12,
        },
        {
            output: {
                fluid: "tconstruct:liquid_soul",
                amount: 250 * mB,
            },
            input: ["xpcrystals:soul_compound"],
            heat: "heated",
            time: 30,
        },
        {
            output: {
                fluid: "tconstruct:liquid_soul",
                amount: 250 * mB,
            },
            input: ["xpcrystals:soul_compound", { fluid: "minecraft:water", amount: 125 * mB }],
            heat: "heated",
            time: 25,
        },
        {
            output: { fluid: "xpcrystals:soul", amount: 250 * mB },
            input: { fluid: "tconstruct:liquid_soul", amount: 250 * mB },
            heat: "",
            time: 25,
        },
    ].forEach((recipe) => {
        event.recipes
            .createMixing(recipe.output, recipe.input)
            .heatRequirement(recipe.heat ?? "")
            .processingTime(recipe.time ?? 100);
    });

    //! Max Norfolk's flowers.js
    /// Array format: [flower, dye color]
    [
        ["minecraft:dandelion", "minecraft:yellow_dye"],
        ["minecraft:poppy", "minecraft:red_dye"],
        ["minecraft:blue_orchid", "minecraft:light_blue_dye"],
        ["minecraft:allium", "minecraft:magenta_dye"],
        ["minecraft:azure_bluet", "minecraft:light_gray_dye"],
        ["minecraft:red_tulip", "minecraft:red_dye"],
        ["minecraft:orange_tulip", "minecraft:orange_dye"],
        ["minecraft:white_tulip", "minecraft:white_dye"],
        ["minecraft:pink_tulip", "minecraft:pink_dye"],
        ["minecraft:oxeye_daisy", "minecraft:light_gray_dye"],
        ["minecraft:cornflower", "minecraft:blue_dye"],
        ["minecraft:lily_of_the_valley", "minecraft:white_dye"],
    ].forEach((recipe) => {
        event.recipes
            .createMixing(recipe[0], [
                recipe[1],
                "minecraft:dead_bush",
                "create:tree_fertilizer",
                { fluid: "kubejs:shimmer", amount: INGOT },
            ])
            .processingTime(50);
    });

    /// Array format: [2 tall flower, 1 tall flower]
    [
        ["minecraft:sunflower", "minecraft:dandelion"],
        ["minecraft:lilac", "minecraft:allium"],
        ["minecraft:rose_bush", "minecraft:poppy"],
        ["minecraft:peony", "minecraft:pink_tulip"],
        ["farmersdelight:wild_cabbages", "farmersdelight:cabbage"],
        ["farmersdelight:wild_onions", "farmersdelight:onion"],
        ["farmersdelight:wild_tomatoes", "farmersdelight:tomato"],
        ["farmersdelight:wild_carrots", "minecraft:carrot"],
        ["farmersdelight:wild_potatoes", "minecraft:potato"],
        ["farmersdelight:wild_beetroots", "minecraft:beetroot"],
        ["farmersdelight:wild_rice", "farmersdelight:rice"],
    ].forEach((recipe) => {
        event.recipes
            .createMixing(recipe[0], [
                "2x " + recipe[1],
                "2x create:tree_fertilizer",
                { fluid: "kubejs:shimmer", amount: 2 * INGOT },
            ])
            .processingTime(50);
    });

    //! RandomUser240306's farmerscompat.js mixing recipes
    event.forEachRecipe({ type: "farmersdelight:cooking" }, (recipe) => {
        let outputItem = recipe.getOriginalRecipeResult().getId().split(":")[1];
        let inputItems = recipe.json.get("ingredients").deepCopy();
        if (outputItem == "cabbage_rolls") return; //too few ingredients to add recipe for

        let containers = {
            "minecraft:glass_bottle": ["hot_cocoa", "apple_cider", "glow_berry_custard"],
            "minecraft:pumpkin": ["stuffed_pumpkin_block"],
            "#c:dough": ["dumplings"],
        };

        let container = Object.keys(containers).find((key) => containers[key].includes(outputItem)) ?? "minecraft:bowl";

        for (let i = 0; i < inputItems.size(); i++) {
            if (inputItems.get(i).getClass() == "class com.google.gson.JsonObject") {
                if (inputItems.get(i).has("item")) {
                    if (inputItems.get(i).get("item").toString().replaceAll('"', "") == "farmersdelight:tomato_sauce") {
                        let JsonObject = java("com.google.gson.JsonObject");
                        let tomato_sauce_fluid_ingredient = new JsonObject();
                        tomato_sauce_fluid_ingredient.add("fluid", "kubejs:tomato_sauce_fluid");
                        tomato_sauce_fluid_ingredient.add("amount", BUCKET / 4);
                        inputItems.set(i, tomato_sauce_fluid_ingredient);
                    }
                } else {
                    if (inputItems.get(i).has("tag")) {
                        if (inputItems.get(i).get("tag").toString().replaceAll('"', "") == "c:dough") {
                            inputItems.remove(inputItems.get(i)); //removes dough from dumpling recipe
                        } else if (inputItems.get(i).get("tag").toString().replaceAll('"', "") == "c:milk") {
                            let JsonObject = java("com.google.gson.JsonObject");
                            let milk = new JsonObject();
                            milk.add("fluid", "milk:still_milk");
                            milk.add("amount", BUCKET / 4);
                            inputItems.set(i, milk);
                        }
                    }
                }
            }
        }
        event.recipes
            .createMixing(
                {
                    fluid: "kubejs:" + outputItem + "_fluid",
                    amount: BUCKET / 4,
                },
                inputItems
            )
            .heatRequirement("heated")
            .processingTime(100);

        event.recipes.createFilling(recipe.getOriginalRecipeResult(), [
            container,
            {
                fluid: "kubejs:" + outputItem + "_fluid",
                amount: BUCKET / 4,
            },
        ]);
    });
});
