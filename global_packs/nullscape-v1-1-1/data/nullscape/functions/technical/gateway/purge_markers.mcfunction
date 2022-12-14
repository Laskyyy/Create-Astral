execute positioned ~ 52 ~ run tag @e[type=marker,distance=..20,tag=ns.nullscape_gateway,limit=1] add ns.no_kill
kill @e[type=marker,distance=..20,tag=ns.nullscape_gateway,tag=!ns.no_kill]
tag @e[type=marker,distance=..20,tag=ns.nullscape_gateway,limit=1] remove ns.no_kill

execute positioned ~ 56 ~ if entity @e[type=ender_pearl,distance=..3] as @p[gamemode=!spectator] run function nullscape:technical/dim/to_null_island
