import { Repository } from 'typeorm';
import { Task } from '../entities/task.entity';
export declare class TasksService {
    private readonly tasksRepository;
    constructor(tasksRepository: Repository<Task>);
}
