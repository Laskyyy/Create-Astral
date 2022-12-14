# @s: entity just teleported (pos in minecraft:the_end around 100 50 0)
#> route entity to correct location

scoreboard players set @s[scores={ns.dimension_buffer=0}] ns.dimension_buffer 10

# old dim == overworld/the_nether, etc
execute if entity @s[scores={ns.old_dimension=1}, distance=..6] run function nullscape:technical/dim/to_null_island

# old dim == null_island (fake end island)
execute if entity @s[scores={ns.old_dimension=2}, distance=..6] run function nullscape:technical/dim/to_overworld

execute if entity @s[scores={ns.dimension_buffer=0}] run tellraw @a[tag=ns.admin] ["", {"nbt": "Pos", "entity": "@s", "color": "gold"}, " ", {"nbt": "Dimension", "entity": "@s", "color": "blue"}, " ", {"score": {"name": "@s", "objective": "ns.old_dimension"}, "color": "red"}, " -> ", {"score": {"name": "@s", "objective": "ns.dimension"}, "color": "green"}]
