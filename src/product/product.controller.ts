import { Request, Response } from "express";
import { ProductService } from './product.service'

class ProductController {
    async create(req: Request, res: Response){
        const product = await new ProductService().create(req.body)
        return res.status(200).json(product)
    }

    async read(req: Request, res: Response) {
        const product = await new ProductService().read()
        return res.status(201).json(product)
    }

}

export default new ProductController();