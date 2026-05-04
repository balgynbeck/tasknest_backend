"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const tasks_service_1 = require("./tasks.service");
const create_task_dto_1 = require("./dto/create-task.dto");
const update_task_dto_1 = require("./dto/update-task.dto");
const enums_1 = require("../generated/prisma/enums");
const authorized_decorator_1 = require("../auth/decorators/authorized.decorator");
let TasksController = class TasksController {
    tasksService;
    constructor(tasksService) {
        this.tasksService = tasksService;
    }
    create(createTaskDto, userId) {
        return this.tasksService.create(createTaskDto, userId);
    }
    findAll(status) {
        return this.tasksService.findAll(status);
    }
    findOne(id) {
        return this.tasksService.findOne(+id);
    }
    update(id, updateTaskDto, userId, userRole) {
        return this.tasksService.update(+id, updateTaskDto, userId, userRole);
    }
    remove(id, userId, userRole) {
        return this.tasksService.remove(+id, userId, userRole);
    }
};
exports.TasksController = TasksController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Создать новую задачу (userId берётся из токена)' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Задача успешно создана' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, authorized_decorator_1.Authorized)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_task_dto_1.CreateTaskDto, Number]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Получить все задачи (с фильтрацией по статусу)' }),
    (0, swagger_1.ApiQuery)({ name: 'status', enum: enums_1.TaskStatus, required: false, description: 'Фильтр по статусу задачи' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Список задач' }),
    __param(0, (0, common_1.Query)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Получить задачу по ID с пользователем' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'ID задачи' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Задача с данными пользователя' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Задача не найдена' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Обновить задачу (только владелец или ADMIN)' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'ID задачи' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Задача обновлена' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, authorized_decorator_1.Authorized)('id')),
    __param(3, (0, authorized_decorator_1.Authorized)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_task_dto_1.UpdateTaskDto, Number, String]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Удалить задачу (только владелец или ADMIN)' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: Number, description: 'ID задачи' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Задача удалена' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, authorized_decorator_1.Authorized)('id')),
    __param(2, (0, authorized_decorator_1.Authorized)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String]),
    __metadata("design:returntype", void 0)
], TasksController.prototype, "remove", null);
exports.TasksController = TasksController = __decorate([
    (0, swagger_1.ApiTags)('Tasks'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('tasks'),
    __metadata("design:paramtypes", [tasks_service_1.TasksService])
], TasksController);
//# sourceMappingURL=tasks.controller.js.map