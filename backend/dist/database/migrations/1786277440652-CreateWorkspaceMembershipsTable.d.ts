import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateWorkspaceMembershipsTable1786277440652 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
