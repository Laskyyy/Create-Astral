(function yttrSmashingRecipes() {
  onEvent("recipes", (event) => {
    /**
     * @typedef ItemSmashingRecipe
     * @property {SubstitutableInput} input
     * @property {{item: Special.Item, count?: number}[] & {length: 1 | 2 | 3 | 4}} output
     * @property {number} time
     */

    /**
     * @typedef {{item: Special.Item, count?: number, "yttr:no_substitution"?: boolean}} SubstitutableInput
     */

    /** @type {ItemSmashingRecipe[]} */
    const itemSmashingRecipes = [
      {
        input: { "block": "createastral:voidtouched_compound" },
        catalysts: { "block": "createastral:steel_casing" },
        output: { "item": "yttr:bedrock_shard" }
      },
      {
        input: { "block": "minecraft:horn_coral_block" },
        catalysts: { "block": "createastral:steel_casing" },
        output: { "item": "techreborn:sponge_piece" }
      }
    ];
    /** @type {ItemSmashingRecipe[]} */
	const cloudSmashingRecipes = [
      {
        input: { "block": "minecraft:crying_obsidian" },
		catalysts: { "block": "astraladditions:desizer_base" },
        cloudcolor: "#FF00FF",
		cloudsize: 1,
		cloudoutput: { "item": "minecraft:dragon_breath" },
		cloudeffects: [ { "effect": "minecraft:instant_damage", "duration": 100 } ]
      },
      {
        input: { "block": "minecraft:honey_block" },
        catalysts: { "block": "minecraft:honeycomb_block" },
        cloudcolor: "#FF00FF",
        cloudsize: 1,
        cloudoutput: { "item": "minecraft:honey_bottle" },
        cloudeffects: [ { "effect": "minecraft:absorption", "duration": 8000 } ]
      },
      {
        input: { "block": "minecraft:amethyst_block" },
        catalysts: { "block": "ae2:fluix_block" },
        cloudcolor: "#FF00FF",
        cloudsize: 1,
        cloudoutput: { "item": "astraladditions:shimmer_bottle" },
        cloudeffects: [ { "effect": "minecraft:glowing", "duration": 100 } ]
      },
      {
        input: { "block": "minecraft:amethyst_cluster" },
        catalysts: { "block": "ae2:fluix_block" },
        cloudcolor: "#FF00FF",
        cloudsize: 2,
        cloudoutput: { "item": "astraladditions:shimmer_bottle" },
        cloudeffects: [ { "effect": "minecraft:glowing", "duration": 150 } ]
      }
    ];
    itemSmashingRecipes.forEach((recipe) => {
      event.custom({
        type: "yttr:piston_smashing",
        input: recipe.input,
        catalysts: recipe.catalysts,
        output: recipe.output,
      });
    });
	cloudSmashingRecipes.forEach((recipe) => {
      event.custom({
        type: "yttr:piston_smashing",
        input: recipe.input,
        catalysts: recipe.catalysts,
        cloud: {
			color: recipe.cloudcolor,
			size: recipe.cloudsize,
			output: recipe.cloudoutput,
			effects: recipe.cloudeffects
		}
      });
    });
  });
})();
