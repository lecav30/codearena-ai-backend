import { MessageStats } from "./MessageStats";
import { Session } from "./Session";

export class Message {
  constructor(
    public readonly id: number,
    public readonly sessionId: number,
    public session: Session | null,
    public role: "USER" | "ASSISTANT",
    public content: string,
    public tokens: number | null,
    public readonly createdAt: Date,
    public stats: MessageStats | null,
  ) {}
}
