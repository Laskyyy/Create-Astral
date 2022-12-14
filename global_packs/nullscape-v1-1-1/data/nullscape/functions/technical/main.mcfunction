# from clocks/main
#> technical ticking - most things here should be isolated from main logic

execute as @a[predicate=nullscape:dim/overworld] at @s if block ~ ~ ~ end_portal run function nullscape:technical/dim/to_null_island
execute as @a[predicate=nullscape:dim/overworld] at @s if block ~ ~1 ~ end_portal run function nullscape:technical/dim/to_null_island


execute in nullscape:end_island positioned 0 0 0 as @e[distance=0..,type=!#nullscape:not_teleportable] run function nullscape:technical/gateway/null_island_checks
execute in nullscape:end_island positioned 0 0 0 as @e[type=ender_pearl,distance=0..] run function nullscape:technical/gateway/null_island_pearl

#execute in minecraft:the_end positioned 0 0 0 as @e[type=ender_pearl,distance=0..] run function nullscape:technical/gateway/nullscape_pearl

execute as @e[type=marker,tag=ns.nullscape_gateway] at @s run function nullscape:technical/gateway/nullscape_checks

execute at @e[type=marker,tag=ns.nullscape_gateway] run function nullscape:technical/gateway/purge_markers

advancement revoke @a[advancements={nullscape:technical/dim_change=true}] only nullscape:technical/dim_change

execute in nullscape:end_island positioned 0 0 0 as @a[distance=850..2000] run function nullscape:technical/misc/rubberband

execute in nullscape:end_island positioned 0 0 0 as @e[type=ender_pearl,distance=850..] run kill @s
