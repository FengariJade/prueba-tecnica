import { Model } from "sequelize-typescript";
export declare class Product extends Model {
    id: number;
    name: string;
    description: string;
    price: number;
}
