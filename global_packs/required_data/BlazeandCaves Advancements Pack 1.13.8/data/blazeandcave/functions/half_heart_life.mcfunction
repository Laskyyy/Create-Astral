# Adds one to half heart timer
scoreboard players add @s bac_hh_life 1

# Once the timer reaches 60 (a minute) they get the advancement
execute if score @s bac_hh_life matches 60.. run advancement grant @s only blazeandcave:weaponry/half_heart_life