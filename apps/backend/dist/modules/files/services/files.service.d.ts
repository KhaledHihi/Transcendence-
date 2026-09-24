import { Repository } from 'typeorm';
import { WorkspaceFile } from '../entities/workspace-file.entity';
export declare class FilesService {
    private readonly workspaceFilesRepository;
    constructor(workspaceFilesRepository: Repository<WorkspaceFile>);
}
