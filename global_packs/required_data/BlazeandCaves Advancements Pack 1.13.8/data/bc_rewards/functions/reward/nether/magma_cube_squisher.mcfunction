give @s minecraft:magma_cream 8
tellraw @s {"color":"green","text":" +8 ","extra":[{"translate":"item.minecraft.magma_cream"}]}
give @s minecraft:enchanted_book{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:1}]} 1
tellraw @s {"color":"green","text":" +1 ","extra":[{"translate":"enchantment.minecraft.fire_aspect"},{"text":" "},{"translate":"enchantment.level.1"},{"text":" "},{"translate":"item.minecraft.enchanted_book"}]}
