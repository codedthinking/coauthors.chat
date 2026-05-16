import { ROOM_PREVIEW_INITIAL_PARTICIPANTS, ROOM_PREVIEW_NAMES } from "./participants";
import { ROOM_PREVIEW_TRANSCRIPT } from "./transcript";
import type { RoomPreviewDisplayedMessage } from "./types";

/** Completed transcript — used for layout ghost height and reduced-motion view. */
export const ROOM_PREVIEW_FULL_LAYOUT_MESSAGES: RoomPreviewDisplayedMessage[] =
  ROOM_PREVIEW_TRANSCRIPT.map((msg, messageIndex) => ({
    ...msg,
    messageIndex,
    displayText: msg.text,
    isActive: false,
  }));

/** Full transcript for prefers-reduced-motion (no animation). */
export function buildStaticRoomPreviewDisplay(): {
  participants: string[];
  messages: RoomPreviewDisplayedMessage[];
} {
  return {
    participants: [...ROOM_PREVIEW_INITIAL_PARTICIPANTS, ROOM_PREVIEW_NAMES.emily],
    messages: ROOM_PREVIEW_FULL_LAYOUT_MESSAGES,
  };
}
