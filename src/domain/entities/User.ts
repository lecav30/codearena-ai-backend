import { ModelStats } from "./ModelStats";
import { Session } from "./Session";
import { Stats } from "./Stats";

export class User {
  constructor(
    public readonly id: number,
    public email: string,
    public password: string,
    public name: string,
    public sessions: Session[],
    public stats: Stats | null,
    public modelStats: ModelStats[],
    public readonly createdAt: Date,
    public updatedAt: Date,
  ) {}
}
