declare namespace Helper {
  type PatternRow = string;
  type Pattern = PatternRow[] & { length: 1 | 2 | 3 };
  type BigPatternRow = string;
  type BigPattern = BigPatternRow;

  type Items = Internal.ItemStackJS_ | `#${Special.ItemTag}` | `@${Special.Mod}` | "*";
  type ItemOrTag = { item: Special.Item } | { tag: Special.ItemTag };
  type FluidOrTag = { fluid: Special.Fluid } | { tag: Special.FluidTag };
  interface Tooltip {
    item: Special.Item;
    tooltip: Special.LangKey;
  }
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
  type JsonObject_ = JsonObject | object;
  type JsonElement_ = JsonElement | number | string | boolean | object;
  type ArmorMaterial_ =
    | ArmorMaterial
    | "gold"
    | "chain"
    | "diamond"
    | "sturdyarmor"
    | "steelarmor"
    | "turtle"
    | "brassarmor"
    | "radiantarmor"
    | "iron"
    | "leather"
    | "copperarmor"
    | "netherite";
  type Tier_ = Tier | "gold" | "diamond" | "iron" | "copper" | "wood" | "brass" | "radiant" | "stone" | "netherite";
  // type ItemStackJS_ = ItemStackJS | `${number}x ${Special.Item}` | Internal.Item_;
  // type IngredientJS_ =
  //   | { ingredient: object }
  //   | RegExp
  //   | Internal.Ingredient_
  //   | { count?: number; item: Internal.ItemStackJS_ }
  //   | Internal.IngredientJS_[]
  //   | `%${string}`
  //   | IngredientJS
  //   | Internal.ItemStackJS_
  //   | Internal.FluidStackJS_
  //   | { fluid: Internal.FluidStackJS_ }
  //   | `#${Special.ItemTag}`
  //   | "*"
  //   | { value: object }
  //   | ((arg0: Internal.ItemStackJS) => boolean)
  //   | { type: Special.Ingredient }
  //   | `@${Special.Mod}`;
  // | `${number}x #${Special.Tag}`;

  interface ExtendedSceneBuilder$ExtendedWorldInstructions extends Internal.SceneBuilder$WorldInstructions {
    setBlocks(selection: Internal.Selection_, blockState: Internal.BlockState_, spawnParticles: boolean): void;
  }

  interface RecipeEventJS extends Internal.EventJS {
    custom<TRecipe extends { type: Special.RecipeType_ }>(o: TRecipe): Internal.RecipeJS;
    shaped(
      result: Internal.IngredientJS_,
      pattern: Helper.Pattern,
      keys: { [key: string]: Internal.IngredientJS_ }
    ): Internal.ShapedRecipeJS;
    shaped(output: Internal.ItemStackJS_, inputs: Internal.IngredientJS_[][]): Internal.ShapedRecipeJS;
    shapeless(result: Internal.IngredientJS_, items: Internal.IngredientJS_[]): Internal.ShapelessRecipeJS;
    smoking(output: Internal.ItemStackJS_, input: Internal.IngredientJS_): Internal.CookingRecipeJS;
    smelting(output: Internal.ItemStackJS_, input: Internal.IngredientJS_): Internal.CookingRecipeJS;
    smithing(
      output: Internal.ItemStackJS_,
      base: Internal.IngredientJS_,
      addition: Internal.IngredientJS_
    ): Internal.SmithingRecipeJS;
    blasting(output: Internal.ItemStackJS_, input: Internal.IngredientJS_): Internal.CookingRecipeJS;
    stonecutting(output: Internal.ItemStackJS_, input: Internal.IngredientJS_): Internal.StonecuttingRecipeJS;
    // campfire_cooking(output: Internal.ItemStackJS_, input: Internal.IngredientJS_): Internal.CookingRecipeJS;
  }

