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

//funcion asincrone de obtener todas las notas
export async function getNotes() {
    //Se está ejecutando una consulta SQL para seleccionar todos los registros de la tabla notes. La función query del objeto pool se utiliza para realizar consultas a la base de datos. Dado que se utilizó .promise() al crear el pool, se puede utilizar await para esperar a que la consulta se complete.
    const [rows] = await pool.query('SELECT * FROM notes') 
    return rows
}

//funcion asincrone de obtener una nota
export async function getNote(id) {
    const [rows] = await pool.query('SELECT * FROM notes WHERE id = ?', [id]) 
    return rows[0]
}

//funcion para crear notas, observa la sintaxis y percatate que la funcion inserta los datos en las respectivas columnas de la tabla
export async function createNote(title, contents) {
    const [result] = await pool.query('INSERT INTO notes (title, contents) VALUES (?, ?)', [title, contents])
    const id = result.insertId
    return getNote(id)
}

//const note = await getNote(3)                  //guardo en variable el resultado de haber llamado la funcion
//const result = await createNote('test','test')  //con esta funcion creo otro objeto en el servidor
//console.log(note);    //la uso