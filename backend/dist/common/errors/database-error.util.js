"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDuplicateError = isDuplicateError;
const typeorm_1 = require("typeorm");
function isDuplicateError(error) {
    return (error instanceof typeorm_1.QueryFailedError &&
        error.driverError?.code === 'ER_DUP_ENTRY');
}
//# sourceMappingURL=database-error.util.js.map