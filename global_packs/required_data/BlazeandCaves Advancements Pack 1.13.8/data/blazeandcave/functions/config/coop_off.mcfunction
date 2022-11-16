scoreboard players set coop bac_settings 0

execute if score task bac_settings matches -1 run scoreboard players set task bac_settings 1
execute if score goal bac_settings matches -1 run scoreboard players set goal bac_settings 1
execute if score challenge bac_settings matches -1 run scoreboard players set challenge bac_settings 1
execute if score super_challenge bac_settings matches -1 run scoreboard players set super_challenge bac_settings 1
execute if score milestone bac_settings matches -1 run scoreboard players set milestone bac_settings 1

function blazeandcave:config