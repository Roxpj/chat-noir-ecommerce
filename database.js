//esta version de mysql es mas estable, importa una interfaz para interactuar con base de datos
import mysql from 'mysql2'   

//importamos la libreria de dotenv, con esto podemos usar los datos del servidor mysql en el pool, para saber mas, chequea el archivo .env
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host:     process.env.MYSQL_HOST,           
    user:     process.env.MYSQL_USER,          
    password: process.env.MYSQL_PASSWORD,  
    database: process.env.MYSQL_DATABASE    
}).promise();                    

//
//--------------------------------
//MECANICA PARA LA TABLA USUARIOS
//--------------------------------
//
/*
export async function getUsers() {
    const [rows] = await pool.query('SELECT * FROM users') 
    return rows
}

export async function getUser(id) {
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]) 
    return rows[0]
}

export async function deleteUser(id) {
    const [rows] = await pool.query('DELETE FROM users WHERE id = ?', [id])
    console.log("Deleted User")
    return getUsers() 
}

export async function createUser(user_name, user_email, user_password, rol, is_active) {
    const [result] = await pool.query('INSERT INTO users (user_name, user_email, user_password, rol, is_active) VALUES (?, ?, ?, ?, ?)', [user_name, user_email, user_password, rol, is_active])
    const id = result.insertId
    console.log("Added User")
    return getUser(id)
}

export async function modifyUser(user_name, user_email, user_password, is_active, id) {
    const [result] = await pool.query(`UPDATE users SET user_name = ?, user_email = ?, user_password = ?, is_active = ? WHERE id = ?`, [user_name, user_email, user_password, is_active, id]);
    id = result.insertId
    console.log("mODIFIED User")
    return getUser(id)
}
*/

//
//--------------------------------
//MECANICA PARA LA TABLA PRODUCTOS
//--------------------------------
//
/*
export async function getProducts() {
    const [rows] = await pool.query('SELECT * FROM products') 
    return rows
}

export async function getProduct(id) {
    const [rows] = await pool.query('SELECT * FROM products WHERE id = ?', [id]) 
    return rows[0]
}

export async function deleteProduct(id) {
    const [rows] = await pool.query('DELETE FROM products WHERE id = ?', [id])
    console.log("Deleted Product")
    return getProducts() 
}

export async function createProduct(product_name, product_description, product_category, product_price, product_stock, creation_date, state) {
    const [result] = await pool.query('INSERT INTO products (product_name, product_description, product_category, product_price, product_stock, creation_date, state) VALUES (?, ?, ?, ?, ?, ?, ?)', [product_name, product_description, product_category, product_price, product_stock, creation_date, state])
    const id = result.insertId
    console.log("Added product")
    return getProducts(id)
}

export async function modifyProduct(product_name, product_description, product_category, product_price, product_stock, state, id) {
    const [result] = await pool.query(`UPDATE products SET product_name = ?, product_description = ?, product_category = ?, product_price = ?, product_stock = ?, state = ? WHERE id = ?`, [product_name, product_description, product_category, product_price, product_stock, state, id]);
    id = result.insertId
    console.log("Modified product")
    return getProducts(id)
}

//
//--------------------------------
//MECANICA PARA LA TABLA CATEGORIAS
//--------------------------------
//
export async function getCategories() {
    const [rows] = await pool.query('SELECT * FROM categories') 
    return rows
}

export async function getCategory(id) {
    const [rows] = await pool.query('SELECT * FROM categories WHERE id = ?', [id]) 
    return rows[0]
}

export async function deleteCategory(id) {
    const [rows] = await pool.query('DELETE FROM categories WHERE id = ?', [id])
    console.log("Deleted category")
    return getCategories() 
}

export async function createCategory(category_name, state) {
    const [result] = await pool.query('INSERT INTO categories (category_name, state) VALUES (?, ?)', [category_name, state])
    const id = result.insertId
    console.log("Added category")
    return getCategory(id)
}

export async function modifyCategory(category_name, state, id) {
    const [result] = await pool.query(`UPDATE categories SET category_name = ?, state = ? WHERE id = ?`, [category_name, state, id]);
    id = result.insertId
    console.log("Modified Category")
    return getCategories(id)
}
*/
export default pool;