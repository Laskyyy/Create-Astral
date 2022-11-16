give @s minecraft:blaze_rod 8
tellraw @s {"color":"green","text":" +8 ","extra":[{"translate":"item.minecraft.blaze_rod"}]}
give @s minecraft:enchanted_book{StoredEnchantments:[{id:"minecraft:flame",lvl:1}]} 1
tellraw @s {"color":"green","text":" +1 ","extra":[{"translate":"enchantment.minecraft.flame"},{"text":" "},{"translate":"item.minecraft.enchanted_book"}]}
