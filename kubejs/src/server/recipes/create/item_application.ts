export function createItemApplicationRecipes() {
  onEvent("recipes", (event) => {
    // Ingredients: Array of objects, may include:
    // {item: "item name"}
    // {tag: "tag name"} to allow any item of tag type
    // Results: An array of one item object
    [
      {
        ingredients: [{ item: "create:andesite_casing" }, { tag: "c:plates/obsidian" }],
        results: [{ item: "create:railway_casing" }],
      },
      {
        ingredients: [{ item: "techreborn:basic_machine_casing" }, { item: "ad_astra:steel_plate" }],
        results: [{ item: "techreborn:advanced_machine_casing" }],
      },
      {
        ingredients: [{ item: "techreborn:basic_machine_casing" }, { item: "create:sturdy_sheet" }],
        results: [{ item: "techreborn:industrial_machine_casing" }],
      },
      {
        ingredients: [{ item: "techreborn:advanced_machine_frame" }, { item: "create:shadow_steel" }],
        results: [{ item: "create:shadow_steel_casing" }],
      },
      {
        ingredients: [{ item: "techreborn:advanced_machine_frame" }, { item: "create:refined_radiance" }],
        results: [{ item: "create:refined_radiance_casing" }],
      },
    ].forEach((recipe) => {
      event.custom({
        type: "create:item_application",
        ingredients: recipe.ingredients,
        results: recipe.results,
      });
    });
  });
}
