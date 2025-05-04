import { BUCKET } from "fluid-constants";

export function customMachineryRecipes() {
  onEvent("recipes", (event) => {
    event.recipes.custommachinery
      .custom_machine("createastral:slime_furnace", 600)
      .produceSU(2, 2048)
      .requireItemTag("#c:slimeballs", 1);

    event.recipes.custommachinery
      .custom_machine("createastral:slime_furnace", 5400)
      .produceSU(2, 2048)
      .requireItemTag("#tconstruct:slime_block", 1);

    // create machines

    const MIN_SPEED = 1;
    const MAX_SPEED = 256;
    const MIXER_MAX_LEN = 600;
    const MIXER_MIN_LEN = 20;
    const MIXER_SLOPE = (MIXER_MAX_LEN - MIXER_MIN_LEN) / (MIN_SPEED - MAX_SPEED);
    const MIXER_IMPACT = 16;
    for (let speed = MIN_SPEED; speed <= MAX_SPEED; speed++) {
      let dur = MIXER_SLOPE * (speed - MAX_SPEED) + MIXER_MIN_LEN;

      event.recipes.custommachinery
        .custom_machine("createastral:gas_mixer", dur)
        .requireStructure([["m"], ["a"], ["b"]], {
          a: "techreborn:reinforced_glass",
          b: "railways:smokestack_diesel",
        })
        .requireSU(speed, MIXER_IMPACT)
        .priority(speed)
        .requireFluid(Fluid.of("techreborn:methane", BUCKET / 4), "in_fluid")
        .requireItem(Item.of("minecraft:oxeye_daisy"))
        .produceItem(Item.of("minecraft:ghast_tear"));

      event.recipes.custommachinery
        .custom_machine("createastral:gas_mixer", dur)
        .requireStructure([["m"], ["a"], ["b"]], {
          a: "techreborn:reinforced_glass",
          b: "railways:smokestack_diesel",
        })
        .requireSU(speed, MIXER_IMPACT)
        .priority(speed)
        .requireFluid(Fluid.of("ad_astra:oxygen", BUCKET), "in_fluid")
        .requireItem(Item.of("minecraft:wither_rose"))
        .requireItem(Item.of("minecraft:glass_bottle", 3))
        .produceItem(Item.of("minecraft:dragon_breath", 3));

      event.recipes.custommachinery
        .custom_machine("createastral:gas_mixer", dur)
        .requireStructure([["m"], ["a"], ["b"]], {
          a: "techreborn:reinforced_glass",
          b: "railways:smokestack_diesel",
        })
        .requireSU(speed, MIXER_IMPACT)
        .priority(speed)
        .requireFluid(Fluid.of("techreborn:mercury", BUCKET / 81), "in_fluid")
        .requireItem(Item.of("minecraft:lily_of_the_valley", 2))
        .produceItem(Item.of("minecraft:spider_eye"));
    }

    event.recipes.custommachinery
      .custom_machine("createastral:channeling_transformer", 1800)
      .requireStructure(
        [
          [" a ", "ama", " a "],
          [" b ", "bcb", " b "],
          ["   ", " d ", "   "],
          ["   ", " e ", "   "],
          ["   ", " f ", "   "],
        ],
        {
          a: "createdeco:netherite_sheet_metal",
          b: "createdeco:netherite_support",
          c: "createdeco:netherite_hull",
          d: "dbe:black_guilded_boiler[axis=y]",
          e: "techreborn:lightning_rod",
          f: "techreborn:refined_iron_fence",
        }
      )
      .requireFluid(Fluid.of("kubejs:smite", BUCKET))
      .runCommandOnEnd("/summon minecraft:lightning_bolt")
      .runCommandOnEnd("/data modify block ~ ~3 ~ PowerAcceptor.energy set value 720000");
  });
}
