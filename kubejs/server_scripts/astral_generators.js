onEvent("recipes", (event) => {
    AGShapeRecipes(event);
    AGShapelessRecipes(event);
    AGMixingRecipes(event);
    AGMachines(event);
});

function AGMachines(event) {
    event.recipes.create
        .mixing(
            Item.of("custommachinery:custom_machine_item", {
                machine: "astralgenerators:fusion_reactor",
            }),
            [
                "astralgenerators:fusion_coil",
                "4x techreborn:industrial_circuit",
                "16x createastral:ender_plating",
                "2x createastral:astral_singularity",
                "32x createaddition:gold_wire",
                "64x create:integrated_circuit",
                "64x create:integrated_circuit",
                "8x ae2:fluix_pearl",
                "ae2:controller",
            ]
        )
        .superheated();

    event.recipes.create
        .mixing(
            Item.of("custommachinery:custom_machine_item", {
                machine: "astralgenerators:amalgamation_matrix",
            }),
            [
                "astralgenerators:superconducting_coil",
                "4x techreborn:industrial_circuit",
                "create:refined_radiance",
                "create:shadow_steel",
                "8x createastral:ender_plating",
                "createastral:astral_singularity",
                "32x createaddition:gold_wire",
                "64x phonos:redstone_chip",
                "64x phonos:redstone_chip",
            ]
        )
        .superheated();

    event.recipes.create.mixing(
        Item.of("custommachinery:custom_machine_item", {
            machine: "astralgenerators:fluid_boiler",
        }),
        [
            "techreborn:basic_machine_frame",
            "immersive_aircraft:industrial_gears",
            "create:fluid_pipe",
            "create:propeller",
        ]
    );

    event.recipes.create.mixing(
        Item.of("custommachinery:custom_machine_item", {
            machine: "astralgenerators:solid_boiler",
        }),
        [
            "techreborn:basic_machine_frame",
            "immersive_aircraft:industrial_gears",
            "minecraft:furnace",
            "create:propeller",
        ]
    );
}

function AGMixingRecipes(event) {
    event.recipes.create
        .mixing("astralgenerators:fusion_glass", ["techreborn:flint_dust", "techreborn:steel_dust", "minecraft:glass"])
        .heated();
}

function AGShapelessRecipes(event) {
    event.shapeless("astralgenerators:vent", ["ad_astra:vent", "techreborn:basic_machine_frame"]);
}

function AGShapeRecipes(event) {
    event.shaped(
        Item.of("custommachinery:custom_machine_item", {
            machine: "astralgenerators:steam_turbine",
        }),
        ["xyx", "aba", "cec"],
        {
            x: "create:fluid_pipe",
            y: "create:integrated_circuit",
            a: "create:propeller",
            b: "techreborn:basic_machine_frame",
            c: "createaddition:electric_motor",
            e: "createaddition:gold_wire",
        }
    );
    event.shaped("astralgenerators:multiblock_projector", ["xxx", "xya", "xxx"], {
        x: "techreborn:basic_machine_frame",
        y: "create:integrated_circuit",
        a: "minecraft:light_blue_stained_glass_pane",
    });
    event.shaped("astralgenerators:convergence_core", ["xxx", "xyx", "xxx"], {
        y: "techreborn:industrial_machine_frame",
        x: "create:shadow_steel",
    });
    event.shaped("astralgenerators:superconducting_coil", ["xxx", "xyx", "xxx"], {
        y: "createastral:copper_heating_coil",
        x: "techreborn:silver_plate",
    });
    event.shaped("2x astralgenerators:steel_frame", ["yyy", "xxx", "xxx"], {
        y: "minecraft:air",
        x: "ad_astra:steel_ingot",
    });
    event.shaped("astralgenerators:pipe_casing", ["xxx", "xyx", "xxx"], {
        x: "ad_astra:steel_plate",
        y: "create:fluid_pipe",
    });
    event.shaped("astralgenerators:engine_intake_casing", ["xyx", "yzy", "xyx"], {
        x: "minecraft:air",
        y: "create:propeller",
        z: "ad_astra:steel_block",
    });
    event.shaped("astralgenerators:fusion_coil", ["aaa", "axa", "yzy"], {
        x: "techreborn:advanced_machine_frame",
        y: "createaddition:capacitor",
        z: "create:integrated_circuit",
        a: "createaddition:copper_spool",
    });
    event.shaped("astralgenerators:fusion_casing", ["xyx", "yzy", "xyx"], {
        x: "ad_astra:steel_plate",
        y: "techreborn:silver_plate",
        z: "astralgenerators:superconducting_coil",
    });
}
