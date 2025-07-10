import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from "http";
import { Product } from "./products.entity";

@WebSocketGateway()
export class ProductsGateway {
  @WebSocketServer()
  server: Server;

  emitProductUpdated(product: Product) {
    this.server.emit('product_updated', product);
  }
}