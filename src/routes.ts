import { Router } from "express";
import productController from "./product/product.controller";
//importar as controllers

const routes = Router();

//fazer as rotas
routes.post('/product', productController.create)
routes.get('/product', productController.read)

export default routes;