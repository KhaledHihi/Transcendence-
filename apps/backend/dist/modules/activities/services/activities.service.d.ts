import { Repository } from 'typeorm';
import { Activity } from '../entities/activity.entity';
export declare class ActivitiesService {
    private readonly activitiesRepository;
    constructor(activitiesRepository: Repository<Activity>);
}
