import { InjectQueue, Process, Processor } from '@nestjs/bull';
import { Job, Queue } from 'bull';
import * as xlsx from 'xlsx';
import { ProductsService } from './product.service';

type ProductExcelRow = {
        name: string;
        description: string;
        price: number;
    };

@Processor('import-queue')
export class ProductsProcessor {
  constructor(
    private productService: ProductsService,
    @InjectQueue('import-queue') private queue: Queue
  ) {}

  @Process()
    async handleImport(job: Job<{ filePath: string }>) {
    const { filePath } = job.data;

    const workbook = xlsx.readFile(filePath);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = xlsx.utils.sheet_to_json<ProductExcelRow>(sheet);

    for (const row of rows) {
        await this.productService.create({
        name: row.name,
        description: row.description,
        price: row.price,
        });
    }
    }
}