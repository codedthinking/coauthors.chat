/** American English display names for the room preview demo. */
export const ROOM_PREVIEW_NAMES = {
  michael: "Michael",
  anna: "Anna",
  diane: "Diane",
  emily: "Emily",
} as const;

/** Already in the room before the loop starts (header). */
export const ROOM_PREVIEW_INITIAL_PARTICIPANTS = [
  ROOM_PREVIEW_NAMES.michael,
  ROOM_PREVIEW_NAMES.anna,
  ROOM_PREVIEW_NAMES.diane,
] as const;
