(function toolMaterialsRecipes() {
  const { BUCKET, GEM_BLOCK, SLIMEBALL, INGOT, GEM, NUGGET, mB } = global.fluids;

  onEvent("recipes", (event) => {
    customMeltingAndCasting(event);
    partMaterialRegistry(event);
  });
  /** @param {Internal.RecipeEventJS} event */
  function customMeltingAndCasting(event) {
    /**
     * @typedef MaterialRecipe
     * @property {Special.Fluid} fluid
     * @property {number} temp
     * @property {string} toolMaterial
     */

    /** @type {MaterialRecipe[]} */
    const materialRecipes = [
      {
        fluid: "kubejs:molten_calorite",
        temp: 3000,
        toolMaterial: "tconstruct:calorite",
      },
      {
        fluid: "kubejs:molten_desh",
        temp: 425,
        toolMaterial: "tconstruct:desh",
      },
      {
        fluid: "kubejs:molten_ostrum",
        temp: 3000,
        toolMaterial: "tconstruct:ostrum",
      },
      {
        fluid: "kubejs:molten_radiance",
        temp: 425,
        toolMaterial: "tconstruct:radiant",
      },
      {
        fluid: "kubejs:molten_shadowsteel",
        temp: 425,
        toolMaterial: "tconstruct:shadow",
      },
    ];
    materialRecipes.forEach((recipe) => {
      event.custom({
        type: "tconstruct:material_fluid",
        fluid: {
          name: recipe.fluid,
          amount: INGOT,
        },
        temperature: recipe.temp,
        output: recipe.toolMaterial,
      });
      event.custom({
        type: "tconstruct:material_melting",
        input: recipe.toolMaterial,
        temperature: recipe.temp,
        result: {
          fluid: recipe.fluid,
          amount: INGOT,
        },
      });
    });
  }
  /** @param {Internal.RecipeEventJS} event */
  function partMaterialRegistry(event) {
    /// i have no idea what "needed material" means but its an integer soooo i'd just put 1 if i were you
    /// im so good at 10:30 pm code documentationm X3 - _Shortman
    /**
     * @typedef MaterialRegistry
     * @property {string} material Specifies the type of the material.
     * @property {Helper.ItemOrTag} ingredient Specifies the ingredient this material uses to repair.
     * @property {Helper.ItemOrTag} [leftover] Specifies the leftover material, if needed.
     * @property {number} value Specifies the amount of ingots worth of material that this material repairs.
     * @property {number} needed Specifies the amount needed for 1 ingot worth of material.
     */
    /** @type {MaterialRegistry[]} */
    const materialRegistries = [
      { material: "tconstruct:radiant", ingredient: { item: "create:refined_radiance" }, value: 1, needed: 1 },
      { material: "tconstruct:shadow", ingredient: { item: "create:shadow_steel" }, value: 1, needed: 1 },
      { material: "tconstruct:desh", ingredient: { tag: "c:ingots/desh" }, value: 1, needed: 1 },
      {
        material: "tconstruct:desh",
        ingredient: { tag: "c:storage_blocks/desh" },
        leftover: { tag: "c:ingots/desh" },
        value: 9,
        needed: 1,
      },
      { material: "tconstruct:desh", ingredient: { tag: "c:nuggets/desh" }, value: 1, needed: 9 },
      { material: "tconstruct:ostrum", ingredient: { tag: "c:ingots/ostrum" }, value: 1, needed: 1 },
      {
        material: "tconstruct:ostrum",
        ingredient: { tag: "c:storage_blocks/ostrum" },
        leftover: { tag: "c:ingots/ostrum" },
        value: 9,
        needed: 1,
      },
      { material: "tconstruct:ostrum", ingredient: { tag: "c:nuggets/ostrum" }, value: 1, needed: 9 },
      { material: "tconstruct:calorite", ingredient: { tag: "c:ingots/calorite" }, value: 1, needed: 1 },
      {
        material: "tconstruct:calorite",
        ingredient: { tag: "c:storage_blocks/calorite" },
        leftover: { tag: "c:ingots/calorite" },
        value: 9,
        needed: 1,
      },
      { material: "tconstruct:calorite", ingredient: { tag: "c:nuggets/calorite" }, value: 1, needed: 9 },
    ];
    materialRegistries.forEach((recipe) => {
      /** @type {{type: "tconstruct:material", ingredient: Helper.ItemOrTag, leftover?: Helper.ItemOrTag, value: number, needed: number, material: string}} */
      const recipeJSON = {
        type: "tconstruct:material",
        ingredient: recipe.ingredient,
        value: recipe.value,
        needed: recipe.needed,
        material: recipe.material,
      };
      if (recipe.leftover) recipeJSON.leftover = recipe.leftover;
      event.custom(recipeJSON);
    });
  }
})();
