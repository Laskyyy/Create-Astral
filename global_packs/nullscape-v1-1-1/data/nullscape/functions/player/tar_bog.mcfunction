# from ./main
# @s: player (in tar)

scoreboard players remove @s[predicate=!nullscape:tar_bog] ns.tar_time 2

effect give @s[scores={ns.tar_time=8..39}] slowness 1 0
effect give @s[scores={ns.tar_time=40..59}] slowness 1 1
effect give @s[scores={ns.tar_time=60..79}] slowness 1 2
effect give @s[scores={ns.tar_time=80..99}] slowness 1 3
effect give @s[scores={ns.tar_time=100..}] slowness 1 4
effect give @s[scores={ns.tar_time=80..}] blindness 3 0
effect give @s[scores={ns.tar_time=180..220}] wither 1 0
effect give @s[scores={ns.tar_time=220..350}] wither 1 1
effect give @s[scores={ns.tar_time=350..}] wither 1 2

execute if entity @s[scores={ns.tar_time=40..},predicate=nullscape:random/5] run playsound minecraft:block.lava.pop player @a[distance=..5] ~ ~ ~ 1 1.0 1
execute if entity @s[scores={ns.tar_time=40..},predicate=nullscape:random/2] run playsound minecraft:block.slime_block.place player @a[distance=..5] ~ ~ ~ 1 0.9 1
execute if entity @s[scores={ns.tar_time=50..},predicate=nullscape:random/5] run playsound minecraft:block.lava.pop player @a[distance=..5] ~ ~ ~ 1 0.8 1
execute if entity @s[scores={ns.tar_time=60..},predicate=nullscape:random/2] run playsound minecraft:block.slime_block.place player @a[distance=..5] ~ ~ ~ 1 0.7 1
execute if entity @s[scores={ns.tar_time=70..},predicate=nullscape:random/5] run playsound minecraft:block.lava.pop player @a[distance=..5] ~ ~ ~ 1 0.6 1
execute if entity @s[scores={ns.tar_time=80..},predicate=nullscape:random/2] run playsound minecraft:block.slime_block.place player @a[distance=..5] ~ ~ ~ 1 0.5 1
execute if entity @s[scores={ns.tar_time=90..},predicate=nullscape:random/5] run playsound minecraft:block.lava.pop player @a[distance=..5] ~ ~ ~ 1 0.4 1
execute if entity @s[scores={ns.tar_time=100..},predicate=nullscape:random/2] run playsound minecraft:block.slime_block.place player @a[distance=..5] ~ ~ ~ 1 0.3 1
execute if entity @s[scores={ns.tar_time=110..},predicate=nullscape:random/5] run playsound minecraft:block.lava.pop player @a[distance=..5] ~ ~ ~ 1 0.2 1

execute if entity @s[scores={ns.tar_time=40..},predicate=nullscape:random/10] run particle minecraft:falling_dust black_concrete ~ ~1 ~ 0.5 0.5 0.5 0 2 force
execute if entity @s[scores={ns.tar_time=50..},predicate=nullscape:random/10] run particle minecraft:falling_dust black_concrete ~ ~1 ~ 0.6 0.6 0.6 0 2 force
execute if entity @s[scores={ns.tar_time=60..},predicate=nullscape:random/10] run particle minecraft:falling_dust black_concrete ~ ~1 ~ 0.7 0.7 0.7 0 2 force
execute if entity @s[scores={ns.tar_time=70..},predicate=nullscape:random/10] run particle minecraft:falling_dust black_concrete ~ ~1 ~ 0.8 0.8 0.8 0 2 force
execute if entity @s[scores={ns.tar_time=80..},predicate=nullscape:random/10] run particle minecraft:falling_dust black_concrete ~ ~1 ~ 0.8 0.5 0.8 0 2 force
execute if entity @s[scores={ns.tar_time=90..},predicate=nullscape:random/10] run particle minecraft:falling_dust black_concrete ~ ~1 ~ 0.5 0.8 0.5 0 2 force
execute if entity @s[scores={ns.tar_time=100..},predicate=nullscape:random/10] run particle minecraft:falling_dust black_concrete ~ ~1 ~ 0.5 0.5 0.5 0 2 force
execute if entity @s[scores={ns.tar_time=110..},predicate=nullscape:random/10] run particle minecraft:falling_dust black_concrete ~ ~1 ~ 0.5 0.5 0.5 0 2 force
execute if entity @s[scores={ns.tar_time=120..},predicate=nullscape:random/10] run particle minecraft:falling_dust black_concrete ~ ~1 ~ 0.5 0.5 0.5 0 2 force
execute if entity @s[scores={ns.tar_time=130..},predicate=nullscape:random/10] run particle minecraft:falling_dust black_concrete ~ ~1 ~ 0.5 0.5 0.5 0 2 force
