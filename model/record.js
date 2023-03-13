import pool from "../lib/dbConnect.js";

export default {
  Create: (recordData, callback) => {
    pool.query("INSERT INTO record SET ?", recordData, callback);
  },
  Update: (recordData, id, callback) => {
    pool.query(
      "UPDATE record SET ? WHERE order_id = ?",
      [recordData, id],
      callback
    );
  },
};
