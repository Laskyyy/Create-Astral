
//! Not used, just here for reference 
const customTradesToAdd = [
    ["minecraft:armorer", 4, ["25x minecraft:emerald"], "createastral:sturdy_chestplate"],
    ["minecraft:armorer", 4, ["20x minecraft:emerald"], "createastral:sturdy_leggings"],
    ["minecraft:armorer", 5, ["20x minecraft:emerald"], "createastral:sturdy_helmet"],
    ["minecraft:armorer", 5, ["27x minecraft:emerald"], "createastral:sturdy_chestplate"],
    ["minecraft:armorer", 5, ["23x minecraft:emerald"], "createastral:sturdy_boots"],
    ["minecraft:armorer", 2, ["18x minecraft:flint"], "createastral:andesite_compound"],
    ["minecraft:toolsmith", 3, ["1x minecraft:gravel"], "minecraft:flint"],
    ["minecraft:toolsmith", 3, ["4x minecraft:gold_ingot"], "create:wrench"],
    ["minecraft:toolsmith", 3, ["8x minecraft:flint"], "create:shaft"],
    ["minecraft:toolsmith", 4, ["12x minecraft:flint"], "minecraft:iron_pickaxe"],
    ["minecraft:toolsmith", 4, ["10x minecraft:flint"], "minecraft:iron_shovel"],
    ["minecraft:toolsmith", 2, ["18x minecraft:flint"], "createastral:andesite_compound"],
    ["minecraft:toolsmith", 5, ["6x minecraft:emerald"], "createastral:bronze_sheet"],
    ["minecraft:toolsmith", 5, ["12x minecraft:emerald"], "create:sturdy_sheet"],
    ["minecraft:weaponsmith", 4, ["15x minecraft:flint"], "tconstruct:dagger"],
    ["minecraft:weaponsmith", 4, ["16x minecraft:flint"], "tconstruct:sword"],
    ["minecraft:weaponsmith", 5, ["17x minecraft:flint"], "tconstruct:hand_axe"],
    ["minecraft:weaponsmith", 5, ["18x minecraft:flint"], "tconstruct:cleaver"],
    ["minecraft:cleric", 5, ["20x ad_astra:moon_sand"], "kubejs:shimmer_bucket"],
    ["techreborn:metallurgist", 1, ["10x minecraft:emerald"], "createastral:bronze_sheet"],
    ["techreborn:metallurgist", 1, ["5x minecraft:gold_ingot"], "create:wrench"],
    ["techreborn:metallurgist", 2, ["10x minecraft:emerald"], "create:cogwheel"],
    ["techreborn:metallurgist", 3, ["7x minecraft:emerald"], "createastral:bronze_sheet"],
    ["techreborn:metallurgist", 3, ["7x minecraft:emerald"], "create:iron_sheet"],
    ["techreborn:metallurgist", 3, ["6x minecraft:emerald"], "create:copper_sheet"],
    ["techreborn:metallurgist", 4, ["10x minecraft:emerald"], "create:minecart_coupling"],
    ["techreborn:metallurgist", 4, ["9x minecraft:emerald"], "create:whisk"],
    ["techreborn:metallurgist", 4, ["9x minecraft:emerald"], "create:sturdy_sheet"],
    ["techreborn:metallurgist", 5, ["12x minecraft:emerald"], "create:propeller"],
    ["techreborn:metallurgist", 5, ["14x minecraft:emerald"], "create:brass_hand"],
    ["techreborn:electrician", 1, ["2x create:andesite_alloy"], "createaddition:copper_wire"], 
    ["techreborn:electrician", 2, ["3x minecraft:flint"], "minecraft:redstone"], 
    ["techreborn:electrician", 2, ["2x create:andesite_alloy"], "createaddition:gold_wire"], 
    ["techreborn:electrician", 3, ["6x minecraft:flint"], "minecraft:repeater"], 
    ["techreborn:electrician", 4, ["32x create:andesite_alloy"], "computercraft:computer_normal"],
    ["techreborn:electrician", 4, ["5x create:andesite_alloy"], "computercraft:cable"], 
    ["techreborn:electrician", 5, ["10x create:andesite_alloy"], "minecraft:comparator"],
    ["techreborn:electrician", 5, ["10x create:andesite_alloy"], "minecraft:observer"]
]

