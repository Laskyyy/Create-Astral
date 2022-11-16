# Update total amount of advancements on each team
scoreboard players reset Black_Team bac_advancements_team
scoreboard players reset Dark_Blue_Team bac_advancements_team
scoreboard players reset Dark_Green_Team bac_advancements_team
scoreboard players reset Dark_Aqua_Team bac_advancements_team
scoreboard players reset Dark_Red_Team bac_advancements_team
scoreboard players reset Dark_Purple_Team bac_advancements_team
scoreboard players reset Gold_Team bac_advancements_team
scoreboard players reset Gray_Team bac_advancements_team
scoreboard players reset Dark_Gray_Team bac_advancements_team
scoreboard players reset Blue_Team bac_advancements_team
scoreboard players reset Green_Team bac_advancements_team
scoreboard players reset Aqua_Team bac_advancements_team
scoreboard players reset Red_Team bac_advancements_team
scoreboard players reset Light_Purple_Team bac_advancements_team
scoreboard players reset Yellow_Team bac_advancements_team
scoreboard players reset White_Team bac_advancements_team

execute as @a[team=bac_team_black] run scoreboard players operation Black_Team bac_advancements_team += @s bac_advancements
execute as @a[team=bac_team_dark_blue] run scoreboard players operation Dark_Blue_Team bac_advancements_team += @s bac_advancements
execute as @a[team=bac_team_dark_green] run scoreboard players operation Dark_Green_Team bac_advancements_team += @s bac_advancements
execute as @a[team=bac_team_dark_aqua] run scoreboard players operation Dark_Aqua_Team bac_advancements_team += @s bac_advancements
execute as @a[team=bac_team_dark_red] run scoreboard players operation Dark_Red_Team bac_advancements_team += @s bac_advancements
execute as @a[team=bac_team_dark_purple] run scoreboard players operation Dark_Purple_Team bac_advancements_team += @s bac_advancements
execute as @a[team=bac_team_gold] run scoreboard players operation Gold_Team bac_advancements_team += @s bac_advancements
execute as @a[team=bac_team_gray] run scoreboard players operation Gray_Team bac_advancements_team += @s bac_advancements
execute as @a[team=bac_team_dark_gray] run scoreboard players operation Dark_Gray_Team bac_advancements_team += @s bac_advancements
execute as @a[team=bac_team_blue] run scoreboard players operation Blue_Team bac_advancements_team += @s bac_advancements
execute as @a[team=bac_team_green] run scoreboard players operation Green_Team bac_advancements_team += @s bac_advancements
execute as @a[team=bac_team_aqua] run scoreboard players operation Aqua_Team bac_advancements_team += @s bac_advancements
execute as @a[team=bac_team_red] run scoreboard players operation Red_Team bac_advancements_team += @s bac_advancements
execute as @a[team=bac_team_light_purple] run scoreboard players operation Light_Purple_Team bac_advancements_team += @s bac_advancements
execute as @a[team=bac_team_yellow] run scoreboard players operation Yellow_Team bac_advancements_team += @s bac_advancements
execute as @a[team=bac_team_white] run scoreboard players operation White_Team bac_advancements_team += @s bac_advancements

# Update first advancements on each team
scoreboard players reset Black_Team bac_advfirst_sum
scoreboard players reset Dark_Blue_Team bac_advfirst_sum
scoreboard players reset Dark_Green_Team bac_advfirst_sum
scoreboard players reset Dark_Aqua_Team bac_advfirst_sum
scoreboard players reset Dark_Red_Team bac_advfirst_sum
scoreboard players reset Dark_Purple_Team bac_advfirst_sum
scoreboard players reset Gold_Team bac_advfirst_sum
scoreboard players reset Gray_Team bac_advfirst_sum
scoreboard players reset Dark_Gray_Team bac_advfirst_sum
scoreboard players reset Blue_Team bac_advfirst_sum
scoreboard players reset Green_Team bac_advfirst_sum
scoreboard players reset Aqua_Team bac_advfirst_sum
scoreboard players reset Red_Team bac_advfirst_sum
scoreboard players reset Light_Purple_Team bac_advfirst_sum
scoreboard players reset Yellow_Team bac_advfirst_sum
scoreboard players reset White_Team bac_advfirst_sum

