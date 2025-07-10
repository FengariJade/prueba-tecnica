import { CreateProductDto } from "src/auth/dto/create-product.dto";
import { ProductsService } from "./product.service";
import { Queue } from 'bull';
export declare class ProductsController {
    private productService;
    private queue;
    constructor(productService: ProductsService, queue: Queue);
    findAll(limit: number, offset: number): Promise<import("./products.entity").Product[]>;
    create(dto: CreateProductDto): Promise<import("./products.entity").Product>;
    import(file: any): Promise<{
        message: string;
        jobId: import("bull").JobId;
    }>;
}
