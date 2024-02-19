import pool from "../database.js";

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