/**
 * @typedef {object} replaceTrades Config
 * @property {string} villagerType - String - Requird
 * @property {string} buyItem - String - What the player gives - Requird
 * @property {string} sellItem - String - What the player gets - Requird
 * @property {boolean} careAboutCount - Bool - Does item count matter
 * @property {number} buyCount - Int - How much is needed to buy - Required if caraAboutCount is true
 * @property {number} sellCount - Int - How much is given to player - Required if caraAboutCount is true
 * @property {boolean} replaceBuyItem - Bool
 * @property {string} replaceBuyItemWith - String - What item to replace buy item with - Required if replaceBuyItem is true
 * @property {number} replaceBuyCount - Int - How much is need to buy after replaced - Required if replaceBuyItem is true
 * @property {boolean} replaceSellItem - Bool
 * @property {string} replaceSellItemWith - String - What item to replace sell item with - Required if replaceSellItem is true
 * @property {number} replaceSellCount - Int - How much is given to the player after replaced - Required if replaceSellItem is true
 */
/**
 * @typedef {object} addTrades
 * @property {string} villagerType - String - Requird
 * @property {number} villagerLevel - Int - Requird
 * @property {string} buyItem - String - Requird
 * @property {string} sellItem - String - Requird
 * @property {number} buyCount - Int - Requird
 * @property {number} sellCount - Int - Requird
 * @property {boolean} rewardExp - Bool - Requird
 * @property {number} maxUses - Int - Requird
 * @property {number} uses - Int - Requird
 */

const replaceTrades = [
    //? this is an example use
    {villagerType: "minecraft:armorer", buyItem: "minecraft:emerald", sellItem: "minecraft:diamond_sword",
    careAboutCount: true, buyCount: 25, sellCount: 1,
    replaceBuyItem: true, replaceBuyItemWith: "minecraft:iron_ingot", replaceBuyCount: 1,
    replaceSellItem: true, replaceSellItemWith: "minecraft:iron_boots", replaceSellCount: 1}
]

const addTrades = [
    {villagerType: "minecraft:armorer", villagerLevel: 1, buyItem: "minecraft:dirt", sellItem: "minecraft:sand", 
    buyCount: 2, sellCount: 1, rewardExp: true, maxUses: 12, uses: 0
    }
]

function ReplaceVillagerTrades(entity) {
    let nbt = entity.getFullNBT()

    if (nbt.Offers && nbt.Offers.Recipes) {
        let recipes = nbt.Offers.Recipes

        recipes.forEach(trade => {
            replaceTrades.forEach(newTrade => {
                if (nbt.VillagerData.profession === newTrade.villagerType) {

                    let buyItemMatches = trade.buy.id === newTrade.buyItem
                    let sellItemMatches = trade.sell.id === newTrade.sellItem

                    if (newTrade.careAboutCount) {
                        buyItemMatches = buyItemMatches && (trade.buy.Count === newTrade.buyCount)
                        sellItemMatches = sellItemMatches && (trade.sell.Count === newTrade.sellCount)
                    }

                    if (newTrade.replaceBuyItem && buyItemMatches) {
                        trade.buy.id = newTrade.replaceBuyItemWith
                        trade.buy.Count = newTrade.replaceBuyCount
                    }

                    if (newTrade.replaceSellItem && sellItemMatches) {
                        trade.sell.id = newTrade.replaceSellItemWith
                        trade.sell.Count = newTrade.replaceSellCount
                    }
                }
            })
        })
        entity.setFullNBT(nbt)
    }
}

function AddVillagerTrade(entity) {
    let nbt = entity.getFullNBT()

    if (nbt.Offers && nbt.Offers.Recipes) {
        let recipes = nbt.Offers.Recipes;


        addTrades.forEach(newTrade => {
            if (nbt.VillagerData.profession === newTrade.villagerType && nbt.VillagerData.level >= newTrade.villagerLevel) {

                let tradeExists = recipes.some(trade => {
                    let buyMatches = trade.buy.id === newTrade.buyItem && trade.buy.Count === newTrade.buyCount;
                    let sellMatches = trade.sell.id === newTrade.sellItem && trade.sell.Count === newTrade.sellCount;
                    return buyMatches && sellMatches;
                });

                if (!tradeExists) {
                let newRecipe = {
                    buy: { id: newTrade.buyItem, Count: newTrade.buyCount },
                    sell: { id: newTrade.sellItem, Count: newTrade.sellCount },
                    rewardExp: newTrade.rewardExp,
                    maxUses: newTrade.maxUses,
                    uses: newTrade.uses
                }
                recipes.push(newRecipe);
            }}
        })
        entity.setFullNBT(nbt)
    }
}



onEvent("item.entity_interact", (event) => {
    if (event.target.type == "minecraft:villager") {
        ReplaceVillagerTrades(event.target)
        AddVillagerTrade(event.target)
    }
})

//TODO: Allow the adding of trades