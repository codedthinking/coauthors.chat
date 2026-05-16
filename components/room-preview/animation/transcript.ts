import type { RoomPreviewChatMessage } from "@/shared/conversation";
import { ROOM_PREVIEW_NAMES } from "./participants";

/** Static copy for each message in one animation cycle. */
export const ROOM_PREVIEW_TRANSCRIPT: RoomPreviewChatMessage[] = [
  {
    kind: "user",
    speaker: ROOM_PREVIEW_NAMES.michael,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    kind: "system",
    text: `${ROOM_PREVIEW_NAMES.emily} entered the chat`,
  },
  {
    kind: "user",
    speaker: ROOM_PREVIEW_NAMES.anna,
    text: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    kind: "user",
    speaker: ROOM_PREVIEW_NAMES.anna,
    text: "Lorem ipsum",
  },
  {
    kind: "user",
    speaker: ROOM_PREVIEW_NAMES.diane,
    text: "Adipiscing elit, sed do eiusmod",
    rightAlign: true,
  },
  {
    kind: "user",
    speaker: ROOM_PREVIEW_NAMES.anna,
    text: "Ut labore et dolore magn",
  },
];
