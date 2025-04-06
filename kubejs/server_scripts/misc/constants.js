// constants

const BUCKET = 81000;
const INGOT = 9000;
const NUGGET = 1000;
const GEM = 8100;
const mB = 81;

const oxidisationTypes = ["exposed", "weathered", "oxidized"];
const vanillaCopperBlocks = ["cut_copper", "cut_copper_stairs", "cut_copper_slab"];
const createCopperBlocks = [
    "copper_shingles",
    "copper_shingle_slab",
    "copper_shingle_stairs",
    "copper_tiles",
    "copper_tile_slab",
    "copper_tile_stairs",
];

const CATWALK_MATERIALS = [
    ["gold", "create:golden_sheet"],
    ["netherite", "createdeco:netherite_sheet"],
    ["andesite", "create:andesite_alloy"],
    ["brass", "create:brass_sheet"],
    ["cast_iron", "createdeco:cast_iron_sheet"],
    ["iron", "create:iron_sheet"],
    ["copper", "create:copper_sheet"],
    ["zinc", "#c:plates/zinc"],
];

const WOODS = [
    {
        mod: "minecraft",
        type: "oak",
        tag: "minecraft:oak_logs",
    },
    {
        mod: "minecraft",
        type: "birch",
        tag: "minecraft:birch_logs",
    },
    {
        mod: "minecraft",
        type: "spruce",
        tag: "minecraft:spruce_logs",
    },
    {
        mod: "minecraft",
        type: "jungle",
        tag: "minecraft:jungle_logs",
    },
    {
        mod: "minecraft",
        type: "acacia",
        tag: "minecraft:acacia_logs",
    },
    {
        mod: "minecraft",
        type: "dark_oak",
        tag: "minecraft:dark_oak_logs",
    },
    {
        mod: "minecraft",
        type: "crimson",
        tag: "minecraft:crimson_stems",
    },
    {
        mod: "minecraft",
        type: "warped",
        tag: "minecraft:warped_stems",
    },
    {
        mod: "ad_astra",
        type: "glacian",
        tag: "ad_astra:glacian_logs",
    },
    {
        mod: "techreborn",
        type: "rubber",
        tag: "techreborn:rubber_logs",
    },
    {
        mod: "tconstruct",
        type: "greenheart",
        tag: "tconstruct:greenheart_logs",
    },
    {
        mod: "tconstruct",
        type: "skyroot",
        tag: "tconstruct:skyroot_logs",
    },
    {
        mod: "tconstruct",
        type: "bloodshroom",
        tag: "tconstruct:bloodshroom_logs",
    },
    {
        mod: "vinery",
        type: "cherry",
        tag: "vinery:cherry_logs",
    },
];

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
    },
    {
        ingot: "yttr:delicace",
        block: "minecraft:barrier",
        plate: "createastral:ender_plating",
        useMechPress: false,
    },
];

// priority: 0

settings.logAddedRecipes = false;
settings.logRemovedRecipes = false;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = false;
