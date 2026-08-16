//@author HyperRaccoon13
const $REIChippedPlugin = java("earth.terrarium.chipped.compat.rei.REIChippedPlugin")
const $DisplayRegistry = java("me.shedaniel.rei.api.client.registry.display.DisplayRegistry")
const $CategoryRegistry = java("me.shedaniel.rei.api.client.registry.category.CategoryRegistry")
const $ChippedRecipeCategory = java("earth.terrarium.chipped.compat.rei.ChippedRecipeCategory")
const $EntryIngredients = java("me.shedaniel.rei.api.common.util.EntryIngredients")
const $EntryIngredient = java("me.shedaniel.rei.api.common.entry.EntryIngredient")
const $Collections = java("java.util.Collections")
const $Array = java("java.lang.reflect.Array")
const $Registry = java("net.minecraft.core.Registry")
const $ResourceLocation = java("net.minecraft.resources.ResourceLocation")
const $ModRecipeTypes = java("earth.terrarium.chipped.registry.ModRecipeTypes")
const $ModBlocks = java("earth.terrarium.chipped.registry.ModBlocks")
const $RecipeManager = java("net.minecraft.world.item.crafting.RecipeManager")
const $RecipeType = java("net.minecraft.world.item.crafting.RecipeType")
const $Block = java("net.minecraft.world.level.block.Block")

const chippedPlugin = new $REIChippedPlugin()

const registerRecipes = chippedPlugin.getClass().getDeclaredMethod("registerRecipes", $RecipeManager, $DisplayRegistry, $RecipeType, $Block)
registerRecipes.setAccessible(true)

function addChippedWorkstation(registry, block) {
  const category = new $ChippedRecipeCategory(block).getCategoryIdentifier()
  const workstation = $EntryIngredients.ofItems($Collections.singletonList(block))
  const workstationArray = $Array.newInstance($EntryIngredient, 1)
  $Array.set(workstationArray, 0, workstation)
  registry.addWorkstations(category, workstationArray)
}

const workstations = [
  "botanist_workbench",
  "glassblower",
  "carpenters_table",
  "loom_table",
  "mason_table",
  "alchemy_bench",
  "mechanist_workbench"
]

onEvent("rei.information", event => {
  const displayRegistry = $DisplayRegistry.getInstance()
  const categoryRegistry = $CategoryRegistry.getInstance()

  registerRecipes.invoke(chippedPlugin, displayRegistry.getRecipeManager(), displayRegistry, $ModRecipeTypes.GLASSBLOWER_TYPE.get(), $ModBlocks.GLASSBLOWER.get())
  workstations.forEach(block => {addChippedWorkstation(categoryRegistry,$Registry.BLOCK.get(new $ResourceLocation(`chipped:${block}`)))
  })
})