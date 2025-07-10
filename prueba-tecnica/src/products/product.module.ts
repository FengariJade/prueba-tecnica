import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsProcessor } from './product.processor';
import { BullModule } from '@nestjs/bull';
import { ProductsService } from './product.service';
import { ProductsGateway } from './products.gateway';
import { ProductsController } from './product.controller';
import { Module } from '@nestjs/common';
import { Product } from './products.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([Product]),
    BullModule.registerQueue({ name: 'import-queue' }),
  ],
  providers: [ProductsService, ProductsGateway, ProductsProcessor],
  controllers: [ProductsController],
})
export class ProductsModule {}