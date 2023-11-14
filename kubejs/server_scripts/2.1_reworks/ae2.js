onEvent("recipes", event => {
    /*
    /As mentioned in orbit.js, I will be using several Powah id's until I found
    /a replacement.
    /
    */
   event.custom({
    type: "techreborn:assembler",
    power: 10,
    time: 20, //is 20*20*10 = 4000 E
    ingredients: [{
        item: "powah:basic_capacitor",
        count: 2
    }, {
        item: "techreborn:basic_machine_frame"
    }],
    result: {
        item: "powah:basic_energy_cell" //I believe they're called cells, probably wrong though
    }
   })
   //lets make an assembling function aint gonna type this shit
   [{
        time: 20,
        energy: 20,
        ingredients: ["powah:blazing_capacitor", 3, "techreborn:advanced_machine_frame", 1],
        result: ["ae2:controller", 1]
   }, {
        time: 30,
        energy: 10,
        ingredients: ["powah:spirited_capacitor", 4, "techreborn:industrial_circuit", 2],
        result: ["kubejs:crafting_hardware"]
   }].forEach((recipe) => {
    event.custom({
        type: "techreborn:assembler",
        ingredients: [{
            item: recipe.input[0],
            count: recipe.input[1],
        }, {
            item: recipe.input[2],
            count: recipe.input[3]
        }],
        result: {
            item: recipe.output[0],
            count: recipe.output[1],
        },
        energy: recipe.energy,
        time:recipe.time
    });
    event.custom({
        type: "createaddition:charging",
        input: {
            item: "kubejs:crafting_hardware",
            count: 1
        },
        result: {
            item: "kubejs:powered_crafting_hardware",
            count: 1
        },
        energy: 10000
    })
    event.custom({
        "type": "powah:energizing",
        "ingredients": [
          {
            "item": "kubejs:crafting_hardware"
          }
        ],
        "energy": 5000,
        "result": {
          "item": "kubejs:powered_crafting_hardware"
        }
    })
    event.shaped("ae2:pattern_provider", [
        "PRP",
        "QFA",
        "PHP"
    ], {
        P: "powah:dieelectric_paste",
        R: "powah:dieelectric_rod",
        Q: "ae2:formation_core",
        A: "ae2:annihilation_core",
        F: "techreborn:industrial_machine_frame",
        H: "kubejs:powered_crafting_hardware"
    })
});
})