# If the player is within two blocks of powder snow, the score increases
execute if block ~ ~ ~ minecraft:powder_snow if block ~ ~1 ~ minecraft:powder_snow run scoreboard players add @s bac_captain_america 1

# If the player exits powder snow at all, the score resets
execute unless block ~ ~ ~ minecraft:powder_snow run scoreboard players set @s bac_captain_america 0
execute unless block ~ ~1 ~ minecraft:powder_snow run scoreboard players set @s bac_captain_america 0

# Once they have done this all day, they get the advancement
execute if score @s bac_captain_america matches 1200.. run advancement grant @s only blazeandcave:biomes/captain_america