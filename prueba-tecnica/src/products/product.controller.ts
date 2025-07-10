import { Body, Controller, Get, Post, Query, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";

import { FileInterceptor } from "@nestjs/platform-express";
import { CreateProductDto } from "src/auth/dto/create-product.dto";
import { JwtAuthGuard } from "src/common/guards/jwt-auth.guard";
import { ProductsService } from "./product.service";

import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Controller('products')
export class ProductsController {

  constructor(
    private productService: ProductsService,
    @InjectQueue('import-queue') private queue: Queue
    ) {}

    @Get()
        async findAll(@Query('limit') limit: number, @Query('offset') offset: number) {
            return this.productService.findAll(+limit, +offset);
    }

    @UseGuards(JwtAuthGuard)
        @Post()
        create(@Body() dto: CreateProductDto) {
        return this.productService.create(dto);
    }
    
    @Post('import')
        @UseInterceptors(FileInterceptor('file'))
        async import(@UploadedFile() file: any) {
        const job = await this.queue.add('import', {
            filePath: file.path,
        });
        return { message: 'Import started', jobId: job.id };
    }
    
}
