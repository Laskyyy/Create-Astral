export function rei() {
  console.info("Hello, World! (You will see this line every time client resources reload)");

  onEvent("rei.group", (event) => {
    event.groupItems("kubejs:rei_groups/chipped", Component.of("Chipped Blocks"), [
      Ingredient.of(/chipped:.*/)
        .getItemIds()
        .toArray()
        .filter(
          (item: string) =>
            item !== "chipped:mason_table" &&
            item !== "chipped:botanist_workbench" &&
            item !== "chipped:loom_table" &&
            item !== "chipped:glassblower" &&
            item !== "chipped:alchemy_bench" &&
            item !== "chipped:tinkering_table" &&
            item !== "chipped:carpenters_table" &&
            item !== "chipped:mechanist_workbench"
        ),
    ]);

    //Decrypted Drives
    event.groupItemsByTag(
      "createastral:rei_groups/astralsignals/drives_decrypted_t1",
      Component.translate("text.rei.createastral.astralsignals.drives_decrypted_t1"),
      "astralsignals:drives_decrypted_t1"
    );
    event.groupItemsByTag(
      "createastral:rei_groups/astralsignals/drives_decrypted_t2",
      Component.translate("text.rei.createastral.astralsignals.drives_decrypted_t2"),
      "astralsignals:drives_decrypted_t2"
    );
    event.groupItemsByTag(
      "createastral:rei_groups/astralsignals/drives_decrypted_t3",
      Component.translate("text.rei.createastral.astralsignals.drives_decrypted_t3"),
      "astralsignals:drives_decrypted_t3"
    );

    function getCreatePotion(fluid: Internal.FluidStackJS_, type: string): boolean {
      const createPotion = Fluid.of("create:potion").getId();
      if (typeof fluid === "string") return false;
      if ("getId" in fluid && "Bottle" in fluid.nbt) {
        return fluid.getId() === createPotion && fluid.nbt.Bottle === type;
      }
      return false;
    }

    //Create potion fluids. They have complicated nbt and we want to split them into 3 categories, so predicates must be used.
    event.groupFluidsIf(
      "createastral:rei_groups/create/potion",
      Component.translate("text.rei.createastral.create.potion.regular"),
      (fluid) => getCreatePotion(fluid, "REGULAR")
    );
    event.groupFluidsIf(
      "createastral:rei_groups/create/splash_potion",
      Component.translate("text.rei.createastral.create.potion.splash"),
      (fluid) => getCreatePotion(fluid, "SPLASH")
    );
    event.groupFluidsIf(
      "createastral:rei_groups/create/lingering_potion",
      Component.translate("text.rei.createastral.create.potion.lingering"),
      (fluid) => getCreatePotion(fluid, "LINGERING")
    );

    //Packages
    event.groupSameItem(
      "createastral:rei_groups/packages/package",
      Component.translate("text.rei.createastral.packages.package"),
      "packages:package"
    );

    //Tech Reborn cells
    event.groupSameItem(
      "createastral:rei_groups/techreborn/cell",
      Component.translate("text.rei.createastral.techreborn.cell"),
      "techreborn:cell"
    );

    //Tinker's anvils
    event.groupSameItem(
      "createastral:rei_groups/tconstruct/tinkers_anvil",
      Component.translate("text.rei.createastral.tconstruct.tinkers_anvil"),
      "tconstruct:tinkers_anvil"
    );
    event.groupSameItem(
      "createastral:rei_groups/tconstruct/scorched_anvil",
      Component.translate("text.rei.createastral.tconstruct.scorched_anvil"),
      "tconstruct:scorched_anvil"
    );

    //Tinker's tool parts and tools
    //DOES NOT WORK. There is no way to group all tool parts and tools into their own categories. And grouping by part or tool could be annoying.
    //event.groupItemsIf("createastral:rei_groups/tconstruct/parts", Component.translate("text.rei.createastral.tconstruct.parts"), item=>item.hasTag('tconstruct:parts'));
    //event.groupItemsIf("createastral:rei_groups/tconstruct/multipart", Component.translate("text.rei.createastral.tconstruct.multipart"), item=>item.hasTag('tconstruct:modifiable/multipart'));
    event.groupSameItem(
      "createastral:rei_groups/tconstruct/slime_helmet",
      Component.translate("text.rei.createastral.tconstruct.slime_helmet"),
      "tconstruct:slime_helmet"
    );

    //mercurial potions
    event.groupSameItem(
      "createastral:rei_groups/yttr/mercurial_potion",
      Component.translate("text.rei.createastral.yttr.mercurial_potion"),
      "yttr:mercurial_potion"
    );
    event.groupSameItem(
      "createastral:rei_groups/yttr/mercurial_splash_potion",
      Component.translate("text.rei.createastral.yttr.mercurial_potion"),
      "yttr:mercurial_splash_potion"
    );
  });

  onEvent("rei.add.items", (event) => {
    event.add(Item.of("ae2:facade", '{item:"minecraft:stone"}'));
    event.add(Item.of("create:crushed_raw_tin"));
    event.add(Item.of("create:crushed_raw_lead"));
    event.add(Item.of("create:refined_radiance"));
    event.add(Item.of("create:shadow_steel"));
    event.add(Item.of("create:chromatic_compound"));
    //event.add("tconstruct:crafting_station");
  });

  //Add Potion fluids to REI
  onEvent("rei.add.fluids", (event) => {
    let bottles = ["REGULAR", "SPLASH", "LINGERING"];
    let potions: [string, string[]][] = [
      //The order that we create these rei entries in is important!
      ["minecraft:mundane", []],
      ["minecraft:thick", []],
      ["minecraft:awkward", []],
      ["minecraft:night_vision", ["long"]],
      ["minecraft:invisibility", ["long"]],
      ["minecraft:leaping", ["long", "strong"]],
      ["minecraft:fire_resistance", ["long"]],
      ["minecraft:swiftness", ["long", "strong"]],
      ["minecraft:slowness", ["long", "strong"]],
      ["minecraft:turtle_master", ["long", "strong"]],
      ["minecraft:water_breathing", ["long"]],
      ["minecraft:healing", ["strong"]],
      ["minecraft:harming", ["strong"]],
      ["minecraft:poison", ["long", "strong"]],
      ["minecraft:regeneration", ["long", "strong"]],
      ["minecraft:strength", ["long", "strong"]],
      ["minecraft:weakness", ["long"]],
      ["minecraft:luck", []],
      ["minecraft:slow_falling", ["long"]],
      ["naturalist:forest_dasher", ["long", "strong"]],
      ["naturalist:glowing", ["long"]],
    ];
    bottles.forEach((bottle) => {
      for (let i = 0; i < potions.length; ++i) {
        let potionName = potions[i][0];
        event.add(Fluid.of("create:potion", `{Bottle: "${bottle}", Potion: "${potionName}"}`));
        for (let j = 0; j < potions[i][1].length; ++j) {
          let subPotionNameArray = potionName.split(":");
          subPotionNameArray.splice(1, 0, ":", potions[i][1][j], "_");
          let subPotionName = subPotionNameArray.join("");
          event.add(Fluid.of("create:potion", `{Bottle: "${bottle}", Potion: "${subPotionName}"}`));
        }
      }
    });
  });
}
