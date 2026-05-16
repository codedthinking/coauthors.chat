import type { RoomPreviewChatMessage } from "@/shared/conversation";

export type RoomPreviewDisplayedMessage = RoomPreviewChatMessage & {
  messageIndex: number;
  displayText: string;
  isActive: boolean;
};

export type RoomPreviewStep =
  | { kind: "join"; participant: string }
  | { kind: "system"; messageIndex: number }
  | { kind: "typewrite"; messageIndex: number }
  | { kind: "hold"; durationMs: number }
  | { kind: "reset" };

export type RoomPreviewAnimationState = {
  participants: string[];
  messages: RoomPreviewDisplayedMessage[];
  micActive: boolean;
};
