export function minecraftSmeltingRecipes() {
  onEvent("recipes", (event) => {
    interface SmeltingRecipe {
      input: Internal.ItemStackJS_;
      output: Internal.ItemStackJS_;
      xp?: number;
    }
    const smeltingRecipes: SmeltingRecipe[] = [
      { input: "createastral:andesite_compound", output: "create:andesite_alloy" },
      { input: "minecraft:rotten_flesh", output: "minecraft:leather", xp: 2.0 },
      { input: "create:crushed_raw_tin", output: "techreborn:tin_ingot", xp: 0.1 },
      { input: "create:crushed_raw_silver", output: "techreborn:silver_ingot", xp: 0.5 },
      { input: "create:crushed_raw_lead", output: "techreborn:lead_ingot", xp: 0.5 },
    ] as const;
    smeltingRecipes.forEach((recipe) => {
      event.recipes.minecraft.smelting(recipe.output, recipe.input).xp(recipe.xp ?? 0.0);
    });
  });
}
