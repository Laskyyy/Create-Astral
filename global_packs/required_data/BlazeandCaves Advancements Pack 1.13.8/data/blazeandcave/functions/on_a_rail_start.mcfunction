execute store result score @s bac_oar_start_x run data get entity @s Pos.[0]
execute store result score @s bac_oar_start_z run data get entity @s Pos.[2]

execute store result score @s bac_oar_current_x run data get entity @s Pos.[0]
execute store result score @s bac_oar_current_z run data get entity @s Pos.[2]

scoreboard players set @s bac_oar_eligible_x 1
scoreboard players set @s bac_oar_eligible_z 1

advancement revoke @s only blazeandcave:technical/on_a_rail_start