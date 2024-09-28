onEvent("recipes", (event) => {
    mixingRecipeGen(event);
    cuttingRecipeGen(event);
});

const FULL_BUCKET_AMOUNT = 81000;
const INGOT_FLUID_AMOUNT = 9000;

function mixingRecipeGen(event) {
    event.forEachRecipe({ type: "farmersdelight:cooking" }, (recipe) => {
        let outputItem = recipe.getOriginalRecipeResult().getId().split(":")[1];
        let inputItems = recipe.json.get("ingredients").deepCopy();
        if (outputItem == "cabbage_rolls") return; //too few ingredients to add recipe for

        let containers = {
            "minecraft:glass_bottle": ["hot_cocoa", "apple_cider", "glow_berry_custard"],
            "minecraft:pumpkin": ["stuffed_pumpkin_block"],
            "#c:dough": ["dumplings"],
        };

        let container =
            Object.keys(containers).find((key) =>
                containers[key].includes(outputItem)
            ) ?? "minecraft:bowl";

        for (let i = 0; i < inputItems.size(); i++) {
            if((inputItems.get(i).getClass() == "class com.google.gson.JsonObject")) {
                if (inputItems.get(i).has("item")) {
                    if (inputItems.get(i).get("item").toString().replaceAll("\"","") == "farmersdelight:tomato_sauce") {
                        let JsonObject = java('com.google.gson.JsonObject');
                        let tomato_sauce_fluid_ingredient = new JsonObject();
                        tomato_sauce_fluid_ingredient.add("fluid", "kubejs:tomato_sauce_fluid");
                        tomato_sauce_fluid_ingredient.add("amount", FULL_BUCKET_AMOUNT/4);
                        inputItems.set(i,tomato_sauce_fluid_ingredient);
                    }
                } else {
                    if (inputItems.get(i).has("tag")) {
                        if(inputItems.get(i).get("tag").toString().replaceAll("\"","") == ("c:dough")) {
                            inputItems.remove(inputItems.get(i)); //removes dough from dumpling recipe
                        } else if (inputItems.get(i).get("tag").toString().replaceAll("\"","") == "c:milk") {
                            let JsonObject = java('com.google.gson.JsonObject');
                            let milk = new JsonObject();
                            milk.add("fluid", "milk:still_milk");
                            milk.add("amount", FULL_BUCKET_AMOUNT/4);
                            inputItems.set(i,milk);
                        }    
                    }
                }
            }
        }
        event.recipes
            .createMixing(
                {
                    fluid: "kubejs:" + outputItem + "_fluid",
                    amount: FULL_BUCKET_AMOUNT / 4,
                },
                inputItems
            )
            .heatRequirement("heated")
            .processingTime(100);

        event.recipes.createFilling(recipe.getOriginalRecipeResult(), [
            container,
            {
                fluid: "kubejs:" + outputItem + "_fluid",
                amount: FULL_BUCKET_AMOUNT / 4,
            },
        ]);
    });
}

function cuttingRecipeGen(event) {
    event.forEachRecipe({ type: "farmersdelight:cutting" }, (recipe) => {
        let newList = Utils.newList();
        recipe.json.get("result").forEach((e) => newList.push(e));
        newList.reverse(); //prevents conflicts with existing cutting recipes (e.g. log stripping)
        event.custom({
            type: "create:cutting",
            ingredients: recipe.json.get("ingredients"),
            results: newList,
            processingItem: 50,
        });
    });
}
