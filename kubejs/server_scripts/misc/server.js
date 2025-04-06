// constants

const BUCKET = 81000;
const INGOT = 9000;
const NUGGET = 1000;
const GEM = 8100;
const mB = 81;

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

// priority: 0

settings.logAddedRecipes = false;
settings.logRemovedRecipes = false;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = false;
