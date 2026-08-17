(function CreateEnchantmentMixingRecipes() {
  // Fluid unit constants
  const { BUCKET, BOTTLE, GEM_BLOCK, SLIMEBALL, INGOT, GEM, NUGGET, mB } = global.fluids;
  
  /** NOTE:
   * Every enchantment that exceeds vanilla levels has been commented out,
   * since anvils don't let you do that anyways. To be fixed.
   */

  /**
   * @typedef MixingRecipe
   * @property {Internal.IngredientJS_} output
   * @property {Internal.IngredientJS_} input
   * @property {"heated" | "superheated"} [heat]
   * @property {number} [time]
   */

  /** @type {MixingRecipe[]} */
  const enchantmentMixingRecipes = [
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:mending",lvl:1s}]}'),
      input: [Item.of("minecraft:book", 6), Item.of("create:experience_nugget", 4)],
      heat: "heated",
      time: 700,
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:2s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:3s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:2s}]}'),
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:4s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:3s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:5s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:4s}]}'),
        "createastral:experience_ingot",
        { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:6s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:5s}]}'),
    //     "create:experience_block",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:7s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:6s}]}'),
    //     "create:experience_block",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:2s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:3s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:4s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:3s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:5s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:4s}]}'),
    //     "createastral:experience_ingot",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:2s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:3s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:4s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:3s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:5s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:4s}]}'),
    //     "createastral:experience_ingot",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:shimmer", amount: BUCKET },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:6s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:5s}]}'),
    //     "create:experience_block",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:7s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:6s}]}'),
    //     "create:experience_block",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:2s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:3s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:4s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:3s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:5s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:4s}]}'),
    //     "createastral:experience_ingot",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:6s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:5s}]}'),
    //     "create:experience_block",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:2s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:3s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:4s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:3s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:5s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:4s}]}'),
    //     "createastral:experience_ingot",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:6s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:5s}]}'),
    //     "create:experience_block",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:2s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:3s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:4s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:3s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   output: Item.of(
    //     "minecraft:enchanted_book",
    //     '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:5s}]}'
    //   ),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:4s}]}'),
    //     "createastral:experience_ingot",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   output: Item.of(
    //     "minecraft:enchanted_book",
    //     '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:6s}]}'
    //   ),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:5s}]}'),
    //     "create:experience_block",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:2s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:3s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:4s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:3s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:5s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:4s}]}'),
    //     "createastral:experience_ingot",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:2s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:3s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:4s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:3s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:5s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:4s}]}'),
    //     "createastral:experience_ingot",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:2s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:3s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:4s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:3s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:5s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:4s}]}'),
    //     "createastral:experience_ingot",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:2s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:3s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:4s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:3s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:5s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:4s}]}'),
        "createastral:experience_ingot",
        { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:6s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:5s}]}'),
    //     "create:experience_block",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:7s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:6s}]}'),
    //     "create:experience_block",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:2s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:3s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:4s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:3s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:5s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:4s}]}'),
    //     "createastral:experience_ingot",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:2s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:3s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:4s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:3s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:5s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:4s}]}'),
    //     "createastral:experience_ingot",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:punch",lvl:2s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:punch",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:punch",lvl:3s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:punch",lvl:2s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:punch",lvl:4s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:punch",lvl:3s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:2s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:3s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:4s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:3s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:5s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:4s}]}'),
        "createastral:experience_ingot",
        { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:6s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:5s}]}'),
    //     "create:experience_block",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:7s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:6s}]}'),
    //     "create:experience_block",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:2s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:3s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:4s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:3s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:shimmer", amount: BUCKET },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:5s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:4s}]}'),
    //     "createastral:experience_ingot",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:6s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:5s}]}'),
        "create:experience_block",
        { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
        { fluid: "kubejs:hellfire", amount: 250 * mB },
      ],
      heat: "superheated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:2s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:3s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:4s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:3s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:5s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:4s}]}'),
    //     "createastral:experience_ingot",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:knockback",lvl:2s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:knockback",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:knockback",lvl:3s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:knockback",lvl:2s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:knockback",lvl:4s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:knockback",lvl:3s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:2s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:3s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:2s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:4s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:3s}]}'),
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:2s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:3s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:4s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:3s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:5s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:4s}]}'),
    //     "createastral:experience_ingot",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:2s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:3s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:2s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:4s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:3s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:2s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:3s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:4s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:3s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:5s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:4s}]}'),
    //     "createastral:experience_ingot",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:6s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:5s}]}'),
    //     "create:experience_block",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:2s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:3s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:4s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:3s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:5s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:4s}]}'),
        "createastral:experience_ingot",
        { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:6s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:5s}]}'),
    //     "create:experience_block",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:7s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:6s}]}'),
    //     "create:experience_block",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:depth_strider",lvl:2s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:depth_strider",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:depth_strider",lvl:3s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:depth_strider",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:2s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:3s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:4s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:3s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:5s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:4s}]}'),
        "createastral:experience_ingot",
        { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   output: Item.of(
    //     "minecraft:enchanted_book",
    //     '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:6s}]}'
    //   ),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:5s}]}'),
    //     "create:experience_block",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   output: Item.of(
    //     "minecraft:enchanted_book",
    //     '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:7s}]}'
    //   ),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:6s}]}'),
    //     "create:experience_block",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:2s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:3s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:4s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:3s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:5s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:4s}]}'),
    //     "createastral:experience_ingot",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:2s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:3s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:4s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:3s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:5s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:4s}]}'),
    //     "createastral:experience_ingot",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:2s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:3s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:4s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:3s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:5s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:4s}]}'),
    //     "createastral:experience_ingot",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:2s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:3s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:4s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:3s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:5s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:4s}]}'),
    //     "createastral:experience_ingot",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:2s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:3s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:4s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:3s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:5s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:4s}]}'),
        "createastral:experience_ingot",
        { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:6s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:5s}]}'),
    //     "create:experience_block",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:7s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:6s}]}'),
    //     "create:experience_block",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:2s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:3s}]}'),
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:4s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:3s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:5s}]}'),
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:4s}]}'),
    //     "createastral:experience_ingot",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
  ];

  onEvent("recipes", (event) => {
    enchantmentMixingRecipes.forEach((recipe) => {
      event.recipes
        .createMixing(recipe.output, recipe.input)
        .heatRequirement(recipe.heat ?? "none")
        .processingTime(recipe.time ?? 100);
    });
  });
})();