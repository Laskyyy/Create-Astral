# Function runs whenever a player gives gold to a piglin. Once they reach 500 gold given, the advancement "A Piglin's Best Friend" is granted
scoreboard players add @s bac_pigling 1

execute if score @s bac_pigling matches 500.. run advancement grant @s only blazeandcave:nether/a_piglins_best_friend

advancement revoke @s only blazeandcave:technical/give_piglin_gold