// priority: 0

console.info(
    "Hello, World! (You will see this line every time client resources reload)"
);

onEvent("rei.group", (event) => {
    event.groupItems("kubejs:rei_groups/chipped", "Chipped Blocks", [
        Ingredient.of("@chipped").getItemIds(),
    ]);

    const useNbt = [
        "potion",
        "enchanted_book",
        "splash_potion",
        "tipped_arrow",
        "lingering_potion",
    ];

    useNbt.forEach((id) => {
        const item = Item.of(id);
        const { namespace, path } = Utils.id(item.id);
        event.groupSameItem(
            `kubejs:rei_groups/${namespace}/${path}`,
            item.name,
            item
        );
    });
});

onEvent("rei.add.items", (event) => {
    event.add(Item.of("create:crushed_raw_tin"));
    event.add(Item.of("create:crushed_raw_lead"));
    event.add(Item.of("create:refined_radiance"));
    event.add(Item.of("create:shadow_steel"));
    event.add(Item.of("create:chromatic_compound"));
});

function getPlayerStepHeight(player) {
    const DEFAULT_STEP_HEIGHT = 0.6;

    const leggingsTag = player.getLegsArmorItem().toNBT().tag;
    if (leggingsTag === undefined) return DEFAULT_STEP_HEIGHT;

    const leggingsModifiers = leggingsTag.tic_modifiers;
    if (leggingsModifiers === undefined) return DEFAULT_STEP_HEIGHT;

    const stepUp = leggingsModifiers.filter(
        (mod) => mod.name == "tconstruct:step_up"
    )[0];
    if (stepUp === undefined) return DEFAULT_STEP_HEIGHT;

    if (stepUp.level == 2) {
        return 1.6;
    } else if (stepUp.level == 1) {
        return 1.1;
    } else {
        return DEFAULT_STEP_HEIGHT;
    }
}

onEvent("client.tick", (event) => {
    const player = event.getPlayer();
    if (player === undefined) return;

    player.stepHeight = getPlayerStepHeight(player);
});
