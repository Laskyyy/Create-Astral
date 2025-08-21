(function createMillingRecipes() {
  onEvent("recipes", (event) => {
    otherMillingRecipes(event);
    sifterRecipes(event);
    /**
     * @typedef MillingRecipe
     * @property {Internal.ItemStackJS_} input
     * @property {Internal.ItemStackJS_} output
     * @property {number} chance
     */

    /** @type {MillingRecipe[]} */
    const millingRecipes = [
      {
        input: "minecraft:rooted_dirt",
        output: "minecraft:dirt",
        chance: 1,
      },
      {
        input: "farmersdelight:straw",
        output: "minecraft:string",
        chance: 1,
      },
      {
        input: "minecraft:bamboo",
        output: "farmersdelight:straw",
        chance: 0.2,
      },
      {
        input: "ae2:certus_quartz_dust",
        output: "ae2:certus_crystal_seed",
        chance: 1,
      },
      {
        input: "minecraft:gravel",
        output: "minecraft:sand",
        chance: 0.5,
      },
      {
        input: "create:veridium",
        output: "minecraft:raw_copper",
        chance: 0.6,
      },
      {
        input: "create:asurine",
        output: "minecraft:lapis_lazuli",
        chance: 1,
      },
      {
        input: "create:crimsite",
        output: "minecraft:raw_iron",
        chance: 0.4,
      },
      {
        input: "create:ochrum",
        output: "minecraft:raw_gold",
        chance: 0.4,
      },
      {
        input: "create:limestone",
        output: "techreborn:raw_tin",
        chance: 0.2,
      },
      {
        input: "create:scorchia",
        output: "create:raw_zinc",
        chance: 0.4,
      },
      {
        input: "create:scoria",
        output: "minecraft:magma_block",
        chance: 1,
      },
      {
        input: "minecraft:tuff",
        output: "minecraft:iron_nugget",
        chance: 1,
      },
      {
        input: "minecraft:blackstone",
        output: "create:zinc_nugget",
        chance: 0.5,
      },
      {
        input: "minecraft:flint",
        output: "techreborn:andesite_dust",
        chance: 1,
      },
      {
        input: "minecraft:iron_nugget",
        output: "techreborn:andesite_dust",
        chance: 0.75,
      },
      {
        input: "minecraft:tube_coral_block",
        output: Item.of("minecraft:blue_dye", 2),
        chance: 1,
      },
      {
        input: "minecraft:brain_coral_block",
        output: Item.of("minecraft:pink_dye", 2),
        chance: 1,
      },
      {
        input: "minecraft:bubble_coral_block",
        output: Item.of("minecraft:purple_dye", 2),
        chance: 1,
      },
      {
        input: "minecraft:fire_coral_block",
        output: Item.of("minecraft:red_dye", 2),
        chance: 1,
      },
      {
        input: "minecraft:horn_coral_block",
        output: Item.of("minecraft:yellow_dye", 2),
        chance: 1,
      },
      {
        input: "minecraft:glow_berries",
        output: "naturalist:glow_goop",
        chance: 1,
      },
      {
        input: "naturalist:glow_goop",
        output: "minecraft:yellow_dye",
        chance: 1,
      },
      {
        input: "minecraft:twisting_vines",
        output: "minecraft:blue_dye",
        chance: 1,
      },
      {
        input: "minecraft:weeping_vines",
        output: "minecraft:red_dye",
        chance: 1,
      },
      {
        input: "minecraft:sweet_berries",
        output: "minecraft:red_dye",
        chance: 1,
      },
      {
        input: "vinery:red_grape",
        output: "minecraft:purple_dye",
        chance: 0.5,
      },
      {
        input: "vinery:white_grape",
        output: "minecraft:lime_dye",
        chance: 0.5,
      },
      {
        input: "minecraft:melon_slice",
        output: "minecraft:red_dye",
        chance: 0.5,
      },
      {
        input: "minecraft:snow_block",
        output: Item.of("minecraft:snowball", 2),
        chance: 1,
      },
      {
        input: "createastral:crushed_raw_gadolinite",
        output: "yttr:yttrium_dust",
        chance: 1,
      },
      {
        input: "createastral:broken_fragile_sheet",
        output: "create:powdered_obsidian",
        chance: 1,
      },
      {
        input: "createastral:broken_fragile_rocket_fin",
        output: Item.of("create:powdered_obsidian", 6),
        chance: 1,
      },
      {
        input: "kubejs:broken_fragile_sheet_block",
        output: Item.of("create:powdered_obsidian", 6),
        chance: 1,
      },
      {
        input: "kubejs:broken_fire_resistant_fragile_sheet_block",
        output: Item.of("create:powdered_obsidian", 6),
        chance: 1,
      },
      {
        input: "astraladditions:shimmer_blaze_rod",
        output: Item.of("astraladditions:shimmer_blaze_powder", 2),
        chance: 1,
      },
      {
        input: "minecraft:amethyst_shard",
        output: "techreborn:amethyst_dust",
        chance: 1,
      },
      {
        input: "minecraft:diorite",
        output: "minecraft:quartz",
        chance: 0.25,
      },
      {
        input: "minecraft:dried_kelp",
        output: "minecraft:gunpowder",
        chance: 0.25,
      },
      {
        input: "techreborn:rubber_log",
        output: "techreborn:sap",
        chance: 0.35,
      },
    ];
    millingRecipes.forEach((recipe) => {
      event.recipes.createMilling([Item.of(recipe.output).withChance(recipe.chance)], recipe.input);
    });
  });
  /** @param {Internal.RecipeEventJS} event */
  function otherMillingRecipes(event) {
    /**
     * @typedef OtherMillingRecipe
     * @property {Internal.ItemStackJS_} input
     * @property {Internal.ItemStackJS_[]} output
     */

    /** @type {OtherMillingRecipe[]} */
    const otherMillingRecipes = [
      {
        input: "minecraft:obsidian",
        output: ["create:powdered_obsidian", Item.of("minecraft:obsidian").withChance(0.25)],
      },
    ];
    otherMillingRecipes.forEach((recipe) => {
      event.recipes.createMilling(recipe.output, recipe.input);
    });
  }
  /** @param {Internal.RecipeEventJS} event */
  function sifterRecipes(event) {
    //? Old Sifter recipes that were transferred to the Millstone to update Create to 0.5.1

    /**
     * @typedef SifterRecipe
     * @property {{ item: Special.Item }[]} inputs
     * @property {{ item: Special.Item; chance: number }[]} outputs
     * @property {number} [processingTime] Unused.
     */

    /** @type {SifterRecipe[]} */
    const sifterRecipes = [
      {
        inputs: [{ item: "minecraft:coarse_dirt" }],
        outputs: [
          { item: "minecraft:dirt", chance: 1 },
          { item: "minecraft:flint", chance: 0.3 },
        ],
        processingTime: 50,
      },
      {
        inputs: [{ item: "minecraft:basalt" }],
        outputs: [
          { item: "minecraft:magma_cream", chance: 0.1 },
          { item: "minecraft:ghast_tear", chance: 0.05 },
          { item: "minecraft:blaze_powder", chance: 0.1 },
        ],
        processingTime: 200,
      },
      {
        inputs: [{ item: "minecraft:cobbled_deepslate" }],
        outputs: [
          { item: "minecraft:redstone", chance: 0.1 },
          { item: "create:copper_nugget", chance: 0.05 },
        ],
        processingTime: 50,
      },
      {
        inputs: [{ item: "extractinator:silt" }],
        outputs: [
          { item: "minecraft:raw_iron", chance: 0.2 },
          { item: "minecraft:raw_copper", chance: 0.4 },
          { item: "minecraft:raw_gold", chance: 0.2 },
          { item: "create:raw_zinc", chance: 0.2 },
        ],
        processingTime: 1000,
      },
      {
        inputs: [{ item: "extractinator:slush" }],
        outputs: [
          { item: "minecraft:raw_iron", chance: 0.2 },
          { item: "minecraft:raw_copper", chance: 0.4 },
          { item: "minecraft:raw_gold", chance: 0.2 },
          { item: "create:raw_zinc", chance: 0.2 },
        ],
        processingTime: 1000,
      },
      {
        inputs: [{ item: "minecraft:prismarine" }],
        outputs: [
          { item: "minecraft:cod", chance: 0.2 },
          { item: "minecraft:salmon", chance: 0.1 },
          { item: "minecraft:tropical_fish", chance: 0.05 },
          { item: "minecraft:pufferfish", chance: 0.03 },
          { item: "minecraft:nautilus_shell", chance: 0.02 },
          { item: "minecraft:lily_pad", chance: 0.2 },
          { item: "minecraft:glow_ink_sac", chance: 0.1 },
        ],
        processingTime: 100,
      },
      {
        inputs: [{ item: "minecraft:soul_sand" }],
        outputs: [
          { item: "xpcrystals:soul_compound", chance: 1 },
          { item: "xpcrystals:soul_compound", chance: 0.5 },
          { item: "minecraft:soul_sand", chance: 0.25 },
        ],
      },
      {
        inputs: [{ item: "minecraft:clay" }],
        outputs: [
          { item: "minecraft:kelp", chance: 0.2 },
          { item: "minecraft:seagrass", chance: 0.3 },
          { item: "minecraft:tube_coral", chance: 0.05 },
          { item: "minecraft:brain_coral", chance: 0.05 },
          { item: "minecraft:bubble_coral", chance: 0.05 },
          { item: "minecraft:fire_coral", chance: 0.05 },
          { item: "minecraft:horn_coral", chance: 0.05 },
        ],
        processingTime: 50,
      },
    ];
    sifterRecipes.forEach((recipe) => {
      const inputs = recipe.inputs.map((input) => input.item);
      const outputs = recipe.outputs.map((output) => Item.of(output.item).withChance(output.chance));
      event.recipes.createMilling(outputs, inputs);
    });
  }
})();
