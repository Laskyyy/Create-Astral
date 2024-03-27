onEvent("item.tags", (event) => {
    //TODO: move tags processing from server.js to tags/xxx.js

    //Cut Copper block unification, another part at unification.js
    event.get("c:storage_blocks/copper").remove("minecraft:cut_copper");
});
