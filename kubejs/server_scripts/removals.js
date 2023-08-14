let itemRemove = global.removalsList
    
onEvent("recipes", (event) => {
    itemRemove.forEach((recipe) => {
        event.remove(recipe);
    });
});
// The list of removals is now in the new start up
// Dont add them here, or i punch you
