(function createHauntingRecipes() {
  onEvent("recipes", (event) => {
    const hauntingRecipes = [
      {
        input: "naturalist:snail_shell",
        output: "minecraft:nautilus_shell",
      },
      {
        input: "2x techreborn:coal_dust",
        output: "techreborn:coal_dust",
      },
      {
        input: "2x minecraft:charcoal",
        output: "minecraft:coal",
      },
      {
        input: "minecraft:sand",
        output: "minecraft:soul_sand",
      },
      {
        input: "minecraft:soul_sand",
        output: "minecraft:netherrack",
      },
      {
        input: "vinery:cherry_sapling",
        output: "vinery:old_cherry_sapling",
      },
      //dead coral blocks
      {
        input: "minecraft:tube_coral_block",
        output: "minecraft:dead_tube_coral_block",
      },
      {
        input: "minecraft:brain_coral_block",
        output: "minecraft:dead_brain_coral_block",
      },
      {
        input: "minecraft:bubble_coral_block",
        output: "minecraft:dead_bubble_coral_block",
      },
      {
        input: "minecraft:fire_coral_block",
        output: "minecraft:dead_fire_coral_block",
      },
      {
        input: "minecraft:horn_coral_block",
        output: "minecraft:dead_horn_coral_block",
      },
      //dead coral
      {
        input: "minecraft:tube_coral",
        output: "minecraft:dead_tube_coral",
      },
      {
        input: "minecraft:brain_coral",
        output: "minecraft:dead_brain_coral",
      },
      {
        input: "minecraft:bubble_coral",
        output: "minecraft:dead_bubble_coral",
      },
      {
        input: "minecraft:fire_coral",
        output: "minecraft:dead_fire_coral",
      },
      {
        input: "minecraft:horn_coral",
        output: "minecraft:dead_horn_coral",
      },
      //dead coral fans
      {
        input: "minecraft:tube_coral_fan",
        output: "minecraft:dead_tube_coral_fan",
      },
      {
        input: "minecraft:brain_coral_fan",
        output: "minecraft:dead_brain_coral_fan",
      },
      {
        input: "minecraft:bubble_coral_fan",
        output: "minecraft:dead_bubble_coral_fan",
      },
      {
        input: "minecraft:fire_coral_fan",
        output: "minecraft:dead_fire_coral_fan",
      },
      {
        input: "minecraft:horn_coral_fan",
        output: "minecraft:dead_horn_coral_fan",
      },
    ];
    hauntingRecipes.forEach((recipe) => {
      event.recipes.createHaunting(recipe.output, recipe.input);
    });
  });
})();
