const HIDDEN_ITEMS = [
    "extended_drawers:t1_upgrade",
    "extended_drawers:t2_upgrade",
    "extended_drawers:t3_upgrade",
    "extended_drawers:t4_upgrade",
    "extended_drawers:creative_upgrade",
];

onEvent("rei.hide.items", (event) => {
    HIDDEN_ITEMS.forEach((id) => event.hide(id));
});

onEvent("rei.add.items", (event) => {
    event.add(Item.of("ae2:facade", '{item:"minecraft:stone"}'));
});
