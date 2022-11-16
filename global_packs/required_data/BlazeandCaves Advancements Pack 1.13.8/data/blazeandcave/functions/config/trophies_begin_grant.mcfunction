# Grants trophies to every player who is online that has never manually had trophies granted before

execute as @a at @s unless score @s bac_trophy_given matches 1 run function blazeandcave:config/grant_trophies

function blazeandcave:config

tellraw @s {"color":"green","translate":"All players have been granted trophies."}
execute if entity @p[scores={bac_trophy_given=1}] run tellraw @s {"color":"red","translate":"Players that have been granted trophies by this function in the past did not receive any now. To manually re-enable trophy granting for them use the command:"}
execute if entity @p[scores={bac_trophy_given=1}] run tellraw @s {"color":"gray","text":"/scoreboard players set <Player's Name> bac_trophy_given 0","clickEvent":{"action":"suggest_command","value":"/scoreboard players set <Player's Name> bac_trophy_given 0"},"hoverEvent":{"action":"show_text","contents":["",{"translate":"Click to insert command into chat","color":"gold"}]}}

scoreboard players set @a bac_trophy_given 1