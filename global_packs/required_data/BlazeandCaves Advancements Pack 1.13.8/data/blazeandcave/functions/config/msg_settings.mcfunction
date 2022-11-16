tellraw @s {"text":"                                                                                ","color":"dark_gray","strikethrough":true}
tellraw @s {"color":"gray","bold":"false","text":" ","extra":[{"color":"gray","bold":"false","translate":"Advancement Completion Message Settings"}]}

tellraw @s {"text":"                                                                                ","color":"dark_gray","strikethrough":true}

function blazeandcave:config/msg_settings_tiers


tellraw @s {"text":"                                                                                ","color":"dark_gray","strikethrough":true}
# Preset settings
tellraw @s ["",{"text":"[ »» ]","color":"light_purple","clickEvent":{"action":"run_command","value":"/function blazeandcave:config/msg_settings_presets"},"hoverEvent":{"action":"show_text","contents":["",{"translate":"Click to view","color":"gold"}]}}," ",{"translate":"Click to view preset options"}]

tellraw @s {"text":"                                                                                ","color":"dark_gray","strikethrough":true}

# Go back
tellraw @s ["",{"text":"[ «« ]","color":"red","clickEvent":{"action":"run_command","value":"/function blazeandcave:config"},"hoverEvent":{"action":"show_text","contents":["",{"translate":"Click to go back","color":"gold"}]}}," ",{"translate":"Go back to main config menu"}]

tellraw @s {"text":"                                                                                ","color":"dark_gray","strikethrough":true}
