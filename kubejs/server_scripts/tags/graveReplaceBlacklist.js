onEvent("tags.blocks", (event) => {
    const graveReplaceBlacklist = ["customportalapi:customportalblock"];
    graveReplaceBlacklist.forEach((entry) => {
        event.add("yigd:replace_blacklist", entry);
    });
});
