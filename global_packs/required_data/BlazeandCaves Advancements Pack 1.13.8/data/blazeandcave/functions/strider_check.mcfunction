# Function runs for striders that have not been checked for zombified piglin riders

execute if entity @s[nbt={Passengers:[{id:"minecraft:zombified_piglin"}]}] run tag @e[type=zombified_piglin,sort=nearest,limit=1] add strider_jockey
execute if entity @s[nbt={Passengers:[{id:"minecraft:zombified_piglin"}]}] run tag @s add zp_ridden

execute unless entity @s[nbt={Passengers:[{id:"minecraft:zombified_piglin"}]}] run tag @s add not_zp_ridden