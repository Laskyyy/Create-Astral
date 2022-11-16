# Function runs once every ten seconds

# Checks if there is a player who has quit and just now rejoined the game. If there is and Cooperative mode is enabled, updates shared advancements
execute if score coop bac_settings matches 1 if entity @p[scores={bac_quit=1..}] run function blazeandcave:config/coop_update
execute if score coop bac_settings matches 2 as @a[scores={bac_quit=1..}] run function blazeandcave:config/coop_update_team
scoreboard players set @a bac_quit 0

# For "An Apple a Day" if an apple is eaten it increases the score. bac_apple_eaten is then set to 100
execute as @a[scores={bac_apple_eaten=1..99}] run scoreboard players add @s bac_apple_days 1
execute as @a[scores={bac_apple_eaten=1..}] run scoreboard players set @s bac_apple_eaten 100

# Once reaching 30 consecutive days "An Apple a Day" is awarded
execute as @a[scores={bac_apple_days=30..}] at @s run advancement grant @s only blazeandcave:farming/an_apple_a_day


# Day count is increased by 1 at each sunrise
scoreboard players operation previous bac_current_time = time bac_current_time
execute store result score time bac_current_time run time query daytime
execute if score time bac_current_time matches 0..200 run function blazeandcave:increase_day

# If it is just before a sunrise players gain "The First Night"
execute if score time bac_current_time matches 23000..23200 run advancement grant @a until blazeandcave:statistics/the_first_night

# "The First Night" is also achieved upon sleeping through the night. Because sleeping resets the time back to zero, it checks if the previous time was far greater than the time now
scoreboard players operation previous bac_current_time -= time bac_current_time
execute unless score previous bac_current_time matches ..13000 run advancement grant @a until blazeandcave:statistics/the_first_night



# Gives Striders ridden by a Zombified Piglin a unique tag for the "This One's Mine!" advancement. Those that don't have one are given a different tag so they aren't checked anymore
execute as @e[type=strider,tag=!zp_ridden,tag=!not_zp_ridden] at @s run function blazeandcave:strider_check

# Gives baby zombie variants the 'baby' tag if they are a baby (Used for the "Family Reunion" advancement)
execute as @e[type=#minecraft:zombies,tag=!bac_baby] run tag @s[predicate=blazeandcave:is_baby] add bac_baby

# The World Is Ending (counts ten withers)
execute as @a at @s store result score @s bac_ten_withers run execute if entity @e[type=wither,distance=..128]
execute as @a if score @s bac_ten_withers matches 10.. run advancement grant @s only blazeandcave:challenges/the_world_is_ending

schedule function blazeandcave:ten_second_timer 10s