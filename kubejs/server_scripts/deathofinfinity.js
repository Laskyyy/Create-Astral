
onEvent("recipes", (event) => {

    event.recipes
        .createSequencedAssembly(
            ["minecraft:small_amethyst_bud"],
            ["minecraft:amethyst_shard"],
            [event.recipes.createFilling("minecraft:amethyst_shard", ["minecraft:amethyst_shard",{ fluid: "minecraft:water", amount: BUCKET / 4 }]),
            event.recipes.createFilling("minecraft:amethyst_shard", ["minecraft:amethyst_shard",{ fluid: "kubejs:shimmer", amount: 10 * mB }]),
            event.recipes.createFilling("minecraft:amethyst_shard", ["minecraft:amethyst_shard",{ fluid: "minecraft:water", amount: BUCKET / 4 }]),
            event.recipes.createFilling("minecraft:amethyst_shard", ["minecraft:amethyst_shard",{ fluid: "kubejs:shimmer", amount: 10 * mB }]),
        ])
        .transitionalItem("minecraft:amethyst_shard")
        .loops(1);

        event.recipes
        .createSequencedAssembly(
            ["minecraft:medium_amethyst_bud"],
            ["minecraft:small_amethyst_bud"],
            [event.recipes.createFilling("minecraft:small_amethyst_bud", ["minecraft:small_amethyst_bud",{ fluid: "minecraft:water", amount: BUCKET / 4 }]),
            event.recipes.createFilling("minecraft:small_amethyst_bud", ["minecraft:small_amethyst_bud",{ fluid: "kubejs:shimmer", amount: 10 * mB }]),
            event.recipes.createFilling("minecraft:small_amethyst_bud", ["minecraft:small_amethyst_bud",{ fluid: "minecraft:water", amount: BUCKET / 4 }]),
            event.recipes.createFilling("minecraft:small_amethyst_bud", ["minecraft:small_amethyst_bud",{ fluid: "kubejs:shimmer", amount: 10 * mB }]),
        ])
        .transitionalItem("minecraft:small_amethyst_bud")
        .loops(1);

        event.recipes
        .createSequencedAssembly(
            ["minecraft:large_amethyst_bud"],
            ["minecraft:medium_amethyst_bud"],
            [event.recipes.createFilling("minecraft:medium_amethyst_bud", ["minecraft:medium_amethyst_bud",{ fluid: "minecraft:water", amount: BUCKET / 4 }]),
            event.recipes.createFilling("minecraft:medium_amethyst_bud", ["minecraft:medium_amethyst_bud",{ fluid: "kubejs:shimmer", amount: 10 * mB }]),
            event.recipes.createFilling("minecraft:medium_amethyst_bud", ["minecraft:medium_amethyst_bud",{ fluid: "minecraft:water", amount: BUCKET / 4 }]),
            event.recipes.createFilling("minecraft:medium_amethyst_bud", ["minecraft:medium_amethyst_bud",{ fluid: "kubejs:shimmer", amount: 10 * mB }]),
        ])
        .transitionalItem("minecraft:medium_amethyst_bud")
        .loops(1);

        event.recipes
        .createSequencedAssembly(
            ["minecraft:amethyst_cluster"],
            ["minecraft:large_amethyst_bud"],
            [event.recipes.createFilling("minecraft:large_amethyst_bud", ["minecraft:large_amethyst_bud",{ fluid: "minecraft:water", amount: BUCKET / 4 }]),
            event.recipes.createFilling("minecraft:large_amethyst_bud", ["minecraft:large_amethyst_bud",{ fluid: "kubejs:shimmer", amount: 10 * mB }]),
            event.recipes.createFilling("minecraft:large_amethyst_bud", ["minecraft:large_amethyst_bud",{ fluid: "minecraft:water", amount: BUCKET / 4 }]),
            event.recipes.createFilling("minecraft:large_amethyst_bud", ["minecraft:large_amethyst_bud",{ fluid: "kubejs:shimmer", amount: 10 * mB }]),
        ])
        .transitionalItem("minecraft:large_amethyst_bud")
        .loops(1);

const mixings = [
    {
        output: {fluid: "minecraft:lava", amount: 125 * mB },
        input: [
            "1x createastral:stone_dust",
            "1x minecraft:cobblestone",
            { fluid: "minecraft:lava", amount: 50 * mB },
        ],
        heat: "",
        time: null,
    },{
    output: {fluid: "minecraft:lava", amount: 250 * mB },
    input: [
        "4x createastral:stone_dust",
        "2x minecraft:cobblestone",
        { fluid: "minecraft:lava", amount: 50 * mB },
    ],
    heat: "heated",
    time: null,
    },{
        output: {fluid: "minecraft:lava", amount: 500 * mB },
        input: [
            "4x createastral:stone_dust",
            "2x minecraft:netherrack",
        ],
        heat: "heated",
        time: null,
    },{
        output: {fluid: "kubejs:shimmer", amount: 250 * mB },
        input: [
            "5x minecraft:amethyst_shard",
            "2x minecraft:glow_ink_sac",
        ],
        heat: "",
        time: null,
    },{
    output: {fluid: "kubejs:shimmer", amount: 500 * mB },
    input: [
        "5x techreborn:amethyst_dust",
        "2x minecraft:glow_ink_sac",
    ],
    heat: "heated",
    time: null,
    },{
        output: {fluid: "kubejs:shimmer", amount: 1000 * mB },
        input: [
            "2x techreborn:amethyst_dust",
            "1x minecraft:glow_ink_sac",
            "astraladditions:lune_shroom"
        ],
        heat: "heated",
        time: null,
    }


];
    for (const mixing of mixings) {
        event.recipes
            .createMixing(mixing.output, mixing.input)
            .heatRequirement(mixing.heat)
            .processingTime(mixing.time ?? 100);
    
        };

        event.recipes.createMilling("techreborn:amethyst_dust","minecraft:amethyst_shard") //Finally a use for this item!
})