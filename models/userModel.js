import pool from "../database.js";

const userModel = { 

    getUsers: async () => {
        const [rows] = await pool.query('SELECT * FROM users') 
        return rows
    },

    getUser: async (id) => {
        const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]) 
        return rows[0]
    },

    deleteUser: async (id) => {
        const [rows] = await pool.query('DELETE FROM users WHERE id = ?', [id])
        console.log("Deleted User")
        return userModel.getUsers()
    },

    createUser: async (user_name, user_email, user_password, rol, is_active) => {
        const [result] = await pool.query('INSERT INTO users (user_name, user_email, user_password, rol, is_active) VALUES (?, ?, ?, ?, ?)', [user_name, user_email, user_password, rol, is_active])
        const id = result.insertId
        console.log("Added User")
        return userModel.getUser(id)
    },
  
    modifyUser: async (user_name, user_email, user_password, is_active, id) => {
        const [result] = await pool.query(`UPDATE users SET user_name = ?, user_email = ?, user_password = ?, is_active = ? WHERE id = ?`, [user_name, user_email, user_password, is_active, id]);
        id = result.insertId
        console.log("mODIFIED User")
        return userModel.getUser(id)
    } 
} 

export default userModel;