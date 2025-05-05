function yttrLootFix() {
  onEvent("block.loot_tables", (event) => {
    yttrBlockFix(event);
  });
  function yttrBlockFix(event) {
    const yttrBlocks = [
      "yttr:centrifuge",
      "yttr:yttrium_block",
      "yttr:power_meter",
      "yttr:chute",
      "yttr:bedrock_smasher",
      "yttr:glassy_void",
      "yttr:glassy_void_pane",
      "yttr:squeeze_log",
      "yttr:stripped_squeeze_log",
      "yttr:squeeze_sapling",
      "yttr:yttrium_plating",
      "yttr:light_yttrium_plate",
      "yttr:heavy_yttrium_plate",
      "yttr:dopper",
      "yttr:flopper",
      "yttr:suit_station",
      "yttr:table",
      "yttr:ultrapure_carbon_block",
      "yttr:compressed_ultrapure_carbon_block",
      "yttr:yttrium_button",
      "yttr:brookite_block",
      "yttr:nethertuff",
      "yttr:high_note_block",
      "yttr:low_note_block",
      "yttr:bogged_note_block",
      "yttr:bogged_high_note_block",
      "yttr:bogged_low_note_block",
      "yttr:clamber_block",
      "yttr:soul_clamber_block",
      "yttr:soul_planks",
      "yttr:cuprosteel_block",
      "yttr:cuprosteel_plate",
      "yttr:can_filler",
      "yttr:dust",
      "yttr:project_table",
      "yttr:raw_gadolinite_block",
      "yttr:ash",
      "yttr:delrene",
      "yttr:scorched_obsidian",
      "yttr:polished_scorched_obsidian",
      "yttr:polished_scorched_obsidian_capstone",
      "yttr:polished_obsidian",
      "yttr:polished_obsidian_capstone",
      "yttr:scorched_crying_obsidian",
      "yttr:screeper_nest",
      "yttr:ssd",
      "yttr:velresin",
      "yttr:transfungus",
      "yttr:black_void_glass",
      "yttr:gray_void_glass",
      "yttr:silver_void_glass",
      "yttr:white_void_glass",
      "yttr:clear_void_glass",
      "yttr:black_void_glass_pane",
      "yttr:gray_void_glass_pane",
      "yttr:silver_void_glass_pane",
      "yttr:white_void_glass_pane",
      "yttr:clear_void_glass_pane",
      // "yttr:white_project_table",
      // "yttr:orange_project_table",
      // "yttr:magenta_project_table",
      // "yttr:light_blue_project_table",
      // "yttr:yellow_project_table",
      // "yttr:lime_project_table",
      // "yttr:pink_project_table",
      // "yttr:gray_project_table",
      // "yttr:light_gray_project_table",
      // "yttr:cyan_project_table",
      // "yttr:purple_project_table",
      // "yttr:blue_project_table",
      // "yttr:brown_project_table",
      // "yttr:green_project_table",
      // "yttr:red_project_table",
      // "yttr:black_project_table",
      "yttr:neodymium_slab",
      // "yttr:neodymium_block",
      "yttr:aware_hopper",
      "yttr:levitation_chamber",
      "yttr:magtank",
      "yttr:dsu"
    ];
    yttrBlocks.forEach((loot) => {
      event.addSimpleBlock(loot, loot);
    });
    const lampColors = [
      //don't include colorless
      "white",
      "orange",
      "magenta",
      "light_blue",
      "yellow",
      "lime",
      "pink",
      "gray",
      "light_gray",
      "cyan",
      "purple",
      "blue",
      "brown",
      "green",
      "red",
      "black",
      "teal"
    ];
    const yttrLamps2 = ["yttr:lamp", "yttr:fixture", "yttr:cage_lamp", "yttr:panel"];
    yttrLamps2.forEach((lamp) => {
      let functionArray = [
        {
          function: "minecraft:set_nbt",
          tag: '{Inverted: false, LampColor: "colorless"}'
        },
        {
          function: "minecraft:set_nbt",
          tag: "{Inverted: true}",
          conditions: [
            {
              block: lamp,
              condition: "minecraft:block_state_property",
              properties: {
                inverted: true
              }
            }
          ]
        }
      ];
      functionArray.concat(
        lampColors.map((color) => {
          return {
            function: "minecraft:set_nbt",
            tag: `{LampColor: "${color}"}`,
            conditions: [
              {
                block: lamp,
                condition: "minecraft:block_state_property",
                properties: {
                  color
                }
              }
            ]
          };
        })
      ), event.addJson(lamp, {
        type: "minecraft:block",
        pools: [
          {
            rolls: 1,
            bonus_rolls: 0,
            entries: [
              {
                type: "minecraft:item",
                name: lamp,
                functions: functionArray
              }
            ],
            conditions: [
              {
                condition: "minecraft:survives_explosion"
              }
            ]
          }
        ]
      });
    });
  }
}
function wanderingWinemakerLoot() {
  onEvent("entity.loot_tables", (event) => {
    vinery(event);
  });
  function vinery(event) {
    event.addEntity("vinery:wandering_winemaker", (table) => {
      table.addPool((pool) => {
        pool.setUniformRolls(1, 1);
        pool.addItem("vinery:straw_hat", 1);
        pool.addItem("vinery:vinemaker_apron", 1);
        pool.addItem("vinery:vinemaker_leggings", 1);
        pool.addItem("vinery:vinemaker_boots", 1);
        pool.addItem("vinery:gloves", 1);
        pool.addItem("vinery:wine_bottle", 2);
        pool.addItem("vinery:apple_pie", 2);
      });
    });
  }
}
function villagerTrades() {
  const VillagerTiers = Object.freeze({
    NOVICE: 1,
    APPRENTICE: 2,
    JOURNEYMAN: 3,
    EXPERT: 4,
    MASTER: 5
  });
  onEvent("morejs.villager.trades", (event) => {
    const vanillaTradesToRemove = [
      {
        profession: "minecraft:armorer",
        tiers: [VillagerTiers.EXPERT, VillagerTiers.MASTER]
      },
      {
        profession: "minecraft:toolsmith",
        tiers: [VillagerTiers.JOURNEYMAN, VillagerTiers.EXPERT, VillagerTiers.MASTER]
      },
      {
        profession: "minecraft:weaponsmith",
        tiers: [VillagerTiers.EXPERT, VillagerTiers.MASTER]
      },
      {
        profession: "minecraft:cleric",
        tiers: [VillagerTiers.MASTER]
      }
    ];
    const customTradesToAdd = [
      {
        profession: "minecraft:armorer",
        trades: {
          [VillagerTiers.APPRENTICE]: [
            {
              buyItems: [Item.of("minecraft:flint", 18)],
              sellItem: "createastral:sturdy_helmet"
            }
          ],
          [VillagerTiers.EXPERT]: [
            {
              buyItems: [Item.of("minecraft:emerald", 25)],
              sellItem: "createastral:sturdy_chestplate"
            },
            {
              buyItems: [Item.of("minecraft:emerald", 20)],
              sellItem: "createastral:sturdy_leggings"
            }
          ],
          [VillagerTiers.MASTER]: [
            {
              buyItems: [Item.of("minecraft:emerald", 20)],
              sellItem: "createastral:sturdy_helmet"
            },
            {
              buyItems: [Item.of("minecraft:emerald", 27)],
              sellItem: "createastral:sturdy_chestplate"
            },
            {
              buyItems: [Item.of("minecraft:emerald", 23)],
              sellItem: "createastral:sturdy_boots"
            }
          ]
        }
      },
      {
        profession: "minecraft:toolsmith",
        trades: {
          [VillagerTiers.APPRENTICE]: [
            {
              buyItems: [Item.of("minecraft:flint", 18)],
              sellItem: "createastral:andesite_compound"
            }
          ],
          [VillagerTiers.JOURNEYMAN]: [
            {
              buyItems: [Item.of("minecraft:gravel", 1)],
              sellItem: "minecraft:flint"
            },
            {
              buyItems: [Item.of("minecraft:gold_ingot", 4)],
              sellItem: "create:wrench"
            },
            {
              buyItems: [Item.of("minecraft:flint", 8)],
              sellItem: "create:shaft"
            }
          ],
          [VillagerTiers.EXPERT]: [
            {
              buyItems: [Item.of("minecraft:flint", 12)],
              sellItem: "minecraft:iron_pickaxe"
            },
            {
              buyItems: [Item.of("minecraft:flint", 10)],
              sellItem: "minecraft:iron_shovel"
            }
          ],
          [VillagerTiers.MASTER]: [
            {
              buyItems: [Item.of("minecraft:emerald", 6)],
              sellItem: "createastral:bronze_sheet"
            },
            {
              buyItems: [Item.of("minecraft:emerald", 12)],
              sellItem: "create:sturdy_sheet"
            }
          ]
        }
      },
      {
        profession: "minecraft:weaponsmith",
        trades: {
          [VillagerTiers.EXPERT]: [
            {
              buyItems: [Item.of("minecraft:flint", 15)],
              sellItem: "tconstruct:dagger"
            },
            {
              buyItems: [Item.of("minecraft:flint", 16)],
              sellItem: "tconstruct:sword"
            }
          ],
          [VillagerTiers.MASTER]: [
            {
              buyItems: [Item.of("minecraft:flint", 17)],
              sellItem: "tconstruct:hand_axe"
            },
            {
              buyItems: [Item.of("minecraft:flint", 18)],
              sellItem: "tconstruct:cleaver"
            }
          ]
        }
      },
      {
        profession: "minecraft:cleric",
        trades: {
          [VillagerTiers.MASTER]: [
            {
              buyItems: [Item.of("ad_astra:moon_sand", 20)],
              sellItem: "kubejs:shimmer_bucket"
            }
          ]
        }
      },
      {
        profession: "techreborn:metallurgist",
        trades: {
          [VillagerTiers.NOVICE]: [
            {
              buyItems: [Item.of("minecraft:emerald", 10)],
              sellItem: "createastral:bronze_sheet"
            },
            {
              buyItems: [Item.of("minecraft:gold_ingot", 5)],
              sellItem: "create:wrench"
            }
          ],
          [VillagerTiers.APPRENTICE]: [
            {
              buyItems: [Item.of("minecraft:emerald", 10)],
              sellItem: "create:cogwheel"
            }
          ],
          [VillagerTiers.JOURNEYMAN]: [
            {
              buyItems: [Item.of("minecraft:emerald", 7)],
              sellItem: "createastral:bronze_sheet"
            },
            {
              buyItems: [Item.of("minecraft:emerald", 7)],
              sellItem: "create:iron_sheet"
            },
            {
              buyItems: [Item.of("minecraft:emerald", 6)],
              sellItem: "create:copper_sheet"
            }
          ],
          [VillagerTiers.EXPERT]: [
            {
              buyItems: [Item.of("minecraft:emerald", 10)],
              sellItem: "create:minecart_coupling"
            },
            {
              buyItems: [Item.of("minecraft:emerald", 9)],
              sellItem: "create:whisk"
            },
            {
              buyItems: [Item.of("minecraft:emerald", 9)],
              sellItem: "create:sturdy_sheet"
            }
          ],
          [VillagerTiers.MASTER]: [
            {
              buyItems: [Item.of("minecraft:emerald", 12)],
              sellItem: "create:propeller"
            },
            {
              buyItems: [Item.of("minecraft:emerald", 14)],
              sellItem: "create:brass_hand"
            }
          ]
        }
      },
      {
        profession: "techreborn:electrician",
        trades: {
          [VillagerTiers.NOVICE]: [
            {
              buyItems: [Item.of("create:andesite_alloy", 2)],
              sellItem: "createaddition:copper_wire"
            }
          ],
          [VillagerTiers.APPRENTICE]: [
            {
              buyItems: [Item.of("minecraft:flint", 3)],
              sellItem: "minecraft:redstone"
            },
            {
              buyItems: [Item.of("create:andesite_alloy", 2)],
              sellItem: "createaddition:gold_wire"
            }
          ],
          [VillagerTiers.JOURNEYMAN]: [
            {
              buyItems: [Item.of("minecraft:flint", 6)],
              sellItem: "minecraft:repeater"
            }
          ],
          [VillagerTiers.EXPERT]: [
            {
              buyItems: [Item.of("create:andesite_alloy", 32)],
              sellItem: "computercraft:computer_normal"
            },
            {
              buyItems: [Item.of("create:andesite_alloy", 5)],
              sellItem: "computercraft:cable"
            }
          ],
          [VillagerTiers.MASTER]: [
            {
              buyItems: [Item.of("create:andesite_alloy", 10)],
              sellItem: "minecraft:comparator"
            },
            {
              buyItems: [Item.of("create:andesite_alloy", 10)],
              sellItem: "minecraft:observer"
            }
          ]
        }
      }
    ];
    vanillaTradesToRemove.forEach((trade) => {
      trade.tiers.forEach((tier) => {
        event.removeVanillaTrades([trade.profession], tier);
      });
    });
    event.removeModdedTrades();
    customTradesToAdd.forEach((trade) => {
      Object.entries(trade.trades).forEach(([tier, offers]) => {
        offers.forEach((offer) => {
          event.addTrade(trade.profession, Number(tier), offer.buyItems, offer.sellItem);
        });
      });
    });
  });
}
function dragon() {
  function bossSpawner(event) {
    let blockPos = event.block.pos;
    event.server.runCommandSilent(
      `execute in minecraft:the_nether positioned ${blockPos.x} ${blockPos.y} ${blockPos.z} run playsound ad_astra:imminent_doom master @a[distance=..20]`
    );
    event.server.runCommandSilent(
      `execute in minecraft:the_nether positioned ${blockPos.x} ${blockPos.y} ${blockPos.z} run playsound astraladditions:music_wither_spawn master @a[distance=..20]`
    );
    event.server.scheduleInTicks(11.5 * 20, () => {
      event.server.runCommandSilent(
        `execute in minecraft:the_nether run particle minecraft:end_rod ${blockPos.x} ${blockPos.y + 10} ${blockPos.z} 0 5 0 0.5 400`
      );
      event.server.runCommandSilent(
        `execute in minecraft:the_nether positioned ${blockPos.x} ${blockPos.y} ${blockPos.z} at @a[distance=..50] run playsound minecraft:block.end_portal.spawn music @a[distance=..50]`
      );
      event.server.runCommandSilent(
        `execute in minecraft:the_nether run summon minecraft:ender_dragon ${blockPos.x} ${blockPos.y + 20} ${blockPos.z}`
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
    if (event.block.id == "yttr:polished_scorched_obsidian_holster_alive" && event.item.id == "farmersdelight:netherite_knife") {
      let blockPos = event.block.pos;
      event.block.popItem("yttr:haemopal");
      event.block.set("yttr:polished_scorched_obsidian_holster");
      event.server.runCommandSilent(
        `execute in minecraft:the_nether positioned ${blockPos.x} ${blockPos.y} ${blockPos.z} run playsound ad_astra:wrench master @a[distance=..5] ~ ~ ~ 0.3 0.1`
      );
      event.server.runCommandSilent(
        `execute in minecraft:the_nether run particle dust_color_transition 0.5 0 0 2 0.84 0 0 ${blockPos.x} ${blockPos.y} ${blockPos.z} 0.5 0.5 0.5 3 20`
      );
      damageTool(event);
    }
  });
}
function interaction() {
  onEvent("player.logged_in", (event) => {
    if (!event.player.stages.has("starting_items")) {
      event.player.stages.add("starting_items");
      event.player.give("ftbquests:book");
    }
    //!This point forward, all code was made by TheOverlyCaffeinatedTrashPanda
    if (!event.player.stages.has("read_quest")) {
      event.player.tell(
        Text.aqua(Component.translate("logging_tip")).underlined().hover(Component.translate("logging_tip.hover"))
      );
    }
  });
  onEvent("item.right_click", (event) => {
    if (event.item.id == "ftbquests:book") {
      event.player.stages.add("read_quest");
    }
  });
  const conduitBlocks = [
    "createastral:shimmering_stone",
    "createastral:ancient_stone",
    "createastral:moonset_stone",
    "createastral:mercurian_stone"
  ];
  onEvent("block.right_click", (event) => {
    if (event.item.id != "createastral:astral_conduit") return;
    if (!("Damage" in event.item.nbt)) return;
    if (!(typeof event.item.nbt.Damage === "number")) return;
    if (event.item.nbt.Damage <= 19 && conduitBlocks.includes(event.block.id)) {
      event.item.nbt.Damage++;
      if (event.item.nbt.Damage == 20) {
        event.player.inventory.set(event.player.getSelectedSlot(), "air");
      }
    } else if (event.block.id == "minecraft:bedrock" && event.player.level.dimension.toString() === "minecraft:the_end" && event.player.isCrouching()) {
      let spawnPoint = event.player.getSpawnLocation();
      let worldSpawn = event.level.minecraftLevel.getSharedSpawnPos();
      if (spawnPoint == null) {
        event.player.teleportTo("minecraft:overworld", worldSpawn.x, worldSpawn.y, worldSpawn.z, 0, 0);
      } else {
        event.player.teleportTo("minecraft:overworld", spawnPoint.x, spawnPoint.y, spawnPoint.z, 0, 0);
      }
    }
  });
  onEvent("player.tick", (event) => {
    const player = event.getPlayer();
    const x = Math.floor(player.x);
    const y = Math.floor(player.y);
    const z = Math.floor(player.z);
    if (event.level.getBlock(x, y - 2, z).id == "createastral:swift_andesite") {
      player.potionEffects.add("minecraft:speed", 20, 0, false, false);
    }
    if (event.level.getBlock(x, y - 1, z).id == "kubejs:fragile_sheet_block") {
      Utils.server.runCommandSilent(
        `particle minecraft:block minecraft:magenta_concrete_powder ${player.x} ${player.y - 1} ${player.z} 0.0 0.1 0.0 0 5`
      );
      Utils.server.runCommandSilent(`playsound create:crushing_1 block @a ${player.x} ${player.y} ${player.z}`);
      Utils.server.runCommandSilent(`setblock ${x} ${y - 1} ${z} kubejs:broken_fragile_sheet_block`);
    }
    if (event.level.getBlock(x, y - 1, z).id == "kubejs:fire_resistant_fragile_sheet_block") {
      Utils.server.runCommandSilent(
        `particle minecraft:block kubejs:fire_resistant_fragile_sheet_block ${player.x} ${player.y - 1} ${player.z} 0.0 0.1 0.0 0 5`
      );
      Utils.server.runCommandSilent(`playsound create:crushing_1 block @a ${player.x} ${player.y} ${player.z}`);
      Utils.server.runCommandSilent(`setblock ${x} ${y - 1} ${z} kubejs:broken_fire_resistant_fragile_sheet_block`);
    }
  });
  //! READ ME:
  const ammos = [
    {
      projectileItem: "createastral:astral_singularity",
      //? Item ID
      particlesEnable: true,
      //? Does it have particles
      particleSpread: 2.5,
      particleSize: 10,
      particleSpeed: 5,
      particleCount: 100,
      //? Settings
      particleType: "minecraft:dust",
      particleHasColor: true,
      //? Type of particle and if its colour can be changed
      particleColorR: 0.31,
      particleColorG: 0,
      particleColorB: 0.7,
      //? Colour settings
      explosionEnable: true,
      //? Does it go boom
      explosionStrength: 8,
      explosionDamageTerrain: true
      //? How strong it go boom and if it hurt the land
    },
    {
      projectileItem: "createbigcannons:autocannon_cartridge",
      particlesEnable: false,
      explosionEnable: true,
      explosionStrength: 3,
      explosionDamageTerrain: false
    }
  ];
  onEvent("entity.spawned", (event) => {
    const { entity, server } = event;
    if (entity.type === "create:potato_projectile") {
      ammos.forEach((ammoType) => {
        if (entity.fullNBT.Item.id === ammoType.projectileItem) {
          server.scheduleInTicks(5, (event2) => {
            if (entity.removed || entity.deadOrDying || !entity.alive) {
              let x = entity.fullNBT.Pos[0];
              let y = entity.fullNBT.Pos[1];
              let z = entity.fullNBT.Pos[2];
              let explosion = entity.block.offset(0, 0, 0).createExplosion();
              if (ammoType.particlesEnable) {
                if (ammoType.particleHasColor) {
                  server.runCommandSilent(
                    `particle ${ammoType.particleType} ${ammoType.particleColorR} ${ammoType.particleColorG} ${ammoType.particleColorB} ${ammoType.particleSize} ${x} ${y} ${z} ${ammoType.particleSpread} ${ammoType.particleSpread} ${ammoType.particleSpread} ${ammoType.particleSpeed} ${ammoType.particleCount}`
                  );
                } else {
                  server.runCommandSilent(
                    `particle ${ammoType.particleType} ${x} ${y} ${z} ${ammoType.particleSpread} ${ammoType.particleSpread} ${ammoType.particleSpread} ${ammoType.particleSpeed} ${ammoType.particleCount}`
                  );
                }
              }
              if (ammoType.explosionEnable) {
                explosion.strength(ammoType.explosionStrength);
                explosion.damagesTerrain(ammoType.explosionDamageTerrain);
                explosion.explode();
              }
              return;
            }
            event2.reschedule();
          });
          //! Made by TheOverlyCaffeinatedTrashPanda
        }
      });
    } else if (entity.type === "minecraft:item") {
      if (entity.item === "createastral:fragile_sheet") {
        entity.item = "createastral:broken_fragile_sheet";
        Utils.server.runCommandSilent(
          `particle minecraft:block minecraft:magenta_concrete_powder ${entity.x} ${entity.y} ${entity.z} 0.0 0.1 0.0 0 5`
        );
        Utils.server.runCommandSilent(`playsound create:crushing_1 block @a ${entity.x} ${entity.y} ${entity.z}`);
      } else if (entity.item === "createastral:fragile_rocket_fin") {
        entity.item = "createastral:broken_fragile_rocket_fin";
        Utils.server.runCommandSilent(
          `particle minecraft:block createastral:sturdy_sheet_block ${entity.x} ${entity.y} ${entity.z} 0.0 0.1 0.0 0 5`
        );
        Utils.server.runCommandSilent(`playsound create:crushing_1 block @a ${entity.x} ${entity.y} ${entity.z}`);
      } else if (entity.item === "kubejs:fragile_sheet_block") {
        entity.item = "kubejs:broken_fragile_sheet_block";
        Utils.server.runCommandSilent(
          `particle minecraft:block kubejs:fragile_sheet_block ${entity.x} ${entity.y} ${entity.z} 0.0 0.1 0.0 0 5`
        );
        Utils.server.runCommandSilent(`playsound create:crushing_1 block @a ${entity.x} ${entity.y} ${entity.z}`);
      } else if (entity.item === "kubejs:fire_resistant_fragile_sheet_block") {
        entity.item = "kubejs:broken_fire_resistant_fragile_sheet_block";
        Utils.server.runCommandSilent(
          `particle minecraft:block kubejs:broken_fire_resistant_fragile_sheet_block ${entity.x} ${entity.y} ${entity.z} 0.0 0.1 0.0 0 5`
        );
        Utils.server.runCommandSilent(`playsound create:crushing_1 block @a ${entity.x} ${entity.y} ${entity.z}`);
      }
    } else if (entity.type === "minecraft:area_effect_cloud") {
      console.log(entity.fullNBT);
      if (entity.fullNBT.Potion === "minecraft:fire_resistance") {
        let x_f = Math.floor(entity.fullNBT.Pos[0]);
        let y_f = Math.floor(entity.fullNBT.Pos[1]);
        let z_f = Math.floor(entity.fullNBT.Pos[2]);
        Utils.server.runCommandSilent(
          `fill ${x_f - 1} ${y_f - 1} ${z_f - 1} ${x_f + 1} ${y_f + 1} ${z_f + 1} kubejs:fire_resistant_fragile_sheet_block replace kubejs:fragile_sheet_block`
        );
        Utils.server.runCommandSilent(
          `fill ${x_f - 1} ${y_f - 1} ${z_f - 1} ${x_f + 1} ${y_f + 1} ${z_f + 1} kubejs:broken_fire_resistant_fragile_sheet_block replace kubejs:broken_fragile_sheet_block`
        );
      }
    }
  });
}
function spawnPointFix() {
  onEvent("fabric.allow_setting_spawn", (event) => {
    event.cancel();
  });
}
function hephaestusFluidSyncFix() {
  onEvent("block.right_click", (event) => {
    if (event.block.id == "tconstruct:foundry_controller") {
      let blockEntity = event.block.entity;
      if ("tank" in blockEntity) blockEntity.tank.syncFluids();
    }
  });
}
function adAstraCryoFuelConversionRecipes() {
  onEvent("recipes", (event) => {
    [
      {
        input: { item: "createastral:prismatic_crystal" },
        output: { name: "kubejs:aurorite" },
        ratio: 0.2
      },
      {
        input: { item: "minecraft:ice" },
        output: { name: "techreborn:hydrogen" },
        ratio: 1e-3
      },
      {
        input: { item: "minecraft:packed_ice" },
        output: { name: "techreborn:hydrogen" },
        ratio: 2e-3
      },
      {
        input: { item: "minecraft:blue_ice" },
        output: { name: "techreborn:hydrogen" },
        ratio: 5e-3
      },
      {
        input: { item: "ad_astra:ice_shard" },
        output: { name: "techreborn:hydrogen" },
        ratio: 0.025
      }
    ].forEach((recipe) => {
      event.custom({
        type: "ad_astra:cryo_fuel_conversion",
        input: recipe.input,
        output: recipe.output,
        conversion_ratio: recipe.ratio
      });
    });
  });
}
function adAstraOxygenConversionRecipes() {
  onEvent("recipes", (event) => {
    [
      {
        input: { tag: "ad_astra:oxygen" },
        output: { name: "ad_astra:oxygen" },
        ratio: 1
      }
    ].forEach((recipe) => {
      event.custom({
        type: "ad_astra:oxygen_conversion",
        input: recipe.input,
        output: recipe.output,
        conversion_ratio: recipe.ratio
      });
    });
  });
}
function adAstraSpaceStationRecipe() {
  onEvent("recipes", (event) => {
    event.custom({
      type: "ad_astra:space_station",
      ingredients: [
        {
          ingredient: {
            tag: "c:iron_plates"
          },
          count: 64
        },
        {
          ingredient: {
            item: "techreborn:rubber"
          },
          count: 64
        },
        {
          ingredient: {
            tag: "c:compressed_desh"
          },
          count: 32
        },
        {
          ingredient: {
            tag: "c:glass"
          },
          count: 32
        },
        {
          ingredient: {
            item: "create:sturdy_sheet"
          },
          count: 16
        },
        {
          ingredient: {
            item: "create:integrated_circuit"
          },
          count: 8
        },
        {
          ingredient: {
            item: "createastral:navigation_mechanism"
          },
          count: 1
        },
        {
          ingredient: {
            item: "ad_astra:oxygen_distributor"
          },
          count: 1
        }
      ]
    });
  });
}
function astralGeneratorsAmalgationMatrixRecipes() {
  onEvent("recipes", (event) => {
    AMFoodAmalgamation(event);
    AMTest(event);
  });
  function AMFoodAmalgamation(event) {
    event.custom({
      type: "custommachinery:custom_machine",
      machine: "astralgenerators:amalgamation_matrix",
      time: 10,
      requirements: [
        {
          type: "custommachinery:item",
          item: "astralfoods:quantum_pasta",
          mode: "input",
          amount: 1
        },
        {
          type: "custommachinery:item",
          item: "astralfoods:shimmered_apple",
          mode: "input",
          amount: 1
        },
        {
          type: "custommachinery:item",
          item: "astralfoods:compressed_onion",
          mode: "input",
          amount: 1
        },
        {
          type: "custommachinery:item",
          item: "astralfoods:shimmered_rabbit_stew",
          mode: "input",
          amount: 1
        },
        {
          type: "custommachinery:item",
          item: "astralfoods:food_amalgamation",
          mode: "output",
          amount: 1
        },
        {
          type: "custommachinery:energy",
          mode: "input",
          amount: 2e4
        },
        {
          type: "custommachinery:structure",
          keys: {
            a: "techreborn:basic_machine_frame",
            b: "astralgenerators:superconducting_coil",
            c: "techreborn:advanced_machine_casing",
            d: "astralgenerators:convergence_core"
          },
          pattern: [
            ["aaaaa", "aaaaa", "aaaaa", "aaaaa", "aamaa"],
            ["aaaaa", "abbba", "abbba", "abbba", "aaaaa"],
            ["     ", " ccc ", " ccc ", " ccc ", "     "],
            ["     ", "     ", "  c  ", "     ", "     "],
            ["     ", "     ", "  d  ", "     ", "     "],
            ["     ", "     ", "  c  ", "     ", "     "],
            ["     ", " ccc ", " ccc ", " ccc ", "     "],
            ["     ", " bbb ", " bbb ", " bbb ", "     "],
            ["aaaaa", "aaaaa", "aaaaa", "aaaaa", "aaaaa"]
          ]
        }
      ]
    });
  }
  function AMTest(event) {
    event.custom({
      type: "custommachinery:custom_machine",
      machine: "astralgenerators:amalgamation_matrix",
      time: 10,
      requirements: [
        {
          type: "custommachinery:item",
          item: "minecraft:stone",
          mode: "input",
          amount: 1
        },
        {
          type: "custommachinery:item",
          item: "minecraft:cobblestone",
          mode: "input",
          amount: 1
        },
        {
          type: "custommachinery:item",
          item: "minecraft:iron_ingot",
          mode: "input",
          amount: 1
        },
        {
          type: "custommachinery:item",
          item: "minecraft:gold_ingot",
          mode: "input",
          amount: 1
        },
        {
          type: "custommachinery:item",
          item: "minecraft:diamond",
          mode: "output",
          amount: 1
        },
        {
          type: "custommachinery:energy",
          mode: "input",
          amount: 1e5
        },
        {
          type: "custommachinery:structure",
          keys: {
            a: "techreborn:basic_machine_frame",
            b: "astralgenerators:superconducting_coil",
            c: "techreborn:advanced_machine_casing",
            d: "astralgenerators:convergence_core"
          },
          pattern: [
            ["aaaaa", "aaaaa", "aaaaa", "aaaaa", "aamaa"],
            ["aaaaa", "abbba", "abbba", "abbba", "aaaaa"],
            ["     ", " ccc ", " ccc ", " ccc ", "     "],
            ["     ", "     ", "  c  ", "     ", "     "],
            ["     ", "     ", "  d  ", "     ", "     "],
            ["     ", "     ", "  c  ", "     ", "     "],
            ["     ", " ccc ", " ccc ", " ccc ", "     "],
            ["     ", " bbb ", " bbb ", " bbb ", "     "],
            ["aaaaa", "aaaaa", "aaaaa", "aaaaa", "aaaaa"]
          ]
        }
      ]
    });
  }
}
function astralGeneratorsAssemblerRecipes() {
  onEvent("recipes", (event) => {
    assemblerConvergenceCore(event);
    assemblerFluidBoiler(event);
    assemblerFusionReactor(event);
    assemblerParticleAccelerator(event);
    assemblerSolidBoiler(event);
    assemblerSteamTurbine(event);
  });
  function assemblerConvergenceCore(event) {
    event.custom({
      type: "custommachinery:custom_machine",
      machine: "astralgenerators:assembler",
      time: 100,
      requirements: [
        {
          type: "custommachinery:item",
          item: "createastral:astral_singularity",
          mode: "input",
          amount: 1
        },
        {
          type: "custommachinery:item",
          item: "createastral:subatomic_ingot",
          mode: "input",
          amount: 8
        },
        {
          type: "custommachinery:item",
          item: "astralgenerators:convergence_core",
          mode: "output",
          amount: 1
        },
        {
          type: "custommachinery:energy",
          mode: "input",
          amount: 1e3
        }
      ]
    });
  }
  function assemblerFluidBoiler(event) {
    event.custom({
      type: "custommachinery:custom_machine",
      machine: "astralgenerators:assembler",
      time: 100,
      requirements: [
        {
          type: "custommachinery:item",
          item: "techreborn:basic_machine_frame",
          mode: "input",
          amount: 1
        },
        {
          type: "custommachinery:item",
          item: "create:propeller",
          mode: "input",
          amount: 16
        },
        {
          type: "custommachinery:item",
          item: "create:fluid_tank",
          mode: "input",
          amount: 4
        },
        {
          type: "custommachinery:item",
          item: "astralgenerators:pipe_casing",
          mode: "input",
          amount: 4
        },
        {
          type: "custommachinery:item",
          item: "custommachinery:custom_machine_item",
          nbt: { machine: "astralgenerators:fluid_boiler" },
          mode: "output",
          amount: 1
        },
        {
          type: "custommachinery:energy",
          mode: "input",
          amount: 1e3
        }
      ]
    });
  }
  function assemblerFusionReactor(event) {
    event.custom({
      type: "custommachinery:custom_machine",
      machine: "astralgenerators:assembler",
      time: 100,
      requirements: [
        {
          type: "custommachinery:item",
          item: "astralgenerators:fusion_coil",
          mode: "input",
          amount: 1
        },
        {
          type: "custommachinery:item",
          item: "createastral:living_mechanism",
          mode: "input",
          amount: 4
        },
        {
          type: "custommachinery:item",
          item: "createastral:ender_plating",
          mode: "input",
          amount: 8
        },
        {
          type: "custommachinery:item",
          item: "createastral:astral_singularity",
          mode: "input",
          amount: 1
        },
        {
          type: "custommachinery:item",
          item: "createastral:subatomic_ingot",
          mode: "input",
          amount: 2
        },
        {
          type: "custommachinery:item",
          item: "techreborn:industrial_circuit",
          mode: "input",
          amount: 64
        },
        {
          type: "custommachinery:item",
          item: "techreborn:industrial_circuit",
          mode: "input",
          amount: 64
        },
        {
          type: "custommachinery:item",
          item: "techreborn:industrial_circuit",
          mode: "input",
          amount: 64
        },
        {
          type: "custommachinery:item",
          item: "createastral:promethium_atomic_battery",
          mode: "input",
          amount: 1
        },
        {
          type: "custommachinery:item",
          item: "custommachinery:custom_machine_item",
          nbt: { machine: "astralgenerators:fusion_reactor" },
          mode: "output",
          amount: 1
        },
        {
          type: "custommachinery:energy",
          mode: "input",
          amount: 1e3
        }
      ]
    });
  }
  function assemblerParticleAccelerator(event) {
    event.custom({
      type: "custommachinery:custom_machine",
      machine: "astralgenerators:assembler",
      time: 100,
      requirements: [
        {
          type: "custommachinery:item",
          item: "createastral:pure_star_shard",
          mode: "input",
          amount: 2
        },
        {
          type: "custommachinery:item",
          item: "ae2:singularity",
          mode: "input",
          amount: 8
        },
        {
          type: "custommachinery:item",
          item: "createastral:ender_plating",
          mode: "input",
          amount: 32
        },
        {
          type: "custommachinery:item",
          item: "createastral:astral_singularity",
          mode: "input",
          amount: 8
        },
        {
          type: "custommachinery:item",
          item: "createastral:subatomic_ingot",
          mode: "input",
          amount: 8
        },
        {
          type: "custommachinery:item",
          item: "techreborn:industrial_circuit",
          mode: "input",
          amount: 64
        },
        {
          type: "custommachinery:item",
          item: "techreborn:industrial_circuit",
          mode: "input",
          amount: 64
        },
        {
          type: "custommachinery:item",
          item: "techreborn:industrial_circuit",
          mode: "input",
          amount: 64
        },
        {
          type: "custommachinery:item",
          item: "createastral:promethium_atomic_battery",
          mode: "input",
          amount: 1
        },
        {
          type: "custommachinery:item",
          item: "custommachinery:custom_machine_item",
          nbt: { machine: "astralgenerators:particle_accelerator" },
          mode: "output",
          amount: 1
        },
        {
          type: "custommachinery:energy",
          mode: "input",
          amount: 1e3
        }
      ]
    });
  }
  function assemblerSolidBoiler(event) {
    event.custom({
      type: "custommachinery:custom_machine",
      machine: "astralgenerators:assembler",
      time: 100,
      requirements: [
        {
          type: "custommachinery:item",
          item: "techreborn:basic_machine_frame",
          mode: "input",
          amount: 1
        },
        {
          type: "custommachinery:item",
          item: "create:propeller",
          mode: "input",
          amount: 16
        },
        {
          type: "custommachinery:item",
          item: "minecraft:furnace",
          mode: "input",
          amount: 1
        },
        {
          type: "custommachinery:item",
          item: "astralgenerators:pipe_casing",
          mode: "input",
          amount: 4
        },
        {
          type: "custommachinery:item",
          item: "custommachinery:custom_machine_item",
          nbt: { machine: "astralgenerators:solid_boiler" },
          mode: "output",
          amount: 1
        },
        {
          type: "custommachinery:energy",
          mode: "input",
          amount: 1e3
        }
      ]
    });
  }
  function assemblerSteamTurbine(event) {
    event.custom({
      type: "custommachinery:custom_machine",
      machine: "astralgenerators:assembler",
      time: 100,
      requirements: [
        {
          type: "custommachinery:item",
          item: "techreborn:basic_machine_frame",
          mode: "input",
          amount: 1
        },
        {
          type: "custommachinery:item",
          item: "create:propeller",
          mode: "input",
          amount: 16
        },
        {
          type: "custommachinery:item",
          item: "createaddition:electric_motor",
          mode: "input",
          amount: 1
        },
        {
          type: "custommachinery:item",
          item: "astralgenerators:pipe_casing",
          mode: "input",
          amount: 4
        },
        {
          type: "custommachinery:item",
          item: "custommachinery:custom_machine_item",
          nbt: { machine: "astralgenerators:steam_turbine" },
          mode: "output",
          amount: 1
        },
        {
          type: "custommachinery:energy",
          mode: "input",
          amount: 1e3
        }
      ]
    });
  }
}
function astralGeneratorsBoilerRecipes() {
  onEvent("recipes", (event) => {
    boilerSteamFromFuel(event);
    boilerSteamFromLava(event);
  });
  function boilerSteamFromFuel(event) {
    event.custom({
      type: "custommachinery:custom_machine",
      machine: "astralgenerators:solid_boiler",
      time: 10,
      requirements: [
        {
          type: "custommachinery:fuel"
        },
        {
          type: "custommachinery:fluid",
          mode: "input",
          fluid: "minecraft:water",
          amount: 100800
        },
        {
          type: "custommachinery:fluid",
          fluid: "astralgenerators:steam",
          amount: 201600,
          mode: "output"
        },
        {
          type: "custommachinery:structure",
          keys: {
            a: "techreborn:basic_machine_frame",
            b: "astralgenerators:pipe_casing"
          },
          pattern: [
            ["aaa", "aaa", "aaa", " m "],
            ["aaa", "aba", "aba", "   "],
            ["aaa", "aaa", "aaa", "   "]
          ]
        }
      ]
    });
  }
  function boilerSteamFromLava(event) {
    event.custom({
      type: "custommachinery:custom_machine",
      machine: "astralgenerators:fluid_boiler",
      time: 10,
      requirements: [
        {
          type: "custommachinery:fluid",
          mode: "input",
          fluid: "minecraft:lava",
          amount: 100800
        },
        {
          type: "custommachinery:fluid",
          mode: "input",
          fluid: "minecraft:water",
          amount: 100800
        },
        {
          type: "custommachinery:fluid",
          fluid: "astralgenerators:steam",
          amount: 201600,
          mode: "output"
        },
        {
          type: "custommachinery:structure",
          keys: {
            a: "techreborn:basic_machine_frame",
            b: "astralgenerators:pipe_casing"
          },
          pattern: [
            ["aaa", "aaa", "aaa", " m "],
            ["aaa", "aba", "aba", "   "],
            ["aaa", "aaa", "aaa", "   "]
          ]
        }
      ]
    });
  }
}
function astralGeneratorsFusionReactorRecipes() {
  onEvent("recipes", (event) => {
    fusionHelium3(event);
  });
  function fusionHelium3(event) {
    event.custom({
      type: "custommachinery:custom_machine",
      machine: "astralgenerators:fusion_reactor",
      time: 10,
      requirements: [
        {
          type: "custommachinery:fluid",
          mode: "input",
          fluid: "techreborn:deuterium",
          amount: 100800
        },
        {
          type: "custommachinery:fluid",
          mode: "input",
          fluid: "techreborn:tritium",
          amount: 100800
        },
        {
          type: "custommachinery:fluid",
          fluid: "techreborn:helium3",
          amount: 100800,
          mode: "output"
        },
        {
          type: "custommachinery:energy",
          mode: "input",
          amount: 1e6
        },
        {
          type: "custommachinery:energy",
          mode: "output",
          amount: 1e7
        },
        {
          type: "custommachinery:structure",
          keys: {
            a: "astralgenerators:fusion_casing",
            b: "astralgenerators:fusion_glass",
            c: "astralgenerators:fusion_coil"
          },
          pattern: [
            [
              "               ",
              "      aaa      ",
              "    aa   aa    ",
              "   a       a   ",
              "  a         a  ",
              "  a         a  ",
              " a           a ",
              " a           a ",
              " a           a ",
              "  a         a  ",
              "  a         a  ",
              "   a       a   ",
              "    aa   aa    ",
              "      aaa      ",
              "               "
            ],
            [
              "      aba      ",
              "    bb   bb    ",
              "   a  aba  a   ",
              "  acab   baca  ",
              " b a       a b ",
              " b b       b b ",
              "a a         a a",
              "b b         b b",
              "a a         a a",
              " b b       b b ",
              " b a       a b ",
              "  acab   baca  ",
              "   a  aba  a   ",
              "    bb   bb    ",
              "      ama      "
            ],
            [
              "               ",
              "      aaa      ",
              "    aa   aa    ",
              "   a       a   ",
              "  a         a  ",
              "  a         a  ",
              " a           a ",
              " a           a ",
              " a           a ",
              "  a         a  ",
              "  a         a  ",
              "   a       a   ",
              "    aa   aa    ",
              "      aaa      ",
              "               "
            ]
          ]
        }
      ]
    });
  }
}
function astralGeneratorsParticleAcceleratorRecipes() {
  onEvent("recipes", (event) => {
    acceleratorSingularity(event);
  });
  function acceleratorSingularity(event) {
    event.custom({
      type: "custommachinery:custom_machine",
      machine: "astralgenerators:particle_accelerator",
      time: 10,
      requirements: [
        {
          type: "custommachinery:item",
          item: "minecraft:stone",
          amount: 1,
          mode: "input"
        },
        {
          type: "custommachinery:item",
          item: "minecraft:emerald",
          amount: 1,
          mode: "output"
        },
        {
          type: "custommachinery:fluid",
          mode: "input",
          fluid: "minecraft:water",
          amount: 100800
        },
        {
          type: "custommachinery:energy",
          mode: "input",
          amount: 1e4
        },
        {
          type: "custommachinery:structure",
          keys: {
            a: "techreborn:basic_machine_frame",
            b: "techreborn:adjustable_su",
            c: "techreborn:adjustable_su",
            d: "astralgenerators:steel_frame",
            e: "astralgenerators:pipe_casing",
            f: "astralgenerators:vent",
            g: "astralgenerators:engine_intake_casing",
            h: "techreborn:advanced_machine_casing",
            i: "techreborn:fusion_coil",
            j: "astralgenerators:superconducting_coil"
          },
          pattern: [
            [
              "  aaaaaaaaaaaaa  ",
              " aaaaaaaaaaaaaaa ",
              "aaaaaaaaaaaaaaaaa",
              "aaaaaaaaaaaaaaaaa",
              "aaaaaabbbbbaaaaaa",
              "aaaaaaaaaaaaaaaaa",
              "aaaabaaaaaaabaaaa",
              "aaaabaaaaaaacaaaa",
              "aaaabaaaaaaabaaaa",
              "aaaabaaaaaaabaaaa",
              "aaaabaaaaaaabaaaa",
              "aaaaaaaaaaaaaaaaa",
              "aaaaaabbbbbaaaaaa",
              "aaaaaaaaaaaaaaaaa",
              "aaaaaaaaaaaaaaaaa",
              " aaaaaaaaaaaaaaa ",
              "  aaaaaamaaaaaa  "
            ],
            [
              "                 ",
              "    d       d    ",
              "  dd         dd  ",
              "  d           d  ",
              " d             d ",
              "        e        ",
              "      fgfgf      ",
              "      g   g      ",
              "     ef   fe     ",
              "      g   g      ",
              "      fgfgf      ",
              "        e        ",
              " d             d ",
              "  d           d  ",
              "  dd         dd  ",
              "    d       d    ",
              "                 "
            ],
            [
              "                 ",
              "    d       d    ",
              "  dd         dd  ",
              "  d           d  ",
              " d             d ",
              "        e        ",
              "      hhhhh      ",
              "      h   h      ",
              "     eh   he     ",
              "      h   h      ",
              "      hhhhh      ",
              "        e        ",
              " d             d ",
              "  d           d  ",
              "  dd         dd  ",
              "    d       d    ",
              "                 "
            ],
            [
              "                 ",
              "    ddddddddd    ",
              "  ddddiiiiidddd  ",
              "  ddiiiiiiiiidd  ",
              " ddiiiiaaaiiiidd ",
              " ddiiaaaeaaaiidd ",
              " diiiahhhhhaiiid ",
              " diiaah   haaiid ",
              " diiaeh   heaiid ",
              " diiaah   haaiid ",
              " diiiahhhhhaiiid ",
              " ddiiaaaeaaaiidd ",
              " ddiiiiaaaiiiidd ",
              "  ddiiiiiiiiidd  ",
              "  ddddiiiiidddd  ",
              "    ddddddddd    ",
              "                 "
            ],
            [
              "                 ",
              "                 ",
              "                 ",
              "   d         d   ",
              "                 ",
              "        e        ",
              "      fghgf      ",
              "      g   g      ",
              "     eh   he     ",
              "      g   g      ",
              "      fghgf      ",
              "        e        ",
              "                 ",
              "   d         d   ",
              "                 ",
              "                 ",
              "                 "
            ],
            [
              "                 ",
              "                 ",
              "                 ",
              "   d         d   ",
              "                 ",
              "        e        ",
              "      jjjjj      ",
              "      j   j      ",
              "     ej   je     ",
              "      j   j      ",
              "      jjjjj      ",
              "        e        ",
              "                 ",
              "   d         d   ",
              "                 ",
              "                 ",
              "                 "
            ],
            [
              "                 ",
              "                 ",
              "                 ",
              "   d         d   ",
              "                 ",
              "        e        ",
              "      jjjjj      ",
              "      j   j      ",
              "     ej   je     ",
              "      j   j      ",
              "      jjjjj      ",
              "        e        ",
              "                 ",
              "   d         d   ",
              "                 ",
              "                 ",
              "                 "
            ],
            [
              "                 ",
              "                 ",
              "                 ",
              "   d         d   ",
              "                 ",
              "        e        ",
              "      jjjjj      ",
              "      j   j      ",
              "     ej   je     ",
              "      j   j      ",
              "      jjjjj      ",
              "        e        ",
              "                 ",
              "   d         d   ",
              "                 ",
              "                 ",
              "                 "
            ],
            [
              "                 ",
              "                 ",
              "                 ",
              "   d         d   ",
              "                 ",
              "        e        ",
              "      fghgf      ",
              "      g   g      ",
              "     eh   he     ",
              "      g   g      ",
              "      fghgf      ",
              "        e        ",
              "                 ",
              "   d         d   ",
              "                 ",
              "                 ",
              "                 "
            ],
            [
              "                 ",
              "                 ",
              "     ddddddd     ",
              "   dddiiiiiddd   ",
              "   diiiaaaiiid   ",
              "  ddiaaaeaaaidd  ",
              "  diiaaaaaaaiid  ",
              "  diaaa   aaaid  ",
              "  diaea   aeaid  ",
              "  diaaa   aaaid  ",
              "  diiaaaaaaaiid  ",
              "  ddiaaaeaaaidd  ",
              "   diiiaaaiiid   ",
              "   dddiiiiiddd   ",
              "     ddddddd     ",
              "                 ",
              "                 "
            ],
            [
              "                 ",
              "                 ",
              "                 ",
              "                 ",
              "    d       d    ",
              "        e        ",
              "      fghgf      ",
              "      g   g      ",
              "     eh   he     ",
              "      g   g      ",
              "      fghgf      ",
              "        e        ",
              "    d       d    ",
              "                 ",
              "                 ",
              "                 ",
              "                 "
            ],
            [
              "                 ",
              "                 ",
              "                 ",
              "                 ",
              "    d       d    ",
              "        e        ",
              "      jjjjj      ",
              "      j   j      ",
              "     ej   je     ",
              "      j   j      ",
              "      jjjjj      ",
              "        e        ",
              "    d       d    ",
              "                 ",
              "                 ",
              "                 ",
              "                 "
            ],
            [
              "                 ",
              "                 ",
              "                 ",
              "                 ",
              "    d       d    ",
              "        e        ",
              "      jjjjj      ",
              "      j   j      ",
              "     ej   je     ",
              "      j   j      ",
              "      jjjjj      ",
              "        e        ",
              "    d       d    ",
              "                 ",
              "                 ",
              "                 ",
              "                 "
            ],
            [
              "                 ",
              "                 ",
              "                 ",
              "                 ",
              "    d       d    ",
              "        e        ",
              "      jjjjj      ",
              "      j   j      ",
              "     ej   je     ",
              "      j   j      ",
              "      jjjjj      ",
              "        e        ",
              "    d       d    ",
              "                 ",
              "                 ",
              "                 ",
              "                 "
            ],
            [
              "                 ",
              "                 ",
              "                 ",
              "                 ",
              "    d       d    ",
              "        e        ",
              "      fghgf      ",
              "      g   g      ",
              "     eh   he     ",
              "      g   g      ",
              "      fghgf      ",
              "        e        ",
              "    d       d    ",
              "                 ",
              "                 ",
              "                 ",
              "                 "
            ],
            [
              "                 ",
              "                 ",
              "                 ",
              "      ddddd      ",
              "    dddiiiddd    ",
              "    diiieiiid    ",
              "   ddiaaaaaidd   ",
              "   diiafffaiid   ",
              "   dieafffaeid   ",
              "   diiafffaiid   ",
              "   ddiaaaaaidd   ",
              "    diiieiiid    ",
              "    dddiiiddd    ",
              "      ddddd      ",
              "                 ",
              "                 ",
              "                 "
            ]
          ]
        }
      ]
    });
  }
}
function astralGeneratorsSteamTurbineRecipes() {
  onEvent("recipes", (event) => {
    turbineSteamToEnergy(event);
  });
  function turbineSteamToEnergy(event) {
    event.custom({
      type: "custommachinery:custom_machine",
      machine: "astralgenerators:steam_turbine",
      time: 10,
      requirements: [
        {
          type: "custommachinery:fluid",
          fluid: "astralgenerators:steam",
          amount: 84e3,
          mode: "input"
        },
        {
          type: "custommachinery:energy",
          amount: 15e3,
          mode: "output"
        },
        {
          type: "custommachinery:structure",
          keys: {
            a: "techreborn:basic_machine_frame",
            b: "astralgenerators:pipe_casing",
            c: "astralgenerators:vent"
          },
          pattern: [
            ["aaaa", "aaaa", "aaaa", " m  "],
            ["aaaa", "abba", "abaa", " b  "],
            ["aaaa", "acca", "aaaa", "    "]
          ]
        }
      ]
    });
  }
}
function astralGeneratorsMixingRecipes() {
  onEvent("recipes", (event) => {
    event.recipes.create.mixing("astralgenerators:fusion_glass", ["techreborn:flint_dust", "techreborn:steel_dust", "minecraft:glass"]).heated();
  });
}
function astralGeneratorsShapedRecipes() {
  onEvent("recipes", (event) => {
    event.shaped(
      Item.of("custommachinery:custom_machine_item", {
        machine: "astralgenerators:assembler"
      }),
      ["aza", "ycy", "bxb"],
      {
        x: "create:belt_connector",
        y: "create:mechanical_arm",
        z: "techreborn:electronic_circuit",
        a: "techreborn:basic_machine_frame",
        b: "createaddition:gold_wire",
        c: "create:depot"
      }
    );
    event.shaped("astralgenerators:multiblock_projector", ["xxx", "xya", "xxx"], {
      x: "techreborn:basic_machine_frame",
      y: "create:integrated_circuit",
      a: "minecraft:light_blue_stained_glass_pane"
    });
    event.shaped("astralgenerators:superconducting_coil", ["xxx", "xyx", "xxx"], {
      y: "createastral:copper_heating_coil",
      x: "techreborn:silver_plate"
    });
    event.shaped(Item.of("astralgenerators:steel_frame", 2), ["yyy", "xxx", "xxx"], {
      y: "minecraft:air",
      x: "ad_astra:steel_ingot"
    });
    event.shaped("astralgenerators:pipe_casing", ["xxx", "xyx", "xxx"], {
      x: "ad_astra:steel_plate",
      y: "create:fluid_pipe"
    });
    event.shaped("astralgenerators:engine_intake_casing", ["xyx", "yzy", "xyx"], {
      x: "minecraft:air",
      y: "create:propeller",
      z: "ad_astra:steel_block"
    });
    event.shaped("astralgenerators:fusion_coil", ["aaa", "axa", "yzy"], {
      x: "techreborn:advanced_machine_frame",
      y: "createaddition:capacitor",
      z: "create:integrated_circuit",
      a: "createaddition:copper_spool"
    });
    event.shaped("astralgenerators:fusion_casing", ["xyx", "yzy", "xyx"], {
      x: "ad_astra:steel_plate",
      y: "techreborn:silver_plate",
      z: "astralgenerators:superconducting_coil"
    });
  });
}
function astralGeneratorsShapelessRecipes() {
  onEvent("recipes", (event) => {
    event.shapeless("astralgenerators:vent", ["ad_astra:vent", "techreborn:basic_machine_frame"]);
  });
}
function astralSignalsAnalogDecryptorRecipes() {
  onEvent("recipes", (event) => {
    event.recipes.custommachinery.custom_machine("astralsignals:analog_decryptor", 1200).requireItem(Item.of("astralsignals:data_drive_garbled")).produceItem(Item.of("astralsignals:data_drive_dormant_t1"));
  });
}
function astralSignalsDriveEraserRecipes() {
  onEvent("recipes", (event) => {
    const dataDrives = [
      "astralsignals:data_drive_garbled",
      "astralsignals:data_drive_dormant_t1",
      "astralsignals:data_drive_dormant_t2",
      "astralsignals:data_drive_dormant_t3",
      "astralsignals:data_drive_decrypted_13",
      "astralsignals:data_drive_decrypted_cat",
      "astralsignals:data_drive_decrypted_blocks",
      "astralsignals:data_drive_decrypted_chirp",
      "astralsignals:data_drive_decrypted_far",
      "astralsignals:data_drive_decrypted_mall",
      "astralsignals:data_drive_decrypted_mellohi",
      "astralsignals:data_drive_decrypted_stal",
      "astralsignals:data_drive_decrypted_strad",
      "astralsignals:data_drive_decrypted_ward",
      "astralsignals:data_drive_decrypted_11",
      "astralsignals:data_drive_decrypted_wait",
      "astralsignals:data_drive_decrypted_otherside",
      "astralsignals:data_drive_decrypted_purpleprison",
      "astralsignals:data_drive_decrypted_wolfgif",
      "astralsignals:data_drive_decrypted_desertheat",
      "astralsignals:data_drive_decrypted_memorandum",
      "astralsignals:data_drive_decrypted_papillons",
      "astralsignals:data_drive_decrypted_pigstep",
      "astralsignals:data_drive_decrypted_torus",
      "astralsignals:data_drive_decrypted_void"
    ];
    dataDrives.forEach((drive) => {
      event.recipes.custommachinery.custom_machine("astralsignals:drive_eraser", 40).requireItem(drive).produceItem(Item.of("astralsignals:data_drive_blank"));
    });
  });
}
function astralSignalsMPDecryptorRecipes() {
  onEvent("recipes", (event) => {
    event.recipes.custommachinery.custom_machine("astralsignals:mp_decryptor", 1200).requireEnergyPerTick(250).requireItem(Item.of("createastral:subatomic_ingot")).requireItem(Item.of("astralsignals:data_drive_dormant_t2")).produceItem(Item.of("astralsignals:data_drive_dormant_t3"));
  });
}
function astralSignalsPPDecryptorRecipes() {
  onEvent("recipes", (event) => {
    event.recipes.custommachinery.custom_machine("astralsignals:pp_decryptor", 1200).requireEnergyPerTick(50).requireItem(Item.of("astralsignals:data_drive_dormant_t1")).produceItem(Item.of("astralsignals:data_drive_dormant_t2"));
  });
}
function astralSignalsRadioTelescopeRecipes() {
  onEvent("recipes", (event) => {
    event.recipes.custommachinery.custom_machine("astralsignals:radio_telescope", 1200).mustSeeSky().requireItem(Item.of("astralsignals:data_drive_blank")).requireItem(Item.of("astralsignals:homing_signal_beacon")).produceItem(Item.of("astralsignals:data_drive_garbled")).produceItem(Item.of("astralsignals:dormant_signal_beacon"));
  });
}
const BUCKET = 81e3;
const GEM_BLOCK = 72900;
const SLIMEBALL = 20250;
const INGOT = 9e3;
const GEM = 8100;
const NUGGET = 1e3;
const mB = 81;
function astralSignalsSequencedAssemblyRecipes() {
  onEvent("recipes", (event) => {
    const assemblyRecipes = [
      {
        input: "astralsignals:stirring_signal_beacon",
        outputs: [
          Item.of("astralsignals:homing_signal_beacon").withChance(1 / 3),
          "astralsignals:dormant_signal_beacon"
        ],
        inter: "astralsignals:inter_stirring_signal_beacon"
      },
      {
        input: "astralsignals:data_drive_dormant_t1",
        outputs: [
          Item.of("astralsignals:data_drive_decrypted_13").withChance(1),
          Item.of("astralsignals:data_drive_decrypted_cat").withChance(1),
          Item.of("astralsignals:data_drive_decrypted_blocks").withChance(1),
          Item.of("astralsignals:data_drive_decrypted_chirp").withChance(1),
          Item.of("astralsignals:data_drive_decrypted_far").withChance(1),
          Item.of("astralsignals:data_drive_decrypted_mall").withChance(1),
          Item.of("astralsignals:data_drive_decrypted_mellohi").withChance(1),
          Item.of("astralsignals:data_drive_decrypted_stal").withChance(1),
          Item.of("astralsignals:data_drive_decrypted_strad").withChance(1),
          Item.of("astralsignals:data_drive_decrypted_ward").withChance(1),
          Item.of("astralsignals:data_drive_decrypted_11").withChance(1),
          Item.of("astralsignals:data_drive_decrypted_wait").withChance(1),
          Item.of("astralsignals:data_drive_decrypted_otherside").withChance(1)
        ],
        inter: "astralsignals:inter_data_drive_dormant_t1"
      },
      {
        input: "astralsignals:data_drive_dormant_t2",
        outputs: [
          Item.of("astralsignals:data_drive_decrypted_purpleprison").withChance(1),
          Item.of("astralsignals:data_drive_decrypted_pigstep").withChance(1),
          Item.of("astralsignals:data_drive_decrypted_desertheat").withChance(1),
          Item.of("astralsignals:data_drive_decrypted_memorandum").withChance(1)
        ],
        inter: "astralsignals:inter_data_drive_dormant_t2"
      },
      {
        input: "astralsignals:data_drive_dormant_t3",
        outputs: [
          Item.of("astralsignals:data_drive_decrypted_wolfgif").withChance(1),
          Item.of("astralsignals:data_drive_decrypted_papillons").withChance(1),
          Item.of("astralsignals:data_drive_decrypted_torus").withChance(1),
          Item.of("astralsignals:data_drive_decrypted_void").withChance(1)
        ],
        inter: "astralsignals:inter_data_drive_dormant_t3"
      }
    ];
    assemblyRecipes.forEach((inst) => {
      event.recipes.create.sequenced_assembly(inst.outputs, inst.input, [
        event.recipes.createFilling(inst.inter, [inst.inter, { fluid: "kubejs:shimmer", amount: BUCKET }]),
        event.recipes.createPressing(inst.inter, inst.inter)
      ]).transitionalItem(inst.inter).loops(1);
    });
  });
}
function astralSignalsSignalCoordinatorRecipes() {
  onEvent("recipes", (event) => {
    event.recipes.custommachinery.custom_machine("astralsignals:signal_coordinator", 4800).mustSeeSky().requireItem(Item.of("astralsignals:dormant_signal_beacon")).produceItem(Item.of("astralsignals:stirring_signal_beacon"));
  });
}
function astralSignalsVinylPrinterRecipes() {
  onEvent("recipes", (event) => {
    const printerRecipes = [
      {
        drive: "astralsignals:data_drive_decrypted_13",
        disc: "astralsignals:polyvinyl_sheet",
        output: "minecraft:music_disc_13"
      },
      {
        drive: "astralsignals:data_drive_decrypted_cat",
        disc: "astralsignals:polyvinyl_sheet",
        output: "minecraft:music_disc_cat"
      },
      {
        drive: "astralsignals:data_drive_decrypted_blocks",
        disc: "astralsignals:polyvinyl_sheet",
        output: "minecraft:music_disc_blocks"
      },
      {
        drive: "astralsignals:data_drive_decrypted_chirp",
        disc: "astralsignals:polyvinyl_sheet",
        output: "minecraft:music_disc_chirp"
      },
      {
        drive: "astralsignals:data_drive_decrypted_far",
        disc: "astralsignals:polyvinyl_sheet",
        output: "minecraft:music_disc_far"
      },
      {
        drive: "astralsignals:data_drive_decrypted_mall",
        disc: "astralsignals:polyvinyl_sheet",
        output: "minecraft:music_disc_mall"
      },
      {
        drive: "astralsignals:data_drive_decrypted_mellohi",
        disc: "astralsignals:polyvinyl_sheet",
        output: "minecraft:music_disc_mellohi"
      },
      {
        drive: "astralsignals:data_drive_decrypted_stal",
        disc: "astralsignals:polyvinyl_sheet",
        output: "minecraft:music_disc_stal"
      },
      {
        drive: "astralsignals:data_drive_decrypted_strad",
        disc: "astralsignals:polyvinyl_sheet",
        output: "minecraft:music_disc_strad"
      },
      {
        drive: "astralsignals:data_drive_decrypted_ward",
        disc: "astralsignals:polyvinyl_sheet",
        output: "minecraft:music_disc_ward"
      },
      {
        drive: "astralsignals:data_drive_decrypted_11",
        disc: "astralsignals:polyvinyl_sheet",
        output: "minecraft:music_disc_11"
      },
      {
        drive: "astralsignals:data_drive_decrypted_wait",
        disc: "astralsignals:polyvinyl_sheet",
        output: "minecraft:music_disc_wait"
      },
      {
        drive: "astralsignals:data_drive_decrypted_otherside",
        disc: "astralsignals:polyvinyl_sheet",
        output: "minecraft:music_disc_otherside"
      },
      {
        drive: "astralsignals:data_drive_decrypted_pigstep",
        disc: "astralsignals:shimmer_polyvinyl_sheet",
        output: "minecraft:music_disc_pigstep"
      },
      {
        drive: "astralsignals:data_drive_decrypted_desertheat",
        disc: "astralsignals:shimmer_polyvinyl_sheet",
        output: "yttr:music_disc_desert_heat"
      },
      {
        drive: "astralsignals:data_drive_decrypted_memorandum",
        disc: "astralsignals:shimmer_polyvinyl_sheet",
        output: "yttr:music_disc_memorandum"
      },
      {
        drive: "astralsignals:data_drive_decrypted_purpleprison",
        disc: "astralsignals:shimmer_polyvinyl_sheet",
        output: "astraladditions:disc_purple_prison"
      },
      {
        drive: "astralsignals:data_drive_decrypted_wolfgif",
        disc: "astralsignals:yttric_polyvinyl_sheet",
        output: "astraladditions:disc_astral_lakes_remix"
      },
      {
        drive: "astralsignals:data_drive_decrypted_papillons",
        disc: "astralsignals:yttric_polyvinyl_sheet",
        output: "yttr:music_disc_papillons"
      },
      {
        drive: "astralsignals:data_drive_decrypted_void",
        disc: "astralsignals:yttric_polyvinyl_sheet",
        output: "yttr:music_disc_void"
      },
      {
        drive: "astralsignals:data_drive_decrypted_torus",
        disc: "astralsignals:yttric_polyvinyl_sheet",
        output: "yttr:music_disc_torus"
      }
    ];
    printerRecipes.forEach((print) => {
      event.recipes.custommachinery.custom_machine("astralsignals:vinyl_printer", 200).requireItem(print.drive).requireItem(print.disc).produceItem(Item.of("astralsignals:data_drive_blank")).produceItem(print.output);
    });
  });
}
function astralAdditionsChromaticVacuumRecipes() {
  onEvent("recipes", (event) => {
    const chromaticVacuumRecipes = [
      {
        block: "yttr:continuous_platform",
        loot: "createastral:prismatic_crystal",
        result: "minecraft:ice"
      },
      {
        block: "minecraft:grass_block",
        loot: "minecraft:green_dye",
        result: "minecraft:dirt"
      },
      {
        block: "yttr:nethertuff",
        loot: "minecraft:netherrack",
        result: "minecraft:tuff"
      },
      {
        block: "createastral:charcoal_block",
        loot: "techreborn:charcoal_dust",
        result: "minecraft:coal_block"
      }
    ];
    chromaticVacuumRecipes.forEach((recipe) => {
      event.custom({
        type: "astraladditions:chromatic_vacuum",
        ingredient: {
          item: recipe.block
        },
        output: {
          item: recipe.loot
        },
        remainder: {
          item: recipe.result
        }
      });
    });
  });
  onEvent("recipes", (event) => {
    const colours = [
      "orange",
      "magenta",
      "light_blue",
      "yellow",
      "lime",
      "pink",
      "gray",
      "light_gray",
      "cyan",
      "purple",
      "blue",
      "brown",
      "green",
      "red",
      "black"
    ];
    colours.forEach((colour) => {
      event.custom({
        type: "astraladditions:chromatic_vacuum",
        ingredient: {
          tag: `chipped:${colour}_wool`
        },
        output: {
          item: `minecraft:${colour}_dye`
        },
        remainder: {
          item: "minecraft:white_wool"
        }
      });
    });
    colours.forEach((colour) => {
      event.custom({
        type: "astraladditions:chromatic_vacuum",
        ingredient: {
          tag: `chipped:${colour}_terracotta`
        },
        output: {
          item: `minecraft:${colour}_dye`
        },
        remainder: {
          item: "minecraft:terracotta"
        }
      });
    });
    colours.forEach((colour) => {
      event.custom({
        type: "astraladditions:chromatic_vacuum",
        ingredient: {
          tag: `chipped:${colour}_concrete`
        },
        output: {
          item: `minecraft:${colour}_dye`
        },
        remainder: {
          item: "minecraft:white_concrete"
        }
      });
    });
  });
}
function astralAdditionsDesizerRecipes() {
  onEvent("recipes", (event) => {
    desizer27SingleType(event);
    event.custom({
      type: "astraladditions:desizer",
      ingredients: [
        { item: "minecraft:bedrock" },
        { item: "minecraft:bedrock" },
        { item: "minecraft:bedrock" },
        { item: "minecraft:bedrock" },
        { item: "yttr:ultrapure_carbon_block" },
        { item: "minecraft:bedrock" },
        { item: "minecraft:bedrock" },
        { item: "minecraft:bedrock" },
        { item: "minecraft:bedrock" },
        { item: "minecraft:bedrock" },
        { item: "yttr:ultrapure_carbon_block" },
        { item: "minecraft:bedrock" },
        { item: "yttr:ultrapure_carbon_block" },
        { item: "yttr:ultrapure_carbon_block" },
        { item: "yttr:ultrapure_carbon_block" },
        { item: "minecraft:bedrock" },
        { item: "yttr:ultrapure_carbon_block" },
        { item: "minecraft:bedrock" },
        { item: "minecraft:bedrock" },
        { item: "minecraft:bedrock" },
        { item: "minecraft:bedrock" },
        { item: "minecraft:bedrock" },
        { item: "yttr:ultrapure_carbon_block" },
        { item: "minecraft:bedrock" },
        { item: "minecraft:bedrock" },
        { item: "minecraft:bedrock" },
        { item: "minecraft:bedrock" }
      ],
      output: {
        item: "yttr:compressed_ultrapure_carbon_block"
      }
    });
    event.custom({
      type: "astraladditions:desizer",
      ingredients: [
        { item: "createastral:ultramatter" },
        { item: "createastral:ultramatter" },
        { item: "createastral:ultramatter" },
        { item: "createastral:ultramatter" },
        { item: "minecraft:bedrock" },
        { item: "createastral:ultramatter" },
        { item: "createastral:ultramatter" },
        { item: "createastral:ultramatter" },
        { item: "createastral:ultramatter" },
        { item: "createastral:ultramatter" },
        { item: "minecraft:bedrock" },
        { item: "createastral:ultramatter" },
        { item: "minecraft:bedrock" },
        { item: "createastral:contained_end" },
        { item: "minecraft:bedrock" },
        { item: "createastral:ultramatter" },
        { item: "minecraft:bedrock" },
        { item: "createastral:ultramatter" },
        { item: "createastral:ultramatter" },
        { item: "createastral:ultramatter" },
        { item: "createastral:ultramatter" },
        { item: "createastral:ultramatter" },
        { item: "minecraft:bedrock" },
        { item: "createastral:ultramatter" },
        { item: "createastral:ultramatter" },
        { item: "createastral:ultramatter" },
        { item: "createastral:ultramatter" }
      ],
      output: {
        item: "yttr:root_of_continuity"
      }
    });
    event.custom({
      type: "astraladditions:desizer",
      ingredients: [
        { item: "createastral:sturdy_sheet_block" },
        { item: "createastral:sturdy_sheet_block" },
        { item: "createastral:sturdy_sheet_block" },
        { item: "createastral:sturdy_sheet_block" },
        { item: "yttr:glassy_void" },
        { item: "createastral:sturdy_sheet_block" },
        { item: "createastral:sturdy_sheet_block" },
        { item: "createastral:sturdy_sheet_block" },
        { item: "createastral:sturdy_sheet_block" },
        { item: "createastral:sturdy_sheet_block" },
        { item: "yttr:glassy_void" },
        { item: "createastral:sturdy_sheet_block" },
        { item: "yttr:glassy_void" },
        { item: "minecraft:bedrock" },
        { item: "yttr:glassy_void" },
        { item: "createastral:sturdy_sheet_block" },
        { item: "yttr:glassy_void" },
        { item: "createastral:sturdy_sheet_block" },
        { item: "createastral:sturdy_sheet_block" },
        { item: "createastral:sturdy_sheet_block" },
        { item: "createastral:sturdy_sheet_block" },
        { item: "createastral:sturdy_sheet_block" },
        { item: "yttr:glassy_void" },
        { item: "createastral:sturdy_sheet_block" },
        { item: "createastral:sturdy_sheet_block" },
        { item: "createastral:sturdy_sheet_block" },
        { item: "createastral:sturdy_sheet_block" }
      ],
      output: {
        item: "createastral:sturdy_cage"
      }
    });
  });
  function desizer27SingleType(event) {
    const desizer27Recipes = [
      {
        input: { item: "farmersdelight:onion_crate" },
        output: { item: "astralfoods:compressed_onion" }
      },
      {
        input: { item: "minecraft:moss_block" },
        output: { item: "createastral:charcoal_block" }
      },
      {
        input: { item: "minecraft:dirt" },
        output: { item: "createastral:charcoal_block" }
      },
      {
        input: { item: "minecraft:dried_kelp_block" },
        output: { item: "createastral:charcoal_block" }
      },
      {
        input: { item: "minecraft:soul_soil" },
        output: { item: "minecraft:coal_block" }
      },
      {
        input: { item: "minecraft:coal_block" },
        output: { item: "minecraft:diamond_block" }
      }
    ];
    desizer27Recipes.forEach((recipe) => {
      event.custom({
        type: "astraladditions:desizer",
        ingredients: Array(27).fill(recipe.input),
        // Here you go :)
        output: recipe.output
      });
    });
  }
}
function astralAdditionsShimmerTransmutationRecipes() {
  onEvent("recipes", (event) => {
    const shimmerTransmutationRecipes = [
      {
        input: "tconstruct:earth_slime_grass_seeds",
        output: "tconstruct:ender_slime_grass_seeds",
        stack64: true
      },
      {
        input: "minecraft:sea_lantern",
        output: "minecraft:glowstone",
        stack64: true
      },
      {
        input: "techreborn:lead_ingot",
        output: "minecraft:glowstone",
        stack64: true
      },
      {
        input: "minecraft:green_dye",
        output: "minecraft:red_dye",
        stack64: true
      },
      {
        input: "minecraft:red_dye",
        output: "minecraft:green_dye",
        stack64: true
      },
      {
        input: "minecraft:yellow_dye",
        output: "minecraft:blue_dye",
        stack64: true
      },
      {
        input: "minecraft:blue_dye",
        output: "minecraft:yellow_dye",
        stack64: true
      },
      {
        input: "minecraft:green_dye",
        output: "minecraft:red_dye",
        stack64: true
      },
      {
        input: "minecraft:lily_of_the_valley",
        output: "astraladditions:shimmer_lily",
        stack64: true
      },
      {
        input: "astralfoods:chocolate_ice_cream",
        output: "astralfoods:ambrosia",
        stack64: false
      }
    ];
    shimmerTransmutationRecipes.forEach((recipe) => {
      event.custom({
        type: "astraladditions:shimmer_transmute",
        input: {
          item: recipe.input,
          count: 1
        },
        output: [
          {
            item: recipe.output,
            count: 1
          }
        ]
      });
      if (recipe.stack64) {
        event.custom({
          type: "astraladditions:shimmer_transmute",
          input: {
            item: recipe.input,
            count: 64
          },
          output: [
            {
              item: recipe.output,
              count: 64
            }
          ]
        });
      }
    });
  });
}
function automobilityEngineRecipes() {
  onEvent("recipes", (event) => {
    const engineRecipes = [
      {
        input: [
          { item: "create:large_cogwheel" },
          { item: "create:electron_tube" },
          { item: "create:copper_casing" },
          { item: "create:smart_fluid_pipe" },
          { item: "create:gearshift" },
          { item: "create:clutch" }
        ],
        output: "automobility:copper",
        sortnum: 1
      },
      {
        input: [
          { item: "create:integrated_circuit" },
          { item: "minecraft:diamond_block" },
          { item: "createaddition:alternator" },
          { item: "createaddition:electric_motor" },
          { item: "create:electron_tube" },
          { item: "minecraft:diamond_block" },
          { item: "create:rotation_speed_controller" },
          { item: "create:mechanical_arm" }
        ],
        output: "automobility:diamond",
        sortnum: 4
      },
      {
        input: [
          { item: "create:integrated_circuit" },
          { item: "create:brass_casing" },
          { item: "minecraft:gold_block" },
          { item: "techreborn:basic_machine_frame" },
          { item: "create:cogwheel" },
          { item: "minecraft:gold_block" },
          { item: "create:rotation_speed_controller" },
          { item: "create:mechanical_arm" }
        ],
        output: "automobility:gold",
        sortnum: 3
      },
      {
        input: [
          { item: "create:integrated_circuit" },
          { item: "minecraft:iron_block" },
          { item: "techreborn:basic_machine_frame" },
          { item: "create:cogwheel" },
          { item: "create:gearshift" },
          { item: "create:clutch" }
        ],
        output: "automobility:iron",
        sortnum: 2
      },
      {
        input: [
          { item: "create:large_cogwheel" },
          { item: "minecraft:coal_block" },
          { item: "minecraft:furnace" },
          { item: "create:cogwheel" },
          { item: "create:gearshift" },
          { item: "create:clutch" }
        ],
        output: "automobility:stone",
        sortnum: 0
      }
    ];
    engineRecipes.forEach((recipe) => {
      event.custom({
        type: "automobility:auto_mechanic_table",
        category: "automobility:engines",
        sortnum: recipe.sortnum,
        ingredients: recipe.input,
        result: { item: "automobility:automobile_engine", component: recipe.output }
      });
    });
  });
}
function createCompactingRecipes() {
  onEvent("recipes", (event) => {
    lakyCompactingRecipes(event);
    const compactingRecipes = [
      {
        output: ["minecraft:end_stone"],
        inputs: [
          "yttr:yttrium_dust",
          Item.of("techreborn:dark_ashes_dust", 3),
          { fluid: "tconstruct:molten_ender", amount: 125 * mB }
        ]
      },
      {
        output: ["ae2:fluix_pearl"],
        inputs: [Item.of("createastral:shimmer_marimo", 4), "ae2:ender_dust"]
      },
      {
        output: ["techreborn:saltpeter_dust", { fluid: "minecraft:water", amount: 500 * mB }],
        inputs: [Item.of("createastral:snowy_marimo", 4), Item.of("astraladditions:bulba_root", 4)]
      },
      {
        output: ["techreborn:saltpeter_dust", { fluid: "minecraft:water", amount: 500 * mB }],
        inputs: [Item.of("createastral:snowy_marimo", 4), "minecraft:seagrass"]
      },
      {
        output: "farmersdelight:organic_compost",
        inputs: ["minecraft:coarse_dirt", "create:tree_fertilizer", "createastral:pure_biomatter"]
      },
      {
        output: "farmersdelight:organic_compost",
        inputs: ["minecraft:rooted_dirt", "minecraft:bone_meal", { fluid: "techreborn:potassium", amount: 250 * mB }]
      },
      {
        output: "astraladditions:enderrack",
        inputs: ["astraladditions:ender_sprouts", Item.of("createastral:ender_marimo", 2)]
      },
      {
        output: "minecraft:budding_amethyst",
        inputs: [
          Item.of("minecraft:amethyst_cluster", 6),
          "tconstruct:amethyst_bronze_block",
          Item.of(Item.of("createastral:shimmer_marimo", 2), 6)
        ]
      },
      {
        output: "ad_astra:permafrost",
        inputs: ["minecraft:warped_roots", Item.of("createastral:snowy_marimo", 2)]
      },
      {
        output: "minecraft:rooted_dirt",
        inputs: ["minecraft:grass", Item.of("createastral:marimo", 2)]
      },
      {
        output: "minecraft:grass",
        inputs: ["minecraft:seagrass"]
      },
      {
        output: { fluid: "astraladditions:sputum", amount: 500 * mB },
        inputs: [
          Item.of("createastral:ender_marimo", 4),
          "techreborn:uu_matter",
          { fluid: "tconstruct:molten_ender", amount: 250 * mB }
        ]
      },
      {
        output: { fluid: "tconstruct:molten_ender", amount: 250 * mB },
        inputs: [
          Item.of("createastral:moonset_marimo", 4),
          Item.of("ae2:fluix_dust", 4),
          { fluid: "tconstruct:ender_slime", amount: 500 * mB }
        ]
      },
      {
        output: "astraladditions:moonset_crystal",
        inputs: [Item.of("createastral:moonset_marimo", 8), Item.of("ae2:ender_dust", 2)]
      },
      {
        output: "minecraft:chorus_flower",
        inputs: [Item.of("createastral:moonset_marimo", 8), "minecraft:chorus_fruit"]
      },
      {
        output: { fluid: "minecraft:water", amount: 500 * mB },
        inputs: ["createastral:marimo"]
      },
      {
        output: "minecraft:calcite",
        inputs: ["minecraft:gravel", Item.of("minecraft:bone_meal", 2)]
      },
      {
        output: "minecraft:calcite",
        inputs: ["minecraft:gravel", { fluid: "milk:still_milk", amount: 500 * mB }]
      },
      {
        output: "create:scoria",
        inputs: ["minecraft:soul_soil", { fluid: "create:chocolate", amount: 50 * mB }]
      },
      {
        output: "create:scoria",
        inputs: ["minecraft:soul_sand", { fluid: "create:chocolate", amount: 50 * mB }]
      },
      {
        output: "create:limestone",
        inputs: ["minecraft:cobblestone", { fluid: "milk:still_milk", amount: 100 * mB }]
      },
      {
        output: "minecraft:tuff",
        inputs: [Item.of("minecraft:iron_nugget", 1), "minecraft:cobblestone", "techreborn:andesite_dust"]
      },
      {
        output: "create:blaze_cake_base",
        inputs: [Item.of("ad_astra:mars_sand", 2), "minecraft:sugar"]
      },
      {
        output: "create:blaze_cake_base",
        inputs: ["ad_astra:mercury_cobblestone", "minecraft:sugar"]
      },
      {
        output: "create:blaze_cake_base",
        inputs: [Item.of("create:cinder_flour", 3), "minecraft:sugar"]
      },
      {
        output: "minecraft:lapis_lazuli",
        inputs: [
          Item.of("techreborn:lazurite_dust", 3),
          Item.of("minecraft:iron_nugget", 2),
          { fluid: "minecraft:lava", amount: BUCKET / 30 }
        ]
      },
      {
        output: "minecraft:granite",
        inputs: ["minecraft:diorite", "minecraft:flint", { fluid: "minecraft:lava", amount: 100 * mB }]
      },
      {
        output: "create:andesite_casing",
        inputs: ["#c:stripped_logs", { fluid: "kubejs:compound_mixture", amount: INGOT }]
      },
      {
        output: Item.of("create:railway_casing", 2),
        inputs: [
          "create:sturdy_sheet",
          "create:andesite_casing",
          {
            fluid: "tconstruct:molten_obsidian",
            amount: mB * 50
          }
        ]
      },
      {
        output: "minecraft:prismarine_shard",
        inputs: ["#c:coral_plants"]
      },
      {
        output: "minecraft:prismarine_shard",
        inputs: ["#c:coral_fans"]
      },
      {
        output: "techreborn:diamond_nugget",
        inputs: [Item.of("minecraft:prismarine_crystals", 8)]
      },
      {
        output: "minecraft:andesite",
        inputs: [Item.of("techreborn:andesite_dust", 4)]
      },
      {
        output: "minecraft:granite",
        inputs: [Item.of("techreborn:granite_dust", 4)]
      },
      {
        output: "minecraft:diorite",
        inputs: [Item.of("techreborn:diorite_dust", 4)]
      },
      {
        output: "minecraft:calcite",
        inputs: [Item.of("techreborn:calcite_dust", 4)]
      },
      {
        output: "minecraft:basalt",
        inputs: [Item.of("techreborn:basalt_dust", 4)]
      },
      {
        output: "minecraft:andesite",
        inputs: [Item.of("techreborn:andesite_dust", 2), Item.of("minecraft:basalt", 2)]
      },
      {
        output: "minecraft:dripstone_block",
        inputs: [Item.of("minecraft:granite", 2), Item.of("minecraft:slime_ball", 2)]
      },
      {
        output: "minecraft:cobbled_deepslate",
        inputs: [Item.of("minecraft:flint", 3), "minecraft:gravel"]
      },
      {
        output: "createastral:compressed_experience_block",
        inputs: [Item.of("create:experience_block", 9)]
      },
      {
        output: ["minecraft:clay", "minecraft:sponge"],
        inputs: ["minecraft:wet_sponge", "minecraft:sand"]
      },
      {
        output: { fluid: "kubejs:white_grape_juice", amount: 6750 },
        inputs: ["vinery:white_grape"]
      },
      {
        output: { fluid: "kubejs:red_grape_juice", amount: 6750 },
        inputs: ["vinery:red_grape"]
      },
      {
        output: Item.of("createastral:gyrodyne_blueprint", 2),
        inputs: ["createastral:gyrodyne_blueprint", "create:empty_schematic", Item.of("minecraft:black_dye", 2)]
      },
      {
        output: Item.of("createastral:biplane_blueprint", 2),
        inputs: ["createastral:biplane_blueprint", "create:empty_schematic", Item.of("minecraft:black_dye", 2)]
      },
      {
        output: Item.of("createastral:airship_blueprint", 2),
        inputs: ["createastral:airship_blueprint", "create:empty_schematic", Item.of("minecraft:black_dye", 2)]
      },
      {
        output: Item.of("createastral:quadrocopter_blueprint", 2),
        inputs: ["createastral:quadrocopter_blueprint", "create:empty_schematic", Item.of("minecraft:black_dye", 2)]
      },
      //mushroom block recipes
      {
        output: "minecraft:brown_mushroom_block",
        inputs: [Item.of("minecraft:brown_mushroom", 4)]
      },
      {
        output: "minecraft:red_mushroom_block",
        inputs: [Item.of("minecraft:red_mushroom", 4)]
      },
      {
        //nametag recipe
        output: "minecraft:name_tag",
        inputs: ["farmersdelight:canvas", "minecraft:ink_sac", "createaddition:iron_wire"]
      },
      {
        output: "minecraft:andesite",
        inputs: [Item.of("minecraft:flint", 2), "minecraft:gravel", { fluid: "minecraft:lava", amount: 100 * mB }],
        heat: "heated"
      },
      {
        output: "createastral:steel_helmet",
        inputs: [Item.of("createastral:sturdy_helmet").ignoreNBT(), Item.of("techreborn:steel_dust", 6)],
        heat: "heated"
      },
      {
        output: "createastral:steel_chestplate",
        inputs: [Item.of("createastral:sturdy_chestplate").ignoreNBT(), Item.of("techreborn:steel_dust", 2)],
        heat: "heated"
      },
      {
        output: "createastral:steel_leggings",
        inputs: [Item.of("createastral:sturdy_leggings").ignoreNBT(), Item.of("techreborn:steel_dust", 8)],
        heat: "heated"
      },
      {
        output: "createastral:steel_boots",
        inputs: [Item.of("createastral:sturdy_boots").ignoreNBT(), Item.of("techreborn:steel_dust", 5)],
        heat: "heated"
      },
      {
        output: ["ae2:silicon_press", "ae2:printed_silicon"],
        inputs: [
          "ae2:silicon_press",
          {
            fluid: "techreborn:silicon",
            amount: INGOT
          }
        ],
        heat: "heated"
      },
      {
        output: ["ae2:silicon_press", "ae2:silicon_press"],
        inputs: ["ae2:silicon_press", "minecraft:iron_block"],
        heat: "heated"
      },
      {
        output: ["ae2:logic_processor_press", "ae2:printed_logic_processor"],
        inputs: [
          "ae2:logic_processor_press",
          {
            fluid: "tconstruct:molten_gold",
            amount: INGOT
          }
        ],
        heat: "heated"
      },
      {
        output: ["ae2:logic_processor_press", "ae2:logic_processor_press"],
        inputs: ["ae2:logic_processor_press", "minecraft:iron_block"],
        heat: "heated"
      },
      {
        output: ["ae2:engineering_processor_press", "ae2:printed_engineering_processor"],
        inputs: [
          "ae2:engineering_processor_press",
          {
            fluid: "tconstruct:molten_diamond",
            amount: GEM
          }
        ],
        heat: "heated"
      },
      {
        output: ["ae2:engineering_processor_press", "ae2:engineering_processor_press"],
        inputs: ["ae2:engineering_processor_press", "minecraft:iron_block"],
        heat: "heated"
      },
      {
        output: ["ae2:calculation_processor_press", "ae2:printed_calculation_processor"],
        inputs: [
          "ae2:calculation_processor_press",
          {
            fluid: "kubejs:molten_desh",
            amount: INGOT
          }
        ],
        heat: "heated"
      },
      {
        output: "techreborn:carbon_fiber",
        inputs: [{ fluid: "techreborn:carbon", amount: 10125 }],
        heat: "heated"
      },
      {
        output: ["ae2:calculation_processor_press", "ae2:calculation_processor_press"],
        inputs: ["ae2:calculation_processor_press", "minecraft:iron_block"],
        heat: "heated"
      },
      {
        output: ["ae2:ender_dust"],
        inputs: ["minecraft:ender_pearl"],
        heat: "heated"
      },
      {
        output: ["ae2:certus_quartz_dust"],
        inputs: ["#c:certus_quartz"]
      },
      {
        output: "minecraft:shulker_shell",
        inputs: ["ae2:ender_dust", Item.of("minecraft:purple_dye", 8)],
        heat: "heated"
      },
      {
        output: "createastral:olivine_sheet",
        inputs: [Item.of("techreborn:olivine_dust", 6)],
        heat: "superheated"
      },
      {
        output: "yttr:promethium_lump",
        inputs: [
          Item.of("yttr:promethium_speck", 4),
          "yttr:neodymium_dust",
          { fluid: "kubejs:hellfire", amount: 500 * mB }
        ],
        heat: "superheated"
      },
      {
        output: ["yttr:armor_plating", "yttr:bedrock_shard"],
        inputs: [
          Item.of("yttr:yttrium_ingot", 8),
          "yttr:bedrock_shard",
          { fluid: "kubejs:hellfire", amount: 100 * mB }
        ],
        heat: "superheated"
      },
      {
        output: "yttr:promethium_glob",
        inputs: [
          Item.of("yttr:promethium_lump", 2),
          "yttr:neodymium_disc",
          { fluid: "kubejs:hellfire", amount: 1e3 * mB }
        ],
        heat: "superheated"
      },
      {
        output: "create:lapis_sheet",
        inputs: [Item.of("techreborn:lazurite_dust", 6)],
        heat: "heated"
      },
      {
        output: "yttr:continuous_platform",
        inputs: [
          { fluid: "kubejs:aurorite", amount: 100 * mB },
          { fluid: "kubejs:shimmer", amount: 100 * mB }
        ],
        heat: "heated"
      },
      {
        output: "ad_astra:sky_stone",
        inputs: [Item.of("ad_astra:moon_stone", 5), "ae2:certus_quartz_dust"],
        heat: "heated"
      },
      {
        output: "createastral:star_shard",
        inputs: [{ fluid: "kubejs:molten_radiance", amount: 100 * mB }],
        heat: "heated"
      },
      {
        output: "ad_astra:permafrost",
        inputs: [Item.of("ad_astra:glacio_stone", 9)],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:purpur_block", 4),
        inputs: [Item.of("ad_astra:strophar_cap", 4), { fluid: "minecraft:water", amount: 100 * mB }]
      },
      {
        output: [
          "minecraft:sponge",
          Item.of("minecraft:cod").withChance(0.25),
          Item.of("minecraft:salmon").withChance(0.25),
          Item.of("minecraft:tropical_fish").withChance(0.2),
          Item.of("minecraft:pufferfish").withChance(0.15),
          Item.of("minecraft:ink_sac").withChance(0.15)
        ],
        inputs: "minecraft:wet_sponge"
      },
      {
        output: "ad_astra:ostrum_ingot",
        inputs: {
          fluid: "kubejs:molten_ostrum",
          amount: INGOT
        }
      },
      {
        output: "ad_astra:ostrum_nugget",
        inputs: {
          fluid: "kubejs:molten_ostrum",
          amount: NUGGET
        }
      },
      {
        output: "createdeco:cast_iron_ingot",
        inputs: {
          fluid: "createbigcannons:molten_cast_iron",
          amount: INGOT
        }
      },
      {
        output: "createdeco:cast_iron_nugget",
        inputs: {
          fluid: "createbigcannons:molten_cast_iron",
          amount: NUGGET
        }
      },
      {
        output: {
          amount: BUCKET / 4,
          fluid: "tconstruct:earth_slime"
        },
        inputs: "minecraft:slime_ball"
      },
      {
        output: "astralfoods:blaze_fries",
        inputs: ["astralfoods:blaze_rods", { fluid: "createaddition:seed_oil", amount: 100 * mB }]
      },
      {
        output: "astralfoods:fried_cod",
        inputs: ["minecraft:cod", { fluid: "createaddition:seed_oil", amount: 100 * mB }]
      }
    ];
    compactingRecipes.forEach((recipe) => {
      event.recipes.createCompacting(recipe.output, recipe.inputs).heatRequirement(recipe.heat ?? "");
    });
  });
  function lakyCompactingRecipes(event) {
    const recipeList = [
      {
        output: "create:ochrum",
        inputs: [
          "minecraft:dripstone_block",
          "minecraft:cobblestone",
          { fluid: "create:honey", amount: 100 * mB },
          "minecraft:yellow_dye"
        ]
      },
      {
        output: "create:crimsite",
        inputs: [
          "minecraft:tuff",
          "minecraft:cobblestone",
          { fluid: "tconstruct:blood", amount: 100 * mB },
          "minecraft:red_dye"
        ]
      },
      {
        output: "create:veridium",
        inputs: [
          "minecraft:cobblestone",
          "minecraft:slime_ball",
          { fluid: "minecraft:lava", amount: 100 * mB },
          "minecraft:green_dye"
        ]
      },
      {
        output: "create:asurine",
        inputs: [
          "minecraft:prismarine",
          "minecraft:kelp",
          { fluid: "minecraft:water", amount: 100 * mB },
          "minecraft:blue_dye"
        ]
      },
      {
        output: "create:scorchia",
        inputs: [
          "minecraft:basalt",
          "ad_astra:moon_sand",
          { fluid: "tconstruct:blazing_blood", amount: 50 * mB },
          "minecraft:black_dye"
        ]
      }
    ];
    recipeList.forEach((entry) => {
      event.recipes.create.compacting(entry.output, entry.inputs).processingTime(400);
    });
  }
}
function createAdditionChargingRecipes() {
  onEvent("recipes", (event) => {
    const chargingRecipes = [
      {
        input: ["kubejs:molten_desh_bucket", 1],
        output: ["tconstruct:molten_electrum_bucket", 1],
        energy: 4e3
      },
      {
        input: ["techreborn:synthetic_redstone_crystal", 1],
        output: ["minecraft:redstone", 5],
        energy: 5e3
      },
      {
        input: ["createastral:golden_pin", 1],
        output: ["createastral:electrified_pin", 1],
        energy: 800
      },
      {
        input: ["astraladditions:shimmer_heart", 1],
        output: ["astraladditions:awakened_shimmer_heart", 1],
        energy: 800
      },
      {
        input: ["yttr:neodymium_dust", 1],
        output: ["yttr:neodymium_disc", 1],
        energy: 5e3
      },
      {
        input: ["minecraft:tuff", 1],
        // add a use for ashes, making tuff much more relevant if you can spare the power
        output: ["techreborn:ashes_dust", 1],
        energy: 1e4
      }
    ];
    chargingRecipes.forEach((recipe) => {
      event.custom({
        type: "createaddition:charging",
        input: {
          item: recipe.input[0],
          count: recipe.input[1]
        },
        result: {
          item: recipe.output[0],
          count: recipe.output[1]
        },
        energy: recipe.energy
      });
    });
  });
}
function createAdditionLiquidBurningRecipes() {
  onEvent("recipes", (event) => {
    const liquidBurningRecipes = [
      {
        input: { fluid: "createaddition:bioethanol", amount: BUCKET },
        burnTime: 12e3,
        superheated: false
      },
      {
        input: { fluid: "minecraft:lava", amount: BUCKET },
        burnTime: 6e3,
        superheated: false
      },
      {
        input: { fluid: "createaddition:seed_oil", amount: BUCKET },
        burnTime: 6e3,
        superheated: false
      },
      {
        input: { fluid: "tconstruct:blazing_blood", amount: BUCKET },
        burnTime: 18e3,
        superheated: false
      },
      {
        input: { fluid: "kubejs:hellfire", amount: BUCKET / 4 },
        burnTime: 2400,
        superheated: true
      }
    ];
    liquidBurningRecipes.forEach((recipe) => {
      event.custom({
        type: "createaddition:liquid_burning",
        input: recipe.input,
        burnTime: recipe.burnTime,
        superheated: recipe.superheated
      });
    });
  });
}
function createAdditionRollingRecipes() {
  onEvent("recipes", (event) => {
    tagRecipes(event);
    itemRecipes(event);
  });
  function tagRecipes(event) {
    [
      {
        tag: "c:nuggets/gold",
        output: "createastral:golden_pin",
        count: 1
      }
    ].forEach((recipe) => {
      event.custom({
        type: "createaddition:rolling",
        input: {
          tag: recipe.tag
        },
        result: {
          item: recipe.output,
          count: recipe.count
        }
      });
    });
  }
  function itemRecipes(event) {
    [
      {
        input: "ad_astra:calorite_nugget",
        output: "createastral:calorite_pin",
        count: 1
      }
    ].forEach((recipe) => {
      event.custom({
        type: "createaddition:rolling",
        input: {
          tag: recipe.input
        },
        result: {
          item: recipe.output,
          count: recipe.count
        }
      });
    });
  }
}
function createBigCannonsMeltingRecipes() {
  onEvent("recipes", (event) => {
    [
      {
        itemInput: ["createastral:bronze_block", 1],
        fluidOutput: ["tconstruct:molten_bronze", BUCKET],
        time: 1620,
        heat: "heated"
      },
      {
        itemInput: ["createastral:bronze_ingot", 1],
        fluidOutput: ["tconstruct:molten_bronze", INGOT],
        time: 180,
        heat: "heated"
      },
      {
        itemInput: ["techreborn:bronze_nugget", 1],
        fluidOutput: ["tconstruct:molten_bronze", NUGGET],
        time: 20,
        heat: "heated"
      },
      {
        itemInput: ["createbigcannons:bronze_scrap", 1],
        fluidOutput: ["tconstruct:molten_bronze", NUGGET],
        time: 20,
        heat: "heated"
      },
      {
        itemInput: ["minecraft:coal", 8],
        fluidOutput: ["techreborn:carbon", BUCKET / 8],
        time: 300,
        heat: "heated"
      },
      {
        itemInput: ["yttr:ultrapure_carbon", 1],
        fluidOutput: ["techreborn:carbon", BUCKET / 4],
        time: 300,
        heat: "superheated"
      },
      {
        itemInput: ["createastral:ender_mush", 1],
        fluidOutput: ["kubejs:metabolic_broth", BUCKET],
        time: 750,
        heat: "superheated"
      },
      {
        itemInput: ["createastral:ender_mush", 1],
        fluidOutput: ["kubejs:metabolic_broth", BUCKET],
        time: 750,
        heat: "superheated"
      },
      {
        itemInput: ["ad_astra:ostrum_block", 1],
        fluidOutput: ["kubejs:molten_ostrum", BUCKET],
        time: 1620,
        heat: "heated"
      },
      {
        itemInput: ["ad_astra:ostrum_ingot", 1],
        fluidOutput: ["kubejs:molten_ostrum", INGOT],
        time: 180,
        heat: "heated"
      },
      {
        itemInput: ["ad_astra:ostrum_nugget", 1],
        fluidOutput: ["kubejs:molten_ostrum", NUGGET],
        time: 20,
        heat: "heated"
      },
      {
        itemInput: ["ad_astra:polished_permafrost", 1],
        fluidOutput: ["techreborn:nitrogen", BUCKET / 5],
        time: 100,
        heat: "superheated"
      },
      {
        itemInput: ["ad_astra:permafrost", 1],
        fluidOutput: ["techreborn:nitrogen", BUCKET / 10],
        time: 300,
        heat: "heated"
      },
      {
        itemInput: ["ad_astra:steel_block", 1],
        fluidOutput: ["tconstruct:molten_steel", BUCKET],
        time: 1620,
        heat: "heated"
      },
      {
        itemInput: ["ad_astra:steel_ingot", 1],
        fluidOutput: ["tconstruct:molten_steel", INGOT],
        time: 180,
        heat: "heated"
      },
      {
        itemInput: ["ad_astra:steel_nugget", 1],
        fluidOutput: ["tconstruct:molten_steel", NUGGET],
        time: 20,
        heat: "heated"
      }
    ].forEach((recipe) => {
      event.custom({
        type: "createbigcannons:melting",
        ingredients: [{ item: recipe.itemInput[0], count: recipe.itemInput[1] }],
        results: [{ fluid: recipe.fluidOutput[0], amount: recipe.fluidOutput[1] }],
        processingTime: recipe.time,
        heatRequirement: recipe.heat
      });
    });
  });
}
function createCrushingRecipes() {
  onEvent("recipes", (event) => {
    const crushingRecipes = [
      {
        input: "tconstruct:ender_slime_crystal_cluster",
        outputs: [
          Item.of("tconstruct:ender_slime_crystal", 3),
          Item.of("tconstruct:ender_slime_crystal", 1).withChance(0.5)
        ]
      },
      {
        input: "minecraft:packed_ice",
        outputs: [Item.of("ad_astra:ice_shard", 2), Item.of("ad_astra:ice_shard", 1).withChance(0.5)]
      },
      {
        input: "minecraft:blue_ice",
        outputs: [
          Item.of("ad_astra:ice_shard", 9),
          Item.of("ad_astra:ice_shard", 2).withChance(0.66),
          Item.of("ad_astra:ice_shard", 1).withChance(0.33)
        ]
      },
      {
        input: "minecraft:calcite",
        outputs: [Item.of("techreborn:calcite_dust", 4)]
      },
      {
        input: "minecraft:dead_tube_coral_block",
        outputs: [Item.of("techreborn:calcite_dust", 1)]
      },
      {
        input: "minecraft:dead_brain_coral_block",
        outputs: [Item.of("techreborn:calcite_dust", 1)]
      },
      {
        input: "minecraft:dead_bubble_coral_block",
        outputs: [Item.of("techreborn:calcite_dust", 1)]
      },
      {
        input: "minecraft:dead_fire_coral_block",
        outputs: [Item.of("techreborn:calcite_dust", 1)]
      },
      {
        input: "minecraft:dead_horn_coral_block",
        outputs: [Item.of("techreborn:calcite_dust", 1)]
      },
      {
        input: "minecraft:tube_coral_block",
        outputs: [
          Item.of("minecraft:blue_dye", 1),
          Item.of("minecraft:blue_dye", 2).withChance(0.5),
          Item.of("minecraft:prismarine_shard", 1).withChance(0.1),
          Item.of("minecraft:lapis_lazuli", 1).withChance(0.02),
          Item.of("techreborn:calcite_dust", 1).withChance(0.1),
          Item.of("minecraft:tube_coral", 1).withChance(0.25),
          Item.of("minecraft:tube_coral_fan", 1).withChance(0.25)
        ]
      },
      {
        input: "minecraft:brain_coral_block",
        outputs: [
          Item.of("minecraft:pink_dye", 1),
          Item.of("minecraft:pink_dye", 2).withChance(0.5),
          Item.of("tconstruct:pig_iron_nugget", 1).withChance(0.1),
          Item.of("farmersdelight:ham", 1).withChance(0.02),
          Item.of("techreborn:calcite_dust", 1).withChance(0.1),
          Item.of("minecraft:brain_coral", 1).withChance(0.25),
          Item.of("minecraft:brain_coral_fan", 1).withChance(0.25)
        ]
      },
      {
        input: "minecraft:bubble_coral_block",
        outputs: [
          Item.of("minecraft:purple_dye", 1),
          Item.of("minecraft:purple_dye", 2).withChance(0.5),
          Item.of("minecraft:popped_chorus_fruit", 1).withChance(0.1),
          Item.of("ae2:ender_dust", 1).withChance(0.2),
          Item.of("techreborn:calcite_dust", 1).withChance(0.1),
          Item.of("minecraft:bubble_coral", 1).withChance(0.25),
          Item.of("minecraft:bubble_coral_fan", 1).withChance(0.25)
        ]
      },
      {
        input: "minecraft:fire_coral_block",
        outputs: [
          Item.of("minecraft:red_dye", 1),
          Item.of("minecraft:red_dye", 2).withChance(0.5),
          Item.of("minecraft:blaze_powder", 1).withChance(0.05),
          Item.of("tconstruct:blood_slime_ball", 1).withChance(0.05),
          Item.of("techreborn:calcite_dust", 1).withChance(0.1),
          Item.of("minecraft:fire_coral", 1).withChance(0.25),
          Item.of("minecraft:fire_coral_fan", 1).withChance(0.25)
        ]
      },
      {
        input: "minecraft:horn_coral_block",
        outputs: [
          Item.of("minecraft:yellow_dye", 1),
          Item.of("minecraft:yellow_dye", 2).withChance(0.5),
          Item.of("techreborn:sponge_piece", 1).withChance(0.15),
          Item.of("minecraft:sea_pickle", 1).withChance(0.1),
          Item.of("techreborn:calcite_dust", 1).withChance(0.1),
          Item.of("minecraft:horn_coral", 1).withChance(0.25),
          Item.of("minecraft:horn_coral_fan", 1).withChance(0.25)
        ]
      },
      {
        input: "minecraft:cobbled_deepslate",
        outputs: [Item.of("create:zinc_nugget").withChance(0.13), Item.of("minecraft:coal").withChance(0.05)]
      },
      {
        input: "tconstruct:ender_slime_crystal_block",
        outputs: [Item.of("tconstruct:ender_slime_crystal", 4)]
      },
      //Diorite,Granite,Andesite Crushing
      {
        input: "minecraft:diorite",
        outputs: [
          Item.of("minecraft:quartz"),
          Item.of("techreborn:diorite_dust"),
          Item.of("techreborn:andesite_dust"),
          Item.of("minecraft:quartz").withChance(0.25)
        ]
      },
      {
        input: "minecraft:flint",
        outputs: [Item.of("techreborn:andesite_dust"), Item.of("techreborn:flint_dust").withChance(0.5)]
      },
      {
        input: "minecraft:granite",
        outputs: [
          Item.of("minecraft:red_sand"),
          Item.of("techreborn:granite_dust"),
          Item.of("techreborn:granite_dust").withChance(0.5),
          Item.of("minecraft:red_sand").withChance(0.25)
        ]
      },
      {
        input: "minecraft:andesite",
        outputs: [
          Item.of("minecraft:cobblestone"),
          Item.of("techreborn:andesite_dust"),
          Item.of("techreborn:andesite_dust").withChance(0.9)
        ]
      },
      {
        input: "minecraft:glow_berries",
        outputs: [Item.of("naturalist:glow_goop"), Item.of("naturalist:glow_goop").withChance(0.5)]
      },
      {
        input: "minecraft:snow_block",
        outputs: [Item.of("minecraft:snowball", 2), Item.of("minecraft:snowball").withChance(0.5)]
      },
      //Netherack Crushing
      {
        input: "minecraft:netherrack",
        outputs: [Item.of("techreborn:netherrack_dust"), Item.of("techreborn:netherrack_dust").withChance(0.5)]
      },
      {
        input: "minecraft:warped_nylium",
        outputs: [
          Item.of("techreborn:netherrack_dust"),
          Item.of("techreborn:netherrack_dust").withChance(0.5),
          Item.of("minecraft:warped_fungus").withChance(0.1)
        ]
      },
      {
        input: "minecraft:crimson_nylium",
        outputs: [
          Item.of("techreborn:netherrack_dust"),
          Item.of("techreborn:netherrack_dust").withChance(0.5),
          Item.of("minecraft:crimson_fungus").withChance(0.1)
        ]
      },
      // warped fungi crushing
      {
        input: "minecraft:warped_wart_block",
        outputs: [
          Item.of("minecraft:warped_roots"),
          Item.of("minecraft:nether_sprouts").withChance(0.25),
          Item.of("minecraft:warped_fungus").withChance(0.25)
        ]
      },
      {
        input: "minecraft:nether_wart_block",
        outputs: [
          Item.of("minecraft:crimson_roots"),
          Item.of("minecraft:nether_wart").withChance(0.25),
          Item.of("minecraft:crimson_fungus").withChance(0.25)
        ]
      },
      {
        input: "minecraft:dripstone_block",
        outputs: [Item.of("minecraft:clay_ball"), Item.of("minecraft:clay_ball").withChance(0.5)]
      },
      /*
        {
            input: "#c:coral_blocks",
            outputs: [Item.of("techreborn:calcite_dust")],
        },
        */
      // Ad Astra Crushing
      {
        input: "ad_astra:moon_stone",
        outputs: [Item.of("ad_astra:moon_sand")]
      },
      {
        input: "ad_astra:moon_sand",
        outputs: [Item.of("minecraft:quartz").withChance(0.05)]
      },
      {
        input: "ad_astra:mars_stone",
        outputs: [Item.of("ad_astra:mars_sand")]
      },
      {
        input: "ad_astra:conglomerate",
        outputs: [Item.of("ad_astra:raw_ostrum").withChance(0.07)]
      },
      {
        input: "ad_astra:infernal_spire_block",
        outputs: [Item.of("minecraft:magma_block"), Item.of("tconstruct:debris_nugget").withChance(0.03)]
      },
      // AE2 Fluix/Shimmer Crystal Crushing
      {
        input: "ae2:fluix_crystal",
        outputs: [Item.of("ae2:fluix_dust")]
      },
      // concrete crushing into concrete powder
      {
        input: "minecraft:white_concrete",
        outputs: [Item.of("minecraft:white_concrete_powder")]
      },
      {
        input: "minecraft:orange_concrete",
        outputs: [Item.of("minecraft:orange_concrete_powder")]
      },
      {
        input: "minecraft:magenta_concrete",
        outputs: [Item.of("minecraft:magenta_concrete_powder")]
      },
      {
        input: "minecraft:light_blue_concrete",
        outputs: [Item.of("minecraft:light_blue_concrete_powder")]
      },
      {
        input: "minecraft:yellow_concrete",
        outputs: [Item.of("minecraft:yellow_concrete_powder")]
      },
      {
        input: "minecraft:lime_concrete",
        outputs: [Item.of("minecraft:lime_concrete_powder")]
      },
      {
        input: "minecraft:pink_concrete",
        outputs: [Item.of("minecraft:pink_concrete_powder")]
      },
      {
        input: "minecraft:gray_concrete",
        outputs: [Item.of("minecraft:gray_concrete_powder")]
      },
      {
        input: "minecraft:light_gray_concrete",
        outputs: [Item.of("minecraft:light_gray_concrete_powder")]
      },
      {
        input: "minecraft:cyan_concrete",
        outputs: [Item.of("minecraft:cyan_concrete_powder")]
      },
      {
        input: "minecraft:purple_concrete",
        outputs: [Item.of("minecraft:purple_concrete_powder")]
      },
      {
        input: "minecraft:blue_concrete",
        outputs: [Item.of("minecraft:blue_concrete_powder")]
      },
      {
        input: "minecraft:brown_concrete",
        outputs: [Item.of("minecraft:brown_concrete_powder")]
      },
      {
        input: "minecraft:green_concrete",
        outputs: [Item.of("minecraft:green_concrete_powder")]
      },
      {
        input: "minecraft:red_concrete",
        outputs: [Item.of("minecraft:red_concrete_powder")]
      },
      {
        input: "minecraft:black_concrete",
        outputs: [Item.of("minecraft:black_concrete_powder")]
      },
      {
        input: "yttr:ruined_cobblestone",
        outputs: [
          Item.of("yttr:rubble"),
          Item.of("yttr:rubble").withChance(0.75),
          Item.of("tconstruct:debris_nugget").withChance(0.1)
        ]
      },
      {
        input: "yttr:rubble",
        outputs: [
          Item.of("tconstruct:debris_nugget"),
          Item.of("techreborn:andesite_dust"),
          Item.of("ad_astra:steel_nugget").withChance(0.1),
          Item.of("techreborn:bronze_nugget").withChance(0.1)
        ]
      },
      {
        input: "createastral:monazite_crystal",
        outputs: [
          Item.of("yttr:neodymium_dust"),
          Item.of("createastral:crushed_raw_gadolinite"),
          Item.of("yttr:neodymium_dust").withChance(0.75),
          Item.of("createastral:crushed_raw_gadolinite").withChance(0.5),
          Item.of("create:crushed_raw_iron").withChance(0.5)
        ]
      },
      {
        input: "minecraft:soul_sand",
        outputs: [Item.of("xpcrystals:soul_compound", 3), Item.of("xpcrystals:soul_compound").withChance(0.5)]
      },
      {
        input: "minecraft:dried_kelp",
        outputs: [Item.of("minecraft:gunpowder").withChance(0.5), Item.of("create:experience_nugget").withChance(0.1)]
      }
    ];
    crushingRecipes.forEach((recipe) => {
      event.recipes.create.crushing(recipe.outputs, recipe.input).processingTime(200);
    });
    const CRUSHING_ORE_BONUS_ORE_YIELD = 0.33;
    const CRUSHING_ORE_BONUS_XP_CHUNKS = 0.33;
    const EXTRA_CHANCE = 0.2;
    const oreCrushingRecipes = [
      {
        mod: "techreborn",
        ores: [
          {
            name: "tin",
            extra: "techreborn:silver_nugget"
          },
          {
            name: "silver",
            extra: "create:zinc_nugget"
          },
          {
            name: "lead",
            extra: "minecraft:coal"
          }
        ],
        suffix: "storage_block",
        crushed_prefix: "create"
      },
      {
        mod: "ad_astra",
        ores: [
          {
            name: "desh",
            extra: "techreborn:silver_nugget"
          },
          {
            name: "ostrum",
            extra: "techreborn:lead_nugget"
          },
          { name: "calorite" }
        ],
        suffix: "block",
        crushed_prefix: "createastral"
      },
      {
        mod: "yttr",
        ores: [
          {
            name: "gadolinite",
            extra: "techreborn:silver_nugget"
          }
        ],
        suffix: "block",
        crushed_prefix: "createastral"
      },
      {
        mod: "tconstruct",
        ores: [
          {
            name: "cobalt",
            extra: "techreborn:tin_nugget"
          }
        ],
        suffix: "block",
        crushed_prefix: "createastral"
      },
      {
        mod: "create",
        ores: [{ name: "zinc" }],
        suffix: "block",
        crushed_prefix: "create"
      },
      {
        mod: "minecraft",
        ores: [{ name: "iron" }, { name: "gold" }, { name: "copper" }],
        suffix: "block",
        crushed_prefix: "create"
      }
    ];
    oreCrushingRecipes.forEach((mod) => {
      mod.ores.forEach((ore) => {
        let raw_ore = `${mod.mod}:raw_${ore.name}`;
        let raw_ore_block = `${mod.mod}:raw_${ore.name}_${mod.suffix}`;
        let crushed_ore = `${mod.crushed_prefix}:crushed_raw_${ore.name}`;
        event.remove({
          type: "create:crushing",
          input: raw_ore_block,
          output: crushed_ore
        });
        event.remove({
          type: "create:crushing",
          input: raw_ore,
          output: crushed_ore
        });
        let single_ore_output = [
          crushed_ore,
          Item.of(crushed_ore).withChance(CRUSHING_ORE_BONUS_ORE_YIELD),
          Item.of("create:experience_nugget").withChance(CRUSHING_ORE_BONUS_XP_CHUNKS)
        ];
        let multi_ore_output = [
          Item.of(crushed_ore, 9),
          Item.of(crushed_ore, 9).withChance(CRUSHING_ORE_BONUS_ORE_YIELD),
          Item.of("create:experience_nugget", 9).withChance(CRUSHING_ORE_BONUS_XP_CHUNKS)
        ];
        if (ore.extra) {
          single_ore_output.push(Item.of(ore.extra).withChance(EXTRA_CHANCE));
          multi_ore_output.push(Item.of(ore.extra, 9).withChance(EXTRA_CHANCE));
        }
        event.recipes.createCrushing(single_ore_output, raw_ore);
        event.recipes.createCrushing(multi_ore_output, raw_ore_block);
      });
    });
    const BONUS_CRUSH_ORE = 0.75;
    const BLOCK_CHANCE = 0.12;
    const oreMapping = {
      coal: { name: "minecraft:coal", count: 1 },
      iron: { name: "minecraft:raw_iron", count: 1 },
      copper: { name: "minecraft:raw_copper", count: 5 },
      gold: { name: "minecraft:raw_gold", count: 1 },
      redstone: { name: "minecraft:redstone", count: 6 },
      emerald: { name: "minecraft:emerald", count: 1 },
      lapis: { name: "minecraft:lapis_lazuli", count: 1 },
      diamond: { name: "minecraft:diamond", count: 1 },
      zinc: { name: "create:raw_zinc", count: 1 },
      desh: { name: "ad_astra:raw_desh", count: 1 },
      ostrum: { name: "ad_astra:raw_ostrum", count: 1 },
      calorite: { name: "ad_astra:raw_calorite", count: 1 },
      cheese: { name: "ad_astra:cheese", count: 1 },
      ice_shard: { name: "ad_astra:ice_shard", count: 1 },
      lead: { name: "techreborn:raw_lead", count: 1 },
      silver: { name: "techreborn:raw_silver", count: 1 },
      tin: { name: "techreborn:raw_tin", count: 1 },
      yttr: { name: "yttr:raw_gadolinite", count: 1 },
      cobalt: { name: "tconstruct:raw_cobalt", count: 1 }
    };
    const ores = [
      // Earth Ores
      { ore: "zinc", name: "create:zinc_ore", block: "minecraft:cobblestone", bonus: 0 },
      { ore: "zinc", name: "create:deepslate_zinc_ore", block: "minecraft:cobbled_deepslate", bonus: 1 },
      { ore: "tin", name: "techreborn:tin_ore", block: "minecraft:cobblestone", bonus: 0 },
      { ore: "tin", name: "techreborn:deepslate_tin_ore", block: "minecraft:cobbled_deepslate", bonus: 1 },
      // Tech Reborn Planet Ores
      { ore: "silver", name: "techreborn:silver_ore", block: "ad_astra:moon_cobblestone", bonus: 1 },
      { ore: "silver", name: "techreborn:deepslate_silver_ore", block: "ad_astra:moon_cobblestone", bonus: 1 },
      { ore: "lead", name: "techreborn:lead_ore", block: "ad_astra:mars_cobblestone", bonus: 1 },
      { ore: "lead", name: "techreborn:deepslate_lead_ore", block: "ad_astra:mars_cobblestone", bonus: 1 },
      // Misc
      { ore: "iron", name: "ad_astra:mercury_iron_ore", block: "ad_astra:mercury_cobblestone", bonus: 1 },
      { ore: "yttr", name: "yttr:gadolinite", block: "ad_astra:mercury_cobblestone", bonus: 1 },
      { ore: "cobalt", name: "tconstruct:cobalt_ore", block: "ad_astra:moon_cobblestone", bonus: 1 }
    ];
    const VANILLA_ORES = ["coal", "iron", "copper", "gold", "redstone", "emerald", "lapis", "diamond"];
    VANILLA_ORES.forEach((ore) => {
      ores.push({ ore, name: `minecraft:${ore}_ore`, block: "minecraft:cobblestone", bonus: 0 });
      ores.push({
        ore,
        name: `minecraft:deepslate_${ore}_ore`,
        block: `minecraft:cobbled_deepslate`,
        bonus: 1
      });
    });
    const AD_ASTRA_DEEPSLATE_ORES = ["desh", "ostrum", "calorite", "ice_shard"];
    AD_ASTRA_DEEPSLATE_ORES.forEach((ore) => {
      ores.push({
        ore,
        name: `ad_astra:deepslate_${ore}_ore`,
        block: "minecraft:cobbled_deepslate",
        bonus: 1
      });
    });
    const AD_ASTRA_MOON_ORES = ["cheese", "desh", "iron", "ice_shard"];
    AD_ASTRA_MOON_ORES.forEach((ore) => {
      ores.push({ ore, name: `ad_astra:moon_${ore}_ore`, block: "ad_astra:moon_cobblestone", bonus: 1 });
    });
    const AD_ASTRA_MARS_ORES = ["iron", "diamond", "ostrum", "ice_shard"];
    AD_ASTRA_MARS_ORES.forEach((ore) => {
      ores.push({ ore, name: `ad_astra:mars_${ore}_ore`, block: "ad_astra:mars_cobblestone", bonus: 1 });
    });
    const AD_ASTRA_VENUS_ORES = ["coal", "gold", "diamond", "calorite"];
    AD_ASTRA_VENUS_ORES.forEach((ore) => {
      ores.push({ ore, name: `ad_astra:venus_${ore}_ore`, block: "ad_astra:venus_cobblestone", bonus: 1 });
    });
    const AD_ASTRA_GLACIO_ORES = ["ice_shard", "coal", "copper", "iron", "lapis"];
    AD_ASTRA_GLACIO_ORES.forEach((ore) => {
      ores.push({ ore, name: `ad_astra:glacio_${ore}_ore`, block: "ad_astra:glacio_cobblestone", bonus: 1 });
    });
    ores.forEach((ore) => {
      let count = oreMapping[ore.ore].count + ore.bonus;
      let res = oreMapping[ore.ore].name;
      event.remove({
        type: "create:crushing",
        input: ore.name
      });
      event.recipes.createCrushing(
        [
          Item.of(res, count),
          Item.of(res).withChance(BONUS_CRUSH_ORE),
          Item.of("create:experience_nugget").withChance(BONUS_CRUSH_ORE),
          Item.of(ore.block).withChance(BLOCK_CHANCE)
        ],
        ore.name
      );
    });
    event.recipes.createCrushing(
      [
        Item.of("techreborn:galena_dust", 2),
        Item.of("techreborn:galena_dust").withChance(0.5),
        Item.of("create:experience_nugget").withChance(0.5),
        Item.of("ad_astra:mercury_cobblestone").withChance(BLOCK_CHANCE)
      ],
      "techreborn:deepslate_galena_ore"
    );
    const lakyCrushingRecipes = [
      {
        input: "create:ochrum",
        outputs: [
          Item.of("minecraft:raw_gold"),
          Item.of("minecraft:raw_gold").withChance(0.5),
          Item.of("minecraft:glowstone_dust").withChance(0.1),
          Item.of("minecraft:sand").withChance(0.5),
          Item.of("ad_astra:desh_nugget").withChance(0.4)
        ]
      },
      {
        input: "create:crimsite",
        outputs: [
          Item.of("minecraft:raw_iron"),
          Item.of("minecraft:raw_iron").withChance(0.5),
          Item.of("minecraft:redstone").withChance(0.1),
          Item.of("minecraft:granite").withChance(0.5),
          Item.of("minecraft:red_dye").withChance(0.25)
        ]
      },
      {
        input: "create:limestone",
        outputs: [
          Item.of("minecraft:clay_ball"),
          Item.of("techreborn:raw_tin").withChance(0.4),
          Item.of("createastral:lime").withChance(0.7)
        ]
      },
      {
        input: "create:veridium",
        outputs: [
          Item.of("minecraft:raw_copper"),
          Item.of("minecraft:raw_copper").withChance(0.9),
          Item.of("minecraft:sand").withChance(0.5),
          Item.of("minecraft:green_dye").withChance(0.25),
          Item.of("minecraft:emerald").withChance(0.1)
        ]
      },
      {
        input: "create:asurine",
        outputs: [
          Item.of("tconstruct:raw_cobalt"),
          Item.of("tconstruct:raw_cobalt").withChance(0.2),
          Item.of("minecraft:lapis_lazuli").withChance(0.5),
          Item.of("techreborn:lazurite_dust").withChance(0.1),
          Item.of("minecraft:blue_dye").withChance(0.25),
          Item.of("minecraft:prismarine_crystals").withChance(0.2)
        ]
      },
      {
        input: "create:scorchia",
        outputs: [
          Item.of("create:raw_zinc"),
          Item.of("create:powdered_obsidian").withChance(0.9),
          Item.of("minecraft:black_dye").withChance(0.4),
          Item.of("minecraft:tuff").withChance(0.25)
        ]
      },
      {
        input: "ad_astra:mars_cobblestone",
        outputs: [
          Item.of("ad_astra:raw_ostrum").withChance(0.04),
          Item.of("ad_astra:infernal_spire_block").withChance(0.02),
          Item.of("ad_astra:mars_sand")
        ]
      },
      {
        input: "ad_astra:mercury_cobblestone",
        outputs: [
          Item.of("ad_astra:raw_calorite").withChance(0.04),
          Item.of("minecraft:basalt").withChance(0.2),
          Item.of("minecraft:blackstone").withChance(0.2),
          Item.of("minecraft:magma_block").withChance(0.08)
        ]
      },
      {
        input: "ad_astra:glacio_cobblestone",
        outputs: [
          Item.of("minecraft:blue_ice").withChance(0.3),
          Item.of("minecraft:packed_ice").withChance(0.5),
          Item.of("minecraft:snow_block").withChance(0.3),
          Item.of("createastral:prismatic_crystal").withChance(0.05)
        ]
      },
      {
        input: "ad_astra:moon_cobblestone",
        outputs: [
          Item.of("ad_astra:raw_desh").withChance(0.03),
          Item.of("ad_astra:moon_sand"),
          Item.of("minecraft:tuff").withChance(0.25)
        ]
      },
      {
        input: "minecraft:blackstone",
        outputs: [
          Item.of("create:powdered_obsidian").withChance(0.3),
          Item.of("tconstruct:seared_cobble").withChance(0.3)
        ]
      },
      {
        input: "create:scoria",
        outputs: [
          Item.of("minecraft:magma_cream").withChance(0.4),
          Item.of("minecraft:magma_block").withChance(0.5),
          Item.of("minecraft:tuff").withChance(0.3),
          Item.of("minecraft:basalt").withChance(0.1)
        ]
      },
      {
        input: "minecraft:tuff",
        outputs: [Item.of("minecraft:charcoal").withChance(0.33), Item.of("minecraft:basalt").withChance(0.25)]
      },
      {
        input: "minecraft:prismarine",
        outputs: [
          Item.of("minecraft:lapis_lazuli").withChance(0.5),
          Item.of("minecraft:prismarine_crystals").withChance(0.75)
        ]
      },
      {
        input: "minecraft:basalt",
        outputs: [Item.of("techreborn:basalt_dust"), Item.of("techreborn:andesite_dust").withChance(0.5)]
      },
      {
        input: "dbe:vanta_black",
        outputs: [Item.of("minecraft:black_dye")]
      },
      {
        input: "astraladditions:lune_shroom",
        outputs: [Item.of("minecraft:lapis_lazuli")]
      }
    ];
    lakyCrushingRecipes.forEach((recipe) => {
      event.recipes.createCrushing(recipe.outputs, recipe.input);
    });
  });
}
function createCuttingRecipes() {
  onEvent("recipes", (event) => {
    autoChipped(event);
    farmersCompatCutting(event);
    const cuttingRecipes = [
      {
        input: "createastral:marimo",
        output: "minecraft:seagrass"
      },
      {
        input: "createastral:moonset_marimo",
        output: "minecraft:warped_roots"
      },
      {
        input: "createastral:snowy_marimo",
        output: "minecraft:snowball"
      },
      {
        input: "createastral:ender_marimo",
        output: "astraladditions:ender_sprouts"
      },
      {
        input: "minecraft:moss_block",
        output: Item.of("minecraft:moss_carpet", 2)
      },
      {
        input: "minecraft:moss_carpet",
        output: Item.of("createastral:marimo", 2)
      },
      {
        input: "techreborn:rubber_log",
        output: "techreborn:rubber_log_stripped"
      },
      {
        input: "techreborn:rubber_log",
        output: ["farmersdelight:tree_bark", "techreborn:rubber_log_stripped"]
      },
      {
        input: "techreborn:rubber_wood",
        output: "techreborn:stripped_rubber_wood"
      },
      {
        input: "techreborn:rubber_wood",
        output: ["farmersdelight:tree_bark", "techreborn:stripped_rubber_wood"]
      },
      {
        input: "techreborn:rubber_log_stripped",
        output: Item.of("techreborn:rubber_planks", 6)
      },
      {
        input: "vinery:cherry_log",
        output: "vinery:stripped_cherry_log"
      },
      {
        input: "vinery:stripped_cherry_log",
        output: Item.of("vinery:cherry_planks", 6)
      },
      {
        input: "vinery:old_cherry_log",
        output: "vinery:stripped_old_cherry_log"
      },
      {
        input: "vinery:stripped_old_cherry_log",
        output: Item.of("vinery:cherry_planks", 6)
      },
      {
        input: "vinery:cherry_wood",
        output: "vinery:stripped_cherry_wood"
      },
      {
        input: "vinery:old_cherry_wood",
        output: "vinery:stripped_old_cherry_wood"
      },
      {
        input: "ad_astra:glacian_log",
        output: "ad_astra:stripped_glacian_log"
      },
      {
        input: "ad_astra:stripped_glacian_log",
        output: Item.of("ad_astra:glacian_planks", 6)
      },
      {
        input: "create:track",
        output: "railways:track_acacia"
      },
      {
        input: "create:track",
        output: "railways:track_birch"
      },
      {
        input: "create:track",
        output: "railways:track_crimson"
      },
      {
        input: "create:track",
        output: "railways:track_dark_oak"
      },
      {
        input: "create:track",
        output: "railways:track_jungle"
      },
      {
        input: "create:track",
        output: "railways:track_oak"
      },
      {
        input: "create:track",
        output: "railways:track_spruce"
      },
      {
        input: "create:track",
        output: "railways:track_warped"
      },
      {
        input: "create:track",
        output: "railways:track_blackstone"
      },
      {
        input: "create:track",
        output: "railways:track_ender"
      },
      {
        input: "create:track",
        output: "railways:track_tieless"
      },
      {
        input: "create:track",
        output: "railways:track_phantom"
      },
      {
        input: "create:track",
        output: "railways:track_monorail"
      },
      {
        input: "minecraft:rabbit",
        output: "minecraft:rabbit_foot"
      },
      {
        input: "minecraft:bone_block",
        output: "minecraft:skeleton_skull"
      },
      {
        input: "#minecraft:planks",
        output: "techreborn:wood_plate"
      }
    ];
    cuttingRecipes.forEach((recipe) => {
      event.recipes.createCutting(recipe.output, recipe.input);
    });
  });
  function autoChipped(event) {
    const CHIPPED_TABLES = [
      "chipped:alchemy_bench",
      "chipped:botanist_workbench",
      "chipped:carpenters_table",
      "chipped:glassblower",
      "chipped:loom_table",
      "chipped:mason_table",
      "chipped:tinkering_table"
    ];
    CHIPPED_TABLES.forEach((table) => {
      event.forEachRecipe({ type: table }, (recipe) => {
        const tags = JSON.parse(recipe.json.toString()).tags;
        tags.forEach((tag) => {
          Ingredient.of(`#${tag}`).getStacks().forEach((item) => {
            event.custom({
              type: "create:cutting",
              ingredients: [
                {
                  tag
                }
              ],
              results: [
                {
                  item: item.id
                }
              ]
            });
          });
        });
      });
    });
  }
  function farmersCompatCutting(event) {
    event.forEachRecipe({ type: "farmersdelight:cutting" }, (recipe) => {
      let newList = Utils.newList();
      recipe.json.get("result").asJsonArray.forEach((e) => newList.push(e));
      newList.reverse();
      event.custom({
        type: "create:cutting",
        ingredients: recipe.json.get("ingredients"),
        results: newList,
        processingItem: 50
      });
    });
  }
}
function createDeployingRecipes() {
  onEvent("recipes", (event) => {
    const deployingRecipes = [
      {
        output: "createastral:cheesier_block",
        appliedTo: "ad_astra:cheese_block",
        deployerInput: "ad_astra:cheese"
      },
      {
        output: "minecraft:redstone_torch",
        appliedTo: "minecraft:torch",
        deployerInput: "minecraft:redstone"
      },
      {
        output: "dbe:vanta_black",
        appliedTo: "minecraft:stone",
        deployerInput: "minecraft:black_dye"
      },
      {
        output: "explorerscompass:explorerscompass",
        appliedTo: "minecraft:compass",
        deployerInput: "phonos:redstone_chip"
      },
      {
        output: "astraladditions:oh-no",
        appliedTo: "astraladditions:moonblazed_orb",
        deployerInput: "astraladditions:orbital_navigation_ring"
      },
      {
        output: "createastral:contained_end",
        appliedTo: "createastral:sturdy_cage",
        deployerInput: "yttr:haemopal"
      },
      {
        output: "minecraft:sea_pickle",
        appliedTo: "minecraft:torch",
        deployerInput: "createastral:marimo"
      },
      {
        output: "create:blaze_burner",
        appliedTo: "create:empty_blaze_burner",
        deployerInput: "tconstruct:blaze_head"
      }
    ];
    deployingRecipes.forEach((recipe) => {
      event.recipes.create.deploying([recipe.output], [recipe.appliedTo, recipe.deployerInput]);
    });
  });
}
function createEmptyingRecipes() {
  onEvent("recipes", (event) => {
    const emptyingRecipes = [
      {
        input: "techreborn:water_coolant_cell_60k",
        outputItem: Item.of("techreborn:cell", 6),
        outputFluid: { fluid: "kubejs:released_water_coolant", amount: BUCKET }
      }
    ];
    emptyingRecipes.forEach((recipe) => {
      event.recipes.createEmptying([recipe.outputItem, recipe.outputFluid], recipe.input);
    });
  });
}
function estrogenCentrifugingRecipes() {
  onEvent("recipes", (event) => {
    const centrifugingRecipes = [
      {
        input: "tconstruct:molten_pig_iron",
        output: "tconstruct:blood",
        amount: 1 * mB
      },
      {
        input: "techreborn:methane",
        output: "techreborn:carbon",
        amount: 1 * mB
      },
      {
        input: "techreborn:helium",
        output: "techreborn:lithium",
        amount: 1 * mB
      },
      {
        input: "createbigcannons:molten_cast_iron",
        output: "tconstruct:magma",
        amount: 1 * mB
      },
      {
        input: "kubejs:metabolic_broth",
        output: "astraladditions:sputum",
        amount: 1 * mB
      },
      {
        input: "techreborn:biofuel",
        output: "techreborn:methane",
        amount: 1 * mB
      },
      {
        input: "techreborn:compressed_air",
        output: "techreborn:nitrogen",
        amount: 1 * mB
      },
      {
        input: "estrogen:molten_amethyst",
        output: "kubejs:shimmer",
        amount: 10 * mB
      }
    ];
    centrifugingRecipes.forEach((recipe) => {
      event.custom({
        type: "estrogen:centrifuging",
        ingredients: [
          {
            fluid: recipe.input,
            amount: recipe.amount,
            nbt: {}
          }
        ],
        results: [
          {
            fluid: recipe.output,
            amount: recipe.amount
          }
        ]
      });
    });
  });
}
function createFillingRecipes() {
  onEvent("recipes", (event) => {
    const fillingRecipes = [
      {
        input: "minecraft:glass_bottle",
        output: "astraladditions:shimmer_bottle",
        fluid: "kubejs:shimmer",
        amount: BUCKET / 3
      },
      {
        input: "minecraft:dirt",
        output: "tconstruct:sky_slime_dirt",
        fluid: "tconstruct:sky_slime",
        amount: 250
      },
      {
        input: "minecraft:dirt",
        output: "tconstruct:earth_slime_dirt",
        fluid: "tconstruct:earth_slime",
        amount: 250
      },
      {
        input: "tconstruct:ender_slime_crystal",
        output: "tconstruct:small_ender_slime_crystal_bud",
        fluid: "astraladditions:sputum",
        amount: 250 * mB / 4
      },
      {
        input: "minecraft:wheat_seeds",
        output: "tconstruct:earth_slime_grass_seeds",
        fluid: "tconstruct:earth_slime",
        amount: 250 * mB / 4
      },
      {
        input: "minecraft:stick",
        output: "minecraft:torch",
        fluid: "minecraft:lava",
        amount: 20 * mB
      },
      {
        input: "create:polished_rose_quartz",
        output: "create:electron_tube",
        fluid: "tconstruct:molten_rose_gold",
        amount: INGOT
      },
      {
        input: "minecraft:dripstone_block",
        output: Item.of("minecraft:pointed_dripstone", 3),
        fluid: "minecraft:water",
        amount: 500 * mB
      },
      {
        input: "techreborn:netherrack_dust",
        output: "create:cinder_flour",
        fluid: "minecraft:water",
        amount: 250 * mB
      },
      {
        input: "create:blaze_cake_base",
        output: "create:blaze_cake",
        fluid: "kubejs:hellfire",
        amount: 250 * mB
      },
      {
        input: "techreborn:red_cell_battery",
        output: "techreborn:lithium_ion_battery",
        fluid: "techreborn:lithium",
        amount: BUCKET
      },
      {
        input: "doodads:brick_road",
        output: "doodads:yellow_brick_road",
        fluid: "tconstruct:molten_gold",
        amount: 50 * mB
      },
      {
        input: "doodads:stone_brick_road",
        output: "doodads:yellow_brick_road",
        fluid: "tconstruct:molten_gold",
        amount: 25 * mB
      },
      {
        input: "minecraft:warped_fungus",
        output: "minecraft:crimson_fungus",
        fluid: "minecraft:lava",
        amount: 25 * mB
      },
      {
        input: "techreborn:sponge_piece",
        output: "minecraft:honeycomb",
        fluid: "create:honey",
        amount: 250 * mB
      },
      {
        input: "minecraft:beehive",
        output: "minecraft:bee_nest",
        fluid: "create:honey",
        amount: BUCKET
      },
      {
        input: "minecraft:blackstone",
        output: "minecraft:gilded_blackstone",
        fluid: "tconstruct:molten_gold",
        amount: INGOT
      },
      {
        input: "vinery:wine_bottle",
        output: "vinery:red_grapejuice_wine_bottle",
        fluid: "kubejs:red_grape_juice",
        amount: 250 * mB
      },
      {
        input: "vinery:wine_bottle",
        output: "vinery:white_grapejuice_wine_bottle",
        fluid: "kubejs:white_grape_juice",
        amount: 250 * mB
      },
      {
        input: "minecraft:calcite",
        output: "minecraft:dripstone_block",
        fluid: "minecraft:water",
        amount: 250 * mB
      },
      {
        input: "minecraft:apple",
        output: "astralfoods:shimmered_apple",
        fluid: "kubejs:shimmer",
        amount: BUCKET / 3
      },
      {
        input: "astralfoods:seared_potato",
        output: "astralfoods:dipped_potato",
        fluid: "tconstruct:molten_gold",
        amount: INGOT
      },
      {
        input: "minecraft:bowl",
        output: "farmersdelight:squid_ink_pasta",
        fluid: "kubejs:squid_ink_pasta_fluid",
        amount: 250 * mB
      },
      {
        input: "minecraft:bowl",
        output: "farmersdelight:pumpkin_soup",
        fluid: "kubejs:pumpkin_soup_fluid",
        amount: 250 * mB
      },
      {
        input: "drinkbeer:empty_beer_mug",
        output: "drinkbeer:beer_mug",
        fluid: "kubejs:miner_pale_ale_fluid",
        amount: 250 * mB
      },
      {
        input: "drinkbeer:empty_beer_mug",
        output: "drinkbeer:beer_mug_blaze_stout",
        fluid: "kubejs:blaze_stout_fluid",
        amount: 250 * mB
      },
      {
        input: "drinkbeer:empty_beer_mug",
        output: "drinkbeer:beer_mug_blaze_milk_stout",
        fluid: "kubejs:blaze_milk_stout_fluid",
        amount: 250 * mB
      },
      {
        input: "drinkbeer:empty_beer_mug",
        output: "drinkbeer:beer_mug_apple_lambic",
        fluid: "kubejs:apple_lambic_fluid",
        amount: 250 * mB
      },
      {
        input: "drinkbeer:empty_beer_mug",
        output: "drinkbeer:beer_mug_sweet_berry_kriek",
        fluid: "kubejs:sweet_berry_kriek_fluid",
        amount: 250 * mB
      },
      {
        input: "drinkbeer:empty_beer_mug",
        output: "drinkbeer:beer_mug_haars_icey_pale_lager",
        fluid: "kubejs:haars_icey_pale_lager_fluid",
        amount: 250 * mB
      },
      {
        input: "drinkbeer:empty_beer_mug",
        output: "drinkbeer:beer_mug_pumpkin_kvass",
        fluid: "kubejs:pumpkin_kvass_fluid",
        amount: 250 * mB
      },
      {
        input: "drinkbeer:empty_beer_mug",
        output: "drinkbeer:beer_mug_night_howl_kvass",
        fluid: "kubejs:night_howl_kvass_fluid",
        amount: 250 * mB
      },
      {
        input: "drinkbeer:empty_beer_mug",
        output: "drinkbeer:beer_mug_frothy_pink_eggnog",
        fluid: "kubejs:frothy_pink_eggnog_fluid",
        amount: 250 * mB
      },
      {
        input: "createaddition:cake_base_baked",
        output: "xpcrystals:sticky_crystal_pudding",
        fluid: "kubejs:liquid_xp_nuggies",
        amount: BUCKET
      },
      {
        input: "minecraft:bowl",
        output: "xpcrystals:crystal_broth",
        fluid: "kubejs:liquid_xp_nuggies",
        amount: BUCKET / 2
      },
      {
        input: "minecraft:oak_sapling",
        output: "tconstruct:earth_slime_sapling",
        fluid: "tconstruct:earth_slime",
        amount: BUCKET / 3
      },
      {
        input: "minecraft:oak_sapling",
        output: "tconstruct:sky_slime_sapling",
        fluid: "tconstruct:sky_slime",
        amount: BUCKET / 3
      },
      {
        input: "minecraft:cookie",
        output: "astralfoods:ice_cream_sandwich",
        fluid: "astralfoods:cream",
        amount: 250 * mB
      }
    ];
    fillingRecipes.forEach((recipe) => {
      event.recipes.createFilling(recipe.output, [recipe.input, { fluid: recipe.fluid, amount: recipe.amount }]);
    });
    event.recipes.createFilling("minecraft:glowstone_dust", [
      "create:cinder_flour",
      { fluid: "create:potion", amount: 25 * mB, nbt: { Bottle: "REGULAR", Potion: "naturalist:glowing" } }
    ]);
    event.recipes.createFilling("createastral:swift_andesite", [
      "doodads:asphalt",
      { fluid: "create:potion", amount: 37 * mB, nbt: { Bottle: "REGULAR", Potion: "minecraft:swiftness" } }
    ]);
  });
}
function createHauntingRecipes() {
  onEvent("recipes", (event) => {
    const hauntingRecipes = [
      {
        input: "naturalist:snail_shell",
        output: "minecraft:nautilus_shell"
      },
      {
        input: Item.of("techreborn:charcoal_dust", 2),
        output: "techreborn:coal_dust"
      },
      {
        input: Item.of("minecraft:charcoal", 2),
        output: "minecraft:coal"
      },
      {
        input: "minecraft:sand",
        output: "minecraft:soul_sand"
      },
      {
        input: "minecraft:soul_sand",
        output: "minecraft:netherrack"
      },
      {
        input: "vinery:cherry_sapling",
        output: "vinery:old_cherry_sapling"
      },
      //dead coral blocks
      {
        input: "minecraft:tube_coral_block",
        output: "minecraft:dead_tube_coral_block"
      },
      {
        input: "minecraft:brain_coral_block",
        output: "minecraft:dead_brain_coral_block"
      },
      {
        input: "minecraft:bubble_coral_block",
        output: "minecraft:dead_bubble_coral_block"
      },
      {
        input: "minecraft:fire_coral_block",
        output: "minecraft:dead_fire_coral_block"
      },
      {
        input: "minecraft:horn_coral_block",
        output: "minecraft:dead_horn_coral_block"
      },
      //dead coral
      {
        input: "minecraft:tube_coral",
        output: "minecraft:dead_tube_coral"
      },
      {
        input: "minecraft:brain_coral",
        output: "minecraft:dead_brain_coral"
      },
      {
        input: "minecraft:bubble_coral",
        output: "minecraft:dead_bubble_coral"
      },
      {
        input: "minecraft:fire_coral",
        output: "minecraft:dead_fire_coral"
      },
      {
        input: "minecraft:horn_coral",
        output: "minecraft:dead_horn_coral"
      },
      //dead coral fans
      {
        input: "minecraft:tube_coral_fan",
        output: "minecraft:dead_tube_coral_fan"
      },
      {
        input: "minecraft:brain_coral_fan",
        output: "minecraft:dead_brain_coral_fan"
      },
      {
        input: "minecraft:bubble_coral_fan",
        output: "minecraft:dead_bubble_coral_fan"
      },
      {
        input: "minecraft:fire_coral_fan",
        output: "minecraft:dead_fire_coral_fan"
      },
      {
        input: "minecraft:horn_coral_fan",
        output: "minecraft:dead_horn_coral_fan"
      }
    ];
    hauntingRecipes.forEach((recipe) => {
      event.recipes.createHaunting(recipe.output, recipe.input);
    });
  });
}
function createItemApplicationRecipes() {
  onEvent("recipes", (event) => {
    const itemApplicationRecipes = [
      {
        output: { item: "create:railway_casing" },
        appliedTo: { item: "create:andesite_casing" },
        appliedItem: { tag: "c:plates/obsidian" }
      },
      {
        output: { item: "techreborn:advanced_machine_casing" },
        appliedTo: { item: "techreborn:basic_machine_casing" },
        appliedItem: { item: "ad_astra:steel_plate" }
      },
      {
        output: { item: "techreborn:industrial_machine_casing" },
        appliedTo: { item: "techreborn:basic_machine_casing" },
        appliedItem: { item: "create:sturdy_sheet" }
      },
      {
        output: { item: "create:shadow_steel_casing" },
        appliedTo: { item: "techreborn:advanced_machine_frame" },
        appliedItem: { item: "create:shadow_steel" }
      },
      {
        output: { item: "create:refined_radiance_casing" },
        appliedTo: { item: "techreborn:advanced_machine_frame" },
        appliedItem: { item: "create:refined_radiance" }
      }
    ];
    itemApplicationRecipes.forEach((recipe) => {
      event.custom({
        type: "create:item_application",
        ingredients: [recipe.appliedTo, recipe.appliedItem],
        results: [recipe.output]
      });
    });
  });
}
function createMechanicalCraftingRecipes() {
  onEvent("recipes", (event) => {
    const mechanicalCraftingRecipes = [
      {
        output: "ad_astra:calorite_tank",
        pattern: [" C ", "COC", " C "],
        key: {
          C: "ad_astra:calorite_plate",
          O: "ad_astra:ostrum_tank"
        }
      },
      {
        output: "astraladditions:desizer_base",
        pattern: ["YLY", "YBY", "YPY"],
        key: {
          Y: "createastral:ender_plating",
          P: "yttr:ultrapure_netherite",
          B: "createastral:promethium_atomic_battery",
          L: "createastral:living_mechanism"
        }
      },
      {
        output: "astraladditions:desizer_controller",
        pattern: ["YYYYYY", "YBLLBY", "YLSRLY", "YLSRLY", "YBLLBY", "YYYYYY"],
        key: {
          Y: "createastral:ender_plating",
          S: "create:shadow_steel_casing",
          R: "create:refined_radiance_casing",
          B: "createastral:promethium_atomic_battery",
          L: "createastral:living_mechanism"
        }
      },
      {
        output: "yttr:reinforced_cleaver",
        pattern: ["    VV", "   VV ", "  VV  ", " VN   ", " P    ", "P     "],
        key: {
          N: "yttr:neodymium_block",
          V: "yttr:glassy_void",
          P: "yttr:ultrapure_netherite"
        }
      },
      {
        output: "yttr:effector",
        pattern: ["VVV   ", "VVY   ", "VYNY  ", "  YBY ", "   YPY", "    YY"],
        key: {
          Y: "yttr:yttrium_plating",
          N: "yttr:neodymium_block",
          V: "yttr:glassy_void",
          P: "yttr:ultrapure_netherite",
          B: "createastral:promethium_atomic_battery"
        }
      },
      {
        output: "yttr:centrifuge",
        pattern: ["YYYYYY", "YBSSBY", "YSNNRY", "YSNNRY", "YBRRBY", "YYYYYY"],
        key: {
          Y: "yttr:yttrium_plating",
          N: "yttr:neodymium_block",
          S: "create:shadow_steel_casing",
          R: "create:refined_radiance_casing",
          B: "createastral:promethium_atomic_battery"
        }
      },
      {
        output: "astraladditions:e_guitar",
        pattern: ["PCC  ", "PWIWT", "PCC A"],
        key: {
          A: "createastral:radiant_axe",
          P: "createastral:calorite_pin",
          C: "ad_astra:calorite_plate",
          W: "createaddition:iron_wire",
          I: "techreborn:industrial_circuit",
          T: "createaddition:tesla_coil"
        }
      },
      {
        output: "astraladditions:chromatic_vacuum",
        pattern: [" B ", "ACA", "AAA"],
        key: {
          A: "techreborn:rubber",
          B: "minecraft:hopper",
          C: "create:integrated_circuit"
        }
      },
      //! Unsure if this is used at all so I'm disabling it entirely
      /* {
            output: "yttr:rafter",
            pattern: ["AEBDA", "AFCFA", "AFGFA", "AAAAA"],
            key: {
                A: "yttr:armor_plating",
                B: "projecttable:projecttable",
                C: "createastral:promethium_atomic_battery",
                D: "create:shadow_steel_casing",
                E: "create:refined_radiance_casing",
                G: "astraladditions:fragile_item_2",
                F: "yttr:yttrium_block",
            },
        }, */
      {
        output: "immersive_aircraft:airship",
        pattern: ["AAAA ", "AAAAA", " GFG ", "BEDBC", " BBB "],
        key: {
          A: "immersive_aircraft:sail",
          B: "immersive_aircraft:hull",
          C: "create:propeller",
          D: "immersive_aircraft:engine",
          E: "#create:seats",
          F: "createastral:airship_blueprint",
          G: "farmersdelight:rope"
        }
      },
      {
        output: "yttr:magtank",
        pattern: ["CAC", "ABA", "ABA", "CAC"],
        key: {
          A: "yttr:armor_plating",
          B: "techreborn:data_storage_chip",
          C: "ad_astra:calorite_plate"
        }
      },
      {
        output: "ad_astra:tier_3_rocket",
        pattern: ["   A   ", "  PEP  ", "  EFE  ", "  ECE  ", " IRDRI ", "IBRHRBI", "I PRP I"],
        key: {
          A: "createbigcannons:nethersteel_screw_breech",
          B: "ad_astra:ostrum_engine",
          C: "astraladditions:fragile_item",
          D: "techreborn:electronic_circuit",
          E: "ad_astra:ostrum_block",
          F: "createastral:navigation_mechanism",
          H: "createastral:shimmer_amplifier",
          I: "ad_astra:rocket_fin",
          P: "ad_astra:ostrum_plate",
          R: "createastral:rocket_casing"
        }
      },
      {
        output: "ad_astra:tier_4_rocket",
        pattern: ["   A   ", "  AAA  ", "  BEB  ", "  BDB  ", "  BDB  ", " CDFDC ", "IGDGDGI", "IGHGHGI", "IH H HI"],
        key: {
          A: "ad_astra:calorite_block",
          B: "create:shadow_steel_casing",
          C: "create:refined_radiance_casing",
          D: "createastral:subatomic_ingot",
          E: "astraladditions:fragile_item_2",
          F: "createastral:subatomic_ingot",
          G: "astraladditions:fragile_item_3",
          H: "ad_astra:calorite_engine",
          I: "ad_astra:rocket_fin"
        }
      },
      {
        output: "immersive_aircraft:quadrocopter",
        pattern: ["CCDCC ", "CCBCC ", "ABEBAF", "CCBCC ", "CCDCC "],
        key: {
          A: "create:precision_mechanism",
          B: "immersive_aircraft:hull",
          C: "create:propeller",
          D: "createaddition:brass_rod",
          E: "#create:seats",
          F: "createastral:quadrocopter_blueprint"
        }
      },
      {
        output: "immersive_aircraft:gyrodyne",
        pattern: [" CCC ", "  DF ", "BGEBA", " BBB "],
        key: {
          A: "immersive_aircraft:sail",
          B: "immersive_aircraft:hull",
          C: "create:propeller",
          D: "createaddition:brass_rod",
          E: "#create:seats",
          F: "createastral:gyrodyne_blueprint",
          G: "create:hand_crank"
        }
      },
      {
        output: "immersive_aircraft:biplane",
        pattern: ["    AA   ", "    AA   ", " A   BBC ", "BBBBBEDCF", " A   BBC ", "    AA   ", "    AA   "],
        key: {
          A: "immersive_aircraft:sail",
          B: "immersive_aircraft:hull",
          C: "create:propeller",
          D: "immersive_aircraft:engine",
          E: "#create:seats",
          F: "createastral:biplane_blueprint"
        }
      },
      {
        output: "ad_astra:launch_pad",
        pattern: ["BAAAB", "ABABA", "AABAA", "ABABA", "BAAAB"],
        key: {
          A: "createastral:blast-resistant_concrete",
          B: "create:sturdy_sheet"
        }
      },
      {
        output: "techreborn:data_storage_chip",
        pattern: ["A", "C", "B"],
        key: {
          A: "createastral:olivine_sheet",
          B: "yttr:yttrium_ingot",
          C: "techreborn:industrial_circuit"
        }
      },
      {
        output: "immersive_aircraft:boiler",
        pattern: ["AB", "CB", "CB"],
        key: {
          A: "create:nozzle",
          B: "create:copper_sheet",
          C: "techreborn:rubber"
        }
      },
      {
        output: "minecraft:elytra",
        pattern: ["  A  ", " B B ", " C C ", "C   C", "DE ED", "F G F"],
        key: {
          A: "createastral:navigation_mechanism",
          B: "create:brass_sheet",
          C: "minecraft:phantom_membrane",
          D: "create:large_cogwheel",
          E: "ad_astra:ostrum_plate",
          F: "ad_astra:ostrum_engine",
          G: "computercraft:computer_advanced"
        }
      },
      {
        output: "minecraft:crossbow",
        pattern: [" CCA ", "AABDB"],
        key: {
          A: "create:iron_sheet",
          B: "#minecraft:logs",
          C: "minecraft:gunpowder",
          D: "create:precision_mechanism"
        }
      },
      {
        output: "ad_astra:nasa_workbench",
        pattern: ["EFE", "CDC", "ABA"],
        key: {
          // A: minecraft:redstone_block,
          A: "createaddition:capacitor",
          B: "ad_astra:desh_block",
          C: "ad_astra:desh_plate",
          D: "createastral:navigation_mechanism",
          // F: 'create:integrated_circuit',
          F: "create:display_board",
          E: "create:mechanical_arm"
        }
      },
      {
        output: "ad_astra:solar_panel",
        pattern: ["DDD", " B ", "ACA", "AEA"],
        key: {
          A: "ad_astra:desh_plate",
          B: "create:integrated_circuit",
          C: "createastral:navigation_mechanism",
          D: "minecraft:blue_stained_glass",
          E: "ae2:fluix_glass_cable"
        }
      },
      {
        output: "ad_astra:coal_generator",
        pattern: ["ABCBA", "AAEAA"],
        key: {
          A: "ad_astra:steel_plate",
          B: "techreborn:lead_ingot",
          C: "create:precision_mechanism",
          E: "ad_astra:engine_fan"
        }
      },
      {
        output: "computercraft:computer_advanced",
        pattern: ["AAA", "BCB", "ADA"],
        key: {
          A: "create:brass_sheet",
          B: "create:electron_tube",
          C: "create:display_board",
          D: "create:precision_mechanism"
        }
      },
      {
        output: "computercraft:pocket_computer_advanced",
        pattern: [" E ", "AAA", "CBC", "ADA"],
        key: {
          A: "create:brass_sheet",
          B: "create:electron_tube",
          C: "create:display_board",
          D: "create:precision_mechanism",
          E: "create:redstone_link"
        }
      },
      {
        output: "computercraft:turtle_advanced",
        pattern: ["ADA", "ABA"],
        key: {
          A: "create:brass_sheet",
          B: "computercraft:turtle_normal",
          D: "create:precision_mechanism"
        }
      },
      {
        output: "polaroidcamera:camera",
        pattern: ["AAA", "CBC", "CDC"],
        key: {
          A: "create:brass_sheet",
          B: "create:electron_tube",
          C: "techreborn:tin_ingot",
          D: "create:precision_mechanism"
        }
      },
      {
        output: "ad_astra:energizer",
        pattern: [" E ", "ADA", "ACA", "BAB"],
        key: {
          A: "ad_astra:ostrum_plate",
          B: "ad_astra:ostrum_block",
          C: "tconstruct:cobalt_block",
          D: "createastral:navigation_mechanism",
          E: "createaddition:modular_accumulator"
        }
      },
      {
        output: "ad_astra:jet_suit",
        pattern: ["  F  ", "AAGAA", " BEB ", " CDC "],
        key: {
          A: "ad_astra:calorite_plate",
          B: "ad_astra:calorite_tank",
          C: "ad_astra:calorite_block",
          D: "ad_astra:calorite_engine",
          E: Item.of("ad_astra:netherite_space_suit").ignoreNBT(),
          F: "createastral:subatomic_ingot",
          G: "createastral:navigation_mechanism"
        }
      },
      {
        output: "ad_astra:jet_suit_helmet",
        pattern: [" F ", "AEA", "AGA"],
        key: {
          A: "ad_astra:calorite_plate",
          E: Item.of("ad_astra:netherite_space_helmet").ignoreNBT(),
          F: "create:integrated_circuit",
          G: "createastral:subatomic_ingot"
        }
      },
      {
        output: "ad_astra:jet_suit_pants",
        pattern: ["CEC", "AFA", "A A", "A A"],
        key: {
          A: "ad_astra:calorite_plate",
          C: "ad_astra:calorite_block",
          E: Item.of("ad_astra:netherite_space_pants").ignoreNBT(),
          F: "createastral:subatomic_ingot"
        }
      },
      {
        output: "ad_astra:jet_suit_boots",
        pattern: ["FEF", "A A", "C C"],
        key: {
          A: "ad_astra:calorite_plate",
          C: "ad_astra:calorite_block",
          E: Item.of("ad_astra:netherite_space_boots").ignoreNBT(),
          F: "dustrial_decor:padded_block"
        }
      },
      {
        output: "doodads:slimey_shoes",
        pattern: [" D ", "EFE", "ABA", "CGC"],
        key: {
          A: "ad_astra:steel_plate",
          B: "create:sticker",
          C: "minecraft:slime_block",
          D: "createastral:navigation_mechanism",
          E: "tconstruct:slimesteel_block",
          F: "dustrial_decor:padded_block",
          G: "tconstruct:queens_slime_block"
        }
      },
      {
        output: "doodads:ender_goggles",
        pattern: [" AAA ", "CBABC"],
        key: {
          A: "createdeco:cast_iron_sheet",
          B: "minecraft:ender_eye",
          C: "minecraft:string"
        }
      },
      {
        output: "doodads:midnights_eye",
        pattern: ["DCCCD", "CBCAC", "DCCCD"],
        key: {
          A: "create:refined_radiance",
          B: "create:shadow_steel",
          C: "minecraft:glowstone",
          D: "create:powdered_obsidian"
        }
      },
      {
        output: "doodads:speed_boots",
        pattern: [" ADA ", " AEAC", "BBBB "],
        key: {
          A: "ad_astra:calorite_plate",
          B: "create:sturdy_sheet",
          C: "ad_astra:steel_engine",
          D: "createastral:navigation_mechanism",
          E: "dustrial_decor:padded_block"
        }
      },
      {
        output: "buildinggadgets:gadget_building",
        pattern: [" I ", "SOS", "S8S", "SNS"],
        key: {
          S: "techreborn:silver_plate",
          8: "ae2:spatial_cell_component_2",
          O: "techreborn:basic_display",
          I: "ae2:wireless_receiver",
          N: "createastral:navigation_mechanism"
        }
      },
      {
        output: "buildinggadgets:gadget_copy_paste",
        pattern: [" I ", "SOS", "SMS", "SNS"],
        key: {
          S: "techreborn:silver_plate",
          M: "ae2:memory_card",
          O: "techreborn:basic_display",
          I: "ae2:wireless_receiver",
          N: "createastral:navigation_mechanism"
        }
      },
      {
        output: "ad_astra:ostrum_engine",
        pattern: [" F ", "FEF", "FDF", "ABA"],
        key: {
          A: "createastral:shimmer_amplifier",
          B: "createaddition:capacitor",
          D: "createaddition:tesla_coil",
          E: "ad_astra:ostrum_block",
          F: "ad_astra:ostrum_plate"
        }
      },
      {
        output: "kubejs:fragile_sheet_block",
        pattern: ["FFFF", "FFFF", "FFFF", "FFFF"],
        key: {
          F: "createastral:fragile_sheet"
        }
      },
      {
        output: "astraladditions:pylon",
        pattern: [" C ", "CEC", "CNC", " C "],
        key: {
          C: "astraladditions:moonset_crystal_block",
          E: "minecraft:ender_eye",
          N: "createastral:navigation_mechanism"
        }
      },
      {
        output: "astraladditions:meteor_mitts",
        pattern: ["SSSSS", "SSISS", "SCCCS", " CCC "],
        key: {
          S: "astraladditions:moonset_crystal_block",
          C: "createastral:ender_plating",
          I: "createastral:astral_singularity"
        }
      },
      {
        output: "doodads:celestial_ring",
        pattern: [" I ", "C C", " E "],
        key: {
          C: "createastral:ender_plating",
          I: "createastral:astral_singularity",
          E: "astraladditions:moonblazed_orb"
        }
      },
      {
        output: "yttr:projector",
        pattern: ["MSM", "MIM", " E ", " C "],
        key: {
          S: "astraladditions:moonset_crystal_block",
          C: "createastral:ender_plating",
          I: "createastral:astral_singularity",
          E: "createastral:promethium_atomic_battery",
          M: "createastral:prismatic_crystal"
        }
      },
      {
        output: "yttr:shifter",
        pattern: ["MMCMM", " MIM ", "  E  "],
        key: {
          C: "createastral:ender_plating",
          I: "createastral:astral_singularity",
          E: "createastral:promethium_atomic_battery",
          M: "createastral:prismatic_crystal"
        }
      },
      // yttric rifle
      {
        output: "yttr:rifle",
        pattern: ["CCY  ", "YMEIC", " CIYC", "   C "],
        key: {
          Y: "yttr:yttrium_block",
          C: "ad_astra:calorite_ingot",
          I: "techreborn:industrial_circuit",
          E: "techreborn:electronic_circuit",
          M: "minecraft:crossbow"
        }
      },
      {
        output: "yttr:rifle_reinforced",
        pattern: ["CCY  ", "YMEIC", " CIYC", "   C "],
        key: {
          Y: "create:refined_radiance_casing",
          C: "createastral:subatomic_ingot",
          I: "techreborn:industrial_circuit",
          E: "techreborn:data_storage_chip",
          M: "yttr:rifle"
        }
      },
      {
        output: "yttr:rifle_overclocked",
        pattern: ["CCY  ", "YMEIC", " CIYC", "   C "],
        key: {
          Y: "create:refined_radiance_casing",
          C: "createastral:ender_plating",
          I: "createastral:astral_singularity",
          E: "createastral:promethium_atomic_battery",
          M: "yttr:rifle_reinforced"
        }
      },
      {
        output: "minecraft:trident",
        pattern: ["  C  ", "C S C", " SDS ", "  S  ", "  S  "],
        key: {
          S: "minecraft:prismarine_shard",
          D: "createaddition:diamond_grit",
          C: "minecraft:prismarine_crystals"
        }
      }
    ];
    mechanicalCraftingRecipes.forEach((recipe) => {
      event.recipes.create.mechanical_crafting(recipe.output, recipe.pattern, recipe.key);
    });
  });
}
function createMillingRecipes() {
  onEvent("recipes", (event) => {
    otherMillingRecipes(event);
    sifterRecipes(event);
    const millingRecipes = [
      {
        input: "minecraft:rooted_dirt",
        output: "minecraft:dirt",
        chance: 1
      },
      {
        input: "farmersdelight:straw",
        output: "minecraft:string",
        chance: 1
      },
      {
        input: "minecraft:bamboo",
        output: "farmersdelight:straw",
        chance: 0.2
      },
      {
        input: "ae2:certus_quartz_dust",
        output: "ae2:certus_crystal_seed",
        chance: 1
      },
      {
        input: "minecraft:gravel",
        output: "minecraft:sand",
        chance: 0.5
      },
      {
        input: "create:veridium",
        output: "minecraft:raw_copper",
        chance: 0.6
      },
      {
        input: "create:asurine",
        output: "minecraft:lapis_lazuli",
        chance: 1
      },
      {
        input: "create:crimsite",
        output: "minecraft:raw_iron",
        chance: 0.4
      },
      {
        input: "create:ochrum",
        output: "minecraft:raw_gold",
        chance: 0.4
      },
      {
        input: "create:limestone",
        output: "techreborn:raw_tin",
        chance: 0.2
      },
      {
        input: "create:scorchia",
        output: "create:raw_zinc",
        chance: 0.4
      },
      {
        input: "create:scoria",
        output: "minecraft:magma_block",
        chance: 1
      },
      {
        input: "minecraft:tuff",
        output: "minecraft:iron_nugget",
        chance: 1
      },
      {
        input: "minecraft:dripstone_block",
        output: Item.of("minecraft:gold_nugget", 2),
        chance: 1
      },
      {
        input: "minecraft:blackstone",
        output: "create:zinc_nugget",
        chance: 0.5
      },
      {
        input: "minecraft:flint",
        output: "techreborn:andesite_dust",
        chance: 1
      },
      {
        input: "minecraft:iron_nugget",
        output: "techreborn:andesite_dust",
        chance: 0.75
      },
      {
        input: "minecraft:tube_coral_block",
        output: Item.of("minecraft:blue_dye", 2),
        chance: 1
      },
      {
        input: "minecraft:brain_coral_block",
        output: Item.of("minecraft:pink_dye", 2),
        chance: 1
      },
      {
        input: "minecraft:bubble_coral_block",
        output: Item.of("minecraft:purple_dye", 2),
        chance: 1
      },
      {
        input: "minecraft:fire_coral_block",
        output: Item.of("minecraft:red_dye", 2),
        chance: 1
      },
      {
        input: "minecraft:horn_coral_block",
        output: Item.of("minecraft:yellow_dye", 2),
        chance: 1
      },
      {
        input: "minecraft:glow_berries",
        output: "naturalist:glow_goop",
        chance: 1
      },
      {
        input: "naturalist:glow_goop",
        output: "minecraft:yellow_dye",
        chance: 1
      },
      {
        input: "minecraft:twisting_vines",
        output: "minecraft:blue_dye",
        chance: 1
      },
      {
        input: "minecraft:weeping_vines",
        output: "minecraft:red_dye",
        chance: 1
      },
      {
        input: "minecraft:sweet_berries",
        output: "minecraft:red_dye",
        chance: 1
      },
      {
        input: "vinery:red_grape",
        output: "minecraft:purple_dye",
        chance: 0.5
      },
      {
        input: "vinery:white_grape",
        output: "minecraft:lime_dye",
        chance: 0.5
      },
      {
        input: "minecraft:melon_slice",
        output: "minecraft:red_dye",
        chance: 0.5
      },
      {
        input: "minecraft:snow_block",
        output: Item.of("minecraft:snowball", 2),
        chance: 1
      },
      {
        input: "createastral:crushed_raw_gadolinite",
        output: "yttr:yttrium_dust",
        chance: 1
      },
      {
        input: "createastral:broken_fragile_sheet",
        output: "create:powdered_obsidian",
        chance: 1
      },
      {
        input: "createastral:broken_fragile_rocket_fin",
        output: Item.of("create:powdered_obsidian", 6),
        chance: 1
      },
      {
        input: "kubejs:broken_fragile_sheet_block",
        output: Item.of("create:powdered_obsidian", 6),
        chance: 1
      },
      {
        input: "kubejs:broken_fire_resistant_fragile_sheet_block",
        output: Item.of("create:powdered_obsidian", 6),
        chance: 1
      },
      {
        input: "astraladditions:shimmer_blaze_rod",
        output: Item.of("astraladditions:shimmer_blaze_powder", 2),
        chance: 1
      },
      {
        input: "minecraft:amethyst_shard",
        output: "techreborn:amethyst_dust",
        chance: 1
      },
      {
        input: "minecraft:diorite",
        output: "minecraft:quartz",
        chance: 0.25
      },
      {
        input: "minecraft:dried_kelp",
        output: "minecraft:gunpowder",
        chance: 0.25
      },
      {
        input: "techreborn:rubber_log",
        output: "techreborn:sap",
        chance: 0.35
      }
    ];
    millingRecipes.forEach((recipe) => {
      event.recipes.createMilling([Item.of(recipe.output).withChance(recipe.chance)], recipe.input);
    });
  });
  function otherMillingRecipes(event) {
    const otherMillingRecipes2 = [
      {
        input: "minecraft:obsidian",
        output: ["create:powdered_obsidian", Item.of("minecraft:obsidian").withChance(0.25)]
      }
    ];
    otherMillingRecipes2.forEach((recipe) => {
      event.recipes.createMilling(recipe.output, recipe.input);
    });
  }
  function sifterRecipes(event) {
    const sifterRecipes2 = [
      {
        inputs: [{ item: "minecraft:coarse_dirt" }],
        outputs: [
          { item: "minecraft:dirt", chance: 1 },
          { item: "minecraft:flint", chance: 0.3 }
        ],
        processingTime: 50
      },
      {
        inputs: [{ item: "minecraft:basalt" }],
        outputs: [
          { item: "minecraft:magma_cream", chance: 0.1 },
          { item: "minecraft:ghast_tear", chance: 0.05 },
          { item: "minecraft:blaze_powder", chance: 0.1 }
        ],
        processingTime: 200
      },
      {
        inputs: [{ item: "minecraft:cobbled_deepslate" }],
        outputs: [
          { item: "minecraft:redstone", chance: 0.1 },
          { item: "create:copper_nugget", chance: 0.05 }
        ],
        processingTime: 50
      },
      {
        inputs: [{ item: "extractinator:silt" }],
        outputs: [
          { item: "minecraft:raw_iron", chance: 0.2 },
          { item: "minecraft:raw_copper", chance: 0.4 },
          { item: "minecraft:raw_gold", chance: 0.2 },
          { item: "create:raw_zinc", chance: 0.2 }
        ],
        processingTime: 1e3
      },
      {
        inputs: [{ item: "extractinator:slush" }],
        outputs: [
          { item: "minecraft:raw_iron", chance: 0.2 },
          { item: "minecraft:raw_copper", chance: 0.4 },
          { item: "minecraft:raw_gold", chance: 0.2 },
          { item: "create:raw_zinc", chance: 0.2 }
        ],
        processingTime: 1e3
      },
      {
        inputs: [{ item: "minecraft:prismarine" }],
        outputs: [
          { item: "minecraft:cod", chance: 0.2 },
          { item: "minecraft:salmon", chance: 0.1 },
          { item: "minecraft:tropical_fish", chance: 0.05 },
          { item: "minecraft:pufferfish", chance: 0.03 },
          { item: "minecraft:nautilus_shell", chance: 0.02 },
          { item: "minecraft:lily_pad", chance: 0.2 },
          { item: "minecraft:glow_ink_sac", chance: 0.1 }
        ],
        processingTime: 100
      },
      {
        inputs: [{ item: "minecraft:soul_sand" }],
        outputs: [
          { item: "xpcrystals:soul_compound", chance: 1 },
          { item: "xpcrystals:soul_compound", chance: 0.5 },
          { item: "minecraft:soul_sand", chance: 0.25 }
        ]
      },
      {
        inputs: [
          {
            item: "minecraft:clay"
          }
        ],
        outputs: [
          {
            item: "minecraft:kelp",
            chance: 0.2
          },
          {
            item: "minecraft:seagrass",
            chance: 0.3
          },
          {
            item: "minecraft:tube_coral",
            chance: 0.05
          },
          {
            item: "minecraft:brain_coral",
            chance: 0.05
          },
          {
            item: "minecraft:bubble_coral",
            chance: 0.05
          },
          {
            item: "minecraft:fire_coral",
            chance: 0.05
          },
          {
            item: "minecraft:horn_coral",
            chance: 0.05
          }
        ],
        processingTime: 50
      }
    ];
    sifterRecipes2.forEach((recipe) => {
      const inputs = recipe.inputs.map((input) => input.item);
      const outputs = recipe.outputs.map((output) => Item.of(output.item).withChance(output.chance));
      event.recipes.createMilling(outputs, inputs);
    });
  }
}
function createMixingRecipes() {
  onEvent("recipes", (event) => {
    farmersCompatMixing(event);
    const mixingRecipes = [
      {
        output: [
          {
            fluid: "estrogen:molten_amethyst",
            amount: INGOT / 2
          }
        ],
        input: [
          {
            fluid: "tconstruct:molten_amethyst",
            amount: 500 * mB
          },
          "astraladditions:bulba_root"
        ],
        time: 105
      },
      {
        output: ["create:tree_fertilizer"],
        input: ["#minecraft:saplings", "#c:coral_fans", "minecraft:bone_meal"],
        time: 180
      },
      {
        output: [
          {
            fluid: "kubejs:shimmer",
            amount: BUCKET / 9
          }
        ],
        input: ["ae2:fluix_crystal", "minecraft:glowstone_dust", "tconstruct:amethyst_bronze_nugget"],
        heat: "heated",
        time: 180
      },
      {
        output: [
          {
            fluid: "kubejs:shimmer",
            amount: BUCKET
          }
        ],
        input: [Item.of("createastral:shimmer_marimo", 4), "naturalist:glow_goop", "astraladditions:lune_shroom"],
        heat: "heated",
        time: 180
      },
      {
        output: ["astraladditions:shimmer_heart"],
        input: [
          Item.of("createastral:shimmer_marimo", 2),
          "minecraft:heart_of_the_sea",
          {
            fluid: "xpcrystals:soul",
            amount: BUCKET
          }
        ],
        heat: "heated",
        time: 180
      },
      {
        output: ["astraladditions:shimmer_blaze_rod"],
        input: [
          Item.of("createastral:shimmer_marimo", 2),
          Item.of("minecraft:blaze_rod", 2),
          "tconstruct:blazing_bone"
        ],
        heat: "heated",
        time: 180
      },
      {
        output: [{ fluid: "tconstruct:ender_slime", amount: 250 * mB }],
        input: ["createastral:ender_marimo", "ae2:ender_dust", { fluid: "tconstruct:earth_slime", amount: 125 * mB }],
        heat: "heated",
        time: 180
      },
      {
        output: [Item.of("createastral:shimmer_marimo", 1)],
        input: [
          "createastral:marimo",
          "ae2:fluix_crystal",
          {
            fluid: "kubejs:shimmer",
            amount: 500 * mB
          }
        ],
        time: 180
      },
      {
        output: [Item.of("createastral:shimmer_marimo", 2)],
        input: [
          "createastral:shimmer_marimo",
          "ae2:fluix_crystal_seed",
          {
            fluid: "kubejs:shimmer",
            amount: INGOT
          }
        ],
        time: 180
      },
      {
        output: [Item.of("createastral:ender_marimo", 1)],
        input: [
          "createastral:marimo",
          "tconstruct:ender_slime_crystal",
          {
            fluid: "kubejs:shimmer",
            amount: 500 * mB
          }
        ],
        time: 180
      },
      {
        output: [Item.of("createastral:ender_marimo", 2)],
        input: [
          "createastral:ender_marimo",
          "tconstruct:ender_slime_grass_seeds",
          {
            fluid: "astraladditions:sputum",
            amount: INGOT
          }
        ],
        time: 180
      },
      {
        output: [Item.of("createastral:snowy_marimo", 1)],
        input: [
          "createastral:marimo",
          "createastral:prismatic_crystal",
          {
            fluid: "kubejs:shimmer",
            amount: 500 * mB
          }
        ],
        time: 180
      },
      {
        output: [Item.of("createastral:snowy_marimo", 2)],
        input: [
          "createastral:snowy_marimo",
          "ad_astra:ice_shard",
          {
            fluid: "minecraft:water",
            amount: 500 * mB
          }
        ],
        time: 180
      },
      {
        output: [
          Item.of(Item.of("createastral:marimo", 2)).withChance(0.4),
          Item.of(Item.of("createastral:moonset_marimo", 2)).withChance(0.6),
          {
            fluid: "minecraft:water",
            amount: BUCKET
          }
        ],
        input: [
          "createastral:marimo",
          "createastral:moonset_marimo",
          {
            fluid: "minecraft:water",
            amount: BUCKET
          }
        ],
        time: 60
      },
      {
        output: [Item.of("createastral:moonset_marimo", 1)],
        input: [
          "createastral:marimo",
          "astraladditions:moonset_crystal",
          {
            fluid: "kubejs:shimmer",
            amount: 500 * mB
          }
        ],
        time: 180
      },
      {
        output: [
          Item.of("createastral:marimo", 2),
          {
            fluid: "minecraft:water",
            amount: 500 * mB
          }
        ],
        input: [
          "createastral:marimo",
          {
            fluid: "minecraft:water",
            amount: 500 * mB
          }
        ],
        time: 60
      },
      {
        output: [
          {
            fluid: "milk:still_milk",
            amount: 500 * mB
          },
          "cookingforblockheads:cow_jar"
        ],
        input: ["cookingforblockheads:cow_jar"],
        time: 60
      },
      {
        output: [
          {
            fluid: "estrogen:horse_urine",
            amount: 500 * mB
          },
          "createastral:horse"
        ],
        input: ["createastral:horse"],
        time: 60
      },
      {
        output: Item.of("create:blaze_cake", 8),
        input: ["yttr:delicace", { fluid: "kubejs:metabolic_broth", amount: 250 * mB }],
        heat: "superheated",
        time: 100
      },
      {
        output: "minecraft:feather",
        input: ["minecraft:stick", "minecraft:string"],
        time: 100
      },
      {
        output: "minecraft:bone_meal",
        input: ["techreborn:calcite_dust", { fluid: "minecraft:water", amount: 100 * mB }],
        time: 100
      },
      {
        output: Item.of("minecraft:soul_soil", 2),
        input: ["minecraft:dirt", "minecraft:soul_sand"],
        time: 100
      },
      {
        output: "minecraft:small_amethyst_bud",
        input: ["techreborn:amethyst_dust", "ae2:certus_crystal_seed"],
        time: 200
      },
      {
        output: "minecraft:rotten_flesh",
        input: [
          "#c:raw_meat",
          {
            fluid: "tconstruct:blood",
            amount: 25 * mB
          }
        ],
        time: 100
      },
      {
        output: "minecraft:shroomlight",
        input: [
          [
            "minecraft:brown_mushroom_block",
            "minecraft:red_mushroom_block",
            "minecraft:mushroom_stem",
            "minecraft:nether_wart_block",
            "minecraft:warped_wart_block"
          ],
          "naturalist:glow_goop",
          {
            fluid: "create:honey",
            amount: 25 * mB
          }
        ],
        time: 100
      },
      {
        output: "minecraft:shroomlight",
        input: [
          [
            "minecraft:brown_mushroom_block",
            "minecraft:red_mushroom_block",
            "minecraft:mushroom_stem",
            "minecraft:nether_wart_block",
            "minecraft:warped_wart_block"
          ],
          Item.of("minecraft:glowstone_dust", 2),
          {
            fluid: "create:honey",
            amount: 25 * mB
          }
        ],
        time: 100
      },
      {
        output: "minecraft:ice",
        input: [
          Item.of("minecraft:snowball", 2),
          {
            fluid: "minecraft:water",
            amount: BUCKET * 0.5
          }
        ],
        time: 100
      },
      {
        output: Item.of("custommachinery:custom_machine_item", {
          machine: "createastral:channeling_transformer"
        }),
        input: [
          "createaddition:tesla_coil",
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:channeling",lvl:1s}]}'),
          { fluid: "tconstruct:molten_netherite", amount: BUCKET }
        ]
      },
      {
        output: {
          fluid: "kubejs:smite",
          amount: 5 * mB
        },
        input: [
          {
            fluid: "minecraft:lava",
            amount: 100 * mB
          },
          Item.of("minecraft:basalt", 2)
        ],
        heat: "heated",
        time: 400
      },
      //mixing recipes for coral
      {
        output: "minecraft:tube_coral_block",
        input: [
          ["minecraft:tropical_fish", "minecraft:pufferfish"],
          Item.of("minecraft:kelp", 3),
          "minecraft:blue_dye",
          {
            fluid: "kubejs:shimmer",
            amount: 100 * mB
          }
        ],
        time: 100
      },
      {
        output: "minecraft:brain_coral_block",
        input: [
          ["minecraft:tropical_fish", "minecraft:pufferfish"],
          Item.of("minecraft:kelp", 3),
          "minecraft:pink_dye",
          {
            fluid: "kubejs:shimmer",
            amount: 100 * mB
          }
        ],
        time: 100
      },
      {
        output: "minecraft:bubble_coral_block",
        input: [
          ["minecraft:tropical_fish", "minecraft:pufferfish"],
          Item.of("minecraft:kelp", 3),
          "minecraft:purple_dye",
          {
            fluid: "kubejs:shimmer",
            amount: 100 * mB
          }
        ],
        time: 100
      },
      {
        output: "minecraft:fire_coral_block",
        input: [
          ["minecraft:tropical_fish", "minecraft:pufferfish"],
          Item.of("minecraft:kelp", 3),
          "minecraft:red_dye",
          {
            fluid: "kubejs:shimmer",
            amount: 100 * mB
          }
        ],
        time: 100
      },
      {
        output: "minecraft:horn_coral_block",
        input: [
          ["minecraft:tropical_fish", "minecraft:pufferfish"],
          Item.of("minecraft:kelp", 3),
          "minecraft:yellow_dye",
          {
            fluid: "kubejs:shimmer",
            amount: 100 * mB
          }
        ],
        time: 100
      },
      {
        output: Item.of("minecraft:blaze_powder", 2),
        input: ["minecraft:blaze_rod"]
      },
      {
        output: "techreborn:plantball",
        input: [
          Ingredient.of("#minecraft:leaves", 9),
          {
            fluid: "createaddition:seed_oil",
            amount: 500 * mB
          }
        ],
        heat: "heated",
        time: 1e3
      },
      {
        output: "techreborn:plantball",
        input: [
          Ingredient.of("#c:grass_variants", 9),
          {
            fluid: "createaddition:seed_oil",
            amount: 500 * mB
          }
        ],
        heat: "heated",
        time: 1e3
      },
      {
        output: "techreborn:plantball",
        input: [
          Item.of("minecraft:kelp", 9),
          {
            fluid: "createaddition:seed_oil",
            amount: 500 * mB
          }
        ],
        heat: "heated",
        time: 1e3
      },
      {
        output: "techreborn:plantball",
        input: [
          Item.of("createastral:marimo", 9),
          {
            fluid: "createaddition:seed_oil",
            amount: 500 * mB
          }
        ],
        heat: "heated",
        time: 1e3
      },
      {
        output: "techreborn:plantball",
        input: [
          Item.of("minecraft:sugar_cane", 9),
          {
            fluid: "createaddition:seed_oil",
            amount: 500 * mB
          }
        ],
        heat: "heated",
        time: 1e3
      },
      {
        output: "createastral:ender_mush",
        input: [
          Item.of("tconstruct:ender_slime_crystal", 2),
          {
            fluid: "astraladditions:sputum",
            amount: 500 * mB
          }
        ],
        heat: "superheated",
        time: 1e3
      },
      {
        output: "techreborn:plantball",
        input: [
          Item.of("farmersdelight:straw", 3),
          {
            fluid: "createaddition:seed_oil",
            amount: 500 * mB
          }
        ],
        heat: "heated",
        time: 1e3
      },
      {
        output: [
          Item.of("minecraft:tube_coral").withChance(0.2),
          Item.of("minecraft:brain_coral").withChance(0.2),
          Item.of("minecraft:bubble_coral").withChance(0.2),
          Item.of("minecraft:fire_coral").withChance(0.2),
          Item.of("minecraft:horn_coral").withChance(0.2)
        ],
        input: [
          Item.of("minecraft:sea_pickle", 4),
          {
            fluid: "minecraft:water",
            amount: 250 * mB
          }
        ],
        time: 50
      },
      {
        output: [
          Item.of("minecraft:tube_coral_fan").withChance(0.2),
          Item.of("minecraft:brain_coral_fan").withChance(0.2),
          Item.of("minecraft:bubble_coral_fan").withChance(0.2),
          Item.of("minecraft:fire_coral_fan").withChance(0.2),
          Item.of("minecraft:horn_coral_fan").withChance(0.2)
        ],
        input: [
          Item.of("minecraft:dried_kelp", 4),
          {
            fluid: "minecraft:water",
            amount: 250 * mB
          }
        ],
        time: 50
      },
      {
        output: Item.of("tconstruct:nether_grout", 3),
        input: [
          "minecraft:magma_cream",
          "minecraft:soul_sand",
          "create:scoria",
          "#c:dusts/obsidian",
          "#c:dusts/obsidian",
          "#c:dusts/obsidian"
        ],
        heat: "heated",
        time: 700
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:mending",lvl:1s}]}'),
        input: [Item.of("minecraft:book", 6), Item.of("create:experience_nugget", 4)],
        heat: "heated",
        time: 700
      },
      {
        output: Fluid.of("kubejs:blast-resistant_cement", BUCKET),
        input: [
          "#c:concrete_powder",
          Item.of("createastral:lime", 2),
          Item.of("techreborn:steel_dust", 3),
          { fluid: "minecraft:water", amount: BUCKET }
        ],
        heat: "heated",
        time: 1e3
      },
      {
        output: Fluid.of("create:honey", 100 * mB),
        input: ["techreborn:sap", "minecraft:sugar"],
        time: 100
      },
      {
        output: Item.of("dustrial_decor:cast_iron_billet", 3),
        input: ["minecraft:iron_ingot", Item.of("create:andesite_alloy", 2), "minecraft:coal"]
      },
      {
        output: "techreborn:rubber",
        input: ["techreborn:sap"],
        time: 50
      },
      {
        output: Item.of("techreborn:machine_parts", 4),
        input: ["ad_astra:steel_plate", "techreborn:carbon_mesh", Ingredient.of("#c:wires", 8)],
        heat: "superheated",
        time: 400
      },
      {
        output: Item.of("techreborn:carbon_mesh", 1),
        input: [Item.of("techreborn:carbon_fiber", 2)],
        heat: "superheated",
        time: 400
      },
      {
        output: Fluid.of("tconstruct:molten_brass", INGOT * 2),
        input: [
          { fluid: "tconstruct:molten_copper", amount: INGOT },
          { fluid: "tconstruct:molten_zinc", amount: INGOT }
        ],
        heat: "heated",
        time: 300
      },
      {
        output: Fluid.of("tconstruct:molten_brass", INGOT * 2),
        input: [Item.of("create:copper_nugget", 9), Item.of("create:zinc_nugget", 9)],
        heat: "heated",
        time: 300
      },
      {
        output: Fluid.of("tconstruct:molten_brass", INGOT * 4),
        input: ["minecraft:copper_ingot", "create:zinc_ingot"],
        heat: "superheated",
        time: 300
      },
      {
        output: Fluid.of("techreborn:silicon", mB * 25),
        input: ["#c:sand"],
        heat: "heated",
        time: 30
      },
      {
        output: Fluid.of("techreborn:silicon", mB * 200),
        input: ["ae2:certus_quartz_dust"],
        heat: "heated",
        time: 100
      },
      {
        output: Fluid.of("techreborn:silicon", mB * 400),
        input: ["ae2:certus_quartz_crystal"],
        heat: "superheated",
        time: 200
      },
      {
        output: Fluid.of("tconstruct:molten_amethyst_bronze", INGOT * 4),
        input: ["createastral:bronze_ingot", "minecraft:amethyst_shard"],
        heat: "superheated",
        time: 100
      },
      {
        output: Fluid.of("tconstruct:molten_amethyst_bronze", INGOT * 2),
        input: [Item.of("techreborn:bronze_nugget", 9), "minecraft:amethyst_shard"],
        heat: "heated",
        time: 100
      },
      {
        output: Fluid.of("tconstruct:molten_amethyst_bronze", INGOT * 2),
        input: [
          { fluid: "tconstruct:molten_bronze", amount: INGOT },
          { fluid: "tconstruct:molten_amethyst", amount: INGOT }
        ],
        heat: "heated",
        time: 100
      },
      {
        output: Fluid.of("tconstruct:molten_bronze", INGOT * 2),
        input: [
          { fluid: "tconstruct:molten_tin", amount: INGOT },
          { fluid: "tconstruct:molten_copper", amount: INGOT }
        ],
        time: 100
      },
      {
        output: Fluid.of("tconstruct:molten_rose_gold", INGOT * 2),
        input: [Item.of("minecraft:gold_nugget", 9), Item.of("create:copper_nugget", 9)],
        heat: "heated",
        time: 300
      },
      {
        output: Fluid.of("tconstruct:molten_bronze", INGOT * 2),
        input: [Item.of("create:copper_nugget", 9), Item.of("techreborn:tin_nugget", 9)],
        time: 300
      },
      {
        output: Fluid.of("tconstruct:molten_bronze", INGOT * 4),
        input: ["minecraft:copper_ingot", "techreborn:tin_ingot"],
        heat: "superheated",
        time: 300
      },
      {
        output: Fluid.of("tconstruct:molten_rose_gold", INGOT * 4),
        input: ["minecraft:copper_ingot", "minecraft:gold_ingot"],
        heat: "superheated",
        time: 300
      },
      {
        output: Fluid.of("tconstruct:molten_rose_gold", INGOT / 10),
        input: [
          { fluid: "tconstruct:molten_copper", amount: INGOT / 10 },
          { fluid: "tconstruct:molten_gold", amount: INGOT / 10 }
        ],
        time: 10
      },
      {
        output: Fluid.of("tconstruct:molten_electrum", INGOT / 9),
        input: ["techreborn:silver_nugget", "minecraft:gold_nugget"],
        heat: "heated",
        time: 111
      },
      {
        output: Fluid.of("tconstruct:molten_electrum", INGOT / 10),
        input: [
          { fluid: "tconstruct:molten_silver", amount: INGOT / 10 },
          { fluid: "tconstruct:molten_gold", amount: INGOT / 10 }
        ],
        heat: "heated",
        time: 100
      },
      {
        output: Fluid.of("tconstruct:molten_electrum", INGOT * 2),
        input: ["techreborn:silver_ingot", "minecraft:gold_ingot"],
        heat: "superheated",
        time: 100
      },
      {
        output: Fluid.of("tconstruct:molten_steel", INGOT),
        input: ["techreborn:steel_dust"],
        heat: "heated",
        time: 100
      },
      {
        output: Fluid.of("tconstruct:molten_slimesteel", INGOT),
        input: ["minecraft:iron_ingot", "tconstruct:sky_slime_ball", "#tconstruct:seared_blocks"],
        heat: "heated",
        time: 300
      },
      {
        output: Fluid.of("tconstruct:molten_slimesteel", INGOT),
        input: [
          { fluid: "tconstruct:molten_iron", amount: INGOT },
          { fluid: "tconstruct:sky_slime", amount: 250 * mB },
          "#tconstruct:seared_blocks"
        ],
        heat: "heated",
        time: 40
      },
      {
        output: Fluid.of("tconstruct:molten_slimesteel", INGOT),
        input: [
          Item.of("minecraft:iron_nugget", 9),
          { fluid: "tconstruct:sky_slime", amount: 250 * mB },
          "#tconstruct:seared_blocks"
        ],
        heat: "heated",
        time: 40
      },
      {
        output: Fluid.of("tconstruct:molten_slimesteel", INGOT),
        input: [Item.of("minecraft:iron_nugget", 9), "tconstruct:sky_slime_ball", "#tconstruct:seared_blocks"],
        heat: "heated",
        time: 300
      },
      {
        output: Fluid.of("tconstruct:molten_slimesteel", INGOT * 2),
        input: ["minecraft:iron_ingot", "tconstruct:sky_slime_ball", "#tconstruct:seared_blocks"],
        heat: "superheated",
        time: 300
      },
      {
        output: Item.of("ae2:certus_quartz_crystal", 2),
        input: [{ fluid: "minecraft:water", amount: 250 * mB }, Item.of("ae2:certus_quartz_dust", 1)],
        heat: "heated",
        time: 40
      },
      {
        output: Fluid.of("tconstruct:molten_pig_iron", INGOT),
        input: ["minecraft:porkchop", Item.of("minecraft:iron_nugget", 9), Item.of("minecraft:gold_nugget", 9)],
        heat: "heated",
        time: 300
      },
      {
        output: Fluid.of("tconstruct:molten_pig_iron", INGOT),
        input: [
          "minecraft:porkchop",
          { fluid: "tconstruct:molten_iron", amount: INGOT },
          { fluid: "tconstruct:molten_gold", amount: INGOT }
        ],
        heat: "heated",
        time: 250
      },
      {
        output: Fluid.of("tconstruct:molten_pig_iron", INGOT * 2),
        input: ["minecraft:porkchop", "minecraft:iron_ingot", "minecraft:gold_ingot"],
        heat: "superheated",
        time: 300
      },
      {
        output: Fluid.of("tconstruct:molten_queens_slime", INGOT / 5),
        input: [
          { fluid: "tconstruct:molten_cobalt", amount: INGOT / 10 },
          { fluid: "tconstruct:molten_slimesteel", amount: INGOT / 5 }
        ],
        heat: "heated",
        time: 5
      },
      {
        output: Fluid.of("tconstruct:molten_queens_slime", INGOT / 4.5),
        input: ["tconstruct:cobalt_nugget", Item.of("tconstruct:slimesteel_nugget", 2)],
        heat: "heated",
        time: 5
      },
      {
        output: Fluid.of("tconstruct:molten_queens_slime", INGOT * 2),
        input: ["tconstruct:slimesteel_ingot", Item.of("tconstruct:cobalt_ingot", 2)],
        heat: "superheated",
        time: 5
      },
      {
        output: Fluid.of("tconstruct:molten_manyullyn", INGOT),
        input: [
          { fluid: "tconstruct:molten_cobalt", amount: INGOT * 2 },
          Item.of("minecraft:netherite_scrap", 1),
          { fluid: "kubejs:molten_desh", amount: INGOT }
        ],
        heat: "heated",
        time: 1e3
      },
      {
        output: Fluid.of("tconstruct:molten_manyullyn", INGOT),
        input: [
          "minecraft:netherite_scrap",
          Item.of("ad_astra:desh_nugget", 9),
          Item.of("tconstruct:cobalt_nugget", 9)
        ],
        heat: "heated",
        time: 1e3
      },
      {
        output: Fluid.of("tconstruct:molten_manyullyn", INGOT * 2),
        input: ["minecraft:netherite_scrap", "ad_astra:desh_ingot", "tconstruct:cobalt_ingot"],
        heat: "superheated",
        time: 1e3
      },
      {
        output: Fluid.of("tconstruct:molten_hepatizon", INGOT / 4.5),
        input: ["tconstruct:cobalt_nugget", Item.of("techreborn:lead_nugget", 2)],
        heat: "heated",
        time: 5
      },
      {
        output: Fluid.of("tconstruct:molten_hepatizon", INGOT / 5),
        input: [
          { fluid: "tconstruct:molten_cobalt", amount: INGOT / 10 },
          { fluid: "tconstruct:molten_lead", amount: INGOT / 5 }
        ],
        heat: "heated",
        time: 5
      },
      {
        output: Fluid.of("tconstruct:molten_hepatizon", INGOT / 2),
        input: ["techreborn:lead_ingot", Item.of("tconstruct:cobalt_ingot", 2)],
        heat: "superheated",
        time: 5
      },
      {
        output: Fluid.of("tconstruct:molten_debris", 250 * mB),
        input: ["minecraft:ancient_debris"],
        heat: "superheated",
        time: 500
      },
      {
        output: "create:chromatic_compound",
        input: [Item.of("techreborn:uu_matter", 4), { fluid: "kubejs:shimmer", amount: BUCKET }],
        heat: "superheated",
        time: 2500
      },
      {
        output: Fluid.of("kubejs:compound_mixture", INGOT),
        input: ["minecraft:andesite", "techreborn:tin_nugget", "minecraft:clay_ball"]
      },
      {
        output: Fluid.of("kubejs:compound_mixture", INGOT),
        input: ["minecraft:andesite", "create:zinc_nugget", "minecraft:clay_ball"]
      },
      {
        output: Fluid.of("kubejs:compound_mixture", INGOT),
        input: ["minecraft:andesite", "minecraft:iron_nugget", "minecraft:clay_ball"]
      },
      {
        output: Fluid.of("kubejs:compound_mixture", INGOT * 12),
        input: ["compressor:compressed_andesite", "minecraft:iron_ingot", "minecraft:clay"],
        heat: "heated"
      },
      {
        output: Fluid.of("kubejs:compound_mixture", INGOT * 12),
        input: ["compressor:compressed_andesite", "create:zinc_ingot", "minecraft:clay"],
        heat: "heated"
      },
      {
        output: Fluid.of("kubejs:compound_mixture", INGOT * 12),
        input: ["compressor:compressed_andesite", "techreborn:tin_ingot", "minecraft:clay"],
        heat: "heated"
      },
      {
        output: Item.of("tconstruct:grout", 8),
        input: ["create:andesite_alloy", "create:zinc_ingot", Item.of("minecraft:gravel", 8)]
      },
      {
        output: "minecraft:tuff",
        input: ["minecraft:basalt", "minecraft:cobblestone"]
      },
      {
        output: Item.of("tconstruct:grout", 8),
        input: ["create:andesite_alloy", "create:zinc_ingot", Item.of("minecraft:gravel", 8)],
        time: 0
      },
      {
        output: "tconstruct:seared_bricks",
        input: [Item.of("tconstruct:seared_brick", 4), "#c:slimeballs"],
        time: 0
      },
      {
        output: "tconstruct:seared_bricks",
        input: [Item.of("tconstruct:seared_brick", 4), "techreborn:sap"],
        time: 0
      },
      {
        output: "techreborn:steel_dust",
        input: [Item.of("minecraft:iron_ingot", 6), Item.of("techreborn:coal_dust", 4)],
        heat: "heated",
        time: 400
      },
      {
        output: "minecraft:glow_ink_sac",
        input: ["minecraft:ink_sac", Item.of("minecraft:glowstone_dust", 2)],
        time: 50
      },
      {
        output: "minecraft:piglin_banner_pattern",
        input: [Item.of("minecraft:paper", 1), Item.of("tconstruct:large_plate", '{Material:"tconstruct:pig_iron"}')],
        time: 100
      },
      {
        output: "minecraft:dolphin_spawn_egg",
        input: [{ fluid: "kubejs:shimmer", amount: 500 * mB }, "createastral:orcane"],
        time: 500
      },
      {
        output: "adoptafloppa:kitney_item",
        input: [{ fluid: "kubejs:shimmer", amount: 500 * mB }, Item.of("minecraft:ghast_tear", 3)],
        time: 500
      },
      {
        output: "blahaj:gray_shark",
        input: [{ fluid: "kubejs:shimmer", amount: BUCKET }, "blahaj:blue_shark"],
        time: 2e3
      },
      {
        output: "createastral:separation_agent",
        input: [{ fluid: "yttr:void", amount: BUCKET }, "createastral:refining_agent"],
        heat: "superheated",
        time: 2e3
      },
      {
        output: Fluid.of("kubejs:molten_radiance", 500 * mB),
        input: [{ fluid: "kubejs:shimmer", amount: BUCKET }, "createastral:pure_star_shard"],
        heat: "superheated",
        time: 2e3
      },
      {
        output: "tconstruct:ichor_slime_ball",
        input: [{ fluid: "kubejs:shimmer", amount: INGOT }, Item.of("tconstruct:sky_slime_ball", 4)],
        heat: "heated",
        time: 30
      },
      {
        output: "tconstruct:ender_slime_ball",
        input: [{ fluid: "kubejs:shimmer", amount: INGOT }, Item.of("tconstruct:ichor_slime_ball", 2)],
        heat: "heated",
        time: 30
      },
      {
        output: "doodads:portable_nether",
        input: [{ fluid: "kubejs:shimmer", amount: BUCKET }, "minecraft:lodestone"],
        heat: "heated",
        time: 500
      },
      {
        output: Item.of("doodads:stone_brick_road", 2),
        input: [{ fluid: "kubejs:shimmer", amount: 500 * mB }, Item.of("minecraft:stone_bricks", 2)],
        time: 1e3
      },
      {
        output: Item.of("doodads:brick_road", 2),
        input: [{ fluid: "kubejs:shimmer", amount: 500 * mB }, Item.of("minecraft:bricks", 2)],
        time: 1e3
      },
      {
        output: "doodads:asphalt",
        input: [{ fluid: "kubejs:compound_mixture", amount: 3e3 }, "#c:concrete_powder"],
        time: 50
      },
      {
        output: Item.of("astraladditions:ender_tip", 2),
        input: ["astraladditions:ender_tip", "yttr:neodymium_dust"],
        time: 50
      },
      {
        output: "astraladditions:twisted_nylium",
        input: ["astraladditions:enderrack", { fluid: "astraladditions:sputum", amount: INGOT }],
        time: 50
      },
      {
        output: { fluid: "create:honey", amount: 500 * mB },
        input: [
          { fluid: "minecraft:water", amount: 500 * mB },
          { fluid: "kubejs:shimmer", amount: 500 * mB }
        ],
        time: 3e3
      },
      {
        output: "createastral:astral_conduit",
        input: [
          { fluid: "kubejs:shimmer", amount: BUCKET },
          "minecraft:diamond_block",
          "phonos:redstone_chip",
          "minecraft:flint_and_steel"
        ],
        time: 30
      },
      {
        output: ["minecraft:sponge", "minecraft:clay"],
        input: ["minecraft:wet_sponge", "minecraft:sand"],
        time: 50
      },
      {
        output: [{ fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET }],
        input: ["create:experience_block"],
        heat: "heated",
        time: 1e3
      },
      {
        output: [{ fluid: "kubejs:liquid_xp_nuggies", amount: INGOT }],
        input: ["createastral:experience_ingot"],
        heat: "heated",
        time: 100
      },
      {
        output: Item.of("minecraft:wet_sponge", 8),
        input: [
          Item.of("minecraft:yellow_dye", 8),
          Item.of("minecraft:black_dye", 2),
          Item.of("minecraft:heart_of_the_sea", 1),
          { fluid: "minecraft:water", amount: BUCKET }
        ],
        time: 500
      },
      {
        output: Item.of("minecraft:paper", 3),
        input: [Item.of("techreborn:saw_dust", 3), { fluid: "minecraft:water", amount: BUCKET }],
        time: 100
      },
      {
        output: "createastral:laskinium",
        input: [
          {
            item: "createastral:subatomic_ingot",
            amount: 2
          },
          {
            item: "createastral:astral_singularity",
            amount: 2
          },
          {
            fluid: "kubejs:molten_calorite",
            amount: INGOT
          }
        ],
        heat: "superheated",
        time: 1e3
      },
      {
        output: "yttr:yttrium_ingot",
        input: [
          {
            fluid: "kubejs:molten_desh",
            amount: INGOT * 4
          },
          {
            fluid: "kubejs:molten_yttrium",
            amount: INGOT
          }
        ],
        heat: "superheated",
        time: 1e3
      },
      {
        output: "yttr:yttrium_ingot",
        input: [
          {
            fluid: "kubejs:molten_ostrum",
            amount: INGOT * 2
          },
          {
            fluid: "kubejs:molten_yttrium",
            amount: INGOT
          }
        ],
        heat: "superheated",
        time: 1e3
      },
      {
        output: "yttr:yttrium_ingot",
        input: [
          {
            fluid: "kubejs:molten_calorite",
            amount: INGOT
          },
          {
            fluid: "kubejs:molten_yttrium",
            amount: INGOT
          }
        ],
        heat: "superheated",
        time: 1e3
      },
      {
        output: "yttr:yttrium_ingot",
        input: [
          Item.of("ad_astra:desh_ingot", 4),
          {
            fluid: "kubejs:molten_yttrium",
            amount: INGOT
          }
        ],
        heat: "superheated",
        time: 1e3
      },
      {
        output: "yttr:yttrium_ingot",
        input: [
          Item.of("ad_astra:ostrum_ingot", 2),
          {
            fluid: "kubejs:molten_yttrium",
            amount: INGOT
          }
        ],
        heat: "superheated",
        time: 1e3
      },
      {
        output: "yttr:yttrium_ingot",
        input: [
          "ad_astra:calorite_ingot",
          {
            fluid: "kubejs:molten_yttrium",
            amount: INGOT
          }
        ],
        heat: "superheated",
        time: 1e3
      },
      {
        output: ["astralfoods:astral_sauce"],
        input: ["createastral:astral_singularity"],
        heat: "superheated",
        time: 80
      },
      {
        output: ["astralfoods:quantum_pasta"],
        input: ["astralfoods:astral_sauce", Item.of("astralfoods:quantum_bites", 2), "farmersdelight:raw_pasta"],
        heat: "heated",
        time: 250
      },
      {
        output: "yttr:ruined_cobblestone",
        input: [
          "minecraft:cobblestone",
          "yttr:rubble",
          {
            fluid: "tconstruct:magma",
            amount: 250 * mB
          }
        ],
        heat: "superheated",
        time: 200
      },
      {
        output: "yttr:wasteland_stone",
        input: ["minecraft:stone", "yttr:rubble", "yttr:rubble"],
        time: 200
      },
      {
        output: "yttr:wasteland_dirt",
        input: ["minecraft:sand", "yttr:rubble", "yttr:rubble"],
        time: 200
      },
      {
        output: "yttr:wasteland_log",
        input: ["minecraft:oak_log", "yttr:rubble", "yttr:rubble"],
        time: 200
      },
      {
        output: Item.of("minecraft:piglin_banner_pattern", 2),
        input: ["minecraft:piglin_banner_pattern", "minecraft:paper"],
        time: 150
      },
      {
        output: Item.of("astraladditions:cometball", 4),
        input: [Item.of("astraladditions:moonset_crystal", 3)],
        time: 150
      },
      {
        output: "astraladditions:blazed_steel_ring",
        input: [
          "astraladditions:steel_ring",
          "astraladditions:shimmer_blaze_powder",
          {
            fluid: "tconstruct:blazing_blood",
            amount: INGOT
          }
        ],
        heat: "heated",
        time: 400
      },
      {
        output: "astraladditions:moonblazed_orb",
        input: [
          "astraladditions:cometball",
          "minecraft:ender_eye",
          "astraladditions:shimmer_blaze_powder",
          {
            fluid: "tconstruct:blazing_blood",
            amount: BUCKET
          }
        ],
        time: 500
      },
      {
        output: "astraladditions:oh-no",
        input: [
          "astraladditions:oh-no_broken",
          "createastral:astral_conduit",
          {
            fluid: "tconstruct:blazing_blood",
            amount: BUCKET
          }
        ],
        heat: "heated",
        time: 500
      },
      //Drink Beer Spices
      {
        output: "drinkbeer:spice_blaze_paprika",
        input: [Item.of("minecraft:blaze_powder", 2), "minecraft:fire_charge"],
        heat: "heated",
        time: 500
      },
      {
        output: "drinkbeer:spice_dried_eglia_bud",
        input: ["minecraft:dried_kelp", Item.of("tconstruct:glow_ball", 2)],
        time: 500
      },
      {
        output: "drinkbeer:spice_smoked_eglia_bud",
        input: ["minecraft:fire_charge", Item.of("tconstruct:glow_ball", 2)],
        heat: "heated",
        time: 500
      },
      {
        output: "drinkbeer:spice_amethyst_nigella_seeds",
        input: [Item.of("techreborn:amethyst_dust", 2), "minecraft:popped_chorus_fruit"],
        time: 500
      },
      {
        output: "drinkbeer:spice_citrine_nigella_seeds",
        input: [Item.of("minecraft:glowstone_dust", 2), "minecraft:popped_chorus_fruit"],
        time: 500
      },
      {
        output: "drinkbeer:spice_ice_mint",
        input: ["minecraft:ice", Ingredient.of("#minecraft:leaves", 4)],
        time: 500
      },
      {
        output: "drinkbeer:spice_ice_patchouli",
        input: ["minecraft:packed_ice", Item.of("minecraft:kelp", 2)],
        time: 500
      },
      {
        output: ["drinkbeer:spice_storm_shards", "ae2:certus_quartz_crystal"],
        input: ["ae2:charged_certus_quartz_crystal", Item.of("minecraft:prismarine_shard", 2)],
        time: 500
      },
      {
        output: "drinkbeer:spice_roasted_red_pine_nuts",
        input: ["minecraft:blaze_powder", Item.of("minecraft:wheat_seeds", 3)],
        heat: "heated",
        time: 500
      },
      {
        output: "drinkbeer:spice_glace_goji_berries",
        input: [Item.of("minecraft:sweet_berries", 3), "minecraft:sugar"],
        heat: "heated",
        time: 500
      },
      {
        output: "drinkbeer:spice_frozen_persimmon",
        input: ["minecraft:blue_ice", "minecraft:glistering_melon_slice"],
        time: 500
      },
      {
        output: "drinkbeer:spice_roasted_pecans",
        input: ["minecraft:blaze_powder", Item.of("minecraft:cocoa_beans", 3)],
        heat: "heated",
        time: 500
      },
      {
        output: "drinkbeer:spice_silver_needle_white_tea",
        input: [
          Item.of("techreborn:silver_nugget", 3),
          {
            fluid: "kubejs:white_grape_juice",
            amount: 166 * mB
          }
        ],
        heat: "heated",
        time: 500
      },
      {
        output: "drinkbeer:spice_golden_cinnamon_powder",
        input: ["minecraft:gold_nugget", Item.of("farmersdelight:tree_bark", 2)],
        heat: "heated",
        time: 500
      },
      {
        output: "drinkbeer:spice_dried_selaginella",
        input: ["minecraft:fern", "#minecraft:sand"],
        time: 500
      },
      //Beer Liquids
      {
        output: [{ fluid: "kubejs:miner_pale_ale_fluid", amount: BUCKET }],
        input: [Item.of("minecraft:wheat", 3), { fluid: "minecraft:water", amount: BUCKET }],
        heat: "heated",
        time: 500
      },
      {
        output: [{ fluid: "kubejs:blaze_stout_fluid", amount: BUCKET }],
        input: [Item.of("minecraft:wheat", 2), "minecraft:blaze_powder", { fluid: "minecraft:water", amount: BUCKET }],
        heat: "heated",
        time: 500
      },
      {
        output: [{ fluid: "kubejs:blaze_milk_stout_fluid", amount: BUCKET }],
        input: [
          "minecraft:wheat",
          "minecraft:sugar",
          "minecraft:blaze_powder",
          { fluid: "minecraft:water", amount: BUCKET }
        ],
        heat: "heated",
        time: 500
      },
      {
        output: [{ fluid: "kubejs:apple_lambic_fluid", amount: BUCKET }],
        input: [Item.of("minecraft:wheat", 2), "minecraft:apple", { fluid: "minecraft:water", amount: BUCKET }],
        heat: "heated",
        time: 500
      },
      {
        output: [{ fluid: "kubejs:sweet_berry_kriek_fluid", amount: BUCKET }],
        input: ["minecraft:sweet_berries", Item.of("minecraft:wheat", 2), { fluid: "minecraft:water", amount: BUCKET }],
        heat: "heated",
        time: 500
      },
      {
        output: [{ fluid: "kubejs:haars_icey_pale_lager_fluid", amount: BUCKET }],
        input: [Item.of("minecraft:wheat", 3), "minecraft:ice"],
        heat: "heated",
        time: 500
      },
      {
        output: [{ fluid: "kubejs:pumpkin_kvass_fluid", amount: BUCKET }],
        input: [Item.of("minecraft:bread", 2), "minecraft:pumpkin", { fluid: "minecraft:water", amount: BUCKET }],
        heat: "heated",
        time: 500
      },
      {
        output: [{ fluid: "kubejs:night_howl_kvass_fluid", amount: BUCKET }],
        input: [Item.of("minecraft:bread", 2), "minecraft:bone", { fluid: "minecraft:water", amount: BUCKET }],
        heat: "heated",
        time: 500
      },
      {
        output: [{ fluid: "kubejs:frothy_pink_eggnog_fluid", amount: BUCKET }],
        input: ["minecraft:wheat", "minecraft:egg", "minecraft:beetroot", { fluid: "minecraft:water", amount: BUCKET }],
        heat: "heated",
        time: 500
      },
      {
        output: [{ fluid: "ad_astra:cryo_fuel", amount: BUCKET }],
        input: [
          { fluid: "techreborn:nitrogen", amount: BUCKET },
          { fluid: "kubejs:aurorite", amount: BUCKET }
        ],
        time: 300
      },
      {
        output: ["techreborn:sulfur_dust"],
        input: [Item.of("minecraft:glowstone_dust", 3), "ae2:sky_dust"],
        time: 50
      },
      {
        output: [{ fluid: "rechreborn:oil", amount: 250 * mB }],
        input: [{ fluid: "techreborn:sulfur", amount: 500 * mB }, Item.of("techreborn:coal_dust", 3)],
        time: 300
      },
      {
        output: [{ fluid: "kubejs:molten_radiance", amount: BUCKET }],
        input: [
          "minecraft:nether_star",
          "minecraft:glowstone",
          "minecraft:sea_lantern",
          Item.of("createastral:separation_agent", 3),
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated",
        time: 1e3
      },
      {
        output: [{ fluid: "kubejs:molten_shadowsteel", amount: BUCKET }],
        input: [
          "minecraft:ender_pearl",
          Item.of("dbe:vanta_black", 8),
          Item.of("createastral:separation_agent", 3),
          Item.of("createastral:voidtouched_compound", 9)
        ],
        heat: "heated",
        time: 1e3
      },
      {
        output: ["create:refined_radiance"],
        input: ["create:chromatic_compound", { fluid: "kubejs:molten_radiance", amount: 100 * mB }],
        heat: "superheated",
        time: 1e3
      },
      {
        output: ["astralfoods:bulbas_tea"],
        input: [
          "astraladditions:bulba_root",
          { fluid: "minecraft:water", amount: 333 * mB },
          { fluid: "milk:still_milk", amount: 333 * mB }
        ],
        heat: "heated",
        time: 45
      },
      {
        output: ["minecraft:blackstone"],
        input: ["minecraft:cobblestone"],
        heat: "superheated",
        time: 20
      },
      {
        output: ["minecraft:tuff"],
        input: ["minecraft:calcite"],
        heat: "superheated",
        time: 20
      },
      {
        output: ["minecraft:crying_obsidian"],
        input: ["minecraft:obsidian"],
        heat: "superheated",
        time: 20
      },
      {
        output: ["createastral:logo"],
        input: ["compressor:octuple_compressed_cobblestone"],
        heat: "superheated",
        time: 20
      },
      {
        output: ["minecraft:wither_rose"],
        input: [Item.of("minecraft:poppy", 6)],
        heat: "superheated",
        time: 20
      },
      {
        output: ["tconstruct:necrotic_bone"],
        input: [Item.of("minecraft:bone", 6)],
        heat: "superheated",
        time: 20
      },
      {
        output: ["estrogen:crystal_estrogen_pill"],
        input: ["estrogen:estrogen_pill", "tconstruct:ender_slime_crystal"],
        heat: "superheated",
        time: 20
      },
      {
        output: ["astraladditions:fragile_item_2"],
        input: [
          Item.of("create:refined_radiance_casing", 8),
          Item.of("create:shadow_steel_casing", 8),
          Item.of("createastral:subatomic_ingot", 4),
          Item.of("createastral:separation_agent", 6)
        ],
        heat: "superheated",
        time: 20
      },
      {
        output: ["createastral:subatomic_ingot"],
        input: [
          Item.of("create:shadow_steel", 4),
          Item.of("create:refined_radiance", 4),
          "techreborn:data_storage_chip"
        ],
        heat: "superheated",
        time: 20
      },
      {
        output: ["yttr:promethium_speck"],
        input: ["tconstruct:ender_slime_crystal", Item.of("yttr:rubble", 4)],
        heat: "superheated",
        time: 20
      },
      {
        output: ["tconstruct:ender_slime_sling"],
        input: ["tconstruct:ichor_slime_sling", "yttr:delicace", { fluid: "kubejs:metabolic_broth", amount: 500 * mB }],
        heat: "superheated",
        time: 20
      },
      {
        output: [{ fluid: "astraladditions:sputum", amount: INGOT }],
        input: ["astraladditions:ender_tip"],
        heat: "superheated",
        time: 20
      },
      {
        output: [{ fluid: "techreborn:mercury", amount: mB * 500 }],
        input: ["yttr:quicksilver"],
        heat: "superheated",
        time: 20
      },
      {
        output: { fluid: "tconstruct:blood", amount: BUCKET },
        input: [
          Item.of("minecraft:beetroot", 2),
          { fluid: "kubejs:tomato_sauce_fluid", amount: 900 * mB },
          { fluid: "kubejs:shimmer", amount: 100 * mB }
        ],
        heat: "heated"
        //Vegan BLOOD
      },
      {
        output: "createastral:seitan",
        input: [Item.of("minecraft:brown_mushroom", 3), { fluid: "createaddition:seed_oil", amount: 100 * mB }]
      },
      {
        output: Item.of("minecraft:moss_block", 4),
        //Yea Moss is automatable now without breaking contraptions, More Blocks out than in? MAGIC
        input: [
          Item.of("minecraft:mossy_cobblestone", 6),
          "minecraft:moss_block",
          Item.of("minecraft:bone_meal", 1),
          { fluid: "minecraft:water", amount: 500 * mB }
        ]
      },
      {
        output: Item.of("minecraft:kelp", 0),
        // If you got the bonemeal, some kelp can be arranged
        input: ["minecraft:kelp", "minecraft:bone_meal", { fluid: "minecraft:water", amount: 500 * mB }],
        time: 120
      },
      {
        output: { fluid: "tconstruct:blazing_blood", amount: BUCKET },
        input: ["minecraft:blaze_powder", { fluid: "tconstruct:blood", amount: BUCKET }],
        heat: "superheated"
        //Vegan BLOOD
      },
      {
        output: Item.of("techreborn:rubber", 8),
        input: [Item.of("techreborn:sap", 3), Item.of("techreborn:sulfur_dust", 1)]
      },
      {
        output: Item.of("minecraft:coarse_dirt", 4),
        input: [Item.of("minecraft:dirt", 2), Item.of("minecraft:gravel", 2)]
        // infinte dirt premoon
      },
      {
        output: { fluid: "kubejs:red_paste", amount: 300 * mB },
        input: [Item.of("minecraft:sweet_berries", 7), { fluid: "minecraft:water", amount: 500 * mB }]
        // red dye for crimsite premoon
      },
      {
        output: { fluid: "minecraft:lava", amount: 125 * mB },
        input: [
          Item.of("techreborn:andesite_dust", 1),
          Item.of("minecraft:cobblestone", 1),
          { fluid: "minecraft:lava", amount: 50 * mB }
        ]
      },
      {
        output: { fluid: "minecraft:lava", amount: 250 * mB },
        input: [
          Item.of("techreborn:andesite_dust", 4),
          Item.of("minecraft:cobblestone", 2),
          { fluid: "minecraft:lava", amount: 50 * mB }
        ],
        heat: "heated"
      },
      {
        output: { fluid: "minecraft:lava", amount: 500 * mB },
        input: [Item.of("techreborn:andesite_dust", 4), Item.of("minecraft:netherrack", 2)],
        heat: "heated"
      },
      {
        output: { fluid: "kubejs:shimmer", amount: 250 * mB },
        input: [Item.of("minecraft:amethyst_shard", 5), Item.of("minecraft:glow_ink_sac", 2)]
      },
      {
        output: { fluid: "kubejs:shimmer", amount: 500 * mB },
        input: [Item.of("techreborn:amethyst_dust", 5), Item.of("minecraft:glow_ink_sac", 2)],
        heat: "heated"
      },
      {
        output: { fluid: "kubejs:shimmer", amount: 1e3 * mB },
        input: [
          Item.of("techreborn:amethyst_dust", 2),
          Item.of("minecraft:glow_ink_sac", 1),
          "astraladditions:lune_shroom"
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:2s}]}'),
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:6s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:5s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
          { fluid: "kubejs:hellfire", amount: 125 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:7s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:6s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
          { fluid: "kubejs:hellfire", amount: 250 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 250 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:6s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:5s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
          { fluid: "kubejs:hellfire", amount: 125 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:7s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:6s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
          { fluid: "kubejs:hellfire", amount: 250 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:6s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:5s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
          { fluid: "kubejs:hellfire", amount: 250 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:6s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:5s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
          { fluid: "kubejs:hellfire", amount: 250 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of(
          "minecraft:enchanted_book",
          '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:2s}]}'
        ),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of(
          "minecraft:enchanted_book",
          '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:3s}]}'
        ),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of(
          "minecraft:enchanted_book",
          '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:4s}]}'
        ),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "superheated"
      },
      {
        output: Item.of(
          "minecraft:enchanted_book",
          '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:5s}]}'
        ),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of(
          "minecraft:enchanted_book",
          '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:6s}]}'
        ),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:5s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
          { fluid: "kubejs:hellfire", amount: 250 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 250 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 250 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 250 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:6s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:5s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
          { fluid: "kubejs:hellfire", amount: 125 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:7s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:6s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
          { fluid: "kubejs:hellfire", amount: 250 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 250 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 250 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:punch",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:punch",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:punch",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:punch",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:punch",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:punch",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 250 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:6s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:5s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
          { fluid: "kubejs:hellfire", amount: 125 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:7s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:6s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
          { fluid: "kubejs:hellfire", amount: 250 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:6s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:5s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
          { fluid: "kubejs:hellfire", amount: 250 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 250 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:knockback",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:knockback",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:knockback",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:knockback",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:knockback",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:knockback",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 250 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:3s}]}'),
          { fluid: "kubejs:hellfire", amount: 250 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 250 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 250 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:6s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:5s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
          { fluid: "kubejs:hellfire", amount: 250 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:6s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:5s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
          { fluid: "kubejs:hellfire", amount: 125 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:7s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:6s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
          { fluid: "kubejs:hellfire", amount: 250 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:depth_strider",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:depth_strider",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:depth_strider",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:depth_strider",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "superheated"
      },
      {
        output: Item.of(
          "minecraft:enchanted_book",
          '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:2s}]}'
        ),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of(
          "minecraft:enchanted_book",
          '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:3s}]}'
        ),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of(
          "minecraft:enchanted_book",
          '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:4s}]}'
        ),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of(
          "minecraft:enchanted_book",
          '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:5s}]}'
        ),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "superheated"
      },
      {
        output: Item.of(
          "minecraft:enchanted_book",
          '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:6s}]}'
        ),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:5s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
          { fluid: "kubejs:hellfire", amount: 125 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of(
          "minecraft:enchanted_book",
          '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:7s}]}'
        ),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:6s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
          { fluid: "kubejs:hellfire", amount: 250 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 250 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 250 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 250 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 250 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:6s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:5s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 500 * mB },
          { fluid: "kubejs:hellfire", amount: 125 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:7s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:6s}]}'),
          "create:experience_block",
          { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
          { fluid: "kubejs:hellfire", amount: 250 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:2s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:1s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 3 * NUGGET },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "heated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:3s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:2s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:4s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:3s}]}'),
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 125 * mB }
        ],
        heat: "superheated"
      },
      {
        output: Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:5s}]}'),
        input: [
          Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:4s}]}'),
          "createastral:experience_ingot",
          { fluid: "kubejs:liquid_xp_nuggies", amount: 2 * INGOT },
          { fluid: "kubejs:hellfire", amount: 250 * mB }
        ],
        heat: "superheated"
      },
      {
        output: { fluid: "kubejs:liquid_xp_nuggies", amount: 1e3 },
        input: ["create:experience_nugget"],
        heat: "heated",
        time: 10
      },
      {
        output: { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        input: ["createastral:experience_ingot"],
        heat: "heated",
        time: 100
      },
      {
        output: { fluid: "kubejs:liquid_xp_nuggies", amount: BUCKET },
        input: ["create:experience_block"],
        heat: "heated",
        time: 1e3
      },
      {
        output: { fluid: "kubejs:liquid_xp_nuggies", amount: 2e3 },
        input: ["xpcrystals:xp_crystal"],
        heat: "heated",
        time: 12
      },
      {
        output: {
          fluid: "tconstruct:liquid_soul",
          amount: 250 * mB
        },
        input: ["xpcrystals:soul_compound"],
        heat: "heated",
        time: 30
      },
      {
        output: {
          fluid: "tconstruct:liquid_soul",
          amount: 250 * mB
        },
        input: ["xpcrystals:soul_compound", { fluid: "minecraft:water", amount: 125 * mB }],
        heat: "heated",
        time: 25
      },
      {
        output: { fluid: "xpcrystals:soul", amount: 250 * mB },
        input: { fluid: "tconstruct:liquid_soul", amount: 250 * mB },
        time: 25
      },
      {
        output: {
          fluid: "createaddition:bioethanol",
          amount: 81e3
        },
        input: ["minecraft:sugar", "create:cinder_flour", Item.of("createaddition:biomass", 2)]
      },
      {
        output: "estrogen:balls",
        input: "minecraft:slime_ball",
        heat: "heated"
      },
      {
        output: {
          fluid: "tconstruct:molten_amethyst",
          amount: GEM
        },
        input: "minecraft:amethyst_shard",
        heat: "heated"
      },
      {
        output: "minecraft:wither_skeleton_skull",
        input: ["minecraft:coal_block", "minecraft:skeleton_skull", Item.of("minecraft:wither_rose", 4)],
        heat: "superheated"
      },
      {
        output: ["create:dough"],
        input: ["create:wheat_flour", { fluid: "minecraft:water", amount: 500 * mB }],
        time: 10
      },
      {
        output: ["minecraft:cocoa_beans"],
        input: [
          { fluid: "kubejs:shimmer", amount: INGOT },
          "minecraft:brown_dye",
          "minecraft:wheat_seeds",
          "create:tree_fertilizer"
        ],
        time: 80
      },
      {
        output: Fluid.of("tconstruct:molten_netherite", INGOT * 3 / 10),
        input: [
          { fluid: "tconstruct:molten_debris", amount: INGOT },
          { fluid: "tconstruct:molten_gold", amount: INGOT }
        ],
        heat: "heated",
        time: 100
      },
      {
        output: Fluid.of("tconstruct:molten_netherite", INGOT * 2),
        input: [
          { fluid: "tconstruct:molten_debris", amount: INGOT * 4 },
          { fluid: "tconstruct:molten_gold", amount: INGOT * 4 }
        ],
        heat: "superheated",
        time: 100
      },
      {
        output: [{ fluid: "astralfoods:cream", amount: BUCKET }],
        input: [Item.of("minecraft:sugar", 3), { fluid: "milk:still_milk", amount: BUCKET }],
        heat: "heated",
        time: 100
      },
      {
        output: ["astralfoods:chocolate_ice_cream"],
        input: ["create:bar_of_chocolate", { fluid: "astralfoods:cream", amount: 250 * mB }],
        heat: "heated",
        time: 60
      },
      {
        output: ["astralfoods:gamers_delight"],
        input: [
          "techreborn:compressed_plantball",
          "farmersdelight:pie_crust",
          { fluid: "techreborn:lithium", amount: BUCKET }
        ],
        heat: "heated",
        time: 80
      },
      {
        output: "minecraft:slime_ball",
        input: ["minecraft:lime_dye", "#c:slimeballs"],
        time: 50
      },
      {
        output: Item.of("createastral:synthetic_slime", 3),
        input: [Item.of("techreborn:sponge_piece", 2), { fluid: "tconstruct:blood", amount: SLIMEBALL * 2 }],
        time: 50
      },
      {
        output: Item.of("createastral:synthetic_slime", 3),
        input: [Item.of("techreborn:sponge_piece", 2), { fluid: "tconstruct:earth_slime", amount: SLIMEBALL * 2 }],
        time: 50
      },
      {
        output: Item.of("createastral:synthetic_slime", 3),
        input: [Item.of("techreborn:sponge_piece", 2), { fluid: "tconstruct:sky_slime", amount: SLIMEBALL * 2 }],
        time: 50
      },
      {
        output: Item.of("createastral:synthetic_slime", 3),
        input: [Item.of("techreborn:sponge_piece", 2), { fluid: "tconstruct:ender_slime", amount: SLIMEBALL * 2 }],
        time: 50
      }
    ];
    mixingRecipes.forEach((recipe) => {
      event.recipes.createMixing(recipe.output, recipe.input).heatRequirement(recipe.heat ?? "").processingTime(recipe.time ?? 100);
    });
    const deadBushFlowerRevivingRecipes = [
      {
        flower: "minecraft:dandelion",
        dye: "minecraft:yellow_dye"
      },
      {
        flower: "minecraft:poppy",
        dye: "minecraft:red_dye"
      },
      {
        flower: "minecraft:blue_orchid",
        dye: "minecraft:light_blue_dye"
      },
      {
        flower: "minecraft:allium",
        dye: "minecraft:magenta_dye"
      },
      {
        flower: "minecraft:azure_bluet",
        dye: "minecraft:light_gray_dye"
      },
      {
        flower: "minecraft:red_tulip",
        dye: "minecraft:red_dye"
      },
      {
        flower: "minecraft:orange_tulip",
        dye: "minecraft:orange_dye"
      },
      {
        flower: "minecraft:white_tulip",
        dye: "minecraft:white_dye"
      },
      {
        flower: "minecraft:pink_tulip",
        dye: "minecraft:pink_dye"
      },
      {
        flower: "minecraft:oxeye_daisy",
        dye: "minecraft:light_gray_dye"
      },
      {
        flower: "minecraft:cornflower",
        dye: "minecraft:blue_dye"
      },
      {
        flower: "minecraft:lily_of_the_valley",
        dye: "minecraft:white_dye"
      }
    ];
    deadBushFlowerRevivingRecipes.forEach((recipe) => {
      event.recipes.createMixing(recipe.flower, [
        recipe.dye,
        "minecraft:dead_bush",
        "create:tree_fertilizer",
        { fluid: "kubejs:shimmer", amount: 100 * mB }
      ]).processingTime(50);
    });
    const smallToTallFlowerMixingRecipes = [
      {
        tallFlower: "minecraft:sunflower",
        flower: "minecraft:dandelion"
      },
      {
        tallFlower: "minecraft:lilac",
        flower: "minecraft:allium"
      },
      {
        tallFlower: "minecraft:rose_bush",
        flower: "minecraft:poppy"
      },
      {
        tallFlower: "minecraft:peony",
        flower: "minecraft:pink_tulip"
      },
      {
        tallFlower: "farmersdelight:wild_cabbages",
        flower: "farmersdelight:cabbage"
      },
      {
        tallFlower: "farmersdelight:wild_onions",
        flower: "farmersdelight:onion"
      },
      {
        tallFlower: "farmersdelight:wild_tomatoes",
        flower: "farmersdelight:tomato"
      },
      {
        tallFlower: "farmersdelight:wild_carrots",
        flower: "minecraft:carrot"
      },
      {
        tallFlower: "farmersdelight:wild_potatoes",
        flower: "minecraft:potato"
      },
      {
        tallFlower: "farmersdelight:wild_beetroots",
        flower: "minecraft:beetroot"
      },
      {
        tallFlower: "farmersdelight:wild_rice",
        flower: "farmersdelight:rice"
      }
    ];
    smallToTallFlowerMixingRecipes.forEach((recipe) => {
      event.recipes.createMixing(recipe.tallFlower, [
        Item.of(recipe.flower, 2),
        Item.of("create:tree_fertilizer", 2),
        { fluid: "kubejs:shimmer", amount: 200 * mB }
      ]).processingTime(50);
    });
  });
  function farmersCompatMixing(event) {
    event.forEachRecipe({ type: "farmersdelight:cooking" }, (recipe) => {
      let outputItem = recipe.getOriginalRecipeResult().getId().split(":")[1];
      let inputItems = recipe.json.get("ingredients").deepCopy();
      if (outputItem == "cabbage_rolls") return;
      const containers = {
        "minecraft:glass_bottle": ["hot_cocoa", "apple_cider", "glow_berry_custard"],
        "minecraft:pumpkin": ["stuffed_pumpkin_block"],
        "#c:dough": ["dumplings"]
      };
      let container = Object.keys(containers).find((key) => containers[key].includes(outputItem)) ?? "minecraft:bowl";
      for (let i = 0; i < inputItems.size(); i++) {
        if (inputItems.get(i).getClass() == "class com.google.gson.JsonObject") {
          if (inputItems.get(i).has("item")) {
            if (inputItems.get(i).get("item").toString().replaceAll('"', "") == "farmersdelight:tomato_sauce") {
              let $JsonObject = java("com.google.gson.JsonObject");
              let tomato_sauce_fluid_ingredient = new $JsonObject();
              tomato_sauce_fluid_ingredient.add("fluid", "kubejs:tomato_sauce_fluid");
              tomato_sauce_fluid_ingredient.add("amount", 250 * mB);
              inputItems.set(i, tomato_sauce_fluid_ingredient);
            }
          } else {
            if (inputItems.get(i).has("tag")) {
              if (inputItems.get(i).get("tag").toString().replaceAll('"', "") == "c:dough") {
                inputItems.remove(inputItems.get(i));
              } else if (inputItems.get(i).get("tag").toString().replaceAll('"', "") == "c:milk") {
                let $JsonObject = java("com.google.gson.JsonObject");
                let milk = new $JsonObject();
                milk.add("fluid", "milk:still_milk");
                milk.add("amount", 250 * mB);
                inputItems.set(i, milk);
              }
            }
          }
        }
      }
      event.recipes.createMixing(
        {
          fluid: `kubejs:${outputItem}_fluid`,
          amount: 250 * mB
        },
        inputItems
      ).heatRequirement("heated").processingTime(100);
      event.recipes.createFilling(recipe.getOriginalRecipeResult(), [
        container,
        {
          fluid: `kubejs:${outputItem}_fluid`,
          amount: 250 * mB
        }
      ]);
    });
  }
}
const OXIDISATION_TYPES = ["exposed", "weathered", "oxidized"];
const OXIDIZATION_TYPES = OXIDISATION_TYPES;
const VANILLA_COPPER_BLOCKS = ["cut_copper", "cut_copper_stairs", "cut_copper_slab"];
const CREATE_COPPER_BLOCKS = [
  "copper_shingles",
  "copper_shingle_slab",
  "copper_shingle_stairs",
  "copper_tiles",
  "copper_tile_slab",
  "copper_tile_stairs"
];
const CATWALK_MATERIALS = [
  { material: "gold", sheet: "create:golden_sheet" },
  { material: "netherite", sheet: "createdeco:netherite_sheet" },
  { material: "andesite", sheet: "create:andesite_alloy" },
  { material: "brass", sheet: "create:brass_sheet" },
  { material: "cast_iron", sheet: "createdeco:cast_iron_sheet" },
  { material: "iron", sheet: "create:iron_sheet" },
  { material: "copper", sheet: "create:copper_sheet" },
  { material: "zinc", sheet: "#c:plates/zinc" }
];
const WOODS = [
  {
    mod: "minecraft",
    type: "oak",
    tag: "minecraft:oak_logs"
  },
  {
    mod: "minecraft",
    type: "birch",
    tag: "minecraft:birch_logs"
  },
  {
    mod: "minecraft",
    type: "spruce",
    tag: "minecraft:spruce_logs"
  },
  {
    mod: "minecraft",
    type: "jungle",
    tag: "minecraft:jungle_logs"
  },
  {
    mod: "minecraft",
    type: "acacia",
    tag: "minecraft:acacia_logs"
  },
  {
    mod: "minecraft",
    type: "dark_oak",
    tag: "minecraft:dark_oak_logs"
  },
  {
    mod: "minecraft",
    type: "crimson",
    tag: "minecraft:crimson_stems"
  },
  {
    mod: "minecraft",
    type: "warped",
    tag: "minecraft:warped_stems"
  },
  {
    mod: "ad_astra",
    type: "glacian",
    tag: "ad_astra:glacian_logs"
  },
  {
    mod: "techreborn",
    type: "rubber",
    tag: "techreborn:rubber_logs"
  },
  {
    mod: "tconstruct",
    type: "greenheart",
    tag: "tconstruct:greenheart_logs"
  },
  {
    mod: "tconstruct",
    type: "skyroot",
    tag: "tconstruct:skyroot_logs"
  },
  {
    mod: "tconstruct",
    type: "bloodshroom",
    tag: "tconstruct:bloodshroom_logs"
  },
  {
    mod: "vinery",
    type: "cherry",
    tag: "vinery:cherry_logs"
  }
];
const MATERIALS = [
  {
    ingot: "minecraft:copper_ingot",
    block: "minecraft:copper_block",
    plate: "create:copper_sheet",
    useMechPress: true
  },
  {
    ingot: "create:brass_ingot",
    block: "create:brass_block",
    plate: "create:brass_sheet",
    useMechPress: true
  },
  {
    ingot: "minecraft:iron_ingot",
    block: "minecraft:iron_block",
    plate: "create:iron_sheet",
    useMechPress: true
  },
  {
    ingot: "minecraft:gold_ingot",
    block: "minecraft:gold_block",
    plate: "create:golden_sheet",
    useMechPress: true
  },
  {
    ingot: "create:zinc_ingot",
    block: "create:zinc_block",
    plate: "createaddition:zinc_sheet",
    useMechPress: true
  },
  {
    ingot: "minecraft:netherite_ingot",
    block: "minecraft:netherite_block",
    plate: "createdeco:netherite_sheet",
    useMechPress: true
  },
  {
    ingot: "createdeco:cast_iron_ingot",
    block: "createdeco:cast_iron_block",
    plate: "createdeco:cast_iron_sheet",
    useMechPress: true
  },
  {
    ingot: "createastral:bronze_ingot",
    block: "createastral:bronze_block",
    plate: "createastral:bronze_sheet",
    useMechPress: true
  },
  {
    ingot: "ad_astra:steel_ingot",
    block: "ad_astra:steel_block",
    plate: "ad_astra:steel_plate",
    useMechPress: false
  },
  {
    ingot: "ad_astra:desh_ingot",
    block: "ad_astra:desh_block",
    plate: "ad_astra:desh_plate",
    useMechPress: false
  },
  {
    ingot: "ad_astra:ostrum_ingot",
    block: "ad_astra:ostrum_block",
    plate: "ad_astra:ostrum_plate",
    useMechPress: false
  },
  {
    ingot: "ad_astra:calorite_ingot",
    block: "ad_astra:calorite_block",
    plate: "ad_astra:calorite_plate",
    useMechPress: false
  },
  {
    ingot: "techreborn:electrum_ingot",
    block: "techreborn:electrum_storage_block",
    plate: "techreborn:electrum_plate",
    useMechPress: true
  },
  {
    ingot: "techreborn:invar_ingot",
    block: "techreborn:invar_storage_block",
    plate: "techreborn:invar_plate",
    useMechPress: true
  },
  {
    ingot: "techreborn:lead_ingot",
    block: "techreborn:lead_storage_block",
    plate: "techreborn:lead_plate",
    useMechPress: true
  },
  {
    ingot: "techreborn:silver_ingot",
    block: "techreborn:silver_storage_block",
    plate: "techreborn:silver_plate",
    useMechPress: true
  },
  {
    ingot: "techreborn:tin_ingot",
    block: "techreborn:tin_storage_block",
    plate: "techreborn:tin_plate",
    useMechPress: true
  },
  {
    ingot: "techreborn:diamond_dust",
    block: "minecraft:diamond_block",
    plate: "techreborn:diamond_plate",
    useMechPress: false
  },
  {
    ingot: "yttr:delicace",
    block: "minecraft:barrier",
    plate: "createastral:ender_plating",
    useMechPress: false
  }
];
const CRUSHING_RECIPES_TO_BECOME_GRINDING = [
  {
    input: { item: "minecraft:clay_ball" },
    output: { item: "techreborn:clay_dust", count: 1 }
  },
  {
    input: { item: "minecraft:amethyst_cluster" },
    output: { item: "minecraft:amethyst_shard", count: 7 }
  },
  {
    input: { item: "minecraft:prismarine_crystals" },
    output: { item: "minecraft:quartz", count: 2 }
  },
  {
    input: { item: "minecraft:saddle" },
    output: { item: "minecraft:leather", count: 3 }
  },
  {
    input: { item: "minecraft:wheat" },
    output: { item: "create:wheat_flour", count: 3 }
  },
  {
    input: { item: "minecraft:ender_pearl" },
    output: { item: "ae2:ender_dust", count: 2 }
  },
  {
    input: { item: "tconstruct:necrotic_bone" },
    output: { item: "minecraft:bone_meal", count: 6 }
  },
  {
    input: { item: "minecraft:dried_kelp" },
    output: { item: "minecraft:gunpowder", count: 1 }
  },
  {
    input: { item: "create:sturdy_sheet" },
    output: { item: "createastral:fragile_sheet", count: 1 }
  }
];
const DEFAULT_GRIND_TIME = 100;
const DEFAULT_GRIND_POWER = 5;
function createPressingRecipes() {
  onEvent("recipes", (event) => {
    const pressingRecipes = [
      {
        input: "createastral:shimmer_marimo",
        output: "ae2:fluix_dust"
      },
      { input: "createastral:moonset_marimo", output: Item.of("ae2:ender_dust").withChance(0.1) },
      {
        input: "createastral:marimo",
        output: "minecraft:vine"
      },
      {
        input: "minecraft:sea_pickle",
        output: Item.of("minecraft:glow_lichen", 4)
      },
      {
        input: "yttr:haemopal",
        output: Item.of("createastral:ultramatter", 5)
      },
      {
        input: "minecraft:lapis_block",
        output: "create:lapis_sheet"
      },
      {
        input: "tconstruct:greenheart_log",
        output: Item.of("minecraft:green_dye", 2)
      },
      {
        input: "tconstruct:skyroot_log",
        output: Item.of("minecraft:blue_dye", 2)
      },
      {
        input: "createastral:pure_star_shard",
        output: "minecraft:nether_star"
      },
      {
        input: "minecraft:cobblestone",
        output: "techreborn:andesite_dust"
      },
      {
        input: "yttr:delicace",
        output: "createastral:ender_plating"
      },
      {
        input: "createastral:gold_casted_rocket_fin",
        output: ["ad_astra:rocket_fin", "create:golden_sheet"]
      },
      {
        input: "#minecraft:planks",
        output: "techreborn:wood_plate"
      }
    ];
    pressingRecipes.forEach((recipe) => {
      event.recipes.createPressing(recipe.output, recipe.input);
    });
    MATERIALS.forEach((material) => {
      if (material.useMechPress) {
        event.recipes.createPressing(material.plate, material.ingot);
      }
    });
  });
}
function createSandpaperPolishingRecipes() {
  onEvent("recipes", (event) => {
    const sandpaperPolishingRecipes = [
      {
        input: "minecraft:blackstone",
        output: "minecraft:netherrack"
      },
      {
        input: "minecraft:nether_bricks",
        output: "minecraft:red_nether_bricks"
      },
      {
        input: "tconstruct:earth_slime_grass_seeds",
        output: "tconstruct:blood_slime_grass_seeds"
      }
    ];
    sandpaperPolishingRecipes.forEach((recipe) => {
      event.recipes.createSandpaperPolishing(recipe.output, recipe.input);
    });
  });
}
function createSequencedAssemblyRecipes() {
  onEvent("recipes", (event) => {
    biomassSequence(event);
    circuitSequence(event);
    diamondSequence(event);
    casingSequence(event);
    piglinSequence(event);
    wineSequence(event);
    const inc_sturdy_sheet = "create:unprocessed_obsidian_sheet";
    event.recipes.create.sequenced_assembly([Item.of("minecraft:powder_snow_bucket")], "minecraft:bucket", [
      event.recipes.createDeploying("minecraft:bucket", ["minecraft:bucket", ["createastral:snowy_marimo"]]),
      event.recipes.createFilling("minecraft:bucket", [
        "minecraft:bucket",
        { fluid: "minecraft:water", amount: 250 * mB }
      ])
    ]).transitionalItem("minecraft:bucket").loops(2);
    event.recipes.create.sequenced_assembly(
      [Item.of("tconstruct:medium_ender_slime_crystal_bud")],
      "tconstruct:small_ender_slime_crystal_bud",
      [
        event.recipes.createFilling("tconstruct:small_ender_slime_crystal_bud", [
          "tconstruct:small_ender_slime_crystal_bud",
          { fluid: "tconstruct:ender_slime", amount: 250 * mB / 3 }
        ])
      ]
    ).transitionalItem("tconstruct:small_ender_slime_crystal_bud").loops(3);
    event.recipes.create.sequenced_assembly(
      [Item.of("tconstruct:large_ender_slime_crystal_bud")],
      "tconstruct:medium_ender_slime_crystal_bud",
      [
        event.recipes.createDeploying("tconstruct:medium_ender_slime_crystal_bud", [
          "tconstruct:medium_ender_slime_crystal_bud",
          ["techreborn:basalt_dust"]
        ]),
        event.recipes.createFilling("tconstruct:medium_ender_slime_crystal_bud", [
          "tconstruct:medium_ender_slime_crystal_bud",
          { fluid: "tconstruct:ender_slime", amount: 250 * mB / 3 }
        ])
      ]
    ).transitionalItem("tconstruct:medium_ender_slime_crystal_bud").loops(3);
    event.recipes.create.sequenced_assembly(
      [Item.of("tconstruct:ender_slime_crystal_cluster")],
      "tconstruct:large_ender_slime_crystal_bud",
      [
        event.recipes.createDeploying("tconstruct:large_ender_slime_crystal_bud", [
          "tconstruct:large_ender_slime_crystal_bud",
          ["create:powdered_obsidian"]
        ]),
        event.recipes.createFilling("tconstruct:large_ender_slime_crystal_bud", [
          "tconstruct:large_ender_slime_crystal_bud",
          { fluid: "tconstruct:ender_slime", amount: 250 * mB / 3 }
        ])
      ]
    ).transitionalItem("tconstruct:large_ender_slime_crystal_bud").loops(3);
    event.recipes.create.sequenced_assembly([Item.of("cookingforblockheads:cow_jar")], "cookingforblockheads:milk_jar", [
      event.recipes.createDeploying("cookingforblockheads:milk_jar", [
        "cookingforblockheads:milk_jar",
        ["minecraft:beef"]
      ]),
      event.recipes.createDeploying("cookingforblockheads:milk_jar", [
        "cookingforblockheads:milk_jar",
        ["minecraft:leather"]
      ]),
      event.recipes.createFilling("cookingforblockheads:milk_jar", [
        "cookingforblockheads:milk_jar",
        { fluid: "tconstruct:blood", amount: 100 * mB }
      ])
    ]).transitionalItem("cookingforblockheads:milk_jar").loops(1);
    event.recipes.create.sequenced_assembly([Item.of("minecraft:sea_lantern")], "minecraft:prismarine", [
      event.recipes.createDeploying("minecraft:prismarine", [
        "minecraft:prismarine",
        ["minecraft:prismarine_crystals"]
      ])
    ]).transitionalItem("chipped:sea_lantern_2").loops(5);
    event.recipes.create.sequenced_assembly([Item.of("yttr:lamp")], "minecraft:redstone_torch", [
      event.recipes.createDeploying("minecraft:redstone_torch", [
        "minecraft:redstone_torch",
        ["minecraft:iron_bars"]
      ]),
      event.recipes.createDeploying("minecraft:redstone_torch", [
        "minecraft:redstone_torch",
        ["create:framed_glass"]
      ]),
      event.recipes.createDeploying("minecraft:redstone_torch", [
        "minecraft:redstone_torch",
        ["minecraft:iron_bars"]
      ])
    ]).transitionalItem("chipped:redstone_lamp_1").loops(1);
    event.recipes.create.sequenced_assembly([Item.of("createastral:horse")], "minecraft:leather_horse_armor", [
      event.recipes.createDeploying("minecraft:leather_horse_armor", [
        "minecraft:leather_horse_armor",
        ["minecraft:apple"]
      ]),
      event.recipes.createDeploying("minecraft:leather_horse_armor", [
        "minecraft:leather_horse_armor",
        ["minecraft:hay_block"]
      ]),
      event.recipes.createFilling("minecraft:leather_horse_armor", [
        "minecraft:leather_horse_armor",
        { fluid: "tconstruct:blood", amount: 100 * mB }
      ])
    ]).transitionalItem("minecraft:leather_horse_armor").loops(1);
    event.recipes.create.sequenced_assembly([Item.of("create:track")], "#create:sleepers", [
      event.recipes.createDeploying("create:incomplete_track", [
        "create:incomplete_track",
        ["#c:nuggets/iron", "#c:nuggets/tin", "#c:nuggets/zinc"]
      ]),
      event.recipes.createDeploying("create:incomplete_track", [
        "create:incomplete_track",
        ["#c:nuggets/iron", "#c:nuggets/tin", "#c:nuggets/zinc"]
      ]),
      event.recipes.createPressing("create:incomplete_track", "create:incomplete_track")
    ]).transitionalItem("create:incomplete_track").loops(1);
    event.recipes.create.sequenced_assembly([Item.of("createastral:living_mechanism").withChance(1)], "yttr:ultrapure_carbon", [
      event.recipes.createFilling("yttr:ultrapure_carbon", [
        "yttr:ultrapure_carbon",
        { fluid: "tconstruct:ender_slime", amount: INGOT }
      ]),
      event.recipes.createPressing("yttr:ultrapure_carbon", "yttr:ultrapure_carbon"),
      event.recipes.createFilling("yttr:ultrapure_carbon", [
        "yttr:ultrapure_carbon",
        { fluid: "tconstruct:ender_slime", amount: INGOT }
      ]),
      event.recipes.createPressing("yttr:ultrapure_carbon", "yttr:ultrapure_carbon"),
      event.recipes.createDeploying("yttr:ultrapure_carbon", ["yttr:ultrapure_carbon", "minecraft:ender_eye"]),
      event.recipes.createFilling("yttr:ultrapure_carbon", [
        "yttr:ultrapure_carbon",
        { fluid: "kubejs:shimmer", amount: BUCKET / 3 }
      ])
    ]).transitionalItem("yttr:ultrapure_carbon").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("astraladditions:orbital_navigation_ring").withChance(1)],
      "astraladditions:blazed_steel_ring",
      [
        event.recipes.createFilling("astraladditions:blazed_steel_ring", [
          "astraladditions:blazed_steel_ring",
          { fluid: "tconstruct:molten_steel", amount: NUGGET }
        ]),
        event.recipes.createDeploying("astraladditions:blazed_steel_ring", [
          "astraladditions:blazed_steel_ring",
          "createastral:navigation_mechanism"
        ]),
        event.recipes.createDeploying("astraladditions:blazed_steel_ring", [
          "astraladditions:blazed_steel_ring",
          "createastral:astral_conduit"
        ])
      ]
    ).transitionalItem("astraladditions:blazed_steel_ring").loops(1);
    event.recipes.create.sequenced_assembly([Item.of("createastral:laskinium_pill").withChance(1)], "estrogen:estrogen_pill", [
      event.recipes.createFilling("estrogen:estrogen_pill", [
        "estrogen:estrogen_pill",
        { fluid: "kubejs:shimmer", amount: BUCKET }
      ]),
      event.recipes.createPressing("estrogen:estrogen_pill", "estrogen:estrogen_pill"),
      event.recipes.createDeploying("estrogen:estrogen_pill", ["estrogen:estrogen_pill", "createastral:laskinium"]),
      event.recipes.createDeploying("estrogen:estrogen_pill", [
        "estrogen:estrogen_pill",
        "createastral:astral_singularity"
      ])
    ]).transitionalItem("estrogen:estrogen_pill").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("create:sturdy_sheet").withChance(12), Item.of("minecraft:gravel").withChance(8)],
      "#c:dusts/obsidian",
      [
        event.recipes.createPressing(inc_sturdy_sheet, inc_sturdy_sheet),
        event.recipes.createPressing(inc_sturdy_sheet, inc_sturdy_sheet)
      ]
    ).transitionalItem(inc_sturdy_sheet).loops(5);
    event.recipes.create.sequenced_assembly([Item.of("create:sturdy_sheet", 2)], "tconstruct:obsidian_pane", [
      event.recipes.createDeploying(inc_sturdy_sheet, [inc_sturdy_sheet, "minecraft:magma_cream"]),
      event.recipes.createPressing(inc_sturdy_sheet, inc_sturdy_sheet),
      event.recipes.createFilling(inc_sturdy_sheet, [
        inc_sturdy_sheet,
        { fluid: "minecraft:lava", amount: 100 * mB }
      ])
    ]).loops(2).transitionalItem(inc_sturdy_sheet);
    event.recipes.create.sequenced_assembly(["create:sturdy_sheet"], "create:powdered_obsidian", [
      event.recipes.createFilling(inc_sturdy_sheet, [inc_sturdy_sheet, { fluid: "minecraft:lava", amount: 50 * mB }]),
      event.recipes.createPressing(inc_sturdy_sheet, inc_sturdy_sheet),
      event.recipes.createPressing(inc_sturdy_sheet, inc_sturdy_sheet)
    ]).loops(5).transitionalItem(inc_sturdy_sheet);
    event.custom({
      type: "create:sequenced_assembly",
      ingredient: { tag: "c:plates/gold" },
      transitionalItem: { item: "create:incomplete_precision_mechanism" },
      sequence: [
        {
          type: "create:deploying",
          ingredients: [{ item: "create:incomplete_precision_mechanism" }, { item: "create:cogwheel" }],
          results: [{ item: "create:incomplete_precision_mechanism" }]
        },
        {
          type: "create:deploying",
          ingredients: [{ item: "create:incomplete_precision_mechanism" }, { item: "create:large_cogwheel" }],
          results: [{ item: "create:incomplete_precision_mechanism" }]
        },
        {
          type: "create:deploying",
          ingredients: [{ item: "create:incomplete_precision_mechanism" }, { tag: "c:nuggets/desh" }],
          results: [{ item: "create:incomplete_precision_mechanism" }]
        }
      ],
      results: [
        { item: "create:precision_mechanism", chance: 120 },
        { item: "create:golden_sheet", chance: 8 },
        { item: "create:andesite_alloy", chance: 8 },
        { item: "create:cogwheel", chance: 5 },
        { item: "minecraft:gold_nugget", chance: 3 },
        { item: "create:shaft", chance: 2 },
        { item: "create:crushed_raw_gold", chance: 2 },
        { item: "minecraft:iron_ingot" },
        { item: "minecraft:clock" }
      ],
      loops: 6
    });
    event.recipes.create.sequenced_assembly(
      [
        // output
        Item.of("astralfoods:shimmered_rabbit_stew").withChance(1)
        // begin
      ],
      "minecraft:bowl",
      [
        // input
        event.recipes.createDeploying("minecraft:bowl", ["minecraft:bowl", "astralfoods:seared_potato"]),
        event.recipes.createDeploying("minecraft:bowl", ["minecraft:bowl", "minecraft:cooked_rabbit"]),
        event.recipes.createFilling("minecraft:bowl", [
          "minecraft:bowl",
          { fluid: "kubejs:shimmer", amount: BUCKET }
        ])
      ]
    ).transitionalItem("minecraft:bowl").loops(1);
    event.custom({
      type: "create:sequenced_assembly",
      ingredient: {
        item: "createastral:sturdy_cage"
      },
      transitionalItem: {
        item: "createastral:sturdy_cage"
      },
      sequence: [
        {
          type: "create:deploying",
          ingredients: [
            {
              item: "createastral:sturdy_cage"
            },
            {
              "yttr:entity": "astraladditions:ender_watcher"
            }
          ],
          results: [
            {
              item: "createastral:sturdy_cage"
            }
          ]
        }
      ],
      results: [
        {
          item: "createastral:contained_end"
        }
      ],
      loops: 1
    });
    function biomassSequence(event2) {
      const transitional_c_plantball = "techreborn:plantball";
      event2.recipes.create.sequenced_assembly(
        [
          Item.of("techreborn:compressed_plantball").withChance(8),
          Item.of("minecraft:grass").withChance(1),
          Item.of("minecraft:green_dye").withChance(0.5),
          Item.of("farmersdelight:straw").withChance(0.5)
        ],
        "techreborn:plantball",
        [event2.recipes.createPressing(transitional_c_plantball, transitional_c_plantball)]
      ).transitionalItem(transitional_c_plantball).loops(4);
      const transitional_bio_pellet = "createaddition:biomass";
      event2.recipes.create.sequenced_assembly([Item.of("createaddition:biomass_pellet", 4).withChance(1)], "createaddition:biomass", [
        event2.recipes.createCutting(transitional_bio_pellet, transitional_bio_pellet),
        event2.recipes.createCutting(transitional_bio_pellet, transitional_bio_pellet),
        event2.recipes.createPressing(transitional_bio_pellet, transitional_bio_pellet)
      ]).transitionalItem(transitional_bio_pellet).loops(1);
      event2.recipes.create.sequenced_assembly(
        [
          Item.of("techreborn:compressed_plantball").withChance(8),
          Item.of("minecraft:grass").withChance(1),
          Item.of("minecraft:green_dye").withChance(0.5),
          Item.of("farmersdelight:straw").withChance(0.5)
        ],
        "techreborn:plantball",
        [event2.recipes.createPressing(transitional_c_plantball, transitional_c_plantball)]
      ).transitionalItem(transitional_c_plantball).loops(4);
      event2.recipes.create.sequenced_assembly([Item.of("createaddition:biomass_pellet", 4).withChance(1)], "createaddition:biomass", [
        event2.recipes.createCutting(transitional_bio_pellet, transitional_bio_pellet),
        event2.recipes.createCutting(transitional_bio_pellet, transitional_bio_pellet),
        event2.recipes.createPressing(transitional_bio_pellet, transitional_bio_pellet)
      ]).transitionalItem(transitional_bio_pellet).loops(1);
    }
    function circuitSequence(event2) {
      const incomplete_transitional_circuit = "createastral:incomplete_transitional_electronic_circuit";
      event2.recipes.create.sequenced_assembly(
        [
          // begin
          "createastral:incomplete_electronic_circuit"
          // output
        ],
        "create:integrated_circuit",
        [
          // input
          event2.recipes.createDeploying(incomplete_transitional_circuit, [
            incomplete_transitional_circuit,
            "createastral:electrified_pin"
          ])
        ]
      ).transitionalItem(incomplete_transitional_circuit).loops(32);
      event2.recipes.create.sequenced_assembly(
        [
          // begin
          "techreborn:electronic_circuit"
          // output
        ],
        "createastral:incomplete_electronic_circuit",
        [
          // input
          event2.recipes.createDeploying("createastral:incomplete_electronic_circuit", [
            "createastral:incomplete_electronic_circuit",
            "techreborn:lead_plate"
          ]),
          event2.recipes.createPressing(
            "createastral:incomplete_electronic_circuit",
            "createastral:incomplete_electronic_circuit"
          )
        ]
      ).transitionalItem("createastral:incomplete_electronic_circuit").loops(1);
      event2.recipes.create.sequenced_assembly(
        [
          // begin
          "astraladditions:fragile_item_3"
          // output
        ],
        "ad_astra:calorite_engine",
        [
          // input
          event2.recipes.createDeploying("ad_astra:calorite_engine", [
            "ad_astra:calorite_engine",
            "yttr:armor_plating"
          ]),
          event2.recipes.createDeploying("ad_astra:calorite_engine", [
            "ad_astra:calorite_engine",
            "create:refined_radiance_casing"
          ]),
          event2.recipes.createDeploying("ad_astra:calorite_engine", [
            "ad_astra:calorite_engine",
            "yttr:armor_plating"
          ]),
          event2.recipes.createDeploying("ad_astra:calorite_engine", [
            "ad_astra:calorite_engine",
            "techreborn:data_storage_chip"
          ]),
          event2.recipes.createFilling("ad_astra:calorite_engine", [
            "ad_astra:calorite_engine",
            { fluid: "kubejs:molten_radiance", amount: BUCKET / 2 }
          ]),
          event2.recipes.createPressing("ad_astra:calorite_engine", "ad_astra:calorite_engine")
        ]
      ).transitionalItem("ad_astra:calorite_engine").loops(5);
      event2.recipes.create.sequenced_assembly(
        [
          // begin
          "createastral:mercurian_stone"
          // output
        ],
        "ad_astra:mercury_stone",
        [
          // input
          event2.recipes.createFilling("ad_astra:mercury_stone", [
            "ad_astra:mercury_stone",
            { fluid: "yttr:void", amount: BUCKET / 2 }
          ]),
          event2.recipes.createFilling("ad_astra:mercury_stone", [
            "ad_astra:mercury_stone",
            { fluid: "kubejs:molten_radiance", amount: BUCKET / 2 }
          ]),
          event2.recipes.createFilling("ad_astra:mercury_stone", [
            "ad_astra:mercury_stone",
            { fluid: "kubejs:molten_shadowsteel", amount: BUCKET / 2 }
          ]),
          event2.recipes.createFilling("ad_astra:mercury_stone", [
            "ad_astra:mercury_stone",
            { fluid: "kubejs:molten_calorite", amount: BUCKET / 2 }
          ]),
          event2.recipes.createPressing("ad_astra:mercury_stone", "ad_astra:mercury_stone")
        ]
      ).transitionalItem("ad_astra:mercury_stone").loops(5);
      event2.recipes.create.sequenced_assembly(
        [
          // begin
          "createastral:aurorite_block"
          // output
        ],
        "ad_astra:polished_permafrost",
        [
          // input
          event2.recipes.createDeploying("ad_astra:polished_permafrost", ["ad_astra:ice_shard", "ad_astra:ice_shard"]),
          event2.recipes.createDeploying("ad_astra:polished_permafrost", ["ad_astra:ice_shard", "ad_astra:ice_shard"]),
          event2.recipes.createFilling("ad_astra:polished_permafrost", [
            "ad_astra:polished_permafrost",
            { fluid: "kubejs:aurorite", amount: BUCKET / 2 }
          ]),
          event2.recipes.createPressing("ad_astra:polished_permafrost", "ad_astra:polished_permafrost")
        ]
      ).transitionalItem("ad_astra:polished_permafrost").loops(1);
      event2.recipes.create.sequenced_assembly(
        [
          // begin
          "estrogen:estrogen_patches"
          // output
        ],
        "minecraft:paper",
        [
          // input
          event2.recipes.createFilling("create:sand_paper", [
            "create:sand_paper",
            { fluid: "tconstruct:molten_queens_slime", amount: BUCKET }
          ]),
          event2.recipes.createFilling("create:sand_paper", [
            "create:sand_paper",
            { fluid: "estrogen:liquid_estrogen", amount: BUCKET }
          ]),
          event2.recipes.createDeploying("create:sand_paper", ["blahaj:blue_shark", "blahaj:blue_shark"])
        ]
      ).transitionalItem("ad_astra:polished_permafrost").loops(1);
      event2.recipes.create.sequenced_assembly(
        [
          // begin
          "astraladditions:fragile_item"
          // output
        ],
        "createastral:navigation_mechanism",
        [
          // input
          event2.recipes.createDeploying("createastral:navigation_mechanism", [
            "techreborn:machine_parts",
            "techreborn:machine_parts"
          ]),
          event2.recipes.createDeploying("createastral:navigation_mechanism", [
            "ad_astra:ostrum_plate",
            "ad_astra:ostrum_plate"
          ]),
          event2.recipes.createPressing("createastral:navigation_mechanism", "createastral:navigation_mechanism"),
          event2.recipes.createFilling("createastral:navigation_mechanism", [
            "createastral:navigation_mechanism",
            { fluid: "ad_astra:cryo_fuel", amount: BUCKET }
          ]),
          event2.recipes.createPressing("createastral:navigation_mechanism", "createastral:navigation_mechanism")
        ]
      ).transitionalItem("createastral:navigation_mechanism").loops(4);
      event2.recipes.create.sequenced_assembly(["minecraft:dragon_breath"], "minecraft:glass_bottle", [
        event2.recipes.createFilling("minecraft:glass_bottle", [
          "minecraft:glass_bottle",
          { fluid: "tconstruct:ender_slime", amount: BUCKET }
        ]),
        event2.recipes.createDeploying("minecraft:glass_bottle", ["minecraft:glass_bottle", "minecraft:chorus_fruit"])
      ]).loops(1).transitionalItem("minecraft:glass_bottle");
      event2.recipes.create.sequenced_assembly(
        [
          // begin
          "create:brass_casing"
          // output
        ],
        "create:copper_casing",
        [
          // input
          event2.recipes.createDeploying("create:copper_casing", ["create:copper_casing", "createaddition:brass_rod"]),
          event2.recipes.createFilling("create:copper_casing", [
            "create:copper_casing",
            { fluid: "tconstruct:molten_brass", amount: NUGGET }
          ]),
          event2.recipes.createDeploying("create:copper_casing", ["create:copper_casing", "create:brass_sheet"]),
          event2.recipes.createPressing("create:copper_casing", "create:copper_casing")
        ]
      ).transitionalItem("createastral:incomplete_brass_casing").loops(3);
      event2.recipes.create.sequenced_assembly(
        [
          // begin
          "techreborn:advanced_machine_frame"
          // output
        ],
        "techreborn:basic_machine_frame",
        [
          // input
          event2.recipes.createDeploying("techreborn:basic_machine_frame", [
            "techreborn:basic_machine_frame",
            "techreborn:lead_plate"
          ]),
          event2.recipes.createFilling("techreborn:basic_machine_frame", [
            "techreborn:basic_machine_frame",
            { fluid: "kubejs:blast-resistant_cement", amount: 200 * mB }
          ]),
          event2.recipes.createDeploying("techreborn:basic_machine_frame", [
            "techreborn:basic_machine_frame",
            "techreborn:lead_plate"
          ])
        ]
      ).transitionalItem("createastral:incomplete_advanced_machine_frame").loops(1);
      event2.recipes.create.sequenced_assembly(
        [
          // begin
          "techreborn:industrial_machine_frame"
          // output
        ],
        "techreborn:advanced_machine_frame",
        [
          // input
          event2.recipes.createDeploying("techreborn:advanced_machine_frame", [
            "techreborn:advanced_machine_frame",
            "ad_astra:ostrum_plate"
          ]),
          event2.recipes.createDeploying("techreborn:advanced_machine_frame", [
            "techreborn:advanced_machine_frame",
            "techreborn:machine_parts"
          ]),
          event2.recipes.createDeploying("techreborn:advanced_machine_frame", [
            "techreborn:advanced_machine_frame",
            "ad_astra:ostrum_plate"
          ])
        ]
      ).transitionalItem("createastral:incomplete_industrial_machine_frame").loops(1);
      const transitional_lapis_sheet = "createastral:transitional_lapis_sheet";
      event2.recipes.create.sequenced_assembly(["create:integrated_circuit"], "create:lapis_sheet", [
        event2.recipes.createFilling(transitional_lapis_sheet, [
          transitional_lapis_sheet,
          { fluid: "tconstruct:molten_silver", amount: 3375 }
        ]),
        event2.recipes.createDeploying(transitional_lapis_sheet, [
          transitional_lapis_sheet,
          "createaddition:copper_wire"
        ]),
        event2.recipes.createDeploying(transitional_lapis_sheet, [
          transitional_lapis_sheet,
          "createaddition:copper_wire"
        ]),
        event2.recipes.createPressing(transitional_lapis_sheet, transitional_lapis_sheet)
      ]).transitionalItem(transitional_lapis_sheet);
      event2.recipes.create.sequenced_assembly([Item.of("create:belt_connector", 6)], "minecraft:dried_kelp", [
        event2.recipes.createDeploying("minecraft:dried_kelp", ["minecraft:dried_kelp", "techreborn:rubber"]),
        event2.recipes.createPressing("minecraft:dried_kelp", "minecraft:dried_kelp"),
        event2.recipes.createDeploying("minecraft:dried_kelp", ["minecraft:dried_kelp", "minecraft:dried_kelp"]),
        event2.recipes.createPressing("minecraft:dried_kelp", "minecraft:dried_kelp")
      ]).loops(3).transitionalItem("minecraft:dried_kelp");
      event2.recipes.create.sequenced_assembly([Item.of("create:display_board", 6)], "create:electron_tube", [
        event2.recipes.createDeploying("create:electron_tube", ["create:electron_tube", "create:belt_connector"]),
        event2.recipes.createDeploying("create:electron_tube", ["create:electron_tube", "create:cogwheel"]),
        event2.recipes.createDeploying("create:electron_tube", ["create:electron_tube", "#c:dyes"])
      ]).loops(2).transitionalItem("create:electron_tube");
      event2.recipes.create.sequenced_assembly(["ad_astra:calorite_engine"], "ad_astra:ostrum_engine", [
        event2.recipes.createFilling("ad_astra:ostrum_engine", [
          "ad_astra:ostrum_engine",
          { fluid: "kubejs:molten_yttrium", amount: BUCKET }
        ]),
        event2.recipes.createFilling("ad_astra:ostrum_engine", [
          "ad_astra:ostrum_engine",
          { fluid: "yttr:void", amount: BUCKET }
        ]),
        event2.recipes.createDeploying("ad_astra:ostrum_engine", [
          "ad_astra:ostrum_engine",
          "techreborn:industrial_circuit"
        ]),
        event2.recipes.createDeploying("ad_astra:ostrum_engine", [
          "ad_astra:ostrum_engine",
          "createastral:subatomic_ingot"
        ]),
        event2.recipes.createPressing("ad_astra:ostrum_engine", "ad_astra:ostrum_engine")
      ]).transitionalItem("ad_astra:ostrum_engine");
      const inc_calc = "createastral:incomplete_calculation_processor";
      event2.recipes.create.sequenced_assembly(["ae2:calculation_processor"], "ae2:printed_silicon", [
        event2.recipes.createDeploying(inc_calc, [inc_calc, "ae2:printed_calculation_processor"]),
        event2.recipes.createDeploying(inc_calc, [inc_calc, "ae2:fluix_dust"]),
        event2.recipes.createFilling(inc_calc, [inc_calc, { fluid: "kubejs:shimmer", amount: 8100 }]),
        event2.recipes.createPressing(inc_calc, inc_calc)
      ]).transitionalItem(inc_calc).loops(1);
      const inc_eng = "createastral:incomplete_engineering_processor";
      event2.recipes.create.sequenced_assembly(["ae2:engineering_processor"], "ae2:printed_silicon", [
        event2.recipes.createDeploying(inc_eng, [inc_eng, "ae2:printed_engineering_processor"]),
        event2.recipes.createDeploying(inc_eng, [inc_eng, "ae2:fluix_dust"]),
        event2.recipes.createFilling(inc_eng, [inc_eng, { fluid: "kubejs:shimmer", amount: 8100 }]),
        event2.recipes.createPressing(inc_eng, inc_eng)
      ]).transitionalItem(inc_eng).loops(1);
      const inc_log = "createastral:incomplete_logic_processor";
      event2.recipes.create.sequenced_assembly(["ae2:logic_processor"], "ae2:printed_silicon", [
        event2.recipes.createDeploying(inc_log, [inc_log, "ae2:printed_logic_processor"]),
        event2.recipes.createDeploying(inc_log, [inc_log, "ae2:fluix_dust"]),
        event2.recipes.createFilling(inc_log, [inc_log, { fluid: "kubejs:shimmer", amount: 8100 }]),
        event2.recipes.createPressing(inc_log, inc_log)
      ]).transitionalItem(inc_log).loops(1);
      event2.recipes.create.sequenced_assembly(["techreborn:industrial_circuit"], "techreborn:electronic_circuit", [
        event2.recipes.createFilling("techreborn:electronic_circuit", [
          "techreborn:electronic_circuit",
          { fluid: "techreborn:lithium", amount: 4500 }
        ]),
        event2.recipes.createPressing("techreborn:electronic_circuit", "techreborn:electronic_circuit"),
        event2.recipes.createDeploying("techreborn:electronic_circuit", [
          "techreborn:electronic_circuit",
          "techreborn:machine_parts"
        ]),
        event2.recipes.createDeploying("techreborn:electronic_circuit", [
          "techreborn:electronic_circuit",
          "createastral:calorite_pin"
        ]),
        event2.recipes.createDeploying("techreborn:electronic_circuit", [
          "techreborn:electronic_circuit",
          "createastral:calorite_pin"
        ])
      ]).transitionalItem("techreborn:electronic_circuit").loops(9);
      const inc_starshard = "createastral:incomplete_pure_star_shard";
      event2.recipes.create.sequenced_assembly(["createastral:pure_star_shard"], "createastral:star_shard", [
        event2.recipes.createFilling(inc_starshard, [
          inc_starshard,
          { fluid: "kubejs:molten_yttrium", amount: INGOT / 2 }
        ]),
        event2.recipes.createPressing(inc_starshard, inc_starshard),
        event2.recipes.createDeploying(inc_starshard, [inc_starshard, "create:chromatic_compound"]),
        event2.recipes.createPressing(inc_starshard, inc_starshard)
      ]).transitionalItem(inc_starshard).loops(3);
    }
    function casingSequence(event2) {
      const inc_casing = "createastral:incomplete_copper_casing";
      event2.recipes.create.sequenced_assembly(
        [
          // begin
          "create:copper_casing"
          // output
        ],
        "create:andesite_casing",
        [
          // input
          event2.recipes.createDeploying(inc_casing, [inc_casing, "techreborn:rubber"]),
          event2.recipes.createDeploying(inc_casing, [inc_casing, "create:copper_sheet"])
        ]
      ).transitionalItem(inc_casing).loops(3);
      const inc_mf = "createastral:incomplete_basic_machine_frame";
      event2.recipes.create.sequenced_assembly(
        [
          // begin
          "techreborn:basic_machine_frame"
          // output
        ],
        "create:copper_casing",
        [
          // input
          event2.recipes.createFilling(inc_mf, [inc_mf, { fluid: "tconstruct:molten_silver", amount: INGOT }]),
          event2.recipes.createDeploying(inc_mf, [inc_mf, "techreborn:rubber"]),
          event2.recipes.createPressing(inc_mf, inc_mf)
          //yeah!
        ]
      ).transitionalItem(inc_mf).loops(4);
    }
    function diamondSequence(event2) {
      const items = [
        { item: "helmet", loops: 4 },
        { item: "chestplate", loops: 8 },
        { item: "leggings", loops: 6 },
        { item: "boots", loops: 5 },
        { item: "pickaxe", loops: 2 },
        { item: "axe", loops: 2 },
        { item: "shovel", loops: 1 },
        { item: "hoe", loops: 1 },
        { item: "sword", loops: 2 }
      ];
      items.forEach((item) => {
        event2.recipes.create.sequenced_assembly(
          [
            // begin
            `minecraft:diamond_${item.item}`
            // output
          ],
          Item.of(`createastral:brass_${item.item}`).ignoreNBT(),
          [
            // input
            event2.recipes.createFilling(`createastral:brass_${item.item}`, [
              `createastral:brass_${item.item}`,
              {
                fluid: "tconstruct:molten_diamond",
                amount: 250 * mB
              }
            ])
          ]
        ).transitionalItem(`createastral:brass_${item.item}`).loops(item.loops);
      });
    }
    function piglinSequence(event2) {
      event2.recipes.create.sequenced_assembly(
        [
          // begin
          "passivepiglins:piglin_coin"
          // output
        ],
        Item.of("create:golden_sheet"),
        [
          // input
          event2.recipes.createCutting("create:golden_sheet", "create:golden_sheet").processingTime(30),
          event2.recipes.createDeploying("create:golden_sheet", ["minecraft:gold_nugget", "minecraft:gold_nugget"]),
          event2.recipes.createDeploying("create:golden_sheet", [
            "minecraft:piglin_banner_pattern",
            "minecraft:piglin_banner_pattern"
          ]),
          event2.recipes.createPressing("create:golden_sheet", "create:golden_sheet").processingTime(75)
        ]
      ).transitionalItem("createastral:coin").loops(1);
      event2.recipes.create.sequenced_assembly(
        [
          // begin
          "passivepiglins:piglin_fortune"
          // output
        ],
        Item.of("createastral:golden_bowl"),
        [
          // input
          event2.recipes.createFilling("ad_astra:iron_plate", [
            "ad_astra:iron_plate",
            { fluid: "techreborn:methane", amount: 3e3 }
          ]).processingTime(75),
          //fill
          event2.recipes.createDeploying("create:golden_sheet", [
            "techreborn:netherrack_dust",
            "techreborn:netherrack_dust"
          ]),
          event2.recipes.createDeploying("create:golden_sheet", [
            "minecraft:crimson_fungus",
            "minecraft:crimson_fungus"
          ])
        ]
      ).transitionalItem("createastral:filled_golden_bowl").loops(1);
      event2.recipes.create.sequenced_assembly(
        [
          // begin
          "passivepiglins:piglin_totem"
          // output
        ],
        Item.of("minecraft:gold_ingot"),
        [
          // input
          event2.recipes.createDeploying("minecraft:gold_ingot", ["minecraft:gold_nugget", "minecraft:gold_nugget"]),
          event2.recipes.createDeploying("minecraft:gold_ingot", [
            "createastral:golden_pin",
            "createastral:golden_pin"
          ]),
          event2.recipes.createDeploying("minecraft:gold_ingot", [
            "createastral:golden_pin",
            "createastral:golden_pin"
          ])
        ]
      ).transitionalItem("minecraft:gold_ingot").loops(1);
    }
    function wineSequence(event2) {
      event2.recipes.create.sequenced_assembly(
        [
          // begin
          "vinery:chenet_wine"
          // output
        ],
        "vinery:red_grapejuice_wine_bottle",
        [
          // input
          event2.recipes.createDeploying("kubejs:incomplete_chenet_wine", [
            "kubejs:incomplete_chenet_wine",
            "minecraft:sweet_berries"
          ]),
          event2.recipes.createFilling("kubejs:incomplete_chenet_wine", [
            "kubejs:incomplete_chenet_wine",
            { fluid: "kubejs:red_grape_juice", amount: 250 * mB }
          ]),
          event2.recipes.createDeploying("kubejs:incomplete_chenet_wine", [
            "kubejs:incomplete_chenet_wine",
            "minecraft:sweet_berries"
          ])
        ]
      ).transitionalItem("kubejs:incomplete_chenet_wine").loops(1);
      event2.recipes.create.sequenced_assembly(
        [
          // begin
          "vinery:king_danis_wine"
          // output
        ],
        "vinery:red_grapejuice_wine_bottle",
        [
          // input
          event2.recipes.createFilling("kubejs:incomplete_king_danis_wine", [
            "kubejs:incomplete_king_danis_wine",
            { fluid: "kubejs:red_grape_juice", amount: 250 * mB }
          ]),
          event2.recipes.createFilling("kubejs:incomplete_king_danis_wine", [
            "kubejs:incomplete_king_danis_wine",
            { fluid: "create:honey", amount: 250 * mB }
          ]),
          event2.recipes.createFilling("kubejs:incomplete_king_danis_wine", [
            "kubejs:incomplete_king_danis_wine",
            { fluid: "create:honey", amount: 250 * mB }
          ])
        ]
      ).transitionalItem("kubejs:incomplete_king_danis_wine").loops(1);
      event2.recipes.create.sequenced_assembly(
        [
          // begin
          "vinery:noir_wine"
          // output
        ],
        "vinery:red_grapejuice_wine_bottle",
        [
          // input
          event2.recipes.createDeploying("kubejs:incomplete_noir_wine", [
            "kubejs:incomplete_noir_wine",
            "minecraft:kelp"
          ]),
          event2.recipes.createFilling("kubejs:incomplete_noir_wine", [
            "kubejs:incomplete_noir_wine",
            { fluid: "kubejs:red_grape_juice", amount: 250 * mB }
          ]),
          event2.recipes.createDeploying("kubejs:incomplete_noir_wine", [
            "kubejs:incomplete_noir_wine",
            "minecraft:kelp"
          ])
        ]
      ).transitionalItem("kubejs:incomplete_noir_wine").loops(1);
      event2.recipes.create.sequenced_assembly(
        [
          // begin
          "vinery:bolvar_wine"
          // output
        ],
        "vinery:red_grapejuice_wine_bottle",
        [
          // input
          event2.recipes.createFilling("kubejs:incomplete_bolvar_wine", [
            "kubejs:incomplete_bolvar_wine",
            { fluid: "create:honey", amount: 250 * mB }
          ]),
          event2.recipes.createFilling("kubejs:incomplete_bolvar_wine", [
            "kubejs:incomplete_bolvar_wine",
            { fluid: "kubejs:red_grape_juice", amount: 250 * mB }
          ]),
          event2.recipes.createDeploying("kubejs:incomplete_bolvar_wine", [
            "kubejs:incomplete_bolvar_wine",
            "vinery:cherry"
          ])
        ]
      ).transitionalItem("kubejs:incomplete_bolvar_wine").loops(1);
      event2.recipes.create.sequenced_assembly(
        [
          // begin
          "vinery:cherry_wine"
          // output
        ],
        "vinery:red_grapejuice_wine_bottle",
        [
          // input
          event2.recipes.createDeploying("kubejs:incomplete_cherry_wine", [
            "kubejs:incomplete_cherry_wine",
            "vinery:cherry"
          ]),
          event2.recipes.createFilling("kubejs:incomplete_cherry_wine", [
            "kubejs:incomplete_cherry_wine",
            { fluid: "kubejs:red_grape_juice", amount: 250 * mB }
          ]),
          event2.recipes.createDeploying("kubejs:incomplete_cherry_wine", [
            "kubejs:incomplete_cherry_wine",
            "vinery:cherry"
          ])
        ]
      ).transitionalItem("kubejs:incomplete_cherry_wine").loops(1);
      event2.recipes.create.sequenced_assembly(
        [
          // begin
          "vinery:jellie_wine"
          // output
        ],
        "vinery:red_grapejuice_wine_bottle",
        [
          // input
          event2.recipes.createDeploying("kubejs:incomplete_jellie_wine", [
            "kubejs:incomplete_jellie_wine",
            "minecraft:golden_apple"
          ]),
          event2.recipes.createFilling("kubejs:incomplete_jellie_wine", [
            "kubejs:incomplete_jellie_wine",
            { fluid: "kubejs:white_grape_juice", amount: 250 * mB }
          ]),
          event2.recipes.createFilling("kubejs:incomplete_jellie_wine", [
            "kubejs:incomplete_jellie_wine",
            { fluid: "create:honey", amount: 250 * mB }
          ])
        ]
      ).transitionalItem("kubejs:incomplete_jellie_wine").loops(1);
      event2.recipes.create.sequenced_assembly(
        [
          // begin
          "vinery:clark_wine"
          // output
        ],
        "vinery:white_grapejuice_wine_bottle",
        [
          // input
          event2.recipes.createDeploying("kubejs:incomplete_clark_wine", [
            "kubejs:incomplete_clark_wine",
            "minecraft:sweet_berries"
          ]),
          event2.recipes.createFilling("kubejs:incomplete_clark_wine", [
            "kubejs:incomplete_clark_wine",
            { fluid: "kubejs:white_grape_juice", amount: 250 * mB }
          ]),
          event2.recipes.createDeploying("kubejs:incomplete_clark_wine", [
            "kubejs:incomplete_clark_wine",
            "minecraft:sweet_berries"
          ])
        ]
      ).transitionalItem("kubejs:incomplete_clark_wine").loops(1);
      event2.recipes.create.sequenced_assembly(
        [
          // begin
          "vinery:mellohi_wine"
          // output
        ],
        "vinery:white_grapejuice_wine_bottle",
        [
          // input
          event2.recipes.createFilling("kubejs:incomplete_mellohi_wine", [
            "kubejs:incomplete_mellohi_wine",
            { fluid: "create:honey", amount: 250 * mB }
          ]),
          event2.recipes.createFilling("kubejs:incomplete_mellohi_wine", [
            "kubejs:incomplete_mellohi_wine",
            { fluid: "create:honey", amount: 250 * mB }
          ]),
          event2.recipes.createFilling("kubejs:incomplete_mellohi_wine", [
            "kubejs:incomplete_mellohi_wine",
            { fluid: "kubejs:white_grape_juice", amount: 250 * mB }
          ])
        ]
      ).transitionalItem("kubejs:incomplete_mellohi_wine").loops(1);
      event2.recipes.create.sequenced_assembly(
        [
          // begin
          "vinery:solaris_wine"
          // output
        ],
        "vinery:white_grapejuice_wine_bottle",
        [
          // input
          event2.recipes.createFilling("kubejs:incomplete_solaris_wine", [
            "kubejs:incomplete_solaris_wine",
            { fluid: "kubejs:white_grape_juice", amount: 250 * mB }
          ]),
          event2.recipes.createDeploying("kubejs:incomplete_solaris_wine", [
            "kubejs:incomplete_solaris_wine",
            "minecraft:sweet_berries"
          ]),
          event2.recipes.createFilling("kubejs:incomplete_solaris_wine", [
            "kubejs:incomplete_solaris_wine",
            { fluid: "create:honey", amount: 250 * mB }
          ])
        ]
      ).transitionalItem("kubejs:incomplete_solaris_wine").loops(1);
      event2.recipes.create.sequenced_assembly(
        [
          // begin
          "vinery:aegis_wine"
          // output
        ],
        "vinery:wine_bottle",
        [
          // input
          event2.recipes.createDeploying("kubejs:incomplete_aegis_wine", [
            "kubejs:incomplete_aegis_wine",
            "minecraft:sugar"
          ]),
          event2.recipes.createFilling("kubejs:incomplete_aegis_wine", [
            "kubejs:incomplete_aegis_wine",
            { fluid: "minecraft:water", amount: 1e3 * mB }
          ]),
          event2.recipes.createDeploying("kubejs:incomplete_aegis_wine", [
            "kubejs:incomplete_aegis_wine",
            "minecraft:kelp"
          ])
        ]
      ).transitionalItem("kubejs:incomplete_aegis_wine").loops(1);
      event2.recipes.create.sequenced_assembly(
        [
          // begin
          "vinery:apple_wine"
          // output
        ],
        "vinery:wine_bottle",
        [
          // input
          event2.recipes.createDeploying("kubejs:incomplete_apple_wine", [
            "kubejs:incomplete_apple_wine",
            "minecraft:apple"
          ]),
          event2.recipes.createFilling("kubejs:incomplete_apple_wine", [
            "kubejs:incomplete_apple_wine",
            { fluid: "create:honey", amount: 250 * mB }
          ]),
          event2.recipes.createDeploying("kubejs:incomplete_apple_wine", [
            "kubejs:incomplete_apple_wine",
            "minecraft:apple"
          ])
        ]
      ).transitionalItem("kubejs:incomplete_apple_wine").loops(1);
      event2.recipes.create.sequenced_assembly(
        [
          // begin
          "vinery:kelp_cider"
          // output
        ],
        "vinery:wine_bottle",
        [
          // input
          event2.recipes.createDeploying("kubejs:incomplete_kelp_cider", [
            "kubejs:incomplete_kelp_cider",
            "minecraft:kelp"
          ]),
          event2.recipes.createDeploying("kubejs:incomplete_kelp_cider", [
            "kubejs:incomplete_kelp_cider",
            "minecraft:kelp"
          ]),
          event2.recipes.createDeploying("kubejs:incomplete_kelp_cider", [
            "kubejs:incomplete_kelp_cider",
            "minecraft:apple"
          ])
        ]
      ).transitionalItem("kubejs:incomplete_kelp_cider").loops(1);
      event2.recipes.create.sequenced_assembly(
        [
          // begin
          "vinery:apple_cider"
          // output
        ],
        "vinery:wine_bottle",
        [
          // input
          event2.recipes.createDeploying("kubejs:incomplete_apple_cider", [
            "kubejs:incomplete_apple_cider",
            "#minecraft:straw"
          ]),
          event2.recipes.createDeploying("kubejs:incomplete_apple_cider", [
            "kubejs:incomplete_apple_cider",
            "minecraft:apple"
          ]),
          event2.recipes.createDeploying("kubejs:incomplete_apple_cider", [
            "kubejs:incomplete_apple_cider",
            "minecraft:apple"
          ])
        ]
      ).transitionalItem("kubejs:incomplete_apple_cider").loops(1);
    }
    event.recipes.create.sequenced_assembly(
      [
        // begin
        "immersive_aircraft:engine"
        // output
      ],
      "create:precision_mechanism",
      [
        // input
        event.recipes.createDeploying("create:incomplete_precision_mechanism", [
          "create:incomplete_precision_mechanism",
          "immersive_aircraft:boiler"
        ]),
        event.recipes.createDeploying("create:incomplete_precision_mechanism", [
          "create:incomplete_precision_mechanism",
          "create:blaze_burner"
        ]),
        event.recipes.createDeploying("create:incomplete_precision_mechanism", [
          "create:incomplete_precision_mechanism",
          "createaddition:capacitor"
        ])
      ]
    ).transitionalItem("create:incomplete_precision_mechanism").loops(2);
    event.recipes.create.sequenced_assembly(["automobility:launch_gel"], "tconstruct:slimesteel_nugget", [
      event.recipes.createPressing("tconstruct:slimesteel_nugget", "tconstruct:slimesteel_nugget")
    ]).transitionalItem("create:tree_fertilizer").loops(125);
    event.recipes.create.sequenced_assembly(["createastral:navigation_mechanism"], "phonos:redstone_chip", [
      event.recipes.createFilling("phonos:redstone_chip", [
        "phonos:redstone_chip",
        {
          fluid: "tconstruct:molten_cobalt",
          amount: 1350
        }
      ]),
      event.recipes.createDeploying("phonos:redstone_chip", ["phonos:redstone_chip", "techreborn:electrum_nugget"]),
      event.recipes.createPressing("phonos:redstone_chip", "phonos:redstone_chip")
    ]).transitionalItem("createastral:incomplete_navigation_mechanism").loops(30);
    event.recipes.create.sequenced_assembly(
      [
        // begin
        "minecraft:ender_eye"
        // output
      ],
      "minecraft:ender_pearl",
      [
        // input
        event.recipes.createDeploying("minecraft:ender_pearl", ["minecraft:blaze_powder", "minecraft:blaze_powder"]),
        event.recipes.createDeploying("minecraft:ender_pearl", [
          "create:powdered_obsidian",
          "create:powdered_obsidian"
        ]),
        event.recipes.createPressing("minecraft:ender_pearl", "minecraft:ender_pearl"),
        //yeah
        event.recipes.createFilling("minecraft:ender_pearl", [
          "minecraft:ender_pearl",
          { fluid: "minecraft:lava", amount: 250 * mB }
        ]),
        //fill 1/4 bucket lava
        event.recipes.createPressing("minecraft:ender_pearl", "minecraft:ender_pearl")
      ]
    ).transitionalItem("minecraft:ender_pearl").loops(3);
    const inc_redstone_chip = "createastral:incomplete_redstone_chip";
    event.recipes.create.sequenced_assembly(
      [
        // begin
        "phonos:redstone_chip"
        // output
      ],
      "create:electron_tube",
      [
        // input
        event.recipes.createFilling("create:electron_tube", [
          inc_redstone_chip,
          { fluid: "tconstruct:molten_copper", amount: 3375 }
        ]),
        event.recipes.createDeploying(inc_redstone_chip, [inc_redstone_chip, "#c:wires"]),
        //fill obsid
        event.recipes.createPressing(inc_redstone_chip, "#c:wires")
        //yeah
      ]
    ).transitionalItem(inc_redstone_chip).loops(12);
    event.recipes.create.sequenced_assembly(
      [
        // begin
        "createastral:shimmer_amplifier"
        // output
      ],
      "createbigcannons:nethersteel_screw_breech",
      [
        // input
        event.recipes.createFilling("createbigcannons:nethersteel_screw_breech", [
          "createbigcannons:nethersteel_screw_breech",
          { fluid: "kubejs:shimmer", amount: 9e3 }
        ]),
        event.recipes.createDeploying("createbigcannons:nethersteel_screw_breech", [
          "createbigcannons:nethersteel_screw_breech",
          "kubejs:fire_resistant_fragile_sheet_block"
        ]),
        event.recipes.createFilling("createbigcannons:nethersteel_screw_breech", [
          "createbigcannons:nethersteel_screw_breech",
          { fluid: "techreborn:lithium", amount: 3e3 }
        ]),
        event.recipes.createFilling("createbigcannons:nethersteel_screw_breech", [
          "createbigcannons:nethersteel_screw_breech",
          { fluid: "techreborn:silicon", amount: 3e3 }
        ])
      ]
    ).transitionalItem("createastral:incomplete_electronic_circuit").loops(6);
    event.recipes.create.sequenced_assembly(
      [
        // begin
        "minecraft:ink_sac"
        // output
      ],
      "minecraft:black_dye",
      [event.recipes.createDeploying("minecraft:black_dye", ["minecraft:black_dye", "minecraft:paper"])]
    ).transitionalItem("minecraft:black_dye").loops(2);
    const inc_dash_panel = "createastral:incomplete_dash_panel";
    event.recipes.create.sequenced_assembly(["automobility:dash_panel"], "create:iron_sheet", [
      event.recipes.createFilling(inc_dash_panel, [inc_dash_panel, { fluid: "kubejs:shimmer", amount: INGOT }]).processingTime(75),
      //fill
      event.recipes.createPressing(inc_dash_panel, inc_dash_panel).processingTime(75)
    ]).transitionalItem(inc_dash_panel).loops(3);
    const inc_refining_agent = "createastral:incomplete_refining_agent";
    event.recipes.create.sequenced_assembly(["createastral:refining_agent"], "ae2:fluix_dust", [
      event.recipes.createFilling(inc_refining_agent, [
        inc_refining_agent,
        { fluid: "techreborn:nitrogen", amount: 9e3 }
      ]),
      event.recipes.createFilling(inc_refining_agent, [
        inc_refining_agent,
        { fluid: "techreborn:biofuel", amount: 9e3 }
      ]),
      event.recipes.createPressing(inc_refining_agent, "ae2:fluix_dust")
    ]).transitionalItem(inc_refining_agent).loops(3);
    event.recipes.create.sequenced_assembly(
      ["createastral:seitan"],
      ["create:dough"],
      [
        event.recipes.createFilling("create:dough", ["create:dough", { fluid: "minecraft:water", amount: 100 * mB }]),
        event.recipes.createPressing("create:dough", "create:dough"),
        event.recipes.createCutting("create:dough", "create:dough")
      ]
    ).transitionalItem("create:dough").loops(2);
    event.recipes.create.sequenced_assembly(
      ["minecraft:porkchop"],
      ["createastral:seitan"],
      [
        event.recipes.createDeploying("createastral:protopork", ["createastral:protopork", "minecraft:rotten_flesh"]),
        event.recipes.createFilling("createastral:protopork", [
          "createastral:protopork",
          { fluid: "tconstruct:blood", amount: 100 * mB }
        ]),
        event.recipes.createPressing("createastral:protopork", "createastral:protopork"),
        event.recipes.createCutting("createastral:protopork", "createastral:protopork")
      ]
    ).transitionalItem("createastral:protopork").loops(1);
    event.recipes.create.sequenced_assembly(
      ["minecraft:mutton"],
      ["createastral:seitan"],
      [
        event.recipes.createDeploying("createastral:protomutton", ["createastral:protomutton", "minecraft:string"]),
        event.recipes.createFilling("createastral:protomutton", [
          "createastral:protomutton",
          { fluid: "tconstruct:blood", amount: 100 * mB }
        ]),
        event.recipes.createPressing("createastral:protomutton", "createastral:protomutton"),
        event.recipes.createCutting("createastral:protomutton", "createastral:protomutton")
      ]
    ).transitionalItem("createastral:protomutton").loops(1);
    event.recipes.create.sequenced_assembly(
      ["minecraft:beef"],
      ["createastral:seitan"],
      [
        event.recipes.createDeploying("createastral:protobeef", ["createastral:protobeef", "minecraft:moss_carpet"]),
        event.recipes.createFilling("createastral:protobeef", [
          "createastral:protobeef",
          { fluid: "tconstruct:blood", amount: 100 * mB }
        ]),
        event.recipes.createPressing("createastral:protobeef", "createastral:protobeef"),
        event.recipes.createCutting("createastral:protobeef", "createastral:protobeef")
      ]
    ).transitionalItem("createastral:protobeef").loops(1);
    event.recipes.create.sequenced_assembly(
      ["minecraft:chicken"],
      ["createastral:seitan"],
      [
        event.recipes.createDeploying("createastral:protochicken", [
          "createastral:protochicken",
          "minecraft:wheat_seeds"
        ]),
        event.recipes.createFilling("createastral:protochicken", [
          "createastral:protochicken",
          { fluid: "tconstruct:blood", amount: 100 * mB }
        ]),
        event.recipes.createPressing("createastral:protochicken", "createastral:protochicken"),
        event.recipes.createCutting("createastral:protochicken", "createastral:protochicken")
      ]
    ).transitionalItem("createastral:protochicken").loops(1);
    event.recipes.create.sequenced_assembly(
      ["minecraft:rabbit"],
      ["createastral:seitan"],
      [
        event.recipes.createDeploying("createastral:protorabbit", ["createastral:protorabbit", "minecraft:carrot"]),
        event.recipes.createFilling("createastral:protorabbit", [
          "createastral:protorabbit",
          { fluid: "tconstruct:blood", amount: 100 * mB }
        ]),
        event.recipes.createPressing("createastral:protorabbit", "createastral:protorabbit"),
        event.recipes.createCutting("createastral:protorabbit", "createastral:protorabbit")
      ]
    ).transitionalItem("createastral:protorabbit").loops(1);
    event.recipes.create.sequenced_assembly(
      ["minecraft:egg"],
      ["createastral:seitan"],
      [
        event.recipes.createDeploying("createastral:seitan", ["createastral:seitan", "techreborn:calcite_dust"]),
        event.recipes.createFilling("createastral:seitan", [
          "createastral:seitan",
          { fluid: "tconstruct:earth_slime", amount: 10 * mB }
        ]),
        event.recipes.createPressing("createastral:seitan", "createastral:seitan"),
        event.recipes.createFilling("createastral:seitan", [
          "createastral:seitan",
          { fluid: "kubejs:shimmer", amount: 10 * mB }
          //For the bit of magic required to create life
        ])
      ]
    ).transitionalItem("createastral:seitan").loops(1);
    event.recipes.create.sequenced_assembly(
      //true DIY Ham
      ["farmersdelight:ham"],
      ["minecraft:porkchop"],
      [
        event.recipes.createDeploying("minecraft:porkchop", ["minecraft:porkchop", "minecraft:bone"]),
        event.recipes.createDeploying("minecraft:porkchop", ["minecraft:porkchop", "createastral:seitan"]),
        event.recipes.createFilling("minecraft:porkchop", [
          "minecraft:porkchop",
          { fluid: "tconstruct:blood", amount: 100 * mB }
        ]),
        event.recipes.createPressing("minecraft:porkchop", "minecraft:porkchop")
      ]
    ).transitionalItem("createastral:seitan").loops(1);
    event.recipes.create.sequenced_assembly(
      // Inksack for inky fun
      [Item.of("minecraft:ink_sac", 2)],
      ["createastral:seitan"],
      [
        event.recipes.createDeploying("createastral:seitan", ["createastral:seitan", "minecraft:black_dye"]),
        event.recipes.createFilling("createastral:seitan", [
          "createastral:seitan",
          { fluid: "minecraft:water", amount: 500 * mB }
        ]),
        event.recipes.createDeploying("createastral:seitan", ["createastral:seitan", "minecraft:black_dye"]),
        event.recipes.createFilling("createastral:seitan", [
          "createastral:seitan",
          { fluid: "minecraft:water", amount: 500 * mB }
        ]),
        event.recipes.createPressing("createastral:seitan", "createastral:seitan")
      ]
    ).transitionalItem("createastral:seitan").loops(1);
    event.recipes.create.sequenced_assembly(
      // If you need some head, drill some bone
      ["tconstruct:blaze_head"],
      ["minecraft:skeleton_skull"],
      [
        event.recipes.createDeploying("createastral:incomplete_blaze_head", [
          "createastral:incomplete_blaze_head",
          "minecraft:blaze_powder"
        ]),
        event.recipes.createFilling("createastral:incomplete_blaze_head", [
          "createastral:incomplete_blaze_head",
          { fluid: "tconstruct:blazing_blood", amount: 100 * mB }
        ]),
        event.recipes.createFilling("createastral:incomplete_blaze_head", [
          "createastral:incomplete_blaze_head",
          { fluid: "kubejs:shimmer", amount: 50 * mB }
        ]),
        event.recipes.createPressing("createastral:incomplete_blaze_head", "createastral:incomplete_blaze_head")
      ]
    ).transitionalItem("createastral:incomplete_blaze_head").loops(1);
    event.recipes.create.sequenced_assembly(
      ["minecraft:small_amethyst_bud"],
      ["minecraft:amethyst_shard"],
      [
        event.recipes.createFilling("minecraft:amethyst_shard", [
          "minecraft:amethyst_shard",
          { fluid: "minecraft:water", amount: BUCKET / 4 }
        ]),
        event.recipes.createFilling("minecraft:amethyst_shard", [
          "minecraft:amethyst_shard",
          { fluid: "kubejs:shimmer", amount: 10 * mB }
        ]),
        event.recipes.createFilling("minecraft:amethyst_shard", [
          "minecraft:amethyst_shard",
          { fluid: "minecraft:water", amount: BUCKET / 4 }
        ]),
        event.recipes.createFilling("minecraft:amethyst_shard", [
          "minecraft:amethyst_shard",
          { fluid: "kubejs:shimmer", amount: 10 * mB }
        ])
      ]
    ).transitionalItem("minecraft:amethyst_shard").loops(1);
    event.recipes.create.sequenced_assembly(
      ["minecraft:medium_amethyst_bud"],
      ["minecraft:small_amethyst_bud"],
      [
        event.recipes.createFilling("minecraft:small_amethyst_bud", [
          "minecraft:small_amethyst_bud",
          { fluid: "minecraft:water", amount: BUCKET / 4 }
        ]),
        event.recipes.createFilling("minecraft:small_amethyst_bud", [
          "minecraft:small_amethyst_bud",
          { fluid: "kubejs:shimmer", amount: 10 * mB }
        ]),
        event.recipes.createFilling("minecraft:small_amethyst_bud", [
          "minecraft:small_amethyst_bud",
          { fluid: "minecraft:water", amount: BUCKET / 4 }
        ]),
        event.recipes.createFilling("minecraft:small_amethyst_bud", [
          "minecraft:small_amethyst_bud",
          { fluid: "kubejs:shimmer", amount: 10 * mB }
        ])
      ]
    ).transitionalItem("minecraft:small_amethyst_bud").loops(1);
    event.recipes.create.sequenced_assembly(
      ["minecraft:large_amethyst_bud"],
      ["minecraft:medium_amethyst_bud"],
      [
        event.recipes.createFilling("minecraft:medium_amethyst_bud", [
          "minecraft:medium_amethyst_bud",
          { fluid: "minecraft:water", amount: BUCKET / 4 }
        ]),
        event.recipes.createFilling("minecraft:medium_amethyst_bud", [
          "minecraft:medium_amethyst_bud",
          { fluid: "kubejs:shimmer", amount: 10 * mB }
        ]),
        event.recipes.createFilling("minecraft:medium_amethyst_bud", [
          "minecraft:medium_amethyst_bud",
          { fluid: "minecraft:water", amount: BUCKET / 4 }
        ]),
        event.recipes.createFilling("minecraft:medium_amethyst_bud", [
          "minecraft:medium_amethyst_bud",
          { fluid: "kubejs:shimmer", amount: 10 * mB }
        ])
      ]
    ).transitionalItem("minecraft:medium_amethyst_bud").loops(1);
    event.recipes.create.sequenced_assembly(
      ["minecraft:amethyst_cluster"],
      ["minecraft:large_amethyst_bud"],
      [
        event.recipes.createFilling("minecraft:large_amethyst_bud", [
          "minecraft:large_amethyst_bud",
          { fluid: "minecraft:water", amount: BUCKET / 4 }
        ]),
        event.recipes.createFilling("minecraft:large_amethyst_bud", [
          "minecraft:large_amethyst_bud",
          { fluid: "kubejs:shimmer", amount: 10 * mB }
        ]),
        event.recipes.createFilling("minecraft:large_amethyst_bud", [
          "minecraft:large_amethyst_bud",
          { fluid: "minecraft:water", amount: BUCKET / 4 }
        ]),
        event.recipes.createFilling("minecraft:large_amethyst_bud", [
          "minecraft:large_amethyst_bud",
          { fluid: "kubejs:shimmer", amount: 10 * mB }
        ])
      ]
    ).transitionalItem("minecraft:large_amethyst_bud").loops(1);
    enchantBooks(event);
    event.recipes.create.sequenced_assembly(
      [
        // begin
        "createastral:ancient_stone"
        // output
      ],
      "ad_astra:mars_sand",
      [
        event.recipes.createDeploying("createastral:martian_clump", [
          "createastral:martian_clump",
          "tconstruct:debris_nugget"
        ]),
        event.recipes.createFilling("createastral:martian_clump", [
          "createastral:martian_clump",
          { fluid: "kubejs:shimmer", amount: BUCKET / 2 }
        ])
      ]
    ).transitionalItem("createastral:martian_clump").loops(1);
    event.recipes.create.sequenced_assembly(
      [
        // output
        Item.of("astralfoods:cod_n_blaze").withChance(1)
        // begin
      ],
      "astralfoods:blaze_fries_and_cod",
      [
        // input
        event.recipes.createDeploying("astralfoods:blaze_fries_and_cod", [
          "astralfoods:blaze_fries_and_cod",
          "minecraft:paper"
        ])
      ]
    ).transitionalItem("astralfoods:blaze_fries_and_cod").loops(3);
    event.recipes.create.sequenced_assembly([Item.of("ad_astra:moon_stone")], "minecraft:stone", [
      event.recipes.createPressing("minecraft:stone", "minecraft:stone"),
      event.recipes.createFilling("minecraft:stone", [
        "minecraft:stone",
        { fluid: "kubejs:shimmer", amount: 250 * mB }
      ])
    ]).transitionalItem("minecraft:stone").loops(4);
  });
  function enchantBooks(event) {
    //! enchantment.js
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sharpness",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "minecraft:golden_sword",
          "minecraft:golden_sword"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:protection",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "tconstruct:gold_reinforcement",
          "tconstruct:gold_reinforcement"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "tconstruct:iron_reinforcement",
          "tconstruct:iron_reinforcement"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:mending",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "tconstruct:slimesteel_reinforcement",
          "tconstruct:slimesteel_reinforcement"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_protection",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "tconstruct:seared_reinforcement",
          "tconstruct:seared_reinforcement"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:blast_protection",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "tconstruct:emerald_reinforcement",
          "tconstruct:emerald_reinforcement"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:projectile_protection",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "tconstruct:bronze_reinforcement",
          "tconstruct:bronze_reinforcement"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:thorns",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "tconstruct:cobalt_reinforcement",
          "tconstruct:cobalt_reinforcement"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:sweeping",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "dustrial_decor:wrapped_chains",
          "dustrial_decor:wrapped_chains"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:soul_speed",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "minecraft:soul_lantern",
          "minecraft:soul_lantern"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:smite",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "techreborn:silver_plate",
          "techreborn:silver_plate"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:silk_touch",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "tconstruct:silky_cloth",
          "tconstruct:silky_cloth"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:respiration",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "create:copper_diving_helmet",
          "create:copper_diving_helmet"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:quick_charge",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:lever", "minecraft:lever"]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:punch",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", ["create:brass_hand", "create:brass_hand"]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:power",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:gunpowder", "minecraft:gunpowder"]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:piercing",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:piston", "minecraft:piston"]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:multishot",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:crossbow", "minecraft:crossbow"]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:looting",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "ad_astra:calorite_ingot",
          "ad_astra:calorite_ingot"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:knockback",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:tnt", "minecraft:tnt"]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:infinity",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "minecraft:spectral_arrow",
          "minecraft:spectral_arrow"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "minecraft:spectral_arrow",
          "minecraft:spectral_arrow"
        ]),
        // Why? Just to fug wit ppl
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:frost_walker",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:blue_ice", "minecraft:blue_ice"]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fortune",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "tconstruct:jeweled_apple",
          "tconstruct:jeweled_apple"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:flame",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "minecraft:blaze_powder",
          "minecraft:blaze_powder"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:fire_aspect",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:blaze_rod", "minecraft:blaze_rod"]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:feather_falling",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:white_bed", "minecraft:white_bed"]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:efficiency",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          Item.of("minecraft:potion", '{Potion:"minecraft:swiftness"}'),
          Item.of("minecraft:potion", '{Potion:"minecraft:swiftness"}')
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:depth_strider",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "create:copper_diving_boots",
          "create:copper_diving_boots"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:aqua_affinity",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "create:copper_backtank",
          "create:copper_backtank"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:bane_of_arthropods",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:spider_eye", "minecraft:spider_eye"]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:lure",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "farmersdelight:cod_slice",
          "farmersdelight:cod_slice"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "minecraft:golden_apple",
          "minecraft:golden_apple"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:loyalty",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:sea_lantern", "minecraft:sea_lantern"]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:riptide",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "minecraft:dark_prismarine",
          "minecraft:dark_prismarine"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:impaling",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "minecraft:prismarine_shard",
          "minecraft:prismarine_shard"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"minecraft:channeling",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "minecraft:lightning_rod",
          "minecraft:lightning_rod"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    );
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"farmersdelight:backstabbing",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "farmersdelight:iron_knife",
          "farmersdelight:iron_knife"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"create:capacity",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "ad_astra:oxygen_bucket",
          "ad_astra:oxygen_bucket"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"create:potato_recovery",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "ad_astra:oxygen_bucket",
          "ad_astra:oxygen_bucket"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("xpcrystals:xp_boost_potion")],
      ["minecraft:glass_bottle"],
      [
        event.recipes.createFilling("minecraft:glass_bottle", [
          "minecraft:glass_bottle",
          {
            fluid: "kubejs:liquid_xp_nuggies",
            amount: BUCKET / 3
          }
        ]),
        event.recipes.createFilling("minecraft:glass_bottle", [
          "minecraft:glass_bottle",
          {
            fluid: "xpcrystals:soul",
            amount: BUCKET / 3
          }
        ]),
        event.recipes.createFilling("minecraft:glass_bottle", [
          "minecraft:glass_bottle",
          {
            fluid: "kubejs:shimmer",
            amount: BUCKET / 3
          }
        ])
      ]
    ).transitionalItem("minecraft:glass_bottle").loops(1);
    //! dungeonsenchants.js
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:accelerate",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:rabbit_foot", "minecraft:rabbit_foot"]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:ambush",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:leather", "minecraft:leather"]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:anima_conduit",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "astraladditions:shimmer_heart",
          "astraladditions:shimmer_heart"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    );
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:bonus_shot",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "createbigcannons:flak_autocannon_round",
          "createbigcannons:flak_autocannon_round"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:burst_bowstring",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", ["doodads:slimey_shoes", "doodads:slimey_shoes"]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:chain_reaction",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "createbigcannons:shot_balls",
          "createbigcannons:shot_balls"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:chains",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:chain", "minecraft:chain"]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:charge",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", ["create:sturdy_sheet", "create:sturdy_sheet"]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:cobweb_shot",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:cobweb", "minecraft:cobweb"]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:committed",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "techreborn:diamond_saw_blade",
          "techreborn:diamond_saw_blade"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:critical_hit",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:nether_star", "minecraft:nether_star"]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:dipping_poison",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:pufferfish", "minecraft:pufferfish"]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:dynamo",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "tconstruct:slime_boots",
          "tconstruct:slime_boots"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:echo",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:jukebox", "minecraft:jukebox"]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:enigma_resonator",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "tconstruct:sky_slime_crystal",
          "tconstruct:sky_slime_crystal"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:exploding",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "createbigcannons:he_shell",
          "createbigcannons:he_shell"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:freezing",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", ["ad_astra:ice_shard", "ad_astra:ice_shard"]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:fuse_shot",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "createbigcannons:impact_fuze",
          "createbigcannons:impact_fuze"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:gravity",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "create:weighted_ejector",
          "create:weighted_ejector"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:guarding_strike",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:shield", "minecraft:shield"]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:fuse_shot",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "createbigcannons:impact_fuze",
          "createbigcannons:impact_fuze"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:illagers_bane",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "minecraft:totem_of_undying",
          "minecraft:totem_of_undying"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:jungle_poison",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "minecraft:poisonous_potato",
          "minecraft:poisonous_potato"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:leeching",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "tconstruct:necrotic_bone",
          "tconstruct:necrotic_bone"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:levitation_shot",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "minecraft:phantom_membrane",
          "minecraft:phantom_membrane"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:overcharge",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "createbigcannons:nitropowder",
          "createbigcannons:nitropowder"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:leeching",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "tconstruct:necrotic_bone",
          "tconstruct:necrotic_bone"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:pain_cycle",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", ["tconstruct:bloodbone", "tconstruct:bloodbone"]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:phantoms_mark",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:glowstone", "minecraft:glowstone"]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:poison_cloud",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "minecraft:spore_blossom",
          "minecraft:spore_blossom"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:prospector",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "tconstruct:emerald_reinforcement",
          "tconstruct:emerald_reinforcement"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:radiance",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "minecraft:glow_berries",
          "minecraft:glow_berries"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:rampaging",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "techreborn:overclocker_upgrade",
          "techreborn:overclocker_upgrade"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:refreshment",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "farmersdelight:melon_juice",
          "farmersdelight:melon_juice"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:ricochet",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "createbigcannons:recoil_spring",
          "createbigcannons:recoil_spring"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:replenish",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "automobility:launch_gel",
          "automobility:launch_gel"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:rushdown",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "automobility:dash_panel",
          "automobility:dash_panel"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:shadow_barb",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "createaddition:barbed_wire",
          "createaddition:barbed_wire"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:shared_pain",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", ["doodads:cactus_ring", "doodads:cactus_ring"]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:shadow_shot",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "createbigcannons:solid_shot",
          "createbigcannons:solid_shot"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:shockwave",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "createbigcannons:shrapnel_shell",
          "createbigcannons:shrapnel_shell"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:smiting",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", ["yigd:grave", "yigd:grave"]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:soul_devourer",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "tconstruct:soulsteel_nugget",
          "tconstruct:soulsteel_nugget"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:soul_siphon",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "xpcrystals:soul_compound",
          "xpcrystals:soul_compound"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:stunning",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", ["drinkbeer:beer_mug", "drinkbeer:beer_mug"]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:swirling",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "ae2:certus_quartz_crystal",
          "ae2:certus_quartz_crystal"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:tempo_theft",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "createastral:swift_andesite",
          "createastral:swift_andesite"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:thundering",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "minecraft:lightning_rod",
          "minecraft:lightning_rod"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:replenish",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "createbigcannons:recoil_spring",
          "createbigcannons:recoil_spring"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:weakening",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", ["minecraft:wither_rose", "minecraft:wither_rose"]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:wild_rage",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "tconstruct:blood_slime_ball",
          "tconstruct:blood_slime_ball"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:void_strike",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", [
          "create:refined_radiance",
          "create:refined_radiance"
        ]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("minecraft:enchanted_book", '{StoredEnchantments:[{id:"mcdw:void_shot",lvl:1s}]}')],
      ["minecraft:book"],
      [
        event.recipes.createDeploying("minecraft:enchanted_book", ["create:shadow_steel", "create:shadow_steel"]),
        event.recipes.createDeploying("minecraft:enchanted_book", ["xpcrystals:xp_crystal", "xpcrystals:xp_crystal"]),
        // insert crystal here / def something that could be changed
        event.recipes.createFilling("minecraft:enchanted_book", [
          "minecraft:enchanted_book",
          { fluid: "xpcrystals:soul", amount: BUCKET }
        ]),
        //gathering the souls / def something that could be changed
        event.recipes.createPressing("minecraft:enchanted_book", "minecraft:enchanted_book")
      ]
    ).transitionalItem("minecraft:enchanted_book").loops(1);
    event.recipes.create.sequenced_assembly(
      [Item.of("xpcrystals:xp_boost_potion")],
      ["minecraft:glass_bottle"],
      [
        event.recipes.createFilling("minecraft:glass_bottle", [
          "minecraft:glass_bottle",
          {
            fluid: "kubejs:liquid_xp_nuggies",
            amount: BUCKET / 3
          }
        ]),
        event.recipes.createFilling("minecraft:glass_bottle", [
          "minecraft:glass_bottle",
          {
            fluid: "xpcrystals:soul",
            amount: BUCKET / 3
          }
        ]),
        event.recipes.createFilling("minecraft:glass_bottle", [
          "minecraft:glass_bottle",
          {
            fluid: "kubejs:shimmer",
            amount: BUCKET / 3
          }
        ])
      ]
    ).transitionalItem("minecraft:glass_bottle").loops(1);
  }
}
function createWashingRecipes() {
  onEvent("recipes", (event) => {
    const washingRecipes = [
      //sponge to wet sponge
      {
        input: "minecraft:calcite",
        outputs: [Item.of("minecraft:dripstone_block")]
      },
      {
        input: "minecraft:sponge",
        outputs: [Item.of("minecraft:wet_sponge")]
      },
      {
        input: "createaddition:biomass",
        outputs: [
          Item.of("createastral:pure_biomatter"),
          Item.of("minecraft:sugar").withChance(0.2),
          Item.of("minecraft:bone_meal").withChance(0.2)
        ]
      },
      {
        input: "minecraft:soul_soil",
        outputs: [
          Item.of("minecraft:gold_nugget").withChance(0.08),
          Item.of("minecraft:quartz").withChance(0.06),
          Item.of("minecraft:bone_meal").withChance(0.1)
        ]
      },
      {
        input: "ae2:certus_crystal_seed",
        outputs: [Item.of("ae2:certus_quartz_crystal"), Item.of("minecraft:sugar").withChance(0.1)]
      },
      {
        input: "ae2:fluix_crystal_seed",
        outputs: [Item.of("ae2:fluix_crystal"), Item.of("minecraft:sugar").withChance(0.1)]
      },
      {
        input: "createastral:lime",
        outputs: [
          Item.of("techreborn:silver_nugget").withChance(0.12),
          Item.of("techreborn:raw_silver").withChance(0.02)
        ]
      },
      {
        input: "minecraft:red_sand",
        outputs: [Item.of("create:zinc_nugget").withChance(0.33), Item.of("minecraft:dead_bush").withChance(0.12)]
      },
      {
        input: "ad_astra:moon_sand",
        outputs: [Item.of("ad_astra:desh_nugget").withChance(0.12), Item.of("ad_astra:cheese").withChance(0.04)]
      },
      {
        input: "ad_astra:mars_sand",
        outputs: [Item.of("techreborn:lead_nugget").withChance(0.25)]
      },
      {
        // wash shulker box to remove the color
        input: "#c:shulker_boxes",
        outputs: [Item.of("minecraft:shulker_box")]
      },
      {
        // soul soil without random ticks
        input: "farmersdelight:organic_compost",
        outputs: [Item.of("farmersdelight:rich_soil")]
      },
      // ae2 cable washing made easy !!!
      {
        input: "#ae2:glass_cable",
        outputs: [Item.of("ae2:fluix_glass_cable")]
      },
      {
        input: "#ae2:covered_cable",
        outputs: [Item.of("ae2:fluix_covered_cable")]
      },
      {
        input: "#ae2:covered_dense_cable",
        outputs: [Item.of("ae2:fluix_covered_dense_cable")]
      },
      {
        input: "#ae2:smart_cable",
        outputs: [Item.of("ae2:fluix_smart_cable")]
      },
      {
        input: "#ae2:smart_dense_cable",
        outputs: [Item.of("ae2:fluix_smart_dense_cable")]
      },
      {
        input: "minecraft:cobblestone",
        outputs: [Item.of("minecraft:mossy_cobblestone")]
        //easy mossy cobble for moss
      },
      {
        input: "minecraft:stone_bricks",
        outputs: [Item.of("minecraft:mossy_stone_bricks")]
      },
      {
        input: "techreborn:ashes_dust",
        outputs: [
          Item.of("minecraft:gold_nugget").withChance(0.2),
          Item.of("create:zinc_nugget").withChance(0.225),
          Item.of("create:copper_nugget").withChance(0.3),
          Item.of("techreborn:tin_nugget").withChance(0.25)
        ]
      },
      {
        input: "createastral:orcane",
        outputs: ["createastral:orcane"]
      }
    ];
    washingRecipes.forEach((recipe) => {
      event.recipes.createSplashing(recipe.outputs, recipe.input);
    });
  });
}
function distilleryRecipes() {
  onEvent("recipes", (event) => {
    const oldDistillationTowerStructure = [
      // old structure is still supported to avoid breaking factories immediately
      ["       ", "       ", "  eee  ", "  eee  ", "  eee  ", "       ", "       "],
      ["   a   ", "   a   ", "  bbb  ", "aabbbaa", "  bbb  ", "   a   ", "   a   "],
      ["       ", "   a   ", "  ada  ", " ad da ", "  ada  ", "   a   ", "       "],
      ["       ", "       ", "   c   ", "  c c  ", "   m   ", "       ", "       "],
      ["       ", "       ", "   c   ", "  c c  ", "   c   ", "       ", "       "],
      ["       ", "       ", "       ", "   c   ", "       ", "       ", "       "]
    ];
    const newDistillationTowerStructure = [
      // moved the controller block so 5 sides are accessible including the back
      ["       ", "       ", "  eee  ", "  eee  ", "  eee  ", "       ", "       "],
      ["   a   ", "   a   ", "  bbb  ", "aabbbaa", "  bbb  ", "   a   ", "   a   "],
      ["       ", "   a   ", "  ada  ", " ad da ", "  ada  ", "   a   ", "       "],
      ["       ", "       ", "   c   ", "  c c  ", "   c   ", "       ", "       "],
      ["       ", "       ", "   c   ", "  c c  ", "   m   ", "       ", "       "],
      ["       ", "       ", "       ", "   c   ", "       ", "       ", "       "]
    ];
    const distillationTowerStructure = [oldDistillationTowerStructure, newDistillationTowerStructure];
    const distilleryRecipes2 = [
      {
        // biofuel
        burnersAllowed: [
          "create:blaze_burner{fuelLevel:1}",
          "createaddition:liquid_blaze_burner{fuelLevel:1}",
          "create:blaze_burner{isCreative:1b}",
          "createaddition:liquid_blaze_burner{isCreative:1b}"
        ],
        time: 100,
        itemInput: { item: "createastral:pure_biomatter", count: 1 },
        fluidInput: { fluid: "minecraft:water", amount: BUCKET },
        energy: 1e4,
        fluidOutput: { fluid: "techreborn:biofuel", amount: BUCKET * 4 }
      },
      {
        // fuel -- creative burners would conflict with fuel2
        burnersAllowed: ["create:blaze_burner{fuelLevel:1}", "createaddition:liquid_blaze_burner{fuelLevel:1}"],
        time: 100,
        itemInput: { item: "createastral:refining_agent", count: 1 },
        fluidInput: { fluid: "techreborn:oil", amount: BUCKET },
        energy: 1e4,
        fluidOutput: { fluid: "kubejs:hellfire", amount: BUCKET }
      },
      {
        // fuel2
        burnersAllowed: [
          "create:blaze_burner{fuelLevel:2}",
          "createaddition:liquid_blaze_burner{fuelLevel:2}",
          "create:blaze_burner{isCreative:1b}",
          "createaddition:liquid_blaze_burner{isCreative:1b}"
        ],
        time: 100,
        itemInput: { item: "createastral:refining_agent", count: 1 },
        fluidInput: { fluid: "techreborn:oil", amount: BUCKET },
        energy: 2500,
        fluidOutput: { fluid: "kubejs:hellfire", amount: BUCKET }
      },
      {
        // uranium
        burnersAllowed: [
          "create:blaze_burner{fuelLevel:2}",
          "createaddition:liquid_blaze_burner{fuelLevel:2}",
          "create:blaze_burner{isCreative:1b}",
          "createaddition:liquid_blaze_burner{isCreative:1b}"
        ],
        time: 200,
        itemInput: { item: "createastral:uranium_residue", count: 4 },
        fluidInput: { fluid: "techreborn:mercury", amount: BUCKET },
        energy: 1e4,
        fluidOutput: { fluid: "tconstruct:molten_uranium", amount: BUCKET }
      }
    ];
    distilleryRecipes2.forEach((recipe) => {
      for (const towerStructure of distillationTowerStructure) {
        event.custom({
          type: "custommachinery:custom_machine",
          machine: "createastral:distillery",
          time: recipe.time,
          requirements: [
            {
              type: "custommachinery:structure",
              keys: {
                a: "dbe:steel_frame",
                b: "techreborn:basic_machine_casing",
                c: "techreborn:basic_machine_frame",
                d: "techreborn:advanced_machine_frame",
                e: "create:distillation_tower/blaze_burners"
              },
              pattern: towerStructure
            },
            {
              type: "custommachinery:block",
              mode: "input",
              action: "check",
              pos: [-1, -3, -2, 1, -4, 0],
              filter: recipe.burnersAllowed,
              whitelist: true,
              amount: 9,
              comparator: "=="
            },
            {
              type: "custommachinery:fluid",
              fluid: recipe.fluidInput.fluid,
              amount: recipe.fluidInput.amount,
              mode: "input"
            },
            {
              type: "custommachinery:item",
              item: recipe.itemInput.item,
              amount: recipe.itemInput.count,
              mode: "input"
            },
            {
              type: "custommachinery:energy",
              mode: "input",
              amount: recipe.energy
            },
            {
              type: "custommachinery:fluid",
              fluid: recipe.fluidOutput.fluid,
              amount: recipe.fluidOutput.amount,
              mode: "output"
            }
          ]
        });
      }
    });
  });
}
function electrolyzerRecipes() {
  onEvent("recipes", (event) => {
    const standardElectrolyzerStructure = [
      ["aaa", "aaa", "ama"],
      ["bbb", "b b", "bbb"],
      ["aaa", "aaa", "aaa"]
    ];
    const fallbackElectrolyzerStructure = [
      ["aaa", "aaa", "ama"],
      ["bbb", "bbb", "bbb"],
      ["aaa", "aaa", "aaa"]
    ];
    const electrolyzerStructure = [standardElectrolyzerStructure, fallbackElectrolyzerStructure];
    const electrolyzerRecipes2 = [
      {
        time: 20,
        fluidInput: { fluid: "minecraft:water", amount: 100 * mB },
        fluidOutput: { fluid: "ad_astra:oxygen", amount: 40 * mB }
        // this has been buffed from 860 droplets (10.61728395061728... mB) to 3240 droplets (40 mB)
        // because 860 is a weird number and a lot of water is oxygen anyway
      },
      {
        time: 20,
        fluidInput: { fluid: "kubejs:hellfire", amount: 10 * mB },
        fluidOutput: { fluid: "kubejs:smite", amount: 100 * mB }
      }
    ];
    electrolyzerRecipes2.forEach((recipe) => {
      for (const electrolyzer of electrolyzerStructure) {
        event.custom({
          type: "custommachinery:custom_machine",
          machine: "createastral:electrolyser",
          time: recipe.time,
          requirements: [
            {
              type: "custommachinery:structure",
              keys: {
                a: "create:copper_casing",
                b: "createastral:copper_heating_coil"
              },
              pattern: electrolyzer
            },
            {
              type: "custommachinery:fluid",
              fluid: recipe.fluidInput.fluid,
              amount: recipe.fluidInput.amount,
              mode: "input"
            },
            {
              type: "custommachinery:fluid",
              fluid: recipe.fluidOutput.fluid,
              amount: recipe.fluidOutput.amount,
              mode: "output"
            }
          ]
        });
      }
    });
  });
}
function shimmerRefineryRecipes() {
  onEvent("recipes", (event) => {
    const shimmerRefineryStructure = [
      ["ee ee", "ee ee", "  m  ", "ee ee", "ee ee"],
      ["dd dd", "dd dd", "  a  ", "dd dd", "dd dd"],
      ["dd dd", "dd dd", "  a  ", "dd dd", "dd dd"],
      ["ddadd", "ddbdd", "abbba", "ddbdd", "ddadd"],
      ["     ", "  a  ", " aca ", "  a  ", "     "]
    ];
    const shimmerRefineryRecipes2 = [
      {
        burnersAllowed: [
          "create:blaze_burner{fuelLevel:2}",
          "createaddition:liquid_blaze_burner{fuelLevel:2}",
          "create:blaze_burner{isCreative:1b}",
          "createaddition:liquid_blaze_burner{isCreative:1b}"
        ],
        time: 125,
        fluidInput: { fluid: "kubejs:shimmer", amount: BUCKET },
        itemInput: { item: "createastral:refining_agent", count: 1 },
        energy: 2e4,
        itemOutput: { item: "techreborn:uu_matter", count: 1 }
      }
    ];
    shimmerRefineryRecipes2.forEach((recipe) => {
      event.custom({
        type: "custommachinery:custom_machine",
        machine: "createastral:shimmer_refinery",
        time: recipe.time,
        requirements: [
          {
            type: "custommachinery:structure",
            keys: {
              a: "dbe:steel_frame",
              b: "techreborn:advanced_machine_casing",
              c: "techreborn:industrial_machine_frame",
              d: "yttr:magtank",
              e: "create:distillation_tower/blaze_burners"
            },
            pattern: shimmerRefineryStructure
          },
          {
            type: "custommachinery:block",
            mode: "input",
            action: "check",
            pos: [-2, 0, -2, 2, 0, 2],
            filter: recipe.burnersAllowed,
            whitelist: true,
            amount: 16,
            comparator: "=="
          },
          {
            type: "custommachinery:fluid",
            fluid: recipe.fluidInput.fluid,
            amount: recipe.fluidInput.amount,
            mode: "input"
          },
          {
            type: "custommachinery:item",
            mode: "input",
            item: recipe.itemInput.item,
            amount: recipe.itemInput.count
          },
          {
            type: "custommachinery:energy",
            mode: "input",
            amount: recipe.energy
          },
          {
            type: "custommachinery:item",
            item: recipe.itemOutput.item,
            amount: recipe.itemOutput.count,
            mode: "output"
          }
        ]
      });
    });
  });
}
function stoneGrowthChamberRecipes() {
  onEvent("recipes", (event) => {
    const newCopperSGCStructure = [
      ["aaa", "aaa", "ama"],
      ["ggg", "glg", "ggg"],
      ["aaa", "aaa", "aaa"]
    ];
    //! A tag for the building material must be present in [kubejs/data/createastral/tags/blocks/stone_growth_chamber/building_blocks]!
    const stoneGrowthChamberRecipes2 = [
      {
        material: "andesite",
        output: "minecraft:andesite",
        time: 10
      },
      {
        material: "cobblestone",
        output: "minecraft:cobblestone",
        time: 10
      },
      {
        material: "glacio_cobblestone",
        output: "ad_astra:glacio_cobblestone",
        time: 10
      },
      {
        material: "mars_cobblestone",
        output: "ad_astra:mars_cobblestone",
        time: 10
      },
      {
        material: "mercury_cobblestone",
        output: "ad_astra:mercury_cobblestone",
        time: 10
      },
      {
        material: "moon_cobblestone",
        output: "ad_astra:moon_cobblestone",
        time: 10
      },
      {
        material: "venus_cobblestone",
        output: "ad_astra:venus_cobblestone",
        time: 10
      }
    ];
    stoneGrowthChamberRecipes2.forEach((recipe) => {
      event.custom({
        type: "custommachinery:custom_machine",
        machine: "createastral:stone_growth_chamber",
        time: recipe.time,
        requirements: [
          {
            type: "custommachinery:structure",
            keys: {
              a: `createastral:stone_growth_chamber/building_blocks/${recipe.material}`,
              l: "minecraft:lava",
              g: "createastral:stone_growth_chamber/glass_blocks"
            },
            pattern: newCopperSGCStructure
          },
          {
            type: "custommachinery:item",
            item: recipe.output,
            amount: 1,
            mode: "output"
          }
        ]
      });
    });
  });
}
function customMachineryRecipes() {
  onEvent("recipes", (event) => {
    event.recipes.custommachinery.custom_machine("createastral:slime_furnace", 600).produceSU(2, 2048).requireItemTag("#c:slimeballs", 1);
    event.recipes.custommachinery.custom_machine("createastral:slime_furnace", 5400).produceSU(2, 2048).requireItemTag("#tconstruct:slime_block", 1);
    const MIN_SPEED = 1;
    const MAX_SPEED = 256;
    const MIXER_MAX_LEN = 600;
    const MIXER_MIN_LEN = 20;
    const MIXER_SLOPE = (MIXER_MAX_LEN - MIXER_MIN_LEN) / (MIN_SPEED - MAX_SPEED);
    const MIXER_IMPACT = 16;
    for (let speed = MIN_SPEED; speed <= MAX_SPEED; speed++) {
      let dur = MIXER_SLOPE * (speed - MAX_SPEED) + MIXER_MIN_LEN;
      event.recipes.custommachinery.custom_machine("createastral:gas_mixer", dur).requireStructure([["m"], ["a"], ["b"]], {
        a: "techreborn:reinforced_glass",
        b: "railways:smokestack_diesel"
      }).requireSU(speed, MIXER_IMPACT).priority(speed).requireFluid(Fluid.of("techreborn:methane", BUCKET / 4), "in_fluid").requireItem(Item.of("minecraft:oxeye_daisy")).produceItem(Item.of("minecraft:ghast_tear"));
      event.recipes.custommachinery.custom_machine("createastral:gas_mixer", dur).requireStructure([["m"], ["a"], ["b"]], {
        a: "techreborn:reinforced_glass",
        b: "railways:smokestack_diesel"
      }).requireSU(speed, MIXER_IMPACT).priority(speed).requireFluid(Fluid.of("ad_astra:oxygen", BUCKET), "in_fluid").requireItem(Item.of("minecraft:wither_rose")).requireItem(Item.of("minecraft:glass_bottle", 3)).produceItem(Item.of("minecraft:dragon_breath", 3));
      event.recipes.custommachinery.custom_machine("createastral:gas_mixer", dur).requireStructure([["m"], ["a"], ["b"]], {
        a: "techreborn:reinforced_glass",
        b: "railways:smokestack_diesel"
      }).requireSU(speed, MIXER_IMPACT).priority(speed).requireFluid(Fluid.of("techreborn:mercury", BUCKET / 81), "in_fluid").requireItem(Item.of("minecraft:lily_of_the_valley", 2)).produceItem(Item.of("minecraft:spider_eye"));
    }
    event.recipes.custommachinery.custom_machine("createastral:channeling_transformer", 1800).requireStructure(
      [
        [" a ", "ama", " a "],
        [" b ", "bcb", " b "],
        ["   ", " d ", "   "],
        ["   ", " e ", "   "],
        ["   ", " f ", "   "]
      ],
      {
        a: "createdeco:netherite_sheet_metal",
        b: "createdeco:netherite_support",
        c: "createdeco:netherite_hull",
        d: "dbe:black_guilded_boiler[axis=y]",
        e: "techreborn:lightning_rod",
        f: "techreborn:refined_iron_fence"
      }
    ).requireFluid(Fluid.of("kubejs:smite", BUCKET)).runCommandOnEnd("/summon minecraft:lightning_bolt").runCommandOnEnd("/data modify block ~ ~3 ~ PowerAcceptor.energy set value 720000");
  });
}
function farmersDelightCookingRecipes() {
  onEvent("recipes", (event) => {
    const farmersDelightCookingRecipes2 = [
      {
        input: [{ item: "createastral:astral_singularity" }],
        output: { item: "astralfoods:astral_sauce" },
        xp: 10,
        time: 360
      },
      {
        input: [
          { item: "astralfoods:astral_sauce" },
          { item: "astralfoods:quantum_bites" },
          { item: "farmersdelight:raw_pasta" }
        ],
        output: { item: "astralfoods:quantum_pasta" },
        xp: 8,
        time: 300
      }
    ];
    farmersDelightCookingRecipes2.forEach((recipe) => {
      event.custom({
        type: "farmersdelight:cooking",
        cookingtime: recipe.time,
        experience: recipe.xp,
        ingredients: recipe.input,
        recipe_book_tab: "drinks",
        // ignore this
        result: recipe.output
      });
    });
  });
}
function farmersDelightCuttingRecipes() {
  onEvent("recipes", (event) => {
    const farmersDelightCuttingRecipes2 = [
      {
        input: "techreborn:rubber_log",
        tool: "c:tools/axes",
        result: [{ item: "techreborn:rubber_log_stripped" }, { item: "farmersdelight:tree_bark" }]
      },
      {
        input: "ad_astra:glacian_log",
        tool: "c:tools/axes",
        result: [{ item: "ad_astra:stripped_glacian_log" }, { item: "farmersdelight:tree_bark" }]
      },
      {
        input: "tconstruct:bloodshroom_log",
        tool: "c:tools/axes",
        result: [{ item: "tconstruct:stripped_bloodshroom_log" }, { item: "farmersdelight:tree_bark" }]
      },
      {
        input: "tconstruct:greenheart_log",
        tool: "c:tools/axes",
        result: [{ item: "tconstruct:stripped_greenheart_log" }, { item: "farmersdelight:tree_bark" }]
      },
      {
        input: "tconstruct:skyroot_log",
        tool: "c:tools/axes",
        result: [{ item: "tconstruct:stripped_skyroot_log" }, { item: "farmersdelight:tree_bark" }]
      },
      {
        input: "ae2:singularity",
        tool: "c:tools/knives",
        result: [{ item: "astralfoods:quantum_bites", count: 3 }]
      },
      {
        input: "vinery:cherry_log",
        tool: "c:tools/axes",
        result: [{ item: "vinery:stripped_cherry_log" }, { item: "farmersdelight:tree_bark" }]
      },
      {
        input: "vinery:old_cherry_log",
        tool: "c:tools/axes",
        result: [{ item: "vinery:stripped_old_cherry_log" }, { item: "farmersdelight:tree_bark" }]
      },
      {
        input: "minecraft:gravel",
        tool: "c:shovels",
        result: [{ item: "minecraft:flint" }]
      },
      {
        input: "farmersdelight:wild_rice",
        tool: "c:tools/knives",
        result: [{ item: "farmersdelight:rice" }, { item: "farmersdelight:straw" }]
      },
      {
        input: "minecraft:blaze_rod",
        tool: "c:tools/knives",
        result: [{ item: "astralfoods:blaze_rods", count: 2 }]
      }
    ];
    farmersDelightCuttingRecipes2.forEach((recipe) => {
      event.custom({
        type: "farmersdelight:cutting",
        ingredients: [{ item: recipe.input }],
        tool: {
          type: "farmersdelight:tool",
          tag: recipe.tool
        },
        result: recipe.result,
        sound: recipe.sound ?? "minecraft:item.axe.strip"
      });
    });
  });
}
function minecraftBlastingRecipes() {
  onEvent("recipes", (event) => {
    const blastingRecipes = [
      // [Input string, Output string, XP value]
      { input: "createastral:andesite_compound", output: "create:andesite_alloy" },
      { input: "tconstruct:seared_basin", output: "tconstruct:scorched_basin" },
      { input: "tconstruct:seared_table", output: "tconstruct:scorched_table" },
      { input: "ad_astra:calorite_block", output: "yttr:quicksilver" }
    ];
    blastingRecipes.forEach((recipe) => {
      event.recipes.minecraft.blasting(recipe.output, recipe.input).xp(recipe.xp ?? 0);
    });
  });
}
function minecraftComposterRecipes() {
  onEvent("recipes", (event) => {
    onEvent("recipes.compostables", (event2) => {
      const coral = [
        { type: "tube" },
        { type: "brain" },
        { type: "bubble" },
        { type: "fire" },
        { type: "horn" }
      ];
      for (const corals of coral) {
        event2.add(`minecraft:${corals.type}_coral`, 0.3);
        event2.add(`minecraft:dead_${corals.type}_coral`, 0.5);
        event2.add(`minecraft:${corals.type}_coral_fan`, 0.3);
        event2.add(`minecraft:dead_${corals.type}_coral_fan`, 0.5);
        event2.add(`minecraft:${corals.type}_coral_block`, 0.3);
        event2.add(`minecraft:dead_${corals.type}_coral_block`, 0.5);
      }
    });
  });
}
function shapedRecipes() {
  onEvent("recipes", (event) => {
    ironAndDiamondRecipes(event);
    astralSignalsRecipes(event);
    const shapedRecipes2 = [
      {
        output: "createastral:andesite_alloy_block",
        pattern: ["AAA", "AAA", "AAA"],
        key: { A: "create:andesite_alloy" }
      },
      {
        output: Item.of("create:andesite_alloy", 9),
        pattern: ["A"],
        key: { A: "createastral:andesite_alloy_block" }
      },
      {
        output: "createastral:charcoal_block",
        pattern: ["AAA", "AAA", "AAA"],
        key: { A: "minecraft:charcoal" }
      },
      {
        output: Item.of("minecraft:charcoal", 9),
        pattern: ["A"],
        key: { A: "createastral:charcoal_block" }
      },
      {
        output: "techreborn:grinder",
        pattern: ["ABA", "CDC", " E "],
        key: {
          A: "create:sturdy_sheet",
          B: "create:integrated_circuit",
          C: "minecraft:diamond",
          D: "create:millstone",
          E: "techreborn:basic_machine_frame"
        }
      },
      {
        output: "techreborn:wire_mill",
        pattern: ["ABA", "ADA", " E "],
        key: {
          A: "create:sturdy_sheet",
          B: "createaddition:rolling_mill",
          // C: 'create:integreted' // A little weird since the extractor also has the
          D: "techreborn:extractor",
          E: "create:mechanical_piston"
        }
      },
      {
        output: "techreborn:compressor",
        pattern: ["ABA", "ACA", "ADA"],
        key: {
          A: "create:sturdy_sheet",
          B: "create:integrated_circuit",
          C: "create:mechanical_press",
          D: "techreborn:basic_machine_frame"
        }
      },
      {
        output: "techreborn:compressor",
        pattern: ["ABA", "ACA", "ADA"],
        key: {
          A: "create:sturdy_sheet",
          B: "create:integrated_circuit",
          C: "create:mechanical_press",
          D: "techreborn:basic_machine_frame"
        }
      },
      {
        output: Item.of("minecraft:chest", 4),
        pattern: ["XXX", "X X", "XXX"],
        key: {
          X: "#minecraft:logs"
        }
      },
      {
        output: "create:track",
        pattern: ["NSN", "NSN", "NSN"],
        key: {
          // @ts-expect-error Missing tag?
          N: "#create:alloy_nuggets",
          S: "#create:sleepers"
        }
      },
      {
        output: "create:smart_fluid_pipe",
        pattern: ["FB", "CO", "VP"],
        key: {
          B: "createastral:bronze_sheet",
          O: "minecraft:observer",
          F: "create:filter",
          C: "minecraft:comparator",
          P: "create:fluid_pipe",
          V: "create:fluid_valve"
        }
      },
      {
        output: "create:brass_funnel",
        pattern: ["FB", "CO", "VP"],
        key: {
          B: "create:golden_sheet",
          O: "minecraft:observer",
          F: "create:filter",
          C: "minecraft:comparator",
          P: "create:andesite_funnel",
          V: "create:andesite_tunnel"
        }
      },
      {
        output: "create:smart_chute",
        pattern: ["FB", "CO", "PP"],
        key: {
          B: "create:golden_sheet",
          O: "minecraft:observer",
          F: "create:filter",
          C: "minecraft:comparator",
          P: "create:chute"
        }
      },
      {
        output: "create:stockpile_switch",
        pattern: ["FB", "BO"],
        key: {
          B: "create:copper_sheet",
          O: "minecraft:observer",
          F: "create:railway_casing"
        }
      },
      {
        output: "create:display_link",
        pattern: [" R ", "BOB", " C "],
        key: {
          B: "createastral:bronze_sheet",
          O: "minecraft:observer",
          R: "minecraft:redstone_torch",
          C: "#c:plates/copper"
        }
      },
      // Make Oxygen loader possible before the moon
      {
        output: "ad_astra:oxygen_loader",
        pattern: ["IOI", "PTP", "IFI"],
        key: {
          I: "create:iron_sheet",
          O: "ad_astra:oxygen_tank",
          P: "create:smart_fluid_pipe",
          T: "create:fluid_tank",
          F: "ad_astra:engine_fan"
        }
      },
      // Degate Distributor to be before the compressor, so people can make moon bases as soon as they reach the moon
      {
        output: "ad_astra:oxygen_distributor",
        pattern: ["FFF", "TLT", "DGD"],
        key: {
          F: "ad_astra:engine_fan",
          T: "ad_astra:oxygen_tank",
          L: "ad_astra:oxygen_loader",
          D: "ad_astra:desh_ingot",
          G: "ad_astra:oxygen_gear"
        }
      },
      // Remove mechanical crafter requirement from alternator+electric motor, making it fully unique to the silver path
      {
        output: "createaddition:alternator",
        pattern: ["AAA", "CDC", "EAE"],
        key: {
          A: "create:iron_sheet",
          C: "createaddition:copper_spool",
          D: "create:integrated_circuit",
          E: "createaddition:capacitor"
        }
      },
      {
        output: "createaddition:electric_motor",
        pattern: ["ABA", "CDC", "EFE"],
        key: {
          A: "createastral:bronze_sheet",
          B: "techreborn:red_cell_battery",
          C: "createaddition:copper_spool",
          D: "create:integrated_circuit",
          E: "createaddition:capacitor",
          F: "techreborn:basic_machine_casing"
        }
      },
      // Removed brass+mechanical crafting requirement for Tesla Coil, making it fully unique to the silver path
      {
        output: "createaddition:tesla_coil",
        pattern: ["DSD", "USU", "CMC"],
        key: {
          D: "ad_astra:desh_ingot",
          S: "createaddition:copper_spool",
          U: "createaddition:copper_wire",
          C: "createaddition:capacitor",
          M: "create:brass_block"
        }
      },
      {
        output: "tconstruct:scorched_fuel_tank",
        pattern: ["AAA", "ABA"],
        key: {
          A: "tconstruct:scorched_brick",
          B: "create:fluid_tank"
        }
      },
      {
        output: "tconstruct:scorched_fuel_gauge",
        pattern: ["ACA", "CBC", "AAA"],
        key: {
          A: "tconstruct:scorched_brick",
          B: "create:fluid_tank",
          C: "#c:glass"
        }
      },
      // Changed blaze burner recipe.
      {
        output: "create:empty_blaze_burner",
        pattern: ["A A", "A A", "BCB"],
        key: {
          A: "createaddition:iron_rod",
          B: "create:iron_sheet",
          C: "ad_astra:moon_stone"
        }
      },
      // Gag recipe
      {
        output: "create:blaze_burner",
        pattern: ["A A", "ADA", "BCB"],
        key: {
          A: "createaddition:iron_rod",
          B: "create:iron_sheet",
          C: "ad_astra:moon_stone",
          D: "tconstruct:blaze_head"
        }
      },
      {
        output: "vinery:wine_rack_1",
        pattern: ["PSP", "STS", "PSP"],
        key: {
          P: "#minecraft:planks",
          S: "#minecraft:wooden_slabs",
          T: "#minecraft:wooden_trapdoors"
        }
      },
      // Old school slab and stairs
      {
        output: Item.of("createastral:blast-resistant_concrete_slab", 6),
        pattern: ["AAA"],
        key: {
          A: "createastral:blast-resistant_concrete"
        }
      },
      {
        output: Item.of("createastral:blast-resistant_concrete_stairs", 4),
        pattern: ["A  ", "AA ", "AAA"],
        key: {
          A: "createastral:blast-resistant_concrete"
        }
      },
      {
        output: "tconstruct:seared_fuel_tank",
        pattern: ["CCC", "BDB", "AAA"],
        key: {
          A: "tconstruct:seared_bricks",
          B: "#c:glass",
          C: "create:brass_sheet",
          D: "create:fluid_tank"
        }
      },
      {
        output: "tconstruct:seared_fuel_gauge",
        pattern: ["CAC", "BDB", "ACA"],
        key: {
          A: "tconstruct:seared_bricks",
          B: "#c:glass",
          C: "create:brass_sheet",
          D: "create:fluid_tank"
        }
      },
      {
        output: "tconstruct:seared_ingot_tank",
        pattern: ["ACA", "ADA", "ACA"],
        key: {
          A: "tconstruct:seared_bricks",
          C: "create:brass_sheet",
          D: "create:fluid_tank"
        }
      },
      {
        output: "tconstruct:seared_ingot_gauge",
        pattern: ["AAA", "CDC", "AAA"],
        key: {
          A: "tconstruct:seared_bricks",
          C: "create:brass_sheet",
          D: "create:fluid_tank"
        }
      },
      {
        output: "tconstruct:seared_melter",
        pattern: ["CWC", "SSS", "CSC"],
        key: {
          S: "tconstruct:seared_bricks",
          W: "create:fluid_tank",
          C: "create:zinc_ingot"
        }
      },
      {
        output: "minecraft:bow",
        pattern: ["CCA", " BC"],
        key: {
          A: "minecraft:gunpowder",
          B: "create:analog_lever",
          C: "minecraft:copper_ingot"
        }
      },
      {
        output: Item.of("minecraft:arrow", 8),
        pattern: ["B", "B", "A"],
        key: {
          A: "minecraft:gunpowder",
          B: "minecraft:copper_ingot"
        }
      },
      {
        output: "ad_astra:oxygen_loader",
        pattern: ["BAB", "DED", "BCB"],
        key: {
          A: "ad_astra:oxygen_tank",
          B: "#c:iron_plates",
          C: "ad_astra:engine_fan",
          D: "create:smart_fluid_pipe",
          E: "create:fluid_tank"
        }
      },
      {
        output: "automobility:auto_mechanic_table",
        pattern: ["DBD", "ACA", "AEA"],
        key: {
          A: "create:railway_casing",
          B: "create:crafting_blueprint",
          C: "projecttable:projecttable",
          D: "create:smart_fluid_pipe",
          E: "create:electron_tube"
        }
      },
      {
        output: "minecraft:furnace",
        pattern: ["AAA", "A A", "SSS"],
        key: {
          S: "#c:raw_materials",
          A: "minecraft:cobblestone"
        }
      },
      {
        output: "minecraft:furnace",
        pattern: ["AAA", "A A", "SSS"],
        key: {
          S: "#c:ingots",
          A: "minecraft:cobblestone"
        }
      },
      {
        output: "minecraft:blast_furnace",
        pattern: ["AAA", "ASA", "BBB"],
        key: {
          S: "minecraft:furnace",
          A: "minecraft:iron_ingot",
          B: "minecraft:stone"
        }
      },
      {
        output: Item.of("doodads:platform", 8),
        pattern: [" A ", "BBB", " A "],
        key: {
          A: "create:andesite_alloy",
          B: "#minecraft:planks"
        }
      },
      {
        output: "doodads:rubber_band",
        pattern: ["B", "A", "B"],
        key: {
          A: "minecraft:slime_ball",
          B: "minecraft:string"
        }
      },
      {
        output: "doodads:blossom_belt",
        pattern: [" A ", "ABA", " A "],
        key: {
          A: "create:tree_fertilizer",
          B: "minecraft:string"
        }
      },
      {
        output: "doodads:shulker_aglet",
        pattern: ["ABA"],
        key: {
          A: "minecraft:shulker_shell",
          B: "minecraft:end_stone"
        }
      },
      {
        output: "doodads:cactus_ring",
        pattern: ["AAA", "ABA", "AAA"],
        key: {
          A: "minecraft:cactus",
          B: "create:golden_sheet"
        }
      },
      {
        output: "doodads:loggers_glove",
        pattern: [" A ", "ABA", "ABA"],
        key: {
          A: "minecraft:leather",
          B: "#minecraft:logs"
        }
      },
      {
        output: "doodads:soggy_glove",
        pattern: [" A ", "ABA", "ABA"],
        key: {
          A: "minecraft:leather",
          B: "minecraft:wet_sponge"
        }
      },
      {
        output: "doodads:paintbrush",
        pattern: ["B", "A", "A"],
        key: {
          A: "minecraft:stick",
          B: "catwalksinc:paint_roller"
        }
      },
      {
        output: "automobility:automobile_assembler",
        pattern: ["AAA", " B ", "BBB"],
        key: {
          A: "techreborn:tin_ingot",
          B: "create:brass_ingot"
        }
      },
      {
        output: "extended_drawers:single_drawer",
        pattern: ["AAA", "ABA", "ACA"],
        key: {
          A: "#minecraft:planks",
          B: "minecraft:barrel",
          C: "minecraft:paper"
        }
      },
      {
        output: "extended_drawers:double_drawer",
        pattern: ["AAA", "CBC", "AAA"],
        key: {
          A: "#minecraft:planks",
          B: "minecraft:barrel",
          C: "minecraft:paper"
        }
      },
      {
        output: "extended_drawers:quad_drawer",
        pattern: ["ACA", "CBC", "ACA"],
        key: {
          A: "#minecraft:planks",
          B: "minecraft:barrel",
          C: "minecraft:paper"
        }
      },
      {
        output: "extended_drawers:upgrade_frame",
        pattern: ["AB", "BA"],
        key: {
          A: ["tconstruct:pattern", "techreborn:wood_plate"],
          B: "create:andesite_alloy"
        }
      },
      {
        output: "createastral:t1_upgrade",
        pattern: ["ABA", "BCB", "ABA"],
        key: {
          A: "techreborn:rubber",
          B: "create:sturdy_sheet",
          C: "extended_drawers:upgrade_frame"
        }
      },
      {
        output: "createastral:t2_upgrade",
        pattern: ["ABA", "BCB", "ABA"],
        key: {
          A: "tconstruct:seared_brick",
          B: "create:iron_sheet",
          C: "createastral:t1_upgrade"
        }
      },
      {
        output: "createastral:t3_upgrade",
        pattern: ["ABA", "BCB", "ABA"],
        key: {
          A: "ae2:fluix_block",
          B: "create:brass_sheet",
          C: "createastral:t2_upgrade"
        }
      },
      {
        output: "createastral:t4_upgrade",
        pattern: ["ABA", "DCD", "ABA"],
        key: {
          A: "techreborn:lead_plate",
          B: "create:integrated_circuit",
          C: "minecraft:gold_block",
          D: "createastral:t3_upgrade"
        }
      },
      {
        output: "createastral:t5_upgrade",
        pattern: ["ABA", "DCD", "ABA"],
        key: {
          A: "yttr:yttrium_ingot",
          B: "techreborn:electronic_circuit",
          C: "ad_astra:calorite_block",
          D: "createastral:t4_upgrade"
        }
      },
      {
        output: "createastral:t6_upgrade",
        pattern: ["ABA", "CED", "ABA"],
        key: {
          A: "createastral:t5_upgrade",
          B: "techreborn:industrial_circuit",
          C: "create:shadow_steel",
          D: "create:refined_radiance",
          E: "createastral:subatomic_ingot"
        }
      },
      {
        output: "extended_drawers:downgrade",
        pattern: ["ABA", "BDB", "ABA"],
        key: {
          A: "#minecraft:planks",
          B: "minecraft:flint",
          D: "extended_drawers:upgrade_frame"
        }
      },
      {
        output: "extended_drawers:lock",
        pattern: [" A ", "ABA", "CCC"],
        key: {
          A: "create:andesite_alloy",
          B: "create:iron_sheet",
          C: "create:golden_sheet"
        }
      },
      {
        output: Item.of("extended_drawers:connector", 4),
        pattern: ["BBB", "BAB", "BBB"],
        key: {
          A: "techreborn:tin_plate",
          B: "techreborn:wood_plate"
        }
      },
      {
        output: Item.of("ae2:wireless_booster", 2),
        pattern: ["SCE", "III"],
        key: {
          S: "ae2:fluix_dust",
          C: "ae2:charged_certus_quartz_crystal",
          E: "ae2:ender_dust",
          I: "techreborn:silver_plate"
        }
      },
      {
        output: "minecraft:shulker_shell",
        pattern: ["BBB", "BAB", "BBB"],
        key: {
          A: "minecraft:nautilus_shell",
          B: "minecraft:popped_chorus_fruit"
        }
      },
      {
        output: Item.of("create:cogwheel", 3),
        pattern: ["AB"],
        key: {
          A: "create:andesite_alloy",
          B: "createastral:bronze_sheet"
        }
      },
      {
        output: "create:large_cogwheel",
        pattern: ["ABA"],
        key: {
          A: "create:cogwheel",
          B: "createastral:bronze_sheet"
        }
      },
      {
        output: "yttr:wasteland_dirt",
        pattern: ["ABA"],
        key: {
          A: "yttr:rubble",
          B: "minecraft:sand"
        }
      },
      {
        output: "yttr:wasteland_log",
        pattern: ["ABA"],
        key: {
          A: "yttr:rubble",
          B: "minecraft:oak_log"
        }
      },
      {
        output: "yttr:wasteland_stone",
        pattern: ["ABA"],
        key: {
          A: "yttr:rubble",
          B: "minecraft:stone"
        }
      },
      {
        output: "createastral:promethium_atomic_battery",
        pattern: ["CAC", "BDB", "CEC"],
        key: {
          A: "techreborn:lithium_ion_battery",
          B: "techreborn:data_storage_chip",
          C: "yttr:armor_plating",
          D: "createastral:subatomic_ingot",
          E: "yttr:promethium_glob"
        }
      },
      {
        output: Item.of("dustrial_decor:sheet_metal_door", 3),
        pattern: ["AA", "AA", "AA"],
        key: {
          A: "dustrial_decor:sheet_metal"
        }
      },
      {
        output: Item.of("dustrial_decor:rusty_iron_door", 3),
        pattern: ["AA", "AA", "AA"],
        key: {
          A: "dustrial_decor:rusty_iron_ingot"
        }
      },
      {
        output: Item.of("dustrial_decor:rusty_sheet_metal_treading", 6),
        pattern: ["AB", "BA"],
        key: {
          A: "dustrial_decor:rusty_sheet_metal",
          B: "dustrial_decor:rusty_iron_nugget"
        }
      },
      {
        output: "createastral:andesite_compound",
        pattern: ["BBB", "AAA", "CCC"],
        key: {
          A: "create:zinc_nugget",
          B: "minecraft:andesite",
          C: "minecraft:clay_ball"
        }
      },
      {
        output: "createastral:andesite_compound",
        pattern: ["BBB", "AAA", "CCC"],
        key: {
          // @ts-expect-error Missing tag?
          A: "#create:alloy_nuggets",
          B: "minecraft:andesite",
          C: "minecraft:clay_ball"
        }
      },
      {
        output: "minecraft:experience_bottle",
        pattern: ["AAA", "ABA", "AAA"],
        key: {
          A: "create:experience_nugget",
          B: "minecraft:glass_bottle"
        }
      },
      {
        output: "minecraft:leather_horse_armor",
        pattern: ["  A", "AAA", "ABA"],
        key: {
          A: "minecraft:leather",
          B: "minecraft:string"
        }
      },
      {
        output: "minecraft:iron_horse_armor",
        pattern: ["  A", "ABA", "ACA"],
        key: {
          A: "create:iron_sheet",
          B: "minecraft:leather_horse_armor",
          C: "minecraft:string"
        }
      },
      {
        output: "minecraft:golden_horse_armor",
        pattern: ["  A", "ABA", "ACA"],
        key: {
          A: "create:golden_sheet",
          B: "minecraft:iron_horse_armor",
          C: "minecraft:string"
        }
      },
      {
        output: "minecraft:diamond_horse_armor",
        pattern: ["  A", "ABA", "ACA"],
        key: {
          A: "minecraft:diamond",
          B: "minecraft:golden_horse_armor",
          C: "minecraft:string"
        }
      },
      {
        output: "minecraft:heart_of_the_sea",
        pattern: ["ABA", "CDC", "ABA"],
        key: {
          A: "minecraft:glowstone",
          B: "minecraft:lapis_block",
          C: "techreborn:silver_ingot",
          D: "minecraft:diamond_block"
        }
      },
      {
        output: "minecraft:sponge",
        pattern: ["ABA", "BBB", "ABA"],
        key: {
          A: "techreborn:sponge_piece",
          B: "#c:slimeballs"
        }
      },
      {
        output: "minecraft:dispenser",
        pattern: ["AB ", "ACB", "AB "],
        key: {
          A: "minecraft:string",
          B: "minecraft:stick",
          C: "minecraft:dropper"
        }
      },
      {
        output: "chipped:mechanist_workbench",
        pattern: ["A  ", "BCC", "DED"],
        key: {
          A: "minecraft:redstone_torch",
          B: "minecraft:piston",
          C: "#minecraft:wooden_slabs",
          D: "#minecraft:logs",
          E: "minecraft:tnt"
        }
      },
      {
        output: Item.of("createdeco:andesite_door", 3),
        pattern: ["AA", "AA", "AA"],
        key: {
          A: "create:andesite_alloy"
        }
      },
      {
        output: Item.of("createdeco:brass_door", 3),
        pattern: ["AA", "AA", "AA"],
        key: {
          A: "create:brass_ingot"
        }
      },
      {
        output: Item.of("createdeco:copper_door", 3),
        pattern: ["AA", "AA", "AA"],
        key: {
          A: "minecraft:copper_ingot"
        }
      },
      {
        output: Item.of("createdeco:zinc_door", 3),
        pattern: ["AA", "AA", "AA"],
        key: {
          A: "create:zinc_ingot"
        }
      },
      {
        output: "minecraft:bundle",
        pattern: [" S ", "A A", " A "],
        key: {
          S: "minecraft:string",
          A: "minecraft:leather"
        }
      },
      {
        output: "createastral:sturdy_sheet_block",
        pattern: ["AA", "AA"],
        key: {
          A: "create:sturdy_sheet"
        }
      },
      {
        output: "createastral:bronze_block",
        pattern: ["AAA", "AAA", "AAA"],
        key: {
          A: "createastral:bronze_ingot"
        }
      },
      {
        output: "ad_astra:steel_block",
        pattern: ["AAA", "AAA", "AAA"],
        key: {
          A: "ad_astra:steel_ingot"
        }
      },
      {
        output: "createastral:copper_plating",
        pattern: ["AA", "AA"],
        key: {
          A: "create:copper_sheet"
        }
      },
      {
        output: "createastral:copper_heating_coil",
        pattern: ["AAA", "AAA", "AAA"],
        key: {
          A: "createaddition:copper_spool"
        }
      },
      {
        output: "createastral:refined_radiance_block",
        pattern: ["AAA", "AAA", "AAA"],
        key: {
          A: "create:refined_radiance"
        }
      },
      {
        output: Item.of("minecraft:torch", 10),
        pattern: ["A", "B"],
        key: {
          A: "naturalist:glow_goop",
          B: "minecraft:stick"
        }
      },
      {
        output: "techreborn:synthetic_redstone_crystal",
        pattern: ["AB", "BA"],
        key: {
          A: "minecraft:red_dye",
          B: "#c:glass"
        }
      },
      {
        output: "createastral:synthetic_slime_block",
        pattern: ["SSS", "SSS", "SSS"],
        key: {
          S: "createastral:synthetic_slime"
        }
      },
      {
        output: "createastral:cheese_bricks",
        pattern: ["SS", "SS"],
        key: {
          S: "ad_astra:cheese"
        }
      },
      {
        output: Item.of("minecraft:mycelium", 2),
        pattern: ["CD", "DC"],
        key: {
          C: "ad_astra:cheese",
          D: "minecraft:dirt"
        }
      },
      {
        output: "techreborn:lightning_rod",
        pattern: ["SRS", "DBD", "CCC"],
        key: {
          S: "techreborn:silver_plate",
          R: "minecraft:lightning_rod",
          D: "techreborn:diamond_plate",
          B: "techreborn:red_cell_battery",
          C: "techreborn:basic_machine_casing"
        }
      },
      {
        output: "techreborn:refined_iron_fence",
        pattern: ["BSB", "BSB"],
        key: {
          B: "minecraft:iron_block",
          S: "createaddition:iron_rod"
        }
      },
      {
        output: Item.of("custommachinery:custom_machine_item", {
          machine: "createastral:electrolyser"
        }),
        pattern: ["CCC", "DED", "CCC"],
        key: {
          D: "createaddition:copper_wire",
          E: "phonos:redstone_chip",
          C: "create:copper_casing"
        }
      },
      {
        output: Item.of("custommachinery:custom_machine_item", {
          machine: "createastral:stone_growth_chamber"
        }),
        pattern: ["CCC", "DED", "CCC"],
        key: {
          D: "create:copper_sheet",
          E: "minecraft:water_bucket",
          C: "create:copper_casing"
        }
      },
      {
        output: Item.of("custommachinery:custom_machine_item", {
          machine: "createastral:distillery"
        }),
        pattern: ["CCC", "DED", "BBB"],
        key: {
          B: "create:fluid_tank",
          C: "techreborn:lead_plate",
          D: "techreborn:industrial_centrifuge",
          E: "techreborn:advanced_machine_frame"
        }
      },
      {
        output: Item.of("custommachinery:custom_machine_item", {
          machine: "createastral:shimmer_refinery"
        }),
        pattern: ["BDB", "CEC", "BDB"],
        key: {
          B: "yttr:armor_plating",
          C: "techreborn:industrial_circuit",
          D: "techreborn:machine_parts",
          E: "createastral:shimmer_amplifier"
        }
      },
      {
        output: Item.of("custommachinery:custom_machine_item", {
          machine: "createastral:gas_mixer"
        }),
        pattern: ["PCP", "WTW", "ESE"],
        key: {
          P: "ad_astra:ostrum_plate",
          C: "techreborn:electronic_circuit",
          W: "create:whisk",
          T: "create:fluid_tank",
          E: "techreborn:extractor",
          S: "create:shaft"
        }
      },
      {
        output: Item.of("custommachinery:custom_machine_item", {
          machine: "createastral:slime_furnace"
        }),
        pattern: ["ASA", "BFB", "CCC"],
        key: {
          A: "create:andesite_alloy",
          S: "create:shaft",
          B: "#c:slimeballs",
          F: "techreborn:iron_furnace",
          C: "#tconstruct:congealed_slime"
        }
      },
      {
        output: "techreborn:industrial_electrolyzer",
        pattern: ["ABA", "CDC", "ABA"],
        key: {
          A: "createastral:copper_heating_coil",
          B: "techreborn:electronic_circuit",
          C: "createaddition:copper_wire",
          D: "techreborn:advanced_machine_frame"
        }
      },
      {
        output: "techreborn:industrial_sawmill",
        pattern: ["ABA", "CDC", "EFG"],
        key: {
          A: "techreborn:lead_plate",
          B: "techreborn:diamond_saw_blade",
          C: "create:belt_connector",
          D: "create:mechanical_saw",
          E: "techreborn:electronic_circuit",
          F: "techreborn:advanced_machine_frame",
          G: "create:rotation_speed_controller"
        }
      },
      {
        output: "techreborn:vacuum_freezer",
        pattern: ["AAA", "BCB", "DED"],
        key: {
          A: "techreborn:lead_plate",
          B: "techreborn:electronic_circuit",
          C: "techreborn:advanced_machine_frame",
          D: "minecraft:blue_ice",
          E: "tconstruct:seared_basin"
        }
      },
      {
        output: "techreborn:solid_canning_machine",
        pattern: ["ABA", "CDC", "EBE"],
        key: {
          A: "create:sturdy_sheet",
          B: "create:deployer",
          C: "create:belt_connector",
          D: "techreborn:basic_machine_frame",
          E: "create:integrated_circuit"
        }
      },
      {
        output: "techreborn:greenhouse_controller",
        pattern: ["ABA", "CDC", "AEA"],
        key: {
          A: "create:sturdy_sheet",
          B: "create:deployer",
          C: "create:mechanical_harvester",
          D: "create:mechanical_bearing",
          E: "techreborn:basic_machine_frame"
        }
      },
      {
        output: "techreborn:electric_furnace",
        pattern: ["ABA", "CDC", "AEA"],
        key: {
          A: "create:sturdy_sheet",
          B: "create:integrated_circuit",
          C: "create:encased_fan",
          D: "minecraft:furnace",
          E: "techreborn:basic_machine_frame"
        }
      },
      {
        output: "techreborn:block_placer",
        pattern: ["SCS", "SDS", "SFS"],
        key: {
          S: "create:sturdy_sheet",
          C: "create:integrated_circuit",
          D: "create:deployer",
          F: "techreborn:basic_machine_frame"
        }
      },
      {
        output: "techreborn:block_breaker",
        pattern: ["SCS", "SDS", "SFS"],
        key: {
          S: "create:sturdy_sheet",
          C: "create:integrated_circuit",
          D: "create:mechanical_drill",
          F: "techreborn:basic_machine_frame"
        }
      },
      {
        output: "techreborn:player_detector",
        pattern: ["SCS", "TRT", "SFS"],
        key: {
          S: "create:sturdy_sheet",
          C: "create:integrated_circuit",
          R: "create:redstone_link",
          F: "techreborn:basic_machine_frame",
          T: "minecraft:redstone_torch"
        }
      },
      {
        output: "techreborn:chemical_reactor",
        pattern: ["ABA", "CDC", "AEA"],
        key: {
          A: "create:sturdy_sheet",
          B: "create:mechanical_mixer",
          C: "create:fluid_tank",
          D: "techreborn:basic_machine_frame",
          E: "create:integrated_circuit"
        }
      },
      {
        output: "techreborn:auto_crafting_table",
        pattern: ["ABA", "ACA", "ADA"],
        key: {
          A: "create:mechanical_crafter",
          B: "minecraft:barrel",
          C: "techreborn:basic_machine_frame",
          D: "techreborn:electronic_circuit"
        }
      },
      {
        output: "techreborn:alloy_smelter",
        pattern: ["ABA", "CDC", "EFE"],
        key: {
          A: "create:sturdy_sheet",
          B: "create:mechanical_mixer",
          C: "create:basin",
          D: "techreborn:basic_machine_frame",
          E: "create:integrated_circuit",
          F: "create:blaze_burner"
        }
      },
      {
        output: "techreborn:extractor",
        pattern: ["AAA", "BCB", "ADA"],
        key: {
          A: "create:sturdy_sheet",
          B: "create:mechanical_pump",
          C: "techreborn:basic_machine_frame",
          D: "create:integrated_circuit"
        }
      },
      {
        output: "travelersbackpack:standard",
        pattern: ["ABC", "DED", "FBF"],
        key: {
          A: "projecttable:projecttable",
          B: "campanion:leather_pouch",
          C: "campanion:sleeping_bag",
          D: "create:fluid_tank",
          E: "minecraft:leather_chestplate",
          F: "farmersdelight:rope"
        }
      },
      {
        output: "campanion:sleeping_bag",
        pattern: ["AAA", "BCB"],
        key: {
          A: "campanion:wool_tarp",
          B: "farmersdelight:canvas_rug",
          C: "minecraft:string"
        }
      },
      {
        output: "travelersbackpack:hose",
        pattern: ["ABB", " CB", "  B"],
        key: {
          A: "travelersbackpack:hose_nozzle",
          B: "techreborn:rubber",
          C: "minecraft:green_dye"
        }
      },
      {
        output: "travelersbackpack:hose_nozzle",
        pattern: [" A ", "BCB", "DDD"],
        key: {
          A: "create:iron_sheet",
          B: "create:golden_sheet",
          C: "create:cogwheel",
          D: "create:andesite_alloy"
        }
      },
      {
        output: "campanion:tent_bag",
        pattern: [" A ", "ABA", " A "],
        key: {
          A: "farmersdelight:rope",
          B: "campanion:leather_pouch"
        }
      },
      {
        output: "ad_astra:moon_globe",
        pattern: ["BBB", "BA ", "BC "],
        key: {
          A: "ad_astra:moon_sand",
          B: "createaddition:gold_rod",
          C: "minecraft:light_weighted_pressure_plate"
        }
      },
      {
        output: "ad_astra:earth_globe",
        pattern: ["BBB", "BA ", "BC "],
        key: {
          A: "minecraft:grass_block",
          B: "createaddition:gold_rod",
          C: "minecraft:light_weighted_pressure_plate"
        }
      },
      {
        output: "ad_astra:mars_globe",
        pattern: ["BBB", "BA ", "BC "],
        key: {
          A: "ad_astra:mars_stone",
          B: "createaddition:gold_rod",
          C: "minecraft:light_weighted_pressure_plate"
        }
      },
      {
        output: "ad_astra:mercury_globe",
        pattern: ["BBB", "BA ", "BC "],
        key: {
          A: "ad_astra:mercury_stone",
          B: "createaddition:gold_rod",
          C: "minecraft:light_weighted_pressure_plate"
        }
      },
      {
        output: "ad_astra:venus_globe",
        pattern: ["BBB", "BA ", "BC "],
        key: {
          A: "ad_astra:venus_stone",
          B: "createaddition:gold_rod",
          C: "minecraft:light_weighted_pressure_plate"
        }
      },
      {
        output: "ad_astra:glacio_globe",
        pattern: ["BBB", "BA ", "BC "],
        key: {
          A: "ad_astra:glacio_stone",
          B: "createaddition:gold_rod",
          C: "minecraft:light_weighted_pressure_plate"
        }
      },
      {
        output: "passivepiglins:piglin_coin",
        pattern: ["BA", "AB"],
        key: {
          A: "create:golden_sheet",
          B: "minecraft:piglin_banner_pattern"
        }
      },
      {
        output: "yttr:flopper",
        pattern: ["AA ", " BA", "AA "],
        key: {
          A: "create:iron_sheet",
          B: "minecraft:chest"
        }
      },
      {
        output: "yttr:chute",
        pattern: ["A A", "A A", "A A"],
        key: {
          A: "create:iron_sheet"
        }
      },
      {
        output: "yttr:bedrock_smasher",
        pattern: ["AAA", " B ", " C "],
        key: {
          A: "ad_astra:calorite_plate",
          B: "ad_astra:calorite_ingot",
          C: "techreborn:diamond_plate"
        }
      },
      {
        output: Item.of("yttr:lamp", 4),
        pattern: ["ABA", "BCB", "ABA"],
        key: {
          A: "minecraft:iron_ingot",
          B: "minecraft:glass_pane",
          C: "minecraft:redstone_lamp"
        }
      },
      {
        output: "ad_astra:strophar_cap",
        pattern: ["AA", "AA"],
        key: {
          A: "ad_astra:strophar_mushroom"
        }
      },
      {
        output: Item.of("doodads:asphalt_stair", 4),
        pattern: ["A  ", "AA ", "AAA"],
        key: {
          A: "doodads:asphalt"
        }
      },
      {
        output: Item.of("doodads:asphalt_slab", 6),
        pattern: ["AAA"],
        key: {
          A: "doodads:asphalt"
        }
      },
      {
        output: "chipped:carpenters_table",
        pattern: ["  y", "axa", "bca"],
        key: {
          x: "minecraft:crafting_table",
          y: "minecraft:iron_ingot",
          a: "#minecraft:logs",
          b: "minecraft:flint",
          c: "#minecraft:planks"
        }
      },
      {
        output: "chipped:alchemy_bench",
        pattern: [" b ", "axa", "aya"],
        key: {
          x: "minecraft:crafting_table",
          y: "vinery:fermentation_barrel",
          a: "#minecraft:wooden_slabs",
          b: "drinkbeer:beer_barrel"
        }
      },
      {
        output: "create:copper_backtank",
        pattern: ["AGA", "PBP", " P "],
        key: {
          G: "create:shaft",
          A: "create:andesite_alloy",
          B: "minecraft:copper_block",
          P: "techreborn:rubber"
        }
      },
      {
        output: "create:belt_connector",
        pattern: ["DDD", "EEE"],
        key: {
          D: "minecraft:dried_kelp",
          E: "techreborn:rubber"
        }
      },
      {
        output: "create:brass_hand",
        pattern: [" A ", "BBB", " B "],
        key: {
          A: "create:andesite_alloy",
          B: "techreborn:rubber"
        }
      },
      {
        output: "create:controls",
        pattern: ["B", "C", "I"],
        key: {
          I: "create:zinc_block",
          B: "minecraft:lever",
          C: "create:railway_casing"
        }
      },
      {
        output: Item.of("create:fluid_pipe", 2),
        pattern: [" S ", "CCC", " S "],
        // horizontal
        key: {
          S: "#c:plates/copper",
          C: "techreborn:rubber"
        }
      },
      {
        output: Item.of("create:fluid_pipe", 2),
        pattern: [" C ", "SCS", " C "],
        // vertical
        key: {
          S: "#c:plates/copper",
          C: "techreborn:rubber"
        }
      },
      {
        output: "create:fluid_tank",
        pattern: [" B ", "BCB", " B "],
        key: {
          B: "create:copper_sheet",
          C: "#c:barrels/wooden"
        }
      },
      {
        output: "create:goggles",
        pattern: [" S ", "GPG"],
        key: {
          G: "#c:glass",
          P: "#c:plates/gold",
          S: "techreborn:rubber"
        }
      },
      {
        output: Item.of("create:andesite_funnel", 2),
        pattern: ["A", "K"],
        key: {
          A: "create:andesite_alloy",
          K: "techreborn:rubber"
        }
      },
      {
        output: Item.of("create:andesite_tunnel", 2),
        pattern: ["AA", "KK"],
        key: {
          A: "create:andesite_alloy",
          K: "techreborn:rubber"
        }
      },
      {
        output: Item.of("create:brass_funnel", 2),
        pattern: ["E", "A", "K"],
        key: {
          A: "#c:ingots/brass",
          K: "techreborn:rubber",
          E: "create:electron_tube"
        }
      },
      {
        output: Item.of("create:brass_tunnel", 2),
        pattern: ["E ", "AA", "KK"],
        key: {
          A: "#c:ingots/brass",
          K: "techreborn:rubber",
          E: "create:electron_tube"
        }
      },
      {
        output: "extractinator:extractinator",
        pattern: ["H  ", "PRA", "CBA"],
        key: {
          H: "minecraft:hopper",
          P: "minecraft:piston",
          C: "minecraft:cauldron",
          B: "minecraft:copper_block",
          R: "minecraft:redstone_block",
          A: "minecraft:chain"
        }
      },
      {
        output: "createbigcannons:wrought_iron_drop_mortar_end",
        pattern: ["B", "E"],
        key: {
          B: "minecraft:iron_bars",
          E: "createbigcannons:wrought_iron_cannon_end"
        }
      },
      {
        output: "createbigcannons:yaw_controller",
        pattern: [" S ", "GCG", " S "],
        key: {
          S: "create:shaft",
          C: "create:andesite_casing",
          G: "minecraft:gunpowder"
        }
      },
      {
        output: "immersive_aircraft:hull",
        pattern: ["LIL", "LIL", "LIL"],
        key: {
          L: "create:andesite_casing",
          I: "createaddition:iron_rod"
        }
      },
      {
        output: "immersive_aircraft:propeller",
        pattern: [" I ", "IPI", " I "],
        key: {
          I: "create:iron_sheet",
          P: "create:propeller"
        }
      },
      {
        output: "immersive_aircraft:sail",
        pattern: ["SSS", "SSS"],
        key: {
          S: "create:white_sail"
        }
      },
      {
        output: "reinfchest:diamond_chest",
        pattern: ["MMM", "MCM", "MMM"],
        key: {
          C: "reinfchest:gold_chest",
          M: "techreborn:diamond_plate"
        }
      },
      {
        output: "reinfchest:gold_chest",
        pattern: ["MMM", "MCM", "MMM"],
        key: {
          C: "reinfchest:iron_chest",
          M: "tconstruct:rose_gold_ingot"
        }
      },
      {
        output: "reinfchest:iron_chest",
        pattern: ["LLL", "MCM", "LLL"],
        key: {
          C: "reinfchest:copper_chest",
          M: "create:sturdy_sheet",
          L: "techreborn:rubber"
        }
      },
      {
        output: Item.of("tconstruct:gold_bars", 6),
        pattern: ["AAA", "AAA"],
        key: {
          A: "minecraft:gold_ingot"
        }
      },
      {
        output: "astralfoods:recovery_orb",
        pattern: [" S ", "THT", " O "],
        key: {
          S: "tconstruct:seared_brick",
          T: "ad_astra:oxygen_tank",
          H: "ad_astra:space_helmet",
          O: "ad_astra:oxygen_bucket"
        }
      }
    ];
    shapedRecipes2.forEach((recipe) => {
      event.shaped(recipe.output, recipe.pattern, recipe.key);
    });
  });
  function ironAndDiamondRecipes(event) {
    const names = [
      "helmet",
      "chestplate",
      "leggings",
      "boots",
      "sword",
      "pickaxe",
      "shovel",
      "axe",
      "hoe"
    ];
    const fullkit = {
      helmet: ["SSS", "S S", "   "],
      chestplate: ["S S", "SSS", "SSS"],
      leggings: ["SSS", "S S", "S S"],
      boots: ["   ", "S S", "S S"],
      sword: [" S ", " S ", " W "],
      pickaxe: ["SSS", " W ", " W "],
      shovel: [" S ", " W ", " W "],
      axe: ["SS ", "SW ", " W "],
      hoe: ["SS ", " W ", " W "]
    };
    function createToolAndArmorRecipes(event2, output, material, toolname) {
      let key = { S: material };
      if (fullkit[toolname].join("").includes("W")) key.W = "minecraft:stick";
      event2.shaped(output, fullkit[toolname], key);
    }
    names.forEach((name) => {
      createToolAndArmorRecipes(event, `minecraft:iron_${name}`, "create:iron_sheet", name);
      createToolAndArmorRecipes(event, `createastral:copper_${name}`, "minecraft:copper_ingot", name);
      createToolAndArmorRecipes(event, `createastral:brass_${name}`, "create:brass_sheet", name);
    });
    const armorNames = ["helmet", "chestplate", "leggings", "boots"];
    armorNames.forEach((name) => {
      event.shaped(`createastral:sturdy_${name}`, fullkit[name], {
        S: "createastral:sturdy_sheet_block"
      });
    });
    event.shaped("ad_astra:space_boots", ["S S", "BAB"], {
      S: "minecraft:white_wool",
      A: "create:copper_diving_boots",
      B: "create:sturdy_sheet"
    });
  }
  function astralSignalsRecipes(event) {
    const astralSignalsRecipes2 = [
      {
        inputs: {
          A: "minecraft:copper_ingot",
          B: "create:electron_tube",
          C: "phonos:redstone_chip"
        },
        shape: ["AAA", "BCB", "AAA"],
        output: "astralsignals:data_drive_blank"
      },
      {
        inputs: {
          A: "minecraft:copper_ingot",
          B: "create:electron_tube",
          C: "phonos:redstone_chip",
          D: "minecraft:gold_nugget"
        },
        shape: ["BAB", "ACA", " D "],
        output: "astralsignals:dormant_signal_beacon"
      },
      {
        inputs: {
          A: "create:cut_tuff",
          B: "astralsignals:ancient_receiver",
          C: "create:andesite_casing",
          D: "create:andesite_scaffolding"
        },
        shape: [" B ", "ACA", "D D"],
        output: Item.of("custommachinery:custom_machine_item", { machine: "astralsignals:signal_coordinator" })
      },
      {
        inputs: {
          A: "create:cut_tuff",
          B: "create:display_board",
          C: "create:electron_tube",
          D: "computercraft:disk_drive"
        },
        shape: [" C ", " B ", "ADA"],
        output: Item.of("custommachinery:custom_machine_item", { machine: "astralsignals:radio_telescope" })
      },
      {
        inputs: {
          A: "create:cut_tuff",
          B: "create:cogwheel",
          C: "create:electron_tube",
          D: "create:andesite_casing",
          E: "computercraft:disk_drive"
        },
        shape: ["ABA", "CDC", "AEA"],
        output: Item.of("custommachinery:custom_machine_item", { machine: "astralsignals:analog_decryptor" })
      },
      {
        inputs: {
          A: "create:cut_tuff",
          B: "astralsignals:parallel_processor",
          C: "techreborn:electronic_circuit",
          D: "create:copper_casing",
          E: "computercraft:disk_drive"
        },
        shape: ["ABA", "CDC", "AEA"],
        output: Item.of("custommachinery:custom_machine_item", { machine: "astralsignals:pp_decryptor" })
      },
      {
        inputs: {
          A: "create:cut_tuff",
          B: "astralsignals:microphysical_probe",
          C: "techreborn:industrial_circuit",
          D: "create:railway_casing",
          E: "computercraft:disk_drive"
        },
        shape: ["ABA", "CDC", "AEA"],
        output: Item.of("custommachinery:custom_machine_item", { machine: "astralsignals:mp_decryptor" })
      },
      {
        inputs: {
          A: "create:cut_tuff",
          B: "create:mechanical_press",
          C: "create:electron_tube",
          D: "computercraft:disk_drive",
          E: "create:andesite_casing"
        },
        shape: ["ABA", "CDC", "AEA"],
        output: Item.of("custommachinery:custom_machine_item", { machine: "astralsignals:vinyl_printer" })
      },
      {
        inputs: {
          A: "create:electron_tube",
          B: "computercraft:disk_drive",
          C: "create:cut_tuff"
        },
        shape: ["A A", "CBC", "CCC"],
        output: Item.of("custommachinery:custom_machine_item", { machine: "astralsignals:drive_eraser" })
      },
      {
        inputs: {
          A: "astralsignals:polyvinyl_sheet",
          B: "astraladditions:shimmer_blaze_powder"
        },
        shape: ["BAB"],
        output: "astralsignals:shimmer_polyvinyl_sheet"
      },
      {
        inputs: {
          A: "astralsignals:shimmer_polyvinyl_sheet",
          B: "yttr:armor_plating"
        },
        shape: ["BAB"],
        output: "astralsignals:yttric_polyvinyl_sheet"
      }
    ];
    astralSignalsRecipes2.forEach((recipe) => {
      event.shaped(recipe.output, recipe.shape, recipe.inputs);
    });
  }
}
function shapelessRecipes() {
  onEvent("recipes", (event) => {
    const manualOnlyRecipes = [
      {
        input: ["minecraft:magma_block", "minecraft:water_bucket"],
        output: "minecraft:obsidian",
        recipeID: "washing_obsidian"
      },
      {
        input: ["minecraft:cobblestone"],
        output: "techreborn:andesite_dust",
        recipeID: "andesite_dust"
      }
    ];
    manualOnlyRecipes.forEach((recipe) => {
      event.shapeless(recipe.output, recipe.input).id(`createastral:${recipe.recipeID}_manual_only`);
    });
    const shapelessRecipes2 = [
      {
        input: ["techreborn:rubber", "#ae2:glass_cable"],
        output: "ae2:fluix_covered_cable"
      },
      {
        input: [Item.of("minecraft:diorite", 1), Item.of("minecraft:sand", 3)],
        output: "minecraft:granite"
      },
      {
        input: ["vinery:red_grape"],
        output: Item.of("vinery:red_grape_seeds", 1)
      },
      {
        input: ["vinery:white_grape"],
        output: Item.of("vinery:white_grape_seeds", 1)
      },
      {
        input: [Item.of("minecraft:diorite", 1), Item.of("minecraft:flint", 4)],
        output: "minecraft:andesite"
      },
      {
        input: ["minecraft:cobblestone", Item.of("minecraft:quartz", 3)],
        output: "minecraft:diorite"
      },
      {
        input: ["computercraft:turtle_normal", "minecraft:iron_pickaxe", Item.of("minecraft:diamond", 3)],
        output: Item.of("computercraft:turtle_normal", {
          RightUpgrade: "minecraft:diamond_pickaxe"
        })
      },
      {
        input: ["computercraft:turtle_normal", "minecraft:iron_axe", Item.of("minecraft:diamond", 3)],
        output: Item.of("computercraft:turtle_normal", {
          RightUpgrade: "minecraft:diamond_axe"
        })
      },
      {
        input: ["computercraft:turtle_normal", "minecraft:iron_shovel", "minecraft:diamond"],
        output: Item.of("computercraft:turtle_normal", {
          RightUpgrade: "minecraft:diamond_shovel"
        })
      },
      {
        input: ["computercraft:turtle_normal", "minecraft:iron_hoe", Item.of("minecraft:diamond", 2)],
        output: Item.of("computercraft:turtle_normal", {
          RightUpgrade: "minecraft:diamond_hoe"
        })
      },
      {
        input: ["computercraft:turtle_normal", "minecraft:iron_sword", Item.of("minecraft:diamond", 2)],
        output: Item.of("computercraft:turtle_normal", {
          RightUpgrade: "minecraft:diamond_sword"
        })
      },
      { input: ["create:track"], output: Item.of("dbe:track_end") },
      {
        input: ["ae2:sky_stone_block"],
        output: "ad_astra:sky_stone"
      },
      {
        input: ["minecraft:gravel"],
        output: Item.of("techreborn:andesite_dust", 2)
      },
      {
        input: ["createastral:sturdy_sheet_block"],
        output: Item.of("create:sturdy_sheet", 4)
      },
      {
        input: ["createastral:bronze_block"],
        output: Item.of("createastral:bronze_ingot", 9)
      },
      {
        input: ["ad_astra:steel_block"],
        output: Item.of("ad_astra:steel_ingot", 9)
      },
      {
        input: ["createastral:refined_radiance_block"],
        output: Item.of("create:refined_radiance", 9)
      },
      {
        input: [Ingredient.of("#c:slimeballs", 2), Item.of("techreborn:sponge_piece", 2)],
        output: Item.of("createastral:synthetic_slime", 3)
      },
      {
        input: [Item.of("ad_astra:moon_stone", 1), Item.of("astraladditions:moonset_crystal", 1)],
        output: Item.of("createastral:moonset_stone", 1)
      },
      {
        input: ["ad_astra:fuel_bucket"],
        output: "techreborn:nitro_diesel_bucket"
      },
      {
        input: ["ad_astra:oil_bucket"],
        output: "techreborn:oil_bucket"
      },
      {
        input: ["#c:plates/iron", "create:fluid_pipe"],
        output: "create:fluid_valve"
      },
      {
        input: ["createbigcannons:steel_scrap"],
        output: "ad_astra:steel_nugget"
      },
      {
        input: ["createbigcannons:bronze_scrap"],
        output: "techreborn:bronze_nugget"
      },
      {
        input: ["createbigcannons:nethersteel_nugget"],
        output: "ad_astra:ostrum_nugget"
      },
      {
        input: [Item.of("techreborn:bronze_nugget", 9)],
        output: "createastral:bronze_ingot"
      },
      {
        input: ["createastral:bronze_ingot"],
        output: Item.of("techreborn:bronze_nugget", 9)
      },
      {
        input: ["minecraft:wither_skeleton_skull"],
        output: Item.of("minecraft:wither_rose", 4)
      },
      {
        input: ["astralfoods:fried_cod", "astralfoods:blaze_fries"],
        output: "astralfoods:blaze_fries_and_cod"
      },
      {
        input: ["create:dough", "minecraft:cyan_dye"],
        output: "tconstruct:sky_slime_ball"
      }
    ];
    shapelessRecipes2.forEach((recipe) => {
      event.shapeless(recipe.output, recipe.input);
    });
    event.shapeless(Item.of("minecraft:paper", 3), [
      "techreborn:saw_dust",
      "techreborn:saw_dust",
      "techreborn:saw_dust",
      "minecraft:water_bucket"
    ]).replaceIngredient("minecraft:water_bucket", "minecraft:bucket").id("techreborn:crafting_table/paper_manual_only");
    event.shapeless("minecraft:dripstone_block", ["minecraft:calcite", "minecraft:water_bucket"]).replaceIngredient("minecraft:water_bucket", "minecraft:bucket").id("techreborn:crafting_table/paper_manual_only");
  });
}
function minecraftSmeltingRecipes() {
  onEvent("recipes", (event) => {
    const smeltingRecipes = [
      { input: "createastral:andesite_compound", output: "create:andesite_alloy" },
      { input: "minecraft:rotten_flesh", output: "minecraft:leather", xp: 2 },
      { input: "create:crushed_raw_tin", output: "techreborn:tin_ingot", xp: 0.1 },
      { input: "create:crushed_raw_silver", output: "techreborn:silver_ingot", xp: 0.5 },
      { input: "create:crushed_raw_lead", output: "techreborn:lead_ingot", xp: 0.5 }
    ];
    smeltingRecipes.forEach((recipe) => {
      event.recipes.minecraft.smelting(recipe.output, recipe.input).xp(recipe.xp ?? 0);
    });
  });
}
function minecraftSmithingRecipes() {
  onEvent("recipes", (event) => {
    storageUnitTiers(event);
    radiantUpgrades(event);
    const smithingRecipes = [
      // [Primary Input, Material Input, Output]
      { base: "minecraft:copper_ingot", addition: "techreborn:tin_ingot", output: "createastral:bronze_ingot" },
      { base: "techreborn:tin_ingot", addition: "minecraft:copper_ingot", output: "createastral:bronze_ingot" },
      { base: "farmersdelight:skillet", addition: "minecraft:water_bucket", output: "farmersdelight:cooking_pot" },
      { base: "reinfchest:diamond_chest", addition: "minecraft:netherite_ingot", output: "reinfchest:netherite_chest" }
    ];
    smithingRecipes.forEach((recipe) => {
      event.smithing(recipe.output, recipe.base, recipe.addition);
    });
  });
  function storageUnitTiers(event) {
    event.smithing("techreborn:crude_storage_unit", "techreborn:storage_buffer", "createastral:t1_upgrade");
    const storageUnits = [
      { prefix: "basic", tier: 2, index: 0 },
      { prefix: "advanced", tier: 3, index: 1 },
      { prefix: "industrial", tier: 4, index: 2 },
      { prefix: "quantum", tier: 6, index: 3 }
    ];
    storageUnits.forEach((unit) => {
      event.smithing(
        `techreborn:${unit.prefix}_storage_unit`,
        `#createastral:storage_unit_${unit.index}`,
        `createastral:t${unit.tier}_upgrade`
      );
      event.smithing(
        `techreborn:${unit.prefix}_tank_unit`,
        `#createastral:tank_unit_${unit.index}`,
        `createastral:t${unit.tier}_upgrade`
      );
    });
  }
  function radiantUpgrades(event) {
    const armor = ["helmet", "chestplate", "leggings", "boots"];
    const tools = ["sword", "axe", "shovel", "pickaxe"];
    for (const type of armor) {
      event.smithing(`createastral:radiant_${type}`, `createastral:steel_${type}`, "create:refined_radiance");
    }
    for (const type of tools) {
      event.smithing(`createastral:radiant_${type}`, `minecraft:netherite_${type}`, "create:refined_radiance");
    }
  }
}
function minecraftSmokingRecipes() {
  onEvent("recipes", (event) => {
    const smokingRecipes = [
      // [Input string, Output string, XP value]
      { input: "campanion:marshmallow", output: "campanion:cooked_marshmallow" },
      { input: "campanion:cooked_marshmallow", output: "campanion:blackened_marshmallow" }
    ];
    smokingRecipes.forEach((recipe) => {
      event.recipes.minecraft.smoking(recipe.output, recipe.input).xp(recipe.xp ?? 0);
    });
  });
}
function minecraftStonecuttingRecipes() {
  onEvent("recipes", (event) => {
    copperOxidising(event);
    const stonecuttingRecipes = [
      {
        input: "createastral:blast-resistant_concrete",
        outputs: [
          Item.of("createastral:blast-resistant_concrete_slab", 2),
          "createastral:blast-resistant_concrete_stairs"
        ]
      },
      {
        input: "minecraft:dripstone_block",
        outputs: [Item.of("minecraft:pointed_dripstone", 2)]
      },
      {
        input: "createastral:bronze_ingot",
        outputs: [Item.of("createastral:bronze_sheet", 2)]
      },
      {
        input: "createastral:andesite_compound",
        outputs: [
          "minecraft:wooden_hoe",
          "minecraft:wooden_axe",
          "minecraft:wooden_shovel",
          "minecraft:wooden_pickaxe",
          "minecraft:wooden_sword",
          "minecraft:stone_hoe",
          "minecraft:stone_axe",
          "minecraft:stone_shovel",
          "minecraft:stone_pickaxe",
          "minecraft:stone_sword"
        ]
      },
      {
        input: "minecraft:dirt",
        outputs: [Item.of("automobility:dirt_off_road", 8)]
      },
      {
        input: "minecraft:grass_block",
        outputs: [Item.of("automobility:grass_off_road", 8)]
      },
      {
        input: "minecraft:moss_block",
        outputs: [Item.of("automobility:grass_off_road", 8)]
      },
      {
        input: "minecraft:moss_carpet",
        outputs: [Item.of("automobility:grass_off_road", 2)]
      },
      {
        input: "minecraft:sand",
        outputs: [Item.of("automobility:sand_off_road", 8)]
      },
      {
        input: "techreborn:basic_machine_frame",
        outputs: ["ae2:inscriber"]
      },
      {
        input: "#c:plates/gold",
        outputs: ["tconstruct:gear_cast", "astraladditions:ring_gold_cast", "tconstruct:coin_cast"]
      },
      {
        input: "automobility:dash_panel",
        outputs: ["automobility:sloped_dash_panel", "automobility:steep_sloped_dash_panel"]
      },
      {
        input: "yttr:wasteland_stone",
        outputs: [
          "yttr:ruined_cobblestone",
          "yttr:ruined_device_gt_1",
          "yttr:ruined_device_bc_1",
          "yttr:ruined_device_fo_1"
        ]
      },
      {
        input: "yttr:wasteland_dirt",
        outputs: [
          "yttr:ruined_bricks",
          "yttr:ruined_construct_rc_1",
          "yttr:ruined_construct_rc_2",
          "yttr:ruined_tank",
          "yttr:ruined_pipe",
          "yttr:ruined_tube",
          "yttr:wasteland_grass"
        ]
      },
      {
        input: "yttr:wasteland_dirt",
        outputs: [
          "yttr:ruined_container",
          "yttr:ruined_device_bc_2",
          "yttr:ruined_device_rp_1",
          "yttr:ruined_frame",
          "yttr:ruined_lever",
          "yttr:ruined_torch"
        ]
      },
      {
        input: "astraladditions:desizer_8",
        outputs: [
          "astraladditions:desizer_1",
          "astraladditions:desizer_2",
          "astraladditions:desizer_3",
          "astraladditions:desizer_4",
          "astraladditions:desizer_6",
          "astraladditions:desizer_7",
          "astraladditions:desizer_9"
        ]
      },
      { input: "create:copper_sheet", outputs: [Item.of("createdeco:copper_sheet_metal", 2)] },
      { input: "create:andesite_alloy", outputs: [Item.of("createdeco:andesite_sheet_metal", 2)] },
      { input: "create:golden_sheet", outputs: [Item.of("createdeco:gold_sheet_metal", 2)] },
      { input: "createdeco:netherite_sheet", outputs: [Item.of("createdeco:netherite_sheet_metal", 2)] },
      { input: "create:brass_sheet", outputs: [Item.of("createdeco:brass_sheet_metal", 2)] },
      { input: "createdeco:cast_iron_sheet", outputs: [Item.of("createdeco:cast_iron_sheet_metal", 2)] },
      { input: "create:iron_sheet", outputs: [Item.of("createdeco:iron_sheet_metal", 2)] },
      { input: "createdeco:zinc_sheet", outputs: [Item.of("createdeco:zinc_sheet_metal", 2)] },
      {
        input: "create:track",
        outputs: [
          "railways:track_acacia",
          "railways:track_birch",
          "railways:track_crimson",
          "railways:track_dark_oak",
          "railways:track_jungle",
          "railways:track_oak",
          "railways:track_spruce",
          "railways:track_warped",
          "railways:track_blackstone",
          "railways:track_ender",
          "railways:track_tieless",
          "railways:track_phantom",
          "railways:track_monorail"
        ]
      },
      {
        input: "minecraft:iron_ingot",
        outputs: ["dustrial_decor:sheet_metal"]
      },
      {
        input: "dustrial_decor:rusty_iron_ingot",
        outputs: ["dustrial_decor:rusty_sheet_metal"]
      },
      {
        input: "dustrial_decor:sheet_metal_plating",
        outputs: [
          "dustrial_decor:sheet_metal_paneling",
          "dustrial_decor:sheet_metal_plating_stairs",
          Item.of("dustrial_decor:sheet_metal_plating_slab", 2)
        ]
      },
      {
        input: "dustrial_decor:rusty_sheet_metal_plating",
        outputs: [
          "dustrial_decor:rusty_sheet_metal_paneling",
          "dustrial_decor:rusty_sheet_metal_plating_stairs",
          Item.of("dustrial_decor:rusty_sheet_metal_plating_slab", 2)
        ]
      },
      {
        input: "dustrial_decor:sheet_metal_treading",
        outputs: ["dustrial_decor:sheet_metal_treading_stairs", Item.of("dustrial_decor:sheet_metal_treading_slab", 2)]
      },
      {
        input: "dustrial_decor:rusty_sheet_metal_treading",
        outputs: [
          "dustrial_decor:rusty_sheet_metal_treading_stairs",
          Item.of("dustrial_decor:rusty_sheet_metal_treading_slab", 2)
        ]
      },
      {
        input: "doodads:asphalt",
        outputs: ["doodads:asphalt_stair", Item.of("doodads:asphalt_slab", 2)]
      },
      {
        input: "minecraft:copper_block",
        outputs: [Item.of("createdeco:copper_sheet_metal", 4)]
      }
    ];
    stonecuttingRecipes.forEach((recipe) => {
      recipe.outputs.forEach((output) => {
        event.stonecutting(output, recipe.input);
      });
    });
  });
  function copperOxidising(event) {
    for (const block of VANILLA_COPPER_BLOCKS) {
      for (const state of OXIDIZATION_TYPES) {
        event.stonecutting(`minecraft:${state}_${block}`, `minecraft:${block}`);
        event.stonecutting(`minecraft:waxed_${state}_${block}`, `minecraft:waxed_${block}`);
      }
    }
    for (const block of CREATE_COPPER_BLOCKS) {
      for (const state of OXIDIZATION_TYPES) {
        event.stonecutting(`create:${state}_${block}`, `create:${block}`);
        event.stonecutting(`create:waxed_${state}_${block}`, `create:waxed_${block}`);
      }
    }
    for (const state of OXIDIZATION_TYPES) {
      const otherCopperStonecuttingRecipes = [
        { input: "minecraft:copper_block", outputs: [`minecraft:${state}_copper`] },
        { input: "minecraft:waxed_copper_block", outputs: [`minecraft:waxed_${state}_copper`] },
        { input: "phonos:copper_speaker", outputs: [`phonos:${state}_copper_speaker`] },
        { input: "phonos:waxed_copper_speaker", outputs: [`phonos:waxed_${state}_copper_speaker`] },
        { input: "tconstruct:copper_platform", outputs: [`tconstruct:${state}_copper_platform`] },
        { input: "tconstruct:waxed_copper_platform", outputs: [`tconstruct:waxed_${state}_copper_platform`] }
      ];
      otherCopperStonecuttingRecipes.forEach((recipe) => {
        recipe.outputs.forEach((output) => {
          event.stonecutting(output, recipe.input);
        });
      });
    }
  }
}
function recipeRemovals() {
  onEvent("recipes", (event) => {
    const recipeRemovals2 = [
      // storage units
      { output: "techreborn:crude_storage_unit" },
      { output: "techreborn:basic_storage_unit" },
      { output: "techreborn:advanced_storage_unit" },
      { output: "techreborn:industrial_storage_unit" },
      { output: "techreborn:quantum_storage_unit" },
      // tanks units
      { output: "techreborn:basic_tank_unit" },
      { output: "techreborn:advanced_tank_unit" },
      { output: "techreborn:industrial_tank_unit" },
      { output: "techreborn:quantum_tank_unit" },
      //cables
      { output: "techreborn:gold_cable" },
      { output: "techreborn:copper_cable" },
      { output: "techreborn:tin_cable" },
      { output: "techreborn:hv_cable" },
      { output: "techreborn:glassfiber_cable" },
      { output: "techreborn:insulated_hv_cable" },
      { output: "techreborn:insulated_gold_cable" },
      { output: "techreborn:insulated_copper_cable" },
      { output: "techreborn:hv_transformer" },
      { output: "techreborn:nanosaber" },
      { output: "techreborn:lightning_rod" },
      { output: "techreborn:refined_iron_fence" },
      { output: "techreborn:chunk_loader" },
      { output: "techreborn:pyrite_dust" },
      { output: "ae2:spatial_anchor" },
      { output: "techreborn:carbon_fiber" },
      { output: "techreborn:scrap_box" },
      { output: "techreborn:industrial_electrolyzer" },
      { output: "techreborn:industrial_sawmill" },
      { output: "techreborn:vacuum_freezer" },
      { output: "techreborn:solid_canning_machine" },
      { output: "techreborn:greenhouse_controller" },
      { output: "techreborn:industrial_centrifuge" },
      { output: "techreborn:electric_furnace" },
      { output: "techreborn:distillation_tower" },
      { output: "techreborn:chemical_reactor" },
      { output: "techreborn:auto_crafting_table" },
      { output: "techreborn:alloy_smelter" },
      { output: "techreborn:extractor" },
      { output: "createendertransmission:chunk_loader" },
      { input: "techreborn:sponge_piece" },
      { output: "techreborn:sponge_piece" },
      { output: "techreborn:compressed_plantball" },
      { input: "techreborn:compressed_plantball", type: "techreborn:solid_canning_machine" },
      { output: "techreborn:plantball" },
      { output: "techreborn:grinder" },
      { output: "techreborn:scrapboxinator" },
      { output: "techreborn:recycler" },
      { output: "techreborn:block_breaker" },
      { output: "techreborn:wire_mill" },
      { output: "techreborn:compressor" },
      { output: "techreborn:synthetic_redstone_crystal" },
      { output: "techreborn:bronze_nugget" },
      { output: "techreborn:steel_ingot" },
      { output: "techreborn:steel_storage_block" },
      { output: "techreborn:steel_plate" },
      { output: "techreborn:bronze_storage_block" },
      { output: "techreborn:ender_pearl_dust" },
      { output: "techreborn:electronic_circuit" },
      { output: "techreborn:industrial_circuit" },
      { output: "techreborn:energy_flow_chip" },
      { output: "techreborn:lithium_ion_battery" },
      { output: "techreborn:rubber", type: "minecraft:smelting" },
      { output: "techreborn:basic_machine_frame" },
      { output: "techreborn:advanced_machine_frame" },
      { output: "techreborn:industrial_machine_frame" },
      { output: "techreborn:advanced_machine_casing" },
      { output: "techreborn:industrial_machine_casing" },
      { output: "techreborn:refined_iron_ingot" },
      { output: "techreborn:fusion_coil" },
      { output: "techreborn:carbon_mesh" },
      { output: "techreborn:data_storage_core" },
      { output: "techreborn:data_storage_chip" },
      { output: "techreborn:player_detector" },
      { output: "techreborn:quantum_helmet" },
      { output: "techreborn:quantum_chestplate" },
      { output: "techreborn:quantum_leggings" },
      { output: "techreborn:quantum_boots" },
      { output: "techreborn:copper_nugget" },
      { output: "techreborn:steel_plate" },
      { output: "techreborn:nanosaber" },
      { output: "yttr:promethium_speck" },
      { output: "yttr:promethium_lump" },
      { output: "yttr:promethium_glob" },
      { output: "yttr:reinforced_cleaver" },
      { type: "techreborn:scrapbox" },
      {
        type: "techreborn:grinder",
        input: "#techreborn:calcite_dust_material"
      },
      { type: "techreborn:grinder", input: "#c:ores" },
      { type: "techreborn:grinder", input: "#c:storage_blocks" },
      {
        type: "techreborn:grinder",
        input: "#techreborn:storage_blocks"
      },
      { type: "techreborn:grinder", output: "#c:concrete_powder" },
      { type: "techreborn:grinder", input: "#c:sandstone" },
      { type: "techreborn:grinder", input: "#minecraft:wool" },
      { type: "techreborn:grinder", input: "minecraft:gravel" },
      { type: "techreborn:grinder", input: "minecraft:obsidian" },
      {
        type: "techreborn:grinder",
        input: "minecraft:shroomlight"
      },
      { type: "techreborn:grinder", input: "minecraft:glowstone" },
      { type: "techreborn:grinder", input: "ad_astra:steel_block" },
      {
        type: "techreborn:grinder",
        input: "createastral:bronze_block"
      },
      { type: "techreborn:grinder", input: "minecraft:andesite" },
      { type: "techreborn:grinder", input: "minecraft:diorite" },
      { type: "techreborn:grinder", input: "minecraft:granite" },
      { type: "techreborn:grinder", input: "minecraft:netherrack" },
      {
        type: "techreborn:grinder",
        input: "minecraft:warped_nylium"
      },
      {
        type: "techreborn:grinder",
        input: "minecraft:crimson_nylium"
      },
      {
        type: "techreborn:grinder",
        output: "techreborn:saw_small_dust"
      },
      { type: "techreborn:grinder", output: "minecraft:sand" },
      { type: "techreborn:grinder", output: "minecraft:red_sand" },
      {
        type: "techreborn:grinder",
        input: "minecraft:pointed_dripstone"
      },
      {
        type: "minecraft:crafting_shaped",
        output: "techreborn:plantball"
      },
      {
        type: "minecraft:crafting_shapeless",
        output: "techreborn:plantball"
      },
      {
        type: "minecraft:crafting_shaped",
        output: "techreborn:nak_coolant_cell_60k"
      },
      { id: "techreborn:crafting_table/paper" },
      { output: "techreborn:block_placer" },
      { output: "minecraft:soul_sand", type: "techreborn:centrifuge" },
      { input: "techreborn:clay_dust", type: "techreborn:industrial_electrolyzer" },
      { id: "techreborn:solid_canning_machine/sulfur_cell" },
      { id: "techreborn:solid_canning_machine/bio_cell" },
      //Create
      { output: "create:track" },
      { output: "create:blaze_cake" },
      { output: "create:blaze_cake_base" },
      { output: "create:blaze_burner" },
      { output: "create:ochrum" },
      { output: "create:crimsite" },
      { input: "create:crimsite", output: "create:crushed_raw_iron" },
      { output: "create:limestone" },
      { output: "create:asurine" },
      { output: "create:veridium" },
      { output: "create:scoria" },
      { output: "create:scorchia" },
      { output: "create:crushed_raw_uranium" },
      { output: "create:electron_tube" },
      { output: "create:cogwheel", type: "minecraft:crafting_shaped" },
      { output: "create:large_cogwheel", type: "minecraft:crafting_shaped" },
      { output: "travelersbackpack:standard", type: "minecraft:crafting_shaped" },
      { output: "travelersbackpack:standard", type: "minecraft:crafting_shaped" },
      { output: "create:cogwheel" },
      { output: "create:large_cogwheel" },
      { output: "create:experience_block" },
      { output: "create:stockpile_switch" },
      { output: "create:copper_casing" },
      { output: "create:precision_mechanism" },
      { output: "create:railway_casing" },
      { output: "create:copper_backtank" },
      { output: "create:belt_connector" },
      { output: "create:brass_hand" },
      { output: "create:controls" },
      { output: "create:fluid_pipe" },
      { output: "create:fluid_tank" },
      { output: "create:goggles" },
      { output: "create:fluid_valve" },
      { output: "create:andesite_funnel" },
      { output: "create:andesite_tunnel" },
      { output: "create:brass_funnel" },
      { output: "create:brass_tunnel" },
      {
        output: "create:andesite_alloy",
        input: "minecraft:andesite"
      },
      {
        output: "create:experience_nugget",
        input: "create:experience_block"
      },
      { type: "create:milling", output: "minecraft:gunpowder" },
      { type: "create:milling", output: "minecraft:flint" },
      { type: "create:crushing", input: "minecraft:blaze_rod" },
      { type: "create:crushing", input: "minecraft:bone" },
      { type: "create:crushing", input: "minecraft:tuff" },
      { type: "create:milling", input: "minecraft:tuff" },
      { type: "create:milling", input: "minecraft:basalt" },
      { type: "create:milling", input: "minecraft:clay" },
      { type: "create:crushing", input: "minecraft:clay" },
      { type: "create:crushing", input: "minecraft:lapis_lazuli" },
      { type: "create:crushing", input: "minecraft:diamond" },
      { type: "create:crushing", input: "minecraft:diorite" },
      { type: "create:crushing", input: "minecraft:granite" },
      { type: "create:crushing", input: "minecraft:andesite" },
      { type: "create:crushing", input: "create:asurine" },
      { type: "create:crushing", input: "#create:stone_types/asurine" },
      { type: "create:crushing", input: "create:veridium" },
      { type: "create:crushing", input: "create:limestone" },
      { type: "create:crushing", input: "create:ochrum" },
      { type: "create:crushing", input: "create:scoria" },
      { type: "create:crushing", input: "create:scorchia" },
      { type: "create:crushing", input: "minecraft:cobblestone" },
      { type: "create:crushing", output: "create:cinder_flour" },
      { type: "create:mixing", output: "create:brass_ingot" },
      { type: "create:splashing", input: "minecraft:red_sand" },
      { type: "create:haunting", input: "minecraft:red_sand" },
      { type: "create:haunting", input: "minecraft:moss_block" },
      {
        type: "create:mixing",
        output: "tconstruct:rose_gold_ingot"
      },
      {
        type: "create:mixing",
        output: "tconstruct:slimesteel_ingot"
      },
      {
        type: "create:mixing",
        output: "tconstruct:pig_iron_ingot"
      },
      {
        type: "create:mixing",
        output: "tconstruct:manyullyn_ingot"
      },
      {
        type: "create:mixing",
        output: "tconstruct:hepatizon_ingot"
      },
      {
        type: "create:mixing",
        output: "tconstruct:queens_slime_ingot"
      },
      {
        output: "create:brass_casing",
        type: "create:item_application"
      },
      {
        type: "create:mixing",
        output: "create:dough"
      },
      { mod: "create", output: "minecraft:andesite" },
      // Create Deco
      { output: "createdeco:andesite_door" },
      { output: "createdeco:brass_door" },
      { output: "createdeco:copper_door" },
      { output: "createdeco:zinc_door" },
      { output: "createdeco:zinc_sheet" },
      //Create Additions
      { output: "createaddition:alternator" },
      { output: "createaddition:electric_motor" },
      { output: "createaddition:tesla_coil" },
      { output: "createaddition:biomass_pellet" },
      { output: "createaddition:biomass_pellet" },
      { output: "createaddition:biomass" },
      { output: "createaddition:bioethanol" },
      { type: "createaddition:liquid_burning" },
      // Create Railways
      { output: "railways:track_acacia" },
      { output: "railways:track_birch" },
      { output: "railways:track_crimson" },
      { output: "railways:track_dark_oak" },
      { output: "railways:track_jungle" },
      { output: "railways:track_oak" },
      { output: "railways:track_spruce" },
      { output: "railways:track_warped" },
      { output: "railways:track_blackstone" },
      { output: "railways:track_ender" },
      { output: "railways:track_tieless" },
      { output: "railways:track_phantom" },
      { output: "railways:track_monorail" },
      //Createdeco sheetmetal rebalance
      { output: "createdeco:copper_sheet_metal" },
      { output: "createdeco:andesite_sheet_metal" },
      { output: "createdeco:gold_sheet_metal" },
      { output: "createdeco:netherite_sheet_metal" },
      { output: "createdeco:brass_sheet_metal" },
      { output: "createdeco:cast_iron_sheet_metal" },
      { output: "createdeco:iron_sheet_metal" },
      { output: "createdeco:zinc_sheet_metal" },
      // Big cannon removals
      { output: "createbigcannons:nethersteel_nugget" },
      { output: "createbigcannons:nethersteel_ingot" },
      { output: "createbigcannons:nethersteel_block" },
      { output: "createbigcannons:molten_bronze", type: "createbigcannons:melting" },
      { output: "createbigcannons:molten_nethersteel", type: "createbigcannons:melting" },
      { output: "createbigcannons:molten_steel", type: "createbigcannons:melting" },
      { output: "createbigcannons:cast_iron_ingot", type: "create:compacting" },
      { output: "createbigcannons:cast_iron_nugget", type: "create:compacting" },
      // dustrial decor sheetmetal rework
      { output: "dustrial_decor:rusty_iron_door" },
      { output: "dustrial_decor:rusty_sheet_metal_treading" },
      // Ad Astra
      { output: "ad_astra:oxygen_distributor" },
      { output: "ad_astra:steel_ingot" },
      { output: "ad_astra:iron_plate" },
      { output: "ad_astra:coal_generator" },
      { output: "ad_astra:solar_panel" },
      { output: "ad_astra:fuel_refinery" },
      { output: "ad_astra:oxygen_loader" },
      { output: "ad_astra:energizer" },
      { output: "ad_astra:iron_rod" },
      { output: "ad_astra:nasa_workbench" },
      { output: "ad_astra:rocket_fin" },
      { output: "ad_astra:launch_pad" },
      { output: "ad_astra:space_boots" },
      { output: "ad_astra:desh_fluid_pipe" },
      { output: "ad_astra:ostrum_fluid_pipe" },
      { output: "ad_astra:wrench" },
      { output: "ad_astra:jet_suit_helmet" },
      { output: "ad_astra:jet_suit" },
      { output: "ad_astra:jet_suit_pants" },
      { output: "ad_astra:jet_suit_boots" },
      { output: "ad_astra:tier_1_rocket" },
      { output: "ad_astra:tier_3_rocket" },
      { output: "ad_astra:tier_4_rocket" },
      { output: "ad_astra:desh_cable" },
      { output: "ad_astra:steel_cable" },
      { output: "ad_astra:compressor" },
      { output: "ad_astra:ostrum_ingot", type: "minecraft:smelting" },
      { output: "ad_astra:ostrum_ingot", type: "minecraft:blasting" },
      { output: "ad_astra:calorite_ingot", type: "minecraft:smelting" },
      { output: "ad_astra:calorite_ingot", type: "minecraft:blasting" },
      { output: "ad_astra:calorite_engine" },
      { output: "ad_astra:calorite_tank" },
      { output: "ad_astra:steel_tank" },
      { output: "ad_astra:rocket_nose_cone" },
      { output: "ad_astra:oxygen", type: "ad_astra:oxygen_conversion" },
      { output: "ad_astra:cryo_fuel", type: "ad_astra:cryo_fuel_conversion" },
      { type: "ad_astra:space_station" },
      // AE2
      { output: "ae2:fluix_dust" },
      { output: "ae2:molecular_assembler" },
      { output: "ae2:inscriber" },
      { type: "ae2:inscriber" },
      { output: "ae2:controller", type: "crafting_shaped" },
      // Tconstruct
      { output: "tconstruct:gold_bars" },
      { input: "tconstruct:gold_bars", output: "tconstruct:molten_gold" },
      { mod: "tconstruct", output: "minecraft:granite" },
      {
        type: "tconstruct:casting_basin",
        output: "minecraft:diorite"
      },
      { output: "tconstruct:copper_nugget" },
      { output: "tconstruct:smeltery_controller" },
      { output: "tconstruct:seared_melter" },
      { output: "tconstruct:scorched_alloyer" },
      { output: "tconstruct:earth_slime_sling" },
      { output: "tconstruct:sky_slime_sling" },
      { output: "tconstruct:ender_slime_sling" },
      { output: "tconstruct:seared_ingot_gauge" },
      { output: "tconstruct:seared_ingot_tank" },
      { output: "tconstruct:seared_fuel_gauge" },
      { output: "tconstruct:seared_fuel_tank" },
      { output: "tconstruct:seared_bricks" },
      { output: "tconstruct:grout" },
      { type: "tconstruct:entity_melting" },
      { type: "tconstruct:alloy" },
      { output: "tconstruct:nether_grout" },
      { output: "tconstruct:efln_ball" },
      { output: "tconstruct:piggy_backpack" },
      { id: "tconstruct:smeltery/casting/clay/block" },
      { id: "tconstruct:smeltery/casting/metal/bronze/plate_gold_cast" },
      { id: "tconstruct:smeltery/casting/metal/steel/block" },
      { id: "tconstruct:smeltery/casting/metal/steel/ingot_gold_cast" },
      { id: "tconstruct:smeltery/casting/metal/steel/ingot_sand_cast" },
      { id: "tconstruct:smeltery/casting/metal/steel/nugget_gold_cast" },
      { id: "tconstruct:smeltery/casting/metal/steel/nugget_sand_cast" },
      { id: "tconstruct:smeltery/casting/metal/steel/plate_gold_cast" },
      { id: "tconstruct:smeltery/casting/metal/steel/plate_sand_cast" },
      // @ts-expect-error Recipe didn't generate?
      { id: "tconstruct:smeltery/casting/metal/uranium/block" },
      { id: "tconstruct:smeltery/casting/scorched/brick_composite" },
      { id: "tconstruct:smeltery/casting/scorched/polished_from_magma" },
      { id: "tconstruct:smeltery/casting/scorched/stone_from_magma" },
      { id: "tconstruct:smeltery/casting/seared/cobble/wall" },
      { id: "tconstruct:smeltery/casting/seared/stone/slab" },
      { id: "tconstruct:smeltery/casting/seared/stone/stairs" },
      { id: "tconstruct:smeltery/casting/seared/brick_composite" },
      { id: "tconstruct:smeltery/casting/seared/chiseled" },
      { id: "tconstruct:smeltery/casting/seared/cracked" },
      { id: "tconstruct:smeltery/casting/seared/paver" },
      { id: "tconstruct:smeltery/casting/slime/ichor/block" },
      { id: "tconstruct:smeltery/casting/slime/ichor/congealed" },
      // @ts-expect-error Recipe didn't generate?
      { id: "tconstruct:smeltery/casting/slime/slimeball" },
      { id: "tconstruct:smeltery/entity_melting/blaze" },
      { id: "tconstruct:smeltery/entity_melting/heads/blaze" },
      { id: "tconstruct:smeltery/melting/fuel/blaze" },
      { id: "tconstruct:smeltery/melting/fuel/lava" },
      { id: "tconstruct:smeltery/melting/glass/block" },
      { id: "tconstruct:smeltery/melting/glass/bottle" },
      { id: "tconstruct:smeltery/melting/glass/pane" },
      { id: "tconstruct:smeltery/melting/glass/sand_cast" },
      { id: "tconstruct:smeltery/melting/glass/sand" },
      { id: "tconstruct:smeltery/melting/metal/bronze/plates" },
      { id: "tconstruct:smeltery/melting/metal/copper/wire" },
      { id: "tconstruct:smeltery/melting/metal/iron/chain" },
      { id: "tconstruct:smeltery/melting/metal/iron/raw_block" },
      { id: "tconstruct:smeltery/melting/metal/iron/raw" },
      { id: "tconstruct:smeltery/melting/metal/rose_gold/silky_cloth" },
      { id: "tconstruct:smeltery/melting/metal/silver/ore_singular" },
      { id: "tconstruct:smeltery/melting/metal/silver/raw_block" },
      { id: "tconstruct:smeltery/melting/metal/silver/raw" },
      { id: "tconstruct:smeltery/melting/metal/tin/ore_singular" },
      { id: "tconstruct:smeltery/melting/metal/tin/raw_block" },
      { id: "tconstruct:smeltery/melting/metal/tin/raw" },
      { id: "tconstruct:smeltery/melting/obsidian/beacon" },
      { id: "tconstruct:smeltery/melting/obsidian/block" },
      { id: "tconstruct:smeltery/melting/obsidian/chest" },
      { id: "tconstruct:smeltery/melting/obsidian/dust" },
      // @ts-expect-error Recipe didn't generate?
      { id: "tconstruct:smeltery/melting/obsidian/foundry_controler" },
      { id: "tconstruct:smeltery/melting/obsidian/foundry_io" },
      { id: "tconstruct:smeltery/melting/obsidian/pane" },
      { id: "tconstruct:smeltery/melting/scorched/casting" },
      { id: "tconstruct:smeltery/melting/seared/grout" },
      { id: "tconstruct:smeltery/melting/slime/beetroot_soup" },
      { id: "tconstruct:smeltery/melting/slime/honey_block" },
      //horse armor
      { output: "minecraft:leather_horse_armor" },
      { type: "tconstruct:melting", input: "minecraft:iron_horse_armor" },
      { type: "tconstruct:melting", input: "minecraft:golden_horse_armor" },
      { type: "tconstruct:melting", input: "minecraft:diamond_horse_armor" },
      // reinfchest
      { output: "reinfchest:diamond_chest" },
      { output: "reinfchest:gold_chest" },
      { output: "reinfchest:iron_chest" },
      { output: "reinfchest:netherite_chest" },
      // Miscellaneous
      { output: "minecraft:shroomlight" },
      { output: "chipped:mechanist_workbench" },
      { output: "chipped:carpenters_table" },
      { output: "chipped:alchemy_bench" },
      { output: "passivepiglins:piglin_fortune" },
      { output: "passivepiglins:piglin_totem" },
      { output: "passivepiglins:piglin_coin" },
      { output: "travelersbackpack:standard" },
      { output: "campanion:sleeping_bag" },
      { output: "travelersbackpack:white_sleeping_bag" },
      { output: "travelersbackpack:orange_sleeping_bag" },
      { output: "travelersbackpack:magenta_sleeping_bag" },
      { output: "travelersbackpack:light_blue_sleeping_bag" },
      { output: "travelersbackpack:yellow_sleeping_bag" },
      { output: "travelersbackpack:lime_sleeping_bag" },
      { output: "travelersbackpack:pink_sleeping_bag" },
      { output: "travelersbackpack:gray_sleeping_bag" },
      { output: "travelersbackpack:light_gray_sleeping_bag" },
      { output: "travelersbackpack:cyan_sleeping_bag" },
      { output: "travelersbackpack:purple_sleeping_bag" },
      { output: "travelersbackpack:blue_sleeping_bag" },
      { output: "travelersbackpack:brown_sleeping_bag" },
      { output: "travelersbackpack:green_sleeping_bag" },
      { output: "travelersbackpack:red_sleeping_bag" },
      { output: "travelersbackpack:black_sleeping_bag" },
      { output: "travelersbackpack:hose" },
      { output: "travelersbackpack:hose_nozzle" },
      { output: "ad_astra:ostrum_engine" },
      { output: "dbe:server_rack" },
      { output: "dustrial_decor:cast_iron_billet" },
      { output: "mcdw:pick_diamond_pickaxe_var" },
      { output: "mcdw:sword_diamond_sword_var" },
      { output: "automobility:auto_mechanic_table" },
      { output: "automobility:automobile_assembler" },
      // @ts-expect-error Recipe didn't generate?
      { type: "automobility:automobile_assembler" },
      { type: "ad_astra:fuel_conversion" },
      { output: "campanion:grappling_hook" },
      { output: "campanion:mre" },
      { output: "campanion:day_pack" },
      { output: "campanion:camping_pack" },
      { output: "campanion:wooden_spear" },
      { output: "campanion:stone_spear" },
      { output: "campanion:iron_spear" },
      { output: "campanion:diamond_spear" },
      { output: "campanion:netherite_spear" },
      { output: "campanion:golden_spear" },
      { output: "explorerscompass:explorerscompass" },
      { output: "phonos:radio_player_piano" },
      { output: "phonos:radio_jukebox" },
      { output: "phonos:redstone_chip" },
      { output: "create:andesite_alloy_block" },
      { input: "create:andesite_alloy_block" },
      { mod: "doodads" },
      { mod: "extended_drawers" },
      { output: "doodads:slimey_shoes" },
      { output: "dbe:steel_ingot" },
      { output: "dbe:copper_coil" },
      { output: "farmersdelight:cooking_pot" },
      { output: "campanion:rope" },
      { output: "immersive_aircraft:boiler" },
      { output: "immersive_aircraft:engine" },
      { output: "immersive_aircraft:nether_engine" },
      // @ts-expect-error Recipe didn't generate?
      { output: "immersive_aircraft:large_propeller" },
      { output: "immersive_aircraft:airship" },
      { output: "immersive_aircraft:gyrodyne" },
      { output: "immersive_aircraft:biplane" },
      { output: "immersive_aircraft:quadrocopter" },
      { output: "immersive_aircraft:hull" },
      { output: "immersive_aircraft:propeller" },
      { output: "immersive_aircraft:sail" },
      { output: "catwalksinc:iron_rod" },
      { output: "polaroidcamera:camera" },
      { output: "computercraft:turtle_advanced" },
      { output: "computercraft:computer_advanced" },
      { output: "computercraft:pocket_computer_advanced" },
      { output: "buildinggadgets:gadget_building" },
      { output: "buildinggadgets:gadget_copy_paste" },
      { output: "buildinggadgets:gadget_destruction" },
      { output: "buildinggadgets:gadget_exchanging" },
      // Yttr
      { type: "yttr:centrifuging", input: "minecraft:coal" },
      { output: "yttr:chute" },
      { output: "yttr:rafter" },
      { output: "yttr:centrifuge" },
      { output: "yttr:dopper" },
      { output: "yttr:aware_hopper" },
      { output: "yttr:levitation_chamber" },
      { output: "yttr:skeletal_sorter_right_handed" },
      { output: "yttr:skeletal_sorter_left_handed" },
      { output: "yttr:rifle" },
      { output: "yttr:rifle_reinforced" },
      { output: "yttr:rifle_overclocked" },
      { output: "yttr:shifter" },
      { output: "yttr:projector" },
      { output: "yttr:spatula" },
      { output: "yttr:bedrock_smasher" },
      { output: "yttr:effector" },
      { output: "yttr:music_disc_papillons" },
      { output: "yttr:yttrium_dust" },
      { output: "yttr:magtank" },
      { output: "yttr:neodymium_disc" },
      { output: "yttr:yttrium_ingot", type: "minecraft:smelting" },
      { output: "yttr:yttrium_ingot", type: "minecraft:blasting" },
      { output: "yttr:xl_iron_ingot" },
      { output: "yttr:spatula" },
      { output: "yttr:giant_cobblestone" },
      { output: "yttr:armor_plating" },
      { output: "yttr:lamp", input: "yttr:glowing_gas" },
      { output: "yttr:quicksilver" },
      { output: "minecraft:slime_ball", type: "yttr:centrifuging" },
      { input: "yttr:raw_gadolinite", type: "yttr:centrifuging" },
      { input: "minecraft:coal", type: "yttr:centrifuging" },
      // Minecraft
      { mod: "minecraft", output: "minecraft:granite" },
      { output: "minecraft:elytra" },
      {
        mod: "minecraft",
        input: "minecraft:diorite",
        output: "minecraft:andesite"
      },
      {
        mod: "minecraft",
        input: "minecraft:cobblestone",
        output: "minecraft:diorite"
      },
      { output: "minecraft:iron_sword" },
      { output: "minecraft:iron_pickaxe" },
      { output: "minecraft:iron_hoe" },
      { output: "minecraft:iron_shovel" },
      { output: "minecraft:iron_axe" },
      { output: "minecraft:iron_helmet" },
      { output: "minecraft:iron_chestplate" },
      { output: "minecraft:iron_leggings" },
      { output: "minecraft:iron_boots" },
      { output: "minecraft:diamond_helmet" },
      { output: "minecraft:diamond_chestplate" },
      { output: "minecraft:diamond_leggings" },
      { output: "minecraft:diamond_boots" },
      { output: "minecraft:diamond_sword" },
      { output: "minecraft:diamond_pickaxe" },
      { output: "minecraft:diamond_hoe" },
      { output: "minecraft:diamond_shovel" },
      { output: "minecraft:diamond_axe" },
      { output: "minecraft:wooden_sword" },
      { output: "minecraft:wooden_pickaxe" },
      { output: "minecraft:wooden_hoe" },
      { output: "minecraft:wooden_shovel" },
      { output: "minecraft:wooden_axe" },
      { output: "minecraft:stone_sword" },
      { output: "minecraft:stone_pickaxe" },
      { output: "minecraft:stone_hoe" },
      { output: "minecraft:stone_shovel" },
      { output: "minecraft:stone_axe" },
      { output: "minecraft:furnace" },
      { output: "minecraft:blast_furnace" },
      { output: "minecraft:bow" },
      { output: "minecraft:crossbow" },
      { output: "minecraft:arrow" },
      { output: "minecraft:shulker_shell" },
      { output: "minecraft:ender_eye" },
      { output: "minecraft:diamond_ore" },
      { output: "minecraft:emerald_ore" },
      { output: "minecraft:blackstone" },
      { output: "minecraft:gravel", input: "techreborn:granite_dust" },
      { output: "ae2:silicon" },
      { output: "blahaj:bread" },
      { id: "techreborn:centrifuge/redstone" },
      // remove other version of centrifuging certus quartz
      { input: "minecraft:crying_obsidian" },
      {
        input: "minecraft:copper_block",
        type: "minecraft:stonecutting"
      },
      { output: "minecraft:dispenser" },
      { input: "tconstruct:copper_nugget", output: "minecraft:copper_ingot" },
      // xpcrystals
      { output: "xpcrystals:crystal_broth" },
      { output: "xpcrystals:sticky_crystal_pudding" },
      { output: "xpcrystals:soul_bucket" },
      { output: "xpcrystals:soul_compound" },
      { output: "xpcrystals:xp_boost_potion" },
      // vinery
      { output: "vinery:wine_rack_1" },
      // techreborn
      { output: "techreborn:sulfur" },
      {
        input: "minecraft:soul_soil",
        output: "techreborn:coal_dust"
      },
      {
        input: "minecraft:soul_sand",
        output: "techreborn:coal_dust"
      },
      {
        input: "minecraft:glowstone_dust",
        output: "minecraft:redstone"
      },
      {
        input: "techreborn:netherrack_dust",
        output: "minecraft:redstone"
      },
      // extractinator
      { type: "extractinator:extractinating" },
      { output: "extractinator:extractinator" },
      // estrogen
      { type: "create:compacting", input: "minecraft:slime_ball" },
      { output: "estrogen:crystal_estrogen_pill" },
      { type: "create:mixing", output: "estrogen:balls" },
      { id: "estrogen:mixing/molten_amethyst" },
      // farmers delight
      { type: "farmersdelight:cutting", input: "minecraft:gravel" },
      { type: "farmersdelight:cutting", input: "farmersdelight:wild_rice" }
    ];
    recipeRemovals2.forEach((recipe) => {
      event.remove(recipe);
    });
    event.remove({ output: "yttr:project_table" });
    const colors = [
      "white",
      "orange",
      "magenta",
      "light_blue",
      "yellow",
      "lime",
      "pink",
      "gray",
      "light_gray",
      "cyan",
      "purple",
      "blue",
      "brown",
      "green",
      "red",
      "black"
    ];
    colors.forEach((color) => event.remove({ output: `yttr:${color}_project_table` }));
    const materials = ["techreborn:bronze", "techreborn:silver"];
    materials.forEach((material) => {
      event.remove({ output: `${material}_helmet` });
      event.remove({ output: `${material}_chestplate` });
      event.remove({ output: `${material}_leggings` });
      event.remove({ output: `${material}_boots` });
    });
    event.remove({ output: "techreborn:bronze_axe" });
    event.remove({ output: "techreborn:bronze_sword" });
    event.remove({ output: "techreborn:bronze_pickaxe" });
    event.remove({ output: "techreborn:bronze_hoe" });
    event.remove({ output: "techreborn:bronze_spade" });
    const metal = [
      "tungstensteel",
      "chrome",
      "titanium",
      "nickel",
      "refined_iron",
      "bronze",
      "aluminum",
      "tungsten",
      "platinum",
      "brass",
      "zinc",
      "nickel",
      "platinum"
    ];
    metal.forEach((metal2) => {
      event.remove({ output: `techreborn:${metal2}_plate` });
      event.remove({ output: `techreborn:${metal2}_ingot` });
      event.remove({ output: `techreborn:${metal2}_storage_block` });
      event.remove({ output: `techreborn:${metal2}_storage_block_stairs` });
      event.remove({ output: `techreborn:${metal2}_storage_block_slab` });
      event.remove({ output: `techreborn:${metal2}_storage_block_wall` });
      event.remove({ output: `techreborn:${metal2}_nugget` });
    });
    const metalsWithDusts = [
      "chrome",
      "titanium",
      "nickel",
      "bronze",
      "aluminum",
      "platinum",
      "brass",
      "zinc",
      "nickel",
      "platinum"
    ];
    metalsWithDusts.forEach((metal2) => {
      event.remove({ output: `techreborn:${metal2}_dust` });
    });
    const metalsWithSmallDusts = [
      "chrome",
      "titanium",
      "nickel",
      "tungsten",
      "platinum",
      "zinc",
      "nickel",
      "platinum"
    ];
    metalsWithSmallDusts.forEach((dust) => {
      event.remove({ output: `techreborn:${dust}_small_dust` });
    });
    const plates = [
      "iron",
      "copper",
      "gold",
      "advanced_alloy",
      "iridium_alloy",
      "iridium",
      "carbon",
      "coal",
      "emerald",
      "lapis",
      "lazurite",
      "obsidian",
      "redstone",
      "silicon"
    ];
    plates.forEach((plate) => {
      event.remove({ output: `techreborn:${plate}_plate` });
    });
    const dusts = [
      { name: "almandine", hasSmall: false },
      { name: "amethyst", hasSmall: false },
      { name: "andesite", hasSmall: true },
      { name: "andradite", hasSmall: false },
      { name: "ashes", hasSmall: true },
      { name: "basalt", hasSmall: true },
      { name: "bauxite", hasSmall: false },
      { name: "bronze", hasSmall: false },
      { name: "calcite", hasSmall: true },
      { name: "charcoal", hasSmall: true },
      { name: "cinnabar", hasSmall: false },
      { name: "clay", hasSmall: true },
      { name: "coal", hasSmall: true },
      { name: "dark_ashes", hasSmall: true },
      { name: "diamond", hasSmall: true },
      { name: "diorite", hasSmall: true },
      { name: "electrum", hasSmall: true },
      { name: "emerald", hasSmall: false },
      { name: "ender_eye", hasSmall: false },
      { name: "ender_pearl", hasSmall: false },
      { name: "endstone", hasSmall: false },
      { name: "flint", hasSmall: true },
      { name: "galena", hasSmall: true },
      { name: "granite", hasSmall: true },
      { name: "grossular", hasSmall: false },
      { name: "invar", hasSmall: false },
      { name: "lazurite", hasSmall: true },
      { name: "magnesium", hasSmall: false },
      { name: "manganese", hasSmall: false },
      { name: "marble", hasSmall: false },
      { name: "netherrack", hasSmall: true },
      { name: "nickel", hasSmall: false },
      { name: "obsidian", hasSmall: false },
      { name: "olivine", hasSmall: true },
      { name: "phosphorous", hasSmall: false },
      { name: "pyrite", hasSmall: false },
      { name: "pyrope", hasSmall: false },
      { name: "quartz", hasSmall: false },
      { name: "saltpeter", hasSmall: false },
      { name: "saw", hasSmall: true },
      { name: "sodalite", hasSmall: false },
      { name: "spessartine", hasSmall: false },
      { name: "sphalerite", hasSmall: false },
      { name: "steel", hasSmall: true },
      { name: "sulfur", hasSmall: false },
      { name: "uvarovite", hasSmall: false },
      { name: "glowstone", hasSmall: true },
      { name: "redstone", hasSmall: true },
      { name: "peridot", hasSmall: false },
      { name: "red_garnet", hasSmall: false },
      { name: "ruby", hasSmall: false },
      { name: "sapphire", hasSmall: false },
      { name: "yellow_garnet", hasSmall: false }
    ];
    dusts.forEach((dust) => {
      if (dust.hasSmall) {
        event.remove({ output: `techreborn:${dust.name}_small_dust` });
      }
      if (dust.name != "glowstone" && dust.name != "redstone") event.remove({ output: `techreborn:${dust.name}_dust` });
    });
    MATERIALS.forEach((material) => {
      event.remove({ not: { mod: "tconstruct" }, output: material.plate });
    });
    for (let recipe of CRUSHING_RECIPES_TO_BECOME_GRINDING) {
      event.remove({ type: "create:crushing", input: recipe.input.item });
    }
  });
}
function recipeReplacements() {
  onEvent("recipes", (event) => {
    const replacements = [
      { original: "create:powdered_obsidian", replaceWith: "#c:dusts/obsidian" },
      { original: "techreborn:obsidian_dust", replaceWith: "#c:dusts/obsidian" },
      { original: "createaddition:diamond_grit", replaceWith: "techreborn:diamond_dust" },
      { original: "ae2:ender_dust", replaceWith: "techreborn:ender_pearl_dust" },
      {
        predicate: { mod: "createbigcannons" },
        original: "create:iron_sheet",
        replaceWith: "dustrial_decor:cast_iron_billet"
      },
      {
        predicate: { mod: "createbigcannons" },
        original: "minecraft:iron_ingot",
        replaceWith: "dustrial_decor:cast_iron_billet"
      },
      { predicate: { mod: "createbigcannons" }, original: "minecraft:iron_nugget", replaceWith: "create:zinc_nugget" },
      {
        predicate: { mod: "createbigcannons" },
        original: "minecraft:quartz",
        replaceWith: "create:integrated_circuit"
      },
      { predicate: { mod: "createbigcannons" }, original: "minecraft:redstone", replaceWith: "create:electron_tube" },
      {
        predicate: { mod: "createbigcannons" },
        original: "minecraft:iron_bars",
        replaceWith: "createaddition:iron_wire"
      },
      {
        predicate: { output: "tconstruct:raw_cobalt_block" },
        original: "#c:raw_materials/cobalt",
        replaceWith: "tconstruct:raw_cobalt"
      },
      {
        predicate: { output: "createaddition:connector" },
        original: "#c:slimeballs",
        replaceWith: "createaddition:copper_wire"
      },
      {
        predicate: { output: "createbigcannons:nethersteel_screw_lock" },
        original: "createbigcannons:nethersteel_ingot",
        replaceWith: "ad_astra:ostrum_ingot"
      },
      { predicate: { mod: "createbigcannons" }, original: "minecraft:string", replaceWith: "create:sand_paper" },
      {
        predicate: { output: "minecraft:pointed_dripstone" },
        original: "techreborn:calcite_small_dust",
        replaceWith: "techreborn:calcite_dust"
      },
      { predicate: { output: "minecraft:hopper" }, original: "minecraft:iron_ingot", replaceWith: "create:iron_sheet" },
      {
        predicate: { output: "minecraft:calcite" },
        original: "techreborn:calcite_small_dust",
        replaceWith: "techreborn:calcite_dust"
      },
      {
        predicate: { output: "techreborn:copper_cable" },
        original: "minecraft:copper_ingot",
        replaceWith: "createaddition:copper_rod"
      },
      {
        predicate: { output: "techreborn:gold_cable" },
        original: "minecraft:gold_ingot",
        replaceWith: "createaddition:gold_rod"
      },
      {
        predicate: { input: "techreborn:rubber", output: "techreborn:insulated_copper_cable" },
        original: "minecraft:copper_ingot",
        replaceWith: "createaddition:copper_rod"
      },
      {
        predicate: { type: "minecraft:crafting_shaped", output: "techreborn:chunk_loader" },
        original: "techreborn:industrial_machine_frame",
        replaceWith: "create:shadow_steel_casing"
      },
      { original: "techreborn:industrial_machine_frame", replaceWith: "techreborn:basic_machine_frame" },
      {
        predicate: { type: "minecraft:crafting_shaped", output: "techreborn:chunk_loader" },
        original: "techreborn:coal_plate",
        replaceWith: "techreborn:diamond_plate"
      },
      {
        predicate: { type: "minecraft:crafting_shaped", output: "techreborn:chunk_loader" },
        original: "techreborn:coal_plate",
        replaceWith: "techreborn:diamond_plate"
      },
      {
        predicate: { type: "minecraft:crafting_shaped", output: "techreborn:chunk_loader" },
        original: "createastral:bronze_sheet",
        replaceWith: "techreborn:electrum_plate"
      },
      {
        predicate: { type: "minecraft:crafting_shaped", output: "techreborn:chunk_loader" },
        original: "create:golden_sheet",
        replaceWith: "techreborn:emerald_plate"
      },
      { original: "#c:iron_rods", replaceWith: "createaddition:iron_rod" },
      { original: "ad_astra:iron_rod", replaceWith: "createaddition:iron_rod" },
      { original: "catwalksinc:iron_rod", replaceWith: "createaddition:iron_rod" },
      {
        predicate: { type: "minecraft:crafting_shaped" },
        original: "campanion:rope",
        replaceWith: "farmersdelight:rope"
      },
      {
        predicate: { input: "techreborn:insulated_gold_cable" },
        original: "techreborn:insulated_gold_cable",
        replaceWith: "createaddition:gold_spool"
      },
      {
        predicate: { input: "techreborn:insulated_copper_cable" },
        original: "techreborn:insulated_copper_cable",
        replaceWith: "createaddition:copper_spool"
      },
      {
        predicate: { input: "techreborn:copper_cable" },
        original: "techreborn:copper_cable",
        replaceWith: "createaddition:copper_spool"
      },
      {
        predicate: { input: "techreborn:tin_cable" },
        original: "techreborn:tin_cable",
        replaceWith: "createaddition:iron_rod"
      },
      { original: "dbe:steel_ingot", replaceWith: "dustrial_decor:cast_iron_billet" },
      { original: "dbe:basic_circuit", replaceWith: "phonos:redstone_chip" },
      {
        predicate: { output: "minecraft:shulker_box" },
        original: "minecraft:chest",
        replaceWith: ["minecraft:barrel", "minecraft:chest"]
      },
      {
        predicate: { mod: "createaddition" },
        original: "minecraft:redstone_torch",
        replaceWith: "create:electron_tube"
      },
      {
        predicate: { output: "create:mechanical_drill" },
        original: "minecraft:iron_ingot",
        replaceWith: "create:iron_sheet"
      },
      {
        predicate: { output: "create:mechanical_crafter" },
        original: "minecraft:crafting_table",
        replaceWith: "create:precision_mechanism"
      },
      {
        predicate: { output: "ad_astra:rocket_fin" },
        original: "ad_astra:steel_ingot",
        replaceWith: "create:sturdy_sheet"
      },
      {
        predicate: { output: "ad_astra:engine_frame" },
        original: "ad_astra:steel_plate",
        replaceWith: "create:sturdy_sheet"
      },
      {
        predicate: { output: "ad_astra:engine_fan" },
        original: "ad_astra:steel_plate",
        replaceWith: "create:sturdy_sheet"
      },
      {
        predicate: { output: "yttr:giant_cobblestone" },
        original: "minecraft:cobblestone",
        replaceWith: "compressor:triple_compressed_cobblestone"
      },
      {
        predicate: { output: "createaddition:accumulator" },
        original: "create:brass_casing",
        replaceWith: "techreborn:red_cell_battery"
      },
      {
        predicate: { output: "ad_astra:netherite_space_suit" },
        original: "ad_astra:oxygen_gear",
        replaceWith: "techreborn:lead_plate"
      },
      {
        predicate: { output: "ad_astra:space_helmet" },
        original: "ad_astra:steel_ingot",
        replaceWith: "create:sturdy_sheet"
      },
      { predicate: { output: "create:crushing_wheel" }, original: "#c:stone", replaceWith: "techreborn:silver_ingot" },
      {
        predicate: { output: "ad_astra:space_helmet" },
        original: "minecraft:orange_stained_glass_pane",
        replaceWith: "create:copper_diving_helmet"
      },
      {
        predicate: { output: "ad_astra:space_pants" },
        original: "ad_astra:steel_ingot",
        replaceWith: "create:sturdy_sheet"
      },
      {
        predicate: { output: "create:deployer" },
        original: "create:electron_tube",
        replaceWith: "create:polished_rose_quartz"
      },
      {
        predicate: { output: "create:content_observer" },
        original: "create:electron_tube",
        replaceWith: "minecraft:redstone_torch"
      },
      {
        predicate: { output: "create:content_observer" },
        original: "create:brass_casing",
        replaceWith: "create:railway_casing"
      },
      {
        predicate: { output: "ad_astra:space_suit" },
        original: "ad_astra:steel_ingot",
        replaceWith: "create:sturdy_sheet"
      },
      {
        predicate: { output: "ad_astra:space_suit" },
        original: "ad_astra:oxygen_gear",
        replaceWith: "create:copper_backtank"
      },
      {
        predicate: { output: "ad_astra:oxygen_tank" },
        original: "ad_astra:steel_plate",
        replaceWith: "createastral:bronze_sheet"
      },
      {
        predicate: { output: "ad_astra:oxygen_gear" },
        original: "ad_astra:steel_plate",
        replaceWith: "createastral:bronze_sheet"
      },
      {
        predicate: { output: "ad_astra:steel_tank" },
        original: "ad_astra:steel_plate",
        replaceWith: "ad_astra:iron_plate"
      },
      {
        predicate: { output: "ad_astra:rocket_nose_cone" },
        original: "ad_astra:steel_plate",
        replaceWith: "ad_astra:iron_plate"
      },
      {
        predicate: { output: "ad_astra:netherite_space_helmet" },
        original: "minecraft:netherite_helmet",
        replaceWith: "createastral:sturdy_helmet"
      },
      {
        predicate: { output: "ad_astra:netherite_space_suit" },
        original: "minecraft:netherite_chestplate",
        replaceWith: "createastral:sturdy_chestplate"
      },
      {
        predicate: { output: "ad_astra:netherite_space_pants" },
        original: "minecraft:netherite_leggings",
        replaceWith: "createastral:sturdy_leggings"
      },
      {
        predicate: { output: "ad_astra:netherite_space_boots" },
        original: "minecraft:netherite_leggings",
        replaceWith: "createastral:sturdy_boots"
      },
      {
        predicate: { output: "ad_astra:netherite_space_helmet" },
        original: "ad_astra:steel_plate",
        replaceWith: "ad_astra:ostrum_plate"
      },
      {
        predicate: { output: "ad_astra:netherite_space_suit" },
        original: "ad_astra:steel_plate",
        replaceWith: "ad_astra:ostrum_plate"
      },
      {
        predicate: { output: "ad_astra:netherite_space_suit" },
        original: "ad_astra:oxygen_tank",
        replaceWith: "createastral:shimmer_amplifier"
      },
      {
        predicate: { output: "ad_astra:netherite_space_pants" },
        original: "ad_astra:steel_plate",
        replaceWith: "ad_astra:ostrum_plate"
      },
      {
        predicate: { output: "ad_astra:netherite_space_boots" },
        original: "ad_astra:steel_plate",
        replaceWith: "ad_astra:ostrum_plate"
      },
      {
        predicate: { output: "ad_astra:netherite_space_helmet" },
        original: "ad_astra:steel_plate",
        replaceWith: "ad_astra:ostrum_block"
      },
      {
        predicate: { output: "ad_astra:netherite_space_suit" },
        original: "ad_astra:steel_plate",
        replaceWith: "ad_astra:ostrum_block"
      },
      {
        predicate: { output: "ad_astra:netherite_space_pants" },
        original: "ad_astra:steel_plate",
        replaceWith: "techreborn:lead_plate"
      },
      {
        predicate: { output: "ad_astra:netherite_space_boots" },
        original: "ad_astra:steel_plate",
        replaceWith: "techreborn:lead_plate"
      },
      {
        predicate: { output: "minecraft:shulker_box" },
        original: "techreborn:endstone_small_dust",
        replaceWith: "ae2:fluix_dust"
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:bronze_plate",
        replaceWith: "createastral:bronze_sheet"
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:bronze_ingot",
        replaceWith: "createastral:bronze_ingot"
      },
      { original: "techreborn:copper_plate", replaceWith: "create:copper_sheet" },
      { original: "techreborn:gold_plate", replaceWith: "create:golden_sheet" },
      { predicate: { mod: "techreborn" }, original: "techreborn:steel_plate", replaceWith: "ad_astra:steel_ingot" },
      { predicate: { mod: "techreborn" }, original: "minecraft:redstone", replaceWith: "ae2:certus_quartz_crystal" },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:refined_iron_plate",
        replaceWith: "techreborn:silver_plate"
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:refined_iron_ingot",
        replaceWith: "techreborn:silver_plate"
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:refined_iron_storage_block",
        replaceWith: "techreborn:silver_storage_block"
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:refined_iron_nugget",
        replaceWith: "techreborn:silver_nugget"
      },
      { predicate: { mod: "techreborn" }, original: "techreborn:aluminum_plate", replaceWith: "techreborn:lead_plate" },
      { predicate: { mod: "techreborn" }, original: "techreborn:aluminum_ingot", replaceWith: "techreborn:lead_plate" },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:aluminum_storage_block",
        replaceWith: "techreborn:lead_storage_block"
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:aluminum_nugget",
        replaceWith: "techreborn:lead_nugget"
      },
      { predicate: { mod: "techreborn" }, original: "techreborn:tungsten_plate", replaceWith: "ad_astra:steel_plate" },
      { predicate: { mod: "techreborn" }, original: "techreborn:tungsten_ingot", replaceWith: "ad_astra:steel_plate" },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:tungsten_storage_block",
        replaceWith: "ad_astra:steel_block"
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:tungsten_nugget",
        replaceWith: "ad_astra:steel_nugget"
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:tungstensteel_plate",
        replaceWith: "ad_astra:steel_plate"
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:tungstensteel_ingot",
        replaceWith: "ad_astra:steel_plate"
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:tungstensteel_storage_block",
        replaceWith: "ad_astra:steel_block"
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:tungstensteel_nugget",
        replaceWith: "ad_astra:steel_nugget"
      },
      { predicate: { mod: "techreborn" }, original: "techreborn:chrome_plate", replaceWith: "ad_astra:ostrum_plate" },
      { predicate: { mod: "techreborn" }, original: "techreborn:chrome_ingot", replaceWith: "ad_astra:ostrum_plate" },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:chrome_storage_block",
        replaceWith: "ad_astra:ostrum_block"
      },
      { predicate: { mod: "techreborn" }, original: "techreborn:chrome_nugget", replaceWith: "ad_astra:ostrum_nugget" },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:titanium_plate",
        replaceWith: "ad_astra:calorite_plate"
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:titanium_ingot",
        replaceWith: "ad_astra:calorite_plate"
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:titanium_storage_block",
        replaceWith: "ad_astra:calorite_block"
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:titanium_nugget",
        replaceWith: "ad_astra:calorite_nugget"
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:platinum_plate",
        replaceWith: "ad_astra:calorite_plate"
      },
      {
        predicate: { output: "techreborn:implosion_compressor" },
        original: "techreborn:advanced_alloy_ingot",
        replaceWith: "techreborn:advanced_alloy_plate"
      },
      { predicate: { mod: "techreborn" }, original: "techreborn:nickel_ingot", replaceWith: "ad_astra:desh_plate" },
      { predicate: { mod: "techreborn" }, original: "techreborn:nickel_plate", replaceWith: "ad_astra:desh_plate" },
      { predicate: { mod: "techreborn" }, original: "techreborn:brass_plate", replaceWith: "create:brass_sheet" },
      { predicate: { mod: "techreborn" }, original: "techreborn:brass_ingot", replaceWith: "create:brass_ingot" },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:brass_storage_block",
        replaceWith: "create:brass_block"
      },
      { predicate: { mod: "techreborn" }, original: "techreborn:brass_nugget", replaceWith: "create:brass_nugget" },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:electronic_circuit",
        replaceWith: "create:integrated_circuit"
      },
      { predicate: { mod: "techreborn" }, original: "minecraft:lapis_lazuli", replaceWith: "techreborn:lead_plate" },
      {
        predicate: { mod: "techreborn", output: "techreborn:red_cell_battery" },
        original: "techreborn:lead_ingot",
        replaceWith: "techreborn:silver_plate"
      },
      { predicate: { mod: "techreborn" }, original: "techreborn:zinc_plate", replaceWith: "createaddition:zinc_sheet" },
      { original: "createdeco:zinc_sheet", replaceWith: "createaddition:zinc_sheet" },
      { predicate: { mod: "techreborn" }, original: "techreborn:zinc_ingot", replaceWith: "create:zinc_ingot" },
      { predicate: { mod: "techreborn" }, original: "techreborn:zinc_nugget", replaceWith: "create:zinc_nugget" },
      { original: "#c:ingots/steel", replaceWith: "ad_astra:steel_ingot" },
      { predicate: { mod: "ae2" }, original: "minecraft:iron_ingot", replaceWith: "techreborn:silver_plate" },
      { predicate: { mod: "techreborn" }, original: "minecraft:cobblestone", replaceWith: "create:sturdy_sheet" },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:data_storage_chip",
        replaceWith: "createastral:subatomic_ingot"
      },
      { predicate: { mod: "techreborn" }, original: "minecraft:stone", replaceWith: "create:sturdy_sheet" },
      { predicate: { mod: "techreborn" }, original: "minecraft:cobblestone", replaceWith: "create:sturdy_sheet" },
      { predicate: { mod: "techreborn" }, original: "minecraft:flint", replaceWith: "create:sturdy_sheet" },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:magnalium_plate",
        replaceWith: "techreborn:silver_plate"
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:peridot_plate",
        replaceWith: "createastral:olivine_sheet"
      },
      { predicate: { mod: "ae2" }, original: "minecraft:copper_ingot", replaceWith: "techreborn:silver_plate" },
      { predicate: { mod: "ae2" }, original: "minecraft:redstone", replaceWith: "ae2:fluix_dust" },
      { predicate: { mod: "ae2" }, original: "ae2:fluix_crystal", replaceWith: "ae2:fluix_dust" },
      { original: "techreborn:advanced_circuit", replaceWith: "techreborn:electronic_circuit" },
      {
        predicate: { output: "gearreborn:hazmat_chestpiece" },
        original: "techreborn:electronic_circuit",
        replaceWith: "create:integrated_circuit"
      },
      {
        predicate: { output: "gearreborn:hazmat_helmet" },
        original: "techreborn:reinforced_glass",
        replaceWith: "#c:glass"
      },
      {
        predicate: { output: "techreborn:industrial_sawmill" },
        original: "techreborn:silver_plate",
        replaceWith: "techreborn:lead_plate"
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:cupronickel_heating_coil",
        replaceWith: "createastral:copper_heating_coil"
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:nichrome_heating_coil",
        // @ts-expect-error No such item yet?
        replaceWith: "createastral:ender_heating_coil"
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:energy_crystal",
        replaceWith: "techreborn:red_cell_battery"
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:lapotron_crystal",
        replaceWith: "techreborn:lithium_ion_battery"
      },
      {
        predicate: { mod: "techreborn" },
        original: "techreborn:advanced_alloy_plate",
        replaceWith: "techreborn:lead_plate"
      },
      {
        predicate: { mod: "techreborn", output: "techreborn:advanced_drill" },
        original: "ad_astra:calorite_plate",
        replaceWith: "techreborn:lead_plate"
      },
      {
        predicate: { mod: "techreborn", output: "techreborn:advanced_chainsaw" },
        original: "ad_astra:calorite_plate",
        replaceWith: "techreborn:lead_plate"
      },
      {
        predicate: { mod: "techreborn", output: "techreborn:advanced_jackhammer" },
        original: "ad_astra:calorite_plate",
        replaceWith: "techreborn:lead_plate"
      },
      { original: "techreborn:energy_flow_chip", replaceWith: "techreborn:data_storage_chip" },
      { predicate: { mod: "techreborn" }, original: "techreborn:iridium_ingot", replaceWith: "yttr:yttrium_ingot" },
      { predicate: { mod: "techreborn" }, original: "techreborn:iridium_plate", replaceWith: "yttr:yttrium_ingot" },
      {
        predicate: { output: "ad_astra:cryo_freezer" },
        original: "ad_astra:ostrum_tank",
        replaceWith: "techreborn:lithium_ion_battery"
      },
      { original: "techreborn:iridium_alloy_plate", replaceWith: "yttr:yttrium_ingot" },
      { predicate: { mod: "dustrial_decor" }, original: "minecraft:iron_ingot", replaceWith: "create:iron_sheet" },
      { predicate: { mod: "computercraft" }, original: "minecraft:iron_ingot", replaceWith: "create:iron_sheet" },
      {
        predicate: [
          { id: "ae2:network/cells/item_cell_housing" },
          { id: "ae2:network/cells/view_cell" },
          { id: "ae2:network/cells/item_storage_cell_1k" },
          { id: "ae2:network/cells/item_storage_cell_4k" },
          { id: "ae2:network/cells/item_storage_cell_16k" },
          { id: "ae2:network/cells/item_storage_cell_64k" },
          { id: "ae2:network/cells/item_storage_cell_256k" },
          { id: "ae2:network/cells/spatial_storage_cell_2_cubed" },
          { id: "ae2:network/cells/spatial_storage_cell_16_cubed" },
          { id: "ae2:network/cells/spatial_storage_cell_128_cubed" }
        ],
        original: "techreborn:silver_plate",
        replaceWith: "create:andesite_casing"
      },
      {
        predicate: [
          { id: "ae2:network/cells/fluid_cell_housing" },
          { id: "ae2:network/cells/fluid_storage_cell_1k" },
          { id: "ae2:network/cells/fluid_storage_cell_4k" },
          { id: "ae2:network/cells/fluid_storage_cell_16k" },
          { id: "ae2:network/cells/fluid_storage_cell_64k" },
          { id: "ae2:network/cells/fluid_storage_cell_256k" }
        ],
        original: "techreborn:silver_plate",
        replaceWith: "create:copper_casing"
      },
      {
        predicate: { output: "techreborn:industrial_grinder" },
        original: "techreborn:electronic_circuit",
        replaceWith: "ad_astra:calorite_plate"
      },
      {
        predicate: { output: "techreborn:digital_display" },
        original: "minecraft:black_dye",
        replaceWith: "techreborn:machine_parts"
      },
      {
        predicate: { output: "techreborn:digital_display" },
        original: "minecraft:glass_pane",
        replaceWith: "#computercraft:monitor"
      },
      { original: "techreborn:lapotronic_orb", replaceWith: "ad_astra:calorite_plate" },
      {
        predicate: { mod: "quarrymod" },
        original: "techreborn:iridium_ingot",
        replaceWith: "passivepiglins:piglin_coin"
      },
      {
        predicate: { mod: "quarrymod" },
        original: "techreborn:advanced_alloy_plate",
        replaceWith: "passivepiglins:piglin_coin"
      },
      { predicate: { mod: "quarrymod" }, original: "techreborn:peridot_plate", replaceWith: "ad_astra:steel_plate" },
      { predicate: { mod: "quarrymod" }, original: "techreborn:silicon_plate", replaceWith: "techreborn:carbon_mesh" },
      { predicate: { mod: "quarrymod" }, original: "techreborn:lapis_plate", replaceWith: "create:lapis_sheet" },
      {
        predicate: { mod: "quarrymod" },
        original: "techreborn:peridot_storage_block",
        replaceWith: "createastral:olivine_sheet"
      },
      { predicate: { mod: "quarrymod" }, original: "techreborn:titanium_plate", replaceWith: "ad_astra:steel_plate" },
      {
        predicate: { mod: "quarrymod" },
        original: "techreborn:tungstensteel_plate",
        replaceWith: "create:shadow_steel"
      },
      { predicate: { mod: "phonos" }, original: "minecraft:iron_ingot", replaceWith: "techreborn:tin_ingot" },
      { predicate: { mod: "farmersdelight" }, original: "minecraft:iron_ingot", replaceWith: "techreborn:tin_ingot" },
      {
        predicate: { output: "farmersdelight:iron_knife" },
        original: "minecraft:iron_ingot",
        replaceWith: "techreborn:tin_ingot"
      },
      { predicate: { mod: "drinkbeer" }, original: "minecraft:iron_ingot", replaceWith: "techreborn:tin_ingot" },
      { predicate: { mod: "computercraft" }, original: "minecraft:gold_ingot", replaceWith: "create:brass_sheet" },
      { predicate: { mod: "cccbridge" }, original: "create:golden_sheet", replaceWith: "create:brass_sheet" },
      { predicate: { mod: "computercraft" }, original: "#c:stones", replaceWith: "create:andesite_alloy" },
      {
        predicate: { mod: "computercraft" },
        original: "minecraft:redstone",
        replaceWith: "create:polished_rose_quartz"
      },
      { predicate: { mod: "computercraft" }, original: "minecraft:iron_ingot", replaceWith: "create:iron_sheet" },
      { predicate: { mod: "computercraft" }, original: "minecraft:golden_apple", replaceWith: "create:display_board" },
      {
        predicate: { output: "computercraft:computer_normal" },
        original: "create:electron_tube",
        replaceWith: "create:polished_rose_quartz"
      },
      {
        predicate: { output: "computercraft:turtle_normal" },
        original: "create:electron_tube",
        replaceWith: "create:polished_rose_quartz"
      },
      {
        predicate: { type: "create:mechanical_crafting", mod: "createaddition" },
        original: "create:andesite_alloy",
        replaceWith: "techreborn:red_cell_battery"
      },
      {
        predicate: { type: "create:mechanical_crafting", mod: "createaddition" },
        original: "createaddition:iron_rod",
        replaceWith: "create:integrated_circuit"
      },
      {
        predicate: { mod: "immersive_aircraft", output: "immersive_aircraft:steel_boiler" },
        original: "minecraft:iron_ingot",
        replaceWith: "ad_astra:steel_plate"
      },
      {
        predicate: { mod: "immersive_aircraft" },
        original: "minecraft:copper_ingot",
        replaceWith: "create:fluid_pipe"
      },
      {
        predicate: { mod: "immersive_aircraft" },
        original: "minecraft:iron_ingot",
        replaceWith: "minecraft:iron_block"
      },
      {
        predicate: { mod: "createendertransmission" },
        original: "minecraft:obsidian",
        replaceWith: "create:shadow_steel"
      },
      {
        predicate: { mod: "createendertransmission" },
        original: "minecraft:ender_eye",
        replaceWith: "createastral:subatomic_ingot"
      },
      {
        predicate: { mod: "createendertransmission" },
        original: "minecraft:ender_pearl",
        replaceWith: "minecraft:ender_eye"
      },
      { original: "techreborn:carbon_plate", replaceWith: "techreborn:carbon_mesh" },
      { original: "techreborn:lazurite_plate", replaceWith: "create:lapis_sheet" },
      { original: "ae2:sky_stone_block", replaceWith: "ad_astra:sky_stone" }
    ];
    replacements.forEach((replacement) => {
      if (replacement.predicate) {
        event.replaceInput(replacement.predicate, replacement.original, replacement.replaceWith);
      } else {
        event.replaceInput(replacement.original, replacement.replaceWith);
      }
    });
    const cells = [
      "water_coolant_cell_60k",
      // may want to remove this from modpack -- no uses
      "water_coolant_cell_30k",
      // and this
      "water_coolant_cell_10k",
      "nak_coolant_cell_60k",
      "nak_coolant_cell_360k",
      // and this
      "nak_coolant_cell_180k",
      // and this
      "helium_coolant_cell_60k",
      "helium_coolant_cell_360k",
      // and this
      "helium_coolant_cell_180k",
      "cell"
    ];
    cells.forEach((cell) => {
      event.replaceInput(
        { type: "minecraft:crafting_shaped", output: `techreborn:${cell}` },
        "techreborn:tin_ingot",
        "techreborn:tin_plate"
      );
      event.replaceInput(
        { type: "minecraft:crafting_shaped", output: `techreborn:${cell}` },
        "minecraft:copper_ingot",
        "create:copper_sheet"
      );
    });
    event.replaceInput({ type: "techreborn:solid_canning_machine" }, "techreborn:tin_ingot", "techreborn:tin_plate");
    event.replaceOutput("techreborn:electronic_circuit", "create:integrated_circuit");
    event.replaceInput(
      { id: "techreborn:crafting_table/machine/resin_basin" },
      "techreborn:drain",
      "create:item_drain"
    );
    for (let catwalkMaterial of CATWALK_MATERIALS) {
      event.remove({
        output: `createdeco:${catwalkMaterial.material}_catwalk`
      });
      event.shaped(Item.of(`createdeco:${catwalkMaterial.material}_catwalk`, 8), [" A ", "ABA", " A "], {
        A: catwalkMaterial.sheet,
        B: catwalkMaterial.material == "iron" ? "minecraft:iron_bars" : `createdeco:${catwalkMaterial.material}_bars`
      });
    }
  });
}
function castingBasinRecipes() {
  onEvent("recipes", (event) => {
    const castingBasinRecipes2 = [
      {
        fluidInput: { fluid: "kubejs:compound_mixture", amount: INGOT * 9 },
        result: "createastral:andesite_alloy_block",
        coolingTime: 180
      },
      {
        fluidInput: { fluid: "kubejs:blast-resistant_cement", amount: BUCKET },
        result: "createastral:blast-resistant_concrete",
        coolingTime: 400
      },
      {
        fluidInput: { fluid: "tconstruct:molten_quartz", amount: GEM * 3 },
        result: "minecraft:granite",
        coolingTime: 140,
        cast: { item: "minecraft:diorite", consumed: true }
      },
      {
        fluidInput: { fluid: "minecraft:lava", amount: INGOT },
        result: "minecraft:deepslate",
        coolingTime: 140,
        cast: { item: "minecraft:cobblestone", consumed: true }
      },
      {
        fluidInput: { fluid: "yttr:void", amount: BUCKET },
        result: "yttr:raw_gadolinite_block",
        coolingTime: 140,
        cast: { item: "ad_astra:raw_calorite_block", consumed: true }
      },
      {
        fluidInput: { fluid: "tconstruct:molten_cobalt", amount: BUCKET },
        result: "extended_drawers:controller",
        coolingTime: 194,
        // same as cooling cobalt block
        cast: { item: "extended_drawers:shadow_drawer", consumed: true }
      },
      {
        fluidInput: { fluid: "tconstruct:liquid_soul", amount: BUCKET },
        result: "minecraft:diorite",
        coolingTime: 80,
        cast: { item: "minecraft:basalt", consumed: true }
      },
      {
        fluidInput: { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT * 9 },
        result: "create:experience_block",
        coolingTime: 180
      },
      {
        fluidInput: { fluid: "tconstruct:ender_slime", amount: BUCKET },
        result: "tconstruct:ender_slime_vine",
        coolingTime: 80,
        cast: { item: "minecraft:vine", consumed: true }
      },
      {
        fluidInput: { fluid: "tconstruct:sky_slime", amount: BUCKET },
        result: "tconstruct:sky_slime_vine",
        coolingTime: 80,
        cast: { item: "minecraft:vine", consumed: true }
      },
      {
        fluidInput: { fluid: "kubejs:supercooled_water", amount: BUCKET },
        result: "minecraft:ice",
        coolingTime: 10
      },
      {
        fluidInput: { fluid: "kubejs:blast-resistant_cement", amount: BUCKET / 2 },
        result: "createastral:rocket_casing",
        coolingTime: 500,
        cast: { item: "kubejs:fire_resistant_fragile_sheet_block", consumed: true }
      },
      {
        fluidInput: { fluid: "kubejs:shimmer", amount: BUCKET * 4 },
        result: "createastral:ultramatter",
        coolingTime: 40,
        cast: { item: "yttr:compressed_ultrapure_carbon_block", consumed: true }
      },
      {
        fluidInput: { fluid: "tconstruct:molten_tin", amount: BUCKET },
        result: "extended_drawers:shadow_drawer",
        coolingTime: 117,
        // same as cooling tin block
        // @ts-expect-error Missing tag?
        cast: { tag: "extended_drawers:drawer_containers", consumed: true }
      },
      {
        fluidInput: { fluid: "kubejs:shimmer", amount: BUCKET * 2 },
        result: "ae2:controller",
        coolingTime: 400,
        cast: { item: "ae2:energy_cell", consumed: true }
      },
      {
        fluidInput: { fluid: "tconstruct:mushroom_stew", amount: BUCKET * 2 / 3 },
        result: "minecraft:mushroom_stem",
        coolingTime: 25
      },
      {
        fluidInput: { fluid: "kubejs:shimmer", amount: BUCKET },
        result: "createastral:shimmering_stone",
        coolingTime: 250,
        cast: { item: "ad_astra:moon_stone", consumed: true }
      },
      {
        fluidInput: { fluid: "tconstruct:mushroom_stew", amount: INGOT * 1.5 },
        result: "minecraft:shroomlight",
        coolingTime: 100,
        cast: { item: "minecraft:glowstone", consumed: true }
      },
      {
        fluidInput: { fluid: "tconstruct:molten_clay", amount: BUCKET },
        result: "minecraft:clay",
        coolingTime: 144
      },
      {
        fluidInput: { fluid: "kubejs:molten_calorite", amount: BUCKET },
        result: "ad_astra:calorite_block",
        coolingTime: 194
      },
      {
        fluidInput: { fluid: "kubejs:molten_desh", amount: BUCKET },
        result: "ad_astra:desh_block",
        coolingTime: 141
      },
      {
        fluidInput: { fluid: "kubejs:molten_ostrum", amount: BUCKET },
        result: "ad_astra:ostrum_block",
        coolingTime: 194
      },
      {
        fluidInput: { fluid: "tconstruct:molten_steel", amount: BUCKET },
        result: "ad_astra:steel_block",
        coolingTime: 194
      },
      {
        fluidInput: { fluid: "tconstruct:magma", amount: BUCKET / 2 },
        result: "minecraft:magma_block",
        coolingTime: 90,
        cast: { item: "minecraft:polished_basalt", consumed: true }
      },
      {
        fluidInput: { fluid: "tconstruct:magma", amount: BUCKET / 2 },
        result: "minecraft:stone",
        coolingTime: 90,
        cast: { item: "minecraft:basalt", consumed: true }
      },
      {
        fluidInput: { fluid: "tconstruct:magma", amount: BUCKET / 2 },
        result: "minecraft:stone",
        coolingTime: 90,
        cast: { item: "minecraft:gravel", consumed: true }
      },
      {
        fluidInput: { fluid: "tconstruct:seared_stone", amount: BUCKET / 2 },
        result: "tconstruct:seared_cobble_wall",
        coolingTime: 102,
        cast: { item: "minecraft:cobblestone_wall", consumed: true }
      },
      {
        fluidInput: { fluid: "tconstruct:seared_stone", amount: BUCKET / 4 },
        result: "tconstruct:seared_stone_slab",
        coolingTime: 72,
        cast: { item: "minecraft:stone_slab", consumed: true }
      },
      {
        fluidInput: { fluid: "tconstruct:seared_stone", amount: BUCKET / 4 },
        result: "tconstruct:seared_stone_stairs",
        coolingTime: 102,
        cast: { item: "minecraft:stone_stairs", consumed: true }
      },
      {
        fluidInput: { fluid: "tconstruct:seared_stone", amount: INGOT * 8 },
        result: "tconstruct:seared_fancy_bricks",
        coolingTime: 102,
        cast: { item: "minecraft:chiseled_stone_bricks", consumed: true }
      },
      {
        fluidInput: { fluid: "tconstruct:seared_stone", amount: INGOT * 8 },
        result: "tconstruct:seared_cracked_bricks",
        coolingTime: 102,
        cast: { item: "minecraft:cracked_stone_bricks", consumed: true }
      },
      {
        fluidInput: { fluid: "tconstruct:seared_stone", amount: INGOT * 8 },
        result: "tconstruct:seared_paver",
        coolingTime: 102,
        cast: { item: "minecraft:smooth_stone", consumed: true }
      },
      {
        fluidInput: { fluid: "tconstruct:ichor", amount: SLIMEBALL * 5 },
        result: "tconstruct:ichor_slime",
        coolingTime: 103,
        cast: { item: "tconstruct:ichor_congealed_slime", consumed: true }
      },
      {
        fluidInput: { fluid: "tconstruct:ichor", amount: BUCKET },
        result: "tconstruct:ichor_congealed_slime",
        coolingTime: 92
      }
    ];
    castingBasinRecipes2.forEach((recipe) => {
      let basinRecipe = {
        type: "tconstruct:casting_basin",
        fluid: {
          name: recipe.fluidInput.fluid,
          amount: recipe.fluidInput.amount
        },
        result: recipe.result,
        cooling_time: recipe.coolingTime
      };
      if (recipe.cast) {
        if ("item" in recipe.cast) basinRecipe.cast = { item: recipe.cast.item };
        else if ("tag" in recipe.cast) basinRecipe.cast = { tag: recipe.cast.tag };
        if (recipe.cast.consumed) basinRecipe.cast_consumed = recipe.cast.consumed;
      }
      event.custom(basinRecipe);
    });
  });
}
function castingTableRecipes() {
  onEvent("recipes", (event) => {
    const castingTableRecipes2 = [
      {
        fluidInput: { fluid: "kubejs:red_paste", amount: 100 * mB },
        result: "minecraft:red_dye",
        coolingTime: 100
      },
      {
        fluidInput: { fluid: "kubejs:shimmer", amount: BUCKET / 20 },
        result: "ae2:fluix_dust",
        coolingTime: 40,
        cast: { item: "ae2:certus_quartz_dust", consumed: true }
      },
      {
        fluidInput: { fluid: "tconstruct:molten_bronze", amount: 4 * NUGGET },
        result: "create:cogwheel",
        coolingTime: 100,
        cast: { item: "tconstruct:coin_cast", consumed: false }
      },
      {
        fluidInput: { fluid: "tconstruct:molten_bronze", amount: 12 * NUGGET },
        result: "create:large_cogwheel",
        coolingTime: 100,
        cast: { item: "tconstruct:gear_cast", consumed: false }
      },
      {
        fluidInput: { fluid: "tconstruct:molten_gold", amount: 12 * NUGGET },
        result: "tconstruct:gear_cast",
        coolingTime: 100,
        cast: { item: "create:large_cogwheel", consumed: true }
      },
      {
        fluidInput: { fluid: "tconstruct:molten_gold", amount: INGOT * 4 },
        result: "createastral:golden_bowl",
        coolingTime: 100,
        cast: { item: "tconstruct:round_plate_cast", consumed: false }
      },
      {
        fluidInput: { fluid: "kubejs:liquid_xp_nuggies", amount: INGOT },
        result: "createastral:experience_ingot",
        coolingTime: 100,
        cast: { item: "tconstruct:ingot_cast", consumed: false }
      },
      {
        fluidInput: { fluid: "kubejs:liquid_xp_nuggies", amount: NUGGET },
        result: "create:experience_nugget",
        coolingTime: 10,
        cast: { item: "tconstruct:nugget_cast", consumed: false }
      },
      {
        fluidInput: { fluid: "kubejs:compound_mixture", amount: 11 * mB },
        result: "create:shaft",
        coolingTime: 10,
        cast: { item: "tconstruct:rod_cast", consumed: false }
      },
      {
        fluidInput: { fluid: "tconstruct:molten_uranium", amount: 500 * mB },
        result: "techreborn:data_storage_chip",
        coolingTime: 300,
        cast: { item: "tconstruct:rod_cast", consumed: false }
      },
      {
        fluidInput: { fluid: "kubejs:liquid_xp_nuggies", amount: 8 * NUGGET },
        result: "minecraft:experience_bottle",
        coolingTime: 30,
        cast: { item: "minecraft:glass_bottle", consumed: true }
      },
      {
        fluidInput: { fluid: "tconstruct:molten_gold", amount: INGOT },
        result: "createastral:gold_casted_rocket_fin",
        coolingTime: 30,
        cast: { item: "createastral:fragile_rocket_fin", consumed: true }
      },
      {
        fluidInput: { fluid: "tconstruct:molten_steel", amount: INGOT },
        result: "astraladditions:steel_ring",
        coolingTime: 100,
        cast: { item: "astraladditions:ring_gold_cast", consumed: false }
      },
      {
        fluidInput: { fluid: "kubejs:shimmer", amount: NUGGET * 3 },
        result: "astraladditions:shimmer_lily",
        coolingTime: 20,
        cast: { item: "minecraft:lily_of_the_valley", consumed: true }
      },
      {
        fluidInput: { fluid: "tconstruct:seared_stone", amount: NUGGET * 3 },
        result: "astralfoods:seared_potato",
        coolingTime: 20,
        cast: { item: "minecraft:potato", consumed: true }
      },
      {
        fluidInput: { fluid: "kubejs:metabolic_broth", amount: BUCKET / 4 },
        result: "yttr:delicace",
        coolingTime: 50,
        cast: { item: "tconstruct:gem_cast", consumed: false }
      },
      {
        fluidInput: { fluid: "kubejs:molten_ostrum", amount: NUGGET * 8 },
        result: "createbigcannons:nethersteel_screw_lock",
        coolingTime: 60,
        cast: { item: "astraladditions:ring_gold_cast", consumed: false }
      },
      {
        fluidInput: { fluid: "kubejs:shimmer", amount: INGOT / 2 },
        result: "ae2:fluix_dust",
        coolingTime: 40,
        cast: { item: "minecraft:redstone", consumed: true }
      },
      {
        fluidInput: { fluid: "tconstruct:molten_steel", amount: NUGGET * 8 },
        result: "createbigcannons:steel_screw_lock",
        coolingTime: 60,
        cast: { item: "astraladditions:ring_gold_cast", consumed: false }
      },
      {
        fluidInput: { fluid: "kubejs:compound_mixture", amount: INGOT },
        result: "create:andesite_alloy",
        coolingTime: 54,
        cast: { tag: "tconstruct:casts/multi_use/ingot", consumed: false }
      },
      {
        fluidInput: { fluid: "kubejs:compound_mixture", amount: INGOT },
        result: "create:andesite_alloy",
        coolingTime: 54,
        cast: { tag: "tconstruct:casts/single_use/ingot", consumed: true }
      },
      {
        fluidInput: { fluid: "tconstruct:molten_bronze", amount: INGOT / 2 },
        result: "createastral:bronze_sheet",
        coolingTime: 57,
        cast: { tag: "tconstruct:casts/multi_use/plate", consumed: false }
      },
      {
        fluidInput: { fluid: "kubejs:molten_calorite", amount: INGOT },
        result: "ad_astra:calorite_ingot",
        coolingTime: 65,
        cast: { tag: "tconstruct:casts/multi_use/ingot", consumed: false }
      },
      {
        fluidInput: { fluid: "kubejs:molten_calorite", amount: INGOT },
        result: "ad_astra:calorite_ingot",
        coolingTime: 65,
        cast: { tag: "tconstruct:casts/single_use/ingot", consumed: true }
      },
      {
        fluidInput: { fluid: "kubejs:molten_calorite", amount: NUGGET },
        result: "ad_astra:calorite_nugget",
        coolingTime: 22,
        cast: { tag: "tconstruct:casts/multi_use/nugget", consumed: false }
      },
      {
        fluidInput: { fluid: "kubejs:molten_calorite", amount: NUGGET },
        result: "ad_astra:calorite_nugget",
        coolingTime: 22,
        cast: { tag: "tconstruct:casts/single_use/nugget", consumed: true }
      },
      {
        fluidInput: { fluid: "kubejs:molten_calorite", amount: INGOT },
        result: "ad_astra:calorite_plate",
        coolingTime: 65,
        cast: { tag: "tconstruct:casts/multi_use/plate", consumed: false }
      },
      {
        fluidInput: { fluid: "kubejs:molten_calorite", amount: INGOT },
        result: "ad_astra:calorite_plate",
        coolingTime: 65,
        cast: { tag: "tconstruct:casts/single_use/plate", consumed: true }
      },
      {
        fluidInput: { fluid: "kubejs:molten_desh", amount: INGOT },
        result: "ad_astra:desh_ingot",
        coolingTime: 47,
        cast: { tag: "tconstruct:casts/multi_use/ingot", consumed: false }
      },
      {
        fluidInput: { fluid: "kubejs:molten_desh", amount: INGOT },
        result: "ad_astra:desh_ingot",
        coolingTime: 47,
        cast: { tag: "tconstruct:casts/single_use/ingot", consumed: true }
      },
      {
        fluidInput: { fluid: "kubejs:molten_desh", amount: NUGGET },
        result: "ad_astra:desh_nugget",
        coolingTime: 16,
        cast: { tag: "tconstruct:casts/multi_use/nugget", consumed: false }
      },
      {
        fluidInput: { fluid: "kubejs:molten_desh", amount: NUGGET },
        result: "ad_astra:desh_nugget",
        coolingTime: 16,
        cast: { tag: "tconstruct:casts/single_use/nugget", consumed: true }
      },
      {
        fluidInput: { fluid: "kubejs:molten_ostrum", amount: INGOT },
        result: "ad_astra:ostrum_ingot",
        coolingTime: 65,
        cast: { tag: "tconstruct:casts/multi_use/ingot", consumed: false }
      },
      {
        fluidInput: { fluid: "kubejs:molten_ostrum", amount: INGOT },
        result: "ad_astra:ostrum_ingot",
        coolingTime: 65,
        cast: { tag: "tconstruct:casts/single_use/ingot", consumed: true }
      },
      {
        fluidInput: { fluid: "kubejs:molten_ostrum", amount: NUGGET },
        result: "ad_astra:ostrum_nugget",
        coolingTime: 22,
        cast: { tag: "tconstruct:casts/multi_use/nugget", consumed: false }
      },
      {
        fluidInput: { fluid: "kubejs:molten_ostrum", amount: NUGGET },
        result: "ad_astra:ostrum_nugget",
        coolingTime: 22,
        cast: { tag: "tconstruct:casts/single_use/nugget", consumed: true }
      },
      {
        fluidInput: { fluid: "kubejs:molten_ostrum", amount: INGOT },
        result: "ad_astra:ostrum_plate",
        coolingTime: 65,
        cast: { tag: "tconstruct:casts/multi_use/plate", consumed: false }
      },
      {
        fluidInput: { fluid: "kubejs:molten_ostrum", amount: INGOT },
        result: "ad_astra:ostrum_plate",
        coolingTime: 65,
        cast: { tag: "tconstruct:casts/single_use/plate", consumed: true }
      },
      {
        fluidInput: { fluid: "kubejs:molten_radiance", amount: INGOT },
        result: "create:refined_radiance",
        coolingTime: 200,
        cast: { tag: "tconstruct:casts/multi_use/ingot", consumed: false }
      },
      {
        fluidInput: { fluid: "kubejs:molten_radiance", amount: INGOT },
        result: "create:refined_radiance",
        coolingTime: 200,
        cast: { tag: "tconstruct:casts/single_use/ingot", consumed: true }
      },
      {
        fluidInput: { fluid: "kubejs:molten_shadowsteel", amount: INGOT },
        result: "create:shadow_steel",
        coolingTime: 47,
        cast: { item: "ad_astra:steel_ingot", consumed: true }
      },
      {
        fluidInput: { fluid: "tconstruct:molten_steel", amount: INGOT },
        result: "ad_astra:steel_ingot",
        coolingTime: 65,
        cast: { tag: "tconstruct:casts/multi_use/ingot", consumed: false }
      },
      {
        fluidInput: { fluid: "tconstruct:molten_steel", amount: INGOT },
        result: "ad_astra:steel_ingot",
        coolingTime: 65,
        cast: { tag: "tconstruct:casts/single_use/ingot", consumed: true }
      },
      {
        fluidInput: { fluid: "tconstruct:molten_steel", amount: NUGGET },
        result: "ad_astra:steel_nugget",
        coolingTime: 22,
        cast: { tag: "tconstruct:casts/multi_use/nugget", consumed: false }
      },
      {
        fluidInput: { fluid: "tconstruct:molten_steel", amount: NUGGET },
        result: "ad_astra:steel_nugget",
        coolingTime: 22,
        cast: { tag: "tconstruct:casts/single_use/nugget", consumed: true }
      },
      {
        fluidInput: { fluid: "tconstruct:molten_steel", amount: INGOT },
        result: "ad_astra:steel_plate",
        coolingTime: 65,
        cast: { tag: "tconstruct:casts/multi_use/plate", consumed: false }
      },
      {
        fluidInput: { fluid: "tconstruct:molten_steel", amount: INGOT },
        result: "ad_astra:steel_plate",
        coolingTime: 65,
        cast: { tag: "tconstruct:casts/single_use/plate", consumed: true }
      },
      {
        fluidInput: { fluid: "tconstruct:magma", amount: BUCKET / 8 },
        result: "minecraft:brick",
        coolingTime: 45,
        cast: { item: "minecraft:flint", consumed: true }
      },
      {
        fluidInput: { fluid: "tconstruct:molten_clay", amount: BUCKET / 8 },
        result: "minecraft:brick",
        coolingTime: 51,
        cast: { item: "minecraft:stone_button", consumed: true }
      },
      {
        fluidInput: { fluid: "tconstruct:ichor", amount: SLIMEBALL },
        result: "tconstruct:ichor_slime_ball",
        coolingTime: 46
      },
      {
        fluidInput: { fluid: "tconstruct:molten_gold", amount: INGOT },
        result: "tconstruct:gold_bars",
        coolingTime: 60
      }
    ];
    castingTableRecipes2.forEach((recipe) => {
      let tableRecipe = {
        type: "tconstruct:casting_table",
        fluid: {
          name: recipe.fluidInput.fluid,
          amount: recipe.fluidInput.amount
        },
        result: recipe.result,
        cooling_time: recipe.coolingTime
      };
      if (recipe.cast) {
        if ("item" in recipe.cast) tableRecipe.cast = { item: recipe.cast.item };
        else if ("tag" in recipe.cast) tableRecipe.cast = { tag: recipe.cast.tag };
        if (recipe.cast.consumed) tableRecipe.cast_consumed = recipe.cast.consumed;
      }
      event.custom(tableRecipe);
    });
  });
}
function entityMeltingRecipes() {
  onEvent("recipes", (event) => {
    const BLAZING_BLOOD_MADIC_AMOUNT = 1620;
    const entityMeltingRecipes2 = [
      {
        entity: "minecraft:blaze",
        result: { fluid: "tconstruct:blazing_blood", amount: BLAZING_BLOOD_MADIC_AMOUNT },
        damage: 2
      }
    ];
    entityMeltingRecipes2.forEach((recipe) => {
      event.custom({
        type: "tconstruct:entity_melting",
        entity: {
          type: recipe.entity
        },
        result: {
          fluid: recipe.result.fluid,
          amount: recipe.result.amount
        },
        damage: recipe.damage
      });
    });
  });
}
function meltingRecipes() {
  onEvent("recipes", (event) => {
    const meltingRecipes2 = [
      {
        fluidInput: { fluid: "tconstruct:blazing_blood", amount: BUCKET },
        input: { item: "create:blaze_burner" },
        temp: 32,
        time: 100,
        byproducts: [{ fluid: "tconstruct:molten_iron", amount: INGOT * 4 }]
      },
      {
        fluidInput: { fluid: "tconstruct:blood", amount: INGOT },
        input: { item: "tconstruct:blaze_head" },
        temp: 1e3,
        time: 400
      },
      {
        fluidInput: { fluid: "tconstruct:blood", amount: GEM },
        input: { item: "minecraft:cod" },
        temp: 32,
        time: 14
      },
      {
        fluidInput: { fluid: "tconstruct:blood", amount: 40 * mB },
        input: { item: "farmersdelight:cod_slice" },
        temp: 32,
        time: 7
      },
      {
        fluidInput: { fluid: "tconstruct:blood", amount: GEM },
        input: { item: "minecraft:salmon" },
        temp: 32,
        time: 14
      },
      {
        fluidInput: { fluid: "tconstruct:blood", amount: 40 * mB },
        input: { item: "farmersdelight:salmon_slice" },
        temp: 32,
        time: 7
      },
      {
        fluidInput: { fluid: "tconstruct:blood", amount: GEM },
        input: { item: "minecraft:tropical_fish" },
        temp: 32,
        time: 14
      },
      {
        fluidInput: { fluid: "tconstruct:molten_glass", amount: BUCKET },
        input: { tag: "c:glass" },
        temp: 750,
        time: 59
      },
      {
        fluidInput: { fluid: "tconstruct:molten_glass", amount: BUCKET },
        input: { item: "minecraft:glass_bottle" },
        temp: 750,
        time: 73
      },
      {
        fluidInput: { fluid: "tconstruct:molten_glass", amount: BUCKET / 4 },
        input: { tag: "c:glass_panes" },
        temp: 750,
        time: 29
      },
      {
        fluidInput: { fluid: "tconstruct:molten_glass", amount: BUCKET / 4 },
        input: { item: "tconstruct:blank_sand_cast" },
        temp: 750,
        time: 44
      },
      {
        fluidInput: { fluid: "tconstruct:molten_glass", amount: BUCKET / 4 },
        input: { item: "tconstruct:blank_red_sand_cast" },
        temp: 750,
        time: 44
      },
      {
        fluidInput: { fluid: "tconstruct:molten_glass", amount: BUCKET },
        input: { tag: "c:sand" },
        temp: 750,
        time: 88
      },
      {
        fluidInput: { fluid: "tconstruct:molten_obsidian", amount: BUCKET * 3 },
        input: { item: "minecraft:beacon" },
        temp: 800,
        time: 345,
        byproducts: [{ fluid: "tconstruct:molten_glass", amount: BUCKET * 5 }]
      },
      {
        fluidInput: { fluid: "tconstruct:molten_obsidian", amount: BUCKET },
        input: { tag: "c:obsidian" },
        temp: 800,
        time: 133
      },
      {
        fluidInput: { fluid: "tconstruct:molten_obsidian", amount: BUCKET * 8 },
        input: { item: "minecraft:ender_chest" },
        temp: 800,
        time: 332,
        byproducts: [{ fluid: "tconstruct:molten_ender", amount: BUCKET / 4 }]
      },
      {
        fluidInput: { fluid: "tconstruct:molten_obsidian", amount: BUCKET / 4 },
        input: { tag: "c:dusts/obsidian" },
        temp: 800,
        time: 66
      },
      {
        fluidInput: { fluid: "tconstruct:molten_obsidian", amount: BUCKET },
        input: { item: "tconstruct:foundry_controller" },
        temp: 800,
        time: 232,
        byproducts: [{ fluid: "tconstruct:scorched_stone", amount: BUCKET }]
      },
      {
        fluidInput: { fluid: "tconstruct:molten_obsidian", amount: BUCKET / 2 },
        input: { item: "tconstruct:scorched_drain" },
        temp: 800,
        time: 166,
        byproducts: [{ fluid: "tconstruct:scorched_stone", amount: BUCKET }]
      },
      {
        fluidInput: { fluid: "tconstruct:molten_obsidian", amount: BUCKET / 2 },
        input: { item: "tconstruct:scorched_chute" },
        temp: 800,
        time: 166,
        byproducts: [{ fluid: "tconstruct:scorched_stone", amount: BUCKET }]
      },
      {
        fluidInput: { fluid: "tconstruct:molten_obsidian", amount: BUCKET / 4 },
        input: { item: "tconstruct:obsidian_pane" },
        temp: 800,
        time: 99
      },
      {
        fluidInput: { fluid: "tconstruct:seared_stone", amount: BUCKET / 4 * 7 },
        // prevents skips to get scorched stone due to seared casting basins being obtainable premoon
        input: { item: "tconstruct:scorched_basin" },
        temp: 500,
        time: 125
      },
      {
        fluidInput: { fluid: "tconstruct:seared_stone", amount: BUCKET / 4 * 7 },
        // prevents skips to get scorched stone due to seared casting tables being obtainable premoon
        input: { item: "tconstruct:scorched_basin" },
        temp: 500,
        time: 125
      },
      {
        fluidInput: { fluid: "tconstruct:molten_bronze", amount: INGOT / 2 },
        input: { item: "createastral:bronze_sheet" },
        temp: 700,
        time: 57
      },
      {
        fluidInput: { fluid: "kubejs:molten_calorite", amount: BUCKET },
        input: { item: "ad_astra:calorite_block" },
        temp: 3e3,
        time: 141
      },
      {
        fluidInput: { fluid: "kubejs:molten_calorite", amount: INGOT },
        input: { item: "ad_astra:calorite_ingot" },
        temp: 3e3,
        time: 47
      },
      {
        fluidInput: { fluid: "kubejs:molten_calorite", amount: NUGGET },
        input: { item: "ad_astra:calorite_nugget" },
        temp: 3e3,
        time: 16
      },
      {
        fluidInput: { fluid: "kubejs:molten_calorite", amount: INGOT * 13 },
        input: { item: "ad_astra:raw_calorite_block" },
        temp: 3e3,
        time: 283,
        byproducts: [{ fluid: "tconstruct:molten_diamond", amount: GEM_BLOCK / 9 }]
      },
      {
        fluidInput: { fluid: "kubejs:molten_calorite", amount: NUGGET * 13 },
        input: { tag: "c:raw_materials/calorite" },
        temp: 3e3,
        time: 71,
        byproducts: [{ fluid: "tconstruct:molten_diamond", amount: GEM / 9 }]
      },
      {
        fluidInput: { fluid: "tconstruct:molten_copper", amount: NUGGET },
        input: { tag: "c:wires/copper" },
        temp: 500,
        time: 10
      },
      {
        fluidInput: { fluid: "kubejs:molten_desh", amount: BUCKET },
        input: { item: "ad_astra:desh_block" },
        temp: 425,
        time: 141
      },
      {
        fluidInput: { fluid: "kubejs:molten_desh", amount: INGOT },
        input: { item: "ad_astra:desh_ingot" },
        temp: 425,
        time: 47
      },
      {
        fluidInput: { fluid: "kubejs:molten_desh", amount: NUGGET },
        input: { item: "ad_astra:desh_nugget" },
        temp: 425,
        time: 16
      },
      {
        fluidInput: { fluid: "kubejs:molten_desh", amount: INGOT * 13 },
        input: { item: "ad_astra:raw_desh_block" },
        temp: 425,
        time: 283,
        byproducts: [{ fluid: "tconstruct:molten_iron", amount: INGOT * 13 / 3 }]
      },
      {
        fluidInput: { fluid: "kubejs:molten_desh", amount: NUGGET * 13 },
        input: { tag: "c:raw_materials/desh" },
        temp: 425,
        time: 71,
        byproducts: [{ fluid: "tconstruct:molten_iron", amount: NUGGET * 13 / 3 }]
      },
      {
        fluidInput: { fluid: "tconstruct:molten_iron", amount: NUGGET },
        input: { item: "minecraft:chain" },
        temp: 800,
        time: 66
      },
      {
        fluidInput: { fluid: "tconstruct:molten_iron", amount: INGOT * 13 },
        input: { tag: "c:storage_blocks/raw_iron" },
        temp: 790,
        time: 359,
        byproducts: [{ fluid: "tconstruct:molten_copper", amount: INGOT * 13 / 3 }]
      },
      {
        fluidInput: { fluid: "tconstruct:molten_iron", amount: NUGGET * 13 / 3 },
        input: { tag: "c:raw_materials/iron" },
        temp: 790,
        time: 90,
        byproducts: [{ fluid: "tconstruct:molten_copper", amount: NUGGET * 13 / 3 }]
      },
      {
        fluidInput: { fluid: "tconstruct:molten_rose_gold", amount: INGOT / 2 },
        input: { item: "tconstruct:silky_cloth" },
        temp: 800,
        time: 66
      },
      {
        fluidInput: { fluid: "tconstruct:molten_silver", amount: INGOT * 2 },
        input: { tag: "c:ores/silver" },
        temp: 225,
        time: 98,
        byproducts: [{ fluid: "kubejs:molten_desh", amount: INGOT * 2 }]
      },
      {
        fluidInput: { fluid: "tconstruct:molten_silver", amount: INGOT * 13 },
        input: { tag: "c:storage_blocks/raw_silver" },
        temp: 790,
        time: 359,
        byproducts: [{ fluid: "kubejs:molten_desh", amount: INGOT * 13 / 3 }]
      },
      {
        fluidInput: { fluid: "tconstruct:molten_silver", amount: NUGGET * 13 },
        input: { tag: "c:raw_materials/silver" },
        temp: 790,
        time: 90,
        byproducts: [{ fluid: "kubejs:molten_desh", amount: NUGGET * 13 / 3 }]
      },
      {
        fluidInput: { fluid: "tconstruct:molten_tin", amount: NUGGET * 13 },
        input: { tag: "c:ores/tin" },
        temp: 225,
        time: 98,
        byproducts: [{ fluid: "tconstruct:molten_copper", amount: NUGGET * 13 / 3 }]
      },
      {
        fluidInput: { fluid: "tconstruct:molten_tin", amount: INGOT * 13 },
        input: { tag: "c:storage_blocks/raw_tin" },
        temp: 225,
        time: 234,
        byproducts: [{ fluid: "tconstruct:molten_copper", amount: INGOT * 13 / 3 }]
      },
      {
        fluidInput: { fluid: "tconstruct:molten_tin", amount: NUGGET * 13 },
        input: { tag: "c:raw_materials/tin" },
        temp: 790,
        time: 59,
        byproducts: [{ fluid: "tconstruct:molten_copper", amount: NUGGET * 13 / 3 }]
      },
      {
        fluidInput: { fluid: "kubejs:molten_ostrum", amount: BUCKET },
        input: { item: "ad_astra:ostrum_block" },
        temp: 3e3,
        time: 141
      },
      {
        fluidInput: { fluid: "kubejs:molten_ostrum", amount: INGOT },
        input: { item: "ad_astra:ostrum_ingot" },
        temp: 3e3,
        time: 47
      },
      {
        fluidInput: { fluid: "kubejs:molten_ostrum", amount: NUGGET },
        input: { item: "ad_astra:ostrum_nugget" },
        temp: 3e3,
        time: 16
      },
      {
        fluidInput: { fluid: "kubejs:molten_ostrum", amount: INGOT * 13 },
        input: { item: "ad_astra:raw_ostrum_block" },
        temp: 3e3,
        time: 283,
        byproducts: [{ fluid: "tconstruct:molten_lead", amount: INGOT * 13 / 3 }]
      },
      {
        fluidInput: { fluid: "kubejs:molten_ostrum", amount: NUGGET * 13 },
        input: { tag: "c:raw_materials/ostrum" },
        temp: 3e3,
        time: 71,
        byproducts: [{ fluid: "tconstruct:molten_lead", amount: NUGGET * 13 / 3 }]
      },
      {
        fluidInput: { fluid: "kubejs:molten_radiance", amount: INGOT },
        input: { item: "create:refined_radiance" },
        temp: 425,
        time: 47
      },
      {
        fluidInput: { fluid: "kubejs:molten_shadowsteel", amount: INGOT },
        input: { item: "create:shadow_steel" },
        temp: 425,
        time: 200
      },
      {
        fluidInput: { fluid: "kubejs:molten_yttrium", amount: BUCKET },
        input: { item: "yttr:yttrium_block" },
        temp: 3e3,
        time: 500
      },
      {
        fluidInput: { fluid: "kubejs:molten_yttrium", amount: INGOT },
        input: { item: "yttr:yttrium_ingot" },
        temp: 3e3,
        time: 125
      },
      {
        fluidInput: { fluid: "kubejs:molten_yttrium", amount: NUGGET },
        input: { item: "yttr:yttrium_nugget" },
        temp: 3e3,
        time: 32
      },
      {
        fluidInput: { fluid: "kubejs:molten_yttrium", amount: NUGGET * 13 },
        input: { item: "yttr:yttrium_dust" },
        temp: 3e3,
        time: 125,
        byproducts: [{ fluid: "kubejs:molten_calorite", amount: NUGGET * 13 / 3 }]
      },
      {
        fluidInput: { fluid: "tconstruct:seared_stone", amount: BUCKET / 4 },
        input: { item: "tconstruct:grout" },
        temp: 600,
        time: 80
      },
      {
        fluidInput: { fluid: "createaddition:seed_oil", amount: BUCKET / 15 },
        input: { item: "minecraft:beetroot" },
        temp: 100,
        time: 333
      },
      {
        fluidInput: { fluid: "create:honey", amount: BUCKET },
        input: { item: "minecraft:honey_block" },
        temp: 1,
        time: 98
      }
    ];
    meltingRecipes2.forEach((recipe) => {
      let meltingRecipe = {
        type: "tconstruct:melting",
        ingredient: recipe.input,
        result: {
          fluid: recipe.fluidInput.fluid,
          amount: recipe.fluidInput.amount
        },
        temperature: recipe.temp,
        time: recipe.time
      };
      if (recipe.byproducts) meltingRecipe.byproducts = recipe.byproducts;
      event.custom(meltingRecipe);
    });
  });
}
function meltingFuelRecipes() {
  onEvent("recipes", (event) => {
    const meltingFuelRecipes2 = [
      {
        fluid: { name: "tconstruct:blazing_blood", amount: NUGGET },
        time: 150,
        temp: 2200
      },
      {
        fluid: { name: "minecraft:lava", amount: NUGGET },
        time: 150,
        temp: 1500
      },
      {
        fluid: { name: "kubejs:hellfire", amount: NUGGET },
        time: 150,
        temp: 3e3
      }
    ];
    meltingFuelRecipes2.forEach((recipe) => {
      event.custom({
        type: "tconstruct:melting_fuel",
        fluid: { name: recipe.fluid.name, amount: recipe.fluid.amount },
        duration: recipe.time,
        temperature: recipe.temp
      });
    });
  });
}
function toolMaterialsRecipes() {
  onEvent("recipes", (event) => {
    customMeltingAndCasting(event);
    partMaterialRegistry(event);
  });
  function customMeltingAndCasting(event) {
    const materialRecipes = [
      {
        fluid: "kubejs:molten_calorite",
        temp: 3e3,
        toolMaterial: "tconstruct:calorite"
      },
      {
        fluid: "kubejs:molten_desh",
        temp: 425,
        toolMaterial: "tconstruct:desh"
      },
      {
        fluid: "kubejs:molten_ostrum",
        temp: 3e3,
        toolMaterial: "tconstruct:ostrum"
      },
      {
        fluid: "kubejs:molten_radiance",
        temp: 425,
        toolMaterial: "tconstruct:radiant"
      },
      {
        fluid: "kubejs:molten_shadowsteel",
        temp: 425,
        toolMaterial: "tconstruct:shadow"
      }
    ];
    materialRecipes.forEach((recipe) => {
      event.custom({
        type: "tconstruct:material_fluid",
        fluid: {
          name: recipe.fluid,
          amount: INGOT
        },
        temperature: recipe.temp,
        output: recipe.toolMaterial
      });
      event.custom({
        type: "tconstruct:material_melting",
        input: recipe.toolMaterial,
        temperature: recipe.temp,
        result: {
          fluid: recipe.fluid,
          amount: INGOT
        }
      });
    });
  }
  function partMaterialRegistry(event) {
    const materialRegistries = [
      { material: "radiant", ingredient: "create:refined_radiance", value: 1, needed: 1 },
      { material: "shadow", ingredient: "create:shadow_steel", value: 1, needed: 1 }
    ];
    materialRegistries.forEach((recipe) => {
      event.custom({
        type: "tconstruct:material",
        ingredient: { item: recipe.ingredient },
        value: recipe.value,
        needed: recipe.needed,
        material: recipe.material
      });
    });
  }
}
function techRebornBlastFurnaceRecipes() {
  onEvent("recipes", (event) => {
    const blastFurnaceRecipes = [
      {
        input: [
          { fluid: "techreborn:carbon", holder: "techreborn:cell", count: 1 },
          { fluid: "tconstruct:molten_iron", holder: "techreborn:cell", count: 1 }
        ],
        output: { item: "techreborn:steel_dust", count: 4 },
        power: 128,
        time: 1e3,
        heat: 1500
      }
    ];
    blastFurnaceRecipes.forEach((recipe) => {
      event.custom({
        type: "techreborn:blast_furnace",
        power: recipe.power,
        time: recipe.time,
        heat: recipe.heat,
        ingredients: recipe.input,
        results: recipe.output
      });
    });
  });
}
function techRebornCentrifugeRecipes() {
  onEvent("recipes", (event) => {
    const centrifugeRecipes = [
      {
        input: [{ item: "farmersdelight:rich_soil", count: 2 }],
        output: [
          { item: "minecraft:coarse_dirt", count: 2 },
          { item: "techreborn:saltpeter_dust", count: 4 }
        ],
        power: 8,
        time: 500
      },
      {
        input: [{ item: "yttr:yttrium_dust", count: 4 }],
        output: [
          { item: "createastral:crushed_raw_calorite", count: 3 },
          { item: "createastral:uranium_residue", count: 1 }
        ],
        power: 100,
        time: 500
      },
      {
        input: [
          { item: "ae2:certus_quartz_crystal", count: 1 },
          { item: "techreborn:cell", count: 13 }
        ],
        output: [
          { item: "techreborn:cell", nbt: { fluid: "ad_astra:oxygen" }, count: 10 },
          { item: "techreborn:cell", nbt: { fluid: "techreborn:silicon" }, count: 3 }
        ],
        power: 8,
        time: 500
      },
      {
        input: [
          { item: "minecraft:soul_sand", count: 16 },
          { item: "techreborn:cell", nbt: "null" }
        ],
        output: [
          { item: "minecraft:sand", count: 10 },
          { item: "techreborn:saltpeter_dust", count: 4 },
          { item: "techreborn:coal_dust" },
          { item: "techreborn:cell", nbt: { fluid: "techreborn:oil" } }
        ],
        power: 5,
        time: 2500
      },
      {
        input: [
          { item: "minecraft:soul_soil", count: 16 },
          { item: "techreborn:cell", nbt: "null" }
        ],
        output: [
          { item: "minecraft:dirt", count: 8 },
          { item: "techreborn:saltpeter_dust", count: 4 },
          { item: "techreborn:coal_dust" },
          { item: "techreborn:cell", nbt: { fluid: "techreborn:oil" } }
        ],
        power: 5,
        time: 2500
      }
    ];
    centrifugeRecipes.forEach((recipe) => {
      event.custom({
        type: "techreborn:centrifuge",
        power: recipe.power,
        time: recipe.time,
        ingredients: recipe.input,
        results: recipe.output
      });
    });
  });
}
function techRebornChemicalReactorRecipes() {
  onEvent("recipes", (event) => {
    const chemicalReactorRecipes = [
      {
        input: [
          { fluid: "techreborn:potassium", count: 2, holder: "techreborn:cell" },
          { fluid: "techreborn:sodium", count: 2, holder: "techreborn:cell" }
        ],
        output: [{ item: "techreborn:nak_coolant_cell_60k" }],
        power: 30,
        time: 400
      }
    ];
    chemicalReactorRecipes.forEach((recipe) => {
      event.custom({
        type: "techreborn:chemical_reactor",
        power: recipe.power,
        time: recipe.time,
        ingredients: recipe.input,
        results: recipe.output
      });
    });
  });
}
function techRebornCompressorRecipes() {
  onEvent("recipes", (event) => {
    sheetCompressing(event);
    const compressorRecipes = [
      {
        input: [{ item: "techreborn:compressed_plantball", count: 4 }],
        output: [{ item: "createaddition:biomass", count: 1 }],
        time: 300,
        power: 10
      },
      {
        input: [{ item: "createastral:fragile_sheet", count: 16 }],
        output: [{ item: "createastral:fragile_rocket_fin", count: 1 }],
        time: 300,
        power: 10
      }
    ];
    compressorRecipes.forEach((recipe) => {
      event.custom({
        type: "techreborn:compressor",
        power: recipe.power,
        time: recipe.time,
        ingredients: recipe.input,
        results: recipe.output
      });
    });
  });
  function sheetCompressing(event) {
    MATERIALS.forEach((material) => {
      event.custom({
        type: "techreborn:compressor",
        power: 10,
        time: 300,
        ingredients: [{ item: material.ingot }],
        results: [{ item: material.plate }]
      });
    });
  }
}
function techRebornGrinderRecipes() {
  onEvent("recipes", (event) => {
    crushingToGrinding(event);
    const grinderRecipes = [
      {
        input: [{ item: "minecraft:pointed_dripstone", count: 1 }],
        output: [{ item: "minecraft:clay_ball", count: 1 }],
        time: 100,
        power: 5
      }
    ];
    grinderRecipes.forEach((recipe) => {
      event.custom({
        type: "techreborn:grinder",
        time: recipe.time,
        power: recipe.power,
        ingredients: recipe.input,
        results: recipe.output
      });
    });
  });
  function crushingToGrinding(event) {
    for (let recipe of CRUSHING_RECIPES_TO_BECOME_GRINDING) {
      event.custom({
        type: "techreborn:grinder",
        time: "time" in recipe ? recipe.time : DEFAULT_GRIND_TIME,
        power: "power" in recipe ? recipe.power : DEFAULT_GRIND_POWER,
        ingredients: [{ item: recipe.input.item, count: 1 }],
        results: [{ item: recipe.output.item, count: recipe.output.count }]
      });
    }
  }
}
function techRebornImplosionCompressorRecipes() {
  onEvent("recipes", (event) => {
    sheetImplosionCompressing(event);
    const implosionCompressorRecipes = [
      {
        input: [
          { count: 64, item: "techreborn:coal_dust" },
          { item: "minecraft:tnt", count: 4 }
        ],
        output: [
          { item: "minecraft:diamond", count: 1 },
          { item: "techreborn:dark_ashes_dust", count: 8 }
        ],
        power: 60,
        time: 1e3
      }
    ];
    implosionCompressorRecipes.forEach((recipe) => {
      event.custom({
        type: "techreborn:implosion_compressor",
        power: recipe.power,
        time: recipe.time,
        ingredients: recipe.input,
        results: recipe.output
      });
    });
  });
  function sheetImplosionCompressing(event) {
    MATERIALS.forEach((material) => {
      event.custom({
        type: "techreborn:implosion_compressor",
        power: 30,
        time: 1200,
        ingredients: [
          {
            item: material.block
          },
          {
            item: "minecraft:tnt"
          }
        ],
        results: [
          {
            item: material.plate,
            count: 9
          }
        ]
      });
      event.custom({
        type: "techreborn:implosion_compressor",
        power: 50,
        time: 300,
        ingredients: [
          {
            item: material.block,
            count: 4
          },
          {
            item: "minecraft:end_crystal"
          }
        ],
        results: [
          {
            item: material.plate,
            count: 36
          },
          {
            item: "techreborn:dark_ashes_dust",
            count: 4
          }
        ]
      });
    });
  }
}
function techRebornIndustrialElectrolyzerRecipes() {
  onEvent("recipes", (event) => {
    const industrialElectrolyzerRecipes = [
      {
        input: [{ item: "ad_astra:calorite_ingot", count: 16 }],
        output: [
          { item: "yttr:quicksilver", count: 3 },
          { item: "ad_astra:ostrum_ingot", count: 7 },
          { item: "minecraft:red_dye", count: 4 }
        ],
        power: 400,
        time: 1100
      },
      {
        input: [
          { item: "techreborn:clay_dust", count: 16 },
          { item: "techreborn:cell", count: 3, nbt: "empty" }
        ],
        output: [
          { item: "techreborn:cell", nbt: { fluid: "techreborn:lithium" }, count: 2 },
          { item: "techreborn:cell", nbt: { fluid: "techreborn:sodium" }, count: 1 },
          { item: "techreborn:lazurite_dust", count: 2 }
        ],
        power: 100,
        time: 1100
      },
      {
        input: [
          { item: "techreborn:sodalite_dust", count: 8 },
          { item: "techreborn:cell", count: 3, nbt: "empty" }
        ],
        output: [
          { item: "techreborn:cell", nbt: { fluid: "techreborn:lithium" }, count: 2 },
          { item: "techreborn:cell", nbt: { fluid: "techreborn:sodium" }, count: 1 }
        ],
        power: 100,
        time: 1100
      }
    ];
    industrialElectrolyzerRecipes.forEach((recipe) => {
      event.custom({
        type: "techreborn:industrial_electrolyzer",
        power: recipe.power,
        time: recipe.time,
        ingredients: recipe.input,
        results: recipe.output
      });
    });
  });
}
function techRebornIndustrialGrinderRecipes() {
  function industrialGrinderTag(event, inputTag, outputs, fluid, fluidAmount, energy, time) {
    event.custom({
      type: "techreborn:industrial_grinder",
      power: energy ? energy : 16,
      // ?? doesn't work with numbers for some reason
      time: time ? time : 100,
      tank: {
        fluid,
        amount: fluidAmount
      },
      ingredients: [
        {
          tag: inputTag
        }
      ],
      results: outputs
    });
  }
  function industrialGrinder(event, input, outputs, fluid, fluidAmount, inputCount, energy, time) {
    event.custom({
      type: "techreborn:industrial_grinder",
      power: energy ? energy : 16,
      time: time ? time : 100,
      tank: {
        fluid,
        amount: fluidAmount
      },
      ingredients: [
        {
          item: input,
          count: inputCount ? inputCount : 1
        }
      ],
      results: outputs
    });
  }
  function itemCount(item, count) {
    return {
      item,
      count: count ? count : 1
    };
  }
  const oreBlockWaterRate = 29;
  const oreBlockMercuryRate = 44;
  const rawOreWaterRate = 17;
  const rawOreMercuryRate = 24;
  const ORES = [
    // Ore blocks
    {
      tag: "c:coal_ores",
      waterOutput: [itemCount("minecraft:coal", 2), itemCount("create:experience_nugget")],
      mercuryOutput: [itemCount("minecraft:coal", 3), itemCount("create:experience_nugget", 2)]
    },
    {
      tag: "c:iron_ores",
      waterOutput: [
        itemCount("minecraft:iron_nugget", oreBlockWaterRate),
        itemCount("minecraft:redstone", 2),
        itemCount("create:experience_nugget")
      ],
      mercuryOutput: [
        itemCount("minecraft:iron_nugget", oreBlockMercuryRate),
        itemCount("minecraft:redstone", 3),
        itemCount("create:experience_nugget", 2)
      ]
    },
    {
      tag: "c:copper_ores",
      waterOutput: [
        itemCount("create:copper_nugget", 64),
        itemCount("create:copper_nugget", 4),
        // 68 total
        itemCount("minecraft:clay_ball", 2),
        itemCount("create:experience_nugget")
      ],
      mercuryOutput: [
        itemCount("create:copper_nugget", 64),
        itemCount("create:copper_nugget", 38),
        // 102 total
        itemCount("minecraft:clay_ball", 3),
        itemCount("create:experience_nugget", 2)
      ]
    },
    {
      tag: "c:gold_ores",
      waterOutput: [
        itemCount("minecraft:gold_nugget", oreBlockWaterRate),
        itemCount("minecraft:quartz", 2),
        itemCount("create:experience_nugget")
      ],
      mercuryOutput: [
        itemCount("minecraft:gold_nugget", oreBlockMercuryRate),
        itemCount("minecraft:quartz", 3),
        itemCount("create:experience_nugget", 2)
      ]
    },
    {
      tag: "c:redstone_ores",
      waterOutput: [itemCount("minecraft:redstone", 6), itemCount("create:experience_nugget")],
      mercuryOutput: [itemCount("minecraft:redstone", 9), itemCount("create:experience_nugget", 2)]
    },
    {
      tag: "c:lapis_ores",
      waterOutput: [itemCount("minecraft:lapis_lazuli", 10), itemCount("create:experience_nugget")],
      mercuryOutput: [itemCount("minecraft:lapis_lazuli", 15), itemCount("create:experience_nugget", 2)]
    },
    {
      tag: "c:emerald_ores",
      waterOutput: [itemCount("minecraft:emerald", 2), itemCount("create:experience_nugget")],
      mercuryOutput: [itemCount("minecraft:emerald", 3), itemCount("create:experience_nugget", 2)]
    },
    {
      tag: "c:diamond_ores",
      waterOutput: [itemCount("minecraft:diamond", 2), itemCount("create:experience_nugget")],
      mercuryOutput: [itemCount("minecraft:diamond", 3), itemCount("create:experience_nugget", 2)]
    },
    {
      item: "minecraft:ancient_debris",
      mercuryOutput: [itemCount("tconstruct:debris_nugget", 18)],
      energy: 64,
      time: 500
    },
    {
      tag: "c:cheese_ores",
      waterOutput: [itemCount("ad_astra:cheese", 2)],
      mercuryOutput: [itemCount("ad_astra:cheese", 3)]
      // Yum, cancerous cheese
    },
    {
      tag: "c:desh_ores",
      waterOutput: [
        itemCount("ad_astra:desh_nugget", oreBlockWaterRate),
        itemCount("techreborn:silver_nugget", 2),
        itemCount("create:experience_nugget")
      ],
      mercuryOutput: [
        itemCount("ad_astra:desh_nugget", oreBlockMercuryRate),
        itemCount("techreborn:silver_nugget", 3),
        itemCount("create:experience_nugget", 2)
      ]
    },
    {
      tag: "c:ice_shard_ores",
      waterOutput: [itemCount("ad_astra:ice_shard", 2)],
      mercuryOutput: [itemCount("ad_astra:ice_shard", 3)]
    },
    {
      tag: "c:ostrum_ores",
      waterOutput: [
        itemCount("ad_astra:ostrum_nugget", oreBlockWaterRate),
        itemCount("techreborn:lead_nugget", 2),
        itemCount("create:experience_nugget")
      ],
      mercuryOutput: [
        itemCount("ad_astra:ostrum_nugget", oreBlockMercuryRate),
        itemCount("techreborn:lead_nugget", 3),
        itemCount("create:experience_nugget", 2)
      ]
    },
    {
      tag: "c:calorite_ores",
      waterOutput: [
        itemCount("ad_astra:calorite_nugget", oreBlockWaterRate),
        itemCount("yttr:yttrium_nugget", 2),
        itemCount("create:experience_nugget")
      ],
      mercuryOutput: [
        itemCount("ad_astra:calorite_nugget", oreBlockMercuryRate),
        itemCount("yttr:yttrium_nugget", 3),
        itemCount("create:experience_nugget", 2)
      ]
    },
    {
      tag: "c:ores/zinc",
      waterOutput: [
        itemCount("create:zinc_nugget", oreBlockWaterRate),
        itemCount("minecraft:gunpowder", 2),
        itemCount("create:experience_nugget")
      ],
      mercuryOutput: [
        itemCount("create:zinc_nugget", oreBlockMercuryRate),
        itemCount("minecraft:gunpowder", 3),
        itemCount("create:experience_nugget", 2)
      ]
    },
    {
      tag: "c:lead_ores",
      waterOutput: [itemCount("techreborn:lead_nugget", oreBlockWaterRate), itemCount("create:experience_nugget")],
      mercuryOutput: [
        itemCount("techreborn:lead_nugget", oreBlockMercuryRate),
        itemCount("create:experience_nugget", 2)
      ]
    },
    {
      tag: "c:silver_ores",
      waterOutput: [itemCount("techreborn:silver_nugget", oreBlockWaterRate), itemCount("create:experience_nugget")],
      mercuryOutput: [
        itemCount("techreborn:silver_nugget", oreBlockMercuryRate),
        itemCount("create:experience_nugget", 2)
      ]
    },
    {
      tag: "c:tin_ores",
      waterOutput: [itemCount("techreborn:tin_nugget", oreBlockWaterRate), itemCount("create:experience_nugget")],
      mercuryOutput: [
        itemCount("techreborn:tin_nugget", oreBlockMercuryRate),
        itemCount("create:experience_nugget", 2)
      ]
    },
    {
      tag: "c:ores/cobalt",
      waterOutput: [itemCount("tconstruct:cobalt_nugget", oreBlockWaterRate), itemCount("create:experience_nugget")],
      mercuryOutput: [
        itemCount("tconstruct:cobalt_nugget", oreBlockMercuryRate),
        itemCount("create:experience_nugget", 2)
      ]
    },
    {
      item: "yttr:gadolinite",
      waterOutput: [itemCount("yttr:yttrium_nugget", oreBlockWaterRate), itemCount("create:experience_nugget")],
      mercuryOutput: [itemCount("yttr:yttrium_nugget", oreBlockMercuryRate), itemCount("create:experience_nugget", 2)]
    },
    {
      tag: "c:certus_quartz_ores",
      waterOutput: [itemCount("ae2:certus_quartz_crystal"), itemCount("ae2:certus_quartz_dust", 5)],
      mercuryOutput: [itemCount("ae2:certus_quartz_crystal", 2), itemCount("ae2:certus_quartz_dust", 7)]
    },
    // Raw ores
    {
      item: "minecraft:raw_iron",
      waterOutput: [itemCount("minecraft:iron_nugget", rawOreWaterRate), itemCount("minecraft:redstone")],
      mercuryOutput: [itemCount("minecraft:iron_nugget", rawOreMercuryRate), itemCount("minecraft:redstone", 2)]
    },
    {
      item: "minecraft:raw_copper",
      waterOutput: [itemCount("create:copper_nugget", rawOreWaterRate), itemCount("minecraft:clay_ball")],
      mercuryOutput: [itemCount("create:copper_nugget", rawOreMercuryRate), itemCount("minecraft:clay_ball", 2)]
    },
    {
      item: "minecraft:raw_gold",
      waterOutput: [itemCount("minecraft:gold_nugget", rawOreWaterRate), itemCount("minecraft:quartz")],
      mercuryOutput: [itemCount("minecraft:gold_nugget", rawOreMercuryRate), itemCount("minecraft:quartz", 2)]
    },
    {
      item: "ad_astra:raw_desh",
      waterOutput: [itemCount("ad_astra:desh_nugget", rawOreWaterRate)],
      mercuryOutput: [itemCount("ad_astra:desh_nugget", rawOreMercuryRate)]
    },
    {
      item: "ad_astra:raw_ostrum",
      waterOutput: [itemCount("ad_astra:ostrum_nugget", rawOreWaterRate)],
      mercuryOutput: [itemCount("ad_astra:ostrum_nugget", rawOreMercuryRate)]
    },
    {
      item: "ad_astra:raw_calorite",
      waterOutput: [itemCount("ad_astra:calorite_nugget", rawOreWaterRate)],
      mercuryOutput: [itemCount("ad_astra:calorite_nugget", rawOreMercuryRate)]
    },
    {
      item: "create:raw_zinc",
      waterOutput: [itemCount("create:zinc_nugget", rawOreWaterRate)],
      mercuryOutput: [itemCount("create:zinc_nugget", rawOreMercuryRate)]
    },
    {
      item: "techreborn:raw_lead",
      waterOutput: [itemCount("techreborn:lead_nugget", rawOreWaterRate)],
      mercuryOutput: [itemCount("techreborn:lead_nugget", rawOreMercuryRate)]
    },
    {
      item: "techreborn:raw_silver",
      waterOutput: [itemCount("techreborn:silver_nugget", rawOreWaterRate)],
      mercuryOutput: [itemCount("techreborn:silver_nugget", rawOreMercuryRate)]
    },
    {
      item: "techreborn:raw_tin",
      waterOutput: [itemCount("techreborn:tin_nugget", rawOreWaterRate)],
      mercuryOutput: [itemCount("techreborn:tin_nugget", rawOreMercuryRate)]
    },
    {
      item: "tconstruct:raw_cobalt",
      waterOutput: [itemCount("tconstruct:cobalt_nugget", rawOreWaterRate)],
      mercuryOutput: [itemCount("tconstruct:cobalt_nugget", rawOreMercuryRate)]
    },
    {
      item: "yttr:raw_gadolinite",
      waterOutput: [itemCount("yttr:yttrium_nugget", rawOreWaterRate)],
      mercuryOutput: [itemCount("yttr:yttrium_nugget", rawOreMercuryRate)]
    }
  ];
  const COBBLE_PROCESSING = [
    {
      item: "minecraft:cobblestone",
      output: [itemCount("minecraft:gravel")],
      time: 40,
      waterAmount: 10
    },
    {
      item: "minecraft:gravel",
      output: [itemCount("minecraft:sand")],
      time: 40,
      waterAmount: 10
    },
    {
      item: "minecraft:sand",
      count: 4,
      output: [itemCount("minecraft:clay_ball")],
      time: 40,
      waterAmount: 200
    }
  ];
  onEvent("recipes", (event) => {
    event.remove({ type: "techreborn:industrial_grinder" });
    ORES.forEach((ore) => {
      if ("tag" in ore) {
        if (ore.waterOutput) {
          industrialGrinderTag(event, ore.tag, ore.waterOutput, "minecraft:water", 100, ore.energy, ore.time);
        }
        if (ore.mercuryOutput) {
          industrialGrinderTag(event, ore.tag, ore.mercuryOutput, "techreborn:mercury", 100, ore.energy, ore.time);
        }
      }
      if ("item" in ore) {
        if (ore.waterOutput) {
          industrialGrinder(event, ore.item, ore.waterOutput, "minecraft:water", 100, ore.count, ore.energy, ore.time);
        }
        if (ore.mercuryOutput) {
          industrialGrinder(
            event,
            ore.item,
            ore.mercuryOutput,
            "techreborn:mercury",
            100,
            ore.count,
            ore.energy,
            ore.time
          );
        }
      }
    });
    COBBLE_PROCESSING.forEach((item) => {
      industrialGrinder(
        event,
        item.item,
        item.output,
        "minecraft:water",
        item.waterAmount,
        item.count,
        item.energy,
        item.time
      );
    });
  });
}
function techRebornIndustrialSawmillRecipes() {
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
            tag: `createastral:barked_${type}_logs`
          }
        ],
        results: [
          {
            item: `${mod_id}:${type}_planks`,
            count: 8
          },
          {
            item: "techreborn:saw_dust",
            count: 3
          },
          {
            item: "farmersdelight:tree_bark",
            count: 1
          }
        ],
        tank: {
          fluid: "minecraft:water",
          amount: {
            droplets: 100 * mB
          }
        }
      });
      event.custom({
        type: "techreborn:industrial_sawmill",
        power: 10,
        time: 200,
        ingredients: [
          {
            tag: `createastral:stripped_${type}_logs`
          }
        ],
        results: [
          {
            item: `${mod_id}:${type}_planks`,
            count: 8
          },
          {
            item: "techreborn:saw_dust",
            count: 3
          }
        ],
        tank: {
          fluid: "minecraft:water",
          amount: {
            droplets: 100 * mB
          }
        }
      });
    });
  });
}
function techRebornPackingRecipes() {
  function pack9(event, input, output) {
    event.custom({
      type: "techreborn:rolling_machine",
      shaped: {
        pattern: ["III", "III", "III"],
        key: {
          I: {
            item: input
          }
        },
        result: {
          item: output
        }
      },
      power: 5,
      time: 250
    });
  }
  function pack4(event, input, output) {
    event.custom({
      type: "techreborn:rolling_machine",
      shaped: {
        pattern: ["II ", "II ", "   "],
        key: {
          I: {
            item: input
          }
        },
        result: {
          item: output
        }
      },
      power: 5,
      time: 250
    });
  }
  function unpack(event, input, output, amount) {
    event.custom({
      type: "techreborn:assembling_machine",
      power: 5,
      time: 250,
      ingredients: [
        {
          item: input
        }
      ],
      results: [
        {
          item: output,
          count: amount
        }
      ]
    });
  }
  const PACK_MATERIALS = [
    {
      mod: "minecraft",
      type: "coal"
    },
    {
      mod: "minecraft",
      type: "raw_iron"
    },
    {
      mod: "minecraft",
      type: "raw_copper"
    },
    {
      mod: "minecraft",
      type: "raw_gold"
    },
    {
      mod: "minecraft",
      type: "amethyst",
      append: "_shard",
      smallRecipe: true,
      notUnpackable: true
    },
    {
      mod: "minecraft",
      type: "iron",
      append: "_ingot",
      hasNugget: true
    },
    {
      mod: "minecraft",
      type: "copper",
      append: "_ingot",
      hasNugget: true,
      nuggetMod: "create"
    },
    {
      mod: "minecraft",
      type: "gold",
      append: "_ingot",
      hasNugget: true
    },
    {
      mod: "minecraft",
      type: "diamond",
      hasNugget: true,
      nuggetMod: "techreborn"
    },
    {
      mod: "minecraft",
      type: "netherite",
      append: "_ingot",
      hasNugget: true,
      nuggetMod: "tconstruct"
    },
    {
      mod: "minecraft",
      type: "lapis",
      append: "_lazuli"
    },
    {
      mod: "minecraft",
      type: "emerald",
      hasNugget: true,
      nuggetMod: "techreborn"
    },
    {
      mod: "minecraft",
      type: "quartz",
      smallRecipe: true,
      notUnpackable: true
    },
    {
      mod: "minecraft",
      type: "redstone"
    },
    {
      mod: "create",
      type: "raw_zinc"
    },
    {
      mod: "create",
      type: "zinc",
      append: "_ingot",
      hasNugget: true
    },
    {
      mod: "create",
      type: "andesite_alloy"
    },
    {
      mod: "create",
      type: "brass",
      append: "_ingot",
      hasNugget: true
    },
    {
      mod: "create",
      type: "raw_zinc"
    },
    {
      mod: "createbigcannons",
      type: "cast_iron",
      append: "_ingot",
      hasNugget: true
    },
    {
      mod: "createbigcannons",
      type: "nethersteel",
      append: "_ingot",
      hasNugget: true
    },
    {
      mod: "createdeco",
      type: "cast_iron",
      append: "_ingot",
      hasNugget: true
    },
    {
      // All Tech Reborn blocks will have "_storage" appended before "_block".
      mod: "techreborn",
      type: "advanced_alloy",
      append: "_ingot"
    },
    {
      mod: "techreborn",
      type: "electrum",
      append: "_ingot",
      hasNugget: true
    },
    {
      mod: "techreborn",
      type: "hot_tungstensteel",
      append: "_ingot",
      hasNugget: true
    },
    {
      mod: "techreborn",
      type: "invar",
      append: "_ingot",
      hasNugget: true
    },
    {
      mod: "techreborn",
      type: "lead",
      append: "_ingot",
      hasNugget: true
    },
    {
      mod: "techreborn",
      type: "peridot",
      append: "_gem"
    },
    {
      mod: "techreborn",
      type: "raw_iridium"
    },
    {
      mod: "techreborn",
      type: "raw_lead"
    },
    {
      mod: "techreborn",
      type: "raw_silver"
    },
    {
      mod: "techreborn",
      type: "raw_tin"
    },
    {
      mod: "techreborn",
      type: "raw_tungsten"
    },
    {
      mod: "techreborn",
      type: "red_garnet",
      append: "_gem"
    },
    {
      mod: "techreborn",
      type: "ruby",
      append: "_gem"
    },
    {
      mod: "techreborn",
      type: "sapphire",
      append: "_gem"
    },
    {
      mod: "techreborn",
      type: "silver",
      append: "_ingot",
      hasNugget: true
    },
    {
      mod: "techreborn",
      type: "tin",
      append: "_ingot",
      hasNugget: true
    },
    {
      mod: "techreborn",
      type: "yellow_garnet",
      append: "_gem"
    },
    {
      mod: "tconstruct",
      type: "cobalt",
      append: "_ingot",
      hasNugget: true
    },
    {
      mod: "tconstruct",
      type: "slimesteel",
      append: "_ingot",
      hasNugget: true
    },
    {
      mod: "tconstruct",
      type: "amethyst_bronze",
      append: "_ingot",
      hasNugget: true
    },
    {
      mod: "tconstruct",
      type: "rose_gold",
      append: "_ingot",
      hasNugget: true
    },
    {
      mod: "tconstruct",
      type: "pig_iron",
      append: "_ingot",
      hasNugget: true
    },
    {
      mod: "tconstruct",
      type: "queens_slime",
      append: "_ingot",
      hasNugget: true
    },
    {
      mod: "tconstruct",
      type: "manyullyn",
      append: "_ingot",
      hasNugget: true
    },
    {
      mod: "tconstruct",
      type: "hepatizon",
      append: "_ingot",
      hasNugget: true
    },
    {
      mod: "tconstruct",
      type: "raw_cobalt"
    },
    {
      mod: "yttr",
      type: "yttrium",
      append: "_ingot",
      hasNugget: true
    },
    {
      mod: "yttr",
      type: "raw_gadolinite"
      // Actually Raw Yttrium
    },
    {
      mod: "yttr",
      type: "ultrapure_carbon"
    },
    {
      mod: "yttr",
      type: "compressed_ultrapure_carbon"
    },
    {
      mod: "yttr",
      type: "brookite"
    },
    {
      mod: "yttr",
      type: "cuprosteel",
      append: "_ingot"
    }
  ];
  const SMALL_PILES = [
    // All from Tech Reborn
    { type: "almandine" },
    { type: "andesite" },
    { type: "andradite" },
    { type: "ashes" },
    { type: "basalt" },
    { type: "bauxite" },
    { type: "calcite" },
    { type: "charcoal" },
    { type: "cinnabar" },
    { type: "clay" },
    { type: "coal" },
    { type: "dark_ashes" },
    { type: "diamond" },
    { type: "diorite" },
    { type: "electrum" },
    { type: "emerald" },
    { type: "ender_eye" },
    { type: "ender_pearl" },
    { type: "endstone" },
    { type: "flint" },
    { type: "galena" },
    { type: "glowstone", dust: "minecraft:glowstone_dust" },
    { type: "granite" },
    { type: "grossular" },
    { type: "lazurite" },
    { type: "magnesium" },
    { type: "manganese" },
    { type: "marble" },
    { type: "netherrack" },
    { type: "obsidian" },
    { type: "olivine" },
    { type: "peridot" },
    { type: "phosphorous" },
    { type: "pyrite" },
    { type: "pyrope" },
    { type: "quartz" },
    { type: "redstone", dust: "minecraft:redstone" },
    { type: "red_garnet" },
    { type: "ruby" },
    { type: "sapphire" },
    { type: "saw" },
    { type: "sodalite" },
    { type: "spessartine" },
    { type: "sphalerite" },
    { type: "steel" },
    { type: "uvarovite" },
    { type: "yellow_garnet" }
  ];
  const COMPRESSION_DEGREES = [
    "",
    "double_",
    "triple_",
    "quadruple_",
    "quintuple_",
    "sextuple_",
    "septuple_",
    "octuple_"
  ];
  const COMPRESSABLE_MATERIALS = [
    "stone",
    "granite",
    "diorite",
    "andesite",
    "cobblestone",
    "gravel",
    "sand",
    "dirt",
    "netherrack",
    "basalt",
    "deepslate",
    "cobbled_deepslate",
    "blackstone",
    "end_stone"
  ];
  onEvent("recipes", (event) => {
    event.remove({ type: "techreborn:assembling_machine" });
    event.remove({ type: "techreborn:rolling_machine" });
    PACK_MATERIALS.forEach((material) => {
      let ingotID = `${material.mod}:${material.type}${"append" in material ? material.append : ""}`;
      let blockID = `${material.mod}:${material.type}${material.mod == "techreborn" ? "_storage" : ""}_block`;
      let nuggetID = `${"nuggetMod" in material ? material.nuggetMod : material.mod}:${material.type}_nugget`;
      if ("smallRecipe" in material) {
        pack4(event, ingotID, blockID);
        if (!material.notUnpackable) {
          unpack(event, blockID, ingotID, 4);
        }
      } else {
        pack9(event, ingotID, blockID);
        if ("notUnpackable" in material && !material.notUnpackable) {
          unpack(event, blockID, ingotID, 9);
        }
        if ("hasNugget" in material && material.hasNugget) {
          pack9(event, nuggetID, ingotID);
          if ("notUnpackable" in material && !material.notUnpackable) {
            unpack(event, ingotID, nuggetID, 9);
          }
        }
      }
    });
    pack4(event, "minecraft:glowstone_dust", "minecraft:glowstone");
    SMALL_PILES.forEach((dust) => {
      let smallDustID = `techreborn:${dust.type}_small_dust`;
      let largeDustID = "dust" in dust ? dust.dust : `techreborn:${dust.type}_dust`;
      pack4(event, smallDustID, largeDustID);
      unpack(event, largeDustID, smallDustID, 4);
    });
    COMPRESSABLE_MATERIALS.forEach((material) => {
      for (let i = 0; i < 8; i++) {
        let compressDown = i == 0 ? `minecraft:${material}` : `compressor:${COMPRESSION_DEGREES[i - 1]}compressed_${material}`;
        let compressUp = `compressor:${COMPRESSION_DEGREES[i]}compressed_${material}`;
        pack9(event, compressDown, compressUp);
        unpack(event, compressUp, compressDown, 9);
      }
    });
  });
}
function techRebornSolidCanningMachineRecipes() {
  onEvent("recipes", (event) => {
    const solidCanningMachineRecipes = [
      {
        input: [{ item: "createastral:pure_biomatter" }, { item: "techreborn:cell", nbt: "empty" }],
        output: [{ item: "techreborn:cell", nbt: { fluid: "techreborn:biofuel" } }],
        power: 1,
        time: 100
      },
      {
        input: [{ item: "minecraft:chorus_fruit" }, { item: "techreborn:cell", nbt: "empty" }],
        output: [{ item: "techreborn:cell", nbt: { fluid: "techreborn:compressed_air" } }],
        power: 1,
        time: 60
      }
    ];
    solidCanningMachineRecipes.forEach((recipe) => {
      event.custom({
        type: "techreborn:solid_canning_machine",
        power: recipe.power,
        time: recipe.time,
        ingredients: recipe.input,
        results: recipe.output
      });
    });
  });
}
function techRebornVacuumFreezerRecipes() {
  onEvent("recipes", (event) => {
    const vacuumFreezerRecipes = [
      {
        input: [
          {
            fluid: "minecraft:water",
            holder: "techreborn:cell"
          }
        ],
        output: [
          {
            item: "techreborn:cell",
            nbt: {
              fluid: "kubejs:supercooled_water"
            }
          }
        ],
        power: 25,
        time: 100
      }
    ];
    vacuumFreezerRecipes.forEach((recipe) => {
      event.custom({
        type: "techreborn:vacuum_freezer",
        power: recipe.power,
        time: recipe.time,
        ingredients: recipe.input,
        results: recipe.output
      });
    });
  });
}
function techRebornWireMillRecipes() {
  onEvent("recipes", (event) => {
    wireMillWires(event);
  });
  function wireMillWires(event) {
    const WIRE_MATERIALS = ["iron", "gold", "copper"];
    for (let material of WIRE_MATERIALS) {
      event.custom({
        type: "techreborn:wire_mill",
        power: 2,
        time: 300,
        ingredients: [
          {
            // create calls it golden sheet, otherwise material + _sheet
            item: material === "gold" ? "create:golden_sheet" : `create:${material}_sheet`,
            count: 2
          }
        ],
        results: [
          {
            item: `createaddition:${material}_wire`,
            count: 6
          }
        ]
      });
    }
  }
}
function yttrCentrifugingRecipes() {
  onEvent("recipes", (event) => {
    const centrifugingRecipes = [
      {
        input: { item: "minecraft:coal", count: 16 },
        output: [
          { item: "yttr:ultrapure_carbon", count: 2 },
          { item: "minecraft:black_dye", count: 4 },
          { item: "techreborn:coal_dust", count: 2 },
          { item: "yttr:ash", count: 1 }
        ],
        time: 300
      },
      {
        input: { item: "minecraft:end_stone", count: 16, "yttr:no_substitution": true },
        output: [
          { item: "ae2:ender_dust", count: 1 },
          { item: "yttr:yttrium_dust", count: 2 }
        ],
        time: 200
      },
      {
        input: { item: "astraladditions:enderrack", count: 16, "yttr:no_substitution": true },
        output: [
          { item: "tconstruct:ender_slime_ball", count: 1 },
          { item: "tconstruct:ender_slime_crystal", count: 1 },
          { item: "yttr:neodymium_dust", count: 2 }
        ],
        time: 200
      },
      {
        input: { item: "minecraft:magma_cream", count: 8, "yttr:no_substitution": true },
        output: [
          { item: "minecraft:slime_ball", count: 8 },
          { item: "minecraft:blaze_powder", count: 6 }
        ],
        time: 400
      },
      {
        input: { item: "createastral:crushed_raw_gadolinite" },
        output: [
          { item: "yttr:iron_dust", count: 2 },
          { item: "yttr:neodymium_dust", count: 1 },
          { item: "yttr:yttrium_dust" }
        ],
        time: 200
      },
      {
        input: { item: "minecraft:gold_ingot", count: 8, "yttr:no_substitution": true },
        output: [
          { item: "yttr:ultrapure_gold", count: 2 },
          { item: "tconstruct:pig_iron_nugget", count: 1 },
          { item: "techreborn:andesite_dust", count: 1 }
        ],
        time: 600
      },
      {
        input: { item: "minecraft:netherite_scrap", count: 8, "yttr:no_substitution": true },
        output: [
          { item: "yttr:ultrapure_wolfram", count: 2 },
          { item: "yttr:rubble", count: 1 },
          { item: "minecraft:netherrack", count: 1 },
          { item: "techreborn:netherrack_dust", count: 2 }
        ],
        time: 800
      }
    ];
    centrifugingRecipes.forEach((recipe) => {
      event.custom({
        type: "yttr:centrifuging",
        time: recipe.time,
        ingredient: recipe.input,
        results: recipe.output
      });
    });
  });
}
function yttrLamps() {
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
      { color: "teal", material: "yttr:yttrium_dust" }
    ];
    lampTypes.forEach((lamp) => {
      event.remove({ id: `yttr:crafting/lamp/${lamp}_invert` });
      event.remove({ id: `yttr:crafting/lamp/${lamp}_dye` });
      event.shapeless(Item.of(`yttr:${lamp}`).withNBT('{Inverted:true, LampColor:"colorless"}'), [
        `yttr:${lamp}`,
        "minecraft:redstone_torch"
      ]).modifyResult((grid, result) => {
        let item = grid.find(Item.of(`yttr:${lamp}`).ignoreNBT());
        let inputNbt = item.nbt || {};
        let outputNbt = {};
        if ("Inverted" in inputNbt) outputNbt.Inverted = !inputNbt.Inverted;
        if ("LampColor" in inputNbt) outputNbt.LampColor = inputNbt.LampColor || "colorless";
        else {
          outputNbt.LampColor = "colorless";
        }
        return result.withNBT(outputNbt);
      }).keepIngredient("minecraft:redstone_torch").id(`createastral:crafting/yttr/lamp/${lamp}_invert`);
      event.shapeless(Item.of(`yttr:${lamp}`).withNBT('{Inverted:false, LampColor:"white"}'), [
        `yttr:${lamp}`,
        "#yttr:lamp_dyes"
      ]).modifyResult((grid, result) => {
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
      }).id(`createastral:crafting/yttr/lamp/${lamp}_dye`);
    });
  });
}
function yttrSoakingRecipes() {
  onEvent("recipes", (event) => {
    const soakingRecipes = [
      {
        input: [{ item: "create:chromatic_compound" }],
        soakingFluid: "yttr:void",
        output: { block: "createastral:voidtouched_compound" }
      }
    ];
    soakingRecipes.forEach((recipe) => {
      event.custom({
        type: "yttr:soaking",
        ingredients: recipe.input,
        catalyst: { fluid: recipe.soakingFluid },
        result: recipe.output,
        sound: recipe.sound ?? "yttr:dissolve"
      });
    });
  });
}
settings.logAddedRecipes = false;
settings.logRemovedRecipes = false;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = false;
recipeRemovals();
recipeReplacements();
villagerTrades();
yttrLootFix();
wanderingWinemakerLoot();
dragon();
interaction();
spawnPointFix();
hephaestusFluidSyncFix();
adAstraCryoFuelConversionRecipes();
adAstraOxygenConversionRecipes();
adAstraSpaceStationRecipe();
astralGeneratorsShapedRecipes();
astralGeneratorsShapelessRecipes();
astralGeneratorsMixingRecipes();
astralGeneratorsAmalgationMatrixRecipes();
astralGeneratorsAssemblerRecipes();
astralGeneratorsBoilerRecipes();
astralGeneratorsFusionReactorRecipes();
astralGeneratorsParticleAcceleratorRecipes();
astralGeneratorsSteamTurbineRecipes();
astralSignalsAnalogDecryptorRecipes();
astralSignalsDriveEraserRecipes();
astralSignalsMPDecryptorRecipes();
astralSignalsPPDecryptorRecipes();
astralSignalsRadioTelescopeRecipes();
astralSignalsSequencedAssemblyRecipes();
astralSignalsSignalCoordinatorRecipes();
astralSignalsVinylPrinterRecipes();
astralAdditionsChromaticVacuumRecipes();
astralAdditionsDesizerRecipes();
astralAdditionsShimmerTransmutationRecipes();
automobilityEngineRecipes();
createAdditionChargingRecipes();
createAdditionLiquidBurningRecipes();
createAdditionRollingRecipes();
createBigCannonsMeltingRecipes();
estrogenCentrifugingRecipes();
createCompactingRecipes();
createCrushingRecipes();
createCuttingRecipes();
createDeployingRecipes();
createEmptyingRecipes();
createFillingRecipes();
createHauntingRecipes();
createItemApplicationRecipes();
createMechanicalCraftingRecipes();
createMillingRecipes();
createMixingRecipes();
createPressingRecipes();
createSandpaperPolishingRecipes();
createSequencedAssemblyRecipes();
createWashingRecipes();
distilleryRecipes();
electrolyzerRecipes();
shimmerRefineryRecipes();
stoneGrowthChamberRecipes();
customMachineryRecipes();
farmersDelightCookingRecipes();
farmersDelightCuttingRecipes();
minecraftBlastingRecipes();
minecraftComposterRecipes();
shapedRecipes();
shapelessRecipes();
minecraftSmeltingRecipes();
minecraftSmithingRecipes();
minecraftSmokingRecipes();
minecraftStonecuttingRecipes();
castingBasinRecipes();
castingTableRecipes();
entityMeltingRecipes();
meltingFuelRecipes();
meltingRecipes();
toolMaterialsRecipes();
techRebornBlastFurnaceRecipes();
techRebornCentrifugeRecipes();
techRebornChemicalReactorRecipes();
techRebornCompressorRecipes();
techRebornGrinderRecipes();
techRebornImplosionCompressorRecipes();
techRebornIndustrialElectrolyzerRecipes();
techRebornIndustrialGrinderRecipes();
techRebornIndustrialSawmillRecipes();
techRebornPackingRecipes();
techRebornSolidCanningMachineRecipes();
techRebornVacuumFreezerRecipes();
techRebornWireMillRecipes();
yttrCentrifugingRecipes();
yttrLamps();
yttrSoakingRecipes();
