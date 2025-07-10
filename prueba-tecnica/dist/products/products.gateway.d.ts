import { Server } from "http";
import { Product } from "./products.entity";
export declare class ProductsGateway {
    server: Server;
    emitProductUpdated(product: Product): void;
}
