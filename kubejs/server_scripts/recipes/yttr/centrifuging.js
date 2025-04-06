onEvent('recipes', event => {
  event.custom({
    type: "yttr:centrifuging",
    time: 300,
		ingredient: {
			item: "minecraft:coal",
			count: 16
		},
    results: [
			{
				item: "yttr:ultrapure_carbon",
				count: 2
			},
			{
				item: "minecraft:black_dye",
				count: 4
			},
			{
				item: "techreborn:coal_dust",
				count: 2
			},
			{
				item: "yttr:ash",
				count: 1
			}
		]
  });
})