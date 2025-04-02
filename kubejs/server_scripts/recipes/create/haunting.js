onEvent("recipes", (event) => {
    // [Input string, Output string]
    [
        ["naturalist:snail_shell", "minecraft:nautilus_shell"],
        ["2x techreborn:charcoal_dust", "techreborn:coal_dust"],
        ["2x minecraft:charcoal", "minecraft:coal"],
        ["minecraft:sand", "minecraft:soul_sand"],
        ["minecraft:soul_sand", "minecraft:netherrack"],

        //dead coral blocks
        ["minecraft:tube_coral_block", "minecraft:dead_tube_coral_block"],
        ["minecraft:brain_coral_block", "minecraft:dead_brain_coral_block"],
        ["minecraft:bubble_coral_block", "minecraft:dead_bubble_coral_block"],
        ["minecraft:fire_coral_block", "minecraft:dead_fire_coral_block"],
        ["minecraft:horn_coral_block", "minecraft:dead_horn_coral_block"],

        //dead coral
        ["minecraft:tube_coral", "minecraft:dead_tube_coral"],
        ["minecraft:brain_coral", "minecraft:dead_brain_coral"],
        ["minecraft:bubble_coral", "minecraft:dead_bubble_coral"],
        ["minecraft:fire_coral", "minecraft:dead_fire_coral"],
        ["minecraft:horn_coral", "minecraft:dead_horn_coral"],

        //dead coral fans
        ["minecraft:tube_coral_fan", "minecraft:dead_tube_coral_fan"],
        ["minecraft:brain_coral_fan", "minecraft:dead_brain_coral_fan"],
        ["minecraft:bubble_coral_fan", "minecraft:dead_bubble_coral_fan"],
        ["minecraft:fire_coral_fan", "minecraft:dead_fire_coral_fan"],
        ["minecraft:horn_coral_fan", "minecraft:dead_horn_coral_fan"],
    ].forEach((recipe) => {
        event.recipes.createHaunting(recipe[1], recipe[0]);
    });
});
