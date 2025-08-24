/**
 * This file originally contained comments marked with "Better Comments" VS Code extension.
 * Now it has JSDoc comments instead, which have better editor integration.
 * @author TheOverlyCaffeinatedTrashPanda
 */
(function interaction() {
  //* This file Contains the code made by TheOverlyCaffeinatedTrashPanda
  //* each section has comments useing the "Better Comments" extension in VScode
  //* This was made to keep all the custom interactions in 1 file for easy of access
  onEvent("player.logged_in", (event) => {
    if (!event.player.stages.has("starting_items")) {
      event.player.stages.add("starting_items");
      event.player.give("ftbquests:book");
    }
    /**
     * Moved the code for the quest book message into the area where the the player gets the quest book
     * Was Done to reduce the number of "player.logged_in" events
     */
    if (!event.player.stages.has("read_quest")) {
      event.player.tell(
        Text.aqua(Component.translate("logging_tip")).underlined().hover(Component.translate("logging_tip.hover"))
      );
    }
  });
  /**
   * This event checks the the player has opened the quest book.
   */
  onEvent("item.right_click", (event) => {
    if (event.item.id == "ftbquests:book") {
      event.player.stages.add("read_quest");
    }
  });
  /**
   * Makes the conduit take durabiliy damage if used on valid portal blocks.
   * If you wish to increase the Astral Conduit's durability, go [here](../../../kubejs/startup_scripts/registry/createastral/item/item.js).
   * @type {Special.Block[]}
   */
  const conduitBlocks = [
    "createastral:shimmering_stone",
    "createastral:ancient_stone",
    "createastral:moonset_stone",
    "createastral:mercurian_stone",
  ];
  onEvent("block.right_click", (event) => {
    if (event.item.id != "createastral:astral_conduit") return;
    if (!("Damage" in event.item.nbt)) return;
    if (!(typeof event.item.nbt.Damage === "number")) return;
    if (event.item.nbt.Damage <= event.item.itemStack.maxDamage && conduitBlocks.includes(event.block.id)) {
      event.item.nbt.Damage++;
      if (event.item.nbt.Damage >= event.item.itemStack.maxDamage) {
        event.player.inventory.set(event.player.getSelectedSlot(), "air");
      }
    }
    //? Tp player back to their spawn point, or world spawn if no spawn point was set
    //! Please note it will still send the player to their bed if the bed was broke. A fix is planned
    else if (
      event.block.id == "minecraft:bedrock" &&
      event.player.level.dimension.toString() === "minecraft:the_end" &&
      event.player.isCrouching()
    ) {
      let spawnPoint = /** @type {Internal.ServerPlayerJS}*/ (/** @type {unknown} */ (event.player)).getSpawnLocation();

      let worldSpawn = /** @type {Internal.ServerLevel}*/ (
        /** @type {unknown} */ (event.level.minecraftLevel)
      ).getSharedSpawnPos();
      if (spawnPoint == null) {
        event.player.teleportTo("minecraft:overworld", worldSpawn.x, worldSpawn.y, worldSpawn.z, 0, 0);
      } else {
        event.player.teleportTo("minecraft:overworld", spawnPoint.x, spawnPoint.y, spawnPoint.z, 0, 0);
      }
    }
  });
  /// swift andesite by max
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
        `particle minecraft:block minecraft:magenta_concrete_powder ${player.x} ${player.y - 1} ${
          player.z
        } 0.0 0.1 0.0 0 5`
      );
      Utils.server.runCommandSilent(`playsound create:crushing_1 block @a ${player.x} ${player.y} ${player.z}`);
      Utils.server.runCommandSilent(`setblock ${x} ${y - 1} ${z} kubejs:broken_fragile_sheet_block`);
    }
    if (event.level.getBlock(x, y - 1, z).id == "kubejs:fire_resistant_fragile_sheet_block") {
      Utils.server.runCommandSilent(
        `particle minecraft:block kubejs:fire_resistant_fragile_sheet_block ${player.x} ${player.y - 1} ${
          player.z
        } 0.0 0.1 0.0 0 5`
      );
      Utils.server.runCommandSilent(`playsound create:crushing_1 block @a ${player.x} ${player.y} ${player.z}`);
      Utils.server.runCommandSilent(`setblock ${x} ${y - 1} ${z} kubejs:broken_fire_resistant_fragile_sheet_block`);
    }
  });

  /**
   * @typedef ProjectileConfig
   * @property {Projectile} projectile
   * @property {Particles} particles
   * @property {Explosion} explosion
   */

  /**
   * @typedef Projectile
   * @property {Special.Item} item Item ID.
   */

  /** @typedef {ParticlesEnabledWithNoColor | ParticlesEnabledWithColor | ParticlesDisabled} Particles */

  /**
   * @typedef ParticlesEnabledWithNoColor
   * @property {true} enabled Whether the ammo emits particles or not.
   * @property {number} spread
   * @property {number} size
   * @property {number} speed
   * @property {number} count
   * @property {string} type
   * @property {number} size
   * @property {false} hasColor Specifies whether the particle's color can be changed.
   */

  /**
   * @typedef ParticlesEnabledWithColor
   * @property {true} enabled Whether the ammo emits particles or not.
   * @property {number} spread
   * @property {number} size
   * @property {number} speed
   * @property {number} count
   * @property {string} type
   * @property {number} size
   * @property {true} hasColor Specifies whether the particle's color can be changed.
   * @property {[red: number, green: number, blue: number]} color The color of the particle
   */

  /**
   * @typedef ParticlesDisabled
   * @property {false} enabled Whether the ammo emits particles or not.
   */

  /** @typedef {ExplosionEnabled | ExplosionDisabled} Explosion */

  /**
   * @typedef ExplosionEnabled
   * @property {true} enabled
   * @property {number} strength
   * @property {boolean} damageTerrain
   */

  /**
   * @typedef ExplosionDisabled
   * @property {false} enabled
   */

  /** @type {ProjectileConfig[]} */

  //? createAutoJson will now also create the required json for create to understand that it can shoot that item.
  const ammos = [
    {
      projectile: { item: "createastral:astral_singularity" },
      createAutoJson: {
        fileName: "singularity",
        reloadTicks: 90,
        damage: 30,
        knockback: 8,
        drag: 1,
        velocityMultiplier: 0.1,
        gravityMultiplier: 0,
        sticky: true,
        soundPitch: 0,
      },
      particles: {
        enabled: true,
        spread: 2.5,
        size: 10,
        speed: 5,
        count: 100,
        type: "minecraft:dust",
        hasColor: true,
        color: [0.31, 0, 0.7],
      },
      explosion: {
        enabled: true,
        strength: 8,
        damageTerrain: true,
        causesFire: false,
        silent: true,
      },
      AOE: {
        enabled: true,
        effectList: [
          {
            potionEffect: "minecraft:wither",
            potionTime: 5,
            potionAmplifier: 2,
            potionHideParticles: false,
            range: "10",
          },
          {
            potionEffect: "minecraft:hunger",
            potionTime: 5,
            potionAmplifier: 2,
            potionHideParticles: false,
            range: "10",
          },
        ],
      },
      sound: {
        enabled: false,
        soundList: [],
      },
    },
    {
      projectile: { item: "createastral:cogwheel_skull" },
      createAutoJson: {
        fileName: "cogwheel_skull",
        reloadTicks: 60,
        damage: 5,
        knockback: 0,
        drag: 1,
        velocityMultiplier: 0.5,
        gravityMultiplier: 0.5,
        sticky: false,
        soundPitch: 0.5,
      },
      particles: {
        enabled: true,
        spread: 3,
        size: 150,
        speed: 1,
        count: 50,
        type: "ae2:matter_cannon_fx",
        hasColor: false,
      },
      explosion: {
        enabled: false,
      },
      AOE: {
        enabled: true,
        effectList: [
          {
            potionEffect: "minecraft:slowness",
            potionTime: 5,
            potionAmplifier: 100,
            potionHideParticles: true,
            range: "7",
          },
          {
            potionEffect: "minecraft:mining_fatigue",
            potionTime: 5,
            potionAmplifier: 100,
            potionHideParticles: true,
            range: "7",
          },
          {
            potionEffect: "minecraft:weakness",
            potionTime: 5,
            potionAmplifier: 100,
            potionHideParticles: true,
            range: "7",
          },
          {
            potionEffect: "minecraft:jump_boost",
            potionTime: 5,
            potionAmplifier: 200,
            potionHideParticles: true,
            range: "7",
          },
        ],
      },
    },
    {
      projectile: { item: "createbigcannons:autocannon_cartridge" },
      particles: {
        enabled: false,
      },
      explosion: {
        enabled: true,
        strength: 3,
        damageTerrain: false,
      },
    },
  ];

  onEvent("server.load", () => {
    ammos.forEach((ammoType) => {
      if (!ammoType.createAutoJson) return;
      const ammo = ammoType.createAutoJson;
      let json = {
        items: [ammoType.projectile.item],
        reload_ticks: ammo.reloadTicks,
        damage: ammo.damage,
        knockback: ammo.knockback,
        drag: ammo.drag,
        velocity_multiplier: ammo.velocityMultiplier,
        gravity_multiplier: ammo.gravityMultiplier,
        sticky: ammo.sticky,
        sound_pitch: ammo.soundPitch,
      };
      JsonIO.write(`kubejs/data/createastral/potato_cannon_projectile_types/${ammo.fileName}.json`, json);
    });
  });

  onEvent("entity.spawned", (event) => {
    const { entity, server } = event;
    if (entity.type === "create:potato_projectile") {
      ammos.forEach((ammoType) => {
        if (entity.fullNBT.Item.id === ammoType.projectile.item) {
          server.scheduleInTicks(5, (event) => {
            if (entity.removed || entity.deadOrDying || !entity.alive) {
              let x = entity.fullNBT.Pos[0];
              let y = entity.fullNBT.Pos[1];
              let z = entity.fullNBT.Pos[2];
              let dim = entity.getLevel().getDimension();
              let explosion = entity.block.offset(0, 0, 0).createExplosion();
              if (ammoType.particles.enabled) {
                if (ammoType.particles.hasColor) {
                  let [red, green, blue] = ammoType.particles.color;
                  server.runCommandSilent(
                    `execute in ${dim} run particle ${ammoType.particles.type} ${red} ${green} ${blue} ${ammoType.particles.size} ${x} ${y} ${z} ${ammoType.particles.spread} ${ammoType.particles.spread} ${ammoType.particles.spread} ${ammoType.particles.speed} ${ammoType.particles.count}`
                  );
                } else {
                  server.runCommandSilent(
                    `execute in ${dim} run particle ${ammoType.particles.type} ${x} ${y} ${z} ${ammoType.particles.spread} ${ammoType.particles.spread} ${ammoType.particles.spread} ${ammoType.particles.speed} ${ammoType.particles.count}`
                  );
                }
              }
              if (ammoType.explosion.enabled) {
                explosion.strength(ammoType.explosion.strength);
                explosion.damagesTerrain(ammoType.explosion.damageTerrain);
                explosion.causesFire(ammoType.explosion.causesFire);
                explosion.explode();

                if (ammoType.explosion.silent) {
                  server.runCommandSilent(
                    `execute in ${dim} positioned ${x} ${y} ${z} run stopsound @a[distance=..128] block minecraft:entity.generic.explode`
                  );
                }
              }
              if (ammoType.AOE.enabled) {
                ammoType.AOE.effectList.forEach((command) => {
                  server.runCommandSilent(
                    `execute in ${dim} positioned ${x} ${y} ${z} run effect give @e[type=!item, distance=..${command.range}] ${command.potionEffect} ${command.potionTime} ${command.potionAmplifier} ${command.potionHideParticles}`
                  );
                });
              }

              if (ammoType.sound.enabled) {
                ammoType.sound.soundList.forEach((command) => {
                  server.runCommandSilent(
                    `execute in ${dim} run playsound ${command.soundName} ${command.soundType} @a[distance=..${command.soundRange}] ${x} ${y} ${z} ${command.soundVolume} ${command.soundPitch}`
                  );
                });
              }

              return;
            }
            event.reschedule();
          });
        }
      });
    } else if (entity.type === "minecraft:item") {
      let dim = entity.getLevel().getDimension();
      let x = entity.x,
        y = entity.y,
        z = entity.z;
      switch (entity.item) {
        case "createastral:fragile_sheet":
          entity.item = "createastral:broken_fragile_sheet";
          server.runCommandSilent(
            `execute in ${dim} run particle minecraft:block minecraft:magenta_concrete_powder ${entity.x} ${entity.y} ${entity.z} 0.0 0.1 0.0 0 5`
          );
          server.runCommandSilent(
            `execute in ${dim} run playsound create:crushing_1 block @a ${entity.x} ${entity.y} ${entity.z}`
          );
          break;

        case "createastral:fragile_rocket_fin":
          entity.item = "createastral:broken_fragile_rocket_fin";
          server.runCommandSilent(
            `execute in ${dim} run particle minecraft:block createastral:sturdy_sheet_block ${entity.x} ${entity.y} ${entity.z} 0.0 0.1 0.0 0 5`
          );
          server.runCommandSilent(
            `execute in ${dim} run playsound create:crushing_1 block @a ${entity.x} ${entity.y} ${entity.z}`
          );
          break;

        case "kubejs:fragile_sheet_block":
          entity.item = "kubejs:broken_fragile_sheet_block";
          server.runCommandSilent(
            `execute in ${dim} run particle minecraft:block kubejs:fragile_sheet_block ${entity.x} ${entity.y} ${entity.z} 0.0 0.1 0.0 0 5`
          );
          server.runCommandSilent(
            `execute in ${dim} run playsound create:crushing_1 block @a ${entity.x} ${entity.y} ${entity.z}`
          );
          break;

        case "kubejs:fire_resistant_fragile_sheet_block":
          entity.item = "kubejs:broken_fire_resistant_fragile_sheet_block";
          server.runCommandSilent(
            `execute in ${dim} run particle minecraft:block kubejs:broken_fire_resistant_fragile_sheet_block ${entity.x} ${entity.y} ${entity.z} 0.0 0.1 0.0 0 5`
          );
          server.runCommandSilent(
            `execute in ${dim} run playsound create:crushing_1 block @a ${entity.x} ${entity.y} ${entity.z}`
          );
          break;

        default:
      }
    } else if (entity.type === "minecraft:area_effect_cloud") {
      console.log(entity.fullNBT);
      if (entity.fullNBT.Potion === "minecraft:fire_resistance") {
        let x_f = Math.floor(entity.fullNBT.Pos[0]);
        let y_f = Math.floor(entity.fullNBT.Pos[1]);
        let z_f = Math.floor(entity.fullNBT.Pos[2]);
        Utils.server.runCommandSilent(
          `fill ${x_f - 1} ${y_f - 1} ${z_f - 1} ${x_f + 1} ${y_f + 1} ${
            z_f + 1
          } kubejs:fire_resistant_fragile_sheet_block replace kubejs:fragile_sheet_block`
        );
        Utils.server.runCommandSilent(
          `fill ${x_f - 1} ${y_f - 1} ${z_f - 1} ${x_f + 1} ${y_f + 1} ${
            z_f + 1
          } kubejs:broken_fire_resistant_fragile_sheet_block replace kubejs:broken_fragile_sheet_block`
        );
      }
    }
  });
})();
