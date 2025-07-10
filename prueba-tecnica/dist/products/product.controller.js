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
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const create_product_dto_1 = require("../auth/dto/create-product.dto");
const jwt_auth_guard_1 = require("../common/guards/jwt-auth.guard");
const product_service_1 = require("./product.service");
const bull_1 = require("@nestjs/bull");
let ProductsController = class ProductsController {
    productService;
    queue;
    constructor(productService, queue) {
        this.productService = productService;
        this.queue = queue;
    }
    async findAll(limit, offset) {
        return this.productService.findAll(+limit, +offset);
    }
    create(dto) {
        return this.productService.create(dto);
    }
    async import(file) {
        const job = await this.queue.add('import', {
            filePath: file.path,
        });
        return { message: 'Import started', jobId: job.id };
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('limit')),
    __param(1, (0, common_1.Query)('offset')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('import'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "import", null);
exports.ProductsController = ProductsController = __decorate([
    (0, common_1.Controller)('products'),
    __param(1, (0, bull_1.InjectQueue)('import-queue')),
    __metadata("design:paramtypes", [product_service_1.ProductsService, Object])
], ProductsController);
//# sourceMappingURL=product.controller.js.map