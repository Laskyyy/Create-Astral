/// <reference types="./modifiers.d.ts" />
// Modifier recipe format is complex, types are defined in a separate file to avoid clutter
(function hephaestusModifiers() {
  onEvent("recipes", (event) => {
    // Helper functions
    /**
     * @param {ItemOrTag} string
     * @returns {Helper.ItemOrTag}
     */
    function stringToItemOrTag(string) {
      if (string.startsWith("#")) {
        return {
          tag: /** @type {Special.ItemTag} */ (string.substring(1)),
        };
      } else {
        return { item: /** @type {Special.Item} */ (string) };
      }
    }

    /**
     * The list of regular modifiers to add.
     *
     * These modifiers need to have all the ingredients in order to apply a level.
     * @type {ModifierRecipe[]}
     */
    const modifierRecipes = [
      {
        inputs: [
          "create:mechanical_piston",
          "tconstruct:sky_slime",
          "create:mechanical_piston",
          "create:blaze_burner",
          "create:blaze_burner",
        ],
        appliableTo: "#tconstruct:modifiable/armor/boots",
        slots: { abilities: 1 },
        result: { name: "tconstruct:double_jump", level: 1 },
      },
      {
        inputs: [
          "minecraft:blue_dye",
          "#c:storage_blocks/lapis",
          "#c:storage_blocks/lapis",
          "#c:storage_blocks/lapis",
          "#c:storage_blocks/lapis",
        ],
        appliableTo: "#tconstruct:modifiable/melee_or_harvest",
        slots: { abilities: 1 },
        result: { name: "tconstruct:luck", level: 1 },
        maxLevel: 1,
      },
      {
        inputs: [
          "minecraft:blue_dye",
          "#c:storage_blocks/lapis",
          "#c:storage_blocks/lapis",
          "#c:storage_blocks/lapis",
          "#c:storage_blocks/lapis",
        ],
        appliableTo: "#tconstruct:modifiable/melee_or_harvest",
        slots: { abilities: 1 },
        result: { name: "tconstruct:luck", level: 1 },
        maxLevel: 1,
      },
      {
        inputs: [
          "minecraft:diamond",
          "#c:storage_blocks/lapis",
          "#c:storage_blocks/lapis",
          "#c:storage_blocks/lapis",
          "#c:storage_blocks/lapis",
        ],
        appliableTo: "#tconstruct:modifiable/melee_or_harvest",
        requirements: {
          name: "tconstruct:luck",
          level: 1,
          error: "recipe.tconstruct.modifier.luck.level_2",
        },
        result: { name: "tconstruct:luck", level: 1 },
        maxLevel: 2,
      },
      {
        inputs: [
          "minecraft:diamond_block",
          "#c:storage_blocks/lapis",
          "#c:storage_blocks/lapis",
          "#c:storage_blocks/lapis",
          "#c:storage_blocks/lapis",
        ],
        appliableTo: "#tconstruct:modifiable/melee_or_harvest",
        requirements: {
          name: "tconstruct:luck",
          level: 2,
          error: "recipe.tconstruct.modifier.luck.level_3",
        },
        result: { name: "tconstruct:luck", level: 1 },
        maxLevel: 3,
      },
      {
        inputs: [
          "create:mechanical_piston",
          "createastral:astral_conduit",
          "create:mechanical_piston",
          "create:piston_extension_pole",
          "create:piston_extension_pole",
        ],
        appliableTo: "#tconstruct:modifiable/armor/chestplate",
        slots: { abilities: 1 },
        result: { name: "tconstruct:reach", level: 1 },
      },
      {
        inputs: ["minecraft:leather", "#c:ingots/iron", "minecraft:leather"],
        appliableTo: "#tconstruct:modifiable/armor/leggings",
        slots: { abilities: 1 },
        result: { name: "tconstruct:tool_belt", level: 1 },
        maxLevel: 1,
      },
      {
        inputs: ["minecraft:leather", "#c:ingots/gold", "minecraft:leather"],
        appliableTo: "#tconstruct:modifiable/armor/leggings",
        requirements: {
          name: "tconstruct:tool_belt",
          level: 1,
          error: "recipe.tconstruct.modifier.tool_belt",
        },
        result: { name: "tconstruct:tool_belt", level: 1 },
        maxLevel: 2,
      },
      {
        inputs: ["minecraft:leather", "#c:ingots/rose_gold", "minecraft:leather"],
        appliableTo: "#tconstruct:modifiable/armor/leggings",
        requirements: {
          name: "tconstruct:tool_belt",
          level: 2,
          error: "recipe.tconstruct.modifier.tool_belt",
        },
        result: { name: "tconstruct:tool_belt", level: 1 },
        maxLevel: 3,
      },
      {
        inputs: ["minecraft:leather", "#c:ingots/cobalt", "minecraft:leather"],
        appliableTo: "#tconstruct:modifiable/armor/leggings",
        requirements: {
          name: "tconstruct:tool_belt",
          level: 3,
          error: "recipe.tconstruct.modifier.tool_belt",
        },
        result: { name: "tconstruct:tool_belt", level: 1 },
        maxLevel: 4,
      },
      {
        inputs: ["minecraft:leather", "#c:ingots/hepatizon", "minecraft:leather"],
        appliableTo: "#tconstruct:modifiable/armor/leggings",
        requirements: {
          name: "tconstruct:tool_belt",
          level: 4,
          error: "recipe.tconstruct.modifier.tool_belt",
        },
        result: { name: "tconstruct:tool_belt", level: 1 },
        maxLevel: 5,
      },
      {
        inputs: ["minecraft:leather", "#c:ingots/manyullyn", "minecraft:leather"],
        appliableTo: "#tconstruct:modifiable/armor/leggings",
        requirements: {
          name: "tconstruct:tool_belt",
          level: 5,
          error: "recipe.tconstruct.modifier.tool_belt",
        },
        result: { name: "tconstruct:tool_belt", level: 1 },
        maxLevel: 6,
      },
      {
        inputs: [
          "minecraft:shulker_shell",
          "createastral:subatomic_ingot",
          "minecraft:shulker_shell",
          "#c:ingots/shadow",
          "#c:ingots/shadow",
        ],
        appliableTo: "#tconstruct:modifiable",
        requirements: {
          options: [
            { name: "tconstruct:netherite", level: 1 },
            { name: "tconstruct:reinforced", level: 5 },
          ],
          matches_needed: 2,
          error: "recipe.tconstruct.modifier.unbreakable_requirements",
        },
        slots: { abilities: 1 },
        result: { name: "tconstruct:unbreakable", level: 1 },
        maxLevel: 1,
      },
      {
        inputs: ["createastral:astral_singularity"],
        appliableTo: "#tconstruct:modifiable",
        result: { name: "tconstruct:draconic", level: 1 },
        maxLevel: 1,
      },
      {
        inputs: ["createastral:astral_conduit"],
        appliableTo: "#tconstruct:modifiable",
        result: { name: "tconstruct:resurrected", level: 1 },
        maxLevel: 1,
      },
      {
        inputs: ["ae2:spatial_cell_component_16"],
        appliableTo: "#tconstruct:modifiable",
        result: { name: "createastral:spacious", level: 1 },
        maxLevel: 1,
      },
    ];

    /**
     * The list of incremental modifiers to add.
     *
     * These modifiers can only have 1 type of item as an input and can accept partial amount of items for partial effect.
     * @type {IncrementalModifierRecipe[]}
     */
    const incrementalModifierRecipes = [
      {
        input: {
          item: "tconstruct:ichor_slime_ball",
          count: 192,
        },
        appliableTo: "#tconstruct:modifiable/armor/chestplate",
        slots: { abilities: 1 },
        result: { name: "tconstruct:strength", level: 1 },
      },
      {
        input: {
          tag: "c:storage_blocks/iron",
          value: 9,
          count: 45,
        },
        appliableTo: "#tconstruct:modifiable/unarmed",
        requirements: {
          name: "tconstruct:unarmed",
          level: 1,
          error: "recipe.tconstruct.modifier.unarmed",
        },
        slots: { upgrades: 1 },
        result: { name: "tconstruct:killager", level: 1 },
        maxLevel: 5,
      },
      {
        input: {
          tag: "c:storage_blocks/iron",
          value: 9,
          count: 45,
        },
        appliableTo: "#tconstruct:modifiable/melee",
        slots: { upgrades: 1 },
        result: { name: "tconstruct:killager", level: 1 },
        maxLevel: 5,
      },
      {
        input: {
          tag: "c:ingots/iron",
          count: 45,
        },
        appliableTo: "#tconstruct:modifiable/unarmed",
        requirements: {
          name: "tconstruct:unarmed",
          level: 1,
          error: "recipe.tconstruct.modifier.unarmed",
        },
        slots: { upgrades: 1 },
        result: { name: "tconstruct:killager", level: 1 },
        maxLevel: 5,
      },
      {
        input: {
          tag: "c:ingots/iron",
          count: 45,
        },
        appliableTo: "#tconstruct:modifiable/melee",
        slots: { upgrades: 1 },
        result: { name: "tconstruct:killager", level: 1 },
        maxLevel: 5,
      },
      {
        input: {
          item: "tconstruct:sky_slime_dirt",
          count: 64,
        },
        appliableTo: "#tconstruct:modifiable/armor/leggings",
        slots: { upgrades: 1 },
        result: { name: "tconstruct:leaping", level: 1 },
        maxLevel: 2,
      },
      {
        input: {
          item: "minecraft:cactus",
          count: 25,
        },
        appliableTo: "#tconstruct:modifiable/melee",
        slots: { upgrades: 1 },
        result: { name: "tconstruct:thorns", level: 1 },
        maxLevel: 5,
      },
    ];

    /**
     * The list of swappable modifiers to add.
     *
     * Only used for Embellishments, as this is the only modifier that has variants.
     * @type {SwappableModifierRecipe[]}
     */
    const swappableModifierRecipes = [];

    /** @param {ModifierRecipe["inputs"]} inputs  */
    function handleInputs(inputs) {
      /** @type {(Helper.ItemOrTag | {ingredient: Helper.ItemOrTag[]} | {item: Special.Item, amount_needed: number} | {tag: Special.ItemTag, amount_needed: number})[]} */
      const inputArray = [];
      // Handle inputs
      inputs.forEach((input) => {
        if (typeof input == "string") {
          // Input is an item or #tag
          inputArray.push(stringToItemOrTag(input));
        } else if ("ingredient" in input) {
          // input is an IngredientSet
          inputArray.push({ ingredient: input.ingredient.map((ingredient) => stringToItemOrTag(ingredient)) });
        } else {
          if ("item" in input) {
            inputArray.push({ item: input.item, amount_needed: input.count });
          } else if ("tag" in input) {
            inputArray.push({ tag: input.tag, amount_needed: input.count });
          }
        }
      });
      return inputArray;
    }

    /** @param {ModifierRecipe["appliableTo"]} appliableTo  */
    function handleAppliableTo(appliableTo) {
      if (Array.isArray(appliableTo)) {
        return appliableTo.map((item) => stringToItemOrTag(item));
      } else if (typeof appliableTo == "string") {
        return stringToItemOrTag(appliableTo);
      } else return appliableTo;
    }

    /** @param {ModifierRecipe["requirements"]} requirements  */
    function handleRequirements(requirements) {
      // So far this is added to JSON verbatim, can change if needed
      return requirements;
    }

    /** @param {ModifierRecipe["slots"]} slots  */
    function handleSlots(slots) {
      // So far this is added to JSON verbatim, can change if needed
      return slots;
    }

    /** @param {ModifierRecipe["result"]} result  */
    function handleResultWithLevel(result) {
      // So far this is added to JSON verbatim, can change if needed
      return result;
    }

    /** @param {SwappableModifierRecipe["result"]} result  */
    function handleResultWithValue(result) {
      // So far this is added to JSON verbatim, can change if needed
      return result;
    }

    modifierRecipes.forEach((modifierRecipe) => {
      /** @type {{type: "tconstruct:modifier", [key: string]: unknown}} */
      const recipeJSON = { type: "tconstruct:modifier" };
      recipeJSON.inputs = handleInputs(modifierRecipe.inputs);
      recipeJSON.tools = handleAppliableTo(modifierRecipe.appliableTo);
      if (modifierRecipe.requirements) {
        recipeJSON.requirements = handleRequirements(modifierRecipe.requirements);
      }
      if (modifierRecipe.slots) {
        recipeJSON.slots = handleSlots(modifierRecipe.slots);
      }
      recipeJSON.result = handleResultWithLevel(modifierRecipe.result);
      if (modifierRecipe.maxLevel) recipeJSON.max_level = modifierRecipe.maxLevel;
      event.custom(recipeJSON);
    });

    incrementalModifierRecipes.forEach((modifierRecipe) => {
      /** @type {{type: "tconstruct:incremental_modifier", [key: string]: unknown}} */
      const recipeJSON = { type: "tconstruct:incremental_modifier" };
      let count = modifierRecipe.input.count;
      let value = modifierRecipe.input.value || 1;
      if ("item" in modifierRecipe.input) {
        recipeJSON.input = { item: modifierRecipe.input.item };
      } else if ("tag" in modifierRecipe.input) {
        recipeJSON.input = { tag: modifierRecipe.input.tag };
      }
      recipeJSON.needed_per_level = count;
      recipeJSON.amount_per_item = value;
      recipeJSON.tools = handleAppliableTo(modifierRecipe.appliableTo);
      if (modifierRecipe.requirements) {
        recipeJSON.requirements = handleRequirements(modifierRecipe.requirements);
      }
      if (modifierRecipe.slots) {
        recipeJSON.slots = handleSlots(modifierRecipe.slots);
      }
      recipeJSON.result = handleResultWithLevel(modifierRecipe.result);
      if (modifierRecipe.maxLevel) recipeJSON.max_level = modifierRecipe.maxLevel;
      event.custom(recipeJSON);
    });

    swappableModifierRecipes.forEach((modifierRecipe) => {
      /** @type {{type: "tconstruct:swappable_modifier", [key: string]: unknown}} */
      const recipeJSON = { type: "tconstruct:swappable_modifier" };
      recipeJSON.inputs = handleInputs(modifierRecipe.inputs);
      recipeJSON.tools = handleAppliableTo(modifierRecipe.appliableTo);
      if (modifierRecipe.requirements) {
        recipeJSON.requirements = handleRequirements(modifierRecipe.requirements);
      }
      if (modifierRecipe.slots) {
        recipeJSON.slots = handleSlots(modifierRecipe.slots);
      }
      recipeJSON.result = handleResultWithValue(modifierRecipe.result);
      if (modifierRecipe.maxLevel) recipeJSON.max_level = modifierRecipe.maxLevel;
      event.custom(recipeJSON);
    });
  });
})();
