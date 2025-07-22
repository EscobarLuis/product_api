// controller
import productsService from '../services/products.service.js';

//Controlador para buscar un producto por su ID
const getProductById = async (req, res) => {
    const id = req.params.id;
    console.log(`Obteniendo producto con ID: ${id}...controler`);
    
    const product = await productsService.getProduct(id);
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({ message: 'Producto inexistente.' });
    }
};

//Controlador para obtener todos los productos de la BDD
const getAllProducts = async (req, res) => {
    console.log('Obteniendo todos los productos...controler');
    const products = await productsService.getAll();
    
    if (products) {
        res.status(200).json(products);
    } else {
        res.status(404).json({ message: 'No se encontraron datos en la BDD.' });
    }
};

//Controlador para eliminar un producto determinado por su ID
const deleteProduct = async (req, res) => {
    const id = req.params.id;
    await productsService.delProduct(id);
    res.status(200).json({message: 'Producto eliminado.'})

};

//Controlador para agregar un producto a la BDD
const createProduct = async(req, res) => {
    const { name, price, stock, category } = req.body;
    console.log(req.body);

    const newProduct = {name :name, price: price, stock: stock, category: category};
    await productsService.createProduct(newProduct);
    res.status(201).json(newProduct);
};

export default { getProductById, getAllProducts, deleteProduct, createProduct};

