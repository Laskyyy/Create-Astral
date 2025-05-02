onEvent("recipes", (event) => {
    LakyCompactingRecipes(event);

    [
        {
            output: ["minecraft:end_stone"],
            inputs: [
                "yttr:yttrium_dust",
                "3x techreborn:dark_ashes_dust",
                { fluid: "tconstruct:molten_ender", amount: 125 * mB },
            ],
        },
        {
            output: ["ae2:fluix_pearl"],
            inputs: ["4x createastral:shimmer_marimo", "ae2:ender_dust"],
        },
        {
            output: ["techreborn:saltpeter_dust", { fluid: "minecraft:water", amount: 500 * mB }],
            inputs: ["4x createastral:snowy_marimo", "4x astraladditions:bulba_root"],
        },
        {
            output: ["techreborn:saltpeter_dust", { fluid: "minecraft:water", amount: 500 * mB }],
            inputs: ["4x createastral:snowy_marimo", "minecraft:seagrass"],
        },
        {
            output: "farmersdelight:organic_compost",
            inputs: ["minecraft:coarse_dirt", "create:tree_fertilizer", "createastral:pure_biomatter"],
        },
        {
            output: "farmersdelight:organic_compost",
            inputs: [
                "minecraft:rooted_dirt",
                "minecraft:bone_meal",
                { fluid: "techreborn:potassium", amount: 250 * mB },
            ],
        },
        {
            output: "astraladditions:enderrack",
            inputs: ["astraladditions:ender_sprouts", "32x createastral:ender_marimo"],
        },
        {
            output: "minecraft:budding_amethyst",
            inputs: [
                "6x minecraft:amethyst_cluster",
                "tconstruct:amethyst_bronze_block",
                "32x createastral:shimmer_marimo",
            ],
        },
        {
            output: "ad_astra:permafrost",
            inputs: ["minecraft:warped_roots", "32x createastral:snowy_marimo"],
        },
        {
            output: "minecraft:rooted_dirt",
            inputs: ["minecraft:grass", "32x createastral:marimo"],
        },
        {
            output: "minecraft:grass",
            inputs: ["minecraft:seagrass"],
        },
        {
            output: { fluid: "astraladditions:sputum", amount: 500 * mB },
            inputs: [
                "4x createastral:ender_marimo",
                "techreborn:uu_matter",
                { fluid: "tconstruct:molten_ender", amount: 250 * mB },
            ],
        },
        {
            output: { fluid: "tconstruct:molten_ender", amount: 250 * mB },
            inputs: [
                "4x createastral:moonset_marimo",
                "4x ae2:fluix_dust",
                { fluid: "tconstruct:ender_slime", amount: 500 * mB },
            ],
        },
        {
            output: "astraladditions:moonset_crystal",
            inputs: ["8x createastral:moonset_marimo", "2x ae2:ender_dust"],
        },
        {
            output: "minecraft:chorus_flower",
            inputs: ["8x createastral:moonset_marimo", "minecraft:chorus_fruit"],
        },
        {
            output: { fluid: "minecraft:water", amount: 500 * mB },
            inputs: ["createastral:marimo"],
        },
        {
            output: "minecraft:calcite",
            inputs: ["minecraft:gravel", "2x minecraft:bone_meal"],
        },
        {
            output: "minecraft:calcite",
            inputs: ["minecraft:gravel", { fluid: "milk:still_milk", amount: 500 * mB }],
        },
        {
            output: "create:scoria",
            inputs: ["minecraft:soul_soil", { fluid: "create:chocolate", amount: 50 * mB }],
        },
        {
            output: "create:scoria",
            inputs: ["minecraft:soul_sand", { fluid: "create:chocolate", amount: 50 * mB }],
        },
        {
            output: "create:limestone",
            inputs: ["minecraft:cobblestone", { fluid: "milk:still_milk", amount: 100 * mB }],
        },
        {
            output: "minecraft:tuff",
            inputs: ["1x minecraft:iron_nugget", "minecraft:cobblestone", "techreborn:andesite_dust"],
        },
        {
            output: "create:blaze_cake_base",
            inputs: ["2x ad_astra:mars_sand", "minecraft:sugar"],
        },
        {
            output: "create:blaze_cake_base",
            inputs: ["ad_astra:mercury_cobblestone", "minecraft:sugar"],
        },
        {
            output: "create:blaze_cake_base",
            inputs: ["3x create:cinder_flour", "minecraft:sugar"],
        },
        {
            output: "minecraft:lapis_lazuli",
            inputs: [
                "3x techreborn:lazurite_dust",
                "2x minecraft:iron_nugget",
                { fluid: "minecraft:lava", amount: BUCKET / 30 },
            ],
        },
        {
            output: "minecraft:granite",
            inputs: ["minecraft:diorite", "minecraft:flint", { fluid: "minecraft:lava", amount: 100 * mB }],
        },
        {
            output: "create:andesite_casing",
            inputs: ["#c:stripped_logs", { fluid: "kubejs:compound_mixture", amount: INGOT }],
        },
        {
            output: "2x create:railway_casing",
            inputs: [
                "create:sturdy_sheet",
                "create:andesite_casing",
                {
                    fluid: "tconstruct:molten_obsidian",
                    amount: mB * 50,
                },
            ],
        },
        {
            output: "minecraft:prismarine_shard",
            inputs: ["#c:coral_plants"],
        },
        {
            output: "minecraft:prismarine_shard",
            inputs: ["#c:coral_fans"],
        },
        {
            output: "techreborn:diamond_nugget",
            inputs: ["8x minecraft:prismarine_crystals"],
        },
        {
            output: "minecraft:andesite",
            inputs: ["4x techreborn:andesite_dust"],
        },
        {
            output: "minecraft:granite",
            inputs: ["4x techreborn:granite_dust"],
        },
        {
            output: "minecraft:diorite",
            inputs: ["4x techreborn:diorite_dust"],
        },
        {
            output: "minecraft:calcite",
            inputs: ["4x techreborn:calcite_dust"],
        },
        {
            output: "minecraft:basalt",
            inputs: ["4x techreborn:basalt_dust"],
        },
        {
            output: "minecraft:andesite",
            inputs: ["2x techreborn:andesite_dust", "2x minecraft:basalt"],
        },
        {
            output: "minecraft:dripstone_block",
            inputs: ["2x minecraft:granite", "2x minecraft:slime_ball"],
        },
        {
            output: "minecraft:cobbled_deepslate",
            inputs: ["3x minecraft:flint", "minecraft:gravel"],
        },
        {
            output: "createastral:compressed_experience_block",
            inputs: ["9x create:experience_block"],
        },
        {
            output: ["minecraft:clay", "minecraft:sponge"],
            inputs: ["minecraft:wet_sponge", "minecraft:sand"],
        },
        {
            output: { fluid: "kubejs:white_grape_juice", amount: 6750 },
            inputs: ["vinery:white_grape"],
        },
        {
            output: { fluid: "kubejs:red_grape_juice", amount: 6750 },
            inputs: ["vinery:red_grape"],
        },
        {
            output: "2x createastral:gyrodyne_blueprint",
            inputs: ["createastral:gyrodyne_blueprint", "create:empty_schematic", "32x minecraft:black_dye"],
        },
        {
            output: "2x createastral:biplane_blueprint",
            inputs: ["createastral:biplane_blueprint", "create:empty_schematic", "32x minecraft:black_dye"],
        },
        {
            output: "2x createastral:airship_blueprint",
            inputs: ["createastral:airship_blueprint", "create:empty_schematic", "32x minecraft:black_dye"],
        },
        {
            output: "2x createastral:quadrocopter_blueprint",
            inputs: ["createastral:quadrocopter_blueprint", "create:empty_schematic", "32x minecraft:black_dye"],
        },

        //mushroom block recipes
        {
            output: "minecraft:brown_mushroom_block",
            inputs: ["4x minecraft:brown_mushroom"],
        },
        {
            output: "minecraft:red_mushroom_block",
            inputs: ["4x minecraft:red_mushroom"],
        },
        {
            //nametag recipe
            output: "minecraft:name_tag",
            inputs: ["farmersdelight:canvas", "minecraft:ink_sac", "createaddition:iron_wire"],
        },
        {
            output: "minecraft:andesite",
            inputs: ["2x minecraft:flint", "minecraft:gravel", { fluid: "minecraft:lava", amount: 100 * mB }],
            heat: "heated",
        },
        {
            output: "createastral:steel_helmet",
            inputs: [Item.of("createastral:sturdy_helmet").ignoreNBT(), "6x techreborn:steel_dust"],
            heat: "heated",
        },
        {
            output: "createastral:steel_chestplate",
            inputs: [Item.of("createastral:sturdy_chestplate").ignoreNBT(), "12x techreborn:steel_dust"],
            heat: "heated",
        },
        {
            output: "createastral:steel_leggings",
            inputs: [Item.of("createastral:sturdy_leggings").ignoreNBT(), "8x techreborn:steel_dust"],
            heat: "heated",
        },
        {
            output: "createastral:steel_boots",
            inputs: [Item.of("createastral:sturdy_boots").ignoreNBT(), "5x techreborn:steel_dust"],
            heat: "heated",
        },
        {
            output: ["ae2:silicon_press", "ae2:printed_silicon"],
            inputs: [
                "ae2:silicon_press",
                {
                    fluid: "techreborn:silicon",
                    amount: INGOT,
                },
            ],
            heat: "heated",
        },
        {
            output: ["ae2:silicon_press", "ae2:silicon_press"],
            inputs: ["ae2:silicon_press", "minecraft:iron_block"],
            heat: "heated",
        },
        {
            output: ["ae2:logic_processor_press", "ae2:printed_logic_processor"],
            inputs: [
                "ae2:logic_processor_press",
                {
                    fluid: "tconstruct:molten_gold",
                    amount: INGOT,
                },
            ],
            heat: "heated",
        },
        {
            output: ["ae2:logic_processor_press", "ae2:logic_processor_press"],
            inputs: ["ae2:logic_processor_press", "minecraft:iron_block"],
            heat: "heated",
        },
        {
            output: ["ae2:engineering_processor_press", "ae2:printed_engineering_processor"],
            inputs: [
                "ae2:engineering_processor_press",
                {
                    fluid: "tconstruct:molten_diamond",
                    amount: GEM,
                },
            ],
            heat: "heated",
        },
        {
            output: ["ae2:engineering_processor_press", "ae2:engineering_processor_press"],
            inputs: ["ae2:engineering_processor_press", "minecraft:iron_block"],
            heat: "heated",
        },
        {
            output: ["ae2:calculation_processor_press", "ae2:printed_calculation_processor"],
            inputs: [
                "ae2:calculation_processor_press",
                {
                    fluid: "kubejs:molten_desh",
                    amount: INGOT,
                },
            ],
            heat: "heated",
        },
        {
            output: "techreborn:carbon_fiber",
            inputs: [{ fluid: "techreborn:carbon", amount: 10125 }],
            heat: "heated",
        },
        {
            output: ["ae2:calculation_processor_press", "ae2:calculation_processor_press"],
            inputs: ["ae2:calculation_processor_press", "minecraft:iron_block"],
            heat: "heated",
        },
        {
            output: ["ae2:ender_dust"],
            inputs: ["minecraft:ender_pearl"],
            heat: "heated",
        },
        {
            output: ["ae2:certus_quartz_dust"],
            inputs: ["#c:certus_quartz"],
            heat: "",
        },
        {
            output: "minecraft:shulker_shell",
            inputs: ["ae2:ender_dust", "8x minecraft:purple_dye"],
            heat: "heated",
        },
        {
            output: "createastral:olivine_sheet",
            inputs: ["16x techreborn:olivine_dust"],
            heat: "superheated",
        },
        {
            output: "yttr:promethium_lump",
            inputs: ["4x yttr:promethium_speck", "yttr:neodymium_dust", { fluid: "kubejs:hellfire", amount: 500 * mB }],
            heat: "superheated",
        },
        {
            output: ["yttr:armor_plating", "yttr:bedrock_shard"],
            inputs: ["8x yttr:yttrium_ingot", "yttr:bedrock_shard", { fluid: "kubejs:hellfire", amount: 100 * mB }],
            heat: "superheated",
        },
        {
            output: "yttr:promethium_glob",
            inputs: ["2x yttr:promethium_lump", "yttr:neodymium_disc", { fluid: "kubejs:hellfire", amount: 1000 * mB }],
            heat: "superheated",
        },
        {
            output: "create:lapis_sheet",
            inputs: ["16x techreborn:lazurite_dust"],
            heat: "heated",
        },
        {
            output: "yttr:continuous_platform",
            inputs: [
                { fluid: "kubejs:aurorite", amount: 100 * mB },
                { fluid: "kubejs:shimmer", amount: 100 * mB },
            ],
            heat: "heated",
        },
        {
            output: "ad_astra:sky_stone",
            inputs: ["5x ad_astra:moon_stone", "ae2:certus_quartz_dust"],
            heat: "heated",
        },
        {
            output: "createastral:star_shard",
            inputs: [{ fluid: "kubejs:molten_radiance", amount: 100 * mB }],
            heat: "heated",
        },
        {
            output: "ad_astra:permafrost",
            inputs: ["9x ad_astra:glacio_stone"],
            heat: "superheated",
        },
        {
            output: "4x minecraft:purpur_block",
            inputs: ["4x ad_astra:strophar_cap", { fluid: "minecraft:water", amount: 100 * mB }],
            heat: "",
        },
        {
            output: [
                "minecraft:sponge",
                Item.of("minecraft:cod").withChance(0.25),
                Item.of("minecraft:salmon").withChance(0.25),
                Item.of("minecraft:tropical_fish").withChance(0.2),
                Item.of("minecraft:pufferfish").withChance(0.15),
                Item.of("minecraft:ink_sac").withChance(0.15),
            ],
            inputs: "minecraft:wet_sponge",
            heat: "",
        },
        {
            output: "ad_astra:ostrum_ingot",
            inputs: {
                fluid: "kubejs:molten_ostrum",
                amount: INGOT,
            },
        },
        {
            output: "ad_astra:ostrum_nugget",
            inputs: {
                fluid: "kubejs:molten_ostrum",
                amount: NUGGET,
            },
        },
        {
            output: "createdeco:cast_iron_ingot",
            inputs: {
                fluid: "createbigcannons:molten_cast_iron",
                amount: INGOT,
            },
        },
        {
            output: "createdeco:cast_iron_nugget",
            inputs: {
                fluid: "createbigcannons:molten_cast_iron",
                amount: NUGGET,
            },
        },
        {
            output: {
                amount: BUCKET / 4,
                fluid: "tconstruct:earth_slime",
            },
            inputs: "minecraft:slime_ball",
        },
        {
            output: "astralfoods:blaze_fries",
            inputs: ["astralfoods:blaze_rods", { fluid: "createaddition:seed_oil", amount: 100 * mB }],
        },
        {
            output: "astralfoods:fried_cod",
            inputs: ["minecraft:cod", { fluid: "createaddition:seed_oil", amount: 100 * mB }],
        },
    ].forEach((recipe) => {
        event.recipes.createCompacting(recipe.output, recipe.inputs).heatRequirement(recipe.heat ?? "");
    });
});

