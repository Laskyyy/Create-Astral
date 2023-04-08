onEvent("recipes", (event) => {
    mixingRecipeGen(event);
})
onEvent("fluid.registry", (event) => {
//    fluidGen(event);
})

var FULL_BUCKET_AMMOUNT = 81000;
var INGOT_FLUID_AMMOUNT = 9000;
/*function fluidGen(event) {
    event.forEachRecipe({type:"farmersdelight:cooking"}, recipe => {
        let soup = event
            .create(recipe.getOriginalRecipeResult().getName() + "_fluid")
            .thinTexture(0xffff80)
            .bucketColor(0xffff80)
            .displayName("Liquid " + recipe.getOriginalRecipeResult().getName());
        console.log(soup.displayName);
        
    })
}*/

function mixingRecipeGen(event) {
    event.forEachRecipe({type:"farmersdelight:cooking"}, recipe => {
        var outputItem = recipe.getOriginalRecipeResult().getItem().getId().substring(recipe.getOriginalRecipeResult().getItem().getId().indexOf(":")+1); 
        var inputItems = recipe.getOriginalRecipeIngredients();
        for (let i = 0; i < inputItems.length; i++) {
            if (inputItems[i].getFirst() == "farmersdelight:tomato_sauce") {
                inputItems.remove(i);
                inputItems.push({fluid:"kubejs:tomato_sauce_fluid", amount: FULL_BUCKET_AMMOUNT/4});
                break;
            }
        }
        
        //event.replaceInput({},"farmersdelight:tomato_sauce",{fluid: "kubejs:tomato_sauce_fluid", amount: FULL_BUCKET_AMMOUNT/4});
        console.log(recipe.getOriginalRecipeResult());
        let mixR = event.recipes
            .createMixing({ fluid: "kubejs:" + outputItem + "_fluid", amount: FULL_BUCKET_AMMOUNT/4 }, inputItems)
            .heatRequirement("heated")
            .processingTime(100);
        
        //mixR.replaceIngredient("farmersdelight:tomato_sauce",{fluid: "kubejs:tomato_sauce_fluid", amount: FULL_BUCKET_AMMOUNT/4});
        //console.log(mixR.);

        event.recipes
            .createFilling(recipe.getOriginalRecipeResult(), [
            (outputItem=="hot_cocoa" | outputItem=="apple_cider" | outputItem=="hamburger")? "minecraft:glass_bottle": (outputItem=="stuffed_pumpkin_block" ? "minecraft:pumpkin" : "minecraft:bowl"),
            { fluid: "kubejs:" + outputItem + "_fluid", amount: FULL_BUCKET_AMMOUNT/4 },
        ]);
        
    });  
    
}
