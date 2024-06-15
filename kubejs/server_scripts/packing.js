// Repurposes the TR (t)Rolling Machine as a Packer, and TR Assembling Machine as an Unpacker.

/**
 * Creates a 3x3 packing recipe.
 * @param {event} event - The recipe event. Make sure that the function is called from within the event!
 * @param {string} input - Input item (ex. "minecraft:iron_ingot").
 * @param {string} output - Output item (ex. "minecraft:iron_block").
 */
function pack9(event, input, output) {
    event.custom({
        type: "techreborn:rolling_machine",
        shaped: {
            pattern: ["III", "III", "III"],
            key: {
                I: {
                    item: input,
                },
            },
            result: {
                item: output,
            },
        },
        power: 5,
        time: 250,
    });
}

/**
 * Creates a 2x2 packing recipe.
 * @param {event} event - The recipe event. Make sure that the function is called from within the event!
 * @param {string} input - Input item (ex. "minecraft:quartz").
 * @param {string} output - Output item (ex. "minecraft:quartz_block").
 */
function pack4(event, input, output) {
    event.custom({
        type: "techreborn:rolling_machine",
        shaped: {
            pattern: ["II ", "II ", "   "],
            key: {
                I: {
                    item: input,
                },
            },
            result: {
                item: output,
            },
        },
        power: 5,
        time: 250,
    });
}

/**
 * Creates an unpacking recipe.
 * @param {event} event - The recipe event. Make sure that the function is called from within the event!
 * @param {string} input - Input item (ex. "minecraft:iron_block").
 * @param {string} output - Output item (ex. "minecraft:iron_ingot").
 * @param {number} amount - The amount of item returned.
 */
function unpack(event, input, output, amount) {
    event.custom({
        type: "techreborn:assembling_machine",
        power: 5,
        time: 250,
        ingredients: [
            {
                item: input,
            },
        ],
        results: [
            {
                item: output,
                count: amount,
            },
        ],
    });
}

/*
    Required keys:
    - mod: A mod that the material is coming from.
    - type: Type of the material.
    Optional keys:
    - smallRecipe: Tells that the recipe is 2x2 instead of 3x3,
    - notUnpackable: Do not create unpacking recipes for this material,
    - hasNugget: If the material has a nugget,
    - nuggetMod: If a nugget comes from a different mod, usually the case with Minecraft materials,
    - append: What to append to the "base" material.
*/
const PACK_MATERIALS = [
    {
        mod: "minecraft",
        type: "coal",
    },
    {
        mod: "minecraft",
        type: "raw_iron",
    },
    {
        mod: "minecraft",
        type: "raw_copper",
    },
    {
        mod: "minecraft",
        type: "raw_gold",
    },
    {
        mod: "minecraft",
        type: "amethyst",
        append: "_shard",
        smallRecipe: true,
        notUnpackable: true,
    },
    {
        mod: "minecraft",
        type: "iron",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "minecraft",
        type: "copper",
        append: "_ingot",
        hasNugget: true,
        nuggetMod: "create",
    },
    {
        mod: "minecraft",
        type: "gold",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "minecraft",
        type: "diamond",
        hasNugget: true,
        nuggetMod: "techreborn",
    },
    {
        mod: "minecraft",
        type: "netherite",
        append: "_ingot",
        hasNugget: true,
        nuggetMod: "tconstruct",
    },
    {
        mod: "minecraft",
        type: "lapis",
        append: "_lazuli",
    },
    {
        mod: "minecraft",
        type: "emerald",
        hasNugget: true,
        nuggetMod: "techreborn",
    },
    {
        mod: "minecraft",
        type: "quartz",
        smallRecipe: true,
        notUnpackable: true,
    },
    {
        mod: "minecraft",
        type: "redstone",
    },
    {
        mod: "create",
        type: "raw_zinc",
    },
    {
        mod: "create",
        type: "zinc",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "create",
        type: "andesite_alloy",
    },
    {
        mod: "create",
        type: "brass",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "create",
        type: "raw_zinc",
    },
    {
        mod: "createbigcannons",
        type: "cast_iron",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "createbigcannons",
        type: "nethersteel",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "createdeco",
        type: "cast_iron",
        append: "_ingot",
        hasNugget: true,
    },
    {
        // All Tech Reborn blocks will have "_storage" appended before "_block".
        mod: "techreborn",
        type: "advanced_alloy",
        append: "_ingot",
    },
    {
        mod: "techreborn",
        type: "electrum",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "techreborn",
        type: "hot_tungstensteel",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "techreborn",
        type: "invar",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "techreborn",
        type: "lead",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "techreborn",
        type: "peridot",
        append: "_gem",
    },
    {
        mod: "techreborn",
        type: "raw_iridium",
    },
    {
        mod: "techreborn",
        type: "raw_lead",
    },
    {
        mod: "techreborn",
        type: "raw_silver",
    },
    {
        mod: "techreborn",
        type: "raw_tin",
    },
    {
        mod: "techreborn",
        type: "raw_tungsten",
    },
    {
        mod: "techreborn",
        type: "red_garnet",
        append: "_gem",
    },
    {
        mod: "techreborn",
        type: "ruby",
        append: "_gem",
    },
    {
        mod: "techreborn",
        type: "sapphire",
        append: "_gem",
    },
    {
        mod: "techreborn",
        type: "silver",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "techreborn",
        type: "tin",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "techreborn",
        type: "yellow_garnet",
        append: "_gem",
    },
    {
        mod: "tconstruct",
        type: "cobalt",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "tconstruct",
        type: "slimesteel",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "tconstruct",
        type: "amethyst_bronze",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "tconstruct",
        type: "rose_gold",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "tconstruct",
        type: "pig_iron",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "tconstruct",
        type: "queens_slime",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "tconstruct",
        type: "manyullyn",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "tconstruct",
        type: "hepatizon",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "tconstruct",
        type: "raw_cobalt",
    },
    {
        mod: "yttr",
        type: "yttrium",
        append: "_ingot",
        hasNugget: true,
    },
    {
        mod: "yttr",
        type: "raw_gadolinite", // Actually Raw Yttrium
    },
    {
        mod: "yttr",
        type: "ultrapure_carbon",
    },
    {
        mod: "yttr",
        type: "compressed_ultrapure_carbon",
    },
    {
        mod: "yttr",
        type: "brookite",
    },
    {
        mod: "yttr",
        type: "cuprosteel",
        append: "_ingot",
    },
];

