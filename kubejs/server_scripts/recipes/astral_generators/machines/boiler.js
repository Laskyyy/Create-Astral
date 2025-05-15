(function astralGeneratorsBoilerRecipes() {
  onEvent("recipes", (event) => {
    boilerSteamFromFuel(event);
    boilerSteamFromLava(event);
  });
  function boilerSteamFromFuel(event) {
    event.custom({
      type: "custommachinery:custom_machine",
      machine: "astralgenerators:solid_boiler",
      time: 10,
      requirements: [
        {
          type: "custommachinery:fuel",
        },
        {
          type: "custommachinery:fluid",
          mode: "input",
          fluid: "minecraft:water",
          amount: 100800,
        },
        {
          type: "custommachinery:fluid",
          fluid: "astralgenerators:steam",
          amount: 201600,
          mode: "output",
        },
        {
          type: "custommachinery:structure",
          keys: {
            a: "techreborn:basic_machine_frame",
            b: "astralgenerators:pipe_casing",
          },
          pattern: [
            ["aaa", "aaa", "aaa", " m "],
            ["aaa", "aba", "aba", "   "],
            ["aaa", "aaa", "aaa", "   "],
          ],
        },
      ],
    });
  }
  function boilerSteamFromLava(event) {
    event.custom({
      type: "custommachinery:custom_machine",
      machine: "astralgenerators:fluid_boiler",
      time: 10,
      requirements: [
        {
          type: "custommachinery:fluid",
          mode: "input",
          fluid: "minecraft:lava",
          amount: 100800,
        },
        {
          type: "custommachinery:fluid",
          mode: "input",
          fluid: "minecraft:water",
          amount: 100800,
        },
        {
          type: "custommachinery:fluid",
          fluid: "astralgenerators:steam",
          amount: 201600,
          mode: "output",
        },
        {
          type: "custommachinery:structure",
          keys: {
            a: "techreborn:basic_machine_frame",
            b: "astralgenerators:pipe_casing",
          },
          pattern: [
            ["aaa", "aaa", "aaa", " m "],
            ["aaa", "aba", "aba", "   "],
            ["aaa", "aaa", "aaa", "   "],
          ],
        },
      ],
    });
  }
})();
