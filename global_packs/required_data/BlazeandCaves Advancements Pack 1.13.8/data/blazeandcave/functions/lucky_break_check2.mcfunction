# Function runs after a player falls further than 10 blocks and checks how much health they have remaining

# If they have 1 or 2 health, they get the advancement

execute as @a[advancements={blazeandcave:technical/lucky_break_check=true},scores={bac_health=1..2}] at @s run advancement grant @s only blazeandcave:mining/lucky_break

advancement revoke @a[advancements={blazeandcave:technical/lucky_break_check=true}] only blazeandcave:technical/lucky_break_check