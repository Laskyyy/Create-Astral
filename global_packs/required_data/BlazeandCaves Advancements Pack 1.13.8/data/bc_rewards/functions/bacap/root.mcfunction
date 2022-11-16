execute if score intro_msg bac_settings matches 1 run tellraw @s {"color":"gray","bold":"false","translate":"This world is using ","extra":[{"color":"yellow","bold":"true","translate":"Blaze"},{"color":"gray","bold":"true","translate":"and"},{"color":"aqua","bold":"true","translate":"Cave"},{"color":"gray","bold":"true","translate":"'s Advancements Pack!"}]}
execute if score intro_msg bac_settings matches 1 run tellraw @s {"color":"white","italic":"false","translate":" Over ","extra":[{"text":"900"},{"translate":" brand new advancements in your Minecraft world!"}]}
execute if score intro_msg bac_settings matches 1 run tellraw @s {"color":"white","italic":"false","translate":" - Created by ","extra":[{"color":"gold","italic":"false","underlined":"true","text":"Cavinator1","clickEvent":{"action":"open_url","value":"https://twitter.com/_Cavinator1_"}}]}
#execute if score intro_msg bac_settings matches 1 run tellraw @s {"text":" "}
execute if score intro_msg bac_settings matches 1 run tellraw @s {"color":"white","italic":"false","translate":" - For information ","extra":[{"color":"dark_aqua","italic":"false","underlined":"true","translate":"click here","clickEvent":{"action":"open_url","value":"https://www.planetminecraft.com/data-pack/blazeandcave-s-advancements-pack-1-12/"}}]}
#execute if score intro_msg bac_settings matches 1 run tellraw @s {"text":" "}
execute if score intro_msg bac_settings matches 1 run tellraw @s {"color":"white","italic":"false","translate":" - Join my discord ","extra":[{"color":"blue","italic":"false","underlined":"true","translate":"here","clickEvent":{"action":"open_url","value":"https://discord.gg/GBMSmWg"}}]}
execute if score intro_msg bac_settings matches 1 run tellraw @s {"text":" "}
execute if score intro_msg bac_settings matches 1 run tellraw @s {"color":"green","bold":"false","translate":"Special thanks to my patreon donors: ","hoverEvent":{"action":"show_translate","value":{"color":"green","translate":"Click to view my Patreon page!"}},"clickEvent":{"action":"open_url","value":"https://www.patreon.com/Cavinator1"}}
execute if score intro_msg bac_settings matches 1 run tellraw @s {"text":" - ","extra":[{"color":"#FF8000","bold":"false","text":"Fiery_Crystal"},{"color":"gray","bold":"false","text":", "},{"color":"#FFDDF4","bold":"false","text":"FixingGlobe"},{"color":"gray","bold":"false","text":", "},{"color":"#E7FF00","bold":"false","text":"Wolfguy2005"},{"color":"gray","bold":"false","text":", "},{"color":"#3D3ED7","bold":"false","text":"Infinity InGloriouS"},{"color":"gray","bold":"false","text":", "},{"color":"#006003","bold":"false","text":"saladbowls"},{"color":"gray","bold":"false","text":", "},{"color":"white","bold":"false","text":"Daleth"},{"color":"gray","bold":"false","text":", "},{"color":"#54ABC6","bold":"false","text":"ilyYerin"},{"color":"gray","bold":"false","text":", "},{"color":"#0000B6","bold":"false","text":"WeeAngus"},{"color":"gray","bold":"false","text":", "},{"color":"gray","bold":"false","text":"CyberDaxter"},{"color":"gray","bold":"false","text":" and "},{"color":"gray","bold":"false","text":"Blobbie01"}]}
gamerule commandBlockOutput false
execute if score reward bac_settings matches 1 run function bc_rewards:reward/bacap/root
execute if score reward bac_settings matches -1 unless score blazeandcave:bacap/root bac_obtained matches 1.. run function bc_rewards:reward/bacap/root
execute if score reward bac_settings matches -2 if entity @s[team=bac_team_black] unless score blazeandcave:bacap/root bac_obtained_black matches 1.. run function bc_rewards:reward/bacap/root
execute if score reward bac_settings matches -2 if entity @s[team=bac_team_dark_blue] unless score blazeandcave:bacap/root bac_obtained_dark_blue matches 1.. run function bc_rewards:reward/bacap/root
execute if score reward bac_settings matches -2 if entity @s[team=bac_team_dark_green] unless score blazeandcave:bacap/root bac_obtained_dark_green matches 1.. run function bc_rewards:reward/bacap/root
execute if score reward bac_settings matches -2 if entity @s[team=bac_team_dark_aqua] unless score blazeandcave:bacap/root bac_obtained_dark_aqua matches 1.. run function bc_rewards:reward/bacap/root
execute if score reward bac_settings matches -2 if entity @s[team=bac_team_dark_red] unless score blazeandcave:bacap/root bac_obtained_dark_red matches 1.. run function bc_rewards:reward/bacap/root
execute if score reward bac_settings matches -2 if entity @s[team=bac_team_dark_purple] unless score blazeandcave:bacap/root bac_obtained_dark_purple matches 1.. run function bc_rewards:reward/bacap/root
execute if score reward bac_settings matches -2 if entity @s[team=bac_team_gold] unless score blazeandcave:bacap/root bac_obtained_gold matches 1.. run function bc_rewards:reward/bacap/root
execute if score reward bac_settings matches -2 if entity @s[team=bac_team_gray] unless score blazeandcave:bacap/root bac_obtained_gray matches 1.. run function bc_rewards:reward/bacap/root
execute if score reward bac_settings matches -2 if entity @s[team=bac_team_dark_gray] unless score blazeandcave:bacap/root bac_obtained_dark_gray matches 1.. run function bc_rewards:reward/bacap/root
execute if score reward bac_settings matches -2 if entity @s[team=bac_team_blue] unless score blazeandcave:bacap/root bac_obtained_blue matches 1.. run function bc_rewards:reward/bacap/root
execute if score reward bac_settings matches -2 if entity @s[team=bac_team_green] unless score blazeandcave:bacap/root bac_obtained_green matches 1.. run function bc_rewards:reward/bacap/root
execute if score reward bac_settings matches -2 if entity @s[team=bac_team_aqua] unless score blazeandcave:bacap/root bac_obtained_aqua matches 1.. run function bc_rewards:reward/bacap/root
execute if score reward bac_settings matches -2 if entity @s[team=bac_team_red] unless score blazeandcave:bacap/root bac_obtained_red matches 1.. run function bc_rewards:reward/bacap/root
execute if score reward bac_settings matches -2 if entity @s[team=bac_team_light_purple] unless score blazeandcave:bacap/root bac_obtained_light_purple matches 1.. run function bc_rewards:reward/bacap/root
execute if score reward bac_settings matches -2 if entity @s[team=bac_team_yellow] unless score blazeandcave:bacap/root bac_obtained_yellow matches 1.. run function bc_rewards:reward/bacap/root
execute if score reward bac_settings matches -2 if entity @s[team=bac_team_white] unless score blazeandcave:bacap/root bac_obtained_white matches 1.. run function bc_rewards:reward/bacap/root
execute if score exp bac_settings matches 1 run function bc_rewards:exp/bacap/root
execute if score exp bac_settings matches -1 unless score blazeandcave:bacap/root bac_obtained matches 1.. run function bc_rewards:exp/bacap/root
execute if score exp bac_settings matches -2 if entity @s[team=bac_team_black] unless score blazeandcave:bacap/root bac_obtained_black matches 1.. run function bc_rewards:exp/bacap/root
execute if score exp bac_settings matches -2 if entity @s[team=bac_team_dark_blue] unless score blazeandcave:bacap/root bac_obtained_dark_blue matches 1.. run function bc_rewards:exp/bacap/root
execute if score exp bac_settings matches -2 if entity @s[team=bac_team_dark_green] unless score blazeandcave:bacap/root bac_obtained_dark_green matches 1.. run function bc_rewards:exp/bacap/root
execute if score exp bac_settings matches -2 if entity @s[team=bac_team_dark_aqua] unless score blazeandcave:bacap/root bac_obtained_dark_aqua matches 1.. run function bc_rewards:exp/bacap/root
execute if score exp bac_settings matches -2 if entity @s[team=bac_team_dark_red] unless score blazeandcave:bacap/root bac_obtained_dark_red matches 1.. run function bc_rewards:exp/bacap/root
execute if score exp bac_settings matches -2 if entity @s[team=bac_team_dark_purple] unless score blazeandcave:bacap/root bac_obtained_dark_purple matches 1.. run function bc_rewards:exp/bacap/root
execute if score exp bac_settings matches -2 if entity @s[team=bac_team_gold] unless score blazeandcave:bacap/root bac_obtained_gold matches 1.. run function bc_rewards:exp/bacap/root
execute if score exp bac_settings matches -2 if entity @s[team=bac_team_gray] unless score blazeandcave:bacap/root bac_obtained_gray matches 1.. run function bc_rewards:exp/bacap/root
execute if score exp bac_settings matches -2 if entity @s[team=bac_team_dark_gray] unless score blazeandcave:bacap/root bac_obtained_dark_gray matches 1.. run function bc_rewards:exp/bacap/root
execute if score exp bac_settings matches -2 if entity @s[team=bac_team_blue] unless score blazeandcave:bacap/root bac_obtained_blue matches 1.. run function bc_rewards:exp/bacap/root
execute if score exp bac_settings matches -2 if entity @s[team=bac_team_green] unless score blazeandcave:bacap/root bac_obtained_green matches 1.. run function bc_rewards:exp/bacap/root
execute if score exp bac_settings matches -2 if entity @s[team=bac_team_aqua] unless score blazeandcave:bacap/root bac_obtained_aqua matches 1.. run function bc_rewards:exp/bacap/root
execute if score exp bac_settings matches -2 if entity @s[team=bac_team_red] unless score blazeandcave:bacap/root bac_obtained_red matches 1.. run function bc_rewards:exp/bacap/root
execute if score exp bac_settings matches -2 if entity @s[team=bac_team_light_purple] unless score blazeandcave:bacap/root bac_obtained_light_purple matches 1.. run function bc_rewards:exp/bacap/root
execute if score exp bac_settings matches -2 if entity @s[team=bac_team_yellow] unless score blazeandcave:bacap/root bac_obtained_yellow matches 1.. run function bc_rewards:exp/bacap/root
execute if score exp bac_settings matches -2 if entity @s[team=bac_team_white] unless score blazeandcave:bacap/root bac_obtained_white matches 1.. run function bc_rewards:exp/bacap/root

