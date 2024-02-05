onEvent("recipes", (event) => {

    event.recipes // Dough to MEAT
        .createSequencedAssembly(
            ["createastral:seitan"],
            ["create:dough"],
            [event.recipes.createFilling("create:dough", ["create:dough",{ fluid: "minecraft:water", amount: 100 * mb }]),
            event.recipes.createPressing("create:dough","create:dough"),
            event.recipes.createCutting("create:dough","create:dough"),]
        )
        .transitionalItem("create:dough")
        .loops(3);

    event.recipes
        .createSequencedAssembly(
            ["minecraft:porkchop"],
            ["createastral:seitan"],
            [event.recipes.createDeploying("createastral:seitan", ["createastral:seitan","minecraft:rotten_flesh"]),
            
            event.recipes.createFilling("createastral:seitan",
                ["createastral:seitan",{ fluid: "tconstruct:blood", amount: 100 * mb }]),
            
            event.recipes.createPressing("createastral:seitan",
                                             "createastral:seitan"),
            event.recipes.createCutting("createastral:seitan",
                                            "createastral:seitan"),
            ]
        )
        .transitionalItem("createastral:seitan")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            ["minecraft:mutton"],
            ["createastral:seitan"],
            [
                event.recipes.createDeploying("createastral:seitan", [
                    "createastral:seitan",
                    "minecraft:string",
                ]),
                event.recipes.createFilling("createastral:seitan",
                ["createastral:seitan",{ fluid: "tconstruct:blood", amount: 100 * mb }]),
                event.recipes.createPressing("createastral:seitan",
                                             "createastral:seitan"),
                event.recipes.createCutting("createastral:seitan",
                                            "createastral:seitan"),
            ]
        )
        .transitionalItem("createastral:seitan")
        .loops(1);
    
    event.recipes
        .createSequencedAssembly(
            ["minecraft:beef"],
            ["createastral:seitan"],
            [
                event.recipes.createDeploying("createastral:seitan", [
                    "createastral:seitan",
                    "minecraft:moss_carpet",
                ]),
                event.recipes.createFilling("createastral:seitan",
                ["createastral:seitan",{ fluid: "tconstruct:blood", amount: 100 * mb }]),
                event.recipes.createPressing("createastral:seitan",
                                             "createastral:seitan"),
                event.recipes.createCutting("createastral:seitan",
                                            "createastral:seitan"),
            ]
        )
        .transitionalItem("createastral:seitan")
        .loops(1);
    
    event.recipes
        .createSequencedAssembly(
            ["minecraft:chicken"],
            ["createastral:seitan"],
            [
                event.recipes.createDeploying("createastral:seitan", [
                    "createastral:seitan",
                    "minecraft:wheat_seeds",
                ]),
                event.recipes.createFilling("createastral:seitan",
                ["createastral:seitan",{ fluid: "tconstruct:blood", amount: 100 * mb }]),
                event.recipes.createPressing("createastral:seitan",
                                             "createastral:seitan"),
                event.recipes.createCutting("createastral:seitan",
                                            "createastral:seitan"),
            ]
        )
        .transitionalItem("createastral:seitan")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            ["minecraft:rabbit"],
            ["createastral:seitan"],
            [
                event.recipes.createDeploying("createastral:seitan", [
                    "createastral:seitan",
                    "minecraft:carrot",
                ]),
                event.recipes.createFilling("createastral:seitan",
                ["createastral:seitan",{ fluid: "tconstruct:blood", amount: 100 * mb }]),
                event.recipes.createPressing("createastral:seitan",
                                             "createastral:seitan"),
                event.recipes.createCutting("createastral:seitan",
                                            "createastral:seitan"),
            ]
        )
        .transitionalItem("createastral:seitan")
        .loops (1);


        event.recipes
        .createSequencedAssembly( //true DIY Ham
            ["farmersdelight:ham"],
            ["minecraft:porkchop"],
            [
                event.recipes.createDeploying("minecraft:porkchop", [
                    "minecraft:porkchop",
                    "minecraft:bone",
                ]),
                event.recipes.createDeploying("minecraft:porkchop", [
                    "minecraft:porkchop",
                    "createastral:seitan",
                ]),
                
                event.recipes.createFilling("minecraft:porkchop",
                ["minecraft:porkchop",{ fluid: "tconstruct:blood", amount: 100 * mb }]),
                
                event.recipes.createPressing("minecraft:porkchop",
                "minecraft:porkchop"),
            ]
        )
        .transitionalItem("createastral:seitan")
        .loops(1);

        event.recipes
        .createSequencedAssembly( // Inksack for inky fun
            ["minecraft:ink_sac"],
            ["createastral:seitan"],
            [
                event.recipes.createDeploying("createastral:seitan", [
                    "createastral:seitan",
                    "minecraft:black_dye",
                ]),

                event.recipes.createFilling("createastral:seitan",
                ["createastral:seitan",{ fluid: "minecraft:water", amount: 500 * mB }]),

                event.recipes.createDeploying("createastral:seitan", [
                    "createastral:seitan",
                    "minecraft:black_dye",
                ]),
                
                event.recipes.createFilling("createastral:seitan",
                ["createastral:seitan",{ fluid: "minecraft:water", amount: 500 * mB }]),
                
                event.recipes.createPressing("createastral:seitan",
                "createastral:seitan"),
            ]
        )
        .transitionalItem("createastral:seitan")
        .loops(1);

const mixings = [
            {
                output: {fluid: "tconstruct:blood", amount: 81000 },
                input: [
                    "2x minecraft:beetroot",
                    { fluid: "kubejs:tomato_sauce_fluid", amount: FULL_BUCKET_AMMOUNT / 2 },
                    { fluid: "kubejs:shimmer", amount: FULL_BUCKET_AMMOUNT / 2 },
                ],
                heat: "heated",
                time: null,  //Vegan BLOOD
            },{
                output: "createastral:seitan",
                input: [
                    "3x minecraft:brown_mushroom",
                    { fluid: "createaddition:seed_oil", amount: FULL_BUCKET_AMMOUNT / 10 },
                ],
                heat: "",
                time: null,
            },{
                output: "16x minecraft:moss_block", //Yea Moss is automatable now without breaking contraptions
                input: [
                    "16x minecraft:mossy_cobblestone","minecraft:moss_block","1x minecraft:bone_meal",
                    { fluid: "minecraft:water", amount: FULL_BUCKET_AMMOUNT },
                ],
                heat: "",
                time: null,
            }];
            for (const mixing of mixings) {
                event.recipes
                    .createMixing(mixing.output, mixing.input)
                    .heatRequirement(mixing.heat)
                    .processingTime(mixing.time ?? 100);
            

                    event.recipes.createSplashing("minecraft:mossy_cobblestone", 'minecraft:cobblestone') //easy mossy cobble for moss
                    event.recipes.createSplashing("minecraft:mossy_stone_bricks", 'minecraft:stone_bricks') 
                };
})