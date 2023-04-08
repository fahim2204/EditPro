import pool from "../lib/dbConnect.js";

export default {
  Create: (recordData, userid, cost, callback) => {
    pool.query(
      `INSERT INTO record SET ?; UPDATE user SET credit = credit - ? WHERE id = ? `,
      [recordData, cost, userid],
      callback
    );
  },
  Get:(userid, callback) => {
    pool.query("SELECT * FROM record WHERE fk_user_id = ? limit 10", [userid], callback);
  },
};
