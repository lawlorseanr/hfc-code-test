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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const User_model_1 = __importDefault(require("./User.model"));
const ContentStatus_enum_1 = require("../enums/ContentStatus.enum");
let Content = class Content extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        field: "id",
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], Content.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, field: "url" }),
    __metadata("design:type", String)
], Content.prototype, "url", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING, field: "title" }),
    __metadata("design:type", String)
], Content.prototype, "title", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        field: "status",
        defaultValue: ContentStatus_enum_1.ContentStatus.PENDING,
    }),
    __metadata("design:type", String)
], Content.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        field: "userId",
    }),
    __metadata("design:type", Number)
], Content.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => User_model_1.default, "userId"),
    __metadata("design:type", User_model_1.default)
], Content.prototype, "user", void 0);
Content = __decorate([
    (0, sequelize_typescript_1.Table)({ modelName: "content", timestamps: false })
], Content);
exports.default = Content;
