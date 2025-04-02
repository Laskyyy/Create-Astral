onEvent("recipes", (event) => {
    //Input: String
    //Outputs: Array of outputs, which is each an array.
    //    [Item string, float from 0.0 - 1.0 deciding chance]
    [
        //sponge to wet sponge
        {
            input: "minecraft:calcite",
            outputs: [["minecraft:dripstone_block", 1]],
        },
        {
            input: "minecraft:sponge",
            outputs: [["minecraft:wet_sponge", 1]],
        },
        {
            input: "createaddition:biomass",
            outputs: [
                ["createastral:pure_biomatter", 1],
                ["minecraft:sugar", 0.2],
                ["minecraft:bone_meal", 0.2],
            ],
        },
        {
            input: "minecraft:soul_soil",
            outputs: [
                ["minecraft:gold_nugget", 0.08],
                ["minecraft:quartz", 0.06],
                ["minecraft:bone_meal", 0.1],
            ],
        },
        {
            input: "ae2:certus_crystal_seed",
            outputs: [
                ["ae2:certus_quartz_crystal", 1],
                ["minecraft:sugar", 0.1],
            ],
        },
        {
            input: "ae2:fluix_crystal_seed",
            outputs: [
                ["ae2:fluix_crystal", 1],
                ["minecraft:sugar", 0.1],
            ],
        },

        {
            input: "createastral:lime",
            outputs: [
                ["techreborn:silver_nugget", 0.12],
                ["techreborn:raw_silver", 0.02],
            ],
        },
        {
            input: "minecraft:red_sand",
            outputs: [
                ["create:zinc_nugget", 0.33],
                ["minecraft:dead_bush", 0.12],
            ],
        },
        {
            input: "ad_astra:moon_sand",
            outputs: [
                ["ad_astra:desh_nugget", 0.12],
                ["ad_astra:cheese", 0.04],
            ],
        },
        {
            input: "ad_astra:mars_sand",
            outputs: [["techreborn:lead_nugget", 0.25]],
        },
        {
            // wash shulker box to remove the color
            input: "#c:shulker_boxes",
            outputs: [["minecraft:shulker_box", 1]],
        },
        {
            // soul soil without random ticks
            input: "farmersdelight:organic_compost",
            outputs: [["farmersdelight:rich_soil", 1]],
        },
        // ae2 cable washing made easy !!!
        {
            input: "#ae2:glass_cable",
            outputs: [["ae2:fluix_glass_cable", 1]],
        },
        {
            input: "#ae2:covered_cable",
            outputs: [["ae2:fluix_covered_cable", 1]],
        },
        {
            input: "#ae2:covered_dense_cable",
            outputs: [["ae2:fluix_covered_dense_cable", 1]],
        },
        {
            input: "#ae2:smart_cable",
            outputs: [["ae2:fluix_smart_cable", 1]],
        },
        {
            input: "#ae2:smart_dense_cable",
            outputs: [["ae2:fluix_smart_dense_cable", 1]],
        },
        // Green's bloodyfile.js stuff
        {
            input: "minecraft:cobblestone",
            outputs: [["minecraft:mossy_cobblestone", 1]], //easy mossy cobble for moss
        },
        {
            input: "minecraft:stone_bricks",
            outputs: [["minecraft:mossy_stone_bricks", 1]],
        },
    ].forEach((recipe) => {
        let cleanoutputs = [];
        recipe.outputs.forEach((output) => {
            if (output[1] == 1) {
                cleanoutputs.push(output[0]);
            } else {
                cleanoutputs.push(Item.of(output[0]).withChance(output[1]));
            }
        });
        event.recipes.createSplashing(cleanoutputs, recipe.input);
    });
});
