export function toolMaterialsRecipes() {
  onEvent("recipes", (event) => {
    customMeltingAndCasting(event);
    partMaterialRegistry(event);
  });

  function customMeltingAndCasting(event) {
    [
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
    ].forEach((recipe) => {
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
    [
      //? ["material name", "actual resource namespace id", material value, needed material]
      /// i have no idea what "needed material" means but its an integer soooo i'd just put 1 if i were you
      /// im so good at 10:30 pm code documentationm X3 - _Shortman
      ["radiant", "create:refined_radiance", 1, 1],
      ["shadow", "create:shadow_steel", 1, 1],
    ].forEach((recipe) => {
      event.custom({
        type: "tconstruct:material",
        ingredient: { item: recipe[1] },
        value: recipe[2],
        needed: recipe[3],
        material: recipe[0],
      });
    });
  }
}