execute as @a[team=bac_team_black] run scoreboard players operation Black_Team bac_advfirst_sum += @s bac_advfirst
execute as @a[team=bac_team_dark_blue] run scoreboard players operation Dark_Blue_Team bac_advfirst_sum += @s bac_advfirst
execute as @a[team=bac_team_dark_green] run scoreboard players operation Dark_Green_Team bac_advfirst_sum += @s bac_advfirst
execute as @a[team=bac_team_dark_aqua] run scoreboard players operation Dark_Aqua_Team bac_advfirst_sum += @s bac_advfirst
execute as @a[team=bac_team_dark_red] run scoreboard players operation Dark_Red_Team bac_advfirst_sum += @s bac_advfirst
execute as @a[team=bac_team_dark_purple] run scoreboard players operation Dark_Purple_Team bac_advfirst_sum += @s bac_advfirst
execute as @a[team=bac_team_gold] run scoreboard players operation Gold_Team bac_advfirst_sum += @s bac_advfirst
execute as @a[team=bac_team_gray] run scoreboard players operation Gray_Team bac_advfirst_sum += @s bac_advfirst
execute as @a[team=bac_team_dark_gray] run scoreboard players operation Dark_Gray_Team bac_advfirst_sum += @s bac_advfirst
execute as @a[team=bac_team_blue] run scoreboard players operation Blue_Team bac_advfirst_sum += @s bac_advfirst
execute as @a[team=bac_team_green] run scoreboard players operation Green_Team bac_advfirst_sum += @s bac_advfirst
execute as @a[team=bac_team_aqua] run scoreboard players operation Aqua_Team bac_advfirst_sum += @s bac_advfirst
execute as @a[team=bac_team_red] run scoreboard players operation Red_Team bac_advfirst_sum += @s bac_advfirst
execute as @a[team=bac_team_light_purple] run scoreboard players operation Light_Purple_Team bac_advfirst_sum += @s bac_advfirst
execute as @a[team=bac_team_yellow] run scoreboard players operation Yellow_Team bac_advfirst_sum += @s bac_advfirst
execute as @a[team=bac_team_white] run scoreboard players operation White_Team bac_advfirst_sum += @s bac_advfirst

# Updates number of types of advancements that have been gained by members on every team
scoreboard players reset Black_Team bac_advfirst_team_sum
scoreboard players reset Dark_Blue_Team bac_advfirst_team_sum
scoreboard players reset Dark_Green_Team bac_advfirst_team_sum
scoreboard players reset Dark_Aqua_Team bac_advfirst_team_sum
scoreboard players reset Dark_Red_Team bac_advfirst_team_sum
scoreboard players reset Dark_Purple_Team bac_advfirst_team_sum
scoreboard players reset Gold_Team bac_advfirst_team_sum
scoreboard players reset Gray_Team bac_advfirst_team_sum
scoreboard players reset Dark_Gray_Team bac_advfirst_team_sum
scoreboard players reset Blue_Team bac_advfirst_team_sum
scoreboard players reset Green_Team bac_advfirst_team_sum
scoreboard players reset Aqua_Team bac_advfirst_team_sum
scoreboard players reset Red_Team bac_advfirst_team_sum
scoreboard players reset Light_Purple_Team bac_advfirst_team_sum
scoreboard players reset Yellow_Team bac_advfirst_team_sum
scoreboard players reset White_Team bac_advfirst_team_sum

execute as @a[team=bac_team_black] run scoreboard players operation Black_Team bac_advfirst_team_sum += @s bac_advfirst_team
execute as @a[team=bac_team_dark_blue] run scoreboard players operation Dark_Blue_Team bac_advfirst_team_sum += @s bac_advfirst_team
execute as @a[team=bac_team_dark_green] run scoreboard players operation Dark_Green_Team bac_advfirst_team_sum += @s bac_advfirst_team
execute as @a[team=bac_team_dark_aqua] run scoreboard players operation Dark_Aqua_Team bac_advfirst_team_sum += @s bac_advfirst_team
execute as @a[team=bac_team_dark_red] run scoreboard players operation Dark_Red_Team bac_advfirst_team_sum += @s bac_advfirst_team
execute as @a[team=bac_team_dark_purple] run scoreboard players operation Dark_Purple_Team bac_advfirst_team_sum += @s bac_advfirst_team
execute as @a[team=bac_team_gold] run scoreboard players operation Gold_Team bac_advfirst_team_sum += @s bac_advfirst_team
execute as @a[team=bac_team_gray] run scoreboard players operation Gray_Team bac_advfirst_team_sum += @s bac_advfirst_team
execute as @a[team=bac_team_dark_gray] run scoreboard players operation Dark_Gray_Team bac_advfirst_team_sum += @s bac_advfirst_team
execute as @a[team=bac_team_blue] run scoreboard players operation Blue_Team bac_advfirst_team_sum += @s bac_advfirst_team
execute as @a[team=bac_team_green] run scoreboard players operation Green_Team bac_advfirst_team_sum += @s bac_advfirst_team
execute as @a[team=bac_team_aqua] run scoreboard players operation Aqua_Team bac_advfirst_team_sum += @s bac_advfirst_team
execute as @a[team=bac_team_red] run scoreboard players operation Red_Team bac_advfirst_team_sum += @s bac_advfirst_team
execute as @a[team=bac_team_light_purple] run scoreboard players operation Light_Purple_Team bac_advfirst_team_sum += @s bac_advfirst_team
execute as @a[team=bac_team_yellow] run scoreboard players operation Yellow_Team bac_advfirst_team_sum += @s bac_advfirst_team
execute as @a[team=bac_team_white] run scoreboard players operation White_Team bac_advfirst_team_sum += @s bac_advfirst_team