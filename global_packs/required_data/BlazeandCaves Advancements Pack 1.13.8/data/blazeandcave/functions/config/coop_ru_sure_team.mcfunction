# Asks "Are you sure?"

tellraw @s {"text":"                                                                                ","color":"dark_gray","strikethrough":true}
tellraw @s [" ",{"color":"red","translate":"Are you sure?"}]
tellraw @s [" ",{"translate":"Team Cooperative Mode makes it so that whenever a player gets an advancement, that advancement will be shared across all players on a team."}]
tellraw @s [" ",{"color":"gold","translate":"Everyone's currently-obtained advancements will be shared between all players on their team immediately when turning this setting on."}]
tellraw @s [" ",{"color":"red","translate":"While the mode can be turned off, shared advancements cannot be easily revoked."}]
tellraw @s {"text":"                                                                                ","color":"dark_gray","strikethrough":true}

tellraw @s ["",{"translate":"[ Yes ]","color":"green","clickEvent":{"action":"run_command","value":"/function blazeandcave:config/coop_on_team"},"hoverEvent":{"action":"show_text","contents":["",{"translate":"Click to confirm","color":"gold"}]}}," ",{"translate":"[ No ]","color":"red","clickEvent":{"action":"run_command","value":"/function blazeandcave:config"},"hoverEvent":{"action":"show_text","contents":["",{"translate":"Click to go back","color":"gold"}]}}]