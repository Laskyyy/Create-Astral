# @s: marker
#> algo for dynamically tping + placing structure

# store coords into marker
execute store result entity @s Pos[0] double 150 run scoreboard players get $x ns.dummy
data modify entity @s Pos[1] set value 50.0d
execute store result entity @s Pos[2] double 150 run scoreboard players get $z ns.dummy

# temp forceload so we can edit blocks
execute positioned as @s in minecraft:the_end run forceload add ~ ~

# make new gateway go to existing one..
scoreboard players set $found_gateway ns.dummy 0
execute positioned as @s in minecraft:the_end as @e[type=marker,tag=ns.nullscape_gateway,distance=..20] at @s run function nullscape:technical/gateway/existing_gateway
execute if score $found_gateway ns.dummy matches 0 positioned as @s in minecraft:the_end run function nullscape:technical/gateway/new_gateway

# unload + cleanup
execute positioned as @s in minecraft:the_end run forceload remove ~ ~

kill @s
