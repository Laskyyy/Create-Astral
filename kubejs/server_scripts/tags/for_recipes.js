onEvent("item.tags", (event) => {
    [
        "techreborn:storage_buffer",
        "techreborn:crude_storage_unit",
        "techreborn:basic_storage_unit",
        "techreborn:advanced_storage_unit",
        "techreborn:industrial_storage_unit",
        "techreborn:quantum_storage_unit"
    ].forEach((item) => {
        event.add("createastral:storage_unit", item);
    });

    [
        "create:fluid_tank",
        "techreborn:basic_tank_unit",
        "techreborn:advanced_tank_unit",
        "techreborn:industrial_tank_unit",
        "techreborn:quantum_tank_unit"
    ].forEach((item) => {
        event.add("createastral:tank_unit", item);
    });
});