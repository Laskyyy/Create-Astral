function nullscape:technical/main

# includes players
execute as @e[type=!#nullscape:not_teleportable] run function nullscape:entity/main

execute as @a at @s run function nullscape:player/main

schedule function nullscape:clocks/main 1t replace
