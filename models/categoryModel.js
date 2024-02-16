import pool from "../database.js";

const categoryModel = { 

    getCategories: async () => {
        const [rows] = await pool.query('SELECT * FROM categories') 
        return rows
    },

    getCategory: async (id) => {
        const [rows] = await pool.query('SELECT * FROM categories WHERE id = ?', [id]) 
        return rows[0]
    },

    deleteCategory: async (id) => {
        const [rows] = await pool.query('DELETE FROM categories WHERE id = ?', [id])
        console.log("Deleted categories")
        return categoryModel.getCategories() 
    },

    createCategory: async (category_name, state) => {
        const [result] = await pool.query('INSERT INTO categories (category_name, state) VALUES (?, ?)', [category_name, state])
        const id = result.insertId
        console.log("Added category")
        return categoryModel.getCategory(id)
    },
  
    modifyCategory: async (category_name, state, id) => {
        const [result] = await pool.query(`UPDATE categories SET category_name = ?, state = ? WHERE id = ?`, [category_name, state, id]);
        id = result.insertId
        console.log("Modified Category")
        return categoryModel.getCategories(id)
    } 
} 

export default categoryModel;