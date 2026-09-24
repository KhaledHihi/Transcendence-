import { WebhookStatus } from '../../../database/enums/database.enums';
import { Repository } from './repository.entity';
export declare class GitHubWebhookDelivery {
    id: string;
    deliveryId: string;
    repositoryId: string | null;
    repository: Repository | null;
    eventType: string;
    eventAction: string | null;
    status: WebhookStatus;
    receivedAt: Date;
    processedAt: Date | null;
    errorMessage: string | null;
}
