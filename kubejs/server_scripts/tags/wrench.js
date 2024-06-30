onEvent("item.tags", (event) => {
    [
        "#c:shulker_boxes"
    ].forEach((item) => {
        event.add("create:wrench_pickup", item);
    });
});