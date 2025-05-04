export function techRebornGrinderRecipes() {
  onEvent("recipes", (event) => {
    crushingToGrinding(event);
    [
      {
        input: [
          {
            item: "minecraft:pointed_dripstone",
            count: 1,
          },
        ],
        output: [
          {
            item: "minecraft:clay_ball",
            count: 1,
          },
        ],
        time: 100,
        power: 5,
      },
    ].forEach((recipe) => {
      event.custom({
        type: "techreborn:grinder",
        time: recipe.time,
        power: recipe.power,
        ingredients: recipe.input,
        results: recipe.output,
      });
    });
  });

  function crushingToGrinding(event) {
    //Grinder
    // Remove all block techreborn grinding recipes

    // I'm not giving these recipes below to crushing wheel (they're kind of redundant)

    // Remove grinder recipes that either have a unique crushing recipe, or doesn't make sense to grind

    // Remove recipes that clutter without adding enough value

    // Add crushing unique crushing recipes to grinder
    // 0: input / 1: output amount / 2: output / 3: custom time / 4: custom power
    // NOTE: some crushing recipes are auto-generated from milling recipes, which means not all these recipes will be removed.
    //  They may remove upgraded crushing recipes though. The quest book will make it clear that
    //  some milling recipes may be upgraded by the grinder instead of the crushing wheel.

    for (let recipe of CRUSHING_RECIPES_TO_BECOME_GRINDING) {
      event.custom({
        type: "techreborn:grinder",
        time: recipe[3] || DEFAULT_GRIND_TIME,
        power: recipe[4] || DEFAULT_GRIND_POWER,

        ingredients: [
          {
            item: recipe[0],
            count: 1,
          },
        ],
        results: [
          {
            item: recipe[2],
            count: recipe[1],
          },
        ],
      });
    }
  }
}
