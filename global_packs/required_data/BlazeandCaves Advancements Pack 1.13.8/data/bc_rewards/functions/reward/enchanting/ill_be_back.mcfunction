give @s minecraft:arrow 32
tellraw @s {"color":"green","text":" +32 ","extra":[{"translate":"item.minecraft.arrow"}]}
give @s minecraft:enchanted_book{StoredEnchantments:[{id:"minecraft:power",lvl:2}]} 1
tellraw @s {"color":"green","text":" +1 ","extra":[{"translate":"enchantment.minecraft.power"},{"text":" "},{"translate":"enchantment.level.2"},{"text":" "},{"translate":"item.minecraft.enchanted_book"}]}
