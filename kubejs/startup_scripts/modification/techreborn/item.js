onEvent("item.modification", (event) => {
    event.modify("techreborn:fuel_bucket", (item) => {
        item.burnTime = 50000;
    });

    event.modify("techreborna:oil_bucket", (item) => {
        item.burnTime = 40000;
    });
});
