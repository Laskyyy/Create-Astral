// priority: 100

global.server = Object.freeze({
  OXIDISATION_TYPES: /** @type {const} */ (["exposed", "weathered", "oxidized"]),
  OXIDIZATION_TYPES: /** @type {const} */ (["exposed", "weathered", "oxidized"]),
  VANILLA_COPPER_BLOCKS: /** @type {const} */ (["cut_copper", "cut_copper_stairs", "cut_copper_slab"]),
  CREATE_COPPER_BLOCKS: /** @type {const} */ ([
    "copper_shingles",
    "copper_shingle_slab",
    "copper_shingle_stairs",
    "copper_tiles",
    "copper_tile_slab",
    "copper_tile_stairs",
  ]),
  CATWALK_MATERIALS: /** @type {const} */ ([
    { material: "gold", sheet: "create:golden_sheet" },
    { material: "netherite", sheet: "createdeco:netherite_sheet" },
    { material: "andesite", sheet: "create:andesite_alloy" },
    { material: "brass", sheet: "create:brass_sheet" },
    { material: "cast_iron", sheet: "createdeco:cast_iron_sheet" },
    { material: "iron", sheet: "create:iron_sheet" },
    { material: "copper", sheet: "create:copper_sheet" },
    { material: "zinc", sheet: "#c:plates/zinc" },
  ]),
  WOODS: /** @type {const} */ ([
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
  ]),

  /**
   * @typedef Material
   * @property {Special.Item} ingot
   * @property {Special.Item} block
   * @property {Special.Item} plate
   * @property {boolean} useMechPress
   */

  /** @satisfies {Material[]} */
  MATERIALS: /** @type {const} */ ([
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
  ]),

  /**
   * @typedef {object} CrushingRecipeToBecomeGrinding
   * @property {object} input
   * @property {Special.Item} input.item
   * @property {object} output
   * @property {Special.Item} output.item
   * @property {number} output.count
   * @property {number} [time]
   * @property {number} [power]
   */

  /** @satisfies {CrushingRecipeToBecomeGrinding[]} */
  CRUSHING_RECIPES_TO_BECOME_GRINDING: /** @type {const} */ ([
    {
      input: { item: "minecraft:clay_ball" },
      output: { item: "techreborn:clay_dust", count: 1 },
    },
    {
      input: { item: "minecraft:amethyst_cluster" },
      output: { item: "minecraft:amethyst_shard", count: 7 },
    },
    {
      input: { item: "minecraft:prismarine_crystals" },
      output: { item: "minecraft:quartz", count: 2 },
    },
    {
      input: { item: "minecraft:saddle" },
      output: { item: "minecraft:leather", count: 3 },
    },
    {
      input: { item: "minecraft:wheat" },
      output: { item: "create:wheat_flour", count: 3 },
    },
    {
      input: { item: "minecraft:ender_pearl" },
      output: { item: "ae2:ender_dust", count: 2 },
    },
    {
      input: { item: "tconstruct:necrotic_bone" },
      output: { item: "minecraft:bone_meal", count: 6 },
    },
    {
      input: { item: "minecraft:dried_kelp" },
      output: { item: "minecraft:gunpowder", count: 1 },
    },
    {
      input: { item: "create:sturdy_sheet" },
      output: { item: "createastral:fragile_sheet", count: 1 },
    },
  ]),
  DEFAULT_GRIND_TIME: /** @type {const} */ (100), // five seconds
  DEFAULT_GRIND_POWER: /** @type {const} */ (5),
  createSequencedAssembly: (() => {
    /**
     * @typedef SequencedAssemblyIO Input, transitional and output items for the recipe.
     * @property {Internal.IngredientJS_} input The input
     * @property {Internal.ItemStackJS_} transitional The transitional, "incomplete" item.
     * @property {Internal.IngredientJS_[]} outputs The array of output items, optionally with chances defined.
     */

    /**
     * Builds a new sequenced assembly recipe.
     *
     * If `.loops(number)` isn't provided, 1 loop is the default.
     *
     * @example
     * ```js
     * new SequencedAssemblyBuilder(event, {
     *   input: "minecraft:bucket",
     *   transitional: "minecraft:bucket",
     *   outputs: ["minecraft:powder_snow_bucket"],
     * })
     *   .addDeployingStep("createastral:snowy_marimo")
     *   .addFillingStep({ fluid: "minecraft:water", amount: 250 * mB })
     *   .loops(2)
     *   .build();
     * ```
     * @param {Internal.RecipeEventJS} event The recipe event.
     * @param {SequencedAssemblyIO} io Input, transitional and output items for the recipe.
     */
    function SequencedAssemblyBuilder(event, io) {
      /** @type {Internal.RecipeEventJS} */
      this._event = event;
      /** @type {Internal.IngredientJS_} */
      this._input = io.input;
      /** @type {Internal.ItemStackJS_} */
      this._transitional = io.transitional;
      /** @type {Internal.IngredientJS_[]} */
      this._outputs = io.outputs;
      /** @type {Internal.ProcessingRecipeJS_[]} */
      this._steps = [];
      /** @type {number} */
      this._loopAmount = 1;
    }

    /**
     * Adds a new filling step.
     * @param {Internal.FluidStackJS_} fluid The fluid to use in the recipe.
     */
    SequencedAssemblyBuilder.prototype.addFillingStep = function (fluid) {
      this._steps.push(this._event.recipes.createFilling(this._transitional, [this._transitional, fluid]));
      return this;
    };

    /**
     * Adds a new pressing step.
     * @returns {this} The current instance.
     */
    SequencedAssemblyBuilder.prototype.addPressingStep = function () {
      this._steps.push(this._event.recipes.createPressing(this._transitional, this._transitional));
      return this;
    };

    /**
     * Adds a new cutting step.
     * @param {number} [processingTime] Processing time in ticks.
     * @returns {this} The current instance.
     */
    SequencedAssemblyBuilder.prototype.addCuttingStep = function (processingTime) {
      let cuttingRecipe = this._event.recipes.createCutting(this._transitional, this._transitional);
      if (typeof processingTime !== "undefined") cuttingRecipe = cuttingRecipe.processingTime(processingTime);
      this._steps.push(cuttingRecipe);
      return this;
    };

    /**
     * Adds a new deploying step.
     * @param {Internal.IngredientJS_} item
     * @returns {this} The current instance.
     */
    SequencedAssemblyBuilder.prototype.addDeployingStep = function (item) {
      this._steps.push(this._event.recipes.createDeploying(this._transitional, [this._transitional, item]));
      return this;
    };

    /**
     * Sets the amount of loops needed to finish the recipe.
     *
     * Defaults to 1 if not provided.
     * @param {number} loopAmount Amount of loops needed to finish the recipe.
     * @returns {this} The current instance.
     */
    SequencedAssemblyBuilder.prototype.loops = function (loopAmount) {
      this._loopAmount = loopAmount;
      return this;
    };

    /**
     * Builds the recipe.
     */
    SequencedAssemblyBuilder.prototype.build = function () {
      this._event.recipes.create
        .sequenced_assembly(this._outputs, this._input, this._steps)
        .transitionalItem(this._transitional)
        .loops(this._loopAmount);
    };

    /**
     * Builds a new sequenced assembly recipe.
     * @example
     * ```js
     * createSequencedAssembly(event, {
     *   input: "minecraft:bucket",
     *   transitional: "minecraft:bucket",
     *   outputs: ["minecraft:powder_snow_bucket"],
     * })
     *   .addDeployingStep("createastral:snowy_marimo")
     *   .addFillingStep({ fluid: "minecraft:water", amount: 250 * mB })
     *   .loops(2)
     *   .build();
     * ```
     * @param {Internal.RecipeEventJS} event The recipe event.
     * @param {SequencedAssemblyIO} io Input, transitional and output items for the recipe.
     */
    return function createSequencedAssembly(event, io) {
      return new SequencedAssemblyBuilder(event, io);
    };
  })(),

  /**
   * Outputs an NBT tag corresponding to given enchantments on an Enchanted Book.
   * @param {{id: Special.Enchantment, level: number}[]} enchantmentArray
   */
  enchants(enchantmentArray) {
    let nbt = "{StoredEnchantments:[";
    enchantmentArray.forEach((enchantment, index) => {
      if (index !== 0) {
        nbt += ",";
      }
      nbt += `{id:"${enchantment.id}",lvl:${enchantment.level}s}`;
    });
    nbt += "]}";
    return nbt;
  },
});
