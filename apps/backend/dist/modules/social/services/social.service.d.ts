import { Repository } from 'typeorm';
import { Friendship } from '../entities/friendship.entity';
export declare class SocialService {
    private readonly friendshipsRepository;
    constructor(friendshipsRepository: Repository<Friendship>);
}
