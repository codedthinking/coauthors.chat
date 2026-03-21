# Shared (pseudo-shared)

This folder is **not** a separate npm package. It signals that the code intentionally **aligns with** coauthors-dev `frontend/components/room/Conversation.tsx`, and we keep it in one place so real sharing or syncing is easier later.

- `conversation/` — message grouping, bubble splitting, and the same **function names** where it makes sense (`isSameSpeakerAsPrevious`, `splitIntoBubbles`, `MAX_CHARS_PER_BUBBLE`), plus **`BubbleTextRow` / `BubbleTextCaret`** for preview-style bubble copy + caret.
