onEvent('recipes', event =>{
   event.recipes.custommachinery.custom_machine("createastral:slime_furnace", 100)
       .produceSU(4, 4096)
       .requireItemTag("#c:slimeballs", 1);
});