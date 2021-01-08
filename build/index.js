"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const register_1 = __importDefault(require("@react-ssr/nestjs-express/register"));
const app_module_1 = require("./app.module");
(async () => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await register_1.default(app);
    app.setViewEngine('hbs');
    app.listen(3000, async () => {
        console.log(`> Ready on http://localhost:3000`);
    });
})();