  interface CustomMachineryRecipes {
    custom_machine(name: `${string}:${string}`, duration: number): this;
    requireItem(item: IngredientJS_): this;
    requireEnergyPerTick(energyPerTick: number): this;
    mustSeeSky(): this;
    produceItem(item: IngredientJS_): this;
    produceSU(RPM: number, SU: number): this;
    requireItemTag(tag: `#${Special.ItemTag}`, count: number): this;
    requireStructure(
      structure: string[][],
      key: { [key: string]: Special.Block | `${Special.Block}[${string}]` | `${Special.Block}{${string}}` }
    );
  }

  interface DocumentedRecipes {
    readonly custommachinery: Internal.CustomMachineryRecipes;

    createSplashing(
      outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>,
      input: Internal.IngredientJS_
    ): Internal.ProcessingRecipeJS;
    // application(outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>, input: Internal.IngredientJS_[]): Internal.ItemApplicationRecipeJS;
    createSandpaperPolishing(
      outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>,
      input: Internal.IngredientJS_
    ): Internal.ProcessingRecipeJS;
    createEmptying(
      outputs: Internal.Of2_<Internal.IngredientJS_, Internal.FluidStackJS_>,
      input: Internal.IngredientJS_
    ): Internal.ProcessingRecipeJS;
    // mechanical_crafting(output: Internal.IngredientJS_, pattern: string[], items: {[key in string]: Internal.IngredientJS_}): Internal.ProcessingRecipeJS;
    createPressing(
      outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>,
      input: Internal.IngredientJS_
    ): Internal.ProcessingRecipeJS;
    createCutting(
      outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>,
      input: Internal.IngredientJS_
    ): Internal.ProcessingRecipeJS;
    createCrushing(
      outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>,
      input: Internal.IngredientJS_
    ): Internal.ProcessingRecipeJS;
    createFilling(
      outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>,
      input: Internal.Of2_<Internal.IngredientJS_, Internal.FluidStackJS_>
    ): Internal.ProcessingRecipeJS;
    createMilling(
      outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>,
      input: Internal.IngredientJS_
    ): Internal.ProcessingRecipeJS;
    createHaunting(
      outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>,
      input: Internal.IngredientJS_
    ): Internal.ProcessingRecipeJS;
    createCompacting(
      outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>,
      inputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>
    ): Internal.ProcessingRecipeJS;
    createDeploying(
      outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>,
      input: Internal.IngredientJS_
    ): Internal.ItemApplicationRecipeJS;
    // sequenced_assembly(outputs: Internal.IngredientJS_[], input: Internal.IngredientJS_, sequence: Internal.ProcessingRecipeJS_[]): Internal.SequencedAssemblyRecipeJS;
    createMixing(
      outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>,
      inputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>
    ): Internal.ProcessingRecipeJS;
  }

  interface CreateRecipes {
    splashing(
      outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>,
      input: Internal.IngredientJS_
    ): Internal.ProcessingRecipeJS;
    item_application(
      outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>,
      input: Internal.IngredientJS_[]
    ): Internal.ItemApplicationRecipeJS;
    sandpaper_polishing(
      outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>,
      input: Internal.IngredientJS_
    ): Internal.ProcessingRecipeJS;
    emptying(
      outputs: Internal.Of2_<Internal.IngredientJS_, Internal.FluidStackJS_>,
      input: Internal.IngredientJS_
    ): Internal.ProcessingRecipeJS;
    mechanical_crafting(
      output: Internal.IngredientJS_,
      pattern: string[],
      items: { [key in string]: Internal.IngredientJS_ }
    ): Internal.ProcessingRecipeJS;
    pressing(
      outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>,
      input: Internal.IngredientJS_
    ): Internal.ProcessingRecipeJS;
    cutting(
      outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>,
      input: Internal.IngredientJS_
    ): Internal.ProcessingRecipeJS;
    crushing(
      outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>,
      input: Internal.IngredientJS_
    ): Internal.ProcessingRecipeJS;
    filling(
      outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>,
      input: Internal.Of2_<Internal.IngredientJS_, Internal.FluidStackJS_>
    ): Internal.ProcessingRecipeJS;
    milling(
      outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>,
      input: Internal.IngredientJS_
    ): Internal.ProcessingRecipeJS;
    haunting(
      outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>,
      input: Internal.IngredientJS_
    ): Internal.ProcessingRecipeJS;
    compacting(
      outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>,
      inputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>
    ): Internal.ProcessingRecipeJS;
    deploying(
      outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>,
      input: Internal.IngredientJS_
    ): Internal.ItemApplicationRecipeJS;
    sequenced_assembly(
      outputs: Internal.IngredientJS_[],
      input: Internal.IngredientJS_,
      sequence: Internal.ProcessingRecipeJS_[]
    ): Internal.SequencedAssemblyRecipeJS;
    mixing(
      outputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>,
      inputs: Internal.ArrayOrSelf_<Internal.IngredientJS_>
    ): Internal.ProcessingRecipeJS;
  }

