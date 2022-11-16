give @s minecraft:bone 8
tellraw @s {"color":"green","text":" +8 ","extra":[{"translate":"item.minecraft.bone"}]}
give @s minecraft:arrow 16
tellraw @s {"color":"green","text":" +16 ","extra":[{"translate":"item.minecraft.arrow"}]}
give @s minecraft:enchanted_book{StoredEnchantments:[{id:"minecraft:power",lvl:2}]} 1
tellraw @s {"color":"green","text":" +1 ","extra":[{"translate":"enchantment.minecraft.power"},{"text":" "},{"translate":"enchantment.level.2"},{"text":" "},{"translate":"item.minecraft.enchanted_book"}]}
