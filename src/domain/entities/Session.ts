import { Message } from "./Message";
import { User } from "./User";

export class Session {
  constructor(
    public readonly id: number,
    public user: User,
    public userId: number,
    public messages: Message[],
    public readonly createdAt: Date,
  ) {}
}
