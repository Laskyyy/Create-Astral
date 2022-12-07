// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')

	event.groupItems("kubejs:rei_groups/chipped", "chipped", [
		Ingredient.of('@chipped').getItemIds(),
 ]);
})

onEvent("rei.group", (event) => {
    // This event allows you to add custom entry groups to REI, which can be used to clean up the entry list significantly.
    // As a simple example, we can add a "Swords" group which will contain all (vanilla) swords
    // Note that each group will need an id (ResourceLocation) and a display name (Component / String)
    event.groupItems("kubejs:rei_groups/chipped", "Chipped Blocks", [
       	Ingredient.of('@chipped').getItemIds(),
    ]);
});