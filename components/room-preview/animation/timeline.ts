import { ROOM_PREVIEW_INITIAL_PARTICIPANTS, ROOM_PREVIEW_NAMES } from "./participants";
import type { RoomPreviewStep } from "./types";

export { ROOM_PREVIEW_INITIAL_PARTICIPANTS };

/**
 * Speech & joins after Michael:
 * Michael typewriter → Emily joins → system line → Anna ×2 → Diane → Anna.
 */
export const ROOM_PREVIEW_TIMELINE: RoomPreviewStep[] = [
  { kind: "typewrite", messageIndex: 0 },
  { kind: "join", participant: ROOM_PREVIEW_NAMES.emily },
  { kind: "system", messageIndex: 1 },
  { kind: "typewrite", messageIndex: 2 },
  { kind: "typewrite", messageIndex: 3 },
  { kind: "typewrite", messageIndex: 4 },
  { kind: "typewrite", messageIndex: 5 },
  { kind: "hold", durationMs: 2400 },
  { kind: "reset" },
];

export const ROOM_PREVIEW_TIMING = {
  pauseAfterMessageMs: 380,
  pauseAfterJoinMs: 420,
  pauseAfterSystemMs: 520,
  pauseBeforeLoopMs: 700,
} as const;

export function typewriterCharDelay(char: string): number {
  const base = 44;
  if (char === " ") return Math.round(base * 0.85);
  if (".!?".includes(char)) return base + 120;
  if (",;:".includes(char)) return base + 60;
  return base;
}
