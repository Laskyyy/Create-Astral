export function minecraftSmeltingRecipes() {
  onEvent("recipes", (event) => {
    [
      // [Input string, Output string, XP value]
      ["createastral:andesite_compound", "create:andesite_alloy"],
      ["minecraft:rotten_flesh", "minecraft:leather", 2.0],
      ["create:crushed_raw_tin", "techreborn:tin_ingot", 0.1],
      ["create:crushed_raw_silver", "techreborn:silver_ingot", 0.5],
      ["create:crushed_raw_lead", "techreborn:lead_ingot", 0.5],
    ].forEach((recipe) => {
      event.smelting(recipe[1], recipe[0]).xp(recipe[2] ?? 0.0);
    });
  });
}
