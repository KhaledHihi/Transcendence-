import { Repository } from 'typeorm';
import { ChatMessage } from '../entities/chat-message.entity';
export declare class ChatService {
    private readonly chatMessagesRepository;
    constructor(chatMessagesRepository: Repository<ChatMessage>);
}
