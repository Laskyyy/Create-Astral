# Asks "Are you sure?"

tellraw @s {"text":"                                                                                ","color":"dark_gray","strikethrough":true}
tellraw @s [" ",{"color":"yellow","translate":"Are you sure?"}]
tellraw @s {"text":"                                                                                ","color":"dark_gray","strikethrough":true}
tellraw @s [" ",{"color":"red","translate":"This function should only be used in worlds that used the Advancements Pack before updating to the Trophy Update."}]
tellraw @s [" ",{"translate":"This function may also grossly fill inventories so make sure everyone is prepared to receive them!"}]
tellraw @s {"text":"                                                                                ","color":"dark_gray","strikethrough":true}

tellraw @s ["",{"translate":"[ Yes ]","color":"green","clickEvent":{"action":"run_command","value":"/function blazeandcave:config/trophies_begin_grant"},"hoverEvent":{"action":"show_text","contents":["",{"translate":"Click to confirm","color":"gold"}]}}," ",{"translate":"[ No ]","color":"red","clickEvent":{"action":"run_command","value":"/function blazeandcave:config/technical_settings"},"hoverEvent":{"action":"show_text","contents":["",{"translate":"Click to go back","color":"gold"}]}}]