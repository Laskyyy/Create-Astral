onEvent("recipes", (event) => {
    const standardElectrolyserStructure = [
        ["aaa", "aaa", "ama"],
        ["bbb", "b b", "bbb"],
        ["aaa", "aaa", "aaa"],
    ]; // air gap in middle

    const fallbackElectrolyserStructure = [
        ["aaa", "aaa", "ama"],
        ["bbb", "bbb", "bbb"],
        ["aaa", "aaa", "aaa"],
    ]; // "fallback recipe for peeps who built it wrong" - lasky

    const electrolyserStructure = [standardElectrolyserStructure, fallbackElectrolyserStructure];

    [
        {
            time: 20,
            fluidInput: ["minecraft:water", mB * 100],
            fluidOutput: ["ad_astra:oxygen", mB * 40],
            // this has been buffed from 860 droplets (10.61728395061728... mB) to 3240 droplets (40 mB)
            // because 860 is a weird number and a lot of water is oxygen anyway
        },
        {
            time: 20,
            fluidInput: ["kubejs:hellfire", mB * 10],
            fluidOutput: ["kubejs:smite", mB * 100],
        },
    ].forEach((recipe) => {
        for (const electrolyser of electrolyserStructure) {
            event.custom({
                type: "custommachinery:custom_machine",
                machine: "createastral:electrolyser",
                time: recipe.time,
                requirements: [
                    {
                        type: "custommachinery:structure",
                        keys: {
                            a: "create:copper_casing",
                            b: "createastral:copper_heating_coil",
                        },
                        pattern: electrolyser,
                    },
                    {
                        type: "custommachinery:fluid",
                        fluid: recipe.fluidInput[0],
                        amount: recipe.fluidInput[1],
                        mode: "input",
                    },
                    {
                        type: "custommachinery:fluid",
                        fluid: recipe.fluidOutput[0],
                        amount: recipe.fluidOutput[1],
                        mode: "output",
                    },
                ],
            });
        }
    });
});
