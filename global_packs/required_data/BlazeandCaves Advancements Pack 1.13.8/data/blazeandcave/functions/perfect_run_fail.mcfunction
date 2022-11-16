# Revokes technical advancements
advancement revoke @s only blazeandcave:technical/spawn_perfect_one
advancement revoke @s only blazeandcave:technical/spawn_perfect_all
scoreboard players set @s bac_pr_tl -1

# Revokes completed components of The Perfect Run if it is incomplete
advancement revoke @s[advancements={blazeandcave:challenges/the_perfect_run=false}] only blazeandcave:challenges/the_perfect_run