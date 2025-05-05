export function automobilityEngineRecipes() {
  onEvent("recipes", (event) => {
    type EngineMaterials = "copper" | "stone" | "gold" | "iron" | "diamond";
    type EngineType = `automobility:${EngineMaterials}`;

    interface EngineRecipe {
      input: { item: Special.Item }[];
      output: EngineType;
      sortnum: number;
    }

    const engineRecipes: EngineRecipe[] = [
      {
        input: [
          { item: "create:large_cogwheel" },
          { item: "create:electron_tube" },
          { item: "create:copper_casing" },
          { item: "create:smart_fluid_pipe" },
          { item: "create:gearshift" },
          { item: "create:clutch" },
        ],
        output: "automobility:copper",
        sortnum: 1,
      },
      {
        input: [
          { item: "create:integrated_circuit" },
          { item: "minecraft:diamond_block" },
          { item: "createaddition:alternator" },
          { item: "createaddition:electric_motor" },
          { item: "create:electron_tube" },
          { item: "minecraft:diamond_block" },
          { item: "create:rotation_speed_controller" },
          { item: "create:mechanical_arm" },
        ],
        output: "automobility:diamond",
        sortnum: 4,
      },
      {
        input: [
          { item: "create:integrated_circuit" },
          { item: "create:brass_casing" },
          { item: "minecraft:gold_block" },
          { item: "techreborn:basic_machine_frame" },
          { item: "create:cogwheel" },
          { item: "minecraft:gold_block" },
          { item: "create:rotation_speed_controller" },
          { item: "create:mechanical_arm" },
        ],
        output: "automobility:gold",
        sortnum: 3,
      },
      {
        input: [
          { item: "create:integrated_circuit" },
          { item: "minecraft:iron_block" },
          { item: "techreborn:basic_machine_frame" },
          { item: "create:cogwheel" },
          { item: "create:gearshift" },
          { item: "create:clutch" },
        ],
        output: "automobility:iron",
        sortnum: 2,
      },
      {
        input: [
          { item: "create:large_cogwheel" },
          { item: "minecraft:coal_block" },
          { item: "minecraft:furnace" },
          { item: "create:cogwheel" },
          { item: "create:gearshift" },
          { item: "create:clutch" },
        ],
        output: "automobility:stone",
        sortnum: 0,
      },
    ];
    engineRecipes.forEach((recipe) => {
      event.custom({
        type: "automobility:auto_mechanic_table",
        category: "automobility:engines",
        sortnum: recipe.sortnum,
        ingredients: recipe.input,
        result: { item: "automobility:automobile_engine", component: recipe.output },
      });
    });
  });
}
