import { ProductService } from "../product/product.service";
import productStock from "./stock.schema"

export class StockService {
    constructor(){}

    async stock(){
        const products = await new ProductService().read();

        const stockProduct = products.map(product => {
            let obj = {
                name: product.name,
                quantity: product.quantity,
                price: product.price,
                stockValue: product.quantity * product.price
            }
            return obj
        })
        const result = await productStock.create(stockProduct)
        return result
    }

    async sumStock() {
        const result = await productStock.find()
        const stockValue = result.reduce((acc, total) => {
            return acc + total.stockValue
        }, 0)
        return stockValue
    }

    
}


