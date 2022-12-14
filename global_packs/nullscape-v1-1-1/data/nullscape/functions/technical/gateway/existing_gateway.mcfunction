# @s: marker (ns.nullscape_gateway)
#> reroute entity to place

# regen structure
setblock ~ 50 ~ structure_block{metadata: "", mirror: "NONE", ignoreEntities: 1b, powered: 0b, seed: 0L, author: "Starmute", rotation: "NONE", posX: -6, mode: "LOAD", posY: -11, sizeX: 13, posZ: -6, integrity: 1.0f, showair: 0b, x: 164, name: "nullscape:gateway_platform2", y: 115, z: 61, id: "minecraft:structure_block", sizeY: 20, sizeZ: 13, showboundingbox: 0b}
setblock ~ 49 ~ minecraft:redstone_block
setblock ~ 50 ~ minecraft:air

tp @e[tag=ns.self,limit=1] @s

# flag for later
scoreboard players set $found_gateway ns.dummy 1
