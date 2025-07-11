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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const products_entity_1 = require("./products.entity");
const products_gateway_1 = require("./products.gateway");
let ProductsService = class ProductsService {
    productModel;
    gateway;
    constructor(productModel, gateway) {
        this.productModel = productModel;
        this.gateway = gateway;
    }
    async findAll(limit = 10, offset = 0) {
        return this.productModel.findAll({
            limit,
            offset,
            order: [['id', 'DESC']],
        });
    }
    async create(dto) {
        const product = await this.productModel.create({
            name: dto.name,
            description: dto.description,
            price: dto.price,
        });
        this.gateway.emitProductUpdated(product);
        return product;
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(products_entity_1.Product)),
    __metadata("design:paramtypes", [Object, products_gateway_1.ProductsGateway])
], ProductsService);
//# sourceMappingURL=product.service.js.map