scoreboard players add @s bac_advancements 1
function bc_rewards:team_score

execute unless score blazeandcave:bacap/root bac_obtained matches 1.. run scoreboard players add @s bac_advfirst 1
execute if entity @s[team=bac_team_black] unless score blazeandcave:bacap/root bac_obtained_black matches 1.. run scoreboard players add @s bac_advfirst_team 1
execute if entity @s[team=bac_team_dark_blue] unless score blazeandcave:bacap/root bac_obtained_dark_blue matches 1.. run scoreboard players add @s bac_advfirst_team 1
execute if entity @s[team=bac_team_dark_green] unless score blazeandcave:bacap/root bac_obtained_dark_green matches 1.. run scoreboard players add @s bac_advfirst_team 1
execute if entity @s[team=bac_team_dark_aqua] unless score blazeandcave:bacap/root bac_obtained_dark_aqua matches 1.. run scoreboard players add @s bac_advfirst_team 1
execute if entity @s[team=bac_team_dark_red] unless score blazeandcave:bacap/root bac_obtained_dark_red matches 1.. run scoreboard players add @s bac_advfirst_team 1
execute if entity @s[team=bac_team_dark_purple] unless score blazeandcave:bacap/root bac_obtained_dark_purple matches 1.. run scoreboard players add @s bac_advfirst_team 1
execute if entity @s[team=bac_team_gold] unless score blazeandcave:bacap/root bac_obtained_gold matches 1.. run scoreboard players add @s bac_advfirst_team 1
execute if entity @s[team=bac_team_gray] unless score blazeandcave:bacap/root bac_obtained_gray matches 1.. run scoreboard players add @s bac_advfirst_team 1
execute if entity @s[team=bac_team_dark_gray] unless score blazeandcave:bacap/root bac_obtained_dark_gray matches 1.. run scoreboard players add @s bac_advfirst_team 1
execute if entity @s[team=bac_team_blue] unless score blazeandcave:bacap/root bac_obtained_blue matches 1.. run scoreboard players add @s bac_advfirst_team 1
execute if entity @s[team=bac_team_green] unless score blazeandcave:bacap/root bac_obtained_green matches 1.. run scoreboard players add @s bac_advfirst_team 1
execute if entity @s[team=bac_team_aqua] unless score blazeandcave:bacap/root bac_obtained_aqua matches 1.. run scoreboard players add @s bac_advfirst_team 1
execute if entity @s[team=bac_team_red] unless score blazeandcave:bacap/root bac_obtained_red matches 1.. run scoreboard players add @s bac_advfirst_team 1
execute if entity @s[team=bac_team_light_purple] unless score blazeandcave:bacap/root bac_obtained_light_purple matches 1.. run scoreboard players add @s bac_advfirst_team 1
execute if entity @s[team=bac_team_yellow] unless score blazeandcave:bacap/root bac_obtained_yellow matches 1.. run scoreboard players add @s bac_advfirst_team 1
execute if entity @s[team=bac_team_white] unless score blazeandcave:bacap/root bac_obtained_white matches 1.. run scoreboard players add @s bac_advfirst_team 1
scoreboard players add blazeandcave:bacap/root bac_obtained 1
execute if entity @s[team=bac_team_black] run scoreboard players add blazeandcave:bacap/root bac_obtained_black 1
execute if entity @s[team=bac_team_dark_blue] run scoreboard players add blazeandcave:bacap/root bac_obtained_dark_blue 1
execute if entity @s[team=bac_team_dark_green] run scoreboard players add blazeandcave:bacap/root bac_obtained_dark_green 1
execute if entity @s[team=bac_team_dark_aqua] run scoreboard players add blazeandcave:bacap/root bac_obtained_dark_aqua 1
execute if entity @s[team=bac_team_dark_red] run scoreboard players add blazeandcave:bacap/root bac_obtained_dark_red 1
execute if entity @s[team=bac_team_dark_purple] run scoreboard players add blazeandcave:bacap/root bac_obtained_dark_purple 1
execute if entity @s[team=bac_team_gold] run scoreboard players add blazeandcave:bacap/root bac_obtained_gold 1
execute if entity @s[team=bac_team_gray] run scoreboard players add blazeandcave:bacap/root bac_obtained_gray 1
execute if entity @s[team=bac_team_dark_gray] run scoreboard players add blazeandcave:bacap/root bac_obtained_dark_gray 1
execute if entity @s[team=bac_team_blue] run scoreboard players add blazeandcave:bacap/root bac_obtained_blue 1
execute if entity @s[team=bac_team_green] run scoreboard players add blazeandcave:bacap/root bac_obtained_green 1
execute if entity @s[team=bac_team_aqua] run scoreboard players add blazeandcave:bacap/root bac_obtained_aqua 1
execute if entity @s[team=bac_team_red] run scoreboard players add blazeandcave:bacap/root bac_obtained_red 1
execute if entity @s[team=bac_team_light_purple] run scoreboard players add blazeandcave:bacap/root bac_obtained_light_purple 1
execute if entity @s[team=bac_team_yellow] run scoreboard players add blazeandcave:bacap/root bac_obtained_yellow 1
execute if entity @s[team=bac_team_white] run scoreboard players add blazeandcave:bacap/root bac_obtained_white 1
execute if score coop bac_settings matches 1 run advancement grant @a only blazeandcave:bacap/root
execute if score coop bac_settings matches 2 if entity @s[team=bac_team_black] run advancement grant @a[team=bac_team_black] only blazeandcave:bacap/root
execute if score coop bac_settings matches 2 if entity @s[team=bac_team_dark_blue] run advancement grant @a[team=bac_team_dark_blue] only blazeandcave:bacap/root
execute if score coop bac_settings matches 2 if entity @s[team=bac_team_dark_green] run advancement grant @a[team=bac_team_dark_green] only blazeandcave:bacap/root
execute if score coop bac_settings matches 2 if entity @s[team=bac_team_dark_aqua] run advancement grant @a[team=bac_team_dark_aqua] only blazeandcave:bacap/root
execute if score coop bac_settings matches 2 if entity @s[team=bac_team_dark_red] run advancement grant @a[team=bac_team_dark_red] only blazeandcave:bacap/root
execute if score coop bac_settings matches 2 if entity @s[team=bac_team_dark_purple] run advancement grant @a[team=bac_team_dark_purple] only blazeandcave:bacap/root
execute if score coop bac_settings matches 2 if entity @s[team=bac_team_gold] run advancement grant @a[team=bac_team_gold] only blazeandcave:bacap/root
execute if score coop bac_settings matches 2 if entity @s[team=bac_team_gray] run advancement grant @a[team=bac_team_gray] only blazeandcave:bacap/root
execute if score coop bac_settings matches 2 if entity @s[team=bac_team_dark_gray] run advancement grant @a[team=bac_team_dark_gray] only blazeandcave:bacap/root
execute if score coop bac_settings matches 2 if entity @s[team=bac_team_blue] run advancement grant @a[team=bac_team_blue] only blazeandcave:bacap/root
execute if score coop bac_settings matches 2 if entity @s[team=bac_team_green] run advancement grant @a[team=bac_team_green] only blazeandcave:bacap/root
execute if score coop bac_settings matches 2 if entity @s[team=bac_team_aqua] run advancement grant @a[team=bac_team_aqua] only blazeandcave:bacap/root
execute if score coop bac_settings matches 2 if entity @s[team=bac_team_red] run advancement grant @a[team=bac_team_red] only blazeandcave:bacap/root
execute if score coop bac_settings matches 2 if entity @s[team=bac_team_light_purple] run advancement grant @a[team=bac_team_light_purple] only blazeandcave:bacap/root
execute if score coop bac_settings matches 2 if entity @s[team=bac_team_yellow] run advancement grant @a[team=bac_team_yellow] only blazeandcave:bacap/root
execute if score coop bac_settings matches 2 if entity @s[team=bac_team_white] run advancement grant @a[team=bac_team_white] only blazeandcave:bacap/root
