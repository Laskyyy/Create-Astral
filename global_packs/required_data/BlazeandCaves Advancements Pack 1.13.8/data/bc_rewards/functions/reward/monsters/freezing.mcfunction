give @s minecraft:sand 32
tellraw @s {"color":"green","text":" +32 ","extra":[{"translate":"block.minecraft.sand"}]}
give @s minecraft:enchanted_book{StoredEnchantments:[{id:"minecraft:smite",lvl:2}]} 1
tellraw @s {"color":"green","text":" +1 ","extra":[{"translate":"enchantment.minecraft.smite"},{"text":" "},{"translate":"enchantment.level.2"},{"text":" "},{"translate":"item.minecraft.enchanted_book"}]}
