# @s: entity (location is worldspawn)
#> send entity to the fake end island (nullscape:end_island)

#say going to null island

# players go to different coords than entities
kill @e[type=ender_pearl,distance=..10]

execute in nullscape:end_island run tp @s[type=player] 100 49 0
execute in nullscape:end_island run tp @s[type=!player] 100.5 50 0.5

# obby platform
execute in nullscape:end_island positioned 100 49 0 run fill ~-2 ~-1 ~-2 ~2 ~-1 ~2 minecraft:obsidian replace

# air box
execute in nullscape:end_island positioned 100 49 0 run fill ~-2 ~ ~-2 ~2 ~3 ~2 minecraft:air replace minecraft:end_stone

# prevent double player tp
tag @s[type=player] add ns.tpd

scoreboard players set @s ns.dimension_buffer 0
