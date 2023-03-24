onEvent("recipes", event => {
	//Misc

	//Input, Output, Chance
	[
		["farmersdelight:straw", "minecraft:string", 1],
		["minecraft:gravel", "minecraft:sand", 0.25],
		["create:veridium", "minecraft:raw_copper", 0.3],
		["create:asurine", "techreborn:raw_tin", 0.2],
		["create:crimsite", "minecraft:raw_iron", 0.2],
		["create:ochrum", "minecraft:raw_gold", 0.2],
	].forEach(recipe => {
		event.recipes.createMilling(
			[Item.of(recipe[1]).withChance(recipe[2])],
			recipe[0]
		);
	});

	//Replace with other netherrack inputs and outputs
	event.remove({ type: "create:crushing", input: "minecraft:netherrack" });

	// Remove grinder calcite dust
	event.remove({
		type: "techreborn:grinder",
		input: "#techreborn:calcite_dust_material",
	});

	const CRUSHING_ORE_BONUS_ORE_YIELD = 0.33;
	const CRUSHING_ORE_BONUS_XP_CHUNKS = 0.33;

	// input: "Item"
	// outputs: [
	//      ["Item", Chance],
	//      ["Item", Chance],
	//      ...
	//   ]
	[
		{
			input: "minecraft:cobbled_deepslate",
			outputs: [
				["minecraft:raw_iron", 0.002],
				["minecraft:raw_gold", 0.001],
				["create:raw_zinc", 0.001],
				["minecraft:raw_copper", 0.002],
				["minecraft:coal", 0.004],
				["techreborn:raw_tin", 0.002],
				["minecraft:redstone", 0.005],
				["minecraft:lapis_lazuli", 0.002],
			],
		},
		//Diorite,Granite,Andesite Crushing
		{
			input: "minecraft:diorite",
			outputs: [
				["minecraft:quartz", 1],
				["techreborn:diorite_dust", 1],
				["techreborn:diorite_dust", 0.5],
				["minecraft:quartz", 0.25],
			],
		},
		{
			input: "minecraft:granite",
			outputs: [
				["minecraft:red_sand", 1],
				["techreborn:granite_dust", 1],
				["techreborn:granite_dust", 0.5],
				["minecraft:red_sand", 0.25],
			],
		},
		{
			input: "minecraft:andesite",
			outputs: [
				["minecraft:cobblestone", 1],
				["techreborn:andesite_dust", 1],
				["techreborn:andesite_dust", 0.5],
			],
		},
		//Netherack Crushing
		{
			input: "minecraft:netherrack",
			outputs: [
				["techreborn:netherrack_dust", 1],
				["techreborn:netherrack_dust", 0.5],
			],
		},
		{
			input: "minecraft:warped_nylium",
			outputs: [
				["techreborn:netherrack_dust", 1],
				["techreborn:netherrack_dust", 0.5],
				["minecraft:warped_fungus", 0.1],
			],
		},
		{
			input: "minecraft:crimson_nylium",
			outputs: [
				["techreborn:netherrack_dust", 1],
				["techreborn:netherrack_dust", 0.5],
				["minecraft:crimson_fungus", 0.1],
			],
		},
		// warped fungi crushing
		{
			input: "minecraft:warped_wart_block",
			outputs: [
				["minecraft:warped_roots", 1],
				["minecraft:warped_fungus", 0.15],
			],
		},
		//Add Lime
		{
			input: "create:limestone",
			outputs: [
				["createastral:lime", 1],
				["createastral:lime", 0.5],
				["minecraft:clay_ball", 0.2],
			],
		},
		{
			input: "minecraft:dripstone_block",
			outputs: [
				["minecraft:clay_ball", 1],
				["minecraft:clay_ball", 0.5],
			],
		},
		{
			input: "#coral_blocks",
			outputs: [["techreborn:calcite_dust", 1]],
		},
		//Asurine, Veridiun Crushing
		{
			input: "create:asurine",
			outputs: [
				["techreborn:lazurite_dust", 0.5],
				["techreborn:raw_tin", 0.2],
				["techreborn:tin_nugget", 0.3],
				["minecraft:clay_ball", 0.2],
			],
		},
		{
			input: "create:veridium",
			outputs: [
				["techreborn:olivine_dust", 0.5],
				["minecraft:raw_copper", 0.6],
				["create:copper_nugget", 0.8],
				["minecraft:clay_ball", 0.2],
			],
		},
		// Ad Astra Crushing
		{
			input: "ad_astra:moon_stone",
			outputs: [["ad_astra:moon_sand", 1]],
		},
		{
			input: "ad_astra:moon_sand",
			outputs: [["minecraft:quartz", 0.05]],
		},
		{
			input: "ad_astra:mars_stone",
			outputs: [["ad_astra:mars_sand", 1]],
		},
		{
			input: "ad_astra:conglomerate",
			outputs: [["ad_astra:ostrum_nugget", 0.3]],
		},
		{
			input: "ad_astra:infernal_spire_block",
			outputs: [
				["minecraft:magma_block", 1],
				["tconstruct:debris_nugget", 0.03],
			],
		},
	].forEach(recipe => {
		var cleanoutputs = [];
		recipe.outputs.forEach(output => {
			if (output[1] == 1) cleanoutputs.push(output[0]);
			else {
				cleanoutputs.push(Item.of(output[0]).withChance(output[1]));
			}
		});
		event.recipes.createCrushing(cleanoutputs, recipe.input);
	});

	// Replace grinder recipes with crushing recipes
	[
		["minecraft:wet_sponge", "5x techreborn:sponge_piece"],
		["minecraft:prismarine_bricks", "7x minecraft:prismarine_shard"],
		["minecraft:prismarine", "3x minecraft:prismarine_shard"],
		["minecraft:sea_lantern", "4x prismarine_crystals"],
		["#c:basalt", "techreborn:basalt_dust"],
		["minecraft:end_stone", "techreborn:endstone_dust"],
	].forEach(recipe => {
		event.remove({ type: "techreborn:grinder", input: recipe[0] });
		event.recipes.createCrushing([recipe[1]], recipe[0]);
	});

	// Replace all techreborn ores to require the crushing wheel for dusts
	[
		"sapphire",
		"bauxite",
		"cinnabar",
		"ruby",
		"galena",
		"peridot",
		"sodalite",
		"pyrite",
		"cinnabar",
		"sphalerite",
	].forEach(ore => {
		const nodeepslate = ["pyrite", "cinnabar", "sphalerite"];
		event.remove({
			type: "techreborn:grinder",
			input: "techreborn:" + ore + "_ore",
		});
		if (!nodeepslate.includes(ore)) {
			event.remove({
				type: "techreborn:grinder",
				input: "techreborn:deepslate_" + ore + "_ore",
			});
		}
		event.recipes.createCrushing(
			[
				"techreborn:" + ore + "_dust",
				Item.of("techreborn:" + ore + "_dust").withChance(0.5),
			],
			"techreborn:" + ore + "_ore"
		);
		if (!nodeepslate.includes(ore)) {
			event.recipes.createCrushing(
				[
					"techreborn:" + ore + "_dust",
					Item.of("techreborn:" + ore + "_dust").withChance(0.5),
				],
				"techreborn:deepslate_" + ore + "_ore"
			);
		}
	});

	[
		"silver",
		"deepslate_silver",
		"tin",
		"deepslate_tin",
		"lead",
		"deepslate_lead",
	].forEach(ore => {
		event.remove({
			type: "techreborn:grinder",
			input: "techreborn:" + ore + "_ore",
		});
		event.recipes.createCrushing(
			["2x techreborn:raw_" + ore.split("_")[1]],
			"techreborn:" + ore + "_ore"
		);
	});
	// Replaces the ore blocks with crushing recipes to produce raw ore instead of grinder recipes

	[
		//TechReborn
		["tin", "silver", "lead"],
		//AdAstra
		["desh", "ostrum"],
		//Vanilla
		["iron", "gold", "copper"],
		//Create
		["zinc"],
	].forEach(mod => {
		var names = ["techreborn", "ad_astra", "minecraft", "create"];
		for (var i = 0; i < mod.length; i++) {
			event.recipes.createCrushing(
				[
					`${names[i]}crushed_${mod[i]}`,
					Item.of(`${names[i]}crushed_${mod[i]}`).withChance(
						CRUSHING_ORE_BONUS_ORE_YIELD
					),
					Item.of("create:experience_nugget").withChance(
						CRUSHING_ORE_BONUS_XP_CHUNKS
					),
				],
				`${names[i]}:raw_${mod[i]}_ore`
			);
		}
	});
	//Chapter 1

	event.custom({
		type: "create:item_application",
		ingredients: [
			{ item: "create:andesite_casing" },
			{ tag: "c:plates/obsidian" },
		],
		results: [{ item: "create:railway_casing" }],
	});

	// Pre-spout sturdy sheet
	var transitional_sturdy_sheet = "create:unprocessed_obsidian_sheet";
	event.recipes
		.createSequencedAssembly(
			[
				Item.of("create:sturdy_sheet").withChance(12),
				Item.of("minecraft:gravel").withChance(8),
			],
			"#c:dusts/obsidian",
			[
				event.recipes.createPressing(
					transitional_sturdy_sheet,
					transitional_sturdy_sheet
				),
				event.recipes.createPressing(
					transitional_sturdy_sheet,
					transitional_sturdy_sheet
				),
			]
		)
		.transitionalItem(transitional_sturdy_sheet)
		.loops(5);
	//Chapter 3

	event.recipes.createFilling("create:electron_tube", [
		"create:polished_rose_quartz",
		{ fluid: "tconstruct:molten_rose_gold", amount: 9000 },
	]);

	//Chapter 4
});
