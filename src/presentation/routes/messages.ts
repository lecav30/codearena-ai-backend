import Elysia from "elysia";
import { CreateMessage } from "../../application/chat/createMessage";
import { MessagePrismaRepository } from "../../infrastructure/database/prisma/repositories/MessagePrismaRepository";
import { MessageInputSchema } from "../../application/chat/dto/MessageInput";

const messageRepo = new MessagePrismaRepository();
const createMessage = new CreateMessage(messageRepo);

export const messageRoutes = new Elysia({ prefix: "/messages" }).post(
  "/",
  async ({ body }) => {
    return await createMessage.execute(body);
  },
  { body: MessageInputSchema },
);
