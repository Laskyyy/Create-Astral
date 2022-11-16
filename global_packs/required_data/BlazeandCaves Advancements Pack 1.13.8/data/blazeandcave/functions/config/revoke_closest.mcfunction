execute if entity @p[distance=0.001..] run tellraw @s {"text":"","extra":[{"color":"yellow","translate":"All advancements have been revoked from %1$s","with":[{"selector":"@p[distance=0.001..]"}]}]}
execute unless entity @p[distance=0.001..] run tellraw @s {"text":"","extra":[{"color":"red","translate":"Error: There are no other players online"}]}

execute as @p[distance=0.001..] run function blazeandcave:config/revoke_begin

function blazeandcave:config/technical_settings