function LakyCompactingRecipes(event) {
    const recipeList = [
        [
            "create:ochrum",
            "minecraft:dripstone_block",
            "minecraft:cobblestone",
            { fluid: "create:honey", amount: 100 * mB },
            "minecraft:yellow_dye",
        ],
        [
            "create:crimsite",
            "minecraft:tuff",
            "minecraft:cobblestone",
            { fluid: "tconstruct:blood", amount: 100 * mB },
            "minecraft:red_dye",
        ],
        [
            "create:veridium",
            "minecraft:cobblestone",
            "minecraft:slime_ball",
            { fluid: "minecraft:lava", amount: 100 * mB },
            "minecraft:green_dye",
        ],
        [
            "create:asurine",
            "minecraft:prismarine",
            "minecraft:kelp",
            { fluid: "minecraft:water", amount: 100 * mB },
            "minecraft:blue_dye",
        ],
        [
            "create:scorchia",
            "minecraft:basalt",
            "ad_astra:moon_sand",
            { fluid: "tconstruct:blazing_blood", amount: 50 * mB },
            "minecraft:black_dye",
        ],
    ];

    recipeList.forEach((entry) => {
        const recipe = {
            output: entry[0],
            input: [entry[1], entry[2], entry[3], entry[4]],
            heat: "",
            time: 400,
        };

        event.recipes
            .createCompacting(recipe.output, recipe.input)
            .heatRequirement(recipe.heat ?? "")
            .processingTime(recipe.time ?? 100);
    });
}
