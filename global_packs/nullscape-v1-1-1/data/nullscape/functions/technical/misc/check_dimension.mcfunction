scoreboard players set $found.dimension ns.dummy 0
execute in nullscape:end_island run scoreboard players set $found.dimension ns.dummy 1

#execute if score $found.dimension ns.dummy matches 1 run tellraw @a [{"text":"N","color":"#6e5980"},{"text":"u","color":"#745a8b"},{"text":"l","color":"#7b5b96"},{"text":"l","color":"#825ca1"},{"text":"s","color":"#895dac"},{"text":"c","color":"#8f5eb7"},{"text":"a","color":"#965fc2"},{"text":"p","color":"#9d60cd"},{"text":"e","color":"#a462d8"}, " - ", {"translate": "Starmute, et. al"}]

execute unless score $found.dimension ns.dummy matches 1 run tellraw @a [{"text": "Error ", "color": "red", "bold": true}, [{"text":"N","color":"#6e5980", "bold": false},{"text":"u","color":"#745a8b"},{"text":"l","color":"#7b5b96"},{"text":"l","color":"#825ca1"},{"text":"s","color":"#895dac"},{"text":"c","color":"#8f5eb7"},{"text":"a","color":"#965fc2"},{"text":"p","color":"#9d60cd"},{"text":"e","color":"#a462d8"}], {"text": " has ran into an error. Please restart your world or server to properly initialize the nullscape dimension!", "bold": false}]

schedule clear nullscape:clocks/wait_for_player
