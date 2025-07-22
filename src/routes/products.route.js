//router
import { Router } from "express";
import productController from '../controllers/products.controller.js';

const productsRoutes = Router();

//Ruta para obtener todos los productos
productsRoutes.get('/', productController.getAllProducts);

//Ruta para obtener un producto por su id
productsRoutes.get('/:id', productController.getProductById);

//Ruta para crear productos,(id: utomatico, name: string, category:string, price: number  )
productsRoutes.post('/create', productController.createProduct);

//Ruta pra eliminar un producto determinado por su id
productsRoutes.delete('/:id', productController.deleteProduct);


export default productsRoutes
