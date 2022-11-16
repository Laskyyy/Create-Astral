# Sets the time limit to spawn the other two to 30 seconds
scoreboard players set @s bac_pr_tl 30

# Resets scoreboards
scoreboard players set @s bac_pr_dmgt 0
scoreboard players set @s bac_pr_dmga 0
scoreboard players set @s bac_pr_dmgr 0

# Resets technical advancements
advancement revoke @s only blazeandcave:technical/defeat_perfect_dragon
advancement revoke @s only blazeandcave:technical/defeat_perfect_wither
advancement revoke @s only blazeandcave:technical/defeat_perfect_raid