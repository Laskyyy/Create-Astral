give @s minecraft:arrow 16
tellraw @s {"color":"green","text":" +16 ","extra":[{"translate":"item.minecraft.arrow"}]}
give @s minecraft:enchanted_book{StoredEnchantments:[{id:"minecraft:infinity",lvl:1}]} 1
tellraw @s {"color":"green","text":" +1 ","extra":[{"translate":"enchantment.minecraft.infinity"},{"text":" "},{"translate":"item.minecraft.enchanted_book"}]}
