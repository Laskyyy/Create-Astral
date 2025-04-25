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
        .loops(2);

    event.recipes
        .createSequencedAssembly(
            ["minecraft:porkchop"],
            ["createastral:seitan"],
            [event.recipes.createDeploying("createastral:protopork", ["createastral:protopork","minecraft:rotten_flesh"]),

            event.recipes.createFilling("createastral:protopork",
                ["createastral:protopork",{ fluid: "tconstruct:blood", amount: 100 * mB }]),

            event.recipes.createPressing("createastral:protopork",
                                             "createastral:protopork"),
            event.recipes.createCutting("createastral:protopork",
                                            "createastral:protopork"),
            ]
        )
        .transitionalItem("createastral:protopork")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            ["minecraft:mutton"],
            ["createastral:seitan"],
            [
                event.recipes.createDeploying("createastral:protomutton", [
                    "createastral:protomutton",
                    "minecraft:string",
                ]),
                event.recipes.createFilling("createastral:protomutton",
                ["createastral:protomutton",{ fluid: "tconstruct:blood", amount: 100 * mB }]),
                event.recipes.createPressing("createastral:protomutton",
                                             "createastral:protomutton"),
                event.recipes.createCutting("createastral:protomutton",
                                            "createastral:protomutton"),
            ]
        )
        .transitionalItem("createastral:protomutton")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            ["minecraft:beef"],
            ["createastral:seitan"],
            [
                event.recipes.createDeploying("createastral:protobeef", [
                    "createastral:protobeef",
                    "minecraft:moss_carpet",
                ]),
                event.recipes.createFilling("createastral:protobeef",
                ["createastral:protobeef",{ fluid: "tconstruct:blood", amount: 100 * mB }]),
                event.recipes.createPressing("createastral:protobeef",
                                             "createastral:protobeef"),
                event.recipes.createCutting("createastral:protobeef",
                                            "createastral:protobeef"),
            ]
        )
        .transitionalItem("createastral:protobeef")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            ["minecraft:chicken"],
            ["createastral:seitan"],
            [
                event.recipes.createDeploying("createastral:protochicken", [
                    "createastral:protochicken",
                    "minecraft:wheat_seeds",
                ]),
                event.recipes.createFilling("createastral:protochicken",
                ["createastral:protochicken",{ fluid: "tconstruct:blood", amount: 100 * mB }]),
                event.recipes.createPressing("createastral:protochicken",
                                             "createastral:protochicken"),
                event.recipes.createCutting("createastral:protochicken",
                                            "createastral:protochicken"),
            ]
        )
        .transitionalItem("createastral:protochicken")
        .loops(1);

    event.recipes
        .createSequencedAssembly(
            ["minecraft:rabbit"],
            ["createastral:seitan"],
            [
                event.recipes.createDeploying("createastral:protorabbit", [
                    "createastral:protorabbit",
                    "minecraft:carrot",
                ]),
                event.recipes.createFilling("createastral:protorabbit",
                ["createastral:protorabbit",{ fluid: "tconstruct:blood", amount: 100 * mB }]),
                event.recipes.createPressing("createastral:protorabbit",
                                             "createastral:protorabbit"),
                event.recipes.createCutting("createastral:protorabbit",
                                            "createastral:protorabbit"),
            ]
        )
        .transitionalItem("createastral:protorabbit")
        .loops (1);

        event.recipes
        .createSequencedAssembly(
            ["minecraft:egg"],
            ["createastral:seitan"],
            [
                event.recipes.createDeploying("createastral:seitan", [
                    "createastral:seitan",
                    "techreborn:calcite_dust",
                ]),
                event.recipes.createFilling("createastral:seitan",
                ["createastral:seitan",{ fluid: "tconstruct:earth_slime", amount: 10 * mB }
                ]),
                event.recipes.createPressing("createastral:seitan",
                                             "createastral:seitan"),

                event.recipes.createFilling("createastral:seitan",
                ["createastral:seitan",{ fluid: "kubejs:shimmer", amount: 10 * mB }    //For the bit of magic required to create life
                ]),
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
                output: "24x minecraft:moss_block", //Yea Moss is automatable now without breaking contraptions, More Blocks out than in? MAGIC
                input: [
                    "16x minecraft:mossy_cobblestone","minecraft:moss_block","1x minecraft:bone_meal",
                    { fluid: "minecraft:water", amount: BUCKET / 2 },
                ],
                heat: "",
                time: null,
            },{
                output: "10x minecraft:kelp", // If you got the bonemeal, some kelp can be arranged
                input: ["minecraft:kelp","minecraft:bone_meal",
                    { fluid: "minecraft:water", amount: BUCKET / 2 },
                ],
                heat: "",
                time: 120,
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
                    event.recipes.createCutting("minecraft:skeleton_skull","minecraft:bone_block")
                    event.recipes.createDeploying("create:blaze_burner", ["create:empty_blaze_burner", "tconstruct:blaze_head"])
                ;
})
