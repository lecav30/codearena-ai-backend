import { t } from "elysia";

export const MessageInputSchema = t.Object({
  sessionId: t.Number(),
  role: t.Union([t.Literal("USER"), t.Literal("ASSISTANT")]),
  content: t.String(),
  tokens: t.Optional(t.Number()),
});

export type MessageInput = typeof MessageInputSchema.static;
