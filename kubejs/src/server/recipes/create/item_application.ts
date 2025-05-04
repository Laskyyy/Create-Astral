export function createItemApplicationRecipes() {
  onEvent("recipes", (event) => {
    type ItemOrTag = { item: Special.Item } | { tag: Special.ItemTag };

    interface ItemApplicationRecipe {
      output: ItemOrTag;
      appliedTo: ItemOrTag;
      appliedItem: ItemOrTag;
    }

    const itemApplicationRecipes: ItemApplicationRecipe[] = [
      {
        output: { item: "create:railway_casing" },
        appliedTo: { item: "create:andesite_casing" },
        appliedItem: { tag: "c:plates/obsidian" },
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
        output: { item: "create:refined_radiance_casing" },
        appliedTo: { item: "techreborn:advanced_machine_frame" },
        appliedItem: { item: "create:refined_radiance" },
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
}
