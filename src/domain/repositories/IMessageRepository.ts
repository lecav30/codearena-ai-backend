import { Message } from "../entities/Message";

export interface IMessageRepository {
  create(message: Message): Promise<Message>;
  findById(id: number): Promise<Message | null>;
  findBySessionId(id: number): Promise<Message[]>;
}
