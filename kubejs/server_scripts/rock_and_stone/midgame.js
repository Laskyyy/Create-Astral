var FULL_BUCKET_AMMOUNT = 81000;
var INGOT_FLUID_AMMOUNT = 9000;
onEvent("recipes", event => {
    function goldshit(event) {
    //ochrum - outputs - advanced
    event.recipes.createMixing([
        Fluid.of("techreborn:mercury", FULL_BUCKET_AMMOUNT / 10),
        Item.of("techreborn:sulfur_dust").withChance(0.4)
    ], [
        Item.of("techreborn:cinnabar_dust")
    ]).heated()
    event.recipes.createCrushing([
        Item.of("techreborn:cinnabar_dust")
    ], [
        Item.of("createastral:cinnabar") //add a custom crystal thingy here
    ])
    event.recipes.createMilling([
        Item.of("techreborn:cinnabar_dust").withChance(0.7)
    ], [
        Item.of("createastral:cinnabar")
    ])
    event.recipes.createMixing([
        Fluid.of("createastral:gold-mercury_solution", FULL_BUCKET_AMMOUNT / 10), //add a custom fluid here
        Item.of("techreborn:andradite_dust").withChance(0.6)
    ], [
        Fluid.of("techreborn:mercury", FULL_BUCKET_AMMOUNT / 10),
        Item.of("create:ochrum")
    ])
    event.recipes.createMixing([
        Fluid.of("techreborn:mercury", FULL_BUCKET_AMMOUNT / 20),
        Fluid.of("tconstruct:molten_gold", INGOT_FLUID_AMMOUNT * 3)
    ], [
        Fluid.of("createastral:gold-mercury_solution", FULL_BUCKET_AMMOUNT / 10)
    ]).heated()
}
function skystoneshit (event) {
    event.custom({
        "type": "lychee:block_exploding",
        "post": [
          {
            "type": "drop_item",
            "item": "ae2:skystone_dust",
            "count": 2
          },
          {
            "type": "place",
            "block": "ae2:skystone"
          }
        ],
        "block_in": "ae2:skystone"
      })
      event.recipes.createCompacting(
        "ae2:skystone", [
            Item.of("2x ae2:skystone_dust"),
            Fluid.of("kubejs:shimmer", FULL_BUCKET_AMMOUNT / 20)  //=50 mb
        ]
      )
      event.recipes.createCompacting([
        Item.of("ae2:skystone").withChance(0.5),
        Item.of("ae2:skystone")
      ], [
        Item.of("minecraft:basalt"),
        Item.of("2x ae2:skystone_dust"),
        Fluid.of("kubejs:shimmer", FULL_BUCKET_AMMOUNT / 10) //=100 mb
      ])
    }
    function moonstone (event) {
        event.custom({
            "type": "lychee:item_inside",
            "contextual": [
              {
                "type": "location",
                "predicate": {
                  "dimension": "ad_astra:moon"
                }
              }
            ],
            "post": [
              {
                "type": "drop_item",
                "contextual": [
                  {
                    "type": "chance",
                    "chance": 0.7
                  }
                ],
                "item": "ad_astra:desh_nugget",
                "count": 4
              },
              {
                "type": "drop_item",
                "contextual": [
                  {
                    "type": "chance",
                    "chance": 0.3
                  }
                ],
                "item": "ad_astra:moon_cheese",
                "count": 2
              }
            ],
            "item_in": [
              {
                "item": "ad_astra:moon_sand"
              }
            ],
            "block_in": "minecraft:water"
          })
        event.custom({
            "type": "lychee:item_inside",
            "contextual": [
              {
                "type": "location",
                "predicate": {
                  "dimension": "ad_astra:moon"
                }
              }
            ],
            "post": [
              {
                "type": "drop_item",
                "contextual": [
                  {
                    "type": "chance",
                    "chance": 0.7
                  }
                ],
                "item": "ad_astra:desh_nugget",
                "count": 4
              },
              {
                "type": "drop_item",
                "contextual": [
                  {
                    "type": "chance",
                    "chance": 0.3
                  }
                ],
                "item": "ad_astra:moon_cheese",
                "count": 2
              }
            ],
            "item_in": [
              {
                "item": "ad_astra:moon_sand"
              },
              {
                "item": "ae2:skystone_dust"
              }
            ],
            "block_in": "minecraft:water"
          })
    }
    function marsshit (event) {
        event.custom({
            "type": "lychee:block_crushing",
            "post": [
              {
                "type": "prevent_default"
              },
              {
                "type": "drop_item",
                "contextual": [
                  {
                    "type": "chance",
                    "chance": 0.4
                  }
                ],
                "item": "ad_astra:mars:sand"
              },
              {
                "type": "place",
                "block": "ad_astra:mars_stone"
              }
            ],
            "max_repeats": 1,
            "falling_block": "minecraft:anvil",
            "landing_block": "ad_astra:mars_stone"
          }
          )
        event.recipes.createCompacting([
            Item.of("ad_astra:mars_stone")
        ], [
            Item.of("ad_astra:mars_sand"),
            Item.of("ad_astra:mars_sand")
        ]).heated()
        event.recipes.createCompacting([
            Item.of("ad_astra:conglomerate").withChance(0.4),
            Item.of("minecraft:gold_nugget").withChance(0.2)
        ], [
            Item.of("ad_astra:mars_sand"),
            Fluid,of("minecraft:lava", FULL_BUCKET_AMMOUNT / 10),
            Item.of("create:limestone")
        ])
        event.recipes.createCrushing([
            Item.of("techreborn:raw_lead").withChance(0.3),
            Item.of("techreborn:sulfur_dust").withChance(0.6),
            Item.of("powah:uraninite").withChance(0.2)
        ], [
            Item.of("ad_astra:conglomerate")
        ])
        event.custom({
            type: "techreborn:grinder",
            power: 20,
            time: 5, //is 5*20*20 = 2000 E
            input: {
                Item: "ad_astra:conglomerate",
                count: 1
            },
            result: {
                Item: "techreborn:lead_dust"
            }
        })
        event.custom({
            type: "techreborn:industrial_grinder",
            power: 50,
            time: 10, //is 50*10*20 = 20000 E
            tank: {
                fluid: "techreborn:mercury",
                amount: 200
            },
            ingredients: {
                Item: "ad_astra:conglomerate",
                count: 4
            },
            results: [{
                Item: "techreborn:lead_dust",
                count: 2
            }, {
                Item: "powah:uraninite"
            }]
        })
        //infernal spire - netherite
        let inter = "kubejs:incomplete_infernal_spire"
        event.recipes.createSequencedAssembly([
            Item.of("ad_astra:infernal_spire_block").withChance(4),
            Item.of("techreborn:scrap").withChance(1)
        ], "minecraft:basalt", [
            event.recipes.createDeploying(inter, [inter, "ad_astra:mars_sand"]),
            event.recipes.createFilling(inter, [inter, Fluid.of("kubejs:hellfire", FULL_BUCKET_AMMOUNT / 20)]), //is 50 mb
            event.recipes.createCutting(inter, inter)
        ]).transitionalItem(inter).loops(2)
        event.recipes.createCrushing([
            Item.of("tconstruct:debris_nugget").withChance(0.1),
            Item.of("powah:uraninite").withChance(0.25)
        ], [
            Item.of("ad_astra:infernal_spire_block")
        ])
        event.custom({
            type: "techreborn:grinder",
            power: 15,
            time: 10, //is 10*15*20 = 3000 E
            input: {
                item: "ad_astra:infernal_spire_block",
                count: 4
            },
            result: {
                item: "tconstruct:debris_nugget"
            }
        })
        event.custom({
            type: "techreborn:industrial_grinder",
            power: 30,
            time: 20, //is 30*20*20 = 12000 E
            tank: {
                fluid: "techreborn:mercury",
                amount: 500
            },
            ingredients: [{
                item: "ad_astra:infernal_spire_block",
                count: 2
            }],
            results: [{
                item: "kubejs:ground_debris"
            }, {
                fluid: "techreborn:sodium_persulfate",
                amount: 100
            }]
        })
        event.recipes.createCutting("kubejs:cut_debris", "kubejs:ground_debris")
        event.recipes.createCompacting([
            Item.of("minecraft:ancient_debris").withChance(0.7),
            Item.of("techreborn:sulfur_dust"),
            Fluid.of("kubejs:hellfire", FULL_BUCKET_AMMOUNT / 10)
        ], [
            Item.of("kubejs:cut_debris"),
            Fluid.of("techreborn:sodium_persulfate", FULL_BUCKET_AMMOUNT / 10)
        ]).heated()
    }
})