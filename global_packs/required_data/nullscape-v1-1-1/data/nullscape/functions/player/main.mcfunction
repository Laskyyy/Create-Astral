# from clocks/main
# @s: player

#> tar bog disabled
# scoreboard players add @s[predicate=nullscape:tar_bog] ns.tar_time 1

# execute if entity @s[scores={ns.tar_time=1..}] run function nullscape:player/tar_bog

# stupid ender pearls
execute positioned 96 75 0 if block ~ ~ ~ end_gateway if entity @s[distance=..2.5,scores={ns.use_pearl=1..}] run function nullscape:technical/dim/to_nullscape
execute positioned 91 75 29 if block ~ ~ ~ end_gateway if entity @s[distance=..2.5,scores={ns.use_pearl=1..}] run function nullscape:technical/dim/to_nullscape
execute positioned 77 75 56 if block ~ ~ ~ end_gateway if entity @s[distance=..2.5,scores={ns.use_pearl=1..}] run function nullscape:technical/dim/to_nullscape
execute positioned 56 75 77 if block ~ ~ ~ end_gateway if entity @s[distance=..2.5,scores={ns.use_pearl=1..}] run function nullscape:technical/dim/to_nullscape
execute positioned 29 75 91 if block ~ ~ ~ end_gateway if entity @s[distance=..2.5,scores={ns.use_pearl=1..}] run function nullscape:technical/dim/to_nullscape
execute positioned -0 75 96 if block ~ ~ ~ end_gateway if entity @s[distance=..2.5,scores={ns.use_pearl=1..}] run function nullscape:technical/dim/to_nullscape
execute positioned -29 75 91 if block ~ ~ ~ end_gateway if entity @s[distance=..2.5,scores={ns.use_pearl=1..}] run function nullscape:technical/dim/to_nullscape
execute positioned -56 75 77 if block ~ ~ ~ end_gateway if entity @s[distance=..2.5,scores={ns.use_pearl=1..}] run function nullscape:technical/dim/to_nullscape
execute positioned -77 75 56 if block ~ ~ ~ end_gateway if entity @s[distance=..2.5,scores={ns.use_pearl=1..}] run function nullscape:technical/dim/to_nullscape
execute positioned -91 75 29 if block ~ ~ ~ end_gateway if entity @s[distance=..2.5,scores={ns.use_pearl=1..}] run function nullscape:technical/dim/to_nullscape
execute positioned -95 75 -0 if block ~ ~ ~ end_gateway if entity @s[distance=..2.5,scores={ns.use_pearl=1..}] run function nullscape:technical/dim/to_nullscape
execute positioned -91 75 -29 if block ~ ~ ~ end_gateway if entity @s[distance=..2.5,scores={ns.use_pearl=1..}] run function nullscape:technical/dim/to_nullscape
execute positioned -77 75 -56 if block ~ ~ ~ end_gateway if entity @s[distance=..2.5,scores={ns.use_pearl=1..}] run function nullscape:technical/dim/to_nullscape
execute positioned -56 75 -77 if block ~ ~ ~ end_gateway if entity @s[distance=..2.5,scores={ns.use_pearl=1..}] run function nullscape:technical/dim/to_nullscape
execute positioned -29 75 -91 if block ~ ~ ~ end_gateway if entity @s[distance=..2.5,scores={ns.use_pearl=1..}] run function nullscape:technical/dim/to_nullscape
execute positioned 0 75 -95 if block ~ ~ ~ end_gateway if entity @s[distance=..2.5,scores={ns.use_pearl=1..}] run function nullscape:technical/dim/to_nullscape
execute positioned 29 75 -91 if block ~ ~ ~ end_gateway if entity @s[distance=..2.5,scores={ns.use_pearl=1..}] run function nullscape:technical/dim/to_nullscape
execute positioned 56 75 -77 if block ~ ~ ~ end_gateway if entity @s[distance=..2.5,scores={ns.use_pearl=1..}] run function nullscape:technical/dim/to_nullscape
execute positioned 77 75 -56 if block ~ ~ ~ end_gateway if entity @s[distance=..2.5,scores={ns.use_pearl=1..}] run function nullscape:technical/dim/to_nullscape
execute positioned 91 75 -29 if block ~ ~ ~ end_gateway if entity @s[distance=..2.5,scores={ns.use_pearl=1..}] run function nullscape:technical/dim/to_nullscape

scoreboard players set @s ns.use_pearl 0
