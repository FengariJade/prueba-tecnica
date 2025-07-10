import { Product } from './products.entity';
import { CreateProductDto } from 'src/auth/dto/create-product.dto';
import { ProductsGateway } from './products.gateway';
export declare class ProductsService {
    private productModel;
    private gateway;
    constructor(productModel: typeof Product, gateway: ProductsGateway);
    findAll(limit?: number, offset?: number): Promise<Product[]>;
    create(dto: CreateProductDto): Promise<Product>;
}
