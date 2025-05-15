(function dragon() {
  function bossSpawner(event) {
    let blockPos = event.block.pos;
    event.server.runCommandSilent(
      `execute in minecraft:the_nether positioned ${blockPos.x} ${blockPos.y} ${blockPos.z} run playsound ad_astra:imminent_doom master @a[distance=..20]`,
    );
    event.server.runCommandSilent(
      `execute in minecraft:the_nether positioned ${blockPos.x} ${blockPos.y} ${blockPos.z} run playsound astraladditions:music_wither_spawn master @a[distance=..20]`,
    );
    event.server.scheduleInTicks(11.5 * 20, () => {
      event.server.runCommandSilent(
        `execute in minecraft:the_nether run particle minecraft:end_rod ${blockPos.x} ${blockPos.y + 10} ${blockPos.z} 0 5 0 0.5 400`,
      );
      event.server.runCommandSilent(
        `execute in minecraft:the_nether positioned ${blockPos.x} ${blockPos.y} ${blockPos.z} at @a[distance=..50] run playsound minecraft:block.end_portal.spawn music @a[distance=..50]`,
      );
      event.server.runCommandSilent(
        `execute in minecraft:the_nether run summon minecraft:ender_dragon ${blockPos.x} ${blockPos.y + 20} ${blockPos.z}`,
      );
    });
  }
  function takeItem(event) {
    let selectedSlot = event.player.getSelectedSlot();
    let itemStack = event.player.inventory.get(selectedSlot);
    itemStack.setCount(event.item.getCount() - 1);
    event.player.inventory.set(selectedSlot, itemStack);
  }
  function damageTool(event) {
    if (!("Damage" in event.item.nbt)) return;
    if (!(typeof event.item.nbt.Damage === "number")) return;
    event.item.nbt.Damage++;
    if (event.item.nbt.Damage == 2031) {
      event.player.inventory.set(event.player.getSelectedSlot(), "air");
    }
  }
  onEvent("block.right_click", (event) => {
    if (event.block.id == "yttr:polished_scorched_obsidian_holster" && event.item.id == "yttr:root_of_continuity") {
      event.block.set("yttr:polished_scorched_obsidian_holster_alive");
      bossSpawner(event);
      takeItem(event);
      event.cancel();
    }
    if (
      event.block.id == "yttr:polished_scorched_obsidian_holster_alive" &&
      event.item.id == "farmersdelight:netherite_knife"
    ) {
      let blockPos = event.block.pos;
      event.block.popItem("yttr:haemopal");
      event.block.set("yttr:polished_scorched_obsidian_holster");
      event.server.runCommandSilent(
        `execute in minecraft:the_nether positioned ${blockPos.x} ${blockPos.y} ${blockPos.z} run playsound ad_astra:wrench master @a[distance=..5] ~ ~ ~ 0.3 0.1`,
      );
      event.server.runCommandSilent(
        `execute in minecraft:the_nether run particle dust_color_transition 0.5 0 0 2 0.84 0 0 ${blockPos.x} ${blockPos.y} ${blockPos.z} 0.5 0.5 0.5 3 20`,
      );
      damageTool(event);
    }
  });
  //TODO Make the Dead Holster not drop the haemopal
})();
