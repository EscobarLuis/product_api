// services
//import firestoreDB from '../models/products.model.js';
import { getAllProducts, getProductById, deleteProduct, saveProduct } from '../models/products.model.js';


const getAll = async () => {
  //aca tengo que buscar los productos en la bdd
  const products = await getAllProducts();
  return products;
};

const getProduct = async (id) => {
  //busco el producto en la bdd por id
  return await await getProductById(id);
};

const createProduct = async (productData) => {
  /* const newProduct = {     
      name: productData.name,
      price: productData.price,
      stock: productData.stock,
      category: productData.category 
  }; */
  //guardo el producto en la bdd
  await saveProduct(productData);
  return productData;
};

const delProduct = async (id) => {
  await deleteProduct(id);
  return id;
};


export default { getAll, getProduct, createProduct, delProduct };
