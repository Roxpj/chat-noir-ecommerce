//esta version de mysql es mas estable, importa una interfaz para interactuar con base de datos
import mysql from 'mysql2'   

//importamos la libreria de dotenv, con esto podemos usar los datos del servidor mysql en el pool, para saber mas, chequea el archivo .env
import dotenv from 'dotenv'
dotenv.config()

//creacion de objeto pool de conecciones, este metodo es de mysql2, Un pool de conexiones es una forma eficiente de manejar múltiples conexiones a la base de datos y optimizar su reutilización
const pool = mysql.createPool({
    host:     process.env.MYSQL_HOST,           //esto es mejor que localhost
    user:     process.env.MYSQL_USER,           //mi usuario en mysql
    password: process.env.MYSQL_PASSWORD,   //mi clave, que esta vacia
    database: process.env.MYSQL_DATABASE    //la base de datos que quiero usar
}).promise();                    // indica que se desea utilizar el soporte de promesas de mysql2, permitiendo el uso de async/await para manejar las consultas de manera más concisa.


//
//--------------------------------
//MECANICA PARA LA TABLA USUARIOS
//--------------------------------
//
//funcion para OBTENER todos los elementos de la base de datos
export async function getUsers() {
    //Se está ejecutando una consulta SQL para seleccionar todos los registros de la tabla notes. La función query del objeto pool se utiliza para realizar consultas a la base de datos. Dado que se utilizó .promise() al crear el pool, se puede utilizar await para esperar a que la consulta se complete.
    const [rows] = await pool.query('SELECT * FROM users') 
    return rows
}
//funcion para OBTENER un usuario
export async function getUser(id) {
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]) 
    return rows[0]
}
//funcion para ELIMINAR elementos
export async function deleteUser(id) {
    const [rows] = await pool.query('DELETE FROM users WHERE id = ?', [id])
    console.log("Deleted User")
    return getUsers() 
}
//funcion para CREAR usuarios
export async function createUser(user_name, user_email, user_password, rol, is_active) {
    const [result] = await pool.query('INSERT INTO users (user_name, user_email, user_password, rol, is_active) VALUES (?, ?, ?, ?, ?)', [user_name, user_email, user_password, rol, is_active])
    const id = result.insertId
    console.log("Added User")
    return getUser(id)
}
//funcion para actualizar usuarios
export async function modifyUser(user_name, user_email, user_password, is_active, id) {
    const [result] = await pool.query(`UPDATE users SET user_name = ?, user_email = ?, user_password = ?, is_active = ? WHERE id = ?`, [user_name, user_email, user_password, is_active, id]);
    id = result.insertId
    console.log("mODIFIED User")
    return getUser(id)
}

//
//--------------------------------
//MECANICA PARA LA TABLA PRODUCTOS
//--------------------------------
//
export async function getProducts() {
    const [rows] = await pool.query('SELECT * FROM products') 
    return rows
}
//funcion para OBTENER un usuario
export async function getProduct(id) {
    const [rows] = await pool.query('SELECT * FROM products WHERE id = ?', [id]) 
    return rows[0]
}
//funcion para ELIMINAR elementos
export async function deleteProduct(id) {
    const [rows] = await pool.query('DELETE FROM products WHERE id = ?', [id])
    console.log("Deleted Product")
    return getProducts() 
}
//funcion para CREAR producto
export async function createProduct(product_name, product_description, product_category, product_price, product_stock, creation_date, state) {
    const [result] = await pool.query('INSERT INTO products (product_name, product_description, product_category, product_price, product_stock, creation_date, state) VALUES (?, ?, ?, ?, ?, ?, ?)', [product_name, product_description, product_category, product_price, product_stock, creation_date, state])
    const id = result.insertId
    console.log("Added product")
    return getProducts(id)
}
//funcion para actualizar usuarios
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
//funcion para OBTENER un category
export async function getCategory(id) {
    const [rows] = await pool.query('SELECT * FROM categories WHERE id = ?', [id]) 
    return rows[0]
}
//funcion para ELIMINAR elemento
export async function deleteCategory(id) {
    const [rows] = await pool.query('DELETE FROM categories WHERE id = ?', [id])
    console.log("Deleted category")
    return getCategories() 
}
//funcion para CREAR producto
export async function createCategory(category_name, state) {
    const [result] = await pool.query('INSERT INTO categories (category_name, state) VALUES (?, ?)', [category_name, state])
    const id = result.insertId
    console.log("Added category")
    return getCategory(id)
}
//funcion para actualizar usuarios
export async function modifyCategory(category_name, state, id) {
    const [result] = await pool.query(`UPDATE categories SET category_name = ?, state = ? WHERE id = ?`, [category_name, state, id]);
    id = result.insertId
    console.log("Modified Category")
    return getCategories(id)
}


//const note = await getNote(3)                  //guardo en variable el resultado de haber llamado la funcion
//const result = await createNote('test','test')  //con esta funcion creo otro objeto en el servidor
//console.log(note);    //la uso