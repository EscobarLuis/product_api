// model
import { db } from "../data/data.js";
import {collection, getDocs, getDoc, addDoc, deleteDoc, doc } from 'firebase/firestore'; 

const productsCollection = collection(db, 'products');

//buscamos un producto derminado, usando su id
export const getProductById = async (id) => {
    
    const productDoc = await getDoc(doc(productsCollection, id));
    if (productDoc.exists()) {
        return productDoc.data();
    } else {
        return null;
    }
};

// buscamos todos los productos
export const getAllProducts = async() => {
    
    const queryAll = await getDocs(productsCollection);
    
    const products = [];
    queryAll.forEach((doc) => {
        console.log(doc);
        products.push({ id: doc.id, ...doc.data() });
    });
    return products;
};

// Guardo un producto en la base de datos
export const saveProduct = async(product)=> {

    const newProduct = await addDoc(productsCollection, product);
    return newProduct;
};

// Eliminamos el producto por su ID
export const deleteProduct = async (id) => {

    await deleteDoc(doc(productsCollection, id));
    return id;
};

