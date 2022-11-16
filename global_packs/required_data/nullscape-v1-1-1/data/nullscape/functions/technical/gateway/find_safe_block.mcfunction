# @s: marker
#> positioned recursively
#>   marker does not tp down, no need

##tellraw @a ["y: ", {"score":{"name":"$y","objective":"ns.dummy"}}]
execute if block ~ ~ ~ #nullscape:solid run tp @s ~ ~ ~

scoreboard players remove $y ns.dummy 1
execute unless block ~ ~ ~ #nullscape:solid if score $y ns.dummy matches -60.. positioned ~ ~-1 ~ run function nullscape:technical/gateway/find_safe_block
