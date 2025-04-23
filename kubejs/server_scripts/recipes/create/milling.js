onEvent("recipes", (event) => {
    otherMillingRecipes(event);
    sifterRecipes(event);
    // [Input, Output, Chance]
    //? This array is for simple "single input -> single output + chance" recipes
    //? Use the otherMillingRecipes function for more complex recipes e.g. multiple outputs
    [
        ["minecraft:rooted_dirt", "minecraft:dirt", 1],
        ["farmersdelight:straw", "minecraft:string", 1],
        ["minecraft:bamboo", "farmersdelight:straw", 0.2],
        ["ae2:certus_quartz_dust", "ae2:certus_crystal_seed", 1],
        ["minecraft:gravel", "minecraft:sand", 0.5],
        ["create:veridium", "minecraft:raw_copper", 0.6],
        ["create:asurine", "minecraft:lapis_lazuli", 1],
        ["create:crimsite", "minecraft:raw_iron", 0.4],
        ["create:ochrum", "minecraft:raw_gold", 0.4],
        ["create:limestone", "techreborn:raw_tin", 0.2],
        ["create:scorchia", "create:raw_zinc", 0.4],
        ["create:scoria", "minecraft:magma_block", 1],
        ["minecraft:tuff", "minecraft:iron_nugget", 1],
        ["minecraft:dripstone_block", "2x minecraft:golden_nugget", 1],
        ["minecraft:blackstone", "create:zinc_nugget", 0.5],
        ["minecraft:flint", "techreborn:andesite_dust", 1],
        ["minecraft:iron_nugget", "techreborn:andesite_dust", 0.75],
        ["minecraft:tube_coral_block", "2x minecraft:blue_dye", 1],
        ["minecraft:brain_coral_block", "2x minecraft:pink_dye", 1],
        ["minecraft:bubble_coral_block", "2x minecraft:purple_dye", 1],
        ["minecraft:fire_coral_block", "2x minecraft:red_dye", 1],
        ["minecraft:horn_coral_block", "2x minecraft:yellow_dye", 1],
        ["minecraft:glow_berries", "naturalist:glow_goop", 1],
        ["naturalist:glow_goop", "minecraft:yellow_dye", 1],
        ["minecraft:twisting_vines", "minecraft:blue_dye", 1],
        ["minecraft:weeping_vines", "minecraft:red_dye", 1],
        ["minecraft:sweet_berries", "minecraft:red_dye", 1],
        ["vinery:red_grape", "minecraft:purple_dye", 0.5],
        ["vinery:white_grape", "minecraft:lime_dye", 0.5],
        ["minecraft:melon_slice", "minecraft:red_dye", 0.5],
        ["minecraft:snow_block", "2x minecraft:snowball", 1],
        ["createastral:crushed_raw_gadolinite", "yttr:yttrium_dust", 1],
        ["createastral:broken_fragile_sheet", "create:powdered_obsidian", 1],
        ["createastral:broken_fragile_rocket_fin", "16x create:powdered_obsidian", 1],
        ["kubejs:broken_fragile_sheet_block", "16x create:powdered_obsidian", 1],
        ["kubejs:broken_fire_resistant_fragile_sheet_block", "16x create:powdered_obsidian", 1],
        ["astraladditions:shimmer_blaze_rod", "2x astraladditions:shimmer_blaze_powder", 1],
        ["minecraft:amethyst_shard", "techreborn:amethyst_dust", 1],
        ["minecraft:diorite", "minecraft:quartz", 0.25],
        ["minecraft:dried_kelp", "minecraft:gunpowder", 0.25],
        ["techreborn:rubber_log", "techreborn:sap", 0.35],
    ].forEach((recipe) => {
        event.recipes.createMilling([Item.of(recipe[1]).withChance(recipe[2])], recipe[0]);
    });
});

function otherMillingRecipes(event) {
    [
        {
            input: "minecraft:obsidian",
            output: ["create:powdered_obsidian", Item.of("minecraft:obsidian").withChance(0.25)],
        },
    ].forEach((recipe) => {
        event.recipes.createMilling(recipe.output, recipe.input);
    });
}

function sifterRecipes(event) {
    //? Old sifter recipes that were transferred to the millstone to update create to 0.5.1

    [
        {
            inputs: [{ item: "minecraft:coarse_dirt" }],
            outputs: [
                { item: "minecraft:dirt", chance: 1 },
                { item: "minecraft:flint", chance: 0.3 },
            ],
            processingTime: 50,
        },
        {
            inputs: [{ item: "minecraft:basalt" }],
            outputs: [
                { item: "minecraft:magma_cream", chance: 0.1 },
                { item: "minecraft:ghast_tear", chance: 0.05 },
                { item: "minecraft:blaze_powder", chance: 0.1 },
            ],
            processingTime: 200,
        },
        {
            inputs: [{ item: "minecraft:cobbled_deepslate" }],
            outputs: [
                { item: "minecraft:redstone", chance: 0.1 },
                { item: "create:copper_nugget", chance: 0.05 },
            ],
            processingTime: 50,
        },
        {
            inputs: [{ item: "extractinator:silt" }],
            outputs: [
                { item: "minecraft:raw_iron", chance: 0.2 },
                { item: "minecraft:raw_copper", chance: 0.4 },
                { item: "minecraft:raw_gold", chance: 0.2 },
                { item: "create:raw_zinc", chance: 0.2 },
            ],
            processingTime: 1000,
        },
        {
            inputs: [{ item: "extractinator:slush" }],
            outputs: [
                { item: "minecraft:raw_iron", chance: 0.2 },
                { item: "minecraft:raw_copper", chance: 0.4 },
                { item: "minecraft:raw_gold", chance: 0.2 },
                { item: "create:raw_zinc", chance: 0.2 },
            ],
            processingTime: 1000,
        },
        {
            inputs: [{ item: "minecraft:prismarine" }],
            outputs: [
                { item: "minecraft:cod", chance: 0.2 },
                { item: "minecraft:salmon", chance: 0.1 },
                { item: "minecraft:tropical_fish", chance: 0.05 },
                { item: "minecraft:pufferfish", chance: 0.03 },
                { item: "minecraft:nautilus_shell", chance: 0.02 },
                { item: "minecraft:lily_pad", chance: 0.2 },
                { item: "minecraft:glow_ink_sac", chance: 0.1 },
            ],
            processingTime: 100,
        },
        {
            inputs: [{ item: "minecraft:soul_sand" }],
            outputs: [
                { item: "xpcrystals:soul_compound", chance: 1 },
                { item: "xpcrystals:soul_compound", chance: 0.5 },
                { item: "minecraft:soul_sand", chance: 0.25 },
            ],
        },
        {
            inputs: [
                {
                    item: "minecraft:clay",
                },
            ],
            outputs: [
                {
                    item: "minecraft:kelp",
                    chance: 0.2,
                },
                {
                    item: "minecraft:seagrass",
                    chance: 0.3,
                },
                {
                    item: "minecraft:tube_coral",
                    chance: 0.05,
                },
                {
                    item: "minecraft:brain_coral",
                    chance: 0.05,
                },
                {
                    item: "minecraft:bubble_coral",
                    chance: 0.05,
                },
                {
                    item: "minecraft:fire_coral",
                    chance: 0.05,
                },
                {
                    item: "minecraft:horn_coral",
                    chance: 0.05,
                },
            ],
            processingTime: 50,
        },
    ].forEach((recipe) => {
        const inputs = recipe.inputs.map((input) => input.item);
        const outputs = recipe.outputs.map((output) => Item.of(output.item).withChance(output.chance));
        event.recipes.createMilling(outputs, inputs);
    });
}
