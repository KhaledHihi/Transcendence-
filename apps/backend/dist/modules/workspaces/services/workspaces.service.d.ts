import { Repository } from 'typeorm';
import { Workspace } from '../entities/workspace.entity';
export declare class WorkspacesService {
    private readonly workspacesRepository;
    constructor(workspacesRepository: Repository<Workspace>);
}
