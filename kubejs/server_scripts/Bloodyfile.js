onEvent("recipes", (event) => {

    event.recipes // Dough to MEAT
        .createSequencedAssembly(
            ["createastral:seitan"],
            ["create:dough"],
            [event.recipes.createFilling("create:dough", ["create:dough",{ fluid: "minecraft:water", amount: 100 * mB }]),
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
                ["createastral:seitan",{ fluid: "tconstruct:blood", amount: 100 * mB }]),
            
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
                ["createastral:seitan",{ fluid: "tconstruct:blood", amount: 100 * mB }]),
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
                ["createastral:seitan",{ fluid: "tconstruct:blood", amount: 100 * mB }]),
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
                ["createastral:seitan",{ fluid: "tconstruct:blood", amount: 100 * mB }]),
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
                ["createastral:seitan",{ fluid: "tconstruct:blood", amount: 100 * mB }]),
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
                ["minecraft:porkchop",{ fluid: "tconstruct:blood", amount: 100 * mB }]),
                
                event.recipes.createPressing("minecraft:porkchop",
                "minecraft:porkchop"),
            ]
        )
        .transitionalItem("createastral:seitan")
        .loops(1);

        event.recipes
        .createSequencedAssembly( // Inksack for inky fun
            ["2x minecraft:ink_sac"],
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

        event.recipes
        .createSequencedAssembly( // If you need some head, drill some bone
            ["tconstruct:blaze_head"],
            ["minecraft:skeleton_skull"],
            [
                event.recipes.createDeploying("createastral:incomplete_blaze_head", [
                    "createastral:incomplete_blaze_head",
                    "minecraft:blaze_powder",
                ]),

                event.recipes.createFilling("createastral:incomplete_blaze_head",
                ["createastral:incomplete_blaze_head",{ fluid: "tconstruct:blazing_blood", amount: 100 * mB }]),
                
                event.recipes.createFilling("createastral:incomplete_blaze_head",
                ["createastral:incomplete_blaze_head",{ fluid: "kubejs:shimmer", amount: 50 * mB }]),
                
                event.recipes.createPressing("createastral:incomplete_blaze_head",
                "createastral:incomplete_blaze_head"),
            ]
        )
        .transitionalItem("createastral:incomplete_blaze_head")
        .loops(1);

const mixings = [
            {
                output: {fluid: "tconstruct:blood", amount: BUCKET },
                input: [
                    "2x minecraft:beetroot",
                    { fluid: "kubejs:tomato_sauce_fluid", amount: 900 * mB },
                    { fluid: "kubejs:shimmer", amount: 100 * mB },
                ],
                heat: "heated",
                time: null,  //Vegan BLOOD
            },{
                output: "createastral:seitan",
                input: [
                    "3x minecraft:brown_mushroom",
                    { fluid: "createaddition:seed_oil", amount: 100 * mB },
                ],
                heat: "",
                time: null,
            },{
                output: "16x minecraft:moss_block", //Yea Moss is automatable now without breaking contraptions
                input: [
                    "16x minecraft:mossy_cobblestone","minecraft:moss_block","1x minecraft:bone_meal",
                    { fluid: "minecraft:water", amount: BUCKET },
                ],
                heat: "",
                time: null,
            },{
                output: {fluid: "tconstruct:blazing_blood", amount: BUCKET },
                input: [
                    "minecraft:blaze_powder",
                    { fluid: "tconstruct:blood", amount: BUCKET },
                ],
                heat: "superheated",
                time: null,  //Vegan BLOOD
            }];
            for (const mixing of mixings) {
                event.recipes
                    .createMixing(mixing.output, mixing.input)
                    .heatRequirement(mixing.heat)
                    .processingTime(mixing.time ?? 100);}

                    event.recipes.createSplashing("minecraft:mossy_cobblestone", 'minecraft:cobblestone') //easy mossy cobble for moss
                    event.recipes.createSplashing("minecraft:mossy_stone_bricks", 'minecraft:stone_bricks')
                ;
})
