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
exports.ProductsProcessor = void 0;
const bull_1 = require("@nestjs/bull");
const xlsx = require("xlsx");
const product_service_1 = require("./product.service");
let ProductsProcessor = class ProductsProcessor {
    productService;
    queue;
    constructor(productService, queue) {
        this.productService = productService;
        this.queue = queue;
    }
    async handleImport(job) {
        const { filePath } = job.data;
        const workbook = xlsx.readFile(filePath);
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const rows = xlsx.utils.sheet_to_json(sheet);
        for (const row of rows) {
            await this.productService.create({
                name: row.name,
                description: row.description,
                price: row.price,
            });
        }
    }
};
exports.ProductsProcessor = ProductsProcessor;
__decorate([
    (0, bull_1.Process)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductsProcessor.prototype, "handleImport", null);
exports.ProductsProcessor = ProductsProcessor = __decorate([
    (0, bull_1.Processor)('import-queue'),
    __param(1, (0, bull_1.InjectQueue)('import-queue')),
    __metadata("design:paramtypes", [product_service_1.ProductsService, Object])
], ProductsProcessor);
//# sourceMappingURL=product.processor.js.map