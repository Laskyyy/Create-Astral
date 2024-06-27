//* This file Contains the code made by TheOverlyCaffeinatedTrashPanda
//* each section has comments useing the "Better Comments" extension in VScode
//* This was made to keep all the custom interactions in 1 file for easy of access

onEvent("player.logged_in", (event) => {
    if (!event.player.stages.has("starting_items")) {
        event.player.stages.add("starting_items");

        event.player.give("ftbquests:book");
    }

    //? Moved the code for the quest book message into the area where the the player gets the quest book
    //? Was Done to reduce the number of "player.logged_in" events
    //!This point forward, all code was made by TheOverlyCaffeinatedTrashPanda
    if (!event.player.stages.has("read_quest")) {
        event.player.tell(
            Text.aqua("Please Read The Quest Book (Hover Over Me!)")
                .underlined()
                .hover(
                    "The quest book contains most of all the information needed to progress in this mod pack. Its your friend!, Use the item to remove this message"
                )
        );
    }
});

//? checks if player has opend the quest book
onEvent("item.right_click", (event) => {
    if (event.item.id == "ftbquests:book") {
        event.player.stages.add("read_quest");
    }
});

//? Makes the conduit take damge if used on shimmer stone
//? If you wish to increase the damge please goto startup scripts, line 385, then what ever value you set it, take 1 off and change the 19

onEvent("block.right_click", (event) => {
    if (
        event.block.id == "createastral:shimmering_stone" &&
        event.item.id == "createastral:astral_conduit" &&
        event.item.nbt["Damage"] <= 19
    ) {
        event.item.nbt["Damage"]++;
        if (event.item.nbt["Damage"] == 20) {
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
        let spawnPoint = event.player.getSpawnLocation();
        let worldSpawn = event.level.minecraftLevel.getSharedSpawnPos();

        if (spawnPoint == null) {
            event.player.teleportTo("minecraft:overworld", worldSpawn.x, worldSpawn.y, worldSpawn.z, 0, 0);
        } else {
            event.player.teleportTo("minecraft:overworld", spawnPoint.x, spawnPoint.y, spawnPoint.z, 0, 0);
        }
    }
});

//? Add code to make different potato projectiles go bang

//! READ ME:
//* when you add a new ammo type. make sure it add it to Create-Astral\global_packs\required_data\zLaky Core\data\createastral\potato_cannon_projectile_types
//* Use the cog as an example.

//? Possable Fields:
/**
 * @typedef {object} ProjectileConfig
 * @property {string} projectileItem - Required - String
 * @property {boolean} particlesEnable - Required - Bool
 * @property {number} [particleSpread] - Required if particlesEnable is true - Float
 * @property {number} [particleSize] - Required if particlesEnable is true - Float
 * @property {number} [particleSpeed] - Required if particlesEnable is true - Float
 * @property {number} [particleCount] - Required if particlesEnable is true - Float
 * @property {string} [particleType] - Required if particlesEnable is true - String
 * @property {boolean} [particleHasColour] - Required if particlesEnable is true - Bool
 * @property {number} [particleColourR] - Required if particleHasColour is true - Float
 * @property {number} [particleColourG] - Required if particleHasColour is true - Float
 * @property {number} [particleColourB] - Required if particleHasColour is true - Float
 * @property {boolean} explosionEnable - Required - Bool
 * @property {number} [explosionStrength] Required if explosionEnable is true - Float
 * @property {boolean} [explosionDamageTerrain] Required if explosionEnable is true - Bool
 */

const ammos = [
    {
        projectileItem: "createastral:astral_singularity", //? Item ID
        particlesEnable: true, //? Does it have particles
        particleSpread: 2.5,
        particleSize: 10,
        particleSpeed: 5,
        particleCount: 100, //? Settings

        particleType: "minecraft:dust",
        particleHasColour: true, //? Type of particle and if its colour can be changed
        particleColourR: 0.31,
        particleColourG: 0,
        particleColourB: 0.7, //? Colour settings

        explosionEnable: true, //? Does it go boom
        explosionStrength: 10,
        explosionDamageTerrain: true, //? How strong it go boom and if it hurt the land
    },

    {
        projectileItem: "createbigcannons:flak_autocannon_round",
        particlesEnable: false,

        explosionEnable: true,
        explosionStrength: 5,
        explosionDamageTerrain: true,
    },
];

// TODO: Test this with multiple people shooting at once
onEvent("entity.spawned", (event) => {
    const { entity, server } = event;
    ammos.forEach((ammoType) => {
        if (entity.type === "create:potato_projectile" && entity.fullNBT.Item.id === ammoType.projectileItem) {
            server.scheduleInTicks(5, (event) => {
                if (entity.removed || entity.deadOrDying || !entity.alive) {
                    let x = entity.fullNBT.Pos[0];
                    let y = entity.fullNBT.Pos[1];
                    let z = entity.fullNBT.Pos[2];
                    let explosion = entity.block.offset(0, 0, 0).createExplosion();

                    if (ammoType.particlesEnable) {
                        if (ammoType.particleHasColour) {
                            server.runCommandSilent(
                                `particle ${ammoType.particleType} ${ammoType.particleColourR} ${ammoType.particleColourG} ${ammoType.particleColourB} ${ammoType.particleSize} ${x} ${y} ${z} ${ammoType.particleSpread} ${ammoType.particleSpread} ${ammoType.particleSpread} ${ammoType.particleSpeed} ${ammoType.particleCount}`
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
                event.reschedule();
            });
        }
    });
    //! Made by TheOverlyCaffeinatedTrashPanda
});
