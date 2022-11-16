give @s minecraft:gunpowder 8
tellraw @s {"color":"green","text":" +8 ","extra":[{"translate":"item.minecraft.gunpowder"}]}
give @s minecraft:enchanted_book{StoredEnchantments:[{id:"minecraft:looting",lvl:1}]} 1
tellraw @s {"color":"green","text":" +1 ","extra":[{"translate":"enchantment.minecraft.looting"},{"text":" "},{"translate":"enchantment.level.1"},{"text":" "},{"translate":"item.minecraft.enchanted_book"}]}
