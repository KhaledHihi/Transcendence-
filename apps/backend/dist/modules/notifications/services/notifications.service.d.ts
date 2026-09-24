import { Repository } from 'typeorm';
import { Notification } from '../entities/notification.entity';
export declare class NotificationsService {
    private readonly notificationsRepository;
    constructor(notificationsRepository: Repository<Notification>);
}
