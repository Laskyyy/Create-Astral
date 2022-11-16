# Checks to make sure the player hasn't exited the Minecart
execute unless entity @s[predicate=blazeandcave:minecart_sit] run scoreboard players set @s bac_oar_eligible_x 0
execute unless entity @s[predicate=blazeandcave:minecart_sit] run scoreboard players set @s bac_oar_eligible_z 0

# Updates the current x and z
execute store result score @s bac_oar_current_x run data get entity @s Pos.[0]
execute store result score @s bac_oar_current_z run data get entity @s Pos.[2]

# If the player's current x is not the same as their starting x, they are disqualified for moving the z direction, and vice versa
execute unless score @s bac_oar_current_x = @s bac_oar_start_x run scoreboard players set @s bac_oar_eligible_z 0
execute unless score @s bac_oar_current_z = @s bac_oar_start_z run scoreboard players set @s bac_oar_eligible_x 0

# Checks how far the player has moved in each direction
scoreboard players operation @s bac_oar_current_x -= @s bac_oar_start_x
scoreboard players operation @s bac_oar_current_z -= @s bac_oar_start_z

# If the player has moved far enough in one of the directions, they get the advancement
execute if score @s bac_oar_eligible_x matches 1 if score @s bac_oar_current_x matches 1000.. run advancement grant @s only blazeandcave:redstone/on_a_rail
execute if score @s bac_oar_eligible_x matches 1 if score @s bac_oar_current_x matches ..-1000 run advancement grant @s only blazeandcave:redstone/on_a_rail
execute if score @s bac_oar_eligible_z matches 1 if score @s bac_oar_current_z matches 1000.. run advancement grant @s only blazeandcave:redstone/on_a_rail
execute if score @s bac_oar_eligible_z matches 1 if score @s bac_oar_current_z matches ..-1000 run advancement grant @s only blazeandcave:redstone/on_a_rail