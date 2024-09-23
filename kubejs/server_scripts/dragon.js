

onEvent("block.right_click", (event) => {
    if (event.block.id == "yttr:polished_scorched_obsidian_holster" && event.item.id == "yttr:root_of_continuity"){
        let blockPos = event.block.pos
        let x = blockPos.x
        let y = blockPos.y
        let z = blockPos.z
        event.block.set("yttr:polished_scorched_obsidian_holster_alive")
        event.server.runCommandSilent(`execute in minecraft:the_nether positioned ${x} ${y} ${z} run playsound ad_astra:imminent_doom master @a[distance=..20]`)
        event.server.runCommandSilent(`execute in minecraft:the_nether positioned ${x} ${y} ${z} run playsound astraladditions:music_wither_spawn master @a[distance=..20]`)
        event.server.scheduleInTicks(11.5 * 20, () => {
            event.server.runCommandSilent(`execute in minecraft:the_nether run particle minecraft:end_rod ${x} ${y + 10} ${z} 0 5 0 0.5 400`)
            event.server.runCommandSilent(`execute in minecraft:the_nether positioned ${x} ${y} ${z} run playsound minecraft:block.end_portal.spawn master @a[distance=..20]`)
            event.server.runCommandSilent(`execute in minecraft:the_nether run summon minecraft:ender_dragon ${x} ${y + 20} ${z}`)
        })
        event.cancel();
    }
})