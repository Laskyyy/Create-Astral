# Function runs whenever a player dies

# If it has been less than 10 seconds since the last death, the "Loser!" advancement is granted
execute if score @s bac_loser matches ..10 run advancement grant @s only blazeandcave:weaponry/loser

scoreboard players set @s bac_loser_death 0
scoreboard players set @s bac_loser 0