import productModel from "../models/productModel.js";

const productController = {

    getProducts: async (req, res) => {
        try {
            const products = await productModel.getProducts()
            res.send(products)
        }catch (e) {
            console.error(e);
        }
    },

    getProduct: async (req, res) => {
        try {
            const id = req.params.id
            const product = await productModel.getProduct(id)
            res.send(product)
        }catch (e) {
            console.error(e);
        }
    }, 

    createProduct: async (req, res) => {
        try {
            const { product_name, product_description, product_category, product_price, product_stock, creation_date, state } = req.body
            const product = await productModel.createProduct(product_name, product_description, product_category, product_price, product_stock, creation_date, state)
            res.status(201).send(product)
        }catch (e) {
            console.error(e);
        }
    }, 

    deleteProduct: async (req, res) => {
        try {
            const id = req.params.id
            const product = await productModel.deleteProduct(id)
            res.send(product)
        }catch (e) {
            console.error(e);
        }
    }, 

    modifyProduct: async (req, res) => {
        try {
            const id = req.params.id
            const { product_name, product_description, product_category, product_price, product_stock, state} = req.body
            const products = await productModel.modifyProduct(product_name, product_description, product_category, product_price, product_stock, state, id)
            res.send(products)
        }catch (e) {
            console.error(e);
        }
    },

    modifyStock: async (req, res) => {
        try {
            const id = req.params.id
            const { product_stock, state } = req.body
            const products = await productModel.modifyStock(product_stock, state, id)
            res.send(products)
        }catch (e) {
            console.error(e);
        }
    },



}

export default productController;
