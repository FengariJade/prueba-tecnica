import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Product extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  declare id: number;

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.STRING)
  description: string;

  @Column(DataType.INTEGER)
  price: number;
}