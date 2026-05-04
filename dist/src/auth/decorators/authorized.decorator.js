"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authorized = void 0;
const common_1 = require("@nestjs/common");
exports.Authorized = (0, common_1.createParamDecorator)((field, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    return field ? user?.[field] : user;
});
//# sourceMappingURL=authorized.decorator.js.map