// @ts-check
(function astralGeneratorsSteamTurbineRecipes() {
  onEvent("recipes", (event) => {
    turbineSteamToEnergy(event);
  });
  /** @param {Internal.RecipeEventJS} event  */
  function turbineSteamToEnergy(event) {
    event.custom({
      type: "custommachinery:custom_machine",
      machine: "astralgenerators:steam_turbine",
      time: 10,
      requirements: [
        {
          type: "custommachinery:fluid",
          fluid: "astralgenerators:steam",
          amount: 84000,
          mode: "input",
        },
        {
          type: "custommachinery:energy",
          amount: 15000,
          mode: "output",
        },
        {
          type: "custommachinery:structure",
          keys: {
            a: "techreborn:basic_machine_frame",
            b: "astralgenerators:pipe_casing",
            c: "astralgenerators:vent",
          },
          pattern: [
            ["aaaa", "aaaa", "aaaa", " m  "],
            ["aaaa", "abba", "abaa", " b  "],
            ["aaaa", "acca", "aaaa", "    "],
          ],
        },
      ],
    });
  }
})();
