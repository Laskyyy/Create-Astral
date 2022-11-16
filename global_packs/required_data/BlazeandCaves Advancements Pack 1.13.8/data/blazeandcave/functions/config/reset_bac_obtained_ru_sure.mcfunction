# Asks "Are you sure?"

tellraw @s {"text":"                                                                                ","color":"dark_gray","strikethrough":true}
tellraw @s [" ",{"color":"yellow","translate":"Are you sure?"}]
tellraw @s {"text":"                                                                                ","color":"dark_gray","strikethrough":true}
tellraw @s [" ",{"color":"red","translate":"This function will stop sharing of advancements in Cooperative Mode until they are obtained again, and also reopen every advancement for the First Advancements scoreboard"}]
tellraw @s [" ",{"translate":"This function should only be used if you intend to turn off Cooperative Mode"}]
tellraw @s {"text":"                                                                                ","color":"dark_gray","strikethrough":true}

tellraw @s ["",{"translate":"[ Yes ]","color":"green","clickEvent":{"action":"run_command","value":"/function blazeandcave:config/reset_bac_obtained"},"hoverEvent":{"action":"show_text","contents":["",{"translate":"Click to confirm","color":"gold"}]}}," ",{"translate":"[ No ]","color":"red","clickEvent":{"action":"run_command","value":"/function blazeandcave:config/technical_settings"},"hoverEvent":{"action":"show_text","contents":["",{"translate":"Click to go back","color":"gold"}]}}]