(function CreateEnchantmentMixingRecipes() {
  // Fluid unit constants
  const { BUCKET, BOTTLE, GEM_BLOCK, SLIMEBALL, INGOT, GEM, NUGGET, mB } = global.fluids;
  
  /** NOTE:
   * Every enchantment that exceeds vanilla levels has been commented out,
   * since anvils don't let you do that anyways. To be fixed.
   */

  /** Default enchantment book mixing time */
  const BASE_PROCESSING_TIME = 100;

  /**
   * @typedef EnchantingMixingRecipe
   * @property {string} enchantment
   * @property {number} level
   * @property {Internal.IngredientJS_} input
   * @property {"heated" | "superheated"} [heat]
   * @property {number} [time]
  */

  /** @type {EnchantingMixingRecipe[]} */
  const enchantmentMixingRecipes = [
    {
      enchantment: "minecraft:mending",
			level: 1,
      input: [Item.of("minecraft:book", 6), Item.of("create:experience_nugget", 4)],
      heat: "heated",
      time: 700,
    },
    {
      enchantment: "minecraft:sharpness",
			level: 2,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:sharpness",
			level: 3,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:2s}]}'),
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:sharpness",
			level: 4,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:3s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:sharpness",
			level: 5,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:4s}]}'),
        "createastral:experience_ingot",
        { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   enchantment: "minecraft:sharpness",
		//	 level: 6,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:5s}]}'),
    //     "create:experience_block",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   enchantment: "minecraft:sharpness",
		//	 level: 7,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:6s}]}'),
    //     "create:experience_block",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      enchantment: "minecraft:unbreaking",
			level: 2,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:unbreaking",
			level: 3,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   enchantment: "minecraft:unbreaking",
		//   level: 4,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:3s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   enchantment: "minecraft:unbreaking",
		//	 level: 5,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:4s}]}'),
    //     "createastral:experience_ingot",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      enchantment: "minecraft:protection",
			level: 2,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:protection",
			level: 3,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:protection",
			level: 4,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:3s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    // {
    //   enchantment: "minecraft:protection",
		//	 level: 5,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:4s}]}'),
    //     "createastral:experience_ingot",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:shimmer", amount: BUCKET },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   enchantment: "minecraft:protection",
		//	 level: 6,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:5s}]}'),
    //     "create:experience_block",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   enchantment: "minecraft:protection",
		//	 level: 7,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:6s}]}'),
    //     "create:experience_block",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      enchantment: "minecraft:fire_protection",
			level: 2,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:fire_protection",
			level: 3,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:fire_protection",
			level: 4,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:3s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   enchantment: "minecraft:fire_protection",
		//	 level: 5,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:4s}]}'),
    //     "createastral:experience_ingot",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   enchantment: "minecraft:fire_protection",
		//	 level: 6,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:5s}]}'),
    //     "create:experience_block",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      enchantment: "minecraft:blast_protection",
			level: 2,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:blast_protection",
			level: 3,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:blast_protection",
			level: 4,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:3s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   enchantment: "minecraft:blast_protection",
		//	 level: 5,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:4s}]}'),
    //     "createastral:experience_ingot",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   enchantment: "minecraft:blast_protection",
		//	 level: 6,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:5s}]}'),
    //     "create:experience_block",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      enchantment: "minecraft:projectile_protection",
			level: 2,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:projectile_protection",
			level: 3,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:projectile_protection",
			level: 4,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:3s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   enchantment: "minecraft:projectile_protection",
		//	 level: 5,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:4s}]}'),
    //     "createastral:experience_ingot",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   enchantment: "minecraft:projectile_protection",
		//	 level: 6,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:5s}]}'),
    //     "create:experience_block",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      enchantment: "minecraft:thorns",
			level: 2,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:thorns",
			level: 3,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   enchantment: "minecraft:thorns",
		//	 level: 4,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:3s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   enchantment: "minecraft:thorns",
		//	 level: 5,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:4s}]}'),
    //     "createastral:experience_ingot",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      enchantment: "minecraft:sweeping",
			level: 2,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:sweeping",
			level: 3,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   enchantment: "minecraft:sweeping",
		//	 level: 4,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:3s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   enchantment: "minecraft:sweeping",
		//	 level: 5,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:4s}]}'),
    //     "createastral:experience_ingot",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      enchantment: "minecraft:soul_speed",
			level: 2,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:soul_speed",
			level: 3,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   enchantment: "minecraft:soul_speed",
		// 	 level: 4,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:3s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   enchantment: "minecraft:soul_speed",
		//	 level: 5,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:4s}]}'),
    //     "createastral:experience_ingot",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      enchantment: "minecraft:smite",
			level: 2,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:smite",
			level: 3,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:smite",
			level: 4,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:3s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:smite",
			level: 5,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:4s}]}'),
        "createastral:experience_ingot",
        { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   enchantment: "minecraft:smite",
		//	 level: 6,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:5s}]}'),
    //     "create:experience_block",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   enchantment: "minecraft:smite",
		//	 level: 7,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:6s}]}'),
    //     "create:experience_block",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      enchantment: "minecraft:respiration",
			level: 2,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:respiration",
			level: 3,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   enchantment: "minecraft:respiration",
		//	 level: 4,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:3s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   enchantment: "minecraft:respiration",
		//	 level: 5,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:4s}]}'),
    //     "createastral:experience_ingot",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      enchantment: "minecraft:quick_charge",
			level: 2,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:quick_charge",
			level: 3,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   enchantment: "minecraft:quick_charge",
		//	 level: 4,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:3s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   enchantment: "minecraft:quick_charge",
		//	 level: 5,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:4s}]}'),
    //     "createastral:experience_ingot",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      enchantment: "minecraft:punch",
			level: 2,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:punch",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   enchantment: "minecraft:punch",
		//	 level: 3,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:punch",lvl:2s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   enchantment: "minecraft:punch",
		//	 level: 4,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:punch",lvl:3s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      enchantment: "minecraft:power",
			level: 2,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:power",
			level: 3,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:power",
			level: 4,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:3s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:power",
			level: 5,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:4s}]}'),
        "createastral:experience_ingot",
        { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   enchantment: "minecraft:power",
		//	 level: 6,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:5s}]}'),
    //     "create:experience_block",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   enchantment: "minecraft:power",
		//	 level: 7,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:6s}]}'),
    //     "create:experience_block",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      enchantment: "minecraft:piercing",
			level: 2,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:piercing",
			level: 3,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    // {
    //   enchantment: "minecraft:piercing",
		//	 level: 4,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:3s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:shimmer", amount: BUCKET },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   enchantment: "minecraft:piercing",
		//	 level: 5,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:4s}]}'),
    //     "createastral:experience_ingot",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      enchantment: "minecraft:piercing",
			level: 6,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:5s}]}'),
        "create:experience_block",
        { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
        { fluid: "kubejs:hellfire", amount: 250 * mB },
      ],
      heat: "superheated",
    },
    {
      enchantment: "minecraft:looting",
			level: 2,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:looting",
			level: 3,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   enchantment: "minecraft:looting",
		//	 level: 4,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:3s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   enchantment: "minecraft:looting",
		//	 level: 5,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:4s}]}'),
    //     "createastral:experience_ingot",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      enchantment: "minecraft:knockback",
			level: 2,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:knockback",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   enchantment: "minecraft:knockback",
		//	 level: 3,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:knockback",lvl:2s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   enchantment: "minecraft:knockback",
		//	 level: 4,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:knockback",lvl:3s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      enchantment: "minecraft:frost_walker",
			level: 2,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   enchantment: "minecraft:frost_walker",
		//	 level: 3,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:2s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   enchantment: "minecraft:frost_walker",
		//	 level: 4,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:3s}]}'),
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      enchantment: "minecraft:fortune",
			level: 2,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:fortune",
			level: 3,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   enchantment: "minecraft:fortune",
		//	 level: 4,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:3s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   enchantment: "minecraft:fortune",
		//	 level: 5,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:4s}]}'),
    //     "createastral:experience_ingot",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      enchantment: "minecraft:fire_aspect",
			level: 2,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   enchantment: "minecraft:fire_aspect",
		//	 level: 3,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:2s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   enchantment: "minecraft:fire_aspect",
		//	 level: 4,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:3s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      enchantment: "minecraft:feather_falling",
			level: 2,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:feather_falling",
			level: 3,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:feather_falling",
			level: 4,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:3s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   enchantment: "minecraft:feather_falling",
		//	 level: 5,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:4s}]}'),
    //     "createastral:experience_ingot",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   enchantment: "minecraft:feather_falling",
		//	 level: 6,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:5s}]}'),
    //     "create:experience_block",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      enchantment: "minecraft:efficiency",
			level: 2,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:efficiency",
			level: 3,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:efficiency",
			level: 4,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:3s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:efficiency",
			level: 5,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:4s}]}'),
        "createastral:experience_ingot",
        { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   enchantment: "minecraft:efficiency",
		//	 level: 6,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:5s}]}'),
    //     "create:experience_block",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   enchantment: "minecraft:efficiency",
		//	 level: 7,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:6s}]}'),
    //     "create:experience_block",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      enchantment: "minecraft:depth_strider",
			level: 2,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:depth_strider",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:depth_strider",
			level: 3,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:depth_strider",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    {
      enchantment: "minecraft:bane_of_arthropods",
			level: 2,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:bane_of_arthropods",
			level: 3,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:bane_of_arthropods",
			level: 4,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:3s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:bane_of_arthropods",
			level: 5,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:4s}]}'),
        "createastral:experience_ingot",
        { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   enchantment: "minecraft:bane_of_arthropods",
		//	 level: 6,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:5s}]}'),
    //     "create:experience_block",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   enchantment: "minecraft:bane_of_arthropods",
		//	 level: 7,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:6s}]}'),
    //     "create:experience_block",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      enchantment: "minecraft:lure",
			level: 2,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:lure",
			level: 3,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   enchantment: "minecraft:lure",
		//	 level: 4,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:3s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   enchantment: "minecraft:lure",
		// 	 level: 5,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:4s}]}'),
    //     "createastral:experience_ingot",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      enchantment: "minecraft:luck_of_the_sea",
			level: 2,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:luck_of_the_sea",
			level: 3,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   enchantment: "minecraft:luck_of_the_sea",
		//	 level: 4,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:3s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   enchantment: "minecraft:luck_of_the_sea",
		//	 level: 5,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:4s}]}'),
    //     "createastral:experience_ingot",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      enchantment: "minecraft:loyalty",
			level: 2,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:loyalty",
			level: 3,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   enchantment: "minecraft:loyalty",
		//	 level: 4,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:3s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   enchantment: "minecraft:loyalty",
		//	 level: 5,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:4s}]}'),
    //     "createastral:experience_ingot",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      enchantment: "minecraft:riptide",
			level: 2,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:riptide",
			level: 3,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   enchantment: "minecraft:riptide",
		//	 level: 4,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:3s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   enchantment: "minecraft:riptide",
		//	 level: 5,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:4s}]}'),
    //     "createastral:experience_ingot",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      enchantment: "minecraft:impaling",
			level: 2,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:impaling",
			level: 3,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:impaling",
			level: 4,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:3s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "minecraft:impaling",
			level: 5,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:4s}]}'),
        "createastral:experience_ingot",
        { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   enchantment: "minecraft:impaling",
		//	 level: 6,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:5s}]}'),
    //     "create:experience_block",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   enchantment: "minecraft:impaling",
		//	 level: 7,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:6s}]}'),
    //     "create:experience_block",
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
    //     { fluid: "kubejs:hellfire", amount: 250 * mB },
    //   ],
    //   heat: "superheated",
    // },
    {
      enchantment: "farmersdelight:backstabbing",
			level: 2,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:1s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "heated",
    },
    {
      enchantment: "farmersdelight:backstabbing",
			level: 3,
      input: [
        Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:2s}]}'),
        { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        { fluid: "kubejs:shimmer", amount: BUCKET },
      ],
      heat: "superheated",
    },
    // {
    //   enchantment: "farmersdelight:backstabbing",
		//	 level: 4,
    //   input: [
    //     Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:3s}]}'),
    //     { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
    //     { fluid: "kubejs:hellfire", amount: 125 * mB },
    //   ],
    //   heat: "superheated",
    // },
    // {
    //   enchantment: "farmersdelight:backstabbing",
		//	 level: 5,
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
      let enchant_name = recipe.enchantment.split(":")[1];

      event.recipes
        .createMixing(
          Item.of(
            "minecraft:enchanted_book",
            `{StoredEnchantments:[{id:"${recipe.enchantment}",lvl:${recipe.level}s}]}`
          ),
          recipe.input
        )
        .heatRequirement(recipe.heat ?? "none")
        .processingTime(recipe.time ?? BASE_PROCESSING_TIME)
        .id(`kubejs:enchant_mixing_${enchant_name}_${recipe.level}`);
    });
  });
})();