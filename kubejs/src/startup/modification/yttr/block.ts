export function yttrBlockModification() {
  onEvent("block.modification", (event) => {
    event.modify("yttr:polished_scorched_obsidian_holster", (block) => {
      block.destroySpeed = -1;
      block.explosionResistance = 99999;
    });

    event.modify("yttr:polished_scorched_obsidian_holster_alive", (block) => {
      block.destroySpeed = -1;
      block.explosionResistance = 99999;
    });

    event.modify("yttr:continuous_platform", (block) => {
      block.destroySpeed = 3;
      block.explosionResistance = 99999;
    });
  });
}
