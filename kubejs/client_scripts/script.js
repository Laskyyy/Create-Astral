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
    event.groupItems("kubejs:rei_groups/chipped", "Chipped Blocks", [
       	Ingredient.of('@chipped').getItemIds(),
      ]);

    event.groupItems("kubejs:rei_groups/tinker", "Tinkers", [
        Ingredient.of('@tconstruct').getItemIds(),
      ]);




    const useNbt = ['potion', 'enchanted_book', 'splash_potion', 'tipped_arrow', 'lingering_potion']

    useNbt.forEach(id => {
        const item = Item.of(id)
        const { namespace, path } = Utils.id(item.id)
        event.groupSameItem(`kubejs:rei_groups/${namespace}/${path}`, item.name, item)
      })

});

onEvent('rei.add.items', event => {
    event.add(Item.of('create:crushed_tin_ore'));
    event.add(Item.of('create:crushed_lead_ore'));
    event.add(Item.of('create:refined_radiance'));
    event.add(Item.of('create:shadow_steel'));
    event.add(Item.of('create:chromatic_compound'));
  })
