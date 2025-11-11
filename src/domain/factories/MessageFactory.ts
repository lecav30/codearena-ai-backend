import { Message } from "../entities/Message";

export class MessageFactory {
  static createFromUserInput(input: {
    sessionId: number;
    role: "USER" | "ASSISTANT";
    content: string;
    tokens?: number | null;
  }): Message {
    return new Message(
      0,
      input.sessionId,
      null,
      input.role,
      input.content,
      input.tokens ?? null,
      new Date(),
      null,
    );
  }
}
