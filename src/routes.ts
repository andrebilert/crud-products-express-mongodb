import { Router } from "express";
import productController from "./product/product.controller";
import stockController from "./stock/stock.controller";

const routes = Router();

routes.post('/stock', stockController.createStock)
routes.post('/product', productController.create)
routes.get('/product', productController.read)
routes.put('/product/:id', productController.update)
routes.delete('/product/:id', productController.delete)
routes.get('/product-random', productController.listRandom)
routes.get('/stock-total', stockController.stockValue)
routes.post('/write-product', productController.writeProducts)
routes.get('/read-product', productController.readProducts)

export default routes;