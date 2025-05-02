onEvent("recipes", (event) => {
    [
        {
            itemInput: ["createastral:bronze_block", 1],
            fluidOutput: ["tconstruct:molten_bronze", BUCKET],
            time: 1620,
            heat: "heated",
        },
        {
            itemInput: ["createastral:bronze_ingot", 1],
            fluidOutput: ["tconstruct:molten_bronze", INGOT],
            time: 180,
            heat: "heated",
        },
        {
            itemInput: ["techreborn:bronze_nugget", 1],
            fluidOutput: ["tconstruct:molten_bronze", NUGGET],
            time: 20,
            heat: "heated",
        },
        {
            itemInput: ["createbigcannons:bronze_scrap", 1],
            fluidOutput: ["tconstruct:molten_bronze", NUGGET],
            time: 20,
            heat: "heated",
        },
        {
            itemInput: ["minecraft:coal", 8],
            fluidOutput: ["techreborn:carbon", BUCKET / 8],
            time: 300,
            heat: "heated",
        },
        {
            itemInput: ["yttr:ultrapure_carbon", 1],
            fluidOutput: ["techreborn:carbon", BUCKET / 4],
            time: 300,
            heat: "superheated",
        },
        {
            itemInput: ["createastral:ender_mush", 1],
            fluidOutput: ["kubejs:metabolic_broth", BUCKET],
            time: 750,
            heat: "superheated",
        },
        {
            itemInput: ["createastral:ender_mush", 1],
            fluidOutput: ["kubejs:metabolic_broth", BUCKET],
            time: 750,
            heat: "superheated",
        },
        {
            itemInput: ["ad_astra:ostrum_block", 1],
            fluidOutput: ["kubejs:molten_ostrum", BUCKET],
            time: 1620,
            heat: "heated",
        },
        {
            itemInput: ["ad_astra:ostrum_ingot", 1],
            fluidOutput: ["kubejs:molten_ostrum", INGOT],
            time: 180,
            heat: "heated",
        },
        {
            itemInput: ["ad_astra:ostrum_nugget", 1],
            fluidOutput: ["kubejs:molten_ostrum", NUGGET],
            time: 20,
            heat: "heated",
        },
        {
            itemInput: ["ad_astra:polished_permafrost", 1],
            fluidOutput: ["techreborn:nitrogen", BUCKET / 5],
            time: 100,
            heat: "superheated",
        },
        {
            itemInput: ["ad_astra:permafrost", 1],
            fluidOutput: ["techreborn:nitrogen", BUCKET / 10],
            time: 300,
            heat: "heated",
        },
        {
            itemInput: ["ad_astra:steel_block", 1],
            fluidOutput: ["tconstruct:molten_steel", BUCKET],
            time: 1620,
            heat: "heated",
        },
        {
            itemInput: ["ad_astra:steel_ingot", 1],
            fluidOutput: ["tconstruct:molten_steel", INGOT],
            time: 180,
            heat: "heated",
        },
        {
            itemInput: ["ad_astra:steel_nugget", 1],
            fluidOutput: ["tconstruct:molten_steel", NUGGET],
            time: 20,
            heat: "heated",
        },
    ].forEach((recipe) => {
        event.custom({
            type: "createbigcannons:melting",
            ingredients: [{ item: recipe.itemInput[0], count: recipe.itemInput[1] }],
            results: [{ fluid: recipe.fluidOutput[0], amount: recipe.fluidOutput[1] }],
            processingTime: recipe.time,
            heatRequirement: recipe.heat,
        });
    });
});
