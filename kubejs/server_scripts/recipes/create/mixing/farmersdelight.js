(function createFarmersDelightCompatMixingRecipes() {
  const { BUCKET, BOTTLE, GEM_BLOCK, SLIMEBALL, INGOT, GEM, NUGGET, mB } = global.fluids;

  /**
   * Farmers' Delight mixing compat recipes.
   * @author RandomUser240306
   */
  onEvent("recipes", (event) => {
    event.forEachRecipe({ type: "farmersdelight:cooking" }, (recipe) => {
      let outputItem = recipe.getOriginalRecipeResult().getId().split(":")[1];
      let inputItems = /** @type {any} */ (recipe.json.get("ingredients").deepCopy()); // Setting this to any, since I have no idea what type this really is.
      if (outputItem == "cabbage_rolls") return; //too few ingredients to add recipe for
      const containers = {
        "minecraft:glass_bottle": ["hot_cocoa", "apple_cider", "glow_berry_custard"],
        "minecraft:pumpkin": ["stuffed_pumpkin_block"],
        "#c:dough": ["dumplings"],
      };
      let container =
        /** @type {Special.Item} */ (Object.keys(containers).find((key) => containers[key].includes(outputItem))) ??
        "minecraft:bowl";

      for (let i = 0; i < inputItems.size(); i++) {
        if (inputItems.get(i).getClass() == "class com.google.gson.JsonObject") {
          if (inputItems.get(i).has("item")) {
            if (inputItems.get(i).get("item").toString().replaceAll('"', "") == "farmersdelight:tomato_sauce") {
              let $JsonObject = java("com.google.gson.JsonObject");
              let tomato_sauce_fluid_ingredient = new $JsonObject();
              tomato_sauce_fluid_ingredient.add("fluid", "kubejs:tomato_sauce_fluid");
              tomato_sauce_fluid_ingredient.add("amount", 250 * mB);
              inputItems.set(i, tomato_sauce_fluid_ingredient);
            }
          } else {
            if (inputItems.get(i).has("tag")) {
              if (inputItems.get(i).get("tag").toString().replaceAll('"', "") == "c:dough") {
                inputItems.remove(inputItems.get(i)); //removes dough from dumpling recipe
              } else if (inputItems.get(i).get("tag").toString().replaceAll('"', "") == "c:milk") {
                let $JsonObject = java("com.google.gson.JsonObject");
                let milk = new $JsonObject();
                milk.add("fluid", "milk:still_milk");
                milk.add("amount", 250 * mB);
                inputItems.set(i, milk);
              }
            }
          }
        }
      }

      event.recipes
        .createMixing({ fluid: `kubejs:${outputItem}_fluid`, amount: 250 * mB }, inputItems)
        .heatRequirement("heated")
        .processingTime(100);

      event.recipes.createFilling(recipe.getOriginalRecipeResult(), [
        container,
        { fluid: `kubejs:${outputItem}_fluid`, amount: 250 * mB },
      ]);
    });
  });
})();