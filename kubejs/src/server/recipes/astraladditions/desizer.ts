export function desizerRecipes() {
  onEvent("recipes", (event) => {
    desizer27SingleType(event);

    event.custom({
      type: "astraladditions:desizer",
      ingredients: [
        { item: "minecraft:bedrock" },
        { item: "minecraft:bedrock" },
        { item: "minecraft:bedrock" },
        { item: "minecraft:bedrock" },
        { item: "yttr:ultrapure_carbon_block" },
        { item: "minecraft:bedrock" },
        { item: "minecraft:bedrock" },
        { item: "minecraft:bedrock" },
        { item: "minecraft:bedrock" },

        { item: "minecraft:bedrock" },
        { item: "yttr:ultrapure_carbon_block" },
        { item: "minecraft:bedrock" },
        { item: "yttr:ultrapure_carbon_block" },
        { item: "yttr:ultrapure_carbon_block" },
        { item: "yttr:ultrapure_carbon_block" },
        { item: "minecraft:bedrock" },
        { item: "yttr:ultrapure_carbon_block" },
        { item: "minecraft:bedrock" },

        { item: "minecraft:bedrock" },
        { item: "minecraft:bedrock" },
        { item: "minecraft:bedrock" },
        { item: "minecraft:bedrock" },
        { item: "yttr:ultrapure_carbon_block" },
        { item: "minecraft:bedrock" },
        { item: "minecraft:bedrock" },
        { item: "minecraft:bedrock" },
        { item: "minecraft:bedrock" },
      ],
      output: {
        item: "yttr:compressed_ultrapure_carbon_block",
      },
    });

    event.custom({
      type: "astraladditions:desizer",
      ingredients: [
        { item: "createastral:ultramatter" },
        { item: "createastral:ultramatter" },
        { item: "createastral:ultramatter" },
        { item: "createastral:ultramatter" },
        { item: "minecraft:bedrock" },
        { item: "createastral:ultramatter" },
        { item: "createastral:ultramatter" },
        { item: "createastral:ultramatter" },
        { item: "createastral:ultramatter" },

        { item: "createastral:ultramatter" },
        { item: "minecraft:bedrock" },
        { item: "createastral:ultramatter" },
        { item: "minecraft:bedrock" },
        { item: "createastral:contained_end" },
        { item: "minecraft:bedrock" },
        { item: "createastral:ultramatter" },
        { item: "minecraft:bedrock" },
        { item: "createastral:ultramatter" },

        { item: "createastral:ultramatter" },
        { item: "createastral:ultramatter" },
        { item: "createastral:ultramatter" },
        { item: "createastral:ultramatter" },
        { item: "minecraft:bedrock" },
        { item: "createastral:ultramatter" },
        { item: "createastral:ultramatter" },
        { item: "createastral:ultramatter" },
        { item: "createastral:ultramatter" },
      ],
      output: {
        item: "yttr:root_of_continuity",
      },
    });

    event.custom({
      type: "astraladditions:desizer",
      ingredients: [
        { item: "createastral:sturdy_sheet_block" },
        { item: "createastral:sturdy_sheet_block" },
        { item: "createastral:sturdy_sheet_block" },
        { item: "createastral:sturdy_sheet_block" },
        { item: "yttr:glassy_void" },
        { item: "createastral:sturdy_sheet_block" },
        { item: "createastral:sturdy_sheet_block" },
        { item: "createastral:sturdy_sheet_block" },
        { item: "createastral:sturdy_sheet_block" },

        { item: "createastral:sturdy_sheet_block" },
        { item: "yttr:glassy_void" },
        { item: "createastral:sturdy_sheet_block" },
        { item: "yttr:glassy_void" },
        { item: "minecraft:bedrock" },
        { item: "yttr:glassy_void" },
        { item: "createastral:sturdy_sheet_block" },
        { item: "yttr:glassy_void" },
        { item: "createastral:sturdy_sheet_block" },

        { item: "createastral:sturdy_sheet_block" },
        { item: "createastral:sturdy_sheet_block" },
        { item: "createastral:sturdy_sheet_block" },
        { item: "createastral:sturdy_sheet_block" },
        { item: "yttr:glassy_void" },
        { item: "createastral:sturdy_sheet_block" },
        { item: "createastral:sturdy_sheet_block" },
        { item: "createastral:sturdy_sheet_block" },
        { item: "createastral:sturdy_sheet_block" },
      ],
      output: {
        item: "createastral:sturdy_cage",
      },
    });
  });

  function desizer27SingleType(event: Internal.RecipeEventJS) {
    interface Desizer27Recipe {
      input: { item: Special.Block };
      output: { item: Special.Item };
    }

    // recipes for 3*3*3 of a single block type
    const desizer27Recipes: Desizer27Recipe[] = [
      {
        input: { item: "farmersdelight:onion_crate" },
        output: { item: "astralfoods:compressed_onion" },
      },
      {
        input: { item: "minecraft:moss_block" },
        output: { item: "createastral:charcoal_block" },
      },
      {
        input: { item: "minecraft:dirt" },
        output: { item: "createastral:charcoal_block" },
      },
      {
        input: { item: "minecraft:dried_kelp_block" },
        output: { item: "createastral:charcoal_block" },
      },
      {
        input: { item: "minecraft:soul_soil" },
        output: { item: "minecraft:coal_block" },
      },
      {
        input: { item: "minecraft:coal_block" },
        output: { item: "minecraft:diamond_block" },
      },
    ];
    desizer27Recipes.forEach((recipe) => {
      event.custom({
        type: "astraladditions:desizer",
        ingredients: Array(27).fill(recipe.input), // Here you go :)
        output: recipe.output,
      });
    });
  }
}
