import { Message } from "./Message";

export class MessageStats {
  constructor(
    public readonly id: number,
    public readonly messageId: number,
    public message: Message,
    public category: "THEORY" | "CODE" | "IMPROVE" | "FIX" | "OTHER",
    public difficulty: "EASY" | "MEDIUM" | "HARD",
    public modelName: string,
    public responseTime: number | null,
  ) {}
}
