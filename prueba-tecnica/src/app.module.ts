import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BullModule } from '@nestjs/bull';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/product.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
          dialect: 'sqlite',
          storage: './database.sqlite',
          autoLoadModels: true,
          synchronize: true,
        }),
    UsersModule,
    AuthModule,
    ProductsModule,
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
