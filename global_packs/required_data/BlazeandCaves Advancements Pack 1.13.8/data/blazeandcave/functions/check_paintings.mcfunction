# Function runs whenever a player places a painting and checks all paintings close by to count towards the advancement
execute if entity @e[type=painting,distance=..8,nbt={Motive:"minecraft:kebab"}] run advancement grant @s only blazeandcave:building/art_gallery kebab
execute if entity @e[type=painting,distance=..8,nbt={Motive:"minecraft:aztec"}] run advancement grant @s only blazeandcave:building/art_gallery aztec
execute if entity @e[type=painting,distance=..8,nbt={Motive:"minecraft:alban"}] run advancement grant @s only blazeandcave:building/art_gallery alban
execute if entity @e[type=painting,distance=..8,nbt={Motive:"minecraft:aztec2"}] run advancement grant @s only blazeandcave:building/art_gallery aztec2
execute if entity @e[type=painting,distance=..8,nbt={Motive:"minecraft:bomb"}] run advancement grant @s only blazeandcave:building/art_gallery bomb
execute if entity @e[type=painting,distance=..8,nbt={Motive:"minecraft:plant"}] run advancement grant @s only blazeandcave:building/art_gallery plant
execute if entity @e[type=painting,distance=..8,nbt={Motive:"minecraft:wasteland"}] run advancement grant @s only blazeandcave:building/art_gallery wasteland
execute if entity @e[type=painting,distance=..8,nbt={Motive:"minecraft:wanderer"}] run advancement grant @s only blazeandcave:building/art_gallery wanderer
execute if entity @e[type=painting,distance=..8,nbt={Motive:"minecraft:graham"}] run advancement grant @s only blazeandcave:building/art_gallery graham
execute if entity @e[type=painting,distance=..8,nbt={Motive:"minecraft:pool"}] run advancement grant @s only blazeandcave:building/art_gallery pool
execute if entity @e[type=painting,distance=..8,nbt={Motive:"minecraft:courbet"}] run advancement grant @s only blazeandcave:building/art_gallery courbet
execute if entity @e[type=painting,distance=..8,nbt={Motive:"minecraft:sunset"}] run advancement grant @s only blazeandcave:building/art_gallery sunset
execute if entity @e[type=painting,distance=..8,nbt={Motive:"minecraft:sea"}] run advancement grant @s only blazeandcave:building/art_gallery sea
execute if entity @e[type=painting,distance=..8,nbt={Motive:"minecraft:creebet"}] run advancement grant @s only blazeandcave:building/art_gallery creebet
execute if entity @e[type=painting,distance=..8,nbt={Motive:"minecraft:match"}] run advancement grant @s only blazeandcave:building/art_gallery match
execute if entity @e[type=painting,distance=..8,nbt={Motive:"minecraft:bust"}] run advancement grant @s only blazeandcave:building/art_gallery bust
execute if entity @e[type=painting,distance=..8,nbt={Motive:"minecraft:stage"}] run advancement grant @s only blazeandcave:building/art_gallery stage
execute if entity @e[type=painting,distance=..8,nbt={Motive:"minecraft:void"}] run advancement grant @s only blazeandcave:building/art_gallery void
execute if entity @e[type=painting,distance=..8,nbt={Motive:"minecraft:skull_and_roses"}] run advancement grant @s only blazeandcave:building/art_gallery skull_and_roses
execute if entity @e[type=painting,distance=..8,nbt={Motive:"minecraft:wither"}] run advancement grant @s only blazeandcave:building/art_gallery wither
execute if entity @e[type=painting,distance=..8,nbt={Motive:"minecraft:fighters"}] run advancement grant @s only blazeandcave:building/art_gallery fighters
execute if entity @e[type=painting,distance=..8,nbt={Motive:"minecraft:skeleton"}] run advancement grant @s only blazeandcave:building/art_gallery skeleton
execute if entity @e[type=painting,distance=..8,nbt={Motive:"minecraft:donkey_kong"}] run advancement grant @s only blazeandcave:building/art_gallery donkey_kong
execute if entity @e[type=painting,distance=..8,nbt={Motive:"minecraft:pointer"}] run advancement grant @s only blazeandcave:building/art_gallery pointer
execute if entity @e[type=painting,distance=..8,nbt={Motive:"minecraft:pigscene"}] run advancement grant @s only blazeandcave:building/art_gallery pigscene
execute if entity @e[type=painting,distance=..8,nbt={Motive:"minecraft:burning_skull"}] run advancement grant @s only blazeandcave:building/art_gallery burning_skull

advancement revoke @s only blazeandcave:technical/place_painting
scoreboard players set @s bac_painting 0