# #minecraft:load via #load:load

scoreboard players set nullscape load.status 1

scoreboard objectives add ns.dummy dummy
scoreboard objectives add ns.const dummy
scoreboard objectives add ns.tar_time dummy
scoreboard objectives add ns.use_pearl minecraft.used:minecraft.ender_pearl

#> dimension num code
# 1: normal dimension (minecraft:overworld, minecraft:the_nether)
# 2: null island (nullscape:end_island)
# 3: nullscape (minecraft:the_end)
scoreboard objectives add ns.dimension dummy
scoreboard objectives add ns.old_dimension dummy
scoreboard objectives add ns.dimension_buffer dummy

# we have to for proper entity teleporation >:(
execute in minecraft:the_end run forceload remove 100 0
execute in minecraft:the_end run forceload add 100 0

execute in nullscape:end_island run forceload remove 100 0
execute in nullscape:end_island run forceload add 100 0

schedule clear nullscape:clocks/main
schedule function nullscape:clocks/main 1t replace
schedule function nullscape:clocks/wait_for_player 2t replace
