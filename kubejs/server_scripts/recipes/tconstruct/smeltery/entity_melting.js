(function entityMeltingRecipes() {
  onEvent("recipes", (event) => {
    /**
     * @typedef EntityMeltingRecipe
     * @property {Special.EntityType} entity
     * @property {{ fluid: Special.Fluid; amount: number }} result
     * @property {number} damage
     */

    /** @type {EntityMeltingRecipe[]} */
    const entityMeltingRecipes = [
      {
        entity: "minecraft:blaze",
        result: { fluid: "tconstruct:blazing_blood", amount: 1620 },
        damage: 2,
      },
    ];
    entityMeltingRecipes.forEach((recipe) => {
      event.custom({
        type: "tconstruct:entity_melting",
        entity: {
          type: recipe.entity,
        },
        result: {
          fluid: recipe.result.fluid,
          amount: recipe.result.amount,
        },
        damage: recipe.damage,
      });
    });
  });
})();
