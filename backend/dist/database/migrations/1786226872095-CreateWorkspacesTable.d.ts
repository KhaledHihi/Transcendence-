import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateWorkspacesTable1786226872095 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
