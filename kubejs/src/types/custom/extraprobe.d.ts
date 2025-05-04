declare namespace Helper {
  type PatternRow = string;
  type Pattern = PatternRow[] & { length: 1 | 2 | 3 };
  type BigPatternRow = string;
  type BigPattern = BigPatternRow;

  type ShapelessRecipe = Internal.IngredientJS_[] & { length: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 };
  /** Slightly faster IngredientJS_. */
  type IngredientJSLiteOne = Internal.ItemStackJS | Internal.FluidStackJS | Special.Item | Special.Fluid
  type IngredientJSLite = IngredientJSLiteOne | IngredientJSLiteOne[]
}

declare namespace Internal {
  type Selection_ =
    | Selection
    | [x: number, y: number, z: number]
    | [x1: number, y1: number, z1: number, x2: number, y2: number, z2: number];
  type BlockState_ = BlockState | Special.Block;
  type Vec3_ = Vec3 | [x: number, y: number, z: number];
  type BlockPos_ = BlockPos | [x: number, y: number, z: number];
  type BlockStateFunction_ = BlockStateFunction | (() => BlockIDPredicate);
  type JsonObject_ = JsonObject | object
  type IngredientJS_ = {ingredient: object} | RegExp | Internal.IngredientJS_ | {count?: number, item: Internal.ItemStackJS_} | Internal.IngredientJS_[] | `%${string}` | IngredientJS | Internal.ItemStackJS_ | Internal.FluidStackJS_ | {fluid: Internal.FluidStackJS_} | `#${Special.ItemTag}` | "*" | {value: object} | ((arg0: Internal.ItemStackJS)=>boolean) | {type: Special.Ingredient} | `@${Special.Mod}`;
  type JsonElement_ = JsonElement | number | string | boolean | object;


  interface ExtendedSceneBuilder$ExtendedWorldInstructions extends Internal.SceneBuilder$WorldInstructions {
    setBlocks(selection: Internal.Selection_, blockState: Internal.BlockState_, spawnParticles: boolean): void;
  }

  interface RecipeEventJS extends Internal.EventJS {
    custom<TRecipe extends { type: Special.RecipeType_ }>(o: TRecipe): Internal.RecipeJS;
    shaped(
      result: Internal.IngredientJS_,
      pattern: Helper.Pattern,
      keys: { [key: string]: Special.Item }
    ): unknown;
    shapeless(result: Internal.IngredientJS_, items: Helper.ShapelessRecipe): unknown;
  }

  interface CustomMachineryRecipes {
    custom_machine(name: `${string}:${string}`, duration: number): this;
    requireItem(item: IngredientJS_): this;
    requireEnergyPerTick(energyPerTick: number): this;
    mustSeeSky(): this;
    produceItem(item: IngredientJS_): this;
  }

  interface DocumentedRecipes {
    readonly custommachinery: Internal.CustomMachineryRecipes;

    createSplashing(outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>, input: Internal.IngredientJS_): Internal.ProcessingRecipeJS;
    // application(outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>, input: Internal.IngredientJS_[]): Internal.ItemApplicationRecipeJS;
    createSandpaperPolishing(outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>, input: Internal.IngredientJS_): Internal.ProcessingRecipeJS;
    createEmptying(outputs: Internal.Of2_<Internal.IngredientJS_, Internal.FluidStackJS_>, input: Internal.IngredientJS_): Internal.ProcessingRecipeJS;
    // mechanical_crafting(output: Internal.IngredientJS_, pattern: string[], items: {[key in string]: Internal.IngredientJS_}): Internal.ProcessingRecipeJS;
    createPressing(outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>, input: Internal.IngredientJS_): Internal.ProcessingRecipeJS;
    createCutting(outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>, input: Internal.IngredientJS_): Internal.ProcessingRecipeJS;
    createCrushing(outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>, input: Internal.IngredientJS_): Internal.ProcessingRecipeJS;
    createFilling(outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>, input: Internal.Of2_<Internal.IngredientJS_, Internal.FluidStackJS_>): Internal.ProcessingRecipeJS;
    createMilling(outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>, input: Internal.IngredientJS_): Internal.ProcessingRecipeJS;
    createHaunting(outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>, input: Internal.IngredientJS_): Internal.ProcessingRecipeJS;
    createCompacting(outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>, inputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>): Internal.ProcessingRecipeJS;
    createDeploying(outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>, input: Internal.IngredientJS_): Internal.ItemApplicationRecipeJS;
    // sequenced_assembly(outputs: Internal.IngredientJS_[], input: Internal.IngredientJS_, sequence: Internal.ProcessingRecipeJS_[]): Internal.SequencedAssemblyRecipeJS;
    createMixing(outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>, inputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>): Internal.ProcessingRecipeJS;
  }

  interface CreateRecipes {
    splashing(outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>, input: Internal.IngredientJS_): Internal.ProcessingRecipeJS;
    item_application(outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>, input: Internal.IngredientJS_[]): Internal.ItemApplicationRecipeJS;
    sandpaper_polishing(outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>, input: Internal.IngredientJS_): Internal.ProcessingRecipeJS;
    emptying(outputs: Internal.Of2_<Internal.IngredientJS_, Internal.FluidStackJS_>, input: Internal.IngredientJS_): Internal.ProcessingRecipeJS;
    mechanical_crafting(output: Internal.IngredientJS_, pattern: string[], items: {[key in string]: Internal.IngredientJS_}): Internal.ProcessingRecipeJS;
    pressing(outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>, input: Internal.IngredientJS_): Internal.ProcessingRecipeJS;
    cutting(outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>, input: Internal.IngredientJS_): Internal.ProcessingRecipeJS;
    crushing(outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>, input: Internal.IngredientJS_): Internal.ProcessingRecipeJS;
    filling(outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>, input: Internal.Of2_<Internal.IngredientJS_, Internal.FluidStackJS_>): Internal.ProcessingRecipeJS;
    milling(outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>, input: Internal.IngredientJS_): Internal.ProcessingRecipeJS;
    haunting(outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>, input: Internal.IngredientJS_): Internal.ProcessingRecipeJS;
    compacting(outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>, inputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>): Internal.ProcessingRecipeJS;
    deploying(outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>, input: Internal.IngredientJS_): Internal.ItemApplicationRecipeJS;
    sequenced_assembly(outputs: Internal.IngredientJS_[], input: Internal.IngredientJS_, sequence: Internal.ProcessingRecipeJS_[]): Internal.SequencedAssemblyRecipeJS;
    mixing(outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>, inputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>): Internal.ProcessingRecipeJS;
}
}

declare namespace Special {
  type RecipeType_ = RecipeType | "createaddition:charging" | "createaddition:liquid_burning" | "createaddition:rolling";
}

declare namespace Custom {

}

// ProbeJS didn't catch that.
declare function onEvent(eventName: "entity.spawned", handler: (event: any) => void): any;