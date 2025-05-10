//Lamp Recipe Fixes
onEvent("recipes", (event) => {
    const lampTypes = ["lamp", "fixture", "cage_lamp", "panel"];
    const lampColors = [
        //don't include colorless
        ["white", "$minecraft:white_dye"],
        ["orange", "minecraft:orange_dye"],
        ["magenta", "minecraft:white_dye"],
        ["light_blue", "minecraft:light_blue_dye"],
        ["yellow", "minecraft:yellow_dye"],
        ["lime", "minecraft:lime_dye"],
        ["pink", "minecraft:pink_dye"],
        ["gray", "minecraft:gray_dye"],
        ["light_gray", "minecraft:light_gray_dye"],
        ["cyan", "minecraft:cyan_dye"],
        ["purple", "minecraft:purple_dye"],
        ["blue", "minecraft:blue_dye"],
        ["brown", "minecraft:brown_dye"],
        ["green", "minecraft:green_dye"],
        ["red", "minecraft:red_dye"],
        ["black", "minecraft:black_dye"],
        ["teal", "yttr:yttrium_dust"],
    ];

    //Lamp recipe fixes
    lampTypes.forEach((lamp) => {
        //this recipe is shaped for some reason
        event.remove({ id: `yttr:crafting/lamp/${lamp}_invert` });
        //this recipe doesn't even work
        event.remove({ id: `yttr:crafting/lamp/${lamp}_dye` });

        //recreate lamp inversion recipe as a shapeless one. Also make it not consume the redstone torch
        event
            .shapeless(Item.of(`yttr:${lamp}`).withNBT('{Inverted:true, LampColor:"colorless"}'), [
                `yttr:${lamp}`,
                "minecraft:redstone_torch",
            ])
            .modifyResult((grid, result) => {
                let item = grid.find(Ingredient.of(`yttr:${lamp}`).ignoreNBT());
                let inputNbt = item.nbt || {};

                let outputNbt = {};
                outputNbt.Inverted = !inputNbt.Inverted;
                outputNbt.LampColor = inputNbt.LampColor || "colorless";
                return result.withNBT(outputNbt);
            })
            .keepIngredient("minecraft:redstone_torch")
            .id(`createastral:crafting/yttr/lamp/${lamp}_invert`);

        //Create lamp dyeing recipes that actually work
        event
            .shapeless(Item.of(`yttr:${lamp}`).withNBT('{Inverted:false, LampColor:"white"}'), [
                `yttr:${lamp}`,
                "#yttr:lamp_dyes",
            ])
            .modifyResult((grid, result) => {
                let item = grid.find(Ingredient.of(`yttr:${lamp}`).ignoreNBT());
                let dye = grid.find(`#yttr:lamp_dyes`);
                let inputNbt = item.nbt || {};

                let outputNbt = {};

                outputNbt.Inverted = !!inputNbt.Inverted;
                for (let i = 0; i < lampColors.length; ++i) {
                    if (dye.getId() === lampColors[i][1]) {
                        outputNbt.LampColor = lampColors[i][0];
                        break;
                    }
                }

                return result.withNBT(outputNbt);
            })
            .id(`createastral:crafting/yttr/lamp/${lamp}_dye`);
    });
});
