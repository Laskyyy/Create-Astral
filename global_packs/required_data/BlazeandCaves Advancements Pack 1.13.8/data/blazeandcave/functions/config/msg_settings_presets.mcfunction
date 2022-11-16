tellraw @s {"text":"                                                                                ","color":"dark_gray","strikethrough":true}
tellraw @s {"color":"gray","bold":"false","text":" ","extra":[{"color":"gray","bold":"false","translate":"Message Presets"}]}

tellraw @s {"text":"                                                                                ","color":"dark_gray","strikethrough":true}

# Preset settings
tellraw @s ["",{"text":"[ »» ]","color":"green","clickEvent":{"action":"run_command","value":"/function blazeandcave:config/msg_set_on"},"hoverEvent":{"action":"show_text","contents":["",{"translate":"Click to set","color":"gold"}]}}," ",{"translate":"Turn all messages on"}]
tellraw @s ["",{"text":"[ »» ]","color":"red","clickEvent":{"action":"run_command","value":"/function blazeandcave:config/msg_set_off"},"hoverEvent":{"action":"show_text","contents":["",{"translate":"Click to set","color":"gold"}]}}," ",{"translate":"Turn all messages off"}]
tellraw @s ["",{"text":"[ »» ]","color":"yellow","clickEvent":{"action":"run_command","value":"/function blazeandcave:config/msg_set_first"},"hoverEvent":{"action":"show_text","contents":["",{"translate":"Click to set","color":"gold"}]}}," ",{"translate":"Set all messages to first-player only (recommended and default for Cooperative Mode)"}]
tellraw @s ["",{"text":"[ »» ]","color":"aqua","clickEvent":{"action":"run_command","value":"/function blazeandcave:config/msg_set_first_team"},"hoverEvent":{"action":"show_text","contents":["",{"translate":"Click to set","color":"gold"}]}}," ",{"translate":"Set all messages to first-player-on-team only (recommended and default for Team Cooperative Mode)"}]
tellraw @s ["",{"text":"[ »» ]","color":"dark_green","clickEvent":{"action":"run_command","value":"/function blazeandcave:config/msg_set_server1"},"hoverEvent":{"action":"show_text","contents":["",{"translate":"Click to set","color":"gold"}]}}," ",{"translate":"Turn all on except tasks (recommended for large servers)"}]
tellraw @s ["",{"text":"[ »» ]","color":"dark_green","clickEvent":{"action":"run_command","value":"/function blazeandcave:config/msg_set_server2"},"hoverEvent":{"action":"show_text","contents":["",{"translate":"Click to set","color":"gold"}]}}," ",{"translate":"Turn all on except tasks and goals"}]
tellraw @s ["",{"text":"[ »» ]","color":"blue","clickEvent":{"action":"run_command","value":"/function blazeandcave:config/msg_set_vanilla_msg"},"hoverEvent":{"action":"show_text","contents":["",{"translate":"Click to set","color":"gold"}]}}," ",{"translate":"Turn vanilla messages on (recommended for servers that use plugins that draw from them such as DiscordSRV)"}]

tellraw @s {"text":"                                                                                ","color":"dark_gray","strikethrough":true}

# Go back
tellraw @s ["",{"text":"[ «« ]","color":"red","clickEvent":{"action":"run_command","value":"/function blazeandcave:config/msg_settings"},"hoverEvent":{"action":"show_text","contents":["",{"translate":"Click to go back","color":"gold"}]}}," ",{"translate":"Go back"}]

tellraw @s {"text":"                                                                                ","color":"dark_gray","strikethrough":true}
