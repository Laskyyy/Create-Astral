(function toolMaterialsRecipes() {
  const BUCKET = global.BUCKET;
  const GEM_BLOCK = global.GEM_BLOCK;
  const SLIMEBALL = global.SLIMEBALL;
  const INGOT = global.INGOT;
  const GEM = global.GEM;
  const NUGGET = global.NUGGET;
  const mB = global.mB;

  onEvent("recipes", (event) => {
    customMeltingAndCasting(event);
    partMaterialRegistry(event);
  });
  function customMeltingAndCasting(event) {
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
  function partMaterialRegistry(event) {
    //? ["material name", "actual resource namespace id", material value, needed material]
    /// i have no idea what "needed material" means but its an integer soooo i'd just put 1 if i were you
    /// im so good at 10:30 pm code documentationm X3 - _Shortman
    const materialRegistries = [
      { material: "radiant", ingredient: "create:refined_radiance", value: 1, needed: 1 },
      { material: "shadow", ingredient: "create:shadow_steel", value: 1, needed: 1 },
    ];
    materialRegistries.forEach((recipe) => {
      event.custom({
        type: "tconstruct:material",
        ingredient: { item: recipe.ingredient },
        value: recipe.value,
        needed: recipe.needed,
        material: recipe.material,
      });
    });
  }
})();
