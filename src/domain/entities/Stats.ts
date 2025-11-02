import { User } from "./User";

export class Stats {
  constructor(
    public readonly id: number,
    public readonly userId: number,
    public user: User,
    public totalSessions: number,
    public totalTokens: number,
    public avgResponseTime: number,
    public readonly createdAt: Date,
  ) {}
}
