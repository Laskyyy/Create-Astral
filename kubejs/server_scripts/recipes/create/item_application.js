(function createItemApplicationRecipes() {
  onEvent("recipes", (event) => {
    /**
     * @typedef ItemApplicationRecipe
     * @property {Helper.ItemOrTag} output
     * @property {Helper.ItemOrTag} appliedTo
     * @property {Helper.ItemOrTag} appliedItem
     */

    /** @type {ItemApplicationRecipe[]} */
    const itemApplicationRecipes = [
      {
        output: { item: "create:railway_casing" },
        appliedTo: { item: "create:andesite_casing" },
        appliedItem: { tag: "c:plates/obsidian" },
      },
      {
        output: { item: "createastral:steel_casing" },
        appliedTo: { item: "dbe:steel_plating" },
        appliedItem: { item: "ad_astra:steel_plate" },
      },
      {
        output: { item: "techreborn:advanced_machine_casing" },
        appliedTo: { item: "techreborn:basic_machine_casing" },
        appliedItem: { item: "ad_astra:steel_plate" },
      },
      {
        output: { item: "techreborn:industrial_machine_casing" },
        appliedTo: { item: "techreborn:basic_machine_casing" },
        appliedItem: { item: "create:sturdy_sheet" },
      },
      {
        output: { item: "create:shadow_steel_casing" },
        appliedTo: { item: "techreborn:advanced_machine_frame" },
        appliedItem: { item: "create:shadow_steel" },
      },
      {
        output: { item: "createastral:incomplete_brass_casing" },
        appliedTo: { item: "create:copper_casing" },
        appliedItem: { item: "create:brass_sheet" },
      },
      {
        output: { item: "create:refined_radiance_casing" },
        appliedTo: { item: "techreborn:advanced_machine_frame" },
        appliedItem: { item: "create:refined_radiance" },
      },
      {
        output: { item: "tconstruct:medium_earth_slime_crystal_bud" },
        appliedTo: { item: "tconstruct:small_earth_slime_crystal_bud" },
        appliedItem: { item: "createastral:saltmeal" },
      },
      {
        output: { item: "tconstruct:large_earth_slime_crystal_bud" },
        appliedTo: { item: "tconstruct:medium_earth_slime_crystal_bud" },
        appliedItem: { item: "createastral:saltmeal" },
      },
      {
        output: { item: "tconstruct:earth_slime_crystal_cluster" },
        appliedTo: { item: "tconstruct:large_earth_slime_crystal_bud" },
        appliedItem: { item: "createastral:saltmeal" },
      },
      {
        output: { item: "tconstruct:medium_sky_slime_crystal_bud" },
        appliedTo: { item: "tconstruct:small_sky_slime_crystal_bud" },
        appliedItem: { item: "createastral:saltmeal" },
      },
      {
        output: { item: "tconstruct:large_sky_slime_crystal_bud" },
        appliedTo: { item: "tconstruct:medium_sky_slime_crystal_bud" },
        appliedItem: { item: "createastral:saltmeal" },
      },
      {
        output: { item: "tconstruct:sky_slime_crystal_cluster" },
        appliedTo: { item: "tconstruct:large_sky_slime_crystal_bud" },
        appliedItem: { item: "createastral:saltmeal" },
      },
      {
        output: { item: "tconstruct:medium_ichor_slime_crystal_bud" },
        appliedTo: { item: "tconstruct:small_ichor_slime_crystal_bud" },
        appliedItem: { item: "createastral:saltmeal" },
      },
      {
        output: { item: "tconstruct:large_ichor_slime_crystal_bud" },
        appliedTo: { item: "tconstruct:medium_ichor_slime_crystal_bud" },
        appliedItem: { item: "createastral:saltmeal" },
      },
      {
        output: { item: "tconstruct:ichor_slime_crystal_cluster" },
        appliedTo: { item: "tconstruct:large_ichor_slime_crystal_bud" },
        appliedItem: { item: "createastral:saltmeal" },
      },
      {
        output: { item: "tconstruct:medium_ender_slime_crystal_bud" },
        appliedTo: { item: "tconstruct:small_ender_slime_crystal_bud" },
        appliedItem: { item: "createastral:saltmeal" },
      },
      {
        output: { item: "tconstruct:large_ender_slime_crystal_bud" },
        appliedTo: { item: "tconstruct:medium_ender_slime_crystal_bud" },
        appliedItem: { item: "createastral:saltmeal" },
      },
      {
        output: { item: "tconstruct:ender_slime_crystal_cluster" },
        appliedTo: { item: "tconstruct:large_ender_slime_crystal_bud" },
        appliedItem: { item: "createastral:saltmeal" },
      },
      {
        output: { item: "minecraft:medium_amethyst_bud" },
        appliedTo: { item: "minecraft:small_amethyst_bud" },
        appliedItem: { item: "createastral:saltmeal" },
      },
      {
        output: { item: "minecraft:large_amethyst_bud" },
        appliedTo: { item: "minecraft:medium_amethyst_bud" },
        appliedItem: { item: "createastral:saltmeal" },
      },
      {
        output: { item: "minecraft:amethyst_cluster" },
        appliedTo: { item: "minecraft:large_amethyst_bud" },
        appliedItem: { item: "createastral:saltmeal" },
      },
      {
        output: { item: "xpcrystals:xp_crystal_med" },
        appliedTo: { item: "xpcrystals:xp_crystal_small" },
        appliedItem: { item: "createastral:saltmeal" },
      },
      {
        output: { item: "xpcrystals:xp_crystal_cluster" },
        appliedTo: { item: "xpcrystals:xp_crystal_med" },
        appliedItem: { item: "createastral:saltmeal" },
      },
    ];
    itemApplicationRecipes.forEach((recipe) => {
      event.custom({
        type: "create:item_application",
        ingredients: [recipe.appliedTo, recipe.appliedItem],
        results: [recipe.output],
      });
    });
  });
})();
