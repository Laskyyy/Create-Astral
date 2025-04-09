onEvent("item.registry", (event) => {
    wineTransitionals(event);
});

function wineTransitionals(event) {
    // Transitional wines
    const wines = [
        "noir",
        "chenet",
        "king_danis",
        "bolvar",
        "cherry",
        "jellie",
        "clark",
        "mellohi",
        "solaris",
        "aegis",
        "apple",
    ];

    for (const wine in wines) {
        event.create(`kubejs:incomplete_${wine}_wine`, "create:sequenced_assembly").texture(`kubejs:item/${wine}_wine`);
    }

    event.create("kubejs:incomplete_apple_cider").texture("kubejs:item/apple_cider");
    event.create("kubejs:incomplete_kelp_cider").texture("kubejs:item/kelp_cider");
}
