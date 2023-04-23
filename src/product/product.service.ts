import { ProductType } from "./types/product.types"
import Product from "./product.schema"
import { writeFile } from "fs/promises"
import { readFile } from "fs/promises"

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

    async update(id, data: ProductType) {
        const updateProduct = await Product.findOneAndUpdate({_id: id}, {
            name: data.name,
            quantity: data.quantity,
            price: data.price
        }, {new: true})
        return updateProduct
    }

    async delete(id) {
        await Product.findOneAndDelete(id)
        return "Sucessfully deleted user!";
    }

    async arrayRandom() {
        const result = await Product.find().limit(10)
        let randomProducts: any = []

        while(randomProducts.length < 4) {
            let randomIndex = Math.floor(Math.random() * result.length)
            let randomObject: any = result[randomIndex]
            if(!randomProducts.includes(randomObject)){
                randomProducts.push(randomObject)
            }
        }
        return randomProducts
    }

    async writeProduct() {
        const result = await Product.find()
        await writeFile ('products.json', JSON.stringify(result, null, 2)) 
    }

    async readProduct() {
        const productList = await readFile('products.json', "utf-8")
        return JSON.parse(productList)
    }

}