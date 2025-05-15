(function yttrLamps() {
  //Lamp Recipe Fixes
  onEvent("recipes", (event) => {
    const lampTypes = ["lamp", "fixture", "cage_lamp", "panel"];
    const lampColors = [
      //don't include colorless
      { color: "white", material: "$minecraft:white_dye" },
      { color: "orange", material: "minecraft:orange_dye" },
      { color: "magenta", material: "minecraft:white_dye" },
      { color: "light_blue", material: "minecraft:light_blue_dye" },
      { color: "yellow", material: "minecraft:yellow_dye" },
      { color: "lime", material: "minecraft:lime_dye" },
      { color: "pink", material: "minecraft:pink_dye" },
      { color: "gray", material: "minecraft:gray_dye" },
      { color: "light_gray", material: "minecraft:light_gray_dye" },
      { color: "cyan", material: "minecraft:cyan_dye" },
      { color: "purple", material: "minecraft:purple_dye" },
      { color: "blue", material: "minecraft:blue_dye" },
      { color: "brown", material: "minecraft:brown_dye" },
      { color: "green", material: "minecraft:green_dye" },
      { color: "red", material: "minecraft:red_dye" },
      { color: "black", material: "minecraft:black_dye" },
      { color: "teal", material: "yttr:yttrium_dust" },
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
          let item = grid.find(Item.of(`yttr:${lamp}`).ignoreNBT());
          let inputNbt = item.nbt || {};
          let outputNbt = {};
          if ("Inverted" in inputNbt) outputNbt.Inverted = !inputNbt.Inverted;
          if ("LampColor" in inputNbt) outputNbt.LampColor = inputNbt.LampColor || "colorless";
          else {
            outputNbt.LampColor = "colorless";
          }
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
          let item = grid.find(Item.of(`yttr:${lamp}`).ignoreNBT());
          let dye = grid.find(`#yttr:lamp_dyes`);
          let inputNbt = item.nbt || {};
          let outputNbt = {};
          if ("Inverted" in inputNbt) outputNbt.Inverted = !!inputNbt.Inverted;
          for (let i = 0; i < lampColors.length; ++i) {
            if (dye.getId() === lampColors[i].material) {
              outputNbt.LampColor = lampColors[i].color;
              break;
            }
          }
          return result.withNBT(outputNbt);
        })
        .id(`createastral:crafting/yttr/lamp/${lamp}_dye`);
    });
  });
})();
