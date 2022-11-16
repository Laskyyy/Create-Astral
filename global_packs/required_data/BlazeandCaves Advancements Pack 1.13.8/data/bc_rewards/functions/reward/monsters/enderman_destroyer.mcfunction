give @s minecraft:ender_pearl 4
tellraw @s {"color":"green","text":" +4 ","extra":[{"translate":"item.minecraft.ender_pearl"}]}
give @s minecraft:enchanted_book{StoredEnchantments:[{id:"minecraft:knockback",lvl:1}]} 1
tellraw @s {"color":"green","text":" +1 ","extra":[{"translate":"enchantment.minecraft.knockback"},{"text":" "},{"translate":"enchantment.level.1"},{"text":" "},{"translate":"item.minecraft.enchanted_book"}]}
