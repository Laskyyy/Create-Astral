give @s minecraft:phantom_membrane 8
tellraw @s {"color":"green","text":" +8 ","extra":[{"translate":"item.minecraft.phantom_membrane"}]}
give @s minecraft:enchanted_book{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:3}]} 1
tellraw @s {"color":"green","text":" +1 ","extra":[{"translate":"enchantment.minecraft.feather_falling"},{"text":" "},{"translate":"enchantment.level.3"},{"text":" "},{"translate":"item.minecraft.enchanted_book"}]}
