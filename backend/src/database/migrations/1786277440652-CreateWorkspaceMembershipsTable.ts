import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateWorkspaceMembershipsTable1786277440652 implements MigrationInterface {
    name = 'CreateWorkspaceMembershipsTable1786277440652'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`workspace_memberships\` (\`id\` int NOT NULL AUTO_INCREMENT, \`workspace_id\` int NOT NULL, \`user_id\` int NOT NULL, \`role\` enum ('owner', 'member') NOT NULL DEFAULT 'member', \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_4689405e98986489166f648d1f\` (\`workspace_id\`, \`user_id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`workspace_memberships\` ADD CONSTRAINT \`FK_c478a264ff4081763bb45418ca9\` FOREIGN KEY (\`workspace_id\`) REFERENCES \`workspaces\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`workspace_memberships\` ADD CONSTRAINT \`FK_14cd888d48ea02703648cff0be6\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`workspace_memberships\` DROP FOREIGN KEY \`FK_14cd888d48ea02703648cff0be6\``);
        await queryRunner.query(`ALTER TABLE \`workspace_memberships\` DROP FOREIGN KEY \`FK_c478a264ff4081763bb45418ca9\``);
        await queryRunner.query(`DROP INDEX \`IDX_4689405e98986489166f648d1f\` ON \`workspace_memberships\``);
        await queryRunner.query(`DROP TABLE \`workspace_memberships\``);
    }

}
