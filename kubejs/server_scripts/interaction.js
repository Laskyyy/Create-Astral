//* This file Contains the code made by TheOverlyCaffeinatedTrashPanda
//* each section has comments useing the "Better Comments" extension in VScode
//* This was made to keep all the custom interactions in 1 file for easy of access


onEvent("player.logged_in", (event) => {
    if (!event.player.stages.has("starting_items")) {
        event.player.stages.add("starting_items");
  
        event.player.give("ftbquests:book");
    }
  
    //? Moved the code for the quest book message into the area where the the player gets the quest book
    //? Was Done to reduce the number of "player.logged_in" events
    //!This point forward, all code was made by TheOverlyCaffeinatedTrashPanda 
    if(!event.player.stages.has("read_quest")) {
      event.player.tell(Text.aqua('Please Read The Quest Book (Hover Over Me!)').underlined().hover("The quest book contains most of all the information needed to progress in this mod pack. Its your friend!, Use the item to remove this message"))
     }
  });
  
  
  //? checks if player has opend the quest book
  onEvent("item.right_click", (event) => {
  if (event.item.id == "ftbquests:book") {
    event.player.stages.add('read_quest')
  }
  })
  
  
  //? Makes the conduit take damge if used on shimmer stone
  //? If you wish to increase the damge please goto startup scripts, line 385, then what ever value you set it, take 1 off and change the 19
  
  onEvent("block.right_click", (event) => {
      if (event.block.id == "createastral:shimmering_stone" &&event.item.id == "createastral:astral_conduit" &&event.item.nbt["Damage"] <= 19) {
          event.item.nbt["Damage"]++;
          if (event.item.nbt["Damage"] == 20) {
              event.player.inventory.set(event.player.getSelectedSlot(), "air");
          }
      }

      //? tp the player to their spawn point if they in the end and crouch right click bedrock
      if (event.block.id == "minecraft:bedrock" && event.player.level.dimension.toString() === "minecraft:the_end" && event.player.isCrouching()) {
		let spawnPoint = event.player.getSpawnLocation()
		event.player.teleportTo("minecraft:overworld", spawnPoint.x, spawnPoint.y, spawnPoint.z, 0 ,0)
	}
  });
  
  
  //? Add code to make different potato projectiles go bang
  const projectileItem         = "createastral:astral_singularity" //? The Item to change
  const particleSpread         = 2.5 
  const particleSize           = 10 
  const particleSpeed          = 5
  const particleCount          = 100
  const explosionStrength      = 10
  const explosionDamageTerrain = true
  
  onEvent('entity.spawned', event => {
      const { entity, server} = event
      if (entity.type === "create:potato_projectile" && entity.fullNBT.Item.id === projectileItem) {
          server.scheduleInTicks(5, event => {
              if(entity.removed || entity.deadOrDying || !entity.alive) {
                  let x = entity.fullNBT.Pos[0] 
                  let y = entity.fullNBT.Pos[1]
                  let z = entity.fullNBT.Pos[2]
                  let explosion =    entity.block.offset(0,0,0).createExplosion()
                  explosion.strength(explosionStrength)
                  explosion.damagesTerrain(explosionDamageTerrain)
                  //? This is the line to comment out if you do not want particles
                  server.runCommandSilent(`particle dust 0.31 0 0.78 ${particleSize} ${x} ${y} ${z} ${particleSpread} ${particleSpread} ${particleSpread} ${particleSpeed} ${particleCount}`)
                  explosion.explode()
                  return
              }
              event.reschedule()
  })}})