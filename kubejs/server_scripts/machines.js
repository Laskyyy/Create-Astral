onEvent('recipes', event =>{
    event.recipes.custommachinery.custom_machine("createastral:slime_furnace", 100)
       .produceSU(2, 1024)
       .requireItemTag("#c:slimeballs", 1);

    event.recipes.custommachinery.custom_machine("createastral:slime_furnace", 900)
        .produceSU(2, 1024)
        .requireItemTag("#tconstruct:slime_block", 1);

});