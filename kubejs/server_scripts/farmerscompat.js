onEvent("recipes", (event) => {
    mixingRecipeGen(event);
})

var FULL_BUCKET_AMMOUNT = 81000;
var INGOT_FLUID_AMMOUNT = 9000;

function mixingRecipeGen(event) {
    event.forEachRecipe({type:"farmersdelight:cooking"}, recipe => {
        //Gets item name without namespace (e.g. "cooked_rice")
        var outputItem = recipe.getOriginalRecipeResult().getItem().getId().substring(recipe.getOriginalRecipeResult().getItem().getId().indexOf(":")+1); 
        var inputItems = recipe.getOriginalRecipeIngredients();
        var container;
        
        //Determines container for spouting recipe
        if(outputItem=="hot_cocoa" | outputItem=="apple_cider" | outputItem=="hamburger") {
            container="minecraft:glass_bottle";
        } else if(outputItem=="stuffed_pumpkin_block") {
            container="minecraft:pumpkin";
        } else if(outputItem=="dumplings") {
            container="#c:dough";
        } else {
            container="minecraft:bowl";
        }
        
        //Replaces tomato sauce bowl with fluid in recipes and takes dough out of dumpling recipe
        for (let i = 0; i < inputItems.length; i++) {
            if (inputItems[i].getFirst() == "farmersdelight:tomato_sauce") {
                inputItems.remove(i);
                inputItems.push({fluid:"kubejs:tomato_sauce_fluid", amount: FULL_BUCKET_AMMOUNT/4});
                break;
            } else {
                inputItems[i].getFirst().getTags().forEach( tag => {
                    if(tag=="c:dough") inputItems.remove(i);
                });
            }
        }
        //Generates mixing recipe
        event.recipes
            .createMixing({ fluid: "kubejs:" + outputItem + "_fluid", amount: FULL_BUCKET_AMMOUNT/4 }, inputItems)
            .heatRequirement("heated")
            .processingTime(100);
        
        //Generates spouting recipe
        event.recipes
            .createFilling(recipe.getOriginalRecipeResult(), [
            container,
            { fluid: "kubejs:" + outputItem + "_fluid", amount: FULL_BUCKET_AMMOUNT/4 },
        ]);
        
    });  
    
}
