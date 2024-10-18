onEvent('recipes', event => {
    event.recipes.createEmptying([
        "6x techreborn:cell",
        Fluid.of("kubejs:released_water_coolant", BUCKET)
    ], "techreborn:water_coolant_cell_60k")
});