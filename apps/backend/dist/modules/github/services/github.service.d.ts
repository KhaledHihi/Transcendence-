import { Repository } from 'typeorm';
import { GitHubInstallation } from '../entities/github-installation.entity';
export declare class GitHubService {
    private readonly installationsRepository;
    constructor(installationsRepository: Repository<GitHubInstallation>);
}
