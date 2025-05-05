import { WOODS } from "constants";
import { mB } from "fluid-constants";

export function techRebornIndustrialSawmillRecipes() {
  onEvent("recipes", (event) => {
    event.remove({ type: "techreborn:industrial_sawmill" });
    WOODS.forEach((wood) => {
      let mod_id = wood.mod;
      let type = wood.type;

      event.custom({
        type: "techreborn:industrial_sawmill",
        power: 10,
        time: 200,
        ingredients: [
          {
            tag: `createastral:barked_${type}_logs`,
          },
        ],
        results: [
          {
            item: `${mod_id}:${type}_planks`,
            count: 8,
          },
          {
            item: "techreborn:saw_dust",
            count: 3,
          },
          {
            item: "farmersdelight:tree_bark",
            count: 1,
          },
        ],
        tank: {
          fluid: "minecraft:water",
          amount: {
            droplets: 100 * mB,
          },
        },
      });
      event.custom({
        type: "techreborn:industrial_sawmill",
        power: 10,
        time: 200,
        ingredients: [
          {
            tag: `createastral:stripped_${type}_logs`,
          },
        ],
        results: [
          {
            item: `${mod_id}:${type}_planks`,
            count: 8,
          },
          {
            item: "techreborn:saw_dust",
            count: 3,
          },
        ],
        tank: {
          fluid: "minecraft:water",
          amount: {
            droplets: 100 * mB,
          },
        },
      });
    });
  });
}
