import { Job, Queue } from 'bull';
import { ProductsService } from './product.service';
export declare class ProductsProcessor {
    private productService;
    private queue;
    constructor(productService: ProductsService, queue: Queue);
    handleImport(job: Job<{
        filePath: string;
    }>): Promise<void>;
}
