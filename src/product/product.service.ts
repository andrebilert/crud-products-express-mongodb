import { ProductType } from "./types/product.types";
import Product from "./product.schema"

export class ProductService{

    constructor(){}

    async create(product: ProductType){
        const result = await Product.create(product);
        return result;
    }

    async read() {
        const result = await Product.find();
        return result;
    }
}