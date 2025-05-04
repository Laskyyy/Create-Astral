export function astralGeneratorsAmalgationMatrixRecipes() {
  onEvent("recipes", (event) => {
    AMFoodAmalgamation(event);
    AMTest(event);
  });

  function AMFoodAmalgamation(event: Internal.RecipeEventJS) {
    event.custom({
      type: "custommachinery:custom_machine",
      machine: "astralgenerators:amalgamation_matrix",
      time: 10,
      requirements: [
        {
          type: "custommachinery:item",
          item: "astralfoods:quantum_pasta",
          mode: "input",
          amount: 1,
        },
        {
          type: "custommachinery:item",
          item: "astralfoods:shimmered_apple",
          mode: "input",
          amount: 1,
        },
        {
          type: "custommachinery:item",
          item: "astralfoods:compressed_onion",
          mode: "input",
          amount: 1,
        },
        {
          type: "custommachinery:item",
          item: "astralfoods:shimmered_rabbit_stew",
          mode: "input",
          amount: 1,
        },
        {
          type: "custommachinery:item",
          item: "astralfoods:food_amalgamation",
          mode: "output",
          amount: 1,
        },
        {
          type: "custommachinery:energy",
          mode: "input",
          amount: 20000,
        },
        {
          type: "custommachinery:structure",
          keys: {
            a: "techreborn:basic_machine_frame",
            b: "astralgenerators:superconducting_coil",
            c: "techreborn:advanced_machine_casing",
            d: "astralgenerators:convergence_core",
          },
          pattern: [
            ["aaaaa", "aaaaa", "aaaaa", "aaaaa", "aamaa"],
            ["aaaaa", "abbba", "abbba", "abbba", "aaaaa"],
            ["     ", " ccc ", " ccc ", " ccc ", "     "],
            ["     ", "     ", "  c  ", "     ", "     "],
            ["     ", "     ", "  d  ", "     ", "     "],
            ["     ", "     ", "  c  ", "     ", "     "],
            ["     ", " ccc ", " ccc ", " ccc ", "     "],
            ["     ", " bbb ", " bbb ", " bbb ", "     "],
            ["aaaaa", "aaaaa", "aaaaa", "aaaaa", "aaaaa"],
          ],
        },
      ],
    });
  }

  function AMTest(event: Internal.RecipeEventJS) {
    event.custom({
      type: "custommachinery:custom_machine",
      machine: "astralgenerators:amalgamation_matrix",
      time: 10,
      requirements: [
        {
          type: "custommachinery:item",
          item: "minecraft:stone",
          mode: "input",
          amount: 1,
        },
        {
          type: "custommachinery:item",
          item: "minecraft:cobblestone",
          mode: "input",
          amount: 1,
        },
        {
          type: "custommachinery:item",
          item: "minecraft:iron_ingot",
          mode: "input",
          amount: 1,
        },
        {
          type: "custommachinery:item",
          item: "minecraft:gold_ingot",
          mode: "input",
          amount: 1,
        },
        {
          type: "custommachinery:item",
          item: "minecraft:diamond",
          mode: "output",
          amount: 1,
        },
        {
          type: "custommachinery:energy",
          mode: "input",
          amount: 100000,
        },
        {
          type: "custommachinery:structure",
          keys: {
            a: "techreborn:basic_machine_frame",
            b: "astralgenerators:superconducting_coil",
            c: "techreborn:advanced_machine_casing",
            d: "astralgenerators:convergence_core",
          },
          pattern: [
            ["aaaaa", "aaaaa", "aaaaa", "aaaaa", "aamaa"],
            ["aaaaa", "abbba", "abbba", "abbba", "aaaaa"],
            ["     ", " ccc ", " ccc ", " ccc ", "     "],
            ["     ", "     ", "  c  ", "     ", "     "],
            ["     ", "     ", "  d  ", "     ", "     "],
            ["     ", "     ", "  c  ", "     ", "     "],
            ["     ", " ccc ", " ccc ", " ccc ", "     "],
            ["     ", " bbb ", " bbb ", " bbb ", "     "],
            ["aaaaa", "aaaaa", "aaaaa", "aaaaa", "aaaaa"],
          ],
        },
      ],
    });
  }
}
