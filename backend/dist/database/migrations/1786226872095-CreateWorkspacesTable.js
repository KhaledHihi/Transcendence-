"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWorkspacesTable1786226872095 = void 0;
class CreateWorkspacesTable1786226872095 {
    name = 'CreateWorkspacesTable1786226872095';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`workspaces\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, \`description\` text NULL, \`owner_id\` int NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`workspaces\` ADD CONSTRAINT \`FK_3bc45ecdd8fdc2108bb92516dde\` FOREIGN KEY (\`owner_id\`) REFERENCES \`users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`workspaces\` DROP FOREIGN KEY \`FK_3bc45ecdd8fdc2108bb92516dde\``);
        await queryRunner.query(`DROP TABLE \`workspaces\``);
    }
}
exports.CreateWorkspacesTable1786226872095 = CreateWorkspacesTable1786226872095;
//# sourceMappingURL=1786226872095-CreateWorkspacesTable.js.map