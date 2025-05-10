onEvent("morejs.villager.trades", (event) => {
    const vanillaTradesToRemove = [
        ["minecraft:armorer", 4],
        ["minecraft:armorer", 5],
        ["minecraft:toolsmith", 3],
        ["minecraft:toolsmith", 4],
        ["minecraft:toolsmith", 5],
        ["minecraft:weaponsmith", 4],
        ["minecraft:weaponsmith", 5],
        ["minecraft:cleric", 5],
    ];

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
        ["techreborn:electrician", 5, ["10x create:andesite_alloy"], "minecraft:observer"],
    ];

    vanillaTradesToRemove.forEach((trade) => {
        event.removeVanillaTrades(trade[0], trade[1]);
    });

    event.removeModdedTrades();

    customTradesToAdd.forEach((trade) => {
        event.addTrade(trade[0], trade[1], trade[2], trade[3]);
    });
});
