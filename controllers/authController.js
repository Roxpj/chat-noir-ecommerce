import pool from "../database.js";

/*
export default function authenticateUser(user_name, user_password, callback) {
  pool.query('SELECT * FROM users WHERE user_name = ? AND user_password = ?', [user_name, user_password], (err, results) => {
    if (err) throw err;
    if (results.length ===   0) {
      return callback(false, { message: 'Usuario o contraseña incorrectos' });
    }
    const user = results[0];
    return callback(user);
  });
}
*/

/*
const authenticateUser = async (user_name, user_password) => {
  try {
    const query = 'SELECT * FROM users WHERE user_name = ? AND user_password = ?';
    const [rows, fields] = await pool.execute(query, [user_name, user_password]);
    if (rows.length === 0) {
      return false;
    } else {
      return rows[0];
    }
  } catch (error) {
    throw error;
  }
};

export default authenticateUser;
*/

const authenticateUser = async (user_name, user_password) => {
  try {
    console.log('User name:', user_name);
    console.log('User password:', user_password);
    const query = 'SELECT * FROM users WHERE user_name = ? AND user_password = ?';
    const [rows, fields] = await pool.execute(query, [user_name, user_password]);
    if (rows.length === 0) {
      return false;
    } else {
      console.log(rows[0]);
      return rows[0];
    }
  } catch (error) {
    throw error;
  }
};

export default authenticateUser;


