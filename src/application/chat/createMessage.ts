import { Message } from "../../domain/entities/Message";
import { MessageFactory } from "../../domain/factories/MessageFactory";
import { IMessageRepository } from "../../domain/repositories/IMessageRepository";
import { MessageInput } from "./dto/MessageInput";

export class CreateMessage {
  constructor(private readonly messages: IMessageRepository) {}

  async execute(input: MessageInput): Promise<Message> {
    // Create the entity using the factory
    const message = MessageFactory.createFromUserInput(input);
    // Saving it using the repository
    const saved = await this.messages.create(message);
    // Return the created entity
    return saved;
  }
}
