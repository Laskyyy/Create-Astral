# @s: marker
#> structure

execute positioned ~ 52 ~ align xyz unless entity @e[type=marker,distance=..20,tag=ns.nullscape_gateway] run summon marker ~0.5 52 ~0.5 {Tags:['ns.nullscape_gateway'],CustomName:'"Nullscape Gateway"'}

#setblock ~ 50 ~ minecraft:structure_block{mode: "LOAD", posX: -2, posY: -1, posZ: -2, name: "nullscape:gateway_platform", ignoreEntities:1b}

setblock ~ 50 ~ structure_block{metadata: "", mirror: "NONE", ignoreEntities: 1b, powered: 0b, seed: 0L, author: "Starmute", rotation: "NONE", posX: -6, mode: "LOAD", posY: -11, sizeX: 13, posZ: -6, integrity: 1.0f, showair: 0b, x: 164, name: "nullscape:gateway_platform2", y: 115, z: 61, id: "minecraft:structure_block", sizeY: 20, sizeZ: 13, showboundingbox: 0b}

setblock ~ 49 ~ minecraft:redstone_block
setblock ~ 50 ~ minecraft:air

tp @e[tag=ns.self,limit=1] @e[type=marker,tag=ns.nullscape_gateway,limit=1,distance=..5]
