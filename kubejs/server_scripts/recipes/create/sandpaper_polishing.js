onEvent("recipes", (event) => {
    [
        ["minecraft:blackstone", "minecraft:netherrack"],
        ["minecraft:nether_bricks", "minecraft:red_nether_bricks"],
        ["tconstruct:earth_slime_grass_seeds", "tconstruct:blood_slime_grass_seeds"],
    ].forEach((recipe) => {
        event.recipes.createSandpaperPolishing(recipe[1], recipe[0]);
    });
});
