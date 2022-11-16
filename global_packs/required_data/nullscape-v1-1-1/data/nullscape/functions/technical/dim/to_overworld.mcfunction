# @s: entity
#> send entity to the overworld

#say going to overworld

# this is for players lol
execute in minecraft:the_end positioned 100 50 0 run fill ~-2 ~ ~-2 ~2 ~ ~2 minecraft:end_portal replace minecraft:air

# delete later, must be loaded

schedule function nullscape:technical/misc/delete_end_portal 2t replace

scoreboard players set @s ns.dimension_buffer 0
