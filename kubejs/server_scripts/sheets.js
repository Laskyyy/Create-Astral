// All sheets are equal!

const MATERIALS = [
    {
        ingot: "minecraft:copper_ingot",
        block: "minecraft:copper_block",
        plate: "create:copper_sheet",
        useMechPress: true,
    },
    {
        ingot: "create:brass_ingot",
        block: "create:brass_block",
        plate: "create:brass_sheet",
        useMechPress: true,
    },
    {
        ingot: "minecraft:iron_ingot",
        block: "minecraft:iron_block",
        plate: "create:iron_sheet",
        useMechPress: true,
    },
    {
        ingot: "minecraft:gold_ingot",
        block: "minecraft:gold_block",
        plate: "create:golden_sheet",
        useMechPress: true,
    },
    {
        ingot: "create:zinc_ingot",
        block: "create:zinc_block",
        plate: "createaddition:zinc_sheet",
        useMechPress: true,
    },
    {
        ingot: "minecraft:netherite_ingot",
        block: "minecraft:netherite_block",
        plate: "createdeco:netherite_sheet",
        useMechPress: true,
    },
    {
        ingot: "createdeco:cast_iron_ingot",
        block: "createdeco:cast_iron_block",
        plate: "createdeco:cast_iron_sheet",
        useMechPress: true,
    },
    {
        ingot: "createastral:bronze_ingot",
        block: "createastral:bronze_block",
        plate: "createastral:bronze_sheet",
        useMechPress: true,
    },
    {
        ingot: "ad_astra:steel_ingot",
        block: "ad_astra:steel_block",
        plate: "ad_astra:steel_plate",
        useMechPress: false,
    },
    {
        ingot: "ad_astra:desh_ingot",
        block: "ad_astra:desh_block",
        plate: "ad_astra:desh_plate",
        useMechPress: false,
    },
    {
        ingot: "ad_astra:ostrum_ingot",
        block: "ad_astra:ostrum_block",
        plate: "ad_astra:ostrum_plate",
        useMechPress: false,
    },
    {
        ingot: "ad_astra:calorite_ingot",
        block: "ad_astra:calorite_block",
        plate: "ad_astra:calorite_plate",
        useMechPress: false,
    },
    {
        ingot: "techreborn:electrum_ingot",
        block: "techreborn:electrum_storage_block",
        plate: "techreborn:electrum_plate",
        useMechPress: true,
    },
    {
        ingot: "techreborn:invar_ingot",
        block: "techreborn:invar_storage_block",
        plate: "techreborn:invar_plate",
        useMechPress: true,
    },
    {
        ingot: "techreborn:lead_ingot",
        block: "techreborn:lead_storage_block",
        plate: "techreborn:lead_plate",
        useMechPress: true,
    },
    {
        ingot: "techreborn:silver_ingot",
        block: "techreborn:silver_storage_block",
        plate: "techreborn:silver_plate",
        useMechPress: true,
    },
    {
        ingot: "techreborn:tin_ingot",
        block: "techreborn:tin_storage_block",
        plate: "techreborn:tin_plate",
        useMechPress: true,
    },
    {
        ingot: "techreborn:diamond_dust",
        block: "minecraft:diamond_block",
        plate: "techreborn:diamond_plate",
        useMechPress: false,
    }
];

onEvent("recipes", (event) => {
    MATERIALS.forEach((material) => {
        // wood plates are special
        event.recipes.createPressing("techreborn:wood_plate", "#minecraft:planks");
        event.recipes.createCutting("techreborn:wood_plate", "#minecraft:planks");

        event.remove({ not: { mod: "tconstruct" }, output: material.plate });
        if (material.useMechPress) {
            event.recipes.createPressing(material.plate, material.ingot);
        }
        event.custom({
            type: "techreborn:compressor",
            power: 10,
            time: 300,
            ingredients: [
                {
                    item: material.ingot,
                },
            ],
            results: [
                {
                    item: material.plate,
                },
            ],
        });
        event.custom({
            type: "techreborn:implosion_compressor",
            power: 30,
            time: 1200,
            ingredients: [
                {
                    item: material.block,
                },
                {
                    item: "minecraft:tnt",
                },
            ],
            results: [
                {
                    item: material.plate,
                    count: 9,
                },
            ],
        });
        event.custom({
            type: "techreborn:implosion_compressor",
            power: 50,
            time: 300,
            ingredients: [
                {
                    item: material.block,
                    count: 4,
                },
                {
                    item: "minecraft:end_crystal",
                },
            ],
            results: [
                {
                    item: material.plate,
                    count: 36,
                },
                {
                    item: "techreborn:dark_ashes_dust",
                    count: 4,
                },
            ],
        });
    });
});
