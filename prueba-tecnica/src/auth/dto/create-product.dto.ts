import { IsString, IsInt, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsInt()
  @Min(0)
  price: number;
}