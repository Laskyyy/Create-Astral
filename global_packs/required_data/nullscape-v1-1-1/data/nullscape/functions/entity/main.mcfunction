# @s: entity thats !#nullscape:not_teleportable
#> ticking entity

scoreboard players add @s ns.dimension_buffer 0
scoreboard players operation @s[scores={ns.dimension_buffer=0}] ns.old_dimension = @s ns.dimension

scoreboard players set @s ns.dimension 1
scoreboard players set @s[predicate=nullscape:dim/null_island] ns.dimension 2
scoreboard players set @s[predicate=nullscape:dim/the_end] ns.dimension 3

# if unset, set it before bad stuff happens
execute unless score @s ns.old_dimension matches 1.. run scoreboard players operation @s ns.old_dimension = @s ns.dimension

#> If entity changed dimensions, reroute entity
execute unless score @s ns.old_dimension = @s ns.dimension in minecraft:the_end positioned 100 49 0 run function nullscape:technical/dim/route

scoreboard players remove @s[scores={ns.dimension_buffer=1..}] ns.dimension_buffer 1
