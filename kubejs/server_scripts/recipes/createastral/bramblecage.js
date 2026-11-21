(function interaction() {

	let transbramble = (outputBlock, inputItem, consumeItem) => {
	
  onEvent('block.right_click', event => {

	//? If the rightclicked block isn't a bramblecage or the item isn't a input item return
  	if ( event.block.id != "createastral:bramblecage" || event.item.id != inputItem ) return
	
	let x = Math.floor(event.block.x);
    let y = Math.floor(event.block.y);
    let z = Math.floor(event.block.z);
	
/*	if ( event.level.getBlock(x-1, y, z).id != "minecraft:air" ||
		 event.level.getBlock(x+1, y, z).id != "minecraft:air" ||
		 event.level.getBlock(x, y+1, z).id != "minecraft:air" ||
		 event.level.getBlock(x, y-1, z).id != "minecraft:air" ||
		 event.level.getBlock(x, y, z-1).id != "minecraft:air" ||
		 event.level.getBlock(x, y, z+1).id != "minecraft:air" ) return

	event.level.getBlock(x-1, y, z).set(outputBlock)
	event.level.getBlock(x+1, y, z).set(outputBlock)
	event.level.getBlock(x, y-1, z).set(outputBlock)
	event.level.getBlock(x, y+1, z).set(outputBlock)
	event.level.getBlock(x, y, z+1).set(outputBlock)
	event.level.getBlock(x, y, z-1).set(outputBlock)
	*/

	//? Checks every block around it and if said block is air turns it into the output block
	if ( event.level.getBlock(x-1, y, z).id == "minecraft:air" ) event.level.getBlock(x-1, y, z).set(outputBlock)
	if ( event.level.getBlock(x+1, y, z).id == "minecraft:air" ) event.level.getBlock(x+1, y, z).set(outputBlock)
	if ( event.level.getBlock(x, y-1, z).id == "minecraft:air" ) event.level.getBlock(x, y-1, z).set(outputBlock)
	if ( event.level.getBlock(x, y+1, z).id == "minecraft:air" ) event.level.getBlock(x, y+1, z).set(outputBlock)	
	if ( event.level.getBlock(x, y, z-1).id == "minecraft:air" ) event.level.getBlock(x, y, z-1).set(outputBlock)	
	if ( event.level.getBlock(x, y, z+1).id == "minecraft:air" ) event.level.getBlock(x, y, z+1).set(outputBlock)	
	
	if (consumeItem) { event.item.count-- }
	
	event.player.playSound('farmersdelight:entity.rotten_tomato.hit')
	
		});
	}

	//? Example recipes
	transbramble('minecraft:lime_stained_glass', 'minecraft:emerald', true)
	transbramble('minecraft:brown_mushroom_block', 'minecraft:brown_mushroom', false)

})();