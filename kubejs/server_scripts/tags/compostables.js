onEvent("recipes", (event) => {
    //adding composting recipes for coral variants
    onEvent("recipes.compostables", (event) => {
        const coral = [{ type: "tube" }, { type: "brain" }, { type: "bubble" }, { type: "fire" }, { type: "horn" }];

        for (const corals of coral) {
            //normal coral
            event.add("minecraft:" + coral.type + "_coral", 0.3);
            event.add("minecraft:dead_" + coral.type + "_coral", 0.5);

            //coral fans
            event.add("minecraft:" + coral.type + "_coral_fan", 0.3);
            event.add("minecraft:dead_" + coral.type + "_coral_fan", 0.5);

            //coral blocks
            event.add("minecraft:" + coral.type + "_coral_block", 0.3);
            event.add("minecraft:dead_" + coral.type + "_coral_block", 0.5);
        }
        // if it breaks, blame b0b, (nah blame me :) )
        // blame b0b :0Blush:
        // Nah blame me this time - _Shortman
    });
});
