"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsersTable1786034006692 = void 0;
class CreateUsersTable1786034006692 {
    name = 'CreateUsersTable1786034006692';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(30) NOT NULL, \`email\` varchar(255) NOT NULL, \`password_hash\` varchar(255) NOT NULL, \`avatar_url\` varchar(500) NULL, \`role\` enum ('user', 'admin') NOT NULL DEFAULT 'user', \`is_active\` tinyint NOT NULL DEFAULT 1, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_fe0bb3f6520ee0469504521e71\` (\`username\`), UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_fe0bb3f6520ee0469504521e71\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
    }
}
exports.CreateUsersTable1786034006692 = CreateUsersTable1786034006692;
//# sourceMappingURL=1786034006692-CreateUsersTable.js.map