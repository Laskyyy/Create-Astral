export function kubeJSItemRegistry() {
  onEvent("item.registry", (event) => {
    wineTransitionals(event);
  });

  function wineTransitionals(event: Registry.Item) {
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
    ] as const;

    for (const wine of wines) {
      event.create(`kubejs:incomplete_${wine}_wine`, "create:sequenced_assembly").texture(`kubejs:item/${wine}_wine`);
    }

    event.create("kubejs:incomplete_apple_cider").texture("kubejs:item/apple_cider");
    event.create("kubejs:incomplete_kelp_cider").texture("kubejs:item/kelp_cider");
  }
}
