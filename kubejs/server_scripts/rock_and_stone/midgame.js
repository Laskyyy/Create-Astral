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
        "post": [
          {
            "type": "drop_item",
            "contextual": [
              {
                "type": "chance",
                "chance": 0.5
              }
            ],
            "item": "ad_astra:desh_nugget",
            "count": 1
          },
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
})