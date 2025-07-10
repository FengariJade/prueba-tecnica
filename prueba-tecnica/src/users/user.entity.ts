import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class User extends Model {

  @Column({ primaryKey: true, autoIncrement: true })
  declare id: number;

  @Column({ type: DataType.STRING, unique: true })
  email: string;

  @Column(DataType.STRING)
  password: string;

  @Column({ defaultValue: 'user' })
  role: string;
  
}