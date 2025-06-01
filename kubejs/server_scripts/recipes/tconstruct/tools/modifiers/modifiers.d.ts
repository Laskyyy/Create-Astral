// Modifier format is quite complex, that's why types are separate from the JS file in this scenario only.

type ItemOrTag = Special.Item | `#${Special.ItemTag}`;
type ItemOrTagWithCount = { item: Special.Item; count: number } | { tag: Special.ItemTag; count: number };
type IngredientSet = { ingredient: ItemOrTag[] };
interface ModifierWithLevel {
  name: Special.Modifier;
  level: number;
}

interface ModifierWithValue {
  name: Special.Modifier;
  value: string;
}

namespace CustomSet {
  interface Difference {
    type: "forge:difference";
    base: Helper.ItemOrTag | CustomSet;
    subtracted: Helper.ItemOrTag | Helper.ItemOrTag[] | CustomSet;
  }
  interface Intersection {
    type: "forge:intersection";
    children: (Helper.ItemOrTag | CustomSet)[];
  }
}

type CustomSet = CustomSet.Difference | CustomSet.Intersection;

interface ModifierRecipe {
  inputs: (ItemOrTag | ItemOrTagWithCount | IngredientSet)[];
  appliableTo: ItemOrTag | ItemOrTag[] | CustomSet;
  requirements?:
    | { name: Special.Modifier; level: number; error: Special.LangKey }
    | { options: ModifierWithLevel[]; matches_needed: number; error: Special.LangKey };
  slots?: { abilities: number } | { upgrades: number } | { defense: number };
  result: ModifierWithLevel;
  maxLevel?: number;
}

interface ItemWithValueAndCount {
  /** The item name. */
  item: Special.Item;
  /** The amount of progress 1 item gives towards a level. */
  value?: number;
  /** The amount of item needed for a level. */
  needed: number;
}
interface TagWithValueAndCount {
  /** The item tag. */
  tag: Special.ItemTag;
  /** The amount of progress 1 item gives towards a level. */
  value?: number;
  /** The amount of item needed for a level. */
  needed: number;
}

interface IncrementalModifierRecipe {
  input: ItemWithValueAndCount | TagWithValueAndCount;
  appliableTo: ItemOrTag | ItemOrTag[] | CustomSet;
  requirements?:
    | { name: Special.Modifier; level: number; error: Special.LangKey }
    | { options: ModifierWithLevel[]; matches_needed: number; error: Special.LangKey };
  slots?: { abilities: number } | { upgrades: number } | { defense: number };
  result: ModifierWithLevel;
  maxLevel?: number;
}

interface SwappableModifierRecipe {
  inputs: (ItemOrTag | ItemOrTagWithCount | IngredientSet)[];
  appliableTo: ItemOrTag | ItemOrTag[] | CustomSet;
  requirements?:
    | { name: Special.Modifier; level: number; error: Special.LangKey }
    | { options: ModifierWithLevel[]; matches_needed: number; error: Special.LangKey };
  slots?: { abilities: number } | { upgrades: number } | { defense: number };
  result: ModifierWithValue;
  maxLevel?: number;
}
