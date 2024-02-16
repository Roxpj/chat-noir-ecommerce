import pool from "../database.js";

const productModel = { 

    getProducts: async () => {
        const [rows] = await pool.query('SELECT * FROM products') 
        return rows
    },

    getProduct: async (id) => {
        const [rows] = await pool.query('SELECT * FROM products WHERE id = ?', [id]) 
        return rows[0]
    },

    deleteProduct: async (id) => {
        const [rows] = await pool.query('DELETE FROM products WHERE id = ?', [id])
        console.log("Deleted products")
        return productModel.getProducts() 
    },

    createProduct: async (product_name, product_description, product_category, product_price, product_stock, creation_date, state) => {
        const [result] = await pool.query('INSERT INTO products (product_name, product_description, product_category, product_price, product_stock, creation_date, state) VALUES (?, ?, ?, ?, ?, ?, ?)', [product_name, product_description, product_category, product_price, product_stock, creation_date, state])
        const id = result.insertId
        console.log("Added product")
        return productModel.getProducts(id)
    },
  
    modifyProduct: async (product_name, product_description, product_category, product_price, product_stock, state, id) => {
        const [result] = await pool.query(`UPDATE products SET product_name = ?, product_description = ?, product_category = ?, product_price = ?, product_stock = ?, state = ? WHERE id = ?`, [product_name, product_description, product_category, product_price, product_stock, state, id]);
        id = result.insertId
        console.log("Modified product")
        return productModel.getProducts(id)
    } 
} 

export default productModel;