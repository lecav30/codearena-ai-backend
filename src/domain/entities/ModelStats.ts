import { User } from "./User";

export class ModelStats {
  constructor(
    public readonly id: number,
    public readonly userId: number,
    public user: User,
    public modelName: string,
    public usageCount: number,
    public avgTokens: number | null,
    public avgResponseTime: number | null,
    public lastUsedAt: Date | null,
  ) {}
}
