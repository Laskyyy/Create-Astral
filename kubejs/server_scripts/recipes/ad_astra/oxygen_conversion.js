(function adAstraOxygenConversionRecipes() {
  onEvent("recipes", (event) => {
    [
      {
        input: { tag: "ad_astra:oxygen" },
        output: { name: "ad_astra:oxygen" },
        ratio: 1,
      },
    ].forEach((recipe) => {
      event.custom({
        type: "ad_astra:oxygen_conversion",
        input: recipe.input,
        output: recipe.output,
        conversion_ratio: recipe.ratio,
      });
    });
  });
})();
