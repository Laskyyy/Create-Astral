(function astralGeneratorsFusionReactorRecipes() {
  onEvent("recipes", (event) => {
    fusionHelium3(event);
  });
  function fusionHelium3(event) {
    event.custom({
      type: "custommachinery:custom_machine",
      machine: "astralgenerators:fusion_reactor",
      time: 10,
      requirements: [
        {
          type: "custommachinery:fluid",
          mode: "input",
          fluid: "techreborn:deuterium",
          amount: 100800,
        },
        {
          type: "custommachinery:fluid",
          mode: "input",
          fluid: "techreborn:tritium",
          amount: 100800,
        },
        {
          type: "custommachinery:fluid",
          fluid: "techreborn:helium3",
          amount: 100800,
          mode: "output",
        },
        {
          type: "custommachinery:energy",
          mode: "input",
          amount: 1000000,
        },
        {
          type: "custommachinery:energy",
          mode: "output",
          amount: 10000000,
        },
        {
          type: "custommachinery:structure",
          keys: {
            a: "astralgenerators:fusion_casing",
            b: "astralgenerators:fusion_glass",
            c: "astralgenerators:fusion_coil",
          },
          pattern: [
            [
              "               ",
              "      aaa      ",
              "    aa   aa    ",
              "   a       a   ",
              "  a         a  ",
              "  a         a  ",
              " a           a ",
              " a           a ",
              " a           a ",
              "  a         a  ",
              "  a         a  ",
              "   a       a   ",
              "    aa   aa    ",
              "      aaa      ",
              "               ",
            ],
            [
              "      aba      ",
              "    bb   bb    ",
              "   a  aba  a   ",
              "  acab   baca  ",
              " b a       a b ",
              " b b       b b ",
              "a a         a a",
              "b b         b b",
              "a a         a a",
              " b b       b b ",
              " b a       a b ",
              "  acab   baca  ",
              "   a  aba  a   ",
              "    bb   bb    ",
              "      ama      ",
            ],
            [
              "               ",
              "      aaa      ",
              "    aa   aa    ",
              "   a       a   ",
              "  a         a  ",
              "  a         a  ",
              " a           a ",
              " a           a ",
              " a           a ",
              "  a         a  ",
              "  a         a  ",
              "   a       a   ",
              "    aa   aa    ",
              "      aaa      ",
              "               ",
            ],
          ],
        },
      ],
    });
  }
})();
