import { Message } from "../../../../domain/entities/Message";
import { IMessageRepository } from "../../../../domain/repositories/IMessageRepository";
import { prisma } from "../client";

export class MessagePrismaRepository implements IMessageRepository {
  async create(message: Message): Promise<Message> {
    const record = await prisma.message.create({
      data: {
        sessionId: message.sessionId,
        role: message.role,
        content: message.content,
        tokens: message.tokens,
      },
    });

    return new Message(
      record.id,
      record.sessionId,
      null,
      record.role as "USER" | "ASSISTANT",
      record.content,
      record.tokens,
      record.createdAt,
      null,
    );
  }

  async findBySessionId(sessionId: number) {
    const records = await prisma.message.findMany({ where: { sessionId } });

    return records.map(
      (r) =>
        new Message(
          r.id,
          r.sessionId,
          null,
          r.role as "USER" | "ASSISTANT",
          r.content,
          r.tokens,
          r.createdAt,
          null,
        ),
    );
  }

  async findById(id: number) {
    const record = await prisma.message.findUnique({ where: { id } });
    if (!record) return null;

    return new Message(
      record.id,
      record.sessionId,
      null,
      record.role as "USER" | "ASSISTANT",
      record.content,
      record.tokens,
      record.createdAt,
      null,
    );
  }
}
