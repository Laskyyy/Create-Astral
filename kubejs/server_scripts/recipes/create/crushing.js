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
                ["createbigcannons:steel_scrap", 0.1],
                ["createbigcannons:bronze_scrap", 0.1],
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
});