const SMALL_PILES = [
    // All from Tech Reborn
    { type: "almandine" },
    { type: "andesite" },
    { type: "andradite" },
    { type: "ashes" },
    { type: "basalt" },
    { type: "bauxite" },
    { type: "calcite" },
    { type: "charcoal" },
    { type: "cinnabar" },
    { type: "clay" },
    { type: "coal" },
    { type: "dark_ashes" },
    { type: "diamond" },
    { type: "diorite" },
    { type: "electrum" },
    { type: "emerald" },
    { type: "ender_eye" },
    { type: "ender_pearl" },
    { type: "endstone" },
    { type: "flint" },
    { type: "galena" },
    { type: "glowstone", dust: "minecraft:glowstone_dust" },
    { type: "granite" },
    { type: "grossular" },
    { type: "lazurite" },
    { type: "magnesium" },
    { type: "manganese" },
    { type: "marble" },
    { type: "netherrack" },
    { type: "obsidian" },
    { type: "olivine" },
    { type: "peridot" },
    { type: "phosphorous" },
    { type: "pyrite" },
    { type: "pyrope" },
    { type: "quartz" },
    { type: "redstone", dust: "minecraft:redstone" },
    { type: "red_garnet" },
    { type: "ruby" },
    { type: "sapphire" },
    { type: "saw" },
    { type: "sodalite" },
    { type: "spessartine" },
    { type: "sphalerite" },
    { type: "steel" },
    { type: "uvarovite" },
    { type: "yellow_garnet" },
];

const COMPRESSION_DEGREES = [
    "",
    "double_",
    "triple_",
    "quadruple_",
    "quintuple_",
    "sextuple_",
    "septuple_",
    "octuple_",
];

const COMPRESSABLE_MATERIALS = [
    "stone",
    "granite",
    "diorite",
    "andesite",
    "cobblestone",
    "gravel",
    "sand",
    "dirt",
    "netherrack",
    "basalt",
    "deepslate",
    "cobbled_deepslate",
    "blackstone",
    "end_stone",
];

onEvent("recipes", (event) => {
    event.remove({ type: "techreborn:assembling_machine" });
    event.remove({ type: "techreborn:rolling_machine" });

    // Resources, resource blocks and resource nuggets
    PACK_MATERIALS.forEach((material) => {
        let ingotID = `${material.mod}:${material.type}${material.append ?? ""}`;
        let blockID = `${material.mod}:${material.type}${material.mod == "techreborn" ? "_storage" : ""}_block`; // Tech Reborn moment
        let nuggetID = `${material.nuggetMod ?? material.mod}:${material.type}_nugget`;
        if (material.smallRecipe) {
            pack4(event, ingotID, blockID);
            if (!material.notUnpackable) {
                unpack(event, blockID, ingotID, 4);
            }
        } else {
            pack9(event, ingotID, blockID);
            if (!material.notUnpackable) {
                unpack(event, blockID, ingotID, 9);
            }
            if (material.hasNugget) {
                pack9(event, nuggetID, ingotID);
                if (!material.notUnpackable) {
                    unpack(event, ingotID, nuggetID, 9);
                }
            }
        }
    });

    // Special case for Glowstone, since its block doesn't end with "_block"
    pack4(event, "minecraft:glowstone_dust", "minecraft:glowstone");

    // Small Dusts -> Dusts and vice versa
    SMALL_PILES.forEach((dust) => {
        let smallDustID = `techreborn:${dust.type}_small_dust`;
        let largeDustID = dust.dust ?? `techreborn:${dust.type}_dust`;

        pack4(event, smallDustID, largeDustID);
        unpack(event, largeDustID, smallDustID, 4);
    });

    //Compressed mass-produced blocks
    COMPRESSABLE_MATERIALS.forEach((material) => {
        for (let i = 0; i < 8; i++) {
            let compressDown =
                i == 0 ? `minecraft:${material}` : `compressor:${COMPRESSION_DEGREES[i - 1]}compressed_${material}`;
            let compressUp = `compressor:${COMPRESSION_DEGREES[i]}compressed_${material}`;
            pack9(event, compressDown, compressUp);
            unpack(event, compressUp, compressDown, 9);
        }
    });
});
