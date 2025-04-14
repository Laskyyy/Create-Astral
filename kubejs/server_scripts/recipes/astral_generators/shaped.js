onEvent("recipes", (event) => {
    event.shaped(
        Item.of("custommachinery:custom_machine_item", {
            machine: "astralgenerators:assembler",
        }),
        ["aza", "ycy", "bxb"],
        {
            x: "create:belt_connector",
            y: "create:mechanical_arm",
            z: "techreborn:electronic_circuit",
            a: "techreborn:basic_machine_frame",
            b: "createaddition:gold_wire",
            c: "create:depot",
        }
    );
    event.shaped("astralgenerators:multiblock_projector", ["xxx", "xya", "xxx"], {
        x: "techreborn:basic_machine_frame",
        y: "create:integrated_circuit",
        a: "minecraft:light_blue_stained_glass_pane",
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
});
