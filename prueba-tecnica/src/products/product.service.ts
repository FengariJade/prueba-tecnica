import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './products.entity';
import { CreateProductDto } from 'src/auth/dto/create-product.dto';
import { ProductsGateway } from './products.gateway';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product) private productModel: typeof Product,
    private gateway: ProductsGateway
  ) {}

  async findAll(limit = 10, offset = 0): Promise<Product[]> {
    return this.productModel.findAll({
      limit,
      offset,
      order: [['id', 'DESC']],
    });
  }

  async create(dto: CreateProductDto): Promise<Product> {
    const product = await this.productModel.create({
      name: dto.name,
      description: dto.description,
      price: dto.price,
    });

    this.gateway.emitProductUpdated(product);

    return product;
  }
  
}
