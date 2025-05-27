(function estrogenCentrifugingRecipes() {
  const BUCKET = global.BUCKET;
  const GEM_BLOCK = global.GEM_BLOCK;
  const SLIMEBALL = global.SLIMEBALL;
  const INGOT = global.INGOT;
  const GEM = global.GEM;
  const NUGGET = global.NUGGET;
  const mB = global.mB;
  onEvent("recipes", (event) => {
    /**
     * @typedef CentrifugingRecipe
     * @property {Special.Fluid} input
     * @property {Special.Fluid} output
     * @property {number} amount
     */

    /** @type {CentrifugingRecipe[]} */
    const centrifugingRecipes = [
      {
        input: "tconstruct:molten_pig_iron",
        output: "tconstruct:blood",
        amount: 1 * mB,
      },
      {
        input: "techreborn:methane",
        output: "techreborn:carbon",
        amount: 1 * mB,
      },
      {
        input: "techreborn:helium",
        output: "techreborn:lithium",
        amount: 1 * mB,
      },
      {
        input: "createbigcannons:molten_cast_iron",
        output: "tconstruct:magma",
        amount: 1 * mB,
      },
      {
        input: "kubejs:metabolic_broth",
        output: "astraladditions:sputum",
        amount: 1 * mB,
      },
      {
        input: "techreborn:biofuel",
        output: "techreborn:methane",
        amount: 1 * mB,
      },
      {
        input: "techreborn:compressed_air",
        output: "techreborn:nitrogen",
        amount: 1 * mB,
      },
      {
        input: "estrogen:molten_amethyst",
        output: "kubejs:shimmer",
        amount: 10 * mB,
      },
    ];
    centrifugingRecipes.forEach((recipe) => {
      event.custom({
        type: "estrogen:centrifuging",
        ingredients: [
          {
            fluid: recipe.input,
            amount: recipe.amount,
            nbt: {},
          },
        ],
        results: [
          {
            fluid: recipe.output,
            amount: recipe.amount,
          },
        ],
      });
    });
  });
})();