  interface AddOreProperties {
    id: string;
    biomes: object;
    addTarget(
      ruleTest: Internal.Block_ | `#${Special.BlockTag}`,
      targetState: Internal.Block_ | `#${Special.BlockTag}`
    ): void;
  }

  interface ItemBuilder extends Internal.BuilderBase<Internal.Item> {
    texture(tex: Special.Texture): this;
    texture(key: string, tex: Special.Texture): this;
  }

  interface DeferredRegister<T> extends Internal.Iterable<Internal.RegistrySupplier<T>> {
    "register(net.minecraft.class_2960,java.util.function.Supplier)"(
      id: ResourceLocation_,
      supplier: Internal.Supplier_<any>
    ): Internal.RegistrySupplier<R>;
    "register(java.lang.String,java.util.function.Supplier)"(
      id: string,
      supplier: Internal.Supplier_<any>
    ): Internal.RegistrySupplier<R>;
  }
  type ItemTooltipEventJS$StaticTooltipHandlerFromJS_ =
    | ((
        itemStack: Internal.ItemStackJS,
        isAdvanced: boolean,
        lines: Internal.List<globalThis.Component | globalThis.Component[]>
      ) => void)
    | ItemTooltipEventJS$StaticTooltipHandlerFromJS;
}

declare namespace Special {
  type RecipeType_ =
    | RecipeType
    | "createaddition:charging"
    | "createaddition:liquid_burning"
    | "createaddition:rolling"
    | "tconstruct:melting_fuel"
    | "tconstruct:material_fluid"
    | "tconstruct:material_melting"
    | "tconstruct:modifier"
    | "tconstruct:incremental_modifier"
    | "tconstruct:swappable_modifier";
  type Modifier =
    | "tconstruct:airborne"
    | "tconstruct:antiaquatic"
    | "tconstruct:aqua_affinity"
    | "tconstruct:autosmelt"
    | "tconstruct:axe_scrape"
    | "tconstruct:axe_strip"
    | "tconstruct:axe_wax_off"
    | "tconstruct:bane_of_sssss"
    | "tconstruct:blast_protection"
    | "tconstruct:blasting"
    | "tconstruct:blaze_disguise"
    | "tconstruct:boon_of_sssss"
    | "tconstruct:bouncy"
    | "tconstruct:breathtaking"
    | "tconstruct:bucketing"
    | "tconstruct:cave_spider_disguise"
    | "tconstruct:chrysophilite"
    | "tconstruct:conducting"
    | "tconstruct:cooling"
    | "tconstruct:creative_slot"
    | "tconstruct:creeper_disguise"
    | "tconstruct:crumbling"
    | "tconstruct:cultivated"
    | "tconstruct:decay"
    | "tconstruct:dense"
    | "tconstruct:diamond"
    | "tconstruct:double_jump"
    | "tconstruct:draconic"
    | "tconstruct:dragonborn"
    | "tconstruct:drowned_disguise"
    | "tconstruct:dual_wielding"
    | "tconstruct:ductile"
    | "tconstruct:dwarven"
    | "tconstruct:dyed"
    | "tconstruct:embellishment"
    | "tconstruct:emerald"
    | "tconstruct:empty"
    | "tconstruct:enderdodging"
    | "tconstruct:enderman_disguise"
    | "tconstruct:enderporting"
    | "tconstruct:enhanced"
    | "tconstruct:exchanging"
    | "tconstruct:expanded"
    | "tconstruct:experienced"
    | "tconstruct:farsighted"
    | "tconstruct:feather_falling"
    | "tconstruct:fiery"
    | "tconstruct:fire_protection"
    | "tconstruct:firebreath"
    | "tconstruct:fireprimer"
    | "tconstruct:firestarter"
    | "tconstruct:firestarter_hidden"
    | "tconstruct:flamewake"
    | "tconstruct:fortune"
    | "tconstruct:frost_walker"
    | "tconstruct:frosttouch"
    | "tconstruct:gilded"
    | "tconstruct:glowing"
    | "tconstruct:gold_guard"
    | "tconstruct:golden"
    | "tconstruct:harmonious"
    | "tconstruct:harvest"
    | "tconstruct:haste"
    | "tconstruct:haste_armor"
    | "tconstruct:heavy"
    | "tconstruct:hoe_till"
    | "tconstruct:husk_disguise"
    | "tconstruct:hydraulic"
    | "tconstruct:insatiable"
    | "tconstruct:invariant"
    | "tconstruct:item_frame"
    | "tconstruct:jagged"
    | "tconstruct:killager"
    | "tconstruct:knockback"
    | "tconstruct:knockback_armor"
    | "tconstruct:knockback_resistance"
    | "tconstruct:lacerating"
    | "tconstruct:leaping"
    | "tconstruct:lightspeed"
    | "tconstruct:lightspeed_armor"
    | "tconstruct:lightweight"
    | "tconstruct:looting"
    | "tconstruct:luck"
    | "tconstruct:lustrous"
    | "tconstruct:magic_protection"
    | "tconstruct:magnetic"
    | "tconstruct:maintained"
    | "tconstruct:melee_protection"
    | "tconstruct:melting"
    | "tconstruct:mithridatism"
    | "tconstruct:momentum"
    | "tconstruct:nearsighted"
    | "tconstruct:necrotic"
    | "tconstruct:netherite"
    | "tconstruct:offhand_attack"
    | "tconstruct:offhanded"
    | "tconstruct:overcast"
    | "tconstruct:overforced"
    | "tconstruct:overgrowth"
    | "tconstruct:overlord"
    | "tconstruct:overslime"
    | "tconstruct:overslime_friend"
    | "tconstruct:overworked"
    | "tconstruct:padded"
    | "tconstruct:path_maker"
    | "tconstruct:pathing"
    | "tconstruct:piercing"
    | "tconstruct:piglin_brute_disguise"
    | "tconstruct:piglin_disguise"
    | "tconstruct:plague"
    | "tconstruct:plowing"
    | "tconstruct:pockets"
    | "tconstruct:projectile_protection"
    | "tconstruct:protection"
    | "tconstruct:raging"
    | "tconstruct:reach"
    | "tconstruct:recapitated"
    | "tconstruct:reinforced"
    | "tconstruct:respiration"
    | "tconstruct:resurrected"
    | "tconstruct:revenge"
    | "tconstruct:revitalizing"
    | "tconstruct:ricochet"
    | "tconstruct:scorching"
    | "tconstruct:searing"
    | "tconstruct:self_destructive"
    | "tconstruct:severing"
    | "tconstruct:sharpness"
    | "tconstruct:sharpweight"
    | "tconstruct:shears"
    | "tconstruct:shield_strap"
    | "tconstruct:shiny"
    | "tconstruct:shovel_flatten"
    | "tconstruct:shulking"
    | "tconstruct:silky"
    | "tconstruct:silky_aoe_shears"
    | "tconstruct:silky_shears"
    | "tconstruct:skeleton_disguise"
    | "tconstruct:slurping"
    | "tconstruct:smite"
    | "tconstruct:snowdrift"
    | "tconstruct:solar_powered"
    | "tconstruct:soulbound"
    | "tconstruct:soulspeed"
    | "createastral:spacious"
    | "createastral:amplified"
    | "tconstruct:speedy"
    | "tconstruct:spider_disguise"
    | "tconstruct:spilling"
    | "tconstruct:springy"
    | "tconstruct:stat_override"
    | "tconstruct:step_up"
    | "tconstruct:sticky"
    | "tconstruct:stonebound"
    | "tconstruct:stoneshield"
    | "tconstruct:stray_disguise"
    | "tconstruct:strength"
    | "tconstruct:stringy"
    | "tconstruct:stripping"
    | "tconstruct:strong_bones"
    | "tconstruct:sturdy"
    | "tconstruct:sweeping_edge"
    | "tconstruct:swiftstrike"
    | "tconstruct:tank"
    | "tconstruct:tanned"
    | "tconstruct:tasty"
    | "tconstruct:temperate"
    | "tconstruct:the_one_probe"
    | "tconstruct:thorns"
    | "tconstruct:tilling"
    | "tconstruct:tool_belt"
    | "tconstruct:turtle_shell"
    | "tconstruct:unarmed"
    | "tconstruct:unbreakable"
    | "tconstruct:wetting"
    | "tconstruct:wildfire"
    | "tconstruct:wings"
    | "tconstruct:wither_skeleton_disguise"
    | "tconstruct:withered"
    | "tconstruct:worldbound"
    | "tconstruct:writable"
    | "tconstruct:zombie_disguise"
    | "tconstruct:zombified_piglin_disguise"
    | "tconstruct:zoom";
  type ToolPart =
    | "tconstruct:bloodbone"
    | "tconstruct:wood"
    | "tconstruct:radiant"
    | "tconstruct:rock"
    | "tconstruct:gold"
    | "tconstruct:lead"
    | "tconstruct:iron"
    | "tconstruct:desh"
    | "tconstruct:bone"
    | "tconstruct:plated_slimewood"
    | "tconstruct:leather"
    | "tconstruct:ender_pearl"
    | "tconstruct:necrotic_bone"
    | "tconstruct:slimesteel"
    | "tconstruct:amethyst_bronze"
    | "tconstruct:platinum"
    | "tconstruct:manyullyn"
    | "tconstruct:whitestone"
    | "tconstruct:darkthread"
    | "tconstruct:hepatizon"
    | "tconstruct:rose_gold"
    | "tconstruct:seared_stone"
    | "tconstruct:slimewood"
    | "tconstruct:calorite"
    | "tconstruct:phantom"
    | "tconstruct:pig_iron"
    | "tconstruct:blazing_bone"
    | "tconstruct:nahuatl"
    | "tconstruct:chorus"
    | "tconstruct:copper"
    | "tconstruct:cobalt"
    | "tconstruct:ostrum"
    | "tconstruct:silver"
    | "tconstruct:shadow"
    | "tconstruct:bronze"
    | "tconstruct:rotten_flesh"
    | "tconstruct:scorched_stone"
    | "tconstruct:enderslime"
    | "tconstruct:steel"
    | "tconstruct:invar"
    | "tconstruct:flint"
    | "tconstruct:glass"
    | "tconstruct:queens_slime"
    | "tconstruct:string"
    | "tconstruct:electrum"
    | "tconstruct:tungsten"
    | "tconstruct:enderslime_vine"
    | "tconstruct:ancient_hide"
    | "tconstruct:chain"
    | "tconstruct:skyslime_vine";
}

declare namespace Custom {}

declare namespace dev.latvian.mods.rhino.mod.util.color {
  type Color_ = Color | number;
}

// ProbeJS didn't catch that.
declare function onEvent(eventName: "entity.spawned", handler: (event: any) => void): any;
