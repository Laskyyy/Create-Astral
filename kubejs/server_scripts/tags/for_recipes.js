onEvent("item.tags", (event) => {
    [
        "techreborn:storage_buffer",
        "techreborn:crude_storage_unit",
        "techreborn:basic_storage_unit",
        "techreborn:advanced_storage_unit",
        "techreborn:industrial_storage_unit",
        "techreborn:quantum_storage_unit"
    ].forEach((item, index) => {
        for (let i = 5; i >= index; i--)
            event.add("createastral:storage_unit_" + i, item);
    });

    [
        "create:fluid_tank",
        "techreborn:basic_tank_unit",
        "techreborn:advanced_tank_unit",
        "techreborn:industrial_tank_unit",
        "techreborn:quantum_tank_unit"
    ].forEach((item, index) => {
        for (let i = 5; i >= index; i--)
            event.add("createastral:tank_unit_" + i, item);
    });

    [
        "astraladditions:ring_gold_cast",
        "tconstruct:gold_platform", //Never add anything here with a melting value below a nugget, thx
    ].forEach((item, index) => {
        event.add("tconstruct:casts", item);
        event.add("tconstruct:casts/gold", item);
        event.add("tconstruct:casts/multi_use", item);
        event.add("tconstruct:patterns", item);
        event.add("tconstruct:patterns/reusable", item);
    });

    event.add("c:slimeballs", "createastral:synthetic_slime");
    event.add("tconstruct:slime_block", "createastral:synthetic_slime_block");

    event.add("c:raw_materials/cobalt", "createastral:crushed_raw_cobalt");
});