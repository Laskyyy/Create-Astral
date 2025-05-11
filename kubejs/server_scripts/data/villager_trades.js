(function villagerTrades() {
  const VillagerTiers = Object.freeze({
    NOVICE: 1,
    APPRENTICE: 2,
    JOURNEYMAN: 3,
    EXPERT: 4,
    MASTER: 5,
  });
  onEvent("morejs.villager.trades", (event) => {
    const vanillaTradesToRemove = [
      {
        profession: "minecraft:armorer",
        tiers: [VillagerTiers.EXPERT, VillagerTiers.MASTER],
      },
      {
        profession: "minecraft:toolsmith",
        tiers: [VillagerTiers.JOURNEYMAN, VillagerTiers.EXPERT, VillagerTiers.MASTER],
      },
      {
        profession: "minecraft:weaponsmith",
        tiers: [VillagerTiers.EXPERT, VillagerTiers.MASTER],
      },
      {
        profession: "minecraft:cleric",
        tiers: [VillagerTiers.MASTER],
      },
    ];
    const customTradesToAdd = [
      {
        profession: "minecraft:armorer",
        offers: [
          {
            tier: VillagerTiers.APPRENTICE,
            trades: [
              {
                buyItems: [Item.of("minecraft:flint", 18)],
                sellItem: "createastral:sturdy_helmet",
              },
            ],
          },
          {
            tier: VillagerTiers.EXPERT,
            trades: [
              {
                buyItems: [Item.of("minecraft:emerald", 25)],
                sellItem: "createastral:sturdy_chestplate",
              },
              {
                buyItems: [Item.of("minecraft:emerald", 20)],
                sellItem: "createastral:sturdy_leggings",
              },
            ],
          },
          {
            tier: VillagerTiers.MASTER,
            trades: [
              {
                buyItems: [Item.of("minecraft:emerald", 20)],
                sellItem: "createastral:sturdy_helmet",
              },
              {
                buyItems: [Item.of("minecraft:emerald", 27)],
                sellItem: "createastral:sturdy_chestplate",
              },
              {
                buyItems: [Item.of("minecraft:emerald", 23)],
                sellItem: "createastral:sturdy_boots",
              },
            ],
          },
        ],
      },
      {
        profession: "minecraft:toolsmith",
        offers: [
          {
            tier: VillagerTiers.APPRENTICE,
            trades: [
              {
                buyItems: [Item.of("minecraft:flint", 18)],
                sellItem: "createastral:andesite_compound",
              },
            ],
          },
          {
            tier: VillagerTiers.JOURNEYMAN,
            trades: [
              {
                buyItems: [Item.of("minecraft:gravel", 1)],
                sellItem: "minecraft:flint",
              },
              {
                buyItems: [Item.of("minecraft:gold_ingot", 4)],
                sellItem: "create:wrench",
              },
              {
                buyItems: [Item.of("minecraft:flint", 8)],
                sellItem: "create:shaft",
              },
            ],
          },
          {
            tier: VillagerTiers.EXPERT,
            trades: [
              {
                buyItems: [Item.of("minecraft:flint", 12)],
                sellItem: "minecraft:iron_pickaxe",
              },
              {
                buyItems: [Item.of("minecraft:flint", 10)],
                sellItem: "minecraft:iron_shovel",
              },
            ],
          },
          {
            tier: VillagerTiers.MASTER,
            trades: [
              {
                buyItems: [Item.of("minecraft:emerald", 6)],
                sellItem: "createastral:bronze_sheet",
              },
              {
                buyItems: [Item.of("minecraft:emerald", 12)],
                sellItem: "create:sturdy_sheet",
              },
            ],
          },
        ],
      },
      {
        profession: "minecraft:weaponsmith",
        offers: [
          {
            tier: VillagerTiers.EXPERT,
            trades: [
              {
                buyItems: [Item.of("minecraft:flint", 15)],
                sellItem: "tconstruct:dagger",
              },
              {
                buyItems: [Item.of("minecraft:flint", 16)],
                sellItem: "tconstruct:sword",
              },
            ],
          },
          {
            tier: VillagerTiers.MASTER,
            trades: [
              {
                buyItems: [Item.of("minecraft:flint", 17)],
                sellItem: "tconstruct:hand_axe",
              },
              {
                buyItems: [Item.of("minecraft:flint", 18)],
                sellItem: "tconstruct:cleaver",
              },
            ],
          },
        ],
      },
      {
        profession: "minecraft:cleric",
        offers: [
          {
            tier: VillagerTiers.MASTER,
            trades: [
              {
                buyItems: [Item.of("ad_astra:moon_sand", 20)],
                sellItem: "kubejs:shimmer_bucket",
              },
            ],
          },
        ],
      },
      {
        profession: "techreborn:metallurgist",
        offers: [
          {
            tier: VillagerTiers.NOVICE,
            trades: [
              {
                buyItems: [Item.of("minecraft:emerald", 10)],
                sellItem: "createastral:bronze_sheet",
              },
              {
                buyItems: [Item.of("minecraft:gold_ingot", 5)],
                sellItem: "create:wrench",
              },
            ],
          },
          {
            tier: VillagerTiers.APPRENTICE,
            trades: [
              {
                buyItems: [Item.of("minecraft:emerald", 10)],
                sellItem: "create:cogwheel",
              },
            ],
          },
          {
            tier: VillagerTiers.JOURNEYMAN,
            trades: [
              {
                buyItems: [Item.of("minecraft:emerald", 7)],
                sellItem: "createastral:bronze_sheet",
              },
              {
                buyItems: [Item.of("minecraft:emerald", 7)],
                sellItem: "create:iron_sheet",
              },
              {
                buyItems: [Item.of("minecraft:emerald", 6)],
                sellItem: "create:copper_sheet",
              },
            ],
          },
          {
            tier: VillagerTiers.EXPERT,
            trades: [
              {
                buyItems: [Item.of("minecraft:emerald", 10)],
                sellItem: "create:minecart_coupling",
              },
              {
                buyItems: [Item.of("minecraft:emerald", 9)],
                sellItem: "create:whisk",
              },
              {
                buyItems: [Item.of("minecraft:emerald", 9)],
                sellItem: "create:sturdy_sheet",
              },
            ],
          },
          {
            tier: VillagerTiers.MASTER,
            trades: [
              {
                buyItems: [Item.of("minecraft:emerald", 12)],
                sellItem: "create:propeller",
              },
              {
                buyItems: [Item.of("minecraft:emerald", 14)],
                sellItem: "create:brass_hand",
              },
            ],
          },
        ],
      },
      {
        profession: "techreborn:electrician",
        offers: [
          {
            tier: VillagerTiers.NOVICE,
            trades: [
              {
                buyItems: [Item.of("create:andesite_alloy", 2)],
                sellItem: "createaddition:copper_wire",
              },
            ],
          },
          {
            tier: VillagerTiers.APPRENTICE,
            trades: [
              {
                buyItems: [Item.of("minecraft:flint", 3)],
                sellItem: "minecraft:redstone",
              },
              {
                buyItems: [Item.of("create:andesite_alloy", 2)],
                sellItem: "createaddition:gold_wire",
              },
            ],
          },
          {
            tier: VillagerTiers.JOURNEYMAN,
            trades: [
              {
                buyItems: [Item.of("minecraft:flint", 6)],
                sellItem: "minecraft:repeater",
              },
            ],
          },
          {
            tier: VillagerTiers.EXPERT,
            trades: [
              {
                buyItems: [Item.of("create:andesite_alloy", 32)],
                sellItem: "computercraft:computer_normal",
              },
              {
                buyItems: [Item.of("create:andesite_alloy", 5)],
                sellItem: "computercraft:cable",
              },
            ],
          },
          {
            tier: VillagerTiers.MASTER,
            trades: [
              {
                buyItems: [Item.of("create:andesite_alloy", 10)],
                sellItem: "minecraft:comparator",
              },
              {
                buyItems: [Item.of("create:andesite_alloy", 10)],
                sellItem: "minecraft:observer",
              },
            ],
          },
        ],
      },
    ];
    vanillaTradesToRemove.forEach((trade) => {
      trade.tiers.forEach((tier) => {
        event.removeVanillaTrades([trade.profession], tier);
      });
    });
    event.removeModdedTrades();
    customTradesToAdd.forEach((trade) => {
      trade.offers.forEach((offer) => {
        offer.trades.forEach((tieredOffer) => {
          event.addTrade(trade.profession, offer.tier, tieredOffer.buyItems, tieredOffer.sellItem);
        });
      });
    });
  });
})();
