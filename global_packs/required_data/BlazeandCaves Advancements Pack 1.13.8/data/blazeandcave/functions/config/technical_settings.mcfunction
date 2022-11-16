tellraw @s {"text":"                                                                                ","color":"dark_gray","strikethrough":true}
tellraw @s {"color":"gray","bold":"false","text":" ","extra":[{"color":"gray","bold":"false","translate":"Technical Settings"}]}

tellraw @s {"text":"                                                                                ","color":"dark_gray","strikethrough":true}

# Warning
tellraw @s {"bold":"false","text":" ","extra":[{"color":"red","bold":"false","translate":"Warning: Some of these settings may cause adverse effects on your progress, and will cause a lag-spike upon being used. Only use if you absolutely know what they do! Use with caution!"}]}

tellraw @s {"text":"                                                                                ","color":"dark_gray","strikethrough":true}

# Update Scoreboard
tellraw @s ["",{"text":"[ »» ]","color":"green","clickEvent":{"action":"run_command","value":"/function bc_rewards:update_score"},"hoverEvent":{"action":"show_text","contents":["",{"translate":"Goes through every advancement for every player online, and recounts how many advancements they have","color":"white"},{"text":"\n"},{"translate":"Should be used if:","color":"white"},{"text":"\n"},{"translate":"- You have recently updated to a new datapack version, especially across a new Minecraft update","color":"white"},{"text":"\n"},{"translate":"- You have been using commands to manually revoke the advancements of player(s)","color":"white"},{"text":"\n"},{"translate":"Click to run","color":"gold"}]}}," ",{"translate":"Update scoreboard"}]
# Update Team Scoreboard
tellraw @s ["",{"text":"[ »» ]","color":"aqua","clickEvent":{"action":"run_command","value":"/function bc_rewards:team_score"},"hoverEvent":{"action":"show_text","contents":["",{"translate":"Re-calculates the value of team scoreboards that draw from players' advancement and first advancement scores","color":"white"},{"text":"\n"},{"translate":"Click to run","color":"gold"}]}}," ",{"translate":"Update team scoreboards"}]
# Resets Obtained Advancements
tellraw @s ["",{"text":"[ »» ]","color":"red","clickEvent":{"action":"run_command","value":"/execute as @a run function blazeandcave:config/reset_bac_obtained_ru_sure"},"hoverEvent":{"action":"show_text","contents":["",{"translate":"Resets the 'bac_obtained' scoreboard. This will make it so that Cooperative Mode will no longer see any advancements as complete and hence not share any, and also set every advancement back up for grabs for the First Advancement scoreboard","color":"white"},{"text":"\n"},{"translate":"Click to run","color":"gold"}]}}," ",{"translate":"Reset obtained advancements"}]
# Refresh Cooperative Mode sharing (only shows up if Cooperative Mode is currently on)
execute if score coop bac_settings matches 1 run tellraw @s ["",{"text":"[ »» ]","color":"yellow","clickEvent":{"action":"run_command","value":"/function blazeandcave:config/coop_update"},"hoverEvent":{"action":"show_text","contents":["",{"translate":"Click to run","color":"gold"}]}}," ",{"translate":"Refresh Cooperative Mode advancement sharing"}]
execute if score coop bac_settings matches 2 run tellraw @s ["",{"text":"[ »» ]","color":"yellow","clickEvent":{"action":"run_command","value":"/execute as @a run function blazeandcave:config/coop_update_team"},"hoverEvent":{"action":"show_text","contents":["",{"translate":"Click to run","color":"gold"}]}}," ",{"translate":"Refresh Cooperative Mode advancement sharing"}]
# Trophy granting
tellraw @s ["",{"text":"[ »» ]","color":"gold","clickEvent":{"action":"run_command","value":"/function blazeandcave:config/trophies_ru_sure"},"hoverEvent":{"action":"show_text","contents":["",{"translate":"Gives every online player every trophy from advancements they have obtained so far","color":"white"},{"text":"\n"},{"translate":"This function should only be used on worlds created before the Trophy Update (BACAP 1.11) or if you really want an easy way of getting them back","color":"white"},{"text":"\n"},{"translate":"Click to run","color":"gold"}]}}," ",{"translate":"Grant missing trophies"}]
# Revoke all advancements
tellraw @s ["",{"text":"[ »» ]","color":"dark_red","clickEvent":{"action":"run_command","value":"/execute as @a run function blazeandcave:config/revoke_ru_sure"},"hoverEvent":{"action":"show_text","contents":["",{"translate":"Revokes every advancement, including resetting scoreboards","color":"white"},{"text":"\n"},{"translate":"You may choose to revoke from either yourself, the closest player to you, or from everyone currently online","color":"white"},{"text":"\n"},{"translate":"Click to run","color":"gold"}]}}," ",{"translate":"Revoke all advancements"}]

tellraw @s {"text":"                                                                                ","color":"dark_gray","strikethrough":true}

# Go back
tellraw @s ["",{"text":"[ «« ]","color":"red","clickEvent":{"action":"run_command","value":"/function blazeandcave:config"},"hoverEvent":{"action":"show_text","contents":["",{"translate":"Click to go back","color":"gold"}]}}," ",{"translate":"Go back to main config menu"}]

tellraw @s {"text":"                                                                                ","color":"dark_gray","strikethrough":true}
