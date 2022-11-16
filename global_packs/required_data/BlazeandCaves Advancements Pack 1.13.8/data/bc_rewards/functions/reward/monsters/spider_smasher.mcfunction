give @s minecraft:string 8
tellraw @s {"color":"green","text":" +8 ","extra":[{"translate":"item.minecraft.string"}]}
give @s minecraft:spider_eye 3
tellraw @s {"color":"green","text":" +3 ","extra":[{"translate":"item.minecraft.spider_eye"}]}
give @s minecraft:enchanted_book{StoredEnchantments:[{id:"minecraft:protection",lvl:2}]} 1
tellraw @s {"color":"green","text":" +1 ","extra":[{"translate":"enchantment.minecraft.protection"},{"text":" "},{"translate":"enchantment.level.2"},{"text":" "},{"translate":"item.minecraft.enchanted_book"}]}
