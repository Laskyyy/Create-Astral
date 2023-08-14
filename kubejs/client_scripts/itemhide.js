let itemRemove = global.removalsList

onEvent('rei.hide.items', event => {
    itemRemove.forEach(itemRemove =>{
        if (Object.keys(itemRemove).length === 1 && itemRemove.hasOwnProperty("output"))
            event.hide(itemRemove.output)
    })
})


//Credit goes to maoran and kellegram for the help with the if check