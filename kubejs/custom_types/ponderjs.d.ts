type TagEvent = {
    createTag: (
        tagName: `${string}:${string}`,
        tagIcon: `${string}:${string}`,
        tagTitle: string,
        tagDescription: string,
        defaultItems: Array<`${string}:${string}`>
    ) => void
}

declare function onEvent(eventName: "ponder.tag", handler: (event: TagEvent) => void): any