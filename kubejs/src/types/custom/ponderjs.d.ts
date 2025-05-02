type TagEvent = {
  createTag: (
    tagName: `${string}:${string}`,
    tagIcon: `${string}:${string}`,
    tagTitle: string,
    tagDescription: string,
    defaultItems: Array<`${string}:${string}`>
  ) => void;
};

declare class PonderPalette {
  static readonly "BLACK": Internal.PonderPalette;
  static readonly "GREEN": Internal.PonderPalette;
  static readonly "INPUT": Internal.PonderPalette;
  static readonly "BLUE": Internal.PonderPalette;
  static readonly "FAST": Internal.PonderPalette;
  static readonly "OUTPUT": Internal.PonderPalette;
  static readonly "MEDIUM": Internal.PonderPalette;
  static readonly "WHITE": Internal.PonderPalette;
  static readonly "RED": Internal.PonderPalette;
  static readonly "SLOW": Internal.PonderPalette;
}

declare function onEvent(eventName: "ponder.tag", handler: (event: TagEvent) => void): any;
// What's the type for the event?
declare function onEvent(eventName: "ponder.override", handler: (event: any) => void): any;
