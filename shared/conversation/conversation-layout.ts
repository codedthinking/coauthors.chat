/**
 * Pseudo-shared layout helpers aligned with coauthors-dev
 * `frontend/components/room/Conversation.tsx` (same function names where applicable).
 */

/** Room preview / marketing chat messages (discriminated by `kind`). */
export type RoomPreviewChatMessage =
  | { kind: "system"; text: string }
  | {
      kind: "user";
      speaker: string;
      text: string;
      own?: boolean;
      /** When true, name + bubble align to the right (e.g. Diane) */
      rightAlign?: boolean;
    };

export type RoomPreviewUserMessage = Extract<
  RoomPreviewChatMessage,
  { kind: "user" }
>;

/** coauthors-dev `Message` subset used by `isSameSpeakerAsPrevious` for transcriptions. */
export type DevTranscriptionLikeMessage = {
  type: string;
  clientId?: string;
  username?: string;
};

export function isUserMessage(
  msg: RoomPreviewChatMessage
): msg is RoomPreviewUserMessage {
  return msg.kind === "user";
}

/** Same visual stack as Conversation: same person, alignment, bubble variant. */
function sameUserGroup(
  a: RoomPreviewUserMessage,
  b: RoomPreviewUserMessage
): boolean {
  return (
    a.speaker === b.speaker &&
    !!a.rightAlign === !!b.rightAlign &&
    !!a.own === !!b.own
  );
}

/**
 * Same speaker as previous message?
 * - Room preview: consecutive `kind: "user"` with same speaker / alignment / own bubble.
 * - coauthors-dev: consecutive `type: "transcription"` with same `clientId` or `username`.
 *
 * @see coauthors-dev `Conversation.tsx` — `isSameSpeakerAsPrevious`
 */
export function isSameSpeakerAsPrevious(
  messages: readonly RoomPreviewChatMessage[],
  index: number
): boolean;
export function isSameSpeakerAsPrevious(
  messages: readonly DevTranscriptionLikeMessage[],
  index: number
): boolean;
export function isSameSpeakerAsPrevious(
  messages:
    | readonly RoomPreviewChatMessage[]
    | readonly DevTranscriptionLikeMessage[],
  index: number
): boolean {
  if (index === 0) return false;
  const prev = messages[index - 1];
  const curr = messages[index];

  if (isPreviewUser(prev) && isPreviewUser(curr)) {
    return sameUserGroup(prev, curr);
  }

  if (isDevTranscription(prev) && isDevTranscription(curr)) {
    return (
      (curr.clientId != null && curr.clientId === prev.clientId) ||
      curr.username === prev.username
    );
  }

  return false;
}

function isPreviewUser(m: unknown): m is RoomPreviewUserMessage {
  return (
    typeof m === "object" &&
    m !== null &&
    "kind" in m &&
    (m as RoomPreviewChatMessage).kind === "user"
  );
}

function isDevTranscription(
  m: unknown
): m is DevTranscriptionLikeMessage & { type: "transcription" } {
  return (
    typeof m === "object" &&
    m !== null &&
    "type" in m &&
    (m as DevTranscriptionLikeMessage).type === "transcription"
  );
}

/**
 * 24px block gap (`mt-6`) before this message when it starts a new visual block.
 * Room-preview only; dev Conversation uses `mt-6` on the speaker-name row instead.
 */
export function needsBlockGapAbove(
  messages: readonly RoomPreviewChatMessage[],
  index: number
): boolean {
  if (index === 0) return false;
  const prev = messages[index - 1];
  const curr = messages[index];
  if (isUserMessage(prev) && isUserMessage(curr)) {
    return !sameUserGroup(prev, curr);
  }
  return true;
}

// --- Ported from coauthors-dev Conversation.tsx (unchanged logic) ---

export const MAX_CHARS_PER_BUBBLE = 440;

/** Split text into chunks of at most maxLen chars (prefer breaking at space). */
export function splitIntoBubbles(text: string, maxLen: number): string[] {
  if (!text || text.length <= maxLen) return [text];
  const chunks: string[] = [];
  let remaining = text;
  while (remaining.length > 0) {
    if (remaining.length <= maxLen) {
      chunks.push(remaining);
      break;
    }
    const slice = remaining.slice(0, maxLen);
    const lastSpace = slice.lastIndexOf(" ");
    const cut = lastSpace > maxLen >> 1 ? lastSpace : maxLen;
    chunks.push(remaining.slice(0, cut).trim());
    remaining = remaining.slice(cut).trim();
  }
  return chunks.filter(Boolean);
}
