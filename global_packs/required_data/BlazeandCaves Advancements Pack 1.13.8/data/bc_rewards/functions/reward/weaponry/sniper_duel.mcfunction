give @s minecraft:arrow 32
give @s minecraft:enchanted_book{StoredEnchantments:[{id:"minecraft:power",lvl:3}]} 1
tellraw @s {"color":"green","text":" +32 ","extra":[{"translate":"item.minecraft.arrow"}]}
tellraw @s {"color":"green","text":" +1 ","extra":[{"translate":"enchantment.minecraft.power"},{"text":" "},{"translate":"enchantment.level.3"},{"text":" "},{"translate":"item.minecraft.enchanted_book"}]}
