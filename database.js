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

//
//
//
//NOS FALTA LA FUNCION PARA ACTUALIZAR LOS DATOS DEL USUARIO
//
//
//

//const note = await getNote(3)                  //guardo en variable el resultado de haber llamado la funcion
//const result = await createNote('test','test')  //con esta funcion creo otro objeto en el servidor
//console.log(note);    //la